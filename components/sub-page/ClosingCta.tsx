import Link from 'next/link';
import { InlineLeadForm, SERVICE_TYPES } from '@/components/sub-page/InlineLeadForm';

const WHATSAPP_HREF =
  'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project.';

interface ClosingCtaProps {
  heading: string;
  body?: string;
  /** Pre-selects the service dropdown so the visitor doesn't have to restate
   *  what the page they're already on is about. */
  defaultService?: (typeof SERVICE_TYPES)[number];
  /** Submit button text. */
  submitLabel?: string;
  /**
   * Escape hatch: render the old link-only CTA instead of the form. Use on any
   * page that already has its own form higher up, so we never show two forms
   * competing on one page.
   */
  linkOnly?: boolean;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * The closing call-to-action at the bottom of every service and location page.
 *
 * This used to be two buttons: one linking to /#contact and one to WhatsApp.
 * That meant a visitor on /services/erp had to navigate to the homepage before
 * they could enquire — the site had exactly one form, on the homepage, and
 * nowhere else. Every extra step between intent and enquiry costs leads, and
 * for paid traffic you've already bought that click.
 *
 * It now renders a real form in place. The WhatsApp option stays as a
 * lower-commitment alternative, and is finally tracked.
 */
export function ClosingCta({
  heading,
  body = "Tell us what you need and we'll show you a free mockup within 48 hours. No commitment, no upfront payment.",
  defaultService,
  submitLabel,
  linkOnly = false,
  primaryHref = '/#contact',
  primaryLabel = 'Get a free mockup',
  secondaryHref = WHATSAPP_HREF,
  secondaryLabel = 'Chat on WhatsApp',
}: ClosingCtaProps) {
  return (
    <section
      className="tile"
      style={{
        paddingTop: 64,
        paddingBottom: 96,
      }}
    >
      <div
        className="wrap"
        id="enquire"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(41,151,255,0.18) 0%, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--radius-lg)',
          padding: '56px 32px',
          textAlign: 'center',
          maxWidth: 880,
          margin: '0 auto',
          scrollMarginTop: 90,
        }}
      >
        <h2 className="display-section" style={{ color: '#fff' }}>
          {heading}
        </h2>
        <p className="lead lead-on-dark" style={{ marginTop: 18, color: 'rgba(255,255,255,0.7)' }}>
          {body}
        </p>

        {linkOnly ? (
          <div
            style={{
              marginTop: 32,
              display: 'inline-flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link href={primaryHref} className="btn-pill press" style={{ fontWeight: 600 }}>
              {primaryLabel}
            </Link>
            {secondaryHref.startsWith('http') ? (
              // GA4 whatsapp_click fires globally via ContactClickTracker;
              // data-wa-label names the surface in the report.
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-label="Closing CTA"
                className="btn-pill btn-wa press"
                style={{ fontWeight: 600 }}
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="btn-pill-ghost on-dark press">
                {secondaryLabel}
              </Link>
            )}
          </div>
        ) : (
          <>
            <div style={{ maxWidth: 620, margin: '32px auto 0' }}>
              <InlineLeadForm
                defaultService={defaultService}
                submitLabel={submitLabel}
                idPrefix="closing"
              />
            </div>

            <div
              style={{
                marginTop: 26,
                paddingTop: 22,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
                Prefer to talk first?
              </span>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-label="Closing CTA"
                className="btn-pill btn-wa press"
                style={{ fontWeight: 600 }}
              >
                {secondaryLabel}
              </a>
              <a
                href="tel:+918299522798"
                className="btn-pill-ghost on-dark press"
                style={{ fontWeight: 600 }}
              >
                Call +91 82995 22798
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ClosingCta;
