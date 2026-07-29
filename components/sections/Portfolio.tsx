'use client';

import { useGsap } from '@/hooks/useGsap';

interface Project {
  id: ProjectId;
  eyebrow: string;
  title: string;
  tagline: string;
  metric: string;
  href: string | null;
  surface: string;
  chips: string[];
  accent: string;       // CSS color for stage glow + accent text
  accentBg: string;     // radial rgba for the card stage background
}

type ProjectId =
  | 'chainshots' | 'supersquad' | 'rivali' | 'serene' | 'news'
  | 'rmpd' | 'epp' | 'pune' | 'biniyog';

const PROJECTS: Project[] = [
  {
    id: 'chainshots',
    eyebrow: 'Crypto news · iOS + Android + Web',
    title: 'ChainShots',
    tagline: 'Curated crypto news and market briefings — web, iOS and Android.',
    metric: '5,000+ active users at launch',
    href: 'https://chainshots.com/',
    surface: 'Web · iOS · Android',
    chips: ['Crypto news', 'Daily brief', 'iOS', 'Android'],
    accent: '#2997ff',
    accentBg: 'rgba(41,151,255,0.18)',
  },
  {
    id: 'supersquad',
    eyebrow: 'Travel & wellness · Web',
    title: 'SuperSquad',
    tagline: 'Travel to transform — fitness & wellness retreats, from Muay Thai in Thailand to padel in Bali.',
    metric: 'Booking-ready platform for a VC-backed travel brand',
    href: 'https://supersquad.club/',
    surface: 'Web',
    chips: ['Retreats', 'Bookings', 'Community'],
    accent: '#f43f5e',
    accentBg: 'rgba(244,63,94,0.16)',
  },
  {
    id: 'rivali',
    eyebrow: 'Real estate · Web',
    title: 'Rivali Park',
    tagline: 'A premium property platform with virtual tours and a clean editorial feel.',
    metric: '2× more property inquiries in the first month',
    href: 'https://www.rivalipark2.com/',
    surface: 'Web',
    chips: ['Next.js', 'Framer Motion', 'Google Maps', 'SEO'],
    accent: '#f97316',
    accentBg: 'rgba(249,115,22,0.16)',
  },
  {
    id: 'serene',
    eyebrow: 'Real estate · Web + Mobile',
    title: 'Serene Homes',
    tagline: 'Real estate, end-to-end — on every device.',
    metric: '40% more lead conversions after launch',
    href: 'https://www.serenehomes.co.in/',
    surface: 'Web · iOS · Android',
    chips: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    accent: '#22c55e',
    accentBg: 'rgba(34,197,94,0.16)',
  },
  {
    id: 'news',
    eyebrow: 'Media · Web',
    title: 'News & Media',
    tagline: 'Real-time news with personalised feeds and reading lists.',
    metric: 'Delivered in 2.5 weeks · 3× faster page loads',
    href: null,
    surface: 'Web · PWA',
    chips: ['Next.js', 'TypeScript', 'Firebase', 'Push'],
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.16)',
  },
  {
    id: 'rmpd',
    eyebrow: 'Retail · Web',
    title: 'RMPD Jewellers',
    tagline: 'An online catalogue for a heritage jewellery house.',
    metric: '60% increase in customer inquiries',
    href: 'https://www.rmpdjewellers.com/',
    surface: 'Web',
    chips: ['Catalogue', 'Premium craft', 'Fine accessories'],
    accent: '#fb7185',
    accentBg: 'rgba(251,113,133,0.16)',
  },
  {
    id: 'epp',
    eyebrow: 'ERP · Internal software',
    title: 'Envirofluent ERP',
    tagline: 'A custom ERP and operations dashboard for a manufacturing client.',
    metric: 'Reduced manual work by 70% for the ops team',
    href: 'https://www.envirofluent.com/',
    surface: 'Web · Internal',
    chips: ['ERP', 'Automation', 'Reporting'],
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.16)',
  },
  {
    id: 'pune',
    eyebrow: 'Jobs · AI',
    title: 'PuneAIJobs',
    tagline: 'An AI-powered job aggregator with smart scraping and intent filters.',
    metric: '10,000+ job listings aggregated at launch',
    href: 'https://www.puneaijobs.com/',
    surface: 'Web · AI',
    chips: ['AI', 'Smart filters', 'Career platform'],
    accent: '#8b5cf6',
    accentBg: 'rgba(139,92,246,0.16)',
  },
  {
    id: 'biniyog',
    eyebrow: 'Stock advisory · Web + Mobile',
    title: 'MyBiniyog',
    tagline: 'Curated stock recommendations with target prices and conviction scores.',
    metric: 'Web + mobile delivered in four weeks',
    href: 'https://www.mybiniyog.com/',
    surface: 'Web · iOS · Android',
    chips: ['Stock picks', 'Advisory', 'Targets'],
    accent: '#a3e635',
    accentBg: 'rgba(163,230,53,0.16)',
  },
];

/* =====================================================
   Shared SVG chrome — laptop + phone
   ===================================================== */

function LaptopChrome({ url }: { url: string }) {
  return (
    <>
      <rect x="10" y="10" width="460" height="240" rx="14" fill="#1a1a1d" stroke="rgba(255,255,255,0.12)" />
      <rect x="22" y="22" width="436" height="216" rx="6" fill="#0c1018" />
      <rect x="22" y="22" width="436" height="22" rx="6" fill="#0a0d14" />
      <circle cx="36" cy="33" r="3" fill="#ff5f57" />
      <circle cx="48" cy="33" r="3" fill="#febc2e" />
      <circle cx="60" cy="33" r="3" fill="#28c840" />
      <rect x="170" y="26" width="140" height="14" rx="7" fill="rgba(255,255,255,0.07)" />
      <text x="240" y="36" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="rgba(255,255,255,0.55)">
        {url}
      </text>
      {/* hinge */}
      <rect x="-18" y="250" width="516" height="12" rx="6" fill="#15161a" stroke="rgba(255,255,255,0.06)" />
      <rect x="210" y="254" width="60" height="4" rx="2" fill="#0a0a0c" />
    </>
  );
}

function PhoneChrome() {
  return (
    <>
      <rect x="2" y="2" width="136" height="276" rx="22" fill="#0c0c0e" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
      <rect x="8" y="10" width="124" height="260" rx="17" fill="#0a0d16" />
      <rect x="50" y="14" width="40" height="10" rx="5" fill="#000" />
      <circle cx="84" cy="19" r="2" fill="rgba(41,151,255,0.6)" />
      <text x="16" y="36" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">9:41</text>
    </>
  );
}

/* =====================================================
   Per-project mockups
   ===================================================== */

function ChainShotsMockup() {
  // Laptop + phone — crypto news app
  return (
    <svg viewBox="0 0 480 300" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="chainshots.com" />

      {/* Top section heading */}
      <text x="34" y="62" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">Today&apos;s brief</text>
      <rect x="116" y="54" width="36" height="12" rx="6" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.4)" />
      <text className="pm-blink" x="134" y="63" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#f87171">● LIVE</text>
      <text x="318" y="62" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">9:41 IST · 14 new this morning</text>

      {/* Featured news card */}
      <rect x="34" y="74" width="248" height="154" rx="7" fill="rgba(41,151,255,0.08)" stroke="rgba(41,151,255,0.22)" />
      <rect x="42" y="82" width="232" height="62" rx="5" fill="rgba(41,151,255,0.25)" />
      <text className="pm-breathe" x="158" y="118" textAnchor="middle" fontFamily="var(--font-display)" fontSize="20" fontWeight="700" fill="rgba(255,255,255,0.3)">BTC</text>
      <rect className="pm-featured-badge" x="48" y="88" width="44" height="14" rx="7" fill="#2997ff" />
      <text x="70" y="98" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#fff">FEATURED</text>
      <text x="42" y="160" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">Bitcoin breaks $70K as ETF inflows surge</text>
      <text x="42" y="174" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">on record institutional demand</text>
      <text x="42" y="194" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Markets · 6 min read · 4 min ago</text>
      <rect x="42" y="204" width="58" height="14" rx="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" />
      <text x="71" y="214" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Read →</text>

      {/* Secondary news list */}
      <text x="296" y="86" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">More briefs</text>

      <rect x="296" y="94" width="150" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="302" y="100" width="26" height="28" rx="4" fill="rgba(98,126,234,0.3)" />
      <text x="315" y="118" textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="700" fill="rgba(98,126,234,0.85)">ETH</text>
      <text x="334" y="111" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Ethereum upgrade goes</text>
      <text x="334" y="120" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">live on mainnet</text>
      <text x="334" y="130" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">18 min · DeFi</text>

      <rect x="296" y="140" width="150" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="302" y="146" width="26" height="28" rx="4" fill="rgba(20,241,149,0.3)" />
      <text x="315" y="164" textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="700" fill="rgba(20,241,149,0.95)">SOL</text>
      <text x="334" y="157" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Solana hits all-time</text>
      <text x="334" y="166" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">high TPS in stress test</text>
      <text x="334" y="176" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">42 min · Tech</text>

      <rect x="296" y="186" width="150" height="40" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="302" y="192" width="26" height="28" rx="4" fill="rgba(247,147,26,0.3)" />
      <text x="315" y="210" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="rgba(247,147,26,0.95)">REG</text>
      <text x="334" y="203" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">SEC clears two new</text>
      <text x="334" y="212" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">spot ETH ETF filings</text>
      <text x="334" y="222" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">1 hr · Regulation</text>

      {/* Phone overlay — front-right */}
      <g transform="translate(348, 110)">
        <rect x="0" y="0" width="92" height="148" rx="14" fill="#0c0c0e" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <rect x="4" y="6" width="84" height="136" rx="11" fill="#0a0d16" />
        <rect x="36" y="9" width="20" height="6" rx="3" fill="#000" />
        <text x="10" y="28" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#fff">ChainShots</text>
        <text x="10" y="36" fontFamily="var(--font-text)" fontSize="5" fill="rgba(255,255,255,0.5)">Daily brief</text>

        <rect x="10" y="42" width="72" height="34" rx="5" fill="rgba(41,151,255,0.15)" stroke="rgba(41,151,255,0.3)" />
        <rect className="pm-pulse" x="14" y="46" width="18" height="6" rx="3" fill="#2997ff" />
        <text x="23" y="51" textAnchor="middle" fontFamily="var(--font-display)" fontSize="4" fontWeight="700" fill="#fff">TOP</text>
        <text x="14" y="62" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#fff">BTC tops $70K</text>
        <text x="14" y="70" fontFamily="var(--font-text)" fontSize="5" fill="rgba(255,255,255,0.55)">4 min · Markets</text>

        <rect x="10" y="80"  width="72" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
        <text x="14" y="91" fontFamily="var(--font-display)" fontSize="5" fontWeight="600" fill="#fff">ETH upgrade live</text>
        <text x="14" y="98" fontFamily="var(--font-text)" fontSize="4" fill="rgba(255,255,255,0.5)">18m</text>

        <rect x="10" y="104" width="72" height="20" rx="4" fill="rgba(255,255,255,0.04)" />
        <text x="14" y="115" fontFamily="var(--font-display)" fontSize="5" fontWeight="600" fill="#fff">Solana sets ATH TPS</text>
        <text x="14" y="122" fontFamily="var(--font-text)" fontSize="4" fill="rgba(255,255,255,0.5)">42m</text>

        <rect x="10" y="128" width="72" height="10" rx="5" fill="rgba(255,255,255,0.06)" />
        <rect className="pm-tab" x="12" y="129" width="22" height="8" rx="4" fill="#2997ff" />
      </g>
    </svg>
  );
}

function RivaliMockup() {
  // Laptop — property listings grid
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="rivalipark2.com" />

      {/* hero band */}
      <rect x="34" y="56" width="412" height="50" rx="7" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.2)" />
      <text x="50" y="76" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#fff">Premium homes for modern living.</text>
      <rect className="pm-pulse" x="50" y="84" width="120" height="14" rx="7" fill="#f97316" />
      <text x="110" y="94" textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Schedule a visit</text>

      {/* travelling highlight ring across the 3 property cards */}
      <rect className="pm-highlight-3-h" x="34" y="120" width="132" height="110" rx="7" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6" />

      {/* listings (3 cards) */}
      <g>
        <rect x="34" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="128" width="116" height="50" rx="5" fill="rgba(249,115,22,0.2)" />
        <text x="100" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="22" fontWeight="700" fill="rgba(249,115,22,0.35)">3 BHK</text>
        <text x="42" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Garden Vista</text>
        <text x="42" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">₹1.4 Cr · 1,650 sqft</text>
        <rect className="pm-pulse" x="42" y="212" width="44" height="12" rx="6" fill="rgba(249,115,22,0.5)" />
        <text x="64" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">New</text>
      </g>

      <g className="pm-fade pm-d1">
        <rect x="174" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="182" y="128" width="116" height="50" rx="5" fill="rgba(249,115,22,0.2)" />
        <text x="240" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="22" fontWeight="700" fill="rgba(249,115,22,0.35)">2 BHK</text>
        <text x="182" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Skyline Court</text>
        <text x="182" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">₹95 L · 1,120 sqft</text>
        <rect className="pm-pulse" x="182" y="212" width="56" height="12" rx="6" fill="rgba(34,197,94,0.55)" style={{ animationDelay: '0.4s' }} />
        <text x="210" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">Selling fast</text>
      </g>

      <g className="pm-fade pm-d2">
        <rect x="314" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="322" y="128" width="116" height="50" rx="5" fill="rgba(249,115,22,0.2)" />
        <text x="380" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="22" fontWeight="700" fill="rgba(249,115,22,0.35)">4 BHK</text>
        <text x="322" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Royal Heights</text>
        <text x="322" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">₹2.8 Cr · 2,400 sqft</text>
        <rect className="pm-pulse" x="322" y="212" width="48" height="12" rx="6" fill="rgba(255,255,255,0.22)" style={{ animationDelay: '0.8s' }} />
        <text x="346" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">Premium</text>
      </g>
    </svg>
  );
}

function SereneMockup() {
  // Laptop with overlapping phone — both showing real estate
  return (
    <svg viewBox="0 0 480 300" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="serenehomes.co.in" />

      {/* map background on laptop screen */}
      <rect x="34" y="56" width="278" height="172" rx="7" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.18)" />
      {/* map "streets" */}
      <path d="M 34 100 L 312 130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d="M 34 150 L 312 90"  stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d="M 80 56  L 110 228" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <path d="M 200 56 L 240 228" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* drawing line connecting the pins */}
      <polyline className="pm-line" points="100,130 200,100 250,170" fill="none" stroke="rgba(34,197,94,0.6)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 4" />

      {/* map pins */}
      <g className="pm-pin">
        <circle cx="100" cy="130" r="8" fill="#22c55e" />
        <circle cx="100" cy="130" r="14" fill="#22c55e" opacity="0.2" />
      </g>
      {/* radar ring around the featured pin */}
      <circle className="pm-ring" cx="100" cy="130" r="14" fill="none" stroke="#22c55e" strokeWidth="1.4" style={{ transformOrigin: '100px 130px' } as React.CSSProperties} />

      <g className="pm-pin" style={{ animationDelay: '0.4s' }}>
        <circle cx="200" cy="100" r="6" fill="#22c55e" />
        <circle cx="200" cy="100" r="11" fill="#22c55e" opacity="0.2" />
      </g>
      <g className="pm-pin" style={{ animationDelay: '0.8s' }}>
        <circle cx="250" cy="170" r="6" fill="#22c55e" />
        <circle cx="250" cy="170" r="11" fill="#22c55e" opacity="0.2" />
      </g>

      {/* listing side card */}
      <rect x="322" y="56" width="124" height="172" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <text x="332" y="72" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">Nearby</text>
      <g className="pm-fade pm-d0">
        <rect x="332" y="80"  width="104" height="36" rx="5" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" />
        <text x="340" y="93" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Serene Pines</text>
        <text x="340" y="104" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.5)">₹1.2 Cr</text>
      </g>
      <g className="pm-fade pm-d1">
        <rect x="332" y="120" width="104" height="36" rx="5" fill="rgba(255,255,255,0.04)" />
        <text x="340" y="133" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Serene Heights</text>
        <text x="340" y="144" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.5)">₹85 L</text>
      </g>
      <g className="pm-fade pm-d2">
        <rect x="332" y="160" width="104" height="36" rx="5" fill="rgba(255,255,255,0.04)" />
        <text x="340" y="173" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Serene Lake</text>
        <text x="340" y="184" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.5)">₹1.6 Cr</text>
      </g>

      {/* small phone overlay (bottom-right) */}
      <g transform="translate(360, 156)">
        <rect x="0" y="0" width="84" height="138" rx="14" fill="#0c0c0e" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <rect x="4" y="6" width="76" height="126" rx="11" fill="#0a0d16" />
        <rect x="32" y="9" width="20" height="6" rx="3" fill="#000" />
        <text x="10" y="28" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Serene</text>
        <rect x="10" y="34" width="64" height="36" rx="4" fill="rgba(34,197,94,0.18)" />
        <text x="42" y="55" textAnchor="middle" fontFamily="var(--font-display)" fontSize="10" fontWeight="700" fill="rgba(34,197,94,0.65)">3 BHK</text>
        <rect className="pm-fade pm-d3" x="10" y="74" width="64" height="18" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect className="pm-fade pm-d4" x="10" y="96" width="64" height="18" rx="3" fill="rgba(255,255,255,0.05)" />
        <rect className="pm-pulse" x="10" y="118" width="64" height="10" rx="5" fill="#22c55e" />
        <text x="42" y="125" textAnchor="middle" fontFamily="var(--font-display)" fontSize="5" fontWeight="600" fill="#fff">Book a visit</text>
      </g>
    </svg>
  );
}

function NewsMockup() {
  // Laptop — news feed
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="news app" />

      {/* category tabs */}
      <text x="34" y="64" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">Top stories</text>
      <rect className="pm-pulse" x="106" y="56" width="44" height="14" rx="7" fill="rgba(245,158,11,0.32)" stroke="rgba(245,158,11,0.55)" />
      <text x="128" y="65" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">For you</text>
      <text x="166" y="65" fontFamily="var(--font-display)" fontSize="8" fill="rgba(255,255,255,0.5)">Tech</text>
      <text x="200" y="65" fontFamily="var(--font-display)" fontSize="8" fill="rgba(255,255,255,0.5)">Finance</text>
      <text x="246" y="65" fontFamily="var(--font-display)" fontSize="8" fill="rgba(255,255,255,0.5)">Sports</text>
      <text x="288" y="65" fontFamily="var(--font-display)" fontSize="8" fill="rgba(255,255,255,0.5)">Culture</text>

      {/* travelling highlight ring through 3 articles (steps ~52px) */}
      <rect className="pm-highlight-3-md" x="34" y="78" width="412" height="46" rx="7" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />

      {/* article rows */}
      <g>
        <rect x="34" y="78"  width="412" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="86"  width="80"  height="30" rx="4" fill="rgba(245,158,11,0.2)" />
        <text className="pm-blink" x="82"  y="105" textAnchor="middle" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="rgba(245,158,11,0.85)">● LIVE</text>
        <text x="132" y="98"  fontFamily="var(--font-display)" fontSize="10" fontWeight="700" fill="#fff">RBI keeps repo rate steady at 6.50%</text>
        <text x="132" y="112" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.5)">Finance · 2 min read · 4 min ago</text>
      </g>
      <g className="pm-fade pm-d1">
        <rect x="34" y="130" width="412" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="138" width="80"  height="30" rx="4" fill="rgba(41,151,255,0.2)" />
        <text x="82"  y="157" textAnchor="middle" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="rgba(41,151,255,0.7)">TECH</text>
        <text x="132" y="150" fontFamily="var(--font-display)" fontSize="10" fontWeight="700" fill="#fff">India crosses 900M internet users</text>
        <text x="132" y="164" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.5)">Tech · 4 min read · 18 min ago</text>
      </g>
      <g className="pm-fade pm-d2">
        <rect x="34" y="182" width="412" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="190" width="80"  height="30" rx="4" fill="rgba(34,197,94,0.18)" />
        <text x="82"  y="209" textAnchor="middle" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="rgba(34,197,94,0.75)">SPORT</text>
        <text x="132" y="202" fontFamily="var(--font-display)" fontSize="10" fontWeight="700" fill="#fff">India clinch series with stunning final-over win</text>
        <text x="132" y="216" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.5)">Sports · 6 min read · 1 hr ago</text>
      </g>
    </svg>
  );
}

function RmpdMockup() {
  // Laptop — jewellery catalogue (4-up grid in rose/gold)
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="rmpdjewellers.com" />

      <text x="34" y="64" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">Bridal collection</text>
      <text x="34" y="76" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">22kt gold · Handcrafted in Patna</text>

      {/* 4 product tiles in 2x2 grid */}
      {[
        { x: 34,  y: 86, label: 'Sita Set' },
        { x: 142, y: 86, label: 'Devi Necklace' },
        { x: 250, y: 86, label: 'Rana Earrings' },
        { x: 358, y: 86, label: 'Royal Mangalsutra' },
      ].map((p, i) => (
        <g key={p.label}>
          <rect x={p.x} y={p.y} width="100" height="142" rx="7" fill="rgba(251,113,133,0.08)" stroke="rgba(251,113,133,0.2)" />
          {/* product silhouette = gold gradient circles, gently breathing */}
          <g
            className="pm-breathe"
            style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${p.x + 50}px ${p.y + 50}px` } as React.CSSProperties}
          >
            <circle cx={p.x + 50} cy={p.y + 50} r="30" fill="rgba(251,113,133,0.3)" />
            <circle cx={p.x + 50} cy={p.y + 50} r="20" fill="rgba(251,113,133,0.55)" />
            <circle cx={p.x + 50} cy={p.y + 50} r="10" fill="rgba(255,255,255,0.45)" />
          </g>
          <text x={p.x + 50} y={p.y + 108} textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">{p.label}</text>
          <text x={p.x + 50} y={p.y + 120} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.55)">₹ on request</text>
          <rect
            className="pm-pulse"
            x={p.x + 12} y={p.y + 126} width="76" height="10" rx="5"
            fill="rgba(251,113,133,0.55)"
            style={{ animationDelay: `${i * 0.25}s` } as React.CSSProperties}
          />
          <text x={p.x + 50} y={p.y + 133} textAnchor="middle" fontFamily="var(--font-display)" fontSize="5" fontWeight="600" fill="#fff">Enquire</text>
        </g>
      ))}
    </svg>
  );
}

function EppMockup() {
  // Laptop — ERP dashboard with bar chart + KPI tiles
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="envirofluent.com" />

      <text x="34" y="64" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">Operations dashboard</text>
      <circle className="pm-blink" cx="40" cy="74" r="2.5" fill="#34d399" />
      <text x="46" y="76" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Live · 12 plants · 4 regions</text>

      {/* travelling highlight ring across the 4 KPI tiles */}
      <rect className="pm-highlight-4-h" x="34" y="86" width="100" height="44" rx="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6" />

      {/* KPI row */}
      <g>
        <rect x="34" y="86" width="100" height="44" rx="6" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.25)" />
        <text x="42" y="100" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.55)">UPTIME</text>
        <text x="42" y="118" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#fff">99.4%</text>
      </g>
      <g>
        <rect x="142" y="86" width="100" height="44" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="150" y="100" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.55)">ORDERS · 24h</text>
        <text x="150" y="118" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#fff">1,284</text>
      </g>
      <g>
        <rect className="pm-pulse" x="250" y="86" width="100" height="44" rx="6" fill="rgba(239,68,68,0.18)" stroke="rgba(239,68,68,0.45)" />
        <text x="258" y="100" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.55)">ALERTS</text>
        <text x="258" y="118" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#fff">3</text>
        <circle className="pm-blink" cx="338" cy="98" r="3" fill="#ef4444" />
      </g>
      <g>
        <rect x="358" y="86" width="88" height="44" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <text x="366" y="100" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.55)">MARGIN</text>
        <text x="366" y="118" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#fff">18%</text>
      </g>

      {/* Bar chart */}
      <rect x="34" y="138" width="412" height="92" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <text x="42" y="152" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Throughput · last 7 days</text>
      {[
        { x: 50,  h: 30, label: 'M' }, { x: 110, h: 50, label: 'T' },
        { x: 170, h: 36, label: 'W' }, { x: 230, h: 64, label: 'T' },
        { x: 290, h: 44, label: 'F' }, { x: 350, h: 58, label: 'S' },
        { x: 410, h: 48, label: 'S' },
      ].map((b, i) => (
        <g key={i}>
          <rect className="pm-bar" style={{ ['--h' as any]: `${b.h}px`, ['--delay' as any]: `${i * 0.12}s` }} x={b.x - 9} y={222 - b.h} width="20" height={b.h} rx="3" fill="#06b6d4" />
          <text x={b.x} y={234} textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fill="rgba(255,255,255,0.45)">{b.label}</text>
        </g>
      ))}
    </svg>
  );
}

function PuneMockup() {
  // Laptop — job listings with filter chips
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="puneaijobs.com" />

      <text x="34" y="64" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">AI matches for you</text>
      <g className="pm-blink">
        <text x="170" y="64" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#8b5cf6">✦</text>
      </g>
      <text x="34" y="76" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">10,234 listings · sorted by relevance</text>

      {/* filter chips */}
      <g>
        <rect className="pm-pulse" x="34" y="84" width="60" height="16" rx="8" fill="rgba(139,92,246,0.4)" stroke="rgba(139,92,246,0.55)" />
        <text x="64" y="95" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Remote</text>
        <rect x="100" y="84" width="60" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="130" y="95" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.7)">Senior</text>
        <rect x="166" y="84" width="76" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="204" y="95" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.7)">₹30 LPA+</text>
        <rect x="248" y="84" width="58" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="277" y="95" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.7)">Pune</text>
      </g>

      {/* travelling highlight ring through 3 job rows (42px steps) */}
      <rect className="pm-highlight-3-sm" x="34" y="110" width="412" height="38" rx="7" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.55" />

      {/* job rows */}
      <g>
        <rect x="34" y="110" width="412" height="38" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(139,92,246,0.2)" />
        <rect x="42" y="118" width="22"  height="22" rx="5" fill="rgba(139,92,246,0.4)" />
        <text x="72" y="128" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">Senior Backend Engineer</text>
        <text x="72" y="140" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Razorpay · Pune · ₹38–55 LPA</text>
        <rect className="pm-pulse" x="380" y="121" width="58" height="16" rx="8" fill="#8b5cf6" />
        <text x="409" y="132" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Apply →</text>
      </g>
      <g className="pm-fade pm-d1">
        <rect x="34" y="152" width="412" height="38" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="160" width="22"  height="22" rx="5" fill="rgba(41,151,255,0.4)" />
        <text x="72" y="170" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">Product Designer</text>
        <text x="72" y="182" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Atlassian · Remote · ₹28–42 LPA</text>
        <rect x="380" y="163" width="58" height="16" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" />
        <text x="409" y="174" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Apply</text>
      </g>
      <g className="pm-fade pm-d2">
        <rect x="34" y="194" width="412" height="38" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="202" width="22"  height="22" rx="5" fill="rgba(34,197,94,0.4)" />
        <text x="72" y="212" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">ML Engineer (NLP)</text>
        <text x="72" y="224" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Sarvam AI · Hybrid · ₹45–70 LPA</text>
        <rect x="380" y="205" width="58" height="16" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" />
        <text x="409" y="216" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="#fff">Apply</text>
      </g>
    </svg>
  );
}

function BiniyogMockup() {
  // Laptop + phone — stock recommendation advisory
  return (
    <svg viewBox="0 0 480 300" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="mybiniyog.com" />

      {/* Heading */}
      <text x="34" y="62" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#fff">This week&apos;s picks</text>
      <text x="34" y="74" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Curated by SEBI-registered analysts · NSE</text>
      <rect className="pm-pulse" x="184" y="54" width="42" height="13" rx="6" fill="rgba(163,230,53,0.3)" stroke="rgba(163,230,53,0.55)" />
      <text x="205" y="64" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#a3e635">4 NEW</text>

      {/* Featured pick card */}
      <rect x="34" y="82" width="248" height="146" rx="7" fill="rgba(163,230,53,0.08)" stroke="rgba(163,230,53,0.25)" />
      <rect className="pm-pulse" x="42" y="90" width="44" height="16" rx="8" fill="#a3e635" />
      <text x="64" y="101" textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="700" fill="#0a0a0c">BUY</text>
      <text x="96" y="102" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#fff">RELIANCE</text>
      <text x="270" y="102" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">NSE · LARGE-CAP</text>

      {/* Price + target */}
      <text x="42"  y="124" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">CURRENT</text>
      <text x="42"  y="140" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#fff">₹2,847</text>
      <text x="120" y="124" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">TARGET</text>
      <text x="120" y="140" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#a3e635">₹3,210</text>
      <text x="200" y="124" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">UPSIDE</text>
      <text x="200" y="140" fontFamily="ui-monospace,monospace" fontSize="14" fontWeight="700" fill="#34d399">+12.8%</text>

      {/* Sparkline showing target path */}
      <rect x="42" y="148" width="232" height="40" rx="5" fill="rgba(255,255,255,0.03)" />
      <polyline className="pm-spark" points="48,180 62,176 78,178 96,172 116,174 138,168 162,164 188,158 214,150 240,148 264,144" fill="none" stroke="#a3e635" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="240" y1="148" x2="264" y2="144" stroke="#a3e635" strokeWidth="1.6" strokeDasharray="2 2" />
      <circle cx="264" cy="144" r="3" fill="#a3e635" />
      {/* Radar ring around the target dot */}
      <circle className="pm-ring" cx="264" cy="144" r="6" fill="none" stroke="#a3e635" strokeWidth="1.4" style={{ transformOrigin: '264px 144px' } as React.CSSProperties} />
      <text x="264" y="139" textAnchor="end" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#a3e635">TARGET</text>

      {/* Conviction — dots fill sequentially */}
      <text x="42"  y="208" fontFamily="var(--font-text)" fontSize="7" fill="rgba(255,255,255,0.5)">CONVICTION</text>
      <g>
        <circle className="pm-fill-1" cx="118" cy="206" r="3" fill="#a3e635" />
        <circle className="pm-fill-2" cx="128" cy="206" r="3" fill="#a3e635" />
        <circle className="pm-fill-3" cx="138" cy="206" r="3" fill="#a3e635" />
        <circle className="pm-fill-4" cx="148" cy="206" r="3" fill="#a3e635" />
        <circle cx="158" cy="206" r="3" fill="rgba(255,255,255,0.15)" />
      </g>
      <text x="42"  y="222" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="rgba(255,255,255,0.7)">12-month horizon · Updated 9:30 IST</text>

      {/* Side recommendation list */}
      <text x="296" y="94" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">Other picks</text>

      <rect x="296" y="102" width="150" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect className="pm-pulse" x="302" y="108" width="30" height="14" rx="6" fill="rgba(163,230,53,0.45)" style={{ animationDelay: '0.4s' }} />
      <text x="317" y="118" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#a3e635">BUY</text>
      <text x="338" y="118" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">HDFC Bank</text>
      <text x="302" y="132" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.55)">Target ₹1,850</text>
      <text x="440" y="132" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#34d399">+9.4%</text>

      <rect x="296" y="146" width="150" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="302" y="152" width="30" height="14" rx="6" fill="rgba(245,158,11,0.3)" />
      <text x="317" y="162" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#f59e0b">HOLD</text>
      <text x="338" y="162" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">TCS</text>
      <text x="302" y="176" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.55)">Target ₹4,200</text>
      <text x="440" y="176" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="rgba(255,255,255,0.7)">+3.1%</text>

      <rect x="296" y="190" width="150" height="38" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect className="pm-pulse" x="302" y="196" width="30" height="14" rx="6" fill="rgba(163,230,53,0.45)" style={{ animationDelay: '0.8s' }} />
      <text x="317" y="206" textAnchor="middle" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#a3e635">BUY</text>
      <text x="338" y="206" fontFamily="var(--font-display)" fontSize="9" fontWeight="700" fill="#fff">INFY</text>
      <text x="302" y="220" fontFamily="ui-monospace,monospace" fontSize="7" fill="rgba(255,255,255,0.55)">Target ₹2,100</text>
      <text x="440" y="220" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#34d399">+11.2%</text>

      {/* Phone overlay */}
      <g transform="translate(348, 110)">
        <rect x="0" y="0" width="92" height="148" rx="14" fill="#0c0c0e" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <rect x="4" y="6" width="84" height="136" rx="11" fill="#0a0d16" />
        <rect x="36" y="9" width="20" height="6" rx="3" fill="#000" />
        <text x="10" y="28" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#fff">MyBiniyog</text>
        <text x="10" y="36" fontFamily="var(--font-text)" fontSize="5" fill="rgba(255,255,255,0.5)">Today&apos;s call</text>

        <rect x="10" y="42" width="72" height="56" rx="5" fill="rgba(163,230,53,0.12)" stroke="rgba(163,230,53,0.3)" />
        <rect className="pm-pulse" x="14" y="46" width="20" height="9" rx="4" fill="#a3e635" />
        <text x="24" y="53" textAnchor="middle" fontFamily="var(--font-display)" fontSize="5" fontWeight="700" fill="#000">BUY</text>
        <text x="14" y="68" fontFamily="var(--font-display)" fontSize="8" fontWeight="700" fill="#fff">RELIANCE</text>
        <text x="14" y="78" fontFamily="ui-monospace,monospace" fontSize="5" fill="rgba(255,255,255,0.55)">₹2,847 → ₹3,210</text>
        <text x="78" y="80" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="700" fill="#34d399">+12.8%</text>
        <polyline className="pm-spark" points="14,92 22,89 30,90 38,86 46,87 54,82 62,83 70,78 78,76" fill="none" stroke="#a3e635" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />

        <rect x="10" y="104" width="72" height="14" rx="3" fill="rgba(255,255,255,0.04)" />
        <text x="14" y="113" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">HDFC Bank</text>
        <text x="78" y="113" textAnchor="end" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#34d399">+9.4%</text>

        <rect x="10" y="122" width="72" height="14" rx="3" fill="rgba(255,255,255,0.04)" />
        <text x="14" y="131" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">INFY</text>
        <text x="78" y="131" textAnchor="end" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#34d399">+11.2%</text>
      </g>
    </svg>
  );
}

function SuperSquadMockup() {
  // Laptop — travel & wellness retreat listings
  return (
    <svg viewBox="0 0 480 280" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }} aria-hidden="true">
      <LaptopChrome url="supersquad.club" />

      {/* hero band */}
      <rect x="34" y="56" width="412" height="50" rx="7" fill="rgba(244,63,94,0.08)" stroke="rgba(244,63,94,0.22)" />
      <text x="50" y="78" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#fff">Travel to transform.</text>
      <text x="50" y="92" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Fitness &amp; wellness retreats · Body · Soul · Mind</text>
      <rect className="pm-pulse" x="330" y="72" width="102" height="18" rx="9" fill="#f43f5e" />
      <text x="381" y="84" textAnchor="middle" fontFamily="var(--font-display)" fontSize="8" fontWeight="600" fill="#fff">Explore retreats</text>

      {/* travelling highlight ring across the 3 retreat cards */}
      <rect className="pm-highlight-3-h" x="34" y="120" width="132" height="110" rx="7" fill="none" stroke="#f43f5e" strokeWidth="1.5" opacity="0.6" />

      {/* retreat card 1 — Muay Thai */}
      <g>
        <rect x="34" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="42" y="128" width="116" height="50" rx="5" fill="rgba(244,63,94,0.2)" />
        <text x="100" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="rgba(244,63,94,0.4)">MUAY THAI</text>
        <text x="42" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Thailand</text>
        <text x="42" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">5-day camp · Body</text>
        <rect className="pm-pulse" x="42" y="212" width="44" height="12" rx="6" fill="rgba(244,63,94,0.5)" />
        <text x="64" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">Popular</text>
      </g>

      {/* retreat card 2 — Padel */}
      <g className="pm-fade pm-d1">
        <rect x="174" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="182" y="128" width="116" height="50" rx="5" fill="rgba(244,63,94,0.2)" />
        <text x="240" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="rgba(244,63,94,0.4)">PADEL</text>
        <text x="182" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Bali</text>
        <text x="182" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">Camp + stay · Soul</text>
        <rect className="pm-pulse" x="182" y="212" width="56" height="12" rx="6" fill="rgba(34,197,94,0.55)" style={{ animationDelay: '0.4s' }} />
        <text x="210" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">Filling up</text>
      </g>

      {/* retreat card 3 — Surf */}
      <g className="pm-fade pm-d2">
        <rect x="314" y="120" width="132" height="110" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="322" y="128" width="116" height="50" rx="5" fill="rgba(244,63,94,0.2)" />
        <text x="380" y="158" textAnchor="middle" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="rgba(244,63,94,0.4)">SURF</text>
        <text x="322" y="194" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">Indonesia</text>
        <text x="322" y="206" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.55)">Nomad games · Mind</text>
        <rect className="pm-pulse" x="322" y="212" width="48" height="12" rx="6" fill="rgba(255,255,255,0.22)" style={{ animationDelay: '0.8s' }} />
        <text x="346" y="220" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="600" fill="#fff">New</text>
      </g>
    </svg>
  );
}

const MOCKUPS: Record<ProjectId, () => JSX.Element> = {
  chainshots: ChainShotsMockup,
  supersquad: SuperSquadMockup,
  rivali: RivaliMockup,
  serene: SereneMockup,
  news: NewsMockup,
  rmpd: RmpdMockup,
  epp: EppMockup,
  pune: PuneMockup,
  biniyog: BiniyogMockup,
};

/* =====================================================
   Card
   ===================================================== */

function ProjectCard({ p }: { p: Project }) {
  const Mockup = MOCKUPS[p.id];
  return (
    <article
      className="project-card"
      style={{
        background: 'var(--color-surface-tile-1)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 14px 36px -22px rgba(0,0,0,0.5)',
        transition:
          'transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease',
      }}
    >
      <div
        className="project-stage"
        style={{
          position: 'relative',
          aspectRatio: '16 / 10',
          background: `radial-gradient(80% 60% at 50% 0%, ${p.accentBg} 0%, transparent 60%), linear-gradient(180deg, #15151a 0%, #0d0d10 100%)`,
          padding: '28px 28px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* corner accent glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${p.accentBg}, transparent 70%)`,
            filter: 'blur(20px)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Mockup />
        </div>
      </div>

      <div
        className="project-body"
        style={{
          padding: '24px 28px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          color: '#fff',
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: p.accent,
          }}
        >
          {p.eyebrow}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            margin: 0,
            color: '#fff',
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 15,
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.62)',
            margin: 0,
          }}
        >
          {p.tagline}
        </p>

        <div
          style={{
            marginTop: 4,
            paddingTop: 14,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'baseline',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            {p.metric}
          </span>
        </div>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '6px 0 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
          }}
        >
          {p.chips.map((c) => (
            <li
              key={c}
              style={{
                fontSize: 11,
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.72)',
                letterSpacing: '-0.005em',
              }}
            >
              {c}
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 8,
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: p.accent,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              View live →
            </a>
          ) : (
            <span
              style={{
                fontSize: 12,
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              Coming soon
            </span>
          )}
          <span
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '-0.01em',
            }}
          >
            {p.surface}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   Section
   ===================================================== */

export function Portfolio() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.portfolio-head > *'), {
      y: 22,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });

    gsap.from(scope.querySelectorAll('.project-card'), {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope.querySelector('.project-grid'),
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      ref={ref}
      id="work"
      className="tile"
      style={{
        background:
          'radial-gradient(80% 50% at 50% 0%, rgba(41,151,255,0.06) 0%, transparent 60%), var(--color-surface-black)',
        color: '#fff',
      }}
    >
      <div className="wrap">
        <div
          className="portfolio-head section-head"
          style={{ marginBottom: 56, maxWidth: 760 }}
        >
          <div className="eyebrow eyebrow-on-dark">Selected work</div>
          <h2 className="display-section" style={{ color: '#fff' }}>
            50+ clients. <br />
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>One studio, shipping.</span>
          </h2>
          <p className="lead lead-on-dark" style={{ marginTop: 6, maxWidth: 640 }}>
            Fintech, real estate, news, jewellery, ERP, jobs — different problems, the same studio.
          </p>
        </div>

        <div
          className="project-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 28,
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div
          className="more-work-card"
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 28,
            flexWrap: 'wrap',
            background:
              'radial-gradient(80% 140% at 0% 0%, rgba(41,151,255,0.14) 0%, transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '30px 36px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, minWidth: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 56,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                backgroundImage: 'linear-gradient(135deg, #2997ff 0%, #7cc1ff 55%, #b794ff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                flexShrink: 0,
              }}
            >
              50+
            </span>
            <span aria-hidden="true" style={{ width: 1, height: 52, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 19,
                  letterSpacing: '-0.015em',
                  color: '#fff',
                  marginBottom: 4,
                }}
              >
                More projects shipped
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14.5,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '-0.01em',
                }}
              >
                Across fintech, real estate, healthcare, e-commerce &amp; more.
              </div>
            </div>
          </div>
          <a href="#contact" className="btn-pill press" style={{ fontWeight: 600, flexShrink: 0 }}>
            Start your project →
          </a>
        </div>
      </div>

    </section>
  );
}

export default Portfolio;
