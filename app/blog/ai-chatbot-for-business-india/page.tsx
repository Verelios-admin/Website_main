import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const SLUG = 'ai-chatbot-for-business-india';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-06-26';

export const metadata: Metadata = {
  title: 'Should Your Business Get an AI Chatbot? (India, 2026)',
  description:
    'A straight guide to AI chatbots for Indian businesses — what a good one actually does, what it costs to build and run, where it goes wrong, and how to know if you need one.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'AI chatbot for business India',
    'AI chatbot development India',
    'WhatsApp chatbot India',
    'customer support automation India',
    'AI chatbot cost India',
  ],
  openGraph: {
    title: 'Should Your Business Get an AI Chatbot? (India, 2026) | Verelios Labs',
    description:
      'What a good AI chatbot actually does, what it costs to build and run, and how to know if you need one.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'Should Your Business Get an AI Chatbot? (India, 2026)',
  description:
    'A straight guide to AI chatbots for Indian businesses — what a good one does, what it costs, where it goes wrong, and how to know if you need one.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${PUBLISHED}T00:00:00+05:30`,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  wordCount: 1300,
  articleSection: 'AI Automation',
  keywords: 'AI chatbot for business India, AI chatbot development India, WhatsApp chatbot India, AI chatbot cost India',
  author: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Verelios Labs', url: SITE },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Should Your Business Get an AI Chatbot?', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI automation · 8 min read"
          title="Should your business"
          highlight="get an AI chatbot?"
          lead="What a good chatbot actually does, what it costs to build and run in India, where they go wrong, and a simple test for whether you need one at all."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Should your business get an AI chatbot?', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p>
                Every business owner has been pitched an AI chatbot in the last year. Some need one; many don&apos;t. The difference comes down to whether you&apos;re answering the same questions over and over, and losing customers when you&apos;re slow to reply. Here&apos;s an honest look at what a modern chatbot does, what it costs, and how to decide.
              </p>

              <h2>What a good AI chatbot actually does in 2026</h2>
              <p>
                Forget the old &quot;press 1 for sales&quot; menus. A modern chatbot is trained on <strong>your own content</strong> — your pricing, policies, product catalogue, FAQs — and answers in plain language. A good one will:
              </p>
              <ul>
                <li>Answer routine questions instantly, in English or Hindi, day or night.</li>
                <li>Pull from your real information instead of making things up, because it&apos;s grounded in your documents (a technique called retrieval, or RAG).</li>
                <li>Capture the visitor&apos;s details and log the conversation as a lead.</li>
                <li>Know its limits — and hand off to a human cleanly when the question is genuinely complex or high-value.</li>
              </ul>
              <p>
                The point isn&apos;t to replace your team. It&apos;s to stop them answering &quot;what are your timings?&quot; for the fortieth time today, so they can handle the conversations that actually need a person.
              </p>

              <h2>Website widget or WhatsApp?</h2>
              <p>
                In India, WhatsApp is often the better channel — it&apos;s where customers already are, and a WhatsApp chatbot can qualify and reply to leads the moment they message. A website widget makes sense when most enquiries start on your site and you want instant answers before a visitor bounces. Many businesses run both, sharing the same underlying knowledge so answers stay consistent.
              </p>

              <h2>What it costs to build and run</h2>
              <p>
                A focused chatbot trained on your content typically costs <strong>₹49,999 to ₹1,50,000</strong> to build, depending on how much material it needs to learn, how many channels it lives on, and how deeply it integrates with your CRM or systems. A simple FAQ bot sits at the lower end; one that books appointments, checks order status, or talks to your database sits higher.
              </p>
              <p>
                Then there&apos;s the running cost. A hosted chatbot pays per conversation for the model it uses — usually a few hundred to a few thousand rupees a month for a small business, more as volume grows. WhatsApp&apos;s Business API also has its own per-conversation pricing. A good build estimates this for your expected volume <em>before</em> you commit, so the monthly bill never surprises you.
              </p>

              <h2>Where chatbots go wrong</h2>
              <ul>
                <li><strong>It makes things up.</strong> A bot not grounded in your real content will invent answers confidently. Insist on retrieval from your own documents.</li>
                <li><strong>It traps the customer.</strong> If there&apos;s no easy way to reach a human, a stuck bot becomes worse than no bot. A clean handoff is non-negotiable.</li>
                <li><strong>Nobody updates it.</strong> Prices change, policies change. A chatbot needs its knowledge refreshed, or it starts giving wrong answers.</li>
                <li><strong>It&apos;s built for a problem you don&apos;t have.</strong> If you get five enquiries a week, a chatbot is solving nothing — a faster human reply does the job.</li>
              </ul>

              <h2>A simple test: do you actually need one?</h2>
              <p>
                You probably do if: you answer the same handful of questions repeatedly, enquiries come in outside working hours, or you lose leads because no one replied in time. You probably don&apos;t (yet) if: your volume is low, every enquiry is genuinely different, or your real bottleneck is fulfilment rather than first response. Be honest here — a chatbot fixes a response-speed problem, not a demand problem.
              </p>

              <h2>How a chatbot project runs</h2>
              <ol>
                <li><strong>Gather knowledge.</strong> We collect your FAQs, pricing, policies and catalogue — whatever the bot should know.</li>
                <li><strong>Build &amp; ground.</strong> The bot is set up to answer only from that material, with a clear handoff path to a human.</li>
                <li><strong>Test on real questions.</strong> We run it against the questions your customers actually ask and tune the answers.</li>
                <li><strong>Launch on your channel(s).</strong> Website, WhatsApp, or both.</li>
                <li><strong>Tune for 30 days.</strong> Real conversations reveal gaps; we close them.</li>
              </ol>

              <hr />

              <p>
                <strong>Wondering if a chatbot is right for your business?</strong> Tell us the questions your team answers most, and we&apos;ll tell you honestly whether a bot helps — and what it would cost. <a href="/services/ai-automation">See our AI automation work</a> or <a href="/#contact">send us a two-line message</a>.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Curious whether a chatbot fits?"
          body="Tell us the questions you answer most. We'll tell you honestly if a bot helps — and what it costs."
        />
      </SubPageLayout>
    </>
  );
}
