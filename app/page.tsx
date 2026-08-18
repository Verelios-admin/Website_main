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

// Verelios Labs' Google Business Profile — added to sameAs so Google can tie
// this website entity to the verified GBP listing (strongest entity signal).
const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

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
  // Google accepts either a normalised number of currency signs OR a numerical
  // range. A repeated ₹ glyph is neither convention, so use the real range that
  // matches the visible pricing copy.
  priceRange: '₹49,999–₹5,00,000+',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '126/58 G Block, Govind Nagar',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208006',
    addressCountry: 'IN',
  },
  geo: {
    // Exact Google Business Profile pin (Govind Nagar, Kanpur).
    '@type': 'GeoCoordinates',
    latitude: '26.447437',
    longitude: '80.306051',
  },
  hasMap: 'https://share.google/fLuxTG3N5HVlEGhge',
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
    'Software agency in Govind Nagar, Kanpur serving clients across India — custom websites, mobile apps and software from idea to launch in under 3 weeks. Free 48-hour mockup, milestone-based payment.',
  // Opening date as recorded on the verified Google Business Profile. Keeping the
  // two in step matters: conflicting founding dates between the GBP and the site
  // weaken entity consolidation rather than strengthening it.
  foundingDate: '2025-01',
  // Mirrors the four categories on the verified Google Business Profile —
  // Software company (primary), Web Designer, Marketing agency and Internet
  // marketing service. Declaring them here means the entity Google builds from
  // the site agrees with the entity it builds from the GBP.
  additionalType: [
    'https://www.wikidata.org/wiki/Q1058914',  // software company
    'https://www.wikidata.org/wiki/Q1141149',  // web design
    'https://www.wikidata.org/wiki/Q5266500',  // digital marketing
  ],
  areaServed: [
    // Home base — Kanpur + Uttar Pradesh. Only Kanpur is a physical location; the
    // ONE office is 126/58 G Block, Govind Nagar. Everywhere else on this list is
    // served remotely, which is also how the GBP service area is set. Do not
    // reintroduce an on-site claim for any other city — the GBP description
    // previously implied a second Bangalore office and it was not accurate.
    { '@type': 'City',    name: 'Kanpur' },
    { '@type': 'City',    name: 'Lucknow' },
    { '@type': 'State',   name: 'Uttar Pradesh' },
    { '@type': 'State',   name: 'Maharashtra' },
    { '@type': 'City',    name: 'Bangalore' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'City',    name: 'Pune' },
    { '@type': 'City',    name: 'Mumbai' },
    { '@type': 'City',    name: 'Delhi' },
  ],
  serviceArea: { '@type': 'Country', name: 'India' },
  sameAs: [...SOCIAL_LINKS, GBP_URL],
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
  // NOTE: aggregateRating + review are deliberately ABSENT here, and must not be
  // re-added. Google's review-snippet policy forbids "self-serving" reviews — a
  // business marking up ratings of ITSELF on its OWN site is ineligible for the
  // star rich result no matter how genuine the underlying reviews are. Our 53
  // Google reviews are real, but authoring the JSON-LD about ourselves is the
  // separate violation, and repeating it across sibling URLs is the pattern the
  // spam guidelines describe as reviews-markup abuse (GSC already raised a
  // "Review has multiple aggregate ratings" error on this property once).
  // The visible star rating and testimonials stay on the page — they work as
  // social proof without the markup. If a rating rich result is ever wanted, the
  // only compliant route is a third-party platform's official embed.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web & App Development Services',
    itemListElement: [
      {
        // "From ₹49,999" is what the page shows, so declare a floor via
        // priceSpecification rather than a bare `price` (which asserts an exact
        // figure the business does not actually claim).
        '@type': 'Offer',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'INR',
          minPrice: '49999',
        },
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
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'INR',
          minPrice: '99999',
        },
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
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'INR',
          minPrice: '99999',
        },
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

// NOTE: The homepage BreadcrumbList (anchor-based: #services, #work, …) and the
// HowTo block were removed. Anchors aren't a real page hierarchy, so Google
// ignores/flags that breadcrumb; HowTo rich results were retired by Google in
// Sept 2023, so that markup earned nothing. The 4-step process stays as visible
// on-page content. Genuine URL-hierarchy breadcrumbs live on the sub-pages.

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
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
