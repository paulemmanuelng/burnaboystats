# Design response: tour map, map links and three phone screens

**Answers:** `docs/design/tour-map-and-phone-screens/README.md` (brief of 29–30 Sep 2026, code at `main` `6aae00c8`).
**Status:** Jobs 1–4 drawn. **Change list final (§9 and §13), revised 30 Sep after the review "Fixes before approval"**: every item it named is fixed in place under its own number, and the changes it found unlisted are items 65–89 (§14). Job 5 (optional) is left for now, at the owner's request.
**Owner decisions (30 Sep 2026):**
- h1: the split word stays gold (item 29). The split word only; nothing else in gold.
- Keep exploring: the label is muted site-wide; the arrows stay gold (item 56).
- Back-bar badges: gold, as on the sibling pages (item 43).
- The five-tab bar stays on `/curator`, `/press` and the correction, as on `/about`, `/faq` and `/embed`: none has a single main action for a bottom bar (item 58).
- Dai Dai inset: option (c), a fixed 200 × 172 at every width from 901 up (item 60).
**Canvases:**
- Job 2: `designs/desktop/Map Links.dc.html` (light versions, the 1024 check, the tickets panel); edits in place in `Records - Tours.dc.html`, `Records - Festivals.dc.html` and Deep Pages 12 and 13.
- Job 3: `designs/mobile/Curator Press Correction - Mobile.dc.html` (three full-length screens in both themes, the Copy states, the tab-bar proposal), drawn from `CPC Phone.dc.html`.
- Job 4: edits in place in `dai-dai-replay-map.html` and `Dai Dai Redesign.dc.html`, with the 1024 and `/es` checks at the end of the Redesign file. `Dai Dai Replay States.dc.html` reads the same map file, so it follows.

**Job 1 canvases:**
- `designs/desktop/Tour Map.dc.html`: full pages, desktop 1440 and phone 402 in both themes, the 1024 check, and the map fills with their contrast.
- `designs/desktop/Tour Map States - Desktop.dc.html` and `Tour Map States - Phone.dc.html`: every state §11 names.
- Parts: `TM Desktop.dc.html`, `TM Phone.dc.html`, `TM Card.dc.html`, and `tour-map.js` (draws the site's own geometry: Natural Earth 110m, Equal Earth, the 900 × 470 map-unit box, fitted from the brief's own Europe box so every view box below is in the site's units).

**One deviation from §11:** the brief puts every Job 1 artboard in one file. With 60-odd live maps in one canvas the page stalls, so the states are in two companion canvases linked from the top of `Tour Map.dc.html`. Nothing else differs. `Records - Tour Map.html` is superseded and carries a pointer line.

Dashed magenta outlines are live-data slots. Every figure is one, sized for its longest real value (§6).

---

## 1. The idea in one line

**A map that answers "did he play here, when, and how big", honestly, then sends you on.** On the phone the unit is the region, not the zoom. On desktop the small places get one fixed close-up. The card never floats over anything: on desktop it lives inside the map frame, on the phone it sits in the page flow under the map.

## 2. Phone: region views, not a zoom

**Views chosen: World · Europe · Africa · Caribbean.** The data supports exactly these four (§3.5 A): every big country already reads at World, and the small ones cluster in Europe, Africa and the Caribbean. Asia's one country (the UAE) and the Americas' three and three stay on World.

| View | Box (lon, lat) | Map units (x, y, w, h) | At 364 × 260 |
|---|---|---|---|
| World | the Antarctica-cropped box | 0, 10, 900, 405 | 0.404 px/unit, letterboxed |
| Europe (all 19, Turkey included) | −11° to 45°, 34° to 71° | 423.2, 31.0, 129.7, 92.4 | 6.9× · Belgium 21 × 14 |
| Africa + Mauritius | −18° to 58°, −35° to 37.5° | 403.3, 112.7, 191.9, 237.7 | 2.7× · Rwanda 5 × 7 |
| Caribbean only | −80° to −59°, 9.5° to 27.5° | 248.1, 143.7, 52.7, 59.4 | 10.8× · closest dots 17.9 px |

- **Europe includes Turkey.** The Dai Dai box cuts it in half; a played country cut in half is a false map.
- **Guyana and Suriname stay on World,** with nearest-tap (§4). Adding them to the Caribbean view drops the closest dots from 17.9 to 12.0 px and the chip would have to say "Caribbean & Guianas". Not worth it for two countries that nearest-tap reaches.
- **One frame height for every view: 364 × 260** (337 × 260 at 375). The list below never jumps when a chip changes.
  - 300 (the Dai Dai height) was tested. It gains Africa 0.4× and the Caribbean 1.7×, but World would letterbox 136 px of empty sea and the frame would end at y 729 before the hint strip. 260 is the balance.
  - **World is letterboxed** top and bottom with the sea colour (48 px each). It reads as ocean, not as a gap, because the frame is the sea.
- **The first-screen sum at 402 × 874** (drawn on artboard A3): 54 status · 69 back bar · 20 + kicker 13 + 10 + h1 40 · 16 + figures 69 · 10 + caveat 54 · 16 + chips 44 · 12 + frame 262 → **the map ends at y 689**, 76 px above the limit of 765. At 390 × 844 the same stack ends at y 677 against 735.
- **Played countries from another region stay lit** inside a view (Morocco in Europe, southern Europe in Africa, Florida in the Caribbean), and tapping one keeps the view and opens that country's own panel.
- **Home views:** Europe, Africa or Caribbean for those regions; World for Asia, both Americas and Oceania. Region rows, deep links and keyboard moves all use the home view.

**Chips.** Four in one row, 44 px, mono 700 11 px uppercase.
- At 402: 15 px padding, 8 px gaps, 0.1em tracking: 356 px of 366.
- At 375: 11 px padding, 6 px gaps, 0.06em tracking: 331 px of 339. One line, no scrolling row, no shortened labels.
- **On-state: an ink fill with a `--bg` label**, the Dai Dai toggle's pattern. Not the gold wash of the filter chips: a view is not a live figure or an action result, and rule 3 keeps gold for those.

**Controls.** **+ and − are dropped on the phone.** The region views do what the zoom tried to do, and they land where the reader expects (the zoom today lands in the Gulf of Guinea). The strip under the map now holds only the hint, in Geist: *"Tap a country for its shows. A tap near a small place counts."* In a region view: *"Europe view. Tap a country for its shows."*

## 3. Desktop: the first screen and the close-up

- **The whole map is on the first screen at 1440 × 900** (artboard A1, fold marked), with the live values: the 49 px breadcrumb bar, the live h1 (78 px at 1440, 57 at 1024), and the lede on `--type-lede` (20 px at ≥ 900). The h1 and the lede share one row and the figures run as one strip under them. A1 measures the map's bottom edge in the browser and prints it beside the fold line; nothing in that sum is typed. The phone map end is measured the same way (about 687 at 402 wide, 699 at 390).
- **Close-up, bottom-left, inside the frame: 260 × 224 at 1440, 200 × 172 at 1024.** Per the brief's corner test this hides no played country and no dot at either width. It frames **only the small-country cluster** (map units x 426–501, y 56–118) at **2.6×**: Belgium 25 × 17 px. The UK, France, Germany, Italy and Spain come along; the Nordics, Romania, Greece and Turkey stay on the world map, where they are already big enough.
  - Label: "Western Europe", mono 11 px, muted, in its own 22 px band so it covers nothing.
  - A dashed hairline on the world map marks the area it shows.
  - Hover, focus and selection show in both at once. It shares the map's one Tab stop.
- **No Caribbean close-up.** Nearest-click (§4) and the 8 px dots with a 1 px sea-coloured outline separate the overlapping pair (Barbados and Saint Lucia, 5.3 px apart). A second box would have to go in a corner that hides South America.
- **+ and − are dropped on desktop too.** With the close-up and nearest-click there is nothing left for them to reach, and they sat in the corner the card now uses. Listed in §9.

## 4. Nearest tap, both layouts

A tap or click selects the nearest played country or dot **when the tap is within 22 screen px of any played outline or dot**, measured to a dot's edge or a shape's outline, **even if the tap lands on unplayed land**. Only a tap beyond 22 px of all of them dismisses. Distance wins, so a tap on Congo or Burundi beside Rwanda (5 × 7 px), or on Togo beside Benin, selects them: those are the cases the rule exists for.

## 5. The card and the panel

**Content, top to bottom** (drawn for all eight cases on the desktop-states canvas):
1. Flag and name (Anton 19 px desktop, 24 px phone). Kosovo has no flag and gets none. Region under it, mono 11 px, **muted** (was gold).
2. **Documented** (label), then the documented line in the brief's exact strings. Zero segments are left out. Absent for the nine event-line-only countries.
3. **Biggest reported night** or **Biggest reported stand** (label), then venue, city · date · tickets. Absent for 48 countries. No em dash, no "not reported": the line simply isn't there.
4. **From the map** (label), then the map's own event lines. For the nine with no row the label reads **Known from**, because the event lines are the whole content.
   - **"…and more" is gone and nothing replaces it.** The documented line is the count; the link rows are the way on.
5. **Link rows,** each a full-width row ending in →: *Tour dates on the Tours page* · *Festivals & shows* · *Certifications in {country}* · *Chart peak here: No. {n}* with the chart's name under it. Only the rows the data supports appear (§3.5 E rules). Rows are 36 px on desktop, 44 px on the phone.
6. Caveat, `--type-caption`: *"Documented shows only. Tour itineraries on this site start in {2018}."*

**Where the country's details live without the map.** In the region list: on desktop every country name is a button that pins its card; on the phone the region rows switch the map. The card's text is also in the HTML (the build renders all 57 card bodies as a hidden list keyed by `?country`, so the text is in the page for search and screen readers).

**Desktop placement rule.** The card lives **inside the map frame, top-right, 9 px from the edges, 300 wide** (280 at 1024). If the selected country falls under that rectangle it moves to **top-left**: that is Australia, New Zealand and the UAE. It never covers the masthead, the h1 or the selection. Drawn with the UK (northern) and Canada (a corner country, clear of the top-right card).
- **Height rule.** The card is never taller than the frame minus 18 px (9 px top and bottom): **max 503 px at 1440, 406 px at 1024.** Most cards fit. The long ones (the US, the UK and Canada at 1024) scroll inside the card, with `overscroll-behavior: contain` so the page doesn't move and the caveat reached at the end. The card never spills over the legend below the frame.
- **Hover or focus previews** (no links, "Click to pin · links inside"); **click or Enter pins**. The pinned card takes the pointer and has a close button; Escape or a click on the sea closes it; a click on another country moves the pin.

**Phone placement rule.** The panel sits **in the page flow, directly under the map strip**, full width, never over the heading or the map. Close is a 44 px button; the browser's back button also clears it once `?country=` is in the address. The page keeps 160 px of space under the last row so nothing sits under the fixed bar.

**Deep links.**
- `?country=gb`: desktop opens with the UK card pinned; phone opens on the UK's home view (Europe), panel open, scrolled so the chips, map and panel top are in view.
- `?country=pe` (a real country, no documented show): World, nothing selected, one line where the panel would be: *"No documented show in Peru."* with a close control and no links.
- `?country=xx`: loads as if there were no parameter and drops it from the address.

## 6. Headline figures

Desktop: one strip of six under the h1 and lede. Phone: three cells in the hero, with the biggest night left to the card.

| Figure | Label | Slot sized for |
|---|---|---|
| 57 | countries | 2 digits |
| 7 | regions | 1 digit |
| 156 | documented shows | 3 digits |
| 96 | cities | 3 digits |
| 2014–2026 | years documented | 9 characters |
| 58,973 | Biggest night, by reported tickets · London Stadium · 29 Jun 2024 | 6 characters + a 60-character label |

Caveat line once, under the strip, exactly as the brief gives it, with the year as a slot.

**Longest real case per slot** (the card): documented line = the US, 94 characters (breaks after "appearances ·" at 300 wide); biggest line = Canada's stand, 97 characters (breaks after "Toronto ·"); event line = "FIFA World Cup Opening Ceremony, Mexico City (2026)", 51 (breaks after "Ceremony,"); name = "United Arab Emirates", 20 (one line at 19 px).

## 7. Colour, focus and keyboard

**Four new token pairs** (`globals.css`, light | dark). The reason for each is the brief's own measurement: today's played fill has no light value and today's border doesn't theme.

| Token | Light | Dark | Measured |
|---|---|---|---|
| `--map-played` | `#a3742a` | `#a07820` | vs not played: **3.44** (was 1.55) · **3.73** (was 2.58). vs the sea: 4.13 · 4.56 |
| `--map-land` | `#efeae1` (= `--bg-soft-2`) | `#26262c` | vs the sea: 1.20 · 1.22 (was 1.08), so land still reads as land in dark |
| `--map-border` | `rgba(23,20,15,.22)` | `rgba(245,244,240,.14)` | on land 1.60 · 1.53; on played 1.40 · 1.23 (was **13.5** on paper). The data now outranks the borders |
| `--map-sea` | `#ffffff` (= `--bg-soft`) | `#141416` (= `--bg-soft`) | an alias, so the map's ground can move without touching every card |

- **Hover** keeps `--gold-hit` (an action): 2.39 : 1 against played on paper, 2.80 in dark. It is a state, not the data mark, and it is never the only cue: a hovered country also opens its preview card.
- **Selection:** an outline in `--text` drawn over the neighbours and under the country's own fill, as the Dai Dai map does: 4.45 : 1 on played (paper), 3.67 (dark). Switzerland keeps its colour and still shows as picked.
- **Focus ring:** 2px `--gold` drawn 3px outside the outline, the country refilled on top, so the ring shows on a 7 px country and around an 8 px dot: 5.44 : 1 on the sea (paper), 10.49 (dark). Drawn on Belgium, Barbados and a country in the close-up.

**Keyboard map.**
- **Tab:** one stop into the map (the close-up shares it). The first Tab on the page lands on **"Skip to country list"** (gold ramp, 44 px, visible on focus).
- **Arrows:** through all 57 in region order, then by name.
- **Home / End:** first / last. **Enter:** pin. **Escape:** clear.
- **Phone with a keyboard:** when the next country is outside the current view, the map switches to its home view and the chip becomes current, instantly under reduced motion. A country from another region that is already visible doesn't switch it.

**Screen-reader lines.**
- A country: *"Nigeria, Africa: 1 tour date, 1 festival or one-off appearance, 1 city, 2016 to 2021."* Nine countries read their event line instead: *"Benin, Africa: known from WeLoveYa Festival, Cotonou, 2025."*
- A view change: *"Europe view."*
- A pin: *"Pinned. Links follow."* A clear: *"Selection cleared."*

**Legend** (both themes, on the fills board): *"Countries where a show is documented"* · *"Small islands and Kosovo, shown as dots"* · *"No documented show"*. Each swatch shows the fill it explains, never gold.

## 8. Interaction notes

- Hover previews, click pins; nothing exists only on hover.
- Deep links set and clear with the selection; back clears.
- A view change is instant under reduced motion, and a 0.2s cross-fade otherwise. Nothing zooms or slides.
- The region row on the phone scrolls the map into view after switching it.
- The find box (desktop) filters the rows as you type, and a match selects on the map: *"Toronto · Canada · {5 documented tour dates}"*, *"No documented show in ‘Lima’."*

## 9. Change list, Job 1 (final, 30 Sep 2026)

**Moves and removals**
1. + and − removed on the **phone** (the region views replace them).
2. + and − removed on **desktop** (the close-up and nearest-click replace them).
3. "…and more" removed from the card and panel; nothing replaces it.
4. Floating card removed. Desktop: inside the map frame, top-right. **It moves top-left when its rectangle would cover the selected country**: Australia at every width, New Zealand at 1024 (the UAE sits at x 738–752 at 1440, clear of the 849–1149 card column, so it never flips). While a top-left card is pinned, the close-up hides (B17). The card is capped at the frame height minus 18 px (503 at 1440, 406 at 1024); **about 11 cards** exceed that at 1024 and scroll inside the card. The link rows sit **above** the event lines, so what scrolls out of view is the event lines and the caveat, never the way on; there is no `overscroll-behavior: contain`, so the wheel still scrolls the page at the card's end. Phone: in the page flow under the map.
5. Desktop head, re-fitted with the live values (the 49 px bar, the live h1, the lede on `--type-lede`, 20 px at ≥ 900): h1 and lede in one row, the figures strip under them, so the whole map is on the first screen at 1440 × 900. A1 prints the measured map end; the phone A3 map end is measured too, not typed.
6. The phone keeps the build's bar, "Festivals & shows", **without** a trailing ↗, as live (the old "Open the map" opened the page you're on).

**Additions**
7. Region views on the phone: World · Europe · Africa · Caribbean, 364 × 260.
8. Desktop close-up, Western Europe, 260 × 224 (200 × 172 at 1024), bottom-left. Its label band sits inside the box, so it magnifies **2.47×** (Belgium 24 × 16). **Build note:** the close-up reuses the one map's shapes (`<use>`, or a second viewBox on the same group), or draws only the ~17 cluster shapes. Never a second full map, which would add about 43 KB gzipped.
9. Nearest tap / click, both layouts: **within 22 px of any played outline or dot, select the nearest one**, even over unplayed land; dismiss only beyond 22 px of all of them (§4).
10. Headline figures: documented shows, cities, years documented, biggest night, with the caveat line. The biggest night's **venue and date are slots**, set in Geist under the mono label. Phone: the cell holding "{2014–2026}" is widened so the range stays on one line at 390 and 375, and the phone hero keeps its lede "{57} countries across {7} regions." (on `--type-lede`), so the region count stays in the hero.
11. Desktop find box, "Find a country or city".
12. Desktop country names become buttons, **24 px** tall (the mouse target); region names stay at the approved **17 px** (D-06 guards it). Region rows light their countries.
13. Phone region rows switch the view. **The row's header line is the button** (region name and count), labelled "Show {Africa} on the map"; the country names sit outside it. No gold "Show" / "On map" label: the current row is marked by `--bg-raised` and the 3 px ink rule only, and the map is not dimmed (C11 now marks the Caribbean row, inside its frame, with Florida still lit).
14. Skip link, "Skip to country list": the **first stop inside the main content, before the map**. The site's global "Skip to content" stays the first Tab on the page (B9).
15. `?country=` deep links, including the "No documented show in {country}" line.

**Rewordings**
16. Phone hint → *"Tap a country for its shows. A tap near a small place counts."* (Geist, not mono).
17. Desktop lede, in full → *"The countries Burna Boy has taken to the stage, from arena tours and stadium nights to festival headline sets. Pick a country on the map or in the list for its shows."* It keeps the artist's name above the map and drops the completeness claim "Every".
18. Desktop legend → the three strings in §7. **Test change:** "Territories too small to shade" → "Small islands and Kosovo, shown as dots".
19. Phone footnote → *"{Eight} small places, {six} Caribbean islands plus Mauritius and Kosovo, are shown as dots. The list above names every country."* Both counts are slots (the six is the derived Caribbean dot count). "Too small to draw as shapes" is dropped: it was false for Kosovo, which has a 110m shape the site's shape file drops for want of an ISO id. Drawn on the full-length phone frame. **Test change:** the `tourMap.test.ts` check that reads the footnote comment in `MobileTourMap.tsx`.
20. Desktop note, in full → *"Compiled from his tours, festivals and one-off shows, cross-checked against press and setlist records. Only documented shows are counted. For dates, venues and grosses, see the Tours page."* It drops "Natural Earth 110m", rewords "Only verified shows are listed" and "For the full itinerary with dates…", and keeps the Tours link **gold** (inline links are gold).
21. Card: "Known from" label for event-line-only countries.

**Gold → ink (rule 3)**
22. The "57" count figure → ink.
23. Phone region counts → ink.
24. Phone badge → "{57} countries" in **`--gold`**, as on every sibling back-bar page (owner decision of 30 Sep).
25. Card region label → muted.
26. Kicker "Live worldwide" → muted text with the ember tick.
27. Card border and arrow → `--rule`, no arrow.
28. Legend swatch borders → the new fills.
29. ~~h1 "performed" → ink~~ **Owner decided 30 Sep: keep the gold split word**, as on every other page ("performed", "Curator", "Data Kit", "to bots?"). The h1's split word only; nothing else in gold. Drawn: gold ramp in dark, `--gold` #945e00 in light.

**Tokens**
30. `--map-played`, `--map-land`, `--map-border`, `--map-sea`, as in §7. These four pairs are the only new tokens. `--gold-word` and `--gold-fill-bg` in the canvases are stand-ins for the existing `.inkText` / `.gold` and `.btnPrimary`, not new tokens.
30a. **Hover:** `--gold-hit` fill **plus a 1.5 px `--text` outline**. `--gold-hit` alone is 2.39 : 1 (light) and 2.80 : 1 (dark) against `--map-played`, under 3 : 1; the outline carries the 3 : 1. The fills board row shows it.

**Tests that change**
31. The desktop legend test (item 18); the phone footnote test in `tourMap.test.ts`, which reads the comment in `MobileTourMap.tsx` (item 19); `tests/ui/mapKeyboardCard.test.tsx`, the tour-map half: the per-country Tab stops and the floating card change with items 4 and 9; D-06 (17 px) stays green because the region-name size doesn't change.
32. "…and more on any country with more than two tour dates" → *the documented line shows on any country with a row*. The replacement test checks the **derived counts** (for example, Belgium "3 tour dates" from `tours.ts`), not only that a line exists.

**Typed figures to derive** — now slots: the h2 "{Seven} regions, {six} continents" on both layouts (live derives both words); the years inside the card's event lines; the biggest night's venue and date; the footnote's two counts.

**Folds** — none.

**Where my copy differed from the excerpts in `artboards/`** — none found for Job 1.

**Sample data:** `tour-map-data.js` had four stale event lines against `performedCountries.ts`; refreshed from main (the US now reads Citi Field (2023); Canada, Bell Centre (2024 & 2025); the Netherlands, Rotterdam Ahoy (2022 & 2026); Spain, O Beach, Ibiza (2026) / FITZ, Madrid (2025)). **The build reads event lines from `performedCountries.ts`**; the canvas file only sizes the slots.


---

## 10. Job 2: getting to the map

**Phone `/records/tours`: "More from the road"** (Deep Pages 12, edited in place; light version on Map Links §1)
- Directly under the last tour row, before the footnote: where a reader finishing the list arrives. The bar stays "Tickets · Ticketmaster ↗".
- An h2 in the label style, "More from the road", then a `nav` of three rows, map first: **Where he's performed** · **Revenue per show** · **Festivals & shows**, each with its sub-line verbatim from §4.2 in Geist 13 px, muted, every figure a slot.
- Links, not expanders: the whole row is the link, it ends in →, it presses to `--bg-raised` (drawn on the second row). 64 px rows. No ▸.
- The "57 Countries" tile stays unlinked (§4.3).
- **The artboard's never-built hero pill "Where he's performed ↗" is removed** from Deep Pages 12. The group is the route; two map links on a short page compete.

**Desktop `/records/tours`: the cards row** (`Records - Tours.dc.html`, edited in place; light and 1024 on Map Links §2)
- Two cards in one row, 20 px gap, in the Festivals card's style (Anton 24 title, muted description, a sub-line in ink with its slots, →): **Where he's performed**, then **Festivals & shows**.
- Map card: "The countries he has taken to the stage, on one map" · "{57} countries documented · {7} regions".
- Festivals card: gains "{59} documented appearances". Its description is reworded (see §13): "Every festival & big stage he's played" was a completeness claim.
- The tickets panel drops "Where he's performed ↗". It holds only the two outbound links.
- **1024:** the two cards share 944 px (462 each); both titles stay on one line; the grid aligns the rows to the taller card.

**`/records/tours/festivals`: the map link** (`Records - Festivals.dc.html` and Deep Pages 13, edited in place; light versions on Map Links §3)
- **Phone:** between the 2 × 2 grid and the first section, a 48 px secondary pill, "Where he's performed ↗". It is above the sections that open and close, so it's on the first screen whichever section is open. The screen keeps its no-bar design.
- **Desktop:** in the hero, right of the lede and bottom-aligned with it: an outlined 44 px pill with a gold label and ↗. Kept out of the count strip, whose three cells are anchor links to the sections; a fourth link there would read as a fourth category.
- The stale typed counts (57 / 30 and "58") are now slots: 59 · 32 · 7 · 14 · 13.
- Optional, not drawn: a festival row's place linking to `?country=` once rows carry a country code.

**Home teaser (optional): not drawn.** Two items for the change list without an artboard (§13).

## 11. Job 3: three phone screens

**Chrome.** Each screen opens straight into the phone back bar: 44 px round back, mono 11 px label, optional badge, menu. The masthead and the breadcrumb bar are not on the phone. The theme control is in the menu sheet, as on every back-bar screen, so rule 9 holds. The five-tab bar stays.

| Page | Back | Label | Badge |
|---|---|---|---|
| `/curator` | `/` | About the curator | none |
| `/press` | `/` | Press & data kit | "{6} figures", gold |
| `/analysis/spotify-unmerge` | `/analysis` | Spotify correction | "{6} questions", gold |

The badges are gold, as on the sibling back-bar screens (owner decision, 30 Sep).

**Hero.** Kicker (muted), h1 at 44 px (40 on the correction, which runs to four lines), split word in the gold ramp (owner decision), lede on `--type-lede` (18/1.5 on the phone, as on the sibling phone pages), and the live "Data last reviewed" line with the `--green-dot` dot on `/curator` and `/press`.

**Body type.** Paragraphs Geist 16/1.6 in `--text-body`; h2 Anton 24 uppercase with 34 px above; small print 13.5 px muted; inline links gold, underlined with the site's tested 2 px offset.

**`/curator`**
- **Why this site exists:** the five figures become a figure strip under the sentence, figures at rest in ink, each a slot: 248 Certifications · 26 Countries certifying · 351 Official chart entries · 46 No. 1s · 83 Award wins (the fifth spans the row). The sentence ends "…those numbers deserved. Today it tracks:", and "Every figure is traced to the body that owns it." follows the strip.
- **How I work:** "Nothing goes up unverified (the methodology page sets the method out). For each kind of figure, one source wins:" then four rows, kind → source: Certification · Chart peak · Streaming figure · Career total. The certification row keeps the owner-ruled phrase exactly: *"The certifying body's own database (or, in a market with no current public register, on the label's own plaque)."* (`tests/ownerRulings.test.tsx:93` guards it). The paragraph's last two sentences stay as prose, and "methodology page" and "updates feed" become links. Nothing in the paragraph is dropped; one clause ("Spotify never publishes it") moves into the career-total row.
- **Reach me:** 16 px between the two paragraphs.

**`/press`**
- **Tiles:** the link cue for a card that is itself the link: → bottom-right, `--bg-raised` pressed (drawn on "No. 1 placements"), 112 px min height, 2 × 3. **11.10B stays gold** (it moves on its own); the other five values go to **ink**. Subs are muted; "worldwide" and "Spotify, all credits" are plain text.
- **Copy boxes: all three kept, verbatim.** One layout for all: the text at full box width (so the HTML credit no longer fights a button for room), and a footer inside the box with a one-line label on the left ("Plain text", "HTML, with the link", "Dataset citation") and the button bottom-right, 104 × 44. The citation's date is a slot.
- **Downloads** become a list: filename in mono 700, count slot, the full description kept (13.5 px, muted, with "{19} artists" and "{20} artists" as slots), and **↓ Download** in the same 104 × 44 pill, top-right of the row. Each row stays a download link, `a[download]`, to the real paths `/api/v1/certifications.csv`, `/api/v1/chart-peaks.csv` and `/api/v1/awards.csv`. The descriptions are kept whole, so no text leaves the HTML.
- **Copy button: drawn as it ships.** Rest · pressed (`--bg-raised`) · **"Copied ✓"** for about 1.8 s in `--green` (`#146b3c` in light, not `--green-dot`) · keyboard focus (2 px gold ring). Only the box-and-footer layout is new. The button is shared with `/api` and `/embed`, and its behaviour is tested, so it does not change here; any behaviour change would be a separate site-wide item for the owner.
- No stat card or live box is shown (optional in §5.2): each would need its own live data, and the paragraphs link to both pages.

**`/analysis/spotify-unmerge`**
- Answer at 19/1.5 in full ink; sub-line muted. **Answer and questions verbatim** (FAQPage, ClaimReview).
- **Ledger:** nine rows stacked, label (14 px) with its note under it, value under that in Anton 26, **ink, no slot** (fixed literals). Each remix's before and after rows share a tinted group with a 3 px left rule and a dashed divider between them. **=** marks the three results (total reallocated, true 2025 close, gained in 2026), each under a 2 px `--rule`; the "=" column is `aria-hidden`. Labels and notes verbatim; the notes already carry the − subtractions.
- **Where that leaves him today:** the live career total gets its own figure block, "Career Spotify streams · updates daily" with the green dot and **11,103,140,399 in gold** (the page's one live figure). The block sits **inside the same condition as the two paragraphs**, so when the career total can't be read it disappears with them. The paragraphs keep their slots in ink: 11,103,140,399, 11.10B, 1,903,587,725, 1.90 billion (twice).
- FAQ: six h3 questions at 17 px Geist 600, answers at 15/1.6; answer 5 keeps its live and derived slots in ink.

**Keep exploring stays on all three,** drawn as `KeepExploring.tsx` renders it at phone width: bordered `--bg-soft` cards (18 × 20 padding, 14 px gap), a bold Geist title, the `desc` at 0.8rem muted, a gold →. Titles and descriptions are `sectionLinks` verbatim.
- Correction: its authored list, `exploreFor["/analysis/spotify-unmerge"]`: Chart Analysis · By the Numbers · Methodology.
- `/curator` and `/press` have no `exploreFor` entry today, so they fall through to `DEFAULT_EXPLORE` (Music · Certifications · Career Records). **Proposed** instead, from existing keys only: `/curator` → methodology · api · share; `/press` → share · api · methodology. Two lines in `links.ts`; no new `sectionLinks` entry.

Its label ("Keep exploring") ships in `--gold`; it is drawn muted, and because it is one shared component that change is site-wide (owner decision, item 56). The → arrows stay gold.

**The tab bar** is `MobileTabBar.tsx` as shipped: Home (the crown, `BrandMark` 16, opacity .55 when not current) · ♪ Music · ★ Certs · ▲ Charts · ⌗ Records; glyphs Anton 15 px, labels Space Mono 700 11 px, muted, gold when current.

**Which tab is lit:** none, on all three. That is what the shipped rule already does (no tab's href or `ALSO` pattern matches `/curator`, `/press` or `/analysis/…`), and it is right: they are pages about the site, like About, FAQ and Contact. No code change.

**The tab bar stays** (owner decision, item 58), as on `/about`, `/faq` and `/embed`: none of the three has a single main action for a bottom bar. So they get the back bar at the top **but must not be added to `hasOwnActionBar`**, which is what hides the tab bar. If the back-bar route list and `hasOwnActionBar` are the same list in code, these three need an exception.

## 12. Job 4: the Dai Dai inset and strip

**Option (c), owner decided 30 Sep.** The Europe inset stays bottom-left at a **fixed 200 × 172 px at every width from 901 up**, 8 px from the edges. It is not a percentage. Label, border, fill and hover are unchanged.
- Your research shows it hides no charted country at any of the nine widths tested; Europe draws at 2.2× the world scale at 1440 (2.05–2.3× across the band).
- (a) hides Australia and New Zealand. (b) costs layout room at 1024, where the ranking already drops below the map. Top-right hides India.
- **Edit:** `dai-dai-replay-map.html`, the inset line: `iw = 200, ih = 172` (was `Math.round(W * 0.31)` and `iw * 0.86`). In the build, the inset's size is CSS px, so it must not be scaled with the SVG's viewBox; if the build scales the map, divide by the scale.
- Drawn at 1440 in both themes (the approved desktop artboards, which read the map file) and at 1024 in both themes (the checks at the end of `Dai Dai Redesign.dc.html`, map box 873 × 416). `Dai Dai Replay States.dc.html` reads the same file and follows.

**Stat strip:** every cell is `padding: 22px 24px 20px 24px`, except the first cell in each row, whose left padding stays 0 (it sits on the column edge).
- At 1440 (6 across) that's cell 1.
- At 1024 (3 × 2) it's cells 1 and 4.

Drawn at 1440 and 1024, plus the `/es` check at 1440 with the six Spanish captions verbatim. The third caption (144 characters) sets the cell height, and it still fits at 24 px padding. Nothing else on the Dai Dai page changes.

## 13. Change list, Jobs 2–4 (final, 30 Sep 2026)

**Job 2 · moves and removals**
33. Desktop Tours: "Where he's performed ↗" removed from the tickets panel.
34. Deep Pages 12: the never-built hero pill "Where he's performed ↗" removed from the artboard.

**Job 2 · additions**
35. Phone Tours: the "More from the road" group (three rows, map first).
36. Desktop Tours: a "Where he's performed" card beside "Festivals & shows"; the Festivals card gains a sub-line slot. Both cards hover to **`--bg-raised`** (the owner's hover rule), in `Records - Tours.dc.html` and `Map Links` alike.
37. Festivals: "Where he's performed ↗" near the top, on both layouts, in **one style** (the `Map Links` version) in both files: 11 px, `--btn-edge` border, no gold wash. Phone pressed state: `var(--bg-raised)`, not raw `#24242a`.

**Job 2 · rewordings**
38. Desktop Tours, Festivals card: "Every festival & big stage he's played — the headline sets and beyond" → **"The festivals and big stages he's played: the headline sets and beyond"** (drops the completeness claim).
39. Desktop Tours lede: the typed "June 2024" → derived from the biggest night's tour date (29 Jun 2024). Not drawn: a code fix.

**Job 2 · typed figures to derive**
40. Festivals (desktop and phone): 57 / 30 / "58" → slots. The desktop artboard's strip and its section headings now read from the same lists, so the "32" and the "31 sets" heading can no longer disagree.
41. Home teaser (not drawn): drop "Oceania added Oct 2025" (no "added" date in the data); if redrawn, split "Rest" into its four regions, derived.

**Job 3 · per page, chrome**
42. `/curator`, `/press`, `/analysis/spotify-unmerge` get phone components with the back bar; the masthead and breadcrumb bar leave the phone for these three.
43. Back-bar badges "{6} figures" (press) and "{6} questions" (correction), **gold**, as on the sibling pages. **Owner decided.**
44. The three pages get the phone back bar. **They do not join `hasOwnActionBar`** (item 58). (§10 of the brief lists routing as out of scope for design; noted so the code pass picks it up.)

**Job 3 · content changes** (drawn on the phone **and** at 1440 on `Curator Press Correction.dc.html`, both themes; separate designs, per owner rule 1)
45. Curator, "Why this site exists": the five figures move into a figure strip; the sentence ends "Today it tracks:" and a closing line follows.
46. Curator, "How I work": the paragraph becomes an intro line, four source rows and the closing prose.
47. Curator, "Reach me": a gap between the paragraphs.
48. Press, tiles: → cue and pressed state added.
49. Press, copy boxes: one box-and-footer layout for all three, with a label per box. Nothing removed.
50. Press, downloads: a list with filename, count, full description and ↓ Download; the whole row is the link.
51. Correction, ledger: grouped remix rows, "=" on the three results (`aria-hidden`), a heavier rule above each result. Desktop: narrowed to 600 px so each value sits beside its label.
52. Correction: the live career total gets its own figure block above the two paragraphs, inside the same condition as the paragraphs (it disappears when the career total can't be read).

**Job 3 · gold → ink / muted (rule 3)** (colour only: these apply to desktop too, without an artboard)
53. Press tiles: 248 · 351 · 46 · 83 · 57 → ink (11.10B stays gold).
54. Correction kicker "The February 2026 correction" → muted.
55. Correction ledger values: gold mono → ink display numerals.
56. **Site-wide:** "KEEP EXPLORING" label (`KeepExploring.module.css` `.eyebrow`, `--gold` today) → `--text-muted`, on every page. The `.arrow` stays `--gold`. **Owner decided.** It reaches **36 routes**, including the `/dai-dai` desktop rail and `/dai-dai/es` ("Sigue explorando"): that is the one exception to "Dai Dai changes only by items 60–61". It restores the approved Dai Dai and On This Day artboards, which already draw the label muted. Add a guard test for it.

**Job 3 · Keep exploring lists**
57. `links.ts` `exploreFor`: add `"/curator": ["methodology", "api", "share"]` and `"/press": ["share", "api", "methodology"]` (both fall through to DEFAULT_EXPLORE today). The titles and descriptions come from `sectionLinks`, which lives in `KeepExploring.tsx`, not `links.ts`. The correction keeps its own.

**Job 3 · tab bar**
58. The five-tab bar stays on all three, as on `/about`, `/faq` and `/embed`. No tab is lit (the shipped rule already does this; no change). **Owner decided.**

**Job 3 · typed figures the owner re-reads** (kept typed on purpose, in ink, no slot)
59. Correction: "17 September 2026", "52.1 million", "3.4 million".

**Job 4**
60. Dai Dai Europe inset: option (c), a fixed 200 × 172 px at every width from 901 up, bottom-left. **Owner decided.**
61. Dai Dai stat strip: 24 px each side of each cell, except the first cell in each row.

**Tests that change (Jobs 2–4)** — from a search of `tests/` at main, not a run
62. `tests/dataDownloads.test.tsx`, "/press offers the downloads": it states that /press is one responsive tree with no desktopOnly wrapper and no mobile screen. A phone component for /press (item 42) breaks that premise, so the test must move to cover both trees.
63. `tests/keepExploring.test.ts`: **needs no edit** (it checks the lists resolve, and the two new `exploreFor` lines resolve to existing keys).
64. Also affected: `tests/ownerRulings.test.tsx:93` (item 46, the plaque phrase, kept verbatim so it stays green). Must stay green through the phone split: `faqMobileVisibility`, `spotifyUnmerge.test.ts`, `designItems.test.tsx` 500–510. The Copy button tests don't change (item 75). Not found in `tests/`: the tickets-panel map button, the Festivals card wording, the Dai Dai inset size and the strip padding.

**Where my copy differed from the excerpts in `artboards/`**
The Deep Pages 13 artboard's lede and counts were stale (57 / 30). I drew today's values as slots.

---

## 14. Items added after the review (30 Sep), 65–89

**Changes the drawing made that weren't listed**
65. Festivals desktop lede gains "documented": "{59} documented appearances across three categories". Approved.
66. Phone festivals 2 × 2 values: gold → **ink** (rule 3), in `Map Links` and Deep Pages 13 alike.
67. Deep Pages 13: the badge and the grid labels 10 → **11 px**; "seven Afro Nation editions" → a slot.
68. Deep Pages 12: the "More from the road" rows press to `var(--bg-raised)`.
69. `Map Links` §1 footnote: back to the build's footnote as it ships (the added "and Pollstar" is removed).
70. Curator, "How I work": the clause "(the methodology page sets the method out)" and the owner-ruled plaque phrase kept verbatim; "methodology page" and "updates feed" become links.
71. Lede sizes: the Job 3 phone ledes (`/curator`, `/press`) and the tour map's desktop lede move onto `--type-lede` (18 px phone, 20 px desktop).
72. Press downloads: the real paths `/api/v1/*.csv`, each row an `a[download]`; "{19} artists" and "{20} artists" are slots.

**Behaviour and build notes (for the prompt)**
73. **The listeners map shares the tour map's stylesheet.** `/music/listeners` imports its frame, the + / − buttons, the card and the unplayed-land colour. Under items 1, 2, 27 and 30 the listeners map **does not change**: it keeps its + and −, its floating card and its colours. The build keeps the tour-map changes to the tour map, with new classes, or by moving the shared parts to a shared module first.
74. **The hidden list of 57 country cards** is rendered **once**, not once per layout; **text only, no links** (so it adds no invisible focusable links, where it would otherwise add 103); **visually hidden**, still read by screen readers, not `hidden`. About 3 KB gzipped.
75. **Copy button:** behaviour unchanged ("Copied ✓", about 1.8 s); only the box layout is new (item 49). Any behaviour change would be a separate site-wide item.
76. **Deep links and Back:** `?country=` is read in the browser, so the page stays static. One history entry is pushed when a selection opens and replaced as the selection moves, so Back doesn't walk through every country tapped. On the phone the panel's space is reserved before it's inserted, so nothing jumps on a deep-link visit.
77. **The view cross-fade** (§8) is an opacity dip on the **one** map, never two stacked maps.
78. **Structured data on the three phone pages:** the FAQ answers stay outside anything hidden on phones, and the FAQPage and ClaimReview data is emitted **once** for the page, not again from the phone tree.
79. **Tag colours:** the gold tag colours on `/updates` and `/timeline` stay as they are until Job 5.
80. **No libraries in the build.** The canvases load d3, topojson and world-atlas from a CDN for drawing only; the build draws from the site's own `worldShapes.ts`.
81. **The phone panel** shares `TM Card` with a layout switch in the canvas only. The build gives the phone its own panel component (separate designs).
82. **Phone region rows as buttons:** only the header line is the button (item 13), so a screen reader doesn't read up to 19 country names as the label.

**Tokens**
83. `--map-sea` equals `--bg-soft` in both themes today. It is kept as its own role so the map frame can change without moving every soft panel; if the owner prefers fewer tokens, drop it and use `--bg-soft`, with no visual change.
84. `--map-land` in dark (`#26262c`) differs from the Dai Dai map's land on purpose: Dai Dai's grey (`#5a5a62` on a `#1c1c21` well) is a data band, "charted below the top 40", while the tour map's land is quiet ground, so the one played fill reads. The two maps are never on one screen.

**Artboards added or fixed**
85. Job 3 desktop artboards: `Curator Press Correction.dc.html`, 1440, dark and light (items 45–52).
86. Job 1 states added: B16, a country **pinned from the close-up**; B17, the **top-left flip** (Australia, close-up hidden); the phone **Asia region row tapped** (World view, the UAE lit and outlined).
87. Light frames added: B10, B12–B14 (region-row hover and the find box), C2 and C3 (the Africa and Caribbean views).
88. `TM Phone` gains a full-length scrolling frame: the Caribbean and Oceania rows and the footnote are now drawn, and Deep Pages screen 20 uses it (it scrolls again). Each state array lives only in the canvas that renders it.
89. `Records - Tour Map.html` carries a visible "Superseded" line at the top, pointing to `Tour Map.dc.html`.

**The bundle:** `designs/desktop/` and `designs/mobile/` each carry `support.js`, `ios-frame.jsx` and `_ds/`, since the files inside them load those by relative path.
