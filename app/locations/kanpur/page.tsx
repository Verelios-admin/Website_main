import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalMap } from '@/components/sub-page/LocalMap';

const URL_PATH = '/locations/kanpur';
const SITE = 'https://www.verelios.com';

// Verelios Labs' Google Business Profile — used for the "view on Google" link
// and as a sameAs signal in the LocalBusiness structured data.
const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/verelios-4a1483387/',
  'https://www.facebook.com/profile.php?id=61585021269687',
  'https://www.instagram.com/verelioslabs/',
];

export const metadata: Metadata = {
  title: 'Software Company in Kanpur — Web, App & ERP',
  description:
    'Verelios Labs — a software company in Govind Nagar, Kanpur building websites, mobile apps, ERP & payroll software. Free 48-hour mockup. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Software Company in Kanpur — Web, App, ERP & Payroll | Verelios Labs',
    description:
      'Websites, mobile apps, custom ERP and payroll software built in Govind Nagar, Kanpur. Free 48-hour mockup, milestone payments, meet us in person. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Software Company in Kanpur' }],
  },
};

// Visible client testimonials — on-page social proof only, NOT wrapped in Review
// schema (see the note on localBusinessJsonLd below). Sourced from Verelios Labs'
// verified Google Business Profile (5.0★, 53 reviews).
const CLIENT_TESTIMONIALS = [
  {
    author: 'Shrawan Garg',
    body:
      'From domain setup to live launch, the entire process was smooth and well-communicated. Our website ranks well on Google too, thanks to the SEO-ready structure they built. Best website developers in Kanpur for small and medium businesses.',
  },
  {
    author: 'Bhavesh Singh',
    body:
      'Had a really great experience building a custom website for my company. They are super reliable and committed exactly to the timeline — I got the work done even before my deadline, and my website has reached so many customers.',
  },
];

// LocalBusiness schema for the Kanpur landing page. Uses the SAME @id as the
// homepage node (`${SITE}/#localbusiness`) because it describes the SAME real
// business — one entity, declared on the two pages that are genuinely about it,
// rather than six parallel entities with six different @ids. The identifying
// fields (name, url, telephone, address, geo) are kept identical to the homepage
// so there is nothing for Google to reconcile; this page only contributes the
// richer Kanpur-neighbourhood areaServed detail.
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#localbusiness`,
  name: 'Verelios Labs',
  alternateName: ['Verelios', 'Verelios Labs Kanpur'],
  url: SITE,
  telephone: '+91-8299522798',
  email: 'contact@verelios.com',
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
  // Kept identical to the homepage node and to the Organization node in
  // app/layout.tsx. Each static page has to stand alone, so identifying fields
  // are repeated rather than referenced.
  foundingDate: '2024',
  image: `${SITE}/logo.webp`,
  logo: `${SITE}/logo.webp`,
  description:
    'Software company in Govind Nagar, Kanpur — building websites, mobile apps, custom ERP and payroll software for businesses across Kanpur and India. Free 48-hour mockup, milestone-based payment.',
  areaServed: [
    { '@type': 'City', name: 'Kanpur' },
    { '@type': 'Place', name: 'Govind Nagar, Kanpur' },
    { '@type': 'Place', name: 'Kakadeo, Kanpur' },
    { '@type': 'Place', name: 'Swaroop Nagar, Kanpur' },
    { '@type': 'Place', name: 'Kidwai Nagar, Kanpur' },
    { '@type': 'Place', name: 'Kalyanpur, Kanpur' },
    { '@type': 'Place', name: 'Civil Lines, Kanpur' },
    { '@type': 'Place', name: 'Panki, Kanpur' },
    { '@type': 'Place', name: 'Barra, Kanpur' },
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceArea: { '@type': 'City', name: 'Kanpur' },
  sameAs: [...SOCIAL_LINKS, GBP_URL],
  parentOrganization: { '@id': `${SITE}/#organization` },
  // aggregateRating + review deliberately omitted — self-authored review markup
  // about our own business is ineligible for Google's star rich result and risks
  // a manual action. See the longer note in app/page.tsx. Do not re-add.
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'Kanpur', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible "Frequently asked questions" Q&A below, verbatim.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Verelios Labs located in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are at 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006. We are open 24 hours a day, every day, and you are welcome to visit us in person or talk over WhatsApp before starting a project.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software services do you offer in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build websites, e-commerce stores, mobile apps, custom software, ERP systems, HRMS and payroll software, GST billing and inventory software, CRM systems and AI automation for Kanpur businesses — plus managed web hosting and maintenance. Everything is custom-built on a modern stack (React, Next.js, Node.js, TypeScript) and you own the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build ERP and payroll software for Kanpur businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom ERP software — inventory, manufacturing, accounting and reporting — and HR & payroll systems with attendance, salary structures, payslips and PF / ESI / TDS calculations, tailored to how your Kanpur business actually runs. It integrates with Tally and the GST portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Unlike remote-only freelancers, we are a local Kanpur team you can sit across from. Visit our Govind Nagar office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Kalyanpur, Civil Lines and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost and how do payments work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Websites start at ₹49,999, mobile apps at ₹99,999, and custom software / ERP from ₹99,999. We work on milestone payments — 30% to start, 30% at mid-delivery, 40% at launch — with a fixed quote up front and a free 48-hour mockup before you commit.',
      },
    },
  ],
};

const LOCAL_SERVICES = [
  { title: 'Website development in Kanpur', desc: 'Fast, conversion-focused sites for Kanpur businesses. From ₹49,999, live in 7–14 days.', href: '/locations/kanpur/website-development' },
  { title: 'Mobile app development in Kanpur', desc: 'iOS & Android apps from one codebase, shipped to both stores in 3–5 weeks.', href: '/locations/kanpur/mobile-app-development' },
  { title: 'AI development in Kanpur', desc: 'AI agents, chatbots, machine learning and workflow automation that take busywork off your team.', href: '/locations/kanpur/ai-development' },
  { title: 'ERP software in Kanpur', desc: 'Inventory, manufacturing, accounting & reporting in one system built around your workflow.', href: '/locations/kanpur/erp-software' },
  { title: 'HRMS & payroll software in Kanpur', desc: 'Biometric attendance, shifts, payslips and automatic PF / ESI / TDS — including contract and piece-rate workers.', href: '/locations/kanpur/hrms-payroll-software' },
  { title: 'Billing & inventory software in Kanpur', desc: 'Fast GST billing, live stock across godowns, e-way bills and Tally sync. Keeps billing when the internet drops.', href: '/locations/kanpur/billing-inventory-software' },
  { title: 'Web hosting & maintenance', desc: 'Managed hosting with 99.9% uptime, backups, SSL and a human on WhatsApp.', href: '/services/web-hosting' },
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Kalyanpur',
  'Civil Lines', 'Arya Nagar', 'Panki', 'Barra', 'Naveen Market', 'Shastri Nagar', 'Ratan Lal Nagar',
];

export default function KanpurLocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Software company · Kanpur"
          title="A software company in Kanpur"
          highlight="you can actually sit across from."
          lead="Verelios Labs is a software company based in Govind Nagar, Kanpur — building websites, mobile apps, custom ERP and HR & payroll software for local businesses. Free 48-hour mockup, milestone payments, and a team you can meet in person. Rated 5.0★ by our clients."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: URL_PATH },
          ]}
        />

        {/* Local trust card — address, hours, rating, Google Business Profile */}
        <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 20,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 26px',
              }}
            >
              <div>
                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                  Visit us
                </div>
                <address style={{ fontStyle: 'normal', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                  126/58 G Block, Govind Nagar<br />
                  Kanpur, Uttar Pradesh 208006
                </address>
              </div>
              <div>
                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                  Open
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                  Open 24 hours · Every day<br />
                  <a href="tel:+918299522798" style={{ color: '#2997ff', textDecoration: 'none' }}>+91 82995 22798</a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                  Rated 5.0 ★
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                  53 client reviews<br />
                  <a href={GBP_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2997ff', textDecoration: 'none' }}>
                    See us on Google →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map of the Govind Nagar office — strong local-trust + relevance
            signal. Swap the embed src for the exact GBP "Embed a map" code when
            available (see components/sub-page/LocalMap.tsx). */}
        <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
            <LocalMap />
          </div>
        </section>

        {/* Client testimonials — visible on-page social proof only. NOTE: the
            Review/AggregateRating schema was removed (self-authored review
            markup risks a manual action); these quotes carry no schema. */}
        <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
            <Prose>
              <h2>What our Kanpur clients say</h2>
            </Prose>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, margin: '4px 0 22px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 700, lineHeight: 1, color: '#fff' }}>5.0</span>
              <span aria-hidden="true" style={{ color: '#f5a623', fontSize: 20, letterSpacing: 3 }}>★★★★★</span>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>from 53 verified client reviews</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
              }}
            >
              {CLIENT_TESTIMONIALS.map((r) => (
                <figure
                  key={r.author}
                  style={{
                    margin: 0,
                    padding: 22,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div aria-hidden="true" style={{ color: '#f5a623', fontSize: 15, letterSpacing: 2, marginBottom: 10 }}>★★★★★</div>
                  <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.82)' }}>
                    &ldquo;{r.body}&rdquo;
                  </blockquote>
                  <figcaption style={{ marginTop: 14, fontSize: 14, fontWeight: 600, color: '#fff' }}>
                    {r.author}
                    <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}> · Kanpur</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div style={{ marginTop: 20 }}>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#2997ff', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}
              >
                Read all our reviews on Google →
              </a>
            </div>
          </div>
        </section>

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Why Kanpur businesses choose Verelios Labs</h2>
              <p>
                Most software gets built by someone far away who you only ever meet over email. We&apos;re different: we&apos;re a <strong>software company based right here in Govind Nagar, Kanpur</strong>. You can visit our office, sit across the table, and point at the exact screen you want changed. For a Kanpur manufacturer, trader, clinic, school or shop, that local presence is the difference between hoping a project goes well and watching it go well.
              </p>
              <p>
                Being local doesn&apos;t mean small. We build on the same modern stack the best product teams in the world use — <strong>React, Next.js, React Native, Node.js and TypeScript</strong> — and we hand you code you own outright, hosted on your own account. Kanpur pricing, world-class engineering.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real office in Govind Nagar, not a remote freelancer who disappears.</li>
                <li><strong>Free 48-hour mockup</strong> — see your website or app before you pay a single rupee.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch. You pay as you see progress.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews, with work you can actually click through.</li>
                <li><strong>You own everything</strong> — source code in your GitHub, hosting on your account, no lock-in.</li>
                <li><strong>Open 24 hours, every day</strong>, with a real human on WhatsApp.</li>
              </ul>

              <h2>What we build for Kanpur businesses</h2>
              <p>
                Whether you run a factory in Panki, a shop in Naveen Market, a clinic in Swaroop Nagar or a startup out of a bedroom in Kakadeo — here&apos;s what we build:
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
              {LOCAL_SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="related-card"
                  style={{
                    display: 'block',
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                    {s.desc}
                  </p>
                  <div style={{ marginTop: 12, fontSize: 13, fontWeight: 500, color: '#2997ff' }}>Learn more →</div>
                </Link>
              ))}
            </div>

            <Prose>
              <h2>ERP &amp; payroll software, built in Kanpur</h2>
              <p>
                A lot of Kanpur businesses — especially in manufacturing, leather, textiles, trading and distribution — are still run on a patchwork of Tally, Excel and registers. We build <a href="/locations/kanpur/erp-software">custom ERP software in Kanpur</a> that pulls inventory, production, purchase, sales, accounting and reporting into one system that matches how you actually work. Add <strong>HR &amp; payroll</strong> — attendance, salary structures, payslips, and PF / ESI / TDS calculations — and month-end stops being a week-long spreadsheet marathon. It integrates cleanly with Tally and the GST portal, so your CA&apos;s workflow doesn&apos;t change.
              </p>

              <h2>Areas we serve across Kanpur</h2>
              <p>
                Our office is in Govind Nagar, but we work with businesses right across the city and can come to you:
              </p>
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
                We also serve clients in Lucknow, Unnao and across Uttar Pradesh — and founders all over India. Not in Kanpur? Everything we do works remotely too, with the same free 48-hour mockup and milestone payments.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>Where is Verelios Labs located in Kanpur?</h3>
              <p>
                We are at 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006. We are open 24 hours a day, every day, and you are welcome to visit us in person or talk over WhatsApp before starting a project.
              </p>
              <h3>What software services do you offer in Kanpur?</h3>
              <p>
                We build websites, mobile apps, custom software, ERP systems, HR &amp; payroll software, and AI automation for Kanpur businesses — plus managed web hosting and maintenance. Everything is custom-built on a modern stack (React, Next.js, Node.js, TypeScript) and you own the code.
              </p>
              <h3>Do you build ERP and payroll software for Kanpur businesses?</h3>
              <p>
                Yes. We build custom ERP software — inventory, manufacturing, accounting and reporting — and HR &amp; payroll systems with attendance, salary structures, payslips and PF / ESI / TDS calculations, tailored to how your Kanpur business actually runs. It integrates with Tally and the GST portal.
              </p>
              <h3>Can we meet the team in person in Kanpur?</h3>
              <p>
                Absolutely. Unlike remote-only freelancers, we&apos;re a local Kanpur team you can sit across from. Visit our Govind Nagar office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Kalyanpur, Civil Lines and beyond.
              </p>
              <h3>How much does it cost and how do payments work?</h3>
              <p>
                Websites start at ₹49,999, mobile apps at ₹99,999, and custom software / ERP from ₹99,999. We work on milestone payments — 30% to start, 30% at mid-delivery, 40% at launch — with a fixed quote up front and a free 48-hour mockup before you commit.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Let's build it together, in Kanpur."
          body="Tell us what you need — a website, an app, an ERP or payroll system. We'll send a free 48-hour mockup and a fixed quote, and you're welcome to visit our Govind Nagar office any day — we're open 24 hours."
        />
      </SubPageLayout>
    </>
  );
}
