import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const URL_PATH = '/services';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Services — Web, App, Software, AI & ERP',
  description:
    'Website development, mobile apps, custom software, UI/UX, AI automation, ERP and managed hosting. Idea to launch in 3 weeks, free 48-hour mockup.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Our Services | Verelios Labs',
    description:
      'Websites, mobile apps, custom software, UI/UX, AI automation, ERP and managed hosting — idea to launch in under 3 weeks. Free 48-hour mockup.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Services' }],
  },
};

const SERVICES = [
  {
    title: 'Website Development',
    desc: 'Fast, mobile-first, SEO-ready websites and e-commerce stores built with React & Next.js. From ₹49,999, live in 7–14 days.',
    href: '/services/website-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS and Android apps from a single React Native or Flutter codebase, shipped to both stores in 3–5 weeks. From ₹99,999.',
    href: '/services/mobile-app-development',
  },
  {
    title: 'Custom Software Development',
    desc: 'Tailored web apps, dashboards, APIs and internal tools on a modern Node.js & TypeScript stack. You own the code.',
    href: '/services/custom-software-development',
  },
  {
    title: 'UI/UX Design',
    desc: 'User research, wireframing, prototyping and design systems. Conversion-focused interfaces that look and feel premium.',
    href: '/services/ui-ux-design',
  },
  {
    title: 'AI Automation',
    desc: 'AI agents, chatbots, LLM integrations and workflow automation that take repetitive busywork off your team.',
    href: '/services/ai-automation',
  },
  {
    title: 'E-commerce Development',
    desc: 'Online stores with catalogue, cart, Razorpay & UPI, COD, delivery tracking and GST invoicing. From ₹99,999, live in 3–4 weeks.',
    href: '/services/ecommerce-development',
  },
  {
    title: 'ERP Software',
    desc: 'Custom ERP — inventory, manufacturing, accounting, reporting plus HR & payroll — with Tally and GST integration.',
    href: '/services/erp',
  },
  {
    title: 'HRMS & Payroll Software',
    desc: 'Attendance, shifts, leave, payslips and automatic PF, ESI & TDS. A one-time build, not a per-employee subscription.',
    href: '/services/hrms-payroll-software',
  },
  {
    title: 'Billing & Inventory Software',
    desc: 'GST invoicing, live stock across godowns, e-way bills and barcode scanning — with a counter that keeps working offline.',
    href: '/services/billing-inventory-software',
  },
  {
    title: 'Custom CRM Software',
    desc: 'Leads, follow-ups, quotations and deals in one pipeline, with WhatsApp Business API and real revenue reporting.',
    href: '/services/crm-software-development',
  },
  {
    title: 'Web Hosting & Maintenance',
    desc: 'Managed hosting with 99.9% uptime, backups, SSL and a real human on WhatsApp. No lock-in.',
    href: '/services/web-hosting',
  },
];

// Real URL-hierarchy breadcrumb (Home > Services) — unlike the old homepage
// anchor breadcrumb, this reflects genuine site structure.
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}${URL_PATH}` },
  ],
};

// ItemList of the service pages — helps Google (and AI answer engines)
// enumerate everything Verelios offers from one hub page.
const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Verelios Labs Services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE}${s.href}`,
  })),
};

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Services"
          title="Everything we build,"
          highlight="from idea to launch."
          lead="Websites, mobile apps, custom software, UI/UX, AI automation, ERP and managed hosting — all built on a modern stack, launched in under 3 weeks, and backed by a free 48-hour mockup before you pay a rupee."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 960, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
              }}
            >
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="related-card"
                  style={{
                    display: 'block',
                    padding: 22,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease',
                  }}
                >
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.66)', margin: 0 }}>
                    {s.desc}
                  </p>
                  <div style={{ marginTop: 12, fontSize: 13, fontWeight: 500, color: '#2997ff' }}>Learn more →</div>
                </Link>
              ))}
            </div>

            <Prose>
              <h2 style={{ marginTop: 40 }}>Which one do you actually need?</h2>
              <p>
                Most people arrive here knowing the problem but not the label for the
                solution. A rough guide:
              </p>
              <ul>
                <li>
                  <strong>You need to be found and taken seriously.</strong> That is a{' '}
                  <Link href="/services/website-development">website</Link>. If you sell
                  products online it is the same build with payments and inventory added.
                </li>
                <li>
                  <strong>Customers need something on their phone, repeatedly.</strong>{' '}
                  That is a <Link href="/services/mobile-app-development">mobile app</Link>.
                  If they would use it once a year, a website is the cheaper right answer —
                  we will tell you so.
                </li>
                <li>
                  <strong>You sell products online, or want to.</strong> That is{' '}
                  <Link href="/services/ecommerce-development">e-commerce development</Link> — the
                  same build as a website with catalogue, payments, shipping and stock added.
                </li>
                <li>
                  <strong>Your team runs the business in spreadsheets and WhatsApp.</strong>{' '}
                  That is <Link href="/services/custom-software-development">custom software</Link>{' '}
                  — or, if it covers inventory, production, accounts and payroll together,{' '}
                  <Link href="/services/erp">ERP</Link>.
                </li>
                <li>
                  <strong>Payroll takes three days and a spreadsheet every month.</strong> That is{' '}
                  <Link href="/services/hrms-payroll-software">HRMS &amp; payroll software</Link>.
                </li>
                <li>
                  <strong>Stock in the system never matches stock on the shelf.</strong> That is{' '}
                  <Link href="/services/billing-inventory-software">billing &amp; inventory software</Link>.
                </li>
                <li>
                  <strong>Enquiries come in and quietly go cold.</strong> That is a{' '}
                  <Link href="/services/crm-software-development">custom CRM</Link>.
                </li>
                <li>
                  <strong>Someone spends hours a day on the same repetitive task.</strong>{' '}
                  That is <Link href="/services/ai-automation">AI automation</Link>.
                </li>
                <li>
                  <strong>You have the product but it feels amateur.</strong> That is{' '}
                  <Link href="/services/ui-ux-design">UI/UX design</Link>.
                </li>
                <li>
                  <strong>Your existing site is slow, breaking, or nobody maintains it.</strong>{' '}
                  That is <Link href="/services/web-hosting">hosting &amp; maintenance</Link>.
                </li>
              </ul>

              <h2>What things cost</h2>
              <p>
                Starting prices, so you can size a budget before talking to us. Final quotes
                are fixed and given upfront — we do not bill by the hour, and we do not
                revise the number mid-project.
              </p>
              <ul>
                <li><strong>Business website</strong> — from ₹49,999, live in 7–14 days</li>
                <li><strong>E-commerce store</strong> — from ₹99,999, 3–4 weeks</li>
                <li><strong>Mobile app (iOS + Android)</strong> — from ₹99,999, 3–5 weeks</li>
                <li><strong>Custom software / dashboards</strong> — from ₹1,49,999, scoped per project</li>
                <li><strong>ERP or HR &amp; payroll</strong> — from ₹99,999, 4–8 weeks</li>
                <li><strong>UI/UX design only</strong> — from ₹40,000</li>
                <li><strong>Hosting &amp; maintenance</strong> — monthly, no lock-in</li>
              </ul>

              <h2>What every engagement includes</h2>
              <p>
                Whichever service you pick, the terms are the same. A free mockup within 48
                hours before any payment. No upfront money — billing is split 30% at design
                sign-off, 30% at build, 40% on launch. Full code and repository handover, so
                you are never locked into us to make a change. One person reachable on
                WhatsApp rather than a ticket queue. And a week of free fixes after launch.
              </p>
              <p>
                Still not sure? Describe what you are trying to achieve in two lines and we
                will tell you which of the above it is — including when the answer is
                &ldquo;you do not need this yet&rdquo;. We are based in Govind Nagar, Kanpur,
                and work with local businesses in person and with founders across India
                remotely. See <Link href="/about">who we are</Link> and the client sites we
                have shipped.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Tell us what you're building."
          body="Share your idea and we'll send a free 48-hour mockup and a fixed quote — no upfront payment, milestone-based billing."
        />
      </SubPageLayout>
    </>
  );
}
