import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { RelatedServices } from '@/components/sub-page/RelatedServices';

const URL_PATH = '/services/custom-software-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Custom Software Development Company in India',
  description:
    'Custom software development for Indian businesses — ERPs, CRMs, dashboards, internal tools and APIs. Full-stack TypeScript, launched in 4–8 weeks.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'custom software development company',
    'custom software development company India',
    'ERP development India',
    'CRM development India',
    'custom CRM development',
    'custom ERP development',
    'internal tools development',
    'admin dashboard development',
    'workflow automation India',
    'API development services India',
    'SaaS development India',
    'enterprise software India',
    'business process automation India',
    'custom software developers in Kanpur',
    'software development company in Kanpur',
    'custom software developers in Govind Nagar Kanpur',
    'software developers Kanpur Uttar Pradesh',
  ],
  openGraph: {
    title: 'Custom Software Development Company in India | Verelios Labs',
    description:
      'ERPs, CRMs, dashboards and internal tools. Full-stack TypeScript, launched in 4–8 weeks.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Custom Software Development' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Custom Software Development',
  name: 'Custom Software Development',
  description:
    'Custom business software for Indian companies — ERPs, CRMs, admin dashboards, automation, APIs and internal tools. Full-stack TypeScript, end-to-end ownership.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Verelios Labs',
    url: SITE,
    telephone: '+91-8299522798',
    email: 'contact@verelios.com',
    areaServed: { '@type': 'Country', name: 'India' },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '99999',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'INR', minPrice: '99999' },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Custom Software Development', item: `${SITE}${URL_PATH}` },
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
      name: 'Why is custom software cheaper than SaaS over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 50-seat Salesforce subscription costs roughly ₹1,50,000/month (~₹18,00,000/year). A custom CRM with similar features costs ₹3,00,000 once + ₹5,000/month hosting. After year one, you\'ve broken even. After year five, you\'ve saved ₹85,00,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will we be locked in to you for maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The code is yours, it\'s in your GitHub. Any TypeScript / Next.js / Node.js developer can pick it up — that\'s why we use a popular mainstream stack. We offer ongoing maintenance if you want it, but you\'re not forced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the software integrate with our existing systems (Tally, Zoho, etc.)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Tally, Zoho, GST portal APIs, Razorpay, Cashfree, WhatsApp Business API, email (Resend / SES), SMS (Twilio / MSG91), and just about anything else with a REST / webhook interface. We\'ve done all of these before.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign an NDA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Before we receive any sensitive information about your business, we sign a mutual NDA. Standard practice.',
      },
    },
  ],
};

export default function CustomSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Custom software · India"
          title="Custom software, ERPs &amp; internal tools"
          highlight="that fit your workflow."
          lead="Verelios Labs is a team of custom software developers in Govind Nagar, Kanpur, building ERPs, CRMs, admin dashboards, internal tools and APIs for local Kanpur businesses and founders across India. Tailored to your workflow, not someone else's template. Launched in 4–8 weeks."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: 'Custom Software Development', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What we build</h2>
              <p>
                We design and build internal software that automates the parts of your business currently held together by spreadsheets and WhatsApp. Everything is full-stack TypeScript — Next.js for the admin UI, Node.js / TypeScript backend, Postgres or MongoDB for data, deployed on your account so you own everything.
              </p>
              <p>
                Categories we ship most often:
              </p>
              <ul>
                <li><strong>Custom ERP systems</strong> — manufacturing, operations, inventory, procurement, project tracking, reporting. Built around your real workflow instead of forcing you into SAP / Oracle.</li>
                <li><strong>Custom CRM systems</strong> — leads, pipelines, customer history, follow-ups, integrations with WhatsApp / email / phone.</li>
                <li><strong>Admin dashboards</strong> — KPI tiles, charts, role-based access, exports, real-time data.</li>
                <li><strong>Internal tools</strong> — anything your ops team currently does in Excel.</li>
                <li><strong>Automation &amp; workflow tools</strong> — scheduled jobs, integrations with Razorpay / Tally / Zoho / GST APIs.</li>
                <li><strong>APIs &amp; integrations</strong> — connecting two systems you already use so data flows without manual re-entry.</li>
              </ul>

              <h2>Why a custom system beats off-the-shelf</h2>
              <p>
                Off-the-shelf SaaS (SAP, Salesforce, Zoho, etc.) is great when your process matches theirs. The problem starts when it doesn&apos;t — you end up paying monthly per user, configuring around limitations, and exporting to Excel anyway. Custom software inverts that: <strong>the tool fits the process, the process doesn&apos;t bend to the tool</strong>. After year one, you usually pay less than a comparable SaaS subscription.
              </p>
              <p>
                A few signs it&apos;s time for custom:
              </p>
              <ul>
                <li>Your team is reconciling two SaaS tools every day with Excel.</li>
                <li>You&apos;re paying for 30+ seats of a SaaS but only use 20% of its features.</li>
                <li>Your sales / ops team has switched processes because the SaaS can&apos;t support what they actually do.</li>
                <li>You can&apos;t get reports out of the SaaS in the format you need.</li>
              </ul>

              <h2>How a custom-software project runs end-to-end</h2>
              <ol>
                <li><strong>Week 1 — discovery.</strong> We shadow the people who&apos;ll use the system, map the workflow on a whiteboard, write a one-pager that lists every screen and every data field.</li>
                <li><strong>Week 1–2 — design.</strong> Figma mockups of the 5–10 key screens. Internal users approve before any code.</li>
                <li><strong>Week 2–6 — build.</strong> We code in our staging environment with a public URL your team can poke at every day. WhatsApp updates with screenshots; weekly Google Meet to review progress.</li>
                <li><strong>Week 6–7 — pilot.</strong> Live with a small group (e.g. 5 users) so we can fix the rough edges before the whole team is on it.</li>
                <li><strong>Week 8 — full rollout.</strong> Onboarding sessions, training docs, handover.</li>
                <li><strong>+30 days post-launch — included support.</strong> Bug fixes, requested tweaks, training questions.</li>
              </ol>

              <h2>What you get on day one</h2>
              <ul>
                <li><strong>Full source code</strong> in a GitHub repo under your organisation. Commit history. No vendor lock-in.</li>
                <li><strong>Hosted on your account</strong> — AWS / Vercel / DigitalOcean / Hostinger, whichever you prefer. You own the infra, you own the data.</li>
                <li><strong>Role-based access &amp; security</strong> — admin / manager / agent / customer roles by default. SSO available.</li>
                <li><strong>Database backups</strong> — daily automated backups + point-in-time recovery on Postgres.</li>
                <li><strong>Audit log</strong> — every change is logged with who, what, and when.</li>
                <li><strong>Documentation</strong> — README, deployment guide, API docs.</li>
              </ul>

              <h2>Pricing for custom software development in India</h2>
              <p>
                Custom software starts at <strong>₹99,999</strong> for a focused single-purpose tool (think: a custom inventory dashboard, or a 5-screen lead-management system). Larger systems (full ERP, CRM with multiple modules) land between <strong>₹3,00,000 and ₹10,00,000</strong>, with a fixed quote up-front and milestone payments (30/30/40).
              </p>

              <h2>Frequently asked questions</h2>
              <h3>Why is custom software cheaper than SaaS over time?</h3>
              <p>
                A 50-seat Salesforce subscription costs roughly ₹1,50,000/month (~₹18,00,000/year). A custom CRM with similar features costs ₹3,00,000 once + ₹5,000/month hosting. After year one, you&apos;ve broken even. After year five, you&apos;ve saved ₹85,00,000.
              </p>
              <h3>Will we be locked in to you for maintenance?</h3>
              <p>
                No. The code is yours, it&apos;s in your GitHub. Any TypeScript / Next.js / Node.js developer can pick it up — that&apos;s why we use a popular mainstream stack. We offer ongoing maintenance if you want it, but you&apos;re not forced.
              </p>
              <h3>Can the software integrate with our existing systems (Tally, Zoho, etc.)?</h3>
              <p>
                Yes — Tally, Zoho, GST portal APIs, Razorpay, Cashfree, WhatsApp Business API, email (Resend / SES), SMS (Twilio / MSG91), and just about anything else with a REST / webhook interface. We&apos;ve done all of these before.
              </p>
              <h3>Do you sign an NDA?</h3>
              <p>
                Yes. Before we receive any sensitive information about your business, we sign a mutual NDA. Standard practice.
              </p>
            </Prose>
          </div>
        </section>

        <RelatedServices exclude="custom-software-development" />

        <ClosingCta
          heading="Ready to replace those spreadsheets?"
          body="Tell us what your team currently does manually. We'll set up a free technical scoping call to map the system, then follow up with a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
