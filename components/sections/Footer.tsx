import Link from 'next/link';

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="press"
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: '#fff',
        border: '1px solid var(--color-hairline)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-ink)',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  );
}

const COLS = [
  {
    head: 'Services',
    links: [
      // The hub itself, leading the column the way /locations/kanpur leads the
      // Kanpur one. Without it the hub had no link from the footer or the
      // homepage and sat a click deeper than the pages it exists to introduce.
      ['All services', '/services'],
      ['Website development', '/services/website-development'],
      ['Mobile app development', '/services/mobile-app-development'],
      ['E-commerce development', '/services/ecommerce-development'],
      ['Custom software', '/services/custom-software-development'],
      ['Custom ERP software', '/services/erp'],
      ['HRMS & payroll software', '/services/hrms-payroll-software'],
      ['Billing & inventory software', '/services/billing-inventory-software'],
      ['Custom CRM software', '/services/crm-software-development'],
      ['AI automation', '/services/ai-automation'],
      ['Web hosting & maintenance', '/services/web-hosting'],
      ['UI/UX design', '/services/ui-ux-design'],
    ],
  },
  {
    head: 'Studio',
    links: [
      // Real /about page, not the homepage anchor — it carries the founder bio and
      // the verifiable client list that the homepage section only gestures at.
      ['About Verelios Labs', '/about'],
      ['Portfolio', '/#work'],
      ['Process', '/#process'],
      ['Pricing', '/#pricing'],
      ['Blog', '/blog'],
      ['Contact', '/#contact'],
    ],
  },
  {
    head: 'Kanpur',
    links: [
      ['Software company in Kanpur', '/locations/kanpur'],
      ['Website development in Kanpur', '/locations/kanpur/website-development'],
      ['App development in Kanpur', '/locations/kanpur/mobile-app-development'],
      ['AI development in Kanpur', '/locations/kanpur/ai-development'],
      ['ERP software in Kanpur', '/locations/kanpur/erp-software'],
      ['HRMS & payroll in Kanpur', '/locations/kanpur/hrms-payroll-software'],
      ['Billing software in Kanpur', '/locations/kanpur/billing-inventory-software'],
      ['CRM software in Kanpur', '/locations/kanpur/crm-software-development'],
    ],
  },
  {
    head: 'Engage',
    links: [
      ['Free 48-hr mockup', '/#contact'],
      ['Start a project', '/#contact'],
      ['WhatsApp', 'https://wa.me/918471094125'],
      ['Careers', '/#contact'],
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--color-canvas-parchment)', color: 'var(--color-ink)', padding: '64px 32px 32px' }}>
      <div className="wrap">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
            gap: 32,
            marginBottom: 36,
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <img
                src="/verelios-mark-sm.png"
                alt="Verelios Labs"
                width={30}
                height={30}
                style={{ width: 30, height: 30, objectFit: 'contain', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 17,
                }}
              >
                Verelios{' '}
                <span style={{ color: 'var(--color-ink-muted-48)', fontWeight: 400 }}>Labs</span>
              </span>
            </div>
            <p
              style={{
                color: 'var(--color-ink-muted-80)',
                fontSize: 15,
                lineHeight: 1.5,
                maxWidth: 320,
                margin: 0,
              }}
            >
              Website, app &amp; custom software developers in Govind Nagar, Kanpur — building websites, mobile apps and software that drive business growth for clients in Kanpur and across India.
            </p>
            <address
              style={{
                marginTop: 18,
                fontStyle: 'normal',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'var(--color-ink-muted-80)',
              }}
            >
              <strong style={{ fontWeight: 600 }}>Verelios Labs</strong><br />
              126/58 G Block, Govind Nagar<br />
              Kanpur, Uttar Pradesh 208006, India<br />
              <a href="tel:+918299522798" style={{ color: 'inherit', textDecoration: 'none' }}>+91&nbsp;82995&nbsp;22798</a>
              {' · '}
              <a href="mailto:contact@verelios.com" style={{ color: 'inherit', textDecoration: 'none' }}>contact@verelios.com</a><br />
              <span style={{ color: 'var(--color-ink-muted-48)' }}>Open 24 hours · Every day</span>
            </address>
            <div style={{ marginTop: 22, display: 'flex', gap: 10, alignItems: 'center' }}>
              <SocialIcon href="https://www.linkedin.com/in/verelios-4a1483387/" label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67h-3.56V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/verelioslabs/" label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.72 3.72 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.55a5.88 5.88 0 0 0-2.13 1.39A5.88 5.88 0 0 0 .62 4.14C.33 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.29 1.63.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.55a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.29-.76.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.55-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.62C19.1.33 18.23.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/profile.php?id=61585021269687" label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.09 24 12.07Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:contact@verelios.com" label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.head}>
              <div
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '-0.005em',
                  color: 'var(--color-ink)',
                  marginBottom: 8,
                }}
              >
                {col.head}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map(([l, href]) => (
                  <li
                    key={l}
                    style={{
                      fontSize: 15,
                      lineHeight: 2.2,
                      color: 'var(--color-ink-muted-80)',
                    }}
                  >
                    <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="hair" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            paddingTop: 22,
            fontSize: 12,
            color: 'var(--color-ink-muted-48)',
            flexWrap: 'wrap',
          }}
        >
          <div>© {year} Verelios Labs. All rights reserved. Made in India.</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms
            </Link>
            <Link href="/cookie-policy" style={{ color: 'inherit', textDecoration: 'none' }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
