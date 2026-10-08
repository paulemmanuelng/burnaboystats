# Shell + home: independent design review, 8 Oct 2026

Group: `shell-home`. Scope: the home page `/`; the desktop masthead and nav at 1440 and 1024 (where the hamburger takes over); the phone menu sheet (opened); the ⌘K search palette (opened, empty and typed); the footer (the home sitemap and the compact one); the phone five-tab bar; `/updates`; `/on-this-day`; `/on-this-day/6-october`; `/search?q=dai`; and a 404 (`/nope`). Everything was read on the live site https://burnaboystats.com, deployed 8 Oct 2026 (origin/main e4b0afc8).

I reviewed it as an outside product designer. The standard was editorial data products like FT, The Pudding and Bloomberg, judged from the seat of three readers: a fan on a phone, a journalist checking a figure, and a search visitor arriving cold. Owner rulings are respected throughout. Where I think one costs the product something, it goes in a separate "ask the owner" item (SH-09).

## Method

- **Captures.** Headless Chrome over CDP, run only through the local `heavy` lock wrapper (on the owner's machine, not in this repo) in one session that took about 3.5 min. Harness: `scratchpad/dr1008-shell/cap.mjs` and `measure.js`.
  - Phone: 390x844 with mobile emulation (touch and an iPhone user agent).
  - Desktop: 1440x900. Tablet band: 1024x768.
  - Theme set by the site's stored choice (`localStorage.theme`).
  - Full pages: JPEG q60, capped at 6000px. Long feeds were cropped further to stay inside the 4 MB budget (see the shot list).
  - Every Chrome I started was closed, and its profile directory removed.
- **Measurements, taken in the page.**
  - Contrast: composited from the real text and background colours; text over photos skipped.
  - Type census, line length (characters per line, from canvas measureText), headings.
  - Size of every interactive target.
  - Fixed and sticky chrome.
  - Accent census in the first screen.
  - Layout shift (CLS), LCP, transfer sizes.
  - Focus ring on 16 Tab stops.
  - Animations with and without reduced motion.
- **Code.** Read from `origin/main` for causes.
- **Data.** Rulings and earlier audits read first: `debug-1005/rulings.md`, the memory rulings files, `design-audit-0929/items.json` (P001–P123), and `debug-1005/all-fixes.json` (V-global-*, core-*, otd-*). Anything that was already fixed is not raised again. Items from the 29 Sep audit that are still live are marked "carried", with fresh numbers.

### Shots (39 files, 3.97 MB): `../shots/shell-home/`

| File | What it shows |
|---|---|
| `home-390-light.jpg`, `home-390-dark.jpg` | Phone home, full page (3,090px) |
| `home-390-light-fold.jpg`, `home-390-dark-fold.jpg` | Phone home, first screen with the tab bar |
| `home-390-light-mid.jpg` | Phone home at scrollY 1600 (sticky header + tab bar) |
| `home-1440-light.jpg` (6000 of 6,200px), `home-1440-light-fold.jpg` | Desktop home |
| `home-1440-dark.jpg` | Desktop home dark, first 3000px |
| `home-1024-light.jpg` | Tablet band, first 3000 of 9,159px |
| `menu-sheet-390-light.jpg` | Phone sheet opened on `/` |
| `menu-sheet-390-dark.jpg` | Phone sheet opened on `/updates`, list scrolled to its end |
| `menu-sheet-1024-light.jpg` | Sheet in the 901–1239 band |
| `search-palette-1440-light.jpg`, `search-palette-1440-light-typed.jpg` | ⌘K palette, empty and with "dai" |
| `search-palette-390-light.jpg`, `search-palette-390-light-typed.jpg` | Phone palette |
| `footer-1440-light.jpg` | Home sitemap footer |
| `footer-compact-1440-light.jpg` | Compact footer (on `/on-this-day/6-october`) |
| `footer-390-light.jpg` | Phone home's last screen: there is no footer |
| `focus-1440-light-tab1/4/16.jpg` | Masthead strip with the focus ring on the skip link, MUSIC, and the live band headline |
| `updates-1440-light.jpg` (first 2400px), `updates-1440-dark.jpg` (first 1800px), `updates-1440-light-mid.jpg` (scrollY 5000, top 600px) | Desktop `/updates` |
| `updates-390-light.jpg` (first 3000px), `updates-390-dark.jpg` (first 2000px), `updates-390-light-fold.jpg`, `updates-390-light-mid.jpg` | Phone `/updates` |
| `updates-1024-light.jpg` | `/updates` first screen at 1024 |
| `on-this-day-1440-light.jpg`, `on-this-day-390-light.jpg` (first 3300px) | OTD calendar |
| `on-this-day-1024-light.jpg` | OTD at 1024, first 1800px |
| `on-this-day-6-october-1440-light.jpg`, `on-this-day-6-october-390-light.jpg` | OTD day page |
| `search-dai-1440-light.jpg`, `search-dai-390-light.jpg` | `/search?q=dai` |
| `404-1440-light.jpg`, `404-390-light.jpg` | 404 page |

Raw measurement JSON (one file per capture) is in `scratchpad/dr1008-shell/json/`. The uncropped originals are in `scratchpad/dr1008-shell/orig/`.

### Headline numbers

| Measure | Result |
|---|---|
| Page length | Desktop home 6,200px at 1440 and 9,159px at 1024; phone home 3,090px. `/updates`: 30,438px at 1440 and 53,901px on a phone, for 337 entries. OTD calendar: 3,444px at 1440 and 6,316px on a phone. |
| Layout shift | CLS **0.000** on all 19 page loads. |
| LCP (warm, unthrottled) | 92–488 ms. Desktop LCP is the h1; phone LCP is the live figure row. |
| Text contrast | 0 real AA failures on any page, either theme. The flags were all false positives of the method: background-clip gradient numerals ("15", "UPDATES", "DAY") and the closer's `aria-hidden` glyphs. That covers 469 text nodes on the desktop home, 1,434 on `/updates` and 1,127 on the OTD calendar. |
| Focus | 2px solid `#945e00` ring with a 2px offset on all 16 Tab stops measured. The skip link comes first. Order: wordmark, 10 sections, theme, search, Box office, live band. |
| Phone targets | Home: 2 of 36 controls under 44px tall (the 34px theme flip, inside a 44px hit area; the OTD card title link, 19px). OTD calendar: 0 of 208. `/search` chips: 38px. |
| Accents in the desktop first screen | Two hues only: gold `#945e00` on 7 elements, green `#146b3c` on 4. The "gold = live or action" rule holds. |
| Reduced motion | Desktop home animations go from 1 to 0. |

---

## Strengths: keep these

1. **Provenance is part of the interface, not a footnote.** This is the site's moat, and the desktop shows it well.
   - The hero caption row: "Sources RIAA · BPI · SNEP · IFPI | Verified 7 Oct 2026 | Open data API ↗".
   - A source line under every scoreboard figure.
   - "Updated 7 Oct 2026" on the live panel.
   - "Last entry 7 October 2026 · 337 entries" on `/updates`, plus the "How dates are filed" note on OTD.
   - Shots: `home-1440-light-fold.jpg`, `updates-1440-light.jpg`, `on-this-day-1440-light.jpg`.
2. **The desktop home passes the 3-second test.** "BURNA BOY", one sentence saying what the dataset is, two buttons, and a live figure with its date, all inside 900px. The upper page uses only two accent hues, and gold means live or action (measured: 7 gold elements, all of them the wordmark, the h1 split word, links, the primary button or the live figure).
3. **A type system with a clear job for each face.**
   - Anton for display, Space Mono for labels, Geist for reading.
   - Body measure on the home holds near 62ch: the hero lede is 65 characters per line, ledes 57–61.
   - Contrast is AA in both themes everywhere in this group.
   - The light theme reads as native rather than inverted: one gold, a themed masthead, a deep-gold closer with white ink.
4. **The keyboard and overlay layer is careful.**
   - A visible focus ring everywhere.
   - The palette traps focus, scrolls the highlighted row into view, and closes on Back.
   - The sheet traps focus, returns focus to its opener, and closes on Back.
   - Tab order follows the visual order.
   - Zero layout shift.
   - This is better than most editorial sites.
5. **Phone thumb ergonomics.**
   - The five-tab bar has 48px+ tabs.
   - Sheet rows are 52px and each carries a live count ("Certifications 251", "Updates 337", "On this day 162 dates"), so the menu doubles as a table of contents.
   - The OTD phone calendar has zero targets under 44px across 208 controls.
6. **On This Day is a genuinely original, shareable feature.**
   - The calendar honestly has no weekdays.
   - Kind marks are shape plus word, so colour is not needed.
   - There is a today ring, prev/next on each day page, and a ready-to-post card on every day.
   - The phone month shortcut grid (JAN 9 … DEC 18) and the "Months ↑" back-links solve a long page without folding anything.
   - Shots: `on-this-day-1440-light.jpg`, `on-this-day-390-light.jpg`, `on-this-day-6-october-*.jpg`.
7. **The 404 stays on-brand and useful on desktop.** "No record of that page", a sentence that matches the site's verification voice, two actions, and five suggestions (`404-1440-light.jpg`).

---

## Findings

IDs are SH-NN. Each finding gives the kind, the layout, impact and effort, then the evidence and the suggestion.

### SH-01. Desktop live band: "career streams11.15B" has no space

Build-fix · desktop and 1024 · impact medium · effort small

- **Evidence.**
  - The live band at the top of every desktop home view prints `career streams11.15B`: `home-1440-light-fold.jpg` (top right, y≈89) and the top of `home-1024-light.jpg`.
  - Cause: `LiveBand.tsx:47-49` renders `career streams <span>{figure}</span>` inside `.streams { display: inline-flex }` (`liveBand.module.css:92`). The text node becomes an anonymous flex item, and its trailing space collapses. This is the same class of bug as commit 6f64708c ("a real space before it, not only a CSS margin").
- **Suggestion.**
  - Add `gap: .35em` to `.streams`, or wrap the label in its own span with a margin.
  - Consider naming the platform as well ("Spotify streams 11.15B"). "Career streams" alone does not say whose count it is, and the site's value is saying where a number comes from.

### SH-02. Home album cards all link to /music, not to the album pages

Build-fix · both layouts · impact medium-high · effort small

- **Evidence.**
  - The desktop grid's 8 `albumCard`s (`page.tsx:330`, `href="/music"`) and the phone rail's 8 `railItem`s (`MobileHome.tsx:308`, `href="/music"`) all point to `/music`.
  - Each album has its own page at `/music/albums/<slug>` (`/music/albums/love-damini` returns 200).
  - The home HTML contains **0** links to `/music/albums/` and **28** to `/music`.
  - Memory (7 Oct GSC read): 5 album pages sit in "Discovered, not indexed". A home link is the strongest internal link the site can give them.
  - A reader who taps "Love, Damini" lands on the discography and has to find it again.
  - The desktop lede says "Hover an album for its peak and certifications", yet the peak and cert chips already show without hover.
- **Suggestion.**
  - Link each card to its album page. Keep "Full discography ↗" / "All ↗" for `/music`.
  - Drop "Hover an album…" from the lede, since the chips are always visible.
  - Shots: `home-1440-light.jpg` (catalogue at about y 3400–4300), `home-390-light.jpg` (rail).

### SH-03. Menu sheet in the 901–1239 band stops 76px short of the floor and slices its last row

Build-fix · 1024 · impact medium · effort small

- **Evidence.**
  - `menu-sheet-1024-light.jpg`: the right-hand panel (V-global-17) measures content y 111–692 in a 768px viewport.
  - The bottom 76px is the phone's "tap to dismiss" strip. The band hides that hint (V-global-17), but the gap stays.
  - So the panel ends mid-row: "OFFICIAL CHARTS" is cut through its cap height at y≈692, and it reads as a clipped drawer rather than a sheet.
- **Suggestion.**
  - In the band only, give the panel `bottom: 0` (full height). The dimmed page beside it is already the dismiss target.
  - The phone keeps its strip.
  - Re-check at 1024x600 and 1239x824.

### SH-04. Phone hero: a lone green status dot when no chart changed

Build-fix · phone; the desktop has an empty-row variant · impact low-medium · effort small

- **Evidence.**
  - `home-390-light-fold.jpg` at y≈363: a 6px green dot sits alone at the left of the status row, with "LIVE BOARD ↗" at the far right.
  - Cause: `MobileHome.tsx:190-196` always renders `.statusDot`, but `changedSentence` has been `""` whenever no chart arrived (core-18 fix, 5 Oct). The dot now labels nothing.
  - On the desktop the same row (`TodaysNumber.tsx:116`) shows the link alone with a blank left half.
  - The design (Burna Boy Stats.dc.html) always has a muted sentence there ("3 charts changed in the last 24h").
- **Suggestion.**
  - Render the dot only together with the sentence.
  - Better: give the empty state a true sentence, such as "No chart changed in the last 24 h". It is still provenance, and it keeps the row's two halves.

### SH-05. Phone menu sheet: 7 of 30 rows visible, nothing says the list continues

Design · phone · impact high · effort medium · carried from P011 with new measurements

- **Evidence.** `menu-sheet-390-light.jpg`, measured at 390x844:

  | Part of the sheet | Height |
  |---|---|
  | Head | 111px |
  | Search pill | 62px |
  | List window | **419px** (y 173–592) |
  | Appearance (pinned) | 101px |
  | Foot (pinned) | 75px |
  | Dismiss strip | 76px |

  - The list scrolls to 1,699px, so 7 of 30 rows show on opening: Home → Compare.
  - The window ends exactly on a row boundary, under a full-width hairline, with no fade or shadow. "BROWSE" therefore reads as the complete menu, and the "Deep data" and "The site" groups (23 rows) are invisible.
  - The sheet's own comment calls it "the ONLY way into 17 pages".
  - The theme control, used rarely, holds 101px of the best thumb zone.
  - V-global-04 fixed only screens under 780px tall.
- **Suggestion. Phone artboard only.**
  - Let everything under the head scroll as one column at every height, as the short-screen rule already does: search, list, then Appearance and foot at the end.
  - Or keep the pin and add a 24px bottom fade on the list plus a "23 more ↓" cue on the last visible row.
  - Box office can stay pinned in the foot. Nothing collapses, so this does not touch the no-accordion ruling.

### SH-06. Desktop masthead: 10 links at 9–11px apart, Home duplicated, low-traffic pages in prime slots

Design · desktop 1240–1500 · impact medium-high · effort medium · carried from P009, now with an IA cause

- **Evidence.**
  - Focus rects on the 16 Tab stops: the gaps between nav items are 9–11px at 1440 (HOME→MUSIC 11, MUSIC→CERTIFICATIONS 9, the rest 10).
  - The word space inside "LIVE CHARTS" is about 8.4px (Space Mono 12px advance 7.2 plus 0.1em tracking).
  - So the bar reads as roughly 12 equal-weight words: `HOME MUSIC CERTIFICATIONS RECORDS LIVE CHARTS AFROBEATS UPDATES ABOUT FAQ CONTACT` (`home-1440-light-fold.jpg`, `focus-1440-light-tab4.jpg`).
  - The bar carries 13 controls. "Home" repeats the wordmark. About, FAQ and Contact take 3 of the 10 slots.
  - Meanwhile Compare (120 pair pages, SHIPPED #243) and On This Day have no desktop route at all (see SH-07).
- **Suggestion. Desktop artboard, an IA pass.**
  - Drop "Home", because the wordmark is home.
  - Group About, FAQ and Contact under one "About" item, or move them to the footer and the sheet only.
  - That leaves 6–7 section links with at least 20px gaps and no tracking squeeze at 1240.
  - Decide with the owner whether Compare earns a slot.
  - Keep the Box office pill (owner, 7 Oct) and the theme flip.

### SH-07. Compare has no route from the desktop chrome; the footer sitemap omits it and Press

Build-fix · desktop · impact medium · effort small

- **Evidence.**
  - The home HTML's only `/compare` link is a row inside the phone menu sheet, which is `display:none` at 1240+ (class `mobileNavSheet…row`).
  - `footerColumns` in `lib/links.ts` contains **0** `/compare` hrefs and no `/press`.
  - The sheet lists both ("Compare 20 artists", "Press & data kit").
  - So a desktop reader on the home can reach neither, except through the body of `/certifications` or the artist pages.
- **Suggestion.**
  - Add "Compare" to the footer's "The data" column and "Press & data kit" to "The site" (data change only).
  - The masthead decision belongs to SH-06.

### SH-08. Phone home: no date, no sources and no way to the change log

Design · phone · impact high · effort medium

- **Evidence.**
  - Desktop above the fold has the provenance row (sources, "Verified 7 Oct 2026", Open data API), "UPDATED 7 OCT 2026" on the live panel, and the live band with the newest verified change ("“Dai Dai” is 19× Platino in the US · Certifications · 7 October 2026").
  - The phone home has none of these.
  - Its hero says "LIVE · Today's streaming charts — 15 countries at No. 1… right now" with **no date at all** (`home-390-light-fold.jpg`; HTML text of the phone layout checked).
  - The only date reachable on a phone is "Updated 7 Oct 2026" in the menu sheet's foot.
  - `/updates` has no tab and no link on the phone home. The phone reaches it only through sheet row 8 (`home-390-light.jpg`, `footer-390-light.jpg`).
  - For a verification-first site whose fans are mostly on phones, the phone home makes the claim ("sourced line by line, updated the day it changes") without showing its evidence.
- **Suggestion. Phone artboard.**
  - A one-line provenance row under the hero buttons, for example "Verified 7 Oct 2026 · RIAA · BPI · SNEP · IFPI".
  - A one-row "Latest" strip linking to `/updates` ("Latest · “Dai Dai” 19× Platino (US) · 7 Oct →"), derived from `updates[0]`.
  - Date-stamp the live figure the way the desktop panel does.
  - Keep the hero order the design response set (figure first).

### SH-09. Ask the owner to reconsider: phones never show the disclaimer or the Spotify artwork credit

Reconsider-ruling · phone, every page · impact medium-high · effort small

- **Evidence.**
  - `globals.css:1219-1224`: `.footer { display: none; }` at 900px and below ("Every mobile screen in the design ends at the fixed tab bar").
  - The footer is the only place the shell says "An unofficial fan site — not affiliated with or endorsed by Burna Boy" and, on the home, "Artwork provided by Spotify and remains the property of its owners".
  - On a phone the home ends at "THE CALENDAR ↗" and the tab bar (`footer-390-light.jpg`). Neither line is ever rendered on a phone.
  - The page is full of Spotify cover art and Burna's name and likeness. The phone is where fans and screenshots live, and the site's goal is to be noticed by the artist's team (project-stay-burnaboystats). The fan-site disclaimer is the trust line that matters most there.
- **Why this is filed as an ask.** It touches the closed redesign's rule that "screens end at the tab bar", which the live implementation keeps.
- **The ask.** One muted 12px disclaimer line, not the sitemap, after the last section of the phone home (and on `/about`), above the tab bar's 87px. No new chrome.

### SH-10. Desktop /updates: about 118 characters a line, no scannable lead, and the context scrolls away

Design · desktop · impact medium · effort medium · partly carried from P016

- **Evidence.**
  - `updates-1440-light.jpg`: feed entries run in an approx 840px column at 15.5px Geist.
  - The first entry's first line is about 118 characters, roughly double the site's own `--measure` of 62ch. The reading-scale memory names `/updates` as an outstanding surface.
  - Each row is a 2–3-line paragraph with no lead. The fact ("19× Platino in the US") sits in mid-sentence, so a journalist scanning 337 rows has to read every one.
  - At 30,438px tall, the filter bar and the month heading scroll away. `updates-1440-light-mid.jpg` (scrollY 5000) shows rows dated 17 Sep with no month and no active filter on screen.
  - Each row also repeats "17 September 2026" under a "SEPTEMBER 2026" heading.
- **Suggestion. Desktop artboard.**
  - Cap entry text near 68ch and move the category tag under the date, so the date column carries both.
  - Set the clause before the first colon in 500 weight. Most entries already read "X: detail".
  - Make the month heading and the filter row sticky as one 48px strip under the masthead, with no collapse.
  - Shorten in-row dates to "17 Sep".

### SH-11. Phone /updates: 337 entries in one 53,901px list with no position markers

Design · phone · impact medium · effort small-medium · carried from P015

- **Evidence.**
  - `updates-390-light.jpg` and `updates-390-light-mid.jpg`: one block per entry, dated "7 Oct" with no month dividers or year.
  - The list is about 64 screens long (53,901px). Only the 69px back bar is sticky.
  - Screen 06 deliberately has "no month headings", so this needs the owner's yes.
- **Suggestion.**
  - A 28px sticky month label ("SEPTEMBER 2026 · 89") that hands over as you scroll.
  - It collapses nothing, so it stays inside the density ruling.
  - Optionally "Back to top" above the tab bar after the first 20 entries.

### SH-12. /updates at 1024: no entry above the fold

Design · 1024 · impact low-medium · effort small

- **Evidence.**
  - `updates-1024-light.jpg`: the hero is followed by the digest card, which stacks under the lede at 480px wide with about 500px empty beside it.
  - The filter row starts at y≈745 of 768, so the first screen of a news feed shows no news.
- **Suggestion.**
  - Band artboard: keep the digest card beside the lede at about 380px, or compress it into one inline row (email field plus Subscribe) under "Last entry".

### SH-13. Home ledger: the Countries and Certs columns print the same number on every row

Design · desktop · impact medium · effort small

- **Evidence.**
  - `home-1440-light.jpg`, ledger at y≈1390–2390: all 15 rows read N countries | N. Examples: 19 countries | 19, 14 | 14, 12 | 12, … 6 | 6.
  - The site keeps one record per country, so in practice the two columns are the same figure. If any release ever differs, a single "19 certs · 19 countries" line would still say it.
  - The gold numeral is the louder of the pair.
- **Suggestion.**
  - Drop one, or replace "Countries" with something the row does not already say: the top country's flag and tier, the year of the first cert, or a 15-step bar.
  - The cert count in gold breaks "gold = live or action" below the fold; ink would do.

### SH-14. Home No. 1 board: 19 of 24 covers are the same Dai Dai thumbnail, and the song is only in alt text

Design · both layouts · impact medium · effort small · carried from P001/P002, new count

- **Evidence.**
  - The board's lede promises "with the song that did it". 19 of the 24 `boardCover` images are one Spotify art URL (Dai Dai), at 26px.
  - The song name appears only in `alt`.
  - The desktop columns are still unequal: Estonia and South Africa are wider (P001).
  - Shots: `home-1440-light.jpg` y≈2700–3200, `home-390-light.jpg`.
- **Suggestion.**
  - One mono line per cell with the song title. When the whole board is one song, say so once in the header ("19 of 23 with “Dai Dai”") and show the exceptions.
  - Make the columns `repeat(8, minmax(0,1fr))`.

### SH-15. Light theme: the home globe is still a black sphere in dark-theme yellow

Design · both layouts, light · impact low-medium · effort small · carried from P008

- **Evidence.**
  - `home-1440-light.jpg` (globe at y≈2060–2330) and `home-390-light-mid.jpg`.
  - It is the only `#ffb627`-bright yellow on the paper page, while the owner's rule is one gold on paper, `#945e00`.
- **Suggestion.** The designer decides one of two things:
  - (a) The globe is a "photo-like island" (`photoTile` precedent), so it keeps dark and gets a 1px edge.
  - (b) It themes: paper ocean, `#945e00` land, ink borders.
  - Either way, write it down so it stops being re-flagged.

### SH-16. Desktop home OTD band: the middle column has one row and about 210px of empty space

Design · desktop · impact low-medium · effort small

- **Evidence.**
  - `home-1440-light-fold.jpg` / `home-1440-light.jpg` y 878–1228: "NEXT ON THE CALENDAR" lists a single row ("Burna Boy headlined Afrosoul Festival · 11 October").
  - The 350px band leaves y≈1018–1228 empty in that column, between a 3-line Anton headline and the card preview.
- **Suggestion.**
  - List the next 3 dated days (the data exists, `onThisDayDays`). Or give the column the week strip (7 days with marks), so the band reads as a calendar teaser rather than an unfinished list.

### SH-17. Desktop history band: the title breaks with a dangling em dash

Content · desktop · impact low · effort small

- **Evidence.**
  - `home-1440-light-fold.jpg` y≈790–840: the h2 sets "SHAKIRA × BURNA BOY —" on line 1 and "“DAI DAI”" alone on line 2, in a column about 300px wide at 32px.
  - The phone version drops the song and has no dash.
- **Suggestion.** `text-wrap: balance`, and set it as two lines without the dash ("Shakira × Burna Boy" / "“Dai Dai”"), or widen the title column.

### SH-18. OTD calendar on desktop: each month shades its busiest day with no key

Design · desktop · impact low-medium · effort small

- **Evidence.**
  - `on-this-day-1440-light.jpg`: these days carry a grey fill, with the matching list row highlighted:

    | Month | Shaded day |
    |---|---|
    | Jan | 23 |
    | Feb | 7 |
    | Mar | 2 |
    | Apr | 14 |
    | Sep | 8 |
    | Nov | 3 |
    | Dec | 8 |

  - This is `monthDefault()`: the month's busiest day, which mirrors the phone's selected-day panel.
  - The legend explains marks and numbers ("Mark = the day's lead milestone · number = milestones that day") but not the fill.
  - With Sep 8 and Dec 8 shaded and the gold today ring on Oct 8, "8" is lit in three neighbouring months, and the shading reads as "selected" on a page where nothing is selectable.
- **Suggestion.** Add "shaded = the month's busiest day" to the legend line, or drop the fill on desktop.

### SH-19. OTD desktop list: headlines are cut where they differ; the repeated subject is the cause

Content · desktop · impact medium · effort small · new angle on P085

- **Evidence.**
  - `on-this-day-1440-light.jpg`: most month-list headlines end in an ellipsis at about 31 characters ("Burna Boy played Avicii Arena, S…", "Burna Boy played Scotiabank Ar…").
  - 132 of the 222 milestones are shows (legend tally), and almost all begin "Burna Boy played / headlined…". On his own calendar, 17 of those characters say nothing new.
- **Suggestion.**
  - A list-context formatter: "Played Avicii Arena, Stockholm", "Headlined Afrosoul Festival".
  - Keep the full sentence on day pages and cards.
  - Most then fit in one line. Allowing two lines (P085) remains the fallback.

### SH-20. Search: three placeholders, a section taxonomy that disagrees with the nav, and the Spanish edition ranked above the release

Content · both layouts · impact medium · effort small

- **Evidence.**
  - Placeholders:
    - Palette: "Search charts, awards, cars, FAQ…" (`search-palette-1440-light.jpg`)
    - Sheet: "Search 251 certs, 384 entries…" (`menu-sheet-390-light.jpg`)
    - `/search`: "Songs, records, countries, awards, pages…" (`search-dai-1440-light.jpg`)
  - Section tags:
    - Certifications is tagged **MUSIC**, although it is its own top-level nav item.
    - The Dai Dai story is **RECORDS**, while the sheet files it under "The site".
    - "Dai Dai en español" is **SITE**.
  - For "dai", the Spanish edition ranks 2nd, above the English "Dai Dai" release record (3rd).
  - "Popular pages" opens with "Car Collection". That matches traffic, but it is not the site's flagship.
- **Suggestion.**
  - One placeholder everywhere, with live counts: "Search 251 certs, 384 chart entries, songs…".
  - One taxonomy, identical to the sheet's groups.
  - Rank language editions below their canonical page.

### SH-21. Link previews for / and /updates carry no figures or news

Design · share · impact medium · effort medium

- **Evidence.** Fetched from the live meta tags:
  - **Home** (`/opengraph-image?2f78…`): "BURNA BOY STATS — The African Giant — by the numbers", with no number on it.
  - **`/updates`**: "TRACKED AS IT HAPPENS / Latest Updates / New chart peaks, certifications  & records". It names no update, and Satori renders a **double space before "&"**, the same class as V-core-07. The source string `app/updates/opengraph-image.tsx:9` has a single space.
  - **404 and `/search`**: use `/opengraph-image?stat-cards-asof-1`, a stale version key for the same image (minor; both are noindex).
  - The OTD previews, by contrast, are excellent: the milestone on the card plus the faded portrait.
- **Suggestion.** Cards stay gold (ruling).
  - Home card: 3 derived figures ("251 certifications · 44 No. 1s · 11.15B streams"), drawn from data at build time.
  - `/updates` card: the newest entry's headline and date, like the OTD day cards.
  - Fix the double space with a non-breaking space or by splitting the text node.

### SH-22. The Appearance control's selected state is a solid gold fill

Design · phone sheet and desktop footer · impact low · effort small

- **Evidence.**
  - `menu-sheet-390-light.jpg`: LIGHT is selected as a full `#945e00` fill, and in dark (`menu-sheet-390-dark.jpg`) DARK is a full `#ffb627` fill.
  - That makes two gold fills in the sheet's last 180px (the segment plus "BOX OFFICE ↗").
  - The owner's N2 rule (5 Oct) makes every selected chip an ember edge plus wash with an ink label, precisely so that one action stays the screen's only gold fill.
  - The desktop footer's segmented control does the same (`footer-1440-light.jpg`).
- **Suggestion.** Apply the N2 selected state to the segmented control in both places.

### SH-23. Phone hero and desktop panel say "right now" twice in two lines

Content · both layouts · impact low · effort small

- **Evidence.**
  - "Countries at No. 1 with “Dai Dai” right now", then "On streaming charts right now, refreshed several times a day."
  - On the phone the second line widows "day." (`home-390-light-fold.jpg`, `home-1440-light-fold.jpg`).
- **Suggestion.** "Read from Spotify's daily charts several times a day." That also names the source, which the "Live" label lacks.

### SH-24. 404: the phone drops the suggestions, and neither layout offers the missed words as a search

Design · both layouts · impact low · effort small

- **Evidence.**
  - `404-1440-light.jpg` shows five "Popular instead" links. `404-390-light.jpg` shows only the two buttons, with about 270px of blank space above the message.
  - Neither layout echoes the path or pre-fills a search from it. A mistyped `/music/lst-last` is a search away from the right page.
- **Suggestion.** A third action, "Search for “lst last”", built from the slug. Restore the suggestion chips on the phone (they fit above the action bar).

### SH-25. Arrow glyphs carry no stable meaning

Design · both layouts · impact low-medium · effort small

- **Evidence.**
  - ↗ marks internal links everywhere ("Live board ↗", "All ↗", "The calendar ↗", "Open data API ↗"), while → marks others ("Explore the music →", Keep exploring).
  - Filled or outlined buttons also carry ↗:
    - Phone primary "VIEW CERTIFICATIONS ↗" (`home-390-light-fold.jpg`)
    - "READ THE STORY ↗" on both layouts
    - The closer's three buttons
  - The designer's own 5.4 rule says the arrow is the link weight and a filled control carries none. The desktop "Read the story ↗" was parked for exactly this.
- **Suggestion.** Define it once:
  - → means another page on this site.
  - ↗ means it leaves the site or opens a file.
  - ↓ means download.
  - Remove arrows from filled buttons.
  - Apply to the home first; it is the template the rest copies.

---

## Carried forward, verified live today, and not raised as new structured findings

- **P004.** The map teaser says "57 countries, seven regions" over four cells (19 Africa / 19 Europe / 10 Caribbean / 9 Rest), on both layouts.
- **P006.** StatGlyph watermarks on the phone stat tiles. Still waiting on the owner's yes.
- **P012.** Tab bar glyph weights are uneven (♪ and # thin, ★ and ▲ heavy). Home's brand mark at 0.55 opacity still reads as half-lit on `/updates` (`updates-390-light-fold.jpg`). `/updates` and `/search` light no tab.
- **P017.** Follow panel styling at the foot of `/updates` (beyond the crop).
- **OTD card action named three ways.** "The card ↓" (desktop home), "Save or share ↓" (phone), "Download the card ↓" (desktop day page). Pick one verb.
- **Phone `/search` (screen 27) has no back button and no menu.** The sticky field stands in for the nav, so the only exits are the tab bar and "← Home" after the results. This is by design; noted only.
- **Perceived performance.** A cold phone load of `/` transferred about 908 KB, of which about 350 KB was JavaScript (compressed) and 60 KB fonts. Fine on fibre. Worth a throttled check against the 2.75 s LCP baseline (project-site-speed-sep-2026) now that both layouts hydrate. Not a design item.
- **Known follow-ups, already listed by the owner, not counted.**
  - "Billboard Boxscore" wording: the scoreboard tile and the closer. The phone tile also says "Boxscore".
  - The `/search` "All" chip.

## Rulings respected (not raised)

- h1 split word in gold.
- 44 vs 46 No. 1s labelling.
- Desktop and phone as separate designs.
- Dense lists with no accordions. SH-05 and SH-11 add cues and do not collapse anything.
- OG cards stay gold.
- N2 chips on phones.
- Desktop chips in gold (pending the owner; not raised).
- The Box office pill.
- The masthead themes with the page.
- The phone hero leads with the figure.
- One-milestone OTD days are noindex.
- `/updates` is Burna-only.
- Half-empty grid rows.
- Fixed bars mid-page in full-page shots are capture artefacts.

---

## Handoff for Claude Design: shell and home (group brief)

**Read first.**
- `docs/design/*/README.md` on origin/main, especially `theming`, `reading` and `rhythm`.
- This file's shots.
- The rulings above. Desktop and phone are separate artboards: never scale one into the other. Draw 1440, the 1024 band, and 390, each in light and dark.

**Tokens to use.**
- `--type-*` scale and `--measure` 62ch.
- Gold `#945e00` on paper and `#ffb627` on dark, for live or action only.
- Selected state N2: ember edge, wash, ink label.
- Surface ramp: `--bg`, `--bg-soft`, `--bg-soft-2`, `--bg-raised`.
- Kicker tick signature: `--green` for updates and live, `--ember` for records.

**Jobs, in priority order.**

1. **Phone trust row and Latest strip** (SH-08, plus the SH-09 ask).
   - Phone home only.
   - Under the hero buttons: one provenance line (verified date and the four bodies, the same data as the desktop row).
   - One "Latest" row from `updates[0]`, linking to `/updates`.
   - A date stamp on the live figure.
   - If the owner says yes to SH-09: a one-line disclaimer at the end of the home.
   - Acceptance: the phone home shows a date and a source without opening the sheet, and `/updates` is one tap from the home.
2. **Masthead IA** (SH-06, SH-07).
   - Desktop 1440 and 1240, the tightest width.
   - 6–7 section links with gaps of at least 20px, and no Home link.
   - A home for About/FAQ/Contact.
   - Compare placed, or explicitly not placed.
   - The footer sitemap gains Compare and Press.
   - Acceptance: the item gap is at least 2× the word space at 1240, and every sheet destination is reachable from desktop chrome or the footer.
3. **Menu sheet discoverability** (SH-05).
   - Phone 390x844 and 375x667.
   - The list must signal that it continues, or Appearance moves to the end.
   - Draw the opened state and the scrolled-to-end state.
   - Acceptance: at least 10 rows, or an explicit "more" cue, on the first screen.
   - Tablet band: a full-height panel (SH-03 is a build-fix; draw it only if you change the panel).
4. **/updates reading pass** (SH-10, SH-11, SH-12).
   - Desktop: entry measure near 68ch, a bold lead clause, short in-row dates, and a sticky month-plus-filter strip.
   - Phone: a sticky month label (the owner must OK it; screen 06 has none).
   - 1024: digest beside the lede, or as an inline row.
   - Acceptance: from any scroll position you can see the month and the active filter, and the first entry is above the fold at 1024x768.
5. **Home lower data modules** (SH-13, SH-14, SH-16, SH-15).
   - Ledger: replace the duplicate Countries column.
   - No. 1 board: song line per cell, equal columns, and a header summary when one song dominates.
   - OTD band: the next 3 days, or a week strip.
   - Globe: decide whether it is an island or themed.
6. **Share cards** (SH-21).
   - Home and `/updates` link previews carry derived figures and the latest entry.
   - Gold stays. Bump `OG_ART` once.
7. **Small system rules** (SH-22, SH-25, SH-20, SH-17, SH-18, SH-19, SH-23, SH-24).
   - The arrow-glyph rule.
   - N2 on the segmented control.
   - One search placeholder and one taxonomy.
   - Balanced titles.
   - OTD legend and list copy.
   - 404 search-the-slug.

**Build-fixes a developer can ship without a design.** SH-01, SH-02, SH-03, SH-04, SH-07. Also the double space on the `/updates` OG card (inside SH-21).

**Do not change.**
- The desktop hero and live-panel alignment (#238; padding-fragile).
- The OTD calendar's no-weekday grid and kind marks.
- The focus ring.
- The five-tab bar's set of destinations.
- The dense lists.
