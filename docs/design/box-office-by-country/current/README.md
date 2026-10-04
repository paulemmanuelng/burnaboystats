# Current state: screenshots of the live site

These are the pages as they are **today**, before your design. Use them to see what exists
and what goes wrong. Don't treat them as a design to copy. Every figure in them is a
snapshot: take figures from the brief's data section and `research/`, never from a
screenshot.

## How they were taken

- **Source:** the live site, https://burnaboystats.com. Shot on 4 October 2026, between
  00:10 and 01:45 BST, after #403 (multi-night runs), #404 (certifications switches) and
  #405 (the countries page) had merged and deployed. `/records/tours/revenue/countries`
  was already live, so nothing was built locally.
- **Retaken after #406.** #406 (live 4 Oct, 01:48 BST) renamed the box-office page
  "Highest-grossing shows" and made every phone board row name its artist, his included.
  Every `revenue-*` shot, and the desktop countries shots `countries-1440-*-first`,
  `-africa`, `-foot` and the two desktop full pages (which show the renamed breadcrumb and
  buttons), were retaken after it went live, the same way, between 02:01 and 02:45
  BST. The other countries shots and the certifications shots were not affected by #406.
- **Tool:** headless Chrome over CDP, the same method as `scripts/mobile-shot.mjs`, run
  one job at a time under `~/.local/bin/heavy`.
  - **Phone:** 390×844 with phone emulation (touch, iPhone user agent), DPR 2. The extra
    top-bar shots are 320×700, DPR 2.
  - **Desktop:** 1440×900, DPR 1.
- **Theme:** set the way the site's own toggle stores it (`localStorage.theme`). The OS
  `prefers-color-scheme` was matched to it.
- **Switch states:** "default" is the page as it loads (Featured appearances on, home
  country included). `feat0-home0` is the same page loaded with `#feat=0&home=0`
  (features off, home country left out).

## File names and sizes

Files are named `<page>-<width>-<theme>[-<part>].png`.

- **No part:** the full page.
- **`-first`:** the first screen.
- **Any other part:** one screen scrolled to that section, with the phone back bar and the
  gold action bar left in place, as a user sees them.

Sizes were reduced to keep the PR small:

- **Crops:** reduced with `sips -Z 1600`. Phone crops are 739×1600; desktop crops stay
  1440×900; the 320 shots stay 640×1400.
- **Full pages:** kept readable instead. `-Z 1600` would make a 7,000px-tall page about
  200px wide.
  - Phone full pages are 390px wide at DPR 1.
  - Desktop full pages are scaled to 1000px wide.
  - The two dark desktop full pages were taken in viewport-sized tiles and stitched,
    because headless Chrome failed on one tall capture of the dark theme. The sticky nav
    and the back-to-top button show only at the top.
- **Colours:** every PNG was reduced to a 256-colour palette. Most visible on the dark
  theme's grain and on the hero photos (slight banding). That banding comes from the
  compression, not from the site.

**Not taken:** a full-page shot of desktop `/certifications`. The page is about 15,000px
tall, it is outside this brief's scope (only its hero and switch row are), and the capture
hung Chrome. Its hero and switch row are covered below.

---

## Job 1: `/records/tours/revenue/countries` (Highest-Grossing Artists by Country)

### Phone (390)

| File | What it shows | Problems visible |
|---|---|---|
| `countries-390-light.png`, `countries-390-dark.png` | The whole phone page, 4,656px. Top to bottom: back bar "By country · 12 countries", hero, two stat tiles, By continent rows, Africa card, then the continent bars with country heads and artist rows, the method note, and the gold "Every show, ranked" bar. | It is one long, even list: every country looks the same weight, and no visual marks the continents or shows each country's share. |
| `countries-390-{light,dark}-first.png` | Hero: kicker "African artists · reported box office", h1 HIGHEST-GROSSING ARTISTS **BY COUNTRY** (split words gold), a 5-line lede, tiles "9 of 12 · Countries he leads" and "89 · Reported nights", top of By continent. | The lede is 5 lines and repeats what the tiles say (89 nights, 9 of 12). The first screen shows no country at all. |
| `countries-390-{light,dark}-continents.png` | By continent rows (North America, Europe, Oceania, Asia), the Africa card, then the North America bar and the start of the United States block. | Each continent row's meta wraps to 2 lines ("Burna Boy leads · $21.18M of $34.31M · next Asake, $4.28M"). The continent total on the right is muted while the leader's figure sits inside the prose, so the eye has no single number to land on. |
| `countries-390-{light,dark}-africa.png` | The same rows scrolled: Oceania, Asia ("Tyla · the only artist reported"), the Africa card "Africa · No reported box office yet" with its note, then the US block with 5 ranked artists. | The Africa card is a plain text row with no figure or marker; it reads like a footnote rather than a continent. |
| `countries-390-{light,dark}-canada.png` | Canada: country head "Burna Boy leads · $5.68M of $7.39M · 12 nights reported", then 4 artist rows; Europe bar; the UK head. | Burna's Canada row meta runs **4 lines** at 390 ("Best night $0.53M · Rogers Arena, Vancouver (2023). Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal"). The two multi-night runs are buried in prose and have no visual of their own. Best nights wrap to 2 lines in most rows. |
| `countries-390-{light,dark}-uk.png` | UK: Burna leads ($8.83M of $12.91M); Wizkid row "3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)", **3 lines**; Davido; then France and the Germany head. | The Wizkid run row has no best night, so it reads differently from its neighbours with no visual cue. |
| `countries-390-{light,dark}-foot.png` | Asia: Japan, Philippines, Singapore (all Tyla, one night each), then the method note "What counts: …" and the gold bar. | The method note is **11 lines** (about 600 characters) of dim 12px text. Each single-artist country takes about 300px to say one fact twice (in the head and again in row 01). |
| `countries-320-{light,dark}-topbar.png` | First screen at 320. | The back-bar label "BY COUNTRY" stays on one line (#405's `nowrap` rule). The **hero kicker wraps to 2 lines** ("…REPORTED BOX / OFFICE"), the h1 takes 3 lines, the lede 7, and the tile label "COUNTRIES HE / LEADS" wraps. |

### Desktop (1440)

| File | What it shows | Problems visible |
|---|---|---|
| `countries-1440-light.png`, `countries-1440-dark.png` | The whole desktop page (5,055px, scaled to 1000 wide): hero, By continent cards, four continent sections, method note, the "← Highest-grossing shows" and "Tours" buttons, footer (retaken after #406). | Twelve identical tables, one after another. Each repeats the same `# · ARTIST · BEST NIGHT · NIGHTS · TOTAL` header row, which in single-artist countries (Switzerland, Belgium, Japan, Philippines, Singapore) is taller than the data. |
| `countries-1440-{light,dark}-first.png` | Breadcrumb "… / Highest-Grossing Shows / Highest-Grossing Artists by Country" (renamed in #406), eyebrow, one-line h1 with **BY COUNTRY** gold, a 3-line lede, the "← Highest-grossing shows" button, and the top of By continent. | The hero has no graphic, so the first screen is mostly empty space right of the lede. |
| `countries-1440-{light,dark}-continents.png` | Five continent cards (North America, Europe, Oceania, Asia, Africa): nights / countries in mono, leader name, the leader's total in Anton, "of $34.31M", "Next: …". Then the North America h2 and the US table. | The "BY CONTINENT" heading sits directly on the cards' top border with no gap. The cards show compact $M while the tables below show full dollars ($15,495,482), so one figure reads two ways on one screen. The Africa card has no figure, so its column reads emptier than the others. |
| `countries-1440-{light,dark}-africa.png` | The same band, scrolled higher, with the lede and back button above it. | As above. |
| `countries-1440-{light,dark}-canada.png` | The Canada table (Burna's row with a third line: "Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal"), the Europe h2, the UK table with Wizkid's row. | **Wizkid's best-night cell reads "Nights reported together" in bold, then "3 nights reported together · …" under it.** That says the same thing twice, in the slot where a figure belongs. The runs inside Canada live only in that third line of small text. **Rank "01" is gold on every leader's row, Tyla's included**, and so are her ranks on the Asia tables. Gold should mark only Burna's figures. |
| `countries-1440-{light,dark}-uk.png` | UK, France and Germany tables. | Same table header repeated per country; rank-01 rows tinted. Nothing else wrong at this width. |
| `countries-1440-{light,dark}-foot.png` | Japan, Philippines, Singapore (one row each), the method note (5 lines at 1440), two buttons ("← Highest-grossing shows", "Tours"), the footer. | Three one-row tables in a row, each with its own header row. The method note calls the board "the revenue board"; the footer note names only Billboard Boxscore. |

## Job 2: `/records/tours/revenue` (Highest-grossing shows, renamed in #406)

### Phone (390)

| File | What it shows | Problems visible |
|---|---|---|
| `revenue-390-light.png`, `revenue-390-dark.png` | The whole phone page, 6,868px: hero, tiles, the gold "Highest-grossing artists by country" pill, chips, 82 rows, Multi-night runs, source note, "Make a stat card" bar. | — |
| `revenue-390-{light,dark}-first.png` | Back bar "HIGHEST-GROSSING · $6.15M"; kicker "Box office, per night"; h1 HIGHEST-GROSSING **SHOWS** (2 lines); a 2-line lede; tiles $6.15M / 58,973; the gold pill "HIGHEST-GROSSING / ARTISTS BY COUNTRY →"; chips All 82 / Burna Boy 32 / Others 50; "82 shows · ● His nights"; rows 01–03, each meta "artist · city · year" ("Burna Boy · London · 2024"). | **Two gold pills on one screen** (the countries link and the "Make a stat card" action bar), and the link wraps to 2 lines. The badge and the first tile print $6.15M twice. The kicker, h1 and lede say the page three times. |
| `revenue-390-{light,dark}-board.png` | Rows 02–12. Rank · venue · meta "artist · city · year" on every row, his included ("Burna Boy · Washington, D.C. · 2024", "Fally Ipupa · Paris · 2023") · gross · tickets. Other artists' rows have a faint wash. | Every meta fits at 390 and 360; **5 still ellipsise at 320** (brief §5.2). The "● His nights" legend and the wash stood in for his name and now duplicate it. In dark, the wash is hard to see. |
| `revenue-390-{light,dark}-runs.png` | The page end: MULTI-NIGHT RUNS h2, a 4-line lede, three run rows (flag + venue, **artist** · tour, dates, "50,814 tickets over 3 nights"), then the source note and the gold bar. The page ends here, so this crop also covers "the source notes at the foot". | **The source note is 9 lines** (524 characters). It repeats the runs lede just above it ("Multi-night runs reported only as one combined total sit beneath the board…"). Each run row is 4 lines. |
| `revenue-320-{light,dark}-topbar.png` | First screen at 320. | The top-bar label "HIGHEST-GROSSING" fits on one line (#406: `nowrap`, 8px gaps below 360), with about 2px to spare; the full name "HIGHEST-GROSSING SHOWS" would not. The h1 wraps to 2 lines and the lede to 3. The countries pill wraps. The chip rail's third chip ("Others 50") is cut at the right edge. |

### Desktop (1440)

| File | What it shows | Problems visible |
|---|---|---|
| `revenue-1440-light.png`, `revenue-1440-dark.png` | The whole desktop page, about 7,850px (scaled to 1000 wide): hero, artist chips, the 82-row board, Multi-night runs, notes, "← Tours", footer. | — |
| `revenue-1440-{light,dark}-first.png` | Breadcrumb "… / Highest-Grossing Shows"; eyebrow "Box office · all-time"; h1 HIGHEST-GROSSING **SHOWS** (one gold word since #406); a 2-line lede; buttons "Highest-grossing artists by country →" (gold) and "See the grosses visualised →"; artist chips (the eleventh wraps to a second row); the top of the board. | The hero lists (a count and his share of shows) rather than tells; the right half of the first screen is empty. Ranks 01–03 are gold, Fally Ipupa's 03 included. |
| `revenue-1440-{light,dark}-board.png` | Board rows 01–09: rank, artist, flag + venue / city, tour · year, tickets, gross. | **Rank numerals 01–03 are gold on every row, Fally Ipupa's 03 included.** Fine otherwise. |
| `revenue-1440-{light,dark}-runs.png` | MULTI-NIGHT RUNS h2, a 2-line lede, three rows (venue; artist · tour · dates; gross; "29,579 tickets over 2 nights"), the "No per-night split is invented…" note, the 3-line source note, "← Tours", footer. | Two notes in a row say the same thing ("no per-night split is invented") one paragraph apart. In the footer, "METHODOLOGY" drops to a second row of links. |

## Job 3: `/certifications` (MobileCerts on phone) with the switch row

### Phone (390)

| File | What it shows | Problems visible |
|---|---|---|
| `certifications-390-light.png`, `certifications-390-dark.png` | The whole phone page, 8,750px, default state. | — |
| `certifications-390-{light,dark}-first.png` | Back bar "CERTIFICATIONS · 249" (count muted); kicker "Certified worldwide"; 249 · "AWARDS / 26 COUNTRIES"; a 4-line lede; tier bars Diamond 7 / Platinum 103 / Gold 105 / Silver 34; the switch row starts at the bottom. | The switch row starts below the four tier bars, at the foot of the first screen, so a user doesn't see that the view can change. |
| `certifications-390-{light,dark}-switches.png` | The tier bars, then the switch row: "FEATURES ● ON · EVERY PLAQUE HELD" and "NIGERIA ● INCLUDED" on two separate rows, then the tier chips (All 249 / Diamond 7 / Platinum 103 …), "Most-certified releases", Love, Damini with badges. | **The switch row takes about 220px of this 2× screenshot, 106 CSS px on the 390 screen** (two 44px rows and a 10px gap; `research/pages.md` §E4). The tier chips' third chip is cut at the right edge. |
| `certifications-390-{light,dark}-feat0-home0-first.png` | The same screen with `#feat=0&home=0`: kicker **"OUTSIDE NIGERIA · LEAD CREDITS"**; 111 · "INTERNATIONAL AWARDS / AS LEAD ARTIST / 23 COUNTRIES"; a 3-line lede; tier bars 4 / 43 / 55 / 9; the switches in the off state. Top-bar count recounted to 111. | The unit label stacks to 3 lines beside the number. The kicker fits on one line at 390. |
| `certifications-390-{light,dark}-feat0-home0-switches.png` | Off states: "FEATURES ○ OFF · LEAD CREDITS ONLY", "NIGERIA ○ LEFT OUT"; chips All 111; Love, Damini "7 certs". | Same height problem; the off labels are dimmer but still the same size. |
| `certifications-320-{light,dark}-topbar.png` | First screen at 320. | The top bar fits on one line ("CERTIFICATIONS 249"). The lede is 5 lines. |

### Desktop (1440)

| File | What it shows | Problems visible |
|---|---|---|
| `certifications-1440-{light,dark}-first.png` | Eyebrow "Certified worldwide"; h1 GLOBAL **CERTIFICATIONS**; a 4-line lede; Compare / See certifications by country / Methodology; tier panel with photo; summary strip 249 / 26 / 93 / 68; the top of the filter panel with the switch row. | — |
| `certifications-1440-{light,dark}-switches.png` | The summary strip, then the filter panel: switch row ("FEATURED APPEARANCES ● ON · EVERY PLAQUE HELD   NIGERIA ● INCLUDED") above the Tier and Country chip rows and "Showing 93 of 93 releases · 249 certifications"; Albums. | The switch row is small mono text on one line, visually weaker than the chip rows beneath it, though it changes every number on the page. |
| `certifications-1440-{light,dark}-feat0-home0-first.png` | Eyebrow **"Outside Nigeria · Lead credits"**; lede rewritten ("Burna Boy has 111 international certifications as lead artist across 23 countries…"); tier panel 4 / 43 / 55 / 9; strip 111 / 23 / 22 / 51. | The strip label "INTERNATIONAL CERTIFICATIONS AS LEAD ARTIST" wraps to 2 lines, so the first tile is taller than its neighbours. |
| `certifications-1440-{light,dark}-feat0-home0-switches.png` | Switches off; NG chip gone from the country row; "Showing 22 of 22 releases · 111 international certifications as lead artist across 23 countries". | That summary line now runs long and mixes two styles (gold numerals, plain prose). |

## Job 3: `/afrobeats/tyla` (phone certs section)

| File | What it shows | Problems visible |
|---|---|---|
| `tyla-390-light.png`, `tyla-390-dark.png` | The whole phone page, 3,718px: certs hero, tier bars, switch row, chips, releases, compare and FAQ, "Compare Tyla" bar. | — |
| `tyla-390-{light,dark}-first.png` | Back bar "TYLA · 75"; kicker "Certified worldwide"; 75 · "AWARDS / 24 COUNTRIES"; the lede; tier bars. | **The lede is 7 lines at 390** (the long provenance parenthesis: "(10 plaques in South Africa, 9 from the label's own award and 1 from its own announcement; 1 in France from SNEP's own announcement)"). It pushes the switch row entirely below the first screen. In dark, the hero photo begins with a visible hard top edge at the right (about a third of the way down the hero). |
| `tyla-390-{light,dark}-switches.png` | Tier bars, then "FEATURES ● ON · EVERY PLAQUE HELD", "SOUTH AFRICA ● INCLUDED", chips All 75 / Diamond 2 / Platinum 30, the album TYLA "11 certs" and its badges. | Same 2-row switch block, 106 CSS px (about 220px in the 2× screenshot). |
| `tyla-390-{light,dark}-feat0-home0-first.png` | Kicker **"OUTSIDE SOUTH AFRICA · LEAD CREDITS"** (the longest kicker, one line at 390); 64 · "INTERNATIONAL AWARDS / AS LEAD ARTIST / 23 COUNTRIES"; a 6-line lede; tier bars 2 / 25 / 34 / 3. | Long lede; a 3-line unit label beside the number. |
| `tyla-390-{light,dark}-feat0-home0-switches.png` | Off states ("SOUTH AFRICA ○ LEFT OUT"), All 64, TYLA "10 certs". | As above. |
| `tyla-320-{light,dark}-topbar.png` | First screen at 320. | The top bar fits on one line ("TYLA 75"). **The lede is 9 lines** and fills the screen; no switch or tier bar is visible above the action bar. |

## Checks on every shot

- **No horizontal scroll.** No page scrolled sideways at 390, 320 or 1440: `scrollWidth`
  equalled `clientWidth` on every load.
- **Gold on other artists.**
  - The phone pages keep gold to Burna's names and figures.
  - On desktop, gold also lands on other artists' rank numerals, as listed above.
  - On phone, the dark theme's "All 82" chip is ember, not gold.
