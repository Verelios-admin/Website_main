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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.verelios.com'),
  title: {
    default: 'Verelios Labs — Custom Website & App Development Company in India | Launch in 3 Weeks',
    template: '%s | Verelios Labs — Web & App Development India',
  },
  description: 'Get a custom website, mobile app or software built & launched in under 3 weeks. Free mockup in 48 hours, no upfront payment. Trusted by 10+ businesses across India. React, Next.js & React Native experts. Get your free quote today.',
  keywords: [
    'website development company India',
    'custom web development',
    'mobile app development India',
    'React Next.js developer',
    'affordable website design India',
    'ecommerce website development',
    'startup app development',
    'business website design',
    'web development agency India',
    'custom software development India',
    'Verelios Labs',
    'website developer near me',
    'hire web developer India',
    'best web development company India',
    'React Native app development',
    'Next.js development agency',
    'website design and development services',
    'full stack developer India',
    'conversion optimized website',
    'fast website development',
    'mobile app development company',
    'UI UX design services India',
    'website redesign services',
    'progressive web app development',
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
    title: 'Verelios Labs — Websites & Apps That Grow Your Business | Free Mockup in 48hrs',
    description: 'Custom websites, mobile apps & software — idea to launch in under 3 weeks. Free mockup, no upfront payment. Built with React, Next.js & React Native by India\'s fastest dev team.',
    url: 'https://www.verelios.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Verelios Labs — Custom Website & App Development Company in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verelios Labs — Websites & Apps Built to Convert | Launch in 3 Weeks',
    description: 'Custom websites & apps from idea to launch in under 3 weeks. Free mockup in 48 hours. No upfront payment. 100% satisfaction guaranteed.',
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
  description: 'Custom website, mobile app & software development company in India. From idea to launch in under 3 weeks. Free mockup in 48 hours.',
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
  knowsAbout: [
    'React', 'Next.js', 'React Native', 'Node.js', 'TypeScript',
    'Tailwind CSS', 'Flutter', 'Firebase', 'MongoDB', 'PostgreSQL',
  ],
  slogan: 'From idea to launch in under 3 weeks',
  serviceType: [
    'Website Development',
    'Mobile App Development',
    'Custom Software Development',
    'UI/UX Design',
    'E-commerce Development',
    'Progressive Web App Development',
    'Performance Optimization',
    'Website Maintenance',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '10',
    bestRating: '5',
    worstRating: '1',
  },
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
  description: 'India\'s fastest web & app development company. Custom websites, mobile apps & software — from idea to launch in under 3 weeks. Free mockup in 48 hours, milestone-based payment.',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web & App Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Website Development',
          description: 'Custom responsive websites built with React & Next.js to convert visitors into customers. SEO optimized, mobile-first design.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Cross-platform mobile apps for iOS and Android using React Native & Flutter. From concept to App Store in weeks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Tailored software solutions including ERP, CRM, APIs, and automation tools. Full-stack Node.js & TypeScript.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'User research, wireframing, prototyping, and design systems. Conversion-focused interfaces that delight users.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Custom e-commerce websites and apps with secure payment integration, inventory management, and analytics.',
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
        {/* Google Analytics 4 — lazyOnload to avoid blocking TBT */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96F7T65XWE"
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
              gtag('config', 'G-96F7T65XWE', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
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
      <body className={inter.className}>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
