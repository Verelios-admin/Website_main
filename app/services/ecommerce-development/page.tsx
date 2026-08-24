import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/ecommerce-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'E-commerce Website Development in India',
  description:
    'Custom e-commerce websites — product catalogue, cart, Indian payment gateways, delivery tracking and SEO built in. From ₹99,999, live in 3–4 weeks.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'E-commerce Website Development Company in India | Verelios Labs',
    description:
      'Online stores with catalogue, cart, Razorpay / Cashfree / UPI, delivery tracking and SEO from day one. From ₹99,999, live in 3–4 weeks. You own the code.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — E-commerce Website Development in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'E-commerce Website Development',
  name: 'E-commerce Website Development',
  description:
    'Custom e-commerce website development for Indian brands — product catalogue, variants, cart and checkout, Razorpay / Cashfree / UPI payments, COD, shipping and delivery tracking, GST invoicing, an admin panel your team can run, and technical SEO from launch.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'E-commerce Website Development', item: `${SITE}${URL_PATH}` },
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
      name: 'How much does an e-commerce website cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom online store starts at ₹99,999 and goes live in 3 to 4 weeks. That covers catalogue with variants, cart and checkout, payment gateway, COD, shipping integration, GST invoicing, an admin panel and SEO setup. Larger builds — multi-vendor marketplaces, subscriptions, B2B pricing tiers or ERP integration — typically run ₹2,50,000 to ₹8,00,000. Fixed quote up front, milestone payments (30/30/40).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use Shopify instead of a custom store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are starting out, selling a simple catalogue and want to be live next week, Shopify is genuinely the better answer and we will tell you so. Custom becomes worth it once Shopify plus its apps costs more each month than the build would amortise to, when you need B2B or party-wise pricing, when the store must read live stock from your ERP or billing system, or when you want to own the code and the customer data outright rather than rent the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which payment gateways and delivery partners do you integrate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Payments: Razorpay, Cashfree, PayU, Instamojo, Stripe, plus native UPI and cash on delivery with OTP verification to cut fake orders. Shipping: Shiprocket, Delhivery, Blue Dart, DTDC and India Post, with automatic AWB generation, label printing and live tracking pushed to the customer over email and WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my team add products and manage orders without a developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — that is the point of the admin panel. Products, variants, pricing, stock, offers, banners, coupons and content are all editable by your staff, and orders move through packed, shipped and delivered from the same screen. We train your team on it before handover and leave a written guide behind.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the store rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is built to. Server-side rendering with Next.js so product pages are crawlable, Product and Offer structured data for rich results with price and availability, clean URLs, generated sitemaps, fast Core Web Vitals and category pages designed to target real search terms. Ranking still needs content and time, but the technical foundation is in place from launch rather than retrofitted later.',
      },
    },
  ],
};

export default function EcommerceDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="E-commerce development · India"
          title="An online store"
          highlight="built to sell, not just to exist."
          lead="Verelios Labs builds custom e-commerce websites for Indian brands — catalogue, cart, Razorpay and UPI, COD, delivery tracking, GST invoicing and SEO from day one. From ₹99,999, live in 3–4 weeks. You own the code."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'E-commerce Development', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Selling online in India is mostly logistics</h2>
              <p>
                The storefront is the easy part. What decides whether an Indian e-commerce business works is everything behind it: cash on delivery and the return rate that comes with it, shipping partners and AWB tracking, GST invoicing per state, stock that has to stay honest across an online store and a physical counter, and customers who want to be updated on WhatsApp rather than email.
              </p>
              <p>
                We build stores with that reality designed in from the start. We are a team of <strong>e-commerce developers based in Govind Nagar, Kanpur</strong>, building for D2C brands, jewellery, apparel, FMCG, industrial suppliers and retailers across India.
              </p>

              <h2>What we build</h2>
              <ul>
                <li><strong>Catalogue &amp; variants</strong> — size, colour, weight and material combinations with per-variant stock, pricing and images.</li>
                <li><strong>Search &amp; filters</strong> — fast product search with filters that match how your customers actually shop, because catalogue browsing is where most stores lose people.</li>
                <li><strong>Cart &amp; checkout</strong> — a short checkout, saved addresses, guest checkout and pincode-based serviceability and delivery-date estimates.</li>
                <li><strong>Payments</strong> — Razorpay, Cashfree, PayU, Instamojo or Stripe, plus native UPI and COD with OTP verification to reduce fake orders.</li>
                <li><strong>Shipping &amp; tracking</strong> — Shiprocket, Delhivery, Blue Dart, DTDC and India Post with automatic AWB generation, label printing and live tracking.</li>
                <li><strong>GST invoicing</strong> — compliant tax invoices generated per order with correct state-wise splits and HSN codes.</li>
                <li><strong>Offers &amp; coupons</strong> — discount codes, bundles, free-shipping thresholds, first-order offers and scheduled sales.</li>
                <li><strong>Admin panel</strong> — your team manages products, stock, orders, offers and content without calling a developer.</li>
                <li><strong>Recovery &amp; retention</strong> — abandoned-cart reminders over WhatsApp and email, back-in-stock alerts, and review collection after delivery.</li>
                <li><strong>Analytics</strong> — GA4 and Meta Pixel with proper e-commerce events, so you can see which channel actually produced each sale.</li>
              </ul>

              <h2>Shopify or custom?</h2>
              <p>
                An honest answer, because this is the question that matters most and getting it wrong is expensive.
              </p>
              <p>
                <strong>Choose Shopify or WooCommerce when</strong> you are starting out, your catalogue is straightforward, you want to be live in days, and your monthly volume does not yet justify a build. We will set it up for you and say so.
              </p>
              <p>
                <strong>Choose custom when</strong> your Shopify plan plus apps has quietly become a serious monthly bill, you need B2B or party-wise pricing, your store has to read live stock from your <a href="/services/billing-inventory-software">billing and inventory system</a> or <a href="/services/erp">ERP</a>, you want a genuinely distinctive front end rather than a themed one, or you want to own the code and the customer data instead of renting the platform.
              </p>

              <h2>How an e-commerce project runs</h2>
              <ol>
                <li><strong>Free 48-hour mockup.</strong> You see the storefront and a product page before paying anything.</li>
                <li><strong>Week 1 — catalogue &amp; flow.</strong> We work out the category structure, variant model and checkout flow, then agree a fixed quote.</li>
                <li><strong>Week 1–3 — build.</strong> Storefront, admin panel and integrations, on a staging URL you can browse daily.</li>
                <li><strong>Catalogue load &amp; test orders.</strong> We import your products and run real test orders end to end — payment, invoice, AWB, tracking, refund.</li>
                <li><strong>Launch &amp; training.</strong> Go live, train your team on the admin panel, hand over the code.</li>
                <li><strong>7 days of free fixes</strong> after launch, and optional <a href="/services/web-hosting">ongoing maintenance</a>.</li>
              </ol>

              <h2>Built to be found</h2>
              <p>
                Most store builds treat SEO as something to add later, which is why so many never get organic traffic. Ours ship with server-side rendering so product pages are crawlable, <strong>Product and Offer structured data</strong> so listings can show price and availability directly in search results, clean category URLs targeting real search terms, generated sitemaps, and fast Core Web Vitals. If you also want ongoing search and ads work, that is part of our <a href="/services/website-development">website</a> and marketing engagements.
              </p>

              <h2>Pricing for e-commerce website development in India</h2>
              <p>
                A custom online store starts at <strong>₹99,999</strong> and goes live in <strong>3 to 4 weeks</strong>. Larger builds — multi-vendor marketplaces, subscriptions, B2B pricing tiers or full ERP integration — typically run <strong>₹2,50,000 to ₹8,00,000</strong>, with a fixed quote up front and milestone payments (30/30/40). A brochure site without transactions is cheaper and covered under <a href="/services/website-development">website development</a>.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does an e-commerce website cost in India?</h3>
              <p>
                A custom online store starts at ₹99,999 and goes live in 3 to 4 weeks. That covers catalogue with variants, cart and checkout, payment gateway, COD, shipping integration, GST invoicing, an admin panel and SEO setup. Larger builds — multi-vendor marketplaces, subscriptions, B2B pricing tiers or ERP integration — typically run ₹2,50,000 to ₹8,00,000. Fixed quote up front, milestone payments (30/30/40).
              </p>
              <h3>Should I use Shopify instead of a custom store?</h3>
              <p>
                If you are starting out, selling a simple catalogue and want to be live next week, Shopify is genuinely the better answer and we will tell you so. Custom becomes worth it once Shopify plus its apps costs more each month than the build would amortise to, when you need B2B or party-wise pricing, when the store must read live stock from your ERP or billing system, or when you want to own the code and the customer data outright rather than rent the platform.
              </p>
              <h3>Which payment gateways and delivery partners do you integrate?</h3>
              <p>
                Payments: Razorpay, Cashfree, PayU, Instamojo, Stripe, plus native UPI and cash on delivery with OTP verification to cut fake orders. Shipping: Shiprocket, Delhivery, Blue Dart, DTDC and India Post, with automatic AWB generation, label printing and live tracking pushed to the customer over email and WhatsApp.
              </p>
              <h3>Can my team add products and manage orders without a developer?</h3>
              <p>
                Yes — that is the point of the admin panel. Products, variants, pricing, stock, offers, banners, coupons and content are all editable by your staff, and orders move through packed, shipped and delivered from the same screen. We train your team on it before handover and leave a written guide behind.
              </p>
              <h3>Will the store rank on Google?</h3>
              <p>
                It is built to. Server-side rendering with Next.js so product pages are crawlable, Product and Offer structured data for rich results with price and availability, clean URLs, generated sitemaps, fast Core Web Vitals and category pages designed to target real search terms. Ranking still needs content and time, but the technical foundation is in place from launch rather than retrofitted later.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />

        <RelatedServices exclude="ecommerce-development" />

        <ClosingCta
          defaultService="E-commerce Website"
          heading="Ready to sell online properly?"
          body="Tell us what you sell and roughly how many products. We'll send a free 48-hour mockup of your storefront and a fixed quote — no upfront payment."
        />
      </SubPageLayout>
    </>
  );
}
