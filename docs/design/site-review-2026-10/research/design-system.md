# burnaboystats.com: the design system as built (8 Oct 2026)

For a designer who cannot open the code. Everything here was read from `origin/main` at **`e4b0afc8`** (PR #445 merged, 8 Oct 2026) with `git show origin/main:<path>`, and every claim carries a `file:line` citation from the repo root.

It updates and widens `docs/design/box-office-by-country/research/design-system.md` (3 Oct, scoped to the gross and certs pages). That file's component detail for the revenue boards, the countries page and the phone certs screen still holds. This one covers the whole site.

**Citation keys**

| Prefix | Means |
|---|---|
| `app/…`, `tests/…`, `docs/…` | repo file on `origin/main` @ `e4b0afc8` |
| `bundle/…` | the designer's local bundle, `design_handoff_burnaboystats/` at the repo root (`../../../design_handoff_burnaboystats/` from this folder; gitignored, not on GitHub) |
| `memory/…` | owner rulings recorded in the owner's local Claude Code memory notes (not in this repo) |
| `rulings.md` | `debug-1005/rulings.md` in the owner's local working folder (not in this repo), the owner-rulings sheet handed to every debug agent |

- **◇** marks a contrast ratio computed for this file: WCAG relative luminance from the token hex values, alpha composited over the named ground.
- **Σ** marks a count produced by scanning all 118 `.css` files and 239 `.tsx` files under `app/` on `origin/main` (script kept in the session scratchpad). Counts are of declarations, not of rendered elements.
- **≈** marks a position computed from CSS box rules, not measured in a browser. Verify in a browser before acting on it.

---

## 0. The five facts to hold before anything else

1. **Two layouts in one document.** Most routes render a desktop tree inside `.desktopOnly` and a separate `Mobile*` component, and CSS hides one at 900px. They are separate designs, not one design reflowed (`rulings.md:24`; `memory/feedback-design-handoff-rules.md:16-18`). Example: `app/page.tsx:98-100` renders `<MobileHome>` and then `<div className={styles.desktopOnly}>`. **Exception:** 12 page files are a single responsive tree: `/dai-dai`, `/dai-dai/es`, `/music/[song]` (15 songs), `/music/albums/[album]`, `/records/cars/[car]`, `/timeline`, `/search`, all four `/compare` routes and `/primitives` Σ. The song page draws its own phone back bar and action bar inside the one tree (`app/music/[song]/page.tsx:194-200`, `457`, `484`).
2. **One token block, two themes.** Every colour is written once as `light-dark(LIGHT, DARK)` and the theme switch changes only `color-scheme` (`app/globals.css:395-411`). **Dark is the default** for the server render, for visitors with no JS and for visitors who never chose (`app/globals.css:405-411`, `572-573`; `app/layout.tsx:209-235`).
3. **Gold carries meaning.** It marks what is his (Burna Boy's rows, figures, name), what is live, and what is the action. Data colours (certification tiers, peak bands, live deltas) are never gold (`app/globals.css:259-262`; `memory/project-home-upper-design-pass.md:11-14`). In light mode there is exactly **one gold, `#945e00`**, for text, fills and lines alike (`app/globals.css:56-67`).
4. **Three faces, three jobs.** Anton 400 for display, Geist for reading, Space Mono for labels only (`app/layout.tsx:22-40`; `app/globals.css:118-122`).
5. **No colour literal in a module.** New colours must be tokens in `globals.css`; a test enforces it (`tests/cssColourTokens.test.ts`), and every existing `color-mix()` strength is pinned (`tests/mixStrengths.test.ts`).

---

## 1. Type

### 1.1 Faces (`app/layout.tsx`)

| Role | Family | Weights loaded | Variable | Line | Used for |
|---|---|---|---|---|---|
| Display | **Anton** | 400 only | `--font-anton` (aliased `--font-display`, `--font-heading`) | `29-33`; aliases `app/globals.css:229`, `380` | h1, h2, figures, ranks, totals, tab-bar glyphs. Uppercase by default |
| Body | **Geist** | variable | `--font-geist-sans` (= `--font-body`) | `23-26`; `app/globals.css:381` | Prose, row titles, table cells, meta lines |
| Labels | **Space Mono** | 400, 700 | `--font-mono` | `36-40` | Kickers, eyebrows, chips, buttons, table heads, nav links, back-bar labels |

- The three variables are attached to `<html>` (`app/layout.tsx:198`). `body` sets Geist with a flag-only "Twemoji Country Flags" face first, for Windows (`app/globals.css:657-660`).
- **Anton has no bold.** `--font-heading-weight: 400` (`app/globals.css:382-384`); modules repeat `font-weight: 400 /* Anton has no bold cut */` (e.g. `app/components/mobileDeepPage.module.css:78`). The global `h1` is Anton 400, uppercase, tracked 0.01em (`app/globals.css:708-713`).
- **Numerals are tabular** on `table`, `.tabular` and any class whose name contains `stat`, `Num` or `num` (`app/globals.css:596-602`).

### 1.2 The reading scale (`--type-*`, `app/globals.css:93-128`)

| Token | Size / line-height | Job | Line |
|---|---|---|---|
| `--type-lede` | **18px** / 1.5, **20px at ≥900px** | A page's opening line | `107-108`, `568-570` |
| `--type-body` | 16px / 1.6 | Reading prose | `109-110` |
| `--type-small` | 13.5px / 1.5 | List meta, notes under figures, card descriptions | `113-114` |
| `--type-caption` | 12.5px / 1.45 | Provenance, footnotes, figcaptions | `116-117` |
| `--type-label` | 11px / 1.2, tracking 0.11em | Kickers, table heads, chips: Space Mono 700 uppercase, "never a sentence" | `120-122` |
| `--type-h-prose` | 20px / 1.3 | Headings inside prose (FAQ questions, methodology sections) | `125-126` |
| `--measure` | **62ch** | Maximum width of any prose block | `128` |

Σ `var(--type-…)` appears 674 times and `var(--measure)` 26 times. The names are `--type-*` because `--text-body` was already a colour (`app/globals.css:99-102`).

**Type floor.** The comment says "nothing on this site sets a font-size below 11px" (`app/globals.css:302-305`). As built that is not true (§11.3): there are `9px`, `10px` and `10.5px` declarations. The designer bundle's own floor is 10px (`bundle/README.md:140`, `251`).

### 1.3 Display sizes as built

Display sizes are **not tokens**; each module sets its own. Σ Anton/display declarations use **81 distinct `font-size` values**, and across all CSS there are **68 distinct px font sizes** (9px to 210px).

**Desktop page h1** (the rule each page's `<h1>` uses; the second value applies at ≤1239px):

| Size | Pages (CSS line) |
|---|---|
| 108 → 75 | Home "Burna **Boy**" (`app/page.module.css:110`, `200`) |
| 104 → 76 | `/music` (`app/music/music.module.css:92`, `461`) |
| 96 → 70 | `/records`, `/certifications`, `/live-charts` and the board live pages, `/updates`, `/about`, `/faq`, `/contact`, `/naija66`, `/on-this-day` (+ day pages: 96, no tablet step) (`app/records/records.module.css:66`, `225`; `app/certifications/certifications.module.css:507`, `770`; `app/live-charts/liveCharts.module.css:418`, `575`; `app/updates/updates.module.css:35`, `221`; `app/about/about.module.css:26`, `132`; `app/faq/faq.module.css:26`, `140`; `app/contact/contact.module.css:25`, `81`; `app/on-this-day/onThisDay.module.css:14`) |
| 92 → 67 | `/records/firsts`, `/records/tours` (`app/records/firsts/firsts.module.css:60`, `148`; `app/records/tours/tours.module.css:44`, `403`) |
| 88 → 64 | `/records/awards`, `/records/tours/festivals`, `/dai-dai` (46 on the phone) (`app/records/awards/awards.module.css:220`; `app/records/tours/festivals/festivals.module.css:29`; `app/dai-dai/dai-dai.module.css:31`, `121`, `133`) |
| 84 → 61 | `/records/tours/revenue` (`app/records/tours/revenue/revenue.module.css:35`, `473`) |
| 82 → 60 | `/records/charts` (+ board chart pages), `/records/africas-biggest`, `/records/cars`, `/records/visualized`, `/api`, `/embed`, `/share` (`app/records/charts/charts.module.css:419`, `540`; `app/records/africas-biggest/africas-biggest.module.css:23`; `app/records/cars/cars.module.css:91`; `app/records/visualized/visualized.module.css:20`; `app/api/api.module.css:25`; `app/embed/embed.module.css:20`; `app/share/share.module.css:13`) |
| 78 → 57 | `/methodology`, `/music/listeners` (`app/methodology/methodology.module.css:25`, `224`; `app/music/listeners/listeners.module.css:23`) |
| 76 → 55 | `/records/by-the-numbers` (`app/records/by-the-numbers/byTheNumbers.module.css:32`) |
| 72 → 52 | `/analysis` (`app/analysis/analysis.module.css:22`, `237`) |
| 68 → 49 → 38 | song and album pages (`app/music/[song]/song.module.css:119`, `346`, `398`) |
| 64 | `/curator`, `/press` (`app/curator/curator.module.css:21`; `app/press/press.module.css:21`) |
| 54 → 36 | car pages (`app/records/cars/[car]/car.module.css:69`, `572`) |
| clamp() | `/afrobeats` and `/timeline` `clamp(44px,7vw,92px)`; board artist `clamp(40px,6vw,76px)`; `/compare` and `/analysis/spotify-unmerge` `clamp(38px,6vw,68px)` (`app/afrobeats/afrobeats.module.css:25`; `app/timeline/timeline.module.css:65`; `app/afrobeats/[artist]/artist.module.css:109`; `app/compare/compare.module.css:39`; `app/analysis/spotify-unmerge/unmerge.module.css:24`) |

That is **13 fixed desktop h1 sizes plus 4 clamps** across 44 routes. The tablet step is a consistent ×0.73 (96→70, 82→60, 88→64), matching the bundle's "display type drops one step" (`bundle/RESPONSIVE-AND-STATES.md:49`).

**Phone screen title** (each `Mobile*.tsx`'s `<h1>` class): 30 (home, under a 140px gold figure), 34 (analysis), 36 (methodology), 40 (awards, listeners, revenue, countries, tour map, unmerge, visualized), 42 (festivals), 44 (afrobeats hub, curator, firsts, press), 46 (africa's biggest, api, embed, official charts, stat cards, tours), 48 (about, contact, faq, naija66), 52 (live charts, on this day, records, updates), 56 (music). Certs makes the **total** the h1 at Anton 86 (`app/components/mobileCerts.module.css`, per the 3 Oct file §2.3). Sources: `app/components/mobile<Name>.module.css` title rule, e.g. `mobileHome.module.css:182-191`, `mobileMusic.module.css:77`, `mobileAnalysis.module.css:72`. **10 distinct phone title sizes across 33 screens.**

**Section h2** ranges 26–44 (bundle spec 34–44, `bundle/README.md:128`); the home h2 is 40 (`app/page.module.css:413-419`), the revenue h2 38, the phone h2 26 (3 Oct file §2.3).

**Big figures**: home desktop scoreboard 52 (`app/page.module.css:276-297`), phone stat strip 32 (`app/components/mobileDeepPage.module.css:110-116`), phone home figure **140** in the gold display ramp (`app/components/mobileHome.module.css:80-95`), desktop home "today's number" panel figure 92 (`memory/project-home-upper-design-pass.md:19-20`).

### 1.4 Labels (Space Mono)

| Pattern | Spec | Source |
|---|---|---|
| Button label | 700 / 13px / 0.08em uppercase | `app/globals.css:818-825` |
| Desktop nav link | 12.5px / 0.12em uppercase (12px / 0.1em at ≤1500; 0.07em at 1240–1280) | `app/globals.css:1047-1062`, `1092-1103` |
| Desktop eyebrow with tick | 700 / 11.5px / 0.18em, `--text-muted`, preceded by a 22×2 rule | `app/page.module.css:128-138`, `190-196`; `app/records/records.module.css:54-64` |
| Phone kicker | 700 / 11px / 0.11em | `app/components/mobileDeepPage.module.css:68-75` |
| Chip | 700 / 11px / 0.1em | `app/components/mobileDeepPage.module.css:135-151` |
| Table head | 11px / 0.08em, `--text-muted` | `app/globals.css:2110-2119` |
| Breadcrumb | 11.5px / 0.12em (11px on phones) | `app/components/breadcrumbBar.module.css:10-14`, `38` |

Σ there are 23 distinct `letter-spacing` values; the most used are 0.1em (171), 0.01em (156), 0.11em (156), 0.08em (107), 0.12em (91).

---

## 2. Colour (all in `app/globals.css`; light | dark)

### 2.1 Surfaces — the ramp page → card → well → hover

| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` | Page | 23 |
| `--bg-soft` | `#ffffff` | `#141416` | Card, panel, back circle | 24 |
| `--bg-soft-2` | `#efeae1` | `#1c1c21` | Well, track, photo matte | 25 |
| `--bg-raised` | `#e6e0d4` | `#24242a` | Hover / pressed. **Presses darker on paper, lifts lighter on black** | 175 |
| `--hover` | 40% of the way from page to `--bg-raised` | `--bg-raised` | Box-office row hover (keeps his gold at 4.62:1 on paper) | 176-181 |
| `--btn-face` | `#ffffff` | `#24242a` | Secondary button face | 197 |
| `--scrim` | `rgba(247,244,238,.94)` | `rgba(12,10,9,.94)` | Masthead, tab bar, every back bar and action bar, under `blur(14px)` | 210 |
| `--sheet-crown` | `#efeae1` | `#111113` | Top of the phone nav sheet | 201 |
| `--photo-well` | `#efeae1` | `#1c1c21` | Matte behind a car photo | 528 |
| `--bg-float` / `--card-glass` | white 90% / 86% | near-black 90% / 86% | Floating controls (Back to top), glass cards | 530-531 |

Rule from Task C: **no photograph on bare `--bg`** — photos sit on a card or well (`memory/project-burnaboystats-rhythm.md:29-37`).

### 2.2 Lines — "promote the weight, never reclassify" (`:27-34`)

| Token | Light | Dark | ◇ vs page | Role |
|---|---|---|---|---|
| `--line` | ink 12% | paper 12% | 1.28 / 1.31 | Decorative hairline; every row separator. Σ 603 uses |
| `--rule-soft` | ink 30% | paper 24% | ≈1.97 | Secondary structure. Σ 81 |
| `--rule` | ink 48% | paper 38% | ≈3.30 | Structural; clears 3:1. Σ 134 |
| `--border` | `#dcd9d3` | `#26262b` | 1.28 / 1.31 | Card and field edge. **Not enough for a control** (`:872-875`). Σ 91 |
| `--btn-edge` | ink 55% | paper 42% | 3.96 / 3.78 | Control boundary (`:197-198`) |

### 2.3 Text

| Token | Light | Dark | ◇ on `--bg` L / D | ◇ on `--bg-raised` L / D | Line |
|---|---|---|---|---|---|
| `--text` | `#17140f` | `#f5f4f0` | 16.7 / 18.0 | | 37 |
| `--text-body` (+ `-cool`, `-cool-quiet`, `-warm`) | `#4a443b` (warm `#544d43`) | `#cfc7bb` / `#d8d8de` / `#d3d3da` / `#b8b0a5` | 8.77 / 11.82 | 7.33 / 9.22 | 74, 431-435 |
| `--text-muted` | `#5f584f` | `#9b9ba3` | 6.39 / 7.17 | 5.33 / 5.59 | 38 |
| `--dim` | `#6f685f` | `#85858e` | 5.01 / 5.41 | **4.18 / 4.22** (fails 4.5) | 343 |
| `--text-fade` | 1 | 0.9 | the one allowed text opacity | | 508, 591 |

Dark keeps three cool greys where light has one warm one; the migration deliberately left that consolidation for a separate decision (`:425-430`).

### 2.4 Gold — one gold on paper

| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--gold` → `--gold-ink` | `#945e00` | `#ffb627` | Text, lines, icons, his figures. Σ `var(--gold)` 565 uses | 49, 67 |
| `--gold-fill` | `#945e00` | `#ffb627` | Button and bar fills | 65 |
| `--gold-display` | `#945e00` | `#ffb627` | Anton ≥24px | 66 |
| `--gold-bright` / `--gold-dim` | `#945e00` | `#ffd24a` / `#c98a2e` | Top / bottom of the fill ramp | 50, 212 |
| `--gold-bright-ink` | `#945e00` | `#ffd24a` | Bright gold used as text | 454 |
| `--gold-hit` | `#5f3c00` | `#ffd24a` | Hover fill: deeper on paper, brighter on black | 457 |
| `--ink-on-gold` | **`#ffffff`** | `#14100a` | Label on a gold fill (white 5.44:1 on `#945e00`; near-black 10.8:1 on `#ffb627`) | 71 |
| `--display-ramp-a/b/c/dim` | all `#945e00` | `#ffd24a` / `#ffb627` / `#ff7a1a` / `#c98a2e` | Gradient for gold **text** (`.inkText`, `.goldText`, phone `.gold`) | 137-140 |
| `--gold-wash-base`, `--gold-wash`, `--gold-edge` | `#945e00`, 10%, 30% | `#ffb627`, 10%, 30% | Bases for `color-mix()` washes | 141-146 |
| `--wash-strength` | **0.42** | 1 | Multiplier: `calc(N% * var(--wash-strength))` | 497, 589 |
| `--gold-band-a/b`, `--gold-band-sheen` | `#945e00`, transparent | `#f08a12` / `#d96c0c`, pale sheen | The home closer band | 214-220 |

- **Fill ramp** (every gold action): `background-color: var(--gold-fill); background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%)` (`app/globals.css:834-845`; phone action bar `app/components/mobileDeepPage.module.css:317-318`). On paper it is **flat** `#945e00` with white ink.
- ◇ Gold text on paper: 4.96 on `--bg`, 5.44 on `--bg-soft`, 4.54 on `--bg-soft-2`, **4.14 on `--bg-raised`** (fails 4.5 for small text).
- ◇ In light mode **gold `#945e00`, ember `#b34700` and `--dim` `#6f685f` all sit at ~5.0:1 on the page** (4.96 / 5.01 / 5.01): on paper the three are separated by hue alone.
- **The masthead's wordmark gold, the gold action fill and gold data ink are the same colour on paper**; in dark the action has the ramp and the data has flat `#ffb627`.

### 2.5 Signatures and status

| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--ember` | `#b34700` | `#ff7a1a` | **Records-family signature**, on the kicker tick; the selected-chip edge (N2) | 158 |
| `--chip-on-edge` / `--chip-on-wash` / `--chip-on-ink` | ember / ember 10% / `--text` | ember / ember 16% / `--text` | **The selected chip on every phone rail** (ruling N2) | 159-173 |
| `--green` (= `--live`) | `#146b3c` | `#3ed17f` | Live, verified, positive delta; live-charts and updates signature | 323, 392 |
| `--green-dot` / `--live-dot` | `#1f9a5a` | `#3ed17f` / `#35d07f` | Non-text dot (3:1 floor) / the live pulse | 326, 543 |
| `--red` | `#c0392b` both | | Ambient wash only, **never text** | 333 |
| `--red-ink`, `--error-ink`, `--delta-down`, `--move-down` | all `#b3261e` | `#e0796d` / `#e06a5c` / `#f2726a` / `#e2564a` | Negative delta, error, chart move down | 334, 536-538 |
| `--sold-ink` | `#8f4700` | `#f5890b` | "A fact, not a warning" (sold cars) | 539 |
| `--flag-green` / `--flag-white` | `#008751` / `#ffffff` | same | Naija @ 66 motif, never text | 331-332 |
| `--other` | `#888a93` | `#74747e` | Other artists' bar segments beside his gold | 186 |
| `--hatch` | ink 10% | paper 10% | Not-reported cells (decorative; the words carry it) | 189 |

### 2.6 Data palettes (never gold-substituted)

| Palette | Values | Line |
|---|---|---|
| **Certification tier fills** (same both themes) | Platinum `#EFEDE6`, Gold `#FBB417`, Diamond `#31A1C0`, Silver `#848F9E` | 292-301 |
| Tier **inks** (words, dots on paper) | Platinum `#2f3a4e`, Gold `#945e00`, Diamond `#0b6e7e`, Silver `#6b6b74`; in dark each ink = its fill | 311-314 |
| Tier edges | 60% of the ink on paper; 29–62% of the fill in dark | 315-318 |
| Peak bands, flat | `--cyan` Top 10 (`#0b6e7e` / `#8fe3f0`), `--silver` Top 40 (`#6b6b74` / `#dfe2e8`), `--peak-rest` beyond (`#6b6b74` / `#9aa0a6`) | 263-264, 548 |
| Peak ramp (donuts) | `--peak-band-1/5/10/40/rest`: light runs dark→light (`#57360a` … `#dad5cb`), dark runs bright→dim (`#ffd24a` … `#5a5a62`) | 272-276 |
| Award arcs | `--seg-rest`, `--seg-pending` | 279, 282 |
| Map | `--map-played` `#a3742a` / `#a07820` (3.44 / 3.73 vs land), `--map-land`, `--map-border`, `--map-sea` | 458-472 |
| Muted marks | `--bar-muted`, `--dot-muted` (3:1 floor) | 546-547 |

◇ Tier **fills** on paper: Platinum 1.07, Gold 1.64, Diamond 2.74, Silver 2.99. That is why paper uses the `-ink` set for anything read (`:306-310`).

### 2.7 Brand exception: Ayra Starr

`[data-brand="starrgirl"]` scopes a pink-to-violet brand to her own pages only (`app/globals.css:551-563`; button `2276-2298`; phone active chip `app/components/mobileCerts.module.css:932`). Her link-preview cards stay gold (`memory/feedback-og-cards-stay-gold.md:8-28`).

### 2.8 Dark-room devices (visible on black, gone on paper)

| Device | Light | Dark | Line |
|---|---|---|---|
| Ambient wash `body::before` (warm top, red base) | transparent | `#e8b04b` 10% / `#c0392b` 10% | 473, 480, 674-683 |
| Vignette `body::after` | transparent | inset 200px black 70% | 483, 684-691 |
| Film grain `.grain` | opacity 0.022 | 0.06 | 484, 590, 694-701; mounted `app/layout.tsx:250` |
| Halos, glows, text-halo on the wordmark | transparent / `none` | gold / black | 448, 474, 479, 582 |
| Shadow | `0 12px 32px` ink 14% (strength 0.31) | `0 20px 50px` black 45% | 246, 489-490, 581-585 |
| Text fade | 1 (none) | 0.9 | 508, 591 |

**Photo tiles are a dark island** in both themes: add the global class `photoTile`, which joins the token-declaring selector and pins `color-scheme: dark` (`app/globals.css:6-8`, `76-91`; `memory/project-burnaboystats-theming.md:49-56`).

### 2.9 Token debt that ships

- **Spacing tokens `--sp-1…--sp-32` (4–128px) have 0 uses** Σ (`app/globals.css:231-241`). All spacing is literal px.
- `--radius`, `--radius-md`, `--radius-lg` are all 6px (`:244`, `345-346`).
- Legacy spec aliases (`--color-bg`, `--muted`, `--color-accent-100…900`) resolve onto the repo names (`:348-381`). Σ `var(--muted)` is still read in `app/afrobeats/**` (e.g. `app/afrobeats/[artist]/artist.module.css:192`, `430`).
- `--grad-a/b/c` and `--warm-grad` are fixed hex, not themed (`:222-226`). The crown mark's gradient ends in `--grad-b` (`app/components/BrandMark.tsx:46-47`), so on paper the mark runs brass `#945e00` → orange `#ff7a1a`.
- Literal colours that survive in modules (allowlisted): tab-bar press `rgba(255,182,39,.08)` (`app/components/mobileTabBar.module.css:44`), search trigger `rgba(245,244,240,.05)` (`app/components/SearchPalette.module.css:6`), `.tagNeutral`/`.tagDiamond`/`.tagPlatinum`/`.tagLive` plates (`app/globals.css:2098-2102`), masthead dark gradient `rgba(9,9,11,.9)` (`:962`, overridden in light at `:944-948`).

---

## 3. Shape, depth, spacing, containers, motion, layers

| Item | Value | Source |
|---|---|---|
| Pills | **999px** for buttons, chips, tags, back circles, action buttons. Σ 262 declarations | `app/globals.css:817`, `2092` |
| Cards / panels | `--radius` 6px; small 4px | `:244-245`, `1298-1304` |
| Off-token radii | Σ 2, 3, 5, 8, 9, 10, 12, 13, 14px all in use; e.g. tab 12 (`app/components/mobileTabBar.module.css:39`), search panel 14 (`app/components/SearchPalette.module.css:60`), focus ring 3 (`app/globals.css:1894-1896`) | |
| Rows | Full-bleed bands, no radius, separated by `--line`; head row carries a 2px rule | `app/globals.css:2110-2123`; `app/components/mobileDeepPage.module.css:181-187` |
| Desktop container | **`.wide` = 1360px max, 40px gutter** (Σ 45 rules), dropping to 32px at ≤1239 | e.g. `app/records/records.module.css:49-53`, `224` |
| Legacy container | `.container` = `--max-width` **1280px**, 24px gutter (Σ 11 rules); used by Keep exploring | `app/globals.css:257`, `740-745`; `app/components/KeepExploring.tsx:97` |
| Masthead | 1360 max, 40px gutter, **24px at ≤1500** | `app/globals.css:986-998`, `1092-1093` |
| Phone gutter | **18px** (masthead, back bar, rows, action bar) | `app/globals.css:1109-1111`; `app/components/mobileDeepPage.module.css:24`, `67`, `184` |
| Section rhythm | Home `clamp(44px,5.5vw,62px)`; records hero `54 40 46`; Keep exploring `64 / 80` (36 / 56 at ≤760) | `app/page.module.css:55-59`; `app/records/records.module.css:53`; `app/components/KeepExploring.module.css:6-14` |
| Motion | `--ease` ease; `--ease-out` `cubic-bezier(.22,1,.36,1)`; `--dur-fast/--dur/--dur-slow` .15/.2/.3s | `app/globals.css:249-255` |
| Reduced motion | Global kill switch (0.001ms); button lift dropped, primary keeps `translateZ(0)` | `:1771-1778`, `2191-2199` |
| Anchor clearance | `[id]` 88px; focusable elements 81px; 0 inside sticky bars | `:620-646` |

**Layer stack (z-index):** back bar 5 (`app/components/mobileDeepPage.module.css:20`) → action bar 40 (`:297`) → Back to top 45 (`app/components/BackToTop.module.css:5`) → masthead 50 (`app/globals.css:959`) → five-tab bar 60 (`app/components/mobileTabBar.module.css:14`) → nav sheet 61 (`app/components/mobileNavSheet.module.css:9`) → search overlay and skip link 200 (`app/components/SearchPalette.module.css:47`; `app/globals.css:1847`).

≈ **Three left edges at 1440.** The masthead content starts at x≈64 (1360 box, 24px padding at ≤1500), page content in `.wide` at x≈80 (40px padding), and the Keep exploring cards at x≈104 (1280 `.container`, 24px padding). At ≥1501 the masthead joins the page at 160 and Keep exploring stays 24px inside it. Computed from `app/globals.css:740-745`, `986-998`, `1092-1093` and `app/records/records.module.css:49`; verify in a browser.

---

## 4. Breakpoints

| Band | What switches | Source |
|---|---|---|
| **≤900** phone | Every `Mobile*` screen and its chrome; `.desktopOnly` hidden; footer hidden; Box office pill hidden; app-state shell restacks. Σ 98 `max-width: 900px` queries | `app/globals.css:1219-1225`, `2230-2232`, `2468-2504` |
| 900 exactly | Both the phone layout (`max-width: 900px`) and the 20px lede (`min-width: 900px`) apply | `app/globals.css:568-570` |
| **901–1239** tablet | Hamburger + nav sheet; display type ×0.73; tables drop their lowest-priority column; grids drop a column. Σ 43 `max-width: 1239px` queries | `app/globals.css:1787-1794` |
| **≥1240** | Ten inline nav links | `app/globals.css:1787-1794` |
| 1240–1280 | Tightest nav spacing | `:1100-1103` |
| **≤1500** | Masthead gutter 40→24, link gaps close | `:1092-1097` |
| ≥1440 | Back-to-top button appears (desktop only from 1440) | `app/components/BackToTop.module.css:63-64` |
| `pointer: coarse` | 44px floor for chrome links, the hamburger and `.btnIcon` | `app/globals.css:1823-1838`, `2076-2081` |
| Ad hoc | Σ 43 distinct media queries in all, incl. 760, 720, 700, 640, 620, 560, 520, 480, 401, 391, 389, 379, 367, 360, 359, 355, 340, plus `max-height: 780px` | scan |

The bundle's rule is **two breakpoints, not a continuum**: ≥1240, 900–1239, <900 (`bundle/RESPONSIVE-AND-STATES.md:5-13`). Owner rule: a control and the panel it opens share one breakpoint, and the ~1024 band must be tested (`memory/feedback-one-breakpoint-per-control.md:18-21`).

---

## 5. Chrome

### 5.1 Desktop masthead (`app/components/Nav.tsx`, `app/globals.css:921-1141`)

- Sticky, 68px row + 1px edge = 69px (`app/globals.css:950-965`, `986-990`). In dark it is a transparent gradient that turns solid and blurred after 24px of scroll (`:968-985`; `app/components/Nav.tsx:28`); on paper it is solid `--scrim` from the top (`app/globals.css:944-948`).
- **It themes with the page** (owner, 7 Sep; it was a dark island in the design) (`app/globals.css:14-19`; `memory/project-burnaboystats-theming.md:25-31`).
- Left to right, also the Tab order: crown mark 22px + wordmark "BURNABOY**STATS**" Anton 1.5rem / 0.04em with "STATS" in `--gold-display` (`app/components/Nav.tsx:50-57`; `app/globals.css:1019-1035`) → **ten links**: Home, Music, Certifications, Records, Live Charts, Afrobeats, Updates, About, FAQ, Contact (`app/lib/links.ts:7-18`) → one-tap theme flip (34px, 44px hit) (`app/components/Nav.tsx:88`; `app/components/themeToggle.module.css:73-96`) → search trigger pill with ⌘K (`app/components/Nav.tsx:91`; `app/components/SearchPalette.module.css:2-32`) → **"Box office" outlined pill** 38px to `/records/tours/revenue` (owner, 7 Oct; it was "Stat card"), deliberately *not* gold-filled so the page's own gold action stays the only one (`app/components/Nav.tsx:98-121`; `app/globals.css:2201-2232`) → hamburger (below 1240).
- Active link: gold text + 2px gold underline (`app/globals.css:1063-1078`, `1937-1942`).
- On every route with its own phone chrome the masthead is hidden ≤900 (`.navDesktopOnly`, `app/globals.css:2263-2267`; `app/components/Nav.tsx:21`, `47`).

### 5.2 Phone nav sheet (`app/components/MobileNavSheet.tsx`, `mobileNavSheet.module.css`)

One instance for the site, opened by any hamburger via an event (`app/layout.tsx:273-281`). It drops from the top, leaving a 76px strip of page to tap to dismiss (`app/components/mobileNavSheet.module.css:52-66`, `21-35`). Head: 17px Anton brand + 44px gold-ringed close (`:72-103`); a 48px search pill (`:116-131`); grouped rows, 52px tall, Anton 19 labels, active row gold with a 2px gold rule (`:152-191`). It hides the tab bar while open (`app/globals.css:2269-2274`). Groups come from `app/lib/navGroups`.

### 5.3 Which phone chrome each route gets (`app/lib/mobileScreens.ts`)

| Chrome | Routes | Source |
|---|---|---|
| **Masthead + five-tab bar** | Home, the `/compare` routes (Certs tab lit) and `/primitives`: every route that is in none of the sets or predicates | `:16-65`, `160-165`; `app/components/MobileTabBar.tsx:82` |
| **Back bar + five-tab bar** | `/music`, `/records`, `/live-charts`, `/afrobeats` (hub, chart and live boards), `/timeline`, `/search`, `/updates`, `/about`, `/faq`, `/contact`, `/embed`, `/dai-dai` (+ `/es`), `/on-this-day` and day pages, `/records/cars` and car pages, `/curator`, `/press`, `/analysis/spotify-unmerge`, `/naija66` | `:16-65`, `121`, `138`, `144`; comments in the set |
| **Back bar + action bar (no tabs)** | `/certifications`, `/records/charts`, `/records/awards`, `/records/firsts`, `/records/tours`, `/records/tours/revenue` (+ `/countries`), `/records/tours/festivals`, `/records/tours/map`, `/records/by-the-numbers`, `/records/africas-biggest`, `/records/visualized`, `/analysis`, `/methodology`, `/api`, `/share`, every `/music/<slug>` and album page, and each `/afrobeats/<artist>` page | `:78-102`, `111`, `132`, `166-167` |

Owner calls embedded there: the board keeps the five tabs (Paul, 17 Aug) (`:113-120`); a board artist page shows only the Compare bar, not two stacked bars (Paul, 12 Sep) (`:123-131`); the story pages keep the five tabs (Paul, 9 Aug) (comment beside `/dai-dai`); cars keep the five tabs (CARS-HANDOFF §5.1–5.2, comment in the set). Five of the action-bar routes (awards, festivals, firsts, africa's biggest, visualized) draw **no** bar at all, because the screen is already the full list (`:67-77`).

### 5.4 Back bar (shared grammar, re-implemented per screen)

Sticky, z 5, `--scrim` + `blur(14px)`, 1px `--line` bottom, padding `12px 18px` plus safe insets, flex with a 12px gap (`app/components/mobileDeepPage.module.css:17-34`). Parts: **44px back circle** in `--bg-soft` with a `--btn-edge` ring (`:35-46`); **label** mono 700 11px / 0.11em uppercase (`:47-56`); **badge** right-aligned mono 11 / 0.1em in **gold** (owner, 30 Sep: badges gold) (`:57-64`; `memory/project-tour-map-design-handoff.md:12`); the 44×44 hamburger (`app/components/MobileMenuButton.tsx`). ≈ Height 69px + safe top.

Σ This grammar is **re-declared in 31 modules** (`.backBar` 31, `.backBtn` 32, `.backLabel` 33). All 32 back circles use the same `--btn-edge` ring; **30 of the 33 label rules carry no ellipsis clamp** (e.g. `app/components/mobileTours.module.css:47`, `mobileRecords.module.css:47`, `mobileMusic.module.css:47`), so a long label wraps instead of truncating. Only `mobileDeepPage.module.css:47-56` and `mobileCerts.module.css` clamp.

### 5.5 Five-tab bar (`app/components/MobileTabBar.tsx`, `mobileTabBar.module.css`)

Fixed bottom, z 60, `--scrim` + blur, five equal columns: ◆/crown **Home**, ♪ **Music**, ★ **Certs**, ▲ **Charts** (→ `/live-charts`), ⌗ **Records** (`app/components/MobileTabBar.tsx:36-43`). Icon Anton 15px over a mono 700 11px / 0.06em label; muted at rest, **gold when active** (`app/components/mobileTabBar.module.css:32-81`). Home uses the crown mark at 16px, dimmed by opacity rather than recoloured (LOGO rule) (`:47-64`). Height = `--tabbar-pad` 8 + `--tabbar-row` 48 + `--tabbar-foot` max(30, safe) + 1 = **≥87px** (`app/globals.css:1964-1972`). Extra lighting rules: Charts lights on `/records/charts` and the board pages, Certs on board artist pages and `/compare`, Records on `/on-this-day` (`app/components/MobileTabBar.tsx:80-86`). It is absent wherever the route has an action bar (`:94`) and on the app-state screens (`app/globals.css:2011-2017`).

### 5.6 Action bar (deep screens)

Fixed bottom, z 40, `--scrim` + blur, 1px `--line` top, padding `12 18` + safe bottom (fallback 22) (`app/components/mobileDeepPage.module.css:292-307`). Primary: `flex: 1`, **50px** pill, the gold ramp, `--ink-on-gold` pinned, mono 700 11px / 0.12em, gold glow in dark (`:308-330`). Optional secondary (outlined, 50px) and a 50px icon circle (`:331-341`; `app/components/mobileCerts.module.css:617`, `945`). ≈ 75px + safe bottom. A spacer of 104–110px keeps the last row clear (`app/components/mobileDeepPage.module.css:289`; `app/components/mobileCerts.module.css:575`). Σ re-declared in 11 modules.

≈ **Fixed chrome on a phone deep screen** = back bar 69 + action bar 75–109 = **144–178px of an 812px-tall viewport (18–22%)**; on a tab-bar screen with the masthead, 69 + ≥87 = **≥156px**.

### 5.7 Breadcrumb bar (desktop, `app/components/BreadcrumbBar.tsx`, `breadcrumbBar.module.css`)

Under the masthead on deep desktop pages: 1360/40, padding 12, mono 11.5px / 0.12em uppercase, muted links, current page in `--text`, "/" separators, 1px `--line` bottom; links 24px tall (44px on phones) (`app/components/breadcrumbBar.module.css:1-40`). Labels come from the same map as the JSON-LD (`app/components/BreadcrumbBar.tsx:5-11`). Present on 34 page files Σ; absent on home, `/dai-dai` (+ `/es`), `/search`, and `/primitives`. The song and album pages draw their own crumbs (`app/music/[song]/page.tsx:194`).

### 5.8 Footer (`app/components/FooterNav.tsx`, `app/globals.css:1142-1225`, `2234-2261`, `2300-2319`)

- **Home**: five-column sitemap (1.5fr + 4×1fr, gap 36), Anton 13px column titles, muted 13px links, 23px wordmark, 12.5px disclaimer at 38ch (`app/globals.css:1145-1217`; columns `app/lib/links.ts:45-100`).
- **Every other page**: compact footer, wordmark + that page's provenance line (46ch) left, its four onward links in mono 12px right (`app/globals.css:2234-2261`; `app/components/FooterNav.tsx:28-30`).
- Both carry the three-state **Appearance** control (Dark / Light / System) (`app/components/FooterNav.tsx:48-55`, `82-89`; `app/globals.css:2300-2319`).
- **No footer on phones**; it stays in the HTML for crawlers (`app/globals.css:1219-1225`).

### 5.9 Other floating chrome

- Skip link: gold ramp pill, 44px, top-left on focus (`app/globals.css:1843-1864`; `app/layout.tsx:248`).
- Back to top: 46px circle, `--bg-float`, ≥1440 only (`app/components/BackToTop.module.css:1-12`, `63-64`).
- Search palette: ⌘K / Ctrl-K, 560px panel at 12vh, radius 14 (`app/components/SearchPalette.module.css:44-64`).

---

## 6. Controls

### 6.1 Buttons (`app/globals.css:786-919`, `2021-2081`)

| Variant | Spec | Line |
|---|---|---|
| `.btn` | inline-flex, **46px** tall, padding `0 26px`, gap 6, pill, mono 700 13px / 0.08em uppercase | 808-830 |
| `.btnPrimary` | Gold ramp, `--ink-on-gold` pinned twice, glow `0 8px 30px` 24% (dark only); hover lifts 3px | 831-870 |
| `.btnSecondary` | `--btn-face`, `--btn-edge` border, `--text` label; hover lifts, edge and label go gold | 871-919 |
| `.btnGhost` | transparent, gold label, padding `0 8px` | 2039-2060 |
| `.btnIcon` | 36px, 44px on coarse pointers | 2066-2081 |
| `.btnBlock` | full-width, left-aligned (home closer stack) | 2161-2164 |
| Disabled | opacity .45, no lift | 2027-2037 |
| **iPhone guard** | Every button pins `-webkit-text-fill-color`, resets filter/blend/opacity and holds `translateZ(0)` at rest, because labels rendered blank or orange on iPhones. Keep it on any new button | 846-864, 881-910, 2042-2052 |

**The link rule** written above `.btn` (`app/globals.css:789-807`): *filled* = the ONE primary action in a section; *outlined* = its secondary; *arrow ↗* = navigation to a sibling page; *bare text* = utility. The one known violation is recorded as home's "Read the story ↗" (filled **and** arrowed), parked with the history band (`:802-806`; `memory/project-home-upper-design-pass.md:47-49`).

As built Σ: **40 filled buttons, 26 of them carry an arrow** (↗ or →) in the label, e.g. `app/certifications/page.tsx:356` "Compare ↗", `app/records/charts/page.tsx:200` "Live charts today ↗", `app/analysis/page.tsx:233` "Methodology ↗"; 85 outlined buttons, 47 with ↗. Some sections carry **two filled buttons**: the board artist page's onward row has six buttons, two gold ("Next: … →" and "Compare ↗") (`app/afrobeats/[artist]/page.tsx:693-710`); the certifications desktop hero has one primary and three secondaries (`app/certifications/page.tsx:353-367`).

### 6.2 Chips

| Chip | Spec | Source |
|---|---|---|
| **Phone rail chip** (shared grammar) | 44px min, padding `0 15px`, pill, 1px `--line`, `--text-body`, mono 700 11 / 0.1em; rail gap 8, padding `14 18 4`, horizontal scroll with edge fades | `app/components/mobileDeepPage.module.css:128-151`; fades `app/components/scrollRail.module.css:7-18` |
| **Selected (N2)** | `--chip-on-wash` + `--chip-on-edge` + `--chip-on-ink`: ember edge, ember wash, **ink label, never a gold fill** | `app/globals.css:159-173`; `app/components/mobileDeepPage.module.css:152-154`; `tests/phoneChipsN2.test.tsx` |
| Desktop filter chips | Stay **gold** (owner: N2 is phone-only), e.g. `/updates`, `/search`, stat card maker: gold edge + 16%×strength gold wash | `app/updates/updates.module.css:143`; `app/search/search.module.css:123`; `app/components/StatCardMaker.module.css:35`; `memory/project-full-site-debug-1005.md` (7 Oct, V-records-07) |
| Legacy `.chip` | padding `9px 16px`, 0.9rem Geist, `--border` | `app/globals.css:1397-1405` |
| Pressed | 10%×strength gold wash | `app/globals.css:1914-1917` |

Σ chips are re-declared in 22 modules with heights of 44 (11), 40 (3), 42, 38, 30 and unset (10); 13 set mono, 2 Geist, 13 inherit. `.chipOn` appears in 14 modules: 10 use N2, 3 desktop modules use gold wash, and two use their own (tour map: solid `--text` fill, `app/components/mobileTourMap.module.css:211`; Dai Dai replay: `--text` edge, `app/components/DaiDaiReplay.module.css:471`).

### 6.3 Tags, badges, pills

- `.tag`: mono 11px / 0.1em, pill, padding `4px 10px`; variants Accent (gold 16%×strength), Neutral, Outline, Diamond, Platinum, Live (`app/globals.css:2083-2102`).
- Phone peak pills (country + flag on chart rows): mono 700 11px, padding `5px 10px`, pill, gap 6 (`app/components/mobileOfficialCharts.module.css:334-349`).
- Cert tier badges and the issuer marker: the issuer is **9px** (`app/components/mobileCerts.module.css:871-880`; `app/certifications/certifications.module.css:957`; `app/afrobeats/[artist]/artist.module.css:237`).
- Board tier badges on photos have a solid dark backing (owner, NPD-08) (`memory/feedback-debug-rulings-2026-09-24.md:41`).

### 6.4 Segmented controls and switches

- `.seg`: radio inputs, `--color-divider` frame, 7×12 padding, 13px; selected = gold fill + `--ink-on-gold` (`app/globals.css:2128-2158`).
- Theme control: pill segments (Dark / Light / System), selected gold fill; icon-only 36×34 (44 on touch) or full-width labelled 44px in the sheet; the bar shows only the one-tap flip at every width (`app/components/themeToggle.module.css:4-60`).
- The `/compare` switch (and its copy on certifications): 30×16 track, gold when on, a state word beside it (3 Oct file §7.3; `app/components/certSwitches.module.css`; `tests/switchTrackContrast.test.ts`).

### 6.5 Inputs

`.input` / `.textarea`: `--bg-soft`, `--border`, radius 4, padding `14px 16px`; focus = gold border + 2px gold ring (`app/globals.css:1430-1452`).

---

## 7. Content components

### 7.1 Kickers and eyebrows (Σ `.kicker` re-declared in 62 modules, `.eyebrow` in 26)

| Variant | Spec | Where |
|---|---|---|
| Desktop eyebrow with a **tick** | flex, gap 10; mono 700 11.5 / 0.18em `--text-muted`; 22×2 rule before it | `app/records/records.module.css:54-64`; `app/page.module.css:128-138`, `190-196` |
| The tick carries the **family signature** | Records `--ember`; live-charts and updates `--green`; reading pages none; certs and home `--gold-fill` | `memory/project-burnaboystats-rhythm.md:18-20`. Σ 18 modules draw a tick: ember 6, gold 6, green 3, muted 3, `--line` 1 |
| Phone kicker | mono 700 11 / 0.11em `--text-muted` (deep page); `--ember` text (revenue); `--gold` text (certs) | `app/components/mobileDeepPage.module.css:68-75`; 3 Oct file §8.6 |
| Global `.eyebrow` | mono 0.72rem / 0.18em **gold** text | `app/globals.css:1252-1259` |
| Home section kicker | mono 700 11.5 / 0.18em `--color-accent-700` (= gold) | `app/page.module.css:405-412` |

### 7.2 Hero and h1 conventions

- The **h1 split word** is gold, and only the split word: desktop uses `.inkText` (120° display ramp with print grain; soft-light blend on paper) (`app/globals.css:747-767`, `930-942`); phone uses `.gold` (180° ramp, no grain) (`app/components/mobileDeepPage.module.css:84-98`). Owner ruling, 30 Sep (`memory/project-tour-map-design-handoff.md:12`).
- Lede: `--type-lede`, `--text-body-cool`, ≤56–62ch, `text-wrap: pretty` (`app/records/records.module.css:75-82`).
- Desktop page skeleton: masthead → breadcrumb → hero (eyebrow + tick, h1, lede, button row) → content bands → source band → Keep exploring → compact footer. Example: `app/certifications/page.tsx:309-448`; `app/records/page.tsx:93-209`.

### 7.3 Stat displays

- **Home scoreboard** (desktop): 5 equal cells with `--line` left rules; value Anton **52** in **ink** (gold only on hover), label mono 700 11 / 0.11em, source mono 11 muted; each cell links to its page (`app/page.module.css:250-323`; `app/page.tsx:153-171`).
- **Phone stat strip**: grid with 1px gaps over a `--rule` fill (hairline seams), `--rule-soft` top and bottom; cell `--bg`, padding 16; value Anton 32; label mono 700 11 / 0.11em (`app/components/mobileDeepPage.module.css:101-125`). Σ re-declared in 10–12 modules.
- Fact tiles (legacy): `--bg-soft`, radius 4, padding `18 20`, label 0.7rem muted, value 600 (`app/globals.css:1321-1351`).

### 7.4 Rows and tables

| Pattern | Spec | Source |
|---|---|---|
| Phone row | grid, gap 12, padding `14 18`, `--line` bottom, baseline; rank Geist 700 13.5 muted; title 600 14.5; sub 12px muted; value Geist 700 13.5 right; optional 6px bar (30%×strength gold wash, his 55%) | `app/components/mobileDeepPage.module.css:181-238` |
| "His" lead row | 6%×strength gold wash; rank, title and value gold | `:188-200`, `238` |
| Accent row | rank + value gold, title ink (for category values) | `:240-244` |
| Group head | Anton 17 **gold** + mono 11 meta right | `:248-277` |
| `.tableBase` (desktop) | 14px, mono 11 / 0.08em heads with a 2px rule, cells `10px 12px`, 6%×strength gold hover | `app/globals.css:2104-2126` (used in 6 files) |
| Charts table | 0.92rem, th padding `12 14`, sticky th inside an `overflow-x: auto` wrapper, td `13 14`, hover 5% gold wash, No. 1 rows 7% | `app/records/charts/charts.module.css:247-292` |
| Grid "table" (role="table") | Revenue board: `52 150 1fr 210 100 130`, rows `15 8`, hover `--bg-raised` | 3 Oct file §8.1 |

Table cells are Geist 13.5 with `tabular-nums`; only headers stay mono (`memory/project-burnaboystats-reading-scale.md:29-33`). Σ 18 `<table>` elements and 7 `role="table"` grids.

**Row hover has two grammars**: Σ 50 `:hover` backgrounds use `--bg-raised` (Task C's rule, `memory/project-burnaboystats-rhythm.md:11-16`) and ~31 use a gold wash (the bundle's original table, `bundle/RESPONSIVE-AND-STATES.md:126-127`).

### 7.5 Cards

- Keep exploring card: flex `1 1 240px`, padding `18 20`, `--bg-soft`, `--border`, radius 6; title 700, desc 0.8rem muted, **gold → arrow**; hover `--gold-dim` edge + 3px lift (`app/components/KeepExploring.module.css:27-64`).
- Records hub card: 2-up grid, padding 26, Anton 27 title, hover gold edge + 5% wash (`app/records/records.module.css:158-179`).
- Legacy `.card`: padding 24, hover 4px lift (`app/globals.css:1291-1319`).

### 7.6 Keep exploring (`app/components/KeepExploring.tsx`)

A `<nav>` at the foot of 37 page files Σ: label "Keep exploring" in mono 0.72rem / 0.12em **muted** (owner, 30 Sep), cards with gold arrows (`app/components/KeepExploring.module.css:15-26`; `tests/keepExploringLabel.test.ts`). Lists are per route in `exploreFor`, default music / certifications / records (`app/components/KeepExploring.tsx:80-88`). Spanish labels for `/dai-dai/es` (`:64-75`). Margins `64 auto 80` desktop, `36 auto 56` ≤760 (`app/components/KeepExploring.module.css:6-14`).

### 7.7 Source notes and provenance — the trust layer

- Home hero **provenance row**: "Sources RIAA · BPI · SNEP · IFPI | Verified <date> | Open data API ↗", mono 700 11 / 0.1em muted, 44px tall, aligned to the panel's Live-board row (`app/page.tsx:130-144`; `app/page.module.css:155-169`; alignment note `memory/project-home-upper-design-pass.md:27-31`).
- Desktop source band: a separate band under the content, `.source` 13px muted at **100ch** (`app/certifications/page.tsx:404-446`; `app/certifications/certifications.module.css:758`).
- Phone foot note: 11.5–12px `--dim`, padding `16 18 0` (`app/components/mobileDeepPage.module.css:282-288`).
- Σ 58 source/foot/provenance rules use **10 different sizes** (11 to 16px; 13px ×13, 12px ×11, 12.5px ×10, 11px ×6, 0.82rem ×4 …) and measures of 38ch to **104ch**, or none (41 of 58). Colours: `--text-muted` 28, `--dim` 14. Desktop source notes at 100–104ch run against the 62ch measure (`app/records/tours/revenue/revenue.module.css:448`; `app/live-charts/liveCharts.module.css:562`).
- "Not reported" is an em dash in `--dim` with `cursor: help`, never zero (`app/globals.css:2186-2188`; `app/components/NotReported.tsx`).

### 7.8 App states (`app/components/AppState.tsx`, `app/globals.css:2321-2504`)

One shell for 404, error and "filter matched nothing": centred stack, mono kicker, Anton headline (28px, 19 on phones), one sentence (15px, 48ch), at most two actions; red appears as a foreground colour only here; a reference id line, never a stack trace; a "Popular instead" chip row on desktop 404 (`app/globals.css:2342-2466`). On phones the actions stack into a bottom bar and the tab bar hides (`:2468-2504`, `2011-2017`). Phone filter-empty states use the phone's own styles (owner, C-05) (`memory/feedback-debug-rulings-2026-09-24.md:49`).

### 7.9 Share images

| Kind | Spec | Source |
|---|---|---|
| Generic link preview (Σ 33 of 47 `opengraph-image.tsx`) | 1200×630, `#0a0a0b` ground, lockup top-left; kicker 28px gold `#ffb627` tracked 8; title **108px `sans-serif` weight 800**, which resolves to **Geist Regular** (only Geist 400, Anton 400 and Space Mono 400 are loaded, and Geist is first on purpose); sub 34 muted; "BURNABOYSTATS.COM" foot | `app/lib/og-image.tsx:6`, `9-46`; `app/lib/og-lockup.tsx:46-49`; `memory/project-burnaboystats-og-lockup.md:25-29` |
| Ladder preview (2 routes) | Anton 64 title, Anton 76 figure (gold if his), mono labels, gold vs `#74747e` bars | `app/lib/og-image.tsx:90-211` |
| Stat cards | 1080×1080 square, 1080×1920 story; Burna portrait; gold `#ffb627` with a `#ffd24a → #ffb627 → #f5890b` ramp | `app/lib/cardSizes.ts:11-14`; `app/lib/statCardImage.tsx:20-38` |
| Versioning | `OG_ART = "stat-cards-asof-1"`; bump it for art changes only, never for data | `app/lib/og-image.tsx:272`; `memory/project-burnaboystats-og-lockup.md:18-23` |

**All share images are permanently dark and gold**, whatever theme the page is in and whatever artist (`memory/feedback-og-cards-stay-gold.md`; `memory/project-burnaboystats-theming.md:28-29`). The On This Day post card and its link previews (only those) carry a faded Burna portrait (`memory/project-on-this-day.md:50-52`).

---

## 8. Page templates

| Family | Desktop | Phone | Routes |
|---|---|---|---|
| **Home** | Live band → 2-column hero (copy 1.5fr / "today's number" panel 1fr, hairline between) → 5-up scoreboard → "History made" band (`--bg-soft`, Anton 32, a gold "Read the story ↗") → On this day band → certifications ledger + globe → The No. 1 board (`--bg-soft`) → catalogue → career records → closer band with three block links → five-column footer | `MobileHome`: masthead; the live figure leads (140px gold) with cover; "Burna Boy" h1 at 30; tiles; OTD card at the foot; five tabs | `app/page.tsx:95-470`; `app/page.module.css`; `app/components/mobileHome.module.css:73-191`; running order guarded by `tests/mobileHeroOrder.test.ts` |
| **Hubs** | Breadcrumb → eyebrow + h1 96–104 → lede → card grid / headline grid → source note → Keep exploring | Back bar → title 44–56 → rows/tiles → five tabs | `/records` (`app/records/page.tsx:93-209`), `/music`, `/afrobeats` |
| **Data boards** | Breadcrumb → hero (tick eyebrow, h1 82–96, lede, button row with one primary) → filter band → table or grid rows (his rows gold) → source band(s) → Keep exploring | Back bar (+ badge) → hero (kicker, title, lede) → stat strip → chip rail (N2) → stacked rows → foot note → action bar (or nothing on full-list screens) | `/certifications`, `/records/charts`, awards, tours, revenue (+ countries), festivals, firsts, africa's biggest, by the numbers, visualized, cars, `/live-charts` |
| **Entity pages** | Cover/portrait hero, h1 54–76 with a gold primary ("Play on Spotify ↗", "Chart peaks"), "By the numbers", sections (charts, certs), FAQ, onward row ("← back", "Next … →"), Keep exploring | Song/album: **same tree**, own back bar + action bar; board artist: `MobileCerts` with a Compare action bar | `/music/[song]` (`app/music/[song]/page.tsx:194-485`), `/music/albums/[album]`, `/afrobeats/[artist]` (`app/afrobeats/[artist]/page.tsx:382-742`), `/records/cars/[car]`, `/compare/<pair>` |
| **Stories** | `/dai-dai`: one responsive tree, h1 88/64/46, chapters, replay map, no breadcrumb, Keep exploring desktop only; `/on-this-day`: calendar + day pages (h1 96 = the date); `/timeline`; `/updates` feed | Dai Dai back bar + five tabs; OTD phone month/day screens | `app/dai-dai/page.tsx:411`, `546-547`; `app/on-this-day/page.tsx:63`; `app/on-this-day/[day]/page.tsx:86` |
| **Reading pages** | h1 64–96, prose at `--type-body` / 62ch, `--type-h-prose` subheads, no signature tick | Back bar + five tabs (or action bar on `/methodology`, `/api`) | `/about`, `/faq`, `/methodology`, `/contact`, `/curator`, `/press`, `/api`, `/embed`, `/analysis` |
| **Tools** | `/search` (one tree), `/share` stat card maker (h1 82), `/compare` (one tree, clamp h1) | `/share`: `MobileStatCards` + action bar | `app/share/page.tsx:47-63`; `app/compare/page.tsx:887-890` |
| **App states** | §7.8 | §7.8 | `app/components/AppState.tsx` |

**Desktop vertical budget** ≈: masthead 69 + breadcrumb ~49 + hero top padding ~54 = the h1 starts ~172px down at 1440×900 (from `app/globals.css:986-990`; `app/components/breadcrumbBar.module.css:6`; `app/records/records.module.css:53`). The tour map's lede was cut to two lines at 16px so the whole map fits in 900px (`memory/project-tour-map-design-handoff.md:36-38`).

---

## 9. States and accessibility

| Item | Spec | Source |
|---|---|---|
| Focus ring | `2px solid var(--gold)`, offset 2px; follows the control's own radius (pills keep 999px); unstyled targets get 3px corners | `app/globals.css:1873-1896` |
| Row focus | inset 2px gold ring on link/button rows | `:1925-1934` |
| Tap targets | 24px for chrome on a mouse, 44px on coarse pointers; prose links exempt | `:1796-1838` |
| Prose links | 1px underline at 2px offset on class-less links inside `<p>` (WCAG 1.4.1; owner NPD-02) | `:719-737`; `memory/feedback-debug-rulings-2026-09-24.md:39` |
| Reduced motion | global switch | `:1771-1778` |
| Scroll clearance | `scroll-padding-bottom` for the tab bar, action bars and `/compare`'s stacked bar | `:1979-2010` |
| Visually hidden | pinned `left: 0` so it never widens a scrolled rail | `:2166-2184` |
| One h1 per layout | Two `<h1>` in the HTML (one per tree) is by design | `rulings.md:24`; `tests/seoAudit.test.tsx` |
| Language | Shared chrome carries `lang="en"`, also on `/dai-dai/es` | `app/layout.tsx:244-248` |

---

## 10. Guards that hold the system (`tests/`)

`cssColourTokens` (no colour literal in modules), `mixStrengths` (every `color-mix()` strength pinned), `tierColourParity` (tier maps use `--tier-*`), `phoneChipsN2` (every phone on-state uses `--chip-on-*`), `keepExploringLabel` (muted label, gold arrows), `mobileLinkParity` (a link on one layout exists on the other), `mobileHeroOrder`, `seoAudit` (one visible h1 per layout), `goldMarksHisRows`, `showsHeroGold`, `recordNightGold`, `switchTrackContrast`, `statTargetScoping`, `hubScatterType`, `ogLockup` (Geist first in `ogFonts`), `ogFooterCase` (card URLs lower-case), `rootLayoutCss`, `boundaryCss`, `boxOfficeDebug1003`, `grossShowsDesign`, `certKicker`, `designItems`, `updatesBurnaOnly`. All present under `tests/` on `origin/main`.

---

## 11. As built vs as documented (measured; facts, not rulings)

| # | Documented | As built | Evidence |
|---|---|---|---|
| 1 | Bundle: "build the shared pieces once"; nine deep screens share one layout (`bundle/START-HERE.md:106-109`) | `MobileDeepPage` now carries **2** screens (by the numbers, cars); the back bar is re-declared in 31 modules, chips in 22, kickers in 62, ledes in 65 | §5.4, §6.2; `app/components/MobileDeepPage.tsx` imports in `app/records/by-the-numbers/page.tsx`, `app/records/cars/page.tsx` |
| 2 | Type floor 11px (`app/globals.css:302`) | 9px issuer marker ×3, 10px car tile badge, 10.5px ×3 | `app/components/mobileCerts.module.css:875`; `app/certifications/certifications.module.css:957`; `app/afrobeats/[artist]/artist.module.css:237`; `app/records/cars/cars.module.css:314`, `376`; `app/music/listeners/listeners.module.css:221` |
| 3 | Link rule: ↗ = sibling navigation, filled = the one action (`app/globals.css:789-807`) | 26 of 40 filled buttons carry an arrow; one section with two filled buttons | §6.1 |
| 4 | Hover = `--bg-raised` (Task C) | 50 `--bg-raised` hovers and ~31 gold-wash hovers | §7.4 |
| 5 | Spacing scale `--sp-*` | 0 uses | `app/globals.css:231-241` |
| 6 | One display scale (bundle h1 74–150, h2 34–44) | 81 distinct Anton sizes; 13 fixed desktop h1 sizes + 4 clamps; 10 phone title sizes | §1.3 |
| 7 | Measure 62ch | Desktop source notes at 100–104ch; 41 of 58 source/foot rules unbounded | §7.7 |
| 8 | One container | `.wide` 1360/40 vs `.container` 1280/24 vs masthead 1360/24 at ≤1500: three left edges at 1440 ≈ | §3 |
| 9 | Duplicate rules | Σ 143 class selectors declared twice at top level in 34 modules (e.g. home `.title` at `:20` with a clamp and at `:110` with 108px; records `.grid`/`.card` at `:1-30` and `:158-179`; certifications 18 duplicates) — the later rule wins by order | `app/page.module.css:20`, `110`; `app/records/records.module.css:1-30`, `158-179` |
| 10 | Back labels clamp to one line | 30 of 33 back-label rules have no ellipsis | §5.4 |
| 11 | Sticky table head | The charts `th` is `position: sticky; top: 0` inside an `overflow-x: auto` wrapper, which makes the wrapper its scroll container, so the head is not expected to stick to the page (and `top: 0` would sit under the 69px masthead). Verify in a browser | `app/records/charts/charts.module.css:247-265` |
| 12 | Generic OG title "on-brand" | Title in Geist Regular 108 (weight 800 requested, no bold loaded); the site's display face is Anton | §7.9 |
| 13 | LOGO.md: header stays dark; never put the bare mark on a light ground (`bundle/logo/LOGO.md:54`, `69`) | The masthead themes (owner, 7 Sep), so on paper the bare mark sits on paper | `app/globals.css:14-19` |
| 14 | Bundle tier colours borrow `--cyan`/`--silver` (`bundle/README.md:150-151`) | Separate `--tier-*` tokens; cyan/silver are peak bands only | `app/globals.css:284-318` |
| 15 | `--dim` `#7c7c85` (`bundle/README.md:76`) | `#85858e` dark / `#6f685f` light | `app/globals.css:339-343` |
| 16 | Bundle: hover gold washes per surface (`bundle/RESPONSIVE-AND-STATES.md:117-130`) | Partly superseded by `--bg-raised` (item 4) | |

The bundle's own docs disagree on deep-screen sharing (`bundle/README.md:218` "all 18 bespoke" vs `bundle/START-HERE.md:108` "nine share one layout"). The owner settled this kind of conflict: the **live implementation wins** and the old redesign is closed (`memory/feedback-design-handoff-rules.md:45-52`).

---

## 12. Owner rulings that bind design

Never propose reversing these as normal suggestions. One line each.

**Process**
1. Never redesign what a handoff drew; wire it up; read the design file, don't infer from a sibling — `memory/feedback-design-handoff-rules.md:11-29`.
2. Desktop and phone are separate designs and components; never scale one into the other; hidden at 900px — `memory/feedback-design-handoff-rules.md:16-18`; `rulings.md:24`.
3. Where handoff prose and a mockup disagree, the mockup is the design; where old handoff prose and the live site disagree, the live site wins; the big redesign is CLOSED — `memory/feedback-design-handoff-rules.md:22-23`, `45-52`; `rulings.md:31`.
4. A control and what it opens share one breakpoint; test the 901–1239 band — `memory/feedback-one-breakpoint-per-control.md:18-21`.
5. A visual treatment must land in both layouts; leave a test that checks both — `memory/feedback-both-layouts-get-the-treatment.md` (How to apply).
6. Figures are derived from data, never typed; numbers in a design are placeholders — `memory/feedback-derive-figures-from-data.md:8-14`; `bundle/START-HERE.md:90-96`.
7. Every new route gets its own `opengraph-image.tsx`, sitemap entry, breadcrumb label, links and search entry — `memory/feedback-new-page-og-image.md:10-28`; MEMORY index.

**Density and structure**
8. No accordions, folds or "show more" on dense list screens; density matches Burna's own screens — `memory/feedback-dense-screens-over-accordions.md:11-15`; `rulings.md:30`.
9. The one approved fold: phone certs "Compare with…" / "Certified units by country…" `<details>`, closed by default (25 Sep) — `docs/design/box-office-by-country/research/design-system.md:426`.
10. On This Day phone one-day panel is not a fold; every day reachable; no page for an empty day — `memory/project-on-this-day.md:23-24`.
11. Dai Dai: no fold on the phone ranking; keep the phone section order and the long dated rows; ranking chips are labels — `memory/project-dai-dai-redesign.md:25`, `36-44`.
12. Half-empty last rows in the song/album grids and the /music EPs grid stay as designed (D-10/D-11) — `memory/feedback-debug-rulings-2026-09-24.md:27`; `rulings.md:29`.
13. Board pages keep the five-tab bar (17 Aug); a board artist page shows only the Compare action bar (12 Sep); the story pages keep the five tabs (9 Aug); cars keep the five tabs — `app/lib/mobileScreens.ts:113-131` and set comments.
14. The five-tab bar stays on /curator, /press and /analysis/spotify-unmerge — `memory/project-tour-map-design-handoff.md:12`.

**Colour**
15. Gold = live-or-action (plus "his"); above the home scoreboard gold appears exactly four ways: the "Boy" in the hero h1, the live figure, the primary button, links — `memory/project-home-upper-design-pass.md:11-14`; `rulings.md:25`.
16. Light mode has one gold, `#945e00`, fills included; white ink on gold fills — `memory/project-burnaboystats-light-mode-sweep.md:10-13`; `memory/project-burnaboystats-theming.md:63-69`.
17. Three modes (dark / light / system), default dark; the masthead themes with the page (overruled the dark island) — `memory/project-burnaboystats-theming.md:11-31`.
18. A photograph is not a theme: anything over a photo stays dark (`photoTile`) — `memory/project-burnaboystats-theming.md:49-56`.
19. Active chips on every phone rail = N2 (ember edge + wash, ink label, never a gold fill) — `memory/feedback-chip-and-rail-gold-rulings.md:10`; `rulings.md:26`.
20. Desktop chips keep gold (N2 is phones only) — `memory/project-full-site-debug-1005.md` (7 Oct, V-records-07).
21. /afrobeats hub rails stay gold (permanent) / green (live) for every artist; hub plaque-count tiles are gold only for Burna — `memory/feedback-chip-and-rail-gold-rulings.md:11`; `rulings.md:27`.
22. Link-preview cards stay gold for every artist; Ayra Starr's purple is page-only — `memory/feedback-og-cards-stay-gold.md:8-28`; `rulings.md:28`.
23. Light-mode home closer: the orange half becomes `#945e00` with white ink (NPD-07) — `memory/feedback-debug-rulings-2026-09-24.md:40`.
24. Faded text is darkened through tokens until it passes 4.5:1 (NPD-01); board tier badges get a solid dark backing (NPD-08) — `memory/feedback-debug-rulings-2026-09-24.md:38`, `41`.
25. On This Day kinds are shape + word in ink, no colour (■ Release ▲ Charts ◆ Streaming ○ Certification ★ Awards ● Show); "Live" is "Show"; the home OTD card has no gold action — `memory/project-on-this-day.md:14-18`.
26. Phone shows hero `$6.147M` at 36px with ink tiles; countries phone hero ink — `rulings.md:32`.

**Type and rhythm**
27. Reading scale is `--type-*` (not `--text-*`), measure 62ch, mono for labels only; table heads mono, cells Geist 13.5 — `memory/project-burnaboystats-reading-scale.md:13-33`.
28. Hover = `--bg-raised` (presses on paper); one signature per family on the kicker tick, never on text or a button: records ember, live-charts/updates green, reading pages none — `memory/project-burnaboystats-rhythm.md:11-20`.
29. Don't recolour `charts.module.css` / `mobileOfficialCharts.module.css` without a scoping prop (shared with every board artist) — `memory/project-burnaboystats-rhythm.md:22-27`.
30. The h1 split word stays gold, only the split word — `memory/project-tour-map-design-handoff.md:12`.
31. Keep exploring label muted site-wide, arrows gold; back-bar badges gold like their siblings — `memory/project-tour-map-design-handoff.md:12`; `tests/keepExploringLabel.test.ts`.
32. Listeners and tour-map row headers in Anton 17px (D-06) — `memory/feedback-debug-rulings-2026-09-24.md:47`.
33. Tour map: smaller intro (16px lede, two lines) so the whole map shows at 1440×900; Dai Dai inset fixed 200×172 from 901px — `memory/project-tour-map-design-handoff.md:12`, `36-38`.

**Copy and labelling that shapes layout**
34. Home No. 1s tile shows 45, "No. 1s · official charts" — `memory/project-home-upper-design-pass.md:22-25`.
35. /records/firsts is headline-first in every category; box-office title derived ("Highest-Grossing African Shows — <No. 1> Leads"); Dai Dai table "Charts · 15"; compare scope line "26 countries checked · outside Nigeria"; OTD share cards print the record's credit line — `memory/feedback-debug-rulings-2026-10-06.md:13-22`.
36. Pair pages carry an h1 naming the pair; tied cars show joint ranks; phone Most-certified keeps albums first with "Albums"/"Songs" labels — `memory/feedback-debug-rulings-2026-09-24.md:42-45`.
37. List headings stay "Singles" / "Featured"; co-billed songs get a small "co-lead" tag; song pages add a role tag — `memory/project-lead-featured-roles.md:12-13`.
38. Nav pill is "Box office" (replaced "Stat card", 7 Oct), outlined, not gold — `app/components/Nav.tsx:98-108`; `app/globals.css:2201-2210`.
39. Certifications hero: "Compare" is the primary; his box-office nights button sits beside it (4 Oct) — `app/certifications/page.tsx:354-358`.
40. /share links point to the chosen stat's own page, no `?stat=` — `memory/feedback-debug-rulings-2026-09-24.md:19`.
41. twitter:creator is @paulemmanuelng, never @BurnaBoyStats — `memory/feedback-debug-rulings-2026-09-24.md:21`.

**Share images**
42. The OG card redesign (drop tagline, page path footer, bigger crown dot) was rejected; cards stay as they were plus the lockup — `memory/project-burnaboystats-og-lockup.md:12-16`.
43. Bump `OG_ART` for art changes only, never for data — `memory/project-burnaboystats-og-lockup.md:18-23`.
44. On This Day post card: headline-first, date as a small gold label; faded portrait on OTD post card and OTD previews only; home OTD card image and headline link to the day page — `memory/project-on-this-day.md:50-58`.

**Scope and identity**
45. The site stays a Burna site; the board lives at /afrobeats; no separate domain unless the board passes ~30 artists — `memory/project-stay-burnaboystats.md:8-17`.
46. /updates carries only Burna Boy stories — `memory/feedback-updates-burna-only.md:7-15`; `tests/updatesBurnaOnly.test.ts`.
47. Dai Dai replay is official charts only, gaps drawn; `/dai-dai/replay` and the video are held — `memory/project-dai-dai-redesign.md:22-24`.
48. Fixed bars appearing mid-page in full-page screenshots are capture artefacts — `rulings.md:33`.

**Still open with the owner (not rulings yet)**
- Home "Read the story ↗" (filled and arrowed) parked with the history band — `app/globals.css:802-806`.
- `StatGlyph` watermarks still render on the phone home, pending the owner's yes — `memory/project-home-upper-design-pass.md:23-25`, `47`.
- V-afrobeats-03: shape-of-field chart labels at 7–10px; options (a) hide <1240, (b) 11px at ≥1240 with re-placed labels, (c) leave — `memory/project-full-site-debug-1005.md` (7 Oct).

---

## 13. Prior design work to build on

- `docs/design/box-office-by-country/research/design-system.md` (3 Oct): revenue boards, countries page, phone certs, switch row, kicker variants. Still accurate for those pages.
- `docs/design/tour-map-and-phone-screens/research/design-system.md` (29 Sep) and `docs/design/dai-dai-redesign/research/design-system.md`.
- `design-audit-0929/` (owner's local working folder, not in this repo): a page-by-page audit, 123 items (16 bug, 67 improve, 40 polish) across home, records, certs, tours/cars, OTD/Dai Dai, afrobeats, music, info; verification 144 confirmed / 36 partly / 3 refuted claims (`items.json`, `verify.json`).
- `design-review.md` (owner's local working folder, not in this repo): review of the 24 Sep design-items branch (prose-link underline, closer, badges, Copy button).
- `docs/design/ui-ux-audit.md` and `docs/design/README.md`: the repo's design index.
- Designer bundle `bundle/START-HERE.md` (index of every handoff since August), `bundle/README.md` (v2 spec, 2 Aug), `bundle/RESPONSIVE-AND-STATES.md`, `bundle/logo/LOGO.md`, `bundle/docs-design/design-response-*.md` (eight responses), artboards in `bundle/designs/desktop` (59 files) and `bundle/designs/mobile` (13 files, 402×874 frames).
