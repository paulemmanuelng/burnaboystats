# burnaboystats.com: design system, as the code defines it

For the designer building the new `/dai-dai` page. Every value below is copied from the repo at `main` @ `93fedb07` (26 Sep 2026) and cited as `file:line`. Paths are relative to `~/burnaboy-website/`. Nothing here is inferred from screenshots. Where a comment in the code states a rule, the rule is quoted or paraphrased and cited.

Files marked *(bundle)* live in `design_handoff_burnaboystats/`, the gitignored handoff folder at the repo root. That folder holds the page's previous desktop design, `designs/desktop/Dai Dai.dc.html`.

---

## 0. Six ground rules

1. **One token block, two themes.** Every colour is written once as `light-dark(LIGHT, DARK)` on `:root, .photoTile` (`app/globals.css:6-8`). The argument order is LIGHT first; the comment at `app/globals.css:366-368` says so because an earlier design doc had it backwards. The only thing a theme switch changes is `color-scheme` (`app/globals.css:360-365`, `522-523`).
2. **Dark is the default.** A visitor who never chose, a visitor with no JS, and the server render all get dark (`app/globals.css:370-376`, `app/layout.tsx:217-243`, `app/components/ThemeToggle.tsx:61-63`).
3. **Gold carries meaning.** Gold marks what is live and what is the action: "gold above the strip is now exactly four things: the 'Boy' in the wordmark, the live figure, the primary button, and links" (`app/page.module.css:267-270`, `283-286`). Other rules: one gold action per screen (`app/globals.css:2076-2080`), and every gold fill uses one gradient (`app/components/mobileDeepPage.module.css:313-314`). Data-meaning colours (tiers, peak bands, live deltas) "must never be recoloured to gold" (`app/globals.css:230-233`).
4. **Mono is for labels only.** Space Mono 700, tracked, uppercase, "never a sentence" (`app/globals.css:118-122`). Prose is Geist. Anton is for posters and headings: "a poster face, not a subhead face" (`app/globals.css:123-124`).
5. **Hover means `--bg-raised`.** 18+ row and card hovers use it (for example `app/records/firsts/firsts.module.css:126` and `app/certifications/certifications.module.css:665`). In dark a hover lifts to a lighter surface. On paper it presses into a darker one, because cards are already pure white (`app/globals.css:159-160`).
6. **Desktop and phone are separate designs.** Most routes ship two component trees: `Mobile*.tsx` plus a desktop page, split at 900px. `mobileDeepPage.module.css:1-4` says "each desktop page is its own layout, not this markup widened". **`/dai-dai` is the exception.** It is one tree whose sizes step down in media queries: "the sizes step down rather than a second layout being drawn" (`app/dai-dai/dai-dai.module.css:4-6`). Section 7 covers this.

---

## 1. Typefaces

All three load through `next/font/google` in `app/layout.tsx` and are attached to `<html>` as CSS variables (`app/layout.tsx:205`).

| Role | Family | Weights | Variable | Declared | Used for |
|---|---|---|---|---|---|
| Display | **Anton** | 400 only | `--font-anton` (aliased `--font-display`, `--font-heading`) | `app/layout.tsx:28-32`; aliases `app/globals.css:200`, `345` | h1/h2 page and section titles, stat figures, wordmark, step titles, tab-bar glyphs. Always uppercase. |
| Body | **Geist** | variable | `--font-geist-sans` (aliased `--font-body`) | `app/layout.tsx:22-25`; `app/globals.css:346` | All prose, FAQ questions, table cells, lineup notes |
| Labels | **Space Mono** | 400, 700 | `--font-mono` | `app/layout.tsx:35-39` | Kickers, buttons, chips, tags, table headers, nav links, counters ("01 / 07"), legends |

Rules attached to the faces:
- **Anton has one cut.** `--font-heading-weight: 400` exists "so a heading is never asked for a bold the family does not have, which browsers fake by smearing strokes" (`app/globals.css:347-349`). Every Anton rule sets `font-weight: 400`.
- **Global headings** (`app/globals.css:629-639`): `h1, h2, h3` use Anton, `line-height: 1.05`, `letter-spacing: -0.02em`. `h1` adds `text-transform: uppercase; letter-spacing: 0.01em`. Any h3 that should read as prose must opt out, as the Dai Dai FAQ questions do (`app/dai-dai/dai-dai.module.css:213-214`).
- **Body** (`app/globals.css:586-588`): `"Twemoji Country Flags", var(--font-geist-sans), system-ui, Arial, sans-serif`, `line-height: 1.6`. The flag face is injected only on Windows to render flag emoji.
- **Tabular numerals are automatic** on `table`, `.tabular`, and any class containing `stat`, `Num` or `num` (`app/globals.css:546-552`).
- **Type floor: 11px.** "nothing on this site sets a font-size below 11px… 11px is 0.6875rem" (`app/globals.css:273-276`).

---

## 2. Type scale (`--type-*`)

Declared at `app/globals.css:93-128`. The tokens are named `--type-*` and not `--text-*` because `--text-body` is already a colour token (`app/globals.css:99-102`). Each size and its line height are separate tokens that are always used together.

| Token | Size | Line height | Job (from the comment) | Line |
|---|---|---|---|---|
| `--type-lede` | **18px**, becoming **20px at ≥900px** | `--type-lede-lh` 1.5 | Page opening paragraph | `107-108`; the 20px step is at `518-520` |
| `--type-body` | **16px** | `--type-body-lh` 1.6 | Reading prose ("the floor Apple's HIG sets… 1.6 because Geist has a large x-height") | `109-110`, reason at `104-106` |
| `--type-small` | **13.5px** | `--type-small-lh` 1.5 | List meta, notes under figures, card descriptions | `113-114` |
| `--type-caption` | **12.5px** | `--type-caption-lh` 1.45 | Provenance sentences, footnotes, figcaptions | `116-117` |
| `--type-label` | **11px** | `--type-label-lh` 1.2 | Kickers, table headers, chips. Space Mono 700, uppercase | `120-121` |
| `--type-label-tracking` | **0.11em** | | Letter-spacing for labels | `122` |
| `--type-h-prose` | **20px** | `--type-h-prose-lh` 1.3 | Headings inside prose (FAQ questions, methodology) | `125-126` |
| `--measure` | **62ch** | | Maximum width of any prose block (~560px at 16px Geist) | `128` |

Display sizes are not tokens; they are set per module. The ones in use:

| Where | Size / line height / tracking | Source |
|---|---|---|
| /dai-dai h1 | Anton **88px** / 0.9 / 0.01em, uppercase. **46px** at ≤900 | `app/dai-dai/dai-dai.module.css:18-26`, `54` |
| /dai-dai section h2 | Anton **40px** / 1.05 / 0.01em. **26px** at ≤900 | `app/dai-dai/dai-dai.module.css:31-39`, `56` |
| Story step title | Anton `clamp(1.8rem, 4vw, 2.8rem)` (28.8–44.8px) / 1.05 / 0.01em | `app/components/DaiDaiStory.module.css:210-218` |
| Records h1 | Anton 96px / 0.88 | `app/records/records.module.css:66-72` |
| Primitives specimens | h1 74px / 0.9; h2 34px; figure 58px gold | `app/primitives/primitives.module.css:45-47` |
| Tablet display step *(bundle)* | 150→104, 88→64, 44→34, 34→26; body, mono and table text do not change | `RESPONSIVE-AND-STATES.md:53-63` |

**Label tracking in practice.** The token is 0.11em, and the Dai Dai `.kicker` uses it (`app/dai-dai/dai-dai.module.css:14`). Other families use their own values: buttons 0.08em (`app/globals.css:750`), tags and chips 0.1em (`1963`), nav links 0.12em (`978`), records eyebrow 0.18em (`app/records/records.module.css:61`), and legacy `.eyebrow` 0.18em (`app/globals.css:1177`).

---

## 3. Colour tokens (light | dark)

Everything below comes from `app/globals.css`. "Light" is paper and "Dark" is the default.

### 3.1 Surfaces (the ramp: page, card, well, hover)
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` | Page ground | 23 |
| `--bg-soft` | `#ffffff` | `#141416` | Raised panel / card | 24 |
| `--bg-soft-2` | `#efeae1` | `#1c1c21` | Inset / track / well | 25 |
| `--bg-raised` | `#e6e0d4` | `#24242a` | **Hover / pressed surface** | 160 |
| `--btn-face` | `#ffffff` | `#24242a` | Secondary button face | 168 |
| `--photo-well` | `#efeae1` | `#1c1c21` | Matte behind a photo | 478 |
| `--code-bg` | `#efeae1` | `#0f0f11` | Code blocks | 479 |
| `--bg-float` | `rgba(255,255,255,.90)` | `rgba(20,20,23,.90)` | Floating panels | 480 |
| `--card-glass` | `rgba(255,255,255,.86)` | `rgba(21,18,16,.86)` | Glass card | 481 |
| `--scrim` | `rgba(247,244,238,.94)` | `rgba(12,10,9,.94)` | Translucent bar backdrop (masthead, tab bar, back bars) | 181 |
| `--sheet-crown` | `#efeae1` | `#111113` | Top of the nav sheet | 172 |
| `--veil-base` / `--veil-cool` | `#f7f4ee` | `#0c0a09` / `#0a0a0b` | Page-level veils; chrome bar surface | 463, 470 |
| `--scrim-base` / `--scrim-cool` / `--scrim-deep` | `#0c0a09` / `#0a0a0b` / `#080706` (same in both themes) | | Fixed dark inks: map borders, modal dimmers | 464-471 |

### 3.2 Lines. Promote the weight, never reclassify it (`app/globals.css:28-32`)
| Token | Light | Dark | Contrast / role | Line |
|---|---|---|---|---|
| `--line` | `rgba(23,20,15,.12)` | `rgba(245,244,240,.12)` | 1.31:1, **decorative** hairline (518 call sites) | 27 |
| `--rule-soft` | `rgba(23,20,15,.30)` | `rgba(245,244,240,.24)` | 1.97:1, secondary structure | 33 |
| `--rule` | `rgba(23,20,15,.48)` | `rgba(245,244,240,.38)` | 3.30:1, **structural**, clears WCAG 3:1 | 34 |
| `--border` | `#dcd9d3` | `#26262b` | Card / field border (1.29:1; not enough for a control) | 26 |
| `--btn-edge` | `rgba(23,20,15,.55)` | `rgba(245,244,240,.42)` | Control boundary, ≥3:1 | 169 |

The code gives a rule of thumb: "if the line is the only thing separating two pieces of data, it is structural" (`app/globals.css:31-32`).

### 3.3 Text
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--text` | `#17140f` | `#f5f4f0` | Primary ink | 37 |
| `--text-body` | `#4a443b` | `#cfc7bb` | Reading text | 74 |
| `--text-body-cool` | `#4a443b` | `#d8d8de` | Reading text (cool) | 396 |
| `--text-body-cool-quiet` | `#4a443b` | `#d3d3da` | Story step body, outro | 397 |
| `--text-body-warm` | `#544d43` | `#b8b0a5` | Warm prose | 399 |
| `--text-muted` | `#5f584f` | `#9b9ba3` | Secondary; kickers | 38 |
| `--dim` | `#6f685f` | `#85858e` | Smallest meta. 4.7:1 on `--bg`; "do not darken it" | 308 |
| `--text-dim-warm` | `#6f685f` | `#8a8279` | Number-group intros | 400 |
| `--text-fade` | 1 | 0.9 | The one allowed opacity for de-emphasised text | 458, light at 541 |

### 3.4 Gold family

The gold is `#ffb627` in dark and **`#945e00` on paper**. Paper uses a single gold everywhere, so every gold role, fills included, resolves to `#945e00` there. `#945e00` is "the lightest that clears [4.5:1] on every light surface (4.96 / 5.44 / 4.54)" (`app/globals.css:56-64`).

| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--gold` | → `--gold-ink` | → `--gold-ink` | Legacy alias (199 uses), resolves to the INK role | 49 |
| `--gold-ink` | `#945e00` | `#ffb627` | Text, lines, icons | 67 |
| `--gold-display` | `#945e00` | `#ffb627` | Anton ≥24px (e.g. "Stats" in the wordmark) | 66 |
| `--gold-fill` | `#945e00` | `#ffb627` | Fills: buttons, bars, active segment | 65 |
| `--gold-bright` | `#945e00` | `#ffd24a` | Top stop of the fill ramp | 50 |
| `--gold-dim` | `#945e00` | `#c98a2e` | Bottom stop of the fill ramp; hover borders | 183 |
| `--gold-bright-ink` | `#945e00` | `#ffd24a` | Bright gold used as text (big "№1", No. 1 cells) | 419 |
| `--gold-hit` | `#5f3c00` | `#ffd24a` | Hover fill: deeper on paper, brighter on black | 422 |
| `--ink-on-gold` | `#ffffff` | `#14100a` | Label on a gold fill. It inverts with the ground: white on paper is 5.44:1 | 71, reason 68-70 |
| `--gold-wash-base` | `#945e00` | `#ffb627` | Base for `color-mix()` washes | 141 |
| `--gold-wash` | `rgba(148,94,0,.10)` | `rgba(255,182,39,.10)` | Ready-made 10% wash | 142 |
| `--gold-edge` | `rgba(148,94,0,.30)` | `rgba(255,182,39,.30)` | 30% hairline around a wash block | 146 |
| `--wash-strength` | **0.42** | **1** | Multiplier on every gold wash alpha: "0.42 is the most a chip's plate can take before the gold reading ON it drops under 4.5:1" | 447, light at 536-539 |
| `--display-ramp-a / -b / -c / -dim` | all `#945e00` | `#ffd24a` / `#ffb627` / `#ff7a1a` / `#c98a2e` | Gold **text** gradient (`.inkText`, `.goldText`) | 137-140 |
| `--gold-glow-base` | `transparent` | `#ffb627` | Halo colour. Glows do not exist on paper | 413 |
| `--gold-band-a / -b` | `#945e00` | `#f08a12` / `#d96c0c` | Closer band stops | 185-186 |
| `--ember` | `#b34700` | `#ff7a1a` | Records family signature | 158 |

How washes are written: `color-mix(in srgb, var(--gold-wash-base) calc(10% * var(--wash-strength)), transparent)` (for example `app/globals.css:1340`, `1823`, `1929`). The alpha differs by component: 5% (card or summary hover), 6% (table row), 10%, 16% (on-state chip or tag), 18% (ghost active), 30% (No. 1 cell).

**The gold ramp for any gold fill** (`app/globals.css:771`):
```css
background-color: var(--gold-fill);
background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
```
The comments explain the choices. The ramp is "bright to dim, no orange turn — so the pill reads as lit metal" and "Flat gold survives only where a gradient cannot read: hairline rules, dots, and data ink" (`app/globals.css:41-45`, `761-763`). On paper all three stops are `#945e00`, so a paper button is flat `#945e00` with a white label.

**Gold text** has its own ramp because a fill ramp on paper would be 1.5:1 (`app/globals.css:133-136`):
- `.inkText` (`app/globals.css:676-693`): the display ramp at `120deg` (a → b 55% → c), plus an SVG fractal-noise grain blended `overlay` (`soft-light` on paper, `861-868`), `background-clip: text`, and `padding: .2em 0; margin: -.2em 0` so Anton's overhang is not clipped. The Dai Dai h1 uses it on the words "Dai Dai" (`app/dai-dai/page.tsx:365`).
- `.goldText` (`app/globals.css:696-710`): the same ramp without the grain.

### 3.5 Dark-room devices (visible on black, faded out on paper)
| Token | Light | Dark | Line |
|---|---|---|---|
| `--glow-base` | `transparent` | `#e8b04b` | 423 |
| `--red-glow-base` | `transparent` | `#c0392b` | 430 |
| `--halo-base` (text halo behind wordmark and nav) | `transparent` | `#000000` | 429 |
| `--vignette-ink` | `transparent` | `rgba(0,0,0,.7)` | 433 |
| `--grain-opacity` | 0.022 | 0.06 | 434, light at 540 |
| `--shadow-base` | `#17140f` | `#000000` | 439 |
| `--shadow-strength` | 0.31 | 1 | 440, light at 535 |
| `--spotify-glow-base` | `transparent` | `#1db954` | 424 |

These feed the page atmosphere. `body::before` is a warm top glow at 10% of `--glow-base` plus a red base glow (`app/globals.css:600-609`). `body::after` is an `inset 0 0 200px 40px` vignette (`610-617`). `.grain` is a fixed SVG noise layer (`620-627`). Ad-hoc shadows use this pattern: `color-mix(in srgb, var(--shadow-base) calc(50% * var(--shadow-strength)), transparent)` (e.g. `app/dai-dai/dai-dai.module.css:95`).

### 3.6 Status colours
| Token | Light | Dark | Role | Line |
|---|---|---|---|---|
| `--green` (= `--live`) | `#146b3c` | `#3ed17f` | Live / positive delta / verified. "One green" | 294, alias 357 |
| `--green-dot` | `#1f9a5a` | `#3ed17f` | Non-text dot (3:1 floor) | 297 |
| `--live-dot` | `#1f9a5a` | `#35d07f` | Live pulse on /live-charts. Do not fold into `--green` | 493 |
| `--red` | `#c0392b` (same both) | | Background wash only, **never text** | 298 |
| `--red-ink` | `#b3261e` | `#e0796d` | Negative deltas, "sold" labels | 299 |
| `--error-ink` | `#b3261e` | `#e06a5c` | Errors | 486 |
| `--delta-down` / `--move-down` | `#b3261e` | `#f2726a` / `#e2564a` | Chart moves down | 487-488 |
| `--sold-ink` | `#8f4700` | `#f5890b` | "A fact, not a warning" | 489 |
| `--bar-muted` / `--dot-muted` | `#8d877d` / `#7f7a72` | `#4a4a52` / `#55555d` | Non-text data marks | 496-497 |

### 3.7 Certification tiers (Diamond / Platinum / Gold / Silver)

**Fills do not change between themes.** They carry a lightness spread "so the four separate at an 8px dot AND in greyscale" (`app/globals.css:255-262`). **Inks and edges** are theme-aware, because on paper a fill cannot double as text (platinum on paper is 1.05:1) (`277-281`). In practice components use the `-ink` token for both dots and words (e.g. `app/components/MobileCerts.tsx:51-60`).

| Tier | Fill (both) | Ink light | Ink dark | Edge light | Edge dark | Lines |
|---|---|---|---|---|---|---|
| Diamond | `#31A1C0` (L\* 61.6) | `#0b6e7e` (5.39) | `#31A1C0` | `rgba(11,110,126,.60)` | `rgba(49,161,192,.50)` | 265, 284, 288 |
| Platinum | `#EFEDE6` (L\* 93.7) | `#2f3a4e` (10.42) | `#EFEDE6` | `rgba(47,58,78,.60)` | `rgba(239,237,230,.29)` | 263, 282, 286 |
| Gold | `#FBB417` (L\* 78.0) | `#945e00` (5.40) | `#FBB417` | `rgba(138,90,0,.60)` | `rgba(251,180,23,.37)` | 264, 283, 287 |
| Silver | `#848F9E` (L\* 59.7) | `#6b6b74` (4.81) | `#848F9E` | `rgba(107,107,116,.60)` | `rgba(132,143,158,.62)` | 272, 285, 289 |

The tier gold (`#FBB417`) is not the brand gold (`#ffb627`). `tests/tierColourParity.test.ts` requires every tier map to name a `--tier-*` token.

### 3.8 Chart peak bands (data meaning; "must never be recoloured to gold")
| Token | Light | Dark | Line |
|---|---|---|---|
| `--cyan` (Top 10 band only) | `#0b6e7e` | `#8fe3f0` | 234 |
| `--silver` (Top 40 band only) | `#6b6b74` | `#dfe2e8` | 235 |
| `--peak-band-1 / -5 / -10 / -40 / -rest` | `#57360a` / `#945e00` / `#b3822f` / `#b4ada0` / `#dad5cb` | `#ffd24a` / `#ffb627` / `#c98a2e` / `#8a7a52` / `#5a5a62` | 243-247 |
| `--peak-rest` | `#6b6b74` | `#9aa0a6` | 498 |
| `--seg-rest` / `--seg-pending` | `#b8b2a6` / `#dad5cb` | `#4a4a52` / `#33333a` | 250, 253 |

### 3.9 The warm flourish (fixed in both themes; "use once per screen")
`--grad-a #ffd24a`, `--grad-b #ff7a1a`, `--grad-c #e2342b`, `--warm-grad: linear-gradient(100deg, a, b, c)` (`app/globals.css:193-197`).

### 3.10 Photo tiles
Anything laid over a photograph keeps the dark palette in both themes. Add the plain class `photoTile`, which joins the token-declaring selector and pins `color-scheme: dark` (`app/globals.css:76-91`). Without it, a scrim built from `--bg` turns into a white wash on paper.

Artist-scoped brand: `[data-brand="starrgirl"]` (Ayra Starr pages only, `app/globals.css:501-513`, `2146-2168`). This is not relevant to Dai Dai. It is listed only so nobody reuses it.

---

## 4. Rules stated in code comments

| Rule | Where |
|---|---|
| **The link rule.** "filled = the ONE primary action in a section · outlined = its secondary · arrow link ↗ = navigation to a sibling page · bare text = utility" | `app/globals.css:715-733` |
| **One gold action per screen.** The masthead's Stat-card button keeps `.btnPrimary`'s shape but not its gold fill, because "the Stat card is never any page's primary action" | `app/globals.css:2074-2080` |
| **Gold is four things** above the home strip: wordmark "Boy", the live figure, the primary button, links. Figures are ink at rest and gold on hover | `app/page.module.css:267-270`, `283-290` |
| **Data-meaning colours are never gold.** Tiers, peak bands and live deltas "carry meaning of their own" | `app/globals.css:230-233`; `app/primitives/page.tsx:149-150` |
| **Every gold fill uses the one ramp**, "or the phone shows two golds" | `app/components/mobileDeepPage.module.css:313-314` (the same sentence appears in 5 mobile modules) |
| **Mono is labels only**, never a sentence. Table headers stay mono; table cells are Geist | `app/globals.css:118-122` |
| **Hover = `--bg-raised`** for rows, cards and segments. On paper it presses darker; secondary buttons use `--btn-face` because raised inverts on paper | `app/globals.css:159-169`, `2028-2030` |
| **Focus ring.** `outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 3px` on a, button, input, select, textarea, summary and [tabindex] | `app/globals.css:1788-1803` |
| **Row focus goes inside.** `box-shadow: inset 0 0 0 2px var(--gold)` for full-bleed rows | `app/globals.css:1832-1841` |
| **Segment focus** uses `outline-offset: -2px` | `app/globals.css:2031` |
| **Tap targets:** 24px minimum on a mouse and 44px when `pointer: coarse`, applied as a base reset on nav, footer and `.ui-link`. Links inside prose are exempt | `app/globals.css:1718-1760`; *(bundle)* `RESPONSIVE-AND-STATES.md:85-105` |
| **Prose links are underlined** (1px, 2px offset), because colour alone fails WCAG 1.4.1 | `app/globals.css:645-663` |
| **Type floor: 11px** (check rem as well as px) | `app/globals.css:273-276` |
| **Not reported is not zero.** An em dash in `--dim`, `cursor: help` | `app/globals.css:2059-2061` |
| **Anchor clearance.** `[id] { scroll-margin-top: calc(88px + env(safe-area-inset-top)) }` (69px sticky bars plus air) | `app/globals.css:564-572` |
| **No colour literals in modules.** Tokens are declared only in `globals.css`. Enforced by `tests/cssColourTokens.test.ts` (allowlist in `docs/design/theming/literal-allowlist.json`) | `tests/cssColourTokens.test.ts:5-24` |
| **Pills are always 999px; Anton is 400 only** | `app/primitives/page.tsx:69-71` |
| **Reduced motion.** A global kill switch sets every animation and transition to 0.001ms. The button lift is dropped, but the primary keeps `translateZ(0)` | `app/globals.css:1693-1700`, `2063-2072` |
| **iPhone label guard.** Every `.btn*` pins `-webkit-text-fill-color`, resets filter/blend/opacity and promotes `transform: translateZ(0)` at rest. Labels rendered blank or orange on iPhone without it. Keep these on any new button | `app/globals.css:764-790`, `807-836`, `1915-1925` |
| **Signature per family on the kicker tick**, never on text or a button: `.eyebrowRule` 22×2px in `--gold-fill` (home), `--ember` (records), `--green` (live-charts, updates), `--text-muted` (about, faq, contact) | `app/page.module.css:190-196`; `app/records/records.module.css:65`; `app/updates/updates.module.css:34`; `app/faq/faq.module.css:25` |

---

## 5. Shape, depth, motion

| Token | Value | Line |
|---|---|---|
| `--radius` / `--radius-md` / `--radius-lg` | **6px** (all three) | 215, 310-311 |
| `--radius-sm` | **4px** | 216 |
| Pills | `999px` (buttons, chips, tags, segments in the theme control) | e.g. 743, 1965 |
| Circles | `50%` (lineup photos, theme flip) | `app/dai-dai/dai-dai.module.css:92` |
| Tab-bar tab | 12px | `app/components/mobileTabBar.module.css:38` |
| `--shadow` | dark `0 20px 50px rgba(0,0,0,.45)`; light `0 12px 32px rgba(23,20,15,.14)` | 217, 531 |
| `--glow` | dark `0 0 40px` gold-glow 22%; light `none` | 218, 532 |
| `--ease` / `--ease-out` | `ease` / `cubic-bezier(0.22, 1, 0.36, 1)` | 222-223 |
| `--dur-fast` / `--dur` / `--dur-slow` | 0.15s / 0.2s / 0.3s | 224-226 |

Border conventions: cards use 1px `--border` (`app/globals.css:1222`). Dai Dai surfaces use 1px `--line` (`app/dai-dai/dai-dai.module.css:207`; `DaiDaiStory.module.css:32`). Controls use 1px `--btn-edge`. Grids draw their seams per cell with `box-shadow` rather than showing a background through the gaps (`app/dai-dai/dai-dai.module.css:126-131`; `app/components/DaiDaiConquest.module.css:10-22`).

---

## 6. Spacing and layout

- **Spacing tokens exist but no module uses them.** `--sp-1…--sp-32` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px) are declared at `app/globals.css:202-212`, and `grep var(--sp-` finds zero uses. Every module uses literal px copied from the design files, so the working rhythm is whatever each module sets.
- **Containers.** `.container` is max 1280px with 24px gutters (`app/globals.css:228`, `666-671`). The masthead and footer are max 1360px with 40px padding (`912-923`, `1067-1075`). `/dai-dai` `.wrap` is max 1280px with **40px** gutters, becoming **18px** at ≤900 (`app/dai-dai/dai-dai.module.css:7`, `46`). The phone gutter is 18px site-wide (e.g. `app/components/mobileDeepPage.module.css:24`).
- **The /dai-dai vertical rhythm** (all from `app/dai-dai/dai-dai.module.css`). Phone values follow the arrows.
  - Hero top padding 48px (`9`). On phone: `calc(56px + safe-area + 24px)` to clear the fixed back bar (`51-53`).
  - Kicker → h1: 14px (`25`). h1 → lede: 20px (`27`). Lede → buttons: 26px. Gap between buttons: 10px (`28`).
  - Story block: 44px top, 16px bottom (`DaiDaiStory.module.css:9`). Columns 1fr/1fr with a 56px gap. The stage sticks at `top: 104px` (`4-15`).
  - Section top 56px → 36px (`30`, `57`). Kicker → h2: 12px (`38`). h2 → intro: 14px. Intro → content: 32px (`68`).
  - Number groups: 44px apart → 32px (`168`, `199`).
  - Outro: `8px auto 60px`, max 720px, centred (`249-253`). Keep-exploring: `64px auto 80px`, becoming `36px auto 56px` at ≤760 (`app/components/KeepExploring.module.css:6-14`).

---

## 7. Breakpoints and the two-layout rule

| Band | Rule | Source |
|---|---|---|
| **≥1240** | Desktop as designed | *(bundle)* `RESPONSIVE-AND-STATES.md:8` |
| **901–1239** (tablet) | Archetype rules apply. `/dai-dai` is archetype 5, "Prose + figure": the sticky stage **unsticks** and each scene renders inline above its step, capped at 640px tall | *(bundle)* `RESPONSIVE-AND-STATES.md:9`, `42-45`; code `app/components/DaiDaiStory.module.css:226-255` |
| **≤900** | Phone. Every mobile screen switches here | `app/components/FaqList.tsx:6-7` ("Where every mobile screen on this site takes over") |
| Masthead-only bands | ≤1500 links tighten; 1240–1280 tightest; ≤1239 hamburger; ≤640 18px padding; ≤360 smaller wordmark | `app/globals.css:1014-1041`, `1709-1716` |
| Dai Dai local | Lineup 6 cols → 3 at ≤720 → 2 at ≤380; conquest grid 10 cols → 8 at ≤1239 → 5 at ≤900 | `app/dai-dai/dai-dai.module.css:77`, `121-126`; `app/components/DaiDaiConquest.module.css:25`, `87-96` |

*(bundle)* `RESPONSIVE-AND-STATES.md:5` says "Two breakpoints, not a continuum."

**Separate components.** Across the site, desktop and phone are two trees. For example, `MobileDeepPage` is `display:none` above 900 (`app/components/mobileDeepPage.module.css:1-14`), and `app/lib/mobileScreens.ts` decides per route which phone chrome applies. The site owner's standing rule is that a desktop design is for desktop only and a mobile design is for mobile only; neither is scaled to become the other. **The current /dai-dai breaks this on purpose.** One tree serves every width through media queries (`app/dai-dai/dai-dai.module.css:4-6`), and the Spanish edition `/dai-dai/es` imports the same stylesheet and uses the same class set (`app/dai-dai/dai-dai.module.css:268-270`). A new design should state explicitly whether it keeps one responsive tree or draws separate desktop and phone screens. If it draws both, both must be drawn.

**Phone chrome on /dai-dai** (`app/lib/mobileScreens.ts`):
- It is in `BACK_BAR_ROUTES` (`:46`), so the site masthead hides at ≤900 (`app/components/Nav.tsx:25-31`, `app/globals.css:2133-2137`). The story renders its own fixed back bar (`app/components/DaiDaiStory.tsx:242-257`).
- It is **not** in `ACTION_BAR_ROUTES`: "Paul's call (9 Aug 2026) — the story pages carry the standard five-tab footer" (`:80-82`). The five-tab bar therefore shows at the foot.
- `/dai-dai/es` inherits the same chrome through the locale rule (`:121-137`).
- The site footer is hidden at ≤900 (`app/globals.css:1141-1147`). The Keep-exploring rail is desktop-only on this page (`app/dai-dai/dai-dai.module.css:279`).

---

## 8. Component anatomy

### Buttons (`app/globals.css`)
| Variant | Spec | Lines |
|---|---|---|
| `.btn` base | inline-flex, gap 6px, **height 46px**, padding `0 26px`, **radius 999px**, Space Mono **700 13px**, tracking **0.08em**, uppercase, 1px transparent border, transitions `--dur --ease` | 734-756 |
| `.btnPrimary` | Gold ramp fill, label `--ink-on-gold` (pinned twice), shadow `0 8px 30px` gold-glow 24%. Hover: `translateY(-3px)` and `0 14px 44px` 42%. On paper the glow is transparent | 757-796 |
| `.btnSecondary` | Face `--btn-face`, border `--btn-edge`, label `--text`. Hover: lift 3px, border and label go `--gold`, background white-wash 6% | 797-845 |
| `.btnGhost` | Transparent, label `--gold`, padding `0 8px`. Hover wash 10%×strength; active 18%×strength | 1912-1933 |
| `.btnIcon` | 36×36px, becoming **44×44px** when `pointer: coarse`, transparent | 1935-1954 |
| `.btnBlock` | Full width, left-aligned | 2034-2037 |
| Disabled | opacity 0.45, `not-allowed`, no lift | 1899-1910 |
| `.navStatCard` (masthead) | **38px** tall, padding `0 18px`, **11.5px**, gap 8px, *outlined* (transparent, `--btn-edge`). Hover goes gold. Hidden at ≤900 | 2074-2102 |
| Spotify button | Brand green `#1db954` and label `#06241a`, both fixed, since "not ours to theme". padding `11px 20px`, 0.92rem 700 | 1552-1571 |

### Chips, tags, badges
| Component | Size / type | Rest → on | Source |
|---|---|---|---|
| **Phone filter chip** (standard) | **min-height 44px**, padding `0 15–16px`, 999px, Space Mono **700 11px 0.1em** uppercase, nowrap; rail gap 8px | 1px `--line`, ink `--text-body` / `--text-muted` → wash 16%×strength + `--gold` border + `--gold` label | `app/components/mobileDeepPage.module.css:135-152`; `mobileOfficialCharts.module.css:146-168` ("44px, not 38 — the tap-target floor applies to filter chips too") |
| Phone chip, filled on-state (certs) | Same 44px | Border `--text` 18%, label gold → **gold ramp** + `--ink-on-gold` | `app/components/mobileCerts.module.css:219-244` |
| **Compact pill** | **min-height 32px**, padding `0 11px`, gap 6px, **font-size 10px** | Hover `--bg-raised` | `app/components/mobileCerts.module.css:531-549`. Added 25 Sep at the owner's request. **Its 10px type is under the site's 11px floor; do not copy that value.** |
| Desktop filter chip | min-height **38px**, padding `8px 13px`, 0.78rem (12.5px) Geist 600, 1px `--border`; becomes **44px** / `11px 15px` at ≤640 | Hover border `--gold-dim` and ink `--text`; on = wash 16% + gold | `app/certifications/certifications.module.css:181-205`, `308` |
| Chip pressed (global) | `button[class*="hip"]:active` wash 10%×strength | | `app/globals.css:1818-1824` |
| `.tag` | Space Mono **11px 0.1em** uppercase, padding `4px 10px`, 999px | Accent (wash 16% + gold), Neutral, Outline (gold border), Diamond, Platinum, Live (green 14%) | `app/globals.css:1956-1975` |
| Country tier badge | padding `6px 11px`, 999px, mono 0.72rem (11.5px) **700**, 1px border | Ink `--tier-*-ink`, border `--tier-*-edge`, no fill ("ranking by colour, no fills") | `app/certifications/certifications.module.css:88-128` |
| Legacy `.chip` | padding `9px 16px`, 999px, 0.9rem Geist, bg `--bg-soft`, 1px `--border` | Hover border and label gold | `app/globals.css:1312-1327` |

### Cards and stat tiles
| Component | Spec | Source |
|---|---|---|
| `.card` (global) | bg `--bg-soft`, 1px `--border`, radius 6px, padding 24px. Hover `translateY(-4px)` with border `--gold-dim` | `app/globals.css:1220-1230` |
| Keep-exploring card | flex 1 1 240px, padding `18px 20px`, bg `--bg-soft`, 1px `--border`, radius 6. Title Geist 700, desc 0.8rem muted, arrow gold 1.15rem 700. Hover lift 3px with `--gold-dim` border | `app/components/KeepExploring.module.css:23-60` |
| **Dai Dai number tile** | Grid 3 cols (2 at ≤900), gap 1px, each cell a 1px `--line` ring via `box-shadow`, bg `--bg`, padding `22px 24px`, **no radius**. Figure Anton **40px** / 0.92 `--text` tabular (**30px** phone). Label **13.5px** / 1.6 `--text-body`, 12px below | `app/dai-dai/dai-dai.module.css:132-156`, `194-198` |
| Dai Dai **lead** tile (the six heroes) | Tint wash 5%×strength. Figure **52px** in `--gold` (**36px** phone) | `app/dai-dai/dai-dai.module.css:146`, `155`, `159-164` |
| Number-group head | Mono 700 11px 0.11em uppercase `--gold`, with a 1px `--line` rule after it (flex 1, gap 12px). Intro 13.5/1.6 `--text-dim-warm`, 8px below | `app/dai-dai/dai-dai.module.css:169-191` |
| Home scoreboard figure | Anton 52px / 0.9, **ink at rest, gold on hover**, hover cell `--color-accent-100` | `app/page.module.css:267-290` |
| Card hover spec *(bundle)* | background gold 5%, border `--gold-dim`, 2px gold focus ring | `RESPONSIVE-AND-STATES.md:117-130` |

### Kicker + heading pattern
- **Dai Dai kicker (no tick):** mono **700 11px 0.11em** uppercase `--text-muted` (`app/dai-dai/dai-dai.module.css:10-17`). It sits 14px above the h1 and 12px above each h2. Each h2 carries **one accent word** in flat `--gold` (`.gold`, `42`). The code explains that choice: "Flat gold, not the ink gradient: these sit beside white words in the same line, and the grain reads as noise at 40px" (`40-41`).
- **Family eyebrow with tick** (other sections): flex, gap 10px, mono 700 **11.5px 0.18em** muted, followed by `.eyebrowRule` **22×2px** in the family signature (`app/records/records.module.css:54-65`). The board and timeline use 26×2px (`app/afrobeats/afrobeats.module.css:24`).

### The "01 / 07" chapter counter (DaiDaiStory)
The story has **7 steps** (`app/components/DaiDaiStory.tsx:95-140`). The counter appears in three places:
1. **Phone back bar**, right-aligned: mono **11px 0.1em `--gold`**, tabular, `margin-left: auto`. The text is `String(active+1).padStart(2,"0") / String(steps.length).padStart(2,"0")` (`DaiDaiStory.tsx:253-255`; CSS `DaiDaiStory.module.css:371-378`).
2. **Above each step title**: `.stepIndex` mono **0.72rem (11.5px) 0.14em `--gold-dim`**, `aria-hidden` (`DaiDaiStory.tsx:302-304`; CSS `194-200`). Below it, `.stepKicker` in mono 0.7rem (11.2px) 0.14em uppercase muted, 10px below (`201-209`). Then the title, then `.stepBody` at 1.08rem (17.3px) / 1.65 in `--text-body-cool-quiet` (`219-224`).
3. **Progress ticks** under the stage: 7 bars of **26×3px**, radius 3px, gap 8px, `--line` → **`--gold-fill`** when active, `background .3s ease` (`DaiDaiStory.module.css:160-175`).

Step behaviour: each step is `min-height: 92vh` (**66vh** on phone). Inactive steps sit at opacity **0.34** (0.45 phone) with `translateY(8px)`, transitioning `.45s ease`. The active step is found by an IntersectionObserver band at the vertical centre (`rootMargin: "-50% 0px -50% 0px"`) (`DaiDaiStory.module.css:177-193`, `293-304`; `DaiDaiStory.tsx:233-234`).

**Stage**: square (`aspect-ratio: 1`), radius 6px, 1px `--line`, padding `40px 28px`, gap 20px. Behind it sits the cover art blurred `46px` and `saturate(1.4)` at opacity 0.28, under a radial scrim from `--bg` (35% → 82% at 78%). Scenes enter with `sceneIn` 0.5s `--ease-out` (translateY 14px → 0) (`DaiDaiStory.module.css:22-65`, `91-94`). On a phone the stage pins at `top: 8px`, `height: 44vh` (min 300px), with bg `--bg-soft`, a drop shadow and padding `20px 18px` (`270-287`). Scene type: "№1" Anton `clamp(5rem,16vw,11rem)` in `--gold-bright-ink`. Big count Anton `clamp(4rem,13vw,8.5rem)` in `--gold` (animated by `CountUp`, 1100ms, `app/components/CountUp.tsx:11`). Scene label mono 0.8rem 0.16em muted. Scene note 0.95rem `--gold-dim` (`101-122`).

### FAQ list
- **Desktop** shows every answer, open (`app/components/FaqList.tsx:44-49`). Dai Dai cards: gap 12px, padding `18px 20px`, 1px `--line`, radius 6px, bg `--bg-soft`. Question in Geist **700 1.12rem (17.9px)** / 1.3 `--text`. Answer 0.98rem (15.7px) / 1.6 `--text-muted` (`app/dai-dai/dai-dai.module.css:200-226`).
- **Phone** collapses *after mount* with the first answer open, so the server HTML always holds every answer (`FaqList.tsx:14-50`, guarded by `tests/faqMobileVisibility.test.tsx`). The question becomes a full-width button. A **+/−** glyph in mono **700 15px `--gold`** sits on the first line, and the ::after pseudo-element extends the hit area (`inset: -11px 0`) to reach 44px (`app/components/faqList.module.css:10-71`). The code gives the reason: "This site has no chevron disclosure anywhere".

### Folds (phone only)
- Numbers fold: full-width, **min-height 48px**, 1px `--line`, bg `--bg-soft`, mono 700 11px 0.12em `--gold`. Label: "Show the full breakdown ({n} more) +" / "Show fewer −" (`app/dai-dai/dai-dai.module.css:281-306`; `app/components/DaiDaiNumbers.tsx:29-30`).
- Conquest fold: **min-height 52px**, padding `12px 14px`. Figures in Anton 17px gold; action "Show all +" / "Hide −" in mono 700 11px gold (`app/components/DaiDaiConquest.module.css:102-147`).

### Conquest grid (the world takeover)
10 / 8 / 5 columns with 1px seams (cells draw `box-shadow: .5px .5px 0 .5px var(--rule)`). Frame is a 1px `--rule-soft` border plus a `--rule` outline inset by 1px. Cell padding `12px 8px`, gap 5px. Each cell stacks a flag at 17px, the code in Anton 13px, and `#peak` in mono 700 11px. Charted cells: ink wash 7% over `--bg`, code `--text`. No. 1 cells: gold wash 30%, code and peak in `--gold-bright-ink`. Legend: mono 11px 0.1em uppercase `--dim`, swatches 11px (`app/components/DaiDaiConquest.module.css:23-96`).

### Lineup
Six columns, gap 22px. Photos max 118px, circular, 2px `--line` border (**`--gold` for the two headliners**) with a shadow. Name in Anton 1rem / 1.05 uppercase 0.02em. Tag in mono 0.6875rem (11px) 0.08em uppercase `--gold-dim` (`app/dai-dai/dai-dai.module.css:74-120`).

### Phone bottom nav (five-tab bar)
- Fixed to the bottom, **z-index 60**, 5 equal columns, gap 2px, padding `8px 10px max(30px, safe-area-bottom)`. Background `--scrim` with `blur(14px)` and a 1px `--line` top rule (`app/components/mobileTabBar.module.css:8-29`).
- Tab: **min-height 48px**, a column with gap 5px, radius 12px, `--text-muted` → **`--gold`** when current (`31-44`). The pressed state uses a literal `rgba(255,182,39,.08)` (`43`).
- Icons are Anton glyphs at **15px**: ◆ Home, ♪ Music, ★ Certs, ▲ Charts, ⌗ Records. Home uses the crown mark at 16px instead, dimmed to opacity **0.55** when inactive and never recoloured (`app/components/MobileTabBar.tsx:21-42`; CSS `52-72`).
- Label: mono **700 11px 0.06em** uppercase (`73-80`).
- The page reserves `padding-bottom: calc(64px + max(30px, safe-area))` for it (`app/globals.css:1871-1874`).

### Phone back bar (the /dai-dai version)
Fixed (not sticky, because it renders from inside the story), **z-index 45**. Background `--scrim` with `blur(14px)` and a 1px `--line` bottom rule. Padding `12px 18px` plus safe-area insets, gap 12px. Contents: a back button (**44px circle**, bg `--bg-soft`, 1px `--line`, 15px chevron at stroke 2.2), the label "DAI DAI" (mono 700 11px 0.11em), the gold counter, and the hamburger (**44px**, three bars 17×1.5px, gap 4px) (`app/components/DaiDaiStory.module.css:325-379`; `app/components/mobileMenuButton.module.css:3-34`). This matches the shared back bar in `app/components/mobileDeepPage.module.css:16-56`.

### The masthead (desktop and tablet)
- Sticky, **z-index 50**, `color: var(--text)`. Inner row **68px**, max 1360px, padding-inline 40px (24px at ≤1500, 18px at ≤640) (`app/globals.css:876-923`, `1014-1033`).
- Wordmark: the crown mark at 22px, then `BurnaBoy` + `<span>Stats</span>`. Anton 1.5rem (24px), 0.04em, uppercase, gap 10px. "Stats" is in `--gold-display` (`app/components/Nav.tsx:34-41`; `app/globals.css:941-957`).
- Links: mono **12.5px 0.12em** uppercase, gap 17px. Colour `light-dark(rgba(23,20,15,.88), rgba(255,255,255,.88))`. Hover and current go `--gold` with a **2px `--gold-fill` underline** growing 0 → 100% at `bottom: -6px` (`app/globals.css:958-1001`, `1843-1849`). The links hide at ≤1239 and a 42px hamburger replaces them (44px on touch) (`1044-1063`, `1709-1716`, `1745-1757`).
- Right side, in DOM order: mini theme flip, search, compact theme control (hidden in the bar), Stat card (outlined, hidden at ≤900), hamburger (`app/components/Nav.tsx:44-86`).

### Footer (desktop only)
The home page gets a five-column sitemap (`1.5fr repeat(4,1fr)`, gap 36px, padding `44px 40px 56px`). Every other page gets the compact footer: wordmark and provenance on the left, 4 quick links in mono 12px 0.1em on the right. Both carry the three-way **Appearance** control (`app/globals.css:1064-1147`, `2104-2131`, `2170-2189`).

---

## 9. Three-mode theming (light, dark, system)

- **Choice vs. applied theme.** `localStorage.theme` stores the choice: `dark | light | system`. `<html data-theme>` always holds the resolved theme, `dark` or `light` (`app/components/ThemeToggle.tsx:6-25`). CSS never needs a media query to work out what "no attribute" meant.
- **Before first paint.** An inline script in `<body>` resolves the choice, writes `data-theme`, and rewrites `<meta name="theme-color">` to `#f7f4ee` (light) or `#0a0a0b` (dark). Anything unrecognised resolves to dark (`app/layout.tsx:217-243`; default theme-color `#0a0a0b` and `color-scheme: "dark light"` at `app/layout.tsx:112`, `117`).
- **While the page is open.** `ThemeToggle` reads the choice through `useSyncExternalStore` and writes `<html>` from one effect. When the choice is `system`, it listens to `prefers-color-scheme` and follows the OS live. The same-tab event is `burnaboystats:themechange` (`ThemeToggle.tsx:29-31`, `109-127`).
- **CSS.** `:root { color-scheme: dark }` and `:root[data-theme="light"] { color-scheme: light }` (`app/globals.css:522-523`). Non-colour tokens change in a single override block: `--shadow`, `--glow`, `--shadow-strength .31`, `--wash-strength .42`, `--grain-opacity .022`, `--text-fade 1` (`app/globals.css:526-542`).
- **The controls:**
  - `variant="mini"`: a **one-tap dark/light flip**. It is a 34px circle with a 44px hit area via `::after inset -5px`, a 1px `--line` border, a `--text-muted` icon (15px) showing the mode you will get, and it sits in the masthead at every width (`ThemeToggle.tsx:138-158`; `app/components/themeToggle.module.css:62-95`). It is not a picker; tapping it from System commits to whatever is showing.
  - `variant="compact"`: an icon-only 3-segment control with 36×34px segments (44×44 on touch). It is **hidden in the masthead** because it pushed the Stat card off-screen, and it is shown in the footer instead (`themeToggle.module.css:37-55`; `app/globals.css:2188-2189`).
  - `variant="full"`: a labelled 3-segment control with 44px segments, pill shape, 1px `--border`, bg `--bg-soft`. The active segment is `--gold-fill` with `--ink-on-gold`. Label mono 700 11px 0.11em. It lives in the phone nav sheet under "Appearance" (`themeToggle.module.css:4-33`, `57-60`; `app/components/MobileNavSheet.tsx:170-175`). There is no transition on theme switch, deliberately (`themeToggle.module.css:25-27`).
- **How the masthead switches.** The bar used to be a permanently dark island. The owner decided it now themes with the page (`app/globals.css:14-19`). On paper it is solid `--scrim` from the top, with no gradient and a `--line` bottom border (`app/globals.css:850-855`, `870-874`). In dark it is a transparent gradient `rgba(9,9,11,.9) → 0` at rest. Once the page scrolls past 24px it becomes solid `rgba(10,10,11,.96)`, or `.92` where `backdrop-filter: blur(14px)` is supported (`app/globals.css:886-911`; scroll threshold `app/components/Nav.tsx:19`). On paper the gold "Stats" deepens to `#945e00`, and the halo text-shadow disappears because `--halo-base` is transparent in light (`app/globals.css:425-429`).
- **Accepted cost** (`app/globals.css:16-19`): a light page's top no longer matches the link-preview (OG) card, which stays permanently dark and gold.
- **On /dai-dai phones** the masthead is hidden (§7), so the mini flip does not appear there. Theme is reachable only through the hamburger's nav sheet.

---

## 10. Where today's /dai-dai departs from the system

These are facts from the code, listed so a redesign can fix them. They are not proposals.

1. **Prose is off the reading scale.** Stated in the owner's notes as the named follow-up from the reading-scale work. Current values against the scale (18/20 · 16 · 13.5 · 12.5 · 11):
   - phone lede 15px (`app/dai-dai/dai-dai.module.css:55`)
   - `.numIntro` 14px (`43`)
   - `.sectionIntro` 1.02rem ≈ 16.3px at a 60ch measure, not 62ch (`66-73`)
   - `.lineupNote` 0.92rem ≈ 14.7px (`114-120`)
   - `.faqQ` 1.12rem ≈ 17.9px, not `--type-h-prose` 20px (`211-220`)
   - `.faqA` 0.98rem ≈ 15.7px (`221-226`)
   - `.outroLead` 1.1rem = 17.6px (`254-259`)
   - `.stepBody` 1.08rem ≈ 17.3px (`DaiDaiStory.module.css:219-224`)
   - story labels 0.7/0.72/0.8rem at 0.14–0.16em rather than 11px at 0.11em (`194-209`, `113-118`)
2. **The link rule is broken twice.** Two filled gold buttons, both with ↗: the hero "▶ Watch the halftime show ↗" and the outro "Every chart position ↗". Outlined buttons also carry ↗ (`app/dai-dai/page.tsx:373-386`, `484-486`). The rule is one filled action per section and one gold action per screen, with ↗ reserved for arrow links (`app/globals.css:715-733`, `2076-2080`).
3. **There is no tablet display step.** The h1 stays at 88px and the h2 at 40px from 901 to 1239px. The bundle specifies 88→64 and 44→34 (`RESPONSIVE-AND-STATES.md:57-63`).
4. **Partial last rows are left empty.** In 3 columns, "world rankings" (5) and "video" (2) leave gaps. In 2 columns (phone), "national charts" (15) and "world rankings" (5) do. The bundle's rule is "stretch the final cell" (`RESPONSIVE-AND-STATES.md:81`).
5. **Gold density is high.** Gold appears in the h1 ink word, a gold word in all 4 h2s, the six hero figures, group heads, counters, scene figures, headliner rings, the lineup tags (`--gold-dim`) and two gold fills. The home page limits gold to four things.
6. **The certs scene tier dots** use `--gold` for the Gold tier, not `--tier-gold-ink` (`app/components/DaiDaiStory.tsx:185`).
7. **The phone has no visible theme control** (§9).
8. **The spacing rhythm is literal px** (14/20/26/32/44/56), not the unused `--sp-*` scale.

---

## 11. Guards a redesign must keep passing (`tests/`)

| Test | What it holds |
|---|---|
| `cssColourTokens.test.ts` | No colour literal in any `*.module.css` (unless allowlisted with a reason); tokens are declared only in `globals.css` |
| `tierColourParity.test.ts` | Tier maps name `--tier-*` tokens |
| `faqMobileVisibility.test.tsx`, `faqCollapsible.test.tsx` | Every FAQ answer is in the server HTML at every width (the page emits FAQPage JSON-LD) |
| `daiDaiParity.test.ts` | `/dai-dai/es` matches the English page in **content**: lineup, figures, number cards |
| `daiDaiEnumeration.test.ts` | The certification country list names every country the data holds, in both languages |
| `daiDaiFigureHomes.test.ts` | The days-at-No.1 figure agrees in every place it appears |
| `daiDaiOgImage.test.ts` | The Dai Dai share card |

Figures on the page are derived from `app/data/*` (`daiDaiNumberOnes`, `daiDaiCertCount`, `weeksAtPeak(...)`, `DAI_DAI_*` in `app/data/daiDai.ts`; see `app/dai-dai/page.tsx:11-14`, `41-59`). Numbers in a design are placeholders, and the build writes the real ones.
