# Job 0 · J0-4: every arrow change, for Paul

**What this is.** J0-4 ("arrows follow Option A") as amended by **fix 7** of `fixes-2026-10-08.md`, built in one commit on `design/job0-system-rules` so it can be reverted alone. Default decision 10 asks for every arrow change in the PR: this file is that list. The build did not wait for your check; any row can be turned back on its own.

**Counts.**

| | |
|---|---|
| Line edits | **66**, in 44 TSX files, for **65** labels (the /compare picker fold's two halves are one control) |
| CSS edits | **5**, in 4 CSS files (two `.caretShut` rules deleted, the StatBox chevron added, one unused car rule deleted, and — in the review's fix round — the desktop tour caret sized up so ▾ reads at the old ▼'s size), plus one CSS comment that quoted a changed glyph (B-3) |
| Labels in the census (Appendix A) | **318**: 269 controls, 48 glyph strings outside a control, 1 CSS `content:`. Taken on this branch after J0-9, so the provenance component's rows are in it and OpenDataLine / ToursDataLine are gone |
| Toggles and icons whose mark is not a text arrow (Appendix B) | 13 rows, **all unchanged** |
| The arrowGlyphs guard, on the tree before this commit | **fails** 10 of its 14 rule checks |
| The same guard after this commit | **passes**, with its exemptions kept by name: the Dai Dai skip's CSS ↓ (fix 109), "See the full record →" (fix 132), and the save card's own definition (its two call sites are checked) |

The build prompt's "~230 arrow changes" (Q13) matches nothing in the code: the code has 318 labels and 65 change.

## 1. The rule as built

| Element | Glyph | Source |
|---|---|---|
| A link or button to another page or site, including a source page ("Proof ↗") | **↗** | response §2; fix 7 |
| A whole card or row that is one link | **→**, at its right edge or foot | response §2; System Rules panel 2 |
| A download (a file or a saved image) | **↓** | J0-4: "downloads gain ↓" |
| A toggle that opens or closes in place | **▾** shut, **▴** open | fix 7 (MobileCerts' two folds, DaiDaiConquest, AwardExplorer, Method) |
| "Show all", "Show fewer", "+ N more", in-page jumps, on-page actions | **no glyph** | fix 7; J0-4 ("Show all ↓" → "Show all") |
| Sort marks; chrome (masthead, tab bar, back bar, sheet foot) | outside the rule | fix 7 |
| `+` / `−` state marks, ▶ play, SVG icons | not arrow glyphs | Q19, Appendix B |
| ← back links and "Next: X →" pagers | outside Option A, unchanged; ← must lead | Q3 |

The element's **shape** decides → or ↗, never where it goes: a list row or a card that carries a title and more is →; a pill or a text link is ↗. J0-4 only limits where a glyph may appear. It adds a glyph only where a change list or fix names one (downloads gain ↓), so links that carry no glyph today keep none (Q12).

## 2. The change list (66 line edits, both layouts)

"File:line" is the line before → after this commit on this branch; one number means it did not move.

**G1 · named in J0-4**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 1 | / | phone | `components/MobileHome.tsx:231` | Explore the music → | **Explore the music ↗** | ↗ a pill to another page (named in J0-4) |
| 2 | /api | desktop | `api/page.tsx:246 → 248` | GET /api/v1/{file}.csv … {n} rows (no glyph) | **GET /api/v1/{file}.csv … {n} rows ↓** | ↓ a download (J0-4: "downloads gain ↓") |
| 3 | /api | phone | `components/MobileApi.tsx:116 → 118` | GET /api/v1/{file}.csv … {n} rows (no glyph) | **GET /api/v1/{file}.csv … {n} rows ↓** | ↓ a download (J0-4: "downloads gain ↓") |
| 4 | /compare (picker folds) | desktop + phone (one component) | `compare/page.tsx:224` | + {n} more {artists} ↓ | **+ {n} more {artists}** | no glyph: a "+ N more" fold (fix 7) |
| 5 | /compare (picker folds) | desktop + phone (one component) | `compare/page.tsx:225` | Show fewer {artists} ↑ | **Show fewer {artists}** | no glyph: a list fold (fix 7) |
| 6 | /compare/{pair} | desktop + phone (one component) | `compare/page.tsx:1255` | Show fewer ↑ | **Show fewer** | no glyph: a list fold (named in J0-4) |
| 7 | /compare/{pair} | desktop + phone (one component) | `compare/page.tsx:1274` | Show all ↓ | **Show all** | no glyph: a list fold (named in J0-4: "Show all ↓" → "Show all") |

**G2 · → on a pill or text link becomes ↗**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 8 | /about | desktop | `about/page.tsx:179` | The full career timeline — every milestone, dated → | **The full career timeline — every milestone, dated ↗** | ↗ a text link to another page |
| 9 | /about | phone | `components/MobileAbout.tsx:106` | The full career timeline — every milestone, dated → | **The full career timeline — every milestone, dated ↗** | ↗ a text link to another page |
| 10 | /analysis | desktop | `analysis/page.tsx:153` | {finding link} → | **{finding link} ↗** | ↗ a pill to another page |
| 11 | /analysis | phone | `components/MobileAnalysis.tsx:91` | {finding link} → | **{finding link} ↗** | ↗ a pill to another page |
| 12 | /certifications | desktop | `certifications/page.tsx:372` | See certifications by country → | **See certifications by country ↗** | ↗ a button to another page |
| 13 | /methodology | phone | `components/MobileMethodology.tsx:113` | {register link} → | **{register link} ↗** | ↗ a link to another site |
| 14 | /methodology | desktop | `methodology/page.tsx:522` | Latest updates → | **Latest updates ↗** | ↗ a pill to another page |
| 15 | /methodology | desktop | `methodology/page.tsx:523` | RSS feed → | **RSS feed ↗** | ↗ a pill to another page |
| 16 | /methodology | desktop | `methodology/page.tsx:537` | Contact → | **Contact ↗** | ↗ a pill to another page |
| 17 | /methodology | desktop | `methodology/page.tsx:538` | FAQ → | **FAQ ↗** | ↗ a pill to another page |
| 18 | /methodology | desktop | `methodology/page.tsx:571` | TurnTable's register, Feb 2026 capture → | **TurnTable's register, Feb 2026 capture ↗** | ↗ a pill to another site |
| 19 | /methodology | desktop | `methodology/page.tsx:574` | The live page, for comparison → | **The live page, for comparison ↗** | ↗ a pill to another site |
| 20 | /methodology | desktop | `methodology/page.tsx:588` | About this project → | **About this project ↗** | ↗ a pill to another page |
| 21 | /music (tracklist dialog) | desktop + phone (one dialog) | `components/TracklistDialog.tsx:143` | Full album page → | **Full album page ↗** | ↗ a pill to another page |
| 22 | /records/awards | desktop | `records/awards/page.tsx:152` | See wins by award body → | **See wins by award body ↗** | ↗ a button to another page |
| 23 | /records/tours/revenue | phone | `components/MobileRevenue.tsx:240` | Artists by country → | **Artists by country ↗** | ↗ a button to another page |
| 24 | /records/tours/revenue | desktop | `records/tours/revenue/page.tsx:226` | Highest-grossing artists by country → | **Highest-grossing artists by country ↗** | ↗ a button to another page |
| 25 | every page (2 July banner) | desktop + phone (one component) | `components/BirthdayCelebration.tsx:131` | his story → | **his story ↗** | ↗ a text link to another page |

**G3 · ↗ on a whole row or card becomes → (Q18: approved designs, one block so it can be vetoed at once)**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 26 | / | desktop + phone (one component) | `components/GlobeTeaser.tsx:76` | Open the map ↗ | **Open the map →** | → the whole card is one link · Q18 |
| 27 | / | phone | `components/MobileOnThisDayCard.tsx:127` | {All n on 8 October} ↗ | **{All n on 8 October} →** | → a 44px whole row · Q18 |
| 28 | / | phone | `components/MobileOnThisDayCard.tsx:131` | The calendar ↗ | **The calendar →** | → a 44px whole row · Q18 |
| 29 | / | desktop | `components/OnThisDayBand.tsx:129` | Next {headline} {date} ↗ | **Next {headline} {date} →** | → a whole row (fix 105 later makes it three such rows) · Q18 |
| 30 | /music | phone | `components/MobileMusic.tsx:237` | {song} {tag} ↗ | **{song} {tag} →** | → a whole row · Q18 |
| 31 | /music | desktop | `music/page.tsx:252` | {song card} ↗ | **{song card} →** | → a whole card · Q18 |
| 32 | /on-this-day | phone | `components/MobileOnThisDayIndex.tsx:79` | Open {day} ↗ | **Open {day} →** | → a 44px whole row · Q18 |
| 33 | /on-this-day | phone | `components/OnThisDayPhoneMonth.tsx:138` | Open {day} ↗ | **Open {day} →** | → a 44px whole row · Q18 |
| 34 | /on-this-day/{day} | phone | `components/MobileOnThisDayDay.tsx:67` | {event row} ↗ | **{event row} →** | → a whole row · Q18 |
| 35 | /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:129` | {event row} ↗ | **{event row} →** | → a whole row · Q18 |
| 36 | /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:153` | {proof page} ↗ (tile foot) | **{proof page} → (tile foot)** | → a whole card · Q4, Q18 |
| 37 | /updates | desktop | `components/UpdatesFeed.tsx:119` | {update row} ↗ | **{update row} →** | → a whole row · Q18 |

**G4 · glyphs dropped from in-page jumps, list folds and on-page actions**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 38 | /certifications, /afrobeats/{artist} | phone | `components/MobileCerts.tsx:776` | All {n} releases +{n} / Show the top 10 ↑ | **All {n} releases +{n} / Show the top 10** | no glyph: a list fold (fix 7) |
| 39 | /compare (picker) | desktop + phone (one component) | `compare/page.tsx:413` | Compare {songs} instead ↗ | **Compare {songs} instead** | no glyph: a same-page state link (mode switch) · Q5 |
| 40 | /compare (picker) | desktop + phone (one component) | `compare/page.tsx:417` | change artist ↺ | **change artist** | no glyph: a same-page action (↺ is not an Option A glyph) |
| 41 | /compare (picker) | desktop + phone (one component) | `compare/page.tsx:447` | Change artist ↺ | **Change artist** | no glyph: a same-page action |
| 42 | /music | desktop | `components/Discography.tsx:40` | {n} tracks ↗ (EP card, a button) | **{n} tracks** | no glyph: opens the tracklist dialog in place (Job 4 fixes 83/95 restructure the card) · Q17 |
| 43 | /music | desktop | `components/Discography.tsx:65` | {n} tracks ↗ (album card's shared fragment) | **{n} tracks** | no glyph: the album card opens the dialog on a plain click (Job 4 fixes 83/95) · Q17 |
| 44 | /music | phone | `components/MobileMusic.tsx:182` | See the tracklist ↗ | **See the tracklist** | no glyph: a button that opens the dialog in place |
| 45 | /music | phone | `components/MobileMusic.tsx:248` | All {n} song stories +{n} / Show fewer ↑ | **All {n} song stories +{n} / Show fewer** | no glyph: a list fold (fix 7) |
| 46 | /on-this-day | phone | `components/OnThisDayPhoneMonth.tsx:70` | Months ↑ | **Months** | no glyph: an in-page jump (#months) |
| 47 | /records/tours/map | desktop | `components/TourMapDesktop.tsx:432` | Show on the map → | **Show on the map** | no glyph: a button that acts on this page |
| 48 | /updates | desktop | `components/FollowPanel.tsx:88` | The Saturday digest ↑ | **The Saturday digest** | no glyph: an in-page jump (#digest) |
| 49 | /updates | desktop | `components/FollowPanel.tsx:99` | ⤓ Install the app | **Install the app** | no glyph: an action on this page (⤓ is not an Option A glyph) |
| 50 | /updates | desktop + phone (one component) | `components/SubscribeBox.tsx:119` | This week's entries ↓ | **This week's entries** | no glyph: an in-page jump (#entries) |

**G5 · toggles move to ▾ / ▴ (fix 7)**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 51 | /certifications, /afrobeats/{artist} | desktop | `components/CertExplorer.tsx:369` | Filters ▼ / ▲ | **Filters ▾ / ▴** | ▾/▴ an in-place toggle (fix 7) |
| 52 | /certifications, /afrobeats/{artist} | phone | `components/MobileCerts.tsx:822` | Compare with… {n} artists ↓ | **Compare with… {n} artists ▾ (the existing [open] rotate shows ▴)** | ▾/▴ an in-place toggle (fix 7: MobileCerts' two folds) |
| 53 | /certifications, /afrobeats/{artist} | phone | `components/MobileCerts.tsx:848` | Certified units by country… {n} markets ↓ | **Certified units by country… {n} markets ▾ (▴ open)** | ▾/▴ an in-place toggle (fix 7: MobileCerts' two folds) |
| 54 | /compare/in/{country} | phone fold (desktop shows the card) | `compare/CountryBoardView.tsx:497` | What one cert is worth here ↓ | **What one cert is worth here ▾ (the existing [open] rotate shows ▴)** | ▾/▴ an in-place toggle |
| 55 | /dai-dai, /dai-dai/es | desktop + phone (one component) | `components/DaiDaiConquest.tsx:132` | Show all {n}, with names ↓ / Show fewer ↑ | **Show all {n}, with names ▾ / Show fewer ▴** | ▾/▴ an in-place toggle (fix 7 names DaiDaiConquest) |
| 56 | /live-charts, /afrobeats/{artist}/live | phone | `components/MobileLiveCharts.tsx:242 → 241` | row caret ▾, turned sideways to ▸ by .caretShut | **row caret ▾ shut / ▴ open, by glyph; .caretShut deleted** | ▾/▴ an in-place toggle |
| 57 | /records/africas-biggest | desktop | `components/StatBox.tsx:134 → 136` | Source ▾ (bare text, never shows ▴) | **Source ▾, the chevron in its own span, turned to ▴ on [open]** | ▾/▴ an in-place toggle (Job 1 fix 22 later replaces this footer with P2 "Method ▾") |
| 58 | /records/awards | desktop | `components/AwardExplorer.tsx:102` | Filters ▼ / ▲ | **Filters ▾ / ▴** | ▾/▴ an in-place toggle (fix 7 names AwardExplorer) |
| 59 | /records/awards | desktop | `components/AwardExplorer.tsx:170` | Show all {n} ▾ / Show fewer ▲ | **Show all {n} ▾ / Show fewer ▴** | ▾/▴ an in-place toggle (fix 7 names AwardExplorer) · Q6 |
| 60 | /records/charts, /afrobeats/{artist}/charts | desktop + phone (MobileOfficialCharts embeds it) | `components/ChartExplorer.tsx:446` | Filters ▼ / ▲ | **Filters ▾ / ▴** | ▾/▴ an in-place toggle |
| 61 | /records/tours | phone | `components/MobileTours.tsx:280` | tour row caret ▸ shut / ▾ open | **tour row caret ▾ shut / ▴ open** | ▾/▴ an in-place toggle |
| 62 | /records/tours | desktop | `components/ToursExplorer.tsx:68 → 67` | tour row caret ▼, turned sideways by .caretShut | **tour row caret ▾ shut / ▴ open, by glyph; .caretShut deleted** | ▾/▴ an in-place toggle |

**G6 · judgement calls, each with its Q**

| # | Page | Layout | File:line (before → after) | Before | After | Rule |
|---|---|---|---|---|---|---|
| 63 | /naija66 | phone | `components/MobileNaija66.tsx:102` | Back to the stats → | **← Back to the stats** | a back link: ← leads it, like every other "Back to …" link · Q7 |
| 64 | /naija66 | desktop | `naija66/page.tsx:109` | Back to the stats → | **← Back to the stats** | a back link: ← leads it · Q7 |
| 65 | /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:131` | Every figure links to the page that documents it ↓ (hint, not a control) | **Every figure links to the page that documents it** | ↓ is kept for downloads · Q8 |
| 66 | /records/cars/{car} | desktop + phone (one layout) | `records/cars/[car]/page.tsx:364 (deleted)` | Sourcing · Press & sightings — see the list note → (a muted → in a box that is not a link) | **the → span deleted; the box reads the same** | → only on a whole row or card that is a link · Q9 |

**The CSS edits, in the same commit**

| # | File | Before | After | Why |
|---|---|---|---|---|
| C1 | `records/tours/tours.module.css:148` | `.caretShut { transform: rotate(-90deg); }` | deleted | it turned the shut ▼ sideways into ▸; the caret now changes by glyph (#62) |
| C2 | `components/mobileLiveCharts.module.css:255` | `.caretShut { transform: rotate(-90deg); }` | deleted | the same, for the phone live-charts rows (#56) |
| C3 | `records/africas-biggest/africas-biggest.module.css`, after `.sourceSummary` | none | `.sourceChevron` (inline-block, 4px before it, the site's `--dur-fast` turn), `.sourceWrap[open] .sourceChevron { transform: rotate(180deg) }`, no turn under reduced motion | "Source ▾" was bare text and could never show ▴ (#57). The same pattern as the phone certs folds (`mobileCerts .compareChevron`) and the country board (`compare .cbThChevron`) |
| C4 | `records/cars/[car]/car.module.css:385` | `.sourceArrowNone { border-color: var(--border); color: var(--text-muted); }` | deleted | its only user was the span #66 removes |
| C5 | `records/tours/tours.module.css`, `.caret` (review fix, 8 Oct) | 13px in the body face, inline-block, a `transform` transition | mono 24px, line-height 1, centred in the 26px column; no transition | the ▾ / ▴ that replaced ▼ (#62) draw at about a third of its size: at 13px ▾ was about 4px wide, where ▼ was about 9. At 24px it is about the old ▼'s width; the transition only ever drove the deleted turn (C1). The glyphs themselves do not change |

Left as they are on purpose: the `[open] rotate(180deg)` rules in `mobileCerts.module.css` and `compare.module.css`, which turn the new ▾ into ▴ when open (#52–#54); `dai-dai.module.css` `.skip::after` (Q1); the desktop live-charts SVG chevron, which already turns (Appendix B).

**Desktop and phone.** Every page in the list names both layouts.

| Page | Desktop | Phone |
|---|---|---|
| / | OnThisDayBand Next row (#29); GlobeTeaser (#26, shared) | MobileHome (#1); MobileOnThisDayCard (#27, #28) |
| /about | #8 | #9 |
| /analysis | #10 | #11 |
| /api | #2 | #3 |
| /methodology | seven pills (#14–#20) | #13 |
| /music | Discography (#42, #43); song cards (#31) | MobileMusic (#30, #44, #45) |
| /naija66 | #64 | #63 |
| /on-this-day/{day} | #35 | #34 |
| /records/tours | ToursExplorer (#62) | MobileTours (#61) |
| /records/tours/revenue | #24 | #23 |
| /live-charts, /afrobeats/{artist}/live | LiveReleaseBlock's SVG chevron already turns ▾/▴ (unchanged) | MobileLiveCharts (#56) |

Single-layout rows, because the other layout has no such control: desktop only for /certifications "See … by country" (#12), /records/awards (#22, #58, #59), /updates FollowPanel (#48, #49), /records/tours/map "Show on the map" (#47), /records/africas-biggest "Source" (#57), /records/by-the-numbers (#36, #65); phone only for the MobileCerts folds (#38, #52, #53) and the /on-this-day month jump and panel rows (#32, #33, #46). One component serves both layouts for /compare, DaiDaiConquest, SubscribeBox, TracklistDialog, ChartExplorer (MobileOfficialCharts embeds it), GlobeTeaser, BirthdayCelebration and the car page.

## 3. Calls made (for Paul)

Each takes the recommended answer from the arrows census (Q1–Q21) or the build's delta (N-3). Any one can be reversed alone.

- **Q1 · Dai Dai "Skip to the numbers ↓" keeps its ↓.** Fix 7 says in-page jumps take no glyph, but fix 109 says Skip "keeps its live label" and fix 1 lists Skip as an approved gold action. The specific fix wins. The ↓ is drawn in CSS and the guard keeps it by name. To drop it: delete the two `content:` lines in `dai-dai.module.css`.
- **Q2 · No "whole-row All ↗" exists, so nothing changes.** The only "All ↗" is the phone home's section-head text link (`MobileHome.tsx`), the same shape as "{n} No. 1s ↗". J0-4's known change "All ↗ → All →" has no target.
- **Q3 · ← back links and "Next: X →" pagers stay as built.** Fix 7 puts the back bar outside the rule and fix 132 keeps "← Home". The guard pins ← to the front of a label.
- **Q4 · The /records/by-the-numbers tiles end in → (#36).** Each tile is one whole-card link; the → names the proof page at its foot. "Proof ↗" (fixes 83, 85) is for a proof link that is not the whole card.
- **Q5 · "Compare {songs} instead" loses its ↗ (#39).** It re-renders /compare in the other mode: an action on this page.
- **Q6 · The named toggles get ▾/▴; the unnamed folds get nothing.** AwardExplorer "Show all {n} ▾ / Show fewer ▴" (#59) and DaiDaiConquest (#55) are named in fix 7. The folds fix 7 does not name lose their glyph: the compare links and picker (#4–#7), MobileCerts' "All {n} releases" (#38) and MobileMusic's "All {n} song stories" (#45).
- **Q7 · /naija66 "Back to the stats →" becomes "← Back to the stats" (#63, #64),** like every other "Back to …" link on the site.
- **Q8 · The by-the-numbers hint loses its ↓ (#65).** It is not a control, and ↓ is kept for downloads.
- **Q9 · The car page's "no source" box loses its muted → (#66).** The box is not a link. It still reads "Sourcing · Press & sightings — see the list note". The linked source card keeps its →. The 40px square was the box's tallest item, so the box may lose a few pixels of height: check it in the live debug pass.
- **Q10 · Leading ↓ on downloads stays** ("↓ Download PNG" on StatCardButton and StatCardMaker, the press "↓ Download" pills). The rule is met; Job 6 fix 132 writes /share's trailing "Download PNG ↓".
- **Q11 · The back-to-top "↑" is chrome** (an icon-only floating button), outside the rule.
- **Q12 · Links with no glyph keep none** (the desktop home hero, the phone "▶ Play on Spotify", nav links, prose links).
- **Q13 · "~230 arrow changes"** in the build prompt: the code holds 318 labels and 65 change. Both appendices are below, with the changes in bold.
- **Q16 · MobileCerts' two "Chart peaks ↗ / Live charts ↗" cards stay.** Under the rule they would be →, but Job 3 fix 67 replaces them with the switcher.
- **Q17 · /music's album and EP cards lose "{n} tracks ↗" (#42, #43)** and take no glyph until Job 4 (fixes 83, 95) splits them into "Album page →" and a separate "{n} tracks" control.
- **Q18 · Approved designs whose ↗ becomes → (G3, #26–#37):** the On This Day rows (#344), the /updates rows, the song cards, the globe card and the by-the-numbers tiles. They are one block so you can veto G3 at once.
- **Q19 · The `+` / `−` folds stay** (FaqList on 8 hosts, MobileSections, MobileCerts' badge rows, MobileOfficialCharts' "+N / − less"). They are not arrow glyphs and no fix names them (Appendix B).
- **Q20 / C-18 · Order.** J0-9 landed before J0-4, as decided. The guard was built on the tree after J0-9, so the provenance component's real markup is its positive control ("Download CSV ↓", "Method ▾", "JSON ↗"), and no allowlist entry was needed.
- **Q21 · The home Dai Dai cover tile keeps "Dai Dai ↗"** (TodaysNumber desktop, MobileHome phone). It is a captioned thumbnail, not a card with a title and more, and the home's upper half (#238) is approved. If you read it as a card, both layouts become → (two one-character edits).
- **N-3 · The phone tours fold (#456) keeps "{n} more shows ▾ / Show fewer ▴".** Fix 7 says "+ N more" takes no glyph, but this is an in-place toggle of AwardExplorer's shape, built and tested on 8 Oct against fix 7 (`tests/toursAnnouncedFold.test.tsx` pins both glyphs), and J0-4's change list does not name it. Its glyph turned muted under J0-1. Dropping it is a two-line change plus that test's four glyph assertions.

**Calls the build made beyond the census** (each a detail, not a new rule):
- **B-1 · /api's ↓ sits inside the size span** ("1,234 rows ↓"), not as a sibling span after it as the census drew. The endpoint row is a wrapping flex row, so on a narrow phone a separate ↓ could wrap alone onto its own line. Inside the span, the two wrap as one.
- **B-2 · The country board is not in the whole-row list.** The census listed `CountryBoardView.tsx:cbRow`, but no control carries that class: the row's → (`.cbGo`) sits in a table cell beside a stretched link, outside any control. The guard checks that every whole-row class it lists is still on a control, so the entry was dropped and a comment says why.
- **B-3 · Two comments that quoted a changed label were updated:** SubscribeBox's "This week's entries" doc comment, and the phone tours fold's CSS comment ("the tour rows' ▾ caret"). No other comment changed.

## 4. Tests

**New: `tests/arrowGlyphs.test.ts`.** It reads every `app/**/*.ts(x)` through the TypeScript parser, so comments never count. Each JSX `a`, `Link`, `button`, `summary`, `TrackedLink` and `OnThisDaySaveCard` is one control; its label is the text of its subtree as React renders it, both arms of every conditional included. The walk runs at module scope (vitest's 5 s timeout covers `it` bodies, not collection); the whole file runs in under 2 s. It asserts, in the response's own words where it has them:

1. ↓ only on download links (and in no text outside one, except the /share phone button's label const);
2. every download link carries ↓, and only ↓ (`download` links, both save-card call sites, buttons labelled "Download" or "Save or share");
3. a toggle (a `summary`, or a button with `aria-expanded`) carries ▾/▴ or nothing;
4. ▾/▴ only on toggles;
5. no glyph on buttons with no href;
6. no glyph on an in-page jump (`#…`) or a same-page state link (the compare page's `href(sp, …)`);
7. → only on a whole row or card (a named list of 32 file-and-class pairs), or a pager;
8. ↗ never on a whole row or card;
9. ← leads a back link; ↺ ↑ ▸ ▲ ▼ ↕ » « › never label a control;
10. carets turn by glyph, not sideways (no `.caretShut` rule or reference);
11. no aria-label carries a glyph;
12. a summary's ▾ sits in its own element, so CSS can turn it;
13. CSS draws no arrow, except the Dai Dai skip (fix 109).

Outside the rule, by name: the masthead, tab bar, nav sheet and back-to-top files; any control inside a back bar; sort marks (under `th[aria-sort]`, or an `onSort` click); the Dai Dai replay's ‹ › step buttons; the noindex `/primitives` specimen, the digest email and the embed iframe HTML; "See the full record →" (fix 132); the save card's own definition (its two call sites are checked instead). A second block fails if any of those names, or any whole-row class, goes stale.

**Negative controls**, each a line shipped on main d3c39eda, parsed through the same checker: N1 compare "Show all ↓" (rules 1, 6); N2 the MobileCerts fold's ↓ chevron (3); N3 "See the tracklist↗" on a button (5); N4 "Explore the music →" on a pill (7); N5 the phone song row's ↗ (8); N6 the /api CSV row with no ↓ (2); N7 AwardExplorer's ▲/▼ (3); N8 "⤓ Install the app" (1); N9 "change artist ↺" (6, 9); N10 the tours `.caretShut` rule (10); N11 StatBox's bare "Source ▾" (12); N12 the phone tour row's ▸ caret (3, 9); N13 the Dai Dai skip's CSS ↓ under any other selector or file (13). **Positive controls:** the provenance component's real markup on both builds, and KeepExploring's card →.

**Updated** (the seven the census names):

| Test | Was | Now |
|---|---|---|
| `tests/ui/compareShowAllLabel.test.tsx` | "Show all ↓", "Show fewer ↑" | "Show all", "Show fewer" (the label's class and metrics assertions unchanged) |
| `tests/ui/compareKeepFocus.test.tsx` | `/^Show all ↓$/`, `/^Show fewer ↑$/` | `/^Show all$/`, `/^Show fewer$/` |
| `tests/comparePage.test.tsx` | "+ N more artists ↓", "Show fewer artists ↑", "+ N more songs ↓" | the same with no glyph, and fails if the glyph comes back |
| `tests/mapLinks.test.tsx` | the globe foot reads "Open the map ↗" | "Open the map →" (the shipped negative control below it is untouched) |
| `tests/onThisDayCalendar.test.tsx` | "Months ↑" | "Months" |
| `tests/onThisDayHomeCard.test.tsx` | both hosts' day link ends in ↗ | split by host: desktop's text link keeps ↗, the phone's whole row ends in → |
| `tests/ui/tracklistDialogActions.test.tsx` | "Full album page →" | "Full album page ↗" (the shipped negative control untouched) |

**Known gap.** A label built in a fragment or a const outside its control is invisible to the parser: Discography's shared `inner` (#43), the timeline's "See the record →" body, DaiDaiConquest's `t.showAll` dictionary, the tours fold's `SHOW_FEWER`. All are correct after this commit; a future regression in one of them would not fail the guard, which is why they are listed here.

## Appendix A: every arrow label on the site (318 entries; bold = changes)

Taken on this branch before the J0-4 commit (after J0-9). "File:line" is the control's opening line; "(glyph L…)" gives the line of the glyph when it differs. Labels are read from the source, so `{…}` marks a value filled from data.

| Page | Layout | File:line (before J0-4) | Current label | Element | Rule | New label |
|---|---|---|---|---|---|---|
| / | desktop | `components/CertLedger.tsx:142` (glyph L143) | All {certTotal}certifications ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| / | desktop + phone (one component) | `components/GlobeTeaser.tsx:37` (glyph L76) | Live worldwide Where he's performed {countryCount}countries, {numberWord(regionCount).toLo | whole row/card link → /records/tours/map | #26 → the whole card is one link · Q18 | **Open the map →** |
| / | desktop | `components/OnThisDayBand.tsx:46` (glyph L50) | The cardfor {day.label}↓ | download link | ↓ download | unchanged |
| / | desktop | `components/OnThisDayBand.tsx:84` (glyph L85) | {homeDayLink(pick)}↗ | pill/button link → {dayHref} | ↗ another page | unchanged |
| / | desktop | `components/OnThisDayBand.tsx:87` (glyph L88) | The calendar ↗ | pill/button link → /on-this-day | ↗ another page | unchanged |
| / | desktop | `components/OnThisDayBand.tsx:120` (glyph L129) | Next{next.lead.headline}{next.label}· {next.lead.year}↗ | whole row/card link → {`/on-this-day/${next.slug}`} | #29 → a whole row (fix 105 later makes it three such rows) · Q18 | **Next {headline} {date} →** |
| / | desktop | `components/StatCardButton.tsx:211` (glyph L212) | {downloading ? "Preparing…" : "↓ Download PNG"} | download button | ↓ download | unchanged |
| / | desktop | `components/TodaysNumber.tsx:60` (glyph L74) | {title}↗ | text link → /dai-dai | ↗ another page | unchanged |
| / | desktop | `components/TodaysNumber.tsx:117` (glyph L118) | Live board ↗ | text link → /live-charts | ↗ another page | unchanged |
| / | desktop | `page.tsx:229` (glyph L230) | Read the story ↗ | pill/button link → /dai-dai | ↗ another page | unchanged |
| / | desktop | `page.tsx:278` (glyph L279) | See it visualized ↗ | pill/button link → /records/visualized | ↗ another page | unchanged |
| / | desktop | `page.tsx:307` (glyph L308) | {careerNumberOnesLabel}↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| / | desktop | `page.tsx:363` (glyph L364) | Full discography ↗ | pill/button link → /music | ↗ another page | unchanged |
| / | desktop | `page.tsx:399` (glyph L400) | All career records ↗ | pill/button link → /records | ↗ another page | unchanged |
| / | desktop | `page.tsx:500` (glyph L501) | Make a stat card ↗ | pill/button link → /share | ↗ another page | unchanged |
| / | desktop | `page.tsx:503` (glyph L504) | Open data API ↗ | pill/button link → /api | ↗ another page | unchanged |
| / | desktop | `page.tsx:506` (glyph L507) | Methodology ↗ | pill/button link → /methodology | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:170` (glyph L177) | {live.title ?? "Dai Dai"}↗ | text link → /dai-dai | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:203` (glyph L204) | Live board ↗ | text link → /live-charts | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:226` (glyph L228) | View certifications↗ | pill/button link → /certifications | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:230` (glyph L231) | Explore the music → | pill/button link → /music | #1 ↗ a pill to another page (named in J0-4) | **Explore the music ↗** |
| / | phone | `components/MobileHome.tsx:262` (glyph L263) | {careerNumberOnesLabel}↗ | text link → /records/charts | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:312` (glyph L313) | All ↗ | text link → /music | ↗ another page | unchanged |
| / | phone | `components/MobileHome.tsx:348` (glyph L349) | Read the story ↗ | pill/button link → /dai-dai | ↗ another page | unchanged |
| / | phone | `components/MobileOnThisDayCard.tsx:112` (glyph L119) | Save or share↓ | download link | ↓ download | unchanged |
| / | phone | `components/MobileOnThisDayCard.tsx:125` (glyph L127) | {homeDayLink(pick)}↗ | whole row/card link → {dayHref} | #27 → a 44px whole row · Q18 | **{All n on 8 October} →** |
| / | phone | `components/MobileOnThisDayCard.tsx:129` (glyph L131) | The calendar↗ | whole row/card link → /on-this-day | #28 → a 44px whole row · Q18 | **The calendar →** |
| / and /on-this-day/{day} | phone | `components/OnThisDaySaveCard.tsx:81` | {preparing ? <span>Preparing…</span> : children} | download link | ↓ download | unchanged |
| /about | desktop | `about/page.tsx:138` (glyph L144) | Read his full biography on Wikipedia ↗ | text link, external → https://en.wikipedia.org/wiki/Burna_Boy | ↗ another site | unchanged |
| /about | desktop | `about/page.tsx:179` | The full career timeline — every milestone, dated → | text link → /timeline | #8 ↗ a text link to another page | **The full career timeline — every milestone, dated ↗** |
| /about | phone | `components/MobileAbout.tsx:78` (glyph L84) | Full biography on Wikipedia ↗ | text link, external → https://en.wikipedia.org/wiki/Burna_Boy | ↗ another site | unchanged |
| /about | phone | `components/MobileAbout.tsx:105` (glyph L106) | The full career timeline — every milestone, dated → | text link → /timeline | #9 ↗ a text link to another page | **The full career timeline — every milestone, dated ↗** |
| /afrobeats | desktop | `afrobeats/page.tsx:260` (glyph L271) | §One rule, counted the sameOne plaque per title per country at its current tier. Award eve | whole row/card link → /methodology#principles | → whole row/card | unchanged |
| /afrobeats | desktop | `afrobeats/page.tsx:279` (glyph L292) | ProvenanceRead at source, re-read {fullSweepLong}All {boardNames.length}artists' registers | whole row/card link → /methodology#sources | → whole row/card | unchanged |
| /afrobeats | phone | `components/HubScatter.tsx:201` | COUNTRIES → | text, not a control | not a control: chart axis direction label | unchanged |
| /afrobeats | phone | `components/HubScatter.tsx:204` | CERTIFICATIONS ↑ | text, not a control | not a control: chart axis direction label | unchanged |
| /afrobeats | phone | `components/MobileAfrobeatsHub.tsx:92` (glyph L147) | {burna.flag}This site{burna.name}{burna.certs}certifications · {burna.countries}countries  | whole row/card link → {burna.href} | → whole row/card | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:426` | ← The Afrobeats Board | text link → /afrobeats | outside: back link / pager (Q3) | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:504` (glyph L505) | Compare ↗ | pill/button link → {`/compare?a=${a.slug}`} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:507` (glyph L508) | {SHOWS_LABEL}↗ | pill/button link → {shows} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:512` (glyph L513) | Compare ↗ | pill/button link → {`/compare?a=${a.slug}`} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:578` (glyph L608) | Official charts{a.name}'s peak positions, country by country {chartEntries(a)}entries {cha | whole row/card link → {`/afrobeats/${a.slug}/charts`} | → whole row/card | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:617` (glyph L646) | Live now Where {a.name}is charting today {live.placements}{plural(live.placements, "placem | whole row/card link → {`/afrobeats/${a.slug}/live`} | → whole row/card | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:690` | {rival.name}'s page ↗ | text link → {rival.href} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:709` | ← The Afrobeats Board | pill/button link → /afrobeats | outside: back link / pager (Q3) | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:710` (glyph L711) | Next: {next.name}→ | pill/button link → {`/afrobeats/${next.slug}`} | outside: pager (Q3) | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:714` (glyph L715) | Chart peaks ↗ | pill/button link → {`/afrobeats/${a.slug}/charts`} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:719` (glyph L720) | Live charts ↗ | pill/button link → {`/afrobeats/${a.slug}/live`} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:725` | Compare ↗ | pill/button link → {`/compare?a=${a.slug}`} | ↗ another page | unchanged |
| /afrobeats/{artist} | desktop | `afrobeats/[artist]/page.tsx:726` | Burna Boy's ledger ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| /afrobeats/{artist}/charts | desktop | `afrobeats/[artist]/charts/page.tsx:263` | ← {a.name} | pill/button link → {`/afrobeats/${a.slug}`} | outside: back link / pager (Q3) | unchanged |
| /afrobeats/{artist}/charts | desktop | `afrobeats/[artist]/charts/page.tsx:264` | The Afrobeats Board ↗ | pill/button link → /afrobeats | ↗ another page | unchanged |
| /afrobeats/{artist}/charts | desktop | `afrobeats/[artist]/charts/page.tsx:265` | Burna Boy's charts ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /afrobeats/{artist}/live | desktop | `afrobeats/[artist]/live/page.tsx:343` (glyph L344) | ← {a.name} | pill/button link → {`/afrobeats/${slug}`} | outside: back link / pager (Q3) | unchanged |
| /afrobeats/{artist}/live | desktop | `afrobeats/[artist]/live/page.tsx:346` (glyph L347) | Burna Boy's live charts ↗ | pill/button link → /live-charts | ↗ another page | unchanged |
| /analysis | desktop | `analysis/page.tsx:152` (glyph L153) | {l.label}→ | pill/button link → {l.href} | #10 ↗ a pill to another page | **{finding link} ↗** |
| /analysis | desktop | `analysis/page.tsx:201` (glyph L202) | The February 2026 correction, with the arithmetic ↗ | pill/button link → /analysis/spotify-unmerge | ↗ another page | unchanged |
| /analysis | desktop | `analysis/page.tsx:225` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /analysis | desktop | `analysis/page.tsx:226` | Methodology ↗ | pill/button link → /methodology | ↗ another page | unchanged |
| /analysis | desktop | `analysis/page.tsx:227` | Every chart entry ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /analysis | phone | `components/MobileAnalysis.tsx:90` (glyph L91) | {l.label}→ | pill/button link → {l.href} | #11 ↗ a pill to another page | **{finding link} ↗** |
| /api | desktop | `api/page.tsx:242` | GET/api/{API_VERSION}{d.path}{d.size}{d.what} | download link | #2 ↓ a download (J0-4: "downloads gain ↓") | **GET /api/v1/{file}.csv … {n} rows ↓** |
| /api | desktop | `api/page.tsx:355` (glyph L356) | ← How the numbers are verified | pill/button link → /methodology | outside: back link / pager (Q3) | unchanged |
| /api | desktop | `api/page.tsx:358` | What the numbers say ↗ | pill/button link → /analysis | ↗ another page | unchanged |
| /api | desktop | `api/page.tsx:359` | Every chart entry ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /api | phone | `components/MobileApi.tsx:109` | GET/api/{version}{d.path}{d.size}{d.what} | download link | #3 ↓ a download (J0-4: "downloads gain ↓") | **GET /api/v1/{file}.csv … {n} rows ↓** |
| /certifications | desktop | `certifications/page.tsx:132` | Silver → Diamond | text, not a control | not a control: prose / data range | unchanged |
| /certifications | desktop | `certifications/page.tsx:363` | Compare ↗ | pill/button link → /compare?a=burna-boy | ↗ another page | unchanged |
| /certifications | desktop | `certifications/page.tsx:367` (glyph L368) | {SHOWS_LABEL}↗ | pill/button link → {burnaShows} | ↗ another page | unchanged |
| /certifications | desktop | `certifications/page.tsx:371` (glyph L372) | See certifications by country → | pill/button link → /records/visualized#certifications | #12 ↗ a button to another page | **See certifications by country ↗** |
| /certifications | desktop | `certifications/page.tsx:374` | Methodology ↗ | pill/button link → /methodology | ↗ another page | unchanged |
| /certifications and /afrobeats/{artist} | desktop | `components/CertExplorer.tsx:361` (glyph L369) | Filters{active ? ` · ${totalShown} shown` : ""}{filtersOpen ? "▲" : "▼"} | toggle (button aria-expanded) | #51 ▾/▴ an in-place toggle (fix 7) | **Filters ▾ / ▴** |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:767` (glyph L776) | {expanded ? `Show the top ${ROWS_SHOWN}` : `All ${matching.length} releases`}{expanded ? " | toggle (button aria-expanded) | #38 no glyph: a list fold (fix 7) | **All {n} releases +{n} / Show the top 10** |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:789` (glyph L792) | Chart peaks↗{chartsNote && <span className={styles.boardNote}>{chartsNote}</span>} | pill/button link → {chartsHref} | ↗ (Job 3 fix 67 replaces these two cards with the switcher) | unchanged |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:798` (glyph L802) | Live charts↗{liveNote && <span className={styles.boardNote}>{liveNote}</span>} | pill/button link → {liveHref} | ↗ (Job 3 fix 67 replaces these two cards with the switcher) | unchanged |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:819` (glyph L822) | Compare with… {count(compareWith.length, "artist", "artists")}↓ | toggle (details/summary) | #52 ▾/▴ an in-place toggle (fix 7: MobileCerts' two folds) | **Compare with… {n} artists ▾ (the existing [open] rotate shows ▴)** |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:845` (glyph L848) | Certified units by country… {count(countryBoards.length, "market", "markets")}↓ | toggle (details/summary) | #53 ▾/▴ an in-place toggle (fix 7: MobileCerts' two folds) | **Certified units by country… {n} markets ▾ (▴ open)** |
| /certifications and /afrobeats/{artist} | phone | `components/MobileCerts.tsx:932` (glyph L933) | {compareSlug === "burna-boy" ? "Compare ↗" : `Compare ${subject} ↗`} | pill/button link → {`/compare?a=${compareSlug}`} | ↗ another page | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:231` | Found on 10 Sep 2026 after the body's own site proved empty: BRMA sets the thresholds and  | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:274` | Found 10 Sep 2026; the body's site had been unreachable from every earlier route. ČNS IFPI | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:305` | SINGLES normalised: IFPI Danmark counts 1 stream = 1 enhed, so Guld reads 4,500,000. Divid | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:331` | SINGLES normalised: SNEP publishes them in streams (Gold 15,000,000). Divided by the body' | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:421` | BOTH normalised: NVPI is the reverse of everyone else — it converts sales INTO streams and | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:435` | SINGLES normalised: IFPI Norge counts 1 stream = 1 salg, so Gull reads 3,000,000. Divided  | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:533` | Found 10 Sep 2026 in a 21 May 2026 archive of the body's own PDF, confirmed current by ČNS | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/certThresholds.ts:604` | RiSA roughly doubled its thresholds for sales after 1 January 2024 — singles Gold 10,000 → | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/daiDaiRuns.ts:210` | a run table of 24.05 #33 → 09.08 #1 showing No. 1 in the nine weeks from 14.06 | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/daiDaiRuns.ts:255` | Luxembourg — eight consecutive, 11 Jul → 29 Aug. Debut 6 Jun at #15. | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/daiDaiRuns.ts:306` | Germany No. 1 in the nine weeks 3 Jul → 3 Sep. The three weeks before are read and are *no | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/daiDaiRuns.ts:327` | Sweden No. 1 in v28–v32, v34, v35 — seven, not consecutive: it fell to #2 in v33 behind Vi | text, not a control | not a control: prose / data range | unchanged |
| /compare + /methodology (threshold notes) / Dai Dai runs | data prose | `data/daiDaiRuns.ts:439` | Global Excl. US — nine consecutive, 4 Jul → 29 Aug. Debut 30 May at #166. | text, not a control | not a control: prose / data range | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:201` | → | text, not a control | → whole-row mark (the row is a page; the country link carries the name) | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:210` | How this is counted ↗ | text link → /methodology#certified-units | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:381` (glyph L389) | {t.sourceLinkText ?? t.pricedAt ?? (t.single \|\| t.album ? `${bodyOwner(board.body} ↗ | text link, external → {t.sourceUrl} | ↗ another site | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:495` (glyph L497) | What one cert is worth here↓ | toggle (details/summary) | #54 ▾/▴ an in-place toggle | **What one cert is worth here ▾ (the existing [open] rotate shows ▴)** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:604` (glyph L605) | {pair[0].name}vs {pair[1].name}↗ | pill/button link → {`/compare/${pairSlug(pair[0], pair[1])} | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/CountryBoardView.tsx:616` (glyph L617) | Every market ↗ | pill/button link → {indexHref(includeFeatures)} | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:223` (glyph L224,225) | + {rest.length}more{label}↓Show fewer{label}↑ | toggle (details/summary) | #4 no glyph: a "+ N more" fold (fix 7); #5 no glyph: a list fold (fix 7) | **+ {n} more {artists} · Show fewer {artists}** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:412` (glyph L413) | Compare {noun(other, true)}instead ↗ | same-page state link → {href(sp, { mode: other, sa: null, sb: n | #39 no glyph: a same-page state link (mode switch) · Q5 | **Compare {songs} instead** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:416` (glyph L417) | change artist ↺ | same-page state link → {href(sp, { [side]: null, [target]: null | #40 no glyph: a same-page action (↺ is not an Option A glyph) | **change artist** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:443` (glyph L447) | Change artist ↺ | same-page state link → {href(sp, { [side]: null, [target]: null | #41 no glyph: a same-page action | **Change artist** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:898` | Certifications › Compare | text, not a control | not a control: kicker/breadcrumb text | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1053` | How this is counted ↗ | text link → /methodology#certified-units | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1075` | certified units country by country ↗ | text link → /compare/in | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1255` | Show fewer ↑ | same-page state link → {`${href(sp, { all: null })}#country-tab | #6 no glyph: a list fold (named in J0-4) | **Show fewer** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1274` | Show all ↓ | same-page state link → {href(sp, { all: "1" })} | #7 no glyph: a list fold (named in J0-4: "Show all ↓" → "Show all") | **Show all** |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1300` (glyph L1301) | Which bodies, and when ↗ | text link → /methodology#threshold-history | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1329` | At its current tier. Gold → Platinum → 2× Platinum is the same sales recertified, never th | text, not a control | not a control: prose / data range | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1382` (glyph L1383) | How this is counted ↗ | text link → /methodology#certified-units | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1394` | The Afrobeats Board ↗ | pill/button link → /afrobeats | ↗ another page | unchanged |
| /compare family (/compare, /compare/{pair}, /compare/in, /compare/in/{country}) | desktop + phone (one component, phone layout <900) | `compare/page.tsx:1403` (glyph L1405) | The Afrobeats Board↗ | pill/button link → /afrobeats | ↗ another page | unchanged |
| /contact | desktop + phone (shared channel data) | `contact/page.tsx:17` | onaspaceship.com ↗ | text, not a control | ↗ another site (value printed in a pill link row, both layouts) | unchanged |
| /contact | desktop + phone (shared channel data) | `contact/page.tsx:18` | @burnaboygram ↗ | text, not a control | ↗ another site (value printed in a pill link row, both layouts) | unchanged |
| /contact | desktop + phone (shared channel data) | `contact/page.tsx:19` | @burnaboy ↗ | text, not a control | ↗ another site (value printed in a pill link row, both layouts) | unchanged |
| /contact | desktop + phone (shared channel data) | `contact/page.tsx:20` | Ticketmaster ↗ | text, not a control | ↗ another site (value printed in a pill link row, both layouts) | unchanged |
| /dai-dai | desktop + phone (one layout) | `dai-dai/page.tsx:542` | Every chart position ↗ | text link → /records/charts?song=Dai%20Dai | ↗ another page | unchanged |
| /dai-dai | desktop + phone (one layout) | `dai-dai/page.tsx:543` | Africa's biggest ↗ | text link → /records/africas-biggest | ↗ another page | unchanged |
| /dai-dai | desktop + phone (one layout) | `dai-dai/page.tsx:544` | Burna Boy discography ↗ | text link → /music | ↗ another page | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone | `dai-dai/dai-dai.module.css:72-75` (`.skip::after`) | Skip to the numbers ↓ / Saltar a las cifras ↓ (CSS-drawn) | in-page jump (#numbers), gold action | ↓ on an in-page jump; fix 109 "keeps its live label" · Q1 | unchanged (kept by name in arrowGlyphs) |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiConquest.tsx:125` (glyph L132) | {open ? t.showFewer : fill(t.showAll)}{open ? "↑" : "↓"} | toggle (button aria-expanded) | #55 ▾/▴ an in-place toggle (fix 7 names DaiDaiConquest) | **Show all {n}, with names ▾ / Show fewer ▴** |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiFigures.tsx:403` (glyph L409) | {t.watch}↗ | text link, external → {`https://youtu.be/${DAI_DAI_HALFTIME_VI | ↗ another site | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiReplay.tsx:734` (glyph L735) | ‹ | button, no href | outside: media transport icon | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiReplay.tsx:737` (glyph L738) | › | button, no href | outside: media transport icon | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiReplay.tsx:776` | ▲ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiReplay.tsx:779` | ▲ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiStory.tsx:61` | {n} chapters · {from} → {to} | text, not a control | not a control: prose / data range | unchanged |
| /dai-dai and /dai-dai/es | desktop + phone (one component) | `components/DaiDaiStory.tsx:201` (glyph L202) | {s.link.label}↗ | pill/button link → {s.link.href} | ↗ another page | unchanged |
| /dai-dai/es | desktop + phone (one layout) | `dai-dai/es/page.tsx:481` | {n} capítulos · {from} → {to} | text, not a control | not a control: prose / data range | unchanged |
| /dai-dai/es | desktop + phone (one layout) | `dai-dai/es/page.tsx:596` | Todas las posiciones ↗ | text link → /records/charts?song=Dai%20Dai | ↗ another page | unchanged |
| /dai-dai/es | desktop + phone (one layout) | `dai-dai/es/page.tsx:597` | Lo más grande de África ↗ | text link → /records/africas-biggest | ↗ another page | unchanged |
| /dai-dai/es | desktop + phone (one layout) | `dai-dai/es/page.tsx:598` | Discografía de Burna Boy ↗ | text link → /music | ↗ another page | unchanged |
| /embed/{widget} (third-party iframe) | embed | `lib/embedWidgets.ts:358` | <span class="brand">burnaboystats.com <span aria-hidden="true">↗</span></span></span> | text, not a control | ↗ leaves the host page (embed brand line); not site page UI | unchanged |
| /live-charts | desktop | `live-charts/page.tsx:266` (glyph L267) | ← Official chart records | pill/button link → /records/charts | outside: back link / pager (Q3) | unchanged |
| /live-charts and /afrobeats/{artist}/live | phone | `components/LiveReleaseBlock.tsx:49` | ▲ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /live-charts and /afrobeats/{artist}/live | phone | `components/LiveReleaseBlock.tsx:49` | ▼ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /live-charts and /afrobeats/{artist}/live | phone | `components/MobileLiveCharts.tsx:44` | `▲${e.movement}` | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /live-charts and /afrobeats/{artist}/live | phone | `components/MobileLiveCharts.tsx:45` | `▼${Math.abs(e.movement)}` | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /live-charts and /afrobeats/{artist}/live | phone | `components/MobileLiveCharts.tsx:204` (glyph L245) | {r.cover ? ( // The slot holds the art back until the row nears the // screen; se}{r.displ | toggle (button aria-expanded) | #56 ▾/▴ an in-place toggle | **row caret ▾ shut / ▴ open, by glyph; .caretShut deleted** |
| /live-charts and /afrobeats/{artist}/live | phone | `components/MobileLiveCharts.tsx:279` (glyph L280) | Official chart records↗ | pill/button link → {chartsHref} | ↗ another page | unchanged |
| /methodology | desktop | `methodology/page.tsx:522` | Latest updates → | pill/button link → /updates | #14 ↗ a pill to another page | **Latest updates ↗** |
| /methodology | desktop | `methodology/page.tsx:523` | RSS feed → | pill/button link → /rss.xml | #15 ↗ a pill to another page | **RSS feed ↗** |
| /methodology | desktop | `methodology/page.tsx:537` | Contact → | pill/button link → /contact | #16 ↗ a pill to another page | **Contact ↗** |
| /methodology | desktop | `methodology/page.tsx:538` | FAQ → | pill/button link → /faq | #17 ↗ a pill to another page | **FAQ ↗** |
| /methodology | desktop | `methodology/page.tsx:565` (glyph L571) | TurnTable's register, Feb 2026 capture → | pill/button link, external → https://web.archive.org/web/202602212240 | #18 ↗ a pill to another site | **TurnTable's register, Feb 2026 capture ↗** |
| /methodology | desktop | `methodology/page.tsx:573` (glyph L574) | The live page, for comparison → | pill/button link, external → https://turntablecharts.com/certificatio | #19 ↗ a pill to another site | **The live page, for comparison ↗** |
| /methodology | desktop | `methodology/page.tsx:588` | About this project → | pill/button link → /about | #20 ↗ a pill to another page | **About this project ↗** |
| /methodology | desktop | `methodology/page.tsx:596` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /methodology | desktop | `methodology/page.tsx:597` | What the numbers say ↗ | pill/button link → /analysis | ↗ another page | unchanged |
| /methodology | desktop | `methodology/page.tsx:598` | Open data API ↗ | pill/button link → /api | ↗ another page | unchanged |
| /methodology | desktop | `methodology/page.tsx:670` | Gold → Platinum → 2× Platinum is the same sales recertified, not three sales. A release's  | text, not a control | not a control: prose / data range | unchanged |
| /methodology | phone | `components/MobileMethodology.tsx:112` (glyph L113) | {x.linkLabel}→ | text link, external → {x.href} | #13 ↗ a link to another site | **{register link} ↗** |
| /music | desktop | `components/Discography.tsx:35` (glyph L40) | {a.title}{a.year}· {a.credit ? `${a.credit} · ` : ""}{a.label}{a.tracks.length}tracks{a.ed | button, no href | #42 no glyph: opens the tracklist dialog in place (Job 4 fixes 83/95 restructure the card) · Q17 | **{n} tracks** |
| /music | desktop | `components/Discography.tsx:65` | ↗ | text, not a control | #43 no glyph: the album card opens the dialog on a plain click (Job 4 fixes 83/95) · Q17 | **{n} tracks** |
| /music | desktop + phone (dialog) | `components/TracklistDialog.tsx:132` (glyph L138) | Play on Spotify ↗ | pill/button link, external → {album.spotify} | ↗ another site | unchanged |
| /music | desktop + phone (dialog) | `components/TracklistDialog.tsx:142` (glyph L143) | Full album page → | pill/button link → {`/music/albums/${albumPage.slug}`} | #21 ↗ a pill to another page | **Full album page ↗** |
| /music | desktop + phone (dialog) | `components/TracklistDialog.tsx:154` (glyph L157) | {i + 1}{t}song page → | whole row/card link → {href} | → whole row/card | unchanged |
| /music | desktop | `music/page.tsx:131` (glyph L132) | Where the world listens ↗ | pill/button link → /music/listeners | ↗ another page | unchanged |
| /music | desktop | `music/page.tsx:170` | The Dai Dai story ↗ | pill/button link → /dai-dai | ↗ another page | unchanged |
| /music | desktop | `music/page.tsx:187` (glyph L188) | Certifications ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| /music | desktop | `music/page.tsx:236` (glyph L252) | {s.title}{s.tag}↗ | whole row/card link → {s.href} | #31 → a whole card · Q18 | **{song card} →** |
| /music | phone | `components/MobileMusic.tsx:119` | Certs ↗ | text link → /certifications | outside: back bar chrome (fix 7) | unchanged |
| /music | phone | `components/MobileMusic.tsx:146` (glyph L147) | Where the world listens↗ | pill/button link → /music/listeners | ↗ another page | unchanged |
| /music | phone | `components/MobileMusic.tsx:175` (glyph L182) | See the tracklist↗ | button, no href | #44 no glyph: a button that opens the dialog in place | **See the tracklist** |
| /music | phone | `components/MobileMusic.tsx:228` (glyph L237) | {s.title}{s.tag}↗ | whole row/card link → {s.href} | #30 → a whole row · Q18 | **{song} {tag} →** |
| /music | phone | `components/MobileMusic.tsx:241` (glyph L248) | {allSongs ? "Show fewer" : `All ${songs.length} song stories`}{allSongs ? "↑" : `+${songs. | toggle (button aria-expanded) | #45 no glyph: a list fold (fix 7) | **All {n} song stories +{n} / Show fewer** |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:217` | ← Music | text link → /music | outside: back link / pager (Q3) | unchanged |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:334` (glyph L335) | ▶ Play on Spotify ↗ | pill/button link, external → {song.spotify} | ↗ another site | unchanged |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:488` (glyph L494) | ▶ Play on Spotify | text link, external → {song.spotify} | ▶ play icon (not an arrow) | unchanged |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:507` | ← Full discography | pill/button link → /music | outside: back link / pager (Q3) | unchanged |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:508` (glyph L509) | Next song: {nextSong.title} → | pill/button link → {`/music/${nextSong.slug}`} | outside: pager (Q3) | unchanged |
| /music/{song} | desktop + phone (same file) | `music/[song]/page.tsx:511` | The Dai Dai story ↗ | pill/button link → /dai-dai | ↗ another page | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:144` | ← Music | text link → /music | outside: back link / pager (Q3) | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:208` (glyph L209) | ▶ Play on Spotify ↗ | pill/button link, external → {record.spotify} | ↗ another site | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:333` (glyph L335) | {t}song page → | whole row/card link → {`/music/${sp.slug}`} | → whole row/card | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:387` (glyph L393) | ▶ Play on Spotify | text link, external → {record.spotify} | ▶ play icon (not an arrow) | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:406` | ← Full discography | pill/button link → /music | outside: back link / pager (Q3) | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:408` (glyph L409) | Next album: {nextAlbum.title} → | pill/button link → {`/music/albums/${nextAlbum.slug}`} | outside: pager (Q3) | unchanged |
| /music/albums/{album} | desktop + phone (same file) | `music/albums/[album]/page.tsx:412` | Awards & wins ↗ | pill/button link → /records/awards | ↗ another page | unchanged |
| /music/listeners | desktop | `music/listeners/page.tsx:184` (glyph L185) | ← Back to the music | pill/button link → /music | outside: back link / pager (Q3) | unchanged |
| /music/listeners | desktop | `music/listeners/page.tsx:187` (glyph L188) | Where he's performed ↗ | pill/button link → /records/tours/map | ↗ another page | unchanged |
| /music/listeners | desktop | `music/listeners/page.tsx:190` (glyph L191) | Live charts ↗ | pill/button link → /live-charts | ↗ another page | unchanged |
| /naija66 | desktop | `naija66/page.tsx:55` (glyph L56) | {X_LINK}↗ | text link, external → {NAIJA66_X_URL} | ↗ another site | unchanged |
| /naija66 | desktop | `naija66/page.tsx:109` | Back to the stats → | text link → / | #64 a back link: ← leads it · Q7 | **← Back to the stats** |
| /naija66 | phone | `components/MobileNaija66.tsx:53` (glyph L54) | {X_LINK}↗ | text link, external → {NAIJA66_X_URL} | ↗ another site | unchanged |
| /naija66 | phone | `components/MobileNaija66.tsx:102` | Back to the stats → | text link → / | #63 a back link: ← leads it, like every other "Back to …" link · Q7 | **← Back to the stats** |
| /on-this-day | desktop | `on-this-day/page.tsx:81` (glyph L82) | Open {focus.label}↗ | text link → {`/on-this-day/${focus.slug}`} | ↗ another page | unchanged |
| /on-this-day | phone | `components/MobileOnThisDayIndex.tsx:77` (glyph L79) | Open {focus.label}↗ | whole row/card link → {`/on-this-day/${focus.slug}`} | #32 → a 44px whole row · Q18 | **Open {day} →** |
| /on-this-day | phone | `components/OnThisDayPhoneMonth.tsx:69` (glyph L70) | Months ↑ | in-page jump → #months | #46 no glyph: an in-page jump (#months) | **Months** |
| /on-this-day | phone | `components/OnThisDayPhoneMonth.tsx:136` (glyph L138) | Open {sel.label}↗ | whole row/card link → {`/on-this-day/${sel.slug}`} | #33 → a 44px whole row · Q18 | **Open {day} →** |
| /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:105` (glyph L129) | {e === day.lead && ( <span className={styles.cardTag}> <svg width="9" height="11"}{e.headl | whole row/card link → {e.href} | #35 → a whole row · Q18 | **{event row} →** |
| /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:140` (glyph L141) | ← {prev.label}{prev.lead.headline}{dayMeta(prev)} | whole row/card link → {`/on-this-day/${prev.slug}`} | outside: back link / pager (Q3) | unchanged |
| /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:145` (glyph L146) | The calendar ↗ | text link → /on-this-day | ↗ another page | unchanged |
| /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:148` (glyph L149) | {next.label}→{next.lead.headline}{dayMeta(next)} | whole row/card link → {`/on-this-day/${next.slug}`} | outside: pager (Q3) | unchanged |
| /on-this-day/{day} | desktop | `on-this-day/[day]/page.tsx:180` (glyph L182) | Download the card↓ | download link | ↓ download | unchanged |
| /on-this-day/{day} | phone | `components/MobileOnThisDayDay.tsx:62` (glyph L67) | {e === day.lead && <span className={styles.cardTag}>On the card</span>}↗ {e.headline}{isRe | whole row/card link → {e.href} | #34 → a whole row · Q18 | **{event row} →** |
| /on-this-day/{day} | phone | `components/MobileOnThisDayDay.tsx:104` (glyph L111) | Save or share↓ | download link | ↓ download | unchanged |
| /on-this-day/{day} | phone | `components/MobileOnThisDayDay.tsx:116` (glyph L117) | ← {prev.label}{prev.lead.headline}{dayMeta(prev)} | whole row/card link → {`/on-this-day/${prev.slug}`} | outside: back link / pager (Q3) | unchanged |
| /on-this-day/{day} | phone | `components/MobileOnThisDayDay.tsx:121` (glyph L122) | {next.label}→{next.lead.headline}{dayMeta(next)} | whole row/card link → {`/on-this-day/${next.slug}`} | outside: pager (Q3) | unchanged |
| /press | desktop | `press/page.tsx:247` (glyph L252) | {f.value}{f.label}{f.sub}→ | whole row/card link → {f.href} | → whole row/card | unchanged |
| /press | desktop | `press/page.tsx:296` (glyph L314) | {d.file} · {d.count}{d.countOf}{d.what}↓Download | download link | ↓ download | unchanged |
| /press | phone | `components/MobilePress.tsx:120` (glyph L125) | {f.value}{f.label}{f.sub}→ | whole row/card link → {f.href} | → whole row/card | unchanged |
| /press | phone | `components/MobilePress.tsx:151` (glyph L169) | {d.file} · {d.count}{d.countOf}{d.what}↓Download | download link | ↓ download | unchanged |
| /primitives (noindex specimen, "not part of the site") | desktop | `primitives/page.tsx:121` | Primary ↗ | in-page jump → # | outside: specimen page | unchanged |
| /primitives (noindex specimen, "not part of the site") | desktop | `primitives/page.tsx:122` | Secondary ↗ | in-page jump → # | outside: specimen page | unchanged |
| /primitives (noindex specimen, "not part of the site") | desktop | `primitives/page.tsx:123` | Ghost ↗ | in-page jump → # | outside: specimen page | unchanged |
| /primitives (noindex specimen, "not part of the site") | desktop | `primitives/page.tsx:135` | Hover a button: 3px lift, shadow deepens 0 8px 30px → 0 14px 44px. Secondary turns its bor | text, not a control | outside: specimen page | unchanged |
| /records | desktop | `records/page.tsx:141` (glyph L146) | {s.title}{s.desc}→ | whole row/card link → {s.href} | → whole row/card | unchanged |
| /records | desktop | `records/page.tsx:165` (glyph L166) | Full leaderboard ↗ | pill/button link → /records/tours/revenue | ↗ another page | unchanged |
| /records | phone | `components/MobileRecords.tsx:72` (glyph L77) | {s.title}{s.desc}→ | whole row/card link → {s.href} | → whole row/card | unchanged |
| /records | phone | `components/MobileRecords.tsx:111` (glyph L112) | Full leaderboard↗ | pill/button link → /records/tours/revenue | ↗ another page | unchanged |
| /records/africas-biggest | desktop | `components/StatBox.tsx:134` | Source ▾ | toggle (details/summary) | #57 ▾/▴ an in-place toggle (Job 1 fix 22 later replaces this footer with P2 "Method ▾") | **Source ▾, the chevron in its own span, turned to ▴ on [open]** |
| /records/africas-biggest | desktop | `records/africas-biggest/page.tsx:451` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/africas-biggest | desktop | `records/africas-biggest/page.tsx:452` | Official charts ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /records/africas-biggest | desktop | `records/africas-biggest/page.tsx:453` | Discography ↗ | pill/button link → /music | ↗ another page | unchanged |
| /records/awards | desktop | `components/AwardExplorer.tsx:94` (glyph L102) | Filters{active ? ` · ${totalShown} shown` : ""}{filtersOpen ? "▲" : "▼"} | toggle (button aria-expanded) | #58 ▾/▴ an in-place toggle (fix 7 names AwardExplorer) | **Filters ▾ / ▴** |
| /records/awards | desktop | `components/AwardExplorer.tsx:164` (glyph L170) | {showAllBodies ? "Show fewer ▲" : `Show all ${ceremonies.length} ▾`} | toggle (button aria-expanded) | #59 ▾/▴ an in-place toggle (fix 7 names AwardExplorer) · Q6 | **Show all {n} ▾ / Show fewer ▴** |
| /records/awards | desktop | `records/awards/page.tsx:151` (glyph L152) | See wins by award body → | pill/button link → /records/visualized#awards | #22 ↗ a button to another page | **See wins by award body ↗** |
| /records/awards | desktop | `records/awards/page.tsx:237` (glyph L238) | ← Career Records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:131` | Every figure links to the page that documents it ↓ | text, not a control | #65 ↓ is kept for downloads · Q8 | **Every figure links to the page that documents it** |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:138` (glyph L153) | {s.num}{s.delta != null && ( <TrendDelta value={s.delta.pct} format="pct" label={s.delta}{ | whole row/card link → {s.href} | #36 → a whole card · Q4, Q18 | **{proof page} → (tile foot)** |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:165` (glyph L172) | {l.name}↗ | text link, external → {l.href} | ↗ another site | unchanged |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:186` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:187` (glyph L188) | Africa's biggest ↗ | pill/button link → /records/africas-biggest | ↗ another page | unchanged |
| /records/by-the-numbers | desktop | `records/by-the-numbers/page.tsx:190` | Official charts ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /records/by-the-numbers and /records/africas-biggest | desktop | `components/TrendDelta.tsx:37` | ▲ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /records/by-the-numbers and /records/africas-biggest | desktop | `components/TrendDelta.tsx:37` | ▼ | text, not a control | not a control: data mark (movement / scrubber) | unchanged |
| /records/cars | desktop | `records/cars/page.tsx:357` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/cars | desktop | `records/cars/page.tsx:358` | By the numbers ↗ | pill/button link → /records/by-the-numbers | ↗ another page | unchanged |
| /records/cars | desktop | `records/cars/page.tsx:359` | Tours & live ↗ | pill/button link → /records/tours | ↗ another page | unchanged |
| /records/cars/{car} | desktop + phone (one layout) | `records/cars/[car]/page.tsx:140` (glyph L156) | {dir === "prev" ? `← ${rankLabel(valueRank(c))}` : `${rankLabel(valueRank(c))} →`}{c.make} | whole row/card link → {`/records/cars/${c.slug}`} | outside: pager (Q3) | unchanged |
| /records/cars/{car} | desktop + phone (one layout) | `records/cars/[car]/page.tsx:281` (glyph L287) | Manufacturer figures ↗ | text link, external → {car.specs.source} | ↗ another site | unchanged |
| /records/cars/{car} | desktop + phone (one layout) | `records/cars/[car]/page.tsx:351` (glyph L356) | Source{car.linkLabel ?? "See Burna in it"}→ | whole row/card link, external → {car.link} | → whole row/card | unchanged |
| /records/cars/{car} | desktop + phone (one layout) | `records/cars/[car]/page.tsx:364` | → | text, not a control | #66 → only on a whole row or card that is a link · Q9 | **the → span deleted; the box reads the same** |
| /records/charts | desktop | `records/charts/page.tsx:204` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/charts | desktop | `records/charts/page.tsx:205` | Live charts today ↗ | pill/button link → /live-charts | ↗ another page | unchanged |
| /records/charts | desktop | `records/charts/page.tsx:206` | Certifications ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| /records/charts and /afrobeats/{artist}/charts | desktop + phone (MobileOfficialCharts embeds it) | `components/ChartExplorer.tsx:368` (glyph L371) | {label}{sortKey === k ? (sortDir === "asc" ? "▲" : "▼") : "↕"} | sort button | outside: sort mark (fix 7) | unchanged |
| /records/charts and /afrobeats/{artist}/charts | desktop + phone (MobileOfficialCharts embeds it) | `components/ChartExplorer.tsx:438` (glyph L446) | Filters{active ? ` · ${view === "table" ? flatRows.length : totalShown} shown` : ""}{filte | toggle (button aria-expanded) | #60 ▾/▴ an in-place toggle | **Filters ▾ / ▴** |
| /records/charts and /afrobeats/{artist}/charts | desktop + phone (MobileOfficialCharts embeds it) | `components/ChartExplorer.tsx:547` (glyph L555) | {label}{sortKey === k ? (sortDir === "asc" ? " ▲" : " ▼") : ""} | sort button | outside: sort mark (fix 7) | unchanged |
| /records/firsts | desktop | `records/firsts/page.tsx:139` (glyph L140) | ← Career Records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/tours | desktop | `components/ToursExplorer.tsx:50` (glyph L71) | ▼ {t.name}{t.years}{t.record && <span className={styles.recordPill}>{RECORD_PILL}</span>}{ | toggle (button aria-expanded) | #62 ▾/▴ an in-place toggle | **tour row caret ▾ shut / ▴ open, by glyph; .caretShut deleted** |
| /records/tours | desktop | `records/tours/page.tsx:189` (glyph L195) | Tickets · Ticketmaster ↗ | pill/button link, external → https://www.ticketmaster.com/burna-boy-t | ↗ another site | unchanged |
| /records/tours | desktop | `records/tours/page.tsx:197` (glyph L203) | Official tour site ↗ | pill/button link, external → https://www.onaspaceship.com/tour | ↗ another site | unchanged |
| /records/tours | desktop | `records/tours/page.tsx:270` (glyph L281) | Where he's performedThe countries he has taken to the stage, on one map {playedCount}count | whole row/card link → /records/tours/map | → whole row/card | unchanged |
| /records/tours | desktop | `records/tours/page.tsx:284` (glyph L293) | Festivals & showsThe festivals and big stages he's played: the headline sets and beyond {a | whole row/card link → /records/tours/festivals | → whole row/card | unchanged |
| /records/tours | desktop | `records/tours/page.tsx:354` (glyph L364) | See all {revenueShows.length}Every show on the list, ranked by reported gross → | whole row/card link → /records/tours/revenue | → whole row/card | unchanged |
| /records/tours | desktop | `records/tours/page.tsx:414` (glyph L415) | ← Career Records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/tours | phone | `components/MobileTours.tsx:207` (glyph L216) | {moreOpen ? SHOW_FEWER : moreShowsLabel(later.length)}{moreOpen ? "▴" : "▾"} | toggle (button aria-expanded) | ▾/▴ an in-place toggle, as built on 8 Oct (#456) · N-3 | unchanged |
| /records/tours | phone | `components/MobileTours.tsx:252` (glyph L280) | {t.name}{t.record && <span className={styles.recordBadge}>{RECORD_PILL}</span>}{t.years}·  | toggle (button aria-expanded) | #61 ▾/▴ an in-place toggle | **tour row caret ▾ shut / ▴ open** |
| /records/tours | phone | `components/MobileTours.tsx:325` (glyph L331) | {r.title}{r.sub}→ | whole row/card link → {r.href} | → whole row/card | unchanged |
| /records/tours | phone | `components/MobileTours.tsx:354` (glyph L360) | Tickets · Ticketmaster↗ | pill/button link, external → https://www.ticketmaster.com/burna-boy-t | ↗ another site | unchanged |
| /records/tours/festivals | desktop | `records/tours/festivals/page.tsx:116` (glyph L117) | Where he's performed ↗ | pill/button link → /records/tours/map | ↗ another page | unchanged |
| /records/tours/festivals | desktop | `records/tours/festivals/page.tsx:175` (glyph L176) | ← Tours | pill/button link → /records/tours | outside: back link / pager (Q3) | unchanged |
| /records/tours/festivals | phone | `components/MobileFestivals.tsx:81` (glyph L84) | Where he's performed ↗ | pill/button link → /records/tours/map | ↗ another page | unchanged |
| /records/tours/map | desktop | `components/TourMapCard.tsx:89` (glyph L98) | {l.label}{l.peak !== undefined && <> No. {l.peak}</>}{l.sub && <span className={styles.lin | whole row/card link → {l.href} | → whole row/card | unchanged |
| /records/tours/map | desktop | `components/TourMapDesktop.tsx:431` (glyph L432) | Show on the map → | button, no href | #47 no glyph: a button that acts on this page | **Show on the map** |
| /records/tours/map | desktop | `components/TourMapDesktop.tsx:501` (glyph L502) | ← Back to tours | pill/button link → /records/tours | outside: back link / pager (Q3) | unchanged |
| /records/tours/map | desktop | `components/TourMapDesktop.tsx:504` (glyph L505) | Festivals & shows ↗ | pill/button link → /records/tours/festivals | ↗ another page | unchanged |
| /records/tours/map | desktop | `components/TourMapDesktop.tsx:507` (glyph L508) | Highest-grossing shows ↗ | pill/button link → /records/tours/revenue | ↗ another page | unchanged |
| /records/tours/map | phone | `components/TourMapPanel.tsx:70` (glyph L79) | {l.label}{l.peak !== undefined && <> No. {l.peak}</>}{l.sub && <span className={styles.lin | whole row/card link → {l.href} | → whole row/card | unchanged |
| /records/tours/revenue | desktop | `records/tours/revenue/page.tsx:225` (glyph L226) | Highest-grossing artists by country → | pill/button link → /records/tours/revenue/countries | #24 ↗ a button to another page | **Highest-grossing artists by country ↗** |
| /records/tours/revenue | desktop | `records/tours/revenue/page.tsx:228` (glyph L229) | The grosses visualised ↗ | pill/button link → /records/visualized#grosses | ↗ another page | unchanged |
| /records/tours/revenue | desktop | `records/tours/revenue/page.tsx:321` (glyph L322) | ← Tours | pill/button link → /records/tours | outside: back link / pager (Q3) | unchanged |
| /records/tours/revenue | phone | `components/MobileRevenue.tsx:238` (glyph L240) | Artists by country→ | pill/button link → /records/tours/revenue/countries | #23 ↗ a button to another page | **Artists by country ↗** |
| /records/tours/revenue/countries | desktop | `components/RevenueCountries.tsx:420` (glyph L421) | ← Highest-grossing shows | pill/button link → /records/tours/revenue | outside: back link / pager (Q3) | unchanged |
| /records/tours/revenue/countries | desktop | `components/RevenueCountries.tsx:566` (glyph L567) | ← Highest-grossing shows | pill/button link → /records/tours/revenue | outside: back link / pager (Q3) | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:548` (glyph L549) | Africa's biggest ↗ | pill/button link → /records/africas-biggest | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:578` (glyph L579) | Every certification ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:604` (glyph L605) | Every award ↗ | pill/button link → /records/awards | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:625` (glyph L626) | The live board ↗ | pill/button link → /live-charts | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:646` (glyph L647) | The performance map ↗ | pill/button link → /records/tours/map | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:663` (glyph L664) | Full leaderboard ↗ | pill/button link → /records/tours/revenue | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:706` (glyph L707) | All certifications ↗ | pill/button link → /certifications | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:750` (glyph L751) | All chart positions ↗ | pill/button link → /records/charts | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:787` (glyph L788) | Africa's biggest ↗ | pill/button link → /records/africas-biggest | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:804` (glyph L805) | Every award ↗ | pill/button link → /records/awards | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:831` | ← Career records | pill/button link → /records | outside: back link / pager (Q3) | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:832` | By the numbers ↗ | pill/button link → /records/by-the-numbers | ↗ another page | unchanged |
| /records/visualized | desktop | `records/visualized/page.tsx:833` (glyph L834) | Africa's biggest ↗ | pill/button link → /records/africas-biggest | ↗ another page | unchanged |
| /search | desktop + phone (one component) | `components/SearchResults.tsx:265` | ← Home | pill/button link → / | outside: back link / pager (Q3) | unchanged |
| /search | desktop + phone (one component) | `components/SearchResults.tsx:266` | Browse career records ↗ | pill/button link → /records | ↗ another page | unchanged |
| /search | desktop + phone (one component) | `components/SearchResults.tsx:267` | Methodology ↗ | pill/button link → /methodology | ↗ another page | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:207` (glyph L213) | {downloading ? "Preparing…" : "↓ Download PNG"} | download button | ↓ download | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:215` (glyph L221) | Post on X ↗ | pill/button link, external → {`https://x.com/intent/tweet?text=${enco | ↗ another site | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:223` (glyph L229) | WhatsApp ↗ | pill/button link, external → {`https://wa.me/?text=${encodeURICompone | ↗ another site | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:253` (glyph L254) | See the full record → | text link → {card.href} | kept as built by fix 132 | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:266` | ← Home | pill/button link → / | outside: back link / pager (Q3) | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:267` (glyph L268) | By the numbers ↗ | pill/button link → /records/by-the-numbers | ↗ another page | unchanged |
| /share | desktop | `components/StatCardMaker.tsx:270` | Open data API ↗ | pill/button link → /api | ↗ another page | unchanged |
| /share | phone | `components/MobileStatCards.tsx:83` | Save or share ↓ | text, not a control | ↓ download (label of the /share save button) | unchanged |
| /share | phone | `components/MobileStatCards.tsx:83` | Download PNG ↓ | text, not a control | ↓ download (label of the /share save button) | unchanged |
| /timeline | desktop + phone (one layout) | `timeline/page.tsx:136` | See the record → | text, not a control | → the whole entry is one link (label built outside the Link: known gap) | unchanged |
| /updates | desktop | `components/FollowPanel.tsx:87` (glyph L88) | The Saturday digest ↑ | in-page jump → #digest | #48 no glyph: an in-page jump (#digest) | **The Saturday digest** |
| /updates | desktop | `components/FollowPanel.tsx:98` (glyph L99) | ⤓ Install the app | button, no href | #49 no glyph: an action on this page (⤓ is not an Option A glyph) | **Install the app** |
| /updates | desktop | `components/FollowPanel.tsx:103` | → | text, not a control | not a control: iOS install instruction prose | unchanged |
| /updates | desktop | `components/FollowPanel.tsx:107` (glyph L108) | Follow on X ↗ | pill/button link, external → {X_URL} | ↗ another site | unchanged |
| /updates | desktop | `components/FollowPanel.tsx:110` (glyph L111) | RSS feed ↗ | pill/button link → /rss.xml | ↗ another page | unchanged |
| /updates | desktop + phone (one component) | `components/SubscribeBox.tsx:118` (glyph L119) | This week's entries ↓ | text link → {entries} | #50 no glyph: an in-page jump (#entries) | **This week's entries** |
| /updates | desktop | `components/UpdatesFeed.tsx:108` (glyph L119) | {DATE_FMT.format(asDate(u.date))}{mark && <KindMark kind={mark} />}{u.category}{u.text}↗ | whole row/card link → {u.href} | #37 → a whole row · Q18 | **{update row} →** |
| /updates | phone | `components/MobileUpdates.tsx:97` | RSS ↗ | text link → /rss.xml | outside: back bar chrome (fix 7) | unchanged |
| every content page (36 routes) | desktop + phone (one component) | `components/KeepExploring.tsx:101` (glyph L112) | {l.title}{l.desc}→ | whole row/card link → {l.href} | → whole row/card | unchanged |
| every page (layout, 2 July only) | desktop + phone | `components/BirthdayCelebration.tsx:131` | his story → | pill/button link → /about | #25 ↗ a text link to another page | **his story ↗** |
| every page (layout) | desktop (chrome) | `components/BackToTop.tsx:63` (glyph L70) | ↑ | button, no href | outside: chrome (fix 7) | unchanged |
| every page (layout) | phone (chrome) | `components/MobileNavSheet.tsx:202` (glyph L208) | Box office ↗ | text link → /records/tours/revenue | outside: chrome (fix 7) | unchanged |
| every page (layout) | phone (chrome) | `components/MobileTabBar.tsx:41` | ▲ | text, not a control | outside: chrome (tab-bar icon) | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:70` | ↗ | text, not a control | ↗ the method link when it leaves the page (J0-9, fix 11) | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:110` (glyph L111) | Open data ↗ | pill/button link → {openData} | ↗ another page | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:129` (glyph L130) | Method ▾ | toggle (details/summary) | ▾/▴ an in-place toggle (J0-9 P2 "Method ▾") | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:153` (glyph L154) | Download CSV ↓ | download link | ↓ download | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:159` (glyph L160) | JSON ↗ | text link → {data.json} | ↗ another page | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | desktop | `components/Provenance.tsx:163` (glyph L164) | {data.licence.name}↗ | text link, external → {data.licence.url} | ↗ another site | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | phone | `components/MobileProvenance.tsx:60` | ↗ | text, not a control | ↗ the method link when it leaves the page (J0-9, fix 11) | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | phone | `components/MobileProvenance.tsx:107` (glyph L108) | Method ▾ | toggle (details/summary) | ▾/▴ an in-place toggle (J0-9 P2 "Method ▾") | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | phone | `components/MobileProvenance.tsx:132` (glyph L133) | Download CSV ↓ | download link | ↓ download | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | phone | `components/MobileProvenance.tsx:140` (glyph L141) | JSON ↗ | text link → {data.json} | ↗ another page | unchanged |
| every source-note host (P1 home, P3 data pages; P2 on /primitives only) | phone | `components/MobileProvenance.tsx:146` (glyph L147) | {data.licence.name}↗ | text link, external → {data.licence.url} | ↗ another site | unchanged |
| meta descriptions | search snippet | `lib/searchSnippets.ts:144` | → | text, not a control | not a control: prose / data range | unchanged |
| meta descriptions | search snippet | `lib/searchSnippets.ts:145` | → | text, not a control | not a control: prose / data range | unchanged |

## Appendix B: toggles and icon controls whose mark is not a text arrow (13 rows, all unchanged)

The glyph census cannot see a `+`/`−` expander or an arrow drawn in SVG. These come from a second parser pass over every control that holds an `<svg>`, and every toggle (`summary`, or `button[aria-expanded]`). The toggles that carry an arrow glyph are in Appendix A. Lines are on this branch after J0-4.

| Page | Layout | File:line | Control and mark | Element | Rule | New |
|---|---|---|---|---|---|---|
| /music/{song}, /music/albums/{album}, /dai-dai, /dai-dai/es; phone FAQ sections, MobileAfricasBiggest, MobileAwards, MobileCerts | desktop + phone (one component, 8 hosts) | `components/FaqList.tsx:97` | "{question}" with a `+` / `−` state mark | toggle (button aria-expanded) | `+`/`−` is not an arrow glyph, and fix 7 does not name FaqList · Q19 | unchanged |
| /records/tours/festivals, /records/firsts | phone (MobileFestivals, MobileFirsts) | `components/MobileSections.tsx:54` | "{section} ({n})" with `+` / `−` | toggle (button aria-expanded) | as above · Q19 | unchanged |
| /certifications, /afrobeats/{artist} | phone | `components/MobileCerts.tsx:731` | badge row "+{n}" / "− less" | toggle (button aria-expanded) | a "+ N more" count, no arrow (fix 7) | unchanged |
| /records/charts, /afrobeats/{artist}/charts | phone | `components/MobileOfficialCharts.tsx:559` | "+{hidden}" / "− less" | toggle (button aria-expanded) | a "+ N more" count, no arrow (fix 7) | unchanged |
| /records/charts, /afrobeats/{artist}/charts | phone | `components/MobileOfficialCharts.tsx:470` | the whole release header, no mark | toggle (button aria-expanded) | a toggle may carry ▾/▴ or nothing | unchanged |
| /live-charts, /afrobeats/{artist}/live | desktop | `components/LiveReleaseBlock.tsx:75` | SVG chevron, turned by `.release[open] .caret { transform: rotate(180deg) }` | toggle (details/summary) | already the ▾/▴ shape; the desktop twin of MobileLiveCharts' caret (#56) | unchanged |
| / | desktop | `components/StatCardButton.tsx:117` | icon button "Make a stat card for {label}", SVG tray and up-arrow | button, no href | an icon, not a label glyph | unchanged |
| phone deep pages | phone | `components/MobileDeepPage.tsx:301` | icon link to /share, "Make a stat card", the same SVG | text link → /share | an icon | unchanged |
| /music/{song} | phone | `music/[song]/page.tsx:496` | icon link to /share, the same SVG | text link → /share | an icon | unchanged |
| /music/albums/{album} | phone | `music/albums/[album]/page.tsx:395` | icon link to /share, the same SVG | text link → /share | an icon | unchanged |
| /dai-dai, /dai-dai/es | desktop + phone (one component) | `components/DaiDaiReplay.tsx:721` | play / pause / replay SVG | button, no href | media transport, outside the rule | unchanged |
| /dai-dai, /dai-dai/es | desktop + phone (one component) | `components/DaiDaiVideoPoster.tsx:63` | play triangle SVG | button, no href | media transport | unchanged |
| several | both | close ×: `MobileNavSheet.tsx:131`, `MobileTourMap.tsx:349`, `TourMapCard.tsx:61`, `TourMapDesktop.tsx:364`, `TourMapPanel.tsx:43`; search: `MobileNavSheet.tsx:151`, `SearchPalette.tsx:295`, `primitives/page.tsx:124`; filter: `MobileCerts.tsx:958`; ticket: `Nav.tsx:116` (chrome) | not arrow-shaped | buttons and links | not arrows; listed so the sweep is complete | unchanged |
