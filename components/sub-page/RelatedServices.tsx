import Link from 'next/link';

const ALL_SERVICES = [
  {
    slug: 'website-development',
    title: 'Custom Website Development',
    blurb: 'React + Next.js sites shipped in under 3 weeks. Conversion-focused, SEO-ready out of the box.',
    accent: '#2997ff',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    blurb: 'iOS + Android apps from one React Native or Flutter codebase. Live on both stores in 3–5 weeks.',
    accent: '#22c55e',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software & ERPs',
    blurb: 'ERPs, CRMs, dashboards and internal tools tailored to your workflow. Launched in 4–8 weeks.',
    accent: '#06b6d4',
  },
  {
    slug: 'erp',
    title: 'Custom ERP Software',
    blurb: 'Inventory, manufacturing, accounting, HR & payroll in one system built around your workflow. You own the code.',
    accent: '#14b8a6',
  },
  {
    slug: 'hrms-payroll-software',
    title: 'HRMS & Payroll Software',
    blurb: 'Attendance, shifts, payslips and automatic PF, ESI & TDS. One-time build, not per employee per month.',
    accent: '#8b5cf6',
  },
  {
    slug: 'billing-inventory-software',
    title: 'Billing & Inventory Software',
    blurb: 'GST invoicing, live stock across godowns, e-way bills and barcode scanning. Works offline at the counter.',
    accent: '#f97316',
  },
  {
    slug: 'crm-software-development',
    title: 'Custom CRM Software',
    blurb: 'Leads, follow-ups and quotations in one pipeline, with WhatsApp built in. No more forgotten enquiries.',
    accent: '#0ea5e9',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    blurb: 'Online stores with catalogue, UPI & COD, delivery tracking and SEO from day one. From ₹99,999.',
    accent: '#10b981',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    blurb: 'Workflow automation, AI chatbots and document processing that take the repetitive work off your team.',
    accent: '#f59e0b',
  },
  {
    slug: 'web-hosting',
    title: 'Web Hosting & Maintenance',
    blurb: 'Fully managed hosting — 99.9% uptime, backups, SSL, security patches and speed monitoring. No lock-in.',
    accent: '#ec4899',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    blurb: 'Conversion-focused design — research, wireframes, prototypes and design systems.',
    accent: '#b794ff',
  },
];

/** How many cards to show. The full list is now 11 services — rendering all of
 *  them turned this into a wall of cards, so we show a window instead. */
const VISIBLE = 6;

export function RelatedServices({ exclude }: { exclude: string }) {
  // Rotate the window based on where the current page sits in the list, rather
  // than always slicing from the top. Two reasons: every service page then shows
  // a different six, and — more importantly — each service still receives inbound
  // internal links from roughly half the others. A fixed `.slice(0, 6)` would
  // have orphaned whatever sat at the bottom of the array.
  const pool = ALL_SERVICES.filter((s) => s.slug !== exclude);
  const start = Math.max(0, ALL_SERVICES.findIndex((s) => s.slug === exclude));
  const items = Array.from({ length: Math.min(VISIBLE, pool.length) }, (_, i) => pool[(start + i) % pool.length]);
  return (
    <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
      <div className="wrap" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head" style={{ textAlign: 'center', marginBottom: 36, justifyItems: 'center', margin: '0 auto 36px' }}>
          <div className="eyebrow eyebrow-on-dark">Related services</div>
          <h2 className="display-section" style={{ color: '#fff', textAlign: 'center', marginTop: 14 }}>
            Other things we build.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="related-card"
              style={{
                display: 'block',
                padding: 24,
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${s.accent}, rgba(255,255,255,0.12))`,
                  marginBottom: 14,
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '0 0 8px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.65)',
                  margin: 0,
                }}
              >
                {s.blurb}
              </p>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: 500,
                  color: s.accent,
                }}
              >
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

export default RelatedServices;
