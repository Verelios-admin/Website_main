import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { MetaPixel } from '@/components/MetaPixel';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
  // Expose as a CSS variable so the design tokens in globals.css can
  // reference the locally-self-hosted Inter (no render-blocking CDN font).
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
// Structured Data (JSON-LD) — feeds rich results in Google Search.
// Keep these in sync with the on-page content.
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

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id':   `${SITE_URL}/#localbusiness`,
  name: 'Verelios Labs',
  alternateName: ['Verelios', 'Verelios Web & App Studio'],
  url: SITE_URL,
  telephone: '+91-8471094125',
  email: 'contact@verelios.com',
  priceRange: '₹14,999 – ₹3,00,000+',
  image: `${SITE_URL}/logo.webp`,
  logo:  `${SITE_URL}/logo.webp`,
  description:
    'India\'s fastest website & app development agency. Custom websites, mobile apps & software — from idea to launch in under 3 weeks. Free 48-hour mockup, milestone-based payment.',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City',    name: 'Pune' },
    { '@type': 'City',    name: 'Mumbai' },
    { '@type': 'City',    name: 'Delhi' },
    { '@type': 'City',    name: 'Bangalore' },
    { '@type': 'City',    name: 'Hyderabad' },
  ],
  serviceArea: { '@type': 'Country', name: 'India' },
  sameAs: SOCIAL_LINKS,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '10',
    bestRating:  '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rajesh M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Delivered our website in just 2.5 weeks and we saw double the inquiries within the first month. Did not expect this level of quality at this price point.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya S.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'They built our website and a mobile app at the same time. Conversions jumped 40% after launch. Very professional team.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Amit Patel' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'The news application handles thousands of daily readers without performance issues. Best tech team we have worked with.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Neha Gupta' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Delivered my e-commerce store in 18 days. Free mockup in 48 hours convinced me. Online sales have tripled since launch.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Vikram Singh' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Built our patient booking system and clinic management app. Milestone-based payment made it risk-free. WhatsApp support is incredibly responsive.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ananya Krishnan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Site loads in under 2 seconds and bounce rate dropped by 60%. Free SEO setup helped us rank on the first page for our key terms.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web & App Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '14999',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Website Development',
          description:
            'Custom responsive websites built with React & Next.js to convert visitors into customers. SEO-optimised, mobile-first design.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
        },
      },
      {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '49999',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description:
            'Cross-platform mobile apps for iOS and Android using React Native & Flutter. From concept to App Store in weeks.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
        },
      },
      {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '99999',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description:
            'Tailored software solutions including ERP, CRM, APIs and automation tools. Full-stack Node.js & TypeScript.',
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: { '@type': 'Country', name: 'India' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description:
            'User research, wireframing, prototyping and design systems. Conversion-focused interfaces that delight users.',
          provider: { '@id': `${SITE_URL}/#organization` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description:
            'Custom e-commerce websites and apps with secure payments, inventory management and analytics.',
          provider: { '@id': `${SITE_URL}/#organization` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Optimization & SEO',
          description:
            'Speed audits, refactors, on-page SEO setup, structured data and analytics. Built to rank on Google.',
          provider: { '@id': `${SITE_URL}/#organization` },
        },
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Work',     item: `${SITE_URL}/#work` },
    { '@type': 'ListItem', position: 4, name: 'Process',  item: `${SITE_URL}/#process` },
    { '@type': 'ListItem', position: 5, name: 'Pricing',  item: `${SITE_URL}/#pricing` },
    { '@type': 'ListItem', position: 6, name: 'FAQ',      item: `${SITE_URL}/#faq` },
    { '@type': 'ListItem', position: 7, name: 'Contact',  item: `${SITE_URL}/#contact` },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Verelios Labs builds your website or app in 3 weeks',
  description:
    'A four-step process from first message to live launch — consultation, free 48-hour mockup, build with daily WhatsApp updates, and launch + 7-day support.',
  totalTime: 'P21D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Free consultation',
      text: 'Tell us about your project on WhatsApp or a quick call. We understand your goals, audience and timeline — no commitment needed.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Free mockup in 48 hours',
      text: 'We design a visual mockup or prototype within 48 hours. You review, give feedback and approve before we write a single line of code.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Development with daily updates',
      text: 'We build with daily WhatsApp updates. Progress in real time, change requests at any milestone.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Launch + 7 days of free support',
      text: 'We deploy live, handle all the technical setup, and stick around for seven days of free post-launch support.',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a website or app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects go from kickoff to launch in under 3 weeks. Simple websites can be done in 7–10 days, while complex apps with custom backends may take 4–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your pricing model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on a milestone-based payment model — 30% to start, 30% at mid-delivery, and 40% at launch. No hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build mobile apps for both iOS and Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build cross-platform apps using React Native and Flutter, so your app works on both iOS and Android from a single codebase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see a mockup before committing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We provide a free mockup or prototype within 48 hours of our first conversation. No payment or commitment required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after my project launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project comes with 7 days of free post-launch support for bug fixes and tweaks. After that, we offer affordable monthly maintenance plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with SEO and getting found on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project includes free basic SEO setup — proper meta tags, sitemap, performance optimisation and structured data. Advanced SEO is available as an add-on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React, Next.js, React Native, Flutter, Node.js, MongoDB, PostgreSQL, Firebase, and AWS/Vercel for hosting. We choose the best stack for your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we communicate during the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get a dedicated project manager on WhatsApp for instant communication. Daily/weekly progress updates and real-time feedback.',
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
