// Google Ads lead conversion — fires ONCE, only after a genuine, successful
// contact-form submission. Never on button/link clicks or page load.
// AW-18037984640 = global Google tag ID; lFtBCOjnxJscEICbl5lD = conversion label.
const AW_SEND_TO = 'AW-18037984640/lFtBCOjnxJscEICbl5lD';

// Guard so a single submission can't fire the conversion twice (retries /
// re-renders). Reset via resetLeadConversionGuard() when the form is reset for
// a brand-new submission.
let leadConversionFired = false;

export function resetLeadConversionGuard() {
  leadConversionFired = false;
}

type LeadData = {
  email?: string;
  phone?: string; // E.164, e.g. "+919812345678"
  service?: string;
  budget?: string;
};

export function trackGoogleAdsLead(data: LeadData = {}) {
  if (typeof window === 'undefined') return;
  if (leadConversionFired) return;

  // gtag.js is loaded lazily (lazyOnload), so it may not exist yet at submit
  // time — retry a few times until it's ready, then fire exactly once.
  const fire = (retriesLeft = 5) => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== 'function') {
      if (retriesLeft > 0) setTimeout(() => fire(retriesLeft - 1), 400);
      return;
    }

    // Mark fired before sending so a queued retry can never double-count.
    leadConversionFired = true;

    // GA4 lead event (analytics only — not the Ads conversion).
    gtag('event', 'generate_lead', {
      event_category: 'Contact Form',
      event_label: data.service || 'General',
      value: data.budget || 'Not specified',
    });

    // Enhanced Conversions: normalized first-party data. gtag.js SHA-256-hashes
    // these in the browser before they leave the page — we never send raw PII.
    if (data.email || data.phone) {
      const userData: Record<string, string> = {};
      if (data.email) userData.email = data.email.trim().toLowerCase();
      if (data.phone) userData.phone_number = data.phone.replace(/\s+/g, '');
      gtag('set', 'user_data', userData);
    }

    // The Google Ads conversion itself.
    gtag('event', 'conversion', {
      send_to: AW_SEND_TO,
      value: 1.0,
      currency: 'INR',
    });
  };

  fire();
}

// ---------------------------------------------------------------------------
// Lightweight GA4 engagement events (NOT Google Ads conversions).
// These fire on button / link clicks so GA4 actually records key events —
// previously the only GA4 event was generate_lead on a successful form submit,
// which is rare, so GA4 showed ~0 events. CTA + WhatsApp clicks give real
// volume to mark as "key events" in the GA4 admin.
//
// gtag.js is loaded lazily (lazyOnload in app/layout.tsx), so it may not exist
// yet at click time — retry a few times until it's ready. No once-only guard
// here: unlike a conversion, a user can legitimately click a CTA many times.
// ---------------------------------------------------------------------------
function sendGtagEvent(
  event: string,
  params: Record<string, unknown>,
  retriesLeft = 5,
) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') {
    if (retriesLeft > 0) setTimeout(() => sendGtagEvent(event, params, retriesLeft - 1), 400);
    return;
  }
  gtag('event', event, params);
}

/** Primary CTA button clicks ("Get a free mockup", "Book a call", etc.). */
export function trackCtaClick(label: string) {
  sendGtagEvent('cta_click', {
    event_category: 'Engagement',
    event_label: label,
    value: 1,
  });
}

/** WhatsApp button / link clicks. */
export function trackWhatsAppClick(label: string) {
  sendGtagEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: label,
    value: 1,
  });
}

/** Phone-call (tel:) link clicks. Fired globally by CallClickTracker for every
 *  tel: link on the site, so calls are captured as a GA4 event you can import
 *  into Google Ads as a conversion (previously call clicks were untracked). */
export function trackCallClick(label: string) {
  sendGtagEvent('call_click', {
    event_category: 'Contact',
    event_label: label,
    value: 1,
  });
}
