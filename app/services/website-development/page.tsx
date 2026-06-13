import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { RelatedServices } from '@/components/sub-page/RelatedServices';

const URL_PATH = '/services/website-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Custom Website Development Company in India',
  description:
    'India\'s fastest custom website development company. React + Next.js websites built to convert, shipped in under 3 weeks. Free 48-hour mockup. No upfront payment.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'custom website development company',
    'custom website development company India',
    'website development services India',
    'React website development',
    'Next.js website development',
    'business website development India',
    'website development Pune',
    'website development Mumbai',
    'website development Bangalore',
    'website development Delhi',
    'website redesign services India',
    'conversion-optimized website',
    'fast website development',
    'website developer near me',
  ],
  openGraph: {
    title: 'Custom Website Development Company in India | Verelios Labs',
    description:
      'Custom React + Next.js websites built to convert, shipped in under 3 weeks. Free 48-hour mockup. No upfront payment.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Custom Website Development' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Custom Website Development',
  name: 'Custom Website Development',
  description:
    'Custom responsive websites built with React, Next.js and TypeScript for Indian businesses. SEO-optimised, mobile-first, conversion-focused. From idea to launch in under 3 weeks.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Verelios Labs',
    url: SITE,
    telephone: '+91-8471094125',
    email: 'contact@verelios.com',
    areaServed: { '@type': 'Country', name: 'India' },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '49999',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '49999' },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Custom Website Development', item: `${SITE}${URL_PATH}` },
  ],
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Website development · India"
          title="Custom website development"
          highlight="in three weeks."
          lead="Verelios Labs is a Pune-based custom website development company building React and Next.js sites for founders across India. Free 48-hour mockup, milestone-based payment, launched in under three weeks."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: 'Website Development', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What we build</h2>
              <p>
                We build custom websites for Indian businesses that need to move faster than a typical agency timeline allows. Every site is hand-coded in <strong>React + Next.js + TypeScript</strong>, server-rendered for SEO, optimised for Core Web Vitals, and shipped with a working contact form, analytics, and Google Search Console set up on day one.
              </p>
              <p>
                Typical projects we deliver in this stack:
              </p>
              <ul>
                <li><strong>Business websites</strong> — homepage, services, portfolio, contact, optimised for converting visitors into leads.</li>
                <li><strong>E-commerce stores</strong> — Razorpay / Stripe integration, cart, checkout, order management, inventory.</li>
                <li><strong>Real-estate &amp; property platforms</strong> — listings, search, virtual tours, map integration, inquiry forms.</li>
                <li><strong>SaaS marketing sites</strong> — landing pages, pricing, signup flows, integrated with your product&apos;s analytics.</li>
                <li><strong>Editorial / news sites</strong> — CMS-driven, real-time, optimised for ads and reader engagement.</li>
                <li><strong>Website redesigns</strong> — keep your URLs and content, ship a faster, better-converting version of what you have.</li>
              </ul>

              <h2>Why founders pick Verelios over a typical agency</h2>
              <h3>Speed without cutting corners</h3>
              <p>
                Most websites we build go from first message to live in <strong>7–21 days</strong>. We get there by using a tight stack we know cold (Next.js, Tailwind, Vercel), running tight feedback loops on WhatsApp, and refusing to scope-creep features that don&apos;t move conversion.
              </p>
              <h3>Built to rank on Google</h3>
              <p>
                Every site we ship includes <strong>on-page SEO setup</strong> by default: semantic HTML, optimised titles and meta descriptions, OpenGraph + Twitter cards, schema markup (Organization, LocalBusiness, FAQ, BreadcrumbList), XML sitemap, robots.txt, Google Search Console verification, and a 90+ PageSpeed Insights score on mobile.
              </p>
              <h3>Conversion-focused, not just pretty</h3>
              <p>
                We design around a single business goal — most often, get the visitor to fill out a contact form or start a WhatsApp chat. Every section earns its place on the page. Anything that doesn&apos;t move that needle gets cut.
              </p>
              <h3>You pay as the work lands</h3>
              <p>
                Our pricing model is <strong>30% to start, 30% at mid-delivery, 40% at launch</strong>. No upfront full payment, no surprise charges. If the project doesn&apos;t ship, you don&apos;t pay the rest.
              </p>

              <h2>How a website project runs end-to-end</h2>
              <ol>
                <li><strong>Day 1 — free consultation.</strong> A 15-minute call or WhatsApp chat where we understand your business, your audience, and what success looks like.</li>
                <li><strong>Day 2–3 — free mockup.</strong> We send you a designed homepage mockup within 48 hours, no commitment. You approve or request changes before any code is written.</li>
                <li><strong>Day 4–14 — build &amp; daily WhatsApp updates.</strong> We code the site in our staging environment with a public preview link, posting screenshots / videos of progress every day.</li>
                <li><strong>Day 15–18 — content + integrations.</strong> We populate your real copy, images, integrate forms (Make / Zapier), payments (Razorpay / Stripe), email (Resend / SES), analytics (GA4 + Search Console).</li>
                <li><strong>Day 19–21 — launch.</strong> We deploy to your domain on Vercel, verify everything, submit your sitemap to Google, and hand over admin access.</li>
                <li><strong>7 days after launch — free post-launch support.</strong> Bug fixes, copy tweaks, last-mile changes — included.</li>
              </ol>

              <h2>Pricing for custom website development in India</h2>
              <p>
                Our base business-website tier starts at <strong>₹49,999</strong> and covers up to 5 pages (Home, About, Services, Contact, plus one more), mobile-responsive design, contact form with WhatsApp integration, SEO setup, free domain &amp; hosting setup assistance, and 7 days of post-launch support.
              </p>
              <p>
                More complex projects — e-commerce, real estate, custom CMS, integrations — range from <strong>₹1,00,000 to ₹3,00,000+</strong> depending on scope. We share a fixed quote with a timeline before any work begins.
              </p>
              <div className="callout">
                <p>
                  <strong>Get a fixed quote in 48 hours.</strong> Send us a 2-line message — what you want to build, who it&apos;s for — and we&apos;ll come back with a written quote, a sample mockup, and a delivery date.
                </p>
              </div>

              <h2>Tech stack we use</h2>
              <p>
                We pick tools that ship fast and stay fast:
              </p>
              <ul>
                <li><strong>Frontend:</strong> React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP.</li>
                <li><strong>Backend:</strong> Node.js, TypeScript, REST and tRPC APIs.</li>
                <li><strong>Databases:</strong> PostgreSQL, MongoDB, Supabase, Firebase Firestore.</li>
                <li><strong>Auth:</strong> Supabase Auth, Firebase Auth, NextAuth, Clerk.</li>
                <li><strong>Payments:</strong> Razorpay, Stripe, Cashfree.</li>
                <li><strong>Hosting:</strong> Vercel, AWS, Cloudflare Pages.</li>
              </ul>

              <h2>Cities we serve</h2>
              <p>
                We work remotely with founders across <strong>Pune, Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Patna, Indore</strong> and the rest of India. Communication is on WhatsApp + weekly Google Meet so location doesn&apos;t matter — we&apos;ve shipped projects without ever meeting the client in person.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom website development cost in India?</h3>
              <p>
                A simple business website with 5 pages starts at <strong>₹49,999</strong>. A more involved site (custom CMS, multilingual, complex search, payments) typically lands between <strong>₹1,00,000 and ₹3,00,000</strong>. We quote each project after a 15-minute scoping call.
              </p>
              <h3>How long does it take to build a custom website?</h3>
              <p>
                Most projects ship in <strong>7–21 days</strong>. A static 5-page site can be done in a week; a custom e-commerce or real-estate platform might take 4–6 weeks.
              </p>
              <h3>Do you handle hosting and domain?</h3>
              <p>
                Yes — we handle domain registration assistance (GoDaddy, Namecheap, Hostinger), DNS setup, and hosting on Vercel (or AWS / Cloudflare if you prefer). Hosting is typically free for small sites on Vercel&apos;s hobby tier.
              </p>
              <h3>Do you offer maintenance after launch?</h3>
              <p>
                The first <strong>7 days post-launch are free</strong>. After that, we offer monthly maintenance plans starting at ₹3,000/month covering bug fixes, content updates, security patches, and performance monitoring.
              </p>
            </Prose>
          </div>
        </section>

        <RelatedServices exclude="website-development" />

        <ClosingCta
          heading="Ready to ship your website?"
          body="Tell us in two lines what you want to build. We'll send you a free 48-hour mockup and a fixed quote — no commitment, no upfront payment."
        />
      </SubPageLayout>
    </>
  );
}
