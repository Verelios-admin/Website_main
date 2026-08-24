import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/billing-inventory-software';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Billing & Inventory Software Company in Kanpur',
  description:
    'Custom GST billing and inventory software built in Govind Nagar, Kanpur — fast invoicing, live stock, e-way bills, barcode and Tally sync. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Billing & Inventory Software Company in Kanpur | Verelios Labs',
    description:
      'GST invoicing, live stock across godowns, e-way bills, barcode scanning and Tally sync — built in Govind Nagar, Kanpur. Meet us in person. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Billing & Inventory Software Company in Kanpur' }],
  },
};

const REVIEWS: LocalReview[] = [
  {
    author: 'Agile Horses ERP',
    body: "Verelios's software integrated all our factory operations — production, inventory, quality and maintenance — into one system. Manufacturing efficiency improved 25% and the ROI was clearly visible within 12 months.",
  },
  {
    author: 'DevOps',
    body: 'After speaking with several companies, we decided to work with Verelios Labs, and it turned out to be the right choice. They were transparent from the beginning, offered a fair price, and never made false promises.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) would fragment one
// real business into several schema entities and multiply the same reviews.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Billing and Inventory Software Development',
  name: 'Billing & Inventory Software Company in Kanpur',
  description:
    'Custom GST billing and inventory software development in Kanpur — fast invoicing, real-time stock across godowns, batch and expiry tracking, barcode scanning, e-way bills, purchase and sales registers and Tally integration. Built for Kanpur shops, distributors and manufacturing units.',
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
    { '@type': 'ListItem', position: 3, name: 'Billing & Inventory Software', item: `${SITE}${URL_PATH}` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does billing and inventory software cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-counter billing and stock system starts at ₹99,999. Multi-godown inventory with batch and expiry tracking, barcode scanning, e-way bills and Tally sync typically ranges from ₹1,50,000 to ₹5,00,000. We come to your shop or godown, watch how you bill today, and give a fixed quote before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will it work with Tally, or do we have to leave it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of our Kanpur clients keep Tally, because their CA is comfortable there. We handle the operational side — billing, stock, purchase and sales — and sync vouchers into Tally so nothing is entered twice and your CA’s workflow does not change. If you later want to move accounting across as well, we add that module.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the internet goes down at the counter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Billing keeps working. For counters where connectivity is unreliable we build an offline-first billing screen that stores invoices locally and syncs automatically once the connection returns. A broadband outage should never stop you from handing a customer a bill.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle multiple godowns and party-wise rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Stock is tracked per godown and per counter with live transfers between them, and pricing supports wholesale, retail and party-wise rates, slab discounts and free-quantity schemes — so your billing staff stop overriding prices by hand, which is where most margin leaks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you generate GST invoices and e-way bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. HSN codes, correct CGST / SGST / IGST splits by place of supply, GSTIN validation, and e-invoice IRN with QR code through the government APIs. E-way bills are raised automatically above the threshold, and we produce GSTR-1 and GSTR-3B ready exports for your CA.',
      },
    },
  ],
};

const BILLING_MODULES: Array<[string, string]> = [
  ['Fast GST billing', 'Keyboard-first counter screen — item, quantity, rate, save. Built for speed with a customer waiting.'],
  ['Live stock', 'Real-time stock across godowns and counters, updated the moment a bill is raised or goods arrive.'],
  ['Batch & expiry', 'FIFO and FEFO issue with expiry alerts — essential for pharma, food and chemical stock.'],
  ['Barcode & labels', 'Scanning at billing, goods receipt and audit, plus label printing with batch and MRP.'],
  ['E-way & e-invoice', 'IRN, QR code and e-way bills generated through the government APIs automatically.'],
  ['Purchase & vendors', 'Purchase orders, goods-received notes, vendor ledgers and three-way matching.'],
  ['Receivables', 'Party ledgers, credit limits, ageing reports and WhatsApp payment reminders.'],
  ['Tally sync', 'Two-way voucher sync so your CA’s workflow does not change at all.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Naveen Market', 'Birhana Road', 'Gumti No. 5', 'Panki', 'Dada Nagar',
  'Fazalganj', 'Jajmau', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Barra',
];

export default function KanpurBillingInventoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Billing & inventory software · Kanpur"
          title="Billing software in Kanpur"
          highlight="fast enough for your counter."
          lead="Verelios Labs builds custom GST billing and inventory software in Govind Nagar, Kanpur — fast invoicing, live stock across godowns, e-way bills, barcode scanning and Tally sync. We come and watch how you bill before we quote. Rated 5.0★."
          ctaLabel="Get a free billing demo"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'Billing & Inventory Software', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Billing software is judged at the counter, not in a demo</h2>
              <p>
                Every billing product looks fine in a presentation. The only test that matters is how fast a trained person can raise a bill with three customers waiting at Naveen Market on a Saturday evening. If the software is slower than the bill book it replaced, your staff will quietly go back to the bill book — and we have seen that happen to plenty of expensive systems.
              </p>
              <p>
                <strong>Verelios Labs is a custom billing and inventory software company based in Govind Nagar, Kanpur.</strong> Before we quote, we come and stand at your counter and in your godown to see how you actually work — including the shortcuts. The system gets built around that, not around a product roadmap.
              </p>

              <h2>Why Kanpur shops and distributors come to us</h2>
              <ul>
                <li><strong>Keyboard-first billing</strong> — no mouse, no waiting, no queue at the counter.</li>
                <li><strong>Works offline</strong> — an internet outage never stops billing.</li>
                <li><strong>Tally stays</strong> — we sync to it rather than forcing your CA to change.</li>
                <li><strong>Party-wise rates and schemes</strong> built in, so staff stop overriding prices manually.</li>
                <li><strong>Meet us in person</strong> — a real team in Govind Nagar, at your shop within the hour.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews. <strong>You own the code.</strong></li>
              </ul>

              <h2>What we build into a Kanpur billing system</h2>
              <p>Start with billing and stock, and add the rest as you need it:</p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {BILLING_MODULES.map(([title, desc]) => (
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
              <h2>Who we build billing software for in Kanpur</h2>
              <p>
                <strong>Wholesalers and distributors</strong> around Naveen Market, Birhana Road and Gumti No. 5 running multi-godown stock and party-wise credit. <strong>Retail chains</strong> with several counters that need one live stock view. <strong>Manufacturing units</strong> in Panki and Dada Nagar where raw material has to convert into finished goods, not just move in and out. <strong>Pharma and food distributors</strong> who need batch and expiry tracking with FEFO issue. <strong>Hardware, electrical and auto-parts traders</strong> with large item masters and scheme-based pricing.
              </p>

              <h2>How a billing project runs in Kanpur</h2>
              <ol>
                <li><strong>We come to your counter.</strong> A few hours watching billing and goods receipt as they actually happen.</li>
                <li><strong>Blueprint &amp; fixed quote.</strong> Screens, stock rules, print formats and integrations on one page, with a fixed price, before any code.</li>
                <li><strong>Build in phases.</strong> Billing and stock first so you see it working in week three, then purchase, schemes and reports.</li>
                <li><strong>Item master &amp; opening stock.</strong> We import your items, parties and opening balances from Tally or Excel and reconcile them with you.</li>
                <li><strong>Parallel run &amp; counter training.</strong> A week on both systems, with staff trained at the counter rather than in a meeting room.</li>
                <li><strong>Go-live &amp; 30 days support.</strong> On-site during the first few busy days.</li>
              </ol>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, and we work with shops, godowns and units right across the city:</p>
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
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and businesses across India. See our national{' '}
                <Link href="/services/billing-inventory-software">billing &amp; inventory software</Link> page for the full capability, the{' '}
                <Link href="/locations/kanpur/erp-software">ERP software company in Kanpur</Link> page if you also need production and
                accounting, or the <Link href="/locations/kanpur">software company in Kanpur</Link> overview for everything we build locally.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does billing and inventory software cost in Kanpur?</h3>
              <p>
                A single-counter billing and stock system starts at <strong>₹99,999</strong>. Multi-godown inventory with batch and expiry tracking, barcode scanning, e-way bills and Tally sync typically ranges from <strong>₹1,50,000 to ₹5,00,000</strong>. We come to your shop or godown, watch how you bill today, and give a fixed quote before any work begins.
              </p>
              <h3>Will it work with Tally, or do we have to leave it?</h3>
              <p>
                Most of our Kanpur clients keep Tally, because their CA is comfortable there. We handle the operational side — billing, stock, purchase and sales — and sync vouchers into Tally so nothing is entered twice and your CA&apos;s workflow does not change. If you later want to move accounting across as well, we add that module.
              </p>
              <h3>What happens if the internet goes down at the counter?</h3>
              <p>
                Billing keeps working. For counters where connectivity is unreliable we build an offline-first billing screen that stores invoices locally and syncs automatically once the connection returns. A broadband outage should never stop you from handing a customer a bill.
              </p>
              <h3>Can it handle multiple godowns and party-wise rates?</h3>
              <p>
                Yes. Stock is tracked per godown and per counter with live transfers between them, and pricing supports wholesale, retail and party-wise rates, slab discounts and free-quantity schemes — so your billing staff stop overriding prices by hand, which is where most margin leaks.
              </p>
              <h3>Do you generate GST invoices and e-way bills?</h3>
              <p>
                Yes. HSN codes, correct CGST / SGST / IGST splits by place of supply, GSTIN validation, and e-invoice IRN with QR code through the government APIs. E-way bills are raised automatically above the threshold, and we produce GSTR-1 and GSTR-3B ready exports for your CA.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          defaultService="Custom Software / CRM / ERP"
          heading="Come and see it bill."
          body="Tell us what you sell and how many locations you hold stock in. We'll visit your counter in Kanpur, show you the billing screen running, and send a fixed quote — no upfront payment."
        />
      </SubPageLayout>
    </>
  );
}
