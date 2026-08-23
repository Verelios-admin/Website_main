# What to do next — in order

Four tasks. Roughly 2 hours total, spread over a week. Task 1 is the only one with
any risk attached, and it is reversible in two clicks.

---

# TASK 1 — Remove the duplicate tracking tags (15 min)

**What's wrong:** your site loads Google Ads twice and Google Analytics twice. Every
visitor downloads the same 334 KB of tracking code twice over, and your conversions may
be counted twice — which quietly corrupts the numbers your ad bidding relies on.

**Why it happened:** the tags are set up in **two places at once** — in your website's code
*and* inside Google Tag Manager. The code was written expecting Tag Manager to hold only
Leadfeeder. Someone later added Analytics and Ads there too.

**What we're doing:** removing them from Tag Manager, keeping the ones in the code.

> **Safety net:** Tag Manager saves a version every time you publish. If anything looks
> wrong afterwards, you click back to the previous version and you're exactly where you
> started. Nothing here is permanent.

### Step 1 — Open your container

1. Go to **https://tagmanager.google.com**
2. Sign in with the account that owns the site's tracking
3. Click the container **`GTM-KQ48CLVM`**

### Step 2 — Write down what's there (do not skip this)

1. Left menu → **Tags**
2. You'll see a list. **Screenshot it**, or write down every tag name and its Type.

Send me that screenshot before deleting anything. Here's why: I can see from outside that
Analytics and Ads are loading from Tag Manager, but I **cannot see whether someone also
built a conversion or event in there** that your website code doesn't have. If they did,
deleting blindly would lose that tracking. Two minutes of checking avoids that.

If you'd rather not wait, the rule is: only touch tags that are purely *loading* Analytics
or Ads. Leave anything that looks like it's tracking a specific action (a form submit, a
button click, a purchase).

### Step 3 — Remove the two duplicates

Find the tags whose **Type** is one of:

- `Google Tag` or `Google Analytics: GA4 Configuration` — with ID **`G-96F7T65XWE`**
- `Google Ads Conversion Tracking`, `Google Ads Remarketing`, or `Google Tag` — with ID **`AW-18037984640`**

For each one: click it → the **⋮** menu (top right) → **Delete**.

**Keep everything else.** In particular keep the **Leadfeeder / Dealfront** tag — it's a
Custom HTML tag and it's the entire reason this container exists.

### Step 4 — Publish

1. Blue **Submit** button, top right
2. Version name: `Remove duplicate GA4 + Ads tags`
3. Click **Publish**

### Step 5 — Tell me

I'll re-run Google's speed test and confirm the duplicates are gone. Expect your mobile
score to move up from 79 toward the high 80s.

### If something looks broken

Tag Manager → **Versions** (left menu) → find the version before yours → **⋮** →
**Publish**. You're back to how it was, immediately.

---

# TASK 2 — Turn on one more API (3 min)

Your key works, but only one of the two APIs is switched on. The second one is the
important one: it shows how fast your site is **on your real visitors' phones**, not on a
test machine. Right now it returns "403 Forbidden", which means "not enabled".

1. Go to **https://console.cloud.google.com**
2. Top of the page, check the project dropdown says **`verelios-seo`** (the project you
   made). If not, switch to it.
3. In the search bar at the top, type **`Chrome UX Report API`**
4. Click the result, then click the blue **Enable** button
5. Tell me — no need to send anything, the key you already gave me will just start working

That's it. Same key, one switch.

---

# TASK 3 — The seven client footer credits (30 min, highest value)

Full snippets are in **`CLIENT_FOOTER_CREDITS.md`** — one per site, already worded
differently for each.

**Short version of what to ask for:** a line in their website footer saying
*"Website by Verelios Labs"*, linking to `https://www.verelios.com`.

**Why this matters more than anything else on this list:** Google partly judges how
trustworthy a company is by who links to it. You have built seven websites and not one
of them mentions you. To Google, an agency with 50+ projects and zero links from its own
work looks like an agency with no track record. These seven links are free, they're from
real businesses in the right city, and you already have the relationship.

**Three things that decide whether they count:**

1. **Different wording on each site.** Seven identical sentences appearing the same week
   looks manufactured. The file has different phrasing for each.
2. **A normal link — not "nofollow".** If a client's site is WordPress, some plugins add
   `nofollow` to outside links automatically, which tells Google to ignore it entirely.
   If you're unsure, send me the URL once it's live and I'll check.
3. **Keep the wording plain.** "Website by Verelios Labs" is right. Don't make the
   clickable text "best website development company in Kanpur" — that reads as
   manipulation and works against you.

**If a client says no,** drop it and move on. Five out of seven is a good result.

**Set your expectations:** these won't change your rankings next week. Google has to
re-visit each client's site and notice the link, which takes weeks, and the benefit builds
gradually. What you're fixing is a structural hole, not flipping a switch.

---

# TASK 4 — Get listed in the directories (45 min)

Your competitors appear in the directories and "top 10" lists that show up on page one for
your searches. You mostly don't. Two benefits: the link itself, and being found by buyers
who never visit your site directly.

**Use this exact text every time,** so Google recognises all these listings as the same
business:

```
Verelios Labs
126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006
+91 82995 22798
https://www.verelios.com
```

**Never** use +91 84710 94125 as the main phone number — that's your WhatsApp line. Only
put it in a field specifically labelled WhatsApp.

Do them in this order:

### 1. LinkedIn Company Page — free, 10 min
You currently link your **personal** profile from the website. A company page is what
Google expects a business to have.
→ LinkedIn → the **⊞** grid icon (top right) → **Create a Company Page**
→ Send me the URL when it's live and I'll wire it into the site's data.

### 2. Clutch — free, 10 min
**A profile already exists at `clutch.co/profile/verelios-labs` and is unclaimed.** Claim
it before someone else edits it. Clutch is the most authoritative directory in your
industry, and its reviews are verified — so they carry weight your own site's testimonials
can't.
→ Find the profile → **"Claim this profile"** → then request reviews from 3–5 clients.

### 3. GoodFirms — free, 10 min
No profile exists. It's specifically for development agencies, and it doubles as a second
portfolio.
→ **https://www.goodfirms.co** → **Get Listed**

### 4. IndiaMART — free, 10 min
The big Indian B2B directory. Matches your actual customers — Kanpur factories and
traders searching for billing and ERP software.
→ **https://seller.indiamart.com** → free seller account

### 5. JustDial and Sulekha — free, 5 min each
The two directories Indian buyers use most for local services.

---

# The one thing NOT to do

Don't build location pages for Lucknow, Varanasi or anywhere else you don't have an
office.

Your biggest competitor does exactly this — five cities, one template, and their registered
address is in Lucknow while they rank for "in Kanpur". Google calls these doorway pages and
penalises them when it catches on. More importantly, your single strongest advantage is
that you are *genuinely* in Kanpur and they are not. Building fake city pages throws that
away to imitate someone you're already beating on quality.

Depth in Kanpur beats breadth you can't back up.

---

# Summary

| # | Task | Time | Who |
|---|---|---|---|
| 1 | Delete duplicate GA4 + Ads tags in Tag Manager | 15 min | You (send me the Tags screenshot first) |
| 2 | Enable Chrome UX Report API | 3 min | You |
| 3 | Seven client footer credits | 30 min | You |
| 4 | LinkedIn, Clutch, GoodFirms, IndiaMART, JustDial, Sulekha | 45 min | You |

Everything on the website itself is done. All four of these are outside the code, which is
why they're yours and not mine.

**Start with Task 2** — it's three minutes and unblocks me. Then Task 1.
