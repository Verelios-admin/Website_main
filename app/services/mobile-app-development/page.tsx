import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/mobile-app-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in India',
  description:
    'Custom iOS + Android apps from one React Native or Flutter codebase. Shipped to both stores in 3–5 weeks. Free 48-hour mockup, no upfront payment.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Custom Mobile App Development Company in India | Verelios Labs',
    description:
      'iOS + Android apps from a single React Native / Flutter codebase. Shipped to both stores in 3–5 weeks.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Custom App Development' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Custom Mobile App Development',
  name: 'Custom Mobile App Development',
  description:
    'Cross-platform iOS and Android apps built with React Native or Flutter, plus a backend in Node.js. Shipped to App Store and Play Store in 3–5 weeks.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: 99999 },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Custom Mobile App Development', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible "Frequently asked questions" Q&A below, verbatim, so the
// page is eligible for FAQ rich results and AI-answer citation.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to develop a custom mobile app in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most apps we ship cost between ₹99,999 and ₹5,00,000. The biggest cost drivers are number of screens, real-time features (chat, live data), payment flows, and backend complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical timeline is 3–5 weeks from kickoff to both stores. Simple MVPs can ship in 2 weeks; complex apps with custom backends and integrations land at 6–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle App Store and Play Store submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we set up your developer accounts (or use ours initially), prepare screenshots and descriptions, submit for review, and handle any rejections. Apple developer fee (US$99/year) and Google developer fee (one-time US$25) are billed at cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the app work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you need offline mode, we build it in. Most B2C apps require connectivity; field-operations / data-collection apps usually need offline-first with sync.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do. Source code is pushed to a GitHub repository under your account on day one, with full commit history. No vendor lock-in.',
      },
    },
  ],
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="App development · India"
          title="Custom mobile app development"
          highlight="for iOS and Android."
          lead="Verelios Labs is a team of app developers in Govind Nagar, Kanpur, building custom mobile apps for local Kanpur businesses and founders across India — one React Native or Flutter codebase, shipped to the App Store and Play Store in three to five weeks. Free 48-hour mockup, no upfront payment."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Mobile App Development', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What we build</h2>
              <p>
                We build production mobile apps for both <strong>iOS and Android from a single codebase</strong>, using either React Native (when you want maximum overlap with a web product) or Flutter (when you want the tightest native performance and a single design system). We&apos;ve shipped trading apps, news apps, real-estate apps, advisory platforms, and ERP companions — full list on our <a href="/#work">portfolio</a>.
              </p>
              <p>
                Typical apps we ship in 3–5 weeks:
              </p>
              <ul>
                <li><strong>B2C consumer apps</strong> — onboarding, push notifications, in-app payments, social sharing, deep links.</li>
                <li><strong>Fintech / trading apps</strong> — real-time data, charts, secure auth, KYC, Razorpay integration.</li>
                <li><strong>Real-estate apps</strong> — listings, map search, virtual tours, agent chat, inquiry forms.</li>
                <li><strong>Marketplace apps</strong> — buyer + seller flows, ratings, search, in-app messaging.</li>
                <li><strong>Internal company apps</strong> — sales, field operations, inventory, attendance.</li>
              </ul>

              <h2>React Native vs Flutter — which one we recommend for you</h2>
              <p>
                Both stacks ship iOS + Android from one codebase. The difference matters in three cases:
              </p>
              <h3>Pick React Native if…</h3>
              <ul>
                <li>You also have a web app and want code reuse (React on web, React Native on mobile).</li>
                <li>You have an existing React or Next.js team that can help maintain the app post-launch.</li>
                <li>You need a large library of off-the-shelf JavaScript SDKs (Stripe, Razorpay, Auth0, Firebase, Sentry — all first-class).</li>
              </ul>
              <h3>Pick Flutter if…</h3>
              <ul>
                <li>You&apos;re mobile-first or mobile-only and won&apos;t have a web app.</li>
                <li>You want a single visual design system (Material 3) that looks identical on both platforms.</li>
                <li>You&apos;re building something graphics-heavy (custom animations, real-time charts, drawing tools) where Flutter&apos;s rendering engine wins.</li>
              </ul>
              <p>
                If you&apos;re unsure, we recommend the right one on the free 15-minute call.
              </p>

              <h2>What&apos;s included by default in every app</h2>
              <ul>
                <li><strong>iOS + Android from one codebase</strong> — written once, deployed twice.</li>
                <li><strong>Custom UI/UX design</strong> — your brand, your screens, no template.</li>
                <li><strong>Backend API + database</strong> — Node.js + Postgres / MongoDB, hosted on your account.</li>
                <li><strong>Push notifications</strong> — Firebase Cloud Messaging or OneSignal.</li>
                <li><strong>Authentication</strong> — phone-OTP, Google, Apple sign-in.</li>
                <li><strong>Payments</strong> — Razorpay (UPI, cards, wallets) or Stripe.</li>
                <li><strong>App Store + Play Store submission</strong> — we handle the listings, screenshots, review process.</li>
                <li><strong>7-day post-launch support</strong> — bug fixes, store-review feedback, last-mile changes.</li>
              </ul>

              <h2>How an app project runs end-to-end</h2>
              <ol>
                <li><strong>Day 1 — free consultation.</strong> 15-minute call to map out screens, user flows, and business goals.</li>
                <li><strong>Day 2–4 — free Figma mockup.</strong> 3–5 key screens designed and clickable. You approve before any code.</li>
                <li><strong>Day 5–21 — build &amp; daily updates.</strong> We post a TestFlight / internal-track build every other day so you can use the app on your own phone as it&apos;s being built.</li>
                <li><strong>Day 22–28 — store submission.</strong> Screenshots, descriptions, privacy policy, review submission. We handle App Store rejections.</li>
                <li><strong>Launch — live on both stores.</strong> Marketing-ready, push notifications configured, analytics wired.</li>
                <li><strong>+7 days — free support.</strong> Bug fixes, App Store reviewer feedback, post-launch tweaks.</li>
              </ol>

              <h2>Pricing for custom mobile app development in India</h2>
              <p>
                Quoted up front, with no figure appearing later that you had not planned for.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Tier</th><th>Price</th><th>What it covers</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Base app</td>
                      <td className="price">from ₹99,999</td>
                      <td>A 5–8 screen app with onboarding, authentication, a core flow, push notifications, and submission to both stores</td>
                    </tr>
                    <tr>
                      <td>Larger build</td>
                      <td className="price">₹1,50,000 – ₹5,00,000</td>
                      <td>More screens, advanced backends, real-time features or external integrations. Final figure depends on scope</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="callout">
                <p>
                  <strong>Two-line message → fixed quote in 48 hours.</strong> Send us what you want to build and who it&apos;s for — we&apos;ll come back with a written quote, mockup, and delivery date.
                </p>
              </div>

              <p>
                Based in Kanpur and want to meet the team in person? See our dedicated <a href="/locations/kanpur/mobile-app-development">mobile app development company in Kanpur</a> page — a real app team in Govind Nagar you can sit across from.
              </p>

              <p>
                Comparing agencies first? Read our breakdown of the <a href="/blog/best-app-development-companies-kanpur-2026">best app development companies in Kanpur</a> before you commit to anyone.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does it cost to develop a custom mobile app in India?</h3>
              <p>
                Most apps we ship cost between <strong>₹99,999 and ₹5,00,000</strong>. The biggest cost drivers are number of screens, real-time features (chat, live data), payment flows, and backend complexity.
              </p>
              <h3>How long does it take to build an app?</h3>
              <p>
                Typical timeline is <strong>3–5 weeks</strong> from kickoff to both stores. Simple MVPs can ship in 2 weeks; complex apps with custom backends and integrations land at 6–8 weeks.
              </p>
              <h3>Do you handle App Store and Play Store submission?</h3>
              <p>
                Yes — we set up your developer accounts (or use ours initially), prepare screenshots and descriptions, submit for review, and handle any rejections. Apple developer fee (US$99/year) and Google developer fee (one-time US$25) are billed at cost.
              </p>
              <h3>Will the app work offline?</h3>
              <p>
                If you need offline mode, we build it in. Most B2C apps require connectivity; field-operations / data-collection apps usually need offline-first with sync.
              </p>
              <h3>Who owns the code?</h3>
              <p>
                You do. Source code is pushed to a GitHub repository under your account on day one, with full commit history. No vendor lock-in.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />


        <RelatedServices exclude="mobile-app-development" />

        <ClosingCta
          defaultService="Mobile App (iOS/Android)"
          heading="Ready to ship your app?"
          body="Tell us in two lines what app you want to build. We'll send a free mockup of 3–5 key screens within 48 hours — no commitment, no upfront payment."
        />
      </SubPageLayout>
    </>
  );
}
