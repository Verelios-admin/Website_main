import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { OrderEntryCalculator } from '@/components/us/OrderEntryCalculator';
import { UsMoreLinks } from '@/components/us/UsMoreLinks';
import { SITE } from '@/lib/schema';
import { BLS_SOURCES, US_CONTACT_EMAIL, US_PRICING, US_WHATSAPP_HREF, usMailto } from '@/lib/us';

// Phase 17 (2026-11-10). Free tool page. The worked example in the answer block
// uses the calculator's own defaults (40 orders × 4 min × 250 days, BLS order
// clerk median $46,170 ÷ 2,080 h ≈ $22.20/h, ÷ 0.70 for benefits): recompute it
// by hand if any default changes.

const URL_PATH = '/us/order-entry-cost-calculator';

export const metadata: Metadata = {
  title: 'Order Entry Cost Calculator (Free Tool)',
  description:
    'Work out what manual order entry costs your business each year in hours and dollars, using BLS wage data, and how fast an AI order assistant would pay back.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Order Entry Cost Calculator | Verelios Labs',
    description:
      'Orders per day, minutes per order and wages in; yearly hours, cost and payback out. Free, private, and based on Bureau of Labor Statistics wage data.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — order entry cost calculator' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'Where do the default numbers come from?',
    'The default wage is the median pay for US order clerks, $46,170 a year in May 2025 according to the Bureau of Labor Statistics, divided by 2,080 working hours, which is about $22.20 an hour. The benefits option divides that wage by 0.70, because wages were 70% of private employers’ total compensation cost in June 2026, also according to the BLS. Orders per day and minutes per order are examples; replace them with your own.',
  ],
  [
    'How many minutes does it take to enter one order?',
    'It depends on the order. A two-line repeat order from a known customer can take a minute or two; a forty-line PDF purchase order with customer part numbers can take fifteen. The most reliable number is your own: time your team for one normal day and divide by the number of orders.',
  ],
  [
    'Does the payback figure include running costs?',
    `No. Payback compares a typical build of ${US_PRICING.buildRange} with the value of the hours given back. Hosting and AI usage are extra and are quoted before any project starts; for most small businesses they are tens to a few hundred dollars a month.`,
  ],
  [
    'Is anything I type stored or sent?',
    'No. The calculator runs entirely in your browser. Nothing you enter is saved, sent to us or shared with anyone.',
  ],
  [
    'What share of orders can an AI assistant actually handle?',
    'That is why the share is your input, not ours. Orders from regular customers in a readable format are the easiest; unusual items, new customers and poor scans need a person. The free 48-hour proof on ten of your real orders is the honest way to find your number.',
  ],
];

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${SITE}${URL_PATH}#app`,
  name: 'Order entry cost calculator',
  url: `${SITE}${URL_PATH}`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  description:
    'Estimates the yearly hours and cost of manual order entry from orders per day, minutes per order and hourly wage, using BLS wage data, and the payback period of an AI order entry assistant.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': `${SITE}/#organization` },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}/us` },
    { '@type': 'ListItem', position: 3, name: 'Order entry cost calculator', item: `${SITE}${URL_PATH}` },
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

export default function OrderEntryCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Free tool · For US businesses"
          title="Order entry cost calculator:"
          highlight="what manual entry really costs you."
          lead="Enter how many orders your team keys in, how long each one takes and what you pay. See the yearly hours and dollars, and how quickly an AI order assistant would pay for itself. Nothing you type is stored."
          ctaHref={usMailto('Order entry calculator: free 48-hour proof')}
          ctaLabel={`Email ${US_CONTACT_EMAIL}`}
          whatsappHref={US_WHATSAPP_HREF}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: '/us' },
            { label: 'Order entry cost calculator', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 860, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  The cost of manual order entry is the number of orders your team keys in each day, times the minutes each one takes, times your working days, converted to hours and multiplied by what an hour of that person costs you, including benefits. For example, 40 orders a day at 4 minutes each over 250 working days is about 667 hours a year, a third of a full-time job. At the US median wage for order clerks, about $22.20 an hour according to the Bureau of Labor Statistics, plus benefits, that is roughly $21,100 a year. If an AI assistant drafted 70% of those orders for a person to approve, it would give back about 467 hours, worth around $14,800 a year, and a typical build of {US_PRICING.buildRange} would pay back in roughly two and a half to six and a half months, before running costs. Use the calculator below with your own numbers.
                </p>
              </div>
            </Prose>

            <OrderEntryCalculator />

            <Prose>
              <h2>How the calculator works</h2>
              <ul>
                <li><strong>Hours a year</strong> = orders per day × minutes per order × working days ÷ 60.</li>
                <li><strong>Hourly cost</strong> = the hourly wage, divided by 0.70 if you include benefits and payroll costs.</li>
                <li><strong>Yearly cost</strong> = hours a year × hourly cost. Full-time people = hours a year ÷ 2,080.</li>
                <li><strong>Hours given back</strong> = hours a year × the share of orders the assistant drafts.</li>
                <li><strong>Payback</strong> = a typical build of {US_PRICING.buildRange} ÷ the monthly value of the hours given back.</li>
              </ul>
              <p>
                Sources: median pay for order clerks from the Bureau of Labor Statistics <a href={BLS_SOURCES.orderClerks} target="_blank" rel="noopener noreferrer">Occupational Outlook Handbook</a> (May 2025), and the wage share of compensation from the BLS <a href={BLS_SOURCES.ecec} target="_blank" rel="noopener noreferrer">Employer Costs for Employee Compensation</a> release (June 2026).
              </p>

              <h2>What to do with your number</h2>
              <ul>
                <li><strong>Under about 200 hours a year:</strong> manual entry is probably fine. Tidy the process before buying anything.</li>
                <li><strong>Several hundred hours or more:</strong> an assistant that drafts orders for approval is worth testing. See how it works on our <Link href="/us/ai-order-entry-automation">AI order entry automation</Link> page.</li>
                <li><strong>About to hire another clerk:</strong> compare the full cost of the hire with a pilot first. Our guide to <Link href="/blog/order-entry-clerk-vs-ai-cost-2026">an order entry clerk versus AI</Link> walks through both.</li>
              </ul>

              <h2>Frequently asked questions</h2>
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </Prose>

            <UsMoreLinks />
          </div>
        </section>

        <ClosingCta
          market="us"
          mailSubject="Order entry calculator: free 48-hour proof"
          defaultService="AI Automation / Chatbot"
          submitLabel="Test AI on 10 of my orders"
          heading="Find your real number in 48 hours, free."
          body="Send ten real orders and we will show you the assistant reading and matching them, so you know what share it can actually handle. We reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
