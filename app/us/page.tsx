import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { UsWorkingWithUs } from '@/components/us/UsWorkingWithUs';
import { UsProof } from '@/components/us/UsProof';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';
import { US_CALCULATOR_PATH, US_HOURS, US_PAGES, US_PRICING } from '@/lib/us';

// Phase 17 (2026-11-10). Hub for US buyers. Every other page on the site is
// written for India (₹, Kanpur, +91); this one and the four niche pages under it
// are the only pages a US owner should land on. Facts come from lib/us.ts.

const URL_PATH = '/us';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Automation Agency for US Small Businesses',
  description:
    'AI assistants that take order entry, billing and customer emails off your team. Free 48-hour proof on your own data, pilots from $1,500, US-hours calls.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Automation for US Small Businesses | Verelios Labs',
    description:
      'Order entry, billing, customer emails and booking requests handled by an AI assistant your team approves. See it work on your own data in 48 hours, free.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI automation for US small businesses' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'Why work with an AI automation team in India?',
    'Price and focus. You get an engineering team that builds AI assistants every week, at a fixed price agreed before work starts, which is below what most US agencies charge for the same build. Calls happen in your morning, the contract and invoices are in US dollars, and you own the code and data outright.',
  ],
  [
    'How does the free 48-hour proof work?',
    'You send ten real examples of the work: orders, tickets, invoices or enquiries, with prices or names blanked out if you prefer. Within 48 hours we show you the assistant handling them, on a call or in a short recording. It costs nothing and you are not committed to anything.',
  ],
  [
    'How much does an AI assistant cost?',
    `The 48-hour proof is free. A pilot with one workflow live starts at ${US_PRICING.pilotFrom}, and a typical build is ${US_PRICING.buildRange}, fixed before work starts and paid in milestones of 30%, 30% and 40%. Running costs for hosting and AI usage are quoted up front; for most small businesses they are tens to a few hundred dollars a month.`,
  ],
  [
    'Will it work with the software we already use?',
    'Usually, yes. We connect through the APIs of common systems such as QuickBooks, NetSuite, Shopify, BigCommerce, Gorgias, Zendesk and ServiceTitan. Where a system has no API, the assistant works through CSV imports or a shared inbox instead. We confirm what is possible with your exact setup during the free proof.',
  ],
  [
    'Is our customer data safe?',
    'We sign a mutual NDA before you share anything. The assistant answers only from your own documents and data, the AI models are used through business APIs whose terms exclude training on your data, and the whole system can run inside your own cloud account.',
  ],
  [
    'What if the AI makes a mistake?',
    'Every assistant we build has an approval step: it drafts, a person checks and sends. It also flags anything it is unsure about instead of guessing. During the pilot it runs alongside your current process, so you can compare its output with your team before you rely on it.',
  ],
  [
    'How long until it is live?',
    'A pilot with one workflow is usually live in two to four weeks. A fuller build that connects several systems typically takes four to eight weeks. Both timelines are written into the fixed quote.',
  ],
  [
    'When can we talk to you?',
    `Calls are ${US_HOURS}, and every email gets a reply within one business day. Write to contact@verelios.com or use the form on this page.`,
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI automation',
  name: 'AI automation for US small businesses',
  description:
    'Custom AI assistants for US small and mid-sized businesses: order entry, freight billing, e-commerce customer service and home-services enquiries, with a free 48-hour proof on the client’s own data and a person approving every action.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: `Free 48-hour proof of concept. Pilots from ${US_PRICING.pilotFrom}; typical builds ${US_PRICING.buildRange}.`,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}${URL_PATH}` },
  ],
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AI automation for US businesses',
  itemListElement: [...US_PAGES.map((p) => ({ name: p.title, path: p.path })), { name: 'Order entry cost calculator', path: US_CALCULATOR_PATH }].map(
    (p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: `${SITE}${p.path}` }),
  ),
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

export default function UsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="For US businesses"
          title="AI automation for US small businesses,"
          highlight="without adding headcount."
          lead="Verelios Labs builds AI assistants that take the repetitive typing off your team: order entry, freight billing, customer emails and booking requests. See it work on your own data in 48 hours, free, before you spend a dollar."
          ctaLabel="Get the free 48-hour proof"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  Verelios Labs is an AI automation team that builds custom AI assistants for US small and mid-sized businesses. We focus on the jobs owners usually hire for: entering orders from emails and PDFs, billing loads from trucking paperwork, answering customer emails for online stores, and replying to service enquiries for HVAC, plumbing and pest-control companies. The assistant drafts the work and a person on your team approves it, so nothing goes out unchecked. You start with a free 48-hour proof: send ten real examples and see the assistant handle them. A pilot with one workflow live starts at {US_PRICING.pilotFrom}, a typical build costs {US_PRICING.buildRange}, the price is fixed before work starts, and you own the code and data. The team is based in Kanpur, India, and takes calls {US_HOURS}.
                </p>
              </div>

              <h2>Four jobs we automate for US businesses</h2>
              <p>
                Each of these is a role many small businesses hire for every year. The assistant does not replace the person who knows your customers; it removes the hours of retyping and routine replies around them.
              </p>
            </Prose>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '28px 0 8px' }}>
              {US_PAGES.map((p) => (
                <Link
                  key={p.path}
                  href={p.path}
                  style={{
                    display: 'block',
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px', color: '#fff' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', margin: 0 }}>{p.blurb}</p>
                </Link>
              ))}
            </div>

            <Prose>
              <h2>How it works, step by step</h2>
              <ol>
                <li><strong>You send ten real examples.</strong> Orders, tickets, invoices or enquiries, exactly as they arrive today. Blank out prices or names if you like.</li>
                <li><strong>Free 48-hour proof.</strong> We show you the assistant handling them, so you judge the quality on your own data, not a demo.</li>
                <li><strong>Fixed quote.</strong> What gets built, what it connects to, the timeline, the price and the monthly running cost, in writing.</li>
                <li><strong>Pilot alongside your team.</strong> The assistant drafts, your people approve. You compare its work with theirs before relying on it.</li>
                <li><strong>Go live and hand over.</strong> Your team learns to use and adjust it. You keep the code, the workflows and the data.</li>
              </ol>

              <h2>Hire another person, buy a tool, or build an assistant?</h2>
              <p>
                There are three honest ways to handle a growing pile of routine work. Each one suits someone.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>What it costs</th><th>Main risk</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hire another person</td>
                      <td>A full salary plus benefits, every year</td>
                      <td>Training time, turnover, and the same job growing again next year</td>
                      <td>Work that needs judgment on almost every item</td>
                    </tr>
                    <tr>
                      <td>Off-the-shelf software</td>
                      <td>A monthly per-seat fee</td>
                      <td>It works the way the vendor decided, not the way your business runs</td>
                      <td>Standard processes that match the template</td>
                    </tr>
                    <tr>
                      <td>Custom AI assistant (Verelios Labs)</td>
                      <td>{US_PRICING.pilotFrom} pilot, {US_PRICING.buildRange} typical build, plus a small running cost</td>
                      <td>Needs a few weeks of pilot before you rely on it</td>
                      <td>High-volume, repetitive work with your own rules and systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>What AI automation costs</h2>
              <p>
                <strong>The 48-hour proof is free.</strong> A pilot with one workflow live starts at <strong>{US_PRICING.pilotFrom}</strong>. A typical build that connects your inbox, your main system and an approval screen costs <strong>{US_PRICING.buildRange}</strong>. The price is fixed before work starts and paid in milestones of 30%, 30% and 40%. Hosting and AI usage are quoted up front, usually tens to a few hundred dollars a month for a small business. Want to see what manual order entry costs you first? Try the free <Link href={US_CALCULATOR_PATH}>order entry cost calculator</Link>.
              </p>
            </Prose>

            <UsWorkingWithUs />

            <Prose>
              <UsProof />

              <h2>When we are not the right fit</h2>
              <ul>
                <li><strong>Low volume.</strong> If the task happens a few times a week, a faster human reply is cheaper than any assistant, and we will say so.</li>
                <li><strong>Phone-first work.</strong> We automate email, web forms, text messages and documents. Live phone answering stays with your people or a specialist phone service.</li>
                <li><strong>A standard tool already fits.</strong> If an off-the-shelf product matches your process, buy it. Custom work pays off when your rules and systems do not fit a template.</li>
              </ul>

              <h2>Frequently asked questions</h2>
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </Prose>
          </div>
        </section>

        <ClosingCta
          market="us"
          defaultService="AI Automation / Chatbot"
          submitLabel="Get the free 48-hour proof"
          heading="See it work on your own data in 48 hours."
          body="Tell us which job eats the most hours in your week. We reply within one business day, and the 48-hour proof is free with no commitment."
        />
      </SubPageLayout>
    </>
  );
}
