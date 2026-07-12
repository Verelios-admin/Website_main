import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';

// Below-the-fold sections — server-rendered into the HTML (good for SEO),
// but their JavaScript chunks are split out and load after the hero, so
// the main thread is free during the FCP/LCP window on mobile.
const TrustedBy     = dynamic(() => import('@/components/sections/TrustedBy'));
const Services      = dynamic(() => import('@/components/sections/Services'));
const Industries    = dynamic(() => import('@/components/sections/Industries'));
const Portfolio     = dynamic(() => import('@/components/sections/Portfolio'));
const Process       = dynamic(() => import('@/components/sections/Process'));
const About         = dynamic(() => import('@/components/sections/About'));
const Studio        = dynamic(() => import('@/components/sections/Studio'));
const Pricing       = dynamic(() => import('@/components/sections/Pricing'));
const Testimonials  = dynamic(() => import('@/components/sections/Testimonials'));
const FAQ           = dynamic(() => import('@/components/sections/FAQ'));
const Contact       = dynamic(() => import('@/components/sections/Contact'));
const Footer        = dynamic(() => import('@/components/sections/Footer'));

// Client-only UI — loaded after paint, no SSR needed.
const Toaster        = dynamic(() => import('@/components/ui/toaster'), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false });
const StickyCTA      = dynamic(() => import('@/components/StickyCTA'), { ssr: false });
// Removed: ScrollProgress, CursorGlow — both read as "generic AI portfolio
// template" tricks. Real-business sites don't have them.

// ============================================================
// Homepage-specific structured data (JSON-LD).
// These describe content that lives on the homepage — the business with
// its reviews/ratings, the 3-week process (HowTo), the FAQ section, and
// the homepage section breadcrumb. Site-wide Organization + WebSite schema
// lives in app/layout.tsx.
// ============================================================
const SITE_URL = 'https://www.verelios.com';

// The homepage declares its OWN canonical (with trailing slash, matching the
// sitemap). This replaces the old layout-level canonical that used to be
// stamped onto every page. Title/description are inherited from app/layout.tsx.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
};

const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/verelios-4a1483387/',
  'https://www.facebook.com/profile.php?id=61585021269687',
  'https://www.instagram.com/verelioslabs/',
];

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id':   `${SITE_URL}/#localbusiness`,
  name: 'Verelios Labs',
  alternateName: ['Verelios', 'Verelios Web & App Studio'],
  url: SITE_URL,
  telephone: '+91-8299522798',
  email: 'contact@verelios.com',
  priceRange: '₹49,999 – ₹3,00,000+',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '126/58 G Block, Govind Nagar',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208006',
    addressCountry: 'IN',
  },
  geo: {
    // Govind Nagar, Kanpur. Replace with the exact lat/long of your Google
    // Business Profile map pin if you want pinpoint accuracy.
    '@type': 'GeoCoordinates',
    latitude: '26.4382',
    longitude: '80.3010',
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Verelios+Labs+Govind+Nagar+Kanpur',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  image: `${SITE_URL}/logo.webp`,
  logo:  `${SITE_URL}/logo.webp`,
  description:
    'India\'s fastest website & app development agency. Custom websites, mobile apps & software — from idea to launch in under 3 weeks. Free 48-hour mockup, milestone-based payment.',
  areaServed: [
    // Home base — Kanpur + Uttar Pradesh.
    { '@type': 'City',    name: 'Kanpur' },
    { '@type': 'City',    name: 'Lucknow' },
    { '@type': 'State',   name: 'Uttar Pradesh' },
    // Bangalore — served on-site too — plus clients across the rest of India.
    { '@type': 'City',    name: 'Bangalore' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'City',    name: 'Pune' },
    { '@type': 'City',    name: 'Mumbai' },
    { '@type': 'City',    name: 'Delhi' },
    { '@type': 'City',    name: 'Hyderabad' },
  ],
  serviceArea: { '@type': 'Country', name: 'India' },
  sameAs: SOCIAL_LINKS,
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '42',
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
        price: '49999',
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
        price: '99999',
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
    {
      '@type': 'Question',
      name: 'Where in Kanpur is Verelios Labs located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based at 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006. We are open 24 hours, every day, and you are welcome to meet us in person or talk over WhatsApp before starting a project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with local businesses in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As website, app and custom software developers based in Govind Nagar, we work with local businesses right across Kanpur — shops, clinics, schools, real-estate firms and startups — as well as founders across India. Local clients can meet us face to face; everyone gets the same free 48-hour mockup and milestone-based payment.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="home">
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
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <Portfolio />
      <Process />
      <About />
      <Studio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
      <Toaster />
    </main>
  );
}
