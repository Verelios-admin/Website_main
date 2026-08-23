# Client footer credits — exact snippets

Seven sites, seven snippets. Paste one per site. Details below matter more than
they look like they should.

## The three rules

**1. Vary the wording.** Do not paste identical text on all seven. Seven sites
suddenly sprouting the same sentence on the same day is the pattern Google
treats as a link scheme. Different phrasing on each reads like seven businesses
crediting their agency, which is what this actually is.

**2. Do not add `rel="nofollow"` or `rel="sponsored"`.** Those tell Google to
ignore the link, which defeats the entire point. A plain link is correct — this
is an honest credit, not paid placement. If a client's CMS adds nofollow to
external links automatically, tell me and I'll look at it.

**3. Keep it low-key.** "Website by Verelios Labs" is right. "Best website
development company in Kanpur" as the clickable text is not — over-optimised
anchor text on a footer credit looks manufactured and can work against you.

---

## The snippets

### chainshots.com
```html
Website by <a href="https://www.verelios.com">Verelios Labs</a>
```

### supersquad.club
```html
Built by <a href="https://www.verelios.com">Verelios Labs</a>
```

### envirofluent.com
```html
ERP and website by <a href="https://www.verelios.com">Verelios Labs</a>
```

### mybiniyog.com
```html
Designed and developed by <a href="https://www.verelios.com">Verelios Labs</a>
```

### rivalipark2.com
```html
Site by <a href="https://www.verelios.com">Verelios Labs</a>, Kanpur
```

### rmpdjewellers.com
```html
Website by <a href="https://www.verelios.com">Verelios Labs</a>
```

### serenehomes.co.in
```html
Developed by <a href="https://www.verelios.com">Verelios Labs</a>
```

---

## Where to put it

Footer, next to the copyright line. It should appear on **every page** of the
client's site, which a footer does automatically.

If a client would rather not have it in the footer, an "About" or "Contact" page
mention is still worth having — just less valuable, because it appears once
instead of site-wide.

## If a client says no

Drop it and move on. A credit added grudgingly and removed in a month is worth
less than the goodwill. Five of seven is a good outcome.

## When you're done

Tell me and I'll re-check all seven. The exact check I ran during the audit was:

```bash
for d in chainshots.com supersquad.club www.envirofluent.com www.mybiniyog.com \
         www.rivalipark2.com www.rmpdjewellers.com www.serenehomes.co.in; do
  n=$(curl -sL --max-time 20 -A "Mozilla/5.0" "https://$d/" | grep -ic verelios)
  printf "  %-26s verelios mentions: %s\n" "$d" "$n"
done
```

Every one returned `0` on 2026-08-23. Anything above 0 means the credit is live
and Google can find it.

## One caveat, so the expectation is right

These links will not move your rankings next week. Google has to crawl each
client site, notice the new link, and factor it in — that takes weeks, and the
effect builds rather than switches on. What they do is fix a structural problem:
an agency with 50+ projects and zero links from its own work looks, to a search
engine, like an agency with no track record. Seven real links from real
businesses in the right city start correcting that.
