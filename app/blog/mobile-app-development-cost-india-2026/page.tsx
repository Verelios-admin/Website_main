import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { AUTHOR_REF } from '@/lib/schema';

const SLUG = 'mobile-app-development-cost-india-2026';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-09-07';
const UPDATED = '2026-09-07';

export const metadata: Metadata = {
  title: 'Mobile App Development Cost in India (2026)',
  description:
    'What an Android or iOS app actually costs in India in 2026 — ranges by complexity, why cross-platform cuts 30–40%, and the running costs nobody quotes upfront.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Mobile App Development Cost in India (2026 Guide) | Verelios Labs',
    description:
      'Ranges by complexity, why cross-platform cuts 30–40% off the bill, and the running costs nobody quotes upfront.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Mobile App Development Cost in India' }],
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'Mobile App Development Cost in India (2026 Guide)',
  description:
    'What an Android or iOS app actually costs in India in 2026 — ranges by complexity, why cross-platform cuts 30–40%, and the running costs nobody quotes upfront.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${UPDATED}T00:00:00+05:30`,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  articleSection: 'Pricing',
  keywords: 'mobile app development cost India, app development price India, android app cost, iOS app cost, app development cost 2026',
  author: AUTHOR_REF,
  publisher: { '@id': `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}${URL_PATH}`,
  image: {
    '@type': 'ImageObject',
    url: `${SITE}/logo.webp`,
    width: 1200,
    height: 630,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development Cost in India (2026 Guide)', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Pricing · 8 min read"
          title="Mobile app development cost in India"
          highlight="(2026)"
          lead="What an Android or iOS app actually costs in India in 2026 — honest ranges by complexity, why cross-platform cuts 30 to 40% off the bill, and the running costs that rarely make it into a quote."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Mobile app development cost in India', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px' }}>By <a href="/about" style={{ color: 'inherit' }}>Sahil Chauhan</a> · Founder &amp; CEO, Verelios Labs · Published <time dateTime="2026-09-07">7 September 2026</time></p>

              <p>
                If you have searched this before, you will have seen figures anywhere from ₹50,000 to ₹2 crore. Both are real — they are just answers to different questions. A booking app for one restaurant chain and a consumer marketplace with payments, chat and live tracking are not the same product, and quoting them in one range is how people end up shocked.
              </p>
              <p>
                Here is the honest breakdown by what you are actually building.
              </p>

              <h2>Ranges by complexity, 2026 India prices</h2>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>What you&apos;re building</th><th>Typical range</th><th>Timeline</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MVP — one core flow, real users, built to be thrown away or grown</td>
                      <td className="price">₹1,20,000 – ₹2,50,000</td>
                      <td>6–10 weeks</td>
                    </tr>
                    <tr>
                      <td>Simple app — catalogue, forms, notifications, no payments</td>
                      <td className="price">₹1,50,000 – ₹3,50,000</td>
                      <td>8–12 weeks</td>
                    </tr>
                    <tr>
                      <td>Medium — login, payments, dashboards, admin panel</td>
                      <td className="price">₹3,50,000 – ₹8,00,000</td>
                      <td>12–20 weeks</td>
                    </tr>
                    <tr>
                      <td>Enterprise — roles, integrations, offline sync, scale</td>
                      <td className="price">₹8,00,000 – ₹20,00,000+</td>
                      <td>20–36 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For context, the same work commissioned from a US or UK team generally runs 60 to 70% higher, which is most of why Indian studios get the enquiry in the first place.
              </p>

              <h2>The single biggest lever: cross-platform</h2>
              <p>
                Building Android and iOS as two separate native apps means writing, testing and maintaining the same product twice. Building once in React Native or Flutter and shipping to both stores typically cuts <strong>30 to 40%</strong> off the bill, and rather more off the maintenance, because there is one codebase to fix instead of two.
              </p>
              <p>
                When native is still worth it: heavy camera or sensor work, augmented reality, serious background processing, or an interface that has to feel absolutely native on both platforms. For the overwhelming majority of business apps — orders, bookings, loyalty, tracking, field data — cross-platform is the right call and the saving is real. We build <a href="/services/mobile-app-development">iOS and Android from one codebase</a> for exactly this reason.
              </p>

              <h2>What drives a quote to the top of its range</h2>
              <ul>
                <li><strong>Payments.</strong> A gateway is a week. Wallets, refunds, split payments, subscriptions and reconciliation is a month.</li>
                <li><strong>Real-time anything.</strong> Live tracking, chat, and live inventory need infrastructure that polling does not.</li>
                <li><strong>Offline mode.</strong> Working without a signal and syncing cleanly afterwards is one of the most expensive features in mobile, and one of the most commonly requested in India.</li>
                <li><strong>Roles and permissions.</strong> Three user types is three apps wearing one icon.</li>
                <li><strong>Integrations.</strong> Your ERP, your billing system, a courier API, a payment reconciliation file.</li>
                <li><strong>An admin panel.</strong> Frequently forgotten at quoting time, and frequently a third of the work — someone has to manage the content and the orders.</li>
              </ul>

              <h2>The running costs, which are the ones people miss</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Item</th><th>Cost</th><th>How often</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Apple Developer Program</td><td className="price">about ₹8,900</td><td>every year, forever</td></tr>
                    <tr><td>Google Play Console</td><td className="price">about ₹2,200</td><td>one time</td></tr>
                    <tr><td>Backend hosting &amp; database</td><td className="price">₹1,500 – ₹15,000</td><td>monthly, grows with users</td></tr>
                    <tr><td>Maintenance &amp; OS updates</td><td className="price">₹15,000 – ₹40,000</td><td>monthly</td></tr>
                    <tr><td>Push notifications, SMS, email</td><td className="price">usage-based</td><td>monthly</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                That maintenance line is not optional padding. Apple and Google both ship breaking changes every year, and an app nobody updates stops working within about eighteen months. Budget for it from day one or you will be paying to rebuild instead.
              </p>

              <h2>Why quotes for the same app differ by 5x</h2>
              <ul>
                <li><strong>The cheap quote is a template.</strong> Fine if you know that is what you are buying. Not fine if you were sold &ldquo;custom&rdquo;.</li>
                <li><strong>The cheap quote excludes the admin panel.</strong> Ask explicitly whether managing content and orders is included.</li>
                <li><strong>The cheap quote is one platform.</strong> Check whether iOS is in the number.</li>
                <li><strong>The cheap quote has no store submission.</strong> Getting through Apple review is a real task with real rejections.</li>
                <li><strong>Nobody has scoped it.</strong> A quote given without asking questions is a guess, and the shortfall arrives as change requests.</li>
              </ul>

              <h2>How to spend less without buying something worse</h2>
              <ul>
                <li><strong>Ship one flow properly.</strong> The feature list you have in mind is roughly three times what version one needs.</li>
                <li><strong>Cross-platform unless there is a reason not to.</strong> The saving is the single biggest one available.</li>
                <li><strong>Ask whether it needs to be an app at all.</strong> If discovery matters more than repeat use, a fast <a href="/services/website-development">mobile website</a> costs a fraction and nobody has to install it. We have talked clients out of apps for this reason.</li>
                <li><strong>Use managed infrastructure early.</strong> Custom backend work you do not need yet is the most common form of waste.</li>
                <li><strong>Get the source code.</strong> Not a cost saving today, but it is what stops the second version costing as much as the first.</li>
              </ul>

              <h2>What we charge, for reference</h2>
              <p>
                Our <a href="/services/mobile-app-development">app development</a> starts at <strong>₹99,999</strong> and most projects ship in three to five weeks, because we build cross-platform and keep version one tight. Fixed quote before any code, milestone payments of 30/30/40, publishing to both stores included, and the repository under your own organisation.
              </p>
              <p>
                If the app is really a window onto a business system — orders against live stock, field staff against a central database — the honest answer is often that you need the system first. That is <a href="/services/erp">custom ERP</a> or a <a href="/services/custom-software-development">custom internal tool</a>, with the app as a client on top.
              </p>

              <hr />

              <p>
                <strong>Want a real number?</strong> Describe the app in two lines — who uses it and what they do in it. We will send a free 48-hour mockup and a fixed written quote, with no upfront payment. <a href="#enquire">Start here</a>.
              </p>
              <p>
                In Kanpur? See <a href="/locations/kanpur/mobile-app-development">app development in Kanpur</a>, or our roundup of <a href="/blog/best-app-development-companies-kanpur-2026">app development companies in Kanpur</a>.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta heading="Get a fixed app quote in 48 hours" defaultService="Mobile App (iOS/Android)" />
      </SubPageLayout>
    </>
  );
}
