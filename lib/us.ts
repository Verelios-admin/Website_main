// Phase 17 (2026-11-10): single source of truth for every fact the "For US
// businesses" pages state. Owner-approved on 2026-11-10: pilot from $1,500,
// typical build $3,000–$8,000, calls 9 AM–1 PM Eastern, no client named.
// Change a number here and every US page, the calculator and llms.txt copy
// must agree — grep for the value before editing.

export const US_HUB_PATH = '/us';

export const US_PAGES = [
  {
    path: '/us/ai-order-entry-automation',
    short: 'AI order entry',
    title: 'AI order entry for distributors and manufacturers',
    blurb:
      'Orders that arrive by email, PDF or spreadsheet become draft sales orders in your system. Your team approves each one.',
  },
  {
    path: '/us/ai-customer-service-for-ecommerce',
    short: 'AI customer service for online stores',
    title: 'AI customer service for Shopify and online brands',
    blurb:
      'Draft replies to order-status, sizing, returns and product questions from your own policies and order data.',
  },
  {
    path: '/us/freight-billing-automation',
    short: 'Freight billing automation',
    title: 'Freight billing automation for trucking companies and brokers',
    blurb:
      'Rate confirmations, BOLs and PODs are matched to the load and turned into invoices for your billing team to approve.',
  },
  {
    path: '/us/ai-front-office-for-home-services',
    short: 'AI front office for home services',
    title: 'AI front office for HVAC, plumbing and pest control',
    blurb:
      'Web, email and text enquiries answered at any hour, visits booked and reminders sent. Your people keep the phones.',
  },
] as const;

export const US_CALCULATOR_PATH = '/us/order-entry-cost-calculator';

// Blog posts written for US readers. With /us/*, these get the US contact
// bar (email → WhatsApp → call) instead of the India one.
export const US_BLOG_PATHS = [
  '/blog/order-entry-clerk-vs-ai-cost-2026',
  '/blog/hire-customer-service-rep-or-ai-2026',
];

export function isUsPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const p = pathname.replace(/\/$/, '');
  return p === '/us' || p.startsWith('/us/') || US_BLOG_PATHS.includes(p);
}

export const US_PRICING = {
  pilotFrom: '$1,500',
  buildRange: '$3,000–$8,000',
  pilotFromNumber: 1500,
  buildMin: 3000,
  buildMax: 8000,
};

export const US_HOURS = 'Monday to Friday, 9 AM–1 PM Eastern (6–10 AM Pacific)';

// Sourced figures used on the calculator and the two cost articles. Keep the
// source label next to the number wherever it is shown.
export const US_WAGE_FACTS = {
  orderClerkAnnualMedian: 46170, // BLS OOH, Information Clerks, May 2025
  csrHourlyMedian: 21.53, // BLS OOH, Customer Service Representatives, May 2025
  billingClerkAnnualMedian: 48500, // BLS OOH, Financial Clerks, May 2025
  wageShareOfCompensation: 0.7, // BLS ECEC, private industry, June 2026
};

export const BLS_SOURCES = {
  orderClerks: 'https://www.bls.gov/ooh/office-and-administrative-support/information-clerks.htm',
  csr: 'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm',
  billingClerks: 'https://www.bls.gov/ooh/office-and-administrative-support/financial-clerks.htm',
  ecec: 'https://www.bls.gov/news.release/ecec.nr0.htm',
};

// Contact order for US visitors (owner, 2026-11-10): email first, WhatsApp
// second, a phone call third.
export const US_CONTACT_EMAIL = 'sahil@verelios.com';
export const US_WHATSAPP_DISPLAY = '+91 84710 94125';
export const US_WHATSAPP_HREF = 'https://wa.me/918471094125?text=Hi%20Sahil%2C%20I%27m%20in%20the%20US%20and%20would%20like%20the%20free%2048-hour%20proof.';
export const US_PHONE_DISPLAY = '+91 82995 22798';
export const US_PHONE_HREF = 'tel:+918299522798';

/** mailto: link to Sahil with a subject that says which page it came from. */
export function usMailto(subject = 'Free 48-hour proof'): string {
  return `mailto:${US_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
