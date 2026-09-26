# On This Day: design audit of the feature as built

**What was audited:** branch `feat/on-this-day` at commit `21a7bc82` (PR #344, not merged, not on the live site). Worktree `~/burnaboy-onthisday`.
**Date:** 26 Sep 2026.
**Shots:** `~/burnaboy-work/otd-handoff/shots/`. Every finding below names the shot that shows it.

## How the shots were taken

- **Build.** `.next` was built at 09:39 BST today, after the last source change (no file under `app/`, `public/` or the config was newer than `BUILD_ID`), so no rebuild was needed.
- **Server and browser.** Served with `next start -p 3229` under `~/.local/bin/heavy`. The screenshot runs happened while that lock was held, and the server was stopped afterwards.
- **Screenshot tool.** Playwright is not installed in `~/burnaboy-website/node_modules` or in the worktree. The shots use the repo's own harness, `scripts/mobile-shot.mjs` (headless Chrome over CDP).
  - Phone shots are 390×844 at DPR 2, with an iPhone user agent and touch emulation.
  - Desktop shots are 1440×900 at DPR 1.
  - The theme was set through the site's own `localStorage.theme` together with `prefers-color-scheme`.
  - Before each capture, every page was scrolled from top to bottom and all images were awaited, so lazy content had painted. No black frames came back.
- **Share images.** The OG images and portrait cards were fetched straight from their routes, at their native sizes.
  - `og:image` for a day is `/on-this-day/<day>/opengraph-image/<id>`.
  - The portrait card is `/on-this-day/<day>/card`.
- **What the home page showed.** The home page renders its pick from the London date at render time. It was prerendered at build, with `revalidate = 3600`. **26 September has no anniversary**, so both home shots show the "Coming up: 7 October" state.
  - I could not capture the "N years ago today" state. What this audit says about it comes from reading the code, not from a screenshot.
- **Not captured:** hover and focus states.

| File | What it shows |
|---|---|
| `phone-dark-home-card.png`, `phone-light-home-card.png` | Phone home scrolled to the On This Day card (the page is at maximum scroll) |
| `desktop-dark-home-band.png`, `desktop-light-home-band.png` | Desktop home: the band between History made and the certifications ledger |
| `phone-dark-index-full.png` | `/on-this-day`, phone, dark, full page (780×5568) |
| `desktop-dark-index-full.png`, `desktop-light-index-full.png` | `/on-this-day`, desktop, dark and light, full page |
| `phone-dark-day-16-august-full.png`, `desktop-dark-day-16-august-full.png` | Busiest day, 16 August (5 milestones) |
| `phone-dark-day-28-april-full.png`, `desktop-dark-day-28-april-full.png` | A sparse day, 28 April (1 milestone, the longest lead headline on the calendar) |
| `og-16-august.png`, `og-28-april.png` | Day OG images, 1200×630 |
| `card-16-august.png`, `card-28-april.png` | Day portrait cards, 1080×1350 |
| `compare-stat-card-dai-dai.png` | Existing stat card, `/stat-card?stat=dai-dai`, 1080×1080 |
| `compare-og-dai-dai.png` | Existing OG image for `/dai-dai`, 1200×630 |
| `thumbs-share-images-1x.png` | The six share images scaled to the size people actually see them, at 1× CSS size: a 500 pt link preview, a 250 pt unfurl, a 390 pt phone feed post and a 130 pt profile-grid tile |

## Data facts that shape the design

These are read from the built calendar HTML and from `tools/events.json` / `tools/days.json`. The totals match the page's own tally.

- **Totals.** 228 events on 167 days.
- **By kind.** Live 140, Certification 37, Charts 35, Release 9, Awards 5, Streaming 2.
- **Events per day:**
  - 120 days have 1 event.
  - 36 days have 2.
  - 9 days have 3.
  - 14 July has 4.
  - 16 August has 5.
- **Shows dominate.**
  - Shows lead 100 of the 167 days.
  - 56 days are led by a plain show row: "Burna Boy played <venue>, <city>" with no gross and no live moment.
  - On 110 of the 140 show events, the detail line just repeats the source (usually the tour name).
- **The home card is mostly in its fallback state.** Over the next 365 days from today:
  - It shows "Coming up" on **199 days** and "N years ago today" on 166.
  - The longest gap is **11 days**, and it starts today (26 Sep → 7 Oct). The median gap is 2 days.
  - On the 166 "today" days, 119 show a single row.

The fallback is therefore the card's main state, but it was designed as an edge case.

---

## 1. Home card: phone

**Shots:** `phone-dark-home-card.png`, `phone-light-home-card.png`

**Weaknesses**

1. **The title names a gap, not a milestone.** The kicker says ON THIS DAY, and the title under it says COMING UP: 7 OCTOBER, which is 11 days away (`MobileOnThisDayCard.tsx:21-23`). The two lines contradict each other, and the biggest type on the card is a date with nothing attached to it.
2. **The lead is often weak, and every row looks the same.** Today's lead is "“Want It All” hit No. 8 in Nigeria · 5th anniversary".
   - The ranking rules in `onThisDay.ts:213` and `:347` are sound, but on most days the best event available is a show night.
   - Row styling does not separate a UK No. 1 from "played Reggies, Chicago". The year, pill, headline and detail are identical for every kind (`mobileOnThisDay.module.css:126-168`).
3. **Two equal primary actions sit on one screen.**
   - READ THE STORY ↗ (History made) and ALL 2 ON 7 OCTOBER ↗ are the same gold outline pill, about 300 px apart.
   - The stylesheet's own header calls the gold pill "the screen's one action" (`mobileOnThisDay.module.css:7-8` and `:94-111`).
4. **The CTA copy is awkward.**
   - "All 2 on 7 October" (`MobileOnThisDayCard.tsx:46`) links to a page that holds the same two rows already shown on the card.
   - ↗ is the external-link arrow, but this link is internal. It sits next to "The calendar →", which uses →.
5. **Phone and desktop disagree on gold.** The phone kicker is gold (`mobileOnThisDay.module.css:66`). The desktop band's kicker is muted ink, and its CSS says explicitly "Ink, not gold — gold on this page marks what is live and what is the action, and this is neither" (`onThisDayBand.module.css:3-4, 23`).
6. **The card is hard to reach.** It is the last block on the phone home. The screen is 3,009 CSS px tall and the card starts at about 2,500 px, roughly three screens down.
7. **"Today" state (from the code, not captured).** The title reads "3 years ago today" (`MobileOnThisDayCard.tsx:23`), and the lead row repeats "3 years ago" in its right-hand slot (`:35`).
8. **No share path.** The card offers no route to the post-ready card.

**Keep**

- The row anatomy reads well at 390: year in Anton at 20 px gold, kind pill, headline at 15 px/600, caption detail.
- Every target is at least 44 px.
- The light theme holds.
- Nothing above the card moved.

## 2. Home band: desktop

**Shots:** `desktop-dark-home-band.png`, `desktop-light-home-band.png`

**Weaknesses**

1. **Same "Coming up" problem.** The title, COMING UP: 7 OCTOBER, carries no content.
2. **The band has no weight of its own.**
   - It sits on the page background, below History made (which has a raised surface and a pill CTA) and above THE CERTIFICATIONS LEDGER (Anton display plus a 248 hero figure).
   - The OTD title is 32 px (`onThisDayBand.module.css:28`), so the band reads as a footnote to History made rather than a feature.
3. **Empty space in both columns.**
   - The grid is 1fr/2fr (`:12`). With 2 rows, the left column holds a title, two links and about 150 px of nothing.
   - In the right column, headlines end around x≈970 of 1360.
4. **No primary link.** The two links, ALL 2 ON 7 OCTOBER → and THE CALENDAR →, are identical mono text links (`:40-49`).
5. **No share path.** As on the phone, the band never mentions the day's card.

**Keep**

- The list shares a left edge with the History lede (x=539), so the two bands lock together.
- The years are ink-weighted and the kicker is muted, following the "gold = live or action" rule.
- The light theme is correct.
- Three rows at most is the right size for this spot.

## 3. Calendar index: phone

**Shot:** `phone-dark-index-full.png`

**Weaknesses**

1. **The chips look like a calendar but are not one.**
   - Only dated days are drawn, packed seven to a row (`MobileOnThisDayIndex.tsx:57-79`; `.chips` uses `repeat(auto-fill, minmax(44px, 1fr))`, `mobileOnThisDay.module.css:229-234`).
   - January therefore reads "3 10 11 15 16 17 20 / 23 26", which looks like a week but is not one. The empty days vanish, and position means nothing.
2. **No "today" and no jump.**
   - Nothing says "26 September: nothing today — next: 7 October".
   - The page is 2,784 CSS px (about 3.3 screens) and has no month index or jump links.
3. **Every chip carries the same weight.** 16 August (5 milestones) looks exactly like 28 April (1). The count exists only in the `aria-label` (`:72`).
4. **The 5 px kind dot is the only signal, and it is hard to read** (`.chipDot`, `mobileOnThisDay.module.css:251-258`).
   - In the shot, the Release and Certification dots (#ff7a1a vs #ffb627 in dark) cannot be told apart.
   - The legend is only in the tally at the top, one to three screens away from most chips.
5. **Nothing previews content.** Tapping a chip is blind: no lead headline, no kind name.
6. **The tally reads as both legend and statistic** ("LIVE 140"), with no hierarchy between label and number (`:196-207`).
7. **The month empty state never appears.** The "no dated milestone yet" copy exists (`MobileOnThisDayIndex.tsx:63`), but every month currently has at least 9 dates.

**Keep**

- Real 44 px targets: chips are about 45 px wide at 390, with `min-height: 44px` at `:237`.
- Anton month headings with an "N DATES" count.
- The provenance/methodology note at the foot.
- No horizontal overflow (scrollWidth 390).
- The design decision in the file comment (a 44 px target will not fit seven real days to a row) is right. The problem is what replaced the grid.

## 4. Calendar index: desktop

**Shots:** `desktop-dark-index-full.png`, `desktop-light-index-full.png`

**Weaknesses**

1. **The hero pushes the calendar below the fold.**
   - The hero grid uses `align-items: end` next to a six-row tally (`onThisDay.module.css:15-21, 53-73`). The hero is about 430 CSS px tall, with dead space top-left: the eyebrow starts at y≈285.
   - At 1440×900, January begins at about y≈600, so only the first one to two week-rows of January to April are visible without scrolling.
2. **The kind legend is shown twice.** The tally at the top and the legend under December (`page.tsx:54-62` and `:103-111`) list the same six kinds.
3. **No "today" marker and no "next date" pointer.**
4. **The lead headline is hover-only.** It lives in a `title` tooltip (`page.tsx:87`): invisible on keyboard focus and touch, and slow on hover.
5. **Same 5 px dot problems** (`onThisDay.module.css:129-137`). The light theme is worse, because Streaming and Awards are the same colour (see §7). A 1-milestone day and a 5-milestone day are drawn identically.
6. **The grids look like real months but are not.** Each runs 1–31 in rows of seven with no weekday header. That is honest for a calendar with no year, but it reads like a real month. The designer should decide this on purpose.

**Keep**

- The four-up month grid is scannable.
- Days that link (bold, bordered, `--bg-soft`) and days that do not (`--dim`) separate at a glance, in both themes.
- The "N DATES" count per month.
- The methodology band.

## 5. Day page: phone

**Shots:** `phone-dark-day-16-august-full.png` (busiest), `phone-dark-day-28-april-full.png` (sparse)

**Weaknesses**

1. **Same-day batches read as repetition.** On 16 August, four of the five rows come from one Swedish register read (all 2023).
   - The page prints "2023 / CERTIFICATION / … in Sweden / IFPI Sverige" four times over.
   - Grouping by year, or by batch, would say it once.
2. **Gold overload on certification rows.** Each has a gold year, a gold CERTIFICATION pill and, above them, a gold CTA pill. It is hard to tell what the gold is for.
3. **No lead and no stakes.** The H1 is the date. The event the share card leads with is not marked, and nothing tells the reader which item matters most.
4. **No age context.** The day page never says "3 years ago", although the home card does.
5. **The card CTA is a spec, not a picture.**
   - The pill reads "POST-READY CARD · 1080×1350 ↓" (`MobileOnThisDayDay.tsx:35-37`).
   - The phone has no card preview, so the screen people are most likely to post from never shows what they will post.
   - There is no native share and no copy-link.
6. **The sparse day is thin.** 28 April shows one row, then the pager, then about half a screen of empty background above the tab bar.
   - The lede reads "1 milestone dated 28 April, 2022 — newest first." (`MobileOnThisDayDay.tsx:33`); "newest first" describes a list of one.
   - The day's one event is a record ("First African artist to sell out the world's most famous arena."), yet that sentence is set as the 12.5 px muted caption (`.detail`, `mobileOnThisDay.module.css:164-168`). The most important line on the page is its smallest.
7. **Nowhere to go next except the neighbouring dates.** The pager names them, but there is no preview of what is on them, no same-week list and no Keep exploring block.

**Keep**

- The back bar, the Anton date H1 at 52 px, the row anatomy and the 44 px pager targets.
- Neighbouring dates wrap across the year.

## 6. Day page: desktop

**Shots:** `desktop-dark-day-16-august-full.png`, `desktop-dark-day-28-april-full.png`

**Weaknesses**

1. **The year floats above its row.**
   - `.event` uses `align-items: baseline` (`onThisDay.module.css:188`), so the 40 px Anton year (`:198`) aligns with the small kind pill, not with the headline.
   - Each row is about 148 CSS px tall for two lines of text; five events take about 740 px.
2. **Redundant link text.** "SEE THE RECORD →" repeats on every row at the far right (`:222-230`), about 540 px from where the headline ends. The whole row is already the link.
3. **The card preview does not work as a preview.**
   - At 176×220 (`:166-174`) the card's text cannot be read.
   - It is the full 1080×1350 PNG: 725 KB for 16 August, loaded for a thumbnail.
   - It is marked `loading="lazy"` (`page.tsx:98`) even though it sits above the fold.
4. **Card note copy is spec, not benefit.** It reads "1080×1350, the 4:5 a post runs uncropped on Instagram and X." (`page.tsx:109`).
5. **The lede does not handle one event.** On a 1-event day it still says "Each one links to the page that holds the record." (`page.tsx:87-88`; see `desktop-dark-day-28-april-full.png`).
6. **Keep exploring ignores the feature.** It suggests Career Timeline, Career Records and Stat Cards: nothing about nearby days or other milestones of the same kind.
7. **Same batching, lead-marking and gold issues as the phone.**

**Keep**

- The filled gold DOWNLOAD THE CARD ↓ is the only filled control on the page, the correct use of gold.
- The breadcrumb with the day as its leaf.
- The pager with THE CALENDAR centred.
- Headlines fit on one line at this width.

## 7. Across every surface

1. **Kind colours collide.** `KIND_INK` is at `onThisDay.ts:63-70`; tokens are in `globals.css`.
   - **Release vs Certification.** Release is `--ember`: #ff7a1a dark, #b34700 light (`:158`). Certification is `--gold`: #ffb627 dark, #945e00 light (`:67`). As 5 px dots they cannot be told apart in either theme.
   - **Streaming vs Awards.** In light mode they are *identical*. Streaming is `--tier-silver-ink` and Awards is `--silver`, and both are #6b6b74 (`globals.css:285` and `:235`). See the legend row in `desktop-light-index-full.png`.
   - **Band tokens reused as category colours.** `--cyan` is documented as "Top 10 peak band ONLY" and `--silver` as "Top 40 peak band ONLY" (`globals.css:234-235`). A No. 1 chart row therefore wears the Top-10 colour.
2. **Headlines switch between sentences and titles.** The type comment says a headline is "a past-tense sentence" (`onThisDay.ts:89`). Award, honour, concert and live-moment rows are titles instead (`:284`, `:300`, `:355`, `:382`). Examples:
   - "SESAC Awards: Top Songs honoree".
   - "\"Burna Boy Day\" Proclamation". This one uses straight quotes; everything else uses curly.
   - "Burna Boy Xperience" (22 March, Kampala) and "Burna Boy Experience" (23 March, Kigali). With the city tucked into the detail, they read like a typo'd duplicate.
3. **Detail lines repeat the source.** Tour names on 110 show rows, and "IFPI Sverige" on certification rows that have no credit. The detail line rarely adds information.
4. **Every kind gets equal weight, so shows set the tone.** Shows are 61% of events and lead 60% of days. With identical styling for every kind, the calendar's everyday face is a list of venues.

## 8. Share images

### OG image (1200×630)

**Shots:** `og-16-august.png`, `og-28-april.png`, compared with `compare-og-dai-dai.png`, plus `thumbs-share-images-1x.png` rows 1–2

1. **The milestone is secondary.**
   - The date is 120 px gold. The actual milestone is a 32 px grey (#c9c9d0) line (`[day]/opengraph-image.tsx:87-91`).
   - In a 250 pt unfurl (thumbs row 2), only "16 August" can be read; the milestone line is about 6–7 px.
2. **The stat tiles restate the date or use internal vocabulary** (`:24-28`).
   - "LEADS WITH: Certification" is internal ranking vocabulary.
   - On a single-event day the three tiles read "1 MILESTONE / 2022 YEARS / Live LEADS WITH" (`og-28-april.png`). That is a third of the card spent saying "one thing happened in 2022", with a plural label on a single year.
3. **No picture.** The existing `/dai-dai` OG carries cover art; day OGs are text only. At feed size, all 167 day OGs look the same apart from the date string.
4. **Font weights do not render.** The code asks for `fontWeight: 800` (`:87`, `:107`), but `ogFonts` loads only Geist *Regular* 400 (plus Anton and Space Mono for the lockup; `og-lockup.tsx:46-49`), so the 120 px date renders in the regular cut. This is shared with the existing OG family (see `compare-og-dai-dai.png`), so it is a family trait, not an OTD bug.

**Keep:** the lockup top right, the gold radial wash, the URL footer and the 64 px frame. These match the site's OG family exactly.

### Portrait card (1080×1350)

**Shots:** `card-16-august.png`, `card-28-april.png`, compared with `compare-stat-card-dai-dai.png`, plus `thumbs-share-images-1x.png` rows 3–4

1. **A year sits in the hero-number slot.**
   - The card's `value` is the lead event's year (`onThisDay.ts:551`), drawn in the stat card's gold gradient at about 180 px (`statCardImage.tsx:49-52`: base 210 × 0.86 for four characters).
   - On a stat card the big number *is* the achievement. Here it is 2023, so a grid tile reads "2023 + portrait" and says nothing (thumbs row 4).
   - The "On this day" framing lives only in the 23 px chip (`statCardImage.tsx:236-250`), which cannot be read at 130 pt.
2. **Every card looks alike.** All cards use the same photo and crop (`BURNA_PORTRAIT`). At grid size, 16 August, 28 April and the existing Dai Dai stat card are near-identical (thumbs row 4). The series has no identity of its own.
3. **The date appears twice; the other milestones not at all.**
   - The chip reads "ON THIS DAY · 16 AUGUST" and the kicker reads "On this day, 16 August — and 4 more milestones" (`onThisDay.ts:553-554`).
   - The four other milestones appear nowhere on the card.
4. **The top half is empty.** The text block is pinned to the base. In 4:5, the top-left (about 40% of the width by 55% of the height) is empty card background.
5. **The "As of" stamp is odd here.** "AS OF 2026-09-25" (`statCardImage.tsx:324`, in ISO form) makes sense on a live figure. On the anniversary of a 2023 certification it reads strangely.
6. **The watermark barely shows.** "AUG" / "APR" is at 5% gold (`statCardImage.tsx:223`) and sits under the source line.
7. **One day, two brand treatments.**
   - The card's brand row is typed text, "BURNABOY" + "STATS", with no icon (`statCardImage.tsx:232-235`).
   - The same day's OG carries the icon plus the Anton lockup.
   - The renderer passes no `fonts` to `ImageResponse` (`:331-339`), so the card uses next/og's built-in face, and its 800 weights come out visibly regular.
   - All of this is inherited from the existing stat card, not new.
8. **The label steps down in size with length** (52/44/38 px at ≤42/≤64/>64 characters, `statCardImage.tsx:278-281`). The 69-character 28 April label drops to 38 px over three lines, which still reads well at feed size (thumbs row 3).

**Keep**

- The card face, gold border, gold gradient number, provenance line and burnaboystats.com stamp: this is the house stat card exactly (`compare-stat-card-dai-dai.png`), so the card belongs to the family.
- 4:5 is the right shape for a feed post.
- The source body (IFPI SVERIGE, BILLBOARD BOXSCORE) is printed on the image, so every card can be traced.

## 9. What already works across the feature, and should survive a redesign

- **Data honesty.** Only records that carry their own day appear. Every event resolves to a source field (`tests/onThisDay.test.ts`), and the methodology note says so on both layouts.
- **One pick, rendered on the server,** from the London date: no hydration flicker, and both layouts agree.
- **Row anatomy.** Year, kind pill, headline and detail, with the whole row linking to the page that holds the record.
- **Accessibility basics.** 44 px targets on the phone, one `<h1>` per layout, `aria-label` counts on calendar cells, and breadcrumb JSON-LD.
- **Shared vocabulary.** Back bar, Anton H1, mono kickers and the pill shape are all borrowed from existing screens, not invented.
- **Share images join existing families.** The OG image matches the site's OG family and the portrait card matches the stat card.
- **URLs and SEO.** A readable `/on-this-day/16-august` slug, a sitemap entry for every day, and a 404 for days with no milestone.
