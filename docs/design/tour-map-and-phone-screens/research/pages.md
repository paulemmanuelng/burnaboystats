# Pages research: the tours pages, the three pages with no phone screen, and the long lists

**For:** Claude Design, briefed on the tour map and a set of phone screens.
**Read on:** 29 Sep 2026. Code at `main` `6aae00c8`. Live checks on https://burnaboystats.com the same day.
**Status:** report only. Nothing in the app was changed.

How to read the citations:

- `app/...:N` is a file and line in the site's repo. Claude Design cannot open these. They are there so the owner and Claude Code can check each claim.
- `designs/...` is a file in the design bundle (`design_handoff_burnaboystats/designs/`). A line number there is the line in that `.dc.html` file.
- **"measured"** means the value was read from the live site at 390×844 (phone) with the repo's own headless-Chrome harness (`scripts/mobile-shot.mjs`). Everything else is read from the code.
- **Live** means the figure is computed from the site's data files every build, so it changes when the data changes. **Typed** means someone wrote it by hand.

The phone and desktop layouts switch at **900px**. Below 900px each page shows its phone component and hides its desktop half (for example `app/records/tours/tours.module.css:15-16`). Both halves are in the HTML at once.

---

## 0. Summary

| Page | Desktop today | Phone today | Design artboard, desktop | Design artboard, phone |
|---|---|---|---|---|
| `/records/tours` | Map link is the third button in the "Upcoming dates & tickets" panel | **No link to the map, revenue or festivals pages** | `Records - Tours.dc.html` | Deep Pages, screen **12** |
| `/records/tours/festivals` | 3 groups, 59 rows. No map link in the page body (the footer has one) | 3 accordions, no bar, no map link | `Records - Festivals.dc.html` | Deep Pages, screen **13** |
| `/records/tours/map` | Map, region table, 3 buttons | Map card, region rows, bar "Festivals & shows" | `Records - Tour Map.html` | Deep Pages, screen **20** |
| Home map teaser | `GlobeTeaser`, at the foot of the certifications column | Same component, after the album rail | **None.** The desktop home artboard has no globe. The build reuses the phone design | Mobile, screen **01** |
| `/curator` | One responsive layout | Desktop masthead + breadcrumb + five-tab bar | **None** | **None** |
| `/press` | One responsive layout | Same as `/curator` | **None** | **None** |
| `/analysis/spotify-unmerge` | One responsive layout | Same as `/curator` | **None** (not in `Analysis.dc.html` either) | **None** |
| `/updates` | Filter band, then entries grouped by month | 326 cards, no month headings, no year on dates | `Updates.dc.html` | Mobile, screen **06** |
| `/timeline` | One responsive layout, 6 era chips at the top | Same markup with its own back bar; chips wrap to 3 rows | **None** | **None** |
| `/faq` | Jump band + groups with a sticky side column | Back bar with "22 questions", a sideways-scrolling category row | `FAQ.dc.html` | Mobile, screen **08** |

---

## A. `/records/tours`

Components: `app/records/tours/page.tsx` (both layouts), `app/components/MobileTours.tsx` (phone), `app/components/ToursExplorer.tsx` (desktop tour accordion), `app/components/KeepExploring.tsx`, `app/components/BreadcrumbBar.tsx`. Data: `app/data/tours.ts`, `app/data/tourRevenue.ts`, `app/data/performedCountries.ts`.

### A1. Desktop, sections in order

1. **Breadcrumb**: `Home / Career Records / Tours & Live` (`page.tsx:91`; the labels come from `SEGMENT_LABELS` in `app/lib/seo.ts:258,265`).
2. **Hero** (`page.tsx:94-138`), two columns.
   - Eyebrow: `On the road`. H1: `Tours & Live` ("& Live" in gold ink).
   - Lede (live figures in bold here): "The **I Told Them… Tour** grossed **$30.46 million** across **22** reported shows — the highest-grossing tour by an African artist in history — and his June 2024 **London Stadium** concert (**$6.15M** from **58,973** fans) is the biggest single concert ever by an African artist." (`page.tsx:105-110`). "June 2024" is typed.
   - Right column, the **tickets panel** (`page.tsx:112-135`): kicker `Upcoming dates & tickets`, then three stacked buttons:
     1. `Tickets · Ticketmaster ↗` (gold primary, external link to Ticketmaster)
     2. `Official tour site ↗` (secondary, external, onaspaceship.com/tour)
     3. **`Where he's performed ↗`** (secondary, internal, `/records/tours/map`), at `page.tsx:131-133`.
   - **This button is the only link to the map anywhere in the page body.** It sits third, under two outside ticket links, and its ↗ arrow is the same one the external links use.
3. **Headline strip** (`page.tsx:141-152`), three cells, all live (`page.tsx:62-70`):
   - `$30.46M` · `Top tour gross · African record` (`tours.ts:76`)
   - `$6.15M` · `Biggest concert · African record` (London Stadium, $6,147,209, `tourRevenue.ts:31`)
   - `300K+` · `Tickets · I Told Them… Tour` (302,801 rounded down to the nearest 100K, `page.tsx:41-43`, `tours.ts:77`)
4. **Tours** (`page.tsx:155-208`).
   - H2 `Tours`, with the note `Click a tour to see its venues, dates and capacities.`
   - **Announced** card (`page.tsx:168-191`): tag `Announced`, note `Not yet played — no gross, no attendance`, then one row per show (venue, then city, country and capacity, then the note, then the source, with the date on the right). There are three shows today (`tours.ts:284-329`):
     - Stade de France, Paris, **25 Oct 2026**. NFL halftime show. "Announced by the NFL, 17 September 2026".
     - Apple Music Hall, London, **29 Oct 2026**, 600 capacity. "Announced by Apple, 25 September 2026".
     - London Stadium, London, **2027**, 80,000 capacity. "Announced by Burna Boy on X, 3 August 2026".
   - `ToursExplorer`: six tours as an accordion. Each row has the tour name, years, gross, and an `African record` pill on the record tour (`ToursExplorer.tsx:61`). Opened, a row shows a table with the headings `Date · Venue · City · Country · Capacity` (`ToursExplorer.tsx:78-82`). The six tours: No Sign of Weakness Tour (2025–26), I Told Them… Tour (2023–25, $30.46M, record), Love, Damini Tour (2022–23, $11.8M), Space Drift World Tour (2021–22), African Giant Tour (2019), Life on the Outside Tour (2018) (`tours.ts:45-207`).
   - **"Festivals & shows" jump card** (`page.tsx:195-206`): a full-width link card to `/records/tours/festivals` with the title `Festivals & shows`, the line `Every festival & big stage he's played — the headline sets and beyond` and a `→` arrow. It carries **no count**.
5. **Highest revenue per show** (`page.tsx:211-279`).
   - H2 `Highest revenue per show`, note `The top 10 single-show grosses by any African artist.`
   - A table with the headings `# · Artist · Venue · Tour · Tickets · Gross`. It shows rows 1–10 of `revenueShows`.
   - Source note, live: "Burna Boy holds **26** of the **41** highest-grossing shows by an African artist — more than every other artist on this list combined. Box-office figures reported by Billboard Boxscore & Pollstar (as aggregated by TouringData), cross-checked against press reporting, as of September 2026." (`page.tsx:258-264`). The date is typed.
   - Jump card `See the full top 41` / `Every show on the list, ranked by reported revenue` → `/records/tours/revenue` (`page.tsx:265-277`). The 41 is live.
6. **Record nights & live milestones** (`page.tsx:282-302`): 17 rows from `liveMoments` (`tours.ts:331-349`), each showing year, title and text. Rows flagged `record` get a highlight.
7. **Source band** (`page.tsx:305-316`): "Box-office figures are reported by Billboard Boxscore & Pollstar (as aggregated by TouringData) and cross-checked against press reporting, as of September 2026. For future dates, always check official ticketing." Then the button `← Career Records`.
8. **Keep exploring** (`page.tsx:318`): Career Records / Certifications / Chart Records (`app/lib/links.ts:129`).
9. **Footer** (desktop only): `Revenue · Festivals · Tour map · Firsts` (`app/lib/links.ts:275-281`). This is the second place on desktop that links to the map. Footers are hidden on phones (`app/globals.css:1141-1147`).

### A2. Phone (`MobileTours`), sections in order

Measured at 390×844: page height **1,936px**. The site masthead is hidden and there is no five-tab bar. There are no links to `/records/tours/map`, `/records/tours/festivals` or `/records/tours/revenue` anywhere on the screen.

1. **Back bar** (`MobileTours.tsx:61-70`), sticky (`mobileTours.module.css:17-18`): a 44px round back button (goes back, or falls back to `/records`), the label `Tours & live`, a gold badge `6 tours` (live), and the menu button.
2. **Hero** (`:73-88`): kicker `On the road`. H1 `Tours & live` ("live" in gold). Lede, live: "Six tours, and live shows in 57 countries — and the highest-grossing tour by any African artist. Tap a tour for its dates."
3. **Stat grid**, 2×2 (`:51-56`, `:91-99`), all live:

   | Value | Label | Note | Source |
   |---|---|---|---|
   | 6 | Tours | 2018 — 2026 | `tours.length`; the year span is worked out in `page.tsx:48-60` |
   | $30.46M | Top gross | I Told Them… | `tours.ts:76` ("Tour" is dropped from the name, `page.tsx:82`) |
   | 57 | Countries | 7 regions | `performedCountries.ts:117-118` |
   | 58,973 | Biggest night | London Stadium | `tourRevenue.ts:31` |

4. **Announced** block (`:102-129`): the head reads `Announced` / `3 shows`. Each show follows as venue plus ` · date`, then city, country and `cap`, then the note and the source. The three shows run on with no divider between them.
5. **Six tour rows**, each one expandable (`:132-187`). A row shows the name, a `Record` badge, `years · meta`, the gross (or a "not reported" dash) and a ▸/▾ caret. Opened, it shows the note, the column heads `Date & venue` / `Venue capacity`, and the date rows (venue, then `country city · date`, then capacity), or `No date-level Boxscore report for this run.`
6. **Footnote** (`:189-195`): "Tour grosses come from Billboard Boxscore. The per-date figure is the **venue's capacity**, not tickets sold — tours.ts records capacity, and only some nights have a Boxscore headcount. A dash means the run has no reported gross, not that it was small. Dates shown are a documented sample, not the full itinerary." The file name "tours.ts" is shown to readers.
7. **Action bar**, fixed at the bottom (`:199-208`, `mobileTours.module.css:246`): a single gold pill, `Tickets · Ticketmaster ↗`.

**What the phone leaves out compared with desktop:** the other two ticket-panel buttons (`Official tour site`, `Where he's performed`), the headline strip, the "Festivals & shows" card, the revenue top 10 and its "See the full top 41" card, the 17 record nights, and Keep exploring.

**What the phone design draws that the build never had.** Deep Pages screen 12 (`designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html:222-328`) draws:

- three full-width 48px pills under the lede: `Tickets · Ticketmaster ↗`, `Official tour site ↗` and **`Where he's performed ↗` → `/records/tours/map`** (lines 237-241);
- a `Highest-grossing nights` section, "Top 8 single-show grosses by any African artist" (lines 283-300);
- a `Record nights & moments` section, "16 milestones · green marks a world record" (lines 304-312);
- a bottom bar button reading `All tour dates` (line 323).

`git log -S` finds none of these strings in `MobileTours.tsx`'s history, so they were left out when the screen was first built (`b6c3bf4d`), not removed later. One more conflict: the handoff's action-bar table says screen 12's bar is `Tickets` → Ticketmaster (`NUMBERS-AND-STATES.md:81`), but the artboard's own button says "All tour dates". The build follows the table.

### A3. Where a phone reader can reach the map today

- **Not from `/records/tours`.** Measured: zero visible links to `/records/tours/map`, `/festivals` or `/revenue` on the page.
- From the phone **Records hub** (`MobileRecords`, fed by `app/lib/recordBooks.ts:34-35`): the rows `Where He's Performed` and `Festivals`.
- From the **home** globe teaser (the whole block is one link, `GlobeTeaser.tsx:37`).
- From `/press` (the "57 Countries performed in" tile, `app/press/page.tsx:58`) and from `/music/listeners` (`MobileListeners.tsx:137`, its action bar).
- **Not** from the menu sheet: `app/lib/navGroups.ts:6` leaves third-level `/records/tours/*` pages out on purpose.
- **Not** from phone `/records/tours/festivals`, which has no bar and no link.

### A4. Counts available for a "More from the road" group

All of these are already computed from the data. None needs typing.

| Row | Count to show | Exact figure today | Where it comes from | Already worded like this at |
|---|---|---|---|---|
| Where he's performed (map) | countries · regions | **57 countries · 7 regions** | `countryCount`, `regionCount`: `app/data/performedCountries.ts:117-118` (57 entries, lines 39-109) | `app/lib/searchStats.ts:42` ("57 countries"); `/press` tile "57 · Countries performed in · 7 regions" |
| Revenue per show | ranked single shows (nights) | **41 shows**, **26** of them his | `revenueShows.length`: `app/data/tourRevenue.ts:30-80`; his = `artist === "Burna Boy"` | `app/lib/searchStats.ts:44` ("41 shows"); `app/lib/recordBooks.ts:31` ("The 41 biggest single-show grosses by an African artist"); tours page "See the full top 41" |
| (revenue, extra) | two-night stands shown under the board | **2** stands, **4** nights (Toronto and Montreal, Feb 2024) | `revenueStands`: `tourRevenue.ts:103-106` | revenue page, "Reported as a stand — one figure for the run" |
| Festivals & shows | documented appearances | **59** = **32** headlined + **14** solo concerts + **13** other; **7** Afro Nation | `festivals` (`tours.ts:367-407`), `concerts` (`tours.ts:428-445`), `otherShows` (`tours.ts:410-424`) | `app/lib/searchStats.ts:45` ("59"); phone festivals badge "59"; festivals lede "59 appearances across three categories" |

Map breakdown by region (`performedCountries.ts`, counted): Africa 19 · Europe 19 · Caribbean 10 · North America 3 · South America 3 · Oceania 2 · Asia 1. Eight of the 57 are drawn as dots, not shapes (entries with a `marker`): Mauritius, Kosovo, Curaçao, Barbados, St Kitts & Nevis, Dominica, Saint Lucia, Antigua & Barbuda.

One wording point about "nights": the revenue board ranks **single shows by any African artist**, not only his. "41 shows" is the whole board; "26" is his share. If the row is meant to be about him, the honest line is "his 26 of the 41 biggest single-show grosses by an African artist".

### A5. The tour map page's own onward links (for context)

- Desktop `/records/tours/map` ends with three buttons: `← Back to tours`, `Festivals & shows ↗` (gold), `Revenue per show ↗` (`app/records/tours/map/page.tsx:144-154`).
- Phone screen 20 (`MobileTourMap.tsx`) has the back bar `Tour map`, a bare badge `57`, the kicker `Live worldwide`, the H1 `Where he's performed`, the lede "57 countries across 7 regions.", the map card, region rows, a footnote, and a bottom bar `Festivals & shows` → `/records/tours/festivals` (`MobileTourMap.tsx:96-100`).
- The design's screen 20 bar reads `Open the map` (Deep Pages line 709), and the handoff table says `Open full map` → `/records/tours/map` (`NUMBERS-AND-STATES.md:83`). The build changed it to Festivals, because a bar that opens the page you are already on goes nowhere.

---

## B. `/records/tours/festivals` and the home map teaser

### B1. Festivals, desktop (`app/records/tours/festivals/page.tsx`)

1. Breadcrumb `Home / Career Records / Tours & Live / Festivals & Shows` (`:89`).
2. Hero (`:92-106`): eyebrow `Big stages`. H1 `Festivals & Shows`. Lede: "The festivals Burna Boy has headlined — and the other big stages he's played. **59** appearances across three categories." (live).
3. Count band (`:109-122`): three cells that link to anchors on the same page: `32` Festivals headlined · `14` Solo concerts · `13` Other big stages.
4. Three groups (`:27-49`, `:125-154`), each with an H2, a hint and a count. Rows run newest year first; within a year the order is the data order (`:18-19`).
   - `Festivals headlined`: "Where he topped the bill — including 7 Afro Nation editions." · `32 sets`
   - `Solo concerts`: "His own standalone headline concerts — separate from the routed tours and festival sets." · `14 shows`
   - `Other festivals & shows`: "Major festival appearances where he wasn't the headliner." · `13 appearances`
   - Each row shows the year (large, gold), `Name · Location` and a note (`:141-149`).
5. Source band (`:58-59`, `:157-164`): "Festival headline sets and other major festival / one-off appearances, verified against press and festival line-ups, as of September 2026. His own headline tours and every tour date are on the Tours page. More appearances are added as they are confirmed." Then `← Tours`.
6. There is **no Keep exploring** block. The **footer** reads `Tours · Revenue · Tour map · Firsts` (`app/lib/links.ts:293-299`), so the only map link on this page is in the footer.

Rows carry a year and a location but **no country field**. The country sits inside the free-text `location`, for example "Rabat, Morocco" or "Muri Okunola Park, Lagos" (`tours.ts:352-363`). A festival row cannot be linked to a map country without adding that field.

### B2. Festivals, phone (`app/components/MobileFestivals.tsx`, Deep Pages screen 13)

- Back bar: back to `/records/tours`, label `Festivals`, gold badge `59`, menu button (`:34-43`).
- Kicker `Festival stages`. H1 `Festivals & shows` ("shows" in gold). Lede, live (`page.tsx:73`): "Fifty-nine documented appearances — 32 festivals headlined, including seven Afro Nation editions. Tap a section to open it."
- 2×2 stats: `32 Headlined` · `7 Afro Nation` · `14 Solo shows` · `59 Total` (`page.tsx:74-79`).
- Three accordions (`MobileSections.tsx`): `Festivals headlined (32)`, `Solo concerts (14)`, `Other appearances (13)`. The first is open when the page loads. Opening one closes the others. The caret is `+`/`−`. Each row shows the year in mono, the name, and the location underneath.
- Footnote: "From each festival's own line-up archive. tours.ts records no capacity field, so sections run newest-first rather than by size." The file name is shown to readers again.
- **No bottom bar**, as the handoff specifies ("No bar. The screen is the full list.", `NUMBERS-AND-STATES.md:73`). The five-tab bar is also hidden (`app/lib/mobileScreens.ts:77`). The screen therefore ends at the footnote with **no onward link at all**, including none to the map.

The design numbers are stale. The artboard says 57 / 30 (Deep Pages lines 335-347) and the README route table says "58 appearances" (`README.md:186`). The data holds 59 / 32. The build prints the data (`page.tsx:67-70`).

### B3. Home map teaser (`app/components/GlobeTeaser.tsx`)

One component serves both layouts (`GlobeTeaser.tsx:12-24`). **The whole block is a single link to `/records/tours/map`** (`:37`). Nothing inside it can be tapped separately.

- Kicker `Live worldwide`, with a gold rule.
- Title `Where he's` / `performed` (Anton 26px, two lines).
- Lede, live: "57 countries, seven regions — every stage he's taken."
- A 212px rotating globe on a ringed stage (`GlobeCanvasLazy`).
- **Region strip, four cells** (`:25-33`, `:62-69`). The code takes the three biggest regions and pools everything else as "Rest", so the four always add up to 57:

  | 19 | 19 | 10 | 9 |
  |---|---|---|---|
  | Africa | Europe | Caribbean | **Rest** |

  "Rest" = North America 3 + South America 3 + Oceania 2 + Asia 1. Africa and Europe tie at 19, and the tie keeps the data's region order. The cells are 22px Anton gold numerals over 11px mono labels.
- Foot: a green dot, then `Oceania added Oct 2025` (**typed**, `:73`), then `Open the map ↗` in gold on the right.

Where it sits:

- **Desktop home** (`app/page.tsx:236-238`): at the foot of the certifications-ledger column, after the tier bars and the `See it visualized ↗` link, and before the H2 `The No. 1 board`. On desktop it loses its side padding and the globe is sized to the column (`GlobeTeaser.module.css:120-125`, `min-width: 901px`).
- **Phone home** (`app/components/MobileHome.tsx:323-324`): after the album rail (whose link is `All ↗` → `/music`) and before `History made · 19 Jul 2026`.

Design source: phone screen 01 in `designs/mobile/Burna Boy Stats - Mobile.dc.html:190-222`. The region cells are typed there as `[["19","Africa"],["19","Europe"],["10","Caribbean"],["9","Rest"]]` (line 1033), which matches the live counts today. The desktop home artboard (`designs/desktop/Burna Boy Stats.dc.html`) has **no globe or map teaser**. The build put the phone design on desktop too.

---

## C. `/curator`, `/press`, `/analysis/spotify-unmerge`

### C0. Why these three look different on a phone

None of the three is in `BACK_BAR_ROUTES` (`app/lib/mobileScreens.ts:16-53`), and none has its own phone component. So at phone width:

- the **site masthead** stays visible (`Nav.tsx:18,43`; only routes with their own chrome get `navDesktopOnly`, which is hidden below 900px at `globals.css:2150-2152`). It shows the wordmark, the one-tap theme toggle, search and the hamburger. Measured: **69px** tall.
- the **breadcrumb bar** renders, because each page calls `BreadcrumbBar` outside any desktop-only wrapper. On phones its crumbs grow to 44px targets (`breadcrumbBar.module.css:33-40`). Measured: **45px**, reading `HOME / ABOUT THE CURATOR`, `HOME / PRESS & DATA KIT` and `HOME / ANALYSIS / THE SPOTIFY CORRECTION`.
- the **five-tab bar** shows at the bottom (these pages are not in `ACTION_BAR_ROUTES`, `mobileScreens.ts:66-89`). Measured: **87px**, and **no tab is lit** on any of the three, because none of the paths starts with a tab's link (`MobileTabBar.tsx:99-102`).
- **Keep exploring** is visible on phone (the pages have no desktop-only wrapper). The footer is hidden, as on every phone page (`globals.css:1141-1147`).
- The content is the desktop page in one column. Each page's CSS has one phone breakpoint that shrinks the padding and the H1.

Measured page heights at 390×844: `/curator` **3,001px**, `/press` **4,236px**, `/analysis/spotify-unmerge` **5,767px**. None scrolls sideways.

Where readers come from: `/curator` and `/press` are linked from the menu sheet (`navGroups.ts:108-109`, rows "About the curator" and "Press & data kit"), from each other, and from the desktop footer (`links.ts:91`, `:165`). The phone `/embed` screen's back button returns to `/press` (`MobileEmbed.tsx:42`), so a phone reader going Back from a designed screen lands on this undesigned one. The correction page is linked from `/analysis`: on desktop, the section "A claim worth correcting" (`app/analysis/page.tsx:196-207`); on phone, the left button of the analysis action bar, `The Feb 2026 Spotify correction` (`MobileAnalysis.tsx:107-109`). It is also linked twice from `/updates` entries (`app/data/updates.ts:304`, `:778`).

### C1. `/curator`, full content (`app/curator/page.tsx`)

Layout: a 900px column (`curator.module.css:5`). H1 64px, 42px at ≤720px. Paragraphs 15.5px/1.75 in muted text. Headings are 26px Anton caps. The file calls it "a single responsive layout … like the song pages" (`curator.module.css:1-3`).

1. Breadcrumb `Home / About the Curator`.
2. Hero (`:109-122`):
   - Kicker `The person behind the numbers`. H1 `About the Curator` ("Curator" in gold ink).
   - Lede: "I'm **Ukpaka Emmanuel** — Paul, on X — and Burna Boy Stats is researched, verified and maintained by me, one figure at a time."
   - Line with a green dot: `Data last reviewed` **28 September 2026**. Live: it is the newest date in `app/data/updates.ts` (`:22-30`).
3. Five text blocks, each an H2 and one paragraph, first person (`:46-72`):
   - `Who I am`: Nigerian, based in the UK; has followed the releases and charts for years; works with data and reporting; writes the code and does the research alone.
   - `Why this site exists`: his numbers were scattered and unsourced; building started in June 2026; "today it tracks **248** certifications across **26** countries, **351** official chart entries with **46** No. 1s, and **83** award wins". All five figures are live (`:58`). They sit mid-sentence and nothing on the page shows them as figures.
   - `How I work`: one paragraph of about 150 words setting out which source wins for each kind of figure: certification → the certifying body's database (or the label's plaque where no public register exists); chart peak → the chart owner; streaming → the platform's own screen; career total → kworb's per-track sum anchored on a dated ChartMasters read. "When a fan tally and a primary source disagree, the primary source wins."
   - `Independence`: fan-made; no affiliation, sponsorship or advertising; built and kept up alone.
   - `Use the data`: free with attribution; open API (CC BY 4.0), stat cards, press kit.
4. `Reach me` (`:133-161`): two paragraphs. The first links his X handle ("the fastest way to reach me"), TikTok ("the same handle"), the `contact page`, the `press & data kit` and the `methodology`. The second: "The site is open source. Every figure on it has a commit behind it…", with a link to the GitHub repo. Measured: the two paragraphs have no gap between them.
5. Keep exploring: `/curator` has no list of its own, so it gets the default, **The Music · Certifications · Career Records** (`KeepExploring.tsx:80,85`).

There are no tables, figure tiles, images or buttons. The structured data is a `ProfilePage` for the person (`:75-99`).

### C2. `/press`, full content (`app/press/page.tsx`)

Layout: the same 900px single column as `/curator` (`press.module.css:1-5`). The figure grid is 3 columns, 2 at ≤720px (`:56-63`, `:121`).

1. Breadcrumb `Home / Press & Data Kit`.
2. Hero (`:87-101`):
   - Kicker `For journalists, bloggers & fan pages`. H1 `Press & Data Kit` ("Data Kit" in gold ink).
   - Lede: "Every figure on this site is verified against primary sources and free to use — all we ask is a credit with a link. This page has everything you need to cite, embed or build on the data."
   - `Data last reviewed 28 September 2026` (live, `:37-45`).
3. **`The headline figures`** (`:104-119`): the intro "Rendered live from the same dataset as the rest of the site, so they are always current. Each links to a page with the full breakdown and sourcing." Then six tiles. Each tile is a link, but none shows an arrow (`:52-59`). All values are live:

   | Value | Label | Sub | Links to |
   |---|---|---|---|
   | 248 | Certifications | 26 countries | /certifications |
   | 351 | Chart entries | 67 countries | /records/charts |
   | 46 | No. 1 placements | worldwide | /records/charts |
   | 83 | Award wins | 248 nominations | /records/awards |
   | 11.10B | Career streams | Spotify, all credits | /records/by-the-numbers |
   | 57 | Countries performed in | 7 regions | /records/tours/map |

4. **`How to credit`** (`:122-139`): "In an article, a tweet or a video description — one line does it:". Then two code boxes, each with a button:
   - `Data: Burna Boy Stats (burnaboystats.com)` with `Copy`
   - `Data: <a href="https://burnaboystats.com">Burna Boy Stats</a>` with `Copy HTML`
   - Small print: "Deep-link to the page you used where you can — e.g. burnaboystats.com/certifications for a certification figure."
5. **`The open API`** (`:142-158`): one paragraph with links to `burnaboystats.com/api` and `CC BY 4.0`.
6. **`Download the data`** (`:165-213`): an intro, then three rows. Each row is a code-style box plus a `Download` button (styled like the Copy button), with a line of description underneath (`app/lib/dataDownloads.ts:359-387`). Counts are live:
   - `certifications.csv · 1,322 plaques`: every plaque for Burna Boy and the 19 board artists.
   - `chart-peaks.csv · 2,143 chart entries`: the same 20 artists.
   - `awards.csv · 248 nominations`: Burna Boy's competitive nominations.
   - Then the sub-heading `How to cite` (an h3 in the kicker style), the code box `Source: Burna Boy Stats (burnaboystats.com), data as of 28 September 2026. CC BY 4.0.` with `Copy`, and a long small-print paragraph explaining what certified units mean, `units_note`, `unpriced_reason` and the Nigerian register, with links to the `comparison tool` and the `methodology page`.
7. **`Ready-made stat cards`** (`:216-225`): one paragraph with the link `stat cards page`. No card is shown.
8. **`Live stat boxes for your site`** (`:230-239`): one paragraph. The widget count and names are live: "4 small boxes (career streams, certifications, Dai Dai and the latest milestone)", with the link `embed page`. No box is shown.
9. **`Why the numbers hold up`** (`:242-265`): one paragraph linking `methodology`, the GitHub repo, the `curator page`, his X handle and the `contact page`.
10. Keep exploring: the default list again, **The Music · Certifications · Career Records**.

### C3. `/analysis/spotify-unmerge`, full content (`app/analysis/spotify-unmerge/page.tsx`)

Layout: a 1180px wrap (`unmerge.module.css:4`). H1 `clamp(38px, 6vw, 68px)`, which is 38px on a phone. The answer paragraph is 20px (17.5px on phone). The kicker is gold.

1. Breadcrumb `Home / Analysis / The Spotify Correction`.
2. Hero (`:193-211`):
   - Kicker `The February 2026 correction`. H1 `Did Burna Boy lose Spotify streams to bots?` ("to bots?" in gold ink).
   - **Answer**, the largest body text: "**No.** In February 2026 Spotify un-merged two remixes whose play counts had been wrongly combined with the original recordings, and about **309 million streams moved to those originals**. Nothing was deleted, and nothing was flagged as artificial — a reallocation and a purge look the same on a running total, and are not the same event."
   - Sub: "Verified against Spotify's own per-track counts on 17 September 2026. Every figure below is checkable, and the arithmetic is set out rather than asserted." The date is typed at `:37`.
3. H2 **`What actually happened`** (`:214-229`): two paragraphs covering what a merge is, the two remixes ("Enjoy Yourself (Remix)" with Pop Smoke and "Finders Keepers (Remix)"), and the split on 10 Feb 2026.
4. H2 **`The arithmetic`** (`:231-251`): the intro "These are fixed points, not live figures — which is why they are written down rather than derived. Read down the column and the total resolves." Then a nine-row ledger (`<dl>`, `:81-91`). The label is on the left with an optional grey note under it; the value is on the right, in gold mono. On a phone each row stacks, value under label (`unmerge.module.css:94`).

   | Label | Value | Note |
   |---|---|---|
   | Career Spotify streams, 31 December 2025 | 9,508,991,024 | as his counter then read |
   | "Enjoy Yourself — Remix", before the correction | 232,346,699 | |
   | "Enjoy Yourself — Remix", after | 50,077,530 | moved to the original: 182,269,169 |
   | "Finders Keepers — Remix", before | 130,244,873 | |
   | "Finders Keepers — Remix", after | 3,075,692 | moved to the original: 127,169,181 |
   | Total reallocated to the original recordings | 309,438,350 | not deleted — moved |
   | His true 2025 closing total | 9,199,552,674 | 9,508,991,024 − 309,438,350 |
   | His counter on 12 February 2026 | 9,438,600,171 | |
   | Actual streams gained in 2026 by then | +239,047,497 | 9,438,600,171 − 9,199,552,674 |

   Then: "So the year that supposedly went backwards was, in fact, **239 million streams forward** by 12 February. The drop everyone saw was a correction applied to the past, not a loss in the present."
5. H2 **`Where that leaves him today`** (`:253-279`). This is the page's **one live figure**: "His career Spotify total now stands at **11,103,140,399** (11.10B) — exactly **1,903,587,725** more than the corrected 2025 close of 9,199,552,674, or about 1.90 billion…". A second paragraph follows, then a grey note on how the total is built daily. The total comes from `app/data/streamingTotals.ts:86,109`, which the stats bot writes daily. The paragraph disappears if that value cannot be read (`:254`).
6. H2 **`How to check it yourself`** (`:281-296`): two paragraphs. The remixes as read on 17 Sep: "roughly 52.1 million and 3.4 million" (typed, `:42-43`). Links to the `methodology page` and `by the numbers`.
7. H2 **`Common questions`** (`:299-309`): six questions, each an h3 in the body font at 17px with its answer:
   1. Did Burna Boy lose Spotify streams to bot or fraud removal?
   2. How many Spotify streams did Burna Boy actually have at the end of 2025?
   3. Did his stream count go down in 2026?
   4. What is a Spotify merge, and why does it happen?
   5. How many Spotify streams does Burna Boy have now? (the answer carries the live total)
   6. How can this be checked?
8. Keep exploring: **Chart Analysis · By the Numbers · Methodology** (`links.ts:132`).

Structured data: FAQPage, ClaimReview (rating "False — the streams were reallocated, not removed") and Article (`:135-183`). The page's own comment explains its purpose: the H1 is the question and the first two sentences are the whole answer, so it can be quoted (`:24-28`).

### C4. How the sibling phone screens are built

**The rules (`app/lib/mobileScreens.ts`):**

- `BACK_BAR_ROUTES` (`:16-53`): a route in this set draws its own sticky back bar, and the site masthead hides below 900px. `/about`, `/faq`, `/contact`, `/updates`, `/analysis`, `/methodology`, `/api`, `/embed` and `/timeline` are in it. `/curator`, `/press` and `/analysis/spotify-unmerge` are not. Matching is exact, so `/analysis` does not cover `/analysis/spotify-unmerge`.
- `ACTION_BAR_ROUTES` (`:66-89`): the five-tab bar hides on these, and the screen may draw its own bottom action bar. Of the siblings, `/analysis`, `/methodology` and `/api` are in it. `/about`, `/faq`, `/contact`, `/updates`, `/embed` and `/timeline` keep the five-tab bar.
- The comment at `:6-13` says every screen except home opens with a back bar, and the tab bar is the foot of nearly every screen. The handoff's own chrome table disagrees with itself: the tab bar is on "screens 05–09 only" at `NUMBERS-AND-STATES.md:97` but "screens 01–09" at `:121`. The build follows neither exactly: the tab bar stays on every route that is not an action-bar route.

**The back bar (one pattern, repeated in each component's CSS; the reference copy is `app/components/mobileDeepPage.module.css:17-64`):**

- `position: sticky; top: 0`. Scrim background with a 14px blur, a 1px bottom rule, padding 12px 18px plus the safe-area insets, a 12px gap.
- **Back button**: a 44×44 circle with the `--bg-soft` fill, a 1px `--line` border and a 15px chevron (`:35-46`). It goes back in history when there is in-app history, and otherwise to its fixed parent (`app/components/BackLink.tsx:18-47`).
- **Label**: mono 700, 11px, tracking 0.11em, capitals, cut with an ellipsis (`:47-56`).
- **Badge** (optional): pushed right, mono 11px, tracking 0.1em, **gold** on the deep screens (`:57-64`) and muted grey on `/faq`.
- **Menu button**: 44×44, three 17px bars (`mobileMenuButton.module.css:3-29`). It opens the one shared menu sheet.

**The hero, below the back bar:** padding 22px 18px 18px. Kicker in mono 11px capitals, muted. H1 in Anton capitals at 46–48px, with the last words in the gold gradient. Lede in the `--type-lede` token (`mobileDeepPage.module.css:67-99`). The prose screens (`/analysis`, `/methodology`) add a `Data last reviewed <date>` line with a green dot. That is the same line `/curator` and `/press` already print on desktop.

**The generic deep-page component** `MobileDeepPage.tsx` (used by revenue, by-the-numbers, africa's-biggest, cars) runs in this order (`:13-16`): back bar → kicker + split title → lede → stat strip → chip rail → one list of rows → footnote → action bar. The action bar is a fixed pill, 50px tall, plus a round stat-card icon (`:291-303`, CSS `:290-329`), with a 104px spacer above it. **The prose siblings do not use it.** Each has its own component, because a list of rows with a value column is "the one shape this content cannot take" (`MobileMethodology.tsx:12-14`).

**The siblings, one row each:**

| Route | Component | Back goes to | Label · badge | Body after the hero | Bottom | Design |
|---|---|---|---|---|---|---|
| `/about` | `MobileAbout.tsx:29-37` | `/` | `About` · none | fast-facts grid **before** the prose; 2-paragraph bio; `Full biography on Wikipedia ↗`; abridged timeline + `The full career timeline — every milestone, dated →` | five-tab bar (96px spacer) | Mobile screen 07 |
| `/faq` | `MobileFaq.tsx:39-48` | `/` | `FAQ` · `22 questions` | category rail, flat question list, source | five-tab bar | Mobile screen 08 |
| `/contact` | `MobileContact.tsx:27-35` | `/` | `Contact` · none | form | five-tab bar | Mobile screen 09 |
| `/updates` | `MobileUpdates.tsx:85-98` | `/` | `Updates` · `Subscribe` (a link to the digest form) or `RSS ↗` | see D1 | five-tab bar | Mobile screen 06 |
| `/analysis` | `MobileAnalysis.tsx:35-46` | `/records` | `Analysis` · `4 findings` | each finding in full: number + kicker, a sentence-case H2, a 3-up stat row, paragraphs, links; then `How to check this` | action bar, two pills: `The Feb 2026 Spotify correction` (outline) + `Open the data API` (gold) (`:104-113`) | Deep screen 21 |
| `/methodology` | `MobileMethodology.tsx:45-53` | `/` | `Methodology` · none | block `How a figure gets verified` (h3 items) → soft block `Where the numbers come from` → closing sections with optional links | action bar `Report a correction` → /contact | Deep screen 22 |
| `/api` | `MobileApi.tsx:47-55` | `/` | `Open data API` · `v1` | pills row; blocks `Endpoints`, `Try it`, `Before you use it`, `Licence & attribution` (with its own Copy) | action bar `Copy the curl` | Deep screen 23 |
| `/embed` | `MobileEmbed.tsx:41-48` | **`/press`** | `Embed stats` · none | one block per widget, each with its own Copy | five-tab bar ("no single primary action for a bottom bar", `:19-24`) | **none**: built in the API screen's pattern without an artboard |
| `/timeline` | inline in `app/timeline/page.tsx:73-81` | `/` (`Back home`) | `Career timeline` · none | the desktop markup, reflowed | five-tab bar | **none** |

Two precedents that matter for the three pages without a design:

- `/embed` was given a phone screen **without an artboard**, by following the API screen's pattern. It is the one designed-pattern sibling that points back to `/press`.
- `/timeline` shows what happens when a page borrows the back bar without a designed screen. Its back button is **34×34**, not 44 (`timeline.module.css:21-31`, measured 34×34); its label is 12px, not 11px; its bar is solid `--bg`, not scrim; and it has no badge.

---

## D. The long lists

### D1. `/updates`

Data: `app/data/updates.ts`, stored newest first. **326 entries** (measured and counted) across three months: September 2026 **87**, August **99**, July **140**. Categories by count: Charts 124 · Streaming 105 · Certifications 47 · Firsts & Records 18 · Awards 15 · Tours 12 · Lifestyle 5. Each entry has a date, a category, the text, a link, and an optional `big` flag used by the Saturday email (`:39-51`).

**Desktop** (`app/updates/page.tsx`, `app/components/UpdatesFeed.tsx`):

1. Breadcrumb `Home / Latest Updates`.
2. Hero: eyebrow `The change log`. H1 `Latest Updates`. Lede: "Chart peaks, certifications and records, as they're added — every figure read at the body that publishes it." Then `Last entry 28 September 2026 · 326 entries` (live). The right column is the email-digest signup (`SubscribeBox`), because the email service is configured in production (`page.tsx:44`, `:81-100`). Without it, that column falls back to a tally: `Entries logged` / `New certifications` / `Months tracked`.
3. **Filter band** (`UpdatesFeed.tsx:57-90`): the label `Filter`, then chips `All 326`, `Charts 124`, `Streaming 105`, `Certifications 47`, `Firsts & Records 18`, `Awards 15`, `Tours 12`, `Lifestyle 5` (most-logged first, each with a colour dot), and `N entries` at the right. Chips are 40px tall and wrap (`updates.module.css:110,119-123`). **The band is not sticky.** It scrolls away with the page.
4. **Feed** (`:93-124`): grouped by month. Each group has an H2 month heading (`September 2026`) and `87 entries`. Each row is `28 September 2026` | category pill | text | `↗`, and the whole row is a link. At ≤1239px the date column is hidden (`updates.module.css:212-221`).
5. Follow panel, source line, Keep exploring.

**Phone** (`app/components/MobileUpdates.tsx`, screen 06):

1. Back bar: `Updates` · `Subscribe` (jumps to the digest form) · menu.
2. Kicker `The change log`. H1 `Latest Updates`. Lede: "Chart peaks, certifications and records, as they're added." Then `Last entry 28 September 2026`.
3. Filter rail, **scrolls sideways** (`mobileUpdates.module.css:135-138`): buttons `All 326`, `Charts 124` and so on, 44px tall.
4. `326 entries`.
5. **List**: every entry, with **no month headings** and **no paging**. The digest signup sits after the third entry (`:160-164`). Each card is a category pill plus a date on the right, then the text; the whole card links to the entry's page and shows no arrow. **Dates show the day and month with no year**: `28 Sept` (en-GB short month, `:31-35`). Measured: list **51,756px**, page **52,319px**. There is no back-to-top control on the screen itself and no end marker. The site-wide floating button is in the root layout (`app/layout.tsx:290`).
6. Five-tab bar. **No tab is lit**, because Updates is not one of the five.

The design (screen 06, `designs/mobile/Burna Boy Stats - Mobile.dc.html:567-633`) shows a 22-row sample. It formats dates **with** the year (`day numeric, month short, year numeric` in its data mapping, around line 1100), then a `Follow the run` panel and an `All updates ↗` button (lines 608-617). Its category chips are `All · Certification · Chart · Record · Tour · Award` (lines 1091-1098). The site now has seven categories under different names.

### D2. `/timeline`

One responsive page, **no phone component and no artboard** (`app/timeline/page.tsx`; the header comment in `timeline.module.css:1-4` says "not a separate mobile screen"). Data: `app/data/timeline.ts`. **29 entries in 6 eras.** Kinds: 8 Album, 7 First, 2 Award, 7 **Live**, 5 Charts.

Desktop, in order:

1. Breadcrumb `Home / Career Timeline`.
2. Hero: eyebrow `Est. 2010 · 29 dated milestones` (live). H1 `The Career Timeline`. Lede, live: "From Port Harcourt mixtapes to the World Cup Final halftime show — sixteen years, era by era, every milestone dated and linked to the page that holds the working."
3. **Era chips** (`page.tsx:101-107`): six links to anchors, labelled with the era's span: `2010 – 2015` · `2017 – 2019` · `2020 – 2021` · `2022 – 2024` · `2025` · `2026`. They are pills with 7px 14px padding, 11px mono, a 1px border, wrapping (`timeline.module.css:74-92`). **Not sticky.** They appear only at the top.
4. Six eras (`page.tsx:111-144`), each with a gold span, an H2 name, an intro, then entries on a spine. The eras are Port Harcourt to Lagos (4 entries), The World Catches Up (4), The Crown (4), The Giant Era (8), No Sign of Weakness (3), The World Cup Era (6). Each entry has a date, an h3 title, a kind badge (`Album`, `First`, `Award`, **`Live`**, `Charts`; `page.tsx:25-31`), the text, and `See the record →` when it links somewhere. The `Live` badge is gold (`timeline.module.css:225`). `/on-this-day` renamed that kind to "Show" on 26 Sep; this page was not updated.
5. `Still counting` / H2 `Where it stands today`: three linked cells, all live. `248` certifications · 26 countries; `46` No. 1s · 67 countries charted; `$30.46M` the record tour. Then a note linking `latest updates`.
6. Keep exploring (desktop only; the default list).

Phone: the same markup with a back bar added (`page.tsx:73-81`; shown below 900px, `timeline.module.css:290-294`). The desktop breadcrumb and Keep exploring hide.

- **Era chips at 390px, measured:** each chip is 44px tall (the site-wide touch rule for links inside a `<nav>`, `globals.css:1731-1737`, `:1745+`). They wrap to **three rows**: `2010 – 2015`, `2017 – 2019` / `2020 – 2021`, `2022 – 2024`, `2025` / `2026` alone. Chip widths are 115px for a range and 61px for a single year.
- Page height **8,400px** (measured).
- The five-tab bar shows and **no tab is lit** (measured). `/on-this-day` lights Records through a special case in `MobileTabBar.tsx:72-74`; `/timeline` has no such case.

### D3. `/faq` on phone

Data: `app/data/faqs.ts`. **22 questions** in 6 groups (`:36-43`): Burna Boy, the artist (5) · The World Cup (3) · Awards & certifications (3) · Music & charts (4) · Live & touring (4) · The car collection (3). Every figure in the answers is imported from the data files (`:11-33`).

Phone (`app/components/MobileFaq.tsx`, screen 08):

1. Back bar: `FAQ` and a badge **`22 questions`** (live, `faqs.length`). The badge is plain text in muted grey (`mobileFaq.module.css:57-64`), not a link or button. Measured 94×18px.
2. Kicker `Answer first`. H1 `Burna Boy FAQ` at 48px. Lede "Quick, verified answers to the questions people ask most."
3. **Category row** (`MobileFaq.tsx:65-72`): a `<nav>` labelled "Jump to a category", with six links to phone-only anchors (`#m-artist` and so on). It scrolls sideways (`mobileFaq.module.css:104-111`): measured, the row is 1,152px wide inside a 390px screen. The chips are 44px tall pills showing the full group title and a count: `BURNA BOY, THE ARTIST 5` · `THE WORLD CUP 3` · `AWARDS & CERTIFICATIONS 3` · `MUSIC & CHARTS 4` · `LIVE & TOURING 4` · `THE CAR COLLECTION 3`. Only about two fit on screen. No chip ever shows as current, and the row is not sticky.
4. A flat list of all 22. Each item has its group label, the question as an h2 and the answer.
5. Source line, a 96px spacer, and the five-tab bar with no tab lit. Page height **6,287px** (measured).

Desktop (`app/faq/page.tsx:67-132`): the band `Jump to` + the same six chips + `22 questions` on the right. Below it, the groups, each with a **sticky** side column holding the kicker, title and count (`faq.module.css:89`, `top: 86px`).

The design's phone chips are much shorter: `Who he is 5 · World Cup 3 · Awards 3 · Music 4 · Live 4 · Cars 3` (`designs/mobile/Burna Boy Stats - Mobile.dc.html:1064-1071`). With those labels, most of the row fits on screen. The design also ends the screen with `All 22 questions ↗` (line 728).

---

## E. Which artboard defines each page today

Bundle: `design_handoff_burnaboystats/designs/`. Phone artboards are 402×874 (`README.md:205`). Screen titles were found by searching each `.dc.html` for its numbered caption (`NN · Title`).

**Phone, `mobile/Burna Boy Stats - Mobile.dc.html` (screens 01–09):** 01 Home (line 67) · 02 Certifications (240) · 03 Music (318) · 04 Records (414) · 05 Live charts (488) · **06 Updates (567)** · **07 About (634)** · **08 FAQ (695)** · 09 Contact (745).

**Phone, `mobile/Burna Boy Stats - Mobile Deep Pages.dc.html` (screens 10–27):** 10 Official charts (47) · 11 Awards & nominations (138) · **12 Tours & live (222)** · **13 Festivals & shows (329)** · **14 Revenue per show (376)** · 15 Firsts & records (426) · 16 Africa's biggest (464) · 17 By the numbers (536) · 18 Car collection (570; replaced by `mobile/Cars - Mobile.dc.html`) · 19 Visualized (608) · **20 Where he's performed (670)** · **21 Analysis (716)** · **22 Methodology (770)** · **23 Open data API (819)** · 24 Stat cards (884) · 25 The Dai Dai story (946) · 26 Song page (1019) · 27 Search (1091).

| Page | Desktop artboard | Phone artboard | Notes |
|---|---|---|---|
| `/records/tours` | `desktop/Records - Tours.dc.html`. Tickets panel with `Where he's performed ↗` at lines 112-116; `Festivals & shows` card at 181-184; footer `Revenue · Festivals · Tour map · Firsts` at 252-255 | Deep Pages **12** (222-328) | The phone artboard has the map button and two sections the build does not (A2) |
| `/records/tours/festivals` | `desktop/Records - Festivals.dc.html` (hero 101-104; groups 123-133; source 144; `← Tours` 145; footer includes `Tour map` 157) | Deep Pages **13** (329-375) | Counts in both are stale (57/30, "58") |
| `/records/tours/map` | `desktop/Records - Tour Map.html`. Plain HTML, not `.dc.html` (`README.md:53`, `NUMBERS-AND-STATES.md:130`) | Deep Pages **20** (670-715) | The design's action bar is `Open the map`; the build uses `Festivals & shows` |
| `/records/tours/revenue` | `desktop/Records - Revenue Per Show.dc.html` | Deep Pages **14** (376-425) | |
| Home map teaser | **No design.** `desktop/Burna Boy Stats.dc.html` has no globe or map block | Mobile **01** (globe block at 190-222, cells at 1033) | The build uses the phone design on desktop |
| `/curator` | **No design** | **No design** | Nothing in the bundle mentions `/curator` |
| `/press` | **No design** | **No design** | Nothing in the bundle mentions `/press` or "Press kit" |
| `/analysis/spotify-unmerge` | **No design** (`desktop/Analysis.dc.html` has no correction section) | **No design** (Deep 21 has no link to it; the build added the action-bar button itself) | |
| `/analysis` | `desktop/Analysis.dc.html` | Deep Pages **21** | Nearest sibling for the correction page |
| `/methodology` | `desktop/Methodology.dc.html` | Deep Pages **22** | Nearest sibling for `/curator` (prose + "Data last reviewed") |
| `/api` | `desktop/API.dc.html` | Deep Pages **23** | Nearest sibling for `/press` (code boxes + Copy) |
| `/embed` | none | none | Built in the Deep 23 pattern without an artboard |
| `/about` | `desktop/About.dc.html` | Mobile **07** | |
| `/updates` | `desktop/Updates.dc.html` (filter 128-135; month groups 144-154; follow panel 165-172) | Mobile **06** | The design shows a 22-row sample |
| `/timeline` | **No design** | **No design** | |
| `/faq` | `desktop/FAQ.dc.html` (jump band 107-113) | Mobile **08** | The design's chip labels are short (D3) |
| Menu sheet, chrome states | `desktop/App States.dc.html` (panel G, cited at `globals.css:2154-2157`) | covered by the same file | |

---

## F. Where the design files and the build disagree (relevant to this brief)

1. **Phone Tours (screen 12)**: the artboard has a `Where he's performed ↗` button, a `Highest-grossing nights` section and a `Record nights & moments` section. The build has none of them and never did. The artboard's bar says "All tour dates"; the handoff table and the build say Ticketmaster.
2. **Phone Tour map (screen 20)**: the artboard's bar is `Open the map`; the build's is `Festivals & shows`. The artboard says "Ten small island nations" are dots; the data has eight, one of them Kosovo, which is not an island.
3. **Festivals**: the artboards print 57/30 and "58"; the data has 59/32.
4. **Home teaser**: phone-only in the design; on both layouts in the build.
5. **FAQ phone chips**: short labels in the design, full group titles in the build, so the row scrolls 1,152px.
6. **Updates phone**: the design shows the year on dates and a closing `All updates ↗`; the build shows no year and renders all 326 entries.
7. **Tab bar**: the handoff says "05–09 only" in one place and "01–09" in another. The build keeps the tab bar on every screen without an action bar, including the three undesigned pages, `/timeline` and `/updates`.
