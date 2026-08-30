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
          {/* Same treatment as the homepage's WhatsApp CTA — green pill with the
              mark, not a plain outline. It was a ghost button here, which read as
              a lesser option on ~20 pages and made the sub-page heroes look like a
              downgraded copy of the homepage. WhatsApp is a primary contact route
              for this business, so it should look like one everywhere. */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-wa press"
            data-wa-label="Sub-page hero"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
