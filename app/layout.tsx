import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { MetaPixel } from '@/components/MetaPixel';
import { TopContactBar } from '@/components/TopContactBar';
import { CallClickTracker } from '@/components/CallClickTracker';
import { JsonLdDedupe } from '@/components/JsonLdDedupe';

const inter = Inter({
  subsets: ['latin'],
  // 'optional' means: try to load Inter, but if it doesn't arrive in ~100ms,
  // stick with the fallback for the rest of the session. This avoids the
  // late font-swap reflow that drives CLS on slow networks. Real users on
  // fast connections still see Inter; Lighthouse mobile (slow 4G) sees the
  // metric-adjusted system-ui fallback with no swap shift.
  display: 'optional',
  // preload:false on purpose. Preloading Inter made it arrive inside the font
  // block window on slow 4G, so it would swap in AFTER first paint and re-wrap
  // the large hero headline — a ~71px post-paint shift that was ~96% of the
  // page's CLS. With no preload + display:optional, slow connections keep the
  // metric-adjusted fallback (no swap, no shift); Apple users see SF Pro (first
  // in the stack) and fast/cached visitors still get Inter. No LCP cost — with
  // 'optional' the text never blocks on the font regardless.
  preload: false,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

const SITE_URL = 'https://www.verelios.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Website, App & Software Developers in Kanpur | Verelios Labs',
    template: '%s | Verelios Labs',
  },
  // ~150 chars so Google shows it in full (was 192, which truncated the CTA).
  description:
    'Website, app & software developers in Govind Nagar, Kanpur — serving all of India. Custom sites, apps & software launched in 3 weeks. Free 48-hour mockup.',
  authors: [{ name: 'Verelios Labs', url: SITE_URL }],
  creator: 'Verelios Labs',
  publisher: 'Verelios Labs',
  applicationName: 'Verelios Labs',
  category: 'Website & app development agency',
  // favicon.svg is a genuine 577-byte vector mark. It used to be a 512x512 PNG
  // with an .svg extension (77KB) fetched at High priority on every page load,
  // which competed with real above-the-fold content for bandwidth. The raster
  // entries below are correctly sized for their purpose rather than pointing a
  // 512px master at a 32px slot.
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  // NOTE: no site-wide `alternates.canonical` here on purpose. A layout-level
  // canonical is inherited by every page and was forcing all subpages to point
  // at the homepage. Each page now declares its OWN canonical via its metadata
  // (and the homepage declares its own in app/page.tsx).
  openGraph: {
    // Aligned with the <title> so search and social show a consistent name.
    title: 'Website, App & Software Developers in Kanpur | Verelios Labs',
    description:
      'Custom websites, mobile apps & software — idea to launch in under 3 weeks. Free 48-hour mockup. No upfront payment. Built with React, Next.js & React Native.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Verelios Labs — Website & App Development Agency in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development Agency India | Verelios Labs',
    description:
      'Custom websites & apps shipped in under 3 weeks. Free mockup in 48 hours. No upfront payment. 100% satisfaction guaranteed.',
    images: ['/logo.webp'],
    creator: '@verelioslabs',
    site: '@verelioslabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Set once you verify the site in each tool.
    // google: 'add-your-google-site-verification-token-here',
    // other: { 'msvalidate.01': 'add-your-bing-token-here' },
  },
  // Relocated out of a manual <head> element (which was causing React to
  // re-inject <head> children on hydration). Next emits these <meta> tags for us.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
  other: {
    'geo.region':    'IN-UP',
    'geo.placename': 'Kanpur, Uttar Pradesh',
    'geo.position':  '26.447437;80.306051',
    'ICBM':          '26.447437, 80.306051',
    'apple-mobile-web-app-capable':        'yes',
    'mobile-web-app-capable':              'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

// ============================================================
// Site-wide Structured Data (JSON-LD).
// Only the entity-level schema that is true on EVERY page lives here:
// Organization and WebSite. Page-specific schema (LocalBusiness reviews,
// HowTo, FAQPage, homepage BreadcrumbList) lives on the homepage so it
// only appears on the page whose content it describes.
// ============================================================

// Google Business Profile — included in Organization sameAs so Google ties this
// website entity to the verified GBP listing (strongest entity/local signal).
const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/verelios-4a1483387/',
  'https://www.facebook.com/profile.php?id=61585021269687',
  'https://www.instagram.com/verelioslabs/',
];

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id':   `${SITE_URL}/#organization`,
  name: 'Verelios Labs',
  url: SITE_URL,
  logo: {
    // Must match the real dimensions of public/logo.webp, which is 1200x630.
    // It previously declared 512x512, describing a square file that never existed.
    '@type': 'ImageObject',
    url:    `${SITE_URL}/logo.webp`,
    width:  '1200',
    height: '630',
  },
  image: `${SITE_URL}/logo.webp`,
  description:
    'Software agency in Govind Nagar, Kanpur — custom websites, mobile apps and software from idea to launch in under 3 weeks. Free 48-hour mockup, milestone-based payment, no upfront cost.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8299522798',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-8471094125',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  email: 'contact@verelios.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '126/58 G Block, Govind Nagar',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208006',
    addressCountry: 'IN',
  },
  sameAs: [...SOCIAL_LINKS, GBP_URL],
  foundingDate: '2024',
  areaServed: { '@type': 'Country', name: 'India' },
  knowsAbout: [
    'React', 'Next.js', 'React Native', 'Node.js', 'TypeScript',
    'Tailwind CSS', 'Flutter', 'Firebase', 'MongoDB', 'PostgreSQL',
  ],
  slogan: 'From idea to launch in under 3 weeks',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Verelios Labs',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
  // NOTE: SearchAction (Sitelinks Search Box) removed — the site has no on-page
  // search that consumes ?q=, so declaring it was inaccurate. Re-add only if a
  // real site search is built.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      {/* No manual <head> element. In the App Router a hand-written <head> in
          the layout made React re-inject its children (JSON-LD, scripts) during
          hydration, so the rendered page ended up with TWO of each JSON-LD block
          — two aggregateRatings on /locations/kanpur, which is what tripped the
          GSC "Review has multiple aggregate ratings" error. <meta>/<title>/etc.
          now come from the Metadata API; the scripts below render in <body>,
          which Next hydrates cleanly. */}
      <body className={inter.className}>
        {/* Google Tag Manager (noscript). Must be the first thing inside <body>.
            Only fires for visitors with JavaScript disabled; harmless otherwise. */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQ48CLVM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Safety net: strips any exact-duplicate JSON-LD the client might still
            add on hydration, so Google's renderer only ever sees one of each.
            See components/JsonLdDedupe.tsx. */}
        <JsonLdDedupe />

        {/* Pre-resolve DNS for the deferred analytics/pixel origins. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Site-wide structured data (Organization + WebSite). Google reads
            JSON-LD from the <body> just as well as the <head>. Page-specific
            schema (LocalBusiness + reviews, FAQ, breadcrumbs) lives on each
            page, per Google's guidelines. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Google Tag Manager — container GTM-KQ48CLVM.
            Added to run the Leadfeeder / Dealfront company-identification tag,
            which resolves a visitor's IP to a COMPANY (not a person) and is why
            this container exists at all.

            ⚠️  DO NOT add GA4 (G-96F7T65XWE) or Google Ads (AW-18037984640) tags
            inside this container. Both already load directly below, so adding
            them in GTM as well double-counts every pageview and every lead
            conversion — which quietly corrupts the Ads conversion data the
            bidding relies on. GTM is here for third-party tags only; anything
            Google-owned stays hardcoded where it is.

            `afterInteractive` rather than the `lazyOnload` used below: a visit
            has to be recorded before the visitor leaves, and lazyOnload waits
            for window.load. If PageSpeed mobile drops noticeably, this is the
            first thing to move back to lazyOnload. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQ48CLVM');`}
        </Script>

        {/* Google Analytics 4 + Google Ads conversion tracking.
            lazyOnload defers these past the LCP/TBT measurement window. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18037984640"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18037984640', { 'allow_enhanced_conversions': true });
              gtag('config', 'G-96F7T65XWE', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <MetaPixel />
        <CallClickTracker />
        <TopContactBar />
        {children}
      </body>
    </html>
  );
}
