'use client';

import Link from 'next/link';
import { useGsap } from '@/hooks/useGsap';

// Mirrors the eleven real service pages under /services, in roughly the order a
// prospect encounters them. Every card links to a page that exists — the old list
// had two cards pointing at /#contact and silently omitted ERP, e-commerce, HRMS,
// billing and CRM, which are the highest-value things we actually rank for.
const SERVICES = [
  {
    title: 'Web development',
    body: 'Responsive, fast, scalable sites with the same stack the best product teams use. Built to convert, not just to look pretty.',
    bullets: ['React & Next.js', 'Full-stack', 'Progressive web apps', 'SEO-ready'],
    href: '/services/website-development',
  },
  {
    title: 'App development',
    body: 'Native iOS and Android apps, or cross-platform from a single React Native / Flutter codebase. Shipped to both stores.',
    bullets: ['iOS & Android', 'React Native', 'Flutter', 'Store submission'],
    href: '/services/mobile-app-development',
  },
  {
    title: 'E-commerce',
    body: 'Online stores with catalogue, cart, UPI and cash on delivery, delivery tracking and GST invoicing — SEO built in from day one.',
    bullets: ['Razorpay & UPI', 'COD with OTP', 'Shiprocket & Delhivery', 'GST invoicing'],
    href: '/services/ecommerce-development',
  },
  {
    title: 'Custom software',
    body: "Internal tools, dashboards and platforms — tailored to your workflow, not someone else's idea of one.",
    bullets: ['Enterprise solutions', 'API development', 'System integration', 'Cloud architecture'],
    href: '/services/custom-software-development',
  },
  {
    title: 'ERP software',
    body: 'Inventory, manufacturing, procurement, accounting and reporting in one system built around how your business already runs.',
    bullets: ['Tally & GST sync', 'Production tracking', 'Multi-godown stock', 'You own the code'],
    href: '/services/erp',
  },
  {
    title: 'HRMS & payroll',
    body: 'Attendance, shifts, leave, payslips and automatic PF, ESI and TDS — including contract and piece-rate workers.',
    bullets: ['Biometric integration', 'Shift & overtime rules', 'ECR & ESI exports', 'Employee self-service'],
    href: '/services/hrms-payroll-software',
  },
  {
    title: 'Billing & inventory',
    body: 'Fast GST billing with live stock across godowns, e-way bills and barcode scanning — and a counter that keeps working offline.',
    bullets: ['E-invoice & e-way bill', 'Batch & expiry', 'Barcode scanning', 'Offline-first counter'],
    href: '/services/billing-inventory-software',
  },
  {
    title: 'CRM software',
    body: 'Leads, follow-ups, quotations and deals in one pipeline, with WhatsApp built in so enquiries stop going cold.',
    bullets: ['WhatsApp Business API', 'Quotation builder', 'Field sales tracking', 'Source-wise ROI'],
    href: '/services/crm-software-development',
  },
  {
    title: 'AI automation',
    body: 'Workflow automation, AI chatbots and document processing that take the repetitive work off your team — built on the tools you already use.',
    bullets: ['Workflow automation', 'AI chatbots', 'Document processing', 'LLM integrations'],
    href: '/services/ai-automation',
  },
  {
    title: 'UI / UX design',
    body: 'Considered design that earns user trust on the first screen. Research, wireframes, prototypes, and a system you can hand to your team.',
    bullets: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
    href: '/services/ui-ux-design',
  },
  {
    title: 'Hosting, maintenance & performance',
    body: 'Managed hosting plus ongoing care — speed audits, security patches, backups, bug fixes and a human on WhatsApp.',
    bullets: ['99.9% uptime', 'Daily backups', 'Speed optimisation', 'No lock-in'],
    href: '/services/web-hosting',
  },
];

export function Services() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 75%' },
    });
    gsap.from(scope.querySelectorAll('.service-card'), {
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: scope.querySelector('.six-up'),
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      ref={ref}
      id="services"
      className="tile"
      style={{ background: 'var(--color-canvas)' }}
    >
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What we do</div>
          {/* No count in the heading on purpose. "Seven practices" was left behind
              the moment the service list grew, the same way "38 reviews" and
              "10+ projects" did. Adding a service should not mean remembering to
              edit a headline. */}
          <h2 className="display-section">
            Everything we build. <br />
            <span style={{ color: 'var(--color-ink-muted-48)' }}>One team, end-to-end.</span>
          </h2>
          <p className="lead" style={{ marginTop: 6, maxWidth: 640 }}>
            Comprehensive digital work — designed, engineered, and launched by the same people from first message to live release.
          </p>
        </div>

        <div className="six-up">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="card service-card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--color-ink-muted-48)',
                  letterSpacing: '-0.01em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 12px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: 'var(--color-ink-muted-80)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                {s.body}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '20px 0 18px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: 12,
                      padding: '5px 10px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'var(--color-canvas-parchment)',
                      color: 'var(--color-ink-muted-80)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                <Link
                  href={s.href}
                  className="link-arrow"
                  aria-label={`Learn more about ${s.title}`}
                  style={{ fontSize: 14 }}
                >
                  Learn more <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* The hub link belongs here rather than in the nav: the nav item
            "Services" scrolls to this section, so the hub page itself had no
            route in from the homepage at all and sat a click deeper than the
            eleven pages it introduces. */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/services" className="link-arrow">
            Compare all eleven services <span className="arrow">→</span>
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ color: 'var(--color-ink-muted-48)', fontSize: 14 }}>
            Don&apos;t see what you need?
          </span>{' '}
          <a href="#contact" className="link-arrow">
            Let&apos;s talk about your project <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
