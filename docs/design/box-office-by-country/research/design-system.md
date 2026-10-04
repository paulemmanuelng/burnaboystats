# burnaboystats.com: design system, as the code defines it (3 Oct 2026)

This file is for Claude Design, for the three jobs in this brief: the new **Highest-Grossing Artists by Country** page (`/records/tours/revenue/countries`), a full design pass on **Highest-grossing shows** (`/records/tours/revenue`, renamed in #406), and **phone text density** on the certifications screens (`/certifications` on the phone, and the phone certs section of every `/afrobeats/<artist>` page).

> **Since this was read (3 Oct): #406** (live 4 Oct) renamed the board and its strings, cut the desktop h1's gold to one word ("Shows"), and set the phone bar label to "Highest-grossing" with `nowrap` and 8px gaps below 360, so §10 item 1 no longer wraps. Values below are as read before #406 unless marked.

It updates `docs/design/tour-map-and-phone-screens/research/design-system.md` (29 Sep, `main` @ `6aae00c8`). Every value here was re-read from the code on 3 Oct 2026 and is cited as `file:line` from the repo root. There are three sources:

| Tag | What it is | Commit |
|---|---|---|
| *(main)* | `main`, after PR #403 (the African box-office extension) | `2ac28b4a` |
| **#405** | Branch `feat/revenue-leaders-by-country`: the countries page. It merges today | `57a4e5ff` |
| **#404** | Branch `feat/certs-international-switch`: the certifications switch row and the adaptive kicker. Open | `935e4ffe` |

A citation with no tag is on *main*. Citations tagged #405 or #404 are on that branch.

- ◇ marks a contrast ratio computed for this file. It uses WCAG relative luminance, with any alpha composited over the surface named, and `--wash-strength` applied (0.42 on paper, 1 on black).
- ≈ marks a width computed for this file. Space Mono's advance is about 0.61em, so 11px mono with 0.11em tracking comes to ≈7.94px a character. `tests/certKicker.test.ts:29` (#404) measured the same: 278px for 35 characters.
- Every figure on these pages comes from `app/data/tourRevenue.ts` or `app/data/certifications*`, through `app/lib/revenueByCountry.ts` (#405) or `app/lib/certScope.ts` (#404). **Any number in a design is a placeholder. The build writes the real ones.**

---

## 0. What moved since the 29 Sep file

| Change | Where |
|---|---|
| The map has **its own colour tokens**: `--map-played`, `--map-land`, `--map-border` and `--map-sea`. The tour map's fills now theme, and played against unplayed measures 3.44 on paper and 3.73 on black. A map on the countries page would use these | `app/globals.css:429-443`; `app/components/tourMapSvg.module.css:16-80` |
| `--flag-green` `#008751` and `--flag-white` `#ffffff` were added for the Naija @ 66 motif. They never carry text | `app/globals.css:298-303` |
| `globals.css` line numbers moved **+6 from line 298** and **+21 from line 429**, and 185 lines of app-state rules were appended at `2226-2410`. Lines 1–297 are unchanged | `git diff 6aae00c8 2ac28b4a -- app/globals.css` |
| The revenue board has a **"Multi-night runs"** section beneath it on both layouts. It has a real h2, a one-line lede, and rows without a rank. The copy lives in one place | `app/lib/multiNightRuns.ts:12-18`; `app/records/tours/revenue/page.tsx:146-173`; `app/components/MobileRevenue.tsx:165-190` |
| The revenue board now holds **every** verified single-show gross, with no floor. The dash legend prints only while a dash is on the board | `app/records/tours/revenue/page.tsx:12-29` |
| **#405** adds the countries page. It is built from the revenue page's own classes plus two small modules | `app/records/tours/revenue/countries/*`; `app/components/RevenueCountries.tsx`; `app/components/MobileRevenueCountries.tsx`; `app/components/mobileRevenueCountries.module.css` |
| **#404** adds the `/compare`-style switch row to both certs layouts, and a hero kicker that follows the view | `app/components/CertViewSwitches.tsx`; `app/components/certSwitches.module.css`; `app/lib/certScope.ts:234-260` |
| The tour map was redesigned (30 Sep). Its old `PerformanceMap` became `TourMapSvg`, `TourMapCard` and `TourMapPanel`, and the listeners map keeps the old frame in `worldMap.module.css` | `app/components/TourMap*.tsx`; `app/components/worldMap.module.css:1-11` |

---

## 1. Ground rules (all still hold)

| Rule | Source |
|---|---|
| **One token block, two themes.** Every colour is written once as `light-dark(LIGHT, DARK)`, with the light value first. A theme switch changes only `color-scheme` | `app/globals.css:6-8`, `367-395`, `543-544` |
| **Dark is the default.** It applies to the server render, to visitors with no JS and to visitors who never chose | `app/globals.css:543-544` |
| **Gold carries meaning.** It marks Burna Boy's own figures, and what is live or an action. There is one gold action per screen, and every gold fill uses one ramp | `app/globals.css:2110-2116` (navStatCard note); `app/components/mobileRevenue.module.css:300-303`; `tests/goldMarksHisRows.test.ts` |
| **Data colours are never gold.** This covers tiers, peak bands and live deltas | `app/globals.css:230-233` |
| **Mono is for labels only.** Space Mono 700, tracked, uppercase, and never a sentence | `app/globals.css:118-122` |
| **Hover means `--bg-raised`.** On paper it presses darker | `app/globals.css:159-160` |
| **Desktop and phone are separate designs.** Both trees sit in every document, split at 900. Desktop is wrapped in `.desktopOnly`, and the phone `.screen` is `display:none` above 900 | `app/records/tours/revenue/revenue.module.css:5-6`; `app/components/mobileRevenue.module.css:4-13` |
| **No colour literals in modules.** Tokens are declared only in `globals.css`, and a test enforces this | `tests/cssColourTokens.test.ts` |
| **The link rule.** Filled = the one primary action in a section. Outlined = its secondary. ↗ = navigation to a sibling page. Bare text = utility | `app/globals.css:736-754` |

---

## 2. Type

### 2.1 Faces (`app/layout.tsx`)
| Role | Family | Weights | Variable | Line | Used for |
|---|---|---|---|---|---|
| Display | Anton | 400 only | `--font-anton` (= `--font-display`, `--font-heading`) | `28-32`; aliases `globals.css:200`, `351` | h1/h2, grosses, ranks (desktop), totals, country and continent names. Always uppercase, except the country names on #405 (§8.4) |
| Body | Geist | variable | `--font-geist-sans` (= `--font-body`) | `22-25`; `globals.css:352` | Venues, meta lines, ledes, notes, phone ranks |
| Labels | Space Mono | 400, 700 | `--font-mono` | `35-39` | Kickers, eyebrows, back-bar labels, chips, column heads, tickets on phone rows, the switch row |

The faces are attached to `<html>` at `app/layout.tsx:195`. `--font-heading-weight: 400` means Anton is never asked for a bold it lacks (`globals.css:355`), and every module repeats `font-weight: 400 /* Anton has no bold cut */`. The global `h1` is Anton 400, uppercase, tracked 0.01em (`globals.css:650-660`). Numerals are tabular automatically on `table`, `.tabular` and any class containing `stat`, `Num` or `num` (`globals.css:567-573`), and the revenue modules also set `tabular-nums` explicitly on every figure.

### 2.2 Scale (`--type-*`, `app/globals.css:107-128`)
| Token | Size | Line height | Job |
|---|---|---|---|
| `--type-lede` | **18px**, becoming **20px at ≥900px** (`539-541`) | 1.5 | Page opener |
| `--type-body` | 16px | 1.6 | Reading prose |
| `--type-small` | 13.5px | 1.5 | List meta, notes under figures |
| `--type-caption` | 12.5px | 1.45 | Provenance, footnotes, phone meta lines |
| `--type-label` | 11px, tracking `--type-label-tracking` 0.11em | 1.2 | Kickers, table heads, chips (mono 700 uppercase) |
| `--type-h-prose` | 20px | 1.3 | Headings inside prose |
| `--measure` | 62ch | | Maximum prose width |

The **type floor is 11px** (= 0.6875rem). Display sizes are set per module, not as tokens. At exactly 900px the phone layout (`max-width: 900px`) and the 20px lede (`min-width: 900px`) both apply.

**Off-scale sizes in scope.** Each of these is a literal rather than a token:

| Value | Where |
|---|---|
| 12px | phone revenue foot (`mobileRevenue.module.css:266`), also used by #405 |
| 13px | desktop source note and runs note (`revenue.module.css:209`, `216`) |
| 13.5px | phone venue (`:189`) and desktop tour (`revenue.module.css:133`) |
| 14.5px | artist name (`:122-123`) |
| 11.5px | eyebrow (`:20`) and `.shown` (`:81`) |

### 2.3 Type on the pages in scope

| Element | Desktop | Phone | Source |
|---|---|---|---|
| **Box office h1** | Anton **84** / 0.88 / 0.01em, **61 at ≤1239**. Today it reads "Highest **Revenue Per Show**", with the gold words in `.inkText` | Anton **40** / 0.94. Today it reads "Revenue per **show**", with the gold word in `.gold` | `revenue.module.css:26-34`, `231`; `page.tsx:123-125`; `mobileRevenue.module.css:72-80`; `MobileRevenue.tsx:110-112` |
| **Countries h1** (#405) | Same `.h1`. "Highest-Grossing Artists **by Country**" | Same `.title`. "Highest-grossing artists **by country**" | #405 `RevenueCountries.tsx:105-107`; `MobileRevenueCountries.tsx:68-70` |
| Gold word in the h1 | `.inkText`: a 120° display ramp with an overlay grain, switched to soft-light on paper | `.gold`: a 180° ramp a→b 45%→c, **with no grain** | `globals.css:697-713`, `882-889`; `mobileRevenue.module.css:81-95` |
| Eyebrow / kicker | Mono 700 **11.5** / 0.18em, `--text-muted`, with a 22×2 rule in **`--ember`** before it | Mono 700 11 / 0.11em in **`--ember`** (revenue) or **`--gold`** (certs) | `revenue.module.css:14-25`; `mobileRevenue.module.css:64-71`; `mobileCerts.module.css:141-148` |
| Lede | `--type-lede` (20 at ≥900), `--text-body-cool`, 62ch, `text-wrap: pretty` | `--type-lede` (18), `--text-body` (revenue) or `--text-body-cool` (certs) | `revenue.module.css:35-42`; `mobileRevenue.module.css:96`; `mobileCerts.module.css:170-175` |
| Section h2 ("Multi-night runs", "By continent") | Anton **38** / 1.05 | Anton **26** / 1 | `revenue.module.css:160-169`; `mobileRevenue.module.css:222-232` |
| Continent h2 (#405) | Anton **40** / 0.95, **34 at ≤1239** | Mono 11 meta bar (`.metaBar` + `.barTitle`) | #405 `countries.module.css:90-98`, `161`; `mobileRevenueCountries.module.css:6-8` |
| Country h3 (#405) | Anton **26** / 1, **not uppercased** | Anton **20** / 1, not uppercased | #405 `countries.module.css:119-126`; `mobileRevenueCountries.module.css:24-31` |
| Row gross | Anton **22**, `--text-muted`; **his** in `--gold` | Anton **17** / 1, muted; his in gold | `revenue.module.css:146-154`; `mobileRevenue.module.css:200-208` |
| Row rank | Anton **22**, muted; top 3 (board) or No. 1 (countries) in `--gold` | Geist 700 `--type-small`, `--dim`, zero-padded "01" | `revenue.module.css:114-121`; `mobileRevenue.module.css:181-187` |
| Venue / artist | Geist 600 **15** venue; Geist 600 **14.5** name (`.hisName` gold / `.otherName` `--text`) | Geist **13.5** / 1.3 | `revenue.module.css:122-125`; `mobileRevenue.module.css:189` |
| Meta line | `--type-caption` muted (`.city`); tour 13.5 `--text-body-cool` | `--type-caption` muted, **ellipsised to one line** | `revenue.module.css:126-133`; `mobileRevenue.module.css:190-198` |
| Tickets | Geist `--type-small` muted, right | **Mono 11** `--dim` | `revenue.module.css:134-140`; `mobileRevenue.module.css:209-215` |
| Source note | **13** / 1.7 muted, **104ch** | **12** / 1.55 `--dim` | `revenue.module.css:215-221`; `mobileRevenue.module.css:265-271` |
| Certs hero total | n/a | Anton **86** / 0.82 gold. **The total is the h1**, with the unit in mono 700 11 / 0.12em muted beside it | `mobileCerts.module.css:149-169`; `MobileCerts.tsx:335-349` |

---

## 3. Colour tokens (light | dark)

All tokens live in `app/globals.css`. Dark is the default.

### 3.1 Surfaces
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` | Page, phone stat cells, continent cards (#405) | 23 |
| `--bg-soft` | `#ffffff` | `#141416` | Card or panel. The desktop filter band, back circle, action-bar icon button and Keep-exploring cards | 24 |
| `--bg-soft-2` | `#efeae1` | `#1c1c21` | Well or track | 25 |
| `--bg-raised` | `#e6e0d4` | `#24242a` | Hover and pressed surface (board rows) | 160 |
| `--btn-face` | `#ffffff` | `#24242a` | Secondary button face | 168 |
| `--scrim` | `rgba(247,244,238,.94)` | `rgba(12,10,9,.94)` | Backdrop of the back bar and action bar, with `blur(14px)` | 181 |
| `--veil-base` | `#f7f4ee` | `#0c0a09` | Page veil, map card | 484 |
| `--photo-well` | `#efeae1` | `#1c1c21` | Photo matte | 499 |

### 3.2 Lines. Promote the weight; never reclassify it (`:28-34`)
| Token | Light | Dark | Contrast / role | Line |
|---|---|---|---|---|
| `--line` | `rgba(23,20,15,.12)` | `rgba(245,244,240,.12)` | 1.31:1, decorative hairline. **Every board row separator** | 27 |
| `--rule-soft` | `.30` | `.24` | 1.97:1, secondary structure. Phone stat-grid frame; switch track when off | 33 |
| `--rule` | `.48` | `.38` | 3.30:1, **structural** (≥3:1). The phone stat grid's seams | 34 |
| `--border` | `#dcd9d3` | `#26262b` | Card or field edge (1.29:1, which is not enough for a control) | 26 |
| `--btn-edge` | `rgba(23,20,15,.55)` | `rgba(245,244,240,.42)` | Control boundary, ≥3:1 | 169 |
| `--color-divider` | = `--line` | | `.seg` dividers | 328 |

### 3.3 Text
| Token | Light | Dark | Role (◇ on `--bg`, light / dark) | Line |
|---|---|---|---|---|
| `--text` | `#17140f` | `#f5f4f0` | Primary ink (16.73 / 17.98) | 37 |
| `--text-body` | `#4a443b` | `#cfc7bb` | Reading text (phone revenue lede) | 74 |
| `--text-body-cool` | `#4a443b` | `#d8d8de` | Desktop lede, tour cell, runs meta (8.77 / 13.94) | 402 |
| `--text-body-cool-quiet` / `--text-body-warm` | `#4a443b` / `#544d43` | `#d3d3da` / `#b8b0a5` | Prose variants | 403-405 |
| `--text-muted` | `#5f584f` | `#9b9ba3` | Secondary. **Other artists' grosses**, ranks, column heads, eyebrow text (6.39 / 7.17) | 38 |
| `--dim` | `#6f685f` | `#85858e` | Smallest meta: phone ranks, tickets, foot note, meta bar (5.01 / 5.41) | 314 |
| `--text-dim-warm` | `#6f685f` | `#8a8279` | Number-group intros | 406 |
| `--text-fade` | 1 | 0.9 | The one allowed text opacity (desktop chip count) | 479, 562 |

### 3.4 Gold. **One gold on paper: `#945e00` for every role, fills included** (`:56-67`)
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--gold` → `--gold-ink` | `#945e00` | `#ffb627` | Text, lines, icons. **His gross, his name, top ranks**, the back-bar badge, the switch track when on | 49, 67 |
| `--gold-display` / `--gold-fill` | `#945e00` | `#ffb627` | Anton ≥24px / fills | 66, 65 |
| `--gold-bright` / `--gold-bright-ink` | `#945e00` | `#ffd24a` | Top of the fill ramp / bright gold used as text | 50, 425 |
| `--gold-dim` | `#945e00` | `#c98a2e` | Bottom of the fill ramp; hover borders | 183 |
| `--gold-hit` | `#5f3c00` | `#ffd24a` | Hover fill, deeper on paper and brighter on black | 428 |
| `--ink-on-gold` | `#ffffff` | `#14100a` | Label on a gold fill, and the switch knob when on | 71 |
| `--gold-wash-base` | `#945e00` | `#ffb627` | Base for `color-mix()` washes | 141 |
| `--gold-wash` / `--gold-edge` | 10% / 30% | 10% / 30% | Ready-made wash and its hairline | 142, 146 |
| `--wash-strength` | **0.42** | **1** | Multiplier on wash alpha: `calc(N% * var(--wash-strength))` | 468, 560 |
| `--display-ramp-a/-b/-c/-dim` | all `#945e00` | `#ffd24a` / `#ffb627` / `#ff7a1a` / `#c98a2e` | Gradient for gold **text** (the h1 word) | 137-140 |
| `--gold-glow-base` | `transparent` | `#ffb627` | Halos. There are no glows on paper | 419 |
| `--ember` | `#b34700` | `#ff7a1a` | **Records-family signature**: the eyebrow rule, the phone revenue kicker, the revenue chips' "on" state, the continent card label (#405). ◇ 5.01 / 7.59 on `--bg` | 158 |

- **Fill ramp:** `background-color: var(--gold-fill); background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%)` (`globals.css:778-791`). On paper it is flat `#945e00` with a white label.
- **Gold text on paper** ◇ measures 4.96 on `--bg`, 5.44 on `--bg-soft` and 4.78 on the phone "other artist" row. It measures **4.14 on `--bg-raised`**, which fails AA for anything under 24px regular. That matters for the desktop board: a hovered row of his paints a 22px gold gross on `--bg-raised` (§10).

### 3.5 Status
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--green` (= `--live`) | `#146b3c` | `#3ed17f` | Live, verified, positive delta | 294, 363 |
| `--green-dot` / `--live-dot` | `#1f9a5a` | `#3ed17f` / `#35d07f` | Non-text dot / live pulse (the certs "Live" board button) | 297, 514 |
| `--red` | `#c0392b` in both | | Wash only, **never text** | 304 |
| `--red-ink` / `--error-ink` | `#b3261e` | `#e0796d` / `#e06a5c` | Negative delta / error | 305, 507 |
| `--sold-ink` | `#8f4700` | `#f5890b` | "A fact, not a warning" | 510 |
| `--bar-muted` / `--dot-muted` | `#8d877d` / `#7f7a72` | `#4a4a52` / `#55555d` | Non-text data marks | 517-518 |

### 3.6 Certification tiers
**Fills** are the same in both themes (`:263-272`):

| Platinum | Gold | Diamond | Silver |
|---|---|---|---|
| `#EFEDE6` | `#FBB417` | `#31A1C0` | `#848F9E` |

On paper these fills are too light for words and dots, so those use the `-ink` tokens. On black, each ink is its fill.

| | Platinum | Gold | Diamond | Silver |
|---|---|---|---|---|
| `-ink` light (◇ on `--bg`) | `#2f3a4e` (10.42) | `#945e00` (4.96; the code comment's "5.40" is stale) | `#0b6e7e` (5.39) | `#6b6b74` (4.81) |
| `-edge` light | `rgba(47,58,78,.60)` | `rgba(138,90,0,.60)` | `rgba(11,110,126,.60)` | `rgba(107,107,116,.60)` |
| `-edge` dark | `rgba(239,237,230,.29)` | `rgba(251,180,23,.37)` | `rgba(49,161,192,.50)` | `rgba(132,143,158,.62)` |

The inks are at lines 282-285 and the edges at 286-289. **The tier gold `#FBB417` is not the brand gold.** On the phone certs screen, tier names, tier-chip labels and tier dots take these inks (`MobileCerts.tsx:360`, `406-420`), and the tier bars take tier gradients (`GRAD[name]`).

### 3.7 Map tokens (new 30 Sep). Use these if the countries page draws a map
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--map-played` | `#a3742a` | `#a07820` | Countries with data. 3.44 / 3.73 against land, 4.13 / 4.56 against the sea | 440 |
| `--map-land` | `#efeae1` | `#26262c` | Countries without data | 441 |
| `--map-border` | `rgba(23,20,15,.22)` | `rgba(245,244,240,.14)` | Borders (1.60 / 1.53 on land), so the data outranks them | 442 |
| `--map-sea` | `#ffffff` | `#141416` | Ocean (equal to `--bg-soft` today) | 443 |

These are measured in the comment at `globals.css:429-439`. The tour map paints `land` and `played` with a 0.6px non-scaling stroke. On hover the fill is `--gold-hit`, outlined by a 3px `--text` stroke. The selected shape gets a 4.5px `--text` outline, and focus gets a 10px `--gold` ring over a 6px `--map-sea` ring (`tourMapSvg.module.css:16-80`). The shapes come from `app/data/worldShapes.ts` (Equal Earth, Natural Earth 110m, viewBox **900×470**, `:7`), drawn from the static sprite `app/dai-dai/replay-map.svg` via `<use>` (`TourMapSvg.tsx` header). Desktop and phone share one drawing and decide view and selection separately.

### 3.8 Dark-room devices (visible on black, gone on paper)
| Token | Light | Dark | Line |
|---|---|---|---|
| `--glow-base` / `--halo-base` | `transparent` | `#e8b04b` / `#000` | 444, 450 |
| `--vignette-ink` | `transparent` | `rgba(0,0,0,.7)` | 454 |
| `--grain-opacity` | 0.022 | 0.06 | 455, 561 |
| `--shadow-base` × `--shadow-strength` | `#17140f` × 0.31 | `#000` × 1 | 460-461, 556 |
| `--shadow` / `--glow` | `0 12px 32px rgba(23,20,15,.14)` / `none` | `0 20px 50px rgba(0,0,0,.45)` / `0 0 40px` gold 22% | 217-218, 552-553 |

The action-bar primary's `0 0 26px` gold glow and `.btnPrimary`'s `0 8px 30px` glow are built on `--gold-glow-base`, so both vanish on paper.

### 3.9 Washes used on the board rows
| Wash | Recipe | Light (◇) | Dark (◇) | Source |
|---|---|---|---|---|
| Desktop **his row** | `--gold-wash-base` 4% × strength | `#f5f1ea` (gold text 4.83) | `#14110c` (gold 10.74) | `revenue.module.css:110` |
| Phone **other artist's row** (the phone inverts the desktop: the tint marks *them*) | `--text` 2% | `#f3f0ea` (muted 6.16, gold 4.78) | `#0f0f10` (muted 6.94) | `mobileRevenue.module.css:180` |
| Revenue chip, on | `--ember` 16% × strength, `--ember` border and label | `#f2e8de` (ember 4.55) | `#311c0d` (ember 6.18) | `revenue.module.css:75`; `mobileRevenue.module.css:151` |
| Generic phone chip, on | `--gold-wash-base` 16% × strength, gold border and label | `#f0eade` (gold 4.54) | `#31260f` (gold 8.46) | `mobileDeepPage.module.css:152` |
| Phone deep-page lead row | `--gold-wash-base` 6% × strength | | | `mobileDeepPage.module.css:187` |

---

## 4. Shape, depth, motion, spacing, containers

| Item | Value | Source |
|---|---|---|
| `--radius` / `-md` / `-lg` | 6px (all three) | `globals.css:215`, `316-317` |
| `--radius-sm` | 4px | `:216` |
| Pills | 999px, used for buttons, chips, the switch track, the back circle and action-bar buttons | `globals.css:765`; `mobileRevenue.module.css:40`, `139`, `299` |
| Off-token radii in scope | Certs board buttons **14px**; tab **12px**; focus ring **3px** | `mobileCerts.module.css:633`; `mobileTabBar.module.css:39`; `globals.css:1823` |
| Board rows | **No radius, no card.** Rows are full-bleed bands separated by `--line` hairlines; the head row carries a **2px** bottom rule | `revenue.module.css:88-106` |
| Continent cards (#405) | A hairline grid with no radius and no fill change: `--bg` cards inside a 1px `--line` frame, drawn per card | #405 `countries.module.css:9-30` |
| Motion | `--ease` = ease; `--ease-out` = `cubic-bezier(.22,1,.36,1)`; `--dur-fast` / `--dur` / `--dur-slow` = .15 / .2 / .3s | `globals.css:222-226` |
| Reduced motion | A global kill switch sets every duration to 0.001ms. The button lift is dropped, and the primary keeps `translateZ(0)` | `:1714-1721`, `2100-2108` |
| Spacing tokens | `--sp-1…--sp-32` (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128) are declared and have **0 uses**. Modules use literal px | `:203-212` |
| Phone gutter | **18px** everywhere | `mobileRevenue.module.css:23`, `63`, `175`; `mobileCerts.module.css:24`, `67` |
| Desktop containers | Revenue and countries `.wide`: **1360 / 40** (the masthead and breadcrumb measure). `.container` is 1280 / 24 (`--max-width`) | `revenue.module.css:10`; `globals.css:228`, `687-692` |
| Desktop vertical rhythm (revenue) | Hero `50 40 40`; filter band `22 40`; board `26 40 40`; runs `margin-top 40`, `padding-top 26`; source note `margin-top 20`; back button `margin-top 18` | `revenue.module.css:13`, `46`, `87`, `159`, `218`, `222` |
| Desktop vertical rhythm (#405) | Sections `30 40 40`; continent to continent 44; country `margin-top 26`; country head `0 8 10` | #405 `countries.module.css:6`, `80`, `109-117` |
| Anchor clearance | `[id]{scroll-margin-top: calc(88px + safe-top)}`: 69px bars plus air | `globals.css:591-593` |

---

## 5. Breakpoints

| Band | What switches | Source |
|---|---|---|
| **≤900 phone** | Every `Mobile*` screen and its chrome. `.desktopOnly` is hidden | `revenue.module.css:5-6`; `mobileRevenue.module.css:6-13` |
| **901–1239 (the "1024 band")** | Hamburger plus nav sheet. Revenue h1 84→61; the board drops its **Tour** column (6 columns → 5). On #405: continent h2 40→34, rows 52/160/1fr/80/140 → 46/130/1fr/64/120 with a 16 gap | `globals.css:1730`; `revenue.module.css:226-232`; #405 `countries.module.css:158-162` |
| **≥1240** | Inline masthead links | `globals.css:1730` |
| ≤760 | `/compare` switch names swap to their short forms ("Featured appearances" → "Features") | `compare.module.css:566`; #404 `certSwitches.module.css:77-80` |
| ≤720 | `.stand` collapses to one column. **Unreachable**, because `.desktopOnly` is already hidden at ≤900 | `revenue.module.css:210-213` |
| ≤359 | The certs board buttons stack | `mobileCerts.module.css:672-674` |
| `pointer: coarse` | 44px floor for chrome links, the hamburger and `.btnIcon` | `globals.css:1766-1781`, `1985-1990` |
| Lede | 18 → 20px at `min-width: 900px` | `globals.css:539-541` |

The rule is **two breakpoints, not a continuum**: ≥1240, 900–1239 and <900. Design the phone at **375** and check it at **320**, where #404's kicker and the back-bar labels are measured. Design desktop at **1440** and check it at **1024**.

---

## 6. Phone chrome. Design around it; do not redraw it

### 6.1 Which chrome each in-scope route gets (`app/lib/mobileScreens.ts`)
| Route | Masthead ≤900 | Top bar | Bottom bar | Source |
|---|---|---|---|---|
| `/records/tours/revenue` | hidden | back bar to `/records/tours`, label + gold badge (top gross) + hamburger | **action bar**: one gold "Make a stat card" → `/share` (no tabs) | `:31`, `:85`; `MobileRevenue.tsx:94-103`, `194-199` |
| `/records/tours/revenue/countries` (#405) | hidden | back bar to the revenue board, label "By country" + gold badge "12 countries" | **action bar**: gold "Every show, ranked" → the revenue board | #405 `mobileScreens.ts:32-34`, `89`; `MobileRevenueCountries.tsx:54-63`, `150-154` |
| `/certifications` | hidden | back bar "Certifications" + **muted** count + hamburger | **action bar**: gold "Compare ↗", outlined "Stat card", and a 50px filter icon | `:17`, `:76`; `MobileCerts.tsx:253-261`, `700-726` |
| `/afrobeats/<artist>` | hidden | back bar to `/afrobeats` with the **artist's name** (ellipsised) + muted count | **action bar**: gold "Compare <Artist> ↗" + filter icon | `:117-128`, `157-163`; `app/afrobeats/[artist]/page.tsx:216-239` |

None of these four screens shows the five-tab bar.

### 6.2 Heights (all at ≤900)
| Bar | Build | Height | Source |
|---|---|---|---|
| Back bar | sticky, z **5**; padding `12px 18px` + safe insets; flex with a 12 gap; 44px back circle; 1px `--line` bottom; `--scrim` + `blur(14px)` | **69px** + safe-top | `mobileRevenue.module.css:16-45`; `mobileCerts.module.css:17-46` |
| Action bar | fixed, z **40**; 1px `--line` top; padding `12 18` + safe-bottom (falls back to 22); **50px** pill | **75px** + safe-bottom (≈109 on a 34px home indicator) | `mobileRevenue.module.css:277-292`; `mobileCerts.module.css:418-433` |
| Spacer before the action bar | revenue **104px**; certs **110px** | | `mobileRevenue.module.css:274`; `mobileCerts.module.css:415` |
| Five-tab bar (not on these screens) | `--tabbar-pad` 8 + `--tabbar-row` 48 + `--tabbar-foot` max(30, safe) + `--tabbar-edge` 1; z 60 | `--tabbar-h` = 87px minimum | `globals.css:1893-1899`; `mobileTabBar.module.css:4-45` |
| Masthead (901+) | 68px row + 1px edge, sticky, z 50 | 69px | `globals.css:906`, `937` |

### 6.3 Anatomy
| Part | Spec | Source |
|---|---|---|
| Back button | 44px circle, `--bg-soft`, 1px `--line`, a 15px chevron at stroke 2.2 in `--text` | `mobileRevenue.module.css:34-45`; `MobileRevenue.tsx:95-99` |
| **Back label** | Mono 700 11 / 0.11em uppercase. **The shared deep page and the certs screen clamp it to one line with an ellipsis. The revenue screen does not**, so its label wraps to two lines once the bar runs out of room (§10) | clamped: `mobileDeepPage.module.css:47-56`, `mobileCerts.module.css:47-56`; **unclamped**: `mobileRevenue.module.css:46-52` (also used by #405) |
| Badge (revenue, countries) | Mono 400 11 / 0.1em **`--gold`**, `margin-left: auto`, `flex: none` | `mobileRevenue.module.css:53-60` |
| Count (certs) | Mono 400 11 / 0.1em **`--text-muted`**, `margin-left: auto` | `mobileCerts.module.css:57-64` |
| Hamburger | 44×44 hit area; three bars 17×1.5px, gap 4, `--text`; hidden ≥901 | `app/components/mobileMenuButton.module.css:3-34` |
| Space for the label ≈ | 375 − 36 gutter − 44 back − 44 menu − 36 gaps − the badge's width. With "$6.15M" (≈46px) that leaves **≈169px**, or 21 characters of label. At 320 it leaves **≈114px**, or 14 characters | computed from the above |
| Action-bar primary | `flex: 1`, min-height 50, 999px, the gold ramp, `--ink-on-gold` pinned plus `translateZ(0)`, mono 700 11 / 0.12em, glow `0 0 26px` gold 24–25% | `mobileRevenue.module.css:293-315`; `mobileCerts.module.css:434-456` |
| Action-bar secondary | min-height 50, padding `0 18px`, 999px, 1px `--line`, `--text` label, mono 700 11 / 0.12em, nowrap | `mobileCerts.module.css:762-780` |
| Action-bar icon | 50px circle, `--bg-soft`, 1px `--line`, `--text` | `mobileCerts.module.css:457-470` |

---

## 7. Controls

### 7.1 Buttons (`app/globals.css`)
| Variant | Spec | Lines |
|---|---|---|
| `.btn` | inline-flex, **46px** tall, padding `0 26px`, gap 6, 999px, mono **700 13px 0.08em** uppercase, 1px transparent border | 755-777 |
| `.btnPrimary` | Gold ramp fill (§3.4) with `--ink-on-gold` pinned twice; shadow `0 8px 30px` glow 24%; hover lifts 3px with `0 14px 44px` at 42% | 778-817 |
| `.btnSecondary` | `--btn-face` with a `--btn-edge` border and a `--text` label; hover lifts 3px, border and label go `--gold`, plus a 6% `--white-wash-base` wash | 818-866 |
| `.btnGhost` | Transparent with a `--gold` label, padding `0 8px` | 1948-1972 |
| `.btnIcon` | 36px, 44px on coarse pointers | 1975-1990 |
| Disabled | opacity .45, `not-allowed`, no lift | 1936-1947 |
| **iPhone guard** | Every button pins `-webkit-text-fill-color` and resets filter, blend and opacity, and holds `translateZ(0)` at rest, because labels have rendered blank or orange on iPhones. **Keep this on any new button** | 792-816, 832-857 |
| In use today | Revenue desktop hero: secondary "See the grosses visualised →"; foot: secondary "← Tours". #405 adds a **primary** "Highest-grossing artists by country →" to the revenue hero on both layouts (phone: a full-width `.btn btnPrimary` in `.linkRow`, padding `16 18 0`). The countries hero has secondary "← Revenue per show", and its foot has two secondaries | `page.tsx:131-135`, `175-177`; #405 `revenue/page.tsx` diff; `MobileRevenue.tsx` +116-122; `mobileRevenue.module.css` +268-271; `RevenueCountries.tsx:109-113`, `196-203` |

**#405 note.** On the phone revenue screen, the new full-width gold `.btnPrimary` sits above a gold action bar. That makes **two gold actions on one screen**, and the action bar's own comment says that must not happen (`mobileCerts.module.css:758-761`). The designer should settle it.

### 7.2 Chips
| Component | Size / type | Rest → on | Source |
|---|---|---|---|
| **Revenue phone chip** (All / Burna Boy / Others) | min-height **44**, padding `0 16px`, 999px, mono 700 11 / 0.1em, rail gap 8, rail padding `16 18 14` | 1px `--line`, `--text-muted` → **ember** wash 16%×strength, ember border and label | `mobileRevenue.module.css:128-151`; `MobileRevenue.tsx:86-90`, `125-137` |
| **Revenue desktop chip** (All artists + one per artist, with a count) | min-height **40**, padding `0 16px`, gap 8, Geist **600 13px**, 1px `--border`; count mono 11 at `--text-fade` | Hover gold → on: ember wash; **"N of M shown"** mono 11.5 muted, right | `revenue.module.css:46-84`; `RevenueBoard.tsx:20`, `54-76` |
| **Certs phone tier chip** | min-height 44, padding `0 16px`, gap 7, mono 700 11 / 0.1em; border `--text` 18%; label in the **tier ink** with a 7px tier dot | On = **gold-ramp fill** with an `--ink-on-gold` label (on Ayra Starr's page, a brand-purple ramp) | `mobileCerts.module.css:211-245`, `748-754`; `MobileCerts.tsx:400-420` |
| Certs compact pill ("Compare with…" artists) | min-height **32**, padding `0 11px`, 11 / 0.08em | Hover `--bg-raised` | `mobileCerts.module.css:544-551` |
| Generic phone chip (`mobileDeepPage`) | min-height 44, padding `0 15px`, `--text-body` | Gold wash 16%×strength, gold border and label | `mobileDeepPage.module.css:135-152` |
| `.tag` | Mono 11 / 0.1em, padding `4px 10px`, 999px | Accent, Outline, Neutral, Diamond, Platinum, Live | `globals.css:1992-2011` |
| `.seg` segmented | padding `7px 12px`, 13px, `--radius-md`, `--color-divider` border | On = `--gold-fill` / `--ink-on-gold` | `globals.css:2040-2067` |

### 7.3 The `/compare`-style switch (#404, copied from `/compare`)
The certs switch row is a rule-for-rule **copy** of `/compare`'s controls (`app/compare/compare.module.css:169-226`). It is not shared: `/compare`'s stylesheet stays untouched, and the comment asks that the two are kept in step (#404 `certSwitches.module.css:1-10`).

| Part | Spec | #404 source |
|---|---|---|
| Row `.controls` | flex, wrap, `gap: 10px 26px`, mono **`--type-label` (11px) / 0.06em** uppercase. `/compare`'s own row adds `padding 14 0`, `--rule-soft` rules above and below, and a 24 bottom margin; the certs row drops those and takes the host's spacing | `certSwitches.module.css:14-23`; `compare.module.css:169-182` |
| Control | inline-flex, wrap, gap 10, **min-height 44** | `:24` |
| Name | `--text-muted`, 700. **"Featured appearances"** ("Features" at ≤760) and the **home country in full** ("Nigeria", "South Africa"). The name is `aria-hidden`; the button carries it as visually hidden text | `:25`, `75-80`; `CertViewSwitches.tsx:107-141` |
| Switch (a `<button role="switch" aria-checked>`) | inline-flex, gap 10, min-height 44, padding `0 4px 0 0`, 999px, `--text-muted`; **on** → `--text` | `:27-48` |
| Track `.dot` | **30×16**, 999px, `--rule-soft` (hover `--rule`); **on** = `--gold` | `:49-57`, `69`, `71` |
| Knob | 12px circle at top/left 2, `--text-muted`; **on** = `left: 16px`, `--ink-on-gold`. Transitions `--dur` / `--ease` | `:58-70` |
| State word | Featured: **"on · every plaque held"** / **"off · lead credits only"**. Home: **"included"** / **"left out"**. The state is a word, not gold alone | `CertViewSwitches.tsx:122`, `138` |
| Focus | Global 2px gold ring, kept on the pill radius | `:72-74` |
| Behaviour | Both switches default **on**. A switch the artist does not get is not rendered, and an empty row is not rendered. A flip holds the switch under the finger (`holdInPlace`, flushSync plus a scroll correction) | `CertViewSwitches.tsx:21-51`, `100` |
| Phone placement | `.viewRow { padding: 2px 18px 6px }`, **directly above the tier rail**. At 390 the two controls stack one per line; at 320 a long state word drops under its name | #404 `mobileCerts.module.css:255-263`; `MobileCerts.tsx:442-452` |
| Desktop placement | `.switchRow { padding-bottom: 8px; border-bottom: 1px solid var(--rule-soft) }`, at the head of the filter panel | #404 `certifications.module.css:577-583`; `CertExplorer.tsx:355-365` |
| ◇ | Off track against `--bg`: **1.95 / 1.97**, which is under the 3:1 control floor. The knob against the track measures 3.28 / 3.64, and the state word carries the state | computed |

**Adaptive kicker** (#404 `app/lib/certScope.ts:234-260`), the line above the phone total and the eyebrow of Burna Boy's desktop hero:

| View | Kicker |
|---|---|
| both on | **Certified worldwide** |
| home left out | **Outside Nigeria** |
| features off | **Worldwide · Lead credits** |
| both off | **Outside Nigeria · Lead credits** |

It must stay **one line at 320** for the longest home name ("Outside South Africa · Lead credits" measured 278px in a 284px box). Changing the kicker's font, size, tracking or the hero's side padding means re-measuring (#404 `mobileCerts.module.css:141-145`; `tests/certKicker.test.ts:17-29`). On #404 the hero unit line uses `text-wrap: balance` (`mobileCerts.module.css:174-176`).

---

## 8. Components these jobs use

### 8.1 Desktop revenue board (`RevenueBoard.tsx` + `revenue.module.css`)
| Part | Spec | Source |
|---|---|---|
| Structure | Filter band (`--bg-soft`, `--line` bottom), then a band holding a `role="table"` grid. Ranks are baked in before filtering, so **filtering never renumbers** | `RevenueBoard.tsx:48-50`, `54-136` |
| Columns | `52px 150px 1fr 210px 100px 130px`, gap 20, padding `15px 8px`, 1px `--line` bottom. At ≤1239 it becomes `46 130 1fr 90 120` with Tour hidden | `revenue.module.css:89-97`, `226-230` |
| Head row | padding `10px 8px`, mono 11 / 0.08em muted, **2px** bottom rule. The heads are "#", "Artist", "Venue", "Tour", "Tickets", "Gross" | `:98-106`; `RevenueBoard.tsx:81-92` |
| His row | 4%×strength gold wash; name and gross in `--gold` | `:110`, `122`, `154` |
| Other artist's row | Plain; name in `--text`, gross in **`--text-muted`** | `:123`, `146-153` |
| Rank | Muted, except ranks **01–03**, which are gold **whoever's row it is** (on #405, only No. 1 in each country) | `:114-121`; `RevenueBoard.tsx:99-106`; #405 `RevenueCountries.tsx:47` |
| Hover | `--bg-raised` | `:111` |
| Venue cell | Flag + venue (600 15), then city on its own line (caption, muted) | `:124-132`; `RevenueBoard.tsx:113-118` |
| Not reported | An em dash in `--dim` with `cursor: help` (`NotReported`) | `globals.css:2097`; `RevenueBoard.tsx:123` |

### 8.2 Multi-night runs (both layouts)
| | Desktop | Phone |
|---|---|---|
| Container | `margin-top 40`, `--line` top, `padding-top 26` (`revenue.module.css:159`) | `padding-top 26` (`mobileRevenue.module.css:221`) |
| Heading | `RUNS_HEADING` "Multi-night runs", Anton 38 | Anton 26, padded 18 |
| Lede | `RUNS_LEDE`, `--type-body` / 1.6 `--text-body-cool`, 62ch | `--type-small` / 1.55 `--text-body`, padding `8 18 14` |
| Row | grid `1fr 160px 220px`, gap 20, baseline, padding `15px 8px` (`:179-186`). Place 600 15; meta 13.5 `--text-body-cool` with the artist name (gold if his); gross Anton 22 (gold if his); tickets `--type-small` muted | grid `1fr auto`, gap 11, padding `12 18`. Venue 13.5; artist 600 `--text` · tour (caption); **dates on their own line**; tickets mono 11 `--dim` ("29,579 tickets over 2 nights"); gross Anton 17 right (`:241-263`) |
| Tint | none | `.rowOther` on runs that are not his |
| Note | 13 / 1.7 muted, 104ch: "No per-night split is invented…" (`page.tsx:169-172`) | (in the foot note) |
| Copy source | `app/lib/multiNightRuns.ts:12-18`. **"Nights", never "shows"**, in this list | |

### 8.3 Phone revenue screen (`MobileRevenue.tsx` + `mobileRevenue.module.css`)
| Part | Spec | Source |
|---|---|---|
| Hero | padding `22 18 18`; kicker (ember) → 11 → h1 40 → 12 → lede 18 | `:63-96`; `MobileRevenue.tsx:105-114` |
| **Stat grid** | 2-up, `gap: 1px` over a `--rule` fill (the hairline seams), `--rule-soft` top and bottom. Cells are `--bg` with padding `15 18`. Value Anton **32** / 0.9 **gold**; label mono 700 11 / **0.13em** (the shared one is 0.11em) with `margin-top 9` | `:98-124`; shared variant `mobileDeepPage.module.css:101-125` |
| Chip rail | §7.2 | `:128-151` |
| Meta bar | padding `13 18`, `--line` top and bottom, mono 11 / 0.1em uppercase `--dim`. "N shows" on the left; legend on the right: a 7px gold dot + "His nights" | `:153-167`; `MobileRevenue.tsx:139-147` |
| Row | grid `26px 1fr auto`, gap 11, baseline, padding `12 18`, 1px `--line`. Rank / venue + one-line ellipsised meta / gross over tickets, right-aligned | `:170-215`; `MobileRevenue.tsx:149-163` |
| Meta wording | His rows: "City · Tour · Year". Other rows: "**Artist** · City · Year" (the artist is named in the text, so the tint is never the only signal) | `page.tsx:87-93` |
| Compact gross | `compactGross()` keeps neighbours distinct. No two neighbouring rows with different grosses may print the same label | `app/lib/grossLabel.ts`; `tests/revenueGrossLabels.test.ts` |
| Foot | 12 / 1.55 `--dim`, padding `18 18 0`. **One paragraph** that holds the source, the as-of date, the scope sentence, the dash legend (only while a dash exists) and the runs sentence | `:265-271`; `page.tsx:110` |

### 8.4 Countries page parts (#405)
| Part | Desktop (`RevenueCountries.tsx`, `countries.module.css`) | Phone (`MobileRevenueCountries.tsx`, `mobileRevenueCountries.module.css`) |
|---|---|---|
| Hero | The revenue hero classes. Eyebrow "African artists · reported box office" (ember rule); h1; lede from data; secondary "← Revenue per show" (`:98-115`) | The revenue hero; kicker the same words in ember (`:65-72`) |
| Stats | none | Stat grid: **"9 of 12" / "Countries he leads"** and **"89" / "Reported nights"** (both values gold) (`:74-85`) |
| Continent leaders | "By continent" (Anton 38). A `<ul>` card grid `repeat(auto-fit, minmax(170px, 1fr))` with `--line` hairlines drawn per card; card padding `18 20 20`, gap 6. Label mono 700 11.5 / 0.14em **ember**; two fixed meta lines mono 11 (nights, countries); leader name 14.5 600 (gold if his); figure Anton **34** (gold if his); "of $X.XXM" mono 11; "Next: Artist · $X.XXM" caption (`countries.module.css:9-69`; `RevenueCountries.tsx:117-154`) | `.metaBar` heading "By continent", then one revenue `.row` per continent with no rank: continent name, then "**Leader** leads · $X of $Y · next Artist, $Z" (wraps), and the **continent total** right in muted Anton 17 over "N countries" (`:87-109`) |
| Africa | A card in the same grid: label "Africa", then **"No reported box office yet"** 600 15 muted, then the note (caption) (`:145-151`; `countries.module.css:72-77`) | A row: "Africa · No reported box office yet", with the note as meta (`:110-117`) |
| Continent section | Anton 40 title, meta "$X · N nights" mono 11.5 / 0.08em muted, **2px `--line`** bottom (`countries.module.css:80-106`) | `.metaBar` + `.continentBar`: name in `--text` 700, "$X · N nights" right in `--dim` (`mobileRevenueCountries.module.css:6-8`) |
| Country heading | Flag + name, Anton 26. Leader line at `--type-small` muted: "**Leader** $X of $Y" (`:110-131`) | Column: name Anton 20, leader line caption (`:16-39`) |
| Country board | 5 columns `52px 160px minmax(0,1fr) 80px 140px`, gap 20, padding `13 8` (`:135-154`). Heads "#", "Artist", "Best night", "Nights", "Total". The best night is "$X.XXM · Venue" over "City · Year · N tickets", plus the run note. Total in full dollars, gold if his | Revenue `.row`: rank / artist 600 + best-night line (wraps) / total (compact) over "N nights" mono 11 `--dim` (`:28-46`) |
| Runs inside a country | A run counts every night it played toward the total. If an artist's only reported gross there is a run, the best-night cell reads **"Nights reported together"** (`RevenueCountries.tsx:64-69`) | The same text via `bestNightLine()` |
| Method note | `.sourceNote` 13 / 1.7, 104ch, **one long paragraph** (`METHOD_NOTE`, `RevenueCountries.tsx:30-31`) | The same text as the 12px `.foot` |
| Foot actions | Secondary "← Revenue per show" + secondary "Tours" (`:196-203`) | Action bar: gold "Every show, ranked" |
| Keep exploring | none | none |

**Recomputed from the data (3 Oct)**: 89 nights (82 single shows, plus 3 multi-night runs covering 7 nights) in 12 countries on 4 continents. Burna Boy leads 9 of 12, and Tyla leads Japan, the Philippines and Singapore, where hers is the only reported show. These figures were checked against `app/data/tourRevenue.ts` on *main*: 82 `revenueShows` rows (`:85-341`), 3 `revenueStands` of 3, 2 and 2 nights (`:369-376`), and 12 distinct flags (US 48, CA 8, AU 6, DE 5, FR 4, GB 4, IE 2, and one each for BE, CH, JP, PH and SG). They were not re-run through `revenueByCountry()`, because the machine's heavy-step queue was full. **Do not type them into a design. The page derives them.**

### 8.5 Phone certs screen (`MobileCerts.tsx` + `mobileCerts.module.css`)
| Part | Spec | Source |
|---|---|---|
| Hero | padding `22 18 18`, position relative, overflow hidden. The artist portrait is blended in from the right (an `<img>`, the LCP element) under a scrim | `:67-140`; `MobileCerts.tsx:265-327` |
| Kicker | Mono 700 11 / 0.11em **`--gold`**. Main: "Certified worldwide"; #404: per view (§7.3) | `:141-148`; `MobileCerts.tsx:330` |
| Total = h1 | Anton 86 gold + a mono unit "awards / N countries" | `:149-169` |
| Lede | 18 / 1.5 `--text-body-cool`. On `/afrobeats/<artist>` it is **one long sentence**: register list, total, countries, releases and the verification date | `:170-175`; `afrobeats/[artist]/page.tsx:234` |
| Tier list | `margin-top 20`, rows `13 0` with `--line` hairlines. Name mono 700 11 / 0.1em in the tier ink (min-width 74); count Anton 20; % `--type-small` muted right; track 6px on a 9% `--ink-wash-base`, fill in a tier gradient | `:177-208` |
| Board buttons (Charts / Live) | 2-up grid, gap 10, margin `14 18 4`; min-height 58, padding `9 14`, **radius 14**, `--bg-soft`, 1px `--line`; label mono 700 11 / 0.1em; note **Geist italic 11** muted; "→" gold (Live: green + a 7px `--green-dot`) | `:619-674` |
| Switch row (#404) | §7.3 | |
| Tier rail | padding `4 18 16`, gap 8, smooth scroll | `:211-218`, `566` |
| List label / block label | mono 11 / 0.12em muted, padding `0 18 6` / `14 18 6` | `:284-298` |
| Release row | padding `15 18`, `--line`. Rank `--type-small`; cover 34; title **Anton 19** uppercase; meta **mono 11 / 0.06em uppercase** muted; count `--type-small` **gold**; badges below, indented 74, as pills (4×9, 1px currentColor, mono 700 11) in the tier ink. Hover: 6% gold wash + a 26px indent | `:319-396` |
| Fold ("Compare with…", "Certified units by country…") | `<details>`, **closed by default (owner, 25 Sep)**. The summary is the log kicker in gold, with a muted count and a ↓ chevron that rotates; inside, compact pills wrap. **This is the one owner-approved fold on these screens.** Do not add others | `:507-551`; `MobileCerts.tsx:584-633` |
| Dated log | `margin-top 30`, `--line` top. Head padding `22 18 4`; kicker mono 700 11 gold; title Anton 26; lede **13.5 / 1.5 muted** (three sentences); year chips with "2024 · 12"; event rows (title 600 14.5, meta mono 11, tier badge) | `:479-503`, `552-561`; `MobileCerts.tsx:636-690` |
| FAQ | `MobileFaqSection`, "Common questions" | `MobileCerts.tsx:696-698` |
| Board artist differences | `history={[]}` (no dated log), portrait, `brand` (Ayra Starr's purple, which is page-only), the "Compare <Name> ↗" action, and no Stat card | `afrobeats/[artist]/page.tsx:216-239` |

### 8.6 Kicker and eyebrow variants (pick one; don't add a fifth)
| Variant | Spec | Where |
|---|---|---|
| Desktop eyebrow with a rule | flex, gap 10, mono 700 **11.5 / 0.18em** muted text; 22×2 rule in **`--ember`** (records) or **`--gold-fill`** (certs) | `revenue.module.css:14-25`; `certifications.module.css:434-451` |
| Phone kicker, records | mono 700 11 / 0.11em **`--ember`** text | `mobileRevenue.module.css:64-71` |
| Phone kicker, certs | mono 700 11 / 0.11em **`--gold`** text | `mobileCerts.module.css:141-148` |
| Phone kicker, shared deep page | mono 700 11 / 0.11em **`--text-muted`** | `mobileDeepPage.module.css:68-75` |
| Global `.eyebrow` | mono 0.72rem / 0.18em **`--gold`** | `globals.css:1195-1202` |

The family rule (29 Sep review) puts the signature on the **tick**, never on the text. Both phone kickers break it: the records kicker is ember text and the certs kicker is gold text.

### 8.7 Keep exploring (`KeepExploring.tsx` + `KeepExploring.module.css`)
| Part | Spec | Source |
|---|---|---|
| Block | `<nav class="container">`, margin `64 auto 80` (`36 auto 56` at ≤760) | `:6-14`; `KeepExploring.tsx:97` |
| Label | "Keep exploring": mono 0.72rem / 0.12em uppercase, **`--text-muted`** (owner, 30 Sep; test-guarded) | `:19-26`; `tests/keepExploringLabel.test.ts` |
| Cards | flex wrap, gap 14; card `flex: 1 1 240px`, padding `18 20`, `--bg-soft`, 1px `--border`, `--radius`; title 700, desc 0.8rem muted; **arrow → in gold** (the action). Hover: `--gold-dim` border, lift 3px | `:27-64` |
| Lists | `exploreFor[route]` in `app/lib/links.ts:105-`; the fallback is music / certifications / records. **Today it renders on the desktop halves of `/certifications` and `/afrobeats/<artist>` only.** Neither revenue page has one, and no phone screen in scope does | `KeepExploring.tsx:77-84`; `certifications/page.tsx:272`; `afrobeats/[artist]/page.tsx:587-588` |

---

## 9. States

| State | Spec | Source |
|---|---|---|
| Focus ring (global) | `outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 3px` on a, button, input, select, textarea, summary and `[tabindex]` | `globals.css:1814-1824` |
| Row focus | `box-shadow: inset 0 0 0 2px var(--gold)` on `[role=row]` and link rows | `:1856-1862` |
| Pressed chip | Wash 10%×strength | `:1842-1845` |
| Summary hover | Wash 5%×strength | `:1849-1851` |
| Board row hover | `--bg-raised` (desktop); certs rows: 6% gold wash + indent (hover devices only) | `revenue.module.css:111`; `mobileCerts.module.css:330-344` |
| Tap targets | 24px on a mouse, 44px on coarse pointers, for chrome; prose links are exempt | `globals.css:1752-1781` |
| Prose links | 1px underline, 2px offset (WCAG 1.4.1) | `globals.css:680-684` |
| Not reported | Em dash in `--dim`, `cursor: help` | `:2097` |
| Skip link | Gold ramp, min-height 44 | `:1786-1807` |

---

## 10. In scope: what the code shows today

These are facts for the designer, not rulings.

| # | Finding | Source |
|---|---|---|
| 1 | *(Fixed in #406: the label is now "Highest-grossing", `nowrap`, one line at 320.)* **The revenue back-bar label is not clamped.** The shared and certs back bars ellipsise; the revenue one wraps. ≈ "REVENUE PER SHOW" (16 characters, ≈127px) fits at 375 but not at 320 (≈114px). The renamed **"HIGHEST-GROSSING SHOWS"** (22 characters, ≈175px) will wrap at 375 too. #405's countries screen reuses this class | `mobileRevenue.module.css:46-52` vs `mobileDeepPage.module.css:47-56` |
| 2 | **The phone foot notes are single 12px paragraphs.** Revenue: 4–5 sentences (`page.tsx:110`). Countries: `METHOD_NOTE`, 4 sentences, about 600 characters (#405 `RevenueCountries.tsx:30-31`). Both sit at an off-scale 12px in `--dim` | `mobileRevenue.module.css:265-271` |
| 3 | **Phone ledes are long.** The `/afrobeats/<artist>` certs lede is one sentence with a parenthetical and a date. The countries lede is a 2-sentence summary. The certs dated-log lede is three sentences at 13.5 muted | `afrobeats/[artist]/page.tsx:234`; #405 `countries/page.tsx:21`; `MobileCerts.tsx:640-644` |
| 4 | **Two gold actions on the phone revenue screen** once #405 lands: the new full-width `.btnPrimary` and the gold action bar | §7.1 |
| 5 | **Gold gross on a hovered desktop row** ◇ 4.14:1 on paper, at 22px Anton 400, which is under the 24px large-text threshold | `revenue.module.css:111`, `154` |
| 6 | **Desktop chip boundary** is `--border`, 1.29:1, under the site's own 3:1 control floor | `revenue.module.css:64` |
| 7 | **The switch's off track** is 1.95:1 against `--bg`. The state word carries the state | #404 `certSwitches.module.css:55` |
| 8 | **The phone "other artist" tint** is `--text` at 2%. ◇ The plate is about 1.03:1 against `--bg`, so it is effectively invisible; the meta line naming the artist does the work | `mobileRevenue.module.css:180` |
| 9 | **The desktop/phone revenue tint is inverted on purpose.** Desktop washes *his* rows; the phone washes *the others'* | `revenue.module.css:108-110`; `mobileRevenue.module.css:178-180` |
| 10 | **Dead rule.** `.stand`'s ≤720 collapse can never apply | `revenue.module.css:210-213` |
| 11 | **Kicker colour** is ember text (records) or gold text (certs), not muted text with the colour on the tick | §8.6 |
| 12 | **"Revenue" in current copy.** The h1, the phone back label and kicker, the page metadata and the JSON-LD say "revenue". The owner's rule is **gross** in new copy | `page.tsx:32-61`, `124`; `MobileRevenue.tsx:100`, `111` |

---

## 11. Guards a redesign must keep passing (`tests/`)

| Test | What it holds |
|---|---|
| `cssColourTokens.test.ts` | No colour literal in any `*.module.css` unless it is allowlisted with a reason. **Any new colour must be a `globals.css` token** |
| `tierColourParity.test.ts` | Tier maps name the `--tier-*` tokens |
| `goldMarksHisRows.test.ts` | Gold grosses mark **his** rows only, on both revenue boards (and on #405) |
| `revenueSources.test.ts` | Every row carries a source **in the data**; no page prints one; the Ziggo Dome 2022 gross stays off the board |
| `revenueGrossLabels.test.ts` | The compact phone grosses keep the ranking: no two neighbours with different grosses print the same label |
| `multiNightRuns.test.tsx` | Both layouts head the runs "Multi-night runs" with the shared lede; every run names its artist; it says nights, not shows |
| `keepExploringLabel.test.ts` | The Keep-exploring label is muted and the arrows are gold |
| `mobileLinkParity.test.ts` | A link on one layout exists on the other |
| `mobileHeroOrder.test.ts` | The phone hero's running order, where the figure leads |
| `seoAudit.test.tsx` | One visible h1 per layout (both layouts are in the DOM) |
| #405 `revenueByCountry.test.ts`, `revenueCountriesPage.test.tsx` | Totals, leaders, continents and Africa's empty state are derived; the page shows Africa |
| #404 `certKicker.test.ts`, `certViewSwitches.test.tsx`, `certLabels.test.tsx` | The kicker's four wordings and the 320px one-line budget; the switch roles, states and order; every label over a recounted number adapts |
