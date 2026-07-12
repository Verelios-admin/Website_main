import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { RelatedServices } from '@/components/sub-page/RelatedServices';

const URL_PATH = '/services/erp';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Custom ERP Software Development Company in India',
  description:
    'Custom ERP software built around your workflow — inventory, manufacturing, accounting, HR, payroll and reporting in one system. Full-stack TypeScript, you own the code, launched in 6–12 weeks.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'custom ERP software',
    'custom ERP software India',
    'ERP software development company India',
    'ERP development company India',
    'custom ERP development',
    'ERP software for small business India',
    'manufacturing ERP software India',
    'inventory management ERP',
    'ERP software company Kanpur',
    'ERP software Kanpur',
    'custom ERP developers India',
    'ERP vs SAP alternative India',
    'GST ERP software India',
    'Tally integration ERP',
    'payroll and HR ERP India',
  ],
  openGraph: {
    title: 'Custom ERP Software Development Company in India | Verelios Labs',
    description:
      'Custom ERP software built around your workflow — inventory, manufacturing, accounting, HR & reporting in one system. You own the code. Launched in 6–12 weeks.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Custom ERP Software Development in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Custom ERP Software Development',
  name: 'Custom ERP Software Development',
  description:
    'Custom ERP software for Indian businesses — inventory, manufacturing, procurement, accounting, HR, payroll and reporting built into one system tailored to your workflow. Full-stack TypeScript, end-to-end ownership.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Custom ERP Software', item: `${SITE}${URL_PATH}` },
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
      name: 'What is custom ERP software and how is it different from SAP or Tally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom ERP is software built around how your business actually runs, instead of forcing your team to work the way a packaged product (SAP, Oracle, Zoho, Tally) expects. Packaged ERPs charge per user per month forever and still need heavy configuration; a custom ERP is a one-time build you own outright, with only hosting to pay each month. It covers the same modules — inventory, manufacturing, accounting, HR, reporting — but only the parts you need, in the exact workflow you already use.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom ERP software cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused single-module ERP (for example inventory + purchase, or production tracking) starts at ₹99,999. A full multi-module ERP — inventory, manufacturing, sales, accounting, HR and reporting — typically lands between ₹3,00,000 and ₹10,00,000 depending on the number of modules and integrations. We give a fixed quote up front with milestone payments (30/30/40) and always show the monthly hosting cost before you commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a custom ERP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-module ERP usually ships in 6–8 weeks. A larger multi-module system takes 10–16 weeks, rolled out module by module so your team can start using the finished parts while we build the rest. We agree the scope and timeline in writing before we start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the ERP integrate with Tally, GST and our existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Tally, the GST portal APIs, Razorpay / Cashfree, WhatsApp Business API, e-way bill, banking, email and SMS all integrate over their REST or webhook interfaces. We have wired all of these before, so data flows automatically instead of being re-keyed by hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we own the ERP code, or are we locked in to you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own everything. The full source code lives in a GitHub repository under your organisation from day one, hosted on your own cloud account. Because we use a mainstream stack (Next.js / Node.js / TypeScript / Postgres), any competent developer can maintain it. We offer ongoing support if you want it — you are never forced to stay with us.',
      },
    },
  ],
};

export default function ERPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Custom ERP software · India"
          title="Custom ERP software"
          highlight="built around how you actually work."
          lead="Verelios Labs builds custom ERP software for Indian businesses — inventory, manufacturing, procurement, accounting, HR, payroll and reporting in one system tailored to your workflow. Full-stack TypeScript, you own the code, launched in 6–12 weeks."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: 'Custom ERP Software', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What a custom ERP actually is</h2>
              <p>
                An ERP — Enterprise Resource Planning — is the single system that runs the back office of your business: what you have in stock, what you&apos;re making, what you&apos;ve bought and sold, who you owe, who owes you, and who&apos;s on the payroll. Most Indian businesses run this across a stack of disconnected tools — Tally for accounts, Excel for inventory, WhatsApp for the shop floor, a diary for purchase orders. A custom ERP pulls all of that into <strong>one system that matches your workflow</strong>, instead of forcing your team to bend around a product someone else designed.
              </p>
              <p>
                We are a team of <strong>custom ERP developers based in Govind Nagar, Kanpur</strong>, building ERP software for manufacturers, distributors, traders and service businesses across Kanpur, Uttar Pradesh and all of India.
              </p>

              <h2>Modules we build</h2>
              <p>
                You don&apos;t buy the whole thing at once — we build the modules you need now, and add more as you grow. The ones we ship most often:
              </p>
              <ul>
                <li><strong>Inventory &amp; warehouse</strong> — real-time stock across locations, batch / serial tracking, low-stock alerts, stock transfers and audits.</li>
                <li><strong>Manufacturing / production</strong> — bill of materials, work orders, job-work tracking, wastage and yield, production planning against demand.</li>
                <li><strong>Procurement &amp; purchase</strong> — purchase orders, vendor management, goods-received notes, three-way matching against invoices.</li>
                <li><strong>Sales &amp; order management</strong> — quotations, sales orders, dispatch, invoicing, credit limits and outstanding tracking.</li>
                <li><strong>Accounting &amp; GST</strong> — ledgers, GST-compliant invoicing, e-way bills, and clean two-way sync with Tally so your CA workflow doesn&apos;t change.</li>
                <li><strong>HR &amp; payroll</strong> — attendance, leave, salary structures, payslips, PF / ESI / TDS calculations and payroll registers.</li>
                <li><strong>Reporting &amp; dashboards</strong> — the numbers the owner actually checks each morning, on the phone, in real time.</li>
              </ul>

              <h2>Why custom ERP beats SAP, Oracle, Zoho or a Tally patchwork</h2>
              <p>
                Packaged ERPs are excellent when your process matches theirs. The trouble starts when it doesn&apos;t — you pay <strong>per user, per month, forever</strong>, spend lakhs on consultants to configure it, and your team still exports to Excel to get the report they actually wanted. A custom ERP inverts that: <strong>the software fits your process, not the other way round</strong>, it&apos;s a one-time build you own, and after year one it usually costs less than the subscription you were paying.
              </p>
              <p>
                A few signs your business has outgrown its current setup:
              </p>
              <ul>
                <li>Stock in the system never quite matches stock on the shelf.</li>
                <li>Someone re-enters the same order into Tally, Excel and WhatsApp.</li>
                <li>You can&apos;t answer &ldquo;what did we actually make last month, at what cost?&rdquo; without a day of spreadsheet work.</li>
                <li>You&apos;re paying for 30 seats of a SaaS ERP but use 20% of its features.</li>
                <li>Month-end close takes a week because numbers live in five places.</li>
              </ul>

              <h2>How a custom ERP project runs</h2>
              <ol>
                <li><strong>Week 1 — discovery on your floor.</strong> We shadow the people who&apos;ll use it — store, production, accounts — and map every step and exception. No code yet.</li>
                <li><strong>Week 1–2 — blueprint &amp; fixed quote.</strong> A one-pager listing every module, screen and integration, with a fixed price and the monthly hosting cost. You approve before we build.</li>
                <li><strong>Week 2–12 — build, module by module.</strong> We ship in a staging environment your team can test daily, with WhatsApp updates and weekly reviews. Finished modules go live while the rest are still in progress.</li>
                <li><strong>Pilot &amp; parallel run.</strong> We run the ERP alongside your current process first, so you trust the numbers before switching off the old way.</li>
                <li><strong>Rollout &amp; training.</strong> Onboarding sessions, training docs, and role-based access set up for every user.</li>
                <li><strong>+30 days support included.</strong> Bug fixes, tweaks and training questions after go-live.</li>
              </ol>

              <h2>What you own on day one</h2>
              <ul>
                <li><strong>Full source code</strong> in a GitHub repo under your organisation — no vendor lock-in.</li>
                <li><strong>Hosted on your account</strong> (AWS / Vercel / DigitalOcean / Hostinger) so you own the infrastructure and the data. We can also <a href="/services/web-hosting">manage the hosting and maintenance</a> for you.</li>
                <li><strong>Role-based access</strong> — owner / manager / store / accounts / operator roles by default.</li>
                <li><strong>Daily backups</strong> and point-in-time recovery on Postgres.</li>
                <li><strong>Audit log</strong> — every change recorded with who, what and when.</li>
                <li><strong>Documentation</strong> — user guide, deployment guide and API docs.</li>
              </ul>

              <h2>Pricing for custom ERP software in India</h2>
              <p>
                A focused single-module ERP starts at <strong>₹99,999</strong>. A full multi-module system — inventory, manufacturing, sales, accounting, HR and reporting — typically lands between <strong>₹3,00,000 and ₹10,00,000</strong>, with a fixed quote up-front and milestone payments (30/30/40). We always show the monthly hosting cost before you commit, so there are no surprises after launch. For CRMs, dashboards and other internal tools, see our broader <a href="/services/custom-software-development">custom software development</a> service.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>What is custom ERP software and how is it different from SAP or Tally?</h3>
              <p>
                Custom ERP is software built around how your business actually runs, instead of forcing your team to work the way a packaged product (SAP, Oracle, Zoho, Tally) expects. Packaged ERPs charge per user per month forever and still need heavy configuration; a custom ERP is a one-time build you own outright, with only hosting to pay each month. It covers the same modules — inventory, manufacturing, accounting, HR, reporting — but only the parts you need, in the exact workflow you already use.
              </p>
              <h3>How much does custom ERP software cost in India?</h3>
              <p>
                A focused single-module ERP (for example inventory + purchase, or production tracking) starts at ₹99,999. A full multi-module ERP typically lands between ₹3,00,000 and ₹10,00,000 depending on the number of modules and integrations. We give a fixed quote up front with milestone payments (30/30/40) and always show the monthly hosting cost before you commit.
              </p>
              <h3>How long does it take to build a custom ERP?</h3>
              <p>
                A single-module ERP usually ships in 6–8 weeks. A larger multi-module system takes 10–16 weeks, rolled out module by module so your team can start using the finished parts while we build the rest. We agree the scope and timeline in writing before we start.
              </p>
              <h3>Can the ERP integrate with Tally, GST and our existing tools?</h3>
              <p>
                Yes — Tally, the GST portal APIs, Razorpay / Cashfree, WhatsApp Business API, e-way bill, banking, email and SMS all integrate over their REST or webhook interfaces. We&apos;ve wired all of these before, so data flows automatically instead of being re-keyed by hand.
              </p>
              <h3>Do we own the ERP code, or are we locked in to you?</h3>
              <p>
                You own everything. The full source code lives in a GitHub repository under your organisation from day one, hosted on your own cloud account. Because we use a mainstream stack (Next.js / Node.js / TypeScript / Postgres), any competent developer can maintain it. We offer ongoing support if you want it — you&apos;re never forced to stay with us.
              </p>
            </Prose>
          </div>
        </section>

        <RelatedServices exclude="erp" />

        <ClosingCta
          heading="Ready to run your business on one system?"
          body="Tell us what your team currently juggles across Tally, Excel and WhatsApp. We'll come back with a free 48-hour plan of your ERP and a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
