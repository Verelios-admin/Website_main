import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { MetaPixel } from '@/components/MetaPixel';
import { TopContactBar } from '@/components/TopContactBar';

const inter = Inter({
  subsets: ['latin'],
  // 'optional' means: try to load Inter, but if it doesn't arrive in ~100ms,
  // stick with the fallback for the rest of the session. This avoids the
  // late font-swap reflow that drives CLS on slow networks. Real users on
  // fast connections still see Inter; Lighthouse mobile (slow 4G) sees the
  // metric-adjusted system-ui fallback with no swap shift.
  display: 'optional',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

const SITE_URL = 'https://www.verelios.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Website & App Development Agency India | Verelios Labs',
    template: '%s | Verelios Labs — Website & App Development India',
  },
  description:
    'India\'s fastest website & app development agency. Custom sites, mobile apps & software launched in 3 weeks. Free 48-hour mockup. No upfront payment.',
  keywords: [
    // Primary intent
    'website development agency India',
    'app development agency India',
    'website and app development company',
    'best website development company India',
    'best app development company India',
    'top web development agency India',
    'top mobile app development company India',
    // Tech-stack intent
    'React development agency India',
    'Next.js development agency',
    'React Native app development India',
    'Flutter app development India',
    'Node.js development company India',
    'TypeScript developer India',
    // Outcome / commercial intent
    'hire web developer India',
    'hire app developer India',
    'custom website design India',
    'ecommerce website development India',
    'startup app development company',
    'website redesign services India',
    'conversion-optimized website',
    'SEO website development',
    // Local intent
    'website development company Pune',
    'website development company Mumbai',
    'website development company Delhi',
    'website development company Bangalore',
    'website development company Hyderabad',
    // Brand
    'Verelios',
    'Verelios Labs',
  ],
  authors: [{ name: 'Verelios Labs', url: SITE_URL }],
  creator: 'Verelios Labs',
  publisher: 'Verelios Labs',
  applicationName: 'Verelios Labs',
  category: 'Website & app development agency',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'en':    SITE_URL,
    },
  },
  openGraph: {
    title: 'Website & App Development Agency India | Verelios Labs',
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
  other: {
    'geo.region':    'IN',
    'geo.placename': 'India',
    'geo.position':  '20.5937;78.9629',
    'ICBM':          '20.5937, 78.9629',
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
    '@type': 'ImageObject',
    url:    `${SITE_URL}/logo.webp`,
    width:  '512',
    height: '512',
  },
  image: `${SITE_URL}/logo.webp`,
  description:
    'India\'s fastest website & app development agency — custom websites, mobile apps & software launched in 3 weeks. Free 48-hour mockup. No upfront payment.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-8471094125',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-8299522798',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  email: 'contact@verelios.com',
  sameAs: SOCIAL_LINKS,
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
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0c" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Google Analytics 4 + Google Ads conversion tracking.
            lazyOnload defers these past the LCP/TBT measurement window.
            The Contact form's gtag call has its own retry-until-loaded
            guard so conversion tracking still fires when the user submits. */}
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
              gtag('config', 'AW-18037984640');
              gtag('config', 'G-96F7T65XWE', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* JSON-LD must be in the initial HTML so search-engine crawlers
            (which don't always execute JS) pick it up — use plain <script>
            tags, not next/script with afterInteractive. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Page-specific schema (LocalBusiness + reviews, HowTo, FAQPage,
            homepage BreadcrumbList) lives on the homepage (app/page.tsx),
            not here — it should only appear on the page whose content it
            describes, per Google's structured-data guidelines. */}
      </head>
      <body className={inter.className}>
        <a href="#home" className="skip-to-content">Skip to main content</a>
        <MetaPixel />
        <TopContactBar />
        {children}
      </body>
    </html>
  );
}
