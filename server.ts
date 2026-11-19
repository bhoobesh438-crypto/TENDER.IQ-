import 'dotenv/config';
import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_MODEL = 'gemini-4-hydrogen';

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    throw Object.assign(
      new Error('Gemini API key is not configured. Please add GEMINI_API_KEY in Settings > Secrets.'),
      { statusCode: 503 }
    );
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

interface ComplianceContext {
  activeDossier?: {
    id?: string;
    bidder?: string;
    overall?: number;
    overallStatus?: string;
    pillars?: Array<{
      key: string;
      name: string;
      fullName: string;
      weight: number;
      percentage: number;
      status: string;
      checks: Array<{
        id: string;
        label: string;
        weight: number;
        status: string;
        note: string;
      }>;
    }>;
  };
  activePillarKey?: string;
  allDossiersSummary?: Array<{
    id: string;
    bidder: string;
    overall: number;
    overallStatus: string;
  }>;
  stagedDocuments?: Array<{
    name: string;
    category: string;
    size: string;
    tenderId: string;
    status: string;
  }>;
  userRole?: string | null;
  officerSignOff?: {
    officerName: string;
    officerRole: string;
    score: number;
    timestamp: string;
  } | null;
}

function buildSystemInstruction(ctx?: ComplianceContext): string {
  const serializedContext = ctx ? JSON.stringify(ctx, null, 2) : 'No active tender context supplied.';
  return [
    'You are the TENDER.iQ / BID VERIFICATION AI Compliance Assistant — an expert GovTech procurement and tender verification specialist.',
    'Motto: "Automate Verification. Build Trust."',
    '',
    'Your role is to help Government Tender Officers, Evaluation Teams, and Business Bidders clarify doubts regarding:',
    '1. Statutory tender compliance pillars: GST Verification (GSTIN active status, GSTR-3B filings, HSN/SAC alignment), PAN & Signatory Match (corporate PAN, board resolution, Form 26AS/TDS), Udyam MSME Registration (portal certificate, tier thresholds, NIC codes, EMD exemptions), Company Registration (MCA CIN, MOA/AOA object clauses, DIN KYC, Drugs/Works licenses), Document Validity & Seals (Class-3 DSC integrity, notarized affidavits, stamp duty, bank solvency, OEM authorizations), and Tender Eligibility (annual turnover, similar work completion orders, EMD/Bid Security).',
    '2. Interpreting live compliance percentages, why specific checks are marked "Manual Review" or "Non-Compliant", and exact remediation steps or verification procedures.',
    '3. Drafting professional clarification memos, officer review notes, and comparison summaries across active tender dossiers.',
    '',
    'Strict Governance Rules:',
    '- Always cite exact Tender IDs, bidder names, pillar percentages, check labels, and notes from the live workspace context below when answering.',
    '- Never fabricate statutory numbers or claim legal finality: clearly note that AI provides automated pre-screening and guidance, while final compliance verification authority rests strictly with authorized Government Officers.',
    '- Keep responses concise, well-structured (use short bullet points and bold headings), accurate, and directly actionable.',
    '',
    'LIVE WORKSPACE CONTEXT (JSON):',
    serializedContext,
  ].join('\n');
}

function extractErrorDetails(err: unknown): { status: number; message: string } {
  const e = err as { status?: number; statusCode?: number; message?: string };
  const rawMsg = e?.message || 'Unexpected error communicating with Gemini AI.';
  let status = e?.statusCode || e?.status || 500;

  if (/API_KEY_INVALID|API key not valid/i.test(rawMsg)) {
    return {
      status: 400,
      message: 'Invalid Gemini API key. Please check GEMINI_API_KEY in Settings > Secrets.',
    };
  }
  if (/PERMISSION_DENIED|403/i.test(rawMsg)) {
    return {
      status: 403,
      message: 'Permission denied by Gemini API. Please verify your API key in Settings > Secrets.',
    };
  }
  if (/RESOURCE_EXHAUSTED|429/i.test(rawMsg)) {
    return {
      status: 429,
      message: 'Gemini API rate limit or quota reached. Please wait a moment and try again.',
    };
  }
  if (/NOT_FOUND|404/i.test(rawMsg)) {
    return {
      status: 502,
      message: `Requested Gemini model (${GEMINI_MODEL}) was unavailable.`,
    };
  }
  if (status < 400 || status >= 600) status = 500;
  return { status, message: rawMsg };
}

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true, model: GEMINI_MODEL });
  });

  app.post('/api/ai/assist', async (req: Request, res: Response) => {
    try {
      const {
        message,
        history,
        complianceContext,
        mode,
      } = req.body as {
        message?: string;
        history?: ChatTurn[];
        complianceContext?: ComplianceContext;
        mode?: 'chat' | 'structured_audit';
      };

      const ai = getGeminiClient();
      const systemInstruction = buildSystemInstruction(complianceContext);

      if (mode === 'structured_audit') {
        const dossierId = complianceContext?.activeDossier?.id || 'Active Tender';
        const auditPrompt =
          message && message.trim()
            ? message.trim()
            : `Perform a structured compliance doubt-clarification audit for ${dossierId}. Summarize overall readiness, pinpoint every review/non-compliant risk, suggest exact clarification questions to issue to the bidder, provide an officer verification checklist, and identify the highest-priority pillar key (one of: gst, pan, udyam, company, validity, eligibility).`;

        const response = await ai.models.generateContent({
          model: GEMINI_MODEL,
          contents: auditPrompt,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                executiveSummary: {
                  type: Type.STRING,
                  description: 'Concise 2-sentence readiness summary referencing exact Tender ID and score.',
                },
                riskLevel: {
                  type: Type.STRING,
                  description: 'Low, Moderate, or High based on non-compliant and manual review items.',
                },
                criticalGaps: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Specific flagged or non-compliant checks with pillar name and impact.',
                },
                bidderClarifications: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Formal clarification points or missing documents to request from the bidder.',
                },
                officerChecklist: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Concrete verification actions for the Government Officer before final sign-off.',
                },
                priorityPillarKey: {
                  type: Type.STRING,
                  description: 'One of: gst, pan, udyam, company, validity, eligibility.',
                },
              },
              required: [
                'executiveSummary',
                'riskLevel',
                'criticalGaps',
                'bidderClarifications',
                'officerChecklist',
                'priorityPillarKey',
              ],
            },
          },
        });

        const rawJson = (response.text ?? '{}').trim();
        const audit = JSON.parse(rawJson);
        res.json({ mode: 'structured_audit', audit, model: GEMINI_MODEL });
        return;
      }

      if (!message || typeof message !== 'string' || !message.trim()) {
        res.status(400).json({ error: 'Please enter a question or compliance doubt.' });
        return;
      }

      const sanitizedHistory = Array.isArray(history)
        ? history
            .filter(
              (turn): turn is ChatTurn =>
                Boolean(turn) &&
                (turn.role === 'user' || turn.role === 'model') &&
                typeof turn.text === 'string' &&
                turn.text.trim().length > 0
            )
            .slice(-12)
            .map((turn) => ({
              role: turn.role,
              parts: [{ text: turn.text.trim() }],
            }))
        : [];

      const contents = [
        ...sanitizedHistory,
        { role: 'user', parts: [{ text: message.trim() }] },
      ];

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents,
        config: {
          systemInstruction,
        },
      });

      const reply = (response.text ?? '').trim();
      if (!reply) {
        res.status(502).json({ error: 'Gemini AI returned an empty response. Please try again.' });
        return;
      }

      res.json({ mode: 'chat', reply, model: GEMINI_MODEL });
    } catch (err) {
      const { status, message } = extractErrorDetails(err);
      res.status(status).json({ error: message });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response, next) => {
      if (req.originalUrl.startsWith('/api/')) {
        next();
        return;
      }
      try {
        const templatePath = path.resolve(__dirname, 'index.html');
        let html = fs.readFileSync(templatePath, 'utf-8');
        html = await vite.transformIndexHtml(req.originalUrl, html);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`TENDER.iQ server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start TENDER.iQ server:', err);
  process.exit(1);
});
