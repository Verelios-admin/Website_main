import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/billing-inventory-software';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Billing & Inventory Software Development in India',
  description:
    'Custom GST billing and inventory software — fast invoicing, live stock, e-way bills, barcode scanning and reports your CA accepts. You own the code.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Custom GST Billing & Inventory Software Development in India | Verelios Labs',
    description:
      'GST invoicing, real-time stock across godowns, e-way bills, barcode scanning and Tally sync — built around how your business actually bills. You own the code.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Billing & Inventory Software Development in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Billing and Inventory Software Development',
  name: 'Custom GST Billing & Inventory Software Development',
  description:
    'Custom billing and inventory software for Indian shops, distributors and manufacturers — GST-compliant invoicing, real-time stock across godowns, batch and expiry tracking, barcode scanning, e-way bills, purchase and sales registers, and Tally integration.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'India' },
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Billing & Inventory Software', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible "Frequently asked questions" Q&A below, verbatim, so the
// page is eligible for FAQ rich results and AI-answer citation.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom billing and inventory software cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-location billing and stock system starts at ₹99,999. Multi-godown inventory with batch and expiry tracking, barcode scanning, e-way bill generation and Tally sync typically lands between ₹1,50,000 and ₹5,00,000 depending on the number of locations and integrations. It is a one-time build with a fixed quote and milestone payments (30/30/40), not a per-user monthly licence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the invoicing GST compliant, and does it generate e-way bills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Invoices carry HSN or SAC codes, correct CGST / SGST / IGST splits based on place of supply, GSTIN validation and the mandatory fields for a tax invoice. We integrate the e-way bill and e-invoice APIs so bills above the threshold generate an IRN and QR code automatically, and we produce GSTR-1 and GSTR-3B ready exports for your CA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it replace Tally, or does it work alongside it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Either. Most clients keep Tally for final accounts because their CA is comfortable there, and use our system for the operational side — billing, stock, purchase and sales — with a clean two-way sync so vouchers flow into Tally without re-entry. Some replace Tally entirely once the accounting module is added. We recommend based on what your CA actually needs, not on what is more work for us.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it work with a barcode scanner and thermal printer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Barcode and QR scanning works at billing, goods-receipt and stock-audit points with any standard USB or Bluetooth scanner. We support 2-inch and 3-inch thermal receipt printers as well as A4 and A5 invoice formats, and can generate and print barcode labels for your own products including batch and MRP.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take, and will it work offline if the internet drops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-location system ships in 4 to 6 weeks; multi-location with batch tracking and integrations takes 8 to 12 weeks. For counters where connectivity is unreliable we build an offline-first billing screen that queues invoices locally and syncs automatically when the connection returns, so the counter never stops.',
      },
    },
  ],
};

export default function BillingInventorySoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Billing & inventory software · India"
          title="Billing and stock"
          highlight="that finally agree with each other."
          lead="Verelios Labs builds custom GST billing and inventory software for Indian shops, distributors and manufacturers — fast invoicing, live stock across godowns, e-way bills, barcode scanning and reports your CA accepts. You own the code."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Billing & Inventory Software', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The problem is almost never the billing</h2>
              <p>
                Nearly every business we talk to can produce an invoice. What they cannot do is answer &ldquo;how much of this item do we actually have, right now, across all locations&rdquo; without someone walking to the godown. Billing software and stock reality drift apart because sales, purchase, returns and damages get recorded in different places, at different times, by different people.
              </p>
              <p>
                <strong>Custom billing and inventory software</strong> closes that gap by making the invoice the thing that moves the stock — one entry, one source of truth. We are a team of <strong>billing and inventory software developers based in Govind Nagar, Kanpur</strong>, building for retailers, wholesalers, distributors and manufacturing units across Uttar Pradesh and all of India.
              </p>

              <h2>What we build</h2>
              <ul>
                <li><strong>GST invoicing</strong> — HSN / SAC codes, correct CGST / SGST / IGST split by place of supply, GSTIN validation, and A4, A5 or thermal print formats.</li>
                <li><strong>E-invoice &amp; e-way bill</strong> — IRN and QR generation through the government APIs, e-way bills raised automatically above the threshold.</li>
                <li><strong>Real-time inventory</strong> — stock by item across multiple godowns and counters, updated the moment a bill is raised or goods are received.</li>
                <li><strong>Batch, serial &amp; expiry tracking</strong> — essential for pharma, food and chemicals; FIFO and FEFO issue, expiry alerts before stock becomes dead.</li>
                <li><strong>Barcode &amp; QR</strong> — scanning at billing, goods receipt and audit, plus label generation with batch and MRP for your own products.</li>
                <li><strong>Purchase &amp; vendors</strong> — purchase orders, goods-received notes, vendor ledgers and three-way matching against invoices.</li>
                <li><strong>Receivables &amp; credit control</strong> — customer ledgers, credit limits, ageing reports and automatic WhatsApp payment reminders.</li>
                <li><strong>Multi-rate &amp; scheme pricing</strong> — wholesale, retail and party-wise rates, discount slabs, and free-quantity schemes handled without manual overrides.</li>
                <li><strong>Reports</strong> — sales and purchase registers, GSTR-ready exports, fast and slow movers, stock valuation and the daily numbers the owner checks on a phone.</li>
              </ul>

              <h2>Where packaged billing products fall short</h2>
              <p>
                Tally, Vyapar, Marg and Busy do a lot right, and for a straightforward trading business they are often the correct and cheaper answer. We will say so. The point where custom becomes worth it is usually one of these:
              </p>
              <ul>
                <li>Your pricing has genuine logic — party-wise rates, slab discounts, scheme quantities — that the product cannot express, so staff override prices manually.</li>
                <li>You manufacture as well as trade, so raw material has to convert into finished goods and the packaged product only understands buy-and-sell.</li>
                <li>Multiple locations that need one live stock view, not a nightly export.</li>
                <li>You want billing tied into a website or app — orders from customers landing straight into the same stock.</li>
                <li>Per-user licences are stacking up and you are still exporting to Excel for the report you actually wanted.</li>
              </ul>

              <h2>How a billing project runs</h2>
              <ol>
                <li><strong>Week 1 — watch the counter.</strong> We stand at your billing point and in your godown and record how it actually works, including the shortcuts staff take. No code yet.</li>
                <li><strong>Week 1 — blueprint &amp; fixed quote.</strong> Screens, stock rules, print formats and integrations on one page, with a fixed price and monthly hosting cost. You approve before we build.</li>
                <li><strong>Week 2–8 — build.</strong> Staging environment your billing staff can test on real items, WhatsApp updates, weekly reviews.</li>
                <li><strong>Opening stock &amp; migration.</strong> We import your item master, parties and opening balances from Tally or Excel, and reconcile before go-live.</li>
                <li><strong>Parallel run &amp; counter training.</strong> Both systems for a week. Billing staff are trained at the counter, not in a meeting room — speed at the counter is the thing that decides whether the software gets used.</li>
                <li><strong>+30 days support included.</strong></li>
              </ol>

              <h2>Built for the counter, not the demo</h2>
              <p>
                A billing screen is judged on one thing: how fast a trained person can raise a bill with a customer waiting. Ours is keyboard-first — item search, quantity, rate and save without touching the mouse — because that is how billing staff actually work. Where connectivity is unreliable we build the counter <strong>offline-first</strong>, queuing invoices locally and syncing when the line comes back, so a broadband outage never stops sales.
              </p>

              <h2>What you own on day one</h2>
              <ul>
                <li><strong>Full source code</strong> in a GitHub repo under your organisation — no vendor lock-in, no per-user licence.</li>
                <li><strong>Hosted on your account</strong>, or on-premise if you prefer stock and sales data to stay in the building. We can also <a href="/services/web-hosting">manage the hosting</a>.</li>
                <li><strong>Role-based access</strong> — owner, manager, biller and storekeeper, so rates and margins are not visible to everyone.</li>
                <li><strong>Audit log</strong> — every rate change, discount and stock adjustment recorded with who and when.</li>
                <li><strong>Daily backups</strong> and point-in-time recovery on Postgres.</li>
              </ul>

              <h2>Pricing for billing &amp; inventory software in India</h2>
              <p>
                A single-location billing and stock system starts at <strong>₹99,999</strong>. Multi-godown inventory with batch and expiry tracking, barcode scanning, e-way bills and Tally sync typically lands between <strong>₹1,50,000 and ₹5,00,000</strong>, with a fixed quote up front and milestone payments (30/30/40). If you also need production, HR and accounting in the same system, that is our <a href="/services/erp">custom ERP software</a> service — billing and inventory is usually its first module.
              </p>
              <p>
                Based in Kanpur? See our dedicated <a href="/locations/kanpur/billing-inventory-software">billing &amp; inventory software company in Kanpur</a> page — we can come to your shop or godown and watch how you bill before quoting.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom billing and inventory software cost in India?</h3>
              <p>
                A single-location billing and stock system starts at ₹99,999. Multi-godown inventory with batch and expiry tracking, barcode scanning, e-way bill generation and Tally sync typically lands between ₹1,50,000 and ₹5,00,000 depending on the number of locations and integrations. It is a one-time build with a fixed quote and milestone payments (30/30/40), not a per-user monthly licence.
              </p>
              <h3>Is the invoicing GST compliant, and does it generate e-way bills?</h3>
              <p>
                Yes. Invoices carry HSN or SAC codes, correct CGST / SGST / IGST splits based on place of supply, GSTIN validation and the mandatory fields for a tax invoice. We integrate the e-way bill and e-invoice APIs so bills above the threshold generate an IRN and QR code automatically, and we produce GSTR-1 and GSTR-3B ready exports for your CA.
              </p>
              <h3>Can it replace Tally, or does it work alongside it?</h3>
              <p>
                Either. Most clients keep Tally for final accounts because their CA is comfortable there, and use our system for the operational side — billing, stock, purchase and sales — with a clean two-way sync so vouchers flow into Tally without re-entry. Some replace Tally entirely once the accounting module is added. We recommend based on what your CA actually needs, not on what is more work for us.
              </p>
              <h3>Does it work with a barcode scanner and thermal printer?</h3>
              <p>
                Yes. Barcode and QR scanning works at billing, goods-receipt and stock-audit points with any standard USB or Bluetooth scanner. We support 2-inch and 3-inch thermal receipt printers as well as A4 and A5 invoice formats, and can generate and print barcode labels for your own products including batch and MRP.
              </p>
              <h3>How long does it take, and will it work offline if the internet drops?</h3>
              <p>
                A single-location system ships in 4 to 6 weeks; multi-location with batch tracking and integrations takes 8 to 12 weeks. For counters where connectivity is unreliable we build an offline-first billing screen that queues invoices locally and syncs automatically when the connection returns, so the counter never stops.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />

        <RelatedServices exclude="billing-inventory-software" />

        <ClosingCta
          defaultService="Custom Software / CRM / ERP"
          heading="Make the invoice move the stock."
          body="Tell us how you bill today and how many locations you hold stock in. We'll set up a free scoping call, then follow up with a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
