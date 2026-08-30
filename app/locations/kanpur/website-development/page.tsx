import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, GBP_URL, SOCIAL_LINKS, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/website-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Website Development Company in Kanpur',
  description:
    'Verelios Labs — a website development company in Govind Nagar, Kanpur building fast, SEO-ready React & Next.js sites. From ₹49,999. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Website Development Company in Kanpur — Web Design & Development | Verelios Labs',
    description:
      'Fast, SEO-ready React & Next.js websites built in Govind Nagar, Kanpur. Free 48-hour mockup, milestone payments, meet us in person. From ₹49,999. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Website Development Company in Kanpur' }],
  },
};

const REVIEWS: LocalReview[] = [
  {
    author: 'Shrawan Garg',
    body: 'From domain setup to live launch, the entire process was smooth and well-communicated. Our website ranks well on Google too, thanks to the SEO-ready structure they built. Best website developers in Kanpur for small and medium businesses.',
  },
  {
    author: 'Sumit Prasad',
    body: 'A great experience working with Verelios Labs for website development. Highly professional, responsive, and they understand client requirements very well. They delivered a clean, modern and fully functional website.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) fragmented one real
// business into six schema entities and multiplied the same 53 reviews six-fold.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Website Development',
  name: 'Website Development Company in Kanpur',
  description:
    'Custom website design and development in Kanpur — fast, mobile-first, SEO-ready React and Next.js websites and e-commerce stores for Kanpur businesses. From ₹49,999. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: 49999 },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'Website Development', item: `${SITE}${URL_PATH}` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does website development cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional 5-page business website in Kanpur starts at ₹49,999. E-commerce stores, custom CMS sites and web applications typically range from ₹1,00,000 to ₹3,00,000+ depending on features. We give you a fixed quote and a free 48-hour mockup before you pay anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most business websites go live in 7–21 days. A simple site can be ready in a week; an e-commerce or custom platform takes 4–6 weeks. You get daily WhatsApp updates and a live preview link throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the website team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are a real website development company in Govind Nagar, Kanpur, not a remote freelancer. Visit our office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Civil Lines, Barra and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every website we build ships with on-page SEO by default — semantic HTML, optimised titles and meta, schema markup, XML sitemap, fast Core Web Vitals and Google Search Console setup. That is exactly how we rank our own site in Kanpur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website and its code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — you own the source code and it sits on your own hosting and domain accounts. No lock-in, no monthly ransom to keep your own site. Payments are milestone-based: 30% to start, 30% at mid-delivery, 40% at launch.',
      },
    },
  ],
};

const WEBSITE_SERVICES = [
  ['Business & corporate websites', 'Fast, credible sites for Kanpur businesses — home, about, services, portfolio and contact — built to turn visitors into enquiries and WhatsApp chats.'],
  ['E-commerce website development', 'Online stores with Razorpay/Stripe payments, cart, checkout, inventory and order management, so Kanpur retailers and traders can sell across India.'],
  ['Website redesign', 'Keep your URLs and content, ship a faster, better-looking, higher-converting version of your existing Kanpur website.'],
  ['Landing pages', 'Single-purpose pages for campaigns, ads and offers, engineered to convert traffic into leads.'],
  ['Custom web applications', 'Booking systems, dashboards, portals and internal tools tailored to how your Kanpur business actually runs.'],
  ['Real-estate & listing sites', 'Property listings, search, map integration and enquiry capture for Kanpur builders and brokers.'],
  ['CMS & blog websites', 'Content-driven sites you can update yourself, built for SEO and reader engagement.'],
  ['Website maintenance & hosting', 'Managed hosting with 99.9% uptime, backups, SSL and a human on WhatsApp — so your site stays fast and secure.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Kalyanpur',
  'Civil Lines', 'Arya Nagar', 'Panki', 'Barra', 'Naveen Market', 'Shastri Nagar', 'Ratan Lal Nagar',
];

export default function KanpurWebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Website development · Kanpur"
          title="A website development company in Kanpur"
          highlight="you can actually sit across from."
          lead="Verelios Labs is a website development company based in Govind Nagar, Kanpur — building fast, SEO-ready React and Next.js websites and e-commerce stores for local businesses. Free 48-hour mockup, milestone payments, and a team you can meet in person. From ₹49,999. Rated 5.0★."
          ctaLabel="Get a free 48-hour mockup"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'Website Development', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur website clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The website development company in Kanpur that builds it locally</h2>
              <p>
                Run a search for a &ldquo;website development company in Kanpur&rdquo; and most of what ranks is an agency that has never set foot in the city — a generic page with &ldquo;Kanpur&rdquo; find-and-replaced into it. <strong>Verelios Labs is a real website development company based in Govind Nagar, Kanpur.</strong> You can visit our office, sit across the table, and point at the exact section you want changed. For a Kanpur shop, factory, clinic, school or startup, meeting the people building your website in person is the difference between hoping it goes well and watching it go well.
              </p>
              <p>
                Local doesn&apos;t mean basic. We hand-code every site on a modern stack — <strong>React, Next.js and TypeScript</strong> — server-rendered for SEO, tuned for Core Web Vitals, and shipped with a working contact form, WhatsApp integration and analytics from day one. You own the code and it lives on your own hosting. Kanpur pricing, world-class engineering.
              </p>

              <h2>Why your Kanpur business needs a proper website</h2>
              <p>
                In 2026, your website is the first thing a customer in Kanpur checks before they call, visit or buy. A slow, dated or template site quietly sends them to a competitor. A fast, clear, trustworthy one does the opposite — it turns a Google search into a phone call or a WhatsApp message. For businesses across Kanpur — from traders in Naveen Market to manufacturers in Panki to clinics in Swaroop Nagar — a website that loads instantly and ranks on Google is now the cheapest, hardest-working salesperson you have.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real office in Govind Nagar, not a freelancer who disappears after launch.</li>
                <li><strong>Free 48-hour mockup</strong> — see your website designed before you pay a single rupee.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews, with work you can click through.</li>
                <li><strong>You own everything</strong> — source code, hosting and domain on your own accounts. No lock-in.</li>
                <li><strong>Open 24 hours, every day</strong>, with a real human on WhatsApp.</li>
              </ul>

              <h2>Website development services we offer in Kanpur</h2>
              <p>
                Whatever your Kanpur business needs to put online, here&apos;s what we build:
              </p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {WEBSITE_SERVICES.map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px', color: '#fff' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Prose>
              <h2>How we build a website in Kanpur, step by step</h2>
              <ol>
                <li><strong>Day 1 — free consultation.</strong> A short call or WhatsApp chat, or a coffee at our Govind Nagar office, to understand your business, audience and goal.</li>
                <li><strong>Day 2–3 — free mockup.</strong> We design your homepage and send it within 48 hours. You approve or request changes before any code is written.</li>
                <li><strong>Day 4–14 — build with daily updates.</strong> We code the site with a live preview link, posting progress on WhatsApp every day.</li>
                <li><strong>Day 15–18 — content &amp; integrations.</strong> Your real copy and images, contact forms, WhatsApp, payments (Razorpay/Stripe), analytics and Search Console.</li>
                <li><strong>Day 19–21 — launch.</strong> We deploy to your domain, verify everything, submit your sitemap to Google and hand over full access.</li>
                <li><strong>7 days after launch — free support.</strong> Bug fixes and last-mile tweaks included.</li>
              </ol>

              <h2>How to choose the best website development company in Kanpur</h2>
              <ul>
                <li><strong>Can you meet them?</strong> A local Kanpur team you can visit is far easier to trust and hold accountable than an anonymous remote seller.</li>
                <li><strong>Will they show a mockup first?</strong> A serious company designs before asking for money. Insist on seeing your homepage before you pay.</li>
                <li><strong>Is it built to rank?</strong> Ask about SEO, page speed and Core Web Vitals — a pretty site that&apos;s invisible on Google is wasted money.</li>
                <li><strong>Do you own the code?</strong> Make sure the site and hosting are yours, with no lock-in.</li>
                <li><strong>How do payments work?</strong> Milestone payments protect you — avoid paying 100% upfront.</li>
                <li><strong>Can you see real work?</strong> Ask for live sites they&apos;ve shipped and clients you can call.</li>
              </ul>

              <h2>The tech stack we build on</h2>
              <ul>
                <li><strong>Frontend:</strong> React, Next.js (App Router), TypeScript, Tailwind CSS, GSAP.</li>
                <li><strong>Backend:</strong> Node.js, TypeScript, REST and tRPC APIs.</li>
                <li><strong>Databases:</strong> PostgreSQL, Supabase, MongoDB, Firebase.</li>
                <li><strong>Payments:</strong> Razorpay, Stripe, Cashfree.</li>
                <li><strong>Hosting:</strong> Vercel, AWS, Cloudflare — on your own account.</li>
              </ul>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, but we build websites for businesses right across the city and can come to you:</p>
            </Prose>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '20px 0 8px' }}>
              {KANPUR_AREAS.map((a) => (
                <span
                  key={a}
                  style={{
                    fontSize: 13,
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>

            <Prose>
              <p style={{ marginTop: 24 }}>
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and founders across India. See our national <Link href="/services/website-development">website development</Link> page for the full capability. Need more than a website? See our <Link href="/locations/kanpur/mobile-app-development">app development in Kanpur</Link> and <Link href="/locations/kanpur/ai-development">AI development in Kanpur</Link> pages, or the full <Link href="/locations/kanpur">software company in Kanpur</Link> overview.
              </p>

              <p>
                Shortlisting locally? Our comparison of the <a href="/blog/best-website-development-companies-kanpur-2026">best website development companies in Kanpur</a> covers the other teams in the city and what to ask them.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does website development cost in Kanpur?</h3>
              <p>
                A professional 5-page business website in Kanpur starts at <strong>₹49,999</strong>. E-commerce stores, custom CMS sites and web applications typically range from <strong>₹1,00,000 to ₹3,00,000+</strong> depending on features. We give you a fixed quote and a free 48-hour mockup before you pay anything.
              </p>
              <h3>How long does it take to build a website in Kanpur?</h3>
              <p>
                Most business websites go live in <strong>7–21 days</strong>. A simple site can be ready in a week; an e-commerce or custom platform takes 4–6 weeks. You get daily WhatsApp updates and a live preview link throughout.
              </p>
              <h3>Can we meet the website team in person in Kanpur?</h3>
              <p>
                Yes. We&apos;re a real website development company in Govind Nagar, Kanpur, not a remote freelancer. Visit our office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Civil Lines, Barra and beyond.
              </p>
              <h3>Will my website rank on Google?</h3>
              <p>
                Every website we build ships with on-page SEO by default — semantic HTML, optimised titles and meta, schema markup, XML sitemap, fast Core Web Vitals and Google Search Console setup. That&apos;s exactly how we rank our own site in Kanpur.
              </p>
              <h3>Do I own the website and its code?</h3>
              <p>
                Yes — you own the source code and it sits on your own hosting and domain accounts. No lock-in. Payments are milestone-based: 30% to start, 30% at mid-delivery, 40% at launch.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          defaultService="Business Website"
          heading="Let's build your website, in Kanpur."
          body="Tell us in two lines what you want to build and who it's for. We'll send a free 48-hour mockup and a fixed quote — and you're welcome to visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
