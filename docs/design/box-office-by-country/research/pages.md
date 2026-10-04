# Pages research: the box-office pages and the certifications screens

**For:** Claude Design: job 1 (Highest-Grossing Artists by Country), job 2 (Highest-grossing shows, a full design pass) and job 3 (certifications phone density). This file was written when the brief had two jobs; where it says "job 2" for the certifications screens, read job 3.
**Read on:** 3 Oct 2026.

> **Superseded in part by #406 (merged and live 4 Oct 2026, 01:48 BST, `main` `1cd8972b`).** #406 renamed the board "Highest-grossing shows" in every place B5 lists (desktop h1 "Highest-Grossing **Shows**", one gold word; phone h1 "Highest-grossing **shows**"; phone bar label "Highest-grossing", `nowrap`, gaps 8px below 360; breadcrumb, OG card, metadata, JSON-LD, aria-label, hub, Tours, footers, the countries page's buttons), and made every phone board row read "{artist} · {city} · {year}", his included. After #406, measured on the live page: the bar label is one line at 320, 360 and 390; **5 of 82** metas ellipsise at 320 (3 his), none at 360 or 390; the h1 is 2 lines and the foot 11 / 10 / 9 lines at 320 / 360 / 390, as before. Everything below records the code as read **before** #406; the brief (§5.1, §5.2) carries the current state.
**Code read at:**

- `main` `2ac28b4a` (after PR #403, the African box-office extension) for `/records/tours/revenue`, its phone screen, and the data.
- PR **#405** (`feat/revenue-leaders-by-country`, head `a88639e2`, which merged `main` after #403 into the PR) for the new page `/records/tours/revenue/countries`, and for the two links #405 adds to the board. That merge changed the copy readers see from "stand" to "run" (see A0); this file quotes the merged wording. #405 is open and due to merge on 3 Oct 2026. **Line numbers in A and B are from #405's head**, so they hold once it merges. On `main` before #405, `revenue/page.tsx` lines after 130 are 3 lower and `MobileRevenue.tsx` lines after 123 are 7 lower.
- `main`'s tip at the time of writing is `ce03f202`, a stats refresh that touches none of these files.
- PR **#404** (`feat/certs-international-switch`, head `935e4ffe`) for `/certifications` and `/afrobeats/<artist>`. That PR adds the switch row and the kicker that adapts to the view. It was open while this was written.

**Measured** means read from the live site, https://burnaboystats.com, on 3 Oct 2026, in headless Chrome with phone emulation at 320, 360 and 390 px wide, in the page's own fonts (the method and the script, `research/measure-phone.js`, are in §E). The countries page and the switch row were not live yet. Their phone figures are **simulated**: the live revenue and certifications screens were rebuilt in place from those screens' own CSS classes, with the PRs' own strings, and then measured. That is close to exact, because #405's phone screen is built from the revenue screen's own classes, and #404's switch row copies /compare's CSS, inlined here.
**Status:** report only. Nothing in the app was changed.

How to read the citations:

- `app/...:N` is a file and line in the site's repo. Claude Design cannot open these. They are there so the owner and Claude Code can check each claim.
- **Live** means the figure is computed from the site's data on every build, so it changes when the data does. **Typed** means someone wrote it by hand. Every figure on these pages is live unless it says otherwise. The owner's rule is that no figure is typed.
- Quoted copy is exact, with live figures filled in as they stand today.

The phone and desktop layouts switch at **900px**. Below 900px each page shows its phone component, and the desktop half (`.desktopOnly`) is `display:none` (`app/records/tours/revenue/revenue.module.css:5-6`). Both halves are in the HTML at once, so the document carries two `<h1>`s and only one is ever visible.

---

## 0. Summary

| Page | Desktop component | Phone component | Phone top bar today | Phone action bar |
|---|---|---|---|---|
| `/records/tours/revenue/countries` (new, #405) | `RevenueCountries.tsx` | `MobileRevenueCountries.tsx` | `BY COUNTRY` · gold badge `12 countries` | `Every show, ranked` → `/records/tours/revenue` |
| `/records/tours/revenue` | `page.tsx` + `RevenueBoard.tsx` | `MobileRevenue.tsx` | `REVENUE PER SHOW` · gold badge `$6.15M` | `Make a stat card` → `/share` |
| `/certifications` | `page.tsx` + `CertExplorer.tsx` + `CertHistoryByYear.tsx` | `MobileCerts.tsx` | `CERTIFICATIONS` · muted count `249` | `Compare ↗` · `Stat card` · filter icon |
| `/afrobeats/<artist>`, phone certs section | (desktop page, out of scope) | `MobileCerts.tsx` (same component) | artist name · muted count | `Compare <Name> ↗` · filter icon |

The page names the owner has fixed are **"Highest-Grossing Artists by Country"** (the new page), **"Highest-grossing shows"** (the box-office board, renamed; the URL stays `/records/tours/revenue`), and **"Multi-night runs"** (the section under the board). In the code read, the board is still called "Revenue per show" / "Highest Revenue Per Show" everywhere. B5 lists every place that name appears.

---

## A. `/records/tours/revenue/countries`: Highest-Grossing Artists by Country (job 1)

Files (#405): `app/records/tours/revenue/countries/page.tsx` (route, metadata, JSON-LD), `app/components/RevenueCountries.tsx` (desktop), `app/components/MobileRevenueCountries.tsx` (phone), `app/records/tours/revenue/countries/countries.module.css` (desktop additions), `app/components/mobileRevenueCountries.module.css` (phone additions), `app/lib/revenueByCountry.ts` (every figure), `app/records/tours/revenue/countries/opengraph-image.tsx` (share card).

### A0. Where every figure comes from

Every figure is derived in `app/lib/revenueByCountry.ts` from the board's two arrays in `app/data/tourRevenue.ts`: `revenueShows` (single nights) and `revenueStands` (multi-night runs). Nothing on the page is typed (`countries/page.tsx:7-14`).

- **Country** comes from the row's flag. The name and continent come from the tour map's country list (`performedCountries.ts`, with the Caribbean folded into North America). Countries he has never played (Japan, Singapore, the Philippines) come from `OUTSIDE_HIS_MAP` (`revenueByCountry.ts:44-48`). An unknown flag throws at build.
- **An artist's total in a country** is every reported gross there, multi-night runs included. **Nights** counts one per single show plus every night of a run (`revenueByCountry.ts:129-157`).
- **Best night** comes from single shows only. A run never stands in for a night (`:149-151`).
- **Ranking:** inside a country, total, then best single night, then name (`:124-125`). Countries are ranked by total, then name. Continents are ranked by total, then the fixed order Africa, Europe, North America, South America, Asia, Oceania (`:34`).
- **Money formats:** `usdM` = `$15.50M` (two decimals, used for every figure on the phone and for every figure except the row totals on desktop). `usdFull` = `$15,495,482` (desktop row totals and JSON-LD) (`:229-231`).
- **The copy word:** after the merge, reader-facing copy says "multi-night run(s)", the board's own heading word taken from `app/lib/multiNightRuns.ts` (`RUNS_HEADING`). At #405's head it said "multi-night stand(s)". The code keeps `stand` as its identifier.
- **The summary sentence** (`summaryLine`, `:244-250`): "82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4 continents".
- **Lede** (`countries/page.tsx:21`), live: "Every reported box-office gross by an African artist, added up country by country — 82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4 continents. Burna Boy leads 9 of the 12."

`data.md` has every figure the page shows, recomputed independently.

### A1. Desktop, top to bottom (`RevenueCountries.tsx`)

The look is the revenue board's own. The component imports `revenue.module.css` for the hero, ranks, names and grosses, and adds only the cards, country heads and five-column row (`countries.module.css:1-4`). Gold marks his figures only (`tests/goldMarksHisRows.test.ts`).

1. **Breadcrumb** (`RevenueCountries.tsx:96`): `Home / Career Records / Tours & Live / Highest Revenue Per Show / Highest-Grossing Artists by Country`. The labels come from `SEGMENT_LABELS` (`app/lib/seo.ts`, `revenue:` and `countries:`). The fourth crumb still carries the board's old name.
2. **Hero** (`:99-115`)
   - Eyebrow (ember rule + mono caps): `African artists · reported box office`.
   - H1: `Highest-Grossing Artists` + `by Country` in gold ink (`inkText`, the split word, `:105-107`).
   - Lede: the A0 sentence (`revenue.module.css` `.lede`: `--type-lede`, max 62ch).
   - One button, secondary: `← Revenue per show` → `/records/tours/revenue` (`:110-112`). It names the board by its old name.
3. **"By continent"** (`:118-154`): an H2 in the board's `standsTitle` style (Anton caps), then a grid of cards (`countries.module.css:9-30`, `repeat(auto-fit, minmax(170px, 1fr))`, hairlines drawn per card). Today there are **five cards**: four continents with data in rank order, then Africa.
   - A card with data, top to bottom: continent label (mono caps, ember) · two fixed mono lines, `60 nights` / `2 countries` (`:125-132`, kept on two lines so leader and figure align across the row) · leader name (gold if his, else plain) · leader's total in Anton 34px (gold if his, muted otherwise) · `of $34.31M` (mono, only when more than one artist) · runner line `Next: Asake · $4.28M`, or `The only artist reported` (`Runner`, `:33-41`).
   - Today: North America `Burna Boy $21.18M of $34.31M · Next: Asake · $4.28M` · Europe `Burna Boy $20.68M of $29.27M · Next: Fally Ipupa · $3.16M` · Oceania `Burna Boy $3.12M of $3.22M · Next: Fireboy DML · $0.10M` · Asia `Tyla $2.06M`, with no "of" and `The only artist reported`.
   - **Africa card** (`:145-151`): label `Africa` · muted title `No reported box office yet` · note `Box-office reporting barely reaches venues in Africa — not reported, not unplayed.` (`AFRICA_NOTE`, `:27-28`). The CSS keeps it "quieter than the cards with data" (`countries.module.css:70-77`).
   - **South America** also has no reported box office. It is not printed anywhere on the page: the component renders the continents with data plus Africa only (`:91-92`).
4. **Countries, grouped by continent** (`:157-193`). For each continent with data:
   - **Continent head**: Anton 40px caps H2 (`North America`), with the meta on the right `$34.31M · 60 nights` (mono, muted), over a 2px rule (`countries.module.css:81-106`).
   - For each country (ranked), a **country head**: H3 Anton 26px `🇺🇸 United States`. On the right, the leader line: leader name (gold if his) + `leads · $15.50M of $26.92M · 48 nights reported`. A one-artist country reads `Tyla · the only artist reported · $1.18M · 1 night` (`leaderLine`, `revenueByCountry.ts:258-262`).
   - **A five-column table** (`role="table"`, aria-label `Box office leaders in United States`). The head row reads `# · Artist · Best night · Nights · Total`, and the grid is `52px 160px 1fr 80px 140px` (`countries.module.css:135-152`; `46px 130px 1fr 64px 120px` below 1240px).
   - **Artist row** (`ArtistRow`, `:43-80`): rank `01` (rank 1 lit) · name (gold if his) · best-night cell on two lines, `$1.72M · Capital One Arena` over `Washington, D.C. · 2024 · 13,892 tickets` · nights `16` · total `$15,495,482` (gold if his).
   - **An artist with no single night** (today: Wizkid in the UK) reads `Nights reported together` over `3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)` (`:64-69`).
   - **An artist whose total includes runs alongside single nights** (today: Burna Boy in Canada) gets a third line in the best-night cell: `Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal` (`standNote`, `revenueByCountry.ts:284-290`).
   - Rows hover to `--bg-raised` (`countries.module.css:153-154`). His rows carry the board's `rowHis` class.
5. **Method note** (`:195`, `METHOD_NOTE` `:30-31`), 13px muted, max 104ch: "What counts: per-show box-office grosses as reported by Billboard Boxscore & Pollstar (as aggregated by TouringData) and cross-checked against press reporting — the rows of the revenue board. An artist's total in a country is every reported gross there added up, including multi-night runs reported as one figure, and a run counts every night it played; the best night is a single show only. Reporting is incomplete, so an artist missing from a country means not reported, not that they did not play there — and Boxscore and Pollstar rarely publish grosses from venues in Africa, which is why the continent has no reported box office here yet." (**643 characters, one paragraph**. Its source wording differs from the board's own `REVENUE_SOURCE`; see A4 item 6.)
6. **Back row** (`:196-203`): `← Revenue per show` → `/records/tours/revenue`, then `Tours` → `/records/tours`, both secondary.
7. **Footer** (desktop only; `app/lib/links.ts` `footerFor["/records/tours/revenue/countries"]`): note `Box-office figures via Billboard Boxscore.` and links `Revenue · Tours · Tour map · Africa's Biggest · Methodology`. There is no Keep exploring block.

### A2. Phone, top to bottom (`MobileRevenueCountries.tsx`)

Built from the revenue screen's own parts (`mobileRevenue.module.css`). The countries screen adds its own CSS for its bar titles, country head and wrapping meta (`mobileRevenueCountries.module.css`). Every country's full list stays open. There is no accordion (`:21-25`).

1. **Back bar** (`:54-63`), sticky: a 44px round back button → `/records/tours/revenue`, label `By country` (mono 11px caps, `.backLabel`), gold badge `12 countries`, and the menu button. Measured: one line at all three widths, because #405 sets the label `nowrap` and closes the bar's gaps to 8px below 360. Without that rule it wraps to two lines at 320 (§E).
2. **Hero** (`:65-72`): kicker `African artists · reported box office` (ember mono caps) · H1 (Anton 40px caps) `Highest-grossing artists` + `by country` in the gold ramp (`.gold`) · lede (the A0 sentence, `--type-lede` 18px/1.5).
3. **Stat grid**, 2-up (`:74-85`): `9 of 12` / `COUNTRIES HE LEADS` · `89` / `REPORTED NIGHTS`. Values are Anton 32px gold.
4. **"By continent" bar** (`:88`, a meta bar used as the H2).
5. **Continent rows** (`:91-109`). These have no rank: the rank column folds away (`.noRank`). The name is `North America`. The meta wraps, with the leader name gold if his: `Burna Boy leads · $21.18M of $34.31M · next Asake, $4.28M`. On the right is the **continent's** total `$34.31M`, deliberately muted (`:89-90`), over `2 countries`. Rows led by someone else carry the faint wash (`rowOther`). Asia reads `Tyla · the only artist reported`.
6. **Africa row** (`:110-117`): `Africa · No reported box office yet` over the `AFRICA_NOTE`. It has no right column. South America is absent, as on desktop.
7. **For each continent** (`:120-145`):
   - A continent meta bar (H2): `NORTH AMERICA` on the left (text colour, bold) and `$34.31M · 60 nights` on the right (dim).
   - For each country, a **country head** (`.countryHead`, padding 14/18/10, hairline under): H3 Anton 20px `🇺🇸 United States`, then the leader line at 12.5px, the same string as desktop (`Burna Boy leads · $15.50M of $26.92M · 48 nights reported`).
   - **Artist rows** (`Row`, `:28-46`): rank `01` · name (600 weight) · meta that **wraps** (`.wrap`, line-height 1.45), which is the best-night line plus, for Canada's leader, `. Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal`. On the right are the total `$15.50M` (Anton 17px, gold if his) and `16 nights` (mono, dim). Other artists' rows carry the faint wash.
8. **Foot** (`:147`): the full `METHOD_NOTE` at 12px/1.55, dim. Measured (simulated): **11 lines at 390, 12 at 360, 13 at 320**, 223–260px tall (§E).
9. **Action bar**, fixed, gold pill: `Every show, ranked` → `/records/tours/revenue` (`:150-154`).

### A3. Behaviours (both layouts)

- **No filters, no switches, no client code.** The page is a static server component. No live regions are needed, because nothing changes after load.
- **Links in:** the board's desktop hero, a gold primary `Highest-grossing artists by country →` (`revenue/page.tsx:132-134`, merged), and the board's phone screen, a full-width gold primary of the same words right under the stat grid (`MobileRevenue.tsx:125-130`, `.linkRow`). Also the Records hub (`app/lib/recordBooks.ts:32`, title `Highest-Grossing Artists by Country`, desc "Who leads every country and continent for reported box office"), the `/records/tours` footer (`Box office by country`), site search (`app/lib/searchIndex.ts`, figure `12 countries` from `searchStats.ts`), and the sitemap.
- **Links out:** back to the board (hero button, back row, phone back bar, phone action bar) and `Tours`. There are no links to artist pages, country boards or the tour map from inside the lists.
- **Headings:** H1 → H2 per continent (plus "By continent") → H3 per country. Desktop tables use ARIA table roles. The phone rows are plain divs.
- **Empty states:** a continent with no reported box office. Only Africa is drawn (A1 item 3, A2 item 6). There is no empty state for the page as a whole.
- **Edge states that exist today** (all in `data.md` §7): five one-artist countries; one one-artist continent (Asia); a runs-only artist row (Wizkid, UK); a leader whose total is mostly runs (Burna Boy, Canada, 82.8%); a leader whose best night is smaller than the runner-up's (Canada); the narrowest lead (Ireland, 53.5%).
- **SEO/share:** title `Highest-Grossing African Artists by Country` (`page.tsx:24`). The JSON-LD ItemList holds one item per country ("United States — Burna Boy, $15,495,482 reported"), plus a Dataset. The OG card (`opengraph-image.tsx`) has kicker `African artists · box office`, title `Highest-Grossing Artists by Country`, and sub `Who leads each of 12 countries for reported box office by African artists — Burna Boy leads 9`. It stays gold, as every OG card does.
- **Mobile chrome:** the route is in both `BACK_BAR_ROUTES` and `ACTION_BAR_ROUTES` (`app/lib/mobileScreens.ts`), so the site masthead and five-tab bar are hidden and the screen's own back bar and action bar show.

### A4. What is wrong with it today (observations; the design call is the designer's)

1. **It was assembled, not designed.** Every part is borrowed from the box-office board: the board's hero, its H2 style for "By continent", its row grammar, and its meta bars as continent headings on the phone. Nothing on the page shows geography. There is no map, no continent graphic, and no visual comparison between countries ($26.9M in the US against $0.39M in Singapore, a 70× spread, reads as two rows of text).
2. **The continent summary appears twice on each layout.** The phone's "By continent" rows repeat as the continent meta bars further down (`$34.31M · 60 nights`). Desktop does the same with the cards and the continent heads.
3. **The phone's money labels lose resolution below $1M.** `usdM` prints `$0.05M`, `$0.08M` and `$0.10M` for 13 of the 29 artist rows. The board's own phone screen solved this on 3 Oct with `compactGross` (`$527.4K`, `app/lib/grossLabel.ts`). This page does not use it.
4. **The longest phone meta line is 160 characters.** It belongs to Burna Boy in Canada (best night plus the two-run note) and wraps to **6 lines at 320, 5 at 360 and 4 at 390** (a 120–156px row; §E). The runs-only row (Wizkid, UK) is 86 characters, 3–4 lines, and leads with "3 nights reported together". Even a typical best-night line (62 characters) takes 2–3 lines.
5. **The method note is a 643-character paragraph** at the foot of both layouts: 11–13 lines on a phone.
6. **Names lag the owner's decisions.** These still read "Revenue per show": the back buttons (`← Revenue per show`), the breadcrumb (`Highest Revenue Per Show`), and the "By country" phone bar label. The footer note says `Box-office figures via Billboard Boxscore.`, while the board's own source wording is TouringData republishing Billboard Boxscore and Pollstar (`REVENUE_SOURCE`). The method note says "Billboard Boxscore & Pollstar (as aggregated by TouringData)".
7. **"Revenue" in copy:** none on this page's own body text except the old board name in buttons and crumbs. The owner's rule for new copy is **gross**, never "revenue".
8. **Venue names differ from the tour map's.** The board says `Centre Bell, Montreal` and `Hallenstadion, Zurich`, while the tour map's event lines say "Bell Centre, Montréal" and "Hallenstadion, Zürich" (`performedCountries.ts:70,89`). If the designer draws a map that labels venues, take the board's spelling: it is the data this page reads.

---

## B. `/records/tours/revenue`: the box-office board, being renamed "Highest-grossing shows" (job 2)

Files (`main`, plus #405's two links; line numbers from #405's head): `app/records/tours/revenue/page.tsx`, `app/components/RevenueBoard.tsx` (desktop filter + board, client), `app/components/MobileRevenue.tsx` (phone, client), `app/records/tours/revenue/revenue.module.css`, `app/components/mobileRevenue.module.css`, `app/lib/multiNightRuns.ts` (the runs' heading, lede and ticket phrase), `app/lib/grossLabel.ts` (phone gross labels), `app/records/tours/revenue/opengraph-image.tsx`. Data: `revenueShows` (82), `revenueStands` (3), `REVENUE_SOURCE`, `REVENUE_AS_OF` (`app/data/tourRevenue.ts:20-28`).

Figures used below, all live (`data.md` §6): **82** shows, **32** his, **50** others; No. 1 is London Stadium, 2024, **$6,147,209** / **58,973** tickets; source month **October 2026**.

### B1. Desktop, top to bottom

1. **Breadcrumb** (`page.tsx:114`): `Home / Career Records / Tours & Live / Highest Revenue Per Show`.
2. **Hero** (`:117-140`)
   - Eyebrow `Box office · all-time`.
   - H1 `Highest` + `Revenue Per Show` in gold ink (`:123-125`). The owner's new name is "Highest-grossing shows"; the split word is the designer's to place, gold on the split word only.
   - Lede (`:126-130`): "Every reported single-show gross by an African artist we have verified — 82 shows, ranked. Burna Boy holds 32 of them." The clause "— more than every other artist on this list combined" is printed only while his count beats everyone else's together. Since #403 it does not (32 against 50), so it has dropped out on its own.
   - Buttons (`:131-138`, after #405 merges): **gold primary** `Highest-grossing artists by country →`, then secondary `See the grosses visualised →` → `/records/visualized#grosses`. On `main` before #405 there is only the secondary.
3. **Filter band** (`RevenueBoard.tsx:54-76`): label `Artist`, then chips, each with a count: `All artists 82` · `Burna Boy 32` · `Davido 10` · `Asake 8` · `Wizkid 1` · `Rema 5` · `Tyla 3` · `Fally Ipupa 1` · `Tiwa Savage 16` · `Tems 4` · `Fireboy DML 2`. The design's order comes first (`CHIP_ORDER`, `:20`); any other artist is appended by count. Right-aligned is `82 of 82 shown`. Chips are `aria-pressed` toggles; clicking the active chip returns to All.
4. **Board** (`:78-133`), `role="table"` "Highest revenue per show": columns `# · Artist · Venue · Tour · Tickets · Gross`. Rows show rank `01`–`82` (the top three lit, the rest muted), artist (gold if his), flag + venue over city, `tour · year`, tickets, and the gross in full `$6,147,209` (gold if his). **Filtering never renumbers**: a row keeps its rank on the full board (`:11-14`). A dash for a missing headcount (`NotReported`) exists in code, but no row needs it today.
5. **Multi-night runs** (`page.tsx:149-176`), inside the board section. H2 `Multi-night runs` (`RUNS_HEADING`). Lede (`RUNS_LEDE`): "Concerts played over two or more nights at the same venue and reported only as one combined total, so they're listed here rather than ranked against single nights." Three rows, ordered by gross: flag + `venue, city` · artist (gold if his) `· tour · dates` · gross in full (gold if his) · `50,814 tickets over 3 nights` (`runTickets`). The rows:
   - 🇬🇧 The O2 Arena, London · Wizkid · Made in Lagos Tour · 28–29 November and 1 December 2021 · $2,875,468 · 50,814 tickets over 3 nights
   - 🇨🇦 Scotiabank Arena, Toronto · Burna Boy · I Told Them… Tour · 24–25 February 2024 · $2,801,928 · 29,579 tickets over 2 nights
   - 🇨🇦 Centre Bell, Montreal · Burna Boy · I Told Them… Tour · 28–29 February 2024 · $1,904,384 · 26,303 tickets over 2 nights
   - Then a note (`:172-175`): "No per-night split is invented for them: each total would sit in the top five of a board of single nights it never had." This holds today: the totals would rank No. 4, No. 5 and No. 5.
6. **Source note** (`:63-64`, `:177`): "Box-office reports as published by TouringData, which republishes Billboard Boxscore and Pollstar reports — read at its site archive and in its own posts, cross-checked with press reporting, as of October 2026. Each entry is a single night's gross. Multi-night runs reported only as one combined total are listed beneath the board with the reported figures; they cannot be ranked against single nights, and no per-night split is invented for them."
7. **Back button** `← Tours` (`:178-180`).
8. **Footer** (desktop only, `links.ts:289-298`): note `Box-office figures via Billboard Boxscore.`; links `Tours · Festivals · Africa's Biggest · The Afrobeats Board · Methodology`.

### B2. Phone, top to bottom (`MobileRevenue.tsx`), the design's "screen 14"

1. **Back bar** (`:94-103`): back → `/records/tours`; label **`Revenue per show`** (mono 11px bold caps, letter-spacing .11em; **this label wraps**, with no nowrap or ellipsis, `mobileRevenue.module.css:46-52`); gold badge **`$6.15M`** (the top gross); menu button.
2. **Hero** (`:105-114`): kicker `Box office, per night` · H1 `Revenue per` + `show` in the gold ramp · lede (`page.tsx:78`): "Eighty-two documented shows by African artists, ranked by gross — 32 of them his." (`numberWord(82)`).
3. **Stat grid** (`page.tsx:80-83`): `$6.15M` / `BIGGEST NIGHT` · `58,973` / `TICKETS, LONDON`.
4. **Link row** (after #405 merges; `MobileRevenue.tsx:125-130`): a full-width gold primary `Highest-grossing artists by country →`.
5. **Chip rail** (`:132-144`, `ScrollRail`, label "Filter the board"): `ALL 82` · `BURNA BOY 32` · `OTHERS 50`. Three filters, not per artist. Ranks never renumber.
6. **Meta bar** (`:146-154`): `82 SHOWS` on the left; on the right a legend (gold dot) `HIS NIGHTS`.
7. **82 rows** (`:156-170`): rank · venue · meta. The meta reads `London · I Told Them… Tour · 2024` for his rows, and `Fally Ipupa · Paris · 2023` for others', who are named because "the tint alone made 'whose show is this?' a legend lookup" (`page.tsx:86-93`). On the right, the gross (`compactGross`: `$6.147M` at $1M and up, `$527.4K` below, so no two neighbours collide) and tickets. **The meta line is `nowrap` with an ellipsis** (`mobileRevenue.module.css` `.meta`). Others' rows carry the faint wash; his take the gold gross.
8. **Multi-night runs** (`:172-197`): H2 `MULTI-NIGHT RUNS` (Anton 26px), lede `RUNS_LEDE` (13.5px), then three rows: flag + place · **artist** · tour · dates on a line of its own (so "24–25" never splits) · `29,579 tickets over 2 nights`. The gross sits on the right (gold if his). The rows wrap rather than clip.
9. **Foot** (`page.tsx:110`), 12px/1.55, dim: "Box-office reports as published by TouringData, which republishes Billboard Boxscore and Pollstar reports — read at its site archive and in its own posts, cross-checked with press reporting, as of October 2026. The board ranks every reported show by an African artist we have verified, not only his — a missing night means no gross for it was reported, or none we could verify yet. Multi-night runs reported only as one combined total sit beneath the board with the reported figures; no per-night split is invented for them." (**524 characters**; the dash-legend sentence is added only while a row lacks a headcount, and none does today.)
10. **Action bar** (`:201-205`), fixed, gold: `Make a stat card` → `/share`.

### B3. Behaviours

- Desktop chips filter by artist (11 chips). Phone chips filter all / his / others. Both are client state only, with no URL. Neither renumbers.
- No live region announces the filter result on either layout. The desktop's `N of 82 shown` is visible text. The phone's meta bar count (`82 SHOWS` → `32 SHOWS`) changes silently.
- There is no empty state: every chip has at least one row.
- The JSON-LD ItemList lists all 82 shows. The Dataset carries the same counts. Title: `Burna Boy Concert Revenue — Highest-Grossing Shows`. OG card: kicker `Box office`, title `Highest Revenue Per Show`, sub `Every verified single-show gross by an African artist — 82 shows, ranked`.

### B4. What is wrong with it today (phone text density)

1. **The top bar title wraps.** `REVENUE PER SHOW` beside the `$6.15M` badge fits on one line at 360 and 390 but takes two lines at 320 (§E). The owner's new name, `HIGHEST-GROSSING SHOWS`, is longer: it takes **two lines at 320 and 360** and one at 390. Forcing it onto one line pushes the bar wider than the screen at 320 and 360. The bar does not grow either way (its 44px buttons set its height), so the two lines squeeze into the bar's middle.
2. **The hero states the page three times.** The kicker (`Box office, per night`), the H1 (`Revenue per show`) and the lede ("Eighty-two documented shows…") say the same thing three ways. The badge `$6.15M` and the first stat cell `$6.15M BIGGEST NIGHT` print the same figure twice on one screen.
3. **The foot note is 524 characters**: 9 lines at 390, 10 at 360 and 11 at 320 (185–223px; §E). It repeats the "runs sit beneath the board" sentence that the runs lede, right above it, has just said.
4. **The runs section has two explanations and a note.** On the phone it has a heading, a 160-character lede, and the foot repeats it. On desktop, the lede plus the "No per-night split is invented…" note plus the source note's last sentence make three statements of one rule.
5. **The meta line truncates.** Rows whose meta does not fit end in "…" with no way to read the rest: **29 of 82 rows at 320, 7 at 360 and 1 at 390** (§E). Nearly all are his rows (27 of the 29 at 320), because his meta carries the tour name ("Melbourne · No Sign of Weakness Tour · 2025" is cut even at 390).
6. **"Revenue"** is in the H1, the bar label, the breadcrumb, the OG title, the JSON-LD names, the search entry, the Records hub row and `/records/tours`' jump card. New copy says **gross**.

### B5. Every place the board's old name lives (for the rename to "Highest-grossing shows")

| Where | Current text | File |
|---|---|---|
| Desktop H1 | `Highest Revenue Per Show` | `revenue/page.tsx:123-125` |
| Phone bar label | `Revenue per show` | `MobileRevenue.tsx:100` |
| Phone H1 | `Revenue per show` | `MobileRevenue.tsx:110-112` |
| Phone kicker | `Box office, per night` | `MobileRevenue.tsx:106` |
| Breadcrumb segment (both this page and the countries page) | `Highest Revenue Per Show` | `app/lib/seo.ts` `SEGMENT_LABELS.revenue` |
| `<title>` / share title | `Burna Boy Concert Revenue — Highest-Grossing Shows` / `Burna Boy — Highest Revenue Per Show` | `revenue/page.tsx:32-39` |
| OG card | `Highest Revenue Per Show` | `revenue/opengraph-image.tsx` |
| JSON-LD names | `Highest reported revenue per show — African artists` | `revenue/page.tsx:41-61` |
| Board aria-label | `Highest revenue per show` | `RevenueBoard.tsx:80` |
| Records hub row | `Highest Revenue Per Show` | `app/lib/recordBooks.ts:31` |
| Tours phone "More from the road" row | `Revenue per show` | `MobileTours.tsx:82-87` |
| Tours desktop jump card | `See all 82` / "Every show on the list, ranked by reported revenue" | `records/tours/page.tsx:316-322` |
| Countries page buttons | `← Revenue per show` (×2) | `RevenueCountries.tsx:111,198` |
| Footers | `Revenue` (tours) · `Tour revenue` (nav group) | `app/lib/links.ts:62,283,302` |

The design only has to set the names on the two pages it draws. The code side (Claude Code) carries the rest.

---

## C. `/certifications`, with #404's switches (job 2)

Files (#404): `app/certifications/page.tsx`, `app/components/MobileCerts.tsx` (phone), `app/components/CertExplorer.tsx` (desktop filter + groups), `app/components/CertHistoryByYear.tsx` (desktop log), `app/components/CertViewSwitches.tsx` + `certSwitches.module.css` (the switch row, one component for both layouts), `app/components/CertViewSwap.tsx` (swaps server-built blocks per view), `app/lib/certScope.ts` (every view rule and label), `app/lib/useCertView.ts` (the fragment state).

### C1. The switches, as #404 builds them

- **Two switches, /compare's own style** (owner, 3 Oct: "use the compare togglr style"). Each is a muted bold mono NAME, then a 30×16 track with a knob (gold when on), then the STATE word beside it (`CertViewSwitches.tsx:53-79`, CSS copied from /compare, `certSwitches.module.css:1-80`).

  | Switch | Name (desktop / phone <760px) | On (default) | Off |
  |---|---|---|---|
  | Featured appearances | `FEATURED APPEARANCES` / `FEATURES` | `ON · EVERY PLAQUE HELD` | `OFF · LEAD CREDITS ONLY` |
  | Home country | the artist's own `country` in full: `NIGERIA`, `SOUTH AFRICA`, `GHANA` | `INCLUDED` | `LEFT OUT` |

- **Order:** Featured appearances first, then the home country (the owner: the "same" as compare).
- **There is no "All" switch:** the tier row's `All` right below is the way back. A switch that would change nothing is **not rendered** (`scopeSwitchable` / `creditSwitchable`, `certScope.ts:144-170`): Black Sherif and Seyi Vibez get no home switch. If neither applies, there is no row.
- **State:** stored in the URL fragment, `#feat=0` / `#home=0`, present only when a switch is off (`certScope.ts:46-55`). The static HTML is always the both-on view. Keyboard: `role="switch"` buttons with `aria-checked`, flipped with Space/Enter. **A flip never moves the switch under the finger** (`holdInPlace`, `CertViewSwitches.tsx:6-51`): the page scrolls by however far the content above it shifted.
- **What recounts with the switches** (phone): the bar count, the kicker, the H1 total and unit ("177 international awards / 25 countries"), the lede, the tier bars and percentages, the tier chips (a tier the view empties leaves the rail), and the list. The **dated log does not** recount: it lists international announcements and keeps featured appearances. Its lede tail changes instead (`logLedeTail`, `certScope.ts:277-284`).
- **The adaptive kicker** (`certKicker`, `certScope.ts:256-260`). It uses the same words on both layouts, as the phone kicker and the desktop eyebrow, and is held to **one line at 320** for every view (`mobileCerts.module.css` comment: the longest, "Outside South Africa · Lead credits", measured 278px in the 284px box, leaving 6px spare).

  | Featured | Home | Kicker |
  |---|---|---|
  | on | included | `Certified worldwide` |
  | on | left out | `Outside Nigeria` |
  | off | included | `Worldwide · Lead credits` |
  | off | left out | `Outside Nigeria · Lead credits` |

- **The unit noun under the total** (`viewNoun`, `:222-224`): `awards`, `international awards`, `awards as lead artist`, `international awards as lead artist`. The last wraps on a three-digit total and uses `text-wrap: balance`.
- **Polite live region** (`MobileCerts.tsx:456-458`), visually hidden, announced after a flip: "177 international certifications across 25 countries". The desktop explorer has its own (`CertExplorer.tsx:350-352`): "N releases shown, …".
- **Empty state:** BNXN and Tiwa Savage hold no international plaque on a lead credit, so with both switches off their list is empty. The phone then shows "Nothing matches these filters." and a `Clear filters` button that also turns both switches back on (`MobileCerts.tsx:269-281,486-493`). Desktop: "There's no international certification as lead artist. That's a real gap in the record, not a missing page." (`CertExplorer.tsx:455-492`).

**Every artist's views** (computed from #404's own helpers, 3 Oct 2026; total / countries / certified releases):

| Artist | Home | Features switch | Home switch | all | home left out | features off | both off |
|---|---|---|---|---|---|---|---|
| Burna Boy | Nigeria | yes | yes | 249 / 26 / 93 | 177 / 25 / 42 | 172 / 24 / 69 | 111 / 23 / 22 |
| Olamide | Nigeria | yes | yes | 54 / 2 / 52 | 2 / 1 / 2 | 48 / 2 / 46 | 2 / 1 / 2 |
| Black Sherif | Ghana | yes | **no** | 25 / 1 / 25 | — | 22 / 1 / 22 | — |
| BNXN | Nigeria | yes | yes | 65 / 6 / 55 | 10 / 5 / 3 | 46 / 1 / 46 | **0 / 0 / 0** |
| Wizkid | Nigeria | yes | yes | 159 / 21 / 87 | 88 / 20 / 33 | 97 / 9 / 53 | 47 / 8 / 19 |
| Davido | Nigeria | yes | yes | 91 / 9 / 70 | 31 / 8 / 15 | 63 / 8 / 44 | 26 / 7 / 11 |
| Rema | Nigeria | yes | yes | 85 / 23 / 47 | 47 / 22 / 13 | 73 / 23 / 36 | 44 / 22 / 11 |
| Tems | Nigeria | yes | yes | 76 / 21 / 16 | 68 / 20 / 14 | 31 / 8 / 10 | 26 / 7 / 8 |
| Tyla | South Africa | yes | yes | 75 / 24 / 13 | 65 / 23 / 10 | 74 / 24 / 12 | 64 / 23 / 9 |
| Ayra Starr | Nigeria | yes | yes | 42 / 12 / 27 | 18 / 11 / 7 | 30 / 11 / 17 | 14 / 10 / 4 |
| Asake | Nigeria | yes | yes | 80 / 4 / 73 | 9 / 3 / 7 | 54 / 2 / 50 | 6 / 1 / 6 |
| Omah Lay | Nigeria | yes | yes | 63 / 9 / 48 | 19 / 8 / 10 | 47 / 7 / 34 | 14 / 6 / 5 |
| Seyi Vibez | Nigeria | yes | **no** | 102 / 1 / 102 | — | 76 / 1 / 76 | — |
| Victony | Nigeria | yes | yes | 24 / 6 / 19 | 5 / 5 / 1 | 22 / 6 / 17 | 5 / 5 / 1 |
| Fireboy DML | Nigeria | yes | yes | 36 / 6 / 28 | 8 / 5 / 2 | 28 / 6 / 20 | 8 / 5 / 2 |
| CKay | Nigeria | yes | yes | 29 / 15 / 10 | 19 / 14 / 2 | 27 / 15 / 8 | 19 / 14 / 2 |
| Kizz Daniel | Nigeria | yes | yes | 36 / 3 / 34 | 2 / 2 / 1 | 30 / 3 / 28 | 2 / 2 / 1 |
| Ruger | Nigeria | yes | yes | 19 / 4 / 16 | 3 / 3 / 2 | 18 / 4 / 15 | 3 / 3 / 2 |
| Oxlade | Nigeria | yes | yes | 15 / 12 / 4 | 11 / 11 / 1 | 14 / 12 / 3 | 11 / 11 / 1 |
| Tiwa Savage | Nigeria | yes | yes | 12 / 2 / 12 | 1 / 1 / 1 | 5 / 1 / 5 | **0 / 0 / 0** |

(The run that produced this table read #404's `certScope`, `certUnits` and data files directly. Burna Boy's 249 is #404's branch. The live site may differ by a plaque or two; §E records what the live page printed: 249 / 26 countries / 93 releases for Burna Boy on 3 Oct 2026, matching.)

### C2. Desktop `/certifications`, top to bottom

1. Breadcrumb `Home / Certifications`.
2. **Hero** (`page.tsx:278-336`), portrait art behind a scrim.
   - Eyebrow: the adaptive kicker (`Certified worldwide` …).
   - H1 `Global` + `Certifications` in gold ink.
   - Lede. In the all-view: "Burna Boy has 249 music certifications across 26 countries — Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US), BPI (UK), SNEP (France) and Music Canada, making him the most-certified African artist in history." In a narrowed view (`heroLede`, `:195-206`): "Burna Boy has 111 international certifications as lead artist across 23 countries — Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US), BPI (UK), SNEP (France) and Music Canada." The "most-certified" claim stays with the full count.
   - Buttons: gold `Compare ↗`, secondary `See certifications by country →` and `Methodology ↗`.
   - **Tier rail** on the right: four rows (dot, name in tier ink, count, %), recounted per view. All four always show, a zero included.
3. **Summary strip**, four cells, recounted per view (`summaryFor`, `:133-157`): total (`Total certifications` / `International certifications as lead artist` …) · Countries + `N issuing bodies` · Certified releases (`Albums, singles, features` / `Albums and singles`) · `New in 2026` (international awards; lead credits only when features are off).
4. **Filter card** (`CertExplorer.tsx:313-438`): the **switch row** first, with a hairline under it (`.switchRow`). Then `Tier` chips (All · Diamond · Platinum · Gold · Silver), then `Country` chips (All + one per country, flag + code; narrowed to the view's countries). Then a meta line, `Showing 93 of 93 releases · 249 certifications`, or in a narrowed view "…· 111 international certifications as lead artist across 23 countries", and `Clear ✕`. The card's `Filters` toggle is hidden at every width (the panel is always open).
5. **Release groups**: `Albums (n)` · `Singles (n)` · `Featured Appearances (n)`, each a list of cards (cover, title linked to its release page where one exists, credit, badges per country). Under "lead credits only" the Featured Appearances group empties and disappears.
6. **The dated log** (`CertHistoryByYear.tsx:76-126`): kicker `The dated log`, H2 `Certifications by year`, lede "Each international announcement as it landed — a release can appear twice in a year if it was certified at two tiers. Nigeria’s TCSN plaques count in the totals and the country grid, not in this log." (The tail changes per view, as in C1.) Then year chips with counts and the events of the chosen year.
7. **Sources band**: "Sources: … — each award read at the body's own register (or, in a market with no current public register, from the label's own plaque), most recently on <date>. Each row shows a release's current level in every country; “×” denotes multi-platinum."
8. **Compare with…**: a line of 19 artist links. **Certified units by country…**: a line of country-board links. Then **Keep exploring**.

### C3. Phone `/certifications` (`MobileCerts.tsx`), top to bottom, the design's "screen 02"

1. **Back bar** (`:292-301`): back → `/`; label `CERTIFICATIONS` (**nowrap + ellipsis**, `mobileCerts.module.css:47-56`); the count on the right, **muted** (not gold), recounted per view; menu.
2. **Hero** (`:304-418`), with the faded portrait behind it.
   - **Kicker**, the adaptive one (C1).
   - **H1 = the total** (`:378-393`): big `249` with the unit stacked beside it, `AWARDS` over `26 COUNTRIES`; narrowed, it reads `INTERNATIONAL AWARDS AS LEAD ARTIST` over `23 COUNTRIES`. A visually hidden `Burna Boy:` names it.
   - **Lede.** All-view (`:394-397`, built in the component): "Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and 22 more — across 93 certified releases." Narrowed (`phoneLedes`, `page.tsx:195-202`), it drops the count: "Silver, Gold, Platinum and Diamond awards from bodies including the RIAA (US), BPI (UK), SNEP (France) and Music Canada."
   - **Tier bars** (`:399-417`): one row per tier present (name in tier ink, count, %, then a gradient bar scaled to the largest tier).
3. **Focus bar** (only with `#release=`): "Showing every certification for **Dai Dai**" · `Show all releases ✕`.
4. **Switch row** (`:446-452`, `.viewRow` padding 2/18/6), with the hidden live region beside it.
5. **Tier rail** (`:461-482`, id `cert-rail`): `ALL 249` · `DIAMOND n` · `PLATINUM n` · `GOLD n` · `SILVER n`, each tier in its ink with a dot.
6. **`MOST-CERTIFIED RELEASES`** label, then block labels `ALBUMS` / `SONGS`, each numbered from 01. The first **10** rows show. Each row: rank · cover · title (+ `ALBUM` tag) · `credit · year` · `17 certs`, with its badges wrapped beneath (flag + `2× Platinum`, a programme marker where the body differs). Past 15 badges a row folds to 12 + `+N` (`− less`).
7. **`All 93 releases` `+83`** button (`:603-613`), which opens the rest in place (`Show the top 10 ↑`).
8. **Two board buttons** (`:621-643`): `Chart peaks ↗` with a note such as "TurnTable and more", and `● Live charts ↗` with a platform note.
9. **`Compare with…` fold** (`<details>`, `:651-670`) showing `19 artists ↓`, which opens to pills. **`Certified units by country…` fold** showing `N markets ↓`. Both were folded on the owner's instruction (25 Sep 2026: "with 19 names it ran four rows of links").
10. **The dated log** (`:697-748`): `THE DATED LOG` · H2 `Certifications by year` · the same lede as desktop · year chips `2026 · n` · event rows.
11. **Action bar** (`:761-786`): gold `Compare ↗` → `/compare?a=burna-boy`, secondary `Stat card` → `/share`, and a filter icon that scrolls to the tier rail.

### C4. What is wrong with it today (phone text density)

1. **The switch row is long on a narrow screen.** `FEATURES` + `ON · EVERY PLAQUE HELD` and `NIGERIA` + `INCLUDED` stack onto two lines at every phone width, so the row is **106px tall** (two 44px touch rows and a 10px gap) at 320, 360 and 390. Each switch's state stays on the line of its name, in both the on and the off wording, at every width (§E, simulated).
2. **The kicker has 6px to spare at 320** for South Africa (C1). Any type change has to re-measure it.
3. **The unit under the total can reach four words** (`INTERNATIONAL AWARDS AS LEAD ARTIST`) beside a three-digit number.
4. **The narrowed lede repeats what the bars show** (tiers plus bodies), and the all-view lede repeats the total ("across 93 certified releases"), which the list's own button repeats (`All 93 releases`).
5. **The log lede** is two to three sentences, depending on the view, before the year chips.
6. **The bar label is ellipsised, not wrapped.** That is fine for `CERTIFICATIONS`, but see D for long artist names.

---

## D. `/afrobeats/<artist>`: the phone certs section (job 2)

Each of the 19 board artists' phone pages **is** `MobileCerts` (`app/afrobeats/[artist]/page.tsx:324-352`), with these differences from `/certifications`:

- **Back bar** → `/afrobeats`; the label is the **artist's name** (`TIWA SAVAGE`, `FIREBOY DML`, `BLACK SHERIF` are the longest at 11–12 characters; `BNXN`, `CKAY`, `TEMS` the shortest). The count is the artist's total.
- **Brand art direction:** `data-brand` (Ayra Starr's purple is page-only) and each artist's portrait treatment (`portraitArt.ts`).
- **Lede**, built on the server per view (`mobileLede`, `:216-219`), and much longer than Burna Boy's. Live on 3 Oct 2026 (275 characters, **9 lines at 320, 8 at 360, 7 at 390**): "Every Tyla plaque, read in the issuing body's own register (10 plaques in South Africa, 9 from the label's own award and 1 from its own announcement; 1 in France from SNEP's own announcement) — 75 across 24 countries, from 13 certified releases. Last verified 3 October 2026." (#404's branch predates the latest wording of that parenthesis and will pick it up when it merges `main`. The other artists have no parenthesis: about 150 characters, 4–5 lines.) Narrowed views insert "international" and "on a lead credit": "Every international Tyla plaque on a lead credit, read in…". The parenthesis appears only for artists with plaques read off-register. §E records the lines.
- **No dated log** (`history={[]}`): the board artists have no dated award events.
- **No country-boards fold.** The `Compare with…` fold is present.
- **`Common questions`** (`MobileFaqSection`) after the boards: the artist's FAQ, which must be visible on phones because the page emits FAQPage at every width.
- **Action bar:** gold `Compare <Name> ↗` → `/compare?a=<slug>` and the filter icon. There is no stat card (`/share` builds a Burna Boy card only).
- **Switch home names:** `NIGERIA` for 17 artists, `SOUTH AFRICA` for Tyla, `GHANA` for Black Sherif (whose home switch is never shown, C1).

---

## E. Measured on phones (live site, 3 Oct 2026)

**How:** `research/measure-phone.js` is one JavaScript expression. The repo's own headless-Chrome harness ran it in each page at 320, 360 and 390 px wide (phone emulation, 800px tall, dark theme, the site's own fonts loaded):

```
~/.local/bin/heavy node scripts/mobile-shot.mjs --width 320 \
  --url https://burnaboystats.com/records/tours/revenue \
  --eval "$(cat docs/design/box-office-by-country/research/measure-phone.js)"
```

It only reads. Lines are counted from the text's own line boxes, not from height ÷ line-height. **Simulated** rows clone the live screen's own elements, which carry the same CSS-module classes and tokens, put the PR's own strings in them, measure, and remove the clones. The countries page (#405) is simulated on the live revenue screen, whose parts it reuses. Its own CSS rules (the bar label's `nowrap`, the 8px gap below 360, `.wrap` at line-height 1.45, `.noRank`) are applied inline. #404's switch row is simulated with its CSS, which is a copy of /compare's, inlined. Run on 3 Oct 2026, between 23:30 and 23:50 BST. No page scrolled sideways at any width.

### E1. Phone top bars (the screen's own back bar: back button · label · badge or count · menu)

The bar is 69px tall at every width, whether the label takes one line or two. The 44px buttons set its height, so a two-line label squeezes into the middle of the bar rather than growing it.

| Screen | Label today | Right side | 320 | 360 | 390 | Label rule |
|---|---|---|---|---|---|---|
| `/records/tours/revenue` | `REVENUE PER SHOW` | gold `$6.15M` | **2 lines** | 1 | 1 | wraps (no `nowrap`) |
| same, renamed (simulated) | `HIGHEST-GROSSING SHOWS` | gold `$6.15M` | **2 lines** | **2 lines** | 1 | wraps |
| same, renamed, forced `nowrap` (simulated) | `HIGHEST-GROSSING SHOWS` (175px) | gold `$6.15M` | **overflows the bar** | **overflows the bar** | 1 | — |
| `/records/tours/revenue/countries` (#405, simulated) | `BY COUNTRY` | gold `12 countries` | 1 | 1 | 1 | `nowrap`; gaps 8px below 360 |
| same, without #405's rule | `BY COUNTRY` | gold `12 countries` | **2 lines** | 1 | 1 | wraps |
| same, if the bar carried the page's full name (simulated) | `HIGHEST-GROSSING ARTISTS BY COUNTRY` | gold `12 countries` | **5 lines**, bar 113px | **4 lines**, 95px | **3 lines**, 78px | wraps |
| `/certifications` | `CERTIFICATIONS` | muted `249` | 1 | 1 | 1 | `nowrap` + ellipsis |
| `/afrobeats/tiwa-savage` (longest name, with Black Sherif and Fireboy DML) | `TIWA SAVAGE` | muted `12` | 1 | 1 | 1 | `nowrap` + ellipsis, not cut |
| `/afrobeats/black-sherif` | `BLACK SHERIF` | muted `25` | 1 | 1 | 1 | not cut |
| `/afrobeats/fireboy-dml` | `FIREBOY DML` | muted `36` | 1 | 1 | 1 | not cut |
| `/afrobeats/tyla` | `TYLA` | muted `75` | 1 | 1 | 1 | — |

### E2. `/records/tours/revenue` phone (live)

| Block | 320 | 360 | 390 |
|---|---|---|---|
| Kicker `Box office, per night` | 1 line | 1 | 1 |
| H1 `Revenue per show` (Anton 40px) | **2 lines**, 75px | 1, 38px | 1, 38px |
| H1 renamed `Highest-grossing shows` (simulated) | 2 lines, 75px | 2, 75px | 2, 75px |
| Lede (81 characters) | 3 lines, 81px | 3, 81px | 2, 54px |
| Board rows whose meta line is cut with "…" (of 82) | **29** (27 his) | **7** (7 his) | **1** (his) |
| Runs lede (163 characters, 13.5px) | 4 lines | 4 | 4 |
| Foot (524 characters, 12px/1.55) | **11 lines**, 223px | 10, 204px | 9, 185px |

The one meta still cut at 390 is "Melbourne · No Sign of Weakness Tour · 2025". At 320 the first three cut are London, Washington, D.C. and Boston, all "… · I Told Them… Tour · 2024".

### E3. `/records/tours/revenue/countries` phone (#405, simulated)

| Block | 320 | 360 | 390 |
|---|---|---|---|
| H1 `Highest-grossing artists by country` | **3 lines**, 113px | 2, 75px | 2, 75px |
| Lede (196 characters, the A0 sentence) | **6 lines**, 162px | 6, 162px | 5, 135px |
| Continent row, North America (meta 57 characters: "Burna Boy leads · $21.18M of $34.31M · next Asake, $4.28M") | 2 lines, row 84px | 2, 84px | 2, 84px |
| Africa row (`AFRICA_NOTE`, 82 characters) | 2 lines, 82px | 2, 82px | 2, 82px |
| Country leader line (57 characters: "Burna Boy leads · $15.50M of $26.92M · 48 nights reported") | 2 lines | 2 | 1 |
| One-artist leader line (55 characters: "Burna Boy · the only artist reported · $0.82M · 1 night") | 2 lines | 1 | 1 |
| Artist row, typical (62 characters: "Best night $1.72M · Capital One Arena, Washington, D.C. (2024)") | 3 lines, row 102px | 2, 84px | 2, 84px |
| Artist row, longest venue (64 characters, "Mitsubishi Electric Halle, Düsseldorf") | 2 lines, 84px | 2, 84px | 2, 84px |
| Artist row, runs only (Wizkid, UK, 86 characters) | 4 lines, 120px | 3, 102px | 3, 102px |
| Artist row, longest (Burna Boy, Canada, best night + run note, 160 characters) | **6 lines**, 156px | 5, 138px | 4, 120px |
| Foot, `METHOD_NOTE` (643 characters) | **13 lines**, 260px | 12, 241px | 11, 223px |

At 320, 29 artist rows of mostly two to three lines plus 12 country heads make the country section the longest part of the screen. That is the density job 2 names for this page too.

### E4. `/certifications` and the artist pages, phone (live, plus #404's switch row simulated)

| Block | 320 | 360 | 390 |
|---|---|---|---|
| Kicker `Certified worldwide` (151px) | 1 line in a 284px box | 1 in 324px | 1 in 354px |
| #404 kicker forms, single-line width: `Outside Nigeria` 119px · `Worldwide · Lead credits` 191px · `Outside Nigeria · Lead credits` 238px · `Outside South Africa · Lead credits` **278px** | all fit; South Africa's leaves **6px** | all fit | all fit |
| H1 block (the total beside the two-line unit stack `AWARDS` / `26 COUNTRIES`) | 92px | 92px | 92px |
| Burna Boy lede (124 characters) | 5 lines, 135px | 4, 108px | 4, 108px |
| Tyla lede (275 characters, with the off-register parenthesis) | **9 lines**, 243px | 8, 216px | 7, 189px |
| Tiwa Savage / Fireboy DML / Black Sherif ledes (147–151 characters) | 5 lines, 135px | 4–5 lines | 4, 108px |
| Switch row (#404, simulated), both on: `FEATURES · ON · EVERY PLAQUE HELD` and `NIGERIA · INCLUDED` | the two switches on **two lines**, row 106px | two lines, 106px | two lines, 106px |
| Switch row, both off: `OFF · LEAD CREDITS ONLY` / `LEFT OUT` | two lines, 106px; each state stays beside its name | same | same |

The live counts on 3 Oct 2026: Burna Boy 249 awards, 26 countries, 93 releases (matching C1). Tyla 75 / 24. Tiwa Savage 12 / 2. Fireboy DML 36 / 6. Black Sherif 25 / 1.

