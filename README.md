!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 40' fill='none'%3E%3Cpath d='M13 13H8L5.5 10.5M12.5 18.5H6M13 24H8.5L6 26.5M35 13H40L42.5 10.5M35.5 18.5H42M35 24H39.5L42 26.5' stroke='%230284C7' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='4.5' cy='9.5' r='1.7' fill='%2338BDF8'/%3E%3Ccircle cx='4.5' cy='18.5' r='1.7' fill='%230284C7'/%3E%3Ccircle cx='5' cy='27.5' r='1.7' fill='%2338BDF8'/%3E%3Ccircle cx='43.5' cy='9.5' r='1.7' fill='%2338BDF8'/%3E%3Ccircle cx='43.5' cy='18.5' r='1.7' fill='%230284C7'/%3E%3Ccircle cx='43' cy='27.5' r='1.7' fill='%2338BDF8'/%3E%3Cpath d='M24 3L35.5 7.5V19.5C35.5 27.6 30.4 34 24 37C17.6 34 12.5 27.6 12.5 19.5V7.5L24 3Z' fill='%230A2558' stroke='%2338BDF8' stroke-width='2' stroke-linejoin='round'/%3E%3Cpath d='M18 10.5H26.5L30 14V27.5C30 28.3 29.3 29 28.5 29H18C17.2 29 16.5 28.3 16.5 27.5V12C16.5 11.2 17.2 10.5 18 10.5Z' fill='%23FFFFFF'/%3E%3Cpath d='M26.5 10.5V14H30' fill='%23CBD5E1'/%3E%3Cpath d='M19 16.5H26.5M19 20H25M19 23.5H23.5' stroke='%231E3A8A' stroke-width='1.7' stroke-linecap='round'/%3E%3Ccircle cx='30' cy='27' r='5.8' fill='%2316A34A' stroke='%23FFFFFF' stroke-width='1.5'/%3E%3Cpath d='M27.4 27L29.2 28.8L32.8 25.2' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" />
  <title>TENDER.iQ — Verify Smart. Bid Confidently</title>
  <meta name="description" content="TENDER.iQ is a user-friendly GovTech tender compliance platform with interactive AI verification charts, statutory document pre-screening, and officer-certified workflows." />
  <meta property="og:title" content="TENDER.iQ — Verify Smart. Bid Confidently" />
  <meta property="og:description" content="AI-assisted tender compliance verification for government departments, evaluation teams, and enterprise bidders. Final verification by authorized government officers." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts CDN: Outfit (Headings), Plus Jakarta Sans (Body), IBM Plex Sans (Header Brand), JetBrains Mono (Tabular Data) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS Official CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            navy: {
              950: '#050C18',
              900: '#0A1628',
              800: '#0F213E',
              700: '#17325C',
              600: '#1E437A'
            },
            cyanbrand: {
              400: '#22D3EE',
              500: '#06B6D4',
              600: '#0891B2'
            },
            crimson: {
              500: '#EF4444',
              600: '#DC2626',
              700: '#B91C1C'
            },
            silver: {
              50: '#F8FAFC',
              100: '#F1F5F9',
              200: '#E2E8F0',
              300: '#CBD5E1'
            }
          },
          fontFamily: {
            display: ['Outfit', 'system-ui', 'sans-serif'],
            sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            ibm: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    };
  </script>

  <style>
    :root {
      color-scheme: light;
    }
    html.dark {
      color-scheme: dark;
    }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    h1, h2, h3, h4, .font-display {
      font-family: 'Outfit', system-ui, sans-serif;
    }
    .tabular-nums {
      font-variant-numeric: tabular-nums;
    }
    .text-balance {
      text-wrap: balance;
    }
    .spa-section {
      display: none;
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 180ms cubic-bezier(0.16, 1, 0.3, 1), transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .spa-section.is-active {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }
    /* Custom subtle scrollbar for check lists */
    .thin-scroll::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .thin-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .thin-scroll::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.35);
      border-radius: 3px;
    }
    @media (prefers-reduced-motion: reduce) {
      .spa-section {
        transition: none;
      }
    }
  </style>
</head>
<body class="bg-silver-100 text-navy-900 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-200 min-h-screen">

  <!-- Mobile/Tablet Sidebar Backdrop -->
  <div id="sidebar-backdrop" onclick="toggleMobileSidebar(false)" class="hidden fixed inset-0 z-30 bg-navy-950/50 lg:hidden transition-opacity duration-200"></div>

  <!-- ===================================================================== -->
  <!-- FIXED ENTERPRISE LEFT VERTICAL SIDEBAR (260px Expanded / 72px Rail)   -->
  <!-- ===================================================================== -->
  <aside id="app-sidebar" aria-label="Enterprise Sidebar Navigation" class="fixed inset-y-0 left-0 z-40 w-[260px] flex flex-col bg-[#F4F5F7] dark:bg-[#0D1524] border-r border-[#E2E5EB] dark:border-slate-800 -translate-x-full lg:translate-x-0 transition-all duration-200">
    <!-- Sidebar Brand Header: Logo + BID VERIFICATION AI + Collapse Button -->
    <div class="h-16 px-4 border-b border-[#E2E5EB] dark:border-slate-800 flex items-center justify-between gap-2 shrink-0">
      <a href="#home" onclick="handleSidebarAction('dashboard'); return false;" class="flex items-center gap-2.5 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
        <svg class="w-9 h-8 shrink-0" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M13 12.5H8L5.5 10M12.5 17.5H6M12.5 22.5H7.5M13 27H8.5L6.5 29M35 12.5H40L42.5 10M35.5 17.5H42M35.5 22.5H40.5M35 27H39.5L41.5 29" stroke="#0284C7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="4.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="4.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
          <circle cx="6" cy="22.5" r="1.4" fill="#38BDF8"/>
          <circle cx="5.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="43.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="43.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
          <circle cx="42" cy="22.5" r="1.4" fill="#38BDF8"/>
          <circle cx="42.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <path d="M24 3L35.5 7.5V19.5C35.5 27.6 30.4 34 24 37C17.6 34 12.5 27.6 12.5 19.5V7.5L24 3Z" fill="#0A2558" stroke="#38BDF8" stroke-width="1.9" stroke-linejoin="round"/>
          <path d="M18 10.5H26.5L30 14V27.5C30 28.3 29.3 29 28.5 29H18C17.2 29 16.5 28.3 16.5 27.5V12C16.5 11.2 17.2 10.5 18 10.5Z" fill="#FFFFFF"/>
          <path d="M26.5 10.5V14H30" fill="#CBD5E1"/>
          <path d="M19 16H26.5M19 19.5H25.5M19 23H24" stroke="#1E3A8A" stroke-width="1.65" stroke-linecap="round"/>
          <circle cx="30" cy="27" r="5.6" fill="#16A34A" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M27.5 27L29.2 28.7L32.7 25.2" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div id="sidebar-brand-text" class="min-w-0">
          <div class="font-display text-[13px] font-bold tracking-tight text-navy-900 dark:text-white whitespace-nowrap truncate">TENDER.IQ</div>
          <div class="text-[10px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap truncate">Compliance Suite</div>
        </div>
      </a>
      <button type="button" id="sidebar-collapse-btn" onclick="toggleSidebarCollapse()" aria-label="Collapse or expand sidebar" title="Collapse sidebar" class="w-8 h-8 rounded-lg border border-[#DCE0E8] dark:border-slate-700 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 transition-colors flex items-center justify-center shrink-0">
        <svg id="sidebar-collapse-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
    </div>

    <!-- Scrollable Navigation Tree -->
    <nav id="sidebar-nav-tree" class="flex-1 overflow-y-auto thin-scroll px-3 py-4 space-y-4">
      <!-- Rendered dynamically by JS (5 expandable categories, 21 items) -->
    </nav>

    <!-- Bottom User Account Strip -->
    <div class="p-3 border-t border-[#E2E5EB] dark:border-slate-800 shrink-0 bg-[#ECEEF2]/70 dark:bg-[#0A111E]">
      <button type="button" id="sidebar-user-btn" onclick="handleSidebarAction('user-profile')" class="w-full flex items-center gap-2.5 p-2 rounded-lg text-left hover:bg-white dark:hover:bg-navy-900 border border-transparent hover:border-[#DCE0E8] dark:hover:border-slate-800 transition-colors">
        <div id="sidebar-user-avatar" class="w-8 h-8 rounded-lg bg-blue-600 text-white font-display text-xs font-bold flex items-center justify-center shrink-0">GV</div>
        <div id="sidebar-user-meta" class="min-w-0 flex-1">
          <div id="sidebar-user-name" class="text-xs font-semibold text-navy-900 dark:text-white truncate">Guest Officer</div>
          <div id="sidebar-user-role" class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Sign in to verify</div>
        </div>
      </button>
    </div>
  </aside>

  <!-- Main Independent Content Shell -->
  <div id="app-main-shell" class="min-h-screen flex flex-col lg:pl-[260px] transition-[padding] duration-200">

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-20 border-b border-silver-200 dark:border-slate-800/80 bg-white/95 dark:bg-navy-950/95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
      <!-- Zone 1: Mobile Sidebar Drawer Trigger + Brand Wordmark -->
      <div class="flex items-center gap-3 shrink-0">
        <button type="button" id="mobile-sidebar-btn" onclick="toggleMobileSidebar(true)" aria-label="Open Navigation Sidebar" class="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-900 text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <a href="#home" onclick="navigateTo('home'); return false;" class="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-0.5">
          <svg class="w-11 h-9 shrink-0 drop-shadow-sm" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="tiqCrestGrad" x1="8" y1="3" x2="38" y2="37" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#0F2C6B" />
                <stop offset="55%" stop-color="#1D4ED8" />
                <stop offset="100%" stop-color="#0284C7" />
              </linearGradient>
              <linearGradient id="tiqScanBeam" x1="14" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#38BDF8" stop-opacity="0" />
                <stop offset="50%" stop-color="#22D3EE" stop-opacity="1" />
                <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="tiqSealGrad" x1="27" y1="22" x2="39" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#22C55E" />
                <stop offset="100%" stop-color="#15803D" />
              </linearGradient>
            </defs>
            <!-- Outer GovTech Compliance Shield Crest -->
            <path d="M23 2.5L36.5 7.4V19.6C36.5 28.4 30.8 35.1 23 38.2C15.2 35.1 9.5 28.4 9.5 19.6V7.4L23 2.5Z" fill="url(#tiqCrestGrad)" stroke="#38BDF8" stroke-width="1.6" stroke-linejoin="round" />
            <!-- Inner Precision Crest Frame -->
            <path d="M23 5.2L34 9.2V19.4C34 26.8 29.3 32.4 23 35.2C16.7 32.4 12 26.8 12 19.4V9.2L23 5.2Z" stroke="#93C5FD" stroke-opacity="0.38" stroke-width="0.9" stroke-linejoin="round" />
            <!-- Tender Bid Dossier Sheet -->
            <path d="M16.5 10.5H25.2L29.5 14.8V27.2C29.5 28.1 28.8 28.8 27.9 28.8H16.5C15.6 28.8 14.9 28.1 14.9 27.2V12.1C14.9 11.2 15.6 10.5 16.5 10.5Z" fill="#FFFFFF" />
            <path d="M25.2 10.5V14.8H29.5L25.2 10.5Z" fill="#BFDBFE" />
            <!-- Bid Clause & Statutory Pillar Bars -->
            <path d="M17.5 16.2H24.5M17.5 19.6H26.5M17.5 23H22.8" stroke="#1E3A8A" stroke-width="1.6" stroke-linecap="round" />
            <!-- AI Verification Scan Laser Across Bid Document -->
            <path d="M12.5 17.8H33.5" stroke="url(#tiqScanBeam)" stroke-width="2" stroke-linecap="round" />
            <!-- Left AI Circuit Audit Pins -->
            <path d="M9.5 14H5.8L4 12.2M9.5 19.5H4.2M9.5 25H6.2L4.5 26.8" stroke="#0284C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="3.6" cy="11.8" r="1.4" fill="#38BDF8" />
            <circle cx="3.6" cy="19.5" r="1.4" fill="#0284C7" />
            <circle cx="4.1" cy="27.2" r="1.4" fill="#38BDF8" />
            <!-- Top-Right AI Intelligence Star Sparkle -->
            <path d="M39.5 4.5L40.5 7.5L43.5 8.5L40.5 9.5L39.5 12.5L38.5 9.5L35.5 8.5L38.5 7.5L39.5 4.5Z" fill="#38BDF8" />
            <!-- Bottom-Right Verified Tender Stamp / Checkmark Seal -->
            <circle cx="32.5" cy="27.5" r="6.3" fill="url(#tiqSealGrad)" stroke="#FFFFFF" stroke-width="1.6" />
            <path d="M29.6 27.5L31.6 29.5L35.6 25.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="font-sans text-xl sm:text-[22px] font-extrabold tracking-[-0.03em] text-navy-900 dark:text-white leading-none">
            TENDER<span class="text-blue-600 dark:text-cyanbrand-400">.iQ</span>
          </span>
        </a>
      </div>

      <!-- Zone 2: 5 Single-line Navigation Links -->
      <nav aria-label="Primary Navigation" class="hidden md:flex items-center gap-7 text-sm font-medium">
        <button type="button" data-nav="home" onclick="navigateTo('home')" class="nav-link py-1.5 border-b-2 border-cyanbrand-500 text-navy-900 dark:text-white transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          Home
        </button>
        <button type="button" data-nav="catalog" onclick="navigateTo('catalog')" class="nav-link py-1.5 border-b-2 border-transparent text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          Catalog
        </button>
        <button type="button" data-nav="about" onclick="navigateTo('about')" class="nav-link py-1.5 border-b-2 border-transparent text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          About
        </button>
        <button type="button" data-nav="booking" onclick="navigateTo('booking')" class="nav-link py-1.5 border-b-2 border-transparent text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          Contact
        </button>
        <button type="button" id="nav-auth-btn" onclick="openAuthModal('login')" class="py-1.5 border-b-2 border-transparent text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 max-w-[140px] truncate focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          Sign In
        </button>
      </nav>

      <!-- Zone 3: Primary CTA -->
      <div class="flex items-center gap-2.5 shrink-0">
        <button type="button" id="mobile-auth-btn" onclick="openAuthModal('login')" class="md:hidden inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-lg border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-white hover:border-blue-500 transition-colors whitespace-nowrap shrink-0">
          Sign In / Account
        </button>
        <button type="button" onclick="navigateTo('booking')" class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500">
          Book Verification
        </button>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <!-- ===================================================================== -->
    <!-- SECTION 1: HERO / HOME + 3D AI COMPLIANCE DASHBOARD                   -->
    <!-- ===================================================================== -->
    <section id="section-home" class="spa-section is-active">
      <!-- Hero Banner -->
      <div class="border-b border-silver-200 dark:border-slate-800/80 bg-white dark:bg-navy-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <!-- Utility Bar: Motto + Theme Switch -->
          <div class="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-silver-200 dark:border-slate-800/80">
            <div class="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
              <span class="font-semibold text-navy-900 dark:text-cyanbrand-400">Verify Smart. Bid Confidently</span>
              <span aria-hidden="true" class="text-slate-400">·</span>
              <span>AI Pre-Screening · Final Approval by Government Officers</span>
            </div>
            <div class="ml-auto flex items-center justify-end gap-2 shrink-0">
              <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">Theme:</span>
              <button type="button" id="theme-toggle-btn" onclick="toggleTheme()" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-800 text-xs font-medium text-navy-900 dark:text-slate-200 hover:border-cyanbrand-500 transition-colors whitespace-nowrap shrink-0">
                <span id="theme-icon" aria-hidden="true">☾</span>
                <span id="theme-label">Dark Mode</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <!-- Left Hero Copy -->
            <div class="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-3">
                  Enterprise GovTech Procurement Assurance
                </p>
                <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-navy-900 dark:text-white leading-[1.08] text-balance mb-5">
                  Precision Tender Compliance Built for Public Trust
                </h1>
                <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
                  TENDER.iQ simplifies statutory document pre-screening across GST, PAN, Udyam, corporate filings, and eligibility criteria—helping government officers, evaluation committees, and bidders spot compliance gaps clearly before final officer sign-off.
                </p>
                <div class="flex flex-wrap items-center gap-4">
                  <a href="#compliance-3d-dashboard" class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold bg-crimson-600 text-white hover:bg-crimson-700 dark:bg-crimson-600 dark:hover:bg-crimson-500 transition-colors whitespace-nowrap shrink-0">
                    Open Compliance Dashboard
                  </a>
                  <button type="button" onclick="navigateTo('catalog')" class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white hover:border-navy-900 dark:hover:border-cyanbrand-400 transition-colors whitespace-nowrap shrink-0">
                    Explore Verification Modules
                  </button>
                </div>
              </div>

              <!-- Governance Assurance Line -->
              <div class="mt-8 pt-6 border-t border-silver-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div class="font-mono text-xl font-bold text-navy-900 dark:text-cyanbrand-400 tabular-nums">6 Pillars</div>
                  <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Statutory &amp; financial document checks</div>
                </div>
                <div>
                  <div class="font-mono text-xl font-bold text-navy-900 dark:text-white tabular-nums">&lt; 20 sec</div>
                  <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Automated AI dossier pre-screening</div>
                </div>
                <div>
                  <div class="font-mono text-xl font-bold text-crimson-600 dark:text-crimson-500 tabular-nums">100% Officer</div>
                  <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Mandatory human verification sign-off</div>
                </div>
              </div>
            </div>

            <!-- Right Hero Architectural Visual -->
            <div class="lg:col-span-5 flex flex-col">
              <div class="relative rounded-xl overflow-hidden border border-silver-200 dark:border-slate-800 bg-navy-950 h-64 sm:h-80 lg:h-full min-h-[280px]">
                <img
                  src="/src/assets/images/hero_govtech_verification_1795075330864.jpg"
                  alt="Government procurement and compliance verification command center"
                  referrerpolicy="no-referrer"
                  onerror="handleImgError(this, 'BIDVERIFY AI Command Center')"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-transparent flex flex-col justify-end p-5">
                  <div class="text-xs font-medium text-cyanbrand-400">Governance Principle</div>
                  <p class="text-sm font-medium text-white mt-1 leading-snug">
                    AI surfaces discrepancy evidence; authorized Government Officers execute final compliance verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- =================================================================== -->
      <!-- INTEGRATED 3D ANIMATED AI COMPLIANCE PERCENTAGE VISUALIZATION       -->
      <!-- =================================================================== -->
      <div id="compliance-3d-dashboard" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Dashboard Header + Tender Selector -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-5">
          <div>
            <p class="text-xs font-semibold tracking-wide text-cyanbrand-600 dark:text-cyanbrand-400 mb-2">
              Interactive Tender Pre-Check
            </p>
            <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white text-balance">
              Live Tender Compliance Dashboard
            </h2>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-1.5 max-w-2xl">
              Pick a tender dossier below, then click any bar or pillar card to inspect checks, test status updates, or compare all tenders.
            </p>
          </div>

          <!-- Demo Tender Bid Switcher + Scan Action -->
          <div class="flex flex-wrap items-center gap-3">
            <label for="dossier-select" class="sr-only">Select Tender Dossier</label>
            <select id="dossier-select" onchange="selectDossier(this.value)" class="px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-xs sm:text-sm font-medium text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500">
              <option value="nhai">NHAI-2026-441 · Apex Infra Solutions</option>
              <option value="gem">GEM-2026-892 · Bharat MedTech Systems</option>
              <option value="pwd">PWD-2026-118 · Vertex Civil Contractors</option>
            </select>
            <button type="button" onclick="runSimulatedAIScan()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-cyanbrand-500 text-navy-950 hover:bg-cyanbrand-400 transition-colors whitespace-nowrap shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Re-Run AI Scan
            </button>
            <button type="button" onclick="openAIAssistant()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              Ask AI Assistance
            </button>
          </div>
        </div>

        <!-- Quick-Start Guide & Instant Task Shortcuts -->
        <div class="mb-6 p-3.5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <span class="font-semibold text-navy-900 dark:text-white">Quick Guide:</span>
            <span><strong class="font-mono text-blue-600 dark:text-cyanbrand-400">1.</strong> Choose tender</span>
            <span class="text-slate-300 dark:text-slate-700">·</span>
            <span><strong class="font-mono text-blue-600 dark:text-cyanbrand-400">2.</strong> Click any bar or pillar to inspect checks</span>
            <span class="text-slate-300 dark:text-slate-700">·</span>
            <span><strong class="font-mono text-blue-600 dark:text-cyanbrand-400">3.</strong> Compare Matrix or Download Report</span>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button type="button" onclick="handleSidebarAction('compliance-matrix')" class="px-3 py-1.5 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors whitespace-nowrap">
              Compare Matrix
            </button>
            <button type="button" onclick="downloadComplianceReport()" class="px-3 py-1.5 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors whitespace-nowrap">
              Download Brief (.txt)
            </button>
          </div>
        </div>

        <!-- Main 3D Viewport + Live Officer Audit Workbench -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
          <!-- 3D Three.js Stage (7 cols on XL) -->
          <div class="xl:col-span-7 flex flex-col">
            <div id="three-stage-wrapper" class="relative w-full h-[560px] sm:h-[580px] rounded-xl overflow-hidden border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-[#0D1522] select-none">
              <!-- Isolated Simple 2D Canvas Mount Container -->
              <div id="three-canvas-mount" class="absolute inset-0 w-full h-full"></div>

              <!-- Fallback 2D Container -->
              <div id="webgl-fallback" class="hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-silver-50 dark:bg-[#0D1522] text-navy-900 dark:text-white">
                <div class="w-28 h-28 rounded-full border-4 border-cyanbrand-500 flex items-center justify-center font-mono text-3xl font-bold tabular-nums mb-4" id="fallback-score">0%</div>
                <h3 class="font-display text-lg font-semibold">Simple 2D Compliance Gauge</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">All live verification metrics remain fully operational in the audit panel.</p>
              </div>

              <!-- Top-Left Minimal Spec Bar -->
              <div class="pointer-events-none absolute top-4 left-4 right-4 flex items-start justify-between gap-4 z-10">
                <div class="px-3.5 py-2 rounded-lg border border-silver-200 dark:border-slate-800 bg-white/95 dark:bg-[#131D2E]/95 text-navy-900 dark:text-white">
                  <div class="text-[11px] font-medium text-cyanbrand-600 dark:text-cyanbrand-400">Active Tender Pre-Screen</div>
                  <div id="hud-tender-title" class="text-xs sm:text-sm font-semibold mt-0.5 truncate max-w-[240px] sm:max-w-xs">NHAI-2026-441 · Apex Infra Solutions</div>
                </div>
                <div class="px-3 py-2 rounded-lg border border-silver-200 dark:border-slate-800 bg-white/95 dark:bg-[#131D2E]/95 text-right hidden sm:block">
                  <div class="text-[11px] text-slate-500 dark:text-slate-400">Compliance Scale</div>
                  <div class="flex items-center gap-3 text-[11px] font-medium mt-0.5">
                    <span class="text-emerald-600 dark:text-emerald-400">Compliant &ge;80%</span>
                    <span class="text-amber-600 dark:text-amber-400">Review 50–79%</span>
                    <span class="text-red-600 dark:text-red-400">Alert &lt;50%</span>
                  </div>
                </div>
              </div>

              <!-- Central Gauge Score Readout (shown only in 2D Ring mode) -->
              <div id="center-score-hud" class="hidden pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 text-center" style="left: 50%; top: 50%;">
                <div class="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">Compliance</div>
                <div id="center-score-value" class="font-mono text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tabular-nums leading-none my-1">0%</div>
                <div id="center-score-status" class="text-[11px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">Compliant</div>
              </div>

              <!-- 6 Stationary 2D Pillar Cards -->
              <div id="floating-indicators-layer" class="pointer-events-none absolute inset-x-3 sm:inset-x-4 top-[76px] bottom-[62px] z-10 flex flex-col justify-end sm:block"></div>

              <!-- Compact Minimal 2D Bottom Control Bar -->
              <div id="three-dock-container" class="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center" style="max-width: min(580px, 96%);">
                <button type="button" id="dock-toggle-btn" onclick="toggleControlDock()" class="px-3 py-0.5 rounded-t-md border border-b-0 border-silver-200 dark:border-slate-800 bg-white/95 dark:bg-[#131D2E]/95 text-[10px] font-medium text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap">
                  ▾ Hide Controls
                </button>
                <div id="three-dock-body" class="flex flex-wrap items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-silver-200 dark:border-slate-800 bg-white/95 dark:bg-[#131D2E]/95 shadow-sm">
                  <button type="button" id="mode-btn-bars" onclick="set2DChartMode('bars')" class="px-2.5 py-1 rounded text-xs font-semibold bg-blue-600 text-white transition-colors whitespace-nowrap">
                    Bar Graph
                  </button>
                  <button type="button" id="mode-btn-graph" onclick="set2DChartMode('graph')" class="px-2.5 py-1 rounded text-xs font-medium bg-silver-100 dark:bg-slate-800 text-navy-900 dark:text-slate-200 border border-silver-300 dark:border-slate-700 hover:border-blue-500 transition-colors whitespace-nowrap">
                    Graph Chart
                  </button>
                  <button type="button" id="mode-btn-all_tenders" onclick="set2DChartMode('all_tenders')" class="px-2.5 py-1 rounded text-xs font-medium bg-silver-100 dark:bg-slate-800 text-navy-900 dark:text-slate-200 border border-silver-300 dark:border-slate-700 hover:border-blue-500 transition-colors whitespace-nowrap">
                    All Tenders
                  </button>
                  <button type="button" id="mode-btn-donut" onclick="set2DChartMode('donut')" class="px-2.5 py-1 rounded text-xs font-medium bg-silver-100 dark:bg-slate-800 text-navy-900 dark:text-slate-200 border border-silver-300 dark:border-slate-700 hover:border-blue-500 transition-colors whitespace-nowrap">
                    2D Ring
                  </button>
                  <button type="button" onclick="runSimulatedAIScan()" class="px-2.5 py-1 rounded text-xs font-medium bg-navy-900 text-white dark:bg-cyanbrand-500 dark:text-navy-950 hover:opacity-90 transition-opacity whitespace-nowrap">
                    Replay
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Panel: Dynamic Verification Pillars & Officer Check Controls (5 cols on XL) -->
          <div class="xl:col-span-5 flex flex-col rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden">
            <!-- Summary Header -->
            <div class="p-5 border-b border-silver-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div class="text-xs font-medium text-slate-500 dark:text-slate-400">Verification Breakdown</div>
                <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white">6 Statutory Compliance Pillars</h3>
              </div>
              <div class="text-right">
                <div class="text-xs text-slate-500 dark:text-slate-400">Overall Score</div>
                <div id="panel-overall-score" class="font-mono text-2xl font-bold text-navy-900 dark:text-cyanbrand-400 tabular-nums">0%</div>
              </div>
            </div>

            <!-- 6 Category Selector Rows (Dynamically Calculated) -->
            <div id="pillars-summary-list" class="p-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2 gap-2.5 border-b border-silver-200 dark:border-slate-800 bg-silver-50/70 dark:bg-navy-950/40">
              <!-- Populated dynamically by JS -->
            </div>

            <!-- Active Pillar Granular Checks (Officer Can Toggle Statuses!) -->
            <div class="p-5 flex-1 flex flex-col">
              <div class="flex items-center justify-between gap-3 mb-3">
                <div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">Inspecting Pillar</div>
                  <h4 id="active-pillar-title" class="font-display text-base font-semibold text-navy-900 dark:text-white">GST Verification</h4>
                </div>
                <div class="flex items-center gap-2.5 shrink-0">
                  <span id="active-pillar-score" class="font-mono text-base font-bold tabular-nums text-emerald-600 dark:text-emerald-400">0% · Compliant</span>
                  <button type="button" onclick="askAIAssistantForActivePillar()" title="Clarify this pillar with AI Assistant" class="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-blue-200 dark:border-blue-700/60 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors whitespace-nowrap">
                    Clarify with AI
                  </button>
                </div>
              </div>

              <div id="pillar-checks-list" class="space-y-2.5 flex-1 overflow-y-auto thin-scroll max-h-[210px] pr-1">
                <!-- Populated dynamically by JS -->
              </div>

              <!-- Officer Session & Sign-Off Bar -->
              <div id="officer-auth-bar" class="mt-4 pt-3 border-t border-silver-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div id="officer-session-info" class="text-slate-600 dark:text-slate-300">
                  Guest Preview · Sign in to record officer sign-off
                </div>
                <div id="officer-session-actions" class="flex items-center gap-2">
                  <button type="button" onclick="openAuthModal('login')" class="px-3 py-1.5 rounded-md font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap">
                    Sign In
                  </button>
                </div>
              </div>

              <!-- Mandatory Officer Governance Note -->
              <div class="mt-3 pt-3 border-t border-silver-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong class="text-navy-900 dark:text-white">Officer Governance Notice:</strong> AI scores reflect automated pre-screening only. Government Officers may update any check status above and must perform final legal verification before tender award.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 Feature Highlight Cards (Hero/Home Section Requirement) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div class="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-silver-200 dark:border-slate-800 pt-12">
          <div>
            <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-1.5">Platform Capabilities</p>
            <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
              End-to-End Tender Verification Architecture
            </h2>
          </div>
          <button type="button" onclick="navigateTo('catalog')" class="text-sm font-semibold text-navy-900 dark:text-cyanbrand-400 hover:underline whitespace-nowrap shrink-0 self-start sm:self-auto">
            View Full Service Catalog &rarr;
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-semibold text-cyanbrand-600 dark:text-cyanbrand-400 mb-2">01 · Statutory Cross-Check</div>
              <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2">GST, PAN &amp; Udyam Sync</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Validates bidder GSTIN active standing, signatory PAN alignment, and MSME Udyam registration codes against tender terms.
              </p>
            </div>
            <div class="mt-5 pt-4 border-t border-silver-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Pre-screened for Tender Officers
            </div>
          </article>

          <article class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-semibold text-cyanbrand-600 dark:text-cyanbrand-400 mb-2">02 · Corporate Integrity</div>
              <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2">MCA &amp; Eligibility Audits</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Extracts turnover statements, work completion certificates, and corporate registration records into one unified scoring matrix.
              </p>
            </div>
            <div class="mt-5 pt-4 border-t border-silver-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Built for Evaluation Teams
            </div>
          </article>

          <article class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-semibold text-cyanbrand-600 dark:text-cyanbrand-400 mb-2">03 · Document Forensics</div>
              <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2">Validity &amp; Seal Inspection</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Detects expired certificates, mismatched digital signatures, and missing notarized annexes before submission deadlines close.
              </p>
            </div>
            <div class="mt-5 pt-4 border-t border-silver-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Supports Bidders &amp; Departments
            </div>
          </article>

          <article class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono font-semibold text-crimson-600 dark:text-crimson-500 mb-2">04 · Human Authority</div>
              <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white mb-2">Officer Sign-Off Workflow</h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                AI never issues final rejection or award rulings. Every flagged or compliant file routes directly to an authorized Government Officer.
              </p>
            </div>
            <div class="mt-5 pt-4 border-t border-silver-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              100% Officer-Verified Decisions
            </div>
          </article>
        </div>

        <!-- 4-Stage End-to-End Tender Verification Lifecycle -->
        <div class="mt-14 pt-12 border-t border-silver-200 dark:border-slate-800/80">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p class="text-xs font-semibold tracking-wide text-blue-600 dark:text-cyanbrand-400 mb-1.5">
                Standard Operating Process
              </p>
              <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
                How TENDER.iQ Verifies Every Bid Dossier
              </h2>
            </div>
            <button type="button" onclick="navigateTo('booking')" class="text-sm font-semibold text-navy-900 dark:text-cyanbrand-400 hover:underline whitespace-nowrap shrink-0 self-start sm:self-auto">
              Request Department Onboarding →
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400">STAGE 01</span>
                <span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">Intake &amp; OCR</span>
              </div>
              <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-1.5">Dossier Parsing</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Ingests bidder PDFs, scanned statutory certificates, e-BG receipts, and Class-3 DSC annexes into structured compliance records.
              </p>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400">STAGE 02</span>
                <span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">Cross-Check</span>
              </div>
              <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-1.5">Statutory Validation</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Cross-verifies GSTIN filing continuity, corporate PAN &amp; TDS status, Udyam NIC codes, and active MCA CIN/DIN standing.
              </p>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">STAGE 03</span>
                <span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">Scoring Matrix</span>
              </div>
              <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-1.5">Weighted Risk Flagging</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Calculates real-time 6-pillar scores and highlights low-contrast seals, expired dates, or turnover shortfalls for scrutiny.
              </p>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-crimson-600 dark:text-crimson-500">STAGE 04</span>
                <span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">Final Authority</span>
              </div>
              <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-1.5">Officer Sign-Off</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Routes the pre-verified audit dossier to an authorized Government Officer for mandatory final review, remarking, and sign-off.
              </p>
            </div>
          </div>
        </div>

        <!-- 6-Pillar Statutory Weight & Document Reference Guide -->
        <div class="mt-14 pt-12 border-t border-silver-200 dark:border-slate-800/80">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-1.5">
                Scoring Rubric &amp; Statutory Reference
              </p>
              <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
                6-Pillar Compliance Weights &amp; Required Documents
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300 mt-1.5 max-w-2xl">
                Every tender evaluation combines six weighted pillars totaling 100%. Threshold bands: <span class="font-mono font-semibold text-emerald-600 dark:text-emerald-400">Compliant ≥ 80%</span>, <span class="font-mono font-semibold text-amber-600 dark:text-amber-400">Manual Review 50–79%</span>, and <span class="font-mono font-semibold text-red-600 dark:text-red-400">Alert &lt; 50%</span>.
              </p>
            </div>
            <button type="button" onclick="openAIAssistant()" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-blue-500 transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto">
              Ask AI Assistance About Rules →
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">1. GST Verification</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 18%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Validates active GSTIN registration, 12-month GSTR-3B return regularity, and HSN/SAC code match against tender scope.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: GSTIN Certificate · GSTR-3B Summary
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">2. PAN &amp; Signatory Match</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 16%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Confirms entity PAN alignment with incorporation records, authorized signatory board resolution, and Form 26AS TDS standing.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: Corporate PAN · Board Resolution · 26AS
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">3. Udyam MSME Status</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 14%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Verifies QR-authentic Udyam certificate, Micro/Small/Medium enterprise tier, and NIC code relevance for EMD exemptions.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: Udyam Certificate · NIC Activity Annex
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">4. Company Registration (MCA)</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 18%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Inspects active ROC corporate status, MOA/AOA object clause coverage, and Director DIN/KYC compliance standing.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: CIN Incorporation · MOA/AOA · DIN KYC
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">5. Document Validity &amp; Seals</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 16%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Checks Class-3 DSC cryptographic hashes, stamp duty windows on affidavits, and branch seal legibility on bank solvency letters.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: Class-3 DSC · Affidavit · Bank Solvency
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between gap-3 mb-2">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">6. Tender Eligibility Criteria</h3>
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-cyanbrand-400 tabular-nums">Weight: 18%</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Evaluates 3-year audited annual turnover, similar completed work orders, and valid EMD / electronic Bank Guarantee references.
              </p>
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Docs: Audited Financials · Work Orders · e-BG
              </div>
            </div>
          </div>
        </div>

        <!-- Procurement & Compliance FAQ Accordion -->
        <div class="mt-14 pt-12 border-t border-silver-200 dark:border-slate-800/80">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500">
                Platform &amp; Policy Guide
              </p>
              <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Essential details on how TENDER.iQ supports public procurement teams and bidders while preserving statutory governance.
              </p>
              <div class="pt-2 flex flex-wrap gap-2.5">
                <button type="button" onclick="openAIAssistant()" class="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Clarify Doubt with AI Assistance
                </button>
                <button type="button" onclick="navigateTo('about')" class="px-4 py-2 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-white hover:border-blue-500 transition-colors">
                  Governance Policy
                </button>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-3" id="website-faq-list">
              <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden">
                <button type="button" onclick="toggleFaqItem(this)" aria-expanded="true" class="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-display text-sm sm:text-base font-semibold text-navy-900 dark:text-white hover:bg-silver-50 dark:hover:bg-navy-800/40 transition-colors">
                  <span>Can TENDER.iQ automatically reject or disqualify a tender bid?</span>
                  <svg class="faq-chevron w-4 h-4 shrink-0 text-slate-400 transition-transform rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-panel px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-silver-100 dark:border-slate-800/80 pt-3">
                  No. TENDER.iQ strictly operates as an AI pre-screening and verification intelligence layer. It extracts fields, calculates weighted compliance indicators, and flags potential discrepancies, but 100% of final qualification, rejection, or tender award authority belongs to authorized Government Officers.
                </div>
              </div>

              <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden">
                <button type="button" onclick="toggleFaqItem(this)" aria-expanded="false" class="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-display text-sm sm:text-base font-semibold text-navy-900 dark:text-white hover:bg-silver-50 dark:hover:bg-navy-800/40 transition-colors">
                  <span>How are the 6-pillar compliance percentages calculated?</span>
                  <svg class="faq-chevron w-4 h-4 shrink-0 text-slate-400 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-panel hidden px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-silver-100 dark:border-slate-800/80 pt-3">
                  Each statutory pillar contains weighted sub-checks scored dynamically (Compliant = 100%, Manual Review = 55%, Non-Compliant = 0%). The overall tender readiness percentage aggregates all 6 pillars using their official weights: GST (18%), PAN (16%), Udyam (14%), Company Registration (18%), Document Validity (16%), and Tender Eligibility (18%).
                </div>
              </div>

              <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden">
                <button type="button" onclick="toggleFaqItem(this)" aria-expanded="false" class="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-display text-sm sm:text-base font-semibold text-navy-900 dark:text-white hover:bg-silver-50 dark:hover:bg-navy-800/40 transition-colors">
                  <span>Which procurement portals and bidder categories does the platform support?</span>
                  <svg class="faq-chevron w-4 h-4 shrink-0 text-slate-400 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-panel hidden px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-silver-100 dark:border-slate-800/80 pt-3">
                  TENDER.iQ is built for central and state procurement workflows including NHAI civil tenders, GeM medical and equipment procurement, and PWD infrastructure bids. It validates standard statutory PDFs, Class-3 DSC signatures, MSME Udyam EMD exemptions, and e-BG references.
                </div>
              </div>

              <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden">
                <button type="button" onclick="toggleFaqItem(this)" aria-expanded="false" class="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-display text-sm sm:text-base font-semibold text-navy-900 dark:text-white hover:bg-silver-50 dark:hover:bg-navy-800/40 transition-colors">
                  <span>How can evaluation teams compare multiple tenders or resolve a Manual Review flag?</span>
                  <svg class="faq-chevron w-4 h-4 shrink-0 text-slate-400 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="faq-panel hidden px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-silver-100 dark:border-slate-800/80 pt-3">
                  Use the interactive Bar Graph, Graph Chart, or All Tenders comparison modes in the dashboard to inspect every tender side-by-side. Clicking any pillar lets officers inspect check-level notes, ask AI Assistance for remediation guidance, or record a formal Officer Sign-Off inside the Workspace.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 2: SERVICE / SOLUTION CATALOG SECTION                         -->
    <!-- ===================================================================== -->
    <section id="section-catalog" class="spa-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-2">
              Solutions &amp; Verification Catalog
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 dark:text-white text-balance">
              Tailored Modules for Procurement &amp; Bidding Teams
            </h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Filter BIDVERIFY AI capabilities by stakeholder role or document verification stage. AI provides pre-verification intelligence; final compliance certification remains with authorized government officers.
            </p>
          </div>
          <div id="catalog-count" class="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums whitespace-nowrap">
            Showing 8 of 8 modules
          </div>
        </div>

        <!-- Category Filter Tabs -->
        <div id="catalog-filter-bar" class="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-navy-900 border border-silver-200 dark:border-slate-800 mb-8" role="tablist" aria-label="Catalog Categories">
          <!-- Filter tabs rendered by JS -->
        </div>

        <!-- Dynamic Catalog Grid -->
        <div id="catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Cards rendered dynamically from JS Array of Objects -->
        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 3: INTERACTIVE BOOKING / CONTACT FORM SECTION                 -->
    <!-- ===================================================================== -->
    <section id="section-booking" class="spa-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Left Info & Officer Helpdesk -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-2">
                Direct Procurement &amp; Verification Desk
              </p>
              <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 dark:text-white text-balance">
                Schedule a Compliance Audit or Department Onboarding
              </h2>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Select your stakeholder category to dynamically configure available verification services. Submitting prepares a structured verification brief for direct WhatsApp or official email dispatch.
              </p>
            </div>

            <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">Official Contact Channels</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-start justify-between gap-4 pb-3 border-b border-silver-200 dark:border-slate-800">
                  <span class="text-slate-500 dark:text-slate-400">Primary Officer Desk</span>
                  <a href="tel:+919943441970" class="font-mono font-semibold text-navy-900 dark:text-cyanbrand-400 hover:underline tabular-nums">+91 99434 41970</a>
                </div>
                <div class="flex items-start justify-between gap-4 pb-3 border-b border-silver-200 dark:border-slate-800">
                  <span class="text-slate-500 dark:text-slate-400">Evaluation Support Desk</span>
                  <a href="tel:+919575075937" class="font-mono font-semibold text-navy-900 dark:text-cyanbrand-400 hover:underline tabular-nums">+91 95750 75937</a>
                </div>
                <div class="flex items-start justify-between gap-4">
                  <span class="text-slate-500 dark:text-slate-400">Official Email</span>
                  <a href="mailto:bidverifyai@gmail.com" class="font-mono font-medium text-navy-900 dark:text-white hover:underline">bidverifyai@gmail.com</a>
                </div>
              </div>
            </div>

            <div class="p-5 rounded-xl border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-900/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong class="text-navy-900 dark:text-white block mb-1">Human-in-the-Loop Policy</strong>
              BIDVERIFY AI assists users and tender evaluation teams by extracting and flagging document compliance metrics. All final tender eligibility rulings must be reviewed and verified by authorized government officers.
            </div>
          </div>

          <!-- Right Dynamic Multi-Field Form -->
          <div class="lg:col-span-7">
            <div class="p-6 sm:p-8 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <form id="booking-form" onsubmit="handleBookingSubmit(event)" class="space-y-5" novalidate>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="form-name" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Full Name *</label>
                    <input type="text" id="form-name" required placeholder="e.g., Rajeshwari Iyer" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                  <div>
                    <label for="form-org" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Department / Company Name *</label>
                    <input type="text" id="form-org" required placeholder="e.g., State Highways Procurement" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="form-phone" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Your Phone Number *</label>
                    <input type="tel" id="form-phone" required placeholder="+91 98XXXXXXXX" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                  <div>
                    <label for="form-email" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Official Email *</label>
                    <input type="email" id="form-email" required placeholder="officer@department.gov.in" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="form-category" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Target Category *</label>
                    <select id="form-category" onchange="populateServiceDropdown(this.value)" required class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500">
                      <!-- Populated dynamically by JS -->
                    </select>
                  </div>
                  <div>
                    <label for="form-service" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Verification Module / Service *</label>
                    <select id="form-service" required class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500">
                      <!-- Auto-populated dynamically based on category -->
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label for="form-tender-id" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Tender / Bid Reference</label>
                    <input type="text" id="form-tender-id" placeholder="e.g., NHAI-2026-441" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm font-mono text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                  <div>
                    <label for="form-date" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Preferred Review Date</label>
                    <input type="date" id="form-date" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
                  </div>
                  <div>
                    <label for="form-target-desk" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">WhatsApp Dispatch Line</label>
                    <select id="form-target-desk" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm font-mono text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500">
                      <option value="919943441970">+91 9943441970 (Primary)</option>
                      <option value="919575075937">+91 9575075937 (Evaluation)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="form-notes" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Verification Requirements &amp; Document Scope</label>
                  <textarea id="form-notes" rows="3" placeholder="Specify GST, PAN, Udyam, MCA, or tender eligibility clauses requiring automated pre-screening and officer review..." class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500"></textarea>
                </div>

                <div id="form-error" class="hidden p-3 rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/50 text-xs font-medium text-red-700 dark:text-red-300"></div>

                <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span class="text-xs text-slate-500 dark:text-slate-400">Generates direct WhatsApp &amp; Email dispatch link</span>
                  <button type="submit" class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold bg-crimson-600 text-white hover:bg-crimson-700 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap shrink-0">
                    Prepare Direct Dispatch
                  </button>
                </div>
              </form>

              <!-- Structured Direct Messaging Result Card (No window.alert / popup blocker safe) -->
              <div id="dispatch-result" class="hidden mt-6 p-5 rounded-xl border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/30 space-y-4">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Verification Request Ready</div>
                    <h4 class="font-display text-base font-semibold text-navy-900 dark:text-white mt-0.5">Structured Inquiry Payload Generated</h4>
                  </div>
                  <button type="button" onclick="copyDispatchText()" class="px-3 py-1.5 rounded-md border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-xs font-medium text-navy-900 dark:text-slate-200 hover:border-cyanbrand-500 transition-colors">
                    Copy Brief
                  </button>
                </div>
                <pre id="dispatch-preview" class="text-xs font-mono whitespace-pre-wrap p-3 rounded-lg bg-white dark:bg-navy-950 border border-silver-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"></pre>
                <div class="flex flex-wrap items-center gap-3">
                  <a id="whatsapp-dispatch-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors whitespace-nowrap">
                    Send via WhatsApp API
                  </a>
                  <a id="email-dispatch-link" href="#" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-cyanbrand-500 transition-colors whitespace-nowrap">
                    Send to bidverifyai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 4: ABOUT / HIGHLIGHTS & METRICS SECTION                       -->
    <!-- ===================================================================== -->
    <section id="section-about" class="spa-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div class="lg:col-span-6 flex flex-col justify-center">
            <p class="text-xs font-semibold tracking-wide text-crimson-600 dark:text-crimson-500 mb-2">
              About BIDVERIFY AI
            </p>
            <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 dark:text-white text-balance mb-4">
              Automate Verification. Build Trust.
            </h2>
            <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Public procurement demands speed without compromising legal defensibility. BIDVERIFY AI bridges automated document intelligence with strict administrative accountability for government departments, tender evaluation committees, and compliant bidders.
            </p>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Our verification engine cross-checks GST registrations, PAN signatory records, Udyam MSME classifications, MCA corporate filings, seal validity, and turnover thresholds—delivering transparent audit evidence while ensuring final verification always rests with authorized Government Officers.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <button type="button" onclick="navigateTo('booking')" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap">
                Connect with Our Team
              </button>
              <button type="button" onclick="navigateTo('home')" class="px-5 py-2.5 rounded-lg text-sm font-semibold border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-white hover:border-cyanbrand-500 transition-colors whitespace-nowrap">
                Return to 2D Dashboard
              </button>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-xl overflow-hidden border border-silver-200 dark:border-slate-800 h-72 sm:h-96 lg:h-full bg-navy-900">
              <img
                src="/src/assets/images/catalog_evaluation_teams_1795075331618.jpg"
                alt="Tender evaluation officers reviewing AI pre-verification matrices"
                referrerpolicy="no-referrer"
                onerror="handleImgError(this, 'Tender Evaluation Governance')"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Key Statistics / Metrics Counter Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-silver-200 dark:border-slate-800">
          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-navy-900 dark:text-cyanbrand-400 tabular-nums counter-metric" data-target="99.4" data-suffix="%">99.4%</div>
            <div class="text-sm font-semibold text-navy-900 dark:text-white mt-2">OCR &amp; Registry Extraction</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Structured field verification across scanned PDFs and digital certificates</p>
          </div>

          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white tabular-nums counter-metric" data-target="78" data-suffix="%">78%</div>
            <div class="text-sm font-semibold text-navy-900 dark:text-white mt-2">Faster Technical Scrutiny</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Reduction in manual pre-screening hours per tender evaluation cycle</p>
          </div>

          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white tabular-nums counter-metric" data-target="6" data-suffix=" Pillars">6 Pillars</div>
            <div class="text-sm font-semibold text-navy-900 dark:text-white mt-2">Unified Compliance Model</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">GST, PAN, Udyam, Company Registration, Validity &amp; Eligibility</p>
          </div>

          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-crimson-600 dark:text-crimson-500 tabular-nums counter-metric" data-target="100" data-suffix="%">100%</div>
            <div class="text-sm font-semibold text-navy-900 dark:text-white mt-2">Officer Final Authority</div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Every AI pre-screen requires formal Government Officer sign-off</p>
          </div>
        </div>

        <!-- Governance & Stakeholder Assurance Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-silver-200 dark:border-slate-800">
          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="text-xs font-mono font-semibold text-blue-600 dark:text-cyanbrand-400 mb-2">Government Departments</div>
            <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-2">GFR-Aligned Audit Traceability</h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every automated check preserves source document metadata, timestamped inspection notes, and officer remark history to support vigilance and statutory procurement audits.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="text-xs font-mono font-semibold text-blue-600 dark:text-cyanbrand-400 mb-2">Evaluation Committees</div>
            <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-2">Zero-Bias Pre-Screening</h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Applies uniform mathematical pillar weights across every participating bidder, eliminating clerical oversight while keeping final qualification judgement strictly human-led.
            </p>
          </div>

          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
            <div class="text-xs font-mono font-semibold text-crimson-600 dark:text-crimson-500 mb-2">Bidding Enterprises</div>
            <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white mb-2">Pre-Submission Readiness</h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Helps contractors, MSMEs, and EPC firms spot expired solvency letters, DSC hash errors, or missing work-order proofs before technical bid opening closes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SECTION 5: ENTERPRISE OPERATIONS WORKSPACE (SIDEBAR MODULES)          -->
    <!-- ===================================================================== -->
    <section id="section-operations" class="spa-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div id="operations-dynamic-root" class="space-y-6">
          <!-- Rendered dynamically by sidebar navigation clicks -->
        </div>
      </div>
    </section>
  </main>

  <!-- Quiet Minimal Footer -->
  <footer class="border-t border-silver-200 dark:border-slate-800/80 bg-white dark:bg-navy-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
      <div class="flex items-center gap-2.5">
        <svg class="w-8 h-6 shrink-0" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M13 12.5H8L5.5 10M12.5 17.5H6M12.5 22.5H7.5M13 27H8.5L6.5 29M35 12.5H40L42.5 10M35.5 17.5H42M35.5 22.5H40.5M35 27H39.5L41.5 29" stroke="#0284C7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="4.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="4.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
          <circle cx="6" cy="22.5" r="1.4" fill="#38BDF8"/>
          <circle cx="5.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="43.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <circle cx="43.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
          <circle cx="42" cy="22.5" r="1.4" fill="#38BDF8"/>
          <circle cx="42.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
          <path d="M24 3L35.5 7.5V19.5C35.5 27.6 30.4 34 24 37C17.6 34 12.5 27.6 12.5 19.5V7.5L24 3Z" fill="#0A2558" stroke="#38BDF8" stroke-width="1.9" stroke-linejoin="round"/>
          <path d="M18 10.5H26.5L30 14V27.5C30 28.3 29.3 29 28.5 29H18C17.2 29 16.5 28.3 16.5 27.5V12C16.5 11.2 17.2 10.5 18 10.5Z" fill="#FFFFFF"/>
          <path d="M26.5 10.5V14H30" fill="#CBD5E1"/>
          <path d="M19 16H26.5M19 19.5H25.5M19 23H24" stroke="#1E3A8A" stroke-width="1.65" stroke-linecap="round"/>
          <circle cx="30" cy="27" r="5.6" fill="#16A34A" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M27.5 27L29.2 28.7L32.7 25.2" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
          <span class="font-display font-bold text-navy-900 dark:text-white">TENDER<span class="text-cyanbrand-600 dark:text-cyanbrand-400">.IQ</span></span>
          <span class="mx-2" aria-hidden="true">·</span>
          <span>Verify Smart. Bid Confidently</span>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <a href="mailto:tenderiq.official@gmail.com" class="hover:text-navy-900 dark:hover:text-white transition-colors">tenderiq.official@gmail.com</a>
        <span aria-hidden="true">·</span>
        <a href="tel:+919943441970" class="font-mono hover:text-navy-900 dark:hover:text-white transition-colors">+91 99434 41970</a>
        <span aria-hidden="true">·</span>
        <a href="tel:+919575075937" class="font-mono hover:text-navy-900 dark:hover:text-white transition-colors">+91 95750 75937</a>
      </div>
    </div>
  </footer>
  </div><!-- End #app-main-shell -->

  <!-- ===================================================================== -->
  <!-- AUTHENTICATION MODAL (SIGN IN, CREATE ACCOUNT & ACTIVE PROFILE)       -->
  <!-- ===================================================================== -->
  <div id="auth-modal" onclick="if (event.target === this) closeAuthModal()" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
    <div class="w-full max-w-md rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 shadow-2xl overflow-hidden">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-silver-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <svg class="w-10 h-8 shrink-0" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M13 12.5H8L5.5 10M12.5 17.5H6M12.5 22.5H7.5M13 27H8.5L6.5 29M35 12.5H40L42.5 10M35.5 17.5H42M35.5 22.5H40.5M35 27H39.5L41.5 29" stroke="#0284C7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="4.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
            <circle cx="4.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
            <circle cx="6" cy="22.5" r="1.4" fill="#38BDF8"/>
            <circle cx="5.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
            <circle cx="43.5" cy="9" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
            <circle cx="43.5" cy="17.5" r="1.5" fill="#0F172A" stroke="#0284C7" stroke-width="1.2"/>
            <circle cx="42" cy="22.5" r="1.4" fill="#38BDF8"/>
            <circle cx="42.5" cy="30" r="1.5" fill="#0F172A" stroke="#38BDF8" stroke-width="1.2"/>
            <path d="M24 3L35.5 7.5V19.5C35.5 27.6 30.4 34 24 37C17.6 34 12.5 27.6 12.5 19.5V7.5L24 3Z" fill="#0A2558" stroke="#38BDF8" stroke-width="1.9" stroke-linejoin="round"/>
            <path d="M18 10.5H26.5L30 14V27.5C30 28.3 29.3 29 28.5 29H18C17.2 29 16.5 28.3 16.5 27.5V12C16.5 11.2 17.2 10.5 18 10.5Z" fill="#FFFFFF"/>
            <path d="M26.5 10.5V14H30" fill="#CBD5E1"/>
            <path d="M19 16H26.5M19 19.5H25.5M19 23H24" stroke="#1E3A8A" stroke-width="1.65" stroke-linecap="round"/>
            <circle cx="30" cy="27" r="5.6" fill="#16A34A" stroke="#FFFFFF" stroke-width="1.5"/>
            <path d="M27.5 27L29.2 28.7L32.7 25.2" stroke="#FFFFFF" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div>
            <div class="text-xs font-medium text-cyanbrand-600 dark:text-cyanbrand-400">TENDER.iQ Access Portal</div>
            <h3 id="auth-modal-title" class="font-display text-lg font-bold text-navy-900 dark:text-white">Account Sign In</h3>
          </div>
        </div>
        <button type="button" aria-label="Close Authentication Dialog" onclick="closeAuthModal()" class="w-9 h-9 rounded-lg border border-silver-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-silver-100 dark:hover:bg-navy-800 transition-colors flex items-center justify-center">
          ✕
        </button>
      </div>

      <!-- Unauthenticated View: Sign In / Register Tabs -->
      <div id="auth-guest-view" class="p-6 space-y-5">
        <div class="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-silver-100 dark:bg-navy-950 border border-silver-200 dark:border-slate-800">
          <button type="button" id="auth-tab-login" onclick="switchAuthTab('login')" class="py-2 rounded-md text-xs font-semibold bg-white dark:bg-navy-800 text-navy-900 dark:text-white shadow-sm transition-colors">
            Sign In
          </button>
          <button type="button" id="auth-tab-register" onclick="switchAuthTab('register')" class="py-2 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors">
            Create Account
          </button>
        </div>

        <div id="auth-feedback" class="hidden p-3 rounded-lg text-xs font-medium"></div>

        <!-- Sign In Form -->
        <form id="login-form" onsubmit="handleLoginSubmit(event)" class="space-y-4" novalidate>
          <div>
            <label for="login-email" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Official Email *</label>
            <input type="email" id="login-email" required placeholder="officer@department.gov.in" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
          </div>
          <div>
            <label for="login-password" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Password *</label>
            <div class="relative">
              <input type="password" id="login-password" required placeholder="Enter your password" class="w-full px-3.5 py-2.5 pr-16 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
              <button type="button" onclick="togglePasswordVisibility('login-password', this)" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white px-1.5 py-1">
                Show
              </button>
            </div>
          </div>
          <button type="submit" class="w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors">
            Sign In to Workspace
          </button>
          <button type="button" onclick="signInAsDemoOfficer()" class="w-full py-2 px-4 rounded-lg text-xs font-semibold border border-blue-300 dark:border-blue-700/70 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-cyanbrand-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
            Quick Demo Sign-In (Government Tender Officer)
          </button>
          <p class="text-xs text-slate-500 dark:text-slate-400 text-center">
            New user? <button type="button" onclick="switchAuthTab('register')" class="font-semibold text-cyanbrand-600 dark:text-cyanbrand-400 hover:underline">Create an account</button>
          </p>
        </form>

        <!-- Register Form -->
        <form id="register-form" onsubmit="handleRegisterSubmit(event)" class="hidden space-y-3.5" novalidate>
          <div>
            <label for="reg-name" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Full Name *</label>
            <input type="text" id="reg-name" required placeholder="e.g., Arjun Deshmukh" class="w-full px-3.5 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="reg-email" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Official Email *</label>
              <input type="email" id="reg-email" required placeholder="name@org.gov.in" class="w-full px-3.5 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
            </div>
            <div>
              <label for="reg-role" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Portal Role *</label>
              <select id="reg-role" required class="w-full px-3 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500">
                <option value="Government Tender Officer">Government Tender Officer</option>
                <option value="Tender Evaluation Team">Tender Evaluation Team</option>
                <option value="Business Company / Bidder">Business Company / Bidder</option>
              </select>
            </div>
          </div>
          <div>
            <label for="reg-org" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Department / Company *</label>
            <input type="text" id="reg-org" required placeholder="e.g., Public Works Procurement Cell" class="w-full px-3.5 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="reg-password" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Password (min 6) *</label>
              <input type="password" id="reg-password" required placeholder="Min 6 characters" class="w-full px-3.5 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
            </div>
            <div>
              <label for="reg-confirm" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1">Confirm Password *</label>
              <input type="password" id="reg-confirm" required placeholder="Repeat password" class="w-full px-3.5 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyanbrand-500" />
            </div>
          </div>
          <button type="submit" class="w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-crimson-600 text-white hover:bg-crimson-700 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors">
            Create Account &amp; Sign In
          </button>
        </form>
      </div>

      <!-- Authenticated View: Account Summary & Sign Out -->
      <div id="auth-user-view" class="hidden p-6 space-y-5">
        <div class="p-4 rounded-xl border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950 space-y-2.5 text-sm">
          <div class="flex items-center justify-between gap-3 pb-2 border-b border-silver-200 dark:border-slate-800">
            <span class="text-xs text-slate-500 dark:text-slate-400">Authenticated User</span>
            <span id="profile-role" class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Role</span>
          </div>
          <div>
            <div id="profile-name" class="font-display text-base font-bold text-navy-900 dark:text-white">Name</div>
            <div id="profile-email" class="font-mono text-xs text-slate-500 dark:text-slate-400 mt-0.5">email</div>
          </div>
          <div class="pt-1 text-xs text-slate-600 dark:text-slate-300">
            Organization: <span id="profile-org" class="font-medium text-navy-900 dark:text-white">Org</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button type="button" onclick="closeAuthModal()" class="flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-white hover:border-cyanbrand-500 transition-colors">
            Continue to Dashboard
          </button>
          <button type="button" onclick="handleSignOut()" class="py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold bg-crimson-600 text-white hover:bg-crimson-700 transition-colors">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- FLOATING AI COMPLIANCE ASSISTANT LAUNCHER & SLIDE-OVER DRAWER         -->
  <!-- ===================================================================== -->
  <button
    type="button"
    id="ai-assistant-fab"
    onclick="openAIAssistant()"
    aria-label="Open AI Assistance"
    class="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-xl border border-blue-500/40 bg-navy-900 text-white dark:bg-blue-600 dark:hover:bg-blue-500 hover:bg-navy-800 shadow-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500"
  >
    <svg class="w-6 h-6 shrink-0" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="geminiSparkGrad" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#38BDF8"/>
          <stop offset="50%" stop-color="#818CF8"/>
          <stop offset="100%" stop-color="#22D3EE"/>
        </linearGradient>
      </defs>
      <path d="M14 2C14.35 8.65 19.35 13.65 26 14C19.35 14.35 14.35 19.35 14 26C13.65 19.35 8.65 14.35 2 14C8.65 13.65 13.65 8.65 14 2Z" fill="url(#geminiSparkGrad)"/>
      <path d="M22.5 3.5C22.65 5.45 24.05 6.85 26 7C24.05 7.15 22.65 8.55 22.5 10.5C22.35 8.55 20.95 7.15 19 7C20.95 6.85 22.35 5.45 22.5 3.5Z" fill="#BAE6FD"/>
    </svg>
    <span class="font-sans text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap text-white">AI Assistance</span>
  </button>

  <!-- Friendly Back-to-Top Helper -->
  <button
    type="button"
    id="back-to-top-btn"
    onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    aria-label="Scroll back to top"
    class="hidden fixed bottom-5 left-5 lg:left-[280px] z-20 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-silver-300 dark:border-slate-700 bg-white/95 dark:bg-navy-900/95 text-xs font-semibold text-navy-900 dark:text-slate-200 shadow-md hover:border-blue-500 transition-all"
  >
    <span aria-hidden="true">↑</span>
    <span>Top</span>
  </button>

  <!-- Non-Intrusive User Feedback Toast -->
  <div
    id="ux-toast"
    role="status"
    aria-live="polite"
    class="pointer-events-none opacity-0 translate-y-2 fixed bottom-20 right-5 z-50 max-w-xs px-4 py-2.5 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-navy-900 text-xs font-semibold text-navy-900 dark:text-white shadow-xl transition-all duration-200"
  ></div>

  <div id="ai-assistant-backdrop" onclick="closeAIAssistant()" class="hidden fixed inset-0 z-40 bg-navy-950/50 transition-opacity"></div>

  <aside
    id="ai-assistant-drawer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="ai-drawer-title"
    class="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-white dark:bg-navy-900 border-l border-silver-200 dark:border-slate-800 shadow-2xl translate-x-full transition-transform duration-200 flex flex-col"
  >
    <!-- Drawer Header -->
    <div class="px-5 py-4 border-b border-silver-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 bg-silver-50 dark:bg-navy-950">
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        <div class="min-w-0">
          <h3 id="ai-drawer-title" class="font-display text-sm sm:text-base font-bold text-navy-900 dark:text-white truncate">TENDER.iQ AI Compliance Assistant</h3>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">Live Tender Doubt Clarification &amp; Officer Co-Pilot</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button type="button" onclick="clearAIChat()" title="Reset conversation" class="px-2.5 py-1.5 rounded-lg border border-silver-200 dark:border-slate-700 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-navy-900 dark:hover:text-white transition-colors">
          Clear
        </button>
        <button type="button" aria-label="Close AI Assistant" onclick="closeAIAssistant()" class="w-8 h-8 rounded-lg border border-silver-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-silver-100 dark:hover:bg-navy-800 transition-colors flex items-center justify-center">
          ✕
        </button>
      </div>
    </div>

    <!-- Live Context Strip + Structured Audit Trigger -->
    <div class="px-5 py-3 border-b border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-wrap items-center justify-between gap-2 shrink-0">
      <div class="min-w-0">
        <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Live Grounded Context</div>
        <div id="ai-context-badge" class="font-mono text-xs font-semibold text-navy-900 dark:text-cyanbrand-400 truncate mt-0.5">NHAI-2026-441 · 89% · GST</div>
      </div>
      <button type="button" id="ai-audit-btn" onclick="runAIStructuredAudit()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap shrink-0">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
        Run AI Audit Brief
      </button>
    </div>

    <!-- Suggested Compliance Doubt Prompts -->
    <div class="px-5 py-2.5 border-b border-silver-200 dark:border-slate-800 bg-silver-50/70 dark:bg-navy-950/50 flex flex-wrap gap-1.5 shrink-0">
      <button type="button" onclick="sendAIMessage('Why is the currently active tender dossier penalized or flagged, and which exact checks need attention?')" class="px-2.5 py-1 rounded-md border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-[11px] font-medium text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors">
        Why is this bid flagged?
      </button>
      <button type="button" onclick="sendAIMessage('Explain what documents or remedies are needed to clear the Manual Review and Non-Compliant items in this tender.')" class="px-2.5 py-1 rounded-md border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-[11px] font-medium text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors">
        Explain remedies &amp; docs
      </button>
      <button type="button" onclick="sendAIMessage('Draft a formal clarification notice from the Tender Evaluation Officer to the bidder listing all pending discrepancies and deadlines.')" class="px-2.5 py-1 rounded-md border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-[11px] font-medium text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors">
        Draft clarification notice
      </button>
      <button type="button" onclick="sendAIMessage('Compare all three active tender dossiers (NHAI, GeM, PWD) and explain their readiness before Government Officer sign-off.')" class="px-2.5 py-1 rounded-md border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-[11px] font-medium text-navy-900 dark:text-slate-200 hover:border-blue-500 transition-colors">
        Compare all 3 tenders
      </button>
    </div>

    <!-- Scrollable Chat Thread -->
    <div id="ai-chat-messages" class="flex-1 overflow-y-auto thin-scroll p-5 space-y-4">
      <!-- Rendered dynamically by JS -->
    </div>

    <!-- Error Notice Banner -->
    <div id="ai-error-banner" class="hidden mx-5 mb-2 p-3 rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/50 text-xs font-medium text-red-700 dark:text-red-300"></div>

    <!-- Chat Input Composer -->
    <form id="ai-chat-form" onsubmit="handleAIChatSubmit(event)" class="p-4 border-t border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950 shrink-0 space-y-2">
      <div class="flex items-end gap-2">
        <label for="ai-chat-input" class="sr-only">Ask a tender compliance doubt</label>
        <textarea
          id="ai-chat-input"
          rows="2"
          placeholder="Ask any doubt about GST, PAN, Udyam, MCA, eligibility thresholds, or flagged checks..."
          onkeydown="if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); handleAIChatSubmit(event); }"
          class="flex-1 resize-none px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-xs sm:text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          id="ai-send-btn"
          class="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0"
        >
          Ask AI
        </button>
      </div>
      <div class="text-[10px] text-slate-500 dark:text-slate-400">
        AI clarifies compliance doubts using live dossier metrics. Final tender certification rests with authorized Government Officers.
      </div>
    </form>
  </aside>

  <!-- ===================================================================== -->
  <!-- PLAIN JAVASCRIPT SPA ENGINE, CATALOG DATA & DYNAMIC COMPLIANCE LOGIC  -->
  <!-- ===================================================================== -->
  <script>
    // 1. Image Fail-Safe Handler (Inline SVG Placeholder)
    function handleImgError(img, label) {
      img.onerror = null;
      const safeLabel = String(label || 'BIDVERIFY AI').replace(/[<>&'"]/g, '');
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0a1628"/>
            <stop offset="100%" stop-color="#17325c"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#bg)"/>
        <circle cx="400" cy="260" r="58" fill="none" stroke="#06b6d4" stroke-width="4"/>
        <path d="M376 260l16 16 34-36" fill="none" stroke="#06b6d4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="400" y="370" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="600">${safeLabel}</text>
        <text x="400" y="405" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="15">BIDVERIFY AI · Automate Verification. Build Trust.</text>
      </svg>`;
      img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    }

    // 1b. Non-Intrusive User Toast Helper
    let uxToastTimer = null;
    function showToast(message) {
      const toast = document.getElementById('ux-toast');
      if (!toast || !message) return;
      toast.textContent = message;
      toast.classList.remove('opacity-0', 'translate-y-2');
      toast.classList.add('opacity-100', 'translate-y-0');
      if (uxToastTimer) clearTimeout(uxToastTimer);
      uxToastTimer = setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, 2800);
    }

    // 2. Persistent Theme Switching (Dark Navy vs Light Silver-White)
    const THEME_STORAGE_KEY = 'tenderiq_theme_v1';

    function applyThemeState(isDark) {
      const html = document.documentElement;
      html.classList.toggle('dark', isDark);
      const label = document.getElementById('theme-label');
      const icon = document.getElementById('theme-icon');
      if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      if (icon) icon.textContent = isDark ? '☀' : '☾';
      if (window.bidverifyRefreshThemeColors) {
        window.bidverifyRefreshThemeColors();
      }
    }

    function toggleTheme() {
      const isDark = !document.documentElement.classList.contains('dark');
      applyThemeState(isDark);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
      } catch {}
    }

    function restoreThemePreference() {
      try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === 'dark') applyThemeState(true);
        else if (saved === 'light') applyThemeState(false);
      } catch {}
    }

    // 3. Plain JS Section Toggling (SPA Navigation)
    let activeSection = 'home';
    function navigateTo(sectionId, options) {
      const valid = ['home', 'catalog', 'booking', 'about', 'operations'];
      if (!valid.includes(sectionId)) sectionId = 'home';
      activeSection = sectionId;

      document.querySelectorAll('.spa-section').forEach(el => {
        el.classList.remove('is-active');
      });
      const target = document.getElementById('section-' + sectionId);
      if (target) target.classList.add('is-active');

      document.querySelectorAll('.nav-link').forEach(btn => {
        const isCurrent = btn.getAttribute('data-nav') === sectionId;
        btn.classList.toggle('border-cyanbrand-500', isCurrent);
        btn.classList.toggle('text-navy-900', isCurrent);
        btn.classList.toggle('dark:text-white', isCurrent);
        btn.classList.toggle('border-transparent', !isCurrent);
        btn.classList.toggle('text-slate-600', !isCurrent);
        btn.classList.toggle('dark:text-slate-300', !isCurrent);
      });

      if (!options || !options.preserveSidebar) {
        const map = { home: 'dashboard', catalog: 'bid-management', about: 'project-overview', booking: 'help-support' };
        if (map[sectionId] && typeof setActiveSidebarItem === 'function') {
          setActiveSidebarItem(map[sectionId]);
        }
      }

      if (!options || !options.skipScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (sectionId === 'home' && window.bidverify3DResize) {
        setTimeout(() => window.bidverify3DResize(), 50);
      }
      if (sectionId === 'about') {
        animateAboutCounters();
      }
    }

    // 4. Catalog Data Structure (Array of Objects) & Dynamic Filtering
    const CATALOG_CATEGORIES = [
      'All',
      'Government Departments & Tender Officers',
      'Business Companies & Bidders',
      'Tender Evaluation Teams',
      'Document Verification Process'
    ];

    const CATALOG_ITEMS = [
      {
        id: 'gov-officer-console',
        name: 'Tender Officer Pre-Screen Workbench',
        category: 'Government Departments & Tender Officers',
        detail: 'Department License · Audit Ready',
        image: '/src/assets/images/catalog_govt_officers_1795075330719.jpg',
        description: 'Structured verification workspace highlighting GST, PAN, and eligibility gaps while preserving final officer sign-off authority.'
      },
      {
        id: 'gov-registry-bridge',
        name: 'Statutory Registry Reconciliation',
        category: 'Government Departments & Tender Officers',
        detail: 'API Assisted · Zero Tamper Logs',
        image: '/src/assets/images/catalog_doc_verification_1795075331303.jpg',
        description: 'Cross-references bidder filings against official tax and corporate registries to flag discrepancies for officer review.'
      },
      {
        id: 'bidder-readiness-audit',
        name: 'Pre-Submission Bid Readiness Check',
        category: 'Business Companies & Bidders',
        detail: 'Per-Tender Dossier · Rapid Scan',
        image: '/src/assets/images/catalog_bidders_enterprise_1795075331970.jpg',
        description: 'Allows bidding enterprises to self-audit Udyam, GST, turnover, and signed annexures prior to portal upload.'
      },
      {
        id: 'bidder-msme-compliance',
        name: 'MSME & EMD Exemption Validator',
        category: 'Business Companies & Bidders',
        detail: 'Udyam & Turnover Match',
        image: '/src/assets/images/catalog_doc_verification_1795075331303.jpg',
        description: 'Verifies Udyam classification codes and micro-enterprise status so qualified bidders avoid technical disqualification.'
      },
      {
        id: 'eval-matrix-suite',
        name: 'Committee Comparative Matrix',
        category: 'Tender Evaluation Teams',
        detail: 'Multi-Bidder Scoring Grid',
        image: '/src/assets/images/catalog_evaluation_teams_1795075331618.jpg',
        description: 'Side-by-side compliance matrix across competing bidders with officer annotation logs and clear pass/review/flag trails.'
      },
      {
        id: 'eval-3d-telemetry',
        name: '3D Compliance Risk Visualizer',
        category: 'Tender Evaluation Teams',
        detail: 'Interactive 6-Pillar Telemetry',
        image: '/src/assets/images/hero_govtech_verification_1795075330864.jpg',
        description: 'Executive visual summary displaying weighted compliance percentages across all six statutory pillars for review boards.'
      },
      {
        id: 'doc-ocr-forensics',
        name: 'Automated Certificate & Seal Forensics',
        category: 'Document Verification Process',
        detail: 'DSC, Stamp & Expiry Scan',
        image: '/src/assets/images/catalog_doc_verification_1795075331303.jpg',
        description: 'Inspects document issue dates, digital signature timestamps, and authorized signatory seals—escalating anomalies to officers.'
      },
      {
        id: 'doc-eligibility-parser',
        name: 'Work Order & Turnover Extraction',
        category: 'Document Verification Process',
        detail: 'Financial & Past Experience',
        image: '/src/assets/images/catalog_govt_officers_1795075330719.jpg',
        description: 'Extracts audited balance sheets and completion certificates to compute tender eligibility readiness for officer verification.'
      }
    ];

    let activeCatalogCategory = 'All';

    function renderCatalogFilters() {
      const container = document.getElementById('catalog-filter-bar');
      container.innerHTML = CATALOG_CATEGORIES.map(cat => {
        const isActive = cat === activeCatalogCategory;
        const shortLabel = cat === 'All' ? 'All Modules' : cat;
        return `
          <button
            type="button"
            onclick="filterCatalog('${cat.replace(/'/g, "\\'")}')"
            class="px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              isActive
                ? 'bg-navy-900 text-white dark:bg-cyanbrand-500 dark:text-navy-950'
                : 'text-slate-600 dark:text-slate-300 hover:bg-silver-100 dark:hover:bg-navy-800 hover:text-navy-900 dark:hover:text-white'
            }"
          >
            ${shortLabel}
          </button>
        `;
      }).join('');
    }

    function filterCatalog(category) {
      activeCatalogCategory = category;
      renderCatalogFilters();
      renderCatalogGrid();
    }

    function renderCatalogGrid() {
      const grid = document.getElementById('catalog-grid');
      const countEl = document.getElementById('catalog-count');
      const items = activeCatalogCategory === 'All'
        ? CATALOG_ITEMS
        : CATALOG_ITEMS.filter(item => item.category === activeCatalogCategory);

      countEl.textContent = `Showing ${items.length} of ${CATALOG_ITEMS.length} modules`;

      grid.innerHTML = items.map(item => `
        <article class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5">
          <div>
            <div class="aspect-[4/3] w-full overflow-hidden bg-navy-950 border-b border-silver-200 dark:border-slate-800">
              <img
                src="${item.image}"
                alt="${item.name}"
                referrerpolicy="no-referrer"
                onerror="handleImgError(this, '${item.name.replace(/'/g, '')}')"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5">
              <div class="text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                <span>${item.category}</span>
                <span aria-hidden="true" class="mx-1.5">·</span>
                <span class="font-mono text-cyanbrand-600 dark:text-cyanbrand-400">${item.detail}</span>
              </div>
              <h3 class="font-display text-lg font-semibold text-navy-900 dark:text-white leading-snug mb-2">
                ${item.name}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${item.description}
              </p>
            </div>
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-silver-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <span class="text-xs text-slate-500 dark:text-slate-400">Officer-Verified Output</span>
            <button
              type="button"
              onclick="selectCatalogForBooking('${item.category.replace(/'/g, "\\'")}', '${item.id}')"
              class="px-3.5 py-2 rounded-lg text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap shrink-0"
            >
              Request Module
            </button>
          </div>
        </article>
      `).join('');
    }

    // 5. Dynamic Form Dropdown Logic & WhatsApp Direct Messaging Integration
    function initBookingCategories() {
      const catSelect = document.getElementById('form-category');
      const categories = CATALOG_CATEGORIES.filter(c => c !== 'All');
      catSelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
      populateServiceDropdown(categories[0]);
    }

    function populateServiceDropdown(selectedCategory, preselectId) {
      const serviceSelect = document.getElementById('form-service');
      const matching = CATALOG_ITEMS.filter(item => item.category === selectedCategory);
      serviceSelect.innerHTML = matching.map(item => `<option value="${item.name}">${item.name}</option>`).join('');
      if (preselectId) {
        const found = matching.find(i => i.id === preselectId);
        if (found) serviceSelect.value = found.name;
      }
    }

    function selectCatalogForBooking(category, itemId) {
      const catSelect = document.getElementById('form-category');
      catSelect.value = category;
      populateServiceDropdown(category, itemId);
      navigateTo('booking');
    }

    let lastDispatchMessage = '';

    function handleBookingSubmit(event) {
      event.preventDefault();
      const errorBox = document.getElementById('form-error');
      const resultBox = document.getElementById('dispatch-result');

      const name = document.getElementById('form-name').value.trim();
      const org = document.getElementById('form-org').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const category = document.getElementById('form-category').value;
      const service = document.getElementById('form-service').value;
      const tenderId = document.getElementById('form-tender-id').value.trim() || 'Not Specified';
      const prefDate = document.getElementById('form-date').value || 'Flexible';
      const targetDesk = document.getElementById('form-target-desk').value;
      const notes = document.getElementById('form-notes').value.trim() || 'Standard statutory pre-screening & officer review workflow.';

      if (!name || !org || !phone || !email) {
        errorBox.textContent = 'Please complete Full Name, Department/Company, Phone Number, and Official Email before dispatching.';
        errorBox.classList.remove('hidden');
        resultBox.classList.add('hidden');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorBox.textContent = 'Please enter a valid email address.';
        errorBox.classList.remove('hidden');
        resultBox.classList.add('hidden');
        return;
      }

      errorBox.classList.add('hidden');

      const lines = [
        'BIDVERIFY AI — Verification Inquiry',
        'Motto: Automate Verification. Build Trust.',
        '----------------------------------------',
        `Applicant: ${name}`,
        `Organization: ${org}`,
        `Contact: ${phone} | ${email}`,
        `Target Category: ${category}`,
        `Selected Module: ${service}`,
        `Tender Reference: ${tenderId}`,
        `Preferred Review Date: ${prefDate}`,
        `Scope Notes: ${notes}`,
        '----------------------------------------',
        'Note: AI provides pre-verification results; final compliance sign-off rests with authorized Government Officers.'
      ];
      lastDispatchMessage = lines.join('\n');

      const encoded = encodeURIComponent(lastDispatchMessage);
      const waUrl = `https://wa.me/${targetDesk}?text=${encoded}`;
      const mailUrl = `mailto:tenderiq.official@gmail.com?subject=${encodeURIComponent('TENDER.iQ Inquiry: ' + service)}&body=${encoded}`;

      document.getElementById('dispatch-preview').textContent = lastDispatchMessage;
      document.getElementById('whatsapp-dispatch-link').href = waUrl;
      document.getElementById('email-dispatch-link').href = mailUrl;
      resultBox.classList.remove('hidden');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      showToast('Verification brief prepared for dispatch');
    }

    function copyDispatchText() {
      if (!lastDispatchMessage) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lastDispatchMessage);
        showToast('Brief copied to clipboard');
      }
    }

    // 6. About Metrics Counter Animation
    let countersAnimated = false;
    function animateAboutCounters() {
      if (countersAnimated) return;
      countersAnimated = true;
      document.querySelectorAll('.counter-metric').forEach(el => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = String(target).includes('.');
        const duration = 700;
        const start = performance.now();
        function step(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = target * eased;
          el.textContent = (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }

    // =========================================================================
    // 7. DYNAMIC COMPLIANCE CALCULATION ENGINE (ZERO HARDCODED PERCENTAGES)
    // =========================================================================
    const STATUS_SCORES = {
      compliant: 1.0,
      review: 0.55,
      non_compliant: 0.1
    };

    const STATUS_META = {
      compliant: { label: 'Compliant', colorHex: '#10B981', textClass: 'text-emerald-600 dark:text-emerald-400', dotColor: '#10B981' },
      review: { label: 'Manual Review', colorHex: '#F59E0B', textClass: 'text-amber-600 dark:text-amber-400', dotColor: '#F59E0B' },
      non_compliant: { label: 'Non-Compliant', colorHex: '#EF4444', textClass: 'text-red-600 dark:text-red-400', dotColor: '#EF4444' }
    };

    // Realistic demo tender dossiers where every percentage is calculated dynamically from underlying checks
    const BID_DOSSIERS = {
      nhai: {
        id: 'NHAI-2026-441',
        bidder: 'Apex Infra Solutions Pvt. Ltd.',
        pillars: [
          {
            key: 'gst',
            name: 'GST',
            fullName: 'GST Verification',
            weight: 18,
            checks: [
              { id: 'gst-1', label: 'GSTIN Active Status (29AABCA4812F1Z5)', weight: 40, status: 'compliant', note: 'Active taxpayer record confirmed' },
              { id: 'gst-2', label: 'GSTR-3B Last 12 Months Filing', weight: 35, status: 'compliant', note: 'All quarterly returns filed on schedule' },
              { id: 'gst-3', label: 'HSN/SAC Works Code Alignment', weight: 25, status: 'compliant', note: 'Matches tender civil infrastructure codes' }
            ]
          },
          {
            key: 'pan',
            name: 'PAN',
            fullName: 'PAN & Signatory Match',
            weight: 16,
            checks: [
              { id: 'pan-1', label: 'Corporate Entity PAN Validity', weight: 45, status: 'compliant', note: 'Name matches incorporation deed' },
              { id: 'pan-2', label: 'Authorized Signatory PAN Link', weight: 35, status: 'compliant', note: 'Board resolution signatory verified' },
              { id: 'pan-3', label: 'Form 26AS / TDS Standing', weight: 20, status: 'compliant', note: 'No pending statutory tax holds' }
            ]
          },
          {
            key: 'udyam',
            name: 'Udyam',
            fullName: 'Udyam MSME Registration',
            weight: 14,
            checks: [
              { id: 'udy-1', label: 'Udyam Portal Certificate Format', weight: 40, status: 'compliant', note: 'QR signature readable' },
              { id: 'udy-2', label: 'MSME Enterprise Tier Classification', weight: 35, status: 'review', note: 'Turnover crossed medium threshold — needs officer check' },
              { id: 'udy-3', label: 'NIC Activity Code Relevance', weight: 25, status: 'review', note: 'Secondary NIC code requires tender officer confirmation' }
            ]
          },
          {
            key: 'company',
            name: 'Company Reg',
            fullName: 'Company Registration (MCA)',
            weight: 18,
            checks: [
              { id: 'cmp-1', label: 'CIN Active Corporate Standing', weight: 40, status: 'compliant', note: 'ROC status active' },
              { id: 'cmp-2', label: 'MOA/AOA Infrastructure Object Clause', weight: 35, status: 'compliant', note: 'Highway works explicitly covered' },
              { id: 'cmp-3', label: 'Director DIN / KYC Compliance', weight: 25, status: 'compliant', note: 'All directors active' }
            ]
          },
          {
            key: 'validity',
            name: 'Doc Validity',
            fullName: 'Document Validity & Seals',
            weight: 16,
            checks: [
              { id: 'val-1', label: 'Class-3 DSC Signature Integrity', weight: 40, status: 'compliant', note: 'Cryptographic hash intact' },
              { id: 'val-2', label: 'Notarized Affidavit & Stamp Duty', weight: 35, status: 'compliant', note: 'Issued within 30-day tender window' },
              { id: 'val-3', label: 'Bank Solvency Certificate Date', weight: 25, status: 'review', note: 'Scan contrast low on branch seal — officer verify' }
            ]
          },
          {
            key: 'eligibility',
            name: 'Tender Elig.',
            fullName: 'Tender Eligibility Criteria',
            weight: 18,
            checks: [
              { id: 'elg-1', label: '3-Year Average Annual Turnover', weight: 40, status: 'compliant', note: 'Exceeds Rs. 45 Cr minimum threshold' },
              { id: 'elg-2', label: 'Similar Completed Work Orders', weight: 35, status: 'compliant', note: '2 qualifying state highway projects attached' },
              { id: 'elg-3', label: 'EMD / Bid Security Declaration', weight: 25, status: 'compliant', note: 'e-BG reference attached' }
            ]
          }
        ]
      },
      gem: {
        id: 'GEM-2026-892',
        bidder: 'Bharat MedTech Systems',
        pillars: [
          {
            key: 'gst',
            name: 'GST',
            fullName: 'GST Verification',
            weight: 18,
            checks: [
              { id: 'gst-1', label: 'GSTIN Active Status (27AAACB9120H1Z2)', weight: 40, status: 'compliant', note: 'Active taxpayer record' },
              { id: 'gst-2', label: 'GSTR-3B Filing Regularity', weight: 35, status: 'review', note: 'One late return detected in Q2' },
              { id: 'gst-3', label: 'Medical Device HSN Mapping', weight: 25, status: 'compliant', note: 'HSN 9018 verified' }
            ]
          },
          {
            key: 'pan',
            name: 'PAN',
            fullName: 'PAN & Signatory Match',
            weight: 16,
            checks: [
              { id: 'pan-1', label: 'Corporate PAN Validity', weight: 45, status: 'compliant', note: 'Verified against GeM profile' },
              { id: 'pan-2', label: 'Authorized Signatory PAN Link', weight: 35, status: 'review', note: 'Signatory updated recently — officer confirm POA' },
              { id: 'pan-3', label: 'Form 26AS / TDS Standing', weight: 20, status: 'compliant', note: 'Compliant' }
            ]
          },
          {
            key: 'udyam',
            name: 'Udyam',
            fullName: 'Udyam MSME Registration',
            weight: 14,
            checks: [
              { id: 'udy-1', label: 'Udyam Certificate Authenticity', weight: 40, status: 'compliant', note: 'Valid MSME Small Enterprise' },
              { id: 'udy-2', label: 'Make-in-India Class I Local Content', weight: 35, status: 'compliant', note: 'Declaration signed' },
              { id: 'udy-3', label: 'NIC Manufacturing Code', weight: 25, status: 'compliant', note: 'Matches biomedical equipment' }
            ]
          },
          {
            key: 'company',
            name: 'Company Reg',
            fullName: 'Company Registration (MCA)',
            weight: 18,
            checks: [
              { id: 'cmp-1', label: 'CIN Active Corporate Standing', weight: 40, status: 'compliant', note: 'Active' },
              { id: 'cmp-2', label: 'ISO 13485 & CDSCO License Link', weight: 35, status: 'review', note: 'Renewal receipt attached; final cert pending' },
              { id: 'cmp-3', label: 'Director DIN / KYC Compliance', weight: 25, status: 'compliant', note: 'Verified' }
            ]
          },
          {
            key: 'validity',
            name: 'Doc Validity',
            fullName: 'Document Validity & Seals',
            weight: 16,
            checks: [
              { id: 'val-1', label: 'DSC Timestamp Validity', weight: 40, status: 'compliant', note: 'Valid signature' },
              { id: 'val-2', label: 'OEM Authorization Certificate', weight: 35, status: 'non_compliant', note: 'OEM authorization expired 14 days ago' },
              { id: 'val-3', label: 'Affidavit Stamp & Notary', weight: 25, status: 'review', note: 'Page 2 seal requires manual officer inspection' }
            ]
          },
          {
            key: 'eligibility',
            name: 'Tender Elig.',
            fullName: 'Tender Eligibility Criteria',
            weight: 18,
            checks: [
              { id: 'elg-1', label: 'Annual Turnover Threshold', weight: 40, status: 'compliant', note: 'MSME relaxation applied' },
              { id: 'elg-2', label: 'Hospital Supply Experience', weight: 35, status: 'review', note: '2 of 3 POs missing final CRAC receipt' },
              { id: 'elg-3', label: 'EMD Exemption Certificate', weight: 25, status: 'compliant', note: 'Valid under Udyam clause' }
            ]
          }
        ]
      },
      pwd: {
        id: 'PWD-2026-118',
        bidder: 'Vertex Civil Contractors',
        pillars: [
          {
            key: 'gst',
            name: 'GST',
            fullName: 'GST Verification',
            weight: 18,
            checks: [
              { id: 'gst-1', label: 'GSTIN Active Status (33AADCV2109K1Z8)', weight: 40, status: 'compliant', note: 'Active status' },
              { id: 'gst-2', label: 'GSTR-3B Filing Regularity', weight: 35, status: 'non_compliant', note: '3 consecutive returns overdue' },
              { id: 'gst-3', label: 'HSN/SAC Alignment', weight: 25, status: 'review', note: 'Needs clarification' }
            ]
          },
          {
            key: 'pan',
            name: 'PAN',
            fullName: 'PAN & Signatory Match',
            weight: 16,
            checks: [
              { id: 'pan-1', label: 'Partnership Firm PAN Validity', weight: 45, status: 'compliant', note: 'Verified' },
              { id: 'pan-2', label: 'Managing Partner PAN Match', weight: 35, status: 'compliant', note: 'Matches deed' },
              { id: 'pan-3', label: 'TDS / 26AS Clearance', weight: 20, status: 'non_compliant', note: 'Unreconciled demand flagged' }
            ]
          },
          {
            key: 'udyam',
            name: 'Udyam',
            fullName: 'Udyam MSME Registration',
            weight: 14,
            checks: [
              { id: 'udy-1', label: 'Udyam Registration Submitted', weight: 40, status: 'non_compliant', note: 'Certificate missing from bid packet' },
              { id: 'udy-2', label: 'MSME Category Match', weight: 35, status: 'non_compliant', note: 'Cannot verify without Udyam number' },
              { id: 'udy-3', label: 'NIC Activity Code', weight: 25, status: 'review', note: 'Pending bidder clarification' }
            ]
          },
          {
            key: 'company',
            name: 'Company Reg',
            fullName: 'Company Registration (ROF/MCA)',
            weight: 18,
            checks: [
              { id: 'cmp-1', label: 'Registered Partnership Deed', weight: 40, status: 'review', note: 'Amended deed uploaded without annexure' },
              { id: 'cmp-2', label: 'Contractor Class-I PWD License', weight: 35, status: 'compliant', note: 'Valid until Dec 2027' },
              { id: 'cmp-3', label: 'Partner KYC Records', weight: 25, status: 'compliant', note: 'Verified' }
            ]
          },
          {
            key: 'validity',
            name: 'Doc Validity',
            fullName: 'Document Validity & Seals',
            weight: 16,
            checks: [
              { id: 'val-1', label: 'Digital Signature Verification', weight: 40, status: 'non_compliant', note: 'DSC certificate expired' },
              { id: 'val-2', label: 'Non-Blacklisting Affidavit', weight: 35, status: 'compliant', note: 'Notarized within window' },
              { id: 'val-3', label: 'Stamp Paper Serial Check', weight: 25, status: 'review', note: 'Requires manual officer verification' }
            ]
          },
          {
            key: 'eligibility',
            name: 'Tender Elig.',
            fullName: 'Tender Eligibility Criteria',
            weight: 18,
            checks: [
              { id: 'elg-1', label: 'Annual Turnover Criteria', weight: 40, status: 'non_compliant', note: 'Below 60% minimum bid capacity' },
              { id: 'elg-2', label: 'Past Bridge Construction Proof', weight: 35, status: 'review', note: 'Sub-contract experience needs officer ruling' },
              { id: 'elg-3', label: 'EMD Payment Receipt', weight: 25, status: 'compliant', note: 'DD reference recorded' }
            ]
          }
        ]
      }
    };

    let currentDossierKey = 'nhai';
    let activePillarKey = 'gst';
    let computedCompliance = null;

    function getStatusFromPct(pct) {
      if (pct >= 80) return 'compliant';
      if (pct >= 50) return 'review';
      return 'non_compliant';
    }

    function computeComplianceMetrics(dossier) {
      let weightedSum = 0;
      let totalWeight = 0;

      const pillars = dossier.pillars.map(p => {
        let pSum = 0;
        let pWeight = 0;
        p.checks.forEach(c => {
          pSum += (STATUS_SCORES[c.status] || 0) * c.weight;
          pWeight += c.weight;
        });
        const pct = pWeight > 0 ? Math.round((pSum / pWeight) * 100) : 0;
        const status = getStatusFromPct(pct);
        weightedSum += pct * p.weight;
        totalWeight += p.weight;
        return {
          ...p,
          percentage: pct,
          status
        };
      });

      const overall = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
      const overallStatus = getStatusFromPct(overall);

      return {
        id: dossier.id,
        bidder: dossier.bidder,
        overall,
        overallStatus,
        pillars
      };
    }

    function selectDossier(key) {
      if (!BID_DOSSIERS[key]) return;
      currentDossierKey = key;
      recomputeAndRenderCompliance(true);
    }

    function selectPillar(pillarKey) {
      activePillarKey = pillarKey;
      renderCompliancePanel();
      if (window.bidverify3DSelectPillar) {
        window.bidverify3DSelectPillar(pillarKey);
      }
      if (typeof syncAIAssistantContext === 'function') {
        syncAIAssistantContext();
      }
    }

    function updateCheckStatus(pillarKey, checkId, newStatus) {
      const dossier = BID_DOSSIERS[currentDossierKey];
      const pillar = dossier.pillars.find(p => p.key === pillarKey);
      if (!pillar) return;
      const check = pillar.checks.find(c => c.id === checkId);
      if (!check) return;
      check.status = newStatus;
      recomputeAndRenderCompliance(false);
      const label = (STATUS_META[newStatus] && STATUS_META[newStatus].label) || newStatus;
      showToast(`${pillar.name} check marked: ${label}`);
    }

    function recomputeAndRenderCompliance(resetCounterFromZero) {
      const dossier = BID_DOSSIERS[currentDossierKey];
      computedCompliance = computeComplianceMetrics(dossier);
      document.getElementById('hud-tender-title').textContent = `${computedCompliance.id} · ${computedCompliance.bidder}`;
      renderCompliancePanel();
      if (typeof syncAuthUI === 'function') {
        syncAuthUI();
      }
      if (typeof syncAIAssistantContext === 'function') {
        syncAIAssistantContext();
      }
      if (window.bidverify3DUpdateData) {
        window.bidverify3DUpdateData(computedCompliance, resetCounterFromZero);
      }
      if (typeof activeSidebarItem !== 'undefined' && (activeSidebarItem === 'compliance-matrix' || activeSidebarItem === 'bid-comparison')) {
        renderOperationsView(activeSidebarItem);
      }
    }

    function runSimulatedAIScan() {
      recomputeAndRenderCompliance(true);
    }

    function renderCompliancePanel() {
      if (!computedCompliance) return;

      const overallEl = document.getElementById('panel-overall-score');
      overallEl.textContent = `${computedCompliance.overall}%`;
      const fb = document.getElementById('fallback-score');
      if (fb) fb.textContent = `${computedCompliance.overall}%`;

      const listEl = document.getElementById('pillars-summary-list');
      listEl.innerHTML = computedCompliance.pillars.map(p => {
        const meta = STATUS_META[p.status];
        const isSelected = p.key === activePillarKey;
        return `
          <button
            type="button"
            onclick="selectPillar('${p.key}')"
            class="text-left p-3 rounded-lg border transition-colors ${
              isSelected
                ? 'border-cyanbrand-500 bg-white dark:bg-navy-900 shadow-sm'
                : 'border-silver-200 dark:border-slate-800 bg-white/70 dark:bg-navy-900/60 hover:border-slate-400 dark:hover:border-slate-600'
            }"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-semibold text-navy-900 dark:text-white truncate">${p.name}</span>
              <span class="font-mono text-sm font-bold tabular-nums ${meta.textClass}">${p.percentage}%</span>
            </div>
            <div class="text-[11px] font-medium ${meta.textClass} mt-1">${meta.label}</div>
          </button>
        `;
      }).join('');

      const activePillar = computedCompliance.pillars.find(p => p.key === activePillarKey) || computedCompliance.pillars[0];
      const activeMeta = STATUS_META[activePillar.status];
      document.getElementById('active-pillar-title').textContent = activePillar.fullName;
      const pillarScoreEl = document.getElementById('active-pillar-score');
      pillarScoreEl.textContent = `${activePillar.percentage}% · ${activeMeta.label}`;
      pillarScoreEl.className = `font-mono text-sm sm:text-base font-bold tabular-nums ${activeMeta.textClass}`;

      const checksEl = document.getElementById('pillar-checks-list');
      checksEl.innerHTML = activePillar.checks.map(chk => {
        return `
          <div class="p-3 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60">
            <div class="flex items-start justify-between gap-2 mb-2">
              <div>
                <div class="text-xs font-semibold text-navy-900 dark:text-slate-100">${chk.label}</div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${chk.note}</div>
              </div>
              <span class="font-mono text-[11px] text-slate-400 shrink-0 tabular-nums">Wt ${chk.weight}%</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" title="Mark check as verified & compliant (100%)" onclick="updateCheckStatus('${activePillar.key}', '${chk.id}', 'compliant')" class="px-2 py-1 rounded text-[11px] font-medium transition-colors ${chk.status === 'compliant' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-navy-900 border border-silver-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-500'}">
                Compliant
              </button>
              <button type="button" title="Flag for manual Government Officer verification (55%)" onclick="updateCheckStatus('${activePillar.key}', '${chk.id}', 'review')" class="px-2 py-1 rounded text-[11px] font-medium transition-colors ${chk.status === 'review' ? 'bg-amber-500 text-navy-950 font-semibold' : 'bg-white dark:bg-navy-900 border border-silver-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-500'}">
                Manual Review
              </button>
              <button type="button" title="Mark check as missing or non-compliant (10%)" onclick="updateCheckStatus('${activePillar.key}', '${chk.id}', 'non_compliant')" class="px-2 py-1 rounded text-[11px] font-medium transition-colors ${chk.status === 'non_compliant' ? 'bg-crimson-600 text-white' : 'bg-white dark:bg-navy-900 border border-silver-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-crimson-500'}">
                Non-Compliant
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // 8. Account Authentication & Officer Sign-Off Engine (SHA-256 Web Crypto + localStorage)
    const AUTH_ACCOUNTS_KEY = 'bidverify_accounts_v1';
    const AUTH_SESSION_KEY = 'bidverify_session_v1';
    const OFFICER_SIGNOFFS_KEY = 'bidverify_signoffs_v1';

    let currentSession = null;

    function loadAccounts() {
      try {
        return JSON.parse(localStorage.getItem(AUTH_ACCOUNTS_KEY) || '[]');
      } catch {
        return [];
      }
    }

    function saveAccounts(accounts) {
      localStorage.setItem(AUTH_ACCOUNTS_KEY, JSON.stringify(accounts));
    }

    function loadSignOffs() {
      try {
        return JSON.parse(localStorage.getItem(OFFICER_SIGNOFFS_KEY) || '{}');
      } catch {
        return {};
      }
    }

    async function hashPassword(password, salt) {
      const encoder = new TextEncoder();
      const data = encoder.encode(`${salt}:${password}`);
      if (window.crypto && window.crypto.subtle) {
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
      }
      // Deterministic fallback only if subtle crypto is unavailable in non-secure context
      let h = 2166136261;
      const str = `${salt}:${password}`;
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return (h >>> 0).toString(16);
    }

    function restoreSession() {
      try {
        const raw = localStorage.getItem(AUTH_SESSION_KEY);
        currentSession = raw ? JSON.parse(raw) : null;
      } catch {
        currentSession = null;
      }
      syncAuthUI();
    }

    function openAuthModal(defaultTab) {
      const modal = document.getElementById('auth-modal');
      modal.classList.remove('hidden');
      hideAuthFeedback();
      if (currentSession) {
        renderAuthenticatedModal();
      } else {
        document.getElementById('auth-guest-view').classList.remove('hidden');
        document.getElementById('auth-user-view').classList.add('hidden');
        switchAuthTab(defaultTab === 'register' ? 'register' : 'login');
      }
    }

    function closeAuthModal() {
      document.getElementById('auth-modal').classList.add('hidden');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('auth-modal');
        if (modal && !modal.classList.contains('hidden')) closeAuthModal();
        if (typeof closeAIAssistant === 'function') closeAIAssistant();
        if (typeof toggleMobileSidebar === 'function') toggleMobileSidebar(false);
      }
    });

    function signInAsDemoOfficer() {
      currentSession = {
        id: 'demo-officer',
        name: 'Rajeshwari Iyer',
        email: 'officer.demo@tenderiq.gov.in',
        role: 'Government Tender Officer',
        org: 'Public Procurement Evaluation Cell'
      };
      try {
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(currentSession));
      } catch {}
      syncAuthUI();
      closeAuthModal();
      showToast('Signed in as Demo Officer (Rajeshwari Iyer)');
    }

    function switchAuthTab(tab) {
      hideAuthFeedback();
      const isLogin = tab === 'login';
      document.getElementById('login-form').classList.toggle('hidden', !isLogin);
      document.getElementById('register-form').classList.toggle('hidden', isLogin);
      document.getElementById('auth-modal-title').textContent = isLogin ? 'Account Sign In' : 'Create TENDER.iQ Account';

      const loginBtn = document.getElementById('auth-tab-login');
      const regBtn = document.getElementById('auth-tab-register');
      if (isLogin) {
        loginBtn.className = 'py-2 rounded-md text-xs font-semibold bg-white dark:bg-navy-800 text-navy-900 dark:text-white shadow-sm transition-colors';
        regBtn.className = 'py-2 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors';
      } else {
        regBtn.className = 'py-2 rounded-md text-xs font-semibold bg-white dark:bg-navy-800 text-navy-900 dark:text-white shadow-sm transition-colors';
        loginBtn.className = 'py-2 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors';
      }
    }

    function showAuthFeedback(message, isError) {
      const box = document.getElementById('auth-feedback');
      box.textContent = message;
      box.className = isError
        ? 'p-3 rounded-lg text-xs font-medium border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300'
        : 'p-3 rounded-lg text-xs font-medium border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300';
      box.classList.remove('hidden');
    }

    function hideAuthFeedback() {
      const box = document.getElementById('auth-feedback');
      if (box) box.classList.add('hidden');
    }

    function togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.textContent = isHidden ? 'Hide' : 'Show';
    }

    async function handleRegisterSubmit(event) {
      event.preventDefault();
      hideAuthFeedback();

      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim().toLowerCase();
      const role = document.getElementById('reg-role').value;
      const org = document.getElementById('reg-org').value.trim();
      const password = document.getElementById('reg-password').value;
      const confirm = document.getElementById('reg-confirm').value;

      if (!name || !email || !org || !password) {
        showAuthFeedback('All required fields must be completed.', true);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAuthFeedback('Please enter a valid official email address.', true);
        return;
      }
      if (password.length < 6) {
        showAuthFeedback('Password must be at least 6 characters long.', true);
        return;
      }
      if (password !== confirm) {
        showAuthFeedback('Passwords do not match.', true);
        return;
      }

      const accounts = loadAccounts();
      if (accounts.some(acc => acc.email === email)) {
        showAuthFeedback('An account with this email already exists. Please sign in instead.', true);
        return;
      }

      const salt = Math.random().toString(36).slice(2, 12);
      const passwordHash = await hashPassword(password, salt);
      const newUser = {
        id: 'usr-' + Date.now(),
        name,
        email,
        role,
        org,
        salt,
        passwordHash,
        createdAt: new Date().toISOString()
      };
      accounts.push(newUser);
      saveAccounts(accounts);

      currentSession = { id: newUser.id, name, email, role, org };
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(currentSession));
      document.getElementById('register-form').reset();
      syncAuthUI();
      renderAuthenticatedModal();
    }

    async function handleLoginSubmit(event) {
      event.preventDefault();
      hideAuthFeedback();

      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      if (!email || !password) {
        showAuthFeedback('Please enter both your email and password.', true);
        return;
      }

      const accounts = loadAccounts();
      const user = accounts.find(acc => acc.email === email);
      if (!user) {
        showAuthFeedback('No account found for this email. Please create an account first.', true);
        return;
      }

      const candidateHash = await hashPassword(password, user.salt);
      if (candidateHash !== user.passwordHash) {
        showAuthFeedback('Incorrect password. Please try again.', true);
        return;
      }

      currentSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        org: user.org
      };
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(currentSession));
      document.getElementById('login-form').reset();
      syncAuthUI();
      renderAuthenticatedModal();
    }

    function handleSignOut() {
      currentSession = null;
      localStorage.removeItem(AUTH_SESSION_KEY);
      syncAuthUI();
      closeAuthModal();
      showToast('Signed out');
    }

    function escapeHtml(str) {
      return String(str || '').replace(/[&<>"']/g, (ch) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[ch]));
    }

    function renderAuthenticatedModal() {
      if (!currentSession) return;
      hideAuthFeedback();
      document.getElementById('auth-modal-title').textContent = 'Active Session';
      document.getElementById('auth-guest-view').classList.add('hidden');
      document.getElementById('auth-user-view').classList.remove('hidden');
      document.getElementById('profile-name').textContent = currentSession.name;
      document.getElementById('profile-email').textContent = currentSession.email;
      document.getElementById('profile-role').textContent = currentSession.role;
      document.getElementById('profile-org').textContent = currentSession.org;
    }

    function recordOfficerSignOff() {
      if (!currentSession || !computedCompliance) return;
      const signOffs = loadSignOffs();
      signOffs[computedCompliance.id] = {
        officerName: currentSession.name,
        officerRole: currentSession.role,
        score: computedCompliance.overall,
        timestamp: new Date().toLocaleString()
      };
      localStorage.setItem(OFFICER_SIGNOFFS_KEY, JSON.stringify(signOffs));
      syncAuthUI();
      showToast(`Officer sign-off recorded for ${computedCompliance.id}`);
    }

    function syncAuthUI() {
      const navBtn = document.getElementById('nav-auth-btn');
      const mobileBtn = document.getElementById('mobile-auth-btn');
      const infoEl = document.getElementById('officer-session-info');
      const actionsEl = document.getElementById('officer-session-actions');
      const sbAvatar = document.getElementById('sidebar-user-avatar');
      const sbName = document.getElementById('sidebar-user-name');
      const sbRole = document.getElementById('sidebar-user-role');

      if (currentSession) {
        const firstName = currentSession.name.split(' ')[0];
        const initials = currentSession.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || 'BV';
        if (navBtn) navBtn.textContent = firstName;
        if (mobileBtn) mobileBtn.textContent = `Account (${firstName})`;
        if (sbAvatar) sbAvatar.textContent = initials;
        if (sbName) sbName.textContent = currentSession.name;
        if (sbRole) sbRole.textContent = currentSession.role;

        // Pre-fill booking form fields gently if empty
        const fName = document.getElementById('form-name');
        const fOrg = document.getElementById('form-org');
        const fEmail = document.getElementById('form-email');
        if (fName && !fName.value) fName.value = currentSession.name;
        if (fOrg && !fOrg.value) fOrg.value = currentSession.org;
        if (fEmail && !fEmail.value) fEmail.value = currentSession.email;

        const signOffs = loadSignOffs();
        const existingSignOff = computedCompliance ? signOffs[computedCompliance.id] : null;
        const canSignOff = currentSession.role === 'Government Tender Officer' || currentSession.role === 'Tender Evaluation Team';

        if (infoEl && actionsEl) {
          if (existingSignOff) {
            infoEl.innerHTML = `<span class="font-semibold text-emerald-600 dark:text-emerald-400">Verified by ${escapeHtml(existingSignOff.officerName)}</span> · ${escapeHtml(existingSignOff.timestamp)}`;
          } else {
            infoEl.innerHTML = `<span class="font-semibold text-navy-900 dark:text-white">${escapeHtml(currentSession.name)}</span> · ${escapeHtml(currentSession.role)}`;
          }
          actionsEl.innerHTML = `
            ${canSignOff ? `<button type="button" onclick="recordOfficerSignOff()" class="px-3 py-1.5 rounded-md font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors whitespace-nowrap">Record Sign-Off</button>` : ''}
            <button type="button" onclick="openAuthModal()" class="px-2.5 py-1.5 rounded-md font-medium border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-slate-200 hover:border-cyanbrand-500 transition-colors whitespace-nowrap">Account</button>
          `;
        }
      } else {
        if (navBtn) navBtn.textContent = 'Sign In';
        if (mobileBtn) mobileBtn.textContent = 'Sign In / Account';
        if (sbAvatar) sbAvatar.textContent = 'GV';
        if (sbName) sbName.textContent = 'Guest Officer';
        if (sbRole) sbRole.textContent = 'Sign in to verify';
        if (infoEl && actionsEl) {
          infoEl.textContent = 'Guest Preview · Sign in to record officer sign-off';
          actionsEl.innerHTML = `
            <button type="button" onclick="openAuthModal('login')" class="px-3 py-1.5 rounded-md font-semibold bg-navy-900 text-white hover:bg-navy-800 dark:bg-cyanbrand-500 dark:text-navy-950 dark:hover:bg-cyanbrand-400 transition-colors whitespace-nowrap">Sign In</button>
          `;
        }
      }
    }

    // =========================================================================
    // 9. ENTERPRISE VERTICAL SIDEBAR & OPERATIONS WORKSPACE ENGINE
    // =========================================================================
    const SIDEBAR_ICONS = {
      dashboard: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
      overview: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>',
      briefcase: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
      upload: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>',
      users: '<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
      docCheck: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      checklist: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',
      cpu: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>',
      wrench: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
      currency: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      shieldAlert: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>',
      fileSearch: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"/>',
      grid: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>',
      badgeCheck: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>',
      columns: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
      report: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
      clock: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      user: '<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
      bell: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>',
      cog: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>',
      help: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      sparkles: '<path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>'
    };

    const SIDEBAR_GROUPS = [
      {
        id: 'main-menu',
        title: 'MAIN MENU',
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'project-overview', label: 'Project Overview', icon: 'overview' },
          { id: 'bid-management', label: 'Bid Management', icon: 'briefcase' }
        ]
      },
      {
        id: 'bid-management-group',
        title: 'BID MANAGEMENT',
        items: [
          { id: 'upload-docs', label: 'Upload Tender Documents', icon: 'upload' },
          { id: 'bidder-info', label: 'Bidder Information', icon: 'users' },
          { id: 'doc-verification', label: 'Document Verification', icon: 'docCheck' },
          { id: 'compliance-checklist', label: 'Compliance Checklist', icon: 'checklist' }
        ]
      },
      {
        id: 'ai-analysis',
        title: 'AI ANALYSIS',
        items: [
          { id: 'ai-analysis', label: 'AI Compliance Analysis', icon: 'cpu' },
          { id: 'ai-assistant', label: 'AI Doubt Assistant', icon: 'sparkles' },
          { id: 'tech-eval', label: 'Technical Evaluation', icon: 'wrench' },
          { id: 'fin-eval', label: 'Financial Evaluation', icon: 'currency' },
          { id: 'risk-assessment', label: 'Risk Assessment', icon: 'shieldAlert' },
          { id: 'missing-docs', label: 'Missing Document Detection', icon: 'fileSearch' }
        ]
      },
      {
        id: 'compliance-reports',
        title: 'COMPLIANCE & REPORTS',
        items: [
          { id: 'compliance-matrix', label: 'Compliance Matrix', icon: 'grid' },
          { id: 'eligibility-verification', label: 'Eligibility Verification', icon: 'badgeCheck' },
          { id: 'bid-comparison', label: 'Bid Comparison', icon: 'columns' },
          { id: 'generate-reports', label: 'Generate Reports', icon: 'report' },
          { id: 'audit-history', label: 'Audit History', icon: 'clock' }
        ]
      },
      {
        id: 'settings-group',
        title: 'SETTINGS',
        items: [
          { id: 'user-profile', label: 'User Profile', icon: 'user' },
          { id: 'notifications', label: 'Notifications', icon: 'bell' },
          { id: 'settings', label: 'Settings', icon: 'cog' },
          { id: 'help-support', label: 'Help & Support', icon: 'help' }
        ]
      }
    ];

    let activeSidebarItem = 'dashboard';
    let sidebarCollapsed = false;
    const expandedGroups = {
      'main-menu': true,
      'bid-management-group': true,
      'ai-analysis': true,
      'compliance-reports': true,
      'settings-group': true
    };
    const stagedDocuments = [
      { id: 'doc-1', name: 'NHAI_Apex_GST_Returns_FY26.pdf', category: 'GST Verification', size: '1.4 MB', tenderId: 'NHAI-2026-441', status: 'Pre-Screened' },
      { id: 'doc-2', name: 'Bharat_MedTech_OEM_Auth.pdf', category: 'Document Validity', size: '620 KB', tenderId: 'GEM-2026-892', status: 'Flagged for Officer' },
      { id: 'doc-3', name: 'Vertex_Civil_Audited_Balance_Sheet.pdf', category: 'Financial Eligibility', size: '2.8 MB', tenderId: 'PWD-2026-118', status: 'Needs Review' }
    ];

    function setActiveSidebarItem(itemId) {
      activeSidebarItem = itemId;
      renderSidebarNav();
    }

    function toggleSidebarGroup(groupId) {
      if (sidebarCollapsed) {
        toggleSidebarCollapse(false);
        expandedGroups[groupId] = true;
      } else {
        expandedGroups[groupId] = !expandedGroups[groupId];
      }
      renderSidebarNav();
    }

    function toggleSidebarCollapse(forceState) {
      // On mobile/tablet (< 1024px), the button closes the slide-over drawer
      if (window.innerWidth < 1024) {
        toggleMobileSidebar(false);
        return;
      }
      sidebarCollapsed = typeof forceState === 'boolean' ? forceState : !sidebarCollapsed;
      const sidebar = document.getElementById('app-sidebar');
      const shell = document.getElementById('app-main-shell');
      const brandText = document.getElementById('sidebar-brand-text');
      const userMeta = document.getElementById('sidebar-user-meta');
      const icon = document.getElementById('sidebar-collapse-icon');
      const collapseBtn = document.getElementById('sidebar-collapse-btn');

      if (sidebarCollapsed) {
        sidebar.classList.remove('w-[260px]');
        sidebar.classList.add('w-[72px]');
        shell.classList.remove('lg:pl-[260px]');
        shell.classList.add('lg:pl-[72px]');
        brandText.classList.add('hidden');
        userMeta.classList.add('hidden');
        icon.classList.add('rotate-180');
        collapseBtn.title = 'Expand sidebar';
      } else {
        sidebar.classList.remove('w-[72px]');
        sidebar.classList.add('w-[260px]');
        shell.classList.remove('lg:pl-[72px]');
        shell.classList.add('lg:pl-[260px]');
        brandText.classList.remove('hidden');
        userMeta.classList.remove('hidden');
        icon.classList.remove('rotate-180');
        collapseBtn.title = 'Collapse sidebar';
      }
      renderSidebarNav();
      if (window.bidverify3DResize) {
        setTimeout(() => window.bidverify3DResize(), 220);
      }
    }

    function toggleMobileSidebar(show) {
      const sidebar = document.getElementById('app-sidebar');
      const backdrop = document.getElementById('sidebar-backdrop');
      if (show) {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
        backdrop.classList.add('hidden');
      }
    }

    function renderSidebarNav() {
      const container = document.getElementById('sidebar-nav-tree');
      if (!container) return;

      container.innerHTML = SIDEBAR_GROUPS.map(group => {
        const isOpen = !!expandedGroups[group.id];
        const itemsHtml = (sidebarCollapsed || isOpen) ? `
          <div class="space-y-0.5 ${sidebarCollapsed ? '' : 'mt-1.5'}">
            ${group.items.map(item => {
              const isActive = item.id === activeSidebarItem;
              return `
                <button
                  type="button"
                  onclick="handleSidebarAction('${item.id}')"
                  title="${item.label}"
                  class="w-full flex items-center ${sidebarCollapsed ? 'justify-center px-2 py-2.5' : 'gap-2.5 px-2.5 py-2'} rounded-lg text-left text-[13px] border transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-blue-200/90 font-semibold dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30 shadow-[0_1px_2px_rgba(37,99,235,0.06)]'
                      : 'border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/70 hover:text-navy-900 dark:hover:text-white font-medium'
                  }"
                >
                  <svg class="w-4 h-4 shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}" fill="none" stroke="currentColor" stroke-width="1.85" viewBox="0 0 24 24" aria-hidden="true">
                    ${SIDEBAR_ICONS[item.icon] || SIDEBAR_ICONS.dashboard}
                  </svg>
                  ${sidebarCollapsed ? '' : `<span class="truncate">${item.label}</span>`}
                </button>
              `;
            }).join('')}
          </div>
        ` : '';

        return `
          <div>
            ${sidebarCollapsed ? '<div class="my-2 border-t border-[#E2E5EB] dark:border-slate-800"></div>' : `
              <button
                type="button"
                onclick="toggleSidebarGroup('${group.id}')"
                aria-expanded="${isOpen}"
                class="w-full flex items-center justify-between px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <span class="truncate">${group.title}</span>
                <svg class="w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${isOpen ? 'rotate-0' : '-rotate-90'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
            `}
            ${itemsHtml}
          </div>
        `;
      }).join('');
    }

    function jumpToCompliancePillar(pillarKey, shouldScan) {
      navigateTo('home', { preserveSidebar: true, skipScroll: true });
      selectPillar(pillarKey);
      if (shouldScan) {
        runSimulatedAIScan();
      }
      const dash = document.getElementById('compliance-3d-dashboard');
      if (dash) {
        setTimeout(() => dash.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
      }
    }

    function handleSidebarAction(itemId) {
      setActiveSidebarItem(itemId);
      if (window.innerWidth < 1024) {
        toggleMobileSidebar(false);
      }

      switch (itemId) {
        case 'dashboard':
          navigateTo('home', { preserveSidebar: true });
          break;
        case 'project-overview':
          navigateTo('about', { preserveSidebar: true });
          break;
        case 'bid-management':
          filterCatalog('All');
          navigateTo('catalog', { preserveSidebar: true });
          break;
        case 'doc-verification':
          jumpToCompliancePillar('validity', false);
          break;
        case 'compliance-checklist':
          jumpToCompliancePillar('gst', false);
          break;
        case 'ai-analysis':
          jumpToCompliancePillar('gst', true);
          break;
        case 'ai-assistant':
          openAIAssistant();
          break;
        case 'eligibility-verification':
          jumpToCompliancePillar('eligibility', false);
          break;
        case 'user-profile':
          openAuthModal('login');
          break;
        case 'help-support':
          navigateTo('booking', { preserveSidebar: true });
          break;
        default:
          navigateTo('operations', { preserveSidebar: true });
          renderOperationsView(itemId);
          break;
      }
    }

    function handleTenderFileUpload(input) {
      const files = Array.from(input.files || []);
      if (!files.length) return;
      const catEl = document.getElementById('ops-upload-category');
      const tenderEl = document.getElementById('ops-upload-tender');
      const category = catEl ? catEl.value : 'Statutory Document';
      const tenderId = tenderEl ? tenderEl.value : BID_DOSSIERS[currentDossierKey].id;

      files.forEach(file => {
        const sizeKb = Math.max(1, Math.round(file.size / 1024));
        const sizeStr = sizeKb >= 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;
        stagedDocuments.unshift({
          id: 'doc-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
          name: file.name,
          category,
          size: sizeStr,
          tenderId,
          status: 'Staged for AI Scan'
        });
      });
      input.value = '';
      renderOperationsView('upload-docs');
      showToast(`Staged ${files.length} document${files.length > 1 ? 's' : ''} for AI scan`);
    }

    function removeStagedDocument(docId) {
      const idx = stagedDocuments.findIndex(d => d.id === docId);
      if (idx !== -1) stagedDocuments.splice(idx, 1);
      renderOperationsView('upload-docs');
      showToast('Document removed from queue');
    }

    function downloadComplianceReport() {
      if (!computedCompliance) return;
      const signOffs = loadSignOffs();
      const signOff = signOffs[computedCompliance.id];
      const reportLines = [
        'TENDER.iQ — COMPLIANCE ASSESSMENT BRIEF',
        'Motto: Verify Smart. Bid Confidently',
        '====================================================',
        `Tender ID: ${computedCompliance.id}`,
        `Bidder: ${computedCompliance.bidder}`,
        `Overall Compliance Score: ${computedCompliance.overall}% (${STATUS_META[computedCompliance.overallStatus].label})`,
        `Officer Sign-Off: ${signOff ? `${signOff.officerName} (${signOff.officerRole}) on ${signOff.timestamp}` : 'Pending Government Officer Verification'}`,
        '',
        'PILLAR BREAKDOWN:',
        ...computedCompliance.pillars.map(p => `- ${p.fullName}: ${p.percentage}% [${STATUS_META[p.status].label}]`),
        '',
        'DETAILED CHECKS:',
        ...computedCompliance.pillars.flatMap(p =>
          p.checks.map(c => `  * [${p.name}] ${c.label}: ${STATUS_META[c.status].label} — ${c.note}`)
        ),
        '',
        'Note: AI provides pre-verification intelligence. Final tender compliance authority rests with authorized Government Officers.'
      ];
      const blob = new Blob([reportLines.join('\n')], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${computedCompliance.id}_Compliance_Report.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Downloaded ${computedCompliance.id} brief`);
    }

    let matrixScoreFilter = 'all'; // 'all' | 'lt50' | '50_79' | 'gte80' | 'custom'
    let matrixCustomMin = 0;
    let matrixCustomMax = 100;
    let matrixSearchQuery = '';
    let matrixSortOrder = 'score_desc'; // 'score_desc' | 'score_asc' | 'id_asc'
    let currentMatrixMode = 'compliance-matrix';

    function matchesMatrixRange(overall, filterKey) {
      if (filterKey === 'lt50') return overall < 50;
      if (filterKey === '50_79') return overall >= 50 && overall < 80;
      if (filterKey === 'gte80') return overall >= 80;
      if (filterKey === 'custom') {
        const low = Math.min(matrixCustomMin, matrixCustomMax);
        const high = Math.max(matrixCustomMin, matrixCustomMax);
        return overall >= low && overall <= high;
      }
      return true;
    }

    function setMatrixScoreFilter(filterKey) {
      matrixScoreFilter = filterKey;
      renderOperationsView(currentMatrixMode);
    }

    function setMatrixCustomRange(bound, rawVal) {
      const parsed = Math.max(0, Math.min(100, Number.isFinite(Number(rawVal)) ? Number(rawVal) : (bound === 'min' ? 0 : 100)));
      if (bound === 'min') matrixCustomMin = parsed;
      else matrixCustomMax = parsed;
      matrixScoreFilter = 'custom';
      updateMatrixTableDom();
    }

    function setMatrixSearchQuery(val) {
      matrixSearchQuery = (val || '').trim();
      updateMatrixTableDom();
    }

    function setMatrixSortOrder(order) {
      matrixSortOrder = order || 'score_desc';
      updateMatrixTableDom();
    }

    function resetMatrixFilters() {
      matrixScoreFilter = 'all';
      matrixCustomMin = 0;
      matrixCustomMax = 100;
      matrixSearchQuery = '';
      matrixSortOrder = 'score_desc';
      renderOperationsView(currentMatrixMode);
    }

    function getFilteredMatrixDossiers() {
      const allDossiers = Object.entries(BID_DOSSIERS).map(([key, d]) => ({
        key,
        ...computeComplianceMetrics(d),
        raw: d
      }));
      const q = matrixSearchQuery.toLowerCase();
      const filtered = allDossiers.filter(d => {
        if (!matchesMatrixRange(d.overall, matrixScoreFilter)) return false;
        if (q && !d.id.toLowerCase().includes(q) && !d.bidder.toLowerCase().includes(q)) return false;
        return true;
      });
      filtered.sort((a, b) => {
        if (matrixSortOrder === 'score_asc') return a.overall - b.overall;
        if (matrixSortOrder === 'id_asc') return a.id.localeCompare(b.id);
        return b.overall - a.overall;
      });
      return { allDossiers, filtered };
    }

    function buildMatrixRowsHtml(filtered, pillarCount) {
      if (!filtered.length) {
        return `
          <tr>
            <td colspan="${pillarCount + 4}" class="py-10 px-6 text-center">
              <div class="text-sm font-semibold text-navy-900 dark:text-white">No tenders match the selected compliance score range</div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Adjust your percentage range or clear active search filters to inspect all bid dossiers.</p>
              <button type="button" onclick="resetMatrixFilters()" class="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Show All Tenders
              </button>
            </td>
          </tr>
        `;
      }
      return filtered.map(d => {
        const meta = STATUS_META[d.overallStatus] || STATUS_META.review;
        const isCurrent = d.key === currentDossierKey;
        return `
          <tr class="hover:bg-silver-50 dark:hover:bg-navy-800/40 transition-colors ${isCurrent ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''}">
            <td class="py-3.5 px-4">
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-blue-600 dark:text-blue-400">${d.id}</span>
                ${isCurrent ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">Active</span>' : ''}
              </div>
              <div class="font-semibold text-navy-900 dark:text-white">${d.bidder}</div>
            </td>
            ${d.pillars.map(p => `
              <td class="py-3.5 px-3 text-right font-mono font-semibold tabular-nums ${STATUS_META[p.status].textClass}">${p.percentage}%</td>
            `).join('')}
            <td class="py-3.5 px-4 text-right font-mono font-bold tabular-nums ${meta.textClass}">${d.overall}%</td>
            <td class="py-3.5 px-4 text-right whitespace-nowrap">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold ${meta.textClass}">
                <span class="w-1.5 h-1.5 rounded-full" style="background:${meta.dotColor}"></span>
                ${meta.label}
              </span>
            </td>
            <td class="py-3.5 px-4 text-right">
              <button type="button" onclick="selectDossier('${d.key}'); document.getElementById('dossier-select').value='${d.key}'; handleSidebarAction('compliance-checklist')" class="px-3 py-1.5 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 hover:border-blue-500 text-navy-900 dark:text-white transition-colors">
                Inspect
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    function updateMatrixTableDom() {
      const tbody = document.getElementById('matrix-table-body');
      const countEl = document.getElementById('matrix-result-count');
      const avgEl = document.getElementById('matrix-filtered-avg');
      const resetBtn = document.getElementById('matrix-reset-btn');
      if (!tbody) return;

      const { allDossiers, filtered } = getFilteredMatrixDossiers();
      const pillarCount = allDossiers[0] ? allDossiers[0].pillars.length : 6;
      tbody.innerHTML = buildMatrixRowsHtml(filtered, pillarCount);

      if (countEl) {
        countEl.textContent = `Showing ${filtered.length} of ${allDossiers.length} tenders`;
      }
      if (avgEl) {
        const avg = filtered.length ? Math.round(filtered.reduce((acc, d) => acc + d.overall, 0) / filtered.length) : 0;
        avgEl.textContent = filtered.length ? `Filtered Avg: ${avg}%` : 'Filtered Avg: —';
      }
      if (resetBtn) {
        const hasFilter = matrixScoreFilter !== 'all' || matrixSearchQuery.length > 0 || matrixSortOrder !== 'score_desc';
        resetBtn.classList.toggle('hidden', !hasFilter);
      }
    }

    function renderOperationsView(mode) {
      const root = document.getElementById('operations-dynamic-root');
      if (!root) return;

      const allDossiers = Object.entries(BID_DOSSIERS).map(([key, d]) => ({
        key,
        ...computeComplianceMetrics(d),
        raw: d
      }));
      const activeMetrics = computeComplianceMetrics(BID_DOSSIERS[currentDossierKey]);
      const signOffs = loadSignOffs();

      const statusBadge = (st) => {
        const m = STATUS_META[st] || STATUS_META.review;
        return `<span class="font-semibold ${m.textClass}">${m.label}</span>`;
      };

      const headerBlock = (kicker, title, subtitle) => `
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-silver-200 dark:border-slate-800">
          <div>
            <p class="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-1">${kicker}</p>
            <h2 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 dark:text-white">${title}</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">${subtitle}</p>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <button type="button" onclick="openAIAssistant()" class="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap">
              Ask AI Assistant
            </button>
            <button type="button" onclick="handleSidebarAction('dashboard')" class="px-4 py-2 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-blue-500 transition-colors whitespace-nowrap">
              Open 2D Compliance Dashboard
            </button>
          </div>
        </div>
      `;

      if (mode === 'upload-docs') {
        root.innerHTML = `
          ${headerBlock('Bid Management · Document Staging', 'Upload Tender Documents', 'Stage bidder statutory certificates, audited balance sheets, and notarized affidavits for automated AI pre-screening before Government Officer review.')}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5 p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <div>
                <label for="ops-upload-tender" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Target Tender Dossier</label>
                <select id="ops-upload-tender" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white">
                  ${allDossiers.map(d => `<option value="${d.id}" ${d.key === currentDossierKey ? 'selected' : ''}>${d.id} · ${d.bidder}</option>`).join('')}
                </select>
              </div>
              <div>
                <label for="ops-upload-category" class="block text-xs font-semibold text-navy-900 dark:text-slate-200 mb-1.5">Statutory Document Category</label>
                <select id="ops-upload-category" class="w-full px-3.5 py-2.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-sm text-navy-900 dark:text-white">
                  <option value="GST Verification">GST Registration / GSTR-3B</option>
                  <option value="PAN & Signatory">Corporate PAN / Board Resolution</option>
                  <option value="Udyam MSME">Udyam MSME Certificate</option>
                  <option value="Company Registration">MCA Incorporation / License</option>
                  <option value="Financial Eligibility">Audited Turnover &amp; Work Orders</option>
                </select>
              </div>
              <label class="block p-6 rounded-xl border-2 border-dashed border-silver-300 dark:border-slate-700 hover:border-blue-500 text-center cursor-pointer transition-colors bg-silver-50/70 dark:bg-navy-950/60">
                <input type="file" multiple accept=".pdf,.doc,.docx,.xlsx,.png,.jpg" class="hidden" onchange="handleTenderFileUpload(this)" />
                <div class="text-sm font-semibold text-navy-900 dark:text-white">Select Tender Files to Stage</div>
                <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">PDF, DOCX, XLSX, or Scanned Certificates</div>
              </label>
            </div>
            <div class="lg:col-span-7 p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-display text-base font-semibold text-navy-900 dark:text-white">Staged Verification Queue</h3>
                <span class="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">${stagedDocuments.length} files</span>
              </div>
              <div class="space-y-2.5">
                ${stagedDocuments.map(doc => `
                  <div class="p-3.5 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950 flex items-center justify-between gap-3">
                    <div class="min-w-0">
                      <div class="text-xs sm:text-sm font-semibold text-navy-900 dark:text-white truncate">${escapeHtml(doc.name)}</div>
                      <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${escapeHtml(doc.tenderId)} · ${escapeHtml(doc.category)} · <span class="font-mono">${escapeHtml(doc.size)}</span></div>
                    </div>
                    <div class="flex items-center gap-3 shrink-0">
                      <span class="text-xs font-medium text-blue-600 dark:text-blue-400">${escapeHtml(doc.status)}</span>
                      <button type="button" onclick="removeStagedDocument('${doc.id}')" class="text-xs text-slate-400 hover:text-red-600 transition-colors">Remove</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        return;
      }

      if (mode === 'bidder-info') {
        root.innerHTML = `
          ${headerBlock('Bid Management · Registry Directory', 'Bidder Information', 'Verified corporate entities registered under active procurement dossiers. Select any bidder to inspect full compliance checks.')}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${allDossiers.map(d => {
              const gstCheck = d.pillars.find(p => p.key === 'gst').checks[0].label;
              const signed = signOffs[d.id];
              return `
                <article class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 flex flex-col justify-between space-y-4">
                  <div>
                    <div class="font-mono text-xs text-blue-600 dark:text-blue-400 mb-1">${d.id}</div>
                    <h3 class="font-display text-lg font-bold text-navy-900 dark:text-white">${d.bidder}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">${gstCheck}</p>
                    <div class="mt-4 pt-4 border-t border-silver-200 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span class="text-slate-500 dark:text-slate-400">Overall Score</span>
                      <span class="font-mono font-bold tabular-nums ${STATUS_META[d.overallStatus].textClass}">${d.overall}% · ${STATUS_META[d.overallStatus].label}</span>
                    </div>
                    <div class="mt-2 flex items-center justify-between text-xs">
                      <span class="text-slate-500 dark:text-slate-400">Officer Verification</span>
                      <span class="font-medium ${signed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}">${signed ? signed.officerName : 'Pending'}</span>
                    </div>
                  </div>
                  <button type="button" onclick="selectDossier('${d.key}'); document.getElementById('dossier-select').value='${d.key}'; handleSidebarAction('compliance-checklist')" class="w-full py-2 px-4 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Inspect Dossier
                  </button>
                </article>
              `;
            }).join('')}
          </div>
        `;
        return;
      }

      if (mode === 'tech-eval' || mode === 'fin-eval') {
        const isTech = mode === 'tech-eval';
        const targetKeys = isTech ? ['company', 'validity', 'eligibility'] : ['gst', 'pan', 'udyam'];
        const pillars = activeMetrics.pillars.filter(p => targetKeys.includes(p.key));
        root.innerHTML = `
          ${headerBlock(isTech ? 'AI Analysis · Technical Scrutiny' : 'AI Analysis · Financial & Tax Scrutiny', isTech ? 'Technical Evaluation' : 'Financial Evaluation', `Live weighted assessment for ${activeMetrics.id} (${activeMetrics.bidder}). AI flags anomalies; final rulings remain with Government Officers.`)}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${pillars.map(p => `
              <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-display text-base font-bold text-navy-900 dark:text-white">${p.fullName}</h3>
                  <span class="font-mono text-lg font-bold tabular-nums ${STATUS_META[p.status].textClass}">${p.percentage}%</span>
                </div>
                <div class="space-y-2.5">
                  ${p.checks.map(c => `
                    <div class="p-3 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60 text-xs">
                      <div class="font-semibold text-navy-900 dark:text-slate-100">${c.label}</div>
                      <div class="text-slate-500 dark:text-slate-400 mt-0.5">${c.note}</div>
                      <div class="mt-1.5 flex items-center justify-between">
                        ${statusBadge(c.status)}
                        <span class="font-mono text-slate-400 tabular-nums">Wt ${c.weight}%</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
                <button type="button" onclick="jumpToCompliancePillar('${p.key}', false)" class="w-full py-2 px-3 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 hover:border-blue-500 text-navy-900 dark:text-white transition-colors">
                  Override in Officer Workbench
                </button>
              </div>
            `).join('')}
          </div>
        `;
        return;
      }

      if (mode === 'risk-assessment' || mode === 'missing-docs') {
        const isMissing = mode === 'missing-docs';
        const flagged = [];
        allDossiers.forEach(d => {
          d.pillars.forEach(p => {
            p.checks.forEach(c => {
              const matchesMissing = !isMissing || c.status === 'non_compliant' || /missing|expired|pending|seal|receipt/i.test(c.note + ' ' + c.label);
              if (c.status !== 'compliant' && matchesMissing) {
                flagged.push({ dossierKey: d.key, tenderId: d.id, bidder: d.bidder, pillarKey: p.key, pillarName: p.name, ...c });
              }
            });
          });
        });
        root.innerHTML = `
          ${headerBlock(isMissing ? 'AI Analysis · Completeness Scan' : 'AI Analysis · Risk Register', isMissing ? 'Missing Document Detection' : 'Risk Assessment', 'Items flagged as Non-Compliant or Manual Review across active dossiers requiring Government Officer confirmation.')}
          <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 divide-y divide-silver-200 dark:divide-slate-800">
            ${flagged.length ? flagged.map(item => `
              <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">${item.tenderId} · ${item.bidder} · ${item.pillarName}</div>
                  <div class="text-sm font-semibold text-navy-900 dark:text-white mt-0.5">${item.label}</div>
                  <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">${item.note}</div>
                </div>
                <div class="flex items-center gap-3 shrink-0">
                  <span class="text-xs">${statusBadge(item.status)}</span>
                  <button type="button" onclick="selectDossier('${item.dossierKey}'); document.getElementById('dossier-select').value='${item.dossierKey}'; jumpToCompliancePillar('${item.pillarKey}', false)" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Review Item
                  </button>
                </div>
              </div>
            `).join('') : '<div class="p-8 text-center text-sm text-slate-500 dark:text-slate-400">No flagged or missing document issues detected across active dossiers.</div>'}
          </div>
        `;
        return;
      }

      if (mode === 'compliance-matrix' || mode === 'bid-comparison') {
        currentMatrixMode = mode;
        const { filtered } = getFilteredMatrixDossiers();
        const counts = {
          all: allDossiers.length,
          lt50: allDossiers.filter(d => d.overall < 50).length,
          '50_79': allDossiers.filter(d => d.overall >= 50 && d.overall < 80).length,
          gte80: allDossiers.filter(d => d.overall >= 80).length
        };
        const filterButtons = [
          { id: 'all', label: 'All Tenders', count: counts.all, dot: '' },
          { id: 'lt50', label: '< 50% (Alert)', count: counts.lt50, dot: '#EF4444' },
          { id: '50_79', label: '50–79% (Review)', count: counts['50_79'], dot: '#F59E0B' },
          { id: 'gte80', label: '≥ 80% (Compliant)', count: counts.gte80, dot: '#10B981' },
          { id: 'custom', label: 'Custom Range', count: null, dot: '#38BDF8' }
        ];
        const hasFilter = matrixScoreFilter !== 'all' || matrixSearchQuery.length > 0 || matrixSortOrder !== 'score_desc';
        const filteredAvg = filtered.length ? Math.round(filtered.reduce((acc, d) => acc + d.overall, 0) / filtered.length) : 0;

        root.innerHTML = `
          ${headerBlock('Compliance & Reports · Comparative View', mode === 'compliance-matrix' ? 'Compliance Matrix' : 'Bid Comparison', 'Real-time side-by-side scoring across all six statutory verification pillars. Filter tender rows dynamically by compliance score range.')}

          <!-- Dynamic Score-Range Filter & Search Toolbar -->
          <div class="p-4 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-3">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter tenders by compliance score range">
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1.5">Score Range:</span>
                ${filterButtons.map(btn => {
                  const isActive = matrixScoreFilter === btn.id;
                  return `
                    <button
                      type="button"
                      onclick="setMatrixScoreFilter('${btn.id}')"
                      aria-pressed="${isActive}"
                      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
                        isActive
                          ? 'border-blue-600 bg-blue-600 text-white dark:border-cyanbrand-500 dark:bg-cyanbrand-500 dark:text-navy-950'
                          : 'border-silver-200 dark:border-slate-700 bg-silver-50 dark:bg-navy-950/60 text-slate-700 dark:text-slate-200 hover:border-blue-400'
                      }"
                    >
                      ${btn.dot ? `<span class="w-1.5 h-1.5 rounded-full shrink-0" style="background:${isActive ? 'currentColor' : btn.dot}"></span>` : ''}
                      <span>${btn.label}</span>
                      ${btn.count !== null ? `<span class="font-mono text-[11px] opacity-80 tabular-nums">(${btn.count})</span>` : ''}
                    </button>
                  `;
                }).join('')}
              </div>

              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <input
                  type="search"
                  id="matrix-search-input"
                  value="${escapeHtml(matrixSearchQuery)}"
                  oninput="setMatrixSearchQuery(this.value)"
                  placeholder="Filter Tender ID or Bidder..."
                  aria-label="Filter Tender ID or Bidder"
                  class="px-3 py-1.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-xs text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                />
                <select
                  id="matrix-sort-select"
                  onchange="setMatrixSortOrder(this.value)"
                  aria-label="Sort compliance matrix"
                  class="px-2.5 py-1.5 rounded-lg border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 text-xs font-medium text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="score_desc" ${matrixSortOrder === 'score_desc' ? 'selected' : ''}>Score: High → Low</option>
                  <option value="score_asc" ${matrixSortOrder === 'score_asc' ? 'selected' : ''}>Score: Low → High</option>
                  <option value="id_asc" ${matrixSortOrder === 'id_asc' ? 'selected' : ''}>Tender ID (A–Z)</option>
                </select>
                <button
                  type="button"
                  id="matrix-reset-btn"
                  onclick="resetMatrixFilters()"
                  class="${hasFilter ? '' : 'hidden'} px-2.5 py-1.5 rounded-lg text-xs font-semibold text-crimson-600 dark:text-crimson-400 border border-crimson-200 dark:border-crimson-800/60 hover:bg-crimson-50 dark:hover:bg-crimson-950/30 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            ${matrixScoreFilter === 'custom' ? `
              <div class="pt-3 border-t border-silver-200 dark:border-slate-800 flex flex-wrap items-center gap-3 text-xs">
                <span class="font-semibold text-navy-900 dark:text-slate-200">Custom Score Bounds:</span>
                <label class="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <span>Min %</span>
                  <input type="number" min="0" max="100" value="${matrixCustomMin}" oninput="setMatrixCustomRange('min', this.value)" class="w-16 px-2 py-1 rounded border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 font-mono text-navy-900 dark:text-white tabular-nums" />
                </label>
                <span class="text-slate-400">to</span>
                <label class="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <span>Max %</span>
                  <input type="number" min="0" max="100" value="${matrixCustomMax}" oninput="setMatrixCustomRange('max', this.value)" class="w-16 px-2 py-1 rounded border border-silver-300 dark:border-slate-700 bg-silver-50 dark:bg-navy-950 font-mono text-navy-900 dark:text-white tabular-nums" />
                </label>
                <span class="text-[11px] text-slate-500 dark:text-slate-400">Updates rows live as bounds change</span>
              </div>
            ` : ''}

            <div class="pt-2 border-t border-silver-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span id="matrix-result-count" class="font-mono tabular-nums">Showing ${filtered.length} of ${allDossiers.length} tenders</span>
              <span id="matrix-filtered-avg" class="font-mono font-semibold text-navy-900 dark:text-slate-200 tabular-nums">${filtered.length ? `Filtered Avg: ${filteredAvg}%` : 'Filtered Avg: —'}</span>
            </div>
          </div>

          <div class="rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="border-b border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60 text-xs text-slate-500 dark:text-slate-400">
                  <th class="py-3.5 px-4 font-semibold">Tender &amp; Bidder</th>
                  ${allDossiers[0].pillars.map(p => `<th class="py-3.5 px-3 font-semibold text-right">${p.name}</th>`).join('')}
                  <th class="py-3.5 px-4 font-semibold text-right">Overall</th>
                  <th class="py-3.5 px-4 font-semibold text-right">Compliance Band</th>
                  <th class="py-3.5 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody id="matrix-table-body" class="divide-y divide-silver-200 dark:divide-slate-800">
                ${buildMatrixRowsHtml(filtered, allDossiers[0].pillars.length)}
              </tbody>
            </table>
          </div>
        `;
        return;
      }

      if (mode === 'generate-reports') {
        const signOff = signOffs[activeMetrics.id];
        root.innerHTML = `
          ${headerBlock('Compliance & Reports · Exportable Brief', 'Generate Reports', 'Export a structured statutory compliance summary for the currently active tender dossier.')}
          <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-5">
            <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-silver-200 dark:border-slate-800">
              <div>
                <div class="font-mono text-xs text-blue-600 dark:text-blue-400">${activeMetrics.id}</div>
                <h3 class="font-display text-lg font-bold text-navy-900 dark:text-white">${activeMetrics.bidder}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Officer Sign-Off: ${signOff ? `${escapeHtml(signOff.officerName)} (${escapeHtml(signOff.timestamp)})` : 'Pending Government Officer Sign-Off'}</p>
              </div>
              <button type="button" onclick="downloadComplianceReport()" class="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap">
                Download Report (.txt)
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${activeMetrics.pillars.map(p => `
                <div class="p-4 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-semibold text-navy-900 dark:text-white">${p.fullName}</div>
                    <div class="text-[11px] mt-0.5">${statusBadge(p.status)}</div>
                  </div>
                  <div class="font-mono text-lg font-bold tabular-nums ${STATUS_META[p.status].textClass}">${p.percentage}%</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        return;
      }

      if (mode === 'audit-history' || mode === 'notifications') {
        const isNotif = mode === 'notifications';
        const signOffEntries = Object.entries(signOffs);
        const pendingAlerts = [];
        allDossiers.forEach(d => {
          d.pillars.forEach(p => {
            p.checks.forEach(c => {
              if (c.status !== 'compliant') {
                pendingAlerts.push({ dossierKey: d.key, tenderId: d.id, pillarKey: p.key, pillarName: p.name, ...c });
              }
            });
          });
        });

        root.innerHTML = `
          ${headerBlock(isNotif ? 'Workspace · Action Queue' : 'Compliance & Reports · Audit Log', isNotif ? 'Notifications' : 'Audit History', isNotif ? 'Pending verification flags requiring Government Officer review.' : 'Recorded officer verification sign-offs and active dossier audit status.')}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 class="font-display text-base font-bold text-navy-900 dark:text-white">Recorded Officer Sign-Offs</h3>
              ${signOffEntries.length ? signOffEntries.map(([tid, s]) => `
                <div class="p-3.5 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="font-mono font-semibold text-emerald-600 dark:text-emerald-400">${escapeHtml(tid)} · ${escapeHtml(String(s.score))}%</div>
                    <div class="text-navy-900 dark:text-white font-medium mt-0.5">Verified by ${escapeHtml(s.officerName)} (${escapeHtml(s.officerRole)})</div>
                  </div>
                  <div class="font-mono text-slate-400 shrink-0">${escapeHtml(s.timestamp)}</div>
                </div>
              `).join('') : '<p class="text-xs text-slate-500 dark:text-slate-400">No officer sign-offs recorded in this session yet. Sign in as a Government Tender Officer and click Record Sign-Off in the compliance workbench.</p>'}
            </div>
            <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 class="font-display text-base font-bold text-navy-900 dark:text-white">Active Officer Review Alerts (${pendingAlerts.length})</h3>
              <div class="space-y-2.5 max-h-[340px] overflow-y-auto thin-scroll pr-1">
                ${pendingAlerts.slice(0, 8).map(a => `
                  <div class="p-3 rounded-lg border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/60 flex items-center justify-between gap-3 text-xs">
                    <div class="min-w-0">
                      <div class="font-mono text-blue-600 dark:text-blue-400">${a.tenderId} · ${a.pillarName}</div>
                      <div class="font-semibold text-navy-900 dark:text-white truncate mt-0.5">${a.label}</div>
                    </div>
                    <button type="button" onclick="selectDossier('${a.dossierKey}'); document.getElementById('dossier-select').value='${a.dossierKey}'; jumpToCompliancePillar('${a.pillarKey}', false)" class="px-2.5 py-1 rounded border border-silver-300 dark:border-slate-700 hover:border-blue-500 text-navy-900 dark:text-white shrink-0">
                      Inspect
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        return;
      }

      if (mode === 'settings') {
        const isDarkNow = document.documentElement.classList.contains('dark');
        root.innerHTML = `
          ${headerBlock('Workspace · Preferences', 'Settings', 'Configure display theme, default 2D visualization style, and officer session preferences.')}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 class="font-display text-base font-bold text-navy-900 dark:text-white">Appearance &amp; 2D Telemetry</h3>
              <div class="flex items-center justify-between py-3 border-b border-silver-200 dark:border-slate-800">
                <div>
                  <div class="text-sm font-semibold text-navy-900 dark:text-white">Interface Color Theme</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">Currently: ${isDarkNow ? 'Dark Navy Mode' : 'Minimal Light Silver &amp; Navy'}</div>
                </div>
                <button type="button" onclick="toggleTheme(); renderOperationsView('settings')" class="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Toggle Theme
                </button>
              </div>
              <div class="flex items-center justify-between py-2">
                <div>
                  <div class="text-sm font-semibold text-navy-900 dark:text-white">2D Chart Mode</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">Switch between 2D Ring and 2D Horizontal Bars</div>
                </div>
                <button type="button" onclick="if (window.toggle2DChartMode) window.toggle2DChartMode(); handleSidebarAction('dashboard')" class="px-4 py-2 rounded-lg text-xs font-semibold border border-silver-300 dark:border-slate-700 text-navy-900 dark:text-white hover:border-blue-500 transition-colors">
                  Switch &amp; View
                </button>
              </div>
            </div>
            <div class="p-6 rounded-xl border border-silver-200 dark:border-slate-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 class="font-display text-base font-bold text-navy-900 dark:text-white">Officer Account &amp; Governance</h3>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                AI compliance checks act exclusively as automated pre-screening aids. All final tender approvals and rejections require formal Government Officer verification.
              </p>
              <button type="button" onclick="openAuthModal('login')" class="px-4 py-2 rounded-lg text-xs font-semibold bg-navy-900 text-white dark:bg-cyanbrand-500 dark:text-navy-950 transition-colors">
                Manage Officer Account
              </button>
            </div>
          </div>
        `;
      }
    }

    // =========================================================================
    // 10. AI BID COMPLIANCE ASSISTANT CLIENT ENGINE (/api/ai/assist)
    // =========================================================================
    let aiAssistantOpen = false;
    let aiAssistantBusy = false;
    let aiChatHistory = []; // { id, role: 'user' | 'model', text?, audit? }

    function buildAIComplianceContext() {
      const signOffs = loadSignOffs();
      const allDossiersSummary = Object.values(BID_DOSSIERS).map(d => {
        const m = computeComplianceMetrics(d);
        return {
          id: m.id,
          bidder: m.bidder,
          overall: m.overall,
          overallStatus: m.overallStatus
        };
      });
      return {
        activeDossier: computedCompliance,
        activePillarKey,
        allDossiersSummary,
        stagedDocuments: stagedDocuments.slice(0, 10),
        userRole: currentSession ? currentSession.role : null,
        officerSignOff: computedCompliance ? (signOffs[computedCompliance.id] || null) : null
      };
    }

    function syncAIAssistantContext() {
      const badge = document.getElementById('ai-context-badge');
      if (!badge || !computedCompliance) return;
      const activePillar = computedCompliance.pillars.find(p => p.key === activePillarKey);
      const pillarName = activePillar ? activePillar.name : activePillarKey.toUpperCase();
      badge.textContent = `${computedCompliance.id} · ${computedCompliance.overall}% · Pillar: ${pillarName}`;
    }

    function formatAIMarkdown(rawText) {
      const safe = escapeHtml(rawText || '');
      const lines = safe.split('\n');
      let html = '';
      let inList = false;

      const applyInline = (line) =>
        line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-navy-900 dark:text-white">$1</strong>')
          .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-silver-200/70 dark:bg-navy-800 font-mono text-[11px]">$1</code>');

      for (const rawLine of lines) {
        const trimmed = rawLine.trim();
        if (!trimmed) {
          if (inList) {
            html += '</ul>';
            inList = false;
          }
          continue;
        }
        if (/^[-*•]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
          if (!inList) {
            html += '<ul class="list-disc pl-4 space-y-1 my-1.5">';
            inList = true;
          }
          const itemText = trimmed.replace(/^([-*•]|\d+\.)\s+/, '');
          html += `<li>${applyInline(itemText)}</li>`;
        } else if (/^#{1,3}\s+/.test(trimmed)) {
          if (inList) {
            html += '</ul>';
            inList = false;
          }
          const headingText = trimmed.replace(/^#{1,3}\s+/, '');
          html += `<div class="font-display font-bold text-navy-900 dark:text-white mt-2 mb-1">${applyInline(headingText)}</div>`;
        } else {
          if (inList) {
            html += '</ul>';
            inList = false;
          }
          html += `<p class="leading-relaxed mb-1.5">${applyInline(trimmed)}</p>`;
        }
      }
      if (inList) html += '</ul>';
      return html || '<p class="leading-relaxed"></p>';
    }

    function setAIError(message) {
      const errBox = document.getElementById('ai-error-banner');
      if (!errBox) return;
      if (!message) {
        errBox.classList.add('hidden');
        errBox.textContent = '';
      } else {
        errBox.textContent = message;
        errBox.classList.remove('hidden');
      }
    }

    function copyAITextById(msgId, btn) {
      const item = aiChatHistory.find(m => m.id === msgId);
      if (!item) return;
      let textToCopy = item.text || '';
      if (!textToCopy && item.audit) {
        textToCopy = [
          `Compliance Audit Brief (${computedCompliance ? computedCompliance.id : 'Tender'})`,
          `Risk Level: ${item.audit.riskLevel}`,
          `Summary: ${item.audit.executiveSummary}`,
          '',
          'Critical Gaps:',
          ...(item.audit.criticalGaps || []).map(g => `- ${g}`),
          '',
          'Clarifications for Bidder:',
          ...(item.audit.bidderClarifications || []).map(c => `- ${c}`),
          '',
          'Officer Checklist:',
          ...(item.audit.officerChecklist || []).map(o => `- ${o}`)
        ].join('\n');
      }
      if (navigator.clipboard && navigator.clipboard.writeText && textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        if (btn) {
          const prev = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(() => { btn.textContent = prev; }, 1200);
        }
      }
    }

    function renderAIChatMessages() {
      const container = document.getElementById('ai-chat-messages');
      if (!container) return;

      const welcomeHtml = `
        <div class="p-4 rounded-xl border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/70 space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <div class="font-display text-sm font-bold text-navy-900 dark:text-white">How can I clarify your tender compliance doubts?</div>
          <p class="leading-relaxed">
            I am connected directly to your active tender dossier (<span class="font-mono font-semibold text-blue-600 dark:text-cyanbrand-400">${escapeHtml(computedCompliance ? computedCompliance.id : 'NHAI-2026-441')}</span>), all 6 statutory pillars, and staged documents.
          </p>
          <p class="leading-relaxed">
            Ask about flagged checks, GST/PAN/Udyam rules, eligibility calculations, or click <strong class="text-navy-900 dark:text-white">Run AI Audit Brief</strong> for a structured officer checklist.
          </p>
        </div>
      `;

      const messagesHtml = aiChatHistory.map(entry => {
        if (entry.role === 'user') {
          return `
            <div class="flex justify-end">
              <div class="max-w-[88%] px-3.5 py-2.5 rounded-xl rounded-br-sm bg-blue-600 text-white text-xs sm:text-sm leading-relaxed">
                ${escapeHtml(entry.text)}
              </div>
            </div>
          `;
        }
        if (entry.audit) {
          const a = entry.audit;
          const validPillars = ['gst', 'pan', 'udyam', 'company', 'validity', 'eligibility'];
          const pKey = validPillars.includes(a.priorityPillarKey) ? a.priorityPillarKey : 'validity';
          return `
            <div class="p-4 rounded-xl border border-blue-200 dark:border-blue-800/70 bg-blue-50/40 dark:bg-navy-950 space-y-3 text-xs">
              <div class="flex items-center justify-between gap-2 pb-2 border-b border-silver-200 dark:border-slate-800">
                <div>
                  <span class="font-display text-sm font-bold text-navy-900 dark:text-white">Structured AI Compliance Brief</span>
                  <span class="ml-2 font-mono text-[11px] font-semibold text-amber-600 dark:text-amber-400">Risk: ${escapeHtml(a.riskLevel)}</span>
                </div>
                <button type="button" onclick="copyAITextById('${entry.id}', this)" class="px-2 py-1 rounded border border-silver-300 dark:border-slate-700 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:border-blue-500">
                  Copy Brief
                </button>
              </div>
              <p class="text-slate-700 dark:text-slate-200 leading-relaxed">${escapeHtml(a.executiveSummary)}</p>
              ${(a.criticalGaps && a.criticalGaps.length) ? `
                <div>
                  <div class="font-semibold text-navy-900 dark:text-white mb-1">Critical Gaps &amp; Review Flags</div>
                  <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                    ${a.criticalGaps.map(g => `<li>${escapeHtml(g)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${(a.bidderClarifications && a.bidderClarifications.length) ? `
                <div>
                  <div class="font-semibold text-navy-900 dark:text-white mb-1">Clarifications to Request from Bidder</div>
                  <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                    ${a.bidderClarifications.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${(a.officerChecklist && a.officerChecklist.length) ? `
                <div>
                  <div class="font-semibold text-navy-900 dark:text-white mb-1">Government Officer Verification Checklist</div>
                  <ul class="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                    ${a.officerChecklist.map(o => `<li>${escapeHtml(o)}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              <div class="pt-2 border-t border-silver-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <span class="text-[11px] text-slate-500 dark:text-slate-400">Priority Pillar: <strong class="font-mono uppercase text-navy-900 dark:text-white">${escapeHtml(pKey)}</strong></span>
                <button type="button" onclick="jumpToCompliancePillar('${pKey}', false); closeAIAssistant();" class="px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Inspect Priority Pillar &rarr;
                </button>
              </div>
            </div>
          `;
        }
        return `
          <div class="p-3.5 rounded-xl border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/70 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 space-y-1">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="text-[11px] font-semibold text-blue-600 dark:text-cyanbrand-400">TENDER.iQ AI Assistant</span>
              <button type="button" onclick="copyAITextById('${entry.id}', this)" class="text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white">
                Copy
              </button>
            </div>
            <div>${formatAIMarkdown(entry.text)}</div>
          </div>
        `;
      }).join('');

      const loadingHtml = aiAssistantBusy ? `
        <div class="p-3.5 rounded-xl border border-silver-200 dark:border-slate-800 bg-silver-50 dark:bg-navy-950/70 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2.5">
          <span class="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>Analyzing tender dossier &amp; statutory compliance rules...</span>
        </div>
      ` : '';

      container.innerHTML = welcomeHtml + messagesHtml + loadingHtml;
      container.scrollTop = container.scrollHeight;
    }

    function setAIAssistantBusy(busy) {
      aiAssistantBusy = busy;
      const sendBtn = document.getElementById('ai-send-btn');
      const auditBtn = document.getElementById('ai-audit-btn');
      if (sendBtn) {
        sendBtn.disabled = busy;
        sendBtn.textContent = busy ? 'Thinking...' : 'Ask AI';
      }
      if (auditBtn) {
        auditBtn.disabled = busy;
      }
      renderAIChatMessages();
    }

    function openAIAssistant() {
      aiAssistantOpen = true;
      syncAIAssistantContext();
      const drawer = document.getElementById('ai-assistant-drawer');
      const backdrop = document.getElementById('ai-assistant-backdrop');
      const fab = document.getElementById('ai-assistant-fab');
      if (drawer) drawer.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
      if (fab) fab.classList.add('hidden');
      renderAIChatMessages();
      const input = document.getElementById('ai-chat-input');
      if (input) setTimeout(() => input.focus(), 180);
    }

    function closeAIAssistant() {
      if (!aiAssistantOpen) return;
      aiAssistantOpen = false;
      const drawer = document.getElementById('ai-assistant-drawer');
      const backdrop = document.getElementById('ai-assistant-backdrop');
      const fab = document.getElementById('ai-assistant-fab');
      if (drawer) drawer.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
      if (fab) fab.classList.remove('hidden');
    }

    function toggleFaqItem(btn) {
      if (!btn) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = btn.nextElementSibling;
      const chevron = btn.querySelector('.faq-chevron');
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (panel) panel.classList.toggle('hidden', expanded);
      if (chevron) chevron.classList.toggle('rotate-180', !expanded);
    }

    function clearAIChat() {
      aiChatHistory = [];
      setAIError('');
      renderAIChatMessages();
    }

    function askAIAssistantForActivePillar() {
      const pillar = computedCompliance && computedCompliance.pillars.find(p => p.key === activePillarKey);
      const pillarTitle = pillar ? pillar.fullName : activePillarKey;
      openAIAssistant();
      sendAIMessage(`Clarify the "${pillarTitle}" pillar (${pillar ? pillar.percentage + '%' : ''}) for ${computedCompliance ? computedCompliance.id : 'this tender'}. Explain every check status, any compliance risks, and what the Government Officer should verify.`);
    }

    async function sendAIMessage(text) {
      const clean = (text || '').trim();
      if (!clean || aiAssistantBusy) return;

      if (!aiAssistantOpen) openAIAssistant();
      setAIError('');

      const historyPayload = aiChatHistory
        .filter(item => typeof item.text === 'string' && item.text.trim())
        .map(item => ({ role: item.role, text: item.text }));

      aiChatHistory.push({
        id: 'msg-' + Date.now() + '-u',
        role: 'user',
        text: clean
      });
      setAIAssistantBusy(true);

      try {
        const res = await fetch('/api/ai/assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode: 'chat',
            message: clean,
            history: historyPayload,
            complianceContext: buildAIComplianceContext()
          })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || `Server error (${res.status})`);
        }
        aiChatHistory.push({
          id: 'msg-' + Date.now() + '-m',
          role: 'model',
          text: data.reply
        });
      } catch (err) {
        setAIError(err instanceof Error ? err.message : 'Unable to reach AI Compliance Assistant.');
      } finally {
        setAIAssistantBusy(false);
      }
    }

    async function runAIStructuredAudit() {
      if (aiAssistantBusy) return;
      if (!aiAssistantOpen) openAIAssistant();
      setAIError('');
      aiChatHistory.push({
        id: 'msg-' + Date.now() + '-u',
        role: 'user',
        text: `Generate structured AI compliance audit brief for ${computedCompliance ? computedCompliance.id : 'active tender'}.`
      });
      setAIAssistantBusy(true);

      try {
        const res = await fetch('/api/ai/assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode: 'structured_audit',
            complianceContext: buildAIComplianceContext()
          })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || `Server error (${res.status})`);
        }
        aiChatHistory.push({
          id: 'msg-' + Date.now() + '-a',
          role: 'model',
          audit: data.audit
        });
      } catch (err) {
        setAIError(err instanceof Error ? err.message : 'Unable to generate AI audit brief.');
      } finally {
        setAIAssistantBusy(false);
      }
    }

    function handleAIChatSubmit(event) {
      event.preventDefault();
      const input = document.getElementById('ai-chat-input');
      if (!input) return;
      const text = input.value.trim();
      if (!text || aiAssistantBusy) return;
      input.value = '';
      sendAIMessage(text);
    }

    // Initialize DOM Data Immediately
    restoreThemePreference();
    renderSidebarNav();
    renderCatalogFilters();
    renderCatalogGrid();
    initBookingCategories();
    recomputeAndRenderCompliance(true);
    restoreSession();
    syncAIAssistantContext();
    renderAIChatMessages();

    // Show Back-to-Top button smoothly when scrolled down
    window.addEventListener('scroll', () => {
      const topBtn = document.getElementById('back-to-top-btn');
      if (topBtn) {
        topBtn.classList.toggle('hidden', window.scrollY < 420);
      }
    }, { passive: true });
  </script>

  <!-- ===================================================================== -->
  <!-- PURE 2D HTML5 CANVAS COMPLIANCE GAUGE VISUALIZATION ENGINE            -->
  <!-- ===================================================================== -->
  <script>
    (function () {
      const mountEl = document.getElementById('three-canvas-mount');
      const floatingLayer = document.getElementById('floating-indicators-layer');
      const centerHudEl = document.getElementById('center-score-hud');
      const centerValEl = document.getElementById('center-score-value');
      const centerStatusEl = document.getElementById('center-score-status');

      // Create pure 2D canvas inside #three-canvas-mount
      const canvas = document.createElement('canvas');
      canvas.className = 'block w-full h-full';
      mountEl.appendChild(canvas);
      const ctx = canvas.getContext('2d');

      const PILLAR_KEYS = ['gst', 'pan', 'udyam', 'company', 'validity', 'eligibility'];
      const COLOR_MAP = {
        compliant: { css: '#10B981', lightCss: '#10B981', darkTextCss: '#34D399', border: 'rgba(16, 185, 129, 0.35)', label: 'Compliant' },
        review: { css: '#F59E0B', lightCss: '#D97706', darkTextCss: '#FBBF24', border: 'rgba(245, 158, 11, 0.38)', label: 'Manual Review' },
        non_compliant: { css: '#EF4444', lightCss: '#DC2626', darkTextCss: '#F87171', border: 'rgba(239, 68, 68, 0.45)', label: 'Non-Compliant' }
      };

      // Build clean minimal 2D pillar cards (3 left, 3 right on sm+, 2x3 compact grid on mobile)
      floatingLayer.innerHTML = `
        <div class="w-full h-full flex flex-col justify-end sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
          <div id="pillar-col-left" class="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-3 sm:w-[164px] pointer-events-auto"></div>
          <div id="pillar-col-right" class="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-3 sm:w-[164px] pointer-events-auto"></div>
        </div>
      `;

      const leftCol = document.getElementById('pillar-col-left');
      const rightCol = document.getElementById('pillar-col-right');
      const cardState = {};

      PILLAR_KEYS.forEach((key, idx) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'w-full text-left px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg border border-silver-200 dark:border-slate-800 bg-white dark:bg-[#131D2E] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanbrand-500';
        card.innerHTML = `
          <div class="flex items-center justify-between gap-1.5 mb-1">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="node-2d-dot inline-block w-2 h-2 rounded-full shrink-0" style="background-color: #10B981;"></span>
              <span class="text-[11px] sm:text-xs font-semibold text-navy-900 dark:text-white truncate node-name">Pillar</span>
            </div>
            <span class="font-mono text-xs sm:text-sm font-bold tabular-nums shrink-0 node-pct">0%</span>
          </div>
          <div class="text-[10px] font-medium truncate node-status mb-1.5">Compliant</div>
          <div class="w-full h-1 rounded-full bg-silver-200 dark:bg-slate-800 overflow-hidden">
            <div class="node-bar h-full rounded-full transition-all duration-300" style="width: 0%; background-color: #10B981;"></div>
          </div>
        `;
        card.addEventListener('click', () => window.selectPillar(key));

        if (idx < 3) leftCol.appendChild(card);
        else rightCol.appendChild(card);

        cardState[key] = {
          card,
          currentPct: 0,
          targetPct: 0,
          status: 'compliant'
        };
      });

      let targetOverall = 0;
      let displayOverall = 0;
      let overallStatus = 'compliant';
      let selectedPillarKey = 'gst';
      let chartMode = 'bars'; // 'bars' | 'graph' | 'all_tenders' | 'donut'
      let dockCollapsed = false;
      let canvasWidth = 720;
      let canvasHeight = 580;
      let interactiveRegions = [];
      let allTenderAnimPcts = {}; // key -> { overall: number, pillars: number[] }
      let avgAnimPcts = [0, 0, 0, 0, 0, 0];

      const BAR_PALETTE = {
        compliant: { top: '#34D399', bottom: '#059669', cap: '#6EE7B7', text: '#059669', darkText: '#34D399' },
        review: { top: '#FBBF24', bottom: '#D97706', cap: '#FDE68A', text: '#D97706', darkText: '#FBBF24' },
        non_compliant: { top: '#F87171', bottom: '#DC2626', cap: '#FCA5A5', text: '#DC2626', darkText: '#F87171' },
        overall_ok: { top: '#38BDF8', bottom: '#2563EB', cap: '#7DD3FC', text: '#0284C7', darkText: '#38BDF8' }
      };

      function drawRoundedTopBar(x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height);
        ctx.beginPath();
        ctx.moveTo(x, y + height);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.lineTo(x + width - r, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + r);
        ctx.lineTo(x + width, y + height);
        ctx.closePath();
        ctx.fill();
      }

      function drawRoundedRectPath(x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + width - r, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + r);
        ctx.lineTo(x + width, y + height - r);
        ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
        ctx.lineTo(x + r, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      }

      function makeBarGradient(x, y, h, paletteEntry) {
        const grad = ctx.createLinearGradient(x, y, x, y + Math.max(h, 4));
        grad.addColorStop(0, paletteEntry.top);
        grad.addColorStop(1, paletteEntry.bottom);
        return grad;
      }

      function syncChartModeButtons() {
        const modes = ['bars', 'graph', 'all_tenders', 'donut'];
        modes.forEach(m => {
          const btn = document.getElementById('mode-btn-' + m);
          if (!btn) return;
          if (m === chartMode) {
            btn.className = 'px-2.5 py-1 rounded text-xs font-semibold bg-blue-600 text-white transition-colors whitespace-nowrap';
          } else {
            btn.className = 'px-2.5 py-1 rounded text-xs font-medium bg-silver-100 dark:bg-slate-800 text-navy-900 dark:text-slate-200 border border-silver-300 dark:border-slate-700 hover:border-blue-500 transition-colors whitespace-nowrap';
          }
        });
        centerHudEl.classList.toggle('hidden', chartMode !== 'donut');
        floatingLayer.classList.toggle('hidden', chartMode === 'all_tenders');
      }

      window.set2DChartMode = function (mode) {
        if (!['bars', 'graph', 'all_tenders', 'donut'].includes(mode)) return;
        chartMode = mode;
        syncChartModeButtons();
      };

      window.toggle2DChartMode = function () {
        const order = ['bars', 'graph', 'all_tenders', 'donut'];
        const nextIdx = (order.indexOf(chartMode) + 1) % order.length;
        window.set2DChartMode(order[nextIdx]);
      };

      syncChartModeButtons();

      window.toggleControlDock = function () {
        dockCollapsed = !dockCollapsed;
        const body = document.getElementById('three-dock-body');
        const btn = document.getElementById('dock-toggle-btn');
        body.classList.toggle('hidden', dockCollapsed);
        btn.textContent = dockCollapsed ? '▴ Show Controls' : '▾ Hide Controls';
      };

      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        for (const reg of interactiveRegions) {
          if (reg.type === 'rect' && x >= reg.x && x <= reg.x + reg.w && y >= reg.y && y <= reg.y + reg.h) {
            if (reg.dossierKey) {
              const sel = document.getElementById('dossier-select');
              if (sel) sel.value = reg.dossierKey;
              window.selectDossier(reg.dossierKey);
            } else if (reg.key) {
              window.selectPillar(reg.key);
            }
            return;
          }
        }
      });

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let hit = false;
        for (const reg of interactiveRegions) {
          if (reg.type === 'rect' && x >= reg.x && x <= reg.x + reg.w && y >= reg.y && y <= reg.y + reg.h) {
            hit = true;
            break;
          }
        }
        canvas.style.cursor = hit ? 'pointer' : 'default';
      });

      function applyCardColors() {
        const isDark = document.documentElement.classList.contains('dark');
        Object.entries(cardState).forEach(([key, st]) => {
          const cInfo = COLOR_MAP[st.status];
          const textColor = isDark ? cInfo.darkTextCss : cInfo.lightCss;
          st.card.querySelector('.node-status').style.color = textColor;
          st.card.querySelector('.node-pct').style.color = textColor;
          st.card.style.borderColor = key === selectedPillarKey ? cInfo.css : '';
        });
      }
      window.bidverifyRefreshThemeColors = applyCardColors;

      window.bidverify3DUpdateData = function (data, resetFromZero) {
        if (!data) return;
        targetOverall = data.overall;
        overallStatus = data.overallStatus;
        if (resetFromZero) {
          displayOverall = 0;
          allTenderAnimPcts = {};
          avgAnimPcts = [0, 0, 0, 0, 0, 0];
        }

        data.pillars.forEach(p => {
          const st = cardState[p.key];
          if (!st) return;
          st.targetPct = p.percentage;
          if (resetFromZero) st.currentPct = 0;
          st.status = p.status;
          st.name = p.name;

          const cInfo = COLOR_MAP[p.status];
          st.card.querySelector('.node-name').textContent = p.name;
          st.card.querySelector('.node-status').textContent = cInfo.label;

          const barEl = st.card.querySelector('.node-bar');
          barEl.style.width = `${p.percentage}%`;
          barEl.style.backgroundColor = cInfo.css;

          st.card.querySelector('.node-2d-dot').style.backgroundColor = cInfo.css;
        });
        applyCardColors();
      };

      window.bidverify3DSelectPillar = function (pillarKey) {
        selectedPillarKey = pillarKey;
        applyCardColors();
      };

      if (typeof computedCompliance !== 'undefined' && computedCompliance) {
        window.bidverify3DUpdateData(computedCompliance, true);
      }

      function handleResize() {
        const w = mountEl.clientWidth || 720;
        const h = mountEl.clientHeight || 580;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvasWidth = w;
        canvasHeight = h;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      window.bidverify3DResize = handleResize;
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(mountEl);
      handleResize();

      let lastTime = performance.now();

      function draw2DChart(now) {
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        const lerpFactor = 1 - Math.exp(-6.5 * dt);
        displayOverall += (targetOverall - displayOverall) * lerpFactor;
        if (Math.abs(targetOverall - displayOverall) < 0.05) displayOverall = targetOverall;

        const isDark = document.documentElement.classList.contains('dark');
        const oMeta = COLOR_MAP[overallStatus];
        centerValEl.textContent = `${Math.round(displayOverall)}%`;
        centerStatusEl.textContent = oMeta.label;
        centerStatusEl.style.color = isDark ? oMeta.darkTextCss : oMeta.lightCss;

        PILLAR_KEYS.forEach(key => {
          const st = cardState[key];
          if (!st) return;
          st.currentPct += (st.targetPct - st.currentPct) * lerpFactor;
          if (Math.abs(st.targetPct - st.currentPct) < 0.05) st.currentPct = st.targetPct;
          st.card.querySelector('.node-pct').textContent = `${Math.round(st.currentPct)}%`;
        });

        const w = canvasWidth;
        const h = canvasHeight;
        const isMobile = w < 640;
        interactiveRegions = [];

        // Minimal flat single-tone background
        const bgColor = isDark ? '#0D1522' : '#F8FAFC';
        const trackColor = isDark ? 'rgba(30, 41, 59, 0.72)' : 'rgba(226, 232, 240, 0.75)';
        const gridColor = isDark ? 'rgba(148, 163, 184, 0.14)' : 'rgba(100, 116, 139, 0.16)';
        const axisTextColor = isDark ? '#94A3B8' : '#64748B';
        const labelColor = isDark ? '#CBD5E1' : '#334155';
        const highlightBg = isDark ? 'rgba(37, 99, 235, 0.16)' : 'rgba(37, 99, 235, 0.08)';
        const cardFill = isDark ? 'rgba(19, 29, 46, 0.85)' : 'rgba(255, 255, 255, 0.88)';
        const cardBorder = isDark ? '#1E293B' : '#E2E8F0';

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, w, h);

        const shortNames = {
          gst: 'GST',
          pan: 'PAN',
          udyam: 'Udyam',
          company: 'MCA',
          validity: 'Validity',
          eligibility: 'Elig.'
        };

        if (chartMode === 'bars') {
          // ===============================================================
          // STYLED 2D GRADIENT BAR GRAPH FOR ACTIVE TENDER
          // ===============================================================
          const plotLeft = isMobile ? 42 : 210;
          const plotRight = isMobile ? w - 18 : w - 196;
          const plotTop = isMobile ? 102 : 114;
          const plotBottom = isMobile ? h * 0.56 : h - 104;
          const plotW = Math.max(160, plotRight - plotLeft);
          const plotH = Math.max(140, plotBottom - plotTop);

          // Subtle dashed percentage gridlines (0, 25, 50, 75, 100)
          [0, 25, 50, 75, 100].forEach(tick => {
            const gy = plotBottom - (tick / 100) * plotH;
            ctx.save();
            if (tick > 0) ctx.setLineDash([3, 3]);
            ctx.strokeStyle = tick === 0 ? (isDark ? '#334155' : '#CBD5E1') : gridColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(plotLeft, gy);
            ctx.lineTo(plotRight, gy);
            ctx.stroke();
            ctx.restore();

            ctx.font = '500 10px "JetBrains Mono", monospace';
            ctx.fillStyle = axisTextColor;
            ctx.textAlign = 'right';
            ctx.fillText(`${tick}%`, plotLeft - 8, gy + 3.5);
          });

          // 80% Compliant Target dashed line + crisp label
          const targetY = plotBottom - 0.8 * plotH;
          ctx.save();
          ctx.setLineDash([5, 4]);
          ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.5)' : 'rgba(5, 150, 105, 0.55)';
          ctx.lineWidth = 1.25;
          ctx.beginPath();
          ctx.moveTo(plotLeft, targetY);
          ctx.lineTo(plotRight, targetY);
          ctx.stroke();
          ctx.restore();

          ctx.font = '600 9px "JetBrains Mono", monospace';
          ctx.fillStyle = isDark ? '#34D399' : '#059669';
          ctx.textAlign = 'right';
          ctx.fillText('80% Target', plotRight, targetY - 4);

          const cols = [
            { key: '__overall', label: 'Overall', pct: displayOverall, status: overallStatus, isOverall: true },
            ...PILLAR_KEYS.map(k => ({
              key: k,
              label: shortNames[k] || k.toUpperCase(),
              pct: cardState[k] ? cardState[k].currentPct : 0,
              status: cardState[k] ? cardState[k].status : 'compliant',
              isOverall: false
            }))
          ];

          const colStep = plotW / cols.length;
          const barW = Math.max(16, Math.min(32, colStep * 0.54));

          cols.forEach((col, idx) => {
            const cx = plotLeft + colStep * (idx + 0.5);
            const bx = cx - barW / 2;
            const pctClamped = Math.max(0, Math.min(100, col.pct));
            const barH = Math.max(3, (pctClamped / 100) * plotH);
            const by = plotBottom - barH;
            const isSelected = !col.isOverall && col.key === selectedPillarKey;
            const pal = col.isOverall
              ? (col.status === 'non_compliant' ? BAR_PALETTE.non_compliant : col.status === 'review' ? BAR_PALETTE.review : BAR_PALETTE.overall_ok)
              : BAR_PALETTE[col.status];

            if (!col.isOverall) {
              interactiveRegions.push({
                type: 'rect',
                key: col.key,
                x: plotLeft + idx * colStep,
                y: plotTop - 22,
                w: colStep,
                h: plotH + 46
              });
            }

            if (isSelected) {
              ctx.fillStyle = highlightBg;
              drawRoundedRectPath(plotLeft + idx * colStep + 2, plotTop - 10, colStep - 4, plotH + 34, 6);
              ctx.fill();
              ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.45)' : 'rgba(37, 99, 235, 0.35)';
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            // Sleek vertical slot track
            ctx.fillStyle = trackColor;
            drawRoundedTopBar(bx, plotTop, barW, plotH, 7);

            // Gradient filled bar
            ctx.fillStyle = makeBarGradient(bx, by, barH, pal);
            drawRoundedTopBar(bx, by, barW, barH, 7);

            // Crisp top highlight rim on active bar
            ctx.fillStyle = pal.cap;
            ctx.fillRect(bx + 3, by, Math.max(0, barW - 6), 2);

            // Score badge pill above bar
            const pctStr = `${Math.round(col.pct)}%`;
            const badgeW = isMobile ? 28 : 34;
            const badgeH = 15;
            const badgeY = Math.max(plotTop - 20, by - 21);
            ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.95)';
            drawRoundedRectPath(cx - badgeW / 2, badgeY, badgeW, badgeH, 4);
            ctx.fill();
            ctx.strokeStyle = pal.bottom;
            ctx.lineWidth = 0.9;
            ctx.stroke();

            ctx.font = '700 9.5px "JetBrains Mono", monospace';
            ctx.fillStyle = isDark ? pal.darkText : pal.text;
            ctx.textAlign = 'center';
            ctx.fillText(pctStr, cx, badgeY + 10.5);

            // X-axis label
            ctx.font = col.isOverall ? '700 10px "Plus Jakarta Sans", sans-serif' : (isSelected ? '700 10px "Plus Jakarta Sans", sans-serif' : '600 10px "Plus Jakarta Sans", sans-serif');
            ctx.fillStyle = col.isOverall ? (isDark ? '#38BDF8' : '#0284C7') : (isSelected ? (isDark ? '#FFFFFF' : '#0A1628') : labelColor);
            ctx.textAlign = 'center';
            ctx.fillText(col.label, cx, plotBottom + 16);
          });
        } else if (chartMode === 'graph') {
          // ===============================================================
          // 2D SMOOTH LINE & AREA COMPLIANCE GRAPH CHART
          // ===============================================================
          const plotLeft = isMobile ? 42 : 210;
          const plotRight = isMobile ? w - 18 : w - 196;
          const plotTop = isMobile ? 104 : 118;
          const plotBottom = isMobile ? h * 0.56 : h - 104;
          const plotW = Math.max(160, plotRight - plotLeft);
          const plotH = Math.max(140, plotBottom - plotTop);

          // Compute all-tender average per pillar for comparison dashed curve
          const entries = typeof BID_DOSSIERS !== 'undefined' ? Object.values(BID_DOSSIERS) : [];
          const allMetrics = entries.map(d => computeComplianceMetrics(d));
          const targetAvg = PILLAR_KEYS.map((k, pIdx) => {
            if (!allMetrics.length) return 0;
            const sum = allMetrics.reduce((acc, m) => acc + (m.pillars[pIdx] ? m.pillars[pIdx].percentage : 0), 0);
            return sum / allMetrics.length;
          });
          PILLAR_KEYS.forEach((_, idx) => {
            avgAnimPcts[idx] += (targetAvg[idx] - avgAnimPcts[idx]) * lerpFactor;
            if (Math.abs(targetAvg[idx] - avgAnimPcts[idx]) < 0.05) avgAnimPcts[idx] = targetAvg[idx];
          });

          // Horizontal gridlines
          [0, 25, 50, 75, 100].forEach(tick => {
            const gy = plotBottom - (tick / 100) * plotH;
            ctx.save();
            if (tick > 0) ctx.setLineDash([3, 3]);
            ctx.strokeStyle = tick === 0 ? (isDark ? '#334155' : '#CBD5E1') : gridColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(plotLeft, gy);
            ctx.lineTo(plotRight, gy);
            ctx.stroke();
            ctx.restore();

            ctx.font = '500 10px "JetBrains Mono", monospace';
            ctx.fillStyle = axisTextColor;
            ctx.textAlign = 'right';
            ctx.fillText(`${tick}%`, plotLeft - 8, gy + 3.5);
          });

          // 80% Compliant threshold line
          const targetY = plotBottom - 0.8 * plotH;
          ctx.save();
          ctx.setLineDash([5, 4]);
          ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.45)' : 'rgba(5, 150, 105, 0.5)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(plotLeft, targetY);
          ctx.lineTo(plotRight, targetY);
          ctx.stroke();
          ctx.restore();

          const points = PILLAR_KEYS.map((k, idx) => {
            const pct = cardState[k] ? cardState[k].currentPct : 0;
            const status = cardState[k] ? cardState[k].status : 'compliant';
            const x = plotLeft + (idx / Math.max(1, PILLAR_KEYS.length - 1)) * plotW;
            const y = plotBottom - (Math.max(0, Math.min(100, pct)) / 100) * plotH;
            const avgY = plotBottom - (Math.max(0, Math.min(100, avgAnimPcts[idx])) / 100) * plotH;
            return { key: k, label: shortNames[k] || k.toUpperCase(), pct, status, x, y, avgY };
          });

          // Vertical guide lines + interactive click columns
          const colW = plotW / points.length;
          points.forEach((pt, idx) => {
            interactiveRegions.push({
              type: 'rect',
              key: pt.key,
              x: pt.x - colW / 2,
              y: plotTop - 20,
              w: colW,
              h: plotH + 44
            });

            ctx.strokeStyle = pt.key === selectedPillarKey
              ? (isDark ? 'rgba(59, 130, 246, 0.45)' : 'rgba(37, 99, 235, 0.35)')
              : (isDark ? 'rgba(148, 163, 184, 0.08)' : 'rgba(100, 116, 139, 0.08)');
            ctx.lineWidth = pt.key === selectedPillarKey ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(pt.x, plotTop);
            ctx.lineTo(pt.x, plotBottom);
            ctx.stroke();

            ctx.font = pt.key === selectedPillarKey ? '700 10px "Plus Jakarta Sans", sans-serif' : '600 10px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = pt.key === selectedPillarKey ? (isDark ? '#FFFFFF' : '#0A1628') : labelColor;
            ctx.textAlign = 'center';
            ctx.fillText(pt.label, pt.x, plotBottom + 16);
          });

          // Helper to trace smooth curve through points
          function traceSmoothCurve(pts, yKey) {
            ctx.moveTo(pts[0].x, pts[0][yKey]);
            for (let i = 0; i < pts.length - 1; i++) {
              const p0 = pts[i];
              const p1 = pts[i + 1];
              const midX = (p0.x + p1.x) / 2;
              ctx.bezierCurveTo(midX, p0[yKey], midX, p1[yKey], p1.x, p1[yKey]);
            }
          }

          // Area fill beneath Active Tender curve
          if (points.length > 1) {
            const areaGrad = ctx.createLinearGradient(0, plotTop, 0, plotBottom);
            areaGrad.addColorStop(0, isDark ? 'rgba(37, 99, 235, 0.34)' : 'rgba(37, 99, 235, 0.22)');
            areaGrad.addColorStop(1, isDark ? 'rgba(37, 99, 235, 0.02)' : 'rgba(37, 99, 235, 0.01)');

            ctx.beginPath();
            traceSmoothCurve(points, 'y');
            ctx.lineTo(points[points.length - 1].x, plotBottom);
            ctx.lineTo(points[0].x, plotBottom);
            ctx.closePath();
            ctx.fillStyle = areaGrad;
            ctx.fill();

            // Dashed Portfolio Average comparison line
            ctx.save();
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.65)' : 'rgba(100, 116, 139, 0.65)';
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            traceSmoothCurve(points, 'avgY');
            ctx.stroke();
            ctx.restore();

            // Active Tender main curve stroke
            ctx.strokeStyle = isDark ? '#38BDF8' : '#2563EB';
            ctx.lineWidth = 2.75;
            ctx.beginPath();
            traceSmoothCurve(points, 'y');
            ctx.stroke();
          }

          // Data point nodes & percentage callout pills
          points.forEach(pt => {
            const pal = BAR_PALETTE[pt.status];
            const isSel = pt.key === selectedPillarKey;

            if (isSel) {
              ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.22)' : 'rgba(37, 99, 235, 0.16)';
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 10, 0, Math.PI * 2);
              ctx.fill();
            }

            ctx.fillStyle = isDark ? '#0D1522' : '#FFFFFF';
            ctx.strokeStyle = pal.bottom;
            ctx.lineWidth = isSel ? 3 : 2.25;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, isSel ? 6 : 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            const valY = Math.max(plotTop - 6, pt.y - 12);
            ctx.font = '700 9.5px "JetBrains Mono", monospace';
            ctx.fillStyle = isDark ? pal.darkText : pal.text;
            ctx.textAlign = 'center';
            ctx.fillText(`${Math.round(pt.pct)}%`, pt.x, valY);
          });

          // Compact Legend above plot
          ctx.font = '600 9.5px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'left';
          ctx.fillStyle = isDark ? '#38BDF8' : '#2563EB';
          ctx.fillRect(plotLeft, plotTop - 24, 12, 3);
          ctx.fillStyle = labelColor;
          ctx.fillText('Active Tender', plotLeft + 16, plotTop - 19);

          ctx.save();
          ctx.setLineDash([3, 3]);
          ctx.strokeStyle = isDark ? '#94A3B8' : '#64748B';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(plotLeft + 96, plotTop - 22.5);
          ctx.lineTo(plotLeft + 110, plotTop - 22.5);
          ctx.stroke();
          ctx.restore();
          ctx.fillStyle = axisTextColor;
          ctx.fillText('All Tenders Avg', plotLeft + 114, plotTop - 19);
        } else if (chartMode === 'all_tenders') {
          // ===============================================================
          // STYLED 2D COMPARATIVE BAR GRAPH FOR EVERY TENDER (ALL DOSSIERS)
          // ===============================================================
          const entries = typeof BID_DOSSIERS !== 'undefined' ? Object.entries(BID_DOSSIERS) : [];
          const plotLeft = isMobile ? 42 : 60;
          const plotRight = w - (isMobile ? 16 : 30);
          const plotTop = isMobile ? 96 : 112;
          const plotBottom = h - 98;
          const plotW = Math.max(200, plotRight - plotLeft);
          const plotH = Math.max(180, plotBottom - plotTop);

          // Dashed Gridlines (0% to 100%)
          [0, 25, 50, 75, 100].forEach(tick => {
            const gy = plotBottom - (tick / 100) * plotH;
            ctx.save();
            if (tick > 0) ctx.setLineDash([3, 3]);
            ctx.strokeStyle = tick === 0 ? (isDark ? '#334155' : '#CBD5E1') : gridColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(plotLeft, gy);
            ctx.lineTo(plotRight, gy);
            ctx.stroke();
            ctx.restore();

            ctx.font = '500 10px "JetBrains Mono", monospace';
            ctx.fillStyle = axisTextColor;
            ctx.textAlign = 'right';
            ctx.fillText(`${tick}%`, plotLeft - 8, gy + 3.5);
          });

          if (entries.length) {
            const groupGap = isMobile ? 8 : 16;
            const groupW = (plotW - groupGap * (entries.length - 1)) / entries.length;

            entries.forEach(([key, dossier], gIdx) => {
              const metrics = computeComplianceMetrics(dossier);
              if (!allTenderAnimPcts[key]) {
                allTenderAnimPcts[key] = {
                  overall: 0,
                  pillars: metrics.pillars.map(() => 0)
                };
              }
              const anim = allTenderAnimPcts[key];
              anim.overall += (metrics.overall - anim.overall) * lerpFactor;
              if (Math.abs(metrics.overall - anim.overall) < 0.05) anim.overall = metrics.overall;

              metrics.pillars.forEach((p, pIdx) => {
                anim.pillars[pIdx] += (p.percentage - anim.pillars[pIdx]) * lerpFactor;
                if (Math.abs(p.percentage - anim.pillars[pIdx]) < 0.05) anim.pillars[pIdx] = p.percentage;
              });

              const gx = plotLeft + gIdx * (groupW + groupGap);
              const isCurrent = typeof currentDossierKey !== 'undefined' && key === currentDossierKey;

              interactiveRegions.push({
                type: 'rect',
                dossierKey: key,
                x: gx,
                y: plotTop - 22,
                w: groupW,
                h: plotH + 56
              });

              // Rounded Tender container card background
              ctx.fillStyle = isCurrent ? highlightBg : cardFill;
              ctx.strokeStyle = isCurrent ? '#2563EB' : cardBorder;
              ctx.lineWidth = isCurrent ? 1.5 : 1;
              drawRoundedRectPath(gx, plotTop - 16, groupW, plotH + 48, 10);
              ctx.fill();
              ctx.stroke();

              // Tender ID + Overall score header inside group
              const oPal = BAR_PALETTE[metrics.overallStatus];
              ctx.font = '700 10px "JetBrains Mono", monospace';
              ctx.fillStyle = isCurrent ? (isDark ? '#60A5FA' : '#2563EB') : labelColor;
              ctx.textAlign = 'left';
              ctx.fillText(metrics.id, gx + 10, plotTop + 2);

              ctx.font = '700 11px "JetBrains Mono", monospace';
              ctx.fillStyle = isDark ? oPal.darkText : oPal.text;
              ctx.textAlign = 'right';
              ctx.fillText(`${Math.round(anim.overall)}%`, gx + groupW - 10, plotTop + 2);

              // Plot 7 styled gradient bars inside each tender group (Overall + 6 Pillars)
              const innerLeft = gx + 10;
              const innerRight = gx + groupW - 10;
              const innerW = Math.max(40, innerRight - innerLeft);
              const innerTop = plotTop + 18;
              const innerH = Math.max(80, plotBottom - innerTop);

              const tenderBars = [
                { lbl: 'ALL', pct: anim.overall, status: metrics.overallStatus, isAll: true },
                ...metrics.pillars.map((p, pIdx) => ({
                  lbl: p.name.slice(0, 3),
                  pct: anim.pillars[pIdx],
                  status: p.status,
                  isAll: false
                }))
              ];

              const bStep = innerW / tenderBars.length;
              const bWidth = Math.max(6, Math.min(18, bStep * 0.65));

              tenderBars.forEach((tb, bIdx) => {
                const bcx = innerLeft + bStep * (bIdx + 0.5);
                const bxx = bcx - bWidth / 2;
                const bPct = Math.max(0, Math.min(100, tb.pct));
                const bHeight = Math.max(3, (bPct / 100) * innerH);
                const byy = plotBottom - bHeight;
                const bPal = tb.isAll
                  ? (tb.status === 'non_compliant' ? BAR_PALETTE.non_compliant : tb.status === 'review' ? BAR_PALETTE.review : BAR_PALETTE.overall_ok)
                  : BAR_PALETTE[tb.status];

                ctx.fillStyle = trackColor;
                drawRoundedTopBar(bxx, innerTop, bWidth, innerH, 4);

                ctx.fillStyle = makeBarGradient(bxx, byy, bHeight, bPal);
                drawRoundedTopBar(bxx, byy, bWidth, bHeight, 4);

                ctx.fillStyle = bPal.cap;
                ctx.fillRect(bxx + 1.5, byy, Math.max(0, bWidth - 3), 1.5);

                if (!isMobile || bIdx === 0) {
                  ctx.font = tb.isAll ? '700 9px "Plus Jakarta Sans", sans-serif' : '500 8.5px "Plus Jakarta Sans", sans-serif';
                  ctx.fillStyle = tb.isAll ? (isDark ? '#38BDF8' : '#0284C7') : axisTextColor;
                  ctx.textAlign = 'center';
                  ctx.fillText(tb.lbl, bcx, plotBottom + 13);
                }
              });

              // Bidder name below tender group
              const shortBidder = metrics.bidder.split(' ').slice(0, 2).join(' ');
              ctx.font = isCurrent ? '700 10px "Plus Jakarta Sans", sans-serif' : '500 10px "Plus Jakarta Sans", sans-serif';
              ctx.fillStyle = isCurrent ? (isDark ? '#FFFFFF' : '#0A1628') : labelColor;
              ctx.textAlign = 'center';
              ctx.fillText(shortBidder + (isCurrent ? ' (Active)' : ''), gx + groupW / 2, plotBottom + 26);
            });
          }
        } else {
          // ===============================================================
          // SIMPLE 2D MINIMAL PROGRESS RING
          // ===============================================================
          const cx = w / 2;
          const cy = isMobile ? h * 0.36 : h * 0.50;
          const baseRadius = isMobile
            ? Math.min(w * 0.25, h * 0.20, 96)
            : Math.min((w - 400) * 0.36, h * 0.29, 130);
          const safeRadius = Math.max(62, baseRadius);
          const ringStroke = isMobile ? 12 : 16;

          centerHudEl.style.left = `${cx}px`;
          centerHudEl.style.top = `${cy}px`;

          ctx.lineCap = 'round';

          // Minimal flat ring track
          ctx.strokeStyle = trackColor;
          ctx.lineWidth = ringStroke;
          ctx.beginPath();
          ctx.arc(cx, cy, safeRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Clean flat progress arc
          const pct = Math.max(0, Math.min(100, displayOverall));
          if (pct > 0.2) {
            const startAng = -Math.PI / 2;
            const endAng = startAng + (pct / 100) * Math.PI * 2;
            ctx.strokeStyle = overallStatus === 'non_compliant'
              ? '#EF4444'
              : overallStatus === 'review'
              ? '#F59E0B'
              : '#06B6D4';
            ctx.lineWidth = ringStroke;
            ctx.beginPath();
            ctx.arc(cx, cy, safeRadius, startAng, endAng);
            ctx.stroke();
          }
        }

        requestAnimationFrame(draw2DChart);
      }

      requestAnimationFrame(draw2DChart);
    })();
  </script>
</body>
</html>
