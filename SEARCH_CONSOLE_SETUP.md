# Connecting Google Search Console + PageSpeed

**Why bother:** this audit had to guess at three things it could have known for certain —
which page Google actually picks for each search, whether real visitors' phones are slow
(not just my test laptop), and which pages Google has even bothered to index. All three
are free. It's about 20 minutes of clicking, once.

Do Part 1 and Part 2. Part 3 is optional and takes 5 more minutes.

---

## Part 1 — Search Console (10 min)

This is Google telling you what people searched to find you, and what it thinks of
your site. It's the single most useful free tool you're not using.

### Step 1: Add the property

1. Go to **https://search.google.com/search-console**
2. Sign in with the Google account that owns your Business Profile (keeping them on one
   account saves pain later)
3. You'll see two boxes. Pick the **left** one: **Domain**
4. Type `verelios.com` — no `https://`, no `www`

> **Why the left box:** "Domain" covers `verelios.com`, `www.verelios.com`, and every
> subdomain in one property. The right box ("URL prefix") would only cover the exact
> address you type, and you'd end up with two half-blind properties.

### Step 2: Prove you own it

Google shows you a **TXT record** — a line of text starting `google-site-verification=`.
Copy it.

Now go to wherever you bought `verelios.com` (GoDaddy, Namecheap, BigRock — whoever
you pay for the domain):

1. Find **DNS** / **DNS Management** / **Manage DNS**
2. **Add a record**
3. Type: **TXT**
4. Name/Host: `@` (this means "the domain itself")
5. Value: paste the `google-site-verification=...` line
6. Save

Back in Search Console, click **Verify**. If it fails, wait 15 minutes and click again —
DNS changes take time to spread. Sometimes up to an hour.

> **If your domain is on Vercel:** it's Vercel dashboard → your project → **Settings** →
> **Domains** → click `verelios.com` → **DNS Records** → Add.

### Step 3: Submit the sitemap

Once verified: left menu → **Sitemaps** → enter `sitemap.xml` → **Submit**.

It should say "Success" and eventually report **32 discovered URLs**. If it says a
different number, something's wrong — tell me.

### Step 4: Come back in 3 days

Search Console needs a few days to collect data. Then look at:

- **Performance** — the actual searches people used to find you, and your position for
  each. This replaces guessing.
- **Pages** (under Indexing) — how many of your 32 pages Google has indexed. If some are
  excluded, it says why.

**Tell me when it has data and I'll pull it into the next audit** — it turns several
"probably" answers into "definitely".

---

## Part 2 — PageSpeed / real-world speed data (10 min)

This gets me an API key so I can measure your speed the way Google does, using data
from **real visitors' phones** rather than a test run on my machine.

1. Go to **https://console.cloud.google.com**
2. Sign in with the same Google account
3. Top of the page, next to the Google Cloud logo, click the **project dropdown** →
   **New Project**
4. Name it `verelios-seo` → **Create** → wait ~20 seconds → make sure it's now the
   selected project in that dropdown
5. In the search bar at the top, type **PageSpeed Insights API** → click the result →
   click **Enable**
6. Search again for **Chrome UX Report API** → click it → **Enable**
   *(This one is the real-visitor data. Don't skip it.)*
7. Left menu → **APIs & Services** → **Credentials**
8. **+ Create Credentials** (top) → **API key**
9. Copy the key it shows you

### Then send me the key

Paste it here and I'll store it in the right config file. It's a read-only key for public
speed data — it can't touch your site, your Business Profile, or spend money.

> **Optional but sensible:** on the Credentials page, click your new key → under
> **API restrictions** choose **Restrict key** → tick only PageSpeed Insights API and
> Chrome UX Report API → Save. That way the key can't be used for anything else if it
> ever leaks.

---

## Part 3 — Free backlink data (5 min, optional)

The audit couldn't tell you how many sites link to you, because that needs a tool. Moz
gives 2,500 lookups a month free.

1. **https://moz.com/products/api** → **Sign up free**
2. After signing up, find **API** in your account → copy the **token** / **API key**
3. Send it to me

This is what turns "your off-site authority is probably the problem" into an actual
number I can track month to month.

---

## What I'll do once you send these

| You send | I can then tell you |
|---|---|
| Search Console verified | Which page Google picks per query, what you rank for that you didn't know about, and whether all 32 pages are indexed |
| PageSpeed API key | Real visitors' Core Web Vitals — the numbers Google actually uses for ranking, not my lab estimate |
| Moz key | How many domains link to you, and how that compares to whoever is beating you on head terms |

---

## Troubleshooting

**"Verification failed"** — DNS is slow, not broken. Wait an hour, click Verify again.
Check you used `@` for the host and not `verelios.com` or `www`.

**"Couldn't fetch sitemap"** — open `https://www.verelios.com/sitemap.xml` in your
browser. If it loads, wait a day and resubmit; Search Console sometimes reports this
before it has actually tried.

**Can't find DNS settings** — tell me who you bought the domain from and I'll give you
the exact clicks.

**Two properties by accident** — harmless. Delete the URL-prefix one and keep Domain.
