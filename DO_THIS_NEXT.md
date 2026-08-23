# What to do next — in order

Two tasks left, about 75 minutes. Both are off-site — nothing on the website needs
changing. Tasks 1 and 2 are done or cancelled; they're kept below so the record of what
happened stays intact.

---

# ~~TASK 1 — Remove the duplicate tracking tags~~ — CANCELLED

**Do not do this. There is nothing to fix.** I was wrong, and you were right to send
the screenshot first.

Your Tag Manager container holds exactly one tag — "Leadfeeder Website Tracker". There
is no Google Analytics tag and no Google Ads tag in there to delete. Your website's code
is set up correctly and Tag Manager is doing only the job it was added for.

**What I got wrong:** Google's network log showed a request ending `&gtm=4e68j0h1`, and I
read that `gtm=` as proof Tag Manager had fetched it. It isn't — that parameter is part of
Google's own tag script versioning and appears whether or not Tag Manager is involved.
Your screenshot settled it in five seconds where my reasoning had gone in circles.

**What is actually happening:** your site loads Google's tag once, then asks it to report
to two destinations (Google Ads and Analytics). Google's script then fetches a small
config for each destination. That is simply how it works, and it can't be removed without
removing the tracking itself.

This is the second time I drew the wrong conclusion here. The lesson, which I've written
into the project notes: check the actual settings screen before telling anyone to delete
something.

---

# ~~TASK 2 — Turn on one more API~~ — DONE

Chrome UX Report API is enabled and the key restriction is fixed. Both APIs now work.

**Result:** `verelios.com` returns "no data" — your site doesn't yet have enough real
visitors for Google to publish a sample. That's a traffic fact, not a speed fault, and it
means Core Web Vitals currently cost you nothing in rankings. Worth re-checking in 2–3
months.

**Useful side effect:** the same API exposed your competitors' real-user data. Not one of
them passes Core Web Vitals on real phones. sigmasoftwares.org — the site ranking #1 for
your main keyword — has a layout-shift score of **0.74**, where anything above 0.25 counts
as poor. Yours measures 0. See COMPETITOR_ANALYSIS.md.

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
| 2 | Enable Chrome UX Report API | 3 min | You |
| 3 | Seven client footer credits | 30 min | You |
| 4 | LinkedIn, Clutch, GoodFirms, IndiaMART, JustDial, Sulekha | 45 min | You |

Everything on the website itself is done and deployed. What's left is entirely off-site,
which is why it's yours rather than mine.

**Start with the client credits.** They're the highest-value item on this list and the one
nobody else can do for you.
