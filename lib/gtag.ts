// Google Ads lead conversion — fires ONCE, only after a genuine, successful
// contact-form submission. Never on button/link clicks or page load.
// AW-18037984640 = global Google tag ID; lFtBCOjnxJscEICbl5lD = conversion label.
const AW_SEND_TO = 'AW-18037984640/lFtBCOjnxJscEICbl5lD';

// ---------------------------------------------------------------------------
// Lead value, in rupees, by declared budget band.
//
// Why this exists: every form submit used to report the same `value: 1.0`, so
// Google Ads saw a ₹50k website enquiry and a ₹5L ERP enquiry as identical and
// bid the same for both. Reporting a real rupee figure lets a value-based bid
// strategy (Maximise conversion value / tROAS) chase the enquiries that are
// actually worth winning, and quietly stop paying for the ones that aren't.
//
// Figures are the conservative end of each band, not the midpoint — better to
// under-claim than to teach Ads to overbid. "Not sure yet" is deliberately
// scored low: an unqualified enquiry is worth less than a stated budget, and
// scoring it high would undo the whole point.
// ---------------------------------------------------------------------------
const LEAD_VALUE_BY_BUDGET: Record<string, number> = {
  '₹50,000 – ₹1,00,000': 50000,
  '₹1,00,000 – ₹3,00,000': 100000,
  '₹3,00,000 – ₹5,00,000': 300000,
  '₹5,00,000+': 500000,
  'Not sure yet': 40000,
};

// Used when the budget field is missing or doesn't match a known band.
const LEAD_VALUE_FALLBACK = 40000;

export function leadValueFor(budget?: string): number {
  if (!budget) return LEAD_VALUE_FALLBACK;
  return LEAD_VALUE_BY_BUDGET[budget] ?? LEAD_VALUE_FALLBACK;
}

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

    const value = leadValueFor(data.budget);

    // GA4 lead event (analytics only — not the Ads conversion). GA4 expects
    // `value` to be numeric; it was previously being handed the budget string,
    // which GA4 silently discards, so lead value never appeared in reporting.
    gtag('event', 'generate_lead', {
      event_category: 'Contact Form',
      event_label: data.service || 'General',
      currency: 'INR',
      value,
      budget_band: data.budget || 'Not specified',
    });

    // Enhanced Conversions: normalized first-party data. gtag.js SHA-256-hashes
    // these in the browser before they leave the page — we never send raw PII.
    if (data.email || data.phone) {
      const userData: Record<string, string> = {};
      if (data.email) userData.email = data.email.trim().toLowerCase();
      if (data.phone) userData.phone_number = data.phone.replace(/\s+/g, '');
      gtag('set', 'user_data', userData);
    }

    // The Google Ads conversion itself, now carrying a real rupee value so
    // value-based bidding has something to optimise against.
    gtag('event', 'conversion', {
      send_to: AW_SEND_TO,
      value,
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

/** Phone-call (tel:) link clicks. Fired globally by ContactClickTracker for
 *  every tel: link on the site, so calls are captured as a GA4 event you can
 *  import into Google Ads as a conversion (previously call clicks were
 *  untracked). */
export function trackCallClick(label: string) {
  sendGtagEvent('call_click', {
    event_category: 'Contact',
    event_label: label,
    value: 1,
  });
}

/** Email (mailto:) link clicks. Also fired globally by ContactClickTracker.
 *  Email links appeared in the top bar, contact section and footer and were
 *  tracked in none of those places. */
export function trackEmailClick(label: string) {
  sendGtagEvent('email_click', {
    event_category: 'Contact',
    event_label: label,
    value: 1,
  });
}
