# Records group: independent design review (8 Oct 2026)

Scope: /records, /records/africas-biggest (all 20 boards, including the new "Most 500M-stream songs" and "Most days on Spotify's Global Daily Top Artists" boards), /records/firsts, /records/awards, /records/by-the-numbers, /records/visualized, /records/cars and /records/cars/bugatti-chiron. Everything was read on the live site, https://burnaboystats.com (main e4b0afc8, deployed 8 Oct).

Method: headless Chrome, run only through the local `heavy` lock wrapper (on the owner's machine, not in this repo), using one batch harness (`scratchpad/rec/batch.mjs` + `audit.js` + `extra.js`).
- Phone was captured at 390x844 with mobile emulation and an iPhone user agent. Desktop was captured at 1440x900, and 1024x768 where noted.
- The site theme was set through `localStorage.theme`. All shots are full page, JPEG q60, capped at 6000px, then cropped to keep the folder under 4 MB (3.99 MB, 27 files). The crop heights are listed at the end.
- Every shot was opened and read before I judged it. The lower halves of the long pages, beyond the crops, were read from working clips in the scratchpad.
- Measurements come from computed styles in the page. Contrast was measured by compositing each text colour over its real ground, with opacity included. SVG label sizes are the rendered px (font-size × screen CTM).
- No Chrome process is left running.

Owner rulings respected. I propose none of the following:
- accordions or folds on dense lists
- cross-applying desktop and phone designs
- OG colours
- the N2 chip style
- the hub rails
- the headline-first order on /records/firsts (ruling 6 Oct #5)
- the fleet list or the car prices
- the D-10/D-11 half-empty song and album grids

Where a finding sits close to a ruling, I say so.

Items marked "still open (29 Sep)" were first raised in the 29 Sep design audit (`design-audit-0929/`, in the owner's local working folder, not in this repo). I re-measured each one on the live site today and give the new evidence. Items that 29 Sep raised and that are now fixed are listed in their own section at the end.

---

## Strengths to keep

1. **The Africa's Biggest board grammar.** Every board uses the same parts:
   - title
   - a mono scope/meta line
   - ranked rows with a flag and a sub-line
   - Burna's row washed and gold *wherever it falls*
   - a "He leads" badge only where he does
   - a plain-English note that will say "Burna Boy does not lead this board, and it is here for that reason"

   This honesty is the product. The two new boards (500M songs, Spotify Global Daily Top Artists days) dropped into it without new chrome. Shots: `africas-biggest-1440-light.jpg`, `africas-biggest-1440-light-crop-scope-and-days-board.jpg`, `africas-biggest-390-light.jpg`.

2. **Perceived performance is excellent.**
   - CLS 0.000 on all 24 captures.
   - LCP is text (an h1 or the lede) on 6 of 8 pages, at 76–336 ms in the lab.
   - 0 KB of images above the fold on every page except cars (lazy, 252 KB total at 1440) and the car page (one 65 KB hero).
   - No horizontal overflow at 390 on any page (scrollWidth = 390).

3. **Phone screens are real phone designs, not shrunk desktops.**
   - A sticky back bar carries a live count badge ("20 boards", "83 wins", "16 books", "01 / 16").
   - N2 filter chips (All 20 / He leads / Others lead; All 248 / Wins only / Nominated) and a "● HIS ROW" legend.
   - A 2×2 stat strip.
   - The box-office list reflows as venue / artist·year / gross.

   Shots: `records-390-light.jpg`, `africas-biggest-390-light.jpg`, `awards-390-light.jpg`.

4. **Both themes hold up.** Dark is rich, not muddy, and light keeps one gold (#945e00) on the desktop surfaces. Body text passes AA on every page I measured (0 failures on the hub, firsts, awards, by-the-numbers and visualized in either theme). Shots: `records-1440-dark.jpg`, `africas-biggest-1440-dark.jpg`, `africas-biggest-390-dark.jpg`.

5. **The car pages have real art direction.**
   - a cut-out on a per-car floor ring
   - livery swatches sampled from the art
   - a spec panel that footnotes manufacturer figures (limiter vs measured top speed, DIN weight)
   - previous/next links with thumbnails

   The dark theme is the strongest screen in the group. Shots: `car-bugatti-chiron-1440-light.jpg`, `car-bugatti-chiron-390-light.jpg` (dark fold in the scratchpad clips).

6. **/records/visualized (desktop) writes takeaway-first captions.** For example, "+12.75M in 40 days — …" and "2019 was the peak — 19 wins…". Each chart ends with a route to the page that proves it (14 jump chips, 32 links). This is Pudding-grade structure; the encoding problems are below. Shot: `visualized-1440-light.jpg`.

7. **/records/by-the-numbers is one quotable sheet.**
   - 15 figures, each cell linking out
   - an "Updated October 2026" stamp
   - a share row
   - the phone version keeps a fixed "Share these stats" bar

   Shots: `by-the-numbers-1440-light.jpg`, `by-the-numbers-390-light.jpg`.

---

## Findings (most important first)

### R-01: Phone readers get no sources on Africa's Biggest, and the page tells them to look on the desktop (phone, HIGH)
- **What:** None of the 20 phone boards carries a source. The desktop has 20 `<details>` "Source ▾" folds; the phone has 0. The phone footnote reads: "Each board cites its own source and date on the desktop page."
- **Why it matters:** The desktop page is the same URL with that layout hidden, so a phone reader cannot get there. Verification is this site's whole value, and phones are most of its traffic. 29 Sep flagged this footnote wording; it is still live.
- **Evidence:**
  - extra metrics: details=20 at 1440, details=0 at 390
  - `africas-biggest-390-light-crop-days-board-and-desktop-only-sources.jpg` (the footnote is under the days board)
  - `africas-biggest-390-light.jpg`
- **Suggestion:** Give every phone board a one-line provenance row in phone styles, under its note: source + read date, for example "Billboard · chart dated 3 Oct 2026" or "kworb (Spotify plays) · 6 Oct 2026". It is always visible. The long method can sit behind a tap on that row. This is a disclosure of method, not a collapsed list, so it doesn't run into the dense-screens ruling. Then reword the footnote.

### R-02: Desktop provenance is hidden in 20 folds and dated inconsistently (desktop, MEDIUM)
- **What:** Every board's source is folded ("SOURCE ▾", 11px mono). The read date is visible in the meta line on some boards only:
  - dated: "SPOTIFY · AFRICAN ARTISTS · AS OF 6 OCTOBER 2026" (500M)
  - undated: "TOP 5 · AFRICAN ARTISTS" (Hot 100 weeks), "BILLBOARD HOT 100 · AFRICAN ARTISTS · BEST PEAK"

  On the undated boards the date sits inside the note prose, or only in the fold. A journalist cannot see at a glance how fresh each board is.
- **Evidence:** `africas-biggest-1440-light.jpg`. The StatBox.tsx comment says the fold is a deliberate "shouldn't outweigh the board" choice.
- **Suggestion:** Use one provenance footer on every board, with the source name and read date always shown in one ink line. Only the method text folds. Use the same pattern on phone (R-01).

### R-03: "Africa's Biggest" mixes three scopes and labels them only in 11px mono (both, HIGH)
- **What:** Of the 20 boards, 2 are Nigerian-only and 3 rank all artists worldwide:
  - Nigerian-only: "Highest peak on Spotify's Global Weekly Top Artists chart" (its own note admits "this is a NIGERIAN ranking… Tyla is absent") and "Biggest single day on Spotify" (meta "NIGERIAN ARTISTS").
  - World: "Biggest monthly audience on YouTube — worldwide", "Fastest music video to a billion YouTube views" (Adele, Ed Sheeran, Luis Fonsi…) and the African No. 1s… Apple board is African.

  The scope is carried only by the mono meta line and the note's prose. A fan screenshotting the Nigerian board under an "Africa's Biggest" h1 is mis-stating it.
- **Evidence:** `africas-biggest-1440-light-crop-scope-and-days-board.jpg`, `africas-biggest-1440-light.jpg` (lower boards are in the scratchpad clips ab1440-a/b).
- **Suggestion:** Give every board a fixed-position scope tag in ink: AFRICA / NIGERIA / WORLD. Move the world boards into a third group: "Burna on the world boards". Groups today are Billboard 4 / Streaming 16 (the streaming group holds YouTube and Apple boards too). The desktop groups could become Billboard / Spotify / YouTube & Apple / World boards.

### R-04: On phone /records/awards, the Grammy is the 35th of 48 bodies, about 19 screens down (phone, HIGH)
- **What:** The phone sorts bodies by most wins (the design's rule, page.tsx:78–87), so Grammy Awards (1 win of 13) starts at y=15,906 of a 22,974px page. The Headies opens the list.
- **Why it matters:** The hero, the lede ("including the 2021 Grammy"), the stat strip ("1 GRAMMY from 13 noms") and two of the four FAQs all lead with the Grammy. The only controls are All / Wins only / Nominated; there is no index.
- **Evidence:** extra metrics h2 y-positions (Headies 693 … Grammy Awards 15906 … NAACP 20575), `awards-390-light.jpg`, clip aw390-grammy.
- **Suggestion:** A sideways-scrolling rail of body names under the filter. It is a jump index, not a fold; 29 Sep also suggested it and it is still open. And/or open the list with a "Majors" block (Grammy, BET, BRIT, MOBO, Billboard Music Awards, AMAs) before the most-wins order. The ordering is the designer's, so this is a design call.

### R-05: Phone chart labels render at 6.9–7.4px, and the phone charts lead nowhere (phone, HIGH; still open from 29 Sep)
- **What:**
  - 29 of 32 SVG text labels on phone /records/visualized are under 11px (median 7.4px, min 6.9px: "47.38M", "Spotify · monthly listeners", "1 Jul"). On desktop the same labels render at a median of 17.7px and a max of 37.4px, because the viewBox scales the text.
  - The phone page has 1 link in main (desktop: 32), so none of its 14 charts routes to its proof page.
  - Captions are full sentences in Space Mono ("Gold is Burna Boy — 32 of the 82 verified nights."), which breaks mono-for-labels-only.
  - The tickets-vs-gross scatter still crops its headline point (sideways scroller, 460px in 354px).
- **Evidence:** extra metrics svgText (390: n=32 min 6.9 med 7.4 under11=29; 1440: min 12.1 med 17.7 max 37.4), `visualized-390-light.jpg`, `visualized-1440-light.jpg`.
- **Suggestion:** Charts draw labels at fixed CSS px (11–12px labels, 13px values) that don't scale with the viewBox. Give each phone chart a route row in phone styles, and set captions in Geist.

### R-06: The "← Career records" pill's label sits at the top of the pill on /records/firsts and /records/awards (desktop, build-fix; still open from 29 Sep)
- **What:** A legacy `.back` rule overrides `.btn`. It is `firsts.module.css:28–36` and `awards.module.css:71–79`: `display:inline-block; margin:0 0 60px; font-size:.74rem; color:var(--gold)`. The pill is 45px tall and the label sits about 10px from its top edge.
- **Evidence:** `firsts-1440-light-crop-back-pill.jpg`, `awards-1440-light-crop-faq-cards-and-back-pill.jpg`.
- **Fix:** Delete the first `.back` block in both files. The later `.back { margin-top: 18px }` stays.

### R-07: The awards FAQ cards have borders but no side padding (desktop, build-fix; still open from 29 Sep)
- **What:** There are two `.faqItem` rules:
  - `awards.module.css:173`: padding 18px 20px, border, bg-soft
  - `:305`: padding 20px 0

  The text starts 1px inside the border (box left 80, text left 81) and the two rows of cards touch. The band heading "How many awards has Burna Boy won?" repeats the first card's question word for word.
- **Evidence:** extra metrics (pad "20px 0px", boxL 80 / textL 81), `awards-1440-light-crop-faq-cards-and-back-pill.jpg`.
- **Fix:** Delete one rule and name the band "Common questions", as Africa's Biggest and cars do.

### R-08: Year-chip rank numerals fail AA in light (both, build-fix)
- **What:** `.chipRank { font-size:11px; opacity:0.7 }` (africas-biggest.module.css:297) puts the 1–5 ranks inside the "Most-streamed African artist" year chips at 3.95:1 (ink, #4a443b at 70% on #f7f4ee). Burna's gold chip measures 2.74:1. That is 26 failing elements at 1440 and 25 at 1024.
- **Evidence:** audit failEx at africas-biggest 1440 and 1024 light.
- **Fix:** Drop the opacity and use `--text-muted` (#5f584f, 6.3:1). For Burna's chip use the gold ink at full opacity.

### R-09: The "IN PROGRESS" pill breaks onto two lines beside "2026" (desktop, build-fix)
- **What:** The green pill measures 81×43px for an 11px label at 1440 and at 1024; "IN / PROGRESS" wraps inside the pill. The paragraph beside it squeezes into a ~370px column.
- **Evidence:** extra metrics inProgress {w:81,h:43}, `africas-biggest-1440-light.jpg` around y 2960.
- **Fix:** Add `white-space: nowrap` to `.inProgress`, and let the year note wrap under the year row.

### R-10: Board layout wastes space at 1440 and stretches rows at 1024 (desktop, MEDIUM)
- **At 1440:** Paired boards share a row whatever their height:
  - Most-streamed (year board, about 1,000px) beside Highest monthly-listeners peak (about 500px) leaves a ~500px blank cell.
  - Hot 100 entries beside Hot 100 peak leaves ~170px.
  - Biggest Spotify debut and the YouTube peak cards leave ~150–250px.
- **At 901–1239px:** The boards drop to one 944px column. The page grows from 11,060px to 15,269px.
- **In wide boards (500M, Spotify days, Global 200):** The value sits 850–1,065px from the name it belongs to.
- **Evidence:** `africas-biggest-1440-light.jpg`, `africas-biggest-1024-light.jpg`, extra metrics grids (cols 2 at 1440, 1 at 1024).
- **Suggestion:**
  - Let the year board span the row, and pair boards of similar length.
  - Cap ranked-list width at about 640px inside wide or one-column cards, or use dotted leaders.
  - Keep two columns down to 901px.

### R-11: The 500M board draws a near-total tie as a ranking (both, MEDIUM)
- **What:** 14 rows:
  - 7 rows read "1" (Rema, Tems, Tyla, CKay, Ayra Starr, Burna Boy, Moliy, two songs each)
  - 7 rows read "8" (one song each)

  The rank column carries almost no information. The tie order is unexplained (it is combined streams: Rema 2.73B, Tems 2.28B … Moliy 1.13B). The board's most interesting fact, "Dai Dai" at 499.4M and about to make Burna the outright leader, is buried in the note.
- **Evidence:** `africas-biggest-1440-light.jpg`, `africas-biggest-390-light.jpg`.
- **Suggestion:**
  - Group the rows by tier ("2 songs" / "1 song") with the song lines under each name.
  - Add a "Next to cross" row that shows 499.4M against the 500M line.
  - State the in-tier order ("ordered by combined streams").

### R-12: Artist names link on one board only (both, build-fix)
- **What:** Only the 500M board's names are links: Rema, Tems, Tyla, CKay, Ayra Starr and Wizkid are underlined, with targets 17–19px tall. The same artists are plain text on the other 19 boards.
- **Evidence:** audit tapEx (Rema 39x19 … at 1440; 35x17 at 390), StatBox `e.href` set only in african500m data.
- **Fix:** Link every board name that has an /afrobeats page, or none. If they link, give them a 24px+ hit area.

### R-13: The /records hub is a flat list of 16 unequal "books" with no figures (both, MEDIUM-HIGH)
- **What:**
  - 16 title-plus-one-line cards.
  - At 1440: 8 rows of 2, about 1,000px.
  - At 1024: one column of 944px cards, about 2,000px (see R-14).
  - Phone: about 1,450px of cards before the box-office table.
- **Why it matters:**
  - The list mixes top-level destinations already in the main nav (Live Charts, The Afrobeats Board) with four Tours sub-pages (Highest-grossing shows, …by country, Where he's performed, Festivals).
  - Cards carry no figure, though the Keep-exploring cards on the same page do ("384 chart entries · 46 No. 1s"). 29 Sep raised this; it is still open.
  - Africa's Biggest is described as "Most-streamed African artists, year by year", which is one of its 20 boards.
  - The lede promises "16 record books, each one sourced and dated", and nothing on the hub is dated.
- **Evidence:** `records-1440-light.jpg`, `records-390-light.jpg`, `records-1024-light.jpg`.
- **Suggestion:**
  - Four shelves: Charts & streaming / Awards & firsts / On the road / Off stage (cars).
  - Each card gets one derived figure in ink and its "as of" date.
  - Tours sub-pages move inside an "On the road" shelf.
  - Rewrite the Africa's Biggest description to match the page ("20 leaderboards — he leads 11").

### R-14: /records at 901–1239px gives a 3+1 stat strip and one-column cards (1024, build-fix)
- **What:** `records.module.css:223–237`:
  - `.headlineGrid { repeat(3,1fr) }` puts the 4th stat, "2021 Grammy winner", alone in a full-width second row with two-thirds of it empty.
  - `.grid { 1fr }` makes the 16 cards 944px wide each.
- **Evidence:** `records-1024-light.jpg`.
- **Fix:** Keep the strip 4-up down to 901px (cells about 240px; "$30.46M" at 52px fits). Keep the cards 2-up down to 641px.

### R-15: Firsts: the gold year column reads as a broken timeline, and rows prove nothing (both, MEDIUM)
- **What:** Paul ruled a headline-first order (6 Oct #5), and that order is kept. But every row leads with a 28px gold Anton year, so the column reads "2023, 2025, 2025, 2025, 2023, 2022, 2022, 2021, 2019" (Stadiums), which looks like a sorting bug.
  - "Charts & streaming" prints "2026" in gold 15 times in a row.
  - 61 gold text elements on desktop firsts.
  - No row links to its proof page or its stat card. 29 Sep raised this; still open.
  - The jump rail is not sticky, and the 29-row category is about 3,000px.
- **Evidence:** `firsts-1440-light.jpg`, scratchpad view firsts-1440-light-p2, audit goldText 61, sticky list (header only).
- **Suggestion:**
  - Demote the year to an ink label after the title, or right-aligned, so the order reads as importance.
  - Add a small "proof →" link per row.
  - Make the jump rail stick under the masthead.

### R-16: Phone firsts collapses 45 of 54 milestones and drops every detail line (phone, MEDIUM; ask first)
- **What:** Screen 15 (live, designer-built) is an accordion with the first category open. "Charts & streaming (29)" is closed, and the phone row shows the year and title only. The supporting sentence, which is the evidence, is desktop-only.
- **Why it matters:** This runs against Paul's standing preference for dense open list screens (feedback-dense-screens-over-accordions), and the phone awards screen is fully open.
- **Evidence:** `firsts-390-light.jpg` (page is 1,181px tall).
- **Suggestion:** Open all five categories as a dense list with the detail line in muted 13.5px. Ask Paul first, because it changes a designed screen.

### R-17: Awards ledger typography and NOMINATED weight (both, MEDIUM; still open from 29 Sep)
- **Desktop:**
  - 248 category names are set in 16px Anton caps.
  - Work titles are in Space Mono: 473 mono text elements on desktop awards, against 268 in Geist (e.g., "Baddest (AKA ft. Burna Boy, Khuli Chana & Yanga Chief)").
  - The reading-scale rule says mono is for labels only.
  - Positive: the body headers are sticky in their left column.
- **Phone:**
  - 165 bordered NOMINATED pills are as loud as WON.
  - Rows with no named work print a lone "—" second line.
- **Evidence:** `awards-1440-light.jpg`, `awards-390-light.jpg`, audit fam (Space Mono 473).
- **Suggestion:**
  - Desktop: categories in Geist 600, work titles in Geist muted.
  - Phone: Nominated as quiet text, and drop the empty line.

### R-18: Chart encoding on /records/visualized (both, MEDIUM)
- **(a) Climb to sixty million.** An area chart on a truncated axis: 47.38M, 53.76M, 60.13M, which are non-round ticks. The fill implies magnitude, and the hero on Africa's Biggest deliberately draws from zero "so a 25% climb reads as a 25% climb".
- **(b) Fifteen years of winning.** Discrete yearly counts are drawn as a filled line with only 2012 / 2019 / 2026 labelled, so the second peak (17 wins) has no year.
- **(c) Wins vs nominations.** The centre reads "35% WIN RATE" while the legend reads "Won 83 · 33%". That is two percentages for one 83 (decided vs all 248).
- **(d) Gold carries no meaning in single-series charts.** Every bar is gold in "Where he is charting", "Where he has performed", "Certifications by country" and "Most-decorated stages". Phone bars are an orange-to-gold gradient, not the one light gold. 29 Sep raised this; still open.
- **(e) Pace of the plaques** still skips 2021 (2020 → 2022).
- **(f) Peak map.** The light-theme caption says "gold = higher" but No. 1 is dark brown. The 41+ salmon sits close to the no-data tone.
- **Evidence:** `visualized-1440-light.jpg`, `visualized-390-light.jpg` (lower charts are in scratchpad clips viz1440-a/b/c, viz390-end).
- **Suggestion:**
  - Line-only (no area fill) for the climb, or zero-based.
  - Bars for yearly counts, with every year labelled.
  - One denominator per donut.
  - Neutral bars for single-series charts; gold only for Burna or the live year, with a key.
  - Mark incomplete years.
  - Word the map caption by darkness.

### R-19: The tickets-vs-gross scatter spends 80% of its area on four dots (desktop, MEDIUM)
- **What:** About 70 of 82 shows sit in the bottom-left fifth of the plot (0–15k tickets, $0–2M), with overlapping markers. The labelled outliers (London Stadium, Stade de France, La Défense ×2) fill the rest. On phone the chart is in a sideways scroller, and London Stadium starts off-screen (still open from 29 Sep).
- **Evidence:** scratchpad view visualized-1440-light-p2, `visualized-390-light.jpg`.
- **Suggestion:** Use a log scale or a zoomed inset of the cluster, and label Burna's top five. On phone, fit the chart to 354px with fixed-size labels.

### R-20: Gold means different things on sibling Records pages (both, MEDIUM)
- **What:** The same figures change colour from page to page:
  - **Ink:** $6.15M / 58,973 / $30.46M / 2021 on the /records stat strip (desktop and phone), the /firsts strip and the cars strip.
  - **Gold:** all 15 figures on /records/by-the-numbers; the phone stat strips on Africa's Biggest (20 · 11 · 1st · 929M) and Awards (83 · 248 · 48 · 1); the phone /visualized and /awards section headings.
- **Gold text counts:**
  - Africa's Biggest: 94 elements (1440 and 390)
  - Awards phone: 101
  - Firsts desktop: 61
  - Records desktop: 37
- **Why it matters:** The home rule (gold = live or action) doesn't hold anywhere in Records, so gold stops pointing at Burna's row, which is the one place the boards need it.
- **Evidence:** audit goldText per page, `by-the-numbers-1440-light.jpg`, `awards-390-light.jpg`, `records-1440-light.jpg`.
- **Suggestion:** One Records rule: stat-strip figures and section heads in ink; gold reserved for Burna's row marker, a live figure and the primary action. The ember tick keeps the family signature.

### R-21: Four left edges on one desktop page (desktop, build-fix; still open from 29 Sep)
- **At 1440:**
  - breadcrumb 80px
  - content 140px (africas-biggest, visualized, by-the-numbers, cars), 80px (records, firsts, awards) or 120px (car page)
  - Keep exploring 104px
  - footer 90px
- **At 1024:** 40 / 24 / 50.
- **Evidence:** extra metrics h1Left / bcLeft / keLeft / footLeft per page, any 1440 shot (bottom).
- **Fix:** One page container. Content aligns to the breadcrumb's edge, and Keep exploring and the footer use the same wrap.

### R-22: The car page has a bespoke breadcrumb (desktop, build-fix)
- **What:** `cars/[car]/page.tsx:167–173` renders "CAREER RECORDS / CAR COLLECTION / BUGATTI CHIRON":
  - no Home
  - sentence case in the source
  - placed inside the page at x=120

  Every other Records page uses the BreadcrumbBar band (HOME / … at x=80), and the page's own JSON-LD BreadcrumbList starts at Home.
- **Evidence:** `car-bugatti-chiron-1440-light.jpg`, extra metrics bcText.
- **Fix:** Use `<BreadcrumbBar path=… />`.

### R-23: The car page's proof and comparison are weak (both, MEDIUM)
- **What:**
  - The four Performance bars are all full for the Chiron, because each is a share of the garage's best (still open from 29 Sep).
  - The "Sourcing" card is a 246px box that says only "Press & sightings — see the list note →". The actual citations (AutoJosh, 5 Jul 2026; the Abuja Car CEO's story) are inside the "Why it's on this list" paragraph.
  - The ring runs through the "— ILLUSTRATION —" caption, and its right end is cut by the spec card (still open from 29 Sep).
  - 29–31 labels per layout are under 11px (10–10.5px mono spec labels and captions).
- **Evidence:** `car-bugatti-chiron-1440-light.jpg`, `car-bugatti-chiron-390-light.jpg`, audit small<11 = 29 (1440) / 31 (390).
- **Suggestion:**
  - Bars show rank ("1st of 16") or a garage-median tick.
  - The Sourcing card lists outlet · date · link per claim.
  - The caption clears the ring.
  - Labels go to 11px.

### R-24: /records/cars hierarchy and false affordances (desktop, MEDIUM)
- **Heading weight:** "No longer counted" is the gold h2 (`goldFlat`, cars/page.tsx:257) while "The garage" is ink, so the cars he doesn't own get more emphasis. Its five rows are about 170px each (about 850px; still open from 29 Sep).
- **Ranks:** The tiles print "03" on five cars and "08" on three. The NPD-05 ruling asked for joint ranks ("joint 3rd"), and a bare repeated "03" reads as a numbering bug.
- **Marque pills:** They look like filter chips and do nothing. The static tally was reverted on 7 Oct to keep the drawn pills, so the suggestion is to make them work (filter the garage or jump to the marque), not to remove them.
- **Grid:** The last row is the 328 GTS beside two empty cells. The D-10/D-11 ruling covers the song and album grids, not this one; owner's call.
- **Evidence:** `cars-1440-light.jpg`, `cars-1024-light.jpg`, `cars-390-light.jpg`.

### R-25: By the numbers: freshness and deep links (both, content, MEDIUM)
- **What:**
  - **Freshness is not shown per figure.** It varies from cell to cell:
    - 11.15B streams is auto-published daily.
    - 4.0B YouTube was "counted by hand on 14 September".
    - "No. 94 … where he currently sits" is an undated "currently".
  - **Links go to section pages, not proofs.** "9 Billboard Hot 100 entries → Firsts & records" rather than the Hot 100 entries board on Africa's Biggest; "No. 94 → Africa's biggest", which has no rank board.
  - **Label baselines misalign.** The highlighted cells' labels sit about 11px lower (still open from 29 Sep).
- **Evidence:** `by-the-numbers-1440-light.jpg`, scratchpad clip btn1024.
- **Suggestion:** An "as of" micro-line per cell, links to the exact board (#anchor), and a fixed-height number slot.

### R-26: Lines far past the 62ch measure (desktop, build-fix)
- **What:**
  - /records box-office source note: 152ch (12.5px, no max-width; `records.module.css:221`)
  - cars note box: 91ch at 13.5px and 12.5px
  - firsts detail lines: 91ch
  - awards FAQ answers at 1024: 93ch
- **Evidence:** audit ps (wch) per page.
- **Fix:** `max-width: var(--measure)` on these.

### R-27: The long pages have no index that stays with you (both, MEDIUM)
- **Phone Africa's Biggest:** 13,413px with 20 boards. Only the back bar is sticky, and the three filter chips scroll away after the first board.
- **Desktop Africa's Biggest:** The jump nav has three anchors.
- **Firsts:** See R-15.
- **Evidence:** audit sticky lists, `africas-biggest-390-light.jpg`.
- **Suggestion:** A horizontally scrolling board index (N2 chips, board short names) that docks under the back bar on phone and under the masthead on desktop. Nothing collapses.

### R-28: FAQ answer readability (content, LOW-MEDIUM)
- **What:** "Who is the biggest artist in Africa?" is one 120-word sentence with nine semicolon clauses. It is computed for search, and it is unreadable on a phone, where it opens first and runs about 380px tall.
- **Evidence:** scratchpad clips ab1440-c, ab390-d.
- **Suggestion:** A one-line answer ("It depends on the measure — Burna Boy leads 11 of 20 boards") followed by a measure → leader → figure mini-table. The FAQPage text can stay as is.

### R-29: Arrows and rank notation (content, LOW)
- **Arrows:** "↗" (which usually means "leaves the site") appears on internal links:
  - "Full leaderboard ↗", "Official charts ↗", "By the numbers ↗"
  - every by-the-numbers cell ("CERTIFICATIONS ↗")

  Cards use "→".
- **Rank notation is mixed:** "No. 1" on the Global 200 board, "#1 / #5 / #8" on the Spotify song board, "#17" on the album board, "No. 56" on the Weekly Top Artists board.
- **Suggestion:** "→" for internal links and "↗" for external only. One rank notation ("No. 1").

---

## 29 Sep items now fixed (checked today, not re-raised)
- Phone awards rows are now sorted by year within each body (AFRIMMA 2018 → …).
- Awards desktop body headers are sticky (`ceremonyHead`, position sticky).
- Phone year pills on Africa's Biggest are pressed buttons (V-records-14), and the back-button rings are at 3.7–4.1:1 (V-global-13).
- The Africa's Biggest grid no longer breaks at 901–1239px (it is one column now; see R-10 for the cost).

## Shots (shots/records/, 27 files, 3.99 MB)
Crops (px tall) to fit the budget:

| Shot | Width | Theme | Captured | Kept |
|---|---|---|---|---|
| africas-biggest | 1440 | light | 11,060 | 4,600 |
| africas-biggest | 390 | light | 13,413 | 5,000 |
| africas-biggest | 1440 | dark | — | 2,000 |
| africas-biggest | 390 | dark | — | 3,000 |
| africas-biggest | 1024 | — | — | 2,500 |
| awards | 1440 | — | 20,228 | 3,200 |
| awards | 390 | — | 22,974 | 4,200 |
| firsts | 1440 | — | 7,204 | 2,600 |
| visualized | 1440 | — | 10,983 | 4,000 |
| visualized | 390 | — | — | 4,300 |
| cars | 1440 | — | — | 3,800 |
| cars | 390 | — | — | 3,600 |
| cars | 1024 | — | — | 1,500 |
| records | 1440 | dark | — | 1,500 |
| records | 1024 | — | — | 2,300 |

All others are full height. Evidence crops:
- `africas-biggest-390-light-crop-days-board-and-desktop-only-sources.jpg`
- `africas-biggest-1440-light-crop-scope-and-days-board.jpg`
- `firsts-1440-light-crop-back-pill.jpg`
- `awards-1440-light-crop-faq-cards-and-back-pill.jpg`

Working clips for the lower page halves, and the metrics JSON (metrics.json, metrics2.json, metrics3.json), are in the session scratchpad under rec/.
