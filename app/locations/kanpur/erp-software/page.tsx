import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, GBP_URL, SOCIAL_LINKS, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/erp-software';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'ERP Software Company in Kanpur',
  description:
    'Verelios Labs builds custom ERP software in Govind Nagar, Kanpur — inventory, accounting, HR & payroll in one system, with Tally & GST. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'ERP Software Company in Kanpur — Custom ERP & Payroll | Verelios Labs',
    description:
      'Custom ERP software — inventory, manufacturing, accounting, HR & payroll — built in Govind Nagar, Kanpur. Tally & GST integration. Meet us in person. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — ERP Software Company in Kanpur' }],
  },
};

const REVIEWS: LocalReview[] = [
  {
    author: 'Agile Horses ERP',
    body: "Verelios's ERP software integrated all our factory operations — production, inventory, quality and maintenance — into one system. Manufacturing efficiency improved 25% and the ROI was clearly visible within 12 months. Best ERP software company in Kanpur.",
  },
  {
    author: 'Tanay Trivedi',
    body: 'They built our website really well — the design, performance and overall quality exceeded expectations. Wide range of tech support, from app and web development to ERP and CRM. Highly recommended.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) fragmented one real
// business into six schema entities and multiplied the same 38 reviews six-fold.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'ERP Software Development',
  name: 'ERP Software Company in Kanpur',
  description:
    'Custom ERP software development in Kanpur — inventory, manufacturing, purchase, sales, accounting, reporting and HR & payroll in one system, with Tally and GST integration. Built for Kanpur factories and traders. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: '99999' },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'ERP Software', item: `${SITE}${URL_PATH}` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom ERP software cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom ERP for a Kanpur business starts at ₹99,999 for a focused module set. A full ERP covering inventory, manufacturing, accounting, HR and payroll typically ranges from ₹2,50,000 to ₹10,00,000+ depending on complexity. We scope it module by module and give you a fixed quote before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does your ERP integrate with Tally and GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our ERP integrates cleanly with Tally and the GST portal, so your CA’s workflow does not change and returns stay simple. We map it to how your Kanpur business already keeps its books.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build ERP for Kanpur’s leather, textile and manufacturing units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — that is exactly the kind of work we do. We build manufacturing ERP for Kanpur’s leather, textile, engineering, FMCG and chemical units, covering raw material, production, batch tracking, wastage, purchase, sales and reporting, tailored to how your unit actually runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build HR and payroll software too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build HR & payroll software with attendance, salary structures, payslips and automatic PF, ESI and TDS calculations, built into the same system so month-end payroll stops being a spreadsheet marathon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the ERP team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We are an ERP software company in Govind Nagar, Kanpur — you can visit our office, or we can come to your factory or shop anywhere in Kanpur, including Panki, Dada Nagar, Fazalganj and Jajmau, to see how you work before we build.',
      },
    },
  ],
};

const ERP_MODULES = [
  ['Inventory & stock', 'Real-time stock across godowns, low-stock alerts, batch and lot tracking — no more guessing what’s on the shelf.'],
  ['Manufacturing & production', 'Bill of materials, production planning, work orders, wastage and batch tracking for Kanpur’s factories.'],
  ['Purchase & vendors', 'Purchase orders, vendor management, GRN and payables in one flow.'],
  ['Sales & billing', 'Quotations, invoices, GST billing, receivables and customer ledgers.'],
  ['Accounting & finance', 'Ledgers, P&L, balance sheet and reports, syncing cleanly with Tally.'],
  ['HR & payroll', 'Attendance, salary structures, payslips and automatic PF / ESI / TDS.'],
  ['Reporting & dashboards', 'Live dashboards and MIS reports so owners see the whole business at a glance.'],
  ['GST & compliance', 'GST-ready invoicing and returns support, integrated with the GST portal.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Panki', 'Dada Nagar', 'Fazalganj', 'Jajmau', 'Kakadeo',
  'Swaroop Nagar', 'Kidwai Nagar', 'Civil Lines', 'Barra', 'Naveen Market', 'Ratan Lal Nagar',
];

export default function KanpurErpSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="ERP software · Kanpur"
          title="An ERP software company in Kanpur"
          highlight="built around how you actually run."
          lead="Verelios Labs builds custom ERP software in Govind Nagar, Kanpur — inventory, manufacturing, accounting, and HR & payroll in one system for local factories and traders. Tally & GST integration, milestone payments, and a team you can meet in person. Rated 5.0★."
          ctaLabel="Get a free ERP consultation"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'ERP Software', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur ERP clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The ERP software company in Kanpur that fits your workflow, not the other way round</h2>
              <p>
                Most off-the-shelf ERP is built to make your business bend around the software, instead of the other way round. <strong>Verelios Labs is a custom ERP software company based in Govind Nagar, Kanpur</strong> — we build the ERP around how your Kanpur factory, trading house or distributor actually runs. And because we&apos;re local, you can sit with us, walk us through your shop floor, and point at exactly what needs to change. No support ticket to another country; a team you can visit.
              </p>
              <p>
                A lot of Kanpur businesses — especially in leather, textiles, engineering, FMCG, chemicals and trading — still run on a patchwork of Tally, Excel and registers. We pull inventory, production, purchase, sales, accounting, reporting and payroll into one system that matches your reality, integrates with Tally and the GST portal, and hands you code you own outright.
              </p>

              <h2>Why your Kanpur business needs a custom ERP</h2>
              <p>
                When your business runs on separate spreadsheets and registers, information gets stale the moment it&apos;s written down. Stock counts don&apos;t match reality, month-end takes a week, and the owner is the only one who knows the full picture. A custom ERP fixes that: one source of truth, updated live, visible to the people who need it. For Kanpur&apos;s manufacturers and traders, that means fewer stockouts, faster billing, cleaner GST returns and payroll that runs itself.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real ERP team in Govind Nagar you can bring onto your shop floor.</li>
                <li><strong>Built around your workflow</strong> — not a rigid product you bend your business to fit.</li>
                <li><strong>Tally &amp; GST integration</strong> — your CA&apos;s workflow doesn&apos;t change.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch.</li>
                <li><strong>Rated 5.0★</strong> across 38 client reviews. <strong>You own the code.</strong></li>
                <li><strong>Open 24 hours, every day</strong>, with a real human on WhatsApp.</li>
              </ul>

              <h2>ERP modules we build for Kanpur businesses</h2>
              <p>We build only the modules you need, and add more as you grow:</p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {ERP_MODULES.map(([title, desc]) => (
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
              <h2>ERP for Kanpur&apos;s core industries</h2>
              <p>
                Kanpur&apos;s economy runs on leather, textiles, engineering, FMCG, chemicals and trading — and each has its own ERP needs. We build <strong>manufacturing ERP</strong> that tracks raw material, production and wastage for a Panki or Dada Nagar unit; <strong>leather and tannery ERP</strong> for the Jajmau belt with batch and grade tracking; and <strong>distribution ERP</strong> for traders in Naveen Market managing multi-location stock and receivables. Whatever you make or move, we map the system to your process.
              </p>

              <h2>How an ERP project runs in Kanpur, step by step</h2>
              <ol>
                <li><strong>Shop-floor discovery.</strong> We come to your unit, watch how you actually work, and list every process the ERP must cover.</li>
                <li><strong>Module scoping &amp; fixed quote.</strong> We propose the modules to build first and share a fixed quote and timeline.</li>
                <li><strong>Design &amp; data model.</strong> We design screens and the data structure around your real workflow.</li>
                <li><strong>Build in phases.</strong> We deliver module by module so you see value early, with daily updates.</li>
                <li><strong>Tally &amp; GST integration.</strong> We connect it to your existing books and the GST portal.</li>
                <li><strong>Migration &amp; training.</strong> We move your existing data in and train your team on-site in Kanpur.</li>
                <li><strong>Launch &amp; support.</strong> We go live, then support and extend it as you grow.</li>
              </ol>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, and we work with factories and businesses right across Kanpur&apos;s industrial belts:</p>
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
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and businesses across India. See our national <Link href="/services/erp">custom ERP software</Link> page for the full capability, or the <Link href="/locations/kanpur">software company in Kanpur</Link> overview for everything we build locally.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom ERP software cost in Kanpur?</h3>
              <p>
                A custom ERP for a Kanpur business starts at <strong>₹99,999</strong> for a focused module set. A full ERP covering inventory, manufacturing, accounting, HR and payroll typically ranges from <strong>₹2,50,000 to ₹10,00,000+</strong> depending on complexity. We scope it module by module and give you a fixed quote before any work begins.
              </p>
              <h3>Does your ERP integrate with Tally and GST?</h3>
              <p>
                Yes. Our ERP integrates cleanly with Tally and the GST portal, so your CA&apos;s workflow doesn&apos;t change and returns stay simple. We map it to how your Kanpur business already keeps its books.
              </p>
              <h3>Can you build ERP for Kanpur&apos;s leather, textile and manufacturing units?</h3>
              <p>
                Yes — that&apos;s exactly the kind of work we do. We build manufacturing ERP for Kanpur&apos;s leather, textile, engineering, FMCG and chemical units, covering raw material, production, batch tracking, wastage, purchase, sales and reporting, tailored to how your unit actually runs.
              </p>
              <h3>Do you build HR and payroll software too?</h3>
              <p>
                Yes. We build HR &amp; payroll software with attendance, salary structures, payslips and automatic PF, ESI and TDS calculations, built into the same system so month-end payroll stops being a spreadsheet marathon.
              </p>
              <h3>Can we meet the ERP team in person in Kanpur?</h3>
              <p>
                Absolutely. We&apos;re an ERP software company in Govind Nagar, Kanpur — you can visit our office, or we can come to your factory or shop anywhere in Kanpur, including Panki, Dada Nagar, Fazalganj and Jajmau, to see how you work before we build.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Let's build your ERP, in Kanpur."
          body="Tell us what your business makes or moves, and where the spreadsheets hurt most. We'll come see your operation, scope the right modules, and send a fixed quote — visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
