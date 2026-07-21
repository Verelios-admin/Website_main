import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { RelatedServices } from '@/components/sub-page/RelatedServices';

const URL_PATH = '/services/web-hosting';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Managed Web Hosting & Website Maintenance — 99.9% Uptime, No Lock-In',
  description:
    'Never worry about your website going down again. Fully managed hosting & maintenance for Indian businesses — 99.9% uptime, daily backups, free SSL, security patches and a real human on WhatsApp. From ₹3,000/mo, no lock-in.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'managed web hosting India',
    'website hosting company India',
    'web hosting and maintenance India',
    'managed website hosting',
    'website maintenance services India',
    'Next.js hosting India',
    'business website hosting India',
    'managed cloud hosting India',
    'website hosting company Kanpur',
    'web hosting Kanpur',
    'website maintenance Kanpur',
    'WordPress maintenance India',
    'website uptime monitoring India',
    'SSL and backup hosting India',
    'fast web hosting for business',
  ],
  openGraph: {
    title: 'Managed Web Hosting & Website Maintenance — 99.9% Uptime | Verelios Labs',
    description:
      'Never worry about downtime again. Managed hosting & maintenance — 99.9% uptime, daily backups, free SSL, security patches, with a human on WhatsApp. From ₹3,000/mo, no lock-in.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Managed Web Hosting & Maintenance in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'Managed Web Hosting & Maintenance',
  name: 'Managed Web Hosting & Maintenance',
  description:
    'Fully managed web hosting and website maintenance for Indian businesses — uptime monitoring, daily backups, SSL, security patches, speed optimisation and ongoing support. Hosted on modern cloud infrastructure, quoted per project.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Verelios Labs',
    url: SITE,
    telephone: '+91-8299522798',
    email: 'contact@verelios.com',
    areaServed: { '@type': 'Country', name: 'India' },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: `${SITE}${URL_PATH}`,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'Web Hosting & Maintenance', item: `${SITE}${URL_PATH}` },
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
      name: 'What does managed web hosting include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everything needed to keep your site fast, secure and online — deployment, a global CDN, free SSL, daily backups, uptime monitoring with alerts, security patches, and small content or code updates. You don\'t touch a control panel or a server; if something breaks, we fix it and you hear from us on WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does managed hosting and maintenance cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We quote per project rather than selling fixed plans, because a five-page site and a high-traffic store have very different needs. The price depends on your traffic, the number of sites or apps, and how much monthly maintenance you want. Tell us your setup and we\'ll send a clear monthly figure with no hidden charges — usually far less than losing customers to a slow or down site.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you host sites you didn’t build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We take over hosting and maintenance for existing sites too — WordPress, React / Next.js, static sites or custom apps. We audit what you have, move it onto reliable infrastructure with zero downtime, and take the day-to-day upkeep off your plate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of uptime and speed can we expect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We target 99.9% uptime on cloud infrastructure with a global CDN, so your site stays fast for visitors anywhere in India and abroad. We monitor uptime and Core Web Vitals continuously and act on issues before your customers notice them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are we locked in? Who owns the hosting account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No lock-in. We can host on infrastructure we manage, or set everything up on your own cloud account (Vercel, AWS, DigitalOcean or Hostinger) so you keep full ownership. Either way you can walk away with your site and data at any time.',
      },
    },
  ],
};

export default function WebHostingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Web hosting & maintenance · India"
          title="Managed web hosting"
          highlight="so your site never keeps you up at night."
          lead="Verelios Labs offers fully managed web hosting and maintenance for Indian businesses — 99.9% uptime, daily backups, free SSL, security patches and speed monitoring, with a real human on WhatsApp when you need one. Quoted per project, no lock-in."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Web Hosting & Maintenance', href: URL_PATH },
          ]}
          ctaLabel="Get a hosting quote"
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Hosting you never have to think about</h2>
              <p>
                Most business owners don&apos;t want a hosting control panel — they want their site to be fast, secure, and simply <em>up</em>. That&apos;s what managed hosting means: we run the servers, the backups, the SSL and the updates, and you get on with your business. If something breaks at 2am, it&apos;s our problem, not yours — and you&apos;ll usually hear it&apos;s already fixed on WhatsApp before you&apos;ve even noticed.
              </p>
              <p>
                We host and maintain the sites and apps we build, and we happily take over existing ones too — whether it&apos;s a five-page business site, an <a href="/services/website-development">e-commerce store</a>, or a custom app.
              </p>

              <h2>What&apos;s included</h2>
              <ul>
                <li><strong>Fast cloud hosting + global CDN</strong> — your site is served from the edge, so it loads quickly for visitors in Kanpur, across India and abroad.</li>
                <li><strong>99.9% uptime</strong> — reliable infrastructure with monitoring that alerts us the moment anything goes down.</li>
                <li><strong>Free SSL certificate</strong> — the padlock in the browser, auto-renewed, so you&apos;re never marked &ldquo;Not secure&rdquo;.</li>
                <li><strong>Daily automated backups</strong> — with quick restore, so a bad update or a mistake is never a disaster.</li>
                <li><strong>Security patches &amp; updates</strong> — we keep the software current so you&apos;re not exposed to known vulnerabilities.</li>
                <li><strong>Speed &amp; Core Web Vitals monitoring</strong> — we watch your performance scores and fix regressions before they hurt your Google rankings.</li>
                <li><strong>Content &amp; small change updates</strong> — text edits, new images, a new section — send it on WhatsApp and we handle it.</li>
                <li><strong>Domain &amp; email setup</strong> — we point your domain, configure DNS and get professional email working.</li>
              </ul>

              <h2>Why managed hosting beats cheap shared hosting</h2>
              <p>
                The ₹99/month shared-hosting plans look cheap until your site is slow, hacked, or down during your busiest week — and there&apos;s no one to call. Cheap hosting is <strong>your problem to manage</strong>; managed hosting is <strong>ours</strong>. A slow or down website quietly costs you enquiries and Google rankings every day, which is far more expensive than doing hosting properly.
              </p>
              <p>
                A few signs you&apos;ve outgrown cheap hosting:
              </p>
              <ul>
                <li>Your site goes down and you find out from a customer, not an alert.</li>
                <li>&ldquo;Not secure&rdquo; shows in the browser because the SSL expired.</li>
                <li>Pages take five seconds to load and your bounce rate keeps climbing.</li>
                <li>Nobody actually knows where the backups are — or if there are any.</li>
                <li>A plugin or dependency broke and there&apos;s no one to fix it.</li>
              </ul>

              <h2>How we take over your hosting</h2>
              <ol>
                <li><strong>Audit.</strong> We review your current site, hosting, traffic and pain points — free.</li>
                <li><strong>Migrate with zero downtime.</strong> We move your site onto reliable infrastructure and test everything before switching the domain over.</li>
                <li><strong>Harden &amp; monitor.</strong> SSL, backups, security and uptime monitoring go live from day one.</li>
                <li><strong>Maintain.</strong> Ongoing patches, speed monitoring and content updates, with WhatsApp support whenever you need us.</li>
              </ol>

              <h2>You&apos;re never locked in</h2>
              <p>
                We can host on infrastructure we manage, or set everything up on <strong>your own cloud account</strong> — Vercel, AWS, DigitalOcean or Hostinger — so you keep full ownership of the account, the site and the data. Either way, you can walk away with everything at any time. Hosting should keep your business online, not hold it hostage.
              </p>

              <h2>Pricing for managed hosting &amp; maintenance in India</h2>
              <p>
                We quote per project rather than selling one-size-fits-all plans, because a simple business site and a high-traffic store have very different needs. The monthly figure depends on your traffic, how many sites or apps you run, and how much maintenance you want included. <a href="/#contact">Tell us your setup</a> and we&apos;ll send a clear monthly price with no hidden charges.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>What does managed web hosting include?</h3>
              <p>
                Everything needed to keep your site fast, secure and online — deployment, a global CDN, free SSL, daily backups, uptime monitoring with alerts, security patches, and small content or code updates. You don&apos;t touch a control panel or a server; if something breaks, we fix it and you hear from us on WhatsApp.
              </p>
              <h3>How much does managed hosting and maintenance cost in India?</h3>
              <p>
                We quote per project rather than selling fixed plans, because a five-page site and a high-traffic store have very different needs. The price depends on your traffic, the number of sites or apps, and how much monthly maintenance you want. Tell us your setup and we&apos;ll send a clear monthly figure with no hidden charges — usually far less than losing customers to a slow or down site.
              </p>
              <h3>Do you host sites you didn&apos;t build?</h3>
              <p>
                Yes. We take over hosting and maintenance for existing sites too — WordPress, React / Next.js, static sites or custom apps. We audit what you have, move it onto reliable infrastructure with zero downtime, and take the day-to-day upkeep off your plate.
              </p>
              <h3>What kind of uptime and speed can we expect?</h3>
              <p>
                We target 99.9% uptime on cloud infrastructure with a global CDN, so your site stays fast for visitors anywhere in India and abroad. We monitor uptime and Core Web Vitals continuously and act on issues before your customers notice them.
              </p>
              <h3>Are we locked in? Who owns the hosting account?</h3>
              <p>
                No lock-in. We can host on infrastructure we manage, or set everything up on your own cloud account (Vercel, AWS, DigitalOcean or Hostinger) so you keep full ownership. Either way you can walk away with your site and data at any time.
              </p>
            </Prose>
          </div>
        </section>

        <RelatedServices exclude="web-hosting" />

        <ClosingCta
          heading="Want hosting you can forget about?"
          body="Tell us about your current site and hosting. We'll audit it for free and send a clear monthly quote to host and maintain it — with no lock-in."
          primaryLabel="Get a hosting quote"
        />
      </SubPageLayout>
    </>
  );
}
