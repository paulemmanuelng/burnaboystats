# Research: the tour map (`/records/tours/map`) and the Dai Dai Europe inset

**Written 29 Sep 2026 for a Claude Design session starting cold.** Code read at
`6aae00c8` (branch `docs/design-brief-tour-map`, current `main`). Live pages
measured on burnaboystats.com the same day in headless Chrome. Every claim
below gives its `file:line`. Where the repo does not hold something, this file
says so. It does not guess.

Paths are relative to the repo root. `tours.ts` means `app/data/tours.ts`.
The method (the parser, the arithmetic, the in-browser measuring scripts) is
in [`tour-map-method/`](tour-map-method/), so every derived number can be
re-run.

**Contents**
1. How the map page is built today (desktop, phone, the map itself, every visible string)
2. The data that exists, the data that doesn't, and the derived tables
3. The design review's map claims, re-measured
4. The Dai Dai world map and its Europe inset
5. Parts the site already has that a new tour map can reuse

---

## 0. The short version

- **The map says one thing:** 57 countries in 7 regions, all in one flat gold
  wash (`app/records/tours/map/map.module.css:222-229`). The data behind it
  says much more, and it is uneven. There are 98 dated tour shows, but they
  cover only 13 countries. The other 44 countries are known from festival and
  one-off rows, from a ceremony, or only from the map's own two-line event list.
  Nine countries appear nowhere in the site's data except that list. §2.
- **The review's numbers mostly hold.** Re-measured: 46 of 57 countries under
  12 px on a side on the 375 px phone map, island dots 2.4 px, played vs
  unplayed 1.55:1 in light and 2.58:1 in dark, and the HTML carrying the
  geometry twice (272,008 of 351,475 bytes) plus a 123 KB JS chunk.
  **Two counts were wrong:** there are 59 festival and one-off rows, not 76
  (76 adds the 17 "live moments"), and 26 box-office nights with tickets, not
  28 (the other two rows are two-night stands). §3.
- **The hover card does cover the masthead** at 1440×900, but only in a band
  of scroll positions, not at every scroll. §3.4 gives the band.
- **The Dai Dai Europe inset** is a fixed bottom-left box (31% of the map's
  width) inside the replay's map. At 1440 it hides 95% of Peru and a third of
  Chile. At 1024 it hides all of Panama and Ecuador (both No. 1) and 57% of
  Colombia (No. 1). Moving it bottom-right would hide Australia and New
  Zealand instead. A 200 px box in the same corner hides no charted country
  at either width. On the tour map, the bottom-left and top-right corners
  cover no performed country. §4.
- **The stat strip's figures touch their dividers** because each cell has
  `padding-left: 0` (`app/dai-dai/dai-dai.module.css:319`). §4d.

---

## 1. How the page is built today

### 1a. One route, two layouts in the DOM at once

`app/records/tours/map/page.tsx` renders **both** layouts on every request:

- `<MobileTourMap …/>` (`page.tsx:61-65`). Its root is `display: none` above
  900 px and a flex column at 900 px and below
  (`app/components/mobileTourMap.module.css:5-14`).
- `<div className={styles.desktopOnly}>` (`page.tsx:67-155`). It is
  `display: none` at 900 px and below (`map.module.css:9-10`).

Each layout mounts its own `<PerformanceMap />`: desktop at `page.tsx:91`,
phone at `app/components/MobileTourMap.tsx:64`. That is why the geometry ships
twice in the HTML (§3.5). Each layout has its own `<h1>`, and only one is ever
visible (`MobileTourMap.tsx:50-52`).

The desktop CSS says its values come from `designs/desktop/Records - Tour Map.html`
(`map.module.css:6`). The phone file says it is built from
`designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html`, screen 20
(`MobileTourMap.tsx:12-13`, `mobileTourMap.module.css:1-4`). The design
mocked the phone map with scattered dots. The build renders the real map in
that frame instead (`MobileTourMap.tsx:15-16`).

Metadata (`page.tsx:14-20`), with `{countryCount}` = 57 and `{regionCount}` = 7:
- title "Where Burna Boy Has Performed — Interactive World Map"
- description "An interactive map of every country Burna Boy has performed in — 57 countries across 7 regions. Hover a country to see the shows there."
- share title "Where Burna Boy Has Performed", share description "Every country he's taken to the stage — 57 and counting."
- OG card (`app/records/tours/map/opengraph-image.tsx:7-11`): kicker "Live worldwide", title "Where He's Performed", sub "57 countries across 7 regions — and counting".
- Dataset JSON-LD (`page.tsx:27-33`), name "Countries where Burna Boy has performed live".

### 1b. Desktop, top to bottom (above 900 px)

Column: `max-width: 1240px`, `padding: 0 40px` (`map.module.css:12`).

1. **Breadcrumb bar** (`page.tsx:68`). Labels come from `SEGMENT_LABELS`
   (`app/lib/seo.ts:258,265,268`): "Career Records › Tours & Live › Where He's Performed".
2. **Head** (`page.tsx:70-87`):
   - Kicker **"Live worldwide"** (`:71`). Mono, 11 px, gold (`map.module.css:15-22`).
   - h1 **"Where he's performed"**, with "performed" in gold ink (`:72-74`).
     Anton, 78 px, uppercase (`map.module.css:23-31`), 57 px from 1239 px
     down (`:170-173`).
   - Lede (`:75-79`), verbatim: **"Every country Burna Boy has taken to the stage — from arena tours and stadium nights to festival headline sets. Hover or tap a highlighted country to see shows there."**
   - Counts line (`:80-86`): **"57"** (gold, Anton 58 px) **"COUNTRIES"**, a
     1 px hairline, then **"7"** (ink, not gold) **"REGIONS"**
     (`map.module.css:44-61`). The CSS comment explains the choice: "Regions
     aren't a record — they're the shape of the first number" (`:41-43`).
3. **The map in a frame** (`page.tsx:89-99`). `.frame` has a 1 px `--line`
   border on `--bg-soft` (`map.module.css:64`). The legend is a `figcaption`
   (`page.tsx:93-98`) with two swatches and two strings:
   - square swatch + **"Countries with a confirmed Burna Boy performance"**
   - round swatch + **"Territories too small to shade at 110m"**. Its wording
     is guarded by `tests/tourMap.test.ts:140-144`.
4. **"By region" table** (`page.tsx:101-142`):
   - Kicker **"By region"**, then h2 **"Seven regions, six continents"**.
     Both numbers are derived (`page.tsx:35-52,104`). The comment at
     `page.tsx:35-38` records that the design said "five continents" and why
     the code says six.
   - Column heads **"Region" · "Count" · "Countries"** (`:110-112`).
   - One row per region in `REGION_ORDER` (Africa, Europe, Asia, North America,
     South America, Caribbean, Oceania; `performedCountries.ts:115`). Each row
     has the region name (Anton 17 px, `map.module.css:128-140`), a count, and
     all its countries as **one text string**: `flag + " " + name`, joined by
     `"   ·   "` (`page.tsx:121`). Countries are not links or buttons.
   - Footer row **"Total" · "57" · "7 regions"** (`:126-132`).
   - Note (`:135-141`), verbatim: **"Compiled from his tours, festivals and one-off shows, cross-checked against press and setlist records. Only verified shows are listed. For the full itinerary with dates, venues and grosses, see the Tours page. Country shapes are Natural Earth 110m data (public domain)."** ("Tours page" links to `/records/tours`.)
5. **Three buttons** (`page.tsx:144-154`): **"← Back to tours"** (secondary),
   **"Festivals & shows ↗"** (primary, gold), **"Revenue per show ↗"**
   (secondary). `.pills { padding: 40px 0 72px; }` (`map.module.css:168`)
   overrides `.wrap`'s side padding (`:12`), which is why the row sits 40 px
   left of the column (§3.0, §3.6).

### 1c. Phone, top to bottom (900 px and below)

All values from `MobileTourMap.tsx` and `mobileTourMap.module.css`. The side
gutter is 18 px.

1. **Back bar**, sticky, blurred scrim (`MobileTourMap.tsx:36-45`,
   `mobileTourMap.module.css:17-34`). A 44 px round back button to
   `/records/tours` (css `:35-46`), the label **"TOUR MAP"** (`MobileTourMap.tsx:42`),
   a bare gold **"57"** badge (`:43`, css `:54-61`), and the menu button.
2. **Hero** (`MobileTourMap.tsx:48-59`). Kicker **"Live worldwide"** in ember
   (not gold, css `:65-72`). h1 **"Where he's performed"** at 40 px, with
   "performed" in the display gradient (css `:73-96`). Lede
   **"57 countries across 7 regions."** (`:56-58`).
3. **Map card** (`MobileTourMap.tsx:62-70`). `margin: 0 18px`, 1 px border,
   8 px radius (css `:102`). The same `PerformanceMap`, then a hint strip
   (css `:104-112`), verbatim: **"Same Natural Earth geometry as desktop, fitted to the viewport. Tap a country for its shows."**
4. **Region rows** (`MobileTourMap.tsx:73-85`). One block per region: the
   name (Anton 17 px), the count at the right (gold Anton 19 px), then the
   countries as one mono 11 px paragraph, `flag + " " + name` joined by
   `" · "` (`:81`; css `:115-138`).
5. **Footnote** (`MobileTourMap.tsx:87-92`), verbatim: **"Regions and counts are derived from the same 57-country list the desktop map shades. Eight territories have no usable shape at 110m resolution and are plotted as markers rather than filled — the region list above is the accessible equivalent."**
   `tests/tourMap.test.ts:55-72` parses the phrase "(\w+) territories have no
   usable shape at 110m" and checks the number word against the marker count.
   Any rewrite must keep a sentence that the test can read, or the test must
   change with it.
6. **Fixed action bar** instead of the tab bar (`MobileTourMap.tsx:96-100`,
   css `:151-187`): one gold pill, **"Festivals & shows"**. A 110 px spacer
   keeps the last row clear (css `:148`). The phone screen has no link to
   revenue.

### 1d. The map component (`app/components/PerformanceMap.tsx`, both layouts)

**Geometry.** `worldShapes` holds 175 static SVG paths: Natural Earth 110m in
d3-geo `geoEqualEarth`, viewBox 900 × 470, coordinates rounded to 0.1. The
site has no mapping library (`app/data/worldShapes.ts:1-8`). France is clipped
to the metropole plus Corsica. The US is the contiguous 48, with Alaska and
Hawaii as a separate muted shape, code 1840 (`:2-4`). 49 of the 57 performed
countries have a shape. The other 8 are drawn as dots (§2i).

**Fills** (`map.module.css:218-244`):
- Not performed: `.off`, fill `--bg-soft-2`, stroke 0.4 units of
  `--scrim-base` at 90% (`:219`).
- Performed: `.on`, fill `--gold-wash-base` at 42% over the frame, the same
  stroke (`:222-229`). Hover, focus and the active country fill `--gold-hit`
  (`:230-232`). `--wash-strength` is **not** applied to the map fill, so 42%
  is used in both themes.
- Dot: `.dot`, radius 3.2 units (`PerformanceMap.tsx:173`), fill gold wash at
  75%, stroke 1 unit of `--gold-hit` (`map.module.css:235-244`). The stroke
  scales with the map, because there is no `vector-effect`.

**Zoom** (`PerformanceMap.tsx:14,42-57,134-138`). The **+** and **−**
buttons (aria-labels "Zoom in" / "Zoom out") sit top-right inside the map
(`map.module.css:183-191`). They are 34 px, or 44 px on coarse pointers
(`:192-216`). Each press moves 0.5×, from 1× to 4×, by widening the SVG to
`zoom × 100%` inside a scrolling viewport (`PerformanceMap.tsx:138,142`).
Every zoom change recentres on the middle of the map (`:52-57`), which is
about 0° N 0° E, in the Gulf of Guinea (`app/lib/equalEarth.ts:18-19`).
There is no pinch or drag handling beyond native scrolling of the viewport.
At 1× the viewport has `overflow: hidden` (`PerformanceMap.tsx:138`).

**The card** (`PerformanceMap.tsx:182-201`; styles `map.module.css:246-297`):
- `position: fixed`, `z-index: 50`, `pointer-events: none` (`:247-256`), 230 px
  wide (`PerformanceMap.tsx:13,123-128`). Because of `pointer-events: none`
  the card can never hold a link.
- Content: flag + country name (Anton 17 px, uppercase), then the region
  (mono 11 px, gold), then at most **two** events from
  `performedCountries[].events` (`.slice(0, 2)`, `:194`), then **"…and more"**
  in dim mono if the hand-set `more: true` flag is on (`:198`). An arrow
  points at the country (`:199`).
- Placement: centred on the country's bounding box. It goes **above** the
  country if the country's top edge is more than 174 px from the top of the
  window (`CARD_EST_H + 24`, `:15,120`), otherwise **below**. It is clamped
  8 px from each side (`:121`). The sticky masthead is not taken into account
  (§3.4).
- Opens on: mouse enter (`:92`), click or tap (`:94-97`), keyboard focus
  (`:98`), Enter or Space (`:107-110`). Closes on: mouse leave (`:93`), blur
  (`:99`), Escape (focus stays, `:101-106`), a tap on the ocean (`:147-150`),
  any zoom change (`:43,47`), and any page or map scroll, **unless** a
  keyboard-focused country caused the scroll, in which case the card
  re-anchors (`:59-83`; helper `app/lib/mapFocus.ts:10-19`).

**Keyboard.** Every performed shape and dot is its own Tab stop (`tabIndex: 0`,
`role="button"`, `:88-89`). There are 57 stops. Their order is the order of
the geometry file (shapes first, then the 8 dots), **not** region or
alphabetical order: Tanzania, Canada, United States, Kenya, Haiti, Bahamas,
Norway, South Africa, Mexico, Brazil, … (the order of performed codes in
`worldShapes.ts:9`, derived in `tour-map-method/`). Each stop's accessible
name is "Name: event 1; event 2 and more" (`:91`). The SVG is
`role="group"`, labelled "World map highlighting the countries Burna Boy has
performed in" (`:143-146`). The focus style is only a fill change:
`outline: none` on `.on` and `.dot` (`map.module.css:228,241`). There is no
skip link.

**Other pages that read the same data or links:**
- Home "Where he's performed" globe teaser (`app/components/GlobeTeaser.tsx:35-77`):
  kicker "Live worldwide", h2 "Where he's / performed", lede "57 countries,
  seven regions — every stage he's taken.", four cells (the three largest
  regions, then "Rest", `:25-33`), and foot "Oceania added Oct 2025" · "Open
  the map ↗" (`:73-74`; the "Oct 2025" string is typed).
- Desktop Tours page: a "Where he's performed ↗" button inside the tickets
  panel (`app/records/tours/page.tsx:131-133`).
- **The phone Tours screen (`app/components/MobileTours.tsx`) has no link to
  the map.** Its only outbound link is Ticketmaster (`:201`).
- Also linked from `/music/listeners` (`app/music/listeners/page.tsx:181`, and
  the phone action bar `MobileListeners.tsx:137`), `/records/visualized`
  (`page.tsx:616`), the press kit stat (`app/press/page.tsx:58`), by-the-numbers
  (`app/data/byTheNumbers.ts:88`), the record books list
  (`app/lib/recordBooks.ts:34`), nav link groups (`app/lib/links.ts:64,279,297`)
  and search (`app/lib/searchIndex.ts:308`).

---

## 2. The data

### 2a. What exists, field by field

| File | Rows | Fields | Notes |
|---|---|---|---|
| `performedCountries.ts:37-110` | 57 countries | `name`, `code` (ISO numeric = the shape id), `region` (7 values), `flag`, `events` (strings like "London Stadium (2023 & 2024)"), `more?` (hand-set boolean), `marker?` (x, y in map units) (`:20-35`) | **This is the map's only input.** `events` are free text. The year is inside the string and has no field. `more` is typed by hand. A test checks only that countries with more than two tour dates carry it (`tests/tourMap.test.ts:123-138`). |
| `tours.ts:43-243` `tours[].dates` | 98 dated shows in 6 tours | `date` ("Oct 16, 2025"), `venue`, `city`, `country` ("USA", "UK" or a full name), `cap?` (`:17-23`) | `cap` is the venue's **listed capacity**, not attendance (`:4-5`). 80 of 98 rows have it. Itineraries start in 2018 (Life on the Outside, `:205-242`). Space Drift is flagged `partial: true` (`:158`), because not every date is documented. |
| `tours.ts:25-41` `tours[]` | 6 tours | `name`, `years`, `gross?`, `tickets?`, `shows?`, `meta?`, `note`, `record?`, `partial?` | Tour-level gross: I Told Them… $30.46M / 302,801 / 22 reported shows (`:76-86`). Love, Damini "$11.8M" (`:133`). The other tours have none. |
| `tours.ts:367-407` `festivals` | 32 | `year`, `date?` (ISO), `name`, `location` (free text), `note` (`:353-364`) | Festivals he **headlined**. |
| `tours.ts:410-424` `otherShows` | 13 | same | Festivals and one-offs where he was **not** the headliner. |
| `tours.ts:428-445` `concerts` | 14 | same | Standalone headline concerts outside a routed tour. |
| `tours.ts:331-349` `liveMoments` | 17 | `year`, `date?`, `title`, `text`, `record?` (`:245-258`) | Ceremonies, award shows and record nights. **No location field.** 7 repeat a dated tour show or a concerts row (London Stadium 2023 and 2024, Citi Field, MSG, Stade de France, Red Rocks, and Jamaica). |
| `tours.ts:284-329` `upcomingShows` | 3 | `venue`, `city`, `country`, `when`, `cap?`, `note`, `source` (`:272-282`) | Announced, not played: Stade de France 25 Oct 2026 (NFL halftime), Apple Music Hall London 29 Oct 2026 (cap 600), London Stadium "2027". Counted in no total (`:263-266`). |
| `tourRevenue.ts:30-80` `revenueShows` | 41 rows, **26 of them Burna Boy** | `artist`, `venue`, `city`, `flag`, `tour`, `year`, `tickets?`, `revenue` (USD) (`:12-21`) | Boxscore / TouringData **per-night** gross. All 26 Burna rows have tickets. The file is "as of" September 2026 (`:10`). |
| `tourRevenue.ts:103-106` `revenueStands` | 2 | `venue`, `city`, `dates`, `shows`, `tickets`, `revenue` (`:91-101`) | Toronto 24–25 Feb 2024 (29,579 tickets, $2,801,928) and Montreal 28–29 Feb 2024 (26,303, $1,904,384): **two-night totals with no per-night figure**. The file forbids splitting them (`:23-29,82-90`). |
| `listeners.ts:42-93` | 50 cities | `city`, `country`, `code`, `numeric`, `lon`, `lat`, `listeners` (`:27-37`) | Spotify top-50 cities, read 24 Sep 2026 (`:21`). **The only city coordinates in the repo.** 20 of the 51 tour-date cities are in it (counting its "New York City" as New York), as are 14 of the festival and one-off cities, some of which are also tour cities (`tour-map-method/`). |

### 2b. What does not exist

- **No country field on festival, one-off or concert rows.** `location` is
  free text ("Muri Okunola Park, Lagos", "Paramaribo", "Jamaica",
  "St Kitts & Nevis"; `tours.ts:390,441,434,368`). This research maps all 59
  by hand (the table is in `tour-map-method/derive.py`). Three rows name no
  city: St Kitts Music Festival (`:368`), Coca-Cola Food Fest, Mauritius
  (`:399`), and Glastonbury, "Worthy Farm, UK" (`:415`).
- **No coordinates for any venue or tour city**, except where a city happens
  to be in `listeners.ts`.
- **No attendance (headcount) field.** Headcounts only appear in prose notes:
  Reggae Land "before 35,000" (`tours.ts:386`), GTCO Accra "30,000+" (`:387`),
  Stell'Air "about 20,000" (`:394`), Gurtenfestival "18,000" (`:403`), Guyana
  "about 20,000" (`:438`), Jamaica "about 19,000" (`:434`, `:346`), London
  Stadium 2023 "about 60,000" (`:340`), the Lionesses parade "65,000" (the
  FA's figure, `:337`). The only ticket counts are the 26 Boxscore nights and
  the 2 stands.
- **No per-country "first show" date.** Itineraries start in 2018, and the
  festival and one-off lists are selective. An "earliest documented year" is
  not a first (the review makes the same point in its plan, step 10).
- **No link target per country or per tour on `/records/tours`.** The page's
  only `id` is `main#content` (`app/records/tours/page.tsx:74`). The phone's
  tour panels have generated ids (`app/components/ToursExplorer.tsx:74`).
- **No country ↔ show join anywhere in code.** The card reads only the
  hand-written `events`. `tests/tourMap.test.ts:123-133` is the only place
  that counts tour dates per country, and it does so only to police `more`.
- **Nights, not rows.** One row can stand for several nights: FITZ Madrid is
  "Two nights" (`tours.ts:436`), Coachella 2019 is "across both weekends"
  (`:411`), and Ireland's map event is "3Arena, Dublin (Mar & Dec 2022)"
  (`performedCountries.ts:64`). Row counts undercount nights.

### 2c. Method

`tour-map-method/derive.py` reads the four data files as text. Every row is a
one-line object literal, so regex is enough. It:
1. maps `tours[].dates[].country` "USA"/"UK" to the map's names (the same
   alias `tests/tourMap.test.ts:124` uses);
2. maps each festival, one-off and concert `location` to a country and a city
   with a hand table (59 rows, every one listed in the script);
3. places a live moment only where its text names the place. It drops the 7
   that repeat a dated show or a concerts row, and treats "One World: Together at Home" as a
   broadcast (`tours.ts:348`), not a show;
4. joins revenue rows to countries by their flag, and to dated shows by
   venue + year;
5. reads the bounding box of every shape from `worldShapes.ts:9`.

`gen_md.py` prints the tables below. `analysis.py` does the on-screen sizes
and the contrast.

### 2d. Totals (derived, 29 Sep 2026)

| Figure | Value | Where it comes from |
|---|---|---|
| Countries on the map | **57** (49 shapes + 8 dots) | `performedCountries.ts:117` |
| Regions | **7** (six continents) | `performedCountries.ts:118`, `page.tsx:39-52` |
| Dated tour shows | **98** | `tours.ts` `dates` rows |
| … in countries | **13**: US 50, Canada 14, UK 10, Germany 5, Australia 4, Netherlands 3, Belgium 3, Switzerland 3, France 2, Sweden 1, Denmark 1, Nigeria 1, Barbados 1 | same |
| … in distinct city names | **51** (as typed, so "Inglewood", "Elmont, NY", "Irving" and "Morrison, CO" each count separately from LA, New York, Dallas and Denver) | same |
| … years | **2018–2026** (30 May 2018 to 23 Jan 2026) | `tours.ts:211`, `:70` |
| Festival and one-off rows | **59** = 32 headlined + 13 other + 14 concerts; 31 have a day-level date; they cover 41 countries | `tours.ts:367-445` |
| City names across tour and festival rows | **92** distinct strings (51 tour + 41 festival-only), with the same caveat | derived |
| Live moments | 17: 7 repeat a show, 3 name no place, 1 is a broadcast, and 6 add a placed appearance (Mexico, Morocco, Turkey, the UK parade, two in the US) | `tours.ts:331-349` |
| Box-office nights (Burna, per night, with tickets) | **26**, plus 2 two-night stands | `tourRevenue.ts:30-80,103-106` |
| Documented years, all sources | **2014–2026** (2014 comes only from the Uganda event text "Club MegaFest, Namboole Stadium (2014)", `performedCountries.ts:43`; the earliest row is NATIVELAND, 22 Dec 2016, `tours.ts:390`) | derived |
| **Biggest night by reported tickets** | **London Stadium, 29 Jun 2024: 58,973 tickets, $6,147,209** (I Told Them… Tour) | `tourRevenue.ts:31`, `tours.ts:116`, `tours.ts:338` |

"Biggest night" needs its qualifier. By **tickets** it is London Stadium 2024.
The prose also gives London Stadium 2023 "about 60,000 fans" (`tours.ts:340`),
a press headcount with no ticket count. Citi Field 2023 (capacity 41,922,
`tours.ts:151`) has no Boxscore row. Any "biggest night" line must say
"reported tickets".

### 2e. By region

| Region | Countries | Dots | Dated tour shows | Festival / one-off rows | Countries with a dated show |
|---|---|---|---|---|---|
| Africa | 19 | 1 | 1 | 15 | 1 |
| Europe | 19 | 1 | 28 | 25 | 8 |
| Asia | 1 | 0 | 0 | 1 | 0 |
| North America | 3 | 0 | 64 | 7 | 2 |
| South America | 3 | 0 | 0 | 3 | 0 |
| Caribbean | 10 | 6 | 1 | 7 | 1 |
| Oceania | 2 | 0 | 4 | 1 | 1 |
| **Total** | **57** | **8** | **98** | **59** | **13** |

Africa has as many countries as Europe (19 each) but one dated show, against
Europe's 28. A map shaded by show count would make Africa almost disappear.
That is a true reading of what the site has documented, not of where he has
played.

### 2f. Every country (57)

Columns: dated shows and festival or one-off rows with their `tours.ts`
lines, other placed moments (live moments that add a place, with their
`tours.ts` line), distinct cities (tour-date cities · all cities),
years documented (all sources, including the map's own event text), biggest
reported night by tickets, and how the map draws the country.

| Region | Country | Dated tour shows (tours.ts lines) | Festival / one-off rows (tours.ts lines) | Other placed moments | Distinct cities (tour · all) | Years documented | Biggest reported night (tickets) | Drawn as | Source note |
|---|---|---|---|---|---|---|---|---|---|
| Africa | 🇳🇬 Nigeria | 1 (163) | 2 (390, 433) | — | 1 · 1 | 2016–2021 | not reported | shape | the one dated show (tours.ts:163) is the same night as the concerts row tours.ts:433 |
| Africa | 🇿🇦 South Africa | 0 | 1 (389) | — | 0 · 1 | 2022 | not reported | shape |  |
| Africa | 🇬🇭 Ghana | 0 | 1 (387) | — | 0 · 1 | 2025 | not reported | shape |  |
| Africa | 🇰🇪 Kenya | 0 | 1 (388) | — | 0 · 1 | 2025 | not reported | shape |  |
| Africa | 🇺🇬 Uganda | 0 | 1 (435) | — | 0 · 1 | 2014–2019 (rows from 2019) | not reported | shape |  |
| Africa | 🇿🇼 Zimbabwe | 0 | 1 (432) | — | 0 · 1 | 2022 | not reported | shape |  |
| Africa | 🇲🇦 Morocco | 0 | 1 (369) | AFCON 2025 Fan Zone grand finale 2026 (:334) | 0 · 1 | 2024–2026 | not reported | shape |  |
| Africa | 🇪🇬 Egypt | 0 | 1 (429) | — | 0 · 1 | 2026 | not reported | shape |  |
| Africa | 🇷🇼 Rwanda | 0 | 1 (439) | — | 0 · 1 | 2019 | not reported | shape |  |
| Africa | 🇸🇳 Senegal | 0 | 1 (395) | — | 0 · 1 | 2022 | not reported | shape |  |
| Africa | 🇨🇮 Côte d'Ivoire | 0 | 1 (394) | — | 0 · 1 | 2024 | not reported | shape |  |
| Africa | 🇧🇯 Benin | 0 | 0 | — | 0 · 0 | 2025 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:50: “WeLoveYa Festival, Cotonou (2025)”) |
| Africa | 🇨🇲 Cameroon | 0 | 0 | — | 0 · 0 | 2019 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:51: “SBO Show, Douala (2019)”) |
| Africa | 🇹🇿 Tanzania | 0 | 0 | — | 0 · 0 | 2019 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:52: “Next Door, Dar es Salaam (2019)”) |
| Africa | 🇿🇲 Zambia | 0 | 0 | — | 0 · 0 | 2019 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:53: “Lusaka Showgrounds (2019)”) |
| Africa | 🇧🇼 Botswana | 0 | 0 | — | 0 · 0 | 2017 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:54: “National Stadium, Gaborone (2017)”) |
| Africa | 🇳🇦 Namibia | 0 | 1 (443) | — | 0 · 1 | 2022 | not reported | shape |  |
| Africa | 🇪🇹 Ethiopia | 0 | 1 (440) | — | 0 · 1 | 2017 | not reported | shape |  |
| Africa | 🇲🇺 Mauritius | 0 | 1 (399) | — | 0 · 0 | 2025 | not reported | dot |  |
| Europe | 🇬🇧 United Kingdom | 10 (116, 118, 150, 160, 200–202, 238–240) | 3 (386, 415–416) | England Lionesses' Euro victory parade 2025 (:337) | 5 · 6 | 2018–2026 | London Stadium 2024, 58,973 (tourRevenue.ts:31) | shape |  |
| Europe | 🇫🇷 France | 2 (117, 162) | 1 (401) | — | 1 · 1 | 2021–2025 | Stade de France 2025, 43,881 (tourRevenue.ts:32) | shape |  |
| Europe | 🇳🇱 Netherlands | 3 (165–166, 198) | 1 (371) | — | 2 · 2 | 2019–2026 | not reported (the Ziggo Dome 2022 gross, 17,000, was held off the board 3 Oct 2026 until a Billboard Boxscore or Pollstar report is found) | shape |  |
| Europe | 🇧🇪 Belgium | 3 (70, 105, 197) | 0 | — | 2 · 2 | 2019–2026 | Sportpaleis 2023, 8,266 (tourRevenue.ts:67) | shape |  |
| Europe | 🇮🇪 Ireland | 0 | 0 | — | 0 · 0 | 2022 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:64: “3Arena, Dublin (Mar & Dec 2022)”) |
| Europe | 🇪🇸 Spain | 0 | 2 (400, 436) | — | 0 · 2 | 2025–2026 | not reported | shape |  |
| Europe | 🇮🇹 Italy | 0 | 1 (437) | — | 0 · 1 | 2020 | not reported | shape |  |
| Europe | 🇩🇪 Germany | 5 (103–104, 123, 127, 199) | 3 (402, 405, 420) | — | 2 · 3 | 2019–2025 | Lanxess Arena 2023, 14,260 (tourRevenue.ts:41) | shape |  |
| Europe | 🇨🇭 Switzerland | 3 (69, 146, 164) | 2 (403–404) | — | 2 · 4 | 2022–2026 | Hallenstadion 2022, 8,827 (tourRevenue.ts:63) | shape |  |
| Europe | 🇸🇪 Sweden | 1 (67) | 0 | — | 1 · 1 | 2026 | not reported | shape |  |
| Europe | 🇳🇴 Norway | 0 | 1 (422) | — | 0 · 1 | 2024 | not reported | shape |  |
| Europe | 🇩🇰 Denmark | 1 (68) | 1 (396) | — | 1 · 2 | 2023–2026 | not reported | shape |  |
| Europe | 🇫🇮 Finland | 0 | 1 (370) | — | 0 · 1 | 2025 | not reported | shape |  |
| Europe | 🇵🇹 Portugal | 0 | 6 (372–374, 377–378, 421) | — | 0 · 2 | 2019–2026 | not reported | shape |  |
| Europe | 🇷🇴 Romania | 0 | 1 (419) | — | 0 · 1 | 2024 | not reported | shape |  |
| Europe | 🇹🇷 Turkey | 0 | 0 | UEFA Champions League Final 2023 (:342) | 0 · 1 | 2023 | not reported | shape | **known only from a ceremony / live moment** |
| Europe | 🇬🇷 Greece | 0 | 1 (398) | — | 0 · 1 | 2021 | not reported | shape |  |
| Europe | 🇦🇹 Austria | 0 | 0 | — | 0 · 0 | 2020 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:77: “Gasometer, Vienna (2020)”) |
| Europe | Kosovo (no flag, `performedCountries.ts:78-79`) | 0 | 1 (393) | — | 0 · 1 | 2024 | not reported | dot |  |
| Asia | 🇦🇪 United Arab Emirates | 0 | 1 (418) | — | 0 · 1 | 2019 | not reported | shape |  |
| North America | 🇺🇸 United States | 50 (53–63, 90–91, 101–102, 106, 111–115, 138–143, 145, 147–149, 151, 161, 167, 178, 189–196, 211, 216–217, 224, 229–231) | 7 (375–376, 411–414, 423) | NBA All-Star Game halftime show 2023 (:343); Billboard Music Awards 2022 (:345) | 25 · 30 | 2018–2025 | Capital One Arena 2022, 14,688 (tourRevenue.ts:39) | shape |  |
| North America | 🇨🇦 Canada | 14 (64–66, 92–93, 107–110, 144, 182–184, 188) | 0 | — | 4 · 4 | 2019–2025 | Scotiabank Arena 24–25 February 2024: 29,579 over 2 shows, no per-night figure (tourRevenue.ts:104); Centre Bell 28–29 February 2024: 26,303 over 2 shows, no per-night figure (tourRevenue.ts:105) | shape |  |
| North America | 🇲🇽 Mexico | 0 | 0 | FIFA World Cup Opening Ceremony 2026 (:333) | 0 · 1 | 2026 | not reported | shape | **known only from a ceremony / live moment** |
| South America | 🇧🇷 Brazil | 0 | 1 (417) | — | 0 · 1 | 2025 | not reported | shape |  |
| South America | 🇬🇾 Guyana | 0 | 1 (438) | — | 0 · 1 | 2024 | not reported | shape |  |
| South America | 🇸🇷 Suriname | 0 | 1 (441) | — | 0 · 1 | 2022 | not reported | shape |  |
| Caribbean | 🇯🇲 Jamaica | 0 | 1 (434) | — | 0 · 1 | 2022 | not reported | shape |  |
| Caribbean | 🇨🇼 Curaçao | 0 | 1 (442) | — | 0 · 1 | 2022 | not reported | dot |  |
| Caribbean | 🇧🇧 Barbados | 1 (137) | 0 | — | 1 · 1 | 2022 | not reported | dot |  |
| Caribbean | 🇧🇸 Bahamas | 0 | 1 (406) | — | 0 · 1 | 2024 | not reported | shape |  |
| Caribbean | 🇰🇳 St Kitts & Nevis | 0 | 1 (368) | — | 0 · 0 | 2023 | not reported | dot |  |
| Caribbean | 🇩🇲 Dominica | 0 | 1 (392) | — | 0 · 1 | 2022 | not reported | dot |  |
| Caribbean | 🇹🇹 Trinidad & Tobago | 0 | 1 (397) | — | 0 · 1 | 2022 | not reported | shape |  |
| Caribbean | 🇭🇹 Haiti | 0 | 0 | — | 0 · 0 | 2020 | not reported | shape | **known only from the map's own events list** (performedCountries.ts:103: “Live in Haiti (2020)”) |
| Caribbean | 🇱🇨 Saint Lucia | 0 | 1 (444) | — | 0 · 1 | 2024 | not reported | dot |  |
| Caribbean | 🇦🇬 Antigua & Barbuda | 0 | 0 | — | 0 · 0 | 2022 | not reported | dot | **known only from the map's own events list** (performedCountries.ts:105: “Sir Vivian Richards Stadium (2022)”) |
| Oceania | 🇦🇺 Australia | 4 (49–52) | 0 | — | 4 · 4 | 2025 | Qudos Bank Arena 2025, 10,401 (tourRevenue.ts:51) | shape |  |
| Oceania | 🇳🇿 New Zealand | 0 | 1 (391) | — | 0 · 1 | 2025 | not reported | shape |  |

The columns above are raw rows. What each country's card says once the brief's
counting rules are applied (a row that repeats a tour date counted once, live
milestones counted apart, one years rule, one biggest line), together with each
country's best chart peak, plaque count and certifications board, is in
[`countries.md`](countries.md) (added 30 Sep 2026).

### 2g. The six tours

| Tour (years) | Dated shows | Countries | Cities | First – last date | tours.ts lines |
|---|---|---|---|---|---|
| No Sign of Weakness Tour | 22 | 7 | 21 | Oct 16, 2025 – Jan 23, 2026 | 49–70 |
| I Told Them… Tour | 24 | 6 | 20 | Nov 3, 2023 – Aug 15, 2025 | 90–93, 101–118, 123, 127 |
| Love, Damini Tour | 15 | 5 | 15 | Jul 17, 2022 – Jul 8, 2023 | 137–151 |
| Space Drift World Tour (`partial`) | 8 | 6 | 8 | Aug 27, 2021 – Apr 28, 2022 | 160–167 |
| African Giant Tour | 19 | 6 | 19 | Apr 1, 2019 – Nov 9, 2019 | 178, 182–184, 188–202 |
| Life on the Outside Tour | 10 | 2 | 10 | May 30, 2018 – Oct 25, 2018 | 211, 216–217, 224, 229–231, 238–240 |

The I Told Them… itinerary lists 24 dates, but its gross covers the **22**
shows that box office was reported for (`tours.ts:78-86`). Do not label the
22 as "dates".

### 2h. The 26 box-office nights (Burna Boy rows, by tickets)

| Night | Tour | Tickets | Gross (USD) | tourRevenue.ts | In tours.ts itinerary? |
|---|---|---|---|---|---|
| London Stadium, London 2024 | I Told Them… Tour | 58,973 | 6,147,209 | :31 | yes |
| Stade de France, Paris 2025 | I Told Them… Tour | 43,881 | 4,528,368 | :32 | yes |
| La Défense Arena, Paris 2023 | Love, Damini Tour | 36,585 | 2,863,340 | :34 | **no** |
| ~~Ziggo Dome, Amsterdam 2022~~ | Space Drift Tour | ~~17,000~~ | ~~1,564,720~~ | held off the board 3 Oct 2026, until a Billboard Boxscore or Pollstar report is found | yes |
| The O2 Arena, London 2021 | Space Drift Tour | 15,165 | 1,347,333 | :42 | yes |
| Capital One Arena, Washington, D.C. 2022 | Love, Damini Tour | 14,688 | 1,434,525 | :39 | yes |
| Lanxess Arena, Cologne 2023 | I Told Them… Tour | 14,260 | 1,386,581 | :41 | yes |
| Capital One Arena, Washington, D.C. 2024 | I Told Them… Tour | 13,892 | 1,724,853 | :35 | yes |
| Madison Square Garden, New York 2022 | Space Drift Tour | 13,586 | 1,576,641 | :37 | yes |
| State Farm Arena, Atlanta 2024 | I Told Them… Tour | 13,331 | 1,394,173 | :40 | yes |
| TD Garden, Boston 2024 | I Told Them… Tour | 13,219 | 1,592,684 | :36 | yes |
| Co-op Live, Manchester 2025 | I Told Them… Tour | 13,204 | 1,338,176 | :43 | yes |
| State Farm Arena, Atlanta 2022 | Love, Damini Tour | 12,753 | 905,024 | :57 | yes |
| Mercedes-Benz Arena, Berlin 2023 | I Told Them… Tour | 11,839 | 1,089,184 | :52 | yes |
| BMO Stadium, Los Angeles 2023 | I Told Them… Tour | 10,684 | 1,224,617 | :44 | yes |
| Qudos Bank Arena, Sydney 2025 | No Sign of Weakness Tour | 10,401 | 1,116,628 | :51 | yes |
| Oakland Arena, Oakland 2023 | Love, Damini Tour | 9,436 | 885,278 | :58 | yes |
| Hallenstadion, Zurich 2022 | Love, Damini Tour | 8,827 | 822,939 | :63 | yes |
| Sportpaleis, Antwerp 2023 | I Told Them… Tour | 8,266 | 781,236 | :67 | yes |
| Sidney Myer Music Bowl, Melbourne 2025 | No Sign of Weakness Tour | 8,237 | 805,250 | :65 | yes |
| Addition Financial Arena, Orlando 2022 | Love, Damini Tour | 7,137 | 636,923 | :71 | yes |
| RAC Arena, Perth 2025 | No Sign of Weakness Tour | 6,835 | 644,871 | :70 | yes |
| Amalie Arena, Tampa, FL 2024 | I Told Them… Tour | 5,890 | 580,424 | :73 | yes |
| Wintrust Arena, Chicago 2024 | I Told Them… Tour | 5,775 | 674,283 | :69 | yes |
| Hard Rock Live, Hollywood, FL 2024 | I Told Them… Tour | 5,591 | 965,925 | :54 | yes |
| Brisbane Entertainment Centre, Brisbane 2025 | No Sign of Weakness Tour | 5,473 | 556,874 | :76 | yes |

One row, **La Défense Arena, Paris 2023 (36,585 tickets, `tourRevenue.ts:34`),
has no matching date in the Love, Damini itinerary** (`tours.ts:136-152`).
France's dated shows are only Accor Arena 2021 and Stade de France 2025.
Anything built on a join between these two files must handle an unmatched
night.

### 2i. The eight dots

| Territory | Why it is a dot | Marker (map units) | performedCountries.ts |
|---|---|---|---|
| Mauritius | island, no 110m shape | 589.6, 302.6 | :57 |
| Kosovo | small and landlocked, no 110m shape (and no emoji flag, `:78-79`) | 495.5, 98.7 | :80 |
| Curaçao | island | 273.5, 194 | :97 |
| Barbados | island | 303, 190.8 | :98 |
| St Kitts & Nevis | island; nudged apart from Antigua so the two can be hovered (`:29-33`) | 294.1, 176.4 | :100 |
| Dominica | island | 299.2, 183.4 | :101 |
| Saint Lucia | island | 299.7, 188.4 | :104 |
| Antigua & Barbuda | island; nudged (`:29-33`) | 301.2, 178.5 | :105 |

Six of the eight are Caribbean islands, inside a box about 30 × 18 map
units (x 273.5–303, y 176.4–194). At 375 px that box is 11 × 7 px.
`tests/tourMap.test.ts:27-80` requires every unshaped country to have a
marker, and no shaped country to have one.

### 2j. Data caveats a design must carry

1. **Itineraries start in 2018** (`tours.ts:205-242`). There is no documented
   routing before Life on the Outside. Anything like "since 2018", "first
   show" or "reach over time" is about the documentation, not the career.
2. **Nigeria has one dated show**, The Live Experience, Lagos, 27 Dec 2021
   (`tours.ts:163`). The concerts list has **the same night** a second time
   (`tours.ts:433`). The only other Nigeria row is NATIVELAND 2016
   (`:390`). A map sized by shows would make his home country one of the
   smallest marks.
3. **Nine countries appear only in the map's own event text.** Benin,
   Cameroon, Tanzania, Zambia, Botswana, Ireland, Austria, Haiti and Antigua &
   Barbuda have no row in `tours`, `festivals`, `otherShows` or `concerts`
   (lines in §2f). Any derived count (dates, cities, years) is **zero or
   empty** for them unless new rows are added.
4. **Two countries are known only from a ceremony.** Mexico: the FIFA World
   Cup Opening Ceremony (`tours.ts:333`, `performedCountries.ts:88`). Turkey:
   the UEFA Champions League final kick-off show (`tours.ts:342`,
   `performedCountries.ts:75`). Morocco has a festival row (Mawazine 2024,
   `:369`) plus the AFCON finale (`:334`).
5. **44 of 57 countries have no dated tour show.** Per-country "dates" means
   tour dates for 13 countries, and festival or one-off rows (years, some with
   a day) for the rest.
6. **The US's biggest reported night is an arena** (Capital One Arena 2022,
   14,688, `tourRevenue.ts:39`), because Citi Field 2023 has no Boxscore row.
   Canada has only two-night totals. "Biggest night" per country is missing
   for 49 of 57 countries.
7. **Three live moments name no place**: the 2026 World Cup Final halftime
   show (`tours.ts:332`), the 2024 Grammys stage (`:339`) and the 2021 Grammy
   Premiere Ceremony (`:347`). The halftime show was at MetLife Stadium, and
   `/dai-dai` says so (`app/dai-dai/page.tsx:161,342`), but `tours.ts` doesn't.
   So the US's derived year span ends at 2025, not 2026.
8. The `more` flag on 12 countries is hand-set (§1d). With the join above, it
   could be counted instead. Counting would change two: **Spain** carries `more`
   with two rows (FITZ Madrid, which is two nights, and Ibiza; `tours.ts:436,400`),
   and **Nigeria** carries `more` though the site holds nothing beyond its two
   listed events except the One World broadcast (`tours.ts:348`).

---

## 3. The design review's map claims, re-measured

Measured on the live site, 29 Sep 2026, in headless Chrome at 375×812
(phone emulation), 1440×900 and 1024×768 (a same-origin frame), dark theme
unless stated. Raw results: `tour-map-method/measured-*.json`. Screenshots:
[`../shots/tourmap-phone-375-dark-card-nigeria.jpg`](../shots/tourmap-phone-375-dark-card-nigeria.jpg)
and [`../shots/tourmap-desktop-1440-dark-uk-card-over-masthead.jpg`](../shots/tourmap-desktop-1440-dark-uk-card-over-masthead.jpg).

### 3.0 Verdicts at a glance

| Review claim | Re-measured | Verdict |
|---|---|---|
| Phone map is 337×176 px | 337 × 176, at x 19, y 252.8 | ✔ |
| 46 of 57 countries under 12 px on a side at 375 | **46** (live) and 46 (from the path boxes); 40 are under 12 px on **both** sides | ✔ |
| Island dots 2×2 px | **2.4 px** fill (2.8 px with the stroke) | ✔ |
| A tap 4 px off Barbados hits the ocean; 4 px off Belgium hits Germany | ✔, see §3.2 | ✔ |
| At 2.5× zoom the view centres on the Atlantic; Belgium 7×5 | Centre at map (450.3, 235), which is about 0° N 0° E, in the Gulf of Guinea; Belgium 7.0×4.8 and **out of view**; Trinidad 2.6×2.8 | ✔ |
| Played vs unplayed 1.55:1 light, 2.58:1 dark | **1.55:1** and **2.58:1** (computed from the tokens) | ✔ |
| Card covers the masthead at 1440 (UK at y 180 → card y 23–171) | Card at y 23.3–170.9 over a 69 px masthead | ✔, but only inside a band of scroll positions (§3.4) |
| HTML 350 KB / 109 KB gz; two SVG copies = 272 KB; 15 KB gz without them; 123 KB / 43 KB JS chunk | 351,475 B / 110,787 B on the wire; 2 × 135,994 = **272,008 B**; 14,981 B gz without; chunk 123,052 B / 42,727 B gz | ✔ |
| Performed shapes are 33% of the path data | 39,311 of 120,083 B = 33% | ✔ |
| "118 unperformed shapes" for a static base map | **126**: 175 shapes minus the 49 performed **shapes** (the other 8 performed countries are dots, not shapes) | ✘ small slip |
| Antarctica band ≈ 14% of the frame | land other than Antarctica ends at y 405.7 of 470 (13.7% below it) | ✔ |
| Map bottom at 1041 px on a 1440×900 screen | svg y 436.4–1041.1 | ✔ |
| Buttons sit 40 px left of the content | first pill x 100, h1 and table x 140 | ✔ |
| COUNT header left-aligned over right-aligned numbers | header text starts x ≈ 284, numbers end x 346.5 | ✔ |
| Flags split from names | desktop: Norway, Antigua & Barbuda (measured); phone: Benin and Botswana visible in the screenshot | ✔ (phone not measured row by row) |
| Tab order is geometry-file order | live DOM order: Tanzania, Canada, United States, Kenya, Haiti, Bahamas, Norway, … then the 8 dots last | ✔ |
| tours.ts: 98 dated shows, 51 cities, 13 countries, 2018–2026 | 98, 51, 13, 2018–2026 | ✔ |
| "76 festival and one-off rows" | **59** (32 + 13 + 14). 76 is 59 plus the 17 live moments | ✘ wrong |
| "tourRevenue.ts has tickets for 28 nights" | **26** single nights with tickets, plus **2** two-night stands (4 nights, no per-night split) | ✘ wrong |
| "19 tour cities already have coordinates in listeners.ts" | 20 when "New York City" is read as New York, 19 without | ≈ |
| 7 of the top 50 Spotify cities are in countries with no documented show | 7: Santiago, Bogotá, Warsaw, Buenos Aires, Lima, Singapore, Kuala Lumpur | ✔ |
| Biggest night London Stadium, 58,973 tickets | `tourRevenue.ts:31` | ✔ (by **reported tickets**, §2d) |

### 3.1 How small the countries are

The map is drawn at a fixed scale of `width / 900` px per map unit (viewBox
900 × 470, `worldShapes.ts:7-8`). Sizes are each shape's bounding box. For a
country in several pieces, that box is generous. The 375 row was measured
live and matches the computed one exactly. The other rows are computed from
the path boxes at the measured (1024, 1440) or CSS-derived (390) map width
(`tour-map-method/analysis.py`).

| Layout | Map drawn at | px per unit | Countries under 12 px on one side | … on both sides | Dot diameter (with stroke) |
|---|---|---|---|---|---|
| Phone 375 | 337 × 176 | 0.374 | **46** | 40 | 2.4 (2.8) |
| Phone 390 | 352 × 184 | 0.391 | 46 | 39 | 2.5 (2.9) |
| Desktop 1024 | 942 × 492 | 1.047 | 24 | 18 | 6.7 (7.8) |
| Desktop 1440 | 1158 × 605 | 1.287 | 21 | 17 | 8.2 (9.5) |

At 375 **no** country's shorter side reaches 44 px. Only 11 are at least
12 px both ways: Canada, United States, Brazil, Australia, Mexico, Norway, New
Zealand, Morocco, South Africa, Namibia and Ethiopia. The smallest
(width × height, px): Trinidad & Tobago 1.0 × 1.1, Jamaica 1.9 × 1.0, Rwanda
1.7 × 2.2, the eight dots 2.4 × 2.4, Belgium 2.8 × 1.9, Netherlands 2.8 × 2.6,
Ireland 3.1 × 3.2, Denmark 3.4 × 2.7, Switzerland 3.5 × 2.1. Every row is in
`measured-phone.json`.

### 3.2 Near misses on the phone (375), 4 px from each centre

"ocean" means the tap lands on the `<svg>` itself, which **dismisses** the
card (`PerformanceMap.tsx:147-150`). A tap on an **unplayed** country does
nothing at all: its target is a path, not the SVG, so the dismiss check fails
and no card opens.

| Target | 4 px right | 4 px left | 4 px down | 4 px up |
|---|---|---|---|---|
| Barbados (dot) | ocean | ocean | ocean | Antigua & Barbuda |
| Saint Lucia (dot) | ocean | ocean | ocean | Antigua & Barbuda |
| Dominica (dot) | ocean | ocean | ocean | ocean |
| St Kitts & Nevis (dot) | ocean | ocean | ocean | ocean |
| Antigua & Barbuda (dot) | ocean | ocean | Saint Lucia | ocean |
| Curaçao (dot) | ocean | ocean | unplayed land | ocean |
| Mauritius (dot) | ocean | ocean | ocean | ocean |
| Kosovo (dot) | unplayed land | ocean | ocean | Romania |
| Belgium | Germany | ocean | France | ocean |
| Netherlands | Germany | United Kingdom | France | ocean |
| Switzerland | Austria | France | ocean | Germany |
| Denmark | Sweden | ocean | Germany | Norway |
| Jamaica | Haiti | ocean | ocean | unplayed land |
| Trinidad & Tobago | ocean | ocean | unplayed land | Saint Lucia |

**Zoom does not rescue it.** After three taps on + (2.5×), the viewport is
843 × 440 inside a 337 × 176 window, centred at map (450.3, 235), which is
about 0° N 0° E, in the Gulf of Guinea. Belgium (7.0 × 4.8 px) and the UK
are **out of view**.
Trinidad is 2.6 × 2.8 px. Barbados' dot has grown to 6 × 6 px, because the
dot scales with the zoom (§5).

**The phone controls cover the map.** The + and − buttons are 44 × 44 at
x 302–346, y 262.8 and 312.8, so the pair fills 10–104 px of the map's
176 px height, down its right-hand 44 px (East Asia and the Pacific).
**The card covers the heading.** Nigeria's card is 230 × 183.9 at
y 130.5–314.4. It covers the h1 (y 119.6–194.8) and the top 61.6 px (35%) of
the map it was opened from (screenshot above).

### 3.3 Played vs unplayed, computed from the fills

The frame and the phone card are `--bg-soft` (`map.module.css:64`,
`mobileTourMap.module.css:103`). A performed country is `--gold-wash-base` at
42% over that ground (`map.module.css:223`), an unperformed one
`--bg-soft-2` (`:219`). Token values are at `app/globals.css:23-25,141,422,464`.
WCAG relative luminance:

| | Light (paper) | Dark |
|---|---|---|
| Ground (`--bg-soft`) | #FFFFFF | #141416 |
| Performed fill (42% wash over ground) | **#D2BB94** | **#77581D** |
| Unperformed fill (`--bg-soft-2`) | #EFEAE1 | #1C1C21 |
| **Performed : unperformed** | **1.55 : 1** | **2.58 : 1** |
| Unperformed land : ocean | 1.20 : 1 | 1.08 : 1 |
| Hover / active (`--gold-hit`) : performed | 5.29 : 1 | 4.56 : 1 |
| Dot fill (75% wash) : unperformed | 2.78 : 1 | 5.85 : 1 |
| Country border (`--scrim-base` 90%) : unperformed fill | **13.5 : 1** | 1.15 : 1 |
| Wash strength that would reach 3 : 1, same colour | 80% (#A97E33) | 48% (#85621E) |

On paper the borders (13.5:1 against unplayed land) are far louder than
the data itself (1.55:1). In the dark theme, unplayed land barely separates from the ocean
(1.08:1), so the borders are what draw the continents.

### 3.4 The hover card over the masthead (1440 × 900)

- The masthead is `header.navbar`, `position: sticky`, **69 px** tall
  (measured).
- The card goes above the country when its top edge is **more than 174 px**
  from the top of the window (`PerformanceMap.tsx:120`), whatever the
  masthead does.
- Real card heights (measured, one per country): 105 px (one event, no
  "…and more"), 123, 126, 144, 148, 162, 166, up to 184 px (Canada, Nigeria,
  Australia).
- So a card covers the masthead whenever the country's top edge is **between
  174 px and (78 + card height) px** from the top of the window. That is a
  9 px band for a 105 px card and an 88 px band for a 184 px card.

UK sweep (card 148 px):

| UK top edge at | 150 | 170 | 174 | **176** | **180** | **200** | **220** | 240 | 260 |
|---|---|---|---|---|---|---|---|---|---|
| Card top | 187 (below) | 207 (below) | 211 (below) | **19** | **23** | **43** | **63** | 83 | 103 |
| Over the masthead? | no | no | no | **yes** | **yes** | **yes** | **yes** | no | no |

The map's svg spans page y 436.4–1041.1, so the whole map is on screen under
the masthead only while the page is scrolled **141–367 px**. In that range,
**22** countries can open a card over the masthead: Canada, Norway, Finland,
Sweden, UK, Denmark, Germany, Ireland, Netherlands, Belgium, France, US,
Austria, Romania, Switzerland, Italy, Spain, Kosovo, Turkey, Portugal, Greece,
Morocco. It happens mostly at scrolls of about 280–367 px, when the map's top
sits just under the masthead. The review's screenshot (scroll 330, UK top at
180) is one such case. Reproduced:
[`../shots/tourmap-desktop-1440-dark-uk-card-over-masthead.jpg`](../shots/tourmap-desktop-1440-dark-uk-card-over-masthead.jpg).

### 3.5 Page weight (live, 29 Sep 2026)

`curl https://burnaboystats.com/records/tours/map` (Vercel cache HIT):

| | Bytes |
|---|---|
| HTML, raw | 351,475 |
| HTML, gzip on the wire | 110,787 |
| Inline `<svg viewBox="0 0 900 470">` copies | **2**, each 135,994 → 272,008 (77% of the HTML) |
| HTML without the two SVGs | 79,467 raw / 14,981 gzip -9 |
| JS chunk carrying `worldShapes` (`/_next/static/immutable/chunks/0h15gxooi7ubf.js`; the name changes per deploy) | 123,052 raw / 42,727 gzip -9 |
| `<path>` elements in the HTML | 366 (2 × 175 shapes + 16 others) |
| For comparison: the Dai Dai sprite `/dai-dai/replay-map.svg` | 130,117 raw / 42,975 gzip -9 |

The first shape's path string appears exactly twice in the HTML and not in
the RSC payload. The client gets the geometry from the JS chunk, because
`PerformanceMap` imports `worldShapes` itself (`PerformanceMap.tsx:4`). So a
phone downloads it three times: twice in the HTML (one copy under a
`display:none` layout) and once in JS.

### 3.6 Other layout facts measured at 1440 and 1024

| | 1440 × 900 | 1024 × 768 |
|---|---|---|
| h1 | x 140, y 181.6, 70 px tall | x 40, y 181.6, 51 px tall |
| Map frame | x 140, y 435.4, 1160 × 606.7 | x 40, y 404.5, 944 × 493.9 |
| Map svg | 1158 × 604.7 | 942 × 491.9 |
| Zoom buttons | 34 × 34 at x 1255, y 446 and 486 | (not measured) |
| Legend | y 1056 | |
| Table | y 1213, 1160 wide; COUNT th at x 270.4–360.4, `text-align: left` | |
| Buttons | x 100 (should be 140), y 1890 | |
| Document height | 2195 px | |

---

## 4. The Dai Dai world map and its Europe inset

### 4a. What and where

- **Component:** `DaiDaiReplay` (`app/components/DaiDaiReplay.tsx`), the
  "How it got there" replay, kicker "The chart run · week by week"
  (`app/components/daiDaiReplayLabels.ts:110-111`). It is mounted under the
  takeover grid in "The world takeover" on `/dai-dai`
  (`app/dai-dai/page.tsx:466-476`) and on `/dai-dai/es`
  (`app/dai-dai/es/page.tsx:517`). By default it shows the end frame, whose
  heading reads "The peak picture" and "No. 1 in 26 countries at their peak"
  (`daiDaiReplayLabels.ts:114,117`). The CSS says its values come from
  `designs/desktop/Dai Dai Replay Module.dc.html`
  (`DaiDaiReplay.module.css:1-7`).
- **Map box:** `.mapBox`, 430 px tall, `--bg`, 1 px `--line`, 6 px radius
  (`DaiDaiReplay.module.css:151-158`). It is the left column of a
  `2fr : 1fr` grid, beside the ranking (`:135-140`). From 1239 px down, the
  grid is one column and the ranking drops below the map (`:843-847`). The
  world SVG fills the box with 6 px padding (`:165-171`) and letterboxes to
  keep its 900 × 470 shape.
- **The inset:** `.europe` (`DaiDaiReplay.tsx:623-631`; CSS
  `DaiDaiReplay.module.css:172-199`). It is `position: absolute`, **left 8 px,
  bottom 8 px, width 31% of the map box, aspect 1 : 0.86**, filled opaque
  `--bg`, with a 1 px `--rule` border. The label **"EUROPE"** (mono 700 11 px,
  `--text-muted`) sits at its top-left, 8 px / 6 px. The inset SVG has 4 px
  padding. Its viewBox is the `EUROPE` box, lon −11 to 32 and lat 35 to 71,
  widened to 1 : 0.86 (`DaiDaiReplay.tsx:52-63`), which is `421.0 31.0 103.8
  89.3` in map units. It draws the same sprite shapes (`drawUses("e")`,
  `:628`). They answer hover and tap through the map box's delegated
  handlers (`:563-569`, `:337-342`), so the inset is interactive.
- **Phone (900 px and below):** there is no inset. The Europe crop **is** the
  map, 300 px tall. A **Europe · World** toggle swaps it for the world
  (`DaiDaiReplay.module.css:897-951`), so nothing overlaps.

### 4b. Size and position, measured

| | 1440 × 900 | 1024 × 768 |
|---|---|---|
| Map box | 748 × 430 (left column) | 886 × 430 (full width; ranking below) |
| World drawn at | 0.816 px / unit → 734 × 383, width-limited, 16 px bands top and bottom | 0.885 px / unit → 797 × 416, height-limited, ≈ 38 px empty at each side |
| **Inset** | **231.3 × 198.9**, 9 px in from the box's outer left and bottom edges (8 px + the 1 px border) | **274 × 235.7**, same offsets |
| Inset scale | ≈ 2.1 px / unit (2.6× the world) | ≈ 2.5 px / unit |
| Inset area in world map units | x 2.5–286.1, y 243.7–487.6 | x −40.3–269.2, y 201.4–467.7 |
| What that covers | South Pacific and the west of South America | South Pacific, the west of South America, and Central America to Costa Rica |

The review's figures (inset at x 158–388 at 1440, x 78–350 at 1024) match.
Screenshot at 1440, dark, end frame:
[`../shots/daidai-desktop-1440-dark-europe-inset.jpg`](../shots/daidai-desktop-1440-dark-europe-inset.jpg).

### 4c. Charted countries under the inset

Share of each country's **area** under the inset (polygon clipping in map
units, `tour-map-method/inset_area.py`), with its Dai Dai peak from
`app/data/charts.ts`:

| Country | Peak (charts.ts) | Hidden at 1440 | Hidden at 1024 |
|---|---|---|---|
| Panama | **No. 1** (`:367`) | 0% | **100%** |
| Ecuador | **No. 1** (`:367`) | 21% | **100%** |
| Colombia | **No. 1** (`:367`) | 1% | 57% |
| Costa Rica | 5 (`:374`) | 0% | 47% |
| Peru | 23 (`:380`) | **95%** | 68% |
| Chile | 14 (`:379`) | 35% | 0% |
| Bolivia | 25 (`:380`) | 26% | 0% |
| Brazil | 27 (`:380`) | 7% | 0% |
| Argentina | No. 1 (`:367`) | the box's corner touches it (< 1%) | 0% |
| Venezuela | No. 1 (`:367`) | 0% | the box's edge touches it (< 1%) |

At 1440 the inset covers almost all of Peru and a third of Chile. At 1024,
where the world shrinks to fit the height and centres, it covers **two
No. 1 countries completely (Panama, Ecuador)** and 57% of a third,
Colombia. The review's wording ("hides Ecuador … and part of Colombia") is
right at 1024. At 1440 Ecuador is 21% hidden and Colombia 1%.

**Where it could go instead**, from the same clipping
(`tour-map-method/inset_candidates.py`, same 8 px corner offset):

| Box | 1440 | 1024 |
|---|---|---|
| Today's size (31%), bottom-right | hides Australia and New Zealand completely | hides Australia, New Zealand and Malaysia completely |
| Today's size, top-right | hides India (No. 1), Japan and Vietnam completely, 71% of Malaysia, 57% of Russia | hides Malaysia, Japan and Vietnam completely, 74% of India, 50% of Russia |
| **200 × 172 px, bottom-left** (today's corner, smaller) | **no charted country** | **no charted country** |
| 200 × 172 px, bottom-right | Australia, New Zealand | Australia, New Zealand |

So "move it bottom-right, east of Australia" (the review's option a) swaps
South America's west coast for Australia and New Zealand. A **smaller box
in today's corner (about 200 px wide)** is the one tested option that hides
nothing that charted at either width. The review's option b, taking the inset
out of the map box, avoids the question entirely.

**For the tour map**, the same test on its frame (1158 × 605 at 1440,
942 × 492 at 1024) finds that a 260 × 224 px or 200 × 172 px box in the
**bottom-left or top-right** corner covers **no performed country and none
of the 8 dots**. Bottom-right covers Australia and New Zealand. The tour map's
+/− buttons already sit top-right (`map.module.css:183-191`).

### 4d. The "Dai Dai by the numbers" stat strip

- Six hairline cells: `.leads` is a grid of 6 equal columns with a **1 px
  gap** showing `--rule` behind (`app/dai-dai/dai-dai.module.css:302-313`).
  It becomes 3 × 2 from 901 to 1239 px (`:582`), and full-width rows on the
  phone (`:655-676`).
- Each cell is `padding: 22px 18px 20px 0` (`:319`), which means **no left
  padding**.
- Measured: in every cell at 1440 (199.2 px wide) and at 1024 (314 px wide),
  the figure's text starts **0.0 px** from the cell's left edge. So cells 2–6
  at 1440, and the second and third column at 1024, put their figure hard
  against the 1 px divider. The first cell sits on the column edge (x 120 at
  1440), where 0 is correct.
- The phone rows (`:661-668`, a 118 px figure column with 14 px gap) are not
  affected.

---

## 5. What the site already has that a new tour map can reuse

Everything below is already in the codebase and already on the live site.
None of it needs a mapping library. The site's rule is that it ships none
(`app/data/worldShapes.ts:4-5`).

| Part | Where | What it does | What the tour map could use it for |
|---|---|---|---|
| **Nearest-target tap and hover** | `ListenerMap.tsx:84-104` (`nearest`), `HIT_PX = 22` (`:43`), wired on the SVG's `onMouseMove` / `onClick` (`:207-215`) | Converts the pointer to map units and picks the dot whose **edge** is nearest, within 22 **screen** px. The reach stays a thumb's width at every zoom and screen size. Inside an overlap, the nearer centre wins, not the top paint. A miss dismisses the card. | The 8 island dots and the small European shapes. Today a tap 4 px off Barbados, Dominica, St Kitts or Mauritius lands on the ocean and closes the card (§3.2). Shapes would need a distance to their outline or their box, not a centre. |
| **Card anchored to the target, not the pointer** | `ListenerMap.tsx:105-111` (`rectOf`), same placement maths as the tour map (`:180-189`) | Positions the card from the dot's computed screen box. | Anchoring to a dot or a region crop. |
| **Dots sized by a value** | `ListenerMap.tsx:41-42,60-68` | Radius = 2.6 + (9.2 − 2.6) × √(value / max), in map units. Drawn largest first, so small dots paint on top (`:61`). | A city layer sized by documented dates or reported tickets (the review's plan, step 9). |
| **Dots that keep their size under zoom** | `ListenerMap.tsx:71-73,229` (`rScale = 1/√zoom`), stroke `vector-effect: non-scaling-stroke` (`ListenerMap.module.css:19-27`) | A dot grows by only √zoom as the map zooms, and its outline stays 1 screen px. | The tour map's dots have neither (`r = 3.2` fixed, a 1-unit stroke that scales, `PerformanceMap.tsx:173`, `map.module.css:235-242`). They grow 4× at 4× zoom, and are 2.4 px at 1× on a phone. |
| **Keyboard order by meaning** | `ListenerMap.tsx:158-178` | Dots render in rank order, so Tab walks No. 1 to No. 50. | The tour map's 57 stops follow the geometry file's order (§1d). Sorting by `REGION_ORDER` then name would make Tab follow the table. |
| **"Reach" wash plus data dots** | `ListenerMap.module.css:5-13` (`.reach`, not interactive), `.city` (`:19-30`) | Countries are washed to say "present here". Dots carry the figure. | Keep the wash for "performed here" and add dots for "how much", without making every country look alike. |
| **Lon/lat to map units** | `app/lib/equalEarth.ts:22-31` (`projectEqualEarth`) | The same Equal Earth as `worldShapes`, fitted to the hand-placed markers with a residual under 3 px (`:7-12`). | Placing any city, venue or region box. Coordinates exist only for the 50 Spotify cities (`listeners.ts:42-93`). A city layer needs a coordinates table for the other tour and festival cities. |
| **One static map sprite** | `app/dai-dai/replay-map.svg/route.ts:18-26`, placed with `<use href="/dai-dai/replay-map.svg#s756">` (`DaiDaiReplay.tsx:65-67,438-452`) | All 175 shapes as one static SVG file (130,117 bytes; about 43 KB gzipped, measured 29 Sep). It is built from `worldShapes.ts` at deploy, so it cannot drift from it. | Drawing the **126** shapes that are not interactive (175 minus the 49 performed shapes; the review's "118" subtracts all 57, but 8 of those are dots) once, out of the HTML and the JS bundle (§3.5). Note: the file is served with `cache-control: public, max-age=0, must-revalidate`, so a browser revalidates it on each visit (a cheap 304). It is not "fetched once" as the route's comment says (`:13`). |
| **Event delegation by `data-code`** | `DaiDaiReplay.tsx:337-342` (`codeFrom` = `closest("[data-code]")`), on the map box (`:563-569`) | One pointer handler for every shape. Hover reacts to mouse pointers only (`:339`), so touch taps don't leave a hover state. | One handler instead of 57 per-shape handlers. It also fits sprite `<use>` shapes. |
| **Europe view** | `EUROPE` box, lon −11 to 32, lat 35 to 71, widened to 1 : 0.86 (`DaiDaiReplay.tsx:52-63`); numerically viewBox `421.0 31.0 103.8 89.3` | Desktop: an inset in the map box (§4). Phone: the **default** view, with a two-segment **Europe · World** radiogroup (`DaiDaiReplay.tsx:539-562`; phone CSS `DaiDaiReplay.module.css:897-936`). The phone doesn't even draw the world layer until World is picked (`DaiDaiReplay.tsx:861-868`). | A Europe crop for the tour map. There is no other region crop in the repo. Africa, Americas or Caribbean crops would be new lon/lat boxes, projected the same way. |
| **A card that stays inside the map** | `.card` absolutely placed at the map box's top-left, 280 px (`DaiDaiReplay.module.css:328-342`), full width inset 10 px on the phone (`:956-960`) | The card never floats over the page chrome. Click pins it (`pick`, `DaiDaiReplay.tsx:300-306`), hover previews it, Escape clears it (`:344`). | The fix for the card over the masthead (§3.4), and for the phone card covering the h1 (§3.3). |
| **A selection outline that doesn't hide a small country** | `DaiDaiReplay.tsx:432-467` (the picked shape drawn again, last), `.picked` with `paint-order: stroke` (`DaiDaiReplay.module.css:258-269`) | The outline sits on top of the neighbours, but under the fill, so Switzerland keeps its colour. | A visible focus or selection ring on the tour map, which today only changes fill (`map.module.css:228,241`). |
| **Light-theme fixes for pale fills** | `DaiDaiReplay.module.css:252-257` (ink outline on the two lightest bands on paper); `PeakMap.tsx:30-50` (`RAMP_LIGHT`, a ramp re-derived for paper: 9.05 : 4.54 : 3.45 : 2.75 : 1.60 against `--bg-soft-2`) | Precedent for a light-specific map fill. | Played vs unplayed is 1.55:1 on paper today (§3.3). |
| **One Tab stop with arrow keys** | `DaiDaiReplay.tsx:391-404` (roving `tabIndex` over the ranking chips; arrows, Home, End) | 66 countries with one Tab stop. | Replacing the tour map's 57 stops. |
| **A marker with a label for a shapeless country** | Singapore: `DaiDaiReplay.tsx:69-71,604-617`; label size in map units chosen so it prints at 11 px or more (`DaiDaiReplay.module.css:315-325`); hidden on phone (`:947-951`) | A dot plus a text label at world scale. | Labelling the Caribbean dots or Kosovo on desktop. |
| **Centre of a shape** | `centreOf(d)`, the middle of the largest ring (`app/components/daiDaiReplayData.ts:71-89`) | Where to put a mark on a country with no coordinates. | A label, pin or count badge on a country. |
| **Country ids and per-country links** | `A2_TO_ISO` (`app/lib/isoCodes.ts:5-16`), `countryBoardLinks()` → `/compare/in/<country>` (`app/lib/certCountry.ts:319-328`) | Chart codes to shape ids, and each certification country's board URL. | "Certifications in <country> →" from a country card, where a board exists. |
| **Reduced motion read in JS, and a static fallback** | `DaiDaiReplay.tsx:75-84`, small multiples (`DaiDaiReplayMultiples.tsx`) | The approved player pattern. | Only relevant if the "reach over time" idea is ever built. The data can't support it yet (§2j.1). |
