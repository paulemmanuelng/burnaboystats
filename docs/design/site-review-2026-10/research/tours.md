# Tours group: independent design review (8 Oct 2026)

I reviewed these five pages as an outside senior product designer working on editorial data products. I judged them the way a fan, a journalist and a search visitor would use them. This is not a debug pass. Every finding respects the owner's rulings. The one place I would ask the owner to look again has its own section at the end.

**Pages:**
- `/records/tours`
- `/records/tours/map` (hovered and tapped a country)
- `/records/tours/revenue`
- `/records/tours/revenue/countries`
- `/records/tours/festivals`

All were checked on the live site https://burnaboystats.com, deployed 8 Oct 2026 (origin/main `e4b0afc8`).

## Method

- **Browser.** Headless Chrome, run only through the local `heavy` lock wrapper (on the owner's machine, not in this repo). Every Chrome I started was closed.
- **Viewports.**
  - Phone: 390×844 with mobile emulation (touch, iPhone UA, dpr 1).
  - Desktop: 1440×900.
  - Tablet band: 1024×768.
- **Captures.** Full-page JPEG at q60, capped at 6,000px.
- **Measurements.** An in-page script, `tools/tours/measure.js`, records the following for every capture:
  - type families and sizes;
  - characters per line (canvas-measured average glyph width);
  - contrast for every text node, with translucent layers composited onto the real ground;
  - tap targets;
  - sticky and fixed bars;
  - accent colours on the first screen and across the page;
  - CLS and LCP (observers injected before load);
  - image and HTML weight.
- **Raw data and tools.** Per-capture JSON is in `tools/tours/data/`. The capture driver is `tools/tours/shoot.mjs`. Crops I used for reading are in `tools/tours/crops/`.
- **Capture artefacts I excluded from findings:**
  1. Display type filled with a gradient (`.inkText`, `-webkit-background-clip: text`) is reported by the script at 1:1 contrast. That is not real.
  2. Fixed action bars show up mid-page in full-page shots. That is an owner-ruled artefact, and I judged each bar at its viewport position.
  3. **The revenue board's bars look empty in `revenue-1440-light.jpg`** (the full-page shot): the share bar is a pale track, and all 82 "Scale" tracks show no fill. In the real page they are drawn. A viewport capture of the same page (`revenue-1440-light-fold.jpg`) shows them, and the DOM confirms it: segments are 829px wide at 65.72%, the `barGrow` animation has finished, and the transform is identity. The cause is Chrome's `captureBeyondViewport` with transform-animated elements. **Not a bug. Don't hand it to a designer.** The 1024 capture shows the same artefact.

**Shots.** Folder: `../shots/tours/` (3.96 MB).

| Set | Files |
|---|---|
| Light, every page | `tours-390-light.jpg`, `tours-1440-light.jpg`, `map-390-light.jpg`, `map-1440-light.jpg`, `revenue-390-light.jpg`, `revenue-1440-light.jpg`, `countries-390-light.jpg`, `countries-1440-light.jpg`, `festivals-390-light.jpg`, `festivals-1440-light.jpg` |
| Dark, the two most important pages (tours hub and map) | `tours-390-dark.jpg` (full); `tours-1440-dark.jpg` (first 1,100px: hero, stat strip, Announced block); `map-390-dark.jpg` (full); `map-1440-dark.jpg` (first 1,000px: the whole map) |
| 1024 band, viewport (nav becomes the hamburger below 1240) | `tours-1024-light.jpg`, `map-1024-light.jpg`, `revenue-1024-light.jpg` |
| Interactions | `map-1440-light-hover-nigeria.jpg` (hover card), `map-390-light-tap-nigeria.jpg` (tap → panel), `tours-390-light-open-itt.jpg` (a tour opened on the phone), `revenue-1440-light-fold.jpg` (true render of the bars) |

Working captures kept out of the 4 MB folder are in `tools/tours/scratch/`:
- uncropped versions (`full-*.jpg`);
- the 1024 captures of countries and festivals, which both adapt cleanly;
- dark first screens of revenue, countries and festivals at both widths;
- keyboard focus on a tour row and on the map;
- the map hover on the USA;
- a revenue capture after a 4s wait.

---

## Strengths to keep

1. **Honest edge states and verification-first copy.**
   - Africa and South America appear on the countries page as hatched cards reading "No reported box office yet" and "Box-office reporting barely reaches venues in Africa — not reported, not unplayed." They are never hidden. (`countries-1440-light.jpg` y≈920–1170; `countries-390-light.jpg` y≈1560–1730.)
   - An em dash means "not reported", never zero, and it carries hidden text for screen readers (`NotReported.tsx`).
   - Announced shows sit outside every total and are labelled "Not yet played — no gross, no attendance".
   - The revenue foot has a four-line glossary: SOURCE / EACH ROW / WHAT IS RANKED / A MISSING NIGHT.

   This is the site's brand, and these pages carry it well.

2. **The gross pages are real editorial data design.**
   - The record night has its own card: $6,147,209, 58,973 tickets, and "130× top night ÷ smallest".
   - The countries hero puts a ranked-bar panel beside the headline (12 countries, his share gold, others grey, with a legend). Each continent card carries a runner-up line ("Next: Asake · $4.28M").
   - Every row names its artist, his included ("Burna Boy · London · 2024"), which holds the owner's rule.
   - Gold stays on his figures: Fally Ipupa's No. 3 gross is ink.
   - At 1024 the board drops its Tour and Year columns into the venue line rather than squeezing them (`revenue-1024-light.jpg`).

3. **The tour map now works on both layouts.**
   - At 1440×900 the whole map is on the first screen, with the frame's foot at y≈905 (`map-1440-light.jpg`).
   - Played and not-played land now read apart: 3.44:1 in light (`#a3742a` on `#efeae1`) and 3.73:1 in dark, up from 1.55 and 2.58 in the 30 Sep brief.
   - There is a Western Europe close-up inset.
   - The hover card stays inside the frame, so it no longer covers the masthead (`map-1440-light-hover-nigeria.jpg`).
   - On the phone, a tap opens an in-flow panel with links to that country's tour dates, festivals and certifications (`map-390-light-tap-nigeria.jpg`).
   - The keyboard reaches the countries with a visible ring (`scratch/map-1440-light-focus.jpg`).

4. **Accessibility basics hold everywhere I measured.**
   - Zero real text-contrast failures on all five pages at 390 and 1440, in both themes.
   - Zero controls under 44px on the tours, revenue, countries and festivals phone screens. The 58 sub-44px targets on the phone map are the country shapes themselves, and the near-tap rule and region views cover them.
   - Tour rows show a visible 2px gold focus ring (`scratch/tours-1440-light-focus.jpg`).
   - No horizontal overflow at 390, 1024 or 1440.

5. **Perceived performance is excellent.**
   - CLS is 0.000 on every capture.
   - LCP is the h1 or lede text, at 88–424ms.
   - No raster images ship on these pages.
   - Compressed HTML is 20–37 KB, even with both layouts in the DOM (countries: 404 KB raw, 36.8 KB on the wire).

6. **Wayfinding scaffolding is in place:**
   - breadcrumbs on desktop;
   - back bars on phones;
   - a footer row of sibling links on the gross pages;
   - "More from the road" on the phone tours screen;
   - the masthead's "Box office" shortcut;
   - a sticky "Jump to" rail on desktop countries;
   - sticky continent chips on the phone.

7. **The two box-office share cards set the standard for the group.** Anton headline, the gold record figure, and a 12-row bar chart inside the 1200×630 card (`tools/tours/og/revenue.png`, `countries.png`).

---

## Findings

Each finding gives: id · kind · impact · layout. Most important first.

### T-01 · design · high · both. Three of the five share cards are the old text-only template; the map's card has no map

- **Evidence.** The OG images were fetched from each page's `og:image` (`tools/tours/og/sheet.png`).
  - `/records/tours/revenue` and `/countries`: Anton uppercase headline, a gold display figure ($6,147,209 / "9 of 12"), and a 12-row bar chart.
  - `/records/tours`, `/records/tours/map` and `/records/tours/festivals`: Geist title-case text on black with no figure in display type and no visual. For example: "Tours & Live / $30.46M — the highest-grossing tour ever by an African artist".
  - **"Where He's Performed" ships without the world map**, which is the most shareable picture in the group.
- **Why it matters.** These cards are what appears when a fan or journalist shares the page. Today the group reads as two products. The most visual page shares as a paragraph.
- **Suggestion.** Bring the three cards into the box-office card system:
  - Map: the world silhouette with played countries in gold, plus "57 countries · 7 regions". The paths are already in `worldShapes.ts`, and satori renders SVG paths.
  - Tours: $30.46M in display type with a six-tour bar strip (gross where reported, a dash where not).
  - Festivals: "32 headlined" plus a strip of years.
- **Rules.** Cards stay gold (owner ruling). Figures stay derived. Bump each card's version key.

### T-02 · build-fix · medium · both. Announced shows never expire

- **Evidence.**
  - `upcomingShows` (`app/data/tours.ts:360`) is printed as stored, on both layouts, on a static page.
  - `tests/upcomingShows.test.ts` checks only the order and the "first" wording.
  - Nothing compares the dates with today.
- **Consequence.** From 26 Oct 2026, the hub will still show "Stade de France · 25 Oct 2026" under "Announced · Not yet played — no gross, no attendance", with the phone badge "3 shows" (`tours-390-light.jpg` y≈505–950; `tours-1440-light.jpg` y≈680–880). Apple Music Hall (29 Oct) follows four days later. For a site whose value is dated accuracy, this is the most likely credibility slip in the group in the next month.
- **Suggestion.**
  - Filter at build: a show whose date has passed moves to "Played · awaiting a box-office report" or drops off.
  - Add a test that fails once an announced date is in the past, in the same pattern as the stale-claims alarm.
  - The 25 Oct show could be the first real case.

### T-03 · design (needs the owner's call on the bar) · medium · both. The page's one gold action is a generic US Ticketmaster page, and nothing announced is on sale

- **Evidence.**
  - Desktop hero: "Tickets · Ticketmaster ↗" is the gold primary button under "Upcoming dates & tickets".
  - Phone: the same link is the fixed 75px action bar on every scroll position.
  - At 1024 the panel stacks under the lede as a 944×46px gold slab plus a 944×46px outline button. The stat strip drops to y≈620 (`tours-1024-light.jpg`).
  - The link is `ticketmaster.com/burna-boy-tickets/artist/2486272`, the US site.
  - The three announced items, in the page's own copy:
    - an NFL halftime show (no ticket of his);
    - Apple Music Hall, "On-sale details are still to come";
    - London Stadium, "No date announced yet".
  - The panel is titled "Upcoming dates & tickets", but the dates sit 300px lower, inside the Tours section.
- **Suggestion.**
  - Make tickets contextual: add `tickets?: string` to `UpcomingShow` and give each announced show its own "Tickets ↗" link only when it has an on-sale URL.
  - Turn the hero panel into the Announced list itself, which matches its label. Keep "Official tour site ↗" as the secondary link.
  - Give the gold action to something on-site while nothing is on sale. On the phone bar that could be "Highest-grossing shows" or "Where he's performed".
  - At 901–1239 keep the panel beside the lede, or size the buttons to their content.
  - The owner decides the bar's destination.

### T-04 · design · medium · both. Tour date tables print venue capacity next to nights whose reported tickets and gross the site already holds

- **Evidence.**
  - The I Told Them… table lists 24 dates. Its columns are Date / Venue / City / Country / Capacity (`tours-1440-light.jpg` y≈1,330–2,510).
  - `tourRevenue.ts` holds 18 single I Told Them nights and 2 runs (Scotiabank, Bell Centre) with tickets and gross.
  - Examples of the gap:

    | Night | Capacity shown | Reported on the board |
    |---|---|---|
    | BMO Stadium, 3 Nov 2023 | 22,000 | 10,684 tickets, $1,224,617 |
    | TD Garden, 2 Mar 2024 | 19,580 | 13,219 tickets, $1,592,684 |

  - On the phone the same column is labelled "Venue capacity" (`tours-390-light-open-itt.jpg`).
- **Why it matters.** A reader, or a journalist skimming, takes the only number on the row for attendance. The site's best per-night facts live on another page with no link between the two.
- **Suggestion.**
  - Desktop: add Tickets and Gross columns, filled from the board by venue, year and date. A run's figure prints once, spanning its nights, never split (owner rule). Show the board rank ("No. 6") as a link to that row. Capacity can stay as a quiet last column.
  - Phone: add a second line under the venue: "13,219 tickets · $1.59M · No. 6 →".
  - The designer draws both layouts separately.

### T-05 · design · medium · phone. The phone tours screen leaves out the Record nights & live milestones and never points to them

- **Evidence.**
  - Desktop `/records/tours` has "Record nights & live milestones" at y 4,385: 17 rows, including the World Cup Final halftime show, the Grammys main stage, Citi Field, the UCL final and the NBA All-Star game. It also has a top-10 gross table at y 3,342.
  - The phone screen (`MobileTours.tsx`) ends after "More from the road" (map, shows board, festivals) and a footnote. Its document height is 2,032px against desktop's 6,652.
  - A phone reader's only route to these milestones is through individual map country cards.
- **Suggestion.** Give the phone its own milestones block in the dense row grammar the phone already uses (year · title · one line; no accordion), or add a fourth "More from the road" row pointing to a milestones view. This is a phone-only design. It is not a copy of the desktop.

### T-06 · build-fix · medium · phone. Phone tour dates paint capacity in the chart-tier cyan

- **Evidence.**
  - `.dateCap` uses `color: var(--cyan)`, Space Mono 12px bold (`app/components/mobileTours.module.css:226–232`).
  - The token is declared as `--cyan: light-dark(#0b6e7e, #8fe3f0); /* Top 10 peak band ONLY */` (`globals.css:263`).
  - On the charts pages cyan means a Top-10 peak, so a figure in that colour reads as a chart tier.
  - Desktop prints the same capacity in ink Geist.
  - Shot: `tours-390-light-open-itt.jpg`, right column.
- **Suggestion.** Use ink or `--text-muted`, Geist, tabular-nums, as desktop does. Add tours to the token's guard if one exists.

### T-07 · build-fix + content · low–medium · both. "Record" means different things by layout, and the desktop green tint has no legend

- **Evidence.**
  - Desktop I Told Them… row: a green outline pill reading "African record". Its CSS comment says "Green outline, not a gold fill: an African-industry record, not one of his own chart or certification numbers" (`tours.module.css:160`).
  - Phone: a gold-ramp filled pill reading "Record" (`mobileTours.module.css:160–172`).
  - Desktop Record nights: the World Cup Final and London Stadium rows carry a 6% green wash (`.momentRecord`). The page never says what it means; the CSS says it stands for the pill "if it appeared here" (`tours-1440-light.jpg` y≈4,447 and 5,016).
  - The 30 Sep brief listed "the unexplained green Record nights tint" as a code-only fix it treated as already handled. It is still unexplained.
- **Suggestion.** Use one record treatment in both layouts: the desktop green outline reading "African record". Put that pill beside the two record-night titles in place of the unlabelled wash.

### T-08 · design · medium · desktop (and phone festivals). On tours and festivals, gold is spent on labels

- **Evidence.** Counted with the measurement script (accent colour on text in `<main>`):
  - Tours desktop: 53 gold text elements. Festivals desktop: 59. The gross pages, which keep gold to his figures: 37 and 35.
  - Every year is gold Anton: 17 on Record nights, 58 on the festivals list.
  - Whole section h2s are gold: "TOURS", "FESTIVALS HEADLINED", "SOLO CONCERTS", "OTHER FESTIVALS & SHOWS". The h1 rule is split word only.
  - The first screen at 1440 shows six gold marks before any figure of his: the h1 split word, the Tickets fill, the "TOURS" h2, the "Announced" tag, and two dates.
  - Phone festivals: all 32 years are 11px gold mono.
- **Rule this keeps.** Gold marks his figures and what is live or an action (box-office brief §3.5; the home's "live-or-action" rule).
- **Suggestion.**
  - Years in ink: Anton for desktop, Geist for phone.
  - Section h2s in ink, with at most one gold split word, as in "HIGHEST-GROSSING **SHOWS**".
  - Announced dates in ink, with the "Announced" tag as the single accent.
  - That leaves the $ figures and the action as the only gold.

### T-09 · design · medium · desktop. Prose in the tours and festivals lists runs to two or three times the site's 62ch measure

- **Evidence** (characters per line, measured):

  | Text | Size | Chars per line | Where |
  |---|---|---|---|
  | Announced notes | 14px | 163–182 | `tours-1440-light.jpg` y 784–1,011 |
  | Tour blurbs and record-night notes | 14.5px | 134–142 | `max-width: 96ch` |
  | Festival notes | 14.5px | 138–141 | |
  | I Told Them… table note | 11.5px mono | ~170 | y≈2,504 |
  | Board source note | 12.5px | 147 | |

  The site's own rule is 62ch. Task B fixed `.chartNote` at 163 characters for exactly this reason.
- **Suggestion.** Cap list prose at `--measure`. Give the freed width to the figure and date column, or simply leave it as air. Set the table note in Geist caption, not mono.

### T-10 · design · low–medium · both. Mono carries content, and the same row reads in two faces across sibling screens

- **Evidence.**
  - These are all 11px Space Mono:
    - phone tour meta ("2023–25 · 302,801 tickets"), date meta ("Los Angeles, USA · Nov 3, 2023") and announced city (`mobileTours.module.css:173, 220, 400`);
    - phone festival place lines (`mobileSections.module.css:73`);
    - phone ticket counts (`mobileRevenue.module.css:212`, in `--dim`).
  - Phone festivals: 76 of about 120 text nodes are 11px mono.
  - The same kind of line on the phone shows board ("Burna Boy · London · 2024") and on the countries screen is Geist 12.5.
  - Desktop revenue: Tickets and Year cells are Space Mono 12px bold, 164 cells. The tours table's cells are Geist 13.5.
- **Rule.** Task B §2.2: mono is for labels; table cells are Geist 13.5 with tabular-nums.
- **Suggestion.** One row grammar across the five phone screens:
  - title in Geist 600;
  - meta in Geist 12.5 muted;
  - figures in Geist tabular or Anton;
  - mono only for column heads, kickers and chips.

### T-11 · design + content · medium · both. Freshness and provenance sit far from the numbers

- **Evidence.**
  - The map prints no date anywhere, though its JSON-LD carries `dateModified`.
  - Phone tours and phone festivals print no date.
  - Revenue and countries say "as of October 2026" only in the foot note, after 82 rows (desktop y≈5,612; phone y≈5,686).
  - Tours desktop states it at y≈6,027. Festivals says "September 2026" at y 6,236.
  - No page in the group links to the open dataset `/api/v1/tours`, which exists, is dated (`updated: 2026-10-07`) and carries the whole board.
- **Suggestion.**
  - Put a one-line provenance caption under each hero, in the home page's pattern. For example: "Reported box office · TouringData (Billboard Boxscore, Pollstar) · checked Oct 2026 · How we verify →". For the map: "Documented shows · updated 7 Oct 2026".
  - Add a "Use this data" link to `/api/v1/tours` next to the source note. A `tours.csv` would match the existing awards and certifications CSVs.

### T-12 · content · low–medium · both. The same quantity gets different numbers and different names on adjacent pages

- **His share:**
  - Shows page: 65.7%, "$40,279,755 of $61,287,882", labelled "His share of the board". This is single nights only (owner's choice).
  - Countries page: 65.3%, "$44.99M of $68.87M reported", labelled "His share of every reported gross". This includes 3 runs (7 nights).
  - Neither page states its basis. A journalist will quote whichever page they landed on.
- **Festival category names:**
  - The third category is "Other appearances" (phone section), "Other festivals & shows" (desktop h2) and "Other big stages" (desktop count cell).
  - "Solo shows" (phone stat) vs "Solo concerts" (section).
  - Kicker: "Festival stages" (phone) vs "Big stages" (desktop).
- **Suggestion.** Add a basis line under each share ("single nights only · 3 runs excluded" / "includes 3 multi-night runs"). Use one name per category in both layouts.

### T-13 · build-fix · medium · both. Map card links drop the reader at the top of the next page

- **Evidence.**
  - `tourMapData.ts:427–428` links "Tour dates on the Tours page" → `/records/tours` and "Festivals & shows" → `/records/tours/festivals`.
  - On the phone (`map-390-light-tap-nigeria.jpg`), tapping Nigeria and then "Tour dates…" opens the tours screen with every tour shut. The one Lagos date is inside Space Drift.
  - The site already supports `#tour=<slug>&date=<day>` (`useTourDeepLink`, used by On This Day).
- **Suggestion.** Deep-link to the country's first dated show, or add a `?country=` filter that opens the matching tours and highlights their rows. Do the same on festivals, highlighting that country's rows.

### T-14 · design · low · phone. Two routes to the same page on the shows screen's first screen

- **Evidence.**
  - "Artists by country →" (secondary, y≈500–540).
  - The gold action bar "Highest-grossing by country" (y 769–844).
  - Both go to `/records/tours/revenue/countries` (`MobileRevenue.tsx:227` and `:364`; `revenue-390-light.jpg`).
  - The owner chose the bar on 4 Oct.
- **Suggestion.** Drop or repoint the secondary button. That frees about 70px, enough to lift the board's third row above the fold.

### T-15 · build-fix · low · phone. Map view chips use an ink-fill active state, not N2

- **Evidence.**
  - `.chipOn { background: var(--text); color: var(--bg) }` (`mobileTourMap.module.css:211–215`). "WORLD" renders as a black pill (`map-390-light.jpg`).
  - The revenue and countries chips on the neighbouring screens use the N2 style: ember edge, wash, ink label.
  - Owner ruling (5 Oct): every chip rail uses N2.
- **Suggestion.** Apply N2. If the designer argues a view switcher is a segmented control and not a chip, that is the owner's call.

### T-16 · design · low · desktop. The map page's left edge doesn't line up

- **Evidence.**
  - The map uses a `.wrap` of 1240px, against 1360 for its four siblings.
  - The h1, stats and map start at x 140, while the breadcrumb and footer start at x 80 (`map-1440-light.jpg`).
  - It is the only page in the group with a stepped left edge.
- **Suggestion.** Align the breadcrumb's inner edge to the map column, or widen the page and re-check that the map foot stays at or above 905px at 1440×900 (owner item 5).

### T-17 · design · low · desktop. The Announced entries run together

- **Evidence.**
  - No rule separates the three entries. "Announced by Apple, 25 September 2026" sits about 16px above "LONDON STADIUM", which is about the same as the spacing inside an entry (`tours-1440-light.jpg` y≈845–905; `tours-1024-light.jpg`).
  - The phone version has dividers.
- **Suggestion.** Hairline dividers and 20–24px between entries, as on the phone. Folds into T-03 if the hero panel becomes the Announced list.

### T-18 · design (ask the owner) · low · phone. Phone festivals is the group's only collapsed list

- **Evidence.**
  - The lede says "Tap a section to open it".
  - 26 of the 58 appearances are behind "Solo concerts (13) +" and "Other appearances (13) +" (`festivals-390-light.jpg` bottom).
  - The owner's standing preference is dense lists with no accordions. This screen came from the handoff (screen 13, `MobileFestivals.tsx` header comment).
- **Suggestion.** Ask Paul whether to open all three sections. That adds about 1,100px of rows he already likes elsewhere.

### T-19 · content · low–medium · both. The home country reads thinnest on the map

- **Evidence.**
  - Nigeria's card: "1 tour date · 1 festival or one-off appearance · 1 city · 2016–2021" (Eko Convention Centre 2021; NATIVELAND 2016). Ghana has one appearance. (`map-1440-light-hover-nigeria.jpg`.)
  - For many fans this is the first country they hover.
- **Suggestion.** This is not a layout fix. Either run a sourcing sweep for Lagos and Accra shows that can be documented, or have the card say plainly that few Nigerian shows are documented yet.

### T-20 · design · low–medium · desktop. Record-night rows are dead ends

- **Evidence.**
  - 17 rows, no links.
  - Most of them already have a home on the site: board rows (London Stadium, Stade de France), On This Day days (dated rows), map countries, and the awards page (the Grammys stage).
- **Suggestion.** Make each row's title link to its evidence: the OTD day where dated, otherwise the board row or the country on the map.

### T-21 · a11y · low · both. "Other artists" bars sit under 3:1 on paper

- **Evidence.**
  - `--other` `#888a93` on its track `--bg-soft-2` `#efeae1` is 2.87:1. WCAG 1.4.11 asks for 3:1 on non-text graphics.
  - Affected: revenue Scale and share bars, and the countries bars (light theme only). In dark it is 3.67:1.
  - Each value is printed beside its bar, so this is not blocking.
- **Suggestion.**
  - `#7a7c85` gives 3.47:1 on the track. The cost: the gap between gold and other drops from 1.58:1 to 1.31:1, so the 2px ground gap between segments has to carry that split.
  - A designer's call.

### Known, not counted

- Phone tours: when a run has no per-date report it reads "No date-level Boxscore report for this run." (`MobileTours.tsx`). This is the same class as the known "Billboard Boxscore" wording follow-up. Figures now come from TouringData.

### Checked and fine

- Countries at 1024: continent cards go 3×2 and the stats 2×2.
- Festivals at 1024: same as desktop, narrower.
- Dark themes on all five pages: no real contrast failures. The dark tours hero's gold button glow and the Announced wash both read well.
- The bars' grow animation respects reduced motion (global rule).
- Map keyboard order starts at Benin. It roves, and the ring is visible.

---

## Ask the owner to reconsider (one item)

**R-1 · per-row sources on the gross boards** (ruling: "Sources are kept in the data and not printed per row"; owner rejected per-row source links; guarded by `tests/revenueSources.test.ts`).

- **Evidence.**
  - All 82 board rows and 3 runs already carry a specific source string in `tourRevenue.ts`. For example: "TouringData, X post of 13 Jun 2024 (I TOLD THEM…)" or "TouringData, I Told Them… Tour table (touringdata.org, via the Internet Archive, snapshot …)".
  - The pages give one generic paragraph, at the foot of an 82-row list (desktop y≈5,612; phone y≈5,686).
  - A journalist checking a single figure, such as "$1,724,853, Capital One Arena, 2024", cannot trace it without leaving the site.
  - For a verification-first site whose second audience is press, this is the trust signal the boards most lack.
- **Low-clutter options, any of which keeps rows clean:**
  1. A numbered source key per row (a small superscript), resolved in one grouped list at the foot. The 85 rows rest on about a dozen distinct posts.
  2. The source shown only in a row's expanded or hover state on desktop, and in a row sheet on the phone.
  3. Publish the source with each row in `/api/v1/tours` and a `tours.csv`, linked from the page. This one doesn't print anything on the page, so it doesn't strictly need the ruling changed.
- **Trade-off.** Some source strings mention "from the owner's screenshot". Each source string would need a public-facing form first.
