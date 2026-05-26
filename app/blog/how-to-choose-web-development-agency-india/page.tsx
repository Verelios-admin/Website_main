import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const SLUG = 'how-to-choose-web-development-agency-india';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-05-26';

export const metadata: Metadata = {
  title: 'How to Choose a Web Development Agency in India',
  description:
    'Ten questions that separate good agencies from cheap ones. Red flags to watch for, green flags worth paying more for, and the trade-offs that matter.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'How to Choose a Web Development Agency in India | Verelios Labs',
    description:
      'Ten questions to ask, red flags to watch for, green flags worth paying more for.',
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
  headline: 'How to Choose a Web Development Agency in India',
  description:
    'Ten questions that separate good agencies from cheap ones.',
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
    { '@type': 'ListItem', position: 3, name: 'How to Choose a Web Development Agency in India', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Hiring · 7 min read"
          title="How to choose a web"
          highlight="development agency in India."
          lead="Ten questions to separate good agencies from cheap ones. The red flags, the green flags, and the trade-offs that matter."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'How to choose a web development agency in India', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p>
                There are hundreds of agencies in India that will build you a website. Picking the wrong one costs you 2–6 months of delay and 1.5–3× the price you actually should have paid. Here are the questions that separate the ones who&apos;ll ship from the ones who won&apos;t.
              </p>

              <h2>The 10 questions to ask before signing</h2>

              <h3>1. Can I see the actual code from past projects?</h3>
              <p>
                Not screenshots — the live site. Open it in Chrome DevTools, look at the Network tab. A well-built site loads under 2 seconds, has fewer than 30 requests on first load, and a PageSpeed score above 90. A "we built this" claim with a site that loads in 8 seconds is a red flag.
              </p>

              <h3>2. What&apos;s the payment schedule?</h3>
              <p>
                The right answer is something like "30% to start, 30% at mid-delivery, 40% at launch" — milestone-based. The wrong answers are "100% upfront" (you have no leverage if they ghost) and "pay nothing until done" (they have no skin in the game, won&apos;t start work).
              </p>

              <h3>3. Who owns the code at the end?</h3>
              <p>
                You. The contract should explicitly transfer IP to you and the code should live in a GitHub repository under your organisation from day one. If they say "we&apos;ll give you a zip file" — walk away. If they say "we keep the code and you license it" — definitely walk away.
              </p>

              <h3>4. What stack are you using and why?</h3>
              <p>
                There&apos;s no single right answer, but there are wrong answers. <strong>React + Next.js + TypeScript</strong> is the modern default — fast, SEO-friendly, easy to hire for. <strong>WordPress</strong> is fine for blog-heavy / brochure sites with non-technical owners. <strong>Wix, Squarespace, Webflow</strong> are not "custom development" — they&apos;re template platforms. If an agency claims "custom" and uses these, they&apos;re mis-selling.
              </p>

              <h3>5. How do we communicate during the project?</h3>
              <p>
                Look for: <strong>WhatsApp + daily updates</strong>, OR <strong>Slack + daily standups</strong>, OR <strong>email + weekly demos</strong>. Run from: "we&apos;ll show you the final result". You want to see work-in-progress every couple of days so you can course-correct early.
              </p>

              <h3>6. What&apos;s in scope, and what isn&apos;t?</h3>
              <p>
                Ask for a written scope document listing every page, every form, every integration. Anything outside the scope is "change request" pricing. Without a scope doc, "scope creep" becomes a way for an agency to keep billing forever.
              </p>

              <h3>7. What&apos;s your timeline and what&apos;s the penalty if you miss it?</h3>
              <p>
                Good agencies will commit to a delivery date in writing. Great agencies will commit to a discount or refund if they miss it. Bad agencies will give you a "rough estimate" that magically inflates the moment you sign.
              </p>

              <h3>8. How will SEO be handled?</h3>
              <p>
                The right answer includes: semantic HTML, server-rendered pages (or proper static export), meta tags + OpenGraph, structured data / JSON-LD, XML sitemap, robots.txt, Google Search Console setup. The wrong answer is "we&apos;ll add SEO at the end as an extra" — at that stage it&apos;s too late for the architectural decisions that matter.
              </p>

              <h3>9. What happens after launch?</h3>
              <p>
                Look for: <strong>included post-launch support window</strong> (7–30 days) followed by an optional monthly maintenance plan. Pay attention to whether they&apos;ll respond on WhatsApp / Slack in &lt;24h or whether you need to submit support tickets.
              </p>

              <h3>10. Can I talk to one of your past clients?</h3>
              <p>
                A good agency will happily connect you with 1–2 past clients for a 10-minute reference call. If they refuse — or only have written testimonials with no contact info — that&apos;s a red flag.
              </p>

              <h2>Red flags (run, don&apos;t walk)</h2>
              <ul>
                <li><strong>"We&apos;ll send the design, then write code if you like it."</strong> No production-shipping agency works for free up front beyond a 1-hour scoping call + a small free mockup.</li>
                <li><strong>"Lifetime maintenance free."</strong> Nothing is free for life. Either it&apos;s a marketing line or they&apos;ll vanish in 6 months.</li>
                <li><strong>"Pay us in cash to avoid GST."</strong> Walk away. They&apos;ll do the same thing on tax, and on hiding bugs.</li>
                <li><strong>No GST number on their invoice.</strong> Doing business with an unregistered vendor exposes you to compliance issues.</li>
                <li><strong>The portfolio links don&apos;t work.</strong> The sites are 404 or load a placeholder. Either the work was bad or the work was fake.</li>
                <li><strong>Only one person doing everything.</strong> Even a "small studio" should have at least 2–3 people. A solo freelancer is fine for ₹15k brochure sites; for anything bigger you need redundancy.</li>
              </ul>

              <h2>Green flags worth paying more for</h2>
              <ul>
                <li><strong>Free 48-hour mockup before commitment.</strong> Tells you they have the design chops and the bandwidth.</li>
                <li><strong>Fixed-quote pricing with milestone payments.</strong> Aligns incentives — they only get paid as you see progress.</li>
                <li><strong>Public preview link from day 1.</strong> You can poke at the site while it&apos;s being built.</li>
                <li><strong>Daily WhatsApp updates.</strong> Catches problems early.</li>
                <li><strong>Source code in your GitHub from day 1.</strong> No vendor lock-in.</li>
                <li><strong>PageSpeed scores included in the deliverable.</strong> Means they actually care about performance, not just visuals.</li>
                <li><strong>Post-launch support window in the contract.</strong> 7–30 days of free fixes after go-live.</li>
                <li><strong>They&apos;ve worked with someone in your industry before.</strong> Domain knowledge matters more than people admit.</li>
              </ul>

              <h2>Trade-offs nobody talks about</h2>
              <h3>Big agency vs small studio vs freelancer</h3>
              <ul>
                <li><strong>Big agencies</strong> (50+ people) are best when budget is &gt;₹10 lakh, you need account-management hand-holding, and you don&apos;t mind paying 30–50% overhead for project managers + sales people. Bad if you want speed or direct contact with the people doing the work.</li>
                <li><strong>Small studios</strong> (3–10 people) hit the sweet spot for projects between ₹50k and ₹5 lakh. You usually talk to the founder directly. Fastest decisions, best price-to-quality ratio. The trade-off: their portfolio is narrower.</li>
                <li><strong>Freelancers</strong> work for ₹10–50k brochure sites where you have detailed specs and don&apos;t need design help. Trade-off: one person = one point of failure. If they get sick, the project stalls.</li>
              </ul>

              <h3>India vs offshore (US / EU agencies hiring Indian dev shops)</h3>
              <p>
                Cutting out the middleman saves 40–60%. The "agency in San Francisco" you&apos;re paying ₹15 lakh is often subcontracting to a team in Bangalore. Go direct and you pay ₹5 lakh for the same work.
              </p>

              <h3>Indian agency vs Indian freelance on Upwork</h3>
              <p>
                Upwork is cheaper hourly but has higher risk: no NDA enforcement, no Indian-law contract, no recourse if work isn&apos;t delivered. A registered Indian agency with a GST number and a physical office is meaningfully safer for projects above ₹50k.
              </p>

              <h2>Final checklist before you sign</h2>
              <ol>
                <li>Written scope document listing every page and integration.</li>
                <li>Fixed-quote price with milestone schedule.</li>
                <li>Delivery date committed in writing.</li>
                <li>IP transfer clause — code is yours.</li>
                <li>Post-launch support window (7–30 days).</li>
                <li>GST number on their proposal.</li>
                <li>At least one reference client you can call.</li>
                <li>A free mockup of the homepage before you pay anything.</li>
              </ol>

              <hr />

              <p>
                <strong>If you&apos;re currently shortlisting agencies</strong> — we hit every green flag on this list. <a href="/#contact">Send us a two-line message</a> and we&apos;ll show you a free 48-hour mockup, a fixed quote, and a delivery date. No commitment.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta heading="Talk to us before you sign with anyone" />
      </SubPageLayout>
    </>
  );
}
