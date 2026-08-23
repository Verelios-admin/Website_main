import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, GBP_URL, SOCIAL_LINKS, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/mobile-app-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Kanpur',
  description:
    'Verelios Labs — a mobile app development company in Govind Nagar, Kanpur building iOS & Android apps from one codebase. From ₹99,999. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Mobile App Development Company in Kanpur — iOS & Android | Verelios Labs',
    description:
      'iOS & Android apps from one codebase, built in Govind Nagar, Kanpur. Free 48-hour mockup, milestone payments, meet us in person. From ₹99,999. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Mobile App Development Company in Kanpur' }],
  },
};

const REVIEWS: LocalReview[] = [
  {
    author: 'Maitrey Deshpande',
    body: 'They provided the best services needed for the app, published it on the App Store, and also handle maintenance. They released my app on both the Play Store and the App Store.',
  },
  {
    author: 'Tanay Trivedi',
    body: 'They built our website really well — the design, performance and overall quality exceeded expectations. Wide range of tech support, from app and web development to ERP and CRM. Highly recommended.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) fragmented one real
// business into six schema entities and multiplied the same 53 reviews six-fold.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Mobile App Development',
  name: 'Mobile App Development Company in Kanpur',
  description:
    'Custom iOS and Android app development in Kanpur — built from one React Native or Flutter codebase for Kanpur businesses. Live on both app stores in 3–5 weeks. From ₹99,999. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: `${SITE}${URL_PATH}` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused iOS + Android app starts at ₹99,999. More complex apps — with payments, live tracking, chat, or deep backend integrations — typically range from ₹2,00,000 to ₹10,00,000+ depending on scope. We give you a fixed quote and a free 48-hour mockup before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an app in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A straightforward app is usually live on both stores in 3–5 weeks. Larger apps with complex features take 6–12 weeks. Because we build from a single React Native or Flutter codebase, iOS and Android ship together — you do not pay twice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build for both iOS and Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build from one React Native or Flutter codebase that runs on both iOS and Android, so you get both apps for close to the cost and time of one, with a consistent experience across devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the app team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are a real mobile app development company in Govind Nagar, Kanpur — not a remote studio in another city. Visit our office, or we can come to you anywhere in Kanpur: Kakadeo, Swaroop Nagar, Kidwai Nagar, Panki, Barra and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle Play Store and App Store submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we handle the full submission to the Google Play Store and Apple App Store, including store listings, screenshots and review compliance, and hand over the developer accounts and code to you. You own everything. Payments are milestone-based.',
      },
    },
  ],
};

const APP_SERVICES = [
  ['iOS & Android apps', 'Native-quality apps for iPhone and Android from a single React Native or Flutter codebase — both stores, one build, one budget.'],
  ['E-commerce & retail apps', 'Shopping apps with payments, cart, catalogue and order tracking so Kanpur retailers can sell in every pocket in the city.'],
  ['On-demand & delivery apps', 'Booking, delivery and service apps with live tracking, notifications and driver/partner flows.'],
  ['Business & internal apps', 'Field-force, sales, inventory and operations apps tailored to how your Kanpur business runs day to day.'],
  ['Healthcare & clinic apps', 'Appointment booking, records and reminders for Kanpur clinics and hospitals.'],
  ['Education & learning apps', 'Course delivery, live classes, quizzes and progress tracking for Kanpur schools and coaching institutes.'],
  ['App backend & APIs', 'Scalable, secure backends, databases and APIs powering your app — built to grow with your users.'],
  ['App redesign & maintenance', 'Modernise, speed up and maintain an existing app, plus store updates and ongoing support.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Kalyanpur',
  'Civil Lines', 'Arya Nagar', 'Panki', 'Barra', 'Naveen Market', 'Shastri Nagar', 'Ratan Lal Nagar',
];

export default function KanpurMobileAppDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="App development · Kanpur"
          title="A mobile app development company in Kanpur"
          highlight="you can actually sit across from."
          lead="Verelios Labs is a mobile app development company based in Govind Nagar, Kanpur — building iOS and Android apps from one codebase for local businesses. Free 48-hour mockup, milestone payments, and a team you can meet in person. From ₹99,999. Rated 5.0★."
          ctaLabel="Get a free 48-hour mockup"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'Mobile App Development', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur app clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The app development company in Kanpur that builds it locally</h2>
              <p>
                The catch with hiring an &ldquo;app development company in Kanpur&rdquo; is that most of the names topping Google are actually run out of metros like Bengaluru, Delhi or Noida, aiming at your city from a distance. <strong>Verelios Labs is a real mobile app development company based in Govind Nagar, Kanpur.</strong> You can visit our office, meet the developers building your app, and steer it in person. For a Kanpur retailer, service business, clinic or startup, that local presence turns an app project from a gamble into a partnership.
              </p>
              <p>
                Local doesn&apos;t mean limited. We build on <strong>React Native and Flutter</strong>, so one codebase becomes both an iOS and an Android app — near the cost and timeline of one. Modern, fast, and yours to own, with the code on your own accounts. Kanpur pricing, world-class engineering.
              </p>

              <h2>Why your Kanpur business needs an app</h2>
              <p>
                A website earns the first visit; an app earns the second, third and hundredth. For Kanpur businesses with repeat customers — retailers, delivery services, clinics, coaching institutes, gyms — an app puts your brand on the home screen, sends notifications that bring people back, and makes ordering or booking a two-tap habit. In a city where nearly everyone shops, books and pays on their phone, an app is how you stop competing on Google every single time and start owning the customer relationship directly.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real office in Govind Nagar, not a remote studio that goes quiet after launch.</li>
                <li><strong>Free 48-hour mockup</strong> — see your app designed before you pay a rupee.</li>
                <li><strong>One codebase, both stores</strong> — iOS and Android together, not billed twice.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews. <strong>You own the code.</strong></li>
                <li><strong>Open 24 hours, every day</strong>, with a real human on WhatsApp.</li>
              </ul>

              <h2>App development services we offer in Kanpur</h2>
              <p>Whatever your Kanpur business wants to put in customers&apos; pockets, here&apos;s what we build:</p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {APP_SERVICES.map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px', color: '#fff' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Prose>
              <h2>How we build an app in Kanpur, step by step</h2>
              <ol>
                <li><strong>Discovery.</strong> We sit with you — at our Govind Nagar office or yours — to map the app&apos;s core job and who uses it.</li>
                <li><strong>Free mockup &amp; wireframes.</strong> We design the key screens within 48 hours so you can see and shape the app before we build.</li>
                <li><strong>UI/UX design.</strong> We turn wireframes into a clean, on-brand interface your customers will find effortless.</li>
                <li><strong>Development.</strong> We build iOS and Android from one codebase, with a live test build and daily WhatsApp updates.</li>
                <li><strong>Testing.</strong> We test on real devices for speed, crashes and edge cases until it&apos;s solid.</li>
                <li><strong>Store launch.</strong> We submit to the Play Store and App Store, handle listings and review compliance, and hand over your accounts and code.</li>
                <li><strong>Maintenance.</strong> Updates, OS-version support and improvements as your business grows.</li>
              </ol>

              <h2>How to choose the best app development company in Kanpur</h2>
              <ul>
                <li><strong>Can you meet them?</strong> A local Kanpur team you can visit beats an anonymous out-of-town studio for trust and accountability.</li>
                <li><strong>One codebase or two?</strong> React Native or Flutter gets you both platforms efficiently — ask how they build for iOS and Android.</li>
                <li><strong>Will they show a mockup first?</strong> See your app designed before you commit budget.</li>
                <li><strong>Who owns the code and store accounts?</strong> Insist that both are yours. No lock-in.</li>
                <li><strong>Do they handle store submission?</strong> Getting past Apple&apos;s review is a skill — make sure it&apos;s included.</li>
                <li><strong>What about after launch?</strong> Apps need updates for new OS versions — check maintenance is on the table.</li>
              </ul>

              <h2>The tech stack we build on</h2>
              <ul>
                <li><strong>Cross-platform:</strong> React Native, Flutter, Expo.</li>
                <li><strong>Backend:</strong> Node.js, TypeScript, REST and GraphQL APIs.</li>
                <li><strong>Databases:</strong> PostgreSQL, Supabase, Firebase, MongoDB.</li>
                <li><strong>Payments:</strong> Razorpay, Stripe, Cashfree, UPI.</li>
                <li><strong>Notifications &amp; realtime:</strong> Firebase Cloud Messaging, WebSockets, live tracking.</li>
                <li><strong>Cloud:</strong> AWS, Google Cloud, on your own account.</li>
              </ul>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, but we build apps for businesses right across the city and can come to you:</p>
            </Prose>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '20px 0 8px' }}>
              {KANPUR_AREAS.map((a) => (
                <span
                  key={a}
                  style={{
                    fontSize: 13,
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>

            <Prose>
              <p style={{ marginTop: 24 }}>
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and founders across India. See our national <Link href="/services/mobile-app-development">mobile app development</Link> page for the full capability. Need a website or AI too? See our <Link href="/locations/kanpur/website-development">website development in Kanpur</Link> and <Link href="/locations/kanpur/ai-development">AI development in Kanpur</Link> pages, or the full <Link href="/locations/kanpur">software company in Kanpur</Link> overview.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does mobile app development cost in Kanpur?</h3>
              <p>
                A focused iOS + Android app starts at <strong>₹99,999</strong>. More complex apps — with payments, live tracking, chat, or deep backend integrations — typically range from <strong>₹2,00,000 to ₹10,00,000+</strong> depending on scope. We give you a fixed quote and a free 48-hour mockup before any work begins.
              </p>
              <h3>How long does it take to build an app in Kanpur?</h3>
              <p>
                A straightforward app is usually live on both stores in <strong>3–5 weeks</strong>. Larger apps with complex features take 6–12 weeks. Because we build from a single React Native or Flutter codebase, iOS and Android ship together — you don&apos;t pay twice.
              </p>
              <h3>Do you build for both iOS and Android?</h3>
              <p>
                Yes. We build from one React Native or Flutter codebase that runs on both iOS and Android, so you get both apps for close to the cost and time of one, with a consistent experience across devices.
              </p>
              <h3>Can we meet the app team in person in Kanpur?</h3>
              <p>
                Yes. We&apos;re a real mobile app development company in Govind Nagar, Kanpur — not a remote studio in another city. Visit our office, or we can come to you anywhere in Kanpur: Kakadeo, Swaroop Nagar, Kidwai Nagar, Panki, Barra and beyond.
              </p>
              <h3>Do you handle Play Store and App Store submission?</h3>
              <p>
                Yes — we handle the full submission to the Google Play Store and Apple App Store, including store listings, screenshots and review compliance, and hand over the developer accounts and code to you. You own everything. Payments are milestone-based.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Let's build your app, in Kanpur."
          body="Tell us in two lines what your app should do and who it's for. We'll send a free 48-hour mockup and a fixed quote — and you're welcome to visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
