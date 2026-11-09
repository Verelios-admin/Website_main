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
import { US_PRICING } from '@/lib/us';

// Phase 17 (2026-11-10). Niche: Shopify / BigCommerce / Amazon brands hiring
// customer experience associates. Honest about built-in helpdesk AI: we position
// as the custom layer for brands whose rules and systems don't fit it.

const URL_PATH = '/us/ai-customer-service-for-ecommerce';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Customer Service for Shopify Stores',
  description:
    'AI that drafts replies to order-status, sizing, returns and product questions from your own policies and Shopify data. Your team approves. Free 48-hour proof.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Customer Service for Shopify and Online Brands | Verelios Labs',
    description:
      'Routine tickets answered from your own policies, catalog and order data, inside the helpdesk you already use. Test it free on your own past tickets.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI customer service for online stores' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'Does it work with Gorgias, Zendesk or Help Scout?',
    'Yes. The assistant reads new tickets and writes its draft reply inside the helpdesk you already use, through that helpdesk’s API, so your team keeps the same queue, macros and reporting. If you answer from a shared inbox instead, it works there too.',
  ],
  [
    'Will it reply to customers on its own?',
    'Only if you want it to. Most brands start with drafts that an agent approves with one click. Once you trust it on a category, such as order status, you can let it send those automatically and keep approval on everything else.',
  ],
  [
    'Our helpdesk already has an AI agent. Why build a custom one?',
    'Built-in AI agents are the right choice when your questions are standard and your data lives in one place. A custom assistant makes sense when your answers depend on rules or systems the built-in agent cannot see, such as a subscription app, a 3PL’s stock levels, wholesale terms or a returns process with exceptions, or when per-resolution fees add up at your volume.',
  ],
  [
    'How does it learn our brand voice and policies?',
    'From your own material: past replies your team is proud of, your return and shipping policies, size guides, product pages and macros. It answers only from that material and your live order data, and it says so when it does not know rather than inventing an answer.',
  ],
  [
    'Can it handle returns, exchanges and refunds?',
    'It can explain your policy, check the order date and items against it, and prepare the return or exchange for an agent to approve. Refunds and anything involving money stay with a person unless you decide otherwise.',
  ],
  [
    'What about Black Friday and holiday peaks?',
    'This is where it pays off most. The assistant handles the surge of where-is-my-order and sizing questions the same day, so your team can focus on damaged items, VIP customers and anything unusual, without hiring temporary staff for six weeks.',
  ],
  [
    'How much does it cost?',
    `The 48-hour proof on your own past tickets is free. A pilot covering one ticket category, such as order status, starts at ${US_PRICING.pilotFrom}. A typical build covering your main categories with your store, helpdesk and returns app connected is ${US_PRICING.buildRange}, fixed up front. AI usage is quoted for your ticket volume before you commit.`,
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI customer service automation',
  name: 'AI customer service for Shopify and online brands',
  description:
    'A custom AI assistant that drafts replies to e-commerce support tickets (order status, sizing, product questions, returns and exchanges) from the brand’s own policies, catalog and order data, inside its existing helpdesk, with an agent approving.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'E-commerce and direct-to-consumer brands' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: US_PRICING.pilotFromNumber },
    description: `Free 48-hour proof on your own past tickets. Pilots from ${US_PRICING.pilotFrom}; typical builds ${US_PRICING.buildRange}.`,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}/us` },
    { '@type': 'ListItem', position: 3, name: 'AI customer service for online stores', item: `${SITE}${URL_PATH}` },
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

const TICKETS: Array<[string, string]> = [
  ['Where is my order?', 'Looks up the order and its tracking, explains the delay in plain words and gives a realistic date.'],
  ['Sizing and fit', 'Answers from your size guide, product measurements and the notes your team has written over the years.'],
  ['Product questions', 'Materials, care, compatibility and stock, from your product pages and catalog data, not guesswork.'],
  ['Returns and exchanges', 'Checks the order against your policy and prepares the return or exchange for an agent to approve.'],
  ['Order changes', 'Address changes, cancellations and subscription skips, prepared for approval before the order ships.'],
  ['Everything else', 'Damaged items, complaints and VIP customers go straight to a person, with the order already summarized.'],
];

export default function UsEcommerceCxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI customer service · For US businesses"
          title="AI customer service"
          highlight="for Shopify and online brands."
          lead="Routine tickets answered from your own policies, catalog and order data, inside the helpdesk you already use. Your agents approve the drafts and keep the conversations that need a person. Test it free on your own past tickets."
          ctaLabel="Test it on my past tickets"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: '/us' },
            { label: 'AI customer service', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  AI customer service for an online store means an assistant that reads each new ticket, looks up the order, checks your policies and drafts the reply, so your team approves answers instead of writing them. It handles the questions that fill most queues: where is my order, sizing and fit, product details, returns, exchanges and order changes. It works inside Gorgias, Zendesk, Help Scout or a shared inbox, answers only from your own policies, catalog and live order data, and hands damaged items, complaints and VIP customers straight to a person. Verelios Labs builds these assistants for US Shopify, BigCommerce and Amazon brands. You start with a free 48-hour proof on your own past tickets. A pilot covering one ticket category starts at {US_PRICING.pilotFrom}, a typical build costs {US_PRICING.buildRange}, the price is fixed up front, and you own the code and data.
                </p>
              </div>

              <h2>Why the support queue keeps growing</h2>
              <p>
                Every new order creates a chance of a ticket, and most of those tickets ask the same few things. As a brand grows, the usual answer is another customer experience associate, plus temporary help for the holiday peak. In the US, customer service representatives earn a median of $21.53 an hour before benefits, according to the Bureau of Labor Statistics, and the hard part is not the wage but training someone on every product and policy before the busy season.
              </p>

              <h2>Tickets the assistant handles</h2>
            </Prose>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '28px 0 8px' }}>
              {TICKETS.map(([title, desc]) => (
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
                Your store (Shopify, BigCommerce or Amazon Seller Central), your helpdesk (Gorgias, Zendesk, Help Scout or a shared inbox), and the apps your answers depend on, such as a returns portal, a subscription app or your 3PL’s tracking. Each connection goes through that product’s API, and the assistant only reads what it needs to answer the ticket in front of it.
              </p>

              <h2>Hire, built-in helpdesk AI, or a custom assistant?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>How it is paid</th><th>Main limit</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Another CX associate</td>
                      <td>Wage and benefits, plus seasonal temps</td>
                      <td>Weeks of training before peak season</td>
                      <td>Conversations that need empathy and judgment</td>
                    </tr>
                    <tr>
                      <td>Your helpdesk’s built-in AI agent</td>
                      <td>Usually a fee per resolved ticket</td>
                      <td>Sees only the data and rules the helpdesk can reach</td>
                      <td>Standard questions with one source of truth</td>
                    </tr>
                    <tr>
                      <td>Custom AI assistant (Verelios Labs)</td>
                      <td>{US_PRICING.pilotFrom} pilot or {US_PRICING.buildRange} build, plus AI usage</td>
                      <td>A short pilot to tune answers on your tickets</td>
                      <td>Brands whose answers depend on several systems or custom rules</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How a project runs</h2>
              <ol>
                <li><strong>Free 48-hour proof.</strong> Send a sample of past tickets with customer names removed. We show the drafts the assistant would have written.</li>
                <li><strong>Fixed quote.</strong> Which ticket categories, which systems, the approval rules, the timeline and the monthly running cost.</li>
                <li><strong>Pilot in two to four weeks.</strong> One category, usually order status, drafted for your agents to approve.</li>
                <li><strong>Expand before peak.</strong> More categories, and automatic sending only where you have seen it get the answer right.</li>
              </ol>

              <h2>What it costs</h2>
              <p>
                <strong>The 48-hour proof is free.</strong> A pilot covering one ticket category starts at <strong>{US_PRICING.pilotFrom}</strong>. A typical build with your store, helpdesk and returns app connected is <strong>{US_PRICING.buildRange}</strong>, fixed before work starts and paid 30%, 30% and 40%. AI usage depends on ticket volume and is quoted up front. Weighing it against a hire? Read <Link href="/blog/hire-customer-service-rep-or-ai-2026">customer service rep or AI: the 2026 cost guide</Link>.
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
          submitLabel="Test it on my past tickets"
          heading="See your own tickets answered in 48 hours."
          body="Tell us your store platform, your helpdesk and roughly how many tickets you get a week. The proof is free, and we reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
