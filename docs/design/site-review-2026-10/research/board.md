# Board group: independent design review (8 Oct 2026)

**Pages:** `/afrobeats` (hub, including "The shape of the field" at 1440), `/afrobeats/wizkid`, `/afrobeats/tyla`, `/afrobeats/ayra-starr` (Starrgirl purple), `/afrobeats/rema/charts`.
**Site:** live https://burnaboystats.com, deployed 8 Oct 2026 (`origin/main` @ `e4b0afc8`).
**Reviewer stance:** I reviewed this as an independent editorial-data designer. I judged it as a product used by three people: a fan, a journalist, and a search visitor who lands on one artist's page.

---

## 0. Method and files

**Capture.** Headless Chrome ran only through the local `heavy` lock wrapper (on the owner's machine, not in this repo), using the tours group's harness, copied to `tools/board/shoot.mjs` and `measure.js`. I added `tools/board/probe.js`, which measures board-specific things: tiles, scatter geometry, rails, rows, fills, hover-only content, `title`-only info, and fixed bars.
- Phone shots are 390×844 with mobile emulation (iPhone UA, touch, DPR 1). Desktop shots are 1440×900. Every shot is full page, JPEG q60, with height capped at 6000px.
- Every Chrome I started is closed. The two runs were `run-a.log` and `run-b.log` in `tools/board/`.

**Shots** are in `../shots/board/`, 3.8 MB in total:

| Page | 390 light | 1440 light | dark | 1024 |
|---|---|---|---|---|
| `/afrobeats` | `afrobeats-390-light.jpg` | `afrobeats-1440-light.jpg` | `afrobeats-390-dark.jpg`, `afrobeats-1440-dark.jpg` | `afrobeats-1024-light.jpg` (2400 cap) |
| `/afrobeats/wizkid` | `wizkid-390-light.jpg` | `wizkid-1440-light.jpg` (capped at 6000 of 10,817) | n/a | `wizkid-1024-light.jpg` (2400 cap) |
| `/afrobeats/tyla` | `tyla-390-light.jpg` | `tyla-1440-light.jpg` | n/a | n/a |
| `/afrobeats/ayra-starr` | `ayra-starr-390-light.jpg` | `ayra-starr-1440-light.jpg` | `ayra-starr-390-dark.jpg`, `ayra-starr-1440-dark.jpg` | n/a |
| `/afrobeats/rema/charts` | `rema-charts-390-light.jpg` | `rema-charts-1440-light.jpg` (capped at 6000 of 7,518) | n/a | n/a |

Dark was shot for the hub and for Ayra Starr: the hub is the group's front door, and Ayra's purple is the group's one theme risk. 1024 was shot for the hub and Wizkid because the masthead collapses to the hamburger below 1240, the hub grid goes to three columns, and the scatter is hidden.

**Supporting evidence** (outside the 4 MB budget):
- Viewport frames: `tools/board/scratch/hub-1440-light-focus.jpg` (keyboard focus on a tile), `hub-1440-light-hover.jpg` (hover reveal), `hub-1440-light-scatter.jpg`.
- Full-resolution crops are in `tools/board/crops/`. File names are `<shot>-<y0>-<x0>.png`.
- Share cards are in `tools/board/og/`: `hub.png`, `wizkid.png`, `ayra.png`, `rema-charts.png`, and `rema-crop.png`.
- Per-shot measurements are in `tools/board/data/<shot>.json`, and probe output is in `data/probe-*.json` and `run-b.log`. Fetched HTML is in `tools/board/html/`.

**Rulings respected.** I did not re-propose any of these:
- No accordions.
- Desktop and phone are separate designs.
- Link-preview (OG) cards stay gold.
- Selected chips use N2.
- Hub rails: gold means permanent, green means live.
- Gold means live, action, or his. Each page's subject keeps gold on its own headline (4 Oct).
- 11px type in the scatter, and the scatter hidden below 1240 (7 Oct, option b).
- Per-plaque register links were rejected (28 Aug).
- The board stays on burnaboystats.
- Ayra's purple stays page-only, and her headings and figures stay gold (Paul's call).

---

## 1. Measurements at a glance

| Page | Width | Doc height | Where the key content starts | Notes |
|---|---|---|---|---|
| Hub | 1440 | 3,722 | Tiles 470–2,500 (20 artists, 319×357 each, plus 2 note tiles). Scatter at **2,501** (2.8 screens). Rails at **2,977 / 3,092** (3.3 screens) | CLS 0. LCP is the h1 at 176 ms. 448 KB of images in 19 requests |
| Hub | 1024 | 4,035 | 3 columns of 313×351 tiles; the grid ends at 3,154. No scatter. Rails at 3,175 | Hamburger nav |
| Hub | 390 | 3,095 | Burna "door" at about 447–610. Wall 629–2,678 (176×207 tiles). **The last tile is 352×176** | LCP is the door image at 448 ms |
| Wizkid | 1440 | **10,817** | Singles at 1,577. Featured (where One Dance is) at **6,690**. Chart panel 8,453, live panel 8,734, head-to-head 9,029, FAQ 9,568 | 87 rows, **65 of them carry a single pill** |
| Wizkid | 1024 | **15,165** | Featured at **10,037**. FAQ at 13,892 | Pills wrap under the title |
| Wizkid | 390 | 3,448 | Top 10 releases, then "All 87 releases +77", then two small cards: Chart peaks and Live charts (≈2,450). FAQ at 2,645 | The visible headline is "159" |
| Tyla | 1440 | 5,353 | 13 rows, 6 with one pill | n/a |
| Ayra Starr | 1440 | 5,873 | 27 rows, **21 with one pill** | n/a |
| Rema charts | 1440 | 7,518 | 66 rows, **54 with one pill**. 60 country filter chips | Lede is 20px at **95 cpl** |
| Rema charts | 390 | 9,171 | Best peak and chart count lead each row | "+40" control is 36×30 |

On every page and at every width: no horizontal overflow, and CLS was 0.000 in all 16 captures.

---

## 2. Strengths: keep these

1. **Trust is written into the page, not bolted on.** Every page states its counting rule and a date. Examples:
   - Hub: "re-read 2 October 2026".
   - Artist pages: "last verified 4 October 2026" and "Counted by the same rules".
   - Tyla's page names its exceptions outright: 10 South African plaques from the label's own award, 1 Turkish, and 1 French from SNEP's own X post.
   - The hub turns its two leftover grid cells into "One rule, counted the same" and "Provenance". That is the board's whole claim, placed where a reader's eye ends up.

   Shots: `afrobeats-1440-light.jpg` y≈2,250; crop `tyla-1440-light-650-0.png`.
2. **The hub photo wall in dark is the best-looking surface on the site.** It pairs Anton names with mono metadata. Burna is set apart by a 2px gold frame and a "This site" tag, not by size, so he leads without shouting. On the phone, the "door" pattern (Burna full width above a 2-up wall) is a properly phone-native idea, not a desktop squeeze. Shots: `afrobeats-1440-dark.jpg`, `afrobeats-390-dark.jpg`.
3. **The phone chart screen works.** Each release row leads with its best peak (#1 in gold, top right) and a chart count ("52 charts"), then flag-and-peak pills coloured by band. It is dense, scannable in thumb reach, and true to the "dense lists" ruling. Crop: `rema-charts-390-light-900-0.png`.
4. **"Where the plaques are" is an excellent one-glance summary.** It is one pill per country, sorted by best tier, in tier colour, with label-issuer markers inline ("SONY MUSIC AFRICA", "EPIC RECORDS"). A journalist can read Tyla's reach in about five seconds. Crop: `tyla-1440-light-650-0.png`.
5. **Ayra Starr's Starrgirl art direction is a model of restraint.**
   - It applies to the name gradient, the lead figure, the primary button and the phone's ALL pill, and nothing else.
   - It passes AA in both themes: `#a3157f` on paper measures 6.44:1, and white on `#8f2fa7` 6.70:1. In dark, `#f06ae0` is used.
   - It gives one artist a personality without forking the template. A board of 20 could carry more of this.

   Crop: `ayra-starr-1440-light-60-0.png`.
6. **The head-to-head band** ("Tyla and Burna Boy, same rules") sets the subject in ink and Burna in gold. Each side gets one number and two facts. It is the cleanest comparison on the site. Crop: `tyla-1440-light-3050-0.png`.
7. **"The shape of the field" is an original, honest chart.**
   - Every dot is labelled with its figures, and type holds at 11px at every width where the chart is shown.
   - It renders cleanly in both themes. Burna's gold dot is the only filled mark.
   - Keep the idea. Finding B-06 is about its scale, not its existence.

   Crop: `afrobeats-1440-dark-2500-0.png`.
8. **Stability and weight are good.** CLS was 0 everywhere. Board pages ship about 30 KB of compressed HTML. On the phone hub, the LCP image is preloaded behind a media gate so desktop never fetches it.

---

## 3. Findings

Ordered by impact. **Kind:** `design` needs a designer, `build-fix` is a plain bug, `content` is copy. Where a finding repeats an earlier audit item that is still live, the item is named, so it is not counted as new evidence.

### B-01: On a phone, an artist's page never shows the artist's name at display size. `design` · high · phone
- **Pages:** `/afrobeats/wizkid`, `/afrobeats/tyla`, `/afrobeats/ayra-starr` (every board artist, through `MobileCerts`).
- **Problem:** A search visitor arrives from "Wizkid Certifications — 159 Plaques in 21 Countries". What they see first:
  - The visible headline is "159", in Anton at about 86px, under the kicker "CERTIFIED WORLDWIDE".
  - The name appears only at 11px mono in the back bar ("WIZKID") and once inside the lede ("Every Wizkid plaque…").
  - The portrait is a dissolved wash behind the right edge of the hero. In light theme it reads as a grey smudge, and you cannot tell who it is.
  - The 3-second test ("whose page is this?") fails.

  Desktop does it right: a 220px portrait and a 76px name.
- **Evidence:** crop `wizkid-390-light-0-0.png` and shots `tyla-390-light.jpg` / `ayra-starr-390-light.jpg`.
  - Probe: the phone h1 reads "WIZKID, CERTIFICATIONS: 159 AWARDS 21 COUNTRIES". The name part is visually hidden, and the raw text nodes run together as "159Awards21 countries" (`html/afrobeats_wizkid.html`; known item afrobeatsA-21, 5 Oct, still live).
  - Ayra's purple name, her signature, has nowhere to live on the phone. Only her "42" and kicker carry it.
- **Suggestion:** Draw a phone hero for board artists (a prop on `MobileCerts`, so Burna's own `/certifications` screen is untouched unless the designer chooses otherwise):
  - Add a visible name line in Anton at 36–44px, between the back bar and the total. Ayra's takes the Starrgirl gradient.
  - Add a small sharp portrait chip (48–56px, rounded) beside or above the name.
  - Keep the total as the hero figure.
  - Fix the accessible name while there, by giving the h1 real spaces or a visually hidden separator.
- **Effort:** medium.

### B-02: An artist's three pages have no shared navigation. `design` · high · both
- **Pages:** `/afrobeats/<artist>`, `/afrobeats/<artist>/charts` and `/afrobeats/<artist>/live`; checked on Wizkid, Tyla, Ayra and Rema charts.
- **Problem:** Each board artist has three sibling pages (plaques, official charts, live now), but nothing ties them together as a set.
  - **Desktop charts page:** the onward row is "← Rema · The Afrobeats Board ↗ · Burna Boy's charts ↗". There is **no link to Rema's own live board**, and no next artist (`app/afrobeats/[artist]/charts/page.tsx:262-264`).
  - **Phone charts screen:** it is built with `showActionBar={false}`, so the only way out is back.
  - **Phone artist page:** charts and live are two small cards at the very end of the list (y≈2,450 on Wizkid at 390), after the top-10 ledger.
  - **Desktop artist page:** charts and live are hero buttons, then reappear as two big panels about 8,400px down.
  - Journalists move between "how certified" and "how charted" constantly, and here that means going back up the hierarchy.
- **Evidence:** shots `rema-charts-1440-light.jpg` (onward row at y≈6,948, probe "fills"), `rema-charts-390-light.jpg` and `wizkid-390-light.jpg`; crop `wizkid-390-light-2350-0.png`.
- **Suggestion:** Add a per-artist local nav with three segments: **Plaques 159 · Charts 240 · Live 298**. Each segment carries its count, and the current segment uses the N2 on-state.
  - **Desktop:** place it under the breadcrumb, at the top of all three pages, aligned to the hero card.
  - **Phone:** place it as a non-pinned segmented row directly under the back bar, at the top of each screen. It must not be pinned: the rule is never two pinned bars, and the back bar plus the action or tab bar are already pinned.
  - **Design separately for each layout.** On the phone it could replace the two bottom cards.
- **Effort:** medium.

### B-03: On desktop, a single plaque sits about 1,050px from its title. `design` · high · desktop
- **Pages:** `/afrobeats/wizkid`, `/afrobeats/tyla`, `/afrobeats/ayra-starr`, and `/afrobeats/rema/charts`.
  - The same components (`CertExplorer` and `ChartExplorer`) power Burna's `/certifications` and `/records/charts`, so whatever is decided here applies there too.
- **Problem:** At 1440, each ledger row puts the cover and title at x≈88–300 and right-aligns the pills to x≈1,352.
  - Most rows carry one pill: Wizkid **65 of 87**, Ayra **21 of 27**, Rema charts **54 of 66**. Each of those reads as a title and a lone pill about 1,050px apart, in a 75px row.
  - The eye has to cross the whole page for every fact, and the right edge is ragged on the left, so multi-pill rows have no common start line.
  - The pages get very long: Wizkid is 10,817px at 1440 and **15,165px at 1024**, where pills drop under the title.
  - The hero's own claim ("'One Dance' is Diamond in five countries") is first made good at **y = 6,690** (Featured Appearances, after 66 singles). At 1024 that is y = 10,037.
- **Evidence:**
  - Crops: `wizkid-1440-light-2900-0.png` (G Love, System, I Like… one pill each, far right) and `rema-charts-1440-light-1450-0.png`.
  - Pill counts were parsed from `html/*.html` (`certRow` / `cBadge`).
  - 1024 behaviour: `wizkid-1024-light.jpg`.
- **Suggestion:** Keep every row and keep the density; this is not a collapse.
  - Set a fixed title column (about 300–340px, cover plus Anton title) and **start the pills at a fixed x right after it, flowing left to right**. A one-pill row then reads as one line and has a common left edge.
  - Single-line rows can drop to about 52–56px.
  - Add a **"Most certified" strip** under "Where the plaques are": the top 3–5 records by plaque count, derived from the data, each linking to its row. This was proposed 29 Sep as P102 and is still open; One Dance would then appear on the first screen. The designer should check this against `/certifications` too.
- **Effort:** medium.

### B-04: The hub shows a wall of faces but not the ranking a journalist needs. `design` · medium · desktop and phone
- **Page:** `/afrobeats`.
- **Problem:** The board is sorted by plaque count, but it is only shown as photo tiles.
  - At 1440 the first screen shows four artists. The grid takes **2,030px** (470 to 2,500), and **2,740px** at 1024.
  - Chart entries and live placements per artist only appear in the two pill rails, 3.3 screens down. No-1 counts and top plaques never sit side by side.
  - The sort key is never stated, and tiles carry no rank numbers, so "where does Tyla rank?" means counting tiles. There are ties: Tems and Tyla at 76, and Fireboy DML and Kizz Daniel at 36.
- **Evidence:** shots `afrobeats-1440-light.jpg` and `afrobeats-1024-light.jpg`; probe "tiles" (sizes 319×357; `firstY` 470; `lastBottom` 2,500).
- **Suggestion:** Reuse the site's own **Cards / Table toggle** from the chart boards (`rema-charts-1440-light.jpg` y≈595) on the hub.
  - Cards is today's wall.
  - Table is one row per artist: rank (joint ranks, per the NPD-05 precedent), artist, plaques, countries, top plaque, chart entries, No. 1s, and live now. Burna's row is gold. It is sortable by column.
  - On the phone, a Table view could replace or follow the rails. **Design it separately.**
  - Add a small "Ranked by plaques" caption either way.
- **Effort:** medium.

### B-05: Nothing on the hub page itself links to `/compare`, the board's most natural next step. `design` · medium · both
- **Page:** `/afrobeats`.
- **Problem:** The hub's only `/compare` link is inside the phone nav sheet (`html/afrobeats.html`: one `href="/compare"`, in `mobileNavSheet`).
  - The desktop hub and the phone hub screen never offer "Compare any two artists", or the country boards under `/compare/in`.
  - The hub also has **no primary action at all**: no gold button.
  - Keep Exploring offers Certifications, Chart Records and Africa's Biggest.
- **Evidence:** fetched hub HTML; probe "fills" (the hub's only fill is the skip link and the back-to-top button).
- **Suggestion:** Give the hub one primary action, "Compare any two ↗" (its gold button), placed in the hero beside the cadence line on desktop. On the phone, it could go under the door, or as a third rail-style row.
- **Effort:** small.

### B-06: "The shape of the field" squeezes 18 of its 20 dots into the bottom 40%, and its own key misdescribes the picture. `design` · medium · desktop (≥1240)
- **Page:** `/afrobeats`.
- **Problem:** The y-axis is linear from 0 to 260 (Burna's 251 sets the domain), in a plot about **242px** tall. That is **0.93px per plaque**.
  - **18 of 20 dots sit below 40% height**, and 10 sit below 20%.
  - Seven careers fall within four countries. They need **14 hand-placed hairlines** to stay legible (Black Sherif, Olamide, Tiwa Savage, BNXN, Fireboy DML, Victony and others).
  - There are no y tick values, only "PLAQUES ↑".
  - The legend's reading key says "TOP-LEFT = DEEP AT HOME (SEYI VIBEZ)". Seyi actually sits at **39% height**, lower left. The key describes a chart that the scale doesn't draw.
  - The chart starts at y = 2,501, under 20 tiles.
- **Evidence:** crop `afrobeats-1440-light-2500-0.png` (and the dark version); probe "scatter" (`dotHeightFrac` [0.93, 0.59, 0.38 …]; `nBelow40pct` 18; `leaders` 14).
  - Arithmetic: linear puts Seyi at 0.39. A square-root scale puts Seyi at **0.63** and leaves **8** dots below 40%, against 18.
- **Suggestion:** Keep the 11px type, the hand-tuned placement method and the ≥1240 rule (Paul, 7 Oct). Then:
  - **(a)** Use a **square-root y-scale**, with ticks at 0, 25, 50, 100, 150, 200 and 250, so depth reads as depth.
  - **or (b)** Break the y-axis above about 170, so Burna sits on his own band.
  - **and** make the plot taller, at 420–460px (29 Sep, P099).
  - **and** derive the reading key from where the dots actually fall, or rewrite it.
  - Consider moving the chart **above** the photo wall, or directly under the hero. It answers "how do these careers differ?" before 20 faces do.
- **Effort:** medium.

### B-07: Phones and the 901–1239 band get no version of "the shape" at all. `design` · low · phone and 1024
- **Page:** `/afrobeats`.
- **Problem:** The CSS comment says "the mobile screen has its own way of saying this". On the screen, it doesn't:
  - The phone hub has the two rails, which carry chart entries and live placements, not plaques against countries.
  - At 1024 there is nothing.
  - Seyi Vibez (102 plaques in 1 country) against Tyla (76 in 25), the board's most interesting contrast, is invisible to most visitors.

  This does not ask to show the scatter below 1240. The 7 Oct ruling stands.
- **Evidence:** shots `afrobeats-390-light.jpg` and `afrobeats-1024-light.jpg`; `hubScatter.module.css` `@media (max-width:1239px){.wrap{display:none}}`.
- **Suggestion:** A **phone-native** form designed for its own width, not the scatter scaled down. For example, a "wide vs deep" list: each artist's row has a plaques bar and a countries bar, sorted by plaques. Or two short ranked lists, "Widest reach" and "Deepest at home".
- **Effort:** medium.

### B-08: The hub's best copy is visible only on mouse hover. `design` · medium · desktop
- **Page:** `/afrobeats`.
- **Problem:** Each tile has an editorial hook, for example Seyi Vibez: "102 plaques and 129 chart entries, every one of them Nigerian — a record built at home, so far."
  - It is `opacity:0; max-height:0` and appears only on `:hover`.
  - **Keyboard focus does not reveal it** (probe: focused tile `hookOpacity` 0).
  - Touch laptops and tablets above 900 never see it.
  - A reader scanning the wall misses the one sentence that says why each artist matters.
- **Evidence:** `scratch/hub-1440-light-hover.jpg` (revealed) against `scratch/hub-1440-light-focus.jpg` (focused, not revealed); `afrobeats.module.css` `.tileHook` / `.tile:hover .tileHook`.
- **Suggestion:** The designer should choose one of two options:
  - **(a)** Hooks always visible, two lines max under the stat. This needs a taller scrim zone; check the tile ratio of 1/1.12.
  - **(b)** Reveal on `:hover` **and** `:focus-visible`, plus add the hook to the B-04 Table view.
- **Effort:** small.

### B-09: The tile focus ring copies Burna's "this site" frame, and in light theme it is 1.6:1 on paper. `build-fix` · medium · desktop
- **Page:** `/afrobeats`.
- **Problem:**
  - A keyboard-focused tile gets `outline: 2px solid rgb(255,182,39)` at a 2px offset.
  - That is the same 2px gold frame that marks Burna's anchor tile, so focusing Seyi Vibez makes him look like "the site's subject".
  - The tile is a `.photoTile`, so the token resolves to dark-theme gold `#ffb627` even on a light page. Where the ring crosses paper, it measures **1.6:1** against `#f7f4ee`, under the 3:1 needed for non-text contrast.
- **Evidence:** `scratch/hub-1440-light-focus.jpg` (top edge of the Seyi tile); probe output in `run-b.log` ("outline":"rgb(255, 182, 39) solid 2px").
- **Suggestion:** Use a focus ring that cannot be mistaken for the anchor frame. For example, an inset 3px white ring plus a 2px ink outer ring. Make it resolve against the page's theme, not the tile's island, for instance by setting the outline colour from a page-level token outside `.photoTile`.
- **Effort:** small.

### B-10: One count goes by five nouns ("Awards" among them). `content` · medium · both
- **Pages:** all board pages, plus hub tiles and share cards.
- **Problem:** The same unit, one plaque per title per country, is named five different ways on one phone screen (Wizkid 390):
  - "CERTIFIED WORLDWIDE"
  - "159 **AWARDS**"
  - "Every Wizkid **plaque**"
  - "7 **certs**"
  - FAQ: "How many **certifications**…"

  Elsewhere, the title says "159 **Plaques**", the artist share card says "159 CERTIFICATIONS", the hub share card says "PLAQUES", and Keep Exploring says "251 **awards** across 27 countries".

  "Awards" is actively misleading, because the site has a separate `/records/awards` page for Grammys and similar.
- **Evidence:** crop `wizkid-390-light-0-0.png`; probe h1 text; `og/hub.png`, `og/wizkid.png`; Keep Exploring in every desktop shot. This is related to seo-08 (titles only), which is still open.
- **Suggestion:** Pick one noun for the unit, either **plaques** or **certifications**, and use it in every label, unit and card. Never use "awards" for plaques. "Certs" can stay as a space-saving label only if it is the same word everywhere.
- **Effort:** small.

### B-11: "Chart peaks" labels a count of chart entries, and phone tiles drop the unit. `content` · medium · both
- **Pages:** the `/afrobeats` hub rails, artist heroes, and phone cards.
- **Problem:**
  - The hub rail is labelled "CHART PEAKS · PERMANENT RECORD" and shows "Burna Boy 384". Keep Exploring on the same page calls 384 "chart entries".
  - The artist hero button "Official chart peaks — 240 entries" puts both words on one button.
  - Phone hub tiles print "25 · 1 country", so 25 has no unit; desktop prints "25 certifications · 1 country".
- **Evidence:** crops `afrobeats-390-light-2150-0.png` and `afrobeats-1440-dark-2500-0.png`; `wizkid-1440-light-0-0.png`. This was raised 29 Sep as P101 and is still live.
- **Suggestion:**
  - Rail label: "Chart entries · permanent record". Alternatively, keep "peaks" and put the unit on the first chip ("384 entries").
  - Hero button: "Official charts — 240 entries".
  - Phone tile: "25 plaques · 1 country" (see B-10 for the noun).
- **Effort:** small.

### B-12: Desktop paints the live rail gold, against the green-for-live ruling the phone follows. `build-fix` · medium · desktop
- **Page:** `/afrobeats`. The artist pages' live panels are related.
- **Problem:** The owner ruled on 5 Oct that the hub rails are gold for permanent and green for live.
  - The phone does this: `.pillNumLive{color:var(--green)}` plus a green-tinted border (`mobileAfrobeatsHub.module.css:347-349`).
  - Desktop gives both rails the same `.railNum{color:var(--gold)}` (`app/afrobeats/page.tsx`, both rails use `styles.railNum`). Only the "Charting now" label is green; the numbers are gold.
  - On artist pages, the "Where X is charting today" panel prints its live figures (57 / 42 / 5) in gold beside a green "LIVE NOW" kicker.
- **Evidence:** crop `afrobeats-1440-dark-2500-0.png`, with pixel samples on "Asake 518" (gold) against the label (green); `tyla-1440-light-3050-0.png`.
- **Suggestion:** Add `.railNumLive` (green) and a green-mixed border for the desktop live rail, mirroring the phone. Decide with the owner whether the artist live panel's figures follow the same convention.
- **Effort:** small.

### B-13: The artist onward row has two filled primaries among six buttons. `build-fix` · medium · desktop
- **Pages:** `/afrobeats/wizkid`, `/afrobeats/tyla` and `/afrobeats/ayra-starr` (every board artist).
- **Problem:** The onward row has six buttons, and two are filled: "NEXT: AYRA STARR →" and "COMPARE ↗". Both are gold, or Starrgirl purple on Ayra's page. That gives two competing primaries, against the system's one-gold-action rule. Compare is already in the hero.
- **Evidence:** crop `tyla-1440-light-3050-0.png` (y≈1,085 in the crop); `ayra-starr-1440-dark.jpg` y≈4,510.
- **Suggestion:** Keep "Next: <artist> →" as the row's one primary, since it is the onward action, and make Compare secondary. Consider trimming the row: "Chart peaks" and "Live charts" duplicate the two panels directly above.
- **Effort:** small.

### B-14: The board misses the reading scale (lede size and 62ch measure). `build-fix` · medium · desktop
- **Pages:** `/afrobeats`, artist pages and `/afrobeats/rema/charts`.
- **Problem:**
  - **Hub lede:** 16px at **91 characters per line** (`max-width:660px`, with no `--type-lede` or `--measure`). Sibling board and hub pages run 20px at 68–85 cpl: tours 78, revenue 68, countries 69, festivals 85.
  - **Artist FAQ answers:** 15px at **104–108 cpl** (`.faqA{max-width:72ch}`).
  - **Provenance line:** 129–132 cpl at 13px.
  - **Charts lede:** 20px at **95 cpl** (this is shared with `/records/charts`).
  - **Hub foot line:** 219 cpl.
- **Evidence:** `data/afrobeats-1440-light.json` measure; `data/wizkid-1440-light.json`, `data/tyla-1440-light.json` and `data/rema-charts-1440-light.json` measure arrays; tours numbers from `tools/tours/data/*.json`.
- **Suggestion:** Hub `.lede` → `font-size: var(--type-lede); max-width: var(--measure)`. Cap `.faqA`, `.provenance`, the charts `.lede` and `.source` at `var(--measure)`.
- **Effort:** small.

### B-15: The hub eyebrow and cadence line are gold text, and the cadence line is a full sentence set in uppercase mono. `build-fix` · low · both
- **Page:** `/afrobeats`.
- **Problem:** There are nine gold marks on the 1440 first screen, and none is an action. Several break the system's own rules:
  - The eyebrow text is gold. The system says the family signature belongs on the kicker's tick and never on text.
  - The cadence line ("THE BOARD IS RE-READ AT EACH REGISTER SWEEP — LAST ON 2 OCTOBER 2026. BURNA BOY'S OWN PAGES UPDATE DAILY.") is a sentence set in uppercase 11px mono, in gold. The scale says mono is "labels only, never a sentence".
  - The phone repeats both.
- **Evidence:** `data/afrobeats-1440-light.json` foldAccentText (#945e00 ×4 text plus fill; #ffb627 ×2); crops `afrobeats-1440-light-0-0.png` and `afrobeats-390-light-0-0.png`.
- **Suggestion:** Set the eyebrow text in `--text-muted` and keep the gold tick and the "BOARD" split word. Set the cadence line in Geist `--type-caption`, sentence case, in `--text-muted`. The date can stay tabular.
- **Effort:** small.

### B-16: "By the numbers" sits directly on its grid's top rule. `build-fix` · low · desktop
- **Pages:** all artist pages, at 1440 and 1024.
- **Problem:** There is 0px between the h2's baseline box and the grid border. Every other h2 on the page has 16–20px. This was raised 29 Sep as P104 and is still live.
- **Evidence:** crops `wizkid-1440-light-0-0.png` (y≈589) and `wizkid-1024-light-0-0.png`.
- **Suggestion:** Give `.numGrid`, or the heading, the same top gap the other section heads use.
- **Effort:** small.

### B-17: The phone hub's last tile, the board's 20th artist, is the biggest. `build-fix` · low · phone
- **Page:** `/afrobeats` at 390.
- **Problem:** With 19 wall tiles in 2 columns, Tiwa Savage (12 plaques) stretches to **352×176**, against 176×207 for everyone else. Her pale studio shot becomes the brightest block on the screen. This was raised 29 Sep as P100 / X9 and is still live.
- **Evidence:** crop `afrobeats-390-light-2150-0.png`; probe "tiles" sizes `["176x207","352x176"]`.
- **Suggestion:** Keep her half width and fill the other half with a note tile ("One rule, counted the same" or "Compare any two →", see B-05). Desktop already uses its leftover cells this way.
- **Effort:** small.

### B-18: Ayra Starr's phone Compare bar is gold while her desktop buttons are purple. `build-fix` · low · phone
- **Page:** `/afrobeats/ayra-starr` at 390.
- **Problem:** The phone action bar "COMPARE AYRA STARR ↗" is a gold fill (`#945e00` light, `#ffb627` dark). On desktop, her primary buttons, including Compare in the onward row, are Starrgirl purple (`#8f2fa7`). The certs switches are also gold on the phone. Both layouts of one page disagree about her accent.
- **Evidence:** `ayra-starr-390-light.jpg` and `ayra-starr-390-dark.jpg` (bar at y 769–844); `data/ayra-starr-390-*.json` foldAccentFills; `ayra-starr-1440-dark.jpg`.
- **Suggestion:** Scope the phone action bar's primary fill to `[data-brand="starrgirl"]`, as `.btnPrimary` already is.
  - The owner should confirm this. His record lists "the header button" as purple, and the phone bar is that button's phone counterpart.
  - Share cards stay gold (ruling).
- **Effort:** small.

### B-19: Small tap targets on the phone ledgers. `build-fix` · low · phone
- **Pages:** artist pages and `/afrobeats/rema/charts` at 390.
- **Problem:** The board spec says targets should be at least 44px. Measured:
  - The "+5" and "+13" overflow buttons are **41×28** and **49×28**.
  - Rema's "+40" and "+1" are **36×30** and **29×30**.
  - The phone FAQ question buttons are **26px** tall on one-line questions.
- **Evidence:** `data/wizkid-390-light.json`, `data/tyla-390-light.json` and `data/rema-charts-390-light.json` smallControls.
- **Suggestion:** Extend the hit area to 44px with padding or a `::before` hit box. The visual size does not need to change.
- **Effort:** small.

### B-20: Rema's chart share card cuts off its second row of chips. `build-fix` · low · share cards
- **Page:** `/afrobeats/rema/charts` (OG image).
- **Problem:** On the 1200×630 card, the second row of "#1" chips (Nigeria, Netherlands, Portugal, Luxembourg) loses its lower border at y≈370, so the pills look sliced. The stat tiles below sit flush against them. This is related to seo-19 (5 Oct), which reported flush chip rows on chart cards.
- **Evidence:** `og/rema-charts.png` and `og/rema-crop.png`.
- **Suggestion:** Give the chip container its full row height, or cap it at one row plus "+N". Keep 16px or more of space above the stat tiles. Then bump the OG art version key.
- **Effort:** small.

### B-21: Peak pills identify 55 territories by flag alone, and two Billboard charts by globe glyphs. `design` · medium · both
- **Page:** `/afrobeats/rema/charts`. The same issue is on every chart board, including `/records/charts`.
- **Problem:**
  - Pills read "🇲🇩 #2", "🇱🇧 #2", "🇰🇿 #2", "🇸🇷 #…". The two Billboard global charts are told apart only by 🌍 against 🌐 ("🌍 #3", "🌐 #1").
  - The filter chips do print codes (MD, LB, KZ, GLB, GLBX), but the pills don't. The country name is only in a `title` attribute: 161 elements at 1440 and 120 on the phone, which is hover-only and invisible to touch.
  - For a journalist, this is a flag-recall test.
- **Evidence:** crop `rema-charts-1440-light-1450-0.png`; probe `titleOnly` 161 at 1440 and 120 at 390, with samples such as "Netherlands — Dutch Charts".
- **Suggestion:** Add the two-letter code in small mono after the flag, for example "🇲🇩 MD #2". Give the global charts word labels, for example "B200 #3" and "B-GLB #1". Design the phone (space is tight) and desktop separately. If codes don't fit on the phone, give a tapped pill a real popover.
- **Effort:** medium.

### B-22: An artist page shows two dates that mean different things, without saying so. `content` · low · desktop
- **Pages:** `/afrobeats/tyla` and `/afrobeats/wizkid` (and others).
- **Problem:**
  - Tyla's provenance line: "last verified 7 October 2026". The head-to-head note on the same page: "this board was last re-read at every register on 2 October 2026".
  - Wizkid shows "4 October" against the hub's "2 October".
  - These are probably different events (one artist's latest check against the full sweep), but a reader sees two dates.
  - This is close to known item afrobeatsA-02 (5 Oct).
- **Evidence:** crops `tyla-1440-light-650-0.png` and `tyla-1440-light-3050-0.png`.
- **Suggestion:** Name the two events once, in the same words everywhere. For example: "Last checked 7 Oct (Tyla's registers) · Full board sweep 2 Oct".
- **Effort:** small.

---

## 4. Owner rulings I considered and did not challenge

- **Ayra's gold section headings and gold panel figures** sit beside a purple name and button. This was Paul's explicit restraint call, and the effect is coherent enough. No change proposed.
- **The scatter hidden below 1240.** B-07 asks for a *different* phone and tablet form, not the scatter.
- **Per-plaque register links.** These were rejected on 28 Aug. B-21 asks only for labels on chart pills, not links.
- **Photo tiles staying dark in light theme.** The wall reads as a black block on paper, but "a photograph is not a theme" is settled.
- **The Gold tier ink equals the brand gold in light theme** (`#945e00` for both). This is site-wide and system-level, so I left it to the design-system lane.

There is nothing in the reconsider-ruling class. No ruling has evidence of real harm in this group.

---

## 5. Handoff notes for Claude Design (board)

**Draw desktop and phone as separate artboards. Never scale one into the other.**

1. **Phone artist hero (B-01).** A visible name line plus a portrait chip above the total. Draw it for Wizkid (long figures), Tyla (label-plaque exceptions note) and Ayra (gradient name). Keep the switches, the tier bars and the N2 chips under it. Burna's `/certifications` screen is out of scope unless you choose to align it.
2. **Artist local nav (B-02).** Three segments with counts, drawn for the desktop top and the phone top. It must not create a second pinned bar on the phone. Show the current segment on each of the three pages.
3. **Ledger row on desktop (B-03).** A fixed title column with pills starting at a fixed x. Draw the one-pill, eight-pill and 17-pill cases (Wizkid's Essence and One Dance), plus a "Most certified" strip of 3–5 records. Draw it at 1440 and 1024. Keep every row, with no collapse.
4. **Hub Table view (B-04) plus a Compare action (B-05).** Cards / Table toggle in the existing chart-board style. A 20-row table with joint ranks and Burna's row gold. One gold action: "Compare any two ↗".
5. **Scatter rescale (B-06).** Square-root y with ticks, 420–460px tall, the reading key derived from positions, and the chart placed above the photo wall. Type stays 11px, and the chart stays at 1240 and up only.
6. **Phone "shape" (B-07).** A wide-against-deep list for 390 and for 901–1239.
7. **Tile hook visibility and focus (B-08, B-09).** Hooks always shown, or revealed on focus, plus a focus ring that is not the anchor frame.
8. **Chart pill labels (B-21).** Flag plus code plus peak, and word labels for the two global charts, on phone and desktop.

**Constraints to hand over:**
- 11px type floor.
- `--type-*` tokens and the 62ch measure.
- Gold for his, live or action. Each page's subject keeps gold on its own headline.
- N2 chips.
- Hub rails: gold for permanent, green for live.
- Ayra's purple is page-only, and share cards stay gold.
- No accordions.
- Never two pinned bars on the phone.
- Tap targets of 44px or more.
- AA in both themes. Light gold is `#945e00`, and the purple ink is `#a3157f`.
