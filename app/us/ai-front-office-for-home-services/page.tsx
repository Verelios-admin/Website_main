import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { UsWorkingWithUs } from '@/components/us/UsWorkingWithUs';
import { UsProof } from '@/components/us/UsProof';
import { UsMoreLinks } from '@/components/us/UsMoreLinks';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';
import { US_CONTACT_EMAIL, US_PRICING, US_WHATSAPP_HREF, usMailto } from '@/lib/us';

// Phase 17 (2026-11-10). Niche: HVAC, plumbing, pest control and other home
// services hiring CSRs, schedulers and dispatchers. Written channels only
// (web, email, text); phones explicitly stay with the client's people.

const URL_PATH = '/us/ai-front-office-for-home-services';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Customer Service for HVAC & Plumbing',
  description:
    'AI answers web, email and texts at any hour, books visits for your team to confirm and sends reminders. Phones stay with your people. Free 48-hour proof.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Front Office for HVAC, Plumbing and Pest Control | Verelios Labs',
    description:
      'Every web form, email and text answered in minutes, visits booked for your team to confirm, and membership reminders sent on time. Phones stay with your people.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI front office for home services' }],
  },
};

const FAQS: Array<[string, string]> = [
  [
    'Does it answer phone calls?',
    'No. We automate the written side of the front office: web forms, emails, text messages and online booking requests. Phone calls stay with your customer service team, who get more time for them because the written enquiries are already handled.',
  ],
  [
    'Does it work with ServiceTitan, Housecall Pro or Jobber?',
    'We connect through the field-service platform’s API where the platform allows it, for example to read open time slots, create a booking request or look up a customer’s membership. Where API access is not available, the assistant works from your booking link, email notifications and a shared calendar instead. We confirm the route for your setup during the free proof.',
  ],
  [
    'Can it book jobs on its own?',
    'It proposes a time from your real availability and creates the booking as a request. Your office confirms it with one click. Once you trust it on simple jobs, such as seasonal tune-ups, you can let it confirm those automatically.',
  ],
  [
    'What happens with emergencies?',
    'Messages that mention a leak, no heat, no cooling, gas, flooding or similar words are treated as urgent. The assistant replies with your emergency instructions and alerts your on-call person immediately by text or email, instead of waiting in a queue.',
  ],
  [
    'Will it quote prices?',
    'Only the prices you choose to publish, such as your diagnostic or dispatch fee, maintenance plan prices or flat-rate items from your price book. Anything that needs a technician to see the job gets a booking, not a guess.',
  ],
  [
    'Will it sound like a robot?',
    'It writes in the tone of your best replies, uses your company name and service area, and keeps messages short and friendly. You review sample replies during the free proof and adjust the wording before anything goes live.',
  ],
  [
    'How much does it cost?',
    `The 48-hour proof on your own past enquiries is free. A pilot covering one channel, usually web forms, starts at ${US_PRICING.pilotFrom}. A typical build with web, email and text, your field-service platform and reminders is ${US_PRICING.buildRange}, fixed before work starts. Running costs, including text-message fees, are quoted up front.`,
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI customer service for home services',
  name: 'AI front office for HVAC, plumbing and pest control companies',
  description:
    'An AI assistant that answers web, email and text enquiries for home-service companies at any hour, proposes visit times from real availability for the office to confirm, escalates emergencies and sends membership and maintenance reminders. Phone calls stay with the company’s staff.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'HVAC, plumbing, electrical and pest control companies' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: US_PRICING.pilotFromNumber },
    description: `Free 48-hour proof on your own past enquiries. Pilots from ${US_PRICING.pilotFrom}; typical builds ${US_PRICING.buildRange}.`,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'For US businesses', item: `${SITE}/us` },
    { '@type': 'ListItem', position: 3, name: 'AI front office for home services', item: `${SITE}${URL_PATH}` },
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

const JOBS: Array<[string, string]> = [
  ['Answers every enquiry fast', 'Web forms, emails and texts get a helpful reply in minutes, including nights and weekends when the office is closed.'],
  ['Proposes a visit time', 'Offers real open slots and creates a booking request your office confirms with one click.'],
  ['Escalates emergencies', 'Leaks, no heat, no cooling and gas mentions trigger your emergency instructions and an instant alert to the on-call person.'],
  ['Keeps members coming back', 'Maintenance and membership reminders, seasonal tune-up notices and renewal nudges sent on schedule.'],
  ['Follows up after the visit', 'A thank-you, the invoice link and a review request, at the moment the customer is happiest.'],
  ['Hands over the rest', 'Complaints, warranty questions and complex quotes go to a person with the customer’s history already summarized.'],
];

export default function UsHomeServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Home services · For US businesses"
          title="An AI front office"
          highlight="for HVAC, plumbing and pest control."
          lead="Every web form, email and text answered in minutes, visits proposed from your real schedule, emergencies escalated and reminders sent on time. Your people keep the phones. Test it free on your own past enquiries."
          ctaHref={usMailto('Front office: free 48-hour proof')}
          ctaLabel={`Email ${US_CONTACT_EMAIL}`}
          whatsappHref={US_WHATSAPP_HREF}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'For US businesses', href: '/us' },
            { label: 'AI front office', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block. Keep it between 130 and 170 words. */}
              <div className="key-answer">
                <p>
                  An AI front office for a home-services company answers the written enquiries your customer service team handles today: web forms, emails, text messages and online booking requests. It replies in minutes at any hour, proposes visit times from your real availability for the office to confirm, treats leaks, no-heat and no-cooling messages as urgent and alerts your on-call person, and sends maintenance, membership and review-request messages on schedule. Phone calls stay with your people. Verelios Labs builds these assistants for US HVAC, plumbing, electrical and pest-control companies, connected to platforms such as ServiceTitan, Housecall Pro or Jobber where their APIs allow. You start with a free 48-hour proof on your own past enquiries. A pilot covering one channel starts at {US_PRICING.pilotFrom}, a typical build costs {US_PRICING.buildRange}, the price is fixed up front, and you own the code and data.
                </p>
              </div>

              <h2>Why the front office is always behind</h2>
              <p>
                The phones ring all morning, so web forms and texts wait. Enquiries that arrive at night or on a weekend wait even longer, and a homeowner with a broken furnace usually books whoever answers first. The usual fix is another customer service rep or dispatcher. In the US, customer service representatives earn a median of $21.53 an hour before benefits, according to the Bureau of Labor Statistics, and a new hire needs weeks to learn your service area, price book and membership plans.
              </p>

              <h2>What the assistant handles</h2>
            </Prose>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, margin: '28px 0 8px' }}>
              {JOBS.map(([title, desc]) => (
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
                Your website forms, your business email, your texting number, and your field-service platform, such as ServiceTitan, Housecall Pro or Jobber, through its API where the platform allows it. Where it does not, the assistant uses your online booking link and calendar. Your phone system is not touched.
              </p>

              <h2>Hire a CSR, use an answering service, or add an AI front office?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>How it is paid</th><th>Main limit</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Another CSR or dispatcher</td>
                      <td>Wage and benefits</td>
                      <td>Office hours only, and weeks of training</td>
                      <td>Phone calls and customers who need a person</td>
                    </tr>
                    <tr>
                      <td>After-hours answering service</td>
                      <td>Per call or per minute</td>
                      <td>Takes messages but usually cannot book or answer detailed questions</td>
                      <td>Overnight phone coverage</td>
                    </tr>
                    <tr>
                      <td>AI front office (Verelios Labs)</td>
                      <td>{US_PRICING.pilotFrom} pilot or {US_PRICING.buildRange} build, plus a small running cost</td>
                      <td>Written channels only; phones stay with your team</td>
                      <td>Web forms, email, texts, reminders and follow-ups at any hour</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How a project runs</h2>
              <ol>
                <li><strong>Free 48-hour proof.</strong> Send a sample of past web forms, emails or texts. We show the replies and booking requests the assistant would have made.</li>
                <li><strong>Fixed quote.</strong> Channels, your field-service platform, emergency rules, the timeline and the monthly running cost.</li>
                <li><strong>Pilot in two to four weeks.</strong> One channel, usually web forms, with your office confirming every booking.</li>
                <li><strong>Roll out.</strong> Email and text, reminders and post-visit follow-ups once the pilot holds up.</li>
              </ol>

              <h2>What it costs</h2>
              <p>
                <strong>The 48-hour proof is free.</strong> A pilot covering one channel starts at <strong>{US_PRICING.pilotFrom}</strong>. A typical build with web, email and text, your field-service platform and reminders is <strong>{US_PRICING.buildRange}</strong>, fixed before work starts and paid 30%, 30% and 40%. Running costs, including text-message fees, are quoted up front.
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
          mailSubject="Front office: free 48-hour proof"
          defaultService="AI Automation / Chatbot"
          submitLabel="Test it on my enquiries"
          heading="See your enquiries answered in 48 hours."
          body="Tell us your field-service platform and roughly how many web forms and texts you get a week. The proof is free, and we reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
