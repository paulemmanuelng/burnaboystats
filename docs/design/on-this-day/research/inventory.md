# On This Day: a full inventory for the designer

**What this is:** an inventory of the On This Day feature exactly as it is built. It is on branch `feat/on-this-day` (worktree `~/burnaboy-onthisday`, PR #344, commit `21a7bc82`). It is **not merged and not on the live site.**

**How it was checked:** every figure below was read from the code or computed by running the branch's own module (`app/lib/onThisDay.ts`) on 26 Sep 2026. Nothing is estimated. File references are `path:line` on that branch. Colours resolve through `app/globals.css`, written as light / dark.

**Files that come with this one:**

- `events.json`: all 228 events, with the exact text each row prints.
- `images/`: the real OG and card PNGs, rendered from the branch's own code.
- `shots/`: screenshots of each surface at 1440 and 390 wide, from `next start` on the branch's build (listed in §5).
- `tools/appendix.md`: every day page's full list (reproduced as Appendix A below).

---

## 0. The feature in one paragraph

The site builds one list of **228 dated Burna Boy milestones**, which fall on **167 of the 366 calendar days**. The builder only uses records whose data already holds the exact day. There are five places to see them:

1. **Home page, desktop.** A band sits directly under "History made". It shows today's anniversaries (up to three rows). On a day with none, it shows the next date that has one.
2. **Home page, phone.** The same card, as the last section of the phone home.
3. **`/on-this-day`.** A 12-month calendar that links every day with a milestone.
4. **`/on-this-day/<day>`** (for example `16-august`). One page per dated day: every event on that date, newest first. Only the 167 days exist. Any other day returns 404.
5. **Images.** A 1200×630 OG image for the calendar and one for each day, plus a 1080×1350 post-ready portrait card for each day at `/on-this-day/<day>/card`.

---

## 1. Every surface, desktop and phone

The site uses one breakpoint for all of these. At **900px and below** the phone components render. Above it the desktop markup renders. Both are in the HTML, and CSS hides one of them (`onThisDay.module.css:7-8`, `mobileOnThisDay.module.css:9-18`). They are separate components, not one layout reflowed.

### Shared vocabulary: the kind pill and its six inks

Every event row wears a pill that names its kind. Pill text is from `KIND_LABEL` (`app/lib/onThisDay.ts:49-56`) and pill colour from `KIND_INK` (`onThisDay.ts:63-70`). The pill is outline only: text and a 1px border in the ink, radius 999px, no fill.

| Kind (code) | Pill text | Token | Light | Dark | Events |
|---|---|---|---|---|---|
| `release` | Release | `--ember` | `#b34700` | `#ff7a1a` | 9 |
| `chart` | Charts | `--cyan` | `#0b6e7e` | `#8fe3f0` | 35 |
| `streaming` | Streaming | `--tier-silver-ink` | `#6b6b74` | `#848F9E` | 2 |
| `certification` | Certification | `--gold` (= `--gold-ink`) | `#945e00` | `#ffb627` | 37 |
| `award` | Awards | `--silver` | `#6b6b74` | `#dfe2e8` | 5 |
| `show` | Live | `--green` | `#146b3c` | `#3ed17f` | 140 |

Token sources: `globals.css:158`, `:234`, `:285`, `:67`, `:235` and `:294`.

> **Note for design:** in light mode, **Streaming and Awards use the same colour, `#6b6b74`**. In dark mode they differ (`#848F9E` vs `#dfe2e8`). On the calendar, where a kind shows only as a dot, the two cannot be told apart in light mode.

Base tokens the surfaces use (light / dark):

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` |
| `--bg-soft` | `#ffffff` | `#141416` |
| `--bg-raised` (hover/press) | `#e6e0d4` | `#24242a` |
| `--line` | `rgba(23,20,15,.12)` | `rgba(245,244,240,.12)` |
| `--text` | `#17140f` | `#f5f4f0` |
| `--text-muted` | `#5f584f` | `#9b9ba3` |
| `--dim` | `#6f685f` | `#85858e` |
| `--text-body-cool` | `#4a443b` | `#d8d8de` |
| `--gold` | `#945e00` | `#ffb627` |
| `--radius-sm` | 4px | 4px |

Type tokens:

- `--type-label`: 11px, tracking `.11em`
- `--type-caption`: 12.5px / 1.45
- `--type-small`: 13.5px / 1.5
- `--type-lede`: 18px / 1.5
- `--type-h-prose`: 20px / 1.3

Faces (`app/layout.tsx:21-38`):

- **Anton** (`--font-anton`, 400 only): display and year figures
- **Space Mono** (`--font-mono`, 400/700): kickers, pills, labels, links
- **Geist** (`--font-geist-sans`): body text and day numbers

---

### 1A. Home page: desktop band (`app/components/OnThisDayBand.tsx`, `onThisDayBand.module.css`)

**Where it sits** (`app/page.tsx:171-196`), in desktop page order:

1. LiveBand
2. Hero
3. Scoreboard
4. **History made** (the Dai Dai story, `--bg-soft` panel)
5. **On This Day band**
6. Certifications ledger
7. The No. 1 board
8. The catalogue
9. Career records
10. "Built for the timeline" closer

Nothing above the band moved.

**Grid.** It reuses History made's grid one row down (`onThisDayBand.module.css:7-15`): max-width 1360, padding 34px 40px, `grid-template-columns: 1fr 2fr`, gap 48px. The band has a bottom hairline and **no background fill**; it sits on the page `--bg`, unlike History made above it. The CSS comment is explicit: "Ink, not gold — gold on this page marks what is live and what is the action, and this is neither" (`:1-5`).

**Left column (1fr):**

- **Kicker** (Space Mono 700, 11.5px, tracking .18em, uppercase, `--text-muted`; `:17-24`):
  - With an anniversary today: `On this day · 7 October`
  - Otherwise: just `On this day` (`OnThisDayBand.tsx:30-32`)
- **Title h2** (Anton 32px / 1.05, uppercase, margin-top 14; `:25-33`):
  - Today mode: `5 years ago today`. The number comes from the lead row.
  - Coming mode: `Coming up: 7 October` (`OnThisDayBand.tsx:33-35`)
- **Two text links**, side by side with gaps of 6px (between rows) and 22px (between links). Mono 700, 11px, uppercase, `--text`, gold on hover (`:34-49`):
  - `All 2 on 7 October →` when the pick has more than one event, or `7 October, every year →` when it has one. Links to `/on-this-day/<day>`.
  - `The calendar →`. Links to `/on-this-day`.

**Right column (2fr): an ordered list of at most three rows** (`OnThisDayBand.tsx:23, 46-66`). The top border is a hairline. Each row is a whole-row link with grid `74px 1fr` and gap 18, padding 14px 12px 14px 0, a bottom hairline, and `--bg-raised` on hover (`:52-61`). Each row holds:

- **Year**: Anton 20px, `--gold`, tabular figures (`:63-70`). The comment says it matches the Firsts list's year.
- **Meta line** (flex, gap 10):
  - The kind pill: Mono 700, 11px, tracking .08em, padding 2px 8px (`:73-82`).
  - An "ago" label: Mono 11px uppercase, `--text-muted`. In today mode it reads `5 years ago`. In coming mode it reads `5th anniversary` (`OnThisDayBand.tsx:56-58`, `anniversary()` at `onThisDay.ts:563-567`).
- **Headline**: 600 weight, 15px / 1.35 (`:90`).
- **Detail**: 12.5px caption, `--text-muted` (`:91-95`).

**Row order.** Rows are sorted by "lead rank", not by year (`onThisDay.ts:433, 510`). The day page sorts newest first, so the home card and the day page can show the same events in a different order.

**Only earlier years count.** An event from the current year is not an anniversary yet, so the home card leaves it out (`onThisDay.ts:505-512`). Example: on 22 Sep 2026 the home card shows 1 row (2018), while `/on-this-day/22-september` lists 2 (the 2026 SESAC award plus the 2018 show). The link then reads `22 September, every year →` although the page holds two. **15 days** have only 2026 events and never produce a "today" state in 2026:

> 15 Jan, 17 Jan, 20 Jan, 5 Mar, 6 Mar, 11 Apr, 15 May, 9 Jun, 18 Jun, 30 Jun, 9 Jul, 19 Jul, 10 Aug, 3 Sep, 21 Sep

**What it shows right now** (London, Saturday 26 Sep 2026): **coming-up mode**. 26 September has no event, and the next date with one is 7 October.

```
ON THIS DAY
COMING UP: 7 OCTOBER
All 2 on 7 October →    The calendar →

2021  [CHARTS]  5th anniversary
      “Want It All” hit No. 8 in Nigeria
      Burna Boy feat. Polo G · TurnTable Top 100
2018  [LIVE]    8th anniversary
      Burna Boy played O2 Academy Brixton, London
      Life on the Outside Tour
```

That state holds from 26 Sep through 6 Oct. On 7 Oct it flips to `5 YEARS AGO TODAY` with `5 years ago` and `8 years ago` on the rows.

**Ranges a design must hold:**

- 0 to 3 rows. 25 days in the next year put 3 rows on the card; 16 August has 5 events and shows the top 3.
- The "N years ago" figure runs from 1 to 13 in 2026 (14 in 2027, from L.I.F.E, 2013).
- Coming-up labels run up to `Coming up: 10 September`, which is 12 characters of date.
- Over a full year (26 Sep 2026 to 25 Sep 2027), **166 days show "today" and 199 show "coming up"**.
- The longest gaps between dated days are 12 days: 26 Jan → 7 Feb, and 25 Sep → 7 Oct (the one we are in now).
- If the data held no events at all, the band would render nothing (`OnThisDayBand.tsx:20`).

### 1B. Home page: phone card (`app/components/MobileOnThisDayCard.tsx`, `mobileOnThisDay.module.css`)

**Where it sits.** It is the **last section of the phone home** (`MobileHome.tsx:346`), after:

1. Hero
2. Four-stat grid
3. The No. 1 board
4. Album rail
5. "Where he's performed" globe teaser
6. History made

The five-tab bar sits below it as usual.

**Structure and styles** (`MobileOnThisDayCard.tsx:20-52`):

- **Container**: padding 22px 0 26px, top hairline (`.homeCard`, `:171-177`).
- **Kicker**: the same words as desktop, but **gold** (`--gold`, Mono 700, 11px, `--type-label-tracking`; `:59-67`). Desktop's kicker is muted.
- **Title h2**: Anton **26px** / 1.05, uppercase (`.homeTitle`, `:178-186`). The same words as desktop.
- **Up to three rows**, full-bleed with 18px side padding (`.row`, `:125-134`). Each row is a column:
  - A top line with the year (Anton 20, gold), the pill (padding 3px 9px), and the "ago" label pushed right (`margin-left:auto`; `:135-162`)
  - The headline (600, 15px)
  - The detail (12.5px, muted)
  - Press state: `--bg-raised`
- **After the list** (not beside the title, as on desktop): an **outlined gold pill button** and a muted text link (`:44-51`):
  - Pill: `All 2 on 7 October ↗` / `7 October, every year ↗`. Min-height 44, padding 0 18, 1px gold border, gold text, Mono 700, 11px, tracking .12em (`.pill`, `:95-111`). Note the ↗ arrow; desktop uses →.
  - Text link: `The calendar →` (Mono 11px, muted, 44px tall; `.textLink`, `:112-122`).

### 1C. `/on-this-day`: the calendar

**Desktop** (`app/on-this-day/page.tsx:35-127`, `onThisDay.module.css`):

1. **Breadcrumb bar**: `Home / On This Day` (`BreadcrumbBar`, `:36`; label from `SEGMENT_LABELS`, `seo.ts:196`).
2. **Hero band**. Padding 50px 40px 42px, grid `1.4fr 1fr`, gap 56, aligned to the bottom (`:15-21`).
   - **Left side:**
     - Eyebrow: a 22×2px gold rule, then `BURNA BOY · THE CALENDAR` (Mono 700, 11.5px, .18em, muted; `:22-33`).
     - **h1** `ON THIS DAY`, with the word *Day* in the site's gold-gradient `inkText` treatment (a gold ramp with a noise overlay). Anton **96px** / 0.88 (`:34-42`; `page.tsx:45-47`).
     - Lede (18px / 1.5, max 56ch, `--text-body-cool`): *"228 dated milestones on 167 days of the year — album releases, chart peaks, certifications, awards and shows, each filed on the day it happened. Pick a date for everything on it."* (`page.tsx:48-52`)
   - **Right side: the tally.** One ruled row per kind, **in `KIND_LABEL` order, not sorted by count**. Each row is a 7px dot in the kind ink, the label (Mono 11px, .1em, muted), and the count right-aligned in Anton 22px `--text` (`:53-73`; `page.tsx:54-62`). The rows read: Release 9 · Charts 35 · Streaming 2 · Certification 37 · Awards 5 · Live 140.
3. **Calendar band** (`page.tsx:66-113`). A 12-month grid, **4 columns** (3 columns at 1240px and below), gap 28px 32px, padding 40px 0 48px (`:77-83`).
   - **Month header**: the month name in Anton 22px uppercase, and on the right a Mono 11px muted count `21 dates` (`:84-102`).
   - **Day grid**: 7 columns, gap 4, square cells, radius 4, Geist 13.5px (`:103-119`). The grid **does not align to weekdays**. Day 1 always sits in the first cell, because the calendar is year-agnostic. February always has 29 cells (`page.tsx:27-28`).
     - **A day with milestones** ("dayOn"): 700 weight, `--text`, `--bg-soft` fill, 1px `--line` border. **A 5×5px dot** in the ink of the day's *lead* event sits 4px from the top-right corner. On hover the fill goes to `--bg-raised` and the border to gold (`:120-137`). It links to the day page. Its native tooltip (`title`) is `2023: “On the Low” was certified Platinum in Sweden`, and its aria-label is `16 August — 5 milestones` (`page.tsx:82-91`).
     - **A day without** ("dayOff"): the plain number in `--dim`, no border, not a link, hidden from assistive tech (`:128`).
     - **The number of events on a day is not shown visually** (only in the aria-label). One event and five events look the same apart from the dot colour.
   - **Legend** under the grid (12.5px, muted): `The dot is the day's lead milestone:`, then a dot and label per kind (`page.tsx:103-111`).
4. **Source note band** (`--bg-soft` fill, 13.5px muted, max 88ch; `:150-157`): *"Only records that carry their own day are here: a certification on the award date its body's register prints, a chart peak on the issue that first carried it, a show on the night itself. A record known only by its year stays off the calendar until its day is read — see the methodology."* The word "methodology" links to `/methodology`.
5. **Keep Exploring** rail, with three cards: Career Timeline, Career Records, Stat Cards (`links.ts:137`).

**Dates per month (desktop count / phone count):**

| Month | Dates | Events |
|---|---|---|
| January | 9 | 12 |
| February | 11 | 11 |
| March | 14 | 15 |
| April | 9 | 10 |
| May | 11 | 15 |
| June | 15 | 18 |
| July | 21 | 37 |
| August | 15 | 24 |
| September | 17 | 22 |
| October | 10 | 16 |
| November | 17 | 25 |
| December | 18 | 23 |

The dot colour is the lead kind. Across the 167 days the leads are: Live 100, Charts 28, Certification 24, Release 9, Awards 4, Streaming 2. The calendar is therefore mostly green.

**Phone** (`app/components/MobileOnThisDayIndex.tsx`, CSS `mobileOnThisDay.module.css`):

1. **Sticky back bar.** The frosted scrim (`--scrim` with a 14px blur) has a bottom hairline and padding 12px 18px, safe-area aware (`:21-35`). It holds:
   - a 44px round back button (`--bg-soft`, hairline). It goes back in history when the reader came from inside the site, and to `/` otherwise (`BackLink.tsx`)
   - the label `ON THIS DAY` (Mono 700, 11px)
   - the site menu button on the right

   The site's five-tab bar stays at the foot (`mobileScreens.ts:44-49`).
2. **Hero** (padding 22px 18px 18px):
   - Gold kicker: `BURNA BOY · THE CALENDAR`
   - **h1** `ON THIS DAY` in Anton **52px** / 0.88, with *day* in a gold gradient clipped to the text (`--display-ramp-a/b/c`, light `#945e00`×3, dark `#ffd24a → #ffb627 → #ff7a1a`; `:68-86`)
   - Lede (13.5px, `--text-body-cool`): *"228 dated milestones on 167 days of the year. Tap a date for everything that happened on it."* (`MobileOnThisDayIndex.tsx:42-45`)
3. **Tally.** An inline wrap of `● Release 9  ● Charts 35 …` (Mono 11px, .08em, muted, gaps of 8px between rows and 16px between items; `:196-208`).
4. **Twelve month sections.** Each has a top hairline and padding 16px 18px 18px (`:209`):
   - **Header**: the month name in Anton 22px, with `21 dates` right-aligned in Mono 11px. An empty month would read `no dated milestone yet` (`MobileOnThisDayIndex.tsx:63`). Every month has at least 9 dates today.
   - **Only the dated days are shown**, as **chips**. The grid is `repeat(auto-fill, minmax(44px, 1fr))` with gap 6 (`:229-234`). Each chip has min-height 44, a 1px hairline, radius 4, `--bg-soft`, and the day number in Geist 600 15px. The same 5px lead-kind dot sits 6px from the top-right (`:235-259`). At 390 wide that gives 7 chips per row. Days without events do not appear at all, so there is no empty grid.
5. **Source note**: the same words as desktop, in a `--bg-soft` block at 12.5px (`:280-289`; `MobileOnThisDayIndex.tsx:84-89`).

There is no Keep Exploring rail and no breadcrumb on the phone.

### 1D. `/on-this-day/<day>`: a day page (example `/on-this-day/16-august`)

**URL scheme:** `<day number without zero>-<month in lowercase>`, for example `7-october` or `29-february` (`daySlug`, `onThisDay.ts:414`). Only the 167 dated days are built (`generateStaticParams` plus `dynamicParams = false`, `[day]/page.tsx:20-24`). **Any other day, including today's 26-september, returns 404.** There is no "nothing happened on this day" page.

**Desktop** (`app/on-this-day/[day]/page.tsx:75-150`):

1. **Breadcrumb bar**: `Home / On This Day / 16 August`. The leaf is passed in by hand (`:76`) because the slug cannot spell it.
2. **Hero band** (the same grid as the calendar hero: `1.4fr 1fr`).
   - **Left side:**
     - Eyebrow (rule): `BURNA BOY · ON THIS DAY`
     - **h1** `16 AUGUST`, Anton 96px, plain `--text` with **no gold word** (`:85`)
     - Lede: *"5 milestones dated 16 August, 2019–2023 — newest first. Each one links to the page that holds the record."* A one-year day reads *"… dated 29 June, 2024 — newest first."* (`:86-89`)
   - **Right side: the card aside.** Grid `176px 1fr`, gap 22, aligned to the bottom (`.cardAside`, `:160-165`).
     - A **176×220 preview of the portrait card** (4:5, radius 4, hairline, `--bg-soft` behind it, lazy-loaded; `:93-100`, `.cardPreview :166-174`). Its alt text is `The 16 August card: 2023, “On the Low” was certified Platinum in Sweden`.
     - Beside it, the site's solid gold primary button `Download the card ↓` (`btn btnPrimary`: 46px tall, Space Mono 700 13px; `globals.css:734-796`). It downloads `burna-boy-on-this-day-16-august.png`.
     - Under the button, a caption: *"1080×1350, the 4:5 a post runs uncropped on Instagram and X."*
3. **Event list band** (`:115-147`). An ordered list, **newest first by full date**. The code sorts by date, then rank, then id (`onThisDay.ts:401`). Each row is a whole-row link with grid **`120px 1fr auto`**, gap 28, baseline-aligned, padding 22px 12px 22px 0, a bottom hairline, and `--bg-raised` on hover (`:184-194`). Each row holds:
   - **Year**: Anton **40px**, gold, tabular (`:195-202`)
   - **Body column** (gap 6):
     - The kind pill, left-aligned
     - **Headline**: 20px / 1.3, 600 weight (`--type-h-prose`)
     - **Detail**: 13.5px / 1.5, muted, max 72ch (`:203-221`)
   - **`SEE THE RECORD →`**: Mono 11px, .1em, muted, no wrap. It turns gold when the row is hovered (`:222-230`).
   - **There is no grouping by year.** The list is flat, and each row carries its own year. When several events share a year, the year repeats: 16 August shows `2023` four times and then `2019`.
4. **Pager** (`:135-145`): `← 14 August` on the left, `THE CALENDAR` centred, `17 August →` on the right (Mono 700, 11px, uppercase, gold on hover; `:232-248`). Previous and next are the neighbouring *dated* days, not the neighbouring calendar days, and they **wrap at the year end**: 31 December → 3 January, and 3 January ← 31 December (`neighbours()`, `onThisDay.ts:466-470`).
5. **Keep Exploring** rail: Career Timeline, Career Records, Stat Cards.

**Phone** (`app/components/MobileOnThisDayDay.tsx`):

1. **Sticky back bar.** The back button goes back in history, or to `/on-this-day` when there is no in-site history (aria "Back to the calendar"), with the label `ON THIS DAY` and the menu button. The five-tab bar stays at the foot (`mobileScreens.ts:124-128`).
2. **Hero:**
   - Gold kicker: `BURNA BOY · ON THIS DAY`
   - **h1** `16 AUGUST`, Anton 52px, no gold word
   - Lede: *"5 milestones dated 16 August, 2019–2023 — newest first."* (`:32-34`)
   - The **outlined gold pill** `Post-ready card · 1080×1350 ↓`, which downloads the PNG (`:35-37`). There is **no card preview image** on the phone.
3. **Event rows.** The same rows as the phone home card, but **without the "ago" label**: the year and pill on the top line, then the headline (15px) and the detail (12.5px) (`:40-55`).
4. **Pager**: `← 14 August` and `17 August →` at the ends. **There is no calendar link in the middle**; the back bar does that job (`:57-64`).

There is no breadcrumb bar, no Keep Exploring rail and no source note on the phone day page.

### 1E. OG images, 1200×630 (link previews)

Both use the same frame:

- Background `#0a0a0b`, text `#f5f4f0`, padding 64.
- A **gold radial glow** 560px across, off the top-right corner (`rgba(255,182,39,.22)` fading to 0 at 70%).
- The **site lockup** (`OgLockup`, `app/lib/og-lockup.tsx:78-146`) at **44px tall, top-right** (top 56, right 64). It is made of:
  - the crown mark (five rounded gold→orange bars `#ffb627 → #ff7a1a` on a base rule, with a green `#3ed17f` dot)
  - `BURNABOY` in Anton `#f5f4f0` and `STATS` in the gold gradient
  - under them, `THE NUMBERS, VERIFIED` in Space Mono `#9b9ba3`
- The URL line runs along the bottom.
- Gold is `#ffb627` (`opengraph-image.tsx:10/14`).
- The sans text is set in Geist. The only sans file loaded is **Geist Regular 400** (`og-lockup.tsx:46-50`), so the `fontWeight: 800` headings do not get a bold cut.

**Calendar OG** (`app/on-this-day/opengraph-image.tsx`), top to bottom:

1. Kicker `BURNA BOY · THE CALENDAR` (26px, tracking 6, gold, 700).
2. Title `On This Day`: **110px**, gold, letter-spacing −3, line-height 1.
3. Subline (30px, `#c9c9d0`, max-width 900): *"A dated milestone for every day that has one — each on the day it happened."*
4. **Four stat tiles**. Each has a `#141416` fill, a hairline border `rgba(245,244,240,.12)`, radius 12, padding 16×22 and min-width 150. The value is 48px gold; the label is 19px uppercase `#9b9ba3`. The tiles read **`167 DATES` · `228 MILESTONES` · `140 LIVE` · `37 CERTIFICATION`**. The last two are the two largest kinds, picked from the data.
5. Footer: `BURNABOYSTATS.COM/on-this-day` (26px, `#9b9ba3`, tracking 4). The domain is capitals and the path is lower case, because `cardUrl()` in `og-image.tsx:77` lower-cases only the path.

Note: the code comment at `:12` says "The three biggest kinds", but the code takes two (`.slice(0, 2)`).

**Day OG** (`app/on-this-day/[day]/opengraph-image.tsx`), top to bottom:

1. Kicker `BURNA BOY · ON THIS DAY`.
2. Title = **the day label**, for example `16 August`, at **120px** gold (`:87-89`).
3. Lead line (32px, `#c9c9d0`, max-width 1000): `2023 — “On the Low” was certified Platinum in Sweden` (`:23, 90-92`). The longest lead is 76 characters: *"2022 — Burna Boy played Madison Square Garden (One Night in Space), New York"*.
4. **Three tiles** (value 44px):
   - `5` / `MILESTONES` (`MILESTONE` when there is one)
   - `2019–2023` / `YEARS`. This is a span, or a single year such as `2024`.
   - `Certification` / `LEADS WITH`. This is the lead event's pill word, printed in gold.
5. Footer `BURNABOYSTATS.COM/on-this-day/16-august`.

The alt text is `Burna Boy on this day, 16 August: 2023 — “On the Low” was certified Platinum in Sweden`. The image URL carries a content hash (`ogId`), so a changed lead or count gives a new URL.

### 1F. The post-ready portrait card, 1080×1350 (`/on-this-day/<day>/card`)

It is drawn by the site's **existing stat-card renderer** (`app/lib/statCardImage.tsx`), the same one `/share` uses, with the new `portrait` ratio (`cardSizes.ts:17`). It is rendered on request and cached (`max-age=600, s-maxage=3600, swr 86400`). A day with no events returns a plain-text 404: *"No milestones are dated on that day."* (`card/route.ts:12`).

**Layout (portrait uses the square card's settings: padding 84):**

- **Face**: a warm near-black gradient, `linear-gradient(155deg, #1A1410, #0C0A09 55%, #140F0A)`, with a 2px border `rgba(255,182,39,.28)` and a gold radial wash from the top-right (`:23, 67, 71-79`).
- **Burna Boy photo**, bled off the right edge:
  - The box is **540 wide × 1080 tall**, top-anchored at 90% opacity (`:37, 44, 87-102`).
  - Scrims dissolve its left edge, top and right edge (`:106-144`).
  - The bottom melts out over the last 240px of the photo box (`:148-161`), and then **solid `#0C0A09` runs the last 270px to the base**. That solid band is new for portrait and fixes a seam (`:167-179`).
  - A base-up wash keeps the number off the face (`:182-190`).
- **Top row (brand row)**:
  - The **text** wordmark `BURNABOY` + `STATS` (gold), 38px. **This is not the crown lockup the OG images use.**
  - On the right, a gold outline chip `ON THIS DAY · 16 AUGUST` (23px, tracking 3, uppercase, 2px `rgba(255,182,39,.5)` border, pill shape; `:231-252`).
- **Bottom block, pinned to the base:**
  - The **value** = the lead event's **year**, for example `2023`. It uses the gold gradient `#ffd24a → #ffb627 → #f5890b`. Four characters give 210 × 0.86 ≈ **181px**, weight 800 requested, letter-spacing −4 (`:49-52, 256-270`). The card deliberately prints the year and never "N years ago", so a saved card stays true (`onThisDay.ts:541-546`).
  - The **label** = the lead headline, uppercase, max-width about 669px. Its size steps down with length: ≤42 characters → **52px**, ≤64 → **44px**, longer → **38px** (`:278-281`). Across the 167 cards: 114 print at 52px, 51 at 44px and 2 at 38px. The longest is the Madison Square Garden line at 69 characters.
  - A 2px gold rule (`rgba(255,182,39,.35)`).
  - **Bottom-left, the kicker** (27px, `#CFC7BB`, max about 482px): `On this day, 16 August — and 4 more milestones`. A one-event day reads just `On this day, 8 October` (`onThisDay.ts:553`).
  - **Bottom-right, two lines** (21px, uppercase, tracking 2):
    - **source** = the lead event's `body` field (`#8A8279`)
    - `AS OF 2026-09-25` (`#6B655D`). That is the site's latest `updates.ts` date, not the event's date (`api.ts:21`).
- **Provenance stamp**: `BURNABOYSTATS.COM` centred on the bottom edge (21px, `#8a8279`).
- **Watermark**: the month abbreviation, for example `AUG`, at 360px in `rgba(255,182,39,.05)`, ghosted in the bottom-right corner (`onThisDay.ts:558`; `statCardImage.tsx:214-228`).
- **The event's detail line is not printed on the card.**

> **Note for design (the source slot):** "source" is whatever the lead event's `body` field holds, and for many events **that is not a publisher**:
> - A festival or concert card prints its *location*, for example `NYON, SWITZERLAND`.
> - A tour show without a gross prints the *tour name*, for example `SPACE DRIFT WORLD TOUR`.
> - A release prints the *label*, for example `ATLANTIC · BAD HABIT · SPACESHIP`.
>
> Only certifications, charts, grossed shows (`BILLBOARD BOXSCORE`) and awards print an actual body.

### 1G. Breadcrumbs, SEO, search, sitemap and navigation

- **Breadcrumbs.**
  - Desktop only, visible bar. Calendar: `Home / On This Day`. Day page: `Home / On This Day / 16 August`.
  - Day pages emit their own `BreadcrumbList` JSON-LD with the three crumbs (`[day]/page.tsx:59-67`). They are opted out of the site-wide generated trail (`seo.ts:165`), because that trail would end in the raw slug.
  - The calendar uses the site-wide trail, labelled via `SEGMENT_LABELS["on-this-day"] = "On This Day"` (`seo.ts:196`).
- **Calendar `<title>`**: `Burna Boy On This Day — A Milestone for Every Date`.
  - Description: `Burna Boy on this day: 228 dated milestones on 167 days of the year — releases, No. 1s, certifications, awards and shows.`
  - Share title: `Burna Boy — On This Day`. Share description: `A dated milestone for every day that has one, each linked to its source.` (`page.tsx:17-23`)
- **Day `<title>`**: `Burna Boy on This Day: 16 August — 5 Milestones`. The longest is 50 characters.
  - **Description**: `2023: “On the Low” was certified Platinum in Sweden. Plus 4 more Burna Boy milestones dated 16 August.` A one-event day reads `2021: Burna Boy played Hollywood Bowl, Los Angeles. Burna Boy on this day, 8 October.` (`[day]/page.tsx:30-34`). The fallback wording (count plus span) is used on 0 of 167 days; all fit in 160 characters.
  - Share title: `Burna Boy on this day — 16 August`. Share description: `2023: “On the Low” was certified Platinum in Sweden.`
- **Sitemap**: `/on-this-day` (priority 0.7, weekly) plus all 167 day pages (0.5, monthly), with no lastmod (`sitemap.ts:207-208`).
- **Site search**:
  - One hand-written entry "On This Day", with keywords such as "today in history", "anniversary" and "what happened today" (`searchIndex.ts:65-71`).
  - 167 generated entries titled `On this day: 16 August`, described as `5 Burna Boy milestones dated 16 August, 2019–2023.`, with the US order `august 16` as a keyword (`buildSearchDocs.ts:161-177`).
- **Records hub**: a new row, **On This Day**, with the text `167 dates in the calendar, each with a milestone on it` (`recordBooks.ts:27`). It appears on `/records` (desktop and phone) and counts in the nav sheet's book total.
- **Keep Exploring** on both pages: Career Timeline, Career Records, Stat Cards (`links.ts:137`).
- **No `updates.ts` entry** was added.

---

## 2. The event model

### Fields (`OnThisDayEvent`, `onThisDay.ts:82-99`)

| Field | What it holds |
|---|---|
| `id` | A stable unique key, for example `cert:se:on-the-low:platinum` |
| `date` | ISO `YYYY-MM-DD`, taken from the source record's own field |
| `year` | A number |
| `kind` | One of the six kinds |
| `headline` | A past-tense sentence **with no date in it**; the page supplies the day |
| `detail` | The muted second line |
| `body` | The publisher or source; the portrait card prints it as its "source" |
| `href` | The page that holds the record |
| `source` | A pointer back to the raw field; tests resolve every event through it |
| `rank` | Decides which event *leads* a day (card, OG, calendar dot, home order). Higher wins; ties go to the more recent year. |

### The six kinds: where the date comes from, how the text reads, where it links

| Kind | Source field (data file) | Headline template | Detail template | Links to | Lead rank | Count |
|---|---|---|---|---|---|---|
| **Release** | `albums.ts` `released` (8 studio albums) + `daiDai.ts DAI_DAI_SPOTIFY_DEBUT` | `Burna Boy released {Album}` / `“Dai Dai” with Shakira was released` | `His {debut/second/…/eighth} studio album · {label}` / `The 2026 FIFA World Cup song — on Spotify's global chart at No. 114 the same day` | `/music/albums/<slug>` (8), `/dai-dai` (1) | 90 / 86 | **9** |
| **Charts** | `charts.ts` `peakDate` (new field): the issue on which the peak was *first* reached. **Top 10 peaks only.** | `“{Song}” hit No. {n} in {the country}`. Albums are bare, not quoted: `No Sign of Weakness hit No. 1 in Nigeria` | `{credit} · {chart name}`. Credit reads `Burna Boy feat. X` on his own songs and `X ft. Burna Boy` on others'. Albums read `TurnTable Top 100 Albums`, or `Albums chart · {chart}` | `/records/charts#song=<title>` | No. 1 = 76; No. n = 60−n; +8 for UK/US | **35** |
| **Streaming** | `daiDai.ts DAI_DAI_SPOTIFY_NO1_FIRST_DAY`, `DAI_DAI_YT_NO1_SINCE` | `“Dai Dai” went to No. 1 on Spotify's global chart` / `… on YouTube's global music-video chart` | `Daily Top Songs Global — the first of 37 days at No. 1` / `Global Daily Top Music Videos` | `/dai-dai` | 82 / 74 | **2** |
| **Certification** | `certifications.ts certHistory` `date` (new field): the award day the body's register prints | `“{Song}” was certified {level} in {the country}`. Albums are bare. Levels include `2× Platinum` and `2× Platino` | `{credit} · {body}`, or just `{body}`, e.g. `BPI` | `/certifications#release=<title>` | Diamond 64, Platinum 52, Gold 44, Silver 38; +multiplier (max +5); +2 for an album | **37** |
| **Awards** | `awards.ts` `AwardNom.date` (**wins only**) + `Honour.date` (both new fields) | `{Ceremony}: {Category}`, e.g. `Nigeria Entertainment Awards: Album of the Year`; honours print their title, e.g. `BRIT Billion Award` | `Won · {work}` for a ceremony; for an honour, its note (or its org) | `/records/awards#body=<ceremony>` or `/records/awards` | 72 (win) / 68 (honour) | **5** |
| **Live** | `tours.ts` tour `dates[].date` (107), festival (17), other-show (5) and concert (9) `date`, live-moment `date` (2) | Tour show: `Burna Boy played {venue}, {city}`. Festival: `Burna Boy headlined {name}`. Other show: `Burna Boy played {name}`. Concert: `Burna Boy headlined {name}` (or the name itself if it contains "Burna Boy", e.g. `Burna Boy Live in Addis Ababa`). Live moment: its own title, e.g. `FIFA World Cup Final halftime show` | Tour show: `{tour name}`, plus ` · $1,592,684 from 13,219 tickets` when a Billboard Boxscore gross joins. If a live moment names that night, **its text replaces the detail**. Festival, other show, concert: **the location only** (the rich note is not shown). Live moment: its full text | `/records/tours` (84), `/records/tours/festivals` (31), `/records/tours/revenue` (25, when a gross joins) | 34 for a plain show; 46–52 with a gross; 70/79 with a moment; festival 52, concert 48, other 42, moment 66/88 | **140** |

Builders: `onThisDay.ts:153-183` (release), `:185-219` (chart), `:221-248` (streaming), `:252-272` (certification), `:274-309` (award), `:315-391` (show). Country names take "the" where English does: `in the United Kingdom`, `in the Netherlands` (`:127-128`).

The kinds the brief anticipates but that **do not exist** in the build:

- **No chart *debuts*.** Only the date a Top 10 peak was first reached. The Dai Dai release row mentions its Spotify debut position in its detail.
- **No streaming-count milestones** (such as "1 billion streams"). Streaming is just the two Dai Dai No. 1 days.
- **No nominations.** Wins only.

### The breakdowns behind the counts

- **Charts, 35.** Nigeria (TurnTable) 33 and UK (Official Charts Company) 2. The UK two are "Own It" on 3 Jan 2020 and *I Told Them…* on 1 Sep 2023. There are 11 No. 1s. By list: 4 album-chart events, 9 on features, 22 on his own singles.
- **Certifications, 37, by body:** BPI 14, SNEP 7, RMNZ 6, IFPI Sverige 5, NVPI 1, Ultratop 1, IFPI Austria 1, Music Canada 1, RIAA Latin 1. **By level:** Gold 14, Silver 7, Platinum 7, Diamond 3, 2× Platinum 2, 2× Platino 1, 3× 1, 4× 1, 5× 1.
- **Live, 140:** tour shows 107, festivals 17, concerts 9, other shows 5, live moments 2. **Tour shows by tour:** I Told Them… 27, No Sign of Weakness 22, African Giant 18, Life on the Outside 17, Love, Damini 15, Space Drift 8. Of these, 25 have a Boxscore gross joined: they link to `/records/tours/revenue`, and their card source reads `BILLBOARD BOXSCORE`. Another 6 have a live moment joined, and the moment's text replaces the detail line.
- **Awards, 5:**
  - NEA Album of the Year (10 Nov 2018)
  - BRIT Billion Award ×2 (29 Jun 2024, 15 Jul 2024)
  - "Burna Boy Day" Proclamation (2 Mar 2024)
  - SESAC Top Songs honoree (22 Sep 2026)

### Figures a layout must hold

| Measure | Value |
|---|---|
| Events | **228** |
| Days of the year with at least one event | **167** of 366 (199 days empty) |
| Days with exactly one event | **120** |
| Days with 2 / 3 / 4 / 5 events | 36 / 9 / 1 / 1 |
| Most events on a single day | **5**: 16 August |
| Date range | **12 Aug 2013** (L.I.F.E, the earliest) to **22 Sep 2026** (SESAC, the latest) |
| Events by year | 2013: 1 · 2015: 1 · 2016: 1 · 2017: 1 · 2018: 19 · 2019: 22 · 2020: 6 · 2021: 11 · 2022: 34 · 2023: 35 · 2024: 30 · 2025: 40 · 2026: 27 |
| Days whose events span more than one year | 39 (the widest is 22 September, 2018–2026) |
| Longest headline | **70 characters**: *"Burna Boy played Huntington Bank Pavilion at Northerly Island, Chicago"* (23 Jul 2022) |
| Longest detail | **161 characters**: *"Headlined “The AFCON Last Dance” in Rabat (16 Jan 2026), closing out the Africa Cup of Nations hosted by Morocco — on a bill with Stormzy, Stonebwoy and Jaylann."* (16 Jan 2026). The next longest is 157 characters (World Cup Final halftime, 19 Jul 2026). |
| Longest event overall (headline + detail) | 193 characters: the AFCON event above |
| Median / 90th-percentile length | headline 39 / 53; detail 24 / 54 |
| Shortest | headline 18 (`BRIT Billion Award`); detail 3 (`BPI`) |
| Longest day label | 12 characters (`10 September`) |

**The ten busiest days** (the 3-event days tie, so all eleven are listed):

| # | Day | Events | Mix | Lead kind |
|---|---|---|---|---|
| 1 | **16 August** | 5 | 4 Certification, 1 Live | Certification |
| 2 | **14 July** | 4 | 3 Charts, 1 Certification | Charts |
| 3= | 23 January | 3 | 2 Certification, 1 Live | Certification |
| 3= | 1 May | 3 | Certification, Charts, Live | Charts |
| 3= | 11 July | 3 | Live, Release, Charts | Release |
| 3= | 17 July | 3 | 2 Charts, 1 Live | Charts |
| 3= | 31 August | 3 | 3 Charts | Charts |
| 3= | 8 September | 3 | 2 Live, 1 Certification | Certification |
| 3= | 24 October | 3 | 3 Live | Live |
| 3= | 3 November | 3 | 2 Live, 1 Certification | Live |
| 3= | 8 December | 3 | 2 Live, 1 Certification | Certification |

The full list of all 167 days is in **Appendix A**.

---

## 3. Five real days, in full

Rows are in day-page order (newest first). ★ marks the lead: the event the card, the OG image and the calendar dot use.

### 3.1 A busy day: **16 August** (5 events, 2019–2023)

| Year | Pill | Headline | Detail | Links to |
|---|---|---|---|---|
| 2023 ★ | Certification | “On the Low” was certified Platinum in Sweden | IFPI Sverige | `/certifications#release=On%20the%20Low` |
| 2023 | Certification | “Ye” was certified Platinum in Sweden | IFPI Sverige | `/certifications#release=Ye` |
| 2023 | Certification | African Giant was certified Gold in Sweden | IFPI Sverige | `/certifications#release=African%20Giant` |
| 2023 | Certification | “Gbona” was certified Gold in Sweden | IFPI Sverige | `/certifications#release=Gbona` |
| 2019 | Live | Burna Boy played Union Hall, Edmonton | African Giant Tour | `/records/tours` |

- **Pager**: ← 14 August · 17 August →
- **Portrait card**:
  - value `2023`
  - label `“ON THE LOW” WAS CERTIFIED PLATINUM IN SWEDEN` (45 characters → 44px)
  - kicker `On this day, 16 August — and 4 more milestones`
  - chip `ON THIS DAY · 16 AUGUST`
  - source `IFPI SVERIGE`
  - watermark `AUG`
- **OG tiles**: `5 MILESTONES` · `2019–2023 YEARS` · `Certification LEADS WITH`
- **On the home card**, in 2027 and later, only the top three rows show: the three highest-ranked 2023 Swedish certifications.

### 3.2 A sparse day: **8 October** (1 event, 2021)

| Year | Pill | Headline | Detail | Links to |
|---|---|---|---|---|
| 2021 ★ | Live | Burna Boy played Hollywood Bowl, Los Angeles | Space Drift World Tour | `/records/tours` |

- **Lede**: *"1 milestone dated 8 October, 2021 — newest first."*
- **Pager**: ← 7 October · 11 October →
- **Portrait card**: value `2021`, label `BURNA BOY PLAYED HOLLYWOOD BOWL, LOS ANGELES` (44 characters → 44px), kicker `On this day, 8 October`, source `SPACE DRIFT WORLD TOUR`, watermark `OCT`.
- **Home**: on 8 Oct 2026 the band reads `5 YEARS AGO TODAY` with one row, and the link reads `8 October, every year →`.
- This is the typical page: 120 of the 167 days look like this.

### 3.3 A day with an award: **29 June** (2 events, 2024)

This is the page the builder used for verification.

| Year | Pill | Headline | Detail | Links to |
|---|---|---|---|---|
| 2024 ★ | Live | Burna Boy played London Stadium, London | $6.15M from 58,973 tickets: the highest-grossing single concert by any African artist. | `/records/tours/revenue` |
| 2024 | Awards | BRIT Billion Award | For surpassing 1 billion UK streams — presented at his London Stadium show, 29 June 2024. | `/records/awards` |

- The London Stadium row's detail is its **live-moment text**, joined onto the tour show. The show outranks the award (rank 79 vs 68), so the card leads with the show.
- **Portrait card**: value `2024`, label `BURNA BOY PLAYED LONDON STADIUM, LONDON` (39 characters → 52px), kicker `On this day, 29 June — and 1 more milestone`, source `BILLBOARD BOXSCORE`.

Other award days: 2 March (Boston's "Burna Boy Day", with a TD Garden show), 15 July (the 2-billion BRIT Billion, alone), 10 November (NEA 2018 plus a 2021 Paris show) and 22 September (SESAC 2026 plus a 2018 show).

### 3.4 A day with a release: **11 July** (3 events, 2024–2026)

| Year | Pill | Headline | Detail | Links to |
|---|---|---|---|---|
| 2026 | Live | Burna Boy headlined North Sea Jazz Festival | Rotterdam, Netherlands | `/records/tours/festivals` |
| 2025 ★ | Release | Burna Boy released No Sign of Weakness | His eighth studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/no-sign-of-weakness` |
| 2024 | Charts | “Higher” hit No. 1 in Nigeria | TurnTable Top 100 | `/records/charts#song=Higher` |

- The day page puts 2026 first because it sorts newest first. The card leads with the 2025 release (rank 90).
- **Portrait card**: value `2025`, label `BURNA BOY RELEASED NO SIGN OF WEAKNESS` (38 characters → 52px), kicker `On this day, 11 July — and 2 more milestones`, source `ATLANTIC · BAD HABIT · SPACESHIP`.

All nine release days:

- 12 Aug 2013 L.I.F.E
- 25 Nov 2015 On a Spaceship
- 26 Jan 2018 Outside
- 26 Jul 2019 African Giant
- 14 Aug 2020 Twice as Tall
- 8 Jul 2022 Love, Damini
- 25 Aug 2023 I Told Them…
- 11 Jul 2025 No Sign of Weakness
- 15 May 2026 "Dai Dai"

### 3.5 Today: **26 September** (0 events)

26 September has **no event**, so:

- `/on-this-day/26-september` returns **404**, and so does its `/card`.
- On the calendar, 26 September is a plain grey number on desktop and absent on the phone.
- The **home card is in coming-up mode**. It names **7 October**, the next dated day, 11 days away:

| Year | Pill | Home label | Headline | Detail | Links to |
|---|---|---|---|---|---|
| 2021 ★ | Charts | 5th anniversary | “Want It All” hit No. 8 in Nigeria | Burna Boy feat. Polo G · TurnTable Top 100 | `/records/charts#song=Want%20It%20All` |
| 2018 | Live | 8th anniversary | Burna Boy played O2 Academy Brixton, London | Life on the Outside Tour | `/records/tours` |

The dated days either side of today are 23, 24 and 25 September (one show each) and then 7, 8 and 11 October.

---

## 4. How "today" works, empty days, and limitations

### How today is chosen

- **Timezone.** Today is the calendar day in **Europe/London**, never the reader's clock (`londonDate`, `onThisDay.ts:475-484`). A test pins 23:30 UTC on 25 Sep to the London date 26 Sep.
- **One decision per render.** The pick is made once per server render on the home page (`app/page.tsx:88`) and passed to both layouts. No JavaScript runs in the browser for it, so there is no hydration flash.
- **Revalidation.** The home page is statically rendered with **`revalidate = 3600`** (`app/page.tsx:43`), so the card turns over **within an hour after London midnight**, not exactly at midnight. A visitor at 00:20 London time may still see yesterday's state.
- **Everything else is static.** The calendar and day pages are fixed at build time and do not depend on today at all. Nothing on them says "today".

### The selection rules (`onThisDayFor`, `onThisDay.ts:519-529`)

1. Take today's London date. The anniversaries are that day's events **from earlier years only**, sorted by rank and then by most recent year.
2. If there are any, the mode is **today**. The title reads `N years ago today`, where N is taken from the lead row.
3. If not, step forward day by day (up to 366) to the first date that has earlier-year events. The mode is **coming**: the title reads `Coming up: 7 October` and each row reads `5th anniversary`.
4. The card shows at most 3 rows. The day page link carries the count of the *anniversary* events, not the page total.

### Edge cases worth designing for

- **A day whose only events are from this year** (15 such days in 2026) is skipped by the home card this year and goes to coming-up, although its day page exists.
- **29 February** has one event (2024, Bell Centre, Montreal) and a page. The home card can only reach it in leap years; in other years the stepper passes from 28 Feb to 1 Mar.
- **Previous and next wrap at the year end.** On 31 December, "next" is 3 January.
- **The desktop calendar shows no weekdays.** Each month is a numbered grid starting at cell one. February always shows 29.
- **The calendar dot shows only the lead's kind.** It does not show the count or the mix; that is only in the tooltip and aria-label.
- **The phone month header** would read `1 dates` if a month ever had a single dated day (`MobileOnThisDayIndex.tsx:63`). No month does today; the minimum is 9.

### Limitations the builder flagged (PR #344 body and code comments)

- **Most award wins are not on the calendar.** Grammy, BET, MOBO and the rest are year-only in `awards.ts`. Adding their ceremony days needs a read at each body, which is left as a follow-up. Only 2 wins and 3 honours are dated.
- **A record known only by its year or month stays off the calendar.** So does a date range such as "7–8 September", and a month on its own (`tours.ts` Festival.date comment). Examples: the World Cup opening ceremony, the Lionesses parade, the DStv Delicious and World Creole festivals.
- **Chart peaks.** Only Top 10 peaks with a recorded issue date are included: every Nigerian Top 10 (from the 18 Sep TurnTable walk) and the two OCC-dated UK No. 1s. Other countries' peaks have no `peakDate` yet.
- **Nothing is dated from `updates.ts`**, the day the site logged a fact.
- **A live moment that is also a dated tour show** (London Stadium, Citi Field, MSG, Stade de France, Red Rocks) gets no date of its own. Its text is joined to the show instead, so the night is not listed twice.
- **A Boxscore gross joins only when the tour played that venue once that year.** Two nights at one venue share one reported row, so neither night shows a gross.
- **The portrait card prints the year, not "N years ago",** because a saved card must stay true.
- **Cards are rendered on request and cached**, not built at deploy.
- **The sitemap has no lastmod.**
- **The dates promoted into fields need review.** The PR asks the owner to review the dates newly promoted into fields: 37 cert dates, 35 chart peak dates, 33 tour dates, and 2 award plus 3 honour dates.

### Small inconsistencies found while reading (not flagged by the builder)

1. The calendar OG comment says "the three biggest kinds", but the image shows two (4 tiles in total). `app/on-this-day/opengraph-image.tsx:12-16`.
2. In light mode, Streaming and Awards share one ink (`#6b6b74`).
3. The portrait card's "source" slot prints a location, tour name or record label for most Live and Release leads, not a publisher.
4. The portrait card's `AS OF` date is the site's last-update date (`2026-09-25`), not the milestone's.
5. The home card orders rows by rank; the day page orders them by date. The same day can read in a different order in the two places.
6. The home link count (`All N on …`) counts only earlier-year events, so it can be lower than the day page's count (for example 22 September in 2026).
7. The phone's "open the day" button uses ↗; desktop and every other link use →.
8. The phone home kicker is gold; the desktop band kicker is muted grey.

---

## 5. Pictures from the production build

These PNGs were rendered from the branch's own code: the same `next/og` renderer, the same functions and the same fonts, run directly in Node.

| File | What it is |
|---|---|
| `images/og-calendar.png` | 1200×630 calendar OG |
| `images/og-day-16-august.png` | day OG, busy day (5) |
| `images/og-day-28-april.png` | day OG with the longest lead line: it wraps to 2 lines at 32px |
| `images/og-day-8-october.png`, `-29-june`, `-11-july`, `-7-october`, `-16-january` | day OGs for the example days |
| `images/card-16-august.png` | 1080×1350 portrait card, busy day. The kicker wraps to 2 lines. |
| `images/card-28-april.png` | portrait card with the longest label (69 characters), which wraps to **3 lines at 38px** |
| `images/card-8-october.png`, `-29-june`, `-11-july`, `-7-october`, `-16-january`, `-10-november`, `-15-july` | portrait cards for the other example days, plus the two award-led days |

What the renders show that the code alone does not:

- **OG images.** The lockup sits top-right in a 238×44 box (`520 × 44/96`, `og-lockup.tsx:79-81`), with the tagline `THE NUMBERS, VERIFIED` in tiny grey Space Mono under the wordmark. The glow is a soft amber patch behind it. The title (for example `16 August`) is sentence case in Geist, not Anton, and not uppercase. The stat tiles size to their content, so `Certification LEADS WITH` is the widest tile.
- **Portrait card:**
  - The photo fills the right half from the top down to about y=1080, then fades to black.
  - **A vertical tone step at about x=432** runs the full height of the photo box, where the dark scrim starts over the lighter card face. This is visible on both renders, and it comes from the shared stat-card renderer rather than this feature.
  - The `AUG` / `APR` watermark is large and cropped at the bottom-right. It sits behind the source lines.
  - The wordmark is plain text (`BURNABOY` white, `STATS` gold), with no crown.

**Page screenshots.** These are from `next start` running the branch's own production build (`.next` BUILD_ID `ZTMsQKmURL_57nv9hQe2x`, built after the last source change). They were taken with headless Chrome on 26 Sep 2026. The home card therefore shows today's real state: **Coming up: 7 October**.

| File | Viewport | What it shows |
|---|---|---|
| `shots/home-desktop-band-dark.png` / `-light.png` | 1440×900 | The scoreboard's foot, History made, **the On This Day band** (268px tall with two rows) and the top of the certifications ledger |
| `shots/home-phone-card-dark.png` / `-light.png` | 390×844 @2x | History made, then **the phone card**, then the five-tab bar. Two gold outline pills stack one screen apart here: History made's `READ THE STORY ↗` and this card's `ALL 2 ON 7 OCTOBER ↗`. |
| `shots/calendar-desktop-dark.png` | 1440, full page | `/on-this-day`: the hero, the tally, all twelve months in 4 columns, the legend, the source note and Keep Exploring |
| `shots/calendar-desktop-1024-dark.png` | 1024, full page | The same page at the 3-column breakpoint |
| `shots/calendar-phone-dark.png` | 390, full page | The phone calendar: the tally wraps to two lines, and the chips run 7 to a row |
| `shots/day-16-august-desktop-dark.png` | 1440, full page | The busiest day page, with the card preview and the gold download button |
| `shots/day-16-august-phone-dark.png` | 390, full page | The same day on the phone |
| `shots/day-29-june-desktop-light.png` | 1440, full page, light | The award day, in light mode |
| `shots/day-11-july-phone-light.png` | 390, light | The release day on the phone, in light mode |

(Other files in `shots/` were put there by another agent and are not described here.)

**Checks from the same run:**

- **Status codes.** `/on-this-day` and `/on-this-day/16-august` return 200. `/on-this-day/29-february` returns 200. `/on-this-day/26-september` returns **404** (HTML), and its `/card` returns **404** (`text/plain`). Every card and OG image returns 200 `image/png`.
- **Sitemap.** It carries **168** On This Day URLs.
- **Layout.** There is **no horizontal overflow** at 390, 1024 or 1440. Each layout has exactly one visible `<h1>`: "On This Day" on the calendar and "16 August" on the day page.
- **Head tags.** The served `<title>`, description, OG and JSON-LD tags match §1G word for word.
- **Images.** The server's card and OG PNGs are byte-for-byte the same size as the direct renders in `images/`.

**Seen in the screenshots:**

- **The desktop day row aligns the 40px year to the pill's baseline**, not to the headline, so the big year sits high, level with the small pill (`align-items: baseline`, `onThisDay.module.css:188`).
- **Tally height.** On the desktop calendar hero, the tally (6 ruled rows) is taller than the left column. Because the grid aligns to the bottom, there is a band of empty space above the eyebrow.
- **Calendar weight.** On desktop, dated days are boxed and bold while empty days are faint numbers. Most boxes carry a green dot, because Live leads 100 of the 167 days.


---

## Appendix A: every day page, January to December

★ marks the day's lead. Rows are in day-page order (newest first). The count in brackets is the day's total.

### January — 9 dates, 12 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **3 January** ★ | 2020 | Charts | “Own It” hit No. 1 in the United Kingdom | Stormzy ft. Ed Sheeran & Burna Boy · Official Charts Company | `/records/charts#song=Own%20It` |
| **10 January** ★ | 2025 | Certification | “We Pray” was certified Silver in the United Kingdom | Coldplay ft. Burna Boy & others · BPI | `/certifications#release=We%20Pray` |
| **11 January** ★ | 2024 | Charts | “Do I” hit No. 6 in Nigeria | Phyno & Burna Boy · TurnTable Top 100 | `/records/charts#song=Do%20I` |
| **15 January** ★ | 2026 | Live | Burna Boy played Avicii Arena, Stockholm | No Sign of Weakness Tour | `/records/tours` |
| **16 January** (2) ★ | 2026 | Live | AFCON 2025 Fan Zone grand finale | Headlined “The AFCON Last Dance” in Rabat (16 Jan 2026), closing out the Africa Cup of Nations hosted by Morocco — on a bill with Stormzy, Stonebwoy and Jaylann. | `/records/tours` |
|  | 2025 | Certification | “We Pray” was certified Gold in France | Coldplay ft. Burna Boy & others · SNEP | `/certifications#release=We%20Pray` |
| **17 January** ★ | 2026 | Live | Burna Boy played Royal Arena, Copenhagen | No Sign of Weakness Tour | `/records/tours` |
| **20 January** ★ | 2026 | Live | Burna Boy played Hallenstadion, Zurich | No Sign of Weakness Tour | `/records/tours` |
| **23 January** (3) ★ | 2026 | Certification | “On the Low” was certified Platinum in the United Kingdom | BPI | `/certifications#release=On%20the%20Low` |
|  | 2026 | Live | Burna Boy played ING Arena, Brussels | No Sign of Weakness Tour | `/records/tours` |
|  | 2025 | Certification | “Enjoy Yourself (Remix)” was certified Gold in New Zealand | Pop Smoke ft. Burna Boy · RMNZ | `/certifications#release=Enjoy%20Yourself%20(Remix)` |
| **26 January** ★ | 2018 | Release | Burna Boy released Outside | His third studio album · Atlantic · Spaceship | `/music/albums/outside` |

### February — 11 dates, 11 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **7 February** ★ | 2020 | Live | Burna Boy Live in Rome | Atlantico, Rome | `/records/tours/festivals` |
| **10 February** ★ | 2023 | Certification | Love, Damini was certified Silver in the United Kingdom | BPI | `/certifications#release=Love%2C%20Damini` |
| **17 February** ★ | 2024 | Live | Burna Boy headlined Spilligate Festival | Fort Charlotte, Nassau, Bahamas | `/records/tours/festivals` |
| **18 February** ★ | 2024 | Live | Burna Boy played Target Center, Minneapolis | I Told Them… Tour | `/records/tours` |
| **21 February** ★ | 2024 | Live | Burna Boy played Wintrust Arena, Chicago | I Told Them… Tour · $674,283 from 5,775 tickets | `/records/tours/revenue` |
| **22 February** ★ | 2024 | Live | Burna Boy played Nationwide Arena, Columbus | I Told Them… Tour | `/records/tours` |
| **24 February** ★ | 2024 | Live | Burna Boy played Scotiabank Arena, Toronto | I Told Them… Tour | `/records/tours` |
| **25 February** ★ | 2024 | Live | Burna Boy played Scotiabank Arena, Toronto | I Told Them… Tour | `/records/tours` |
| **27 February** ★ | 2025 | Charts | “Update” hit No. 4 in Nigeria | TurnTable Top 100 | `/records/charts#song=Update` |
| **28 February** ★ | 2024 | Live | Burna Boy played Bell Centre, Montreal | I Told Them… Tour | `/records/tours` |
| **29 February** ★ | 2024 | Live | Burna Boy played Bell Centre, Montreal | I Told Them… Tour | `/records/tours` |

### March — 14 dates, 15 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **1 March** ★ | 2025 | Live | Burna Boy headlined MadfunXperience | Nairobi, Kenya | `/records/tours/festivals` |
| **2 March** (2) ★ | 2024 | Awards | "Burna Boy Day" Proclamation | March 2 declared "Burna Boy Day" by the Boston City Council, recognising his role in popularising Afrobeats worldwide. | `/records/awards` |
|  | 2024 | Live | Burna Boy played TD Garden, Boston | I Told Them… Tour · $1,592,684 from 13,219 tickets | `/records/tours/revenue` |
| **4 March** ★ | 2021 | Charts | “Rotate” hit No. 8 in Nigeria | Becky G, Burna Boy · TurnTable Top 100 | `/records/charts#song=Rotate` |
| **5 March** ★ | 2026 | Certification | “Last Last” was certified 3× Platinum in New Zealand | RMNZ | `/certifications#release=Last%20Last` |
| **6 March** ★ | 2026 | Certification | Twice as Tall was certified Silver in the United Kingdom | BPI | `/certifications#release=Twice%20as%20Tall` |
| **7 March** ★ | 2024 | Live | Burna Boy played Capital One Arena, Washington, D.C. | I Told Them… Tour · $1,724,853 from 13,892 tickets | `/records/tours/revenue` |
| **9 March** ★ | 2024 | Live | Burna Boy played State Farm Arena, Atlanta | I Told Them… Tour · $1,394,173 from 13,331 tickets | `/records/tours/revenue` |
| **11 March** ★ | 2024 | Live | Burna Boy played Amalie Arena, Tampa, FL | I Told Them… Tour · $580,424 from 5,890 tickets | `/records/tours/revenue` |
| **12 March** ★ | 2024 | Live | Burna Boy played Hard Rock Live, Hollywood, FL | I Told Them… Tour · $965,925 from 5,591 tickets | `/records/tours/revenue` |
| **18 March** ★ | 2022 | Live | Burna Boy played Geneva Arena, Geneva | Space Drift World Tour | `/records/tours` |
| **22 March** ★ | 2019 | Live | Burna Boy Xperience | Sheraton Gardens, Kampala | `/records/tours/festivals` |
| **23 March** ★ | 2019 | Live | Burna Boy Experience | Intare Conference Arena, Kigali | `/records/tours/festivals` |
| **25 March** ★ | 2021 | Charts | “Loved by You” hit No. 4 in Nigeria | Justin Bieber ft. Burna Boy · TurnTable Top 100 | `/records/charts#song=Loved%20by%20You` |
| **31 March** ★ | 2022 | Charts | “Sungba (Remix)” hit No. 1 in Nigeria | Asake ft. Burna Boy · TurnTable Top 100 | `/records/charts#song=Sungba%20(Remix)` |

### April — 9 dates, 10 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **7 April** ★ | 2023 | Certification | “On the Low” was certified Gold in the United Kingdom | BPI | `/certifications#release=On%20the%20Low` |
| **8 April** ★ | 2023 | Live | Burna Boy played Oakland Arena, Oakland | Love, Damini Tour · $885,278 from 9,436 tickets | `/records/tours/revenue` |
| **11 April** ★ | 2026 | Live | Burna Boy Live in El Gouna | El Gouna Conference & Cultural Center, Egypt | `/records/tours/festivals` |
| **12 April** ★ | 2022 | Live | Burna Boy played Rotterdam Ahoy, Rotterdam | Space Drift World Tour | `/records/tours` |
| **14 April** (2) ★ | 2022 | Charts | “Second Sermon (Remix)” hit No. 9 in Nigeria | Black Sherif ft. Burna Boy · TurnTable Top 100 | `/records/charts#song=Second%20Sermon%20(Remix)` |
|  | 2022 | Live | Burna Boy played Ziggo Dome, Amsterdam | Space Drift World Tour · $1,564,720 from 17,000 tickets | `/records/tours/revenue` |
| **18 April** ★ | 2025 | Live | Burna Boy played Stade de France, Paris | First African artist to headline the Stade de France (April 2025) — a $4.53M gross. | `/records/tours/revenue` |
| **21 April** ★ | 2025 | Live | Burna Boy played Co-op Live, Manchester | I Told Them… Tour · $1,338,176 from 13,204 tickets | `/records/tours/revenue` |
| **27 April** ★ | 2025 | Live | Burna Boy played New Orleans Jazz & Heritage Festival | New Orleans, USA | `/records/tours/festivals` |
| **28 April** ★ | 2022 | Live | Burna Boy played Madison Square Garden (One Night in Space), New York | First African artist to sell out the world's most famous arena. | `/records/tours/revenue` |

### May — 11 dates, 15 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **1 May** (3) | 2026 | Certification | “We Pray” was certified Gold in the United Kingdom | Coldplay ft. Burna Boy & others · BPI | `/certifications#release=We%20Pray` |
| ★ | 2025 | Charts | “Laho II” hit No. 2 in Nigeria | Shallipopi & Burna Boy · TurnTable Top 100 | `/records/charts#song=Laho%20II` |
|  | 2024 | Live | Burna Boy headlined Unforgettable Concert | Guyana National Stadium, Providence | `/records/tours/festivals` |
| **3 May** ★ | 2024 | Live | Taste the Rhythms with Burna Boy | Vigie Playing Field, Castries, Saint Lucia | `/records/tours/festivals` |
| **5 May** ★ | 2023 | Certification | “Location” was certified 4× Platinum in the United Kingdom | Dave ft. Burna Boy · BPI | `/certifications#release=Location` |
| **6 May** ★ | 2021 | Charts | “Kilometre” hit No. 1 in Nigeria | TurnTable Top 100 | `/records/charts#song=Kilometre` |
| **15 May** ★ | 2026 | Release | “Dai Dai” with Shakira was released | The 2026 FIFA World Cup song — on Spotify's global chart at No. 114 the same day | `/dai-dai` |
| **18 May** ★ | 2023 | Certification | “Location” was certified Platinum in France | Dave ft. Burna Boy · SNEP | `/certifications#release=Location` |
| **19 May** ★ | 2022 | Charts | “Last Last” hit No. 3 in Nigeria | TurnTable Top 100 | `/records/charts#song=Last%20Last` |
| **23 May** (2) | 2025 | Certification | “Location” was certified 5× Platinum in the United Kingdom | Dave ft. Burna Boy · BPI | `/certifications#release=Location` |
| ★ | 2024 | Charts | “Tshwala Bam (Remix)” hit No. 1 in Nigeria | TitoM, Yuppe & Burna Boy feat. S.N.E · TurnTable Top 100 | `/records/charts#song=Tshwala%20Bam%20(Remix)` |
| **29 May** ★ | 2025 | Charts | “TaTaTa” hit No. 5 in Nigeria | Burna Boy feat. Travis Scott · TurnTable Top 100 | `/records/charts#song=TaTaTa` |
| **30 May** ★ | 2018 | Live | Burna Boy played Howard Theatre, Washington, D.C. | Life on the Outside Tour | `/records/tours` |
| **31 May** (2) ★ | 2024 | Live | Burna Boy headlined We Love Green Festival | Bois de Vincennes, Paris, France | `/records/tours/festivals` |
|  | 2018 | Live | Burna Boy played The Foundry, Philadelphia | Life on the Outside Tour | `/records/tours` |

### June — 15 dates, 18 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **2 June** ★ | 2018 | Live | Burna Boy played Gramercy Theatre, New York | Life on the Outside Tour | `/records/tours` |
| **3 June** (2) ★ | 2023 | Live | Burna Boy played London Stadium, London | First African artist to headline a UK stadium (3 June 2023), to about 60,000 fans, on the Love, Damini tour. | `/records/tours` |
|  | 2018 | Live | Burna Boy played Brighton Music Hall, Boston | Life on the Outside Tour | `/records/tours` |
| **4 June** ★ | 2022 | Live | Burna Boy Live in Harare | Belgravia Sports Club, Zimbabwe | `/records/tours/festivals` |
| **5 June** ★ | 2018 | Live | Burna Boy played The Velvet Underground, Toronto | Life on the Outside Tour | `/records/tours` |
| **6 June** ★ | 2018 | Live | Burna Boy played Reggies, Chicago | Life on the Outside Tour | `/records/tours` |
| **8 June** (2) ★ | 2023 | Charts | “Sittin' on Top of the World” hit No. 8 in Nigeria | Burna Boy feat. 21 Savage · TurnTable Top 100 | `/records/charts#song=Sittin'%20on%20Top%20of%20the%20World` |
|  | 2018 | Live | Burna Boy played Complex, Oakland | Life on the Outside Tour | `/records/tours` |
| **9 June** ★ | 2026 | Streaming | “Dai Dai” went to No. 1 on YouTube's global music-video chart | Global Daily Top Music Videos | `/dai-dai` |
| **10 June** ★ | 2018 | Live | Burna Boy played The Roxy, Los Angeles | Life on the Outside Tour | `/records/tours` |
| **13 June** ★ | 2024 | Certification | “City Boys” was certified Gold in New Zealand | RMNZ | `/certifications#release=City%20Boys` |
| **14 June** ★ | 2018 | Live | Burna Boy played House of Blues (Bronze Peacock), Houston | Life on the Outside Tour | `/records/tours` |
| **17 June** ★ | 2018 | Live | Burna Boy played House of Blues (Cambridge Room), Dallas | Life on the Outside Tour | `/records/tours` |
| **18 June** ★ | 2026 | Charts | “Dai Dai” hit No. 7 in Nigeria | Shakira & Burna Boy · TurnTable Top 100 | `/records/charts#song=Dai%20Dai` |
| **28 June** ★ | 2023 | Live | Burna Boy headlined Afro Nation | Portimão, Portugal | `/records/tours/festivals` |
| **29 June** (2) ★ | 2024 | Live | Burna Boy played London Stadium, London | $6.15M from 58,973 tickets: the highest-grossing single concert by any African artist. | `/records/tours/revenue` |
|  | 2024 | Awards | BRIT Billion Award | For surpassing 1 billion UK streams — presented at his London Stadium show, 29 June 2024. | `/records/awards` |
| **30 June** ★ | 2026 | Streaming | “Dai Dai” went to No. 1 on Spotify's global chart | Daily Top Songs Global — the first of 37 days at No. 1 | `/dai-dai` |

### July — 21 dates, 37 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **3 July** (2) ★ | 2026 | Live | Burna Boy headlined Afro Nation | Portimão, Portugal | `/records/tours/festivals` |
|  | 2022 | Live | Burna Boy headlined Afro Nation | Portimão, Portugal | `/records/tours/festivals` |
| **5 July** ★ | 2025 | Live | Burna Boy played Waldbühne, Berlin | I Told Them… Tour | `/records/tours` |
| **6 July** ★ | 2025 | Live | Burna Boy played SparkassenPark, Mönchengladbach | I Told Them… Tour | `/records/tours` |
| **7 July** ★ | 2024 | Live | Burna Boy headlined SummerJam Festival | Fühlinger See, Cologne, Germany | `/records/tours/festivals` |
| **8 July** (2) | 2023 | Live | Burna Boy played Citi Field, New York | First African artist to headline and sell out a stadium in the United States. | `/records/tours` |
| ★ | 2022 | Release | Burna Boy released Love, Damini | His sixth studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/love-damini` |
| **9 July** (2) ★ | 2026 | Certification | “Dai Dai” was certified 2× Platino in the United States | Shakira & Burna Boy · RIAA Latin | `/certifications#release=Dai%20Dai` |
|  | 2026 | Certification | “Dai Dai” was certified Gold in France | Shakira & Burna Boy · SNEP | `/certifications#release=Dai%20Dai` |
| **11 July** (3) | 2026 | Live | Burna Boy headlined North Sea Jazz Festival | Rotterdam, Netherlands | `/records/tours/festivals` |
| ★ | 2025 | Release | Burna Boy released No Sign of Weakness | His eighth studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/no-sign-of-weakness` |
|  | 2024 | Charts | “Higher” hit No. 1 in Nigeria | TurnTable Top 100 | `/records/charts#song=Higher` |
| **14 July** (4) ★ | 2022 | Charts | “For My Hand” hit No. 1 in Nigeria | Burna Boy feat. Ed Sheeran · TurnTable Top 100 | `/records/charts#song=For%20My%20Hand` |
|  | 2022 | Certification | “On the Low” was certified Diamond in France | SNEP | `/certifications#release=On%20the%20Low` |
|  | 2022 | Charts | “Different Size” hit No. 8 in Nigeria | Burna Boy feat. Victony · TurnTable Top 100 | `/records/charts#song=Different%20Size` |
|  | 2022 | Charts | “Cloak & Dagger” hit No. 9 in Nigeria | Burna Boy feat. J Hus · TurnTable Top 100 | `/records/charts#song=Cloak%20%26%20Dagger` |
| **15 July** ★ | 2024 | Awards | BRIT Billion Award | A special award for over 2 billion UK streams, presented at KOKO Camden on 15 July 2024 — the first African artist to reach the milestone. | `/records/awards` |
| **17 July** (3) ★ | 2025 | Charts | No Sign of Weakness hit No. 1 in Nigeria | TurnTable Top 100 Albums | `/records/charts#song=No%20Sign%20of%20Weakness` |
|  | 2025 | Charts | “Dem Dey” hit No. 5 in Nigeria | TurnTable Top 100 | `/records/charts#song=Dem%20Dey` |
|  | 2022 | Live | Burna Boy played Tipsy All White Beach Party, Bridgetown | Love, Damini Tour | `/records/tours` |
| **18 July** ★ | 2024 | Live | Burna Boy headlined Gurtenfestival | Bern, Switzerland | `/records/tours/festivals` |
| **19 July** ★ | 2026 | Live | FIFA World Cup Final halftime show | Performed at the 2026 final's halftime show (19 July) — the first African artist to do so — on a bill with Madonna, Shakira, BTS, Justin Bieber and Coldplay. | `/records/tours` |
| **21 July** (2) ★ | 2022 | Charts | “It's Plenty” hit No. 3 in Nigeria | TurnTable Top 100 | `/records/charts#song=It's%20Plenty` |
|  | 2022 | Live | Burna Boy played Aretha Franklin Amphitheatre, Detroit | Love, Damini Tour | `/records/tours` |
| **22 July** (2) ★ | 2022 | Certification | African Giant was certified Gold in the United Kingdom | BPI | `/certifications#release=African%20Giant` |
|  | 2022 | Live | Burna Boy played The Armory, Minneapolis | Love, Damini Tour | `/records/tours` |
| **23 July** (2) ★ | 2024 | Live | Burna Boy headlined Paléo Festival | Nyon, Switzerland | `/records/tours/festivals` |
|  | 2022 | Live | Burna Boy played Huntington Bank Pavilion at Northerly Island, Chicago | Love, Damini Tour | `/records/tours` |
| **24 July** (2) ★ | 2025 | Charts | “Love” hit No. 1 in Nigeria | TurnTable Top 100 | `/records/charts#song=Love` |
|  | 2022 | Live | Burna Boy played Toyota Center, Houston | Love, Damini Tour | `/records/tours` |
| **26 July** (2) | 2024 | Live | Burna Boy headlined Sunny Hill Festival | Pristina, Kosovo | `/records/tours/festivals` |
| ★ | 2019 | Release | Burna Boy released African Giant | His fourth studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/african-giant` |
| **27 July** ★ | 2022 | Live | Burna Boy played The Pavilion at Toyota Music Factory, Irving | Love, Damini Tour | `/records/tours` |
| **29 July** ★ | 2022 | Live | Burna Boy played Leader Bank Pavilion, Boston | Love, Damini Tour | `/records/tours` |
| **30 July** ★ | 2022 | Live | Burna Boy played Osheaga Festival, Montreal | Love, Damini Tour | `/records/tours` |
| **31 July** (2) ★ | 2026 | Live | Burna Boy headlined Reggae Land | Milton Keynes, UK | `/records/tours/festivals` |
|  | 2022 | Live | Burna Boy played State Farm Arena, Atlanta | Love, Damini Tour · $905,024 from 12,753 tickets | `/records/tours/revenue` |

### August — 15 dates, 24 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **2 August** ★ | 2025 | Live | Burna Boy headlined Coca-Cola Food Fest | Tribeca Mall, Mauritius | `/records/tours/festivals` |
| **3 August** ★ | 2023 | Charts | “Big 7” hit No. 2 in Nigeria | TurnTable Top 100 | `/records/charts#song=Big%207` |
| **9 August** ★ | 2019 | Live | Burna Boy played Rebel, Toronto | African Giant Tour | `/records/tours` |
| **10 August** ★ | 2026 | Certification | “Dai Dai” was certified Gold in Belgium | Shakira & Burna Boy · Ultratop | `/certifications#release=Dai%20Dai` |
| **11 August** (2) ★ | 2022 | Charts | “Common Person” hit No. 4 in Nigeria | TurnTable Top 100 | `/records/charts#song=Common%20Person` |
|  | 2019 | Live | Burna Boy played L'Olympia, Montreal | African Giant Tour | `/records/tours` |
| **12 August** ★ | 2013 | Release | Burna Boy released L.I.F.E | His debut studio album · Aristokrat Records | `/music/albums/life` |
| **14 August** (2) | 2026 | Live | Burna Boy headlined Luna Loca launch | O Beach Ibiza, San Antonio, Spain | `/records/tours/festivals` |
| ★ | 2020 | Release | Burna Boy released Twice as Tall | His fifth studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/twice-as-tall` |
| **16 August** (5) ★ | 2023 | Certification | “On the Low” was certified Platinum in Sweden | IFPI Sverige | `/certifications#release=On%20the%20Low` |
|  | 2023 | Certification | “Ye” was certified Platinum in Sweden | IFPI Sverige | `/certifications#release=Ye` |
|  | 2023 | Certification | African Giant was certified Gold in Sweden | IFPI Sverige | `/certifications#release=African%20Giant` |
|  | 2023 | Certification | “Gbona” was certified Gold in Sweden | IFPI Sverige | `/certifications#release=Gbona` |
|  | 2019 | Live | Burna Boy played Union Hall, Edmonton | African Giant Tour | `/records/tours` |
| **17 August** ★ | 2019 | Live | Burna Boy played Vogue Theatre, Vancouver | African Giant Tour | `/records/tours` |
| **22 August** ★ | 2025 | Certification | “My Oasis” was certified Silver in the United Kingdom | Sam Smith ft. Burna Boy · BPI | `/certifications#release=My%20Oasis` |
| **25 August** ★ | 2023 | Release | Burna Boy released I Told Them… | His seventh studio album · Atlantic · Bad Habit · Spaceship | `/music/albums/i-told-them` |
| **27 August** (2) ★ | 2026 | Certification | “Dai Dai” was certified Diamond in France | Shakira & Burna Boy · SNEP | `/certifications#release=Dai%20Dai` |
|  | 2021 | Live | Burna Boy played The O2 Arena, London | Space Drift World Tour · $1,347,333 from 15,165 tickets | `/records/tours/revenue` |
| **28 August** ★ | 2019 | Live | Burna Boy played House of Blues, San Diego | African Giant Tour | `/records/tours` |
| **29 August** ★ | 2019 | Live | Burna Boy played The Wiltern, Los Angeles | African Giant Tour | `/records/tours` |
| **31 August** (3) ★ | 2023 | Charts | I Told Them… hit No. 1 in Nigeria | TurnTable Top 100 Albums | `/records/charts#song=I%20Told%20Them%E2%80%A6` |
|  | 2023 | Charts | “Giza” hit No. 2 in Nigeria | Burna Boy feat. Seyi Vibez · TurnTable Top 100 | `/records/charts#song=Giza` |
|  | 2023 | Charts | “Cheat on Me” hit No. 4 in Nigeria | Burna Boy feat. Dave · TurnTable Top 100 | `/records/charts#song=Cheat%20on%20Me` |

### September — 17 dates, 22 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **1 September** ★ | 2023 | Charts | I Told Them… hit No. 1 in the United Kingdom | Albums chart · Official Charts Company | `/records/charts#song=I%20Told%20Them%E2%80%A6` |
| **2 September** ★ | 2021 | Charts | “Question” hit No. 4 in Nigeria | Burna Boy feat. Don Jazzy · TurnTable Top 100 | `/records/charts#song=Question` |
| **3 September** ★ | 2026 | Certification | “Dai Dai” was certified Platinum in Austria | Shakira & Burna Boy · IFPI Austria | `/certifications#release=Dai%20Dai` |
| **4 September** ★ | 2019 | Live | Burna Boy played Summit, Denver | African Giant Tour | `/records/tours` |
| **6 September** ★ | 2025 | Live | Burna Boy played The Town | São Paulo, Brazil | `/records/tours/festivals` |
| **7 September** ★ | 2023 | Charts | “City Boys” hit No. 2 in Nigeria | TurnTable Top 100 | `/records/charts#song=City%20Boys` |
| **8 September** (3) | 2024 | Live | Burna Boy played Superbloom Festival | Munich, Germany | `/records/tours/festivals` |
| ★ | 2022 | Certification | “Last Last” was certified Gold in New Zealand | RMNZ | `/certifications#release=Last%20Last` |
|  | 2019 | Live | Burna Boy played House of Blues, Chicago | African Giant Tour | `/records/tours` |
| **10 September** ★ | 2019 | Live | Burna Boy played Buckhead Theatre, Atlanta | African Giant Tour | `/records/tours` |
| **13 September** ★ | 2019 | Live | Burna Boy played Theatre of Living Arts, Philadelphia | African Giant Tour | `/records/tours` |
| **15 September** ★ | 2019 | Live | Burna Boy played The Fillmore Silver Spring, Washington, D.C. | African Giant Tour | `/records/tours` |
| **18 September** (2) ★ | 2026 | Certification | “Dai Dai” was certified Platinum in Sweden | Shakira & Burna Boy · IFPI Sverige | `/certifications#release=Dai%20Dai` |
|  | 2020 | Certification | African Giant was certified Silver in the United Kingdom | BPI | `/certifications#release=African%20Giant` |
| **20 September** (2) ★ | 2019 | Live | Burna Boy played The Fillmore, San Francisco | African Giant Tour | `/records/tours` |
|  | 2018 | Live | Burna Boy played The Garage, Glasgow | Life on the Outside Tour | `/records/tours` |
| **21 September** ★ | 2026 | Certification | “Dai Dai” was certified 2× Platinum in Canada | Shakira & Burna Boy · Music Canada | `/certifications#release=Dai%20Dai` |
| **22 September** (2) ★ | 2026 | Awards | SESAC Awards: Top Songs honoree | Won · WGFT (with Gunna) | `/records/awards#body=SESAC%20Awards` |
|  | 2018 | Live | Burna Boy played O2 Academy, Newcastle | Life on the Outside Tour | `/records/tours` |
| **23 September** ★ | 2018 | Live | Burna Boy played O2 Academy, Leeds | Life on the Outside Tour | `/records/tours` |
| **24 September** ★ | 2018 | Live | Burna Boy played O2 Ritz, Manchester | Life on the Outside Tour | `/records/tours` |
| **25 September** ★ | 2021 | Live | Burna Boy played Global Citizen Live | New York, USA | `/records/tours/festivals` |

### October — 10 dates, 16 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **7 October** (2) ★ | 2021 | Charts | “Want It All” hit No. 8 in Nigeria | Burna Boy feat. Polo G · TurnTable Top 100 | `/records/charts#song=Want%20It%20All` |
|  | 2018 | Live | Burna Boy played O2 Academy Brixton, London | Life on the Outside Tour | `/records/tours` |
| **8 October** ★ | 2021 | Live | Burna Boy played Hollywood Bowl, Los Angeles | Space Drift World Tour | `/records/tours` |
| **11 October** ★ | 2025 | Live | Burna Boy headlined Afrosoul Festival | Go Media Stadium, Auckland | `/records/tours/festivals` |
| **16 October** (2) ★ | 2025 | Live | Burna Boy played Sidney Myer Music Bowl, Melbourne | No Sign of Weakness Tour · $805,250 from 8,237 tickets | `/records/tours/revenue` |
|  | 2020 | Certification | “On the Low” was certified Silver in the United Kingdom | BPI | `/certifications#release=On%20the%20Low` |
| **18 October** ★ | 2025 | Live | Burna Boy played Qudos Bank Arena, Sydney | No Sign of Weakness Tour · $1,116,628 from 10,401 tickets | `/records/tours/revenue` |
| **20 October** (2) ★ | 2025 | Live | Burna Boy played Brisbane Entertainment Centre, Brisbane | No Sign of Weakness Tour · $556,874 from 5,473 tickets | `/records/tours/revenue` |
|  | 2019 | Live | Burna Boy played Palais 12, Brussels | African Giant Tour | `/records/tours` |
| **24 October** (3) ★ | 2025 | Live | Burna Boy played RAC Arena, Perth | No Sign of Weakness Tour · $644,871 from 6,835 tickets | `/records/tours/revenue` |
|  | 2019 | Live | Burna Boy played AFAS Live, Amsterdam | African Giant Tour | `/records/tours` |
|  | 2018 | Live | Burna Boy played Thekla, Bristol | Life on the Outside Tour | `/records/tours` |
| **25 October** (2) ★ | 2019 | Live | Burna Boy played Columbiahalle, Berlin | African Giant Tour | `/records/tours` |
|  | 2018 | Live | Burna Boy played O2 Academy 2, Birmingham | Life on the Outside Tour | `/records/tours` |
| **26 October** ★ | 2023 | Certification | “Alone” was certified Gold in France | SNEP | `/certifications#release=Alone` |
| **28 October** ★ | 2022 | Live | Burna Boy Live in Curaçao | Festival Center Brievengat, Willemstad | `/records/tours/festivals` |

### November — 17 dates, 25 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **2 November** (2) ★ | 2023 | Certification | “Last Last” was certified Diamond in France | SNEP | `/certifications#release=Last%20Last` |
|  | 2022 | Charts | Love, Damini hit No. 3 in Nigeria | TurnTable Top 100 Albums | `/records/charts#song=Love%2C%20Damini` |
| **3 November** (3) ★ | 2023 | Live | Burna Boy played BMO Stadium, Los Angeles | I Told Them… Tour · $1,224,617 from 10,684 tickets | `/records/tours/revenue` |
|  | 2022 | Certification | Love, Damini was certified Gold in the Netherlands | NVPI | `/certifications#release=Love%2C%20Damini` |
|  | 2019 | Live | Burna Boy played The SSE Arena, Wembley, London | African Giant Tour | `/records/tours` |
| **5 November** (2) | 2023 | Live | Burna Boy played Climate Pledge Arena, Seattle | I Told Them… Tour | `/records/tours` |
| ★ | 2020 | Charts | “Ginger” hit No. 1 in Nigeria | Wizkid ft. Burna Boy · TurnTable Top 100 | `/records/charts#song=Ginger` |
| **6 November** ★ | 2019 | Live | Burna Boy played Albert Hall, Manchester | African Giant Tour | `/records/tours` |
| **7 November** ★ | 2023 | Live | Burna Boy played Rogers Arena, Vancouver | I Told Them… Tour | `/records/tours` |
| **9 November** (2) ★ | 2023 | Live | Burna Boy played Rogers Place, Edmonton | I Told Them… Tour | `/records/tours` |
|  | 2019 | Live | Burna Boy played O2 Academy, Leicester | African Giant Tour | `/records/tours` |
| **10 November** (2) | 2021 | Live | Burna Boy played Accor Arena, Paris | Space Drift World Tour | `/records/tours` |
| ★ | 2018 | Awards | Nigeria Entertainment Awards: Album of the Year | Won · Outside | `/records/awards#body=Nigeria%20Entertainment%20Awards` |
| **12 November** (2) ★ | 2025 | Live | Burna Boy played Red Rocks Amphitheatre, Morrison, CO | First Nigerian artist to headline the iconic Colorado venue, opening the North American leg of the No Sign of Weakness tour. | `/records/tours` |
|  | 2023 | Live | Burna Boy played Ball Arena, Denver | I Told Them… Tour | `/records/tours` |
| **15 November** ★ | 2019 | Live | Burna Boy played One Africa Music Fest | Dubai, UAE | `/records/tours/festivals` |
| **16 November** ★ | 2025 | Live | Burna Boy played Climate Pledge Arena, Seattle | No Sign of Weakness Tour | `/records/tours` |
| **17 November** ★ | 2023 | Live | Burna Boy played Toyota Center, Houston | I Told Them… Tour | `/records/tours` |
| **18 November** (2) ★ | 2025 | Live | Burna Boy played Oakland Arena, Oakland | No Sign of Weakness Tour | `/records/tours` |
|  | 2023 | Live | Burna Boy played Moody Center, Austin | I Told Them… Tour | `/records/tours` |
| **19 November** ★ | 2025 | Live | Burna Boy played Intuit Dome, Inglewood | No Sign of Weakness Tour | `/records/tours` |
| **22 November** ★ | 2025 | Live | Burna Boy played Toyota Center, Houston | No Sign of Weakness Tour | `/records/tours` |
| **24 November** ★ | 2025 | Live | Burna Boy played American Airlines Center, Dallas | No Sign of Weakness Tour | `/records/tours` |
| **25 November** ★ | 2015 | Release | Burna Boy released On a Spaceship | His second studio album · Spaceship | `/music/albums/on-a-spaceship` |
| **30 November** ★ | 2022 | Live | Burna Boy played Hallenstadion, Zurich | Love, Damini Tour · $822,939 from 8,827 tickets | `/records/tours/revenue` |

### December — 18 dates, 23 events

| Day | Year | Pill | Headline | Detail line | Links to |
|---|---|---|---|---|---|
| **1 December** ★ | 2023 | Certification | Love, Damini was certified Gold in the United Kingdom | BPI | `/certifications#release=Love%2C%20Damini` |
| **3 December** ★ | 2025 | Live | Burna Boy played TD Garden, Boston | No Sign of Weakness Tour | `/records/tours` |
| **5 December** ★ | 2025 | Live | Burna Boy played Capital One Arena, Washington, D.C. | No Sign of Weakness Tour | `/records/tours` |
| **6 December** ★ | 2025 | Live | Burna Boy played UBS Arena, Elmont, NY | No Sign of Weakness Tour | `/records/tours` |
| **8 December** (3) | 2025 | Live | Burna Boy played State Farm Arena, Atlanta | No Sign of Weakness Tour | `/records/tours` |
| ★ | 2022 | Certification | “Last Last” was certified Platinum in New Zealand | RMNZ | `/certifications#release=Last%20Last` |
|  | 2022 | Live | Burna Boy played Capital One Arena, Washington, D.C. | Love, Damini Tour · $1,434,525 from 14,688 tickets | `/records/tours/revenue` |
| **9 December** (2) ★ | 2023 | Live | Burna Boy played Mercedes-Benz Arena, Berlin | I Told Them… Tour · $1,089,184 from 11,839 tickets | `/records/tours/revenue` |
|  | 2022 | Live | Burna Boy played Addition Financial Arena, Orlando | Love, Damini Tour · $636,923 from 7,137 tickets | `/records/tours/revenue` |
| **10 December** ★ | 2023 | Live | Burna Boy played Lanxess Arena, Cologne | I Told Them… Tour · $1,386,581 from 14,260 tickets | `/records/tours/revenue` |
| **12 December** (2) | 2025 | Live | Burna Boy played Prudential Center, Newark | No Sign of Weakness Tour | `/records/tours` |
| ★ | 2023 | Live | Burna Boy played Sportpaleis, Antwerp | I Told Them… Tour · $781,236 from 8,266 tickets | `/records/tours/revenue` |
| **15 December** ★ | 2025 | Live | Burna Boy played Bell Centre, Montreal | No Sign of Weakness Tour | `/records/tours` |
| **17 December** ★ | 2025 | Live | Burna Boy played Scotiabank Arena, Toronto | No Sign of Weakness Tour | `/records/tours` |
| **18 December** ★ | 2025 | Live | Burna Boy played Scotiabank Arena, Toronto | No Sign of Weakness Tour | `/records/tours` |
| **19 December** ★ | 2025 | Live | Burna Boy headlined GTCO Music Concert | Accra, Ghana | `/records/tours/festivals` |
| **21 December** ★ | 2023 | Certification | “Last Last” was certified 2× Platinum in New Zealand | RMNZ | `/certifications#release=Last%20Last` |
| **22 December** (2) | 2023 | Certification | I Told Them… was certified Silver in the United Kingdom | BPI | `/certifications#release=I%20Told%20Them%E2%80%A6` |
| ★ | 2016 | Live | Burna Boy headlined NATIVELAND Festival | Muri Okunola Park, Lagos | `/records/tours/festivals` |
| **23 December** ★ | 2021 | Charts | “B. D'OR” hit No. 2 in Nigeria | Burna Boy feat. Wizkid · TurnTable Top 100 | `/records/charts#song=B.%20D'OR` |
| **26 December** ★ | 2024 | Charts | “Bundle by Bundle” hit No. 2 in Nigeria | TurnTable Top 100 | `/records/charts#song=Bundle%20by%20Bundle` |
| **27 December** ★ | 2021 | Live | Burna Boy played Eko Convention Centre (The Live Experience), Lagos | Space Drift World Tour | `/records/tours` |
| **31 December** ★ | 2017 | Live | Burna Boy Live in Addis Ababa | Addis Ababa, Ethiopia | `/records/tours/festivals` |
