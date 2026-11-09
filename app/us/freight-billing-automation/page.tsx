import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { UsWorkingWithUs } from '@/components/us/UsWorkingWithUs';
import { UsProof } from '@/components/us/UsProof';
import { UsMoreLinks } from '@/components/us/UsMoreLinks';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';
import { US_PRICING } from '@/lib/us';

// Phase 17 (2026-11-10). Niche: small carriers, freight brokers and 3PLs hiring
// billing clerks. The pitch is same-day invoicing from paperwork, approved by a
// person — never "fully automated billing".

const URL_PATH = '/us/freight-billing-automation';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Freight Billing Automation with AI',
  description:
    'AI reads rate confirmations, BOLs and PODs, matches them to the load and drafts the invoice for approval. For carriers, brokers and 3PLs. Free 48-hour proof.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Freight Billing Automation for Trucking Companies and Brokers | Verelios Labs',
    description:
      'Driver paperwork, rate confirmations and carrier invoices matched to the load, with invoices drafted the day the POD arrives. Your billing team approves each one.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — freight billing automation' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'What is freight billing automation?',
    'It is software that reads the paperwork behind each load, such as the rate confirmation, bill of lading, proof of delivery and accessorial receipts, matches it to the load in your TMS, checks the amounts and drafts the customer invoice with the documents attached, so your billing team approves invoices instead of building them by hand.',
  ],
  [
    'Which TMS and accounting systems does it work with?',
    'We connect through the API of your TMS or accounting system where one exists, for example McLeod, Aljex, Rose Rocket, AscendTMS or QuickBooks. Where there is no API, the assistant prepares an import file or a ready-to-send invoice packet instead. We confirm the route for your exact setup during the free proof.',
  ],
  [
    'Can it read blurry PODs and photos from drivers?',
    'Usually, yes. Modern AI models read phone photos and scans far better than older OCR. When a signature, date or count is unreadable or missing, the load is flagged for a person with the reason, and the invoice is not drafted until it is resolved.',
  ],
  [
    'Does it handle detention, lumper and other accessorials?',
    'Yes. It reads the receipts and notes, checks each charge against what the rate confirmation allows, and adds it to the invoice draft with the supporting document. Charges that are not covered by the rate confirmation are flagged for your team to approve or dispute.',
  ],
  [
    'We are a freight broker. Can it check carrier invoices too?',
    'Yes. On the payables side it compares each carrier invoice with the rate confirmation and the load record, and flags differences in rate, accessorials or quantities before anyone pays, which is the same check a billing clerk does by eye today.',
  ],
  [
    'We use a factoring company. Does that change anything?',
    'No. The assistant can prepare the packet your factor needs, with the invoice, rate confirmation, BOL and POD in the right order, so it is ready to submit the same day the paperwork arrives.',
  ],
  [
    'How much does it cost?',
    `The 48-hour proof on ten of your real loads is free. A pilot covering one billing workflow starts at ${US_PRICING.pilotFrom}, and a typical build with your TMS, accounting system and an approval screen is ${US_PRICING.buildRange}, fixed before work starts. Running costs are quoted up front for your load volume.`,
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Freight billing automation',
  name: 'Freight billing automation for trucking companies, brokers and 3PLs',
  description:
    'An AI assistant that reads rate confirmations, bills of lading, proofs of delivery and accessorial receipts, matches them to the load, checks the charges and drafts invoices or carrier-invoice audits for a billing team to approve.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Trucking companies, freight brokers and 3PLs' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: US_PRICING.pilotFromNumber },
    description: `Free 48-hour proof on 10 real loads. Pilots from ${US_PRICING.pilotFrom}; typical builds ${US_PRICING.buildRange}.`,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}/us` },
    { '@type': 'ListItem', position: 3, name: 'Freight billing automation', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible FAQ below, verbatim (both render from FAQS).
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const STEPS: Array<[string, string]> = [
  ['Collects the paperwork', 'Rate confirmations, BOLs, PODs and receipts from email, your driver app or a scanning inbox, in any format.'],
  ['Matches it to the load', 'By load number, PO, BOL number, shipper and dates, so every document lands on the right load in your TMS.'],
  ['Checks the money', 'Line haul, fuel surcharge and accessorials against the rate confirmation, with anything not covered flagged.'],
  ['Spots what is missing', 'No signature, a short count, a missing lumper receipt: the load is held with the reason, not billed wrong.'],
  ['Drafts the invoice', 'With the supporting documents attached, ready for your billing team to approve and send, or to submit to your factor.'],
  ['Audits carrier invoices', 'For brokers: each carrier invoice compared with the rate confirmation and the load before anyone pays.'],
];

export default function UsFreightBillingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Freight billing · For US businesses"
          title="Freight billing automation"
          highlight="for trucking companies and brokers."
          lead="Rate confirmations, BOLs and PODs are matched to the load, the charges are checked, and the invoice is drafted the day the paperwork arrives. Your billing team approves instead of building each one by hand. Test it free on ten of your loads."
          ctaLabel="Test it on 10 of my loads"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: '/us' },
            { label: 'Freight billing automation', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  Freight billing automation uses AI to read the paperwork behind every load, the rate confirmation, bill of lading, proof of delivery and accessorial receipts, match it to the load in your TMS, check the charges and draft the invoice with the documents attached. Your billing team approves each invoice instead of building it by hand, and loads with a missing signature, a short count or an uncovered charge are flagged with the reason. For freight brokers the same assistant audits carrier invoices against the rate confirmation before anyone pays. Verelios Labs builds these assistants for US trucking companies, brokers and 3PLs. You start with a free 48-hour proof on ten of your real loads. A pilot covering one billing workflow starts at {US_PRICING.pilotFrom}, a typical build costs {US_PRICING.buildRange}, the price is fixed up front, and you own the code and data.
                </p>
              </div>

              <h2>Why billing falls behind</h2>
              <p>
                A load is not finished when it is delivered; it is finished when it is invoiced and paid. In between, someone has to chase the POD, read a blurry photo, match it to the right load, check detention and lumper charges against the rate confirmation and build the invoice. When the paperwork piles up, invoices go out days late and cash comes in later. The usual fix is another billing clerk; in the US, billing and posting clerks earn a median of $48,500 a year before benefits, according to the Bureau of Labor Statistics.
              </p>

              <h2>What the assistant does</h2>
            </Prose>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '28px 0 8px' }}>
              {STEPS.map(([title, desc]) => (
                <div
                  key={title}
                  style={{ padding: 20, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px', color: '#fff' }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>

            <Prose>
              <h2>What it connects to</h2>
              <p>
                Your TMS through its API where it has one, your accounting system such as QuickBooks, the inbox or driver app where paperwork arrives, and your factoring company’s submission format if you factor. Where a system has no API, the assistant prepares an import file or a complete invoice packet, so your current software stays exactly as it is.
              </p>

              <h2>Billing clerk, TMS add-on or an AI assistant?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>How it is paid</th><th>Main limit</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Another billing clerk</td>
                      <td>Salary and benefits</td>
                      <td>Paperwork still waits for whoever has time; the job grows with volume</td>
                      <td>Customers with unusual billing rules on every load</td>
                    </tr>
                    <tr>
                      <td>Your TMS’s document add-on</td>
                      <td>A monthly fee per user or per document</td>
                      <td>Works only inside that TMS and its supported document types</td>
                      <td>Fleets already standardized on one TMS module</td>
                    </tr>
                    <tr>
                      <td>Custom AI billing assistant (Verelios Labs)</td>
                      <td>{US_PRICING.pilotFrom} pilot or {US_PRICING.buildRange} build, plus a small running cost</td>
                      <td>A short pilot to learn your customers’ billing rules</td>
                      <td>Carriers and brokers whose paperwork arrives in every format</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How a project runs</h2>
              <ol>
                <li><strong>Free 48-hour proof.</strong> Send the paperwork for ten real loads. We show each one matched, checked and drafted as an invoice.</li>
                <li><strong>Fixed quote.</strong> The systems it connects to, your approval rules, the timeline and the monthly running cost.</li>
                <li><strong>Pilot in two to four weeks.</strong> One customer or lane first; the assistant drafts and your billing team approves.</li>
                <li><strong>Roll out.</strong> All customers, carrier invoice audits for brokers, and factoring packets once the pilot holds up.</li>
              </ol>

              <h2>What it costs</h2>
              <p>
                <strong>The 48-hour proof is free.</strong> A pilot covering one billing workflow starts at <strong>{US_PRICING.pilotFrom}</strong>. A typical build with your TMS, accounting system and an approval screen is <strong>{US_PRICING.buildRange}</strong>, fixed before work starts and paid 30%, 30% and 40%. Running costs depend on load volume and are quoted up front.
              </p>
            </Prose>

            <UsWorkingWithUs />

            <Prose>
              <UsProof />

              <h2>Frequently asked questions</h2>
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </Prose>

            <UsMoreLinks exclude={URL_PATH} />
          </div>
        </section>

        <ClosingCta
          market="us"
          defaultService="AI Automation / Chatbot"
          submitLabel="Test it on 10 of my loads"
          heading="Send ten loads of paperwork. See the invoices in 48 hours."
          body="Tell us your TMS, how you invoice today and roughly how many loads you run a week. The proof is free, and we reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
