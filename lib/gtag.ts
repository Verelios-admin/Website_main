export function trackGoogleAdsLead() {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'conversion', {
    send_to: 'AW-18037984640/lFtBCOjnxJscEICbl5lD',
    value: 1.0,
    currency: 'INR',
  });
}
