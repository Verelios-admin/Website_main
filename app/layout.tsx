import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.verelios.com'),
  title: {
    default: 'Verelios Labs | Custom Website & App Development Company in India',
    template: '%s | Verelios Labs',
  },
  description: 'We build custom websites, mobile apps & software that grow your business. From idea to launch in under 3 weeks. Trusted by 10+ clients across India. Get a free mockup today.',
  keywords: [
    'website development company India',
    'custom web development',
    'mobile app development India',
    'React Next.js developer',
    'affordable website design India',
    'ecommerce website development',
    'startup app development',
    'business website design',
    'web development agency',
    'custom software development India',
    'Verelios Labs',
    'website developer near me',
  ],
  authors: [{ name: 'Verelios Labs', url: 'https://www.verelios.com' }],
  creator: 'Verelios Labs',
  publisher: 'Verelios Labs',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://www.verelios.com',
  },
  openGraph: {
    title: 'Verelios Labs | Custom Website & App Development in India',
    description: 'We build websites & apps that grow your business. From idea to launch in under 3 weeks. Get a free mockup today.',
    url: 'https://www.verelios.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Verelios Labs - Web & App Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verelios Labs | Custom Website & App Development in India',
    description: 'We build websites & apps that grow your business. From idea to launch in under 3 weeks.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Verelios Labs',
  url: 'https://www.verelios.com',
  logo: 'https://www.verelios.com/logo.webp',
  description: 'Custom website, mobile app & software development company in India. From idea to launch in under 3 weeks.',
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
  sameAs: [],
  foundingDate: '2024',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'Website Development',
    'Mobile App Development',
    'Custom Software Development',
    'UI/UX Design',
    'E-commerce Development',
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Verelios Labs',
  url: 'https://www.verelios.com',
  telephone: '+91-8471094125',
  email: 'contact@verelios.com',
  priceRange: '$$',
  image: 'https://www.verelios.com/logo.webp',
  description: 'Custom website and mobile app development company. We build fast, conversion-optimized websites and apps for businesses across India.',
  areaServed: 'India',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web & App Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Website Development',
          description: 'Custom responsive websites built to convert visitors into customers',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile apps for iOS and Android',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Tailored software solutions including ERP, CRM, and automation tools',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does it take to build a website or app?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most projects go from kickoff to launch in under 3 weeks. Simple websites can be done in 7–10 days, while complex apps with custom backends may take 4–6 weeks.' },
              },
              {
                '@type': 'Question',
                name: 'What is your pricing model?',
                acceptedAnswer: { '@type': 'Answer', text: 'We work on a milestone-based payment model — 30% to start, 30% at mid-delivery, and 40% at launch. No hidden charges.' },
              },
              {
                '@type': 'Question',
                name: 'Do you build mobile apps for both iOS and Android?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes! We build cross-platform apps using React Native and Flutter, so your app works on both iOS and Android from a single codebase.' },
              },
              {
                '@type': 'Question',
                name: 'Can I see a mockup before committing?',
                acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We provide a free mockup or prototype within 48 hours of our first conversation. No payment or commitment required.' },
              },
              {
                '@type': 'Question',
                name: 'What happens after my project launches?',
                acceptedAnswer: { '@type': 'Answer', text: 'Every project comes with 7 days of free post-launch support for bug fixes and tweaks. After that, we offer affordable monthly maintenance plans.' },
              },
            ],
          }) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
