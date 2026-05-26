import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const SLUG = 'how-we-ship-websites-in-3-weeks';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-05-26';

export const metadata: Metadata = {
  title: 'How We Ship Custom Websites in Under 3 Weeks',
  description:
    'The exact 21-day process Verelios Labs runs on every website project — the tools, the tight feedback loops, and the principle that "no" is a feature.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'How We Ship Custom Websites in Under 3 Weeks | Verelios Labs',
    description:
      'The exact 21-day process — tools, feedback loops, and the principle that "no" is a feature.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'How We Ship Custom Websites in Under 3 Weeks',
  description:
    'The exact 21-day process Verelios Labs runs on every website project.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${PUBLISHED}T00:00:00+05:30`,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  author: { '@type': 'Organization', name: 'Verelios Labs', url: SITE },
  publisher: {
    '@type': 'Organization',
    name: 'Verelios Labs',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo.webp` },
  },
  mainEntityOfPage: `${SITE}${URL_PATH}`,
  image: `${SITE}/logo.webp`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'How We Ship Custom Websites in Under 3 Weeks', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Process · 6 min read"
          title="How we ship custom websites"
          highlight="in under 3 weeks."
          lead="The exact 21-day process we run on every website project — the tools, the tight feedback loops, and the principle that 'no' is a feature."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'How we ship custom websites in under 3 weeks', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p>
                Most agencies in India take 8–12 weeks to build a custom website. We average 14–21 days. Same scope, same quality, same React + Next.js stack. The difference isn&apos;t speed of typing — it&apos;s the process.
              </p>
              <p>
                Here&apos;s exactly how it works.
              </p>

              <h2>The 21-day timeline</h2>
              <h3>Day 1 — free 15-minute scoping call</h3>
              <p>
                Almost always on WhatsApp or Google Meet. We ask three things: <strong>what does the business do</strong>, <strong>who is the visitor</strong>, and <strong>what one action do you want them to take</strong>. We turn that into a one-pager listing every page on the site and what each page is for.
              </p>
              <p>
                If the founder can&apos;t answer the third question in one sentence, that&apos;s the first problem we solve — and usually the most valuable part of the engagement. A site without a clear primary CTA gets built and then doesn&apos;t convert. We refuse to start without one.
              </p>

              <h3>Day 2–3 — free 48-hour mockup</h3>
              <p>
                We design the homepage in Figma. Real copy (extracted from the call), real layout, real visual hierarchy. No template, no placeholder text. The mockup is sent over WhatsApp / email with a one-line summary of the design decisions ("we put the main CTA above the fold because…").
              </p>
              <p>
                The founder either approves or asks for changes. Usually 1–2 rounds. If we&apos;re still iterating after 4 rounds, something deeper is off — usually the brief itself — and we go back to day 1.
              </p>
              <p>
                Critically: <strong>nothing gets coded until the design is approved</strong>. The biggest source of agency delays is "let&apos;s start coding and figure out design as we go" — that produces months of rework.
              </p>

              <h3>Day 4–14 — build phase with daily updates</h3>
              <p>
                The site is built in our staging environment on Vercel with a public URL the founder can open on their phone. Every day we post a 30-second WhatsApp video walking through what was built that day. The founder either signs off or sends a screenshot with arrows on it.
              </p>
              <p>
                The exact build sequence:
              </p>
              <ol>
                <li><strong>Day 4–5:</strong> homepage in code (1:1 with Figma).</li>
                <li><strong>Day 6–7:</strong> remaining pages — About, Services, Contact, etc.</li>
                <li><strong>Day 8–9:</strong> mobile responsiveness across every breakpoint (360, 414, 768, 1024, 1440, 1920).</li>
                <li><strong>Day 10–11:</strong> integrations (forms, payments, analytics, email).</li>
                <li><strong>Day 12–13:</strong> animations + polish (the 5% of the work that creates 30% of the perceived quality).</li>
                <li><strong>Day 14:</strong> SEO setup, structured data, sitemap, Google Search Console submission.</li>
              </ol>

              <h3>Day 15–18 — final review + content load</h3>
              <p>
                Founder reviews the staging site against the original spec. We populate any final copy / images they&apos;ve been gathering during the build. Run Lighthouse — must hit 90+ on mobile. Run Rich Results Test — must validate. Run accessibility scan — must clear basic WCAG.
              </p>

              <h3>Day 19 — launch</h3>
              <p>
                We point the founder&apos;s domain at Vercel, deploy production, verify analytics fires, submit sitemap to Search Console, send the launch announcement.
              </p>

              <h3>Day 20–26 — free post-launch support</h3>
              <p>
                Bug fixes, last-mile tweaks, "can we move this section here?" requests — all included in the first 7 days post-launch.
              </p>

              <h2>Three principles that make this timeline real</h2>

              <h3>1. "No" is a feature</h3>
              <p>
                The single biggest cause of website delays is scope creep — features added mid-build that nobody scoped on day 1. We refuse those in the strongest possible way: <strong>anything not on the day-1 scope doc is a change request</strong>, with its own quote and its own delivery date. This isn&apos;t a billing trick; it&apos;s a focus mechanism. It forces the founder to decide what actually matters before we burn time on it.
              </p>

              <h3>2. Tight feedback loops &gt; long planning</h3>
              <p>
                The most expensive part of any project isn&apos;t the work — it&apos;s the rework. We catch rework in days, not weeks, by showing work-in-progress every single day. If the founder is going to hate a section, we want them to hate it on Day 4 with 30 minutes invested, not Day 30 with 80 hours invested.
              </p>
              <p>
                Daily WhatsApp updates aren&apos;t a status report. They&apos;re a feedback solicitation. Every video ends with: "tell me if this is wrong before we move on."
              </p>

              <h3>3. Same stack, every project</h3>
              <p>
                We use <strong>Next.js + Tailwind + Vercel</strong> on every site. Every. Single. One. We&apos;ve built this stack 50+ times. We know its quirks cold. We have internal helper components, integration recipes, SEO templates ready to copy-paste. The marginal cost of building a new site on a familiar stack is a fraction of building on an unfamiliar one.
              </p>
              <p>
                Some agencies pride themselves on "we pick the right tech for the job". For under-₹5-lakh projects, this is usually marketing-speak for "we want to bill 2 extra weeks of figuring it out". The right tech for a marketing website in 2026 is Next.js. Period. Decisions made in advance ship faster than decisions made during.
              </p>

              <h2>What we don&apos;t do (and why)</h2>
              <ul>
                <li><strong>Long pre-engagement consulting.</strong> A 15-minute scoping call is enough to write a good brief. Multi-meeting workshops at ₹10k/hour are theatre.</li>
                <li><strong>Account managers.</strong> Founders talk directly to the people writing the code. Adds 0 overhead, removes a layer of telephone-game.</li>
                <li><strong>Daily standups with the client.</strong> A 30-second WhatsApp video is more honest than a Zoom meeting.</li>
                <li><strong>Project tracking software for the client to log in to.</strong> Jira / Asana / Monday adds friction for everyone. WhatsApp + a Google Doc is enough.</li>
                <li><strong>Custom Figma "design systems" for ₹15k brochure sites.</strong> If the site has 5 pages, a Figma file is enough. Design systems are for products with multiple teams and 100+ screens.</li>
              </ul>

              <h2>When 3 weeks is the wrong target</h2>
              <p>
                Some projects shouldn&apos;t be rushed. We explicitly extend the timeline for:
              </p>
              <ul>
                <li><strong>Custom e-commerce with multi-vendor logic</strong> (5–8 weeks).</li>
                <li><strong>Marketplaces with two-sided flows</strong> (6–10 weeks).</li>
                <li><strong>SaaS products with billing, accounts, dashboards</strong> (8–16 weeks).</li>
                <li><strong>Sites where the founder hasn&apos;t decided the brand yet</strong> (we pause for a week while they figure it out).</li>
              </ul>
              <p>
                For these, we run the same process — daily updates, tight loops, fixed scope — just over a longer timeline.
              </p>

              <hr />

              <p>
                <strong>If you&apos;re scoping a website project</strong> — send us a two-line description. We&apos;ll come back in 48 hours with a free mockup, a fixed quote, and a delivery date. <a href="/#contact">Start here</a>.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta heading="Want this process applied to your website?" />
      </SubPageLayout>
    </>
  );
}
