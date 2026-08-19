import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/about';
const SITE = 'https://www.verelios.com';
const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

export const metadata: Metadata = {
  title: 'About Us — Kanpur Software Team',
  description:
    'A software team in Govind Nagar, Kanpur, founded 2024 by Sahil Chauhan. 50+ projects delivered, seven you can open and check. You own the code.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'About Us — Kanpur Software Team',
    description:
      'A software team in Govind Nagar, Kanpur. Founded 2024 by Sahil Chauhan. Seven live client projects you can open and check for yourself.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'About Verelios Labs' }],
  },
};

// Canonical Person entity for the site's author. Blog posts reference this by
// @id instead of repeating an inline Person node, so Google and answer engines
// resolve one real, described human rather than nine loose name strings. This is
// the page that makes the "Founder & CEO" byline verifiable rather than asserted.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}/#sahil-chauhan`,
  name: 'Sahil Chauhan',
  jobTitle: 'Founder & CEO',
  url: `${SITE}${URL_PATH}`,
  worksFor: { '@id': `${SITE}/#organization` },
  knowsAbout: [
    'Web development',
    'Next.js',
    'React',
    'TypeScript',
    'Mobile app development',
    'ERP software',
    'AI automation',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '126/58 G Block, Govind Nagar',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208006',
    addressCountry: 'IN',
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE}${URL_PATH}#aboutpage`,
  url: `${SITE}${URL_PATH}`,
  name: 'About Verelios Labs',
  description:
    'Who Verelios Labs is, what it has shipped, how it works, and how to independently verify all of it.',
  mainEntity: { '@id': `${SITE}/#organization` },
  about: LOCAL_BUSINESS_REF,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}${URL_PATH}` },
  ],
};

// Every project below is a real, live site. Keep this list honest — if a client
// site goes down or is rebuilt by someone else, remove the entry rather than
// leaving a dead link, because the whole point of this page is checkability.
const PROJECTS: { name: string; what: string; href: string | null }[] = [
  { name: 'ChainShots', what: 'Web3 analytics product site', href: 'https://chainshots.com/' },
  { name: 'SuperSquad', what: 'Community platform', href: 'https://supersquad.club/' },
  { name: 'Rivali Park', what: 'Real-estate project site', href: 'https://www.rivalipark2.com/' },
  { name: 'Serene Homes', what: 'Real-estate developer site', href: 'https://www.serenehomes.co.in/' },
  { name: 'RMPD Jewellers', what: 'Jewellery retail site', href: 'https://www.rmpdjewellers.com/' },
  { name: 'Envirofluent ERP', what: 'Custom ERP for a manufacturer', href: 'https://www.envirofluent.com/' },
  // Link removed: the site currently returns HTTP 500. This page invites people to
  // click through and verify, so a dead link here is actively counterproductive.
  { name: 'PuneAIJobs', what: 'Niche job board (site currently offline)', href: null },
  { name: 'MyBiniyog', what: 'Web + mobile investment product', href: 'https://www.mybiniyog.com/' },
  { name: 'News & Media', what: 'Publisher site (under NDA)', href: null },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="About · Verelios Labs"
          title="A small software team in Kanpur"
          highlight="you can actually check up on."
          lead="Verelios Labs was founded in 2024 and works out of Govind Nagar, Kanpur. We build websites, mobile apps, ERP and AI automation for businesses across India. Everything on this page is verifiable — the office, the reviews, and seven client sites you can open right now."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The short version</h2>
              <p>
                Verelios Labs is a software studio at 126/58 G Block, Govind Nagar, Kanpur, Uttar
                Pradesh 208006. It was founded in 2024 by Sahil Chauhan. We have delivered more than
                fifty projects — websites, mobile apps, e-commerce stores, custom ERP, billing and
                payroll systems, and AI automation — for clients in Kanpur and across India, and we
                hold a 5.0 rating from 53 reviews on our Google Business Profile. Nine of them are
                listed further down this page, seven with a live link you can open right now. We
                deliberately publish only the handful we can point you at: the rest are under NDA,
                are internal systems with no public URL, or have since been handed to the
                client&apos;s own team, and we would rather show you seven you can verify than fifty
                you cannot.
              </p>
              <p>
                We are deliberately small. You are not handed to an account manager and then to a
                team you never meet. The person who scopes your project is the person who builds it,
                and you can come to the office and sit across from them.
              </p>

              <h2>Sahil Chauhan, Founder</h2>
              <p>
                Sahil founded Verelios Labs in 2024 and leads delivery on every project. He does the
                initial scoping call, writes the technical plan, and is the person on WhatsApp when
                something needs a decision. He also writes every article on{' '}
                <a href="/blog">this site&apos;s blog</a> — the pricing guides, the
                agency-selection guides and the Kanpur company round-ups are all his.
              </p>
              <p>
                His working position, in one line: most agencies in this market are slow because they
                are organised around billing hours rather than shipping. A focused team using a modern
                stack can put a real business website live in under three weeks, and the client should
                own the code at the end of it. Everything about how Verelios works follows from that.
              </p>
              <p>
                Reach him directly at{' '}
                <a href="mailto:contact@verelios.com">contact@verelios.com</a> or{' '}
                <a href="tel:+918299522798">+91 82995 22798</a>.
              </p>

              <h2>Work you can open and check</h2>
              <p>
                The fastest way to judge a development team is to look at what it has shipped. Most of
                these are live — click through and form your own view:
              </p>
              <ul>
                {PROJECTS.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong> — {p.what}
                    {p.href ? (
                      <>
                        {' · '}
                        <a href={p.href} target="_blank" rel="noopener noreferrer">
                          open the live site
                        </a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>

              <h2>How we work</h2>
              <ul>
                <li>
                  <strong>Free mockup in 48 hours.</strong> Before any money changes hands, we design
                  your homepage or a key screen so you can see the standard of work rather than take
                  our word for it.
                </li>
                <li>
                  <strong>No upfront payment.</strong> Payment is split across milestones —
                  30% at design sign-off, 30% at build, 40% on launch. You pay as work lands.
                </li>
                <li>
                  <strong>7–21 days to launch.</strong> A straightforward business site goes live in
                  about a week. E-commerce or a custom platform takes four to six weeks. We tell you
                  which one you are before you commit.
                </li>
                <li>
                  <strong>You own the code.</strong> Full repository handover. No proprietary
                  page-builder you can only host with us, no hostage situation if you leave.
                </li>
                <li>
                  <strong>One human on WhatsApp.</strong> Updates and questions get answered without
                  booking a call. We usually reply within the hour.
                </li>
                <li>
                  <strong>A week of fixes included.</strong> Bugs, copy tweaks and last-mile changes
                  are on us for the first week after launch.
                </li>
              </ul>

              <h2>Why not just hire a freelancer?</h2>
              <p>
                It is a fair question, and for some projects a good freelancer is the right answer.
                The practical difference is what happens if something goes wrong. Verelios Labs
                works from an office in Govind Nagar, Kanpur that you can walk into, bills in three
                fixed milestones rather than one lump sum, hands over the full source-code
                repository at the end, and has a public review history under its own name. There is
                no single laptop the project depends on, and no situation where the person holding
                your code stops replying.
              </p>
              <p>
                If you want the accountability of a company with an address, a phone number and
                reviews you can read, rather than a person you know only by a handle, that is the
                distinction. If your job is small and well-defined and you already trust the
                individual, a freelancer will likely be cheaper — we would rather say so than take
                the work.
              </p>

              <h2>What we build with</h2>
              <p>
                React, Next.js and TypeScript for web; React Native and Flutter for mobile; Node.js
                and TypeScript on the back end. Sites are server-rendered for search engines rather
                than assembled in the browser, which is why our own site and our clients&apos; sites
                load quickly on an ordinary Indian mobile connection. We are not tied to a particular
                CMS or page builder — the stack is chosen per project.
              </p>

              <h2>How to verify any of this</h2>
              <p>
                We would rather you checked than trusted us:
              </p>
              <ul>
                <li>
                  <strong>The reviews.</strong> Read all 53 on our{' '}
                  <a href={GBP_URL} target="_blank" rel="noopener noreferrer">
                    Google Business Profile
                  </a>
                  . They are written by named clients, several of whom are listed above.
                </li>
                <li>
                  <strong>The work.</strong> Every project link above goes to a live production site,
                  not a screenshot or a dead staging URL.
                </li>
                <li>
                  <strong>The office.</strong> 126/58 G Block, Govind Nagar, Kanpur 208006. Call
                  ahead and come in — see{' '}
                  <a href="/locations/kanpur">our Kanpur page</a> for directions.
                </li>
                <li>
                  <strong>This site.</strong> It is the same stack we sell. Run it through PageSpeed
                  Insights and judge us on our own numbers.
                </li>
              </ul>

              <h2>Where we work</h2>
              <p>
                Our office and our in-person clients are in Kanpur — Govind Nagar, Kakadeo, Swaroop
                Nagar, Kidwai Nagar, Kalyanpur, Civil Lines, Panki and Barra. We also work remotely
                with founders and businesses in Lucknow, Delhi, Mumbai, Pune, Bangalore and
                Hyderabad. For Kanpur clients we will come to your premises; everyone else we work
                with over WhatsApp, email and video.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Start with a free 48-hour mockup"
          body="Send a two-line description of what you need. We'll come back with a designed screen in 48 hours — free, no commitment, no upfront payment."
        />
      </SubPageLayout>
    </>
  );
}
