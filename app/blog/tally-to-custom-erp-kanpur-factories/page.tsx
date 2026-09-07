import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { AUTHOR_REF } from '@/lib/schema';

const SLUG = 'tally-to-custom-erp-kanpur-factories';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-09-07';
const UPDATED = '2026-09-07';

export const metadata: Metadata = {
  title: 'Tally to Custom ERP: How Kanpur Factories Move (2026)',
  description:
    'When Tally and Excel stop being enough for a Kanpur manufacturing unit — the warning signs, what the migration actually involves, and how to switch without losing a month.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Tally to Custom ERP: How Kanpur Factories Make the Move | Verelios Labs',
    description:
      'The warning signs that Tally and Excel have run out, what the migration involves, and how to switch without losing a month.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Tally to Custom ERP for Kanpur Factories' }],
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'Tally to Custom ERP: How Kanpur Factories Make the Move',
  description:
    'When Tally and Excel stop being enough for a Kanpur manufacturing unit — the warning signs, what the migration actually involves, and how to switch without losing a month.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${UPDATED}T00:00:00+05:30`,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  articleSection: 'Guides',
  keywords: 'Tally to ERP migration, custom ERP Kanpur, ERP for manufacturing India, Tally alternative, ERP migration guide',
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
    { '@type': 'ListItem', position: 3, name: 'Tally to Custom ERP: How Kanpur Factories Make the Move', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Guide · 9 min read"
          title="Tally to custom ERP: how"
          highlight="Kanpur factories move"
          lead="When Tally and Excel stop being enough for a manufacturing unit in Panki, Dada Nagar or Jajmau — the warning signs, what migration actually involves, and how to switch without losing a month."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Tally to custom ERP for Kanpur factories', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px' }}>By <a href="/about" style={{ color: 'inherit' }}>Sahil Chauhan</a> · Founder &amp; CEO, Verelios Labs · Published <time dateTime="2026-09-07">7 September 2026</time></p>

              <p>
                Let us start where most articles on this topic do not: <strong>Tally is good software, and most Kanpur units should stay on it.</strong> It handles accounting and GST properly, your CA knows it cold, and there is a consultant on every second street who can fix it. Replacing it because someone said the word &ldquo;ERP&rdquo; at a trade fair is how businesses waste six months.
              </p>
              <p>
                But there is a specific point at which Tally plus Excel stops being a system and starts being a set of disconnected files. This post is about recognising that point, and what to do when you reach it.
              </p>

              <h2>The signs you have outgrown it</h2>
              <p>
                Not one of these on its own. Three or more, consistently:
              </p>
              <ul>
                <li><strong>Month-end takes a week.</strong> Somebody merges files, matches numbers by hand, and finds a discrepancy every single month.</li>
                <li><strong>Stock on the system does not match stock on the floor.</strong> And everyone has quietly accepted a tolerance.</li>
                <li><strong>Production lives outside the system entirely.</strong> Work orders on paper, wastage in a register, job-work in someone&apos;s head.</li>
                <li><strong>Separate company files per unit.</strong> The owner sees a consolidated picture only after a manual merge, days late.</li>
                <li><strong>One person is the system.</strong> If they take leave, month-end waits. This is the most dangerous one on the list.</li>
                <li><strong>You cannot answer a customer&apos;s question without calling the godown.</strong></li>
              </ul>
              <p>
                If you recognise fewer than three, fix the process rather than buying software. Software does not repair a process that nobody follows — it enforces it, faster, and that is a different thing.
              </p>

              <h2>What replaces what</h2>
              <p>
                A common misconception is that ERP means throwing Tally out. Usually it does not. Most of our Kanpur builds keep Tally as the accounting ledger and take everything around it:
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Today</th><th>After</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Tally — accounts, GST</td><td>Tally, still, synced automatically</td></tr>
                    <tr><td>Excel — stock registers</td><td>Live inventory across godowns</td></tr>
                    <tr><td>Paper — work orders, job-work</td><td>Production module with BOM and wastage</td></tr>
                    <tr><td>Register — purchase, GRN</td><td>Purchase orders with three-way matching</td></tr>
                    <tr><td>WhatsApp — shop-floor updates</td><td>Status visible to whoever needs it</td></tr>
                    <tr><td>Manual merge at month-end</td><td>One consolidated view, live</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Keeping Tally is deliberate. Your CA&apos;s workflow does not change, filings carry on as before, and you remove one enormous objection from the people who have to approve the project.
              </p>

              <h2>How the migration actually runs</h2>
              <p>
                Ten to fourteen weeks for a full system, and the sequence matters more than the speed.
              </p>
              <ul>
                <li><strong>Week 1 — process capture, no code.</strong> Someone sits on your shop floor and writes down what actually happens, including the rules nobody has ever written down. This is the week that decides whether the project works.</li>
                <li><strong>Weeks 1–2 — blueprint and fixed quote.</strong> Every screen, rule and integration on one page with a price. You approve before anyone builds.</li>
                <li><strong>Weeks 2–10 — build, in modules.</strong> Inventory first, because it is the foundation everything else reads from. Then purchase, production, sales. A staging system your team can open every day.</li>
                <li><strong>Weeks 8–12 — data migration.</strong> Item masters, then parties, then opening stock, then balances. In that order, every time.</li>
                <li><strong>Weeks 10–14 — parallel running.</strong> Both systems, side by side, for a full cycle. You switch only when the closing figures match to the rupee.</li>
                <li><strong>Rollout and training.</strong> On-site, in Hindi, with the people who will actually use it.</li>
              </ul>
              <p>
                <strong>Do not skip the parallel run.</strong> It is the step clients most often want to compress, and the one that separates a smooth switch from a bad quarter.
              </p>

              <h2>What goes wrong, honestly</h2>
              <ul>
                <li><strong>The rules were never written down.</strong> Every unit has undocumented logic — a rate that changes by season, a wastage allowance that varies by operator. If discovery is rushed, these surface during parallel running as &ldquo;the software is wrong&rdquo;.</li>
                <li><strong>Dirty master data.</strong> Duplicate parties, one item under three spellings, stock on paper that is not on the shelf. Every migration finds this. Budget time for the cleanup.</li>
                <li><strong>The floor was not consulted.</strong> A system designed with only the owner and the accountant in the room gets quietly bypassed by the people who have to use it.</li>
                <li><strong>Scope creeping mid-build.</strong> Every &ldquo;while you are at it&rdquo; costs a week. Write version two down and build it later.</li>
                <li><strong>Going live at year-end.</strong> Never switch in March. Pick a quiet month.</li>
              </ul>

              <h2>What it costs</h2>
              <p>
                A focused module set — inventory plus purchase, say — starts at <strong>₹99,999</strong>. A full ERP covering inventory, manufacturing, purchase, sales and accounting typically runs <strong>₹2,50,000 to ₹10,00,000+</strong>, depending on how many modules and integrations it carries.
              </p>
              <p>
                Fixed quote before any code, milestone payments of 30/30/40, hosting cost shown up front, and the source code in a repository under your own organisation. For a full comparison of subscription versus build, including the break-even maths, see our <a href="/blog/erp-software-cost-india-2026">guide to ERP software cost in India</a>.
              </p>

              <h2>Start smaller than you think</h2>
              <p>
                The best outcomes we have seen in Kanpur did not start with a full ERP. They started with the one module where the pain was sharpest — usually <a href="/services/billing-inventory-software">billing and inventory</a> — proved it worked for a quarter, and grew from there. Modules added onto something already running are cheaper and far less risky than a big-bang replacement.
              </p>
              <p>
                If the pain is really enquiries going cold rather than stock going missing, the first module is a <a href="/services/crm-software-development">CRM</a> instead.
              </p>

              <hr />

              <p>
                <strong>Not sure whether you have outgrown Tally?</strong> Tell us what happens at your month-end. If the honest answer is that Tally is fine, we will say so — we have talked units out of ERP projects before. <a href="#enquire">Ask here</a>, or come to the office in Govind Nagar.
              </p>
              <p>
                More on <a href="/locations/kanpur/erp-software">custom ERP in Kanpur</a>, or see our roundup of <a href="/blog/best-erp-software-companies-kanpur-2026">ERP software companies in Kanpur</a>.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta heading="Talk it through before you commit" defaultService="ERP Software" />
      </SubPageLayout>
    </>
  );
}
