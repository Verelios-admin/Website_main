import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { UsWorkingWithUs } from '@/components/us/UsWorkingWithUs';
import { UsProof } from '@/components/us/UsProof';
import { UsMoreLinks } from '@/components/us/UsMoreLinks';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';
import { US_CALCULATOR_PATH, US_CONTACT_EMAIL, US_PRICING, US_WHATSAPP_HREF, usMailto } from '@/lib/us';

// Phase 17 (2026-11-10). Lead niche: distributors and manufacturers hiring order
// entry clerks. This is the page the "hiring trigger" cold emails point at.

const URL_PATH = '/us/ai-order-entry-automation';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Order Entry Automation for Distributors',
  description:
    'AI that turns emailed orders and PDF purchase orders into draft sales orders in your ERP, for your team to approve. Free 48-hour proof on 10 real orders.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Order Entry Automation for Distributors | Verelios Labs',
    description:
      'Emailed orders, PDF purchase orders and spreadsheets become draft sales orders in your ERP. Your team approves each one. Free 48-hour proof on your own orders.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI order entry automation' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'What is AI order entry automation?',
    'It is software that reads incoming orders the way a person would, from emails, PDF purchase orders, spreadsheets and scanned forms, pulls out the customer, ship-to address, PO number, items, quantities and dates, matches them to your products and prices, and creates a draft sales order in your system for someone to approve.',
  ],
  [
    'Which ERP and accounting systems does it work with?',
    'We connect through the API of systems such as QuickBooks, NetSuite, Acumatica, Epicor Prophet 21, Sage and SAP Business One. If your system has no API, the assistant prepares an import file in the format your system already accepts. We confirm the exact route for your setup during the free 48-hour proof.',
  ],
  [
    'Can it read scanned or messy purchase orders?',
    'Yes. Modern AI models read any layout, so a new customer’s PO format does not need a new template. Very poor scans or handwriting are flagged for a person instead of guessed. The free proof uses your real orders, so you see how it handles the messy ones before you decide.',
  ],
  [
    'What about customer part numbers that differ from our SKUs?',
    'The assistant uses a cross-reference table of customer part numbers to your SKUs, built from your past orders. When it meets a part number it has not seen, it suggests the closest match and asks your team to confirm, and that answer is remembered next time.',
  ],
  [
    'How accurate is it, and who checks the orders?',
    'Every draft order goes to an approval screen, and a person on your team confirms it before it is created. The assistant flags anything it is unsure about, such as an unknown item, a price that does not match the customer’s price list or a missing ship date, instead of guessing. During the pilot it runs alongside your current process so you can measure its accuracy on your own orders.',
  ],
  [
    'We already use EDI. Is this still useful?',
    'Usually, yes. EDI covers your largest customers; the orders that still arrive by email, PDF or phone notes are the ones your team keys in by hand. The assistant handles that remainder, which is often most of the order count for a small or mid-sized distributor.',
  ],
  [
    'How much does it cost?',
    `The 48-hour proof is free. A pilot with one order inbox connected starts at ${US_PRICING.pilotFrom}, and a typical build with your ERP, price lists and an approval screen is ${US_PRICING.buildRange}, fixed before work starts. Hosting and AI usage are quoted up front, usually tens to a few hundred dollars a month depending on order volume.`,
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Order entry automation',
  name: 'AI order entry automation for distributors and manufacturers',
  description:
    'An AI assistant that reads orders from email, PDF purchase orders and spreadsheets, matches items and prices, and creates draft sales orders in the client’s ERP for a person to approve.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'Wholesale distributors and manufacturers' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: US_PRICING.pilotFromNumber },
    description: `Free 48-hour proof on 10 real orders. Pilots from ${US_PRICING.pilotFrom}; typical builds ${US_PRICING.buildRange}.`,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}/us` },
    { '@type': 'ListItem', position: 3, name: 'AI order entry automation', item: `${SITE}${URL_PATH}` },
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
  ['Reads every order', 'Emails, PDF purchase orders, spreadsheets and scanned forms, in any layout, from the inbox your team already uses.'],
  ['Pulls out the details', 'Customer, ship-to, PO number, line items, quantities, units and requested dates, the fields your team types today.'],
  ['Matches your catalog', 'Customer part numbers to your SKUs, quantities to your units of measure, and prices against each customer’s price list.'],
  ['Flags the exceptions', 'Unknown items, price mismatches, missing dates or credit holds go to a person with the reason, instead of being guessed.'],
  ['Drafts the sales order', 'A ready-to-approve order in your ERP or an import file, plus an optional confirmation email back to the customer.'],
  ['Learns from corrections', 'When your team fixes a match, the cross-reference is updated, so the same correction is not needed twice.'],
];

export default function UsOrderEntryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI order entry · For US businesses"
          title="AI order entry automation"
          highlight="for distributors and manufacturers."
          lead="Orders that arrive by email, PDF or spreadsheet become draft sales orders in your ERP, matched to your SKUs and prices. Your team approves each one instead of typing it. Test it free on ten of your real orders."
          ctaHref={usMailto('Order entry: free 48-hour proof')}
          ctaLabel={`Email ${US_CONTACT_EMAIL}`}
          whatsappHref={US_WHATSAPP_HREF}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: '/us' },
            { label: 'AI order entry', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  AI order entry automation reads the orders your team keys in by hand, from emails, PDF purchase orders, spreadsheets and scanned forms, and turns them into draft sales orders in your ERP. It pulls out the customer, ship-to, PO number, items, quantities and dates, matches customer part numbers to your SKUs, checks prices against each customer’s price list, and flags anything unusual for a person. Your team approves each order instead of typing it, so a job that takes several minutes per order becomes a quick check. Verelios Labs builds these assistants for US distributors and manufacturers. You start with a free 48-hour proof on ten of your real orders. A pilot with one order inbox connected starts at {US_PRICING.pilotFrom}, a typical build costs {US_PRICING.buildRange}, the price is fixed up front, and you own the code and data.
                </p>
              </div>

              <h2>Why order entry is still done by hand</h2>
              <p>
                Most distributors already have EDI or a customer portal for their largest accounts. The rest of the orders, often the majority by count, still arrive as an email with a PDF attached, a spreadsheet, a photo of a handwritten list or a forwarded message. Someone reads each one, finds the customer, looks up the items, fixes the units, checks the price and types it into the ERP. When volume grows, the usual answer is another order entry clerk. In the US that role has a median wage of $46,170 a year before benefits, according to the Bureau of Labor Statistics.
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
                The assistant works through the API of the system you already run, such as QuickBooks, NetSuite, Acumatica, Epicor Prophet 21, Sage or SAP Business One. If your system has no API, it produces an import file in the format your system already accepts, so nothing about your ERP has to change. It reads from the shared order inbox your team uses today, and confirmations can go back to the customer from the same address.
              </p>

              <h2>Manual entry, template OCR or an AI assistant?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Approach</th><th>How it works</th><th>Where it breaks</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Manual entry</td>
                      <td>A person reads and types every order</td>
                      <td>Volume growth means another hire; typos at the end of a long day</td>
                      <td>A handful of orders a day</td>
                    </tr>
                    <tr>
                      <td>Template-based OCR</td>
                      <td>A template is set up for each customer’s PO layout</td>
                      <td>A new customer or a changed layout needs a new template</td>
                      <td>A few large customers with fixed forms</td>
                    </tr>
                    <tr>
                      <td>EDI</td>
                      <td>Orders arrive as structured data from the customer’s system</td>
                      <td>Small customers will not set it up</td>
                      <td>Your largest, most regular accounts</td>
                    </tr>
                    <tr>
                      <td>AI order assistant (Verelios Labs)</td>
                      <td>Reads any layout, matches items and prices, drafts the order for approval</td>
                      <td>Needs a short pilot to learn your part numbers and rules</td>
                      <td>Everything that still arrives by email, PDF or spreadsheet</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How a project runs</h2>
              <ol>
                <li><strong>Free 48-hour proof.</strong> You send ten real orders, prices blanked if you like. We show the assistant reading and matching them.</li>
                <li><strong>Fixed quote.</strong> The systems it connects to, the approval screen, the timeline and the monthly running cost, in writing.</li>
                <li><strong>Pilot in two to four weeks.</strong> One order inbox connected. It drafts, your team approves, and you compare it with manual entry.</li>
                <li><strong>Roll out.</strong> More inboxes, quotes and order confirmations once the pilot numbers hold up.</li>
              </ol>

              <h2>What it costs</h2>
              <p>
                <strong>The 48-hour proof is free.</strong> A pilot with one order inbox connected starts at <strong>{US_PRICING.pilotFrom}</strong>. A typical build with your ERP, customer price lists and an approval screen is <strong>{US_PRICING.buildRange}</strong>, fixed before work starts and paid 30%, 30% and 40%. Running costs depend on order volume and are quoted up front. To see what manual entry costs you today, try the free <Link href={US_CALCULATOR_PATH}>order entry cost calculator</Link>, or read our breakdown of <Link href="/blog/order-entry-clerk-vs-ai-cost-2026">an order entry clerk versus AI</Link>.
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
          mailSubject="Order entry: free 48-hour proof"
          defaultService="AI Automation / Chatbot"
          submitLabel="Test it on 10 of my orders"
          heading="Send ten real orders. See them entered in 48 hours."
          body="Tell us roughly how many orders you get a day and which system you use. The proof is free, and we reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
