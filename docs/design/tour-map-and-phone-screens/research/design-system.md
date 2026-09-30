# burnaboystats.com: design system, as the code defines it (29 Sep 2026)

This file is for Claude Design, for work on the tour map (`/records/tours/map`) and the phone screens. Every value was read from the code at `main` @ `6aae00c8` on 29 Sep 2026 and is cited as `file:line` from the repo root. It replaces `docs/design/dai-dai-redesign/research/design-system.md` (26 Sep, @`93fedb07`), and §0 lists what has moved since then.

- *(bundle)* means `design_handoff_burnaboystats/`, the gitignored folder that holds the design files.
- ◇ marks a contrast ratio computed for this file: WCAG relative luminance, with any alpha composited over the surface named. These figures re-check the design review's numbers rather than repeat them.

---

## 0. What moved since the 26 Sep file

| Change | Where |
|---|---|
| The five-tab bar's size is now a set of tokens, `--tabbar-pad/-row/-foot/-edge`, and their sum is `--tabbar-h`. The bar is built from them. | `app/globals.css:1866-1879`; `app/components/mobileTabBar.module.css:21,28,33` |
| Every line of `globals.css` from 1864 onward sits **+15** compared with the 26 Sep citations. Lines 1–1863 are unchanged, and the token blocks are byte-identical. | `git diff 93fedb07 -- app/globals.css` |
| On `/dai-dai/es` the tab labels are in Spanish (Inicio, Música, Certs, Listas, Récords). `/on-this-day` and its day pages light the Records tab. | `app/components/MobileTabBar.tsx:38-42`, `69-75` |
| `/embed` and `/on-this-day` joined `BACK_BAR_ROUTES`. `/on-this-day/<day>` gets a back bar through `isOnThisDayPage`. | `app/lib/mobileScreens.ts:46-52`, `127-131` |
| Breadcrumb links on the phone are 44px tall (they were 32×24). | `app/components/breadcrumbBar.module.css:33-40` |
| The compact pill's type went from 10px to 11px, and the badge sub-label is now `max(11px, .82em)`. | `app/components/mobileCerts.module.css:544-551`, `683` |
| The Dai Dai replay map shipped: peak-band fills, a Europe inset and a static sprite. | `app/components/DaiDaiReplay.module.css`; `app/dai-dai/replay-map.svg/route.ts` |

---

## 1. Ground rules

| Rule | Source |
|---|---|
| **One token block, two themes.** Every colour is written once as `light-dark(LIGHT, DARK)`, with the LIGHT value first. A theme switch changes only `color-scheme`. | `app/globals.css:6-8`, `360-376`, `522-523` |
| **Dark is the default.** The server render, visitors with no JS and visitors who never chose all get dark. | `app/globals.css:370-376`; `app/layout.tsx:221-233` |
| **Gold carries meaning.** It marks what is live and what is the action. There is one gold action per screen, and every gold fill uses one ramp. | `app/page.module.css:267-270`, `283-290`; `app/globals.css:2089-2095`; `app/components/mobileDeepPage.module.css:313-314` |
| **Data colours are never gold.** This covers tiers, peak bands and live deltas. | `app/globals.css:230-233` |
| **Mono is for labels only.** Space Mono 700, tracked, uppercase, and never a sentence. | `app/globals.css:118-122` |
| **Hover means `--bg-raised`.** On paper it presses darker. | `app/globals.css:159-160` |
| **Desktop and phone are separate designs.** Each has its own component tree, split at 900. A design for one is never scaled to make the other. | `app/components/mobileDeepPage.module.css:1-4`; `app/components/mobileTourMap.module.css:1-4` |
| **No colour literals in modules.** Tokens are declared only in `globals.css`. This is enforced by a test. | `tests/cssColourTokens.test.ts:5-24` |

---

## 2. Type

### 2.1 Faces (`app/layout.tsx`)
| Role | Family | Weights | Variable | Line | Used for |
|---|---|---|---|---|---|
| Display | Anton | 400 only | `--font-anton` (= `--font-display`, `--font-heading`) | `28-32`; aliases `globals.css:200`, `345` | h1/h2, stat figures, wordmark, region names, map card name, tab glyphs. Always uppercase. |
| Body | Geist | variable | `--font-geist-sans` (= `--font-body`) | `22-25`; `globals.css:346` | Prose, table cells, card events |
| Labels | Space Mono | 400, 700 | `--font-mono` | `35-39` | Kickers, buttons, chips, table heads, legends, badges |

These are attached to `<html>` at `app/layout.tsx:194`. The body stack is `"Twemoji Country Flags", Geist…` with line-height 1.6 (`globals.css:586-588`). `--font-heading-weight: 400` means Anton is never asked for a bold it lacks (`globals.css:347-349`). Numerals are tabular automatically on `table`, `.tabular`, and any `[class*=stat|Num|num]` (`globals.css:546-552`).

### 2.2 Scale (`--type-*`, `app/globals.css:107-128`)
| Token | Size | Line height | Job |
|---|---|---|---|
| `--type-lede` | **18px**, becoming **20px at ≥900px** (`518-520`) | 1.5 | Page opener |
| `--type-body` | 16px | 1.6 | Reading prose |
| `--type-small` | 13.5px | 1.5 | List meta, notes under figures |
| `--type-caption` | 12.5px | 1.45 | Provenance, footnotes, figcaptions |
| `--type-label` | 11px, tracking `--type-label-tracking` 0.11em | 1.2 | Kickers, table heads, chips (mono 700 uppercase) |
| `--type-h-prose` | 20px | 1.3 | Headings inside prose |
| `--measure` | 62ch | | Maximum prose width |

The **type floor is 11px** in both px and rem, where 11px = 0.6875rem (`globals.css:273-276`). Display sizes are set per module, not as tokens. There is a tablet step down: *(bundle)* `RESPONSIVE-AND-STATES.md:53-61` goes 88→64, 44→34, 34→26, and body, mono and table text do not change.

The media-query edge is inclusive. At exactly 900px the phone layout (`max-width: 900px`) and the 20px lede (`min-width: 900px`) both apply.

### 2.3 Type on the pages in scope
| Element | Desktop | Phone | Source |
|---|---|---|---|
| Tour-map h1 | Anton 78 / 0.9 / 0.01em, **57 at ≤1239** | Anton 40 / 0.94 | `app/records/tours/map/map.module.css:23-31`, `170-173`; `app/components/mobileTourMap.module.css:73-81` |
| Gold word in the h1 | `.inkText`: 120° display ramp plus grain | 180° ramp a→b 45%→c, **no grain** | `app/records/tours/map/page.tsx:73`; `mobileTourMap.module.css:82-96` |
| Count figure | Anton 58 / 0.9 gold, **44 at ≤1239**; the second figure is `--text` | Lede sentence "57 countries across 7 regions." | `map.module.css:45-53`; `app/components/MobileTourMap.tsx:56-58` |
| Section h2 "By region" | Anton 34 / 1.05 | n/a | `map.module.css:99-107` |
| Region name | Anton 17 (table row header) | Anton 17; count Anton 19 gold | `map.module.css:128-140`; `mobileTourMap.module.css:118-131` |
| Map card | Name Anton 17; region mono 11 / 0.11em; events Geist 12.5 / 1.45; "…and more" mono 11 | same | `map.module.css:269-297` |
| Back-bar label and badge | n/a | Mono 700 11 / 0.11em; badge mono 11 / 0.1em gold | `mobileTourMap.module.css:47-61` |
| Tab label | n/a | Mono 700 11 / 0.06em; glyph Anton 15 | `app/components/mobileTabBar.module.css:66-81` |
| Action-bar button | n/a | Mono 700 11 / 0.12em | `mobileTourMap.module.css:181-185` |

---

## 3. Colour tokens (light | dark)

All tokens live in `app/globals.css`. Dark is the default theme.

### 3.1 Surfaces
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` | Page | 23 |
| `--bg-soft` | `#ffffff` | `#141416` | Card or panel. **The map ocean** | 24 |
| `--bg-soft-2` | `#efeae1` | `#1c1c21` | Well or track. **Countries with no data** | 25 |
| `--bg-raised` | `#e6e0d4` | `#24242a` | Hover and pressed surface | 160 |
| `--btn-face` | `#ffffff` | `#24242a` | Secondary button face | 168 |
| `--scrim` | `rgba(247,244,238,.94)` | `rgba(12,10,9,.94)` | Bar backdrop for the masthead, tab bar, back bars and action bars | 181 |
| `--veil-base` | `#f7f4ee` | `#0c0a09` | Page veil. The map card is this at 97% | 463 |
| `--sheet-crown` | `#efeae1` | `#111113` | Top of the nav sheet | 172 |
| `--photo-well` / `--code-bg` | `#efeae1` | `#1c1c21` / `#0f0f11` | Photo matte / code | 478-479 |
| `--bg-float` / `--card-glass` | white .90 / .86 | `rgba(20,20,23,.90)` / `rgba(21,18,16,.86)` | Floating panels | 480-481 |
| **Fixed inks (do not theme)** `--scrim-base` / `--scrim-cool` / `--scrim-deep` | `#0c0a09` / `#0a0a0b` / `#080706` in both themes | | "map country borders", sheet dimmer, modal dimmers | 464-471 |
| `.photoTile` | pins `color-scheme: dark` for anything laid over a photo | | | 76-91 |

### 3.2 Lines. Promote the weight; never reclassify it (`:28-32`)
| Token | Light | Dark | Contrast / role | Line |
|---|---|---|---|---|
| `--line` | `rgba(23,20,15,.12)` | `rgba(245,244,240,.12)` | 1.31:1, decorative hairline | 27 |
| `--rule-soft` | `.30` | `.24` | 1.97:1, secondary structure | 33 |
| `--rule` | `.48` | `.38` | 3.30:1, **structural** (≥3:1) | 34 |
| `--border` | `#dcd9d3` | `#26262b` | Card or field edge (1.29:1: not enough for a control) | 26 |
| `--btn-edge` | `rgba(23,20,15,.55)` | `rgba(245,244,240,.42)` | Control boundary, ≥3:1 | 169 |

### 3.3 Text
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--text` | `#17140f` | `#f5f4f0` | Primary ink | 37 |
| `--text-body` | `#4a443b` | `#cfc7bb` | Reading text | 74 |
| `--text-body-cool` / `-cool-quiet` / `-warm` | `#4a443b` / `#4a443b` / `#544d43` | `#d8d8de` / `#d3d3da` / `#b8b0a5` | Prose variants | 396-399 |
| `--text-muted` | `#5f584f` | `#9b9ba3` | Secondary, kickers | 38 |
| `--dim` | `#6f685f` | `#85858e` | Smallest meta: ◇ 5.01 / 4.59 on bg / bg-soft-2 (light); 5.41 / 5.03 (dark) | 308 |
| `--text-dim-warm` | `#6f685f` | `#8a8279` | Number-group intros | 400 |
| `--text-fade` | 1 | 0.9 | The one allowed text opacity | 458, 541 |

### 3.4 Gold. **One gold on paper: `#945e00` for every role, fills included** (`:56-64`)
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--gold` → `--gold-ink` | `#945e00` | `#ffb627` | Text, lines, icons | 49, 67 |
| `--gold-display` / `--gold-fill` | `#945e00` | `#ffb627` | Anton ≥24px / fills | 66, 65 |
| `--gold-bright` / `--gold-bright-ink` | `#945e00` | `#ffd24a` | Top of the fill ramp / bright gold used as text | 50, 419 |
| `--gold-dim` | `#945e00` | `#c98a2e` | Bottom of the fill ramp; hover borders | 183 |
| `--gold-hit` | `#5f3c00` | `#ffd24a` | Hover fill: deeper on paper, brighter on black. **The map's hover and focus fill** | 422 |
| `--ink-on-gold` | `#ffffff` | `#14100a` | Label on a gold fill | 71 |
| `--gold-wash-base` | `#945e00` | `#ffb627` | Base for `color-mix()` washes | 141 |
| `--gold-wash` / `--gold-edge` | 10% / 30% | 10% / 30% | Ready-made wash and its hairline | 142, 146 |
| `--wash-strength` | **0.42** | **1** | Multiplier on wash alpha: `calc(N% * var(--wash-strength))` | 447, 539 |
| `--display-ramp-a/-b/-c/-dim` | all `#945e00` | `#ffd24a` / `#ffb627` / `#ff7a1a` / `#c98a2e` | Gold **text** gradient | 137-140 |
| `--gold-glow-base` | `transparent` | `#ffb627` | Halos. There are no glows on paper | 413 |
| `--ember` | `#b34700` | `#ff7a1a` | Records family signature (◇ 5.01 / 7.59 on `--bg`) | 158 |
| `--floor-glow` / `--floor-ring` / `--floor-ink` | see line | | Car stage only | 149-155 |

- **Fill ramp:** `background-color: var(--gold-fill); background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%)` (`:771`). On paper it is flat `#945e00` with a white label.
- **Gold text on paper** ◇ measures 4.96 on `--bg`, 5.44 on `--bg-soft`, 4.54 on `--bg-soft-2`, and **4.14 on `--bg-raised`**. That last one fails AA, so gold text must not sit on a light hover surface. This is why `--btn-face` exists (`:161-168`).

### 3.5 Status
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--green` (= `--live`) | `#146b3c` | `#3ed17f` | Live, verified, positive delta | 294, 357 |
| `--green-dot` / `--live-dot` | `#1f9a5a` | `#3ed17f` / `#35d07f` | Non-text dot (3:1 floor) / live pulse | 297, 493 |
| `--red` | `#c0392b` in both | | Wash only, **never text** | 298 |
| `--red-ink` / `--error-ink` | `#b3261e` | `#e0796d` / `#e06a5c` | Negative delta / error | 299, 486 |
| `--delta-down` / `--move-down` | `#b3261e` | `#f2726a` / `#e2564a` | Chart moves | 487-488 |
| `--sold-ink` | `#8f4700` | `#f5890b` | "A fact, not a warning" | 489 |
| `--bar-muted` / `--dot-muted` | `#8d877d` / `#7f7a72` | `#4a4a52` / `#55555d` | Non-text data marks | 496-497 |

### 3.6 Certification tiers
**Fills** are the same in both themes: Platinum `#EFEDE6`, Gold `#FBB417`, Diamond `#31A1C0`, Silver `#848F9E` (`:263-272`). On paper, fills are ◇ 1.07 / 1.64 / 2.74 / 2.99 against `--bg`, so words and dots use the `-ink` tokens:

| | Platinum | Gold | Diamond | Silver |
|---|---|---|---|---|
| `-ink` light / dark | `#2f3a4e` / fill | `#945e00` / fill | `#0b6e7e` / fill | `#6b6b74` / fill |
| `-edge` light | `rgba(47,58,78,.60)` | `rgba(138,90,0,.60)` | `rgba(11,110,126,.60)` | `rgba(107,107,116,.60)` |
| `-edge` dark | `rgba(239,237,230,.29)` | `rgba(251,180,23,.37)` | `rgba(49,161,192,.50)` | `rgba(132,143,158,.62)` |

Inks are at lines 282-285 and edges at 286-289. The tier gold `#FBB417` is not the brand gold.

### 3.7 Peak bands. **There are two systems, and neither may be recoloured to gold** (`:230-233`)
| System | Tokens | Light | Dark | Used by |
|---|---|---|---|---|
| **Sequential ramp** (maps, donuts, Dai Dai) | `--peak-band-1 / -5 / -10 / -40 / -rest` | `#57360a` / `#945e00` / `#b3822f` / `#b4ada0` / `#dad5cb` | `#ffd24a` / `#ffb627` / `#c98a2e` / `#8a7a52` / `#5a5a62` | `DaiDaiReplay.module.css:662-666`; `DaiDaiFigures.module.css:137-141`; `DaiDaiConquest.module.css:34-67`; `app/records/visualized/page.tsx` |
| ◇ against `--bg-soft-2` | | 9.05 / 4.54 / 2.85 / 1.86 / 1.22 (best is darkest) | 11.77 / 9.68 / 5.78 / 4.03 / 2.48 (best is brightest) | |
| **Chart-list chips** | No. 1 = `--gold` plus a 12%×strength wash; Top 10 `--cyan`; Top 40 `--silver`; beyond `--peak-rest` | `#0b6e7e` / `#6b6b74` / `#6b6b74` | `#8fe3f0` / `#dfe2e8` / `#9aa0a6` | `app/records/charts/charts.module.css:71-74`; tokens `globals.css:234-235`, `498` |
| Arcs | `--seg-rest` / `--seg-pending` | `#b8b2a6` / `#dad5cb` | `#4a4a52` / `#33333a` | 250, 253 |

The peak-band tokens are at `globals.css:243-247`. The sequential ramp **inverts direction between themes**: the best band is the darkest on paper and the brightest on black (`:237-242`).

### 3.8 Dark-room devices (visible on black, gone on paper)
| Token | Light | Dark | Line |
|---|---|---|---|
| `--glow-base` / `--red-glow-base` / `--halo-base` / `--spotify-glow-base` | `transparent` | `#e8b04b` / `#c0392b` / `#000` / `#1db954` | 423-430 |
| `--vignette-ink` | `transparent` | `rgba(0,0,0,.7)` | 433 |
| `--grain-opacity` | 0.022 | 0.06 | 434, 540 |
| `--shadow-base` × `--shadow-strength` | `#17140f` × 0.31 | `#000` × 1 | 439-440, 535 |
| `--shadow` / `--glow` | `0 12px 32px rgba(23,20,15,.14)` / `none` | `0 20px 50px rgba(0,0,0,.45)` / `0 0 40px` gold 22% | 217-218, 531-532 |

Other fixed values: the warm flourish `--grad-a #ffd24a`, `--grad-b #ff7a1a`, `--grad-c #e2342b` is the same in both themes and is used once per screen (`:193-197`). `[data-brand="starrgirl"]` is scoped to Ayra Starr pages only (`:504-513`).

---

## 4. Shape, depth, motion, spacing, containers

| Item | Value | Source |
|---|---|---|
| `--radius` / `-md` / `-lg` | 6px (all three) | `globals.css:215`, `310-311` |
| `--radius-sm` | 4px (used for the map zoom buttons) | `:216`; `map.module.css:200` |
| Pills | 999px, used for buttons, chips, tags, toggles and action-bar buttons (239 declarations) | e.g. `globals.css:743` |
| Off-token radii in scope | Phone map cards **8px**; PeakMap tip **10px**; tab **12px**; desktop map frame **0** | `mobileTourMap.module.css:102`; `mobileListeners.module.css:99`; `PeakMap.module.css:35`; `mobileTabBar.module.css:39`; `map.module.css:64` |
| Motion | `--ease` = ease; `--ease-out` = `cubic-bezier(.22,1,.36,1)`; `--dur-fast/--dur/--dur-slow` = .15 / .2 / .3s | `globals.css:222-226` |
| Reduced motion | A global kill switch sets durations to 0.001ms. The button lift is dropped, but the primary keeps `translateZ(0)` | `:1693-1700`, `2079-2087` |
| Spacing tokens | `--sp-1…--sp-32` (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128) are declared, **with 0 uses**. Modules use literal px | `:202-212` |
| Phone gutter | **18px** everywhere | `mobileDeepPage.module.css:24`; `mobileTourMap.module.css:24`, `64`, `102` |
| Containers | `.container` 1280/24 · masthead, footer and breadcrumb 1360/40 · **tour map `.wrap` 1240/40** · `/dai-dai` 1280/40 | `globals.css:228`, `666-671`, `912-923`; `breadcrumbBar.module.css:3-6`; `map.module.css:12` |
| At 1440 | Breadcrumb text starts at **x=80**, tour-map content at **x=140**; the pills sit at **x=100** because `.pills{padding:40px 0 72px}` wipes out the gutter | computed from the above; `map.module.css:168` |
| Anchor clearance | `[id]{scroll-margin-top: calc(88px + safe-top)}` (69px bars plus air) | `globals.css:570-572` |

---

## 5. Breakpoints

| Band | What switches | Source |
|---|---|---|
| **≤900 phone** | Every `Mobile*` screen and its chrome. Footer hidden. Stat-card button hidden. 92 rules use this query | `app/components/FaqList.tsx:5-6`; `globals.css:1141-1147`, `2115-2117` |
| **901–1239 (the "1024 band", tablet)** | Hamburger plus nav sheet (the sheet shows up to 1239: "one control, one breakpoint"). Display type steps down (tour-map h1 78→57, count 58→44). The desktop layout is otherwise kept | `globals.css:1709-1716`; `mobileNavSheet.module.css:236-245`; `map.module.css:170-173` |
| **≥1240** | Inline masthead links | `globals.css:1709-1716` |
| Masthead-only bands | ≤1500: padding 24, link gap 10, 12px. 1240–1280: gap 7, 0.07em. ≤640: padding 18. ≤360: wordmark 1.1rem | `globals.css:1014-1041` |
| `pointer: coarse` | 44px floor for chrome links, the hamburger, `.btnIcon`, the compact theme control and the map zoom buttons | `globals.css:1745-1760`, `1964-1969`; `map.module.css:214-216` |
| Lede | 18 → 20px at `min-width: 900px` | `globals.css:518-520` |

The rule from *(bundle)* `RESPONSIVE-AND-STATES.md:5-10` is "Two breakpoints, not a continuum", with the bands ≥1240, 900–1239 and <900.

---

## 6. Phone chrome

### 6.1 Heights (all at ≤900)
| Bar | Build | Height | Source |
|---|---|---|---|
| Masthead | 68px row + 1px edge, sticky, z 50 | **69px** + safe-top | `globals.css:876-891`, `916` |
| Back bar (shared) | padding 12 / 18, 44px back circle, 1px `--line` bottom; sticky, **z 5** | **69px** + safe-top | `mobileDeepPage.module.css:17-46`; tour map copy `mobileTourMap.module.css:17-46` |
| Back bar (Dai Dai story) | Same geometry but **fixed**, z 45 | 69px | `DaiDaiStory.module.css:180-204` |
| Five-tab bar | `--tabbar-pad` 8 + `--tabbar-row` 48 + `--tabbar-foot` max(30px, safe-bottom) + `--tabbar-edge` 1; fixed, **z 60** | **`--tabbar-h` = 87px** minimum | `globals.css:1871-1879`; `mobileTabBar.module.css:8-29` |
| Page reserve under the tab bar | `padding-bottom` / `scroll-padding-bottom: calc(64px + max(30px, safe))` | 94px minimum (7px above the bar) | `globals.css:1886-1898` |
| Action bar | 1px edge + 12 + **50px pill** + 12 + safe-bottom; fixed, **z 40** | **75px** + safe-bottom (≈109 on a 34px home indicator) | `mobileDeepPage.module.css:290-323`; tour map `mobileTourMap.module.css:151-187` |
| Tour-map spacer | 110px block before the action bar | | `mobileTourMap.module.css:148` |
| Nav sheet | fixed inset 0, **z 61**, leaves a 76px dismiss strip; hides the tab bar while open | | `mobileNavSheet.module.css:4-35`; `globals.css:2157-2159` |

**Z-stack, low to high:** Dai Dai transport 2 (sticky) · back bar 5 · map zoom buttons 20 · action bar 40 · Dai Dai back bar 45 · masthead 50 = **tour and listener map card 50** · tab bar 60 · nav sheet 61 = PeakMap tip 61 · skip link 200. Sources: `map.module.css:187`, `249`; `PeakMap.module.css:30`; `globals.css:1769`.

### 6.2 Which chrome each route gets (`app/lib/mobileScreens.ts`)
| Route | Masthead at ≤900 | Top bar | Bottom bar |
|---|---|---|---|
| `/records/tours/map` | hidden | back bar "TOUR MAP", badge `57`, hamburger | **action bar** "Festivals & shows" (no tabs) |
| `/records/tours`, `/revenue`, `/festivals` | hidden | back bar | action bar or nothing (tabs hidden) |
| `/music/listeners` (and every `/music/*`) | hidden | back bar | action bar |
| `/dai-dai`, `/dai-dai/es` | hidden | own fixed back bar | **five tabs** (Paul, 9 Aug) |
| `/on-this-day`, `/on-this-day/<day>`, `/embed`, `/search`, `/faq`, `/contact`, `/about`, `/updates`, `/afrobeats/*` boards, car pages | hidden | back bar | five tabs |
| `/afrobeats/<artist>` | hidden | back bar | Compare action bar |
| `/curator`, `/press`, `/analysis/spotify-unmerge` | **shown** (not in the set) | masthead plus breadcrumb | five tabs. The review flags this |

Sources: the sets are at `:16-53` and `:66-89`, and the predicates at `:98-154`. `/records/tours/map` is at `:33` and `:78`.

### 6.3 Anatomy
| Part | Spec | Source |
|---|---|---|
| Back button | 44px circle, `--bg-soft`, 1px `--line`, 15px chevron at stroke 2.2, `--text` | `mobileTourMap.module.css:35-46`; `MobileTourMap.tsx:37-41` |
| Back label / badge | Mono 700 11 / 0.11em / mono 11 / 0.1em `--gold`, right-aligned | `mobileTourMap.module.css:47-61` |
| Hamburger | 44×44 hit area; three bars 17×1.5px, gap 4, `--text`; hidden ≥901 | `app/components/mobileMenuButton.module.css:3-34` |
| Tab | min-height 48 (`--tabbar-row`), gap 5, radius 12, `--text-muted` → **`--gold`** when current. Pressed: literal `rgba(255,182,39,.08)` | `mobileTabBar.module.css:32-45` |
| Tab glyphs | ◆ Home (crown mark at 16px), ♪ Music, ★ Certs, ▲ Charts, ⌗ Records: Anton 15px. The crown is dimmed to opacity .55 when inactive and never recoloured | `MobileTabBar.tsx:36-42`, `111-112`; `mobileTabBar.module.css:53-73` |
| Action-bar primary | flex 1, min-height 50, 999px, gold ramp, `--ink-on-gold` pinned plus `translateZ(0)`, mono 700 11 / 0.12em, glow `0 0 26px` gold 25% | `mobileTourMap.module.css:166-187` |
| Action-bar icon button | 50px circle, `--bg-soft`, 1px `--line` | `mobileDeepPage.module.css:329-340` |
| Masthead (901+) | Wordmark Anton 24 / 0.04em, with "Stats" in `--gold-display`. Links mono 12.5 / 0.12em; hover and current go `--gold` with a 2px `--gold-fill` underline at −6px. **Current matches the exact path only**, so RECORDS is not lit on `/records/tours/map` | `globals.css:941-1001`, `1844-1849`; `app/components/Nav.tsx:102` |
| Theme on phone back-bar screens | Only through the hamburger sheet: `ThemeToggle variant="full"`, 44px segments, on = `--gold-fill` | `themeToggle.module.css:57-59`, `30-33` |

---

## 7. Controls

### 7.1 Buttons (`app/globals.css`)
| Variant | Spec | Lines |
|---|---|---|
| `.btn` | inline-flex, **46px** tall, padding `0 26px`, 999px, mono **700 13px 0.08em** uppercase, 1px transparent border | 734-756 |
| `.btnPrimary` | Gold ramp fill, `--ink-on-gold` pinned, shadow `0 8px 30px` glow 24%. Hover lifts 3px with `0 14px 44px` at 42% | 757-796 |
| `.btnSecondary` | `--btn-face` with a `--btn-edge` border and a `--text` label. Hover lifts 3px, border and label go `--gold`, plus a 6% white wash | 797-845 |
| `.btnGhost` | Transparent with a `--gold` label, padding `0 8px`. Hover wash 10%×strength; active 18%×strength | 1927-1948 |
| `.btnIcon` | 36px, **44px** on coarse pointers | 1954-1969 |
| Disabled | opacity .45, `not-allowed`, no lift | 1915-1925 |
| `.navStatCard` | 38px, `0 18px`, 11.5px, **outlined** (not gold), hidden at ≤900 | 2096-2117 |
| iPhone guard | Every button pins `-webkit-text-fill-color`, resets filter, blend and opacity, and holds `translateZ(0)` at rest. **Keep this on any new button** | 772-790, 807-836, 1930-1940 |
| **The link rule** | filled = the one primary action in a section · outlined = its secondary · ↗ = sibling-page navigation · bare text = utility | 715-733 |
| Tour map desktop row | Secondary "← Tours" · **Primary** "Festivals & shows" · Secondary "Revenue" | `app/records/tours/map/page.tsx:144-153` |

### 7.2 Pills, chips, toggles
| Component | Size / type | Rest → on | Source |
|---|---|---|---|
| **Phone filter chip** | min-height **44**, padding `0 15px`, 999px, mono 700 11 / 0.1em; rail gap 8 | 1px `--line`, `--text-body` → wash 16%×strength, `--gold` border and label | `mobileDeepPage.module.css:135-152` |
| Phone chip on /certifications | 44px; border `--text` 18%; label `--gold` | The on-state is a gold-ramp fill | `mobileCerts.module.css:219-244` |
| Compact pill | min-height 32, padding `0 11px`, **11px** / 0.08em | Hover `--bg-raised` | `mobileCerts.module.css:544-551` |
| **Two-way map toggle (Dai Dai phone, "Europe \| World")** | Height 44, 999px, 1px `--btn-edge`, mono 700 11 / 0.1em `--text-muted`, divided by `--btn-edge` | On = **`--text` fill with a `--bg` label** (ink, not gold) | `DaiDaiReplay.module.css:897-926` |
| Desktop filter chip | min-height 38, padding `8px 13px`, Geist 600 12.5px, 1px `--border`; 44px at ≤640 | Hover `--gold-dim`; on = wash 16% plus gold | `app/certifications/certifications.module.css:181-205`, `308` |
| `.seg` segmented | padding `7px 12px`, 13px, `--radius-md`, `--color-divider` border | On = `--gold-fill` / `--ink-on-gold`; hover `--bg-raised`; focus offset −2px | `globals.css:2019-2046` |
| `.tag` | Mono 11 / 0.1em, padding `4px 10px`, 999px | Accent (wash 16%), Outline, Neutral, Diamond, Platinum, Live | `globals.css:1971-1990` |
| Chart peak chip | padding `6px 11px`, 999px, mono 700 0.74rem, 1px border | See §3.7 | `charts.module.css:57-74` |
| Theme mini flip | 34px circle with a 44px hit area, 1px `--line`, `--text-muted` | | `themeToggle.module.css:72-95` |
| Map zoom buttons | **34px** (44 coarse), `--bg-soft`, 1px `--line`, radius 4, glyph `--gold-bright-ink` 1.35rem, absolute top/right 10 **inside** the map | Hover: `--gold` border and `--bg-raised`; disabled .4 | `map.module.css:183-216` |

---

## 8. States

| State | Spec | Source |
|---|---|---|
| Focus ring (global) | `outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 3px` on a, button, input, select, textarea, summary and `[tabindex]` | `globals.css:1793-1803` |
| Row focus | `box-shadow: inset 0 0 0 2px var(--gold)` for full-bleed rows | `:1835-1841` |
| Segment focus | outline offset −2px | `:2046` |
| **Map shape focus** | **`outline: none`**, and the fill changes to `--gold-hit`. No ring | `map.module.css:228-231`, `241-244`; `ListenerMap.module.css:26-30` |
| Hover (rows, cards, segments) | `--bg-raised`; table rows use a gold wash at 5–6%×strength; `.card` lifts 4px with a `--gold-dim` border | `globals.css:160`, `1220-1230`, `2012-2014`; `map.module.css:122` |
| Pressed chip | Wash 10%×strength | `globals.css:1821-1824` |
| Skip link | Gold ramp, min-height 44, `top: -64px` → 12px on focus | `:1765-1786` |
| Tap targets | 24px on a mouse, 44px on coarse pointers, for chrome; prose links are exempt. The design's rule is 44×44 mobile and 24×24 desktop | `globals.css:1731-1760`; *(bundle)* `RESPONSIVE-AND-STATES.md:85-90` |
| Prose links | 1px underline, 2px offset (WCAG 1.4.1) | `globals.css:659-663` |
| Not reported | Em dash in `--dim`, `cursor: help` | `:2076` |

---

## 9. Maps

### 9.1 Shared geometry
- **Projection and data.** All maps use `app/data/worldShapes.ts`: Equal Earth, Natural Earth 110m, **viewBox 900×470** (`:7-8`). The projection function is `app/lib/equalEarth.ts`. 57 countries are performed (`app/data/performedCountries.ts`). Eight of them have no usable shape and are drawn as **markers**: seven island states plus Kosovo (`MobileTourMap.tsx:15-22`).
- **Phone size.** The tour map renders at **337×176px** at 375 wide (375 − 2×18 gutter − 2px border, at 900:470). At zoom 1 it is **0.37px per unit**. At 1440 the desktop frame is about 1158px wide, or 1.29px per unit.
- **Strokes.** Tour-map strokes are **scaling** (0.4 units, so ≈0.15px on a phone and ≈0.5px at 1440). The Dai Dai map uses **non-scaling** strokes in screen px (`app/dai-dai/replay-map.svg/route.ts:15-21`).
- **Delivery.** The tour and listeners maps inline all 175 shapes in each layout. The Dai Dai map places a cached static sprite with `<use>` (`DaiDaiReplay.tsx:36-38`, `65-67`).

### 9.2 Fills and strokes, both themes
| Map | Element | Token spec | Light (◇ composited) | Dark (◇) | Source |
|---|---|---|---|---|---|
| **Tour map** (PerformanceMap) | Ocean / frame | `--bg-soft` | `#ffffff` | `#141416` | `map.module.css:64`; `mobileTourMap.module.css:103` |
| | Not performed | fill `--bg-soft-2`; stroke `--scrim-base` 90%, 0.4 units | `#efeae1`; stroke `#23201f`, **13.5:1** against the fill | `#1c1c21`; stroke **1.15:1** (invisible) | `map.module.css:219` |
| | Performed | fill `--gold-wash-base` **42%** (no `--wash-strength`); same stroke | `#d2bb94`: **1.55:1** against unperformed, 1.86 against ocean | `#77581d`: **2.58:1** against unperformed | `map.module.css:222-229` |
| | Hover, focus, open card | `--gold-hit` | `#5f3c00` | `#ffd24a` | `map.module.css:230-232` |
| | Marker dot | r 3.2 units (≈1.2px on a phone); fill 75% wash; stroke `--gold-hit` 1 unit | `#af8640`, 2.78 against unperformed | `#c48e23`, 5.85 | `PerformanceMap.tsx:169-176`; `map.module.css:235-244` |
| | Legend swatches | 14×14 at 42% with a 1px `--gold` border; dot 9px at 75% with a 1px `--gold-bright` border | | | `map.module.css:79-96` |
| **Listeners map** (ListenerMap) | Countries with a top-50 city | `.reach`: **identical** to the tour map's performed fill and stroke, not interactive | `#d2bb94` | `#77581d` | `ListenerMap.module.css:9-13` |
| | City dot | fill 75% wash; stroke `--gold-bright` 1px **non-scaling**; r = 2.6 + 6.6·√(listeners/max) units × 1/√zoom; hover and active `--gold-hit` | | | `ListenerMap.module.css:19-30`; `ListenerMap.tsx:41-43`, `66`, `73` |
| | Hit test | **Nearest dot within 22px** (`HIT_PX`) of the pointer, in screen px | | | `ListenerMap.tsx:43`, `87-104` |
| **Dai Dai map** (DaiDaiReplay) | Box | `--bg`, 1px `--line`, radius 6, height **430** (**300** on phone) | | | `DaiDaiReplay.module.css:151-158`, `927-929` |
| | No chart row | fill `--bg-soft-2`, stroke `--rule`, **opacity .55** | ◇ 1.05 against `--bg` | 1.08 | `:205-212` |
| | Charted, by band | fill `--peak-band-*`, stroke `--bg`; **on paper Top 40 and 41+ take a `--text` stroke** | §3.7 | §3.7 | `:217-223`, `252-257`, `662-666` |
| | No reading / no run / no chart | hatch plus a dashed `--text` stroke (3 2); transparent with a dotted stroke (1.2 1.6); `--text` stroke | | | `:228-243`, `275-283` |
| | Picked country | a 3px `--text` stroke painted under the fill | | | `:263-269` |
| | Stroke widths (screen px) | world 0.245–0.49 · inset 0.35–0.7 · phone Europe 0.42–0.84 | | | `:244-251`, `952-955` |
| | Europe inset | absolute **left 8, bottom 8**, 31% wide, 1 : 0.86, `--bg`, 1px `--rule`; label mono 700 11 muted. On the phone it becomes the default view, with a World toggle | | | `:172-199`, `930-946`; box lon −11..32, lat 35..71 at `DaiDaiReplay.tsx:52-63` |
| **Peak map** (/records/visualized) | Country / charted | `--bg-soft-2`, stroke `--bg` 0.5 / an **inline `light-dark()` ramp in TSX**, not tokens | 41+ `#dbb2aa` against `#efeae1`: **1.60** | 41+ `#7a2220`: 1.68 | `PeakMap.module.css:12-25`; `PeakMap.tsx:23-78` |

### 9.3 The map card (tour and listeners share it)
| Part | Spec | Source |
|---|---|---|
| Box | `position: fixed`, **z 50**, `pointer-events: none` (it can hold no link). Background `--veil-base` 97%, 1px **`--gold`** border, shadow `0 10px 34px` shadow-base 55%×strength, padding `12px 14px`, width **230** | `map.module.css:247-256`; `PerformanceMap.tsx:13` |
| Arrow | 7px triangle in `--gold` | `map.module.css:259-268` |
| Placement | Sits above the country and flips below only when `anchor.top ≤ 174` (`CARD_EST_H` 150 + 24). It **ignores the 69px masthead**, and because card and masthead share z 50 and the card comes later in the DOM, the card paints over the nav links | `PerformanceMap.tsx:15`, `119-130`; `ListenerMap.tsx:39`, `183-189` |
| Content (tour) | Flag and name, region (in gold), at most **2 events**, then "…and more" when `more` is set | `PerformanceMap.tsx:188-198` |
| Content (listeners) | City, country (muted), count Anton 24 **gold**, "monthly listeners · No. n of 50" mono 11 dim | `ListenerMap.module.css:34-63`; `ListenerMap.tsx:243-249` |
| Dismiss | Tap on the ocean, scroll or Escape. A keyboard-focused shape re-anchors on scroll | `PerformanceMap.tsx:59-83`, `100-106`, `147-150` |

### 9.4 Tour-map page as built (spacing)
| Desktop (`map.module.css`) | | Phone (`mobileTourMap.module.css`) | |
|---|---|---|---|
| Head top padding | 32 (`14`) | Hero padding | 22 / 18 / 18 (`64`) |
| Kicker → h1 | 14 (`30`); kicker text is **`--gold`** (`21`) | Kicker → h1 | 11 (`80`); kicker text is **`--ember`** (`71`) |
| h1 → lede → counts | 18 → 22 (`37`, `44`) | h1 → lede | 12 (`97`) |
| Counts → map frame | 28 (`63`) | Map card | margin `0 18px`, 1px `--line`, radius 8 (`102`) |
| Frame → legend | 14 (`69`) | Hint strip | padding 11 / 14, `--bg`, mono 11 / 1.5 `--dim` (`104-112`) |
| Legend → breakdown | 52 (`98`) | Regions | 20 top; rows 14 / 18 with a 1px `--line` top (`115-116`) |
| Table cells | th 12 / 14 with a 1px `--border` line; td 14 with 1px `--line` (`110-121`) | Region list | mono 11 / 1.6 `--text-muted`, joined with " · " (`132-138`; `MobileTourMap.tsx:81`) |
| Note | 13 / 1.7 muted, **84ch** (`166`) | Footnote | **12** / 1.55 `--dim` (`140-147`) |
| Pills | gap 10, padding `40 0 72` (`168`) | Spacer, then action bar | 110 (`148`); §6.1 |

### 9.5 Parts the site already has for the plan's steps
| Need | Existing part | Source |
|---|---|---|
| Forgiving taps | `nearest()` with a 22px screen-px reach, and dots held at a steady size under zoom (`rScale`) | `ListenerMap.tsx:73`, `87-104` |
| A Europe view | The EUROPE viewBox, the inset on desktop, and the phone default with a World toggle | `DaiDaiReplay.tsx:52-63`; `DaiDaiReplay.module.css:172-199`, `897-946` |
| One Tab stop with arrow keys | The roving tabindex on the replay chips | `DaiDaiReplay.tsx:390-404` |
| A light ramp that keeps its order on paper | PeakMap `RAMP_LIGHT` (its comment records a 1.07:1 failure) | `PeakMap.tsx:30-50` |
| A cached base map | The `replay-map.svg` static sprite | `app/dai-dai/replay-map.svg/route.ts` |

---

## 10. Token misuse

### 10.1 Flagged by the design review, re-checked in the code
| # | Finding | Re-check |
|---|---|---|
| 1 | **The tour-map fill is weak and the borders compete.** 1.55:1 light, 2.58:1 dark, against a 3:1 target | **Confirmed** ◇. Cause: the design file is dark-only (`fill: rgba(255,182,39,0.42)`, `stroke: rgba(12,10,9,0.9)` in *(bundle)* `designs/desktop/Records - Tour Map.html`). That was transcribed to `color-mix(… 42%)` plus `--scrim-base`, which is a **fixed** ink, so the fill has no light value and the stroke does not theme: 13.5:1 on paper, 1.15:1 on black. The listeners `.reach` has the same values, so the same fix applies there |
| 2 | **No visible focus on the map.** A fill change cannot be seen on a 4px island | **Confirmed**: `outline: none` overrides the global ring (§8) |
| 3 | **Gold on labels that are not live figures or actions**, site-wide. Examples: the KEEP EXPLORING label, 28px festival years, "Burna Boy" on the revenue board, /api and /embed phone headings, '21 at No. 1' in gold on desktop /live-charts but green elsewhere | Gold text on the map page today: desktop kicker (`map.module.css:21`), card region (`284`), card border and arrow (`252`, `267-268`), phone badge (`mobileTourMap.module.css:59`), phone region counts (`129`), listeners card figure (`ListenerMap.module.css:51`). The review asked only that the phone badge read "57 countries" |
| 4 | **Sentences set in mono.** One named example is the four-line caption under the phone map on /music/listeners | Confirmed at `mobileListeners.module.css:101-109`. **The tour-map phone hint is the same pattern** (`mobileTourMap.module.css:104-112`), with a mono sentence in `--dim` |
| 5 | **Type under 11px** | Confirmed: `mobileListeners.module.css:165` (10px) and `listeners.module.css:220` (10.5px). The review also lists /methodology phone tags, /records/cars, the car pages, /records/visualized and /afrobeats |
| 6 | **The Home tab looks half-selected.** The crown keeps its brand colours at opacity .55; the review wants it muted grey until active | `mobileTabBar.module.css:53-64`; LOGO.md forbids recolouring the mark, so this needs Paul's call |
| 7 | **Light peak map, 41+ reads as "never charted"** | **Confirmed** ◇ 1.60:1. The ramp is a set of `light-dark()` literals in TSX, which the CSS colour-token test does not scan |
| 8 | **Shows tagged 'LIVE' in gold** on /timeline ("Live" means happening now). An **unexplained green tint** on two /records/tours "Record nights" rows | Not re-checked here, because both are outside the map |

### 10.2 Seen in the code, not raised by the review
| Finding | Source |
|---|---|
| The tab bar's pressed state is a dark-only literal, `rgba(255,182,39,.08)`, allowlisted as "deferred". On paper it is a near-invisible warm tint | `mobileTabBar.module.css:44`; `docs/design/theming/literal-allowlist.json:225-228` (its recorded line, 43, is now 44) |
| `.tagNeutral`, `.tagDiamond`, `.tagPlatinum` and `.tagLive` use dark-only `rgba()` plates. `.tagNeutral`'s plate is white at 8%, so it vanishes on paper | `globals.css:1986-1990` |
| The desktop kicker is gold text and the phone kicker is ember text. The family rule puts the signature on the **tick**, never on the text | `map.module.css:21`; `mobileTourMap.module.css:71`; `app/records/records.module.css:65` |
| There are two gold-text treatments for the same h1 word: `.inkText` (grain, 120°) on desktop and a 180° ramp without grain on the phone | §2.3 |
| Off-scale type on the map page: note 13px at 84ch; phone footnote 12px; `tfootPlain` 14px; `.namesCell` is a literal 13.5 rather than `var(--type-small)` | `map.module.css:150`, `162`, `166`; `mobileTourMap.module.css:141` |
| The Dai Dai sticky transport hand-adds `57px + foot`, which equals `--tabbar-h` but does not use it | `DaiDaiReplay.module.css:968` |
| The desktop filter chip rests on a `--border` edge (1.29:1), under the 3:1 the site sets for control boundaries | `certifications.module.css:186`; `globals.css:797-806` |

---

## 11. Guards a redesign must keep passing (`tests/`)

| Test | What it holds |
|---|---|
| `cssColourTokens.test.ts` | No colour literal in any `*.module.css` unless it is allowlisted with a reason. Tokens are declared only in `globals.css`. **Any new map colour must be a `globals.css` token** |
| `tierColourParity.test.ts` | Tier maps name `--tier-*` tokens |
| `tourMap.test.ts:27-53` | Every performed country is drawn, as a shape or a marker, and each marker exists because the shape does not |
| `tourMap.test.ts:55-90` | The phone footnote must contain `/(\w+) territories have no usable shape at 110m/`, with the number spelled from the data. **Rewording the footnote (plan step 1) means changing this test** |
| `tourMap.test.ts:123-138` | Any country with more than 2 dated tour shows must carry `more`, which prints "…and more". A counted "+N more" would replace this |
| `tourMap.test.ts:140-144` | The desktop legend **must contain "Territories too small to shade"**. The review's proposed wording, "Island nations and Kosovo, shown as dots", would fail this test unless the test changes too |

Every figure on these pages is derived from `app/data/*` (`performedCountries`, `tours`, `tourRevenue`, `listeners`). Numbers in a design are placeholders; the build writes the real ones.
