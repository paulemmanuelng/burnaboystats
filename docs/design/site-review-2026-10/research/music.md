# Design review, music group: live site, 8 Oct 2026

**Reviewer:** independent product-design pass. The benchmark is editorial data products such as FT, The Pudding and Bloomberg.
**Pages:** `/music`, `/music/albums/love-damini`, `/music/wgft`, `/music/alone`, `/dai-dai`, `/dai-dai/es`, `/music/listeners`, `/live-charts`.
**Build reviewed:** https://burnaboystats.com, the deploy of 8 Oct 2026 (main `e4b0afc8`). Live-charts snapshot: 7 Oct 2026, 23:07 UTC.

## How I looked

- **Capture.** Headless Chrome via the local `heavy` lock wrapper (on the owner's machine, not in this repo) (CDP harness in scratchpad `dr1008-music/shoot.mjs` + `measure.js`). One tab at a time; Chrome was closed after each run.
  - Phone: 390×844 with mobile emulation (touch and iPhone UA).
  - Desktop: 1440×900, plus 1024×768 for the band where the hamburger appears.
  - Theme: light on every page, set with the site's own stored choice `localStorage.theme`. Dark on the two key pages, `/music` and `/dai-dai`, at both widths.
- **Full page.** Each page was scrolled top to bottom first so lazy content loads, then captured at JPEG q60, height capped at 6,000px.
- **Measured on every capture** (in-page script):
  - text contrast against the composited background (AA 4.5, or 3.0 for large text);
  - tap targets under 44 and under 24px;
  - characters per line of prose;
  - gold, green and ember text and fills;
  - sticky and fixed elements;
  - images and their bytes;
  - LCP, CLS and the first-viewport inventory;
  - a Tab-key focus probe (6 stops) on each desktop page.
- **Interaction frames:**
  - a release opened on `/live-charts` at both widths;
  - the `/music` tracklist dialog;
  - Dai Dai frames past the 6,000px cap;
  - Dai Dai count-up checks (run 2).
- **Other checks:**
  - All 15 song pages and 8 album pages fetched with curl and their stat grids parsed, for the template-level content checks.
  - The OG cards of all 8 pages downloaded and looked at.
- **Shot budget.** The originals came to 7.8 MB, so the published set (`shots/music/`, < 4 MB) is re-encoded:
  - phone shots stay 390px wide;
  - 1440 shots are scaled to 62% (893px wide);
  - 1024 shots to 70%.
  - Pixel positions quoted below are CSS px at capture width, not positions in the scaled JPEGs.
  - 1024 is kept for `/music`, `/dai-dai` and `/live-charts`. On the song, album, Spanish and listeners pages 1024 is the 1440 layout with the hamburger: the listeners list goes to one column, which I checked and which is fine. The unpublished 1024 captures are in scratchpad `dr1008-music/full/`.
  - Six viewport frames are added as evidence: `*-firstscreen`, `*-open*`, `*-end`, and `*-record-zeros`, which is a before/after composite.

## Shots (`../shots/music/`)

| Page | Phone 390 | Desktop 1440 | 1024 | Dark |
|---|---|---|---|---|
| /music | music-390-light.jpg | music-1440-light.jpg | music-1024-light.jpg | music-390-dark.jpg, music-1440-dark.jpg |
| /music/albums/love-damini | album-love-damini-390-light.jpg | album-love-damini-1440-light.jpg | (same as 1440) | |
| /music/wgft | song-wgft-390-light.jpg, song-wgft-390-light-end.jpg | song-wgft-1440-light.jpg | (same as 1440) | |
| /music/alone | song-alone-390-light.jpg | song-alone-1440-light.jpg | (same as 1440) | |
| /dai-dai | dai-dai-390-light.jpg, dai-dai-390-light-firstscreen.jpg | dai-dai-1440-light.jpg | dai-dai-1024-light.jpg | dai-dai-390-dark.jpg, dai-dai-1440-dark.jpg |
| /dai-dai/es | dai-dai-es-390-light.jpg | dai-dai-es-1440-light.jpg | (same as /dai-dai) | |
| /music/listeners | listeners-390-light.jpg, listeners-390-light-firstscreen.jpg | listeners-1440-light.jpg | (1-col list, fine) | |
| /live-charts | live-charts-390-light.jpg, live-charts-390-light-open-mid.jpg | live-charts-1440-light.jpg, live-charts-1440-light-open.jpg | live-charts-1024-light.jpg | |
| Dai Dai count-up | | dai-dai-1440-light-record-zeros.jpg (top: DOM before arrival; bottom: after) | | |

Full-page captures show the sticky phone back bar, the tab bar and the sticky "Play on Spotify" bar somewhere mid-page. Those are capture artefacts, as the rulings file says.

## Owner rulings respected (not raised as findings)

- Separate desktop and phone components.
- Dense list screens; no new accordion or "show more" proposed (the existing "All 15 song stories +10" and "Show all 68" stay as they are).
- One gold on paper (`#945e00`).
- N2 chips.
- OG cards stay gold.
- Half-empty last rows in the song/album grids and the `/music` EPs grid (D-10/D-11). The one exception is the "reconsider" note at the end.
- Dai Dai decisions (26 Sep): official-only replay with gaps, the "Charts · 15" heading.
- Rule C lead/featured roles and the role-tag format.
- No lead-vs-featured streams section.
- `/updates` is Burna-only.
- The site stays a Burna site.

## Scorecard (measured)

| Page | Height 390 / 1440 | Text contrast fails | Tap < 44 (phone) | Gold text nodes (phone / desk) | CLS | Overflow-x |
|---|---|---|---|---|---|---|
| /music | 3,029 / 3,509 | 0 / 83 and 0 / 155 | 0 / 28 | 23 / 32 | 0 | none |
| love-damini | 3,561 / 3,422 | 0 | 4 / 14 (FAQ 26px, track link 22px) | 26 / 27 | 0 | none |
| wgft | 2,452 / 2,337 | 0 | 1 / 27 | 17 / 21 | 0 | none |
| alone | 2,720 / 2,509 | 0 | 2 / 28 | 24 / 27 | 0 | none |
| /dai-dai | **13,262** / 10,364 | 0 / 854 and 0 / 955 | 4 / 33 (FAQ) | 26 / 21 (52 / 47 dark) | 0 | none |
| /dai-dai/es | **14,380** / 10,769 | 0 | 2 / 33 | 26 / 21 | 0 | none |
| /music/listeners | 5,867 / 4,706 | 1 (disabled "−" zoom, exempt) | 50 map dots (nearest-dot 22px hit, fine) | **82** / 8 | 0 | none |
| /live-charts | 5,555 / 6,302 (opening Dai Dai makes it 16,686 on the phone) | 0 closed; **159** when a desktop panel is open (the "–" no-move dash at 2.09:1) | 0 / 48 | 163 / 24 | 0 | none |

The focus ring is a solid 2px `#945e00` with a 2px offset on every tab stop probed, on all five desktop pages. There is a skip link and one visible h1 per layout.

---

## Strengths to keep

1. **Provenance is part of the design.**
   - Live Charts opens with "These are platform charts, not official charts" and stamps "Snapshot taken 7 October 2026, 23:07 UTC".
   - Dai Dai labels its record section "The song's own figures, not Burna Boy's career totals. Each one names its chart."
   - Dai Dai draws unread weeks as hatched and says it never fills them in.
   - Listeners says "every country figure is a floor" and names its source and read date.
   - This is the product's moat. No fan site and few newsrooms do it this cleanly.
2. **The Dai Dai story is an editorial structure, not a stats dump.**
   - Seven dated chapters, each paired with one figure card: 7 weeks, 26 countries, 37 days, 19 certifications, No. 1 Spotify peak, halftime.
   - The phone back bar carries chapter progress ("04 / 07").
   - The Spanish edition is a true parallel: chapters, replay legend, FAQ and the tab-bar labels ("INICIO · MÚSICA") are all in Spanish.
3. **Accessibility basics are clean in both themes.**
   - 0 AA text-contrast failures across about 4,000 checked text nodes on 8 pages, light and dark.
   - A consistent visible focus ring, CLS 0.000 on every load, and no horizontal scroll at 390, 1024 or 1440.
4. **The phone screens are designed for thumbs, not shrunk.**
   - Sticky bottom actions: "▶ Play on Spotify" with share, and "Where he's performed".
   - A contextual back bar ("LOVE, DAMINI · 2022", "LISTENERS · 50 cities").
   - 0 sub-44px targets on `/music` and `/live-charts` phone.
   - The live-charts phone summary is a 2×2 grid with a scrolling platform rail.
5. **The desktop listeners ranking is model data design.** Ink tabular numerals, a proportional inline bar per city (Lagos 1,439,126 fills the 120px track; Auckland 143,427 is about 12px), a country column in small caps, and a dated headline figure as the only gold. Keep this grammar and reuse it.
6. **The song/album template is a reusable, data-driven grammar.** It runs hero → blurb → by the numbers → chart peaks → certifications → (tracklist) → FAQ → onward links. Desktop peak pills carry flag, position and country name, and each page gets its own OG card with cover and stat tiles. One template serves 23 pages.
7. **The live-charts desktop row summary is excellent.** For example: "YouTube 95 countries · 15 at No. 1 | Apple Music 56 countries · 1 at No. 1 | Deezer 43 countries…". The whole spread of a release reads in one line before you open it.

---

## Findings

IDs are `MU-nn`. Kind: **design** needs a designer, **build-fix** is a plain bug, **content** is copy, **reconsider-ruling** is the one place I argue with a ruling.

### MU-01: Dai Dai shows no achievement figure on the first screen (design, high, M)

**Pages:** /dai-dai, /dai-dai/es · both layouts

**What's wrong.** The page that ranks for Burna Boy's biggest 2026 story does not say what happened in the first 3 seconds.
- Desktop 1440 first screen holds the kicker, the h1 at 88px, the lede, "Skip to the numbers", EN/ES and the cover.
- The first large figure is the release date "15 MAY 2026" (Anton about 88px, y 740–900). That is chapter 01's card, and it repeats the hero cover 330px lower.
- On the phone (390×844) the first-viewport inventory has the h1 at y 140, the lede, Skip at y 283 and the release card "15 MAY 2026" at y 354–546.
- The first achievement card ("7 weeks at No. 1") starts at **y 798, under the tab bar (y 766)**, so no achievement figure is visible without scrolling.
- The link-preview card already does what the page doesn't: four stat tiles (No. 1 Global 200 · 26 country No. 1s · 70 charts · 19 certs).

**Suggestion.** Give the hero a four-figure strip that mirrors the OG card. Each figure is a jump link to its chapter: No. 1 Billboard Global 200 (7 wks) · 37 days No. 1 on Spotify Global · No. 1 in 26 countries · 19 certifications.
- Desktop: under the lede, left of the cover.
- Phone: a 2×2 under the lede, above Skip.
- Desktop and phone are designed separately.
- Swap chapter 01's duplicate cover for the date alone, or make the strip replace it.
- Figures come from `daiDai.ts`, never typed.

**Shots:** dai-dai-390-light-firstscreen.jpg, dai-dai-1440-light.jpg (top 900px), dai-dai-es-390-light.jpg; OG at `/dai-dai/opengraph-image`.

### MU-02: Dai Dai "by the numbers" counters sit at "0" until scrolled to (build-fix, medium, S)

**Pages:** /dai-dai, /dai-dai/es · both layouts

**What's wrong.** `DaiDaiCountUp.tsx` writes `text.nodeValue = "0"` (and `opacity: 0` for the live figure) as soon as it learns the figure starts out of view. It restores the value only when the figure is 50% visible.
- So the document holds zeros for anyone who hasn't scrolled there.
- Run 2 read the six lead figures from the DOM without scrolling. Both layouts gave `0 · 0 · No. 1 · 499M (opacity 0) · 0 · 19 Jul`.
- After scrolling to them (or tapping "Skip to the numbers" on the phone) they read `70 · 26 · No. 1 · 499M · 19 · 19 Jul`.
- The full-page capture shows the zeros.
- An iPhone "Full Page" screenshot, print/PDF, reader mode and translation tools all capture the zeros too. Fans share screenshots of exactly this section, and a stats site publishing "0 certifications" in a shared image is a trust cost.

**Suggestion.**
- Arm the count only when the figure is about to enter (an IntersectionObserver `rootMargin` of about +1 viewport, armed on the frame it crosses). Otherwise leave the true value.
- Or animate a visual overlay while the DOM text keeps the final value.
- Add `@media print { … }` to force final values.
- Keep the existing reduced-motion bail-out.

**Shots:** dai-dai-1440-light.jpg (record strip), dai-dai-1440-light-record-zeros.jpg.

### MU-03: The 26 No. 1 countries are drawn four times on desktop Dai Dai (design, medium, M)

**Pages:** /dai-dai, /dai-dai/es · both layouts

**What's wrong.** The same 26-country set appears in four places on desktop:
1. Chapter 03's 26-flag grid.
2. "The world takeover" 68-cell grid, with 26 cells tinted.
3. The replay's "Peak picture" map.
4. The replay ranking's "No. 1 · Peak 26" chip list.

Phone shows 1, 2 and 4.
- The page's own replay note says it: "The peak picture equals the takeover grid above: 26 of 68 at No. 1."
- The phone page is 13,262px (≈15.7 screens; the Spanish one is 14,380), so every repeat costs real scroll.

**Suggestion.** Make the replay's end frame (the peak picture) carry the takeover grid's job. Its ranking already lists all 68 by tier.
- Drop or merge the standalone takeover grid, or turn the takeover grid into the replay's no-JS/static state.
- Chapter 03's flag beat stays: it's the story.
- This removes duplication; it is not a collapse.
- It touches the approved 26 Sep redesign, so it needs an owner decision.

**Shots:** dai-dai-1440-light.jpg (y about 4,000–5,700), dai-dai-390-light.jpg (y about 1,500 and 4,500–6,000).

### MU-04: Global 200 week chart draws unknown weeks as full-height bars (design, medium, S)

**Pages:** /dai-dai, /dai-dai/es · both layouts

**What's wrong.** In chapter 02's "Billboard Global 200 · week by week":
- weeks 2–6 (charts of 13 Jun–11 Jul, "no reading held") are hatched bars at the **same full height as the No. 1 weeks** (w7–w10, w12–w14);
- w1 (No. 114) is a hairline.
- At a glance the chart reads as 13 consecutive tall bars, which implies the song led from week 2. That is the one inference a careful reader must not make, on the site's flagship claim.

**Suggestion.**
- Draw unread weeks as a baseline-height hatched stub (or an outline-only cell at the baseline) with a "not read" tick label.
- Reserve bar height for real positions.
- The same encoding rule should apply to the replay's hatched countries.

**Shots:** dai-dai-1440-light.jpg (y about 1,050–1,330), dai-dai-390-light.jpg (y about 800–1,040).

### MU-05: FAQ toggles are 26px tall; the album track link is 22px (build-fix, medium, S)

**Pages:** song pages, album pages, /dai-dai, /dai-dai/es · phone

**What's wrong.** The shared `faqList-module__toggle` button is **354×26** on every phone FAQ:
- /music/wgft: 1 toggle;
- /music/alone: 2;
- love-damini: 3;
- /dai-dai: 4 of the first questions;
- /dai-dai/es: 2.

The row's visual band is about 63px between hairlines, but only the 26px button responds. It is under the site's own 44px floor (`RESPONSIVE-AND-STATES.md`: "measure rendered height").

The album tracklist "Last Last SONG PAGE →" link is **162×22**.

**Suggestion.**
- Move the row padding inside the button (`min-height: 44px`, full-row hit area).
- Make the whole tracklist row the link when a song page exists.

**Shots:** song-wgft-390-light.jpg, album-love-damini-390-light.jpg (FAQ + tracklist).

### MU-06: Prose runs past the site's 62ch measure (build-fix, medium, S)

**Pages:** song and album pages, /dai-dai, /live-charts, /music/listeners · desktop

**What's wrong.** Measured characters per line:

| Where | Chars/line | Size and width |
|---|---|---|
| Album/song `.blurb` | **95** | 16.5px over 897px (`song.module.css:156`, `max-width: 82ch`) |
| Album FAQ answers | 71–79 | |
| Dai Dai FAQ answers | **91–97** | 16px over 764px |
| Dai Dai replay footnote | **184** | 12.5px over 1,142px |
| Live-charts source note | **146** | 13px over 896px |
| Listeners footnote | **123** | 13px over 724px |

The reading-scale work (PR #186) set `--measure: 62ch` for prose and named `/dai-dai` as an outstanding follow-up.

**Suggestion.** Apply `max-width: var(--measure)` to `.blurb`, the FAQ answers and these footnotes. On desktop the freed width can carry figures (see MU-20).

**Shots:** album-love-damini-1440-light.jpg, dai-dai-1440-light.jpg, live-charts-1440-light.jpg, listeners-1440-light.jpg.

### MU-07: Duplicate tiles in "By the numbers" (build-fix, low-medium, S)

**Pages:** /music/wgft and /music/albums/i-told-them (template) · both layouts

**What's wrong.**
- WGFT shows "No. 16 · best chart peak worldwide" **and** "No. 16 · US Billboard Hot 100 — Burna Boy's highest-ever Hot 100 peak". Two of its six tiles say the same thing.
- I Told Them… shows "No. 1 · best album-chart peak worldwide" **and** "No. 1 · UK Official Albums Chart".
- The handoff's dedupe rule (`VERIFICATION-CHECKLIST.md:36`: drop the auto fact when "a curated extra has the same value and a label starting with the auto label") misses both, because the labels differ.
- music-14 fixed City Boys and No Sign of Weakness only.

**Suggestion.** Dedupe by value: when a curated fact's value equals the auto best peak, drop the auto "best chart peak" tile and let the curated one, which names the chart, stand. Add a test over all 23 pages.

**Shots:** song-wgft-390-light.jpg, song-wgft-1440-light.jpg.

### MU-08: Alone shows a "No. 1" tile above "best No. 17", with three different counts (content, medium, S)

**Pages:** /music/alone (template) · both layouts

**What's wrong.**
- The stat grid's "No. 1 · UK Official Afrobeats Chart" sits directly above "Chart peaks · 9 charts · best No. 17". That chart is not in the peak list, and nothing says that genre charts aren't counted.
- The page also gives "8 countries charted" (tile), "a run across nine official charts" (blurb) and "9 charts" (section meta).
- A journalist will ask which is right. All are, but the page makes the reader reconcile them.

**Suggestion.**
- Label the tile "No. 1 · UK Afrobeats chart (genre chart, not in the peaks below)".
- Use one noun per count: "8 countries + Billboard Global 200 = 9 charts".

**Shots:** song-alone-1440-light.jpg, song-alone-390-light.jpg.

### MU-09: "By the numbers" tiles that hold words (content, low, S)

**Pages:** song template (11 of 15 song pages) · both layouts

**What's wrong.** Curated tiles put names or adjectives in the 46px numeral slot:
- "Marvel" (Alone)
- "Anthem" (Ye)
- "Standout" (Rizzla)
- "Experimental" (Darko)
- "Pre-Outside" (Boshe Nlo)
- "Aristokrat" and "Onosz" (Smoke)
- "Leriq" (Like to Party)
- "Travis Scott" (TaTaTa)
- "I Told Them…" (City Boys)
- "African Giant" (On the Low)
- "Grammy" (23)

Tier words like "Diamond" are fine; the handoff allows them. Names under a "by the numbers" head read as filler on the thin history pages.

**Suggestion.**
- Prefer figures: track number, release date, streams, weeks.
- Where the record is thin, title the section "At a glance".
- Keep tier words.

**Shots:** song-alone-1440-light.jpg (the Marvel tile).

### MU-10: The /music catalogue grid shows labels, not stats, and hides the album pages (design, medium, M)

**Pages:** /music · both layouts

**What's wrong.**
- Each desktop album card carries cover, title, year, the label chain and "15 TRACKS ↗". "Atlantic · Bad Habit · Spaceship" repeats on 6 of 8 cards.
- None of the figures the album pages hold appear: best peak (No. 2 UK, Love, Damini), plaques (8), streams.
- A plain click opens the tracklist dialog. The 8 album pages (peaks, certifications, FAQ) are a second click away via "Full album page →" in the dialog, and only power users middle-click the card's real href.
- On a stats site the hub's richest grid shows the least statistical facts.

**Suggestion.**
- Card click goes to the album page; a secondary "N tracks" control opens the dialog.
- Replace the label line with two derived figures ("Best No. 2 · 8 plaques").
- Desktop and phone each in their own style; the phone card's "16 trk" line becomes "No. 2 · 8 plaques".

**Shots:** music-1440-light.jpg (y 770–1,190), music-390-light.jpg.

### MU-11: /music orders the albums in opposite directions on phone and desktop (content, low, S)

**Pages:** /music · both layouts

**What's wrong.**
- Phone: newest first (No Sign of Weakness → L.I.F.E).
- Desktop: oldest first (L.I.F.E → No Sign of Weakness).
- The phone cards say "16 trk", "19 trk · std" in gold, while desktop says "16 TRACKS", "19 TRACKS (STANDARD)". The gold ≠ live-or-action point is P018 from the 29 Sep audit, still open.

**Suggestion.**
- Pick one order. Newest first suits the "Latest album" hero on both layouts.
- Spell "16 tracks" and set it muted.

**Shots:** music-390-light.jpg, music-1440-light.jpg.

### MU-12: The listeners map understates the data and can't be read on a phone (design, medium, M)

**Pages:** /music/listeners · both layouts

**What's wrong.**
- **Dot area understates the data.** In `ListenerMap.tsx:41,66`, radius = 2.6 + 6.6·√(listeners/max).
  - Lagos (1,439,126) is r 9.2; Auckland (143,427) is r ≈ 4.7.
  - That is 3.9× the area for 10.0× the listeners: the floor flattens the very contrast the page is about.
- **No city is labelled.**
- **The phone map is 352×184.** About 20 European dots and the 4 Nigerian dots merge into two blobs, and about 25% of the map height is ocean and Antarctica.

This is P025 from 29 Sep, still open.

**Suggestion.**
- Make dot area ∝ listeners with a 2px floor.
- Label the top 5 directly.
- Crop below about 58°S.
- On the phone, add three quick-zoom chips (Europe · West Africa · Americas) that drive the existing +/− zoom (keep the +/−).
- Tapping a row in "The 50" highlights its dot.

**Shots:** listeners-390-light-firstscreen.jpg, listeners-1440-light.jpg.

### MU-13: The listeners page buries its best insight in a 13px footnote (content, medium, S)

**Pages:** /music/listeners · both layouts

**What's wrong.**
- The page's sharpest facts sit in the last paragraph at 13px / 123 characters per line: "The 50 cities hold 15,087,851 of his 45.97M monthly listeners on 2 October 2026 — 33%. Nigeria's four cities hold … 20%, and 42 of the 50 are outside Africa."
- The lede leads instead with "Germany places seven of the 50, more than anywhere else", which is a count-of-cities fact.

**Suggestion.** Promote three figures to a row under the hero: 33% in the top 50 · Nigeria 20% · 42 of 50 outside Africa. Derive them from `listeners.ts`, with the read date. Keep the footnote for method only.

**Shots:** listeners-390-light.jpg (bottom), listeners-1440-light.jpg.

### MU-14: The desktop listeners ranking fills across, not down (build-fix, low, S)

**Pages:** /music/listeners · desktop ≥1240

**What's wrong.** `.cityGrid { grid-template-columns: 1fr 1fr }` (`listeners.module.css:186`) is row-major. The left column reads 01, 03, 05… and the right 02, 04, 06…, so scanning the top 10 means zig-zagging. This is P026, still open.

**Suggestion.** Column-major flow: `grid-auto-flow: column; grid-template-rows: repeat(25, auto)` or CSS columns. Left reads 1–25, right 26–50.

**Shots:** listeners-1440-light.jpg (y about 1,170–1,560).

### MU-15: The phone listeners page paints every count gold (design, low-medium, S)

**Pages:** /music/listeners · phone

**What's wrong.**
- Phone: **82 gold text nodes**. All 50 city counts ("1.44M", "964K"…) and all 29 country totals are in gold.
- Desktop: 8 gold text nodes. The same figures are ink with bars there, and the only gold figure is the dated 45.97M.
- This breaks gold = live-or-action (`project-home-upper-design-pass`) and makes the two layouts disagree about what is special.
- The phone also mixes formats on one screen: compact "1.44M" in the list, full "3,045,070" in the country totals.

**Suggestion.**
- Ink numerals on the phone list and country totals.
- Keep gold for the dated monthly-listener figure.
- Pick one number format per screen (compact in lists, full in the headline).

**Shots:** listeners-390-light.jpg, listeners-1440-light.jpg.

### MU-16: Live-charts phone pills drop the platform, so rows look duplicated (design, medium, S)

**Pages:** /live-charts · phone

**What's wrong.** Closed rows show five pills of flag + position + move with no platform, so one release shows the same country twice:
- African Giant: 🇳🇬 #29 ▲2 · 🇳🇬 #31 ▲1
- Love, Damini: 🇳🇬 #24 · 🇳🇬 #47
- Twice as Tall: 🇳🇬 #21 · 🇳🇬 #26 · 🇧🇫 #31 · 🇧🇫 #46
- Last Last: 🇧🇫 #18 · 🇧🇫 #40

To a first-time visitor these look like duplicated data. Desktop rows group by platform, so the problem is phone-only.

**Suggestion.** Put a 2-letter platform mark inside each pill ("AM", "iT", "SP", "YT", "DZ", "SZ"), or group the five preview pills by platform with a tiny label.

**Shots:** live-charts-390-light.jpg (y about 900–1,500).

### MU-17: An opened release on the phone has no context mid-list (design, medium, M)

**Pages:** /live-charts · phone

**What's wrong.**
- Opening Dai Dai grows the page from **5,555 to 16,686px (+11,131)**.
- At scroll 5,000 the screen shows only rows like "#15 🇲🇹 Malta ▼4" and "#16 🇨🇾 Cyprus ▲4". No release or platform name is visible: the open header scrolls away.
- Closing means scrolling back thousands of pixels.
- P028 (29 Sep) is still open. The list stays complete either way; this is wayfinding, not density.

**Suggestion.**
- A sticky sub-header inside the open panel: "DAI DAI · YOUTUBE · 95", which changes as each platform block passes.
- A "Close Dai Dai ↑" row at the end of the panel that returns the reader to the row.

**Shots:** live-charts-390-light-open-mid.jpg, live-charts-390-light.jpg.

### MU-18: Live-charts desktop gives the smallest number the biggest box, and paints "No. 1" two colours (build-fix, low, S)

**Pages:** /live-charts · desktop and 1024

**What's wrong.**
- **Seven platform tiles in a 6-column grid.** "6 · Spotify Albums" stretches across the whole row at 1440. At 1024 the grid goes 3 + 3 + 1. This is P027, still open.
- **"At No. 1" has two colours.** It is green in the summary and platform tiles, and ochre/gold in the desktop release rows and chips ("281 charts · 17 at No. 1", `chipNo1`, `totalNo1`). On the phone row it is green. The phone even paints "none at No. 1" green.
- **Covers are about 20px**, too small to recognise. This is P029.

**Suggestion.**
- Fold Spotify Albums into the Spotify tile as a second line, or use `repeat(auto-fit, minmax(…))` with 7 equal cells.
- One colour for "at No. 1" on this page: green = live.
- Covers at 36–40px.

**Shots:** live-charts-1440-light.jpg (y about 830–1,170), live-charts-1024-light.jpg.

### MU-19: Desktop song/album hero is wasted width; the picker rail has no scroll cue (design, medium, M)

**Pages:** /music/[song], /music/albums/[album] · desktop

**What's wrong.**
- **Half-empty hero.** The hero card spans 1,160px, but WGFT's content stops at about x 850 and Love, Damini's at about x 977. That leaves 300–450px of tinted, empty card.
- **Long blurb under the hero.** Directly below, the blurb runs 95 characters per line (MU-06).
- **Rail with no cue.** The "All 15 song pages" rail is 2,394px of chips in a 1,160px window. It is clipped hard on both edges ("2026" at left, "Alone 20…" at right), with no fade or arrow, so mouse users can't tell it scrolls. This is the P022 remainder; V-music-01 fixed only the scroll-into-view.

**Suggestion.**
- Use the hero's right third for the three lead figures (countries · best peak · plaques), or move the blurb there at 62ch.
- Add edge fades and ‹ › buttons to the rail at ≥901px.

**Shots:** song-wgft-1440-light.jpg, album-love-damini-1440-light.jpg.

### MU-20: Gold is spent on six jobs on song and album pages (design, medium, S)

**Pages:** song and album template · both layouts

**What's wrong.**
- Gold on these pages covers:
  - every h2 ("BY THE NUMBERS", "CHART PEAKS", "CERTIFICATIONS", "TRACKLIST", "FREQUENTLY ASKED"; `song.module.css:160` sets `.h2 { color: var(--gold) }`);
  - the tagline;
  - the lead stat;
  - "▶ Play on Spotify";
  - "Next song/album";
  - links and "SONG PAGE →".
- That is 21–27 gold text nodes per page.
- The h2s on /music, /dai-dai, /music/listeners and /live-charts are **ink**, so the same section disagrees with itself.
- At the end of a phone page two gold fills stack: the sticky "Play on Spotify" bar and "NEXT SONG: CITY BOYS →". P021 is still open.

**Suggestion.**
- h2s go to ink, as on the hub pages.
- The tagline goes to `--text-body`.
- "Next song/album" becomes the outline button.
- Play stays the one gold fill.
- Keep gold for the lead stat only if it is "live" (streams). Otherwise ink.

**Shots:** song-wgft-1440-light.jpg, song-wgft-390-light-end.jpg (two gold fills, three button widths), album-love-damini-390-light.jpg.

### MU-21: Three colour encodings for chart tiers in one section (design, low-medium, M)

**Pages:** song/album pages, /dai-dai, /live-charts · both layouts

**What's wrong.**
- **Song/album pills:** No. 1 gold / Top 10 cyan / Top 40 silver. The CSS comment says "Peak bands carry meaning and are never recoloured" (`song.module.css:276`).
- **Dai Dai:** the replay map, its ranking swatches and a legend of 11 entries use a brown sequential ramp, with No. 1 the darkest brown on paper. The flag and takeover grids on the same page use a gold wash.
- **Live charts:** the two layouts disagree. In the opened desktop panel "#1" is gold and other positions are ink. In the opened phone panel "#1" is green and every other position ("#2", "#15"…) is gold.
- A reader moving between three pages of the same section learns three meanings for "No. 1".

**Suggestion.** Write one rule and apply it:
- categorical chip colours everywhere chips appear;
- a sequential ramp only on choropleth maps, with its legend reduced to the tiers present plus "not read";
- green only for "live now".
- Align Dai Dai's ranking swatches with the chip palette.

**Shots:** song-alone-1440-light.jpg, dai-dai-1440-light.jpg (y about 5,000–5,800), live-charts-1440-light-open.jpg.

### MU-22: Kickers break mid-word and orphan their separators (build-fix, low, S)

**Pages:** /dai-dai, song and album pages, OG cards · phone and OG

**What's wrong.**
- Dai Dai phone: "…OFFICIAL SONG · CO- / LEAD WITH SHAKIRA". The break falls at the hyphen.
- Alone phone: "BLACK PANTHER: WAKANDA FOREVER · 2022 / · LEAD".
- Love, Damini phone: "…· ATLANTIC / · BAD HABIT · SPACESHIP".
- OG cards: "GUNNA FT. BURNA BOY · THE LAST WUN · / 2025" and "…WAKANDA / FOREVER · 2022".
- The year also appears three times in the first phone screen of a song page: back bar "2022", kicker "… · 2022" and credit "Burna Boy · 2022".

**Suggestion.**
- Use a non-breaking hyphen in "Co‑lead".
- Bind each " · " to the item after it (U+00A0 before it, or render items as inline-block spans).
- `text-wrap: balance` on kickers.
- Drop the year from either the kicker or the credit.

**Shots:** dai-dai-390-light.jpg (top), song-alone-390-light.jpg, album-love-damini-390-light.jpg; the OG sheet.

### MU-23: WGFT's role tag contradicts its visible credit with no explanation (content, low, S)

**Pages:** /music/wgft and other Rule C co-lead pages · both layouts

**What's wrong.** The hero reads "THE LAST WUN · 2025 · CO-LEAD WITH GUNNA" directly above the credit "Gunna ft. Burna Boy". The tag follows the owner's Rule C (the song is a single in his own Spotify discography), but to a reader "ft." and "co-lead" contradict each other.

**Suggestion.** Keep the tag as ruled and add a one-line "why": a small "ⓘ" or footnote reading "Filed as lead: released as a single in Burna Boy's own discography (the rule ChartMasters uses)." Link it to the methodology.

**Shots:** song-wgft-1440-light.jpg, song-wgft-390-light.jpg.

### MU-24: Certifications are called "awards" (content, low, S)

**Pages:** song and album pages, Keep exploring · both layouts

**What's wrong.**
- "CERTIFICATIONS · 4 AWARDS" (WGFT) and "8 AWARDS" (Love, Damini).
- Keep exploring: "Certifications · 251 awards across 27 countries".
- Yet "Awards & wins ↗" on the same pages links to /records/awards (83 wins).
- Two different things share one word, on a site whose value is precision.

**Suggestion.** Use "plaques" or "certifications" for certifications, and keep "awards" for Grammys, AFRIMA and the like.

**Shots:** song-wgft-1440-light.jpg, album-love-damini-1440-light.jpg.

### MU-25: Share cards: Spanish, listeners, music and live are the weakest previews (design, medium, M)

**Pages:** /dai-dai/es, /music/listeners, /music, /live-charts · OG

**What's wrong.**
- The English Dai Dai card carries the cover and four stat tiles plus a "Performed" pill. The **Spanish card is text-only**: no cover, no figures, white title.
- **/music/listeners:** "Where the World Listens", with no map on the one page whose whole point is a map.
- **/music:** title plus one line ("8 studio albums, 2 EPs and every certified hit"), about 60% empty.
- **/live-charts:** "527 charts". The page calls them placements; each is one release on one country chart.
- These are the cards fans post. Cards stay gold, as ruled.

**Suggestion.**
- Bring /es to parity with EN, in Spanish.
- Listeners card: the dot map with the top 3 named, plus "33% of 45.97M in 50 cities".
- Music card: a strip of 8 covers.
- Live card: the platform split and "17 at No. 1 now", with the noun "placements".

**Shots:** OG files (sheet in scratchpad `og-sheet.jpg`).

### MU-26: Dai Dai desktop has no breadcrumb and no song picker (design, low, S)

**Pages:** /dai-dai, /dai-dai/es · desktop

**What's wrong.**
- Every song page lists Dai Dai first in "All 15 song pages", and /music lists it first in "The songs, in depth".
- The Dai Dai page itself (desktop) has **no breadcrumb** (my probe found none) and no picker.
- Once you're there, the way back to the songs is the top nav's "Music". Phone has its back bar.

**Suggestion.**
- Breadcrumb "Home / Music / The Dai Dai story" (Spanish: "Inicio / Música / …").
- The same picker rail as the song pages, under the hero or above Keep exploring.

**Shots:** dai-dai-1440-light.jpg (top).

### MU-27: The /music tracklist dialog doesn't link tracks that have song pages (build-fix, low, S)

**Pages:** /music (dialog) · both layouts

**What's wrong.** The L.I.F.E dialog lists "11 Like to Party" as plain text, though /music/like-to-party exists. Album pages do link theirs ("7 Last Last · SONG PAGE →"). The dialog is the most-used tracklist on the site.

**Suggestion.** Reuse the album page's "Song page →" affordance in the dialog rows, with the row as the link and 44px tall.

**Shots:** scratchpad view `music-1440-light-dialog-after.jpg` (not in the budgeted set).

### MU-28: The live-charts "no movement" dash is 2.1:1 (build-fix, low, S)

**Pages:** /live-charts · desktop (open panel)

**What's wrong.** `.moveFlat` "–" renders at 50% of `--text-muted`, which gives 2.09:1 on the #1 row wash and 2.18:1 on paper. There are 159 instances when Dai Dai is open. It carries meaning ("no change").

**Suggestion.** Use full `--text-muted` (about 5.5:1), or keep it decorative with `aria-hidden` and give it a visually hidden "no change".

**Shots:** live-charts-1440-light-open.jpg.

### MU-29: Reconsider: half-empty "By the numbers" rows on desktop (reconsider-ruling, low, S)

**Pages:** /music/albums/love-damini and 5–7-tile song/album pages · desktop

**The ruling.** D-10/D-11 (24 Sep, "do your pick") left half-empty last rows as designed.

**The evidence for reconsidering.**
- On Love, Damini, the 4 + 2 grid leaves **two empty bordered cells, about 580×140px**, beside "5×" and "19". The bordered frame makes the empty cells read as missing data.
- The designer's own rule in the same bundle says the opposite. `RESPONSIVE-AND-STATES.md` §81: "Partial last row: stretch the final cell … The alternative (leaving the gap) reads as a rendering fault."
- Tile counts vary from 2 to 8 across the 23 pages, so the gap appears on many of them.

**Suggestion (owner's call).** Either stretch the last cell, or use 3 columns for 6 tiles. If the ruling stands, nothing changes.

**Shots:** album-love-damini-1440-light.jpg (y about 720–1,000).

### MU-30: Dai Dai phone hero: the chapter rule sits on the buttons' bottom edge (build-fix, low, S)

**Pages:** /dai-dai, /dai-dai/es · phone

**What's wrong.** "Skip to the numbers" (y 283–331) and the EN/ES switch end exactly where the full-width chapter rule is drawn (y ≈ 331), with no gap. The rule reads as the buttons' underline. This is P092 (29 Sep), still open.

**Suggestion.** Give the hero about 24px of bottom padding on the phone, in both languages.

**Shots:** dai-dai-390-light.jpg (top), dai-dai-es-390-light.jpg.

### MU-31: The phone tab bar lights no tab on /dai-dai (build-fix, low, S)

**Pages:** /dai-dai, /dai-dai/es · phone

**What's wrong.** On /dai-dai the five-tab bar shows Home · Music · Certs · Charts · Records with none active. /music lights Music, and /live-charts lights Charts. `MobileTabBar.tsx` matches by `startsWith(href)` plus an `ALSO` map, which has no entry for `/dai-dai`, so the site's most-visited song story belongs to no section. V-global-15 fixed the same gap for /compare and /afrobeats.

**Suggestion.** `ALSO["/music"] = /^\/dai-dai(\/es)?$/`. The Spanish labels already exist.

**Shots:** dai-dai-390-light-firstscreen.jpg, dai-dai-es-390-light.jpg.

### MU-32: "15 · 1 · 1" reads like a date or a score (content, low, S)

**Pages:** /dai-dai, /dai-dai/es · both layouts

**What's wrong.** In "Streaming streaks", the row "No. 1 right now: YouTube countries · Apple Music · Spotify" carries the figure **"15 · 1 · 1"** in gold Anton. The reader has to map three numbers to three platforms from the label.

**Suggestion.** Make the figure "17" with the caption "No. 1 right now: YouTube 15 · Apple Music 1 · Spotify 1", or show three small labelled figures.

**Shots:** scratchpad `view2/dai-dai-1440-light-y8000-after.jpg` (not in the budgeted set).

---

## Carried over from the 29 Sep audit

Status on 8 Oct:

| Item | Status | Notes |
|---|---|---|
| P018 | Open | Phone "trk" abbreviations and gold track counts. The compilation title no longer breaks. |
| P019 | Not raised | Overlaps the /music EPs-grid ruling. |
| P020 | Open | Phone peak pills are flag + number only; "🌍 #60", and look-alike flags such as 🇳🇴/🇩🇰 and 🇦🇺/🇳🇿. Not re-raised as its own item; fold into MU-21 when chips are redesigned. |
| P021 | Open | Inside MU-20. |
| P022 | Partly fixed | The rail now scrolls to the current chip. The no-cue part is in MU-19. |
| P023 | Ruled | D-10/D-11; see MU-29. |
| P024 | Open, folded | Album tracklist rows still run 1,160px wide for at most 350px of title. Fold into MU-06 and MU-19: carry per-track facts (song page, peak, plaques) or use two columns ≥1024. |
| P025 | Open | MU-12. |
| P026 | Open | MU-14. |
| P027 | Open | MU-18. |
| P028 | Open | MU-17. |
| P029 | Open | MU-18. |
| P087 | Fixed | The Europe inset now sits in open Pacific. |
| P088 | Fixed | b29a1e15: 24px padding each side. |
| P089 | Mitigated | Sticky map, V-music-07. |
| P091 | Improved | Labels on one line. |
| P092 | **Still open** | MU-30. |
| P093 | Not rechecked | |

## Handoff notes for Claude Design (music group)

Read these with the owner rulings above. Desktop and phone are drawn separately, and nothing is collapsed.

1. **Dai Dai hero figure strip (MU-01).** Draw four figures in the hero, each a jump link to its chapter:
   - No. 1 Global 200 · 7 wks
   - 37 days Spotify Global No. 1
   - No. 1 in 26 countries
   - 19 certifications

   Desktop (1440 and 1024) and phone are separate artboards. In both themes, the figures are ink, with gold only if a figure is live. Remove chapter 01's second cover. Spanish copy is included.
2. **Dai Dai record de-duplication (MU-03) and the Global 200 unknown-week encoding (MU-04).** Show how the replay's end frame absorbs the takeover grid, and draw unread weeks as baseline stubs. This needs owner sign-off because it edits the approved 26 Sep design.
3. **Song/album template v2 (MU-19, MU-20, MU-06, P024).**
   - Desktop hero uses its right third: three lead figures, or the 62ch blurb.
   - h2s go to ink, "Next" is the outline button, and the rail gets edge fades and ‹ › buttons.
   - Tracklist rows carry per-track facts from data.
   - Phone: one gold fill per screen, and a 44px FAQ row.
4. **The /music catalogue card (MU-10, MU-11).** Card → album page; secondary "N tracks" opens the dialog; replace the label chain with "Best No. X · N plaques"; one album order on both layouts.
5. **Listeners (MU-12, MU-13, MU-15).**
   - Area-true dots, the top 5 labelled, cropped south, and phone zoom chips.
   - A three-figure insight row (33% · Nigeria 20% · 42 of 50 outside Africa).
   - Ink numerals on the phone, and row ↔ dot linking.
6. **Live charts (MU-16, MU-17, MU-18).**
   - A platform mark in phone pills.
   - A sticky "RELEASE · PLATFORM" sub-header and an end-of-panel close row.
   - Seven equal platform cells, or Spotify Albums folded in.
   - One "No. 1" colour (green = live), and 36–40px covers.
7. **The tier colour rule (MU-21).** One written rule for categorical vs sequential vs live, applied to all three pages.
8. **Share cards (MU-25).** Spanish Dai Dai at parity; listeners card with the map; music card with a cover strip; live card with the platform split. Gold, as ruled.

Build-only items that need no designer: MU-02, MU-05, MU-06, MU-07, MU-14, MU-18 (grid and colour parts), MU-22, MU-27, MU-28, MU-30 and MU-31. Content items: MU-08, MU-09, MU-11, MU-13, MU-23, MU-24 and MU-32.
