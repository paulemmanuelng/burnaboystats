# Design brief — The Afrobeats Board, plus three fixes on the live site

**For:** Claude design
**Status:** four separate jobs in one brief. Job 4 is the big one.
**Branch:** `feat/afrobeats-board` — **the Afrobeats Board is NOT live.** Everything in Jobs 1 and 4 exists only on that branch. Jobs 2 and 3 are on the live site today.
**Date:** 19 August 2026

---

## 0. Read this first — how to actually see the pages

Three of the four jobs concern pages you cannot reach from burnaboystats.com, because they have never been deployed. Do not design from this document alone; look at the real thing first.

### Option A — the Vercel preview (fastest, needs Paul to open a door)

The branch builds a preview on every push. The current one is:

```
https://burnaboystats-ohf81oitr-paulemmanuelngs-projects.vercel.app
```

It currently answers **302** to the public — Vercel Deployment Protection is on. **Paul:** either add the designer to the Vercel project, or generate a *Protection Bypass for Automation* / *shareable link* under **Vercel → burnaboystats → Settings → Deployment Protection**. Until that is done, this link is useless to anyone outside the team.

### Option B — run it locally (always works)

```bash
git clone https://github.com/paulemmanuelng/burnaboystats.git
cd burnaboystats
git checkout feat/afrobeats-board
npm install
npm run dev            # http://localhost:3000
```

### The routes this brief covers

| route | what it is | has a mobile design? |
|---|---|---|
| `/afrobeats` | the board — a grid of ten artists | **no** |
| `/afrobeats/asake` | one artist: certifications + links out | **no** |
| `/afrobeats/asake/charts` | that artist's official chart peaks | reuses Burna Boy's |
| `/afrobeats/asake/live` | that artist's live platform charts | reuses Burna Boy's |
| `/certifications` | Burna Boy's own certifications (**live**) | yes |
| `/` | home (**live**) | yes |

Use `asake`, `seyi-vibez` and `wizkid` when testing — they are the heaviest pages and the ones that break first. `ayra-starr` is the lightest.

---

## 1. What this site is, in one paragraph

burnaboystats.com is a fan-built statistics reference for Burna Boy — certifications, chart runs, awards, tours, streaming records. Its entire value is **verification**: every figure traces to the body that issued it, estimates are labelled, and conflicting sources are disclosed rather than quietly resolved. The visual language is editorial and data-forward: heavy display type (Anton), gold on near-black, monospace labels, hairline rules. It should read like a well-made almanac, not a fan blog.

**The Afrobeats Board is new.** It is the first section about *other* artists: nine of them, counted by exactly the rules used for Burna Boy, so the two records can be read side by side. Burna Boy remains the subject — his tile leads the board and links home, and nothing in this section should ever outrank or out-shout his own pages.

---

## 2. The four jobs, in priority order

| # | job | where | why |
|---|---|---|---|
| 1 | Mobile design for the board's certifications and chart pages | branch | they are unusable on a phone today |
| 2 | Put Burna Boy's portrait in the `/certifications` header | live | the header is half empty |
| 3 | Reduce the gold on the home page, and fix the clipped "59" | live | too much gold; a visible rendering bug |
| 4 | The complete UI/UX for the Afrobeats Board, desktop **and** mobile | branch | the section was built to work, not to be beautiful |

Jobs 1 and 4 overlap: **do Job 4 as the real piece of work, and treat Job 1 as its most urgent part.** They are listed separately because Paul raised them separately.

---

## 3. The rules this site holds you to

These are not preferences. Previous passes broke on them.

1. **Never cross-apply a desktop design to mobile, or the reverse.** This site draws them separately, on purpose. Twenty-two dedicated mobile screens exist in `app/components/Mobile*.tsx` (plus five shared chrome components). A mobile screen is its own design, not the desktop one at a smaller width.
2. **Mobile chrome follows a rule, in `app/lib/mobileScreens.ts`.** Every mobile screen except home opens with a sticky **back bar** that replaces the site nav. The **five-tab bar** (Home · Music · Certs · Charts · Records) sits at the foot of nearly every screen; a page may replace it with a single **action bar**, but never show both. The board's pages keep the five-tab bar — Paul's call, same as the story pages.
3. **Tier colours are semantic and must not be recoloured.** Diamond, Platinum, Gold and Silver each have a token; chart peak bands are gold for No. 1, cyan for Top 10, silver for Top 40, muted beyond. A reader learns these once across the whole site.
4. **Gold is for figures and one action.** It is the site's accent, not its surface. See Job 3.
5. **Do not invent, round, or "tidy" a number.** Every figure is sourced. If a layout needs a shorter number, say so in the spec and we will change the layout, not the number.
6. **Read the existing design files before drawing.** They are in Paul's handoff repo as `designs/desktop/*.dc.html` and `designs/mobile/*.dc.html` and define the current system, including the `{{ placeholder }}` convention the build reads.

---

## 4. JOB 1 — the board on mobile

> **Update, 19 August, after this brief was first written.** The worst of this
> has been fixed in code, so you are not starting from the state described
> below. The artist page now uses the site's existing mobile certifications
> screen (`MobileCerts`, screen 02) instead of the desktop layout narrowed by
> CSS — the same reuse already made for the chart and live boards. What follows
> is the measured problem as it was; read it as *why* the page is built the way
> it now is, and as the density brief for the pages that still carry it.
>
> **Still yours to solve:** the density of the chart and live screens at board
> volumes (§4, "What we need from you"), the board hub, which still has no
> mobile screen of its own, and whether a reused screen is the right long-term
> answer for an artist page or only a good stopgap.

### What was wrong, measured

Open `/afrobeats/seyi-vibez` at 375×812. Measured on the branch today:

| | measured |
|---|---|
| page height | **14,097px — 17.4 screens of scroll** |
| release rows | 105, median height 110px |
| every plaque pill | **189px wide** in a 339px column → one per line |
| "By the numbers" grid | 5 cells in a 2-column grid → **one empty cell**, ragged |
| cover art | 44px |

`/afrobeats/asake/charts` at the same width is **11,910px — 15 screens.**

### Why it is wrong

**The artist page has no mobile design at all.** It is the desktop layout narrowed by CSS. It is the only deep-data page type on the site in that state:

```
/afrobeats            → no mobile screen
/afrobeats/[artist]   → no mobile screen        ← the worst one
/afrobeats/…/charts   → reuses MobileOfficialCharts (Burna Boy's)
/afrobeats/…/live     → reuses MobileLiveCharts (Burna Boy's)
```

The two that *do* reuse a screen are structurally sound but were designed for one artist with a 40-release catalogue. Asake has 96 chart rows; Seyi Vibez has 114. The density that works for Burna Boy collapses at three times the volume.

### What we need from you

A mobile screen for **the artist page** and **the board hub**, plus a density pass on the charts and live screens at board volumes.

The hard problem is honest: **103 plaques in one column.** A phone cannot show 103 pills at 189px each without becoming a 17-screen scroll. Options worth exploring — your call, we have no fixed view:

- Collapse by country: one row per country, tier pills inside, expandable.
- Collapse by tier: "44 Platinum · 39 Gold · 20 Silver", each opening a list.
- Group by release with a count, opening on tap (the desktop pattern, but built for touch).
- A compact chip grid — the pill loses the country *name* and keeps flag + tier, with the name on tap.

Whatever you choose must survive **one country and 103 plaques** (Seyi Vibez) *and* **nine countries and 61 plaques** (Omah Lay) without either looking broken.

Tap targets: 44×44 minimum. Current pills are 33px tall — below the line.

---

## 5. JOB 2 — Burna Boy's portrait in the `/certifications` header

**This page is live.** Open https://burnaboystats.com/certifications.

The desktop hero is **1265 × 503px**. The text column — eyebrow, "Global Certifications", the lede, two buttons — is **622px wide starting at x=40**, which leaves **603px of empty black to the right**. That space is the job.

Put his Spotify portrait there, beautifully. The site already holds the URL:

```
https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f
```

exported as `BURNA.image` in `app/data/afrobeats.ts`. It is a square press shot on a warm brown ground.

Constraints:

- It must not fight the wordmark. "Global Certifications" is the page's loudest element and stays that way.
- The site's existing portrait treatments are worth copying rather than reinventing: the artist hero on `/afrobeats/[artist]` uses a blurred, scaled copy of the same image as a backdrop under a scrim, with the sharp portrait on top. The home page's "Today's number" card uses cover art in a bordered rounded tile.
- Nothing may push the "230 certifications" figure or the two buttons below the fold on a 1280×800 laptop.

### 5a. The mobile portrait exists, and Paul wants it made properly

This is the part he has actually seen, and his note is short: **make it better.**

It ships today on *every* certifications screen — all nine board artists **and** Burna Boy's own — as a scaled copy of the artist image bled off the right edge, `mask-image` fading its left edge to nothing, under two scrims, at 50% opacity. See `.heroArt` / `.heroScrim` in `app/components/mobileCerts.module.css`.

**Treat that as a placeholder, not a design.** It was built by an engineer to a rule: one set of numbers applied to ten different photographs. It is good enough to ship and not good enough to keep. What "better" has to mean here:

1. **It must survive ten very different press shots.** Go and look at all ten before drawing anything — `/certifications` plus `/afrobeats/<slug>` for wizkid, davido, rema, tems, tyla, ayra-starr, asake, omah-lay, seyi-vibez. Tems' is soft and dark. Seyi Vibez's is busy with strong pattern. **Davido's is not a portrait at all — it is a gold crown on black**, and the current treatment makes it read as a smudge. One rule cannot serve all ten; say what the rule is *and* what the exceptions are.
2. **The face must survive the crop.** The current `background-position: center 22%` is a guess that works for some and beheads others. If per-artist focal points are the answer, specify them and we will add a focal-point field to the data.
3. **The type wins, always.** The total ("230", "103"), the kicker and the lede must keep their contrast at every opacity you choose — ≥ 4.5:1 measured against the brightest part of the image behind them, not against the flat background colour.
4. **It must not turn into another gold field.** Several of these shots are warm and gold-heavy; at 50% over a near-black surface they push the hero back toward the problem Job 3 is fixing on the home page.
5. **Decide the relationship between the mobile and desktop treatments.** They do not have to match, but they should look like decisions from the same person. §3.1 still applies — draw them separately.
6. **One treatment, ten artists.** If the answer needs per-artist values (opacity, focal point, a flipped side), give us a table of them, not ten bespoke layouts.

---

## 6. JOB 3 — the home page is too gold, and the "59" is clipped

### 6a. Too much gold

Measured above the fold on the live home page:

| | mobile 375×812 | desktop 1280×900 |
|---|---|---|
| elements painted gold | 34 | 65 |
| **solid gold fills** | 8 | 11 |
| **share of the first screen covered in gold fill** | **58%** | **27%** |

The single biggest offender is the "Today's number" card at **119,010px²** on mobile — a gold-filled panel occupying most of the first screen, sitting beside a gold live band, a gold CTA, a gold wordmark and a gold stat row.

What we want: keep gold as the accent that marks **figures and one primary action**, and let the near-black surface carry the rest. The near-black + hairline + monospace-label system already exists everywhere else on the site and works. There is a precedent to follow — the live band on the home page was reworked in August from a gold field to a **corner-lit dark surface with a white headline**, and Paul was happy with it. Extend that thinking upward.

Do not simply reduce opacity. Decide which single element on the first screen deserves to be gold, and demote the rest to surface, rule and text.

### 6b. The "59" is clipped, and here is exactly why

The big number in "Today's number" has its top and bottom shaved — visible on the 9 in particular, and on the underside of the 5.

It is not overflow. Measured on both mobile and desktop:

```
font-family : Anton
font-size   : 104px
line-height : 83.2px          ← 0.80, i.e. 21px shorter than the font size
background  : linear-gradient(#ffd24a → #ffb627 → …)
background-clip: text          ← the gradient is painted only inside the line box
```

With `background-clip: text`, the gradient fills the **line box**, not the glyph. Anton's digits are taller than a 0.8 line box, so the parts of the glyph outside that box get no paint and read as cut.

The fix is metric, not stylistic: give the gradient number a line-height of at least 1, or add vertical padding with `display:inline-block`, then re-centre it optically in the card. Please also specify the **optical** alignment you want — the numeral should sit centred in the panel by eye, which for Anton usually means nudging it up slightly from mathematical centre.

Check the same pattern anywhere else gradient text is used at display sizes.

---

## 7. JOB 4 — the complete Afrobeats Board design, desktop and mobile

This is the real commission. The section is built, data-complete and correct; it has never had a design pass.

### 7a. What the section is

Nine Afrobeats artists, counted by Burna Boy's own rules, so the records compare. **742 plaques and 1,020 chart entries** across the nine, every figure read in an issuing body's register.

| artist | plaques | chart entries | shape of the record |
|---|---|---|---|
| Wizkid | 155 | 153 | 21 countries, 32 chart territories, 6 Diamonds |
| Seyi Vibez | 103 | 114 | **entirely Nigerian** — 1 country, 1 chart territory |
| Davido | 91 | 66 | 9 countries |
| Rema | 80 | 118 | 20 countries, 53 chart territories, carried by one global record |
| Asake | 79 | 123 | 3 countries, 24 Nigerian No. 1s |
| Tems | 70 | 124 | 19 countries, 44 chart territories — the widest spread per release |
| Tyla | 62 | 174 | 23 countries, 52 chart territories — the most entries on the board |
| Omah Lay | 61 | 70 | 9 countries, 2 French Diamonds |
| Ayra Starr | 41 | 78 | 12 countries |

That table is the design problem in miniature: **these artists are not the same shape.** A layout that flatters Tems (thin catalogue, enormous international spread) has to also flatter Seyi Vibez (huge catalogue, one country) and Asake (24 No. 1s in one market). Today's design treats them identically and serves none of them well.

### 7b. The four page types

**1 · `/afrobeats` — the board.** A grid of cover-art tiles, Burna Boy's first with a gold border and a "This site" tag linking home. Each tile: flag, top award badge, name, `{n} certifications · {n} countries`, and a hook line on hover. Below the grid: two rails, "Chart peaks" and "Charting now", linking to each artist's two boards. An eighth tile explains the counting rule.

**2 · `/afrobeats/[artist]` — the artist.** Hero (portrait, country, name, real name, hook, two buttons). "By the numbers" (plaques, countries, tier split). "Where the plaques are" — one pill per country at its best tier. Then release tables: Albums, Lead singles, Featured appearances, each row = cover, title, plaque count, and the plaques as pills. Then a panel to the chart board, a panel to the live board, a head-to-head against Burna Boy, and an onward bar.

**3 · `/afrobeats/[artist]/charts` — official chart peaks.** Reuses Burna Boy's chart template: hero, four-cell summary, cards/table toggle, peak-band and country filters, and per-release rows of peak pills. Desktop is sound. Mobile is his screen at three times the volume.

**4 · `/afrobeats/[artist]/live` — live platform charts.** Reuses his live template: platform cards with cadence, and per-release rows that open a country list fetched on demand. Rebuilt hourly.

### 7c. What we specifically want you to solve

1. **Make the nine artists feel like one board and nine different careers.** Right now every page is the same template with different numbers.
2. **Density at real volumes.** 114 rows must be navigable on a phone. Consider what the reader actually wants first — probably the No. 1s, the biggest markets, and the top tier — and let the long tail be reachable rather than dumped.
3. **The "entirely Nigerian" case.** Seyi Vibez's record is one country. Today that renders as a one-item country strip and a 114-row table, which looks like a bug. It is his actual record and it should read as a *finding*.
4. **The two boards per artist.** Chart peaks and live charts are different kinds of fact — permanent vs right-now. They currently look nearly identical apart from a green pulse. Make the difference legible.
5. **Burna Boy's primacy.** He leads the board and his tile goes home. Nothing here should look more important than his own pages.
6. **Both platforms, drawn separately** — per §3.1. Mobile is not an afterthought here; it is Job 1.
7. **Carry the blended portrait through.** It now appears on all ten mobile certification heroes (§5). Decide whether it belongs on the artist page's desktop hero, the chart and live screens, and the board hub too — and if it does, make one treatment that works across ten different press shots rather than ten one-offs.

### 7d. Content quirks you must design around, not away

- **Cover art is missing for 13 of 910 rows.** Those draw a dashed placeholder. Do not design a layout that only works when every cover is present.
- **A title can be long**: "Vibez Incorporation Mixtape, Vol. 1 (Vibez Inc & Seyi Vibez)", "99 (Olamide, Seyi Vibez, Asake & Young Jonn ft. Daecolm)".
- **Multipliers exist**: "8× Platinum", "2× Diamond", "17× Platinum".
- **Country names are shown next to flags on purpose.** A flag emoji alone is not accessible and several are near-identical at small sizes. If you drop the name at a breakpoint, it must return on tap.
- **The board carries three artists with no international plaques at all.** Zero is a real value here and should not look like missing data.

---

## 8. Deliverables

Same shape as previous passes:

1. **Design files** — one per page type per platform, as `.dc.html` in the handoff repo, using the `{{ placeholder }}` convention so the build can read them. Eight files: hub, artist, charts, live × desktop, mobile.
2. **A short spec** listing every computed value you changed or introduced — sizes, spacings, tokens, breakpoints — in the style of `design-pass-aug-11-spec.md`. If you introduce a new token, name it and say what it is for.
3. **For Jobs 2 and 3**, a spec is enough; they are surgical changes to live pages, not redesigns.

### Acceptance

- Every figure on screen still traces to the data — no invented, rounded or padded numbers.
- Tier and peak-band colours unchanged.
- The five-tab bar / back bar rule respected; never two pinned bars.
- Tap targets ≥ 44px.
- Text contrast ≥ 4.5:1 on the near-black surface.
- Desktop and mobile drawn separately, and both delivered.
- The board never out-shouts Burna Boy's own pages.

### Please ask before

- Changing what a figure *means* (a "plaque" is one title in one country at its current tier; a chart "entry" is one release on one country's principal chart).
- Removing the provenance lines — "last verified 19 August 2026", "read in an issuing body's own register". They are the reason this site exists.
- Adding any artist to the board. Nine is the set, and each one cost a full register sweep.

---

## 9. Questions for Paul, not the designer

1. Should the designer get Vercel preview access, or a bypass link? Nothing in Jobs 1 and 4 is viewable without one.
2. The board goes live on your word. Does the design pass block the launch, or does it ship as built and get redesigned after?
