import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const URL_PATH = '/services';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Our Services — Web, App, Software, AI, ERP & Hosting',
  description:
    'Verelios Labs services: website development, mobile apps, custom software, UI/UX design, AI automation, ERP software and managed hosting. Built in 3 weeks, free 48-hour mockup.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'web development services India',
    'app development services India',
    'custom software development services',
    'UI UX design services India',
    'AI automation services India',
    'ERP software development India',
    'managed web hosting India',
    'Verelios Labs services',
  ],
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
    title: 'ERP Software',
    desc: 'Custom ERP — inventory, manufacturing, accounting, reporting plus HR & payroll — with Tally and GST integration.',
    href: '/services/erp',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
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
              <p style={{ marginTop: 32 }}>
                Not sure which service you need? Tell us what you&apos;re trying to
                achieve and we&apos;ll recommend the right approach — and send a free
                48-hour mockup so you can see it before committing. Based in Govind
                Nagar, Kanpur, we work with local businesses in person and founders
                across India remotely.
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
