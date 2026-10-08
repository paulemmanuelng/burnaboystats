# Content pages: independent design review, 8 Oct 2026

Group: `content`. Pages: `/about`, `/faq`, `/methodology`, `/press`, `/curator`, `/api`, `/embed`, `/share` (stat card maker), `/contact`, `/analysis`, `/timeline`, `/naija66`. Read on the live site https://burnaboystats.com (origin/main e4b0afc8, deployed 8 Oct 2026).

Reviewed as an outside product designer (the bar: FT, The Pudding, Bloomberg, Linear) from three seats: a fan on a phone, a journalist checking a figure, a search visitor arriving cold from "burna boy real name". Owner rulings respected throughout; the one place I think a ruling costs something is a separate ask (C-25).

## Method

- **Captures**: headless Chrome over CDP, only through the local `heavy` lock wrapper (on the owner's machine, not in this repo), four short sessions (harness `tools/content/shoot.mjs`, copied from the board group's, plus `measure.js`). Phone 390x844 with mobile emulation (touch, iPhone UA); desktop 1440x900; tablet 1024x768. Theme set by the site's stored choice (`localStorage.theme`). Full page, JPEG q60. Every Chrome I started was closed (the harness kills it and removes its profile). One orphaned headless Chrome from an earlier, unknown session (parent = launchd, no client on its port, lock free) was also terminated.
- **Budget**: the full-length originals (8.5 MB, capped at 6000px) are in `tools/content/orig/`. The `shots/content/` copies are the same captures, cut to fit the 4 MB budget (desktop light 1900px, desktop dark 1400px, phone light 2300px, phone dark 1700px, 1024 1150px); total 3.94 MB, 40 files. Evidence below the cut is cited against the original file name and lives in `tools/content/orig/` and `tools/content/crops/`.
- **Measurements in the page**: contrast composited to the real ground (gradient-clipped split words skipped), measure in `ch` (content width / the width of "0" in the element's own font), size of every control, `elementFromPoint` hit tests, fixed/sticky chrome by scroll depth, CLS, LCP, image weight. Raw JSON per capture in `tools/content/data/`; probe output in the run logs.
- **Code** read from `origin/main` for causes. **Prior work** read first: rulings (`debug-1005/rulings.md` + the memory files listed in the brief), the 29 Sep audit (`design-audit-0929/items.json`, P040–P123 for these pages), the 5 Oct debug fixes (`debug-1005/all-fixes.json`), and the sibling groups' notes (`shell-home.md`, `design-system.md`). Items from 29 Sep that are still live are marked **carried** with fresh numbers; fixed ones are not raised.

### Shots — `../shots/content/`

| File | What it shows |
|---|---|
| `<page>-390-light.jpg`, `<page>-1440-light.jpg` (12 pages each) | Every page, phone and desktop, light |
| `about-390-dark.jpg`, `about-1440-dark.jpg`, `methodology-390-dark.jpg`, `methodology-1440-dark.jpg` | The two most important pages in dark |
| `about-1024-light.jpg`, `faq-1024-light.jpg`, `analysis-1024-light.jpg`, `methodology-1024-light.jpg`, `share-1024-light.jpg`, `press-1024-light.jpg` | The 901–1239 band, where the hamburger takes over and two-column layouts collapse |
| `share-390-light-fold.jpg` | Phone /share, first screen as a reader sees it (viewport frame) |
| `methodology-390-light-registers.jpg` | Phone /methodology register list (viewport) |
| `methodology-390-light-thresholds.jpg` | Phone /methodology threshold history (viewport, scrollY 13150) |
| `methodology-390-light-deep.jpg` | Phone /methodology at scrollY 7000: no back bar, no menu |
| `methodology-1440-light-deep.jpg` | Desktop /methodology at scrollY 6836: no section cue, back-to-top only |
| `contact-1440-light-focus.jpg` | Keyboard focus on the Email field |

Supporting files (not in the budget): `tools/content/og/*.png` (the 12 link-preview cards + two stat cards), `tools/content/og/og-sheet.jpg` (contact sheet), `tools/content/crops/og-ledes.png` (the word-gap evidence), `tools/content/crops/*.png` (the crops quoted below).

### Headline numbers

| Measure | Result |
|---|---|
| Page length (desktop / phone) | methodology 14,379 / 18,674 · timeline 6,429 / 8,424 · api 5,720 / 4,210 · analysis 5,503 / 4,399 · faq 4,999 / 6,312 · embed 3,311 / 4,631 · press 3,208 / 4,265 · about 2,639 / 2,108 · curator 2,621 / 3,255 · naija66 2,115 / 2,245 · share 1,773 / 1,219 · contact 1,509 / 1,385 |
| Layout shift | CLS 0.000 on all 34 page loads |
| LCP (warm, unthrottled) | 76–272 ms on 11 pages; **/share phone 916 ms** (the 831 KB PNG preview) |
| Image weight | 0 KB on 11 pages; **/share 1,576 KB** (two stat-card PNGs) |
| Text contrast | 0 real AA failures in either theme. Every flag was a gradient-clipped split word ("GIANT", "GLOBAL ICON"), i.e. the method, not the page |
| Focus | 2px solid `#945e00` outline + gold border on form fields (`contact-1440-light-focus.jpg`), `:focus-visible` only |
| Phone targets | Only two non-inline controls under 44px: the 30 register links on /methodology (321×26) and /api's "COPY" (60×40). Everything else is inline prose links |
| Content frames at 1440 (h1 left edge) | x=80 (about, faq, contact, timeline, naija66) · x=170 (methodology, api, embed, share, analysis) · x=310 (press, curator) |
| Prose measure over 62ch | faq answers 72ch · press/curator `.p` 72ch · press `.small` 88ch · about timeline 82ch · methodology claims table 80ch |

---

## Strengths: keep these

1. **The trust layer is real and it is on the page, not in a footer.** /methodology's "Claims checked and not published" (rejected awards, inflated counts, and "Checks that changed our own figures": Ginger, IRAWMA 2023, the Headies, AEA USA) is the strongest credibility device on the site, better than most newsrooms' corrections pages. /press, /curator, /analysis and /methodology all carry the same green-dot "Data last reviewed 7 October 2026" row on both layouts. Shots: `methodology-1440-light.jpg`, `methodology-1440-dark.jpg`, `press-1440-light.jpg`.
2. **Accessibility and stability basics hold in both themes.** 0 real AA contrast failures across 34 captures (dark checked on /about and /methodology at both widths); CLS 0.000 everywhere; a visible keyboard ring on form fields; phone prose at 16px with a 33ch measure; FAQ phone chips 44px. Shots: `about-390-dark.jpg`, `methodology-390-dark.jpg`, `contact-1440-light-focus.jpg`.
3. **The phone screens are designed for the phone, not squeezed.** /about puts the real-name answer (the Fast facts grid) above the bio, because that is the site's top query (`about-390-light.jpg`, "REAL NAME Damini Ebunoluwa Ogulu" at y≈255). /faq labels each question with its group. /press keeps the six figures as 2-up tiles. /embed shows each live box at real size with its snippet wrapped, not scrolled. /share defaults to story ratio on a phone.
4. **/press is a working press kit.** Six derived headline figures as linked tiles (career streams in gold, as the one live figure), credit lines in plain text and HTML with Copy, three CSV downloads with row counts and a one-line description each (P119 is fixed), and a dated dataset citation. Shot: `press-1440-light.jpg`.
5. **/analysis has a point of view.** Four argued findings, each with a three-up figure row and (desktop) a bar chart where gold marks only the highlighted bar, and a "How to check this" box that sends every claim back to /api and /methodology. Shot: `analysis-1440-light.jpg`.
6. **/timeline's structure is right.** Six eras with real-anchor jump chips (no JS), each entry linking to "the page that holds the working", and a closing "Where it stands today" strip derived from data. Shot: `timeline-1440-light.jpg`.
7. **One link-preview family.** Every content page has its own card with page-specific copy, the lockup top-left, permanently dark and gold (`tools/content/og/og-sheet.jpg`).

---

## Findings

Severity: high / medium / low. Kind: build-fix (a developer can do it without a design), design (needs Claude Design), content (copy), reconsider-ruling.

### C-01. Phone /methodology loses its back bar and menu for the last 73% of the page — build-fix, high

- **What**: on a phone the sticky back bar (back, "METHODOLOGY", menu) is the page's only chrome; this page has no tab bar (the fixed "Report a correction" bar replaces it). The bar's containing block is `mobileMethodology-module__screen`, which ends at **5,090px**. The five sections added for phones on 5 Oct (#431, core-11: "Who can read this site", "Claims checked and not published", "Who awards a plaque", "How /compare counts", "How dates are filed") render **outside** that wrapper.
- **Measured**: bar top at scrollY 1000 = 0, 4000 = 0, **5200 = −179, 7000 = −1,979, 12000 = −6,979, 17000 = −11,979**. From 5,090px to 18,674px (13,584px, 73%) there is no back button and no menu; the only way out is scrolling back up.
- **Same cause, second symptom**: those five sections keep the desktop module's type. Their body text is **13.5px** (`P.hYQhjq 13.5px` at 5,174, 5,409, 5,675, 8,993, 11,682) while the phone's own sections above are 16px; the phone h2s run 20px, 18px, then 22px on one page (and the h3 "Primary sources, not summaries" is 20px under a 20px h2).
- **Shots**: `methodology-390-light-deep.jpg` (scrollY 7000: only the Report bar), `methodology-390-light-registers.jpg` (the 13.5px intro under the 16px claims rows), `methodology-390-light.jpg`.
- **Fix**: render the five sections inside MobileMethodology's screen (or move the sticky bar onto a wrapper that spans the page), and give them the phone's own type: `--type-body` 16px and one h2 size. Add a check that the back bar is still stuck at y=0 at 90% of the page.

### C-02. Phone register links are 26px tall in 82px rows, against the page's own 44px promise — build-fix, medium

- **What**: in "Who awards a plaque" each body is a row with a flag, the name (gold link) and the country underneath; the row pitch is 82px, but only the name line is the link.
- **Measured**: 30 links at **321×26**; `elementFromPoint` 6px above and 6px below the box returns something else for AFP, BPI, RIAA and SNEP (centre = link). No `::before`/`::after` hit extension. 31 of 37 controls on phone /methodology are under 44px. Desktop: 192×26.
- **Why it matters**: the accessibility statement on this same page says "controls meet the 44px touch target — some of them through an extended hit area". Here they don't.
- **Shot**: `methodology-390-light-registers.jpg`.
- **Fix**: make the whole row (name + country) the link, at least 44px tall, and add the site's ↗ marker since every one goes off-site.

### C-03. Link-preview cards print uneven word gaps — build-fix, medium

- **What**: the generic card (`app/lib/og-image.tsx`, `fonts: ogFonts` at lines 46 and 209) still draws kerned Geist. The stat cards (`statCardFonts`) and On This Day images (`otdFonts`) were fixed by unkerning Geist (`withoutKerning`, V-core-07, 6 Oct); this template was not.
- **Measured** (1200×630 cards, `tools/content/crops/og-ledes.png`): /faq "certifications,␣␣tours", /methodology "unverified␣␣claims", /press "Verified␣␣figures", /curator "verified␣␣and maintained", /embed "certifications,␣␣Dai Dai", /api "certifications␣␣· no key". 33 routes use `ogImage()`, 35 including `ogLadder()`.
- **Fix**: hand `ogImage()` and `ogLadder()` the unkerned list (the same `ogFonts.map(... withoutKerning ...)` line), bump `OG_ART` (an art change), re-check every card. Same root as the shell group's /updates card note (SH-21).

### C-04. /share on a phone hides the figure under the action bar — design, medium (carried P095)

- **Measured** (`share-390-light-fold.jpg`): preview `<img>` 354×629 at y=307–936; fixed action bar y=714–844 (130px). On the story card the figure ("251") sits at 65–76% of the card's height, i.e. y≈716–785: **entirely under the bar**. The Story/Square switch is at y=952, below the 844px fold.
- **Why it matters**: the first screen of the stat-card maker shows a portrait and a logo, not a stat. Unchanged since 29 Sep.
- **Fix (designer)**: size the preview to the room between the chip rail (bottom ≈291) and the bar (top 714), about 420px tall (≈236×420 story preview), and put Story/Square above it. Downloads stay 1080×1920.

### C-05. /share preview loads the full-size PNG — build-fix, medium

- **Measured**: phone preview shows a **1080×1920 PNG, 831 KB** in a 354×629 box; desktop shows a **1080×1080 PNG, 745 KB** in 460×460. Page image weight 1,576 KB vs 0 KB on the other 11 pages; phone LCP 916 ms unthrottled (others 76–272 ms). Each chip tap fetches another ~750–850 KB (`cache-control: max-age=600`).
- **Fix**: a preview size from the same route (`?w=720` as JPEG/WebP, roughly 60–90 KB) for the `<img>`; keep the full PNG for Download / Save or share.

### C-06. /share desktop: the action sits below the fold beside a second gold fill — design, medium (carried P096)

- **Measured** (`share-1440-light.jpg`): "↓ Download PNG" top at **y=1033** (fold 900). "By the numbers ↗" is a second filled `#945e00` button at y=1203. With the gold "Square" segment that is three gold fills in one view.
- **Fix (designer)**: move Download / Post on X / WhatsApp into the right column under "Behind this number" (that column starts at y≈450), or next to Square/Story; make "By the numbers" a secondary button.

### C-07. Three different content frames across one family of pages — design, medium

- **Measured** at 1440 (h1 left edge / width): **x=80, 1280 wide** on /about, /faq, /contact, /timeline, /naija66; **x=170, 1100** on /methodology, /api, /embed, /share, /analysis; **x=310, ~760** on /press, /curator. The breadcrumb always starts at x=80 and Keep exploring at x=104, so on /press the eye goes 80 → 310 → 104 down one page. At 1024, Keep exploring cards sit at a 24px gutter while content uses 40px (`about-1024-light.jpg`, `share-1024-light.jpg`).
- **Shots**: `about-1440-light.jpg`, `methodology-1440-light.jpg`, `press-1440-light.jpg`.
- **Fix (designer)**: define two frames: a reading frame (prose pages: one container, text at 62ch, left-aligned with the breadcrumb) and a tool frame (/api, /embed, /share, /analysis), and align breadcrumb, hero and Keep exploring to whichever the page uses.

### C-08. The 62ch measure stops at four prose surfaces — build-fix, medium

The reading-scale work (PR #186) named /press, /curator and others as an outstanding follow-up; it is still outstanding.
- **Measured (desktop)**:
  - /faq answers **72ch** (`.a { max-width: 760px }`, faq.module.css:126).
  - /press and /curator `.p` **72ch** at **15.5px** (`max-width: 72ch`, not `--type-body`/`--measure`).
  - /press `.small` **88ch at 13px**, no cap: the 7-line certified-units note under "How to cite".
  - /about timeline text **82ch at 14.5px** (`.tText { max-width: 82ch }`).
  - /methodology claims table answers **80ch** (dd, 844px, no max-width).
- **Shots**: `faq-1440-light.jpg`, `press-1440-light.jpg` (orig y≈2047 for `.small`), `curator-1440-light.jpg`, `about-1440-light.jpg`.
- **Fix**: `max-width: var(--measure)` and the `--type-body` / `--type-small` tokens on all five.

### C-09. Long reference pages have no "you are here" — design, medium

- **Measured**: /methodology is 14,379px on desktop (11 h2 sections, no section index anywhere, a back-to-top button only; `methodology-1440-light-deep.jpg` at scrollY 6836 shows no cue of where you are) and 18,674px on a phone (22 screens, no index, and see C-01). /timeline 6,429 / 8,424 (era chips at the top only). /faq 4,999 / 6,312 (jump chips at the top only; on the phone the chip rail scrolls away).
- **Context**: this is "Job 5, long-page wayfinding", which the 30 Sep tour-map handoff left for later at Paul's request. Dense pages are deliberate and nothing here should collapse.
- **Fix (designer)**: an "On this page" index that stays reachable, with no collapsing. Desktop: a sticky section list in /methodology's 170px left gutter and a sticky era indicator on /timeline. Phone: a section chip rail under the back bar that sticks with it (once C-01 is fixed), plus back-to-top.

### C-10. /about, the top search landing, doesn't answer first and carries no provenance — content, medium

- **Measured**: desktop h1 "About the Giant" and the lede "The story of Damini Ogulu — Afrobeats' African Giant." never say "Burna Boy" or "real name"; the answer first appears in body text at y=424. There is no "Data last reviewed" row and no source on the page; sources appear only in the 12px desktop footer ("Biography facts sourced from Wikipedia"), and phones have no footer. Every other info page carries the reviewed row. /faq's provenance is month-level ("as of October 2026") in a 12.5px note at the very bottom.
- **Shots**: `about-1440-light.jpg`, `about-390-light.jpg`, `faq-1440-light.jpg` (orig bottom).
- **Fix**: an answer-first lede ("Burna Boy's real name is Damini Ebunoluwa Ogulu …"). Under Fast facts, the same reviewed row the other pages use, with sources ("Sources: Wikipedia · Grammy.com · Billboard · checked 7 Oct 2026"; the sources are already listed in the code comment at about/page.tsx:17). On /faq, the day-precise row in the hero.

### C-11. /about reads as a text page about a performer — design, medium (absorbs carried P112)

- **What**: no image of the artist anywhere on the biography page; the site already uses a Burna portrait on the stat cards. On desktop the 9-row timeline fills the left 788px and leaves the right ~45% empty for ~1,270px of scroll; at 1024 the Fast facts land below all four bio paragraphs (about y≈900), although the phone deliberately puts them first.
- **Shots**: `about-1440-light.jpg`, `about-1024-light.jpg`, `about-1440-dark.jpg`.
- **Fix (designer)**: a portrait in the hero, drawn separately for desktop and phone, on a `photoTile` per the theming rule (so it stays dark-graded in light mode). Use the empty right column beside the timeline (e.g. a Studio albums list that links to each album, sticky while scrolling). At 1024, Fast facts before the bio, three across.

### C-12. /timeline kinds borrow certification-tier colours and still say "Live" — design, medium (carried P083, extended)

- **Measured**: kind chips are coloured by tier tokens (timeline.module.css:218–231): Album = gold, Live = gold, First = diamond teal `#0b6e7e`, Award = platinum ink, Charts = silver. 7 entries are still tagged **LIVE**. Page gold census: 57 gold text elements + 7 teal.
- **Why it matters**: on a site where gold / platinum / diamond mean plaque tiers, a teal "FIRST" reads as a Diamond and a gold "ALBUM" as a Gold plaque. On This Day (Paul-approved, 26 Sep) already settled kinds as shape + word in ink, with "Show" replacing "Live".
- **Shots**: `timeline-1440-light.jpg`, `timeline-390-light.jpg`.
- **Fix**: reuse On This Day's kinds (■ Release ▲ Charts ◆ Streaming ○ Certification ★ Awards ● Show), in ink, from the same list in code so the two pages can't drift.

### C-13. /timeline promises "every milestone dated"; half carry only a year — content, medium

- **Measured** (`app/data/timeline.ts`): 14 of 29 entries show only a year (2010, 2012, 2013, 2015, 2017, 2018, 2019 ×2, 2021, 2024, 2025 ×2, 2026) or a range ("2023–25"). Only 2 carry a day ("19 Jul 2026", "8 Aug 2026"). The lede says "every milestone dated", and the OG card says "dated and sourced". On This Day holds day-precise dates for many of the same events (219 milestones on 160 dates).
- **Fix**: take the day from the On This Day data wherever it exists. Otherwise reword the lede: "dated as precisely as the sources allow".

### C-14. Phone info pages use three heading treatments — design, low

- **Measured**: /api and /embed phone section titles are **gold** Anton 20px (`mobileApi.module.css:127`, `mobileEmbed.module.css:133`, `color: var(--gold)`). /press and /curator are **ink** Anton 24px. /methodology is ink at 18/20/22px. The desktop twins are all ink.
- **Why it matters**: resting headings spend the accent that elsewhere means live or action. /api's phone first screen has 5 gold text elements before any action.
- **Shots**: `api-390-light.jpg`, `embed-390-light.jpg`, `press-390-light.jpg`.
- **Fix**: one phone h2 for the info family (ink, one size).

### C-15. /analysis leftovers — build-fix, low (carried P108, P110)

- **Measured**: the "February 2026 correction" button sits **0px** under its paragraph (orig `analysis-1440-light.jpg` y≈4,536; `tools/content/crops/analysis-1440-light-4300-0.png`). The index puts 01–04 in 274px cells and "05 A claim worth correcting" alone across 1,098px with its content centred; section 05 still has no number and kicker.
- **Fix**: margin-top 24–32px on the button; five equal cells, or left-align 05 with a "Correction" kicker; give section 05 the same number-and-kicker heading as the others.

### C-16. /api: the sample and its notes — build-fix, low (carried P122, P123)

- **Measured**: the sample `<pre>` is **1,337px tall**, scrollWidth **2,358** inside clientWidth **1,098**; lines are cut at the right edge ("…except where a `note` on", "…No.4 c") with no sign that the box scrolls. The field notes are one 12.5px paragraph starting in lower case ("updated is the date…", `builtAt`, `credit` not set as code). On the phone they run into the 20-line "Every response uses the same envelope…" paragraph.
- **Shots**: `api-1440-light.jpg` (orig y 2,611–3,948; `tools/content/crops/api-1440-light-2400-0.png`), `api-390-light.jpg` (orig y≈2,500).
- **Fix**: cap the box at ~480px with a fade and an "Open the full response ↗" link, and wrap long lines. Turn the notes into a definition list: each field as code, one line each, at body size, on both layouts.

### C-17. Four credit lines, three Copy buttons — content, low (carried P120)

- **Measured**:
  - /press: "Data: Burna Boy Stats (burnaboystats.com)".
  - The dataset citation: "Source: Burna Boy Stats (burnaboystats.com), data as of 7 October 2026. CC BY 4.0."
  - /api licence box: "Data from Burna Boy Stats — https://burnaboystats.com".
  - The JSON `attribution`: "Data from Burna Boy Stats (https://burnaboystats.com)".
  - Copy buttons: 104×40 on /press, 64×38 and 60×36 on /api, 106×38 "COPY CODE" on /embed.
- **Fix**: one credit line, plus a dated variant for files, and one Copy button component everywhere.

### C-18. The site speaks as "we" on two pages and as one person on the rest — content, low

- **Measured**:
  - /contact: "Message us", "Spotted something we should fix", "we love hearing from fellow fans", "we can't pass messages".
  - /press: "all we ask is a credit", "tell us and we'll share it".
  - /curator: first person 30 times ("I built and maintain it alone").
  - /methodology: "reaches me directly". Its Independence block says "a fan-made, **portfolio** project", where /curator says "fan-made project".
- **Why it matters**: a journalist checking independence reads two different stories about who runs the site.
- **Fix**: first person singular everywhere; drop "portfolio".

### C-19. /contact: an error you can miss, a label said twice — build-fix, low (carried P115, P116)

- **Measured**: the send error renders with an inline `color: var(--text-muted); fontSize: 0.85rem` (ContactForm.tsx:126), the same grey as the field labels; `--error-ink` exists. The hero kicker "— MESSAGE US" repeats as the form's kicker 250px lower (`contact-1440-light.jpg`).
- **Fix**: "Not sent — …" in `--error-ink` with a left rule, right above the button; change or drop the second kicker.

### C-20. Small copy and label slips — build-fix, low

- /share phone back-bar badge is a bare gold **"8"** (MobileStatCards.tsx:100). Its siblings read "22 questions", "4 findings", "6 figures". Make it "8 cards" (`share-390-light-fold.jpg`).
- /analysis phone figure labels are 11px mono in 97px cells and wrap to 3 lines, splitting "No. / 1s". Use a non-breaking space in "No. 1s".
- /methodology phone kicker "The standard every figure meets" vs desktop "…is held to": the same page's copy has drifted between layouts.

### C-21. /naija66 says "the hunt has ended" three times — content, low

- **Measured**: the eyebrow box, the 11px uppercase mono drops line, and the board banner all say it, within the first 560px on a phone (`naija66-390-light.jpg`). The drops line is a sentence set in mono, which is meant for labels only (reading-scale rule).
- **Fix**: keep the box; set the drops line in Geist `--type-small`; drop the banner's repeat.

### C-22. The 1024 band strands single items — build-fix, low (carries P114)

- **Measured**:
  - /faq: the jump row wraps "The car collection" alone onto a second line, with "22 QUESTIONS" pinned far right (`faq-1024-light.jpg`).
  - /share: the chips wrap "Followers" alone (`share-1024-light.jpg`).
  - /methodology: the 4-figure strip goes 3 + 1, with "46" stretched across the full width (`methodology-1024-light.jpg`), although four 236px cells fit in the 944px column. The stretch rule is right for unknown counts but wrong for a fixed four.
- **Fix**:
  - /faq: hide the "Jump to" label and the total below 1240px.
  - /methodology: `repeat(4, 1fr)` holds to 900px.

### C-23. /analysis on a phone argues without pictures — design, low (carried P109)

- **Measured**: the four desktop bar charts are desktop-only by design ("the design draws figures on this screen, not bars"). The phone page is 4,399px of text with 12 gold figures; gold text census 38 on phone vs 17 on desktop.
- **Shot**: `analysis-390-light.jpg`.
- **Fix (designer)**: a small phone chart per finding from the same data (top 5 as thin full-width bars, labels ≥11px, gold only on the highlighted bar), and the figures at rest in ink as on desktop.

### C-24. /press describes its two most shareable assets in prose only — design, low (carried P121)

- **Measured**: "Ready-made stat cards" and "Live stat boxes for your site" are prose paragraphs with a mid-sentence link (`press-1440-light.jpg`, orig y 2,272–2,520).
- **Fix (designer)**: show one real stat card (an existing `/stat-card` URL) with "Open stat cards →", and one live box (an existing `/embed/<widget>` iframe) with "Get an embed →".

### C-25. Ask the owner: let /share's link preview be a stat card — reconsider-ruling, low

- **Rulings touched**: the OG card redesign was rejected (cards stay as they were, plus the lockup), and the faded portrait is scoped to On This Day previews only (26 Sep).
- **Evidence**:
  - /share's preview is the text-only "Stat Cards — Pick a Burna Boy record and download a card built for sharing" (`tools/content/og/share.png`).
  - The page's entire product is a portrait card (`tools/content/og/statcard-sq.png`), which already renders at 1080×1080 from `/stat-card`.
  - When fan pages share /share, the preview advertises a text page rather than the card they are about to make.
- **Ask**: use the default stat card (square, cropped to 1200×630) as /share's og:image only. No template change for any other page.

---

## The 29 Sep audit items for these pages: status on 8 Oct

| Item | Status |
|---|---|
| P040 "Four rules" over five | Fixed (core-03) |
| P041 phone #principles/#sources anchors | Fixed (core-11 / AnchorTwins) |
| P042 phone threshold table | Fixed (V-core-05) |
| P043 phone methodology missing sections | Fixed (core-11) — but introduced C-01 |
| P044 threshold header drift | Not re-checked in depth; looks resolved at 1440 |
| P083 timeline "Live" | **Open** → C-12 |
| P084 timeline back button | Fixed (V-global-14) |
| P094 stat-card word gaps | Fixed (V-core-07) — the same bug is still in link previews → C-03 |
| P095 /share phone preview | **Open** → C-04 |
| P096 /share desktop download | **Open** → C-06 |
| P097 /embed Copy code | Half: "Copied ✓" exists; button style unchanged (C-17) |
| P098 /embed hero badges look like buttons | **Open** (low; still three bordered pills, no action) |
| P108 /analysis button gap | **Open** → C-15 (gap measured 0px) |
| P109 /analysis phone charts | **Open** → C-23 |
| P110 /analysis index 05 | **Open** → C-15 |
| P111 /analysis/spotify-unmerge | Out of scope for this group |
| P112 /about desktop layout | **Open** → C-11 |
| P113 /faq answers link to their data | **Open** (faqs.ts still has q/a only) |
| P114 /faq 1024 jump row | **Open** → C-22 |
| P115 /contact error colour | **Open** → C-19 |
| P116 /contact repeated kicker | **Open** → C-19 |
| P117 /curator strip + How I work rows | Fixed |
| P118 /curator Reach me gap | Paragraph gap fixed; the section gap is still uneven (≈79px above "Reach me" vs ≈50px elsewhere, low) |
| P119 /press download list | Fixed |
| P120 credit lines | **Open** → C-17 |
| P121 /press visuals | **Open** → C-24 |
| P122 /api sample box | **Open** → C-16 |
| P123 /api field notes | **Open** → C-16 |

## Page-by-page 3-second test

| Page | Says what it is in 3s? | Note |
|---|---|---|
| /about | Partly | Fine for a fan; the search visitor's answer is in body text (C-10); no image (C-11) |
| /faq | Yes | "Burna Boy FAQ" + answer-first rows |
| /methodology | Yes | Then 14–19k px with no index (C-09) and the phone chrome bug (C-01) |
| /press | Yes | Strongest page in the group |
| /curator | Yes | Now broken up well (P117 landed) |
| /api | Yes | Sample box overflows (C-16) |
| /embed | Yes | Real boxes, real snippets |
| /share | Desktop yes; phone no | Phone first screen shows no stat (C-04); 1.6 MB of PNG (C-05) |
| /contact | Yes | Voice (C-18) |
| /analysis | Yes | Phone has no charts (C-23) |
| /timeline | Yes | Kinds and dates (C-12, C-13) |
| /naija66 | Yes | An archive page; repetition (C-21) |

## For the Claude Design handoff (design items only)

1. **Long-page wayfinding (Job 5)** for /methodology, /timeline, /faq: a reachable "On this page" index; desktop sticky in the gutter; phone a sticky section rail under the back bar; no collapsing (C-09).
2. **/share screen 24 + desktop maker**: a phone preview sized to fit above the action bar with Story/Square above it; desktop actions in the right column; one gold fill (C-04, C-06).
3. **One content frame system** for info pages (reading vs tool frame), with breadcrumb, hero and Keep exploring aligned (C-07).
4. **/about**: portrait hero (separate desktop and phone drawings, photoTile), use of the right column, 1024 order (C-11).
5. **/timeline kinds** in On This Day's shape + word ink system (C-12).
6. **One phone h2** for the info family (C-14).
7. **/analysis phone charts** (C-23) and **/press visual previews** (C-24).

Developer-only items (no design needed): C-01, C-02, C-03, C-05, C-08, C-15, C-16, C-19, C-20, C-22. Content: C-10, C-13, C-17, C-18, C-21. Ask the owner: C-25.
