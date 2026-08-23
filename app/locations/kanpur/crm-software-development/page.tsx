import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/crm-software-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'CRM Software Company in Kanpur',
  description:
    'Verelios Labs builds custom CRM software in Govind Nagar, Kanpur — leads, pipeline, WhatsApp and field sales in one system. From ₹99,999. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'CRM Software Company in Kanpur — Custom CRM & WhatsApp | Verelios Labs',
    description:
      'Custom CRM software — leads, pipeline, quotations, WhatsApp Business API and field sales — built in Govind Nagar, Kanpur. One-time build, not per user per month. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — CRM Software Company in Kanpur' }],
  },
};

// TODO(owner): replace with real, named Kanpur CRM clients once there are two
// to name. These two are existing verified Google reviews that mention CRM work
// specifically — they are genuine, but neither is a CRM-only engagement, so
// swap them out as soon as a CRM client is willing to be quoted. Do NOT invent
// a review here: everything in this array is visible content that a reader may
// go and check against the Google Business Profile.
const REVIEWS: LocalReview[] = [
  {
    author: 'Tanay Trivedi',
    body: 'They built our website really well — the design, performance and overall quality exceeded expectations. Wide range of tech support, from app and web development to ERP and CRM. Highly recommended.',
  },
  {
    author: 'Shrawan Garg',
    body: 'From domain setup to live launch, the entire process was smooth and well-communicated. Our website ranks well on Google too, thanks to the SEO-ready structure they built. Best website developers in Kanpur for small and medium businesses.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) would fragment one
// real business into several schema entities and multiply the same 53 reviews.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'CRM Software Development',
  name: 'CRM Software Company in Kanpur',
  description:
    'Custom CRM software development in Kanpur — lead capture, pipeline, follow-ups, quotations, WhatsApp Business API, call logging and field-sales tracking in one system. Built for Kanpur traders, manufacturers and service businesses. One-time build, not per user per month. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: 99999 },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'CRM Software', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible FAQ below verbatim, as every other page on the site does.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom CRM software cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A focused CRM covering leads, pipeline, follow-ups and quotations starts at ₹99,999. Adding WhatsApp Business API, call-log capture, field-sales tracking, target dashboards and ERP or billing integration typically takes it to ₹1,50,000–₹4,00,000. It's a one-time build with a fixed quote up front and milestone payments (30/30/40) — not a per-user-per-month subscription.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why not just use Zoho CRM or Salesforce in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If your sales process fits theirs, use them — we'll tell you so. They stop making sense when the per-user fee keeps growing as you hire, or when your process doesn't match the template: dealer and distributor hierarchies, credit limits, piece-rate field teams, or quotations priced off a rate list that changes weekly. A one-time custom build often costs less than three years of subscription for a ten-person sales team.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can the CRM send and receive WhatsApp messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. We connect the WhatsApp Business API so conversations attach to the lead record, and template messages handle quotes, reminders and payment follow-ups. In Kanpur most enquiries arrive on WhatsApp, so a CRM that can't see WhatsApp is blind to most of the pipeline.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will it work for our field sales team across Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Field staff check in with location at customer visits, follow beat plans, and capture orders offline — the data syncs when signal returns, which matters in Panki, Dada Nagar and the Jajmau belt where coverage is patchy. Calls are logged automatically with duration and outcome, so activity is recorded without anyone writing it down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the CRM team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. We're a CRM software company in Govind Nagar, Kanpur — visit our office any day, or we'll come to you anywhere in Kanpur and sit with a salesperson for a morning before we design anything. We're open 24 hours, every day, with a real human on WhatsApp.",
      },
    },
  ],
};

const CRM_MODULES = [
  ['Lead capture from everywhere', 'Website forms, WhatsApp, IndiaMART, Facebook and Google lead forms and phone calls, all landing in one place with the source recorded.'],
  ['Pipeline & stages', 'Your actual stages, not a generic template, with drag-and-drop movement and stage-wise conversion visible.'],
  ['Follow-up engine', 'Every lead has an owner and a next-action date; overdue items escalate instead of quietly ageing.'],
  ['Quotations', 'Branded PDF quotes generated from your product and rate list, with revisions tracked and approval limits enforced.'],
  ['WhatsApp Business API', 'Conversations attached to the lead record, with template messages for quotes, reminders and payment follow-ups.'],
  ['Call logging', 'A mobile app captures call duration and outcome, so activity is recorded without anyone writing it down.'],
  ['Field sales', 'Check-in with location at customer visits, beat plans, and offline capture that syncs when signal returns.'],
  ['Targets & incentives', 'Monthly targets by person and territory, with live achievement and incentive calculation.'],
  ['Role-based access', 'Each salesperson sees their own pipeline, managers see their team, the owner sees everything.'],
  ['Reporting', 'Source-wise ROI, conversion by stage, lost-reason analysis and ageing — the numbers that change what you do next month.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Panki', 'Dada Nagar', 'Fazalganj', 'Jajmau', 'Kakadeo',
  'Swaroop Nagar', 'Kidwai Nagar', 'Civil Lines', 'Barra', 'Naveen Market', 'Ratan Lal Nagar',
];

export default function KanpurCrmSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="CRM software · Kanpur"
          title="A CRM software company in Kanpur"
          highlight="that fits how your team actually sells."
          lead="Verelios Labs builds custom CRM software in Govind Nagar, Kanpur — leads, pipeline, quotations, WhatsApp and field sales in one system. One-time build from ₹99,999, not per user per month. Milestone payments, and a team you can meet in person. Rated 5.0★."
          ctaLabel="Get a free CRM consultation"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'CRM Software', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Most CRMs in Kanpur go unused for the same reason</h2>
              <p>
                A CRM gets bought, the team is trained, and three months later everyone is back to a WhatsApp group and a notebook. It is almost never because the software was bad. It is because the software expected a sales process the business does not have. <strong>Verelios Labs is a custom CRM software company based in Govind Nagar, Kanpur</strong> — we sit with your salespeople first, watch how enquiries actually arrive and how quotes actually get sent, and then build the CRM around that.
              </p>
              <p>
                In Kanpur that usually means starting from WhatsApp rather than email, handling dealer and distributor hierarchies rather than flat customer lists, and pricing quotations off a rate list that moves. A generic template fights all three. Being local also means you can walk us through it in person, and we can sit with your team for a morning instead of guessing from a requirements document.
              </p>

              <h2>Why Kanpur businesses outgrow subscription CRMs</h2>
              <p>
                Per-user-per-month pricing is cheap for three people and expensive for thirty. It also gets more expensive precisely when the business is doing well and hiring. A one-time custom build inverts that: you pay once, you own the code, and adding a salesperson costs nothing. For a ten-person sales team, a custom CRM frequently costs less than three years of subscription — and it does what your process actually needs.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real team in Govind Nagar you can bring to your office.</li>
                <li><strong>Built around your pipeline</strong> — your stages, your rate list, your approval limits.</li>
                <li><strong>WhatsApp-first</strong> — because that is where Kanpur enquiries actually arrive.</li>
                <li><strong>One-time build</strong> — not per user per month; hiring does not raise the bill.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews. <strong>You own the code.</strong></li>
              </ul>

              <h2>What we build into a Kanpur CRM</h2>
              <p>We build only what you need first, and extend it as the team grows:</p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {CRM_MODULES.map(([title, desc]) => (
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
              <h2>CRM for how Kanpur actually sells</h2>
              <p>
                A <strong>trading and distribution business</strong> in Naveen Market needs dealer hierarchies, credit limits and receivables visible next to the pipeline, because the question is rarely &ldquo;will they buy&rdquo; and usually &ldquo;should we ship before they pay&rdquo;. A <strong>manufacturing unit</strong> in Panki or Dada Nagar needs quotations priced off a live rate list and enquiries routed by product line. A <strong>leather or tannery exporter</strong> in the Jajmau belt needs enquiry-to-sample-to-order tracking with buyer-wise history. A <strong>service business</strong> — clinic, coaching institute, real-estate broker — needs follow-ups that chase themselves, because the cost of a forgotten lead is the whole lead.
              </p>

              <h2>When a custom CRM is the wrong call</h2>
              <p>
                We will say so. If you are three people, your process fits a standard pipeline, and you mostly need reminders, then Zoho CRM or a simple pipeline tool will serve you better and faster than anything we build. Custom starts paying off when the per-user fee is real money, when the process genuinely does not fit the template, or when the CRM has to talk to your ERP, billing or WhatsApp in ways an off-the-shelf plan will not do.
              </p>

              <h2>How a CRM project runs in Kanpur, step by step</h2>
              <ol>
                <li><strong>Follow a salesperson.</strong> We spend a morning with your team watching how enquiries arrive and quotes go out.</li>
                <li><strong>Map the pipeline.</strong> We write down your real stages and where leads currently get lost.</li>
                <li><strong>Fixed quote.</strong> We scope phase one, then send a fixed price and timeline — no hourly billing, no mid-project revision.</li>
                <li><strong>Design &amp; build.</strong> Screens designed around your workflow, delivered in phases with daily WhatsApp updates.</li>
                <li><strong>WhatsApp &amp; integrations.</strong> We connect the WhatsApp Business API, and your ERP or billing system if you have one.</li>
                <li><strong>Migration &amp; training.</strong> We move existing leads in and train the team on-site in Kanpur.</li>
                <li><strong>Launch &amp; support.</strong> We go live, then support and extend it as the team grows.</li>
              </ol>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, and we work with businesses right across the city:</p>
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
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and businesses across India. See our national <Link href="/services/crm-software-development">custom CRM software</Link> page for the full capability, the <Link href="/services/erp">custom ERP software</Link> page if you need inventory and accounting in the same system, or the <Link href="/locations/kanpur">software company in Kanpur</Link> overview for everything we build locally.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom CRM software cost in Kanpur?</h3>
              <p>
                A focused CRM covering leads, pipeline, follow-ups and quotations starts at <strong>₹99,999</strong>. Adding WhatsApp Business API, call-log capture, field-sales tracking, target dashboards and ERP or billing integration typically takes it to <strong>₹1,50,000–₹4,00,000</strong>. It&apos;s a one-time build with a fixed quote up front and milestone payments (30/30/40) — not a per-user-per-month subscription.
              </p>
              <h3>Why not just use Zoho CRM or Salesforce in Kanpur?</h3>
              <p>
                If your sales process fits theirs, use them — we&apos;ll tell you so. They stop making sense when the per-user fee keeps growing as you hire, or when your process doesn&apos;t match the template: dealer and distributor hierarchies, credit limits, piece-rate field teams, or quotations priced off a rate list that changes weekly. A one-time custom build often costs less than three years of subscription for a ten-person sales team.
              </p>
              <h3>Can the CRM send and receive WhatsApp messages?</h3>
              <p>
                Yes. We connect the WhatsApp Business API so conversations attach to the lead record, and template messages handle quotes, reminders and payment follow-ups. In Kanpur most enquiries arrive on WhatsApp, so a CRM that can&apos;t see WhatsApp is blind to most of the pipeline.
              </p>
              <h3>Will it work for our field sales team across Kanpur?</h3>
              <p>
                Yes. Field staff check in with location at customer visits, follow beat plans, and capture orders offline — the data syncs when signal returns, which matters in Panki, Dada Nagar and the Jajmau belt where coverage is patchy. Calls are logged automatically with duration and outcome, so activity is recorded without anyone writing it down.
              </p>
              <h3>Can we meet the CRM team in person in Kanpur?</h3>
              <p>
                Yes. We&apos;re a CRM software company in Govind Nagar, Kanpur — visit our office any day, or we&apos;ll come to you anywhere in Kanpur and sit with a salesperson for a morning before we design anything. We&apos;re open 24 hours, every day, with a real human on WhatsApp.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Let's fix your pipeline, in Kanpur."
          body="Tell us how enquiries reach you today and where leads go cold. We'll sit with your sales team, map the real pipeline, and send a fixed quote — visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
