# Certifications and compare: independent design review

**Group:** certs-compare. **Pages:** `/certifications` (and its two switches), `/records/charts`, `/compare`, one pair page (`/compare/burna-boy-vs-wizkid`), one country board (`/compare/in/united-states`), with the country index (`/compare/in`) as a supporting page. I also checked whether the CSV and API can be found from these pages.
**Site:** live burnaboystats.com, deployed 8 Oct 2026, read 8 Oct 2026 between 01:20 and 02:30 BST.
**Reviewer stance:** an independent senior product designer, judging the pages as a product for a fan, a journalist and a search visitor. Owner rulings are respected throughout: anything that would touch one is in its own section at the end.

## How this was measured

- **Capture:** headless Chrome, run only through the local `heavy` lock wrapper (on the owner's machine, not in this repo), at DPR 1. Phone was emulated as 390×844 with mobile emulation, touch and an iPhone UA. Desktop was 1440×900, and the 1024 band was 1024×768. Reduced motion was on, and the site theme was set through `localStorage.theme` before load. Full-page captures were taken by growing the viewport to the document height, capped at 6000px, then saved as JPEG q60. Because of that method, fixed bars appear at the bottom of the cap; those are capture artefacts. Judgements about phone chrome come from DOM measurements taken at the real 844px viewport.
- **In-page probes:** a font-size histogram and font families; h1 and paragraph measure (characters a line); gold, ember and green accents in the first viewport; sticky and fixed elements; switch sizes and positions; visible and hidden links to `/api`, `.csv` and `/methodology`; tap targets under 44px and under 32px; the debug-1005 `collect.js` audit (contrast composited to a real ground, clipped and truncated text, overlaps, broken images, unnamed controls).
- **Source and HTML reads:** the pages' served HTML over curl (links, titles, OG text and images), and `origin/main` source for the lines a finding points at.
- **Shot budget:** 4 MB for the group. Dark and 1024 captures are cropped to their top 3000px, and the switches-off captures to the hero (1700/2000px). That cropped area holds everything they were captured to show. All shots are re-encoded at q60, progressive. `/compare/in` is kept as a 1440 first-screen crop only. Four real-viewport evidence frames are added; the group totals 3,976,149 bytes in 23 files.

### Shots (all in `shots/certs-compare/`)

| File | What |
|---|---|
| `certifications-390-light.jpg` | Phone, full page to 6000 of 8,921px |
| `certifications-1440-light.jpg` | Desktop, full page to 6000 of 15,354px |
| `certifications-1024-light.jpg` | 1024 band, top 3000 of 20,083px (hamburger nav, chips under titles, 3+1 stat strip) |
| `certifications-390-dark.jpg`, `certifications-1440-dark.jpg` | Dark, top 3000px |
| `certifications-switches-off-390-light.jpg`, `…-1440-light.jpg` | `#home=0&feat=0`: both switches off, hero and filter row |
| `records-charts-390-light.jpg`, `records-charts-1440-light.jpg` | Phone and desktop, to 6000 of 14,385 / 12,360px |
| `compare-390-light.jpg`, `compare-1440-light.jpg`, `compare-1024-light.jpg` | `/compare` landing, full page |
| `compare-pair-burna-boy-vs-wizkid-390-light.jpg`, `…-1440-light.jpg` | Pair page, full page (5,697 / 4,736px) |
| `compare-pair-burna-boy-vs-wizkid-390-dark.jpg`, `…-1440-dark.jpg` | Pair page dark, top 3000px |
| `compare-in-united-states-390-light.jpg`, `…-1440-light.jpg` | Country board, full page |
| `compare-in-1440-light.jpg` | Country index, first 1000px |
| `compare-pair-burna-boy-vs-wizkid-390-light-firstscreen.jpg` | Pair page, phone, the real 390×844 first screen (fixed bars in place) |
| `certifications-390-light-pageend.jpg` | Phone certifications, the last screen of the page (scrollY 8,077) |
| `certifications-1440-light-datedlog.jpg` | Desktop "The dated log" head, year tabs, gold summary line, first rows (scrollY 9,750) |
| `certifications-switches-off-390-nojs-prepaint.jpg` | `/certifications#feat=0&home=0` with scripts off: what paints before hydration |

Working tiles, crops and the probe output were kept in the reviewer's session scratchpad, `scratchpad/dr1008cc/`, which is not in this repo (`res1.json`, `res2.jsonl`, `view/`, `orig/`, `ev/`).

---

## Verdict in one paragraph

This is the most original part of the site. Pricing every plaque at its own body's threshold and showing the floor, the footnote marks and the date both registers were read gives a fan and a journalist something no chart site offers. The country board (`/compare/in/<country>`) is the best template in the group and close to finished. The weaknesses are less about craft than about **story order and wayfinding**:
- On a phone the pair page's answer needs a 300–400px scroll: the first screen's reading window is 619px between the fixed bars.
- On phones the flagship certifications screen shows no sources, no method link and no date.
- "The dated log" has no dates.
- The ledgers' rows link to almost nothing, though song, album, country-board and pair pages exist for them.
- The CSV exports exist but nothing on these pages points to them.

On desktop the ledgers read as walls of right-aligned chips. Across the family there are three different content columns, so the headline jumps sideways between sibling pages. Contrast, overflow and type floors are in good shape. The automated checks found no contrast failures in 20 captures across both themes, and no page scrolls sideways at 390, 1024 or 1440.

---

## Strengths to keep

1. **The provenance machinery is the product's moat.** It shows up throughout:
   - The pair page prints "27 countries checked · outside Nigeria · both registers read 2 October 2026" right under the verdict.
   - The footnote marks (¹ † ‡ § ¶) each have a definition.
   - The country board has a "What one plaque is worth here" card (RIAA Gold 500,000 / Platinum 1,000,000 / Diamond 10,000,000, with RIAA Latin's Oro/Platino/Diamante beside it).
   - Unpriced plaques are listed, never dropped (Colombia's "Not counted ¹").
   - Per-chip `title`s on `/records/charts` name the chart body ("United Kingdom — Official Charts Company").

   No competitor does this. Keep all of it, and make it more visible (see CC-02 and CC-07).
2. **The country board is the model template.** One h1 ("Certified units in the United States"), one 68,220,000 figure, then a ranked table: rank, avatar, artist, highest plaque with its title, units, plaque count and a share bar. The "Next" CTA is generated from the data ("Wizkid and Tems lead the United States… Wizkid vs Tems ↗"). It reads in three seconds at both widths (`compare-in-united-states-1440-light.jpg`, `…-390-light.jpg`). The two RIAA programmes (RIAA 43 plaques and RIAA Latin 3) are two ranked tables, not one misleading sum.
3. **The desktop pair-page headline.** Two Anton totals (32,297,660 vs 42,290,770), each with a proportion bar, sit above a plain-English verdict: "Wizkid leads by at least 9,993,110 certified units — a floor 1.3× the size of Burna Boy's". All of it is inside the first 900px at 1440 (totals at y≈690, verdict at y≈860). The trailing side is set in a lighter ink, so the winner reads without a colour code. The OG description carries the result, so a link preview answers the question.
4. **The switches are honest and shareable.**
   - Each state is a word ("on · every plaque held" / "off · lead credits only", "included" / "left out").
   - The kicker adapts ("OUTSIDE NIGERIA · LEAD CREDITS").
   - The back bar recounts (251 → 125).
   - The state deep-links (`#feat=0&home=0`).
   - On phones the row now sits under the lede (y=347 and y=401 at 390), each switch a 44px target (207×44 and 103×44).
5. **Tier colours are a consistent data palette.** Diamond is teal, Platinum ink, Gold gold and Silver grey. The pills, tier bars, filter dots and compare chips all use them in both themes, so "a teal pill = Diamond" is learnt once and holds everywhere in the group.
6. **The basics are clean.** The automated checks found:
   - No contrast failures in any of the 20 captures (both themes, 390/1024/1440).
   - No sideways overflow.
   - No broken images.
   - No text below 11px except the three issuer tags in CC-11.
   - Every phone switch and chip is at least 44px tall. The only sub-32px controls are the "+N" overflow pills (CC-14).
7. **The phone certifications screen is dense in the good way.** Releases are numbered (Albums 01–04, Songs 01–06) and each row carries flagged tier pills. The tier bars give count and share. The year rail, "Compare with…" and "Certified units by country…" folds are the owner-approved pattern. It reads like a scoreboard, not a document, and it matches the board artists' screens.
8. **Dark and paper are both first-class.** The masthead themes with the page. The faded portrait sits behind the type without hurting contrast in either theme. The gold switch tracks and the "Compare ↗" primary keep the same meaning in both themes (`certifications-390-dark.jpg`, `certifications-1440-dark.jpg`).

---

## Findings

Severity is impact on a real reader. Kind: **build-fix** (a developer can fix it from this note), **design** (needs a designer), **content** (copy), **reconsider-ruling** (asks the owner; there is one at the end).

### CC-01 · On a phone, the pair page's answer is below the first screen (design · phone · high)

- **Pages:** all pair pages (`/compare/<a>-vs-<b>`, 120 in the sitemap). Measured on `/compare/burna-boy-vs-wizkid` at 390×844, light and dark.
- **Evidence:**
  - The two totals' glyphs sit at y=949–980 and the verdict ("Wizkid leads by at least 9,993,110…") at y=1052–1089. Measured from the pixel rows of `compare-pair-burna-boy-vs-wizkid-390-light.jpg`.
  - The first screen ends at 844. Its bottom 156px is fixed chrome: "THE AFROBEATS BOARD ↗" bar (fixed, 69px, top 688) and the five-tab bar (fixed, 87px, top 757). The sticky header takes another 69px. The **reading window is 619px** (y 69–688), so the totals need a ~300px scroll and the verdict ~400px.
  - Above the answer, in order:
    - the masthead;
    - a breadcrumb that wraps to two lines ("HOME / CERTIFICATIONS / COMPARE /" then "BURNA BOY VS WIZKID", to y=131);
    - a kicker;
    - the h1;
    - a **6-line generic lede**, identical on `/compare`, all 120 pair pages and every country board ("Every plaque is a floor — a Platinum single in the UK means *at least* 600,000…");
    - the 4-mode segmented control;
    - two 110px artist cards with a "VS" between;
    - two switch rows.
  - Someone who searched "burna boy vs wizkid" sees no number until they scroll.
- **Suggestion:** a phone pair-page order that answers first:
  1. h1;
  2. one pair-specific line ("Burna Boy holds twice the plaques (178 vs 88); Wizkid's are worth more units");
  3. the two totals with bars and the verdict;
  4. the switches;
  5. then the artist cards (as one compact "Burna Boy · change / Wizkid · change" row) and the mode control;
  6. then the table.

  The generic "Every plaque is a floor…" paragraph moves into the method block, which already explains it. The designer should also decide whether the Afrobeats-board bar should stack on top of the tab bar on these pages. That is 156px of fixed chrome on a 844px screen. The owner's rule is "don't redraw the phone bars", so this goes on the change list as a question, not a redraw.
- **Shots:** `compare-pair-burna-boy-vs-wizkid-390-light-firstscreen.jpg` (the real first screen: no figure, the Wizkid card cut by the bars), `compare-pair-burna-boy-vs-wizkid-390-light.jpg`, `…-390-dark.jpg`.

### CC-02 · The phone certifications screen shows no sources, no method link and no date (design + build · phone · high)

- **Pages:** `/certifications` at ≤900px. The same component (`MobileCerts`) serves every `/afrobeats/<artist>` certifications screen.
- **Evidence:**
  - The desktop page ends with "Sources: RIAA (United States), BPI (United Kingdom), Music Canada, SNEP… — each award read at the body's own register (or, in a market with no current public register, from the label's own plaque…)" and has a "Methodology ↗" button at y=595.
  - On the phone the DOM probe found **zero visible links** to `/methodology` or `/api`. All four in the HTML are inside the hidden desktop tree or the hidden footer.
  - `MobileCerts.tsx` has no source note at all: the only "source" strings in it are `<source media>` image tags.
  - The phone screen's only provenance is the dated-log lede's TCSN sentence.
  - For a site whose whole pitch is "verification-first", the flagship screen (the most-certified-African-artist claim, on the phone layout) has no visible line on where 251 comes from or when it was checked. By contrast, the phone `/records/charts` keeps a source footnote (`MobileOfficialCharts.tsx:565`), though without its "as of" date.
- **Suggestion:** a phone provenance block after the dated log, in the screen's own caption style:
  - "Read at each body's register: RIAA, BPI, SNEP, Music Canada + 23 more · last full check 2 Oct 2026";
  - "How this is counted ↗" and "Download CSV ↓" (see CC-07);
  - a short form of the "label-issued" rule for Colombia and Turkey.

  Add the missing "as of" date to the phone charts footnote.
- **Shots:** `certifications-390-light-pageend.jpg` (the real last screen: the final log rows, then the action bar, nothing else), `certifications-390-light.jpg`. On desktop, the Sources paragraph at y=14,436 even dates the check ("most recently on 7 October 2026"); the phone has no equivalent.

### CC-03 · "The dated log" has no dates (content + design · both · medium-high)

- **Pages:** `/certifications` "Certifications by year", phone and desktop.
- **Evidence:**
  - The section's text contains no day-dates (probe: 0 date strings in the 4,593px desktop section). The year chips read "2026 · 72", "2025 · 29"…, and each row is title, credit and body, plus a tier pill.
  - 2026 alone is a 72-row list, with Dai Dai's RIAA Latin steps as separate undated rows (2× Platino, 6× Platino, 19× Platino).
  - The kicker promises dates ("The dated log"), and the lede says "Each international announcement as it landed". The rows run oldest first, so the newest plaques (Dai Dai's CO Platinum, TR Diamond and RIAA Latin 19× Platino, from 6–7 Oct) are rows 70–72 of 2026, at the very bottom of a ~4,300px desktop list and of the phone page (`certifications-390-light-pageend.jpg`). The reader can't tell which row is newest, and the news is last.
  - The 29 Sep review raised this; it is still open.
  - On a phone, each year is one long list (72 rows × ~72px ≈ 5,200px) with no in-list landmark once the year rail has scrolled away.
- **Suggestion:**
  - **(a)** Where the data has a date, start the row with it ("6 Oct", muted) and sort newest first. Undated rows follow under a small "date not published" divider.
  - **(b)** If dates can't be sourced soon, rename the kicker so it stops promising them ("Year by year").
  - On phones, make the year label sticky inside the list. This is a label, not a fold, so the no-accordion rule is untouched.
- **Shots:** `certifications-1440-light-datedlog.jpg`, `certifications-390-light-pageend.jpg`, `certifications-390-light.jpg`.

### CC-04 · Pair tables don't show who wins each country (design · both · medium-high)

- **Pages:** all pair pages.
- **Evidence:**
  - The desktop table is 23 rows × ~100px; the phone table is 23 rows × ~105px.
  - Each cell stacks three lines: tier pill, units, and "N PLAQUES · TOP SHOWN".
  - The winner of a row is shown only as ink vs grey type ("4,500,000" grey vs "20,000,000" ink for the US).
  - The country name sits 600px from the first figure at 1440, with empty space between.
  - "· TOP SHOWN" repeats in 40+ cells (raised 29 Sep, still open).
  - The question a reader brings ("where does Burna beat Wizkid?") needs a row-by-row read of 46 numbers.
- **Suggestion:**
  - Make it a butterfly (diverging) row: country in the middle or left, one bar each side, scaled to the row's larger value, the winner's bar in ink and the other in a muted tone. Keep the tier pill and figure on each side.
  - Explain once, in the header, that the pill is the top plaque. Print just "7 plaques" in the cell.
  - Target row height about 56px on desktop and 72px on phone.
  - Add a summary row above the table, derived from the rows ("Burna Boy leads N of the 23 markets").
  - Tier colours stay data colours; no gold.
  - On phone, keep the separate design: two compact columns with the bars underneath, not a scaled-down desktop.
- **Shots:** `compare-pair-burna-boy-vs-wizkid-1440-light.jpg` (tiles 1–3), `…-390-light.jpg`.

### CC-05 · Desktop switches sit at the fold, 700px under the numbers they change (design · desktop · medium)

- **Pages:** `/certifications` at >900px, and the `/afrobeats/<artist>` certifications sections, which use the same desktop component.
- **Evidence:**
  - At 1440×900 the switch row is at y=895–939. The two switch buttons are 207×44 and 103×44, at y=895, inside the filter card and under the stat strip (y=688–843).
  - What they change is above: the kicker (y≈180), the lede (y≈393), the four tier rows (y=118–687) and the four stat tiles.
  - Flip one and nothing visible moves unless the hero is still on screen. Scrolled to the filters, the change happens off-screen.
  - The phone moved its switches under the lede on 4 Oct (Job 3, "switches under the lede"). The desktop brief deliberately left this as "raise it as a question", so this is that question.
- **Suggestion:**
  - Put the switch row in the hero, directly under the lede and above the CTA row, at the same 30×16 knob style.
  - Or pin a slim summary bar under the masthead once the hero leaves view, so a flip always shows its new total.
  - Keep the filter card for tier and country.
- **Shots:** `certifications-1440-light.jpg`, `certifications-switches-off-1440-light.jpg`.

### CC-06 · Three different content columns in one family (design · desktop · medium)

- **Pages:** `/certifications`, `/records/charts`, `/compare`, pair pages, `/compare/in/*`.
- **Evidence (1440, measured from the shots):**
  - The breadcrumb starts at x=81 on all five pages.
  - The h1 starts at x=83 on `/certifications` (content 80–1360), x=143 on `/records/charts` (140–1300) and x=186 on `/compare`, the pair page and the country board (184–1256).
  - Going Certifications → Compare moves the headline 103px right. Going Certifications → Official charts moves it 60px.
  - The three pages share one nav item (Certifications is lit on `/certifications` only) and one data story, but look like three sites.
- **Suggestion:** one container for the family. Either all on the 80px gutter, matching the breadcrumb, with prose capped at the 62ch measure, or all on one inner column. The designer picks and draws one desktop grid that the three templates share.
- **Shots:** `certifications-1440-light.jpg`, `records-charts-1440-light.jpg`, `compare-1440-light.jpg`, `compare-pair-burna-boy-vs-wizkid-1440-light.jpg`.

### CC-07 · The CSV and API can't be found from the pages whose data they are (content + build · both · medium)

- **Pages:** all six.
- **Evidence:**
  - `/api` lists `/api/v1/certifications.csv` and `/api/v1/chart-peaks.csv` (CC BY 4.0, no key).
  - Not one of the six pages links to either CSV. The served HTML of each has exactly two `/api` hrefs: the menu sheet's "API v1" and the footer's "Open data API".
  - On desktop the footer link sits at y=15,211 of 15,354 on `/certifications` and y=12,218 on `/records/charts`.
  - On phones both are hidden; the only route is the hamburger sheet.
  - There is no endpoint for the certified-units views at all (pair, country board), though they carry Dataset JSON-LD.
  - Journalists are a named audience (`/press`). The data they'd want to cite is three clicks and a URL guess away.
- **Suggestion:**
  - Add a "Data" line to each page's source note, on both layouts: "Download CSV ↓ · JSON ↗ · CC BY 4.0 · cite as burnaboystats.com". On `/certifications` link `certifications.csv`; on `/records/charts`, `chart-peaks.csv`.
  - Pair and country pages: "Download this table ↓" needs a small endpoint (for example `/api/v1/compare/<pair>.csv`), so this part is a build follow-up.
  - Style the line as a link row with ↓ for downloads and ↗ for pages, the convention the site already uses.
- **Shots:** n/a (DOM and HTML); `certifications-1440-light.jpg` for where the note would sit.

### CC-08 · `/compare` opens on two empty pickers (design · both · medium)

- **Pages:** `/compare` (title "Compare Certified Units — Burna Boy vs Wizkid & More").
- **Evidence:**
  - The first screen at 1440 (`compare-1440-light.jpg`) shows the h1, the lede, the mode control and two identical dashed "CHOOSE AN ARTIST" boxes, each of 8 chips plus "+ 12 more". There is no figure.
  - On phone the second picker ends at y≈1,083 and the head-to-head shortcuts start at y≈1,270, so the first useful tap is below the fold and the first number appears only after two taps.
  - The page title promises "Burna Boy vs Wizkid".
  - Raised 29 Sep and still open; not ruled on.
- **Suggestion:**
  - Pre-fill side A with Burna Boy (it is his site, and every pair page already puts him first when he's in the pair), so one tap gives a result.
  - Or open on a default result (Burna Boy vs Wizkid, the title's own pair) with "Change" on both sides.
  - Move the head-to-head row above the pickers on phone. These shortcuts are the fastest path in.
- **Shots:** `compare-390-light.jpg`, `compare-1440-light.jpg`, `compare-1024-light.jpg`.

### CC-09 · Rows link to almost nothing, though the pages they'd link to exist (build-fix · both · medium)

- **Pages:** `/records/charts`, `/certifications`, pair pages.
- **Evidence:**
  - `/records/charts` has **0** links to `/music/…`. The 6 album pages (Outside, African Giant, Twice as Tall, Love, Damini, I Told Them…, No Sign of Weakness) and at least 9 song pages (Last Last, Ye, On the Low, wgft, City Boys, Jerusalema, Alone, 23, Tatata) exist. So does `/dai-dai` for its 70-chart row.
  - `/certifications` links 13 titles, but they look identical to the 80 that don't link (raised 29 Sep).
  - The pair page's 23 country rows don't link to `/compare/in/<country>`; the HTML has no `/compare/in/` link except the "By country" mode tab.
  - The pair page offers no other pairs: its only onward CTA is "The Afrobeats Board ↗". `/certifications` has "Compare with… 19 artists".
- **Suggestion:**
  - Release titles with a page become links with the site's ↗ and the `--bg-raised` press state, on both layouts and both pages. Rows without a page stay plain.
  - Country names in pair tables link to their board.
  - Add a "More with Burna Boy: vs Davido · vs Rema · vs Tems…" row (and the same for the other artist) above "Next".
- **Shots:** `records-charts-1440-light.jpg`, `compare-pair-burna-boy-vs-wizkid-1440-light.jpg`.

### CC-10 · Desktop ledgers are walls of right-aligned chips (design · desktop · medium)

- **Pages:** `/certifications`, `/records/charts` at >1239px. The same templates serve every board artist.
- **Evidence:**
  - Chips are right-aligned (`justify-content: flex-end`, as the designer's `Certifications.dc.html` drew them) and wrap from the right.
  - A one-plaque row puts its pill ~1,100px from its title ("23", "Dey Play", "On Form": title at x=138, pill at x≈1,250). Multi-row clouds start their first (best) chip at a different x on every row.
  - One-plaque rows are 86px tall. Singles (76 rows) run to about 6,800px.
  - The 1024 band (`certifications-1024-light.jpg`) puts the same chips left-aligned under the title, and reads far better.
  - Raised 29 Sep; still open. It needs a designer because it is the designer's layout.
- **Suggestion:**
  - **(a)** A fixed title column (320–360px) with chips starting at its edge, left-aligned, in the existing order.
  - **(b), the bigger win:** an optional "grid" view, a country-column matrix (27 columns, one cell per country, the tier as a coloured dot). It turns the ledger into a heatmap of "where is this song certified", the thing a journalist screenshots.

  Desktop only; the phone stays as it is.
- **Shots:** `certifications-1440-light.jpg` (tiles 1–5), `records-charts-1440-light.jpg`, `certifications-1024-light.jpg`.

### CC-11 · Issuer tags are set at 9px (build-fix · desktop · low)

- **Pages:** `/certifications` (desktop and 1024).
- **Evidence:** `.badgeIssuer` renders "SONY MUSIC TÜRKIYE", "SONY MUSIC" and "SONY MUSIC AFRICA" at **9px**, under the site's 11px floor (the probe's `under11` list on 1440 and 1024, both themes). They sit inside Dai Dai's TR Diamond and CO Platinum pills.
- **Suggestion:** 11px (`--type-label`). If the pill gets too long, drop "MUSIC" ("SONY TÜRKIYE"), as the pair table already does ("DIAMOND | SONY").
- **Shots:** `certifications-1440-light.jpg` (tile 1, Dai Dai row).

### CC-12 · A gold sentence 178 characters wide (build-fix · desktop · low-medium)

- **Pages:** `/certifications`, the year summary under "Certifications by year".
- **Evidence:**
  - "72 international plaques and counting — the most certified African artist of 2026, and Burna Boy's biggest certification year on record…" is set at 13.5px in gold `rgb(148,94,0)` across **1,280px**, which is **178 characters on one line**. The measure rule is 62ch.
  - Gold is for Burna's own figures, live states and actions; this is a sentence.
  - Raised 29 Sep, still open.
- **Suggestion:** body or muted ink, `max-width: var(--measure)`. If a figure must glow, gold only on "72".
- **Shots:** `certifications-1440-light-datedlog.jpg` (the gold line under the year tabs). DOM: `res1.json`, `paras[2]` of `certifications-1440-light`.

### CC-13 · Footnotes and method notes run full width, then repeat on about 150 pages (design + content · both · medium)

- **Pages:** pair pages and country boards; `/compare` for the method trio.
- **Evidence:**
  - Desktop footnotes (¹ † ‡ § ¶) run x=184–1,256 (**1,072px wide, 140–187 characters a line**, 12.5px; probe `wideSmall` on the pair page). The Nigeria-separated note is 1,034px wide at 120 characters. "Shared records" and "Counted separately" on the country board are the same width.
  - The ¶ note alone is about 120 words.
  - Under them, the three-column method block repeats `/compare`'s text word for word. Its third column ("Not quite everything can be priced", 14 lines) is 7× the first (2 lines), so the block is lopsided. It names Mexico, Sweden, Colombia, Greece, Poland and Turkey even on the US board, where none applies.
  - On the phone pair page the footnotes and method trio take about 1,500px (y≈3,980–5,480 of 5,697).
  - Raised 29 Sep ("pricing explained twice"), still open.
- **Suggestion:**
  - Set footnotes in two 62ch columns on desktop.
  - Print only the marks that appear on that page. Most pages already do; keep that.
  - Replace the repeated method trio on pair and country pages with the one-line "How this is counted ↗" that's already there, and keep the trio on `/compare` and `/methodology` only.
- **Shots:** `compare-pair-burna-boy-vs-wizkid-1440-light.jpg` (tiles 3–4), `compare-in-united-states-1440-light.jpg` (tile 3), `compare-pair-burna-boy-vs-wizkid-390-light.jpg`.

### CC-14 · Phone controls under 44px (build-fix · phone · low)

- **Evidence:**
  - On `/records/charts` the "+4", "+1", "+58", "+2" and "+13" overflow pills are 29–36×30px (8 of them).
  - On `/certifications` the "+7" pill is 41×28.
  - On the US board, "RIAA's own levels ↗" (`.cbRegister`) is 112×20.
  - All pass WCAG 2.5.8's 24px minimum. They are the only controls under 32px in the group and sit among 44px chips.
- **Suggestion:** a 44px hit area through padding plus a negative margin, the trick `compareSummary` already uses. The visible pill stays the same size.

### CC-15 · The separator opens a line on the pair table's "further countries" line (build-fix · phone · low)

- **Pages:** pair pages at 390.
- **Evidence:**
  - Burna Boy vs Wizkid renders "+ 4 further countries where only Burna Boy is certified" then, on the next line, "·at least 89,095". The dot opens the line and has no space after it.
  - The cause is `app/compare/page.tsx:1238`: `… is certified ·{" "}<span className={styles.collapseUnits}>at least…`.
  - The site's own rule (commit 803a803e) is "the · ends a line and never opens one".
- **Suggestion:** bind the dot to the word before it (`certified ·`) and keep a breakable space after it, as the rest of `/compare` does.
- **Shots:** `compare-pair-burna-boy-vs-wizkid-390-light.jpg` (third tile, foot of the country table). Crop at `scratchpad/dr1008cc/view/pair390-further.jpg`.

### CC-16 · The "co-lead" tag contradicts the credit beside it, and on touch its explanation is unreachable (content · both · low-medium)

- **Pages:** `/certifications` (13 tags in the served HTML, both layouts) and `/records/charts` (36).
- **Evidence:**
  - Rows read "GUNNA FT. BURNA BOY · 2025 · co-lead" (wgft), "SAM SMITH FT. BURNA BOY · 2020 · co-lead" (My Oasis), "J HUS FT. BURNA BOY · co-lead" (Play Play), "BYRON MESSIA FT. BURNA BOY · co-lead" (Talibans II) and so on.
  - The explanation exists only as a `title` tooltip ("A lead for Burna Boy with Shakira: the song is in his own Spotify discography"). Phones and keyboards can't reach it.
  - A reader sees "ft." and "co-lead" side by side and assumes an error. The rule (Rule C, ChartMasters') is owner-ruled; only its presentation is in question.
- **Suggestion:**
  - One legend line under the "Singles" heading on both layouts: "co-lead — on Burna Boy's own release, so counted as his lead (ChartMasters' rule) · How this is counted ↗".
  - Make the tag focusable, with the same text as `aria-describedby`.
- **Shots:** `certifications-1440-light.jpg` (tile 3), `records-charts-1440-light.jpg` (tile 4), `certifications-390-light.jpg`.

### CC-17 · Phone chrome changes between sibling pages (design · phone · medium)

- **Evidence:**
  - `/certifications` and `/records/charts` open with the phone back bar ("‹ CERTIFICATIONS 251 ≡"; 69px, sticky) and a gold action bar (75px, fixed). There is no tab bar.
  - `/compare`, the pair pages and the country boards open with the full masthead, a breadcrumb, a kicker that repeats the breadcrumb ("CERTIFICATIONS › COMPARE") and the five-tab bar (87px).
  - On `/compare/in/united-states` the breadcrumb wraps to two lines ("HOME / CERTIFICATIONS / COMPARE /" with a trailing slash, then "BY COUNTRY / UNITED STATES"). Masthead + breadcrumb + kicker take ~200px before the h1 (h1 at y=206).
  - So tapping "Compare ↗" on certs swaps the whole chrome.
  - The owner already solved this shape for `/curator`, `/press` and `/analysis/spotify-unmerge` (30 Sep: phone back bar, five-tab bar kept).
- **Suggestion:** give the compare family the same phone grammar: back bar ("‹ COMPARE", "‹ BY COUNTRY", "‹ BURNA BOY VS WIZKID"), no breadcrumb, no repeating kicker, tab bar kept. That saves about 130px on every compare page's first screen, which is most of what CC-01 needs. It needs a phone design per screen and an entry in `BACK_BAR_ROUTES`; it is a change-list item, since phone chrome is owner-controlled.
- **Shots:** `compare-390-light.jpg`, `compare-in-united-states-390-light.jpg`, `compare-pair-burna-boy-vs-wizkid-390-light.jpg`, against `certifications-390-light.jpg` and `records-charts-390-light.jpg`.

### CC-18 · `/records/charts` desktop: no release on the first screen; 71 country chips in six rows (design · desktop · medium)

- **Evidence:**
  - At 1440×900 the first section heading ("ALBUMS") is at y=1,047 and the first release at y≈1,150, so the first screen shows hero, stat tiles, view toggle and filters, but no data.
  - The country filter is 71 chips plus "All" in six rows, about 330px (y≈710–990).
  - The phone uses a scrolling chip rail and shows the first release at y≈840.
- **Suggestion:**
  - Group the country chips by continent, or put a type-to-filter field before the first 12 chips (most-charted first) and fold none of them away. Both keep every country one tap away without six rows.
  - Shorten the hero (the lede repeats the stat tiles) so a release shows on the first screen.
- **Shots:** `records-charts-1440-light.jpg` (tiles 0–1).

### CC-19 · OG cards bury the figure (design · share · medium)

- **Pages:** the link previews for `/certifications`, `/records/charts`, the pair pages and `/compare/in/<country>` (1200×630, fetched from the live `og:image`).
- **Evidence:**
  - All four use one template: gold kicker, a light Geist title ("Certifications", "Official Charts", "Burna Boy vs Wizkid", "United States"), one grey caption line, the domain.
  - The headline figure is in the grey caption at roughly a quarter of the title's size: "251 awards across 27 countries"; "Wizkid leads by at least 9,993,110 · 32,297,660 vs 42,290,770 certified units".
  - At an X timeline's ~500px the figure is about 9px tall.
  - The pages themselves lead with Anton numerals (251 at 86px; totals at 68px), so the card is off-brand next to the page it previews.
  - The one-gold-on-every-card rule is respected.
- **Suggestion:** card variants that put the figure first, still gold and on the dark card:
  - **certs:** "251" in Anton gold at ~220px, with "certifications · 27 countries";
  - **pair:** both totals side by side with proportion bars and the verdict line;
  - **country:** the market total and the top three names.

  Keep the lockup and the gold. Bump `OG_ART` per the art-change rule.
- **Shots:** `scratchpad/dr1008cc/og-*.png` (grid at `view/og-grid.jpg`).

### CC-20 · `/compare/in` hides who leads each market; its lede was written for another page (content + design · both · low-medium)

- **Evidence:**
  - Rows read "Nigeria NG · 20 ARTISTS · 672 PLAQUES · TURNTABLE (TCSN) · 70,500,000 →". Finding the leader takes a click. At 1440 about 400px of each row is empty between the plaque summary and the units.
  - The lede is "The rest of this page asks who has more. This asks who has more *where*…", written for the mode inside `/compare`. On its own page there is no "rest of this page".
  - Both raised 29 Sep, still open.
- **Suggestion:** a "Leads" cell (avatar + name + units) in the empty middle, and a thin bar for each market's share of the largest (Nigeria 70.5M down to Slovakia 23,502). It makes the long tail visible. New lede: "Every market the board's 20 artists are certified in, ranked by certified units — tap one for its leaderboard."
- **Shots:** `compare-in-1440-light.jpg`.

### CC-21 · With "lead credits only" on, the page shows two different 2026 counts (design · both · low-medium)

- **Pages:** `/certifications#feat=0` (also with `home=0`).
- **Evidence:**
  - With both switches off, the hero reads 125, the desktop "New in 2026" tile reads **62** ("International awards, lead credits"), and the phone back bar reads 125.
  - The dated log underneath still reads **"2026 · 72"**, and its first row is "Location — Dave ft. Burna Boy · NVPI", a featured credit.
  - A sentence explains it ("Turning features off does not narrow this log…"), but two different 2026 figures on one screen read as a bug.
  - Not filtering the log is current, documented behaviour (Job 3 brief), so this asks only for a visual cue, not a behaviour change.
- **Suggestion:**
  - A small state chip on the log's year rail when a switch is off, such as "All announcements · switches don't apply".
  - Or dim featured rows in the log while "lead credits only" is on.
- **Shots:** `certifications-switches-off-390-light.jpg`, `certifications-switches-off-1440-light.jpg`.

### CC-22 · Deep-linked switch views paint the wrong numbers first (build-fix · both · low)

- **Pages:** `/certifications#feat=0`, `#home=0` (shared links).
- **Evidence:** `CertViewSwap.tsx`: "Only the 'all' view is in the static HTML… another view reaches the page only when a reader picks it". A shared link with `#feat=0&home=0` therefore paints 251 and "Certified worldwide" first, then swaps to 125 / "Outside Nigeria · Lead credits" after hydration. That is a flash of a different headline figure on exactly the links people share. Confirmed with scripts off: `certifications-switches-off-390-nojs-prepaint.jpg` shows "Certified worldwide · 251 · Features on · Nigeria included" for a `#feat=0&home=0` link. The length of the window on a real phone (hydration time) was not measured.
- **Suggestion:** reuse the theme's pre-paint script pattern. If the fragment names a non-default view, set `data-cert-view="pending"` on `<html>` and hide the swappable figures (`visibility: hidden`, so no layout shift) until `CertViewSwap` mounts.

### CC-23 · The 1024 stat strip leaves "72 New in 2026" alone on a row (build-fix · 1024 · low)

- **Evidence:** at 1024 the four stat tiles wrap 3+1. "72 / NEW IN 2026" sits alone on the second row with two empty cells beside it, against the site's own rule that a part-filled last row stretches its final cell (`certifications-1024-light.jpg`, y≈930–1,060).
- **Suggestion:** 2×2 or 4-up between 901 and 1239px.

### CC-24 · Gold on labels on the phone screens (design · phone · low)

- **Evidence:**
  - The first screen of phone `/certifications` has **16** gold elements against **6** on desktop:
    - kicker "CERTIFIED WORLDWIDE";
    - "251" and the switch tracks;
    - the "GOLD" tier label;
    - the "ALBUM" tags and "8 certs" counts;
    - "COMPARE WITH…" and "CERTIFIED UNITS BY COUNTRY…";
    - "THE DATED LOG";
    - "+83";
    - the Compare button.
  - The designer's file draws "The dated log" kicker muted.
  - On desktop the active year tab ("2026 · 72") is a solid gold fill (`certifications-1440-light-datedlog.jpg`), where the site's chips use the N2 ember edge + wash for the selected state.
  - Phone `/records/charts` sets its four stat numerals gold (384, 46, 71, 103); desktop sets the same four in ink. The "ALBUMS" and "SINGLES" section headings are gold on both layouts (raised 29 Sep).
  - Under "gold = Burna Boy's own figures, live, or action", the 251 and the switches qualify; "ALBUM" tags, kickers and section headings don't.
- **Suggestion:** set labels, kickers and section headings in ink or muted, and keep gold for the totals, counts and actions. A designer should set it once for both layouts, since the phone kicker was part of Job 3.
- **Shots:** `certifications-390-light.jpg`, `certifications-390-dark.jpg`, `records-charts-390-light.jpg`, `records-charts-1440-light.jpg`.

### CC-25 · Desktop tier rows have no visual share (design · desktop · low)

- **Evidence:**
  - The hero panel's four tier rows (Diamond 8 · 3%, Platinum 104 · 41%, Gold 105 · 42%, Silver 34 · 14%) leave ~300px empty between the count and the percentage at 1440. At 1024 the gap is ~700px.
  - The phone draws a bar in the tier colour on each row; desktop shows only digits.
  - Raised 29 Sep.
- **Suggestion:** a 2px bar in the tier's colour across that gap, filled to the share. It is a desktop drawing, not a copy of the phone's.

---

## Previously raised and now fixed (checked live, 8 Oct)

- The compare kicker no longer sits on the breadcrumb rule: there is a 16px gap at every width (#2b979458). The kicker still repeats the breadcrumb, which is folded into CC-17.
- `/records/charts` Table-view count line and the No. 1 + country filter logic (f3b8d919, 7c284c03).
- The empty cover tiles on chart rows now show the lettered placeholder (V-afrobeats-02).
- `/compare` picker overflow on phones (#437).
- The phone certifications switch row is under the lede, and the portrait is back (Job 3, #3265d53e, #410f046d).

## Checked and fine

- Contrast: 0 failures in 20 captures (light and dark, at 390, 1024 and 1440), composited against the real ground.
- Overflow: none at 390, 1024 or 1440 on any page in the group.
- Page titles carry their figures ("Burna Boy Certifications — 251 Plaques in 27 Countries", "Burna Boy Chart History — 46 No. 1s & Chart Peaks", "Burna Boy vs Wizkid: Certified Units Compared"). The pair OG description states the result.
- Country-board rows are whole-row links with a stretched `::after`. Their 24px `<a>` box is not the real hit area, so it is not a tap-target finding.
- The "unnamed links" the audit script reported on phone `/certifications` and `/compare` (10 each) are the chips inside closed `<details>` folds ("Compare with…", "+ 12 more"). Chrome reports them as sized with empty `innerText`, so this is a probe artefact, not a bug.
- The Burna Boy row on country boards links to `/certifications`, as the other artists link to their board pages.

## Ask the owner to reconsider

None of the findings above reverses a ruling. The one place a ruling gets close is CC-01 and CC-17 (the phone bars). They are written as change-list questions, which is what the owner's "phone chrome is not redrawn" rule asks for.

## Notes for the Claude Design handoff (this group)

- **Rules that bind this group:**
  - Desktop and phone are separate designs at 900px.
  - No accordions; the existing folds ("Compare with…", "Certified units by country…", "All 93 releases", the picker's "+ 12 more", "Show all ↓") stay.
  - Tier colours are data colours, never gold.
  - Gold = Burna's own figures, live states, actions; the h1 split word only.
  - The phone bars are not redrawn; changes go on the change list.
  - OG cards stay gold.
  - Every figure is drawn as a data slot sized for its longest value.
  - Featured/lead follows Rule C; "co-lead" is a tag, and the headings stay "Singles" and "Featured".
  - Today's levels price every plaque.
  - Colombia is the only unpriced market.
  - The `/updates` feed is Burna-only.
- **Biggest jobs for a designer:**
  - CC-01 + CC-17: the phone pair-page order and the compare family's phone chrome.
  - CC-04: the pair table as a butterfly.
  - CC-10: the desktop ledger grid and an optional matrix.
  - CC-19: figure-first OG cards.
  - CC-05: the desktop switch placement.
  - CC-06: one desktop grid for the family.
- **Developer-only (no design needed):** CC-11, CC-12, CC-14, CC-15, CC-22, CC-23, the build half of CC-07 (CSV links), CC-09 (row links), and the copy in CC-03(b), CC-16 and CC-20.
