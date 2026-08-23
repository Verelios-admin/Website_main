import Link from 'next/link';

/** Same number and opening message ClosingCta uses, so the thread reads the
 *  same whichever CTA the visitor tapped. WhatsApp is +91 84710 94125; the
 *  primary NAP phone (+91 82995 22798) is a different line. */
const WHATSAPP_URL =
  'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project.';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead: string;
  ctaHref?: string;
  ctaLabel?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  // Scroll to the form at the bottom of THIS page (the #enquire anchor on
  // ClosingCta) rather than sending the visitor to the homepage.
  //
  // This used to default to '/#contact', which made sense when the homepage
  // held the only form on the site. Now every service and location page has
  // its own form, so bouncing someone to the homepage costs the page context,
  // the pre-selected service, and — for paid traffic — a click you already
  // paid for. The hero CTA is the most-clicked element on these pages, so
  // this one default matters more than it looks.
  ctaHref = '#enquire',
  ctaLabel = 'Get a free 48-hour mockup',
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      // paddingTop lives in globals.css under .tile-hero, NOT inline — the
      // responsive .tile overrides use `padding` shorthand with !important, which
      // beats an inline style and used to collapse this to 56px on phones, hiding
      // the breadcrumb behind the 100px fixed header.
      className="tile tile-hero"
      style={{
        paddingBottom: 56,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 380,
          background:
            'radial-gradient(50% 60% at 50% 50%, rgba(41,151,255,0.18), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', maxWidth: 880, textAlign: 'center', margin: '0 auto' }}>
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
              fontSize: 13,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 18,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {breadcrumbs.map((b, i) => (
              <span key={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <Link
                  href={b.href}
                  style={{
                    color:
                      i === breadcrumbs.length - 1
                        ? 'rgba(255,255,255,0.8)'
                        : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                  }}
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div className="eyebrow eyebrow-on-dark" style={{ marginBottom: 16 }}>{eyebrow}</div>
        <h1
          className="display-hero"
          style={{
            color: '#fff',
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 600,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
          }}
        >
          {title}
          {highlight && (
            <>
              {' '}
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #2997ff 0%, #7cc1ff 60%, #b794ff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {highlight}
              </span>
            </>
          )}
        </h1>
        <p
          className="lead lead-on-dark"
          style={{ marginTop: 22, color: 'rgba(255,255,255,0.7)', maxWidth: 720, margin: '22px auto 0' }}
        >
          {lead}
        </p>
        {/* Second CTA is WhatsApp, not the portfolio.
            On a phone this hero is the whole first screen, and until now the
            only contact action visible here was the number in the fixed top bar
            — the floating WhatsApp pill does not appear until 600px of scroll.
            "See the work" also sent a visitor who arrived on a specific service
            page back to the homepage, which is the opposite of what a page with
            commercial intent should do. The portfolio is still linked from the
            closing CTA and the footer. */}
        <div style={{ marginTop: 32, display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Same-page hash targets use a plain anchor: native browser scrolling
              is reliable and needs no JS, whereas next/link routes hash-only
              hrefs through the router, which is unnecessary here and has awkward
              edge cases with scroll restoration. Real routes still get Link. */}
          {ctaHref.startsWith('#') ? (
            <a href={ctaHref} className="btn-pill press" style={{ fontWeight: 600 }}>
              {ctaLabel}
            </a>
          ) : (
            <Link href={ctaHref} className="btn-pill press" style={{ fontWeight: 600 }}>
              {ctaLabel}
            </Link>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-ghost on-dark press"
            data-wa-label="Sub-page hero"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
