# burnaboystats.com: share graphics and page system for the On This Day designs

This is for the designer drawing the On This Day page, its home-page card and its share images. Every value is copied from code and cited `file:line`. Paths are relative to `~/burnaboy-website/` at `main` @ `93fedb07` (26 Sep 2026). A few points are marked **(branch)**: they come from `feat/on-this-day` @ `21a7bc82` in `~/burnaboy-onthisday` (PR #344, not merged, not live). A few are marked **(owner)**: they are standing decisions by the site owner, written in his notes rather than in code.

The page tokens are extracted in full, with every table and line number, in **`~/burnaboy-work/daidai-handoff/design-system.md`** (the "Dai Dai extract"). It was taken from the same commit, and its citations still hold: `globals.css:23`, `:67`, `:107-122`, `:160` and `:215` were re-read for this file. Section 1 below is a brief summary. Sections 2 and 3 are new.

Reference renders of the live cards are in `~/burnaboy-work/otd-handoff/ref/`, fetched from burnaboystats.com on 26 Sep 2026 (see §2.13).

> **A correction to the brief's premise.** On `main` the homepage has **no Latest Updates list**. The desktop page's own header comment says so: "The marquee, updates feed and map teaser the previous page carried are not in this design" (`app/page.tsx:38-39`). The phone home (`app/components/MobileHome.tsx`) has none either. The list lives only on `/updates`, drawn by `UpdatesFeed` on desktop and `MobileUpdates` on the phone. On the branch, the On This Day card sits under **History made**, the home page's one dated story. On desktop it goes between History made and the certifications ledger. On the phone it goes at the very foot of MobileHome, after History made. §3 therefore gives the anatomy of both: the /updates list, and the History made neighbour the card actually sits under.

---

## 1. Page tokens in brief

Full tables are in the Dai Dai extract §1–§9.

**Faces** (`app/layout.tsx:22-39`):
- **Anton** 400 only, always uppercase: titles and figures.
- **Geist**: all prose and table cells.
- **Space Mono** 700: labels only, "never a sentence" (`app/globals.css:118-122`).

**Type scale** (`app/globals.css:107-128`):

| Token | Size / line height | Use |
|---|---|---|
| `--type-lede` | 18 / 1.5 (20 at ≥900) | Page opening paragraph |
| `--type-body` | 16 / 1.6 | Reading prose |
| `--type-small` | 13.5 / 1.5 | List meta, notes under figures |
| `--type-caption` | 12.5 / 1.45 | Provenance, footnotes |
| `--type-label` | 11 / 1.2, tracking 0.11em | Kickers, chips, table headers |
| `--type-h-prose` | 20 / 1.3 | Headings inside prose |
| `--measure` | 62ch | Maximum prose width |

The floor is **11px** (`app/globals.css:273-276`). Display sizes are set per module: home h1 96, History title 32, section h2 40, month title 26, phone section title 26.

**Colours**: every colour is written as `light-dark(LIGHT, DARK)`, and **dark is the default** (Dai Dai extract §0, §9).

| Role | Light | Dark | Line |
|---|---|---|---|
| `--bg` | `#f7f4ee` | `#0a0a0b` | `:23` |
| `--bg-soft` (card or band) | `#ffffff` | `#141416` | `:24` |
| `--bg-soft-2` (well) | `#efeae1` | `#1c1c21` | `:25` |
| `--bg-raised` (**hover**) | `#e6e0d4` | `#24242a` | `:160` |
| `--text` | `#17140f` | `#f5f4f0` | `:37` |
| `--text-body` | `#4a443b` | `#cfc7bb` | `:74` |
| `--text-muted` | `#5f584f` | `#9b9ba3` | `:38` |
| `--dim` | `#6f685f` | `#85858e` | `:308` |
| `--line` (hairline) | `rgba(23,20,15,.12)` | `rgba(245,244,240,.12)` | `:27` |
| `--rule` (structural) | `rgba(23,20,15,.48)` | `rgba(245,244,240,.38)` | `:34` |
| `--gold` / `--gold-ink` / `--gold-fill` | **`#945e00`** | **`#ffb627`** | `:49`, `:65-67` |
| `--ink-on-gold` | `#ffffff` | `#14100a` | `:71` |
| `--green` (live) | `#146b3c` | `#3ed17f` | `:294` |

**Gold rules:**
- Gold marks **what is live and what is the action**. Above the home strip it is exactly four things: the "Boy" in the wordmark, the live figure, the primary button, and links (`app/page.module.css:267-270`).
- **One gold action per screen** (`app/globals.css:2076-2080`).
- Every gold fill uses the one ramp: `linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%)` (`app/globals.css:771`). On paper all three stops are `#945e00`, so the fill is flat.
- Data-meaning colours (cert tiers, peak bands, deltas, update categories) are **never recoloured to gold** (`app/globals.css:230-233`).
- Home figures are ink at rest and gold on hover (`app/page.module.css:271-296`).
- A gold wash is written `color-mix(in srgb, var(--gold-wash-base) calc(N% * var(--wash-strength)), transparent)`, where strength is 0.42 on paper and 1 on dark (extract §3.4).

**Hover** is `--bg-raised`: lighter on dark, darker on paper (`app/globals.css:159-160`). The /updates rows use it (`app/updates/updates.module.css:177`).

**Radius and shape:**
- `--radius` 6px, `--radius-sm` 4px (`app/globals.css:215-216`).
- Pills are always 999px. Anton is always weight 400 (`app/primitives/page.tsx:69-71`).

**Buttons** (`app/globals.css:734-845`):
- `.btn`: 46px tall, padding `0 26px`, 999px, Space Mono 700 13px, tracking 0.08em, uppercase.
- `.btnPrimary`: the gold ramp with `--ink-on-gold`.
- `.btnSecondary`: face `--btn-face` with edge `--btn-edge`. The label turns gold on hover.
- The link rule: filled = the one primary action in a section · outlined = its secondary · ↗ = an arrow link to a sibling page · bare text = utility (`app/globals.css:715-733`).

**Chips:**
- Phone filter chip: min-height **44px**, padding `0 16px`, Space Mono 700 11px, tracking 0.1em.
- Desktop /updates chip: min-height **40px**, Geist 600 13px (§3.1).
- `.tag`: Space Mono 11px, tracking 0.1em, padding `4px 10px` (`app/globals.css:1956-1975`).
- Tap targets: 44px when `pointer: coarse` (`app/globals.css:1718-1760`).

**Kicker tick** (the family signature): a 22×2px `.eyebrowRule` in the family colour. Gold on home, `--ember` on records, `--green` on live-charts and updates, `--text-muted` on about, faq and contact (extract §4, last row).

**Containers:**
- Home and /updates sections: max **1360px** with **40px** gutters, 32px on the home page at ≤1239 (`app/page.module.css:241-245`, `783`; `app/updates/updates.module.css:13`).
- Phone gutter: **18px** site-wide.

**Breakpoints** (extract §7):
- ≤900 is the phone; the mobile components take over there.
- 901–1239 is tablet.
- ≥1240 is desktop as designed.
- Desktop and phone are **separate component trees**, each drawn on its own.

**Photos**: anything laid over a photograph uses the `photoTile` class so it keeps the dark palette on paper (`app/globals.css:76-91`).

**Theming cost the owner accepted**: the top of a light page no longer matches "the permanently-dark OG card a shared link previews with" (`app/globals.css:14-19`). Share images do not theme; they are always dark.

---

## 2. Share images

### 2.1 What exists

| Surface | Route / renderer | Canvas | Count |
|---|---|---|---|
| **Link-preview card** (og:image, twitter `summary_large_image`) | `app/**/opengraph-image.tsx` | **1200×630** | **42** files on main |
| – template cards | `ogImage()` in `app/lib/og-image.tsx:9-48` | 1200×630 | 32 routes |
| – bespoke cards | own `ImageResponse` | 1200×630 | 10 routes: `/` (root), `/timeline`, `/dai-dai`, `/music/[song]`, `/music/albums/[album]`, `/afrobeats`, `/afrobeats/[artist]`, `/afrobeats/[artist]/charts`, `/afrobeats/[artist]/live`, `/records/cars/[car]` |
| **Downloadable stat card, square** | `GET /stat-card?stat=<id>&ratio=square` → `statCardImage()` (`app/stat-card/route.ts:7-16`) | **1080×1080** | 8 canned ids plus derived `cert-*` and `first-*` families (`app/lib/statCards.ts:52-148`, `192-233`) |
| **Downloadable stat card, story** | same route, `ratio=story` | **1080×1920** | same |
| **(branch)** On this day index OG | `app/on-this-day/opengraph-image.tsx` | 1200×630 | bespoke, timeline pattern |
| **(branch)** On this day per-day OG | `app/on-this-day/[day]/opengraph-image.tsx` | 1200×630 | bespoke, timeline pattern |
| **(branch)** On this day post card, **portrait 4:5** | `GET /on-this-day/<day>/card` → `statCardImage(dayCard(day), "portrait")` | **1080×1350** | one per dated day |

- **Sizes.** The canvas constants are `size = { width: 1200, height: 630 }` (`app/lib/og-image.tsx:6`, repeated in each bespoke file) and `CARD_SIZES` (`app/lib/cardSizes.ts:11-14`). The branch adds `portrait: { width: 1080, height: 1350 }`, commented "4:5 — the tallest a feed post runs on Instagram and X without a crop".
- **Twitter card type.** `summary_large_image` is set in `app/layout.tsx:95-96` and `app/lib/seo.ts:82-83`.
- **One card per route.** A new route needs its **own** `opengraph-image.tsx`, because the OG image does not cascade. The route checklist is guarded by `tests/routeChecklist.test.ts`. **(owner)** The same checklist also requires a sitemap entry, a breadcrumb label, links and a `searchIndex.ts` entry.

### 2.2 The engine sets the rules (next/og → satori → resvg)

Every image on the site is drawn by `next/og` (next 16.3.4). A design that assumes browser CSS will not survive the renderer. Each constraint below is recorded in the code:

- **Flexbox only.** Every node carries `display: "flex"`.
- **No `ch` unit.** "a `maxWidth: \"22ch\"` silently collapses to almost nothing" (`app/lib/statCardImage.tsx:30-32`). Widths are set in px.
- **No `mask-image` or `filter`.** Fades are drawn as real gradient scrims laid over the photo (`app/lib/statCardImage.tsx:80-83`).
- **`background-clip: text` works.** It is used for STATS in the lockup and for the stat-card figure (`app/lib/og-lockup.tsx:117-126`, `app/lib/statCardImage.tsx:243-246`).
- **Emoji flags are fetched from jsDelivr (twemoji) at render time.** If that fetch fails, the whole render fails. The charts card renders to bytes and falls back to flagless (`app/afrobeats/[artist]/charts/opengraph-image.tsx:25-49`), and `tests/ogEmojiFallback.test.ts` guards it.
- **Only Regular weights are loaded, so nothing renders bold.** The font list holds one file per family, all at weight 400 (`app/lib/og-lockup.tsx:46-50`). The stat card passes no `fonts` at all, so it gets next/og's default, which is Geist 400 only (`node_modules/next/dist/compiled/@vercel/og/index.node.js:21444-21451`). Every `fontWeight: 800` or `700` in card code therefore renders as **Geist Regular**. The live PNGs in `ref/` confirm it: titles, figures and labels are all regular-weight Geist. **Draw the cards in Geist Regular. A bold mock-up will not match the output.**
- **`fontFamily: "sans-serif"` falls back to the first font in the list,** so Geist must stay first or every card resets into Anton (`app/lib/og-lockup.tsx:30-45`; `tests/ogLockup.test.ts:69-98`).
- **Word gaps render unevenly.** "Satori renders a comma-plus-space in this weight noticeably wider than a plain word gap, which read as a double space" (`app/afrobeats/opengraph-image.tsx:119-124`). The live renders show it in other places too: "certifications␣␣& records" on the /updates card and "CERTIFICATIONS␣␣ACROSS" on the stat card.
- **Remote `<img>` works;** the Spotify CDN is used for covers and portraits. Local files must be inlined as data URIs, with the MIME type derived rather than typed. A hardcoded MIME once 500'd all fifteen car cards (`app/records/cars/[car]/opengraph-image.tsx:40-45`).

### 2.3 Fonts in images

| Family | File | Weight | Used for |
|---|---|---|---|
| `geist` | `public/fonts/Geist-Regular.ttf` | 400 | **All card text** (via `sans-serif`) |
| `Anton` | `public/fonts/Anton-Regular.ttf` | 400 | **Only** the lockup's `BURNABOY STATS` |
| `Space Mono` | `public/fonts/SpaceMono-Regular.ttf` | 400 | **Only** the lockup's tagline |

The font list is declared at `app/lib/og-lockup.tsx:46-50`, and `tests/ogLockup.test.ts:77-98` checks the files are present.

**Share cards do not use Anton or Space Mono for content.** Titles, figures, kickers and footers are all Geist Regular, set in caps with wide tracking where the page would use Space Mono. That is the opposite of the page, where figures are Anton and labels are Space Mono. Any change to this is a card redesign, which the owner has refused once already (§2.12).

### 2.4 The lockup

**What it is.** The horizontal lockup from `docs/design/LOGO.md`, which has three parts:
1. **The crown mark**: five chart bars on a base rule with a green dot as the jewel, `viewBox 0 0 84 74`. The bars are at x 7·22·37·52·67, 11 wide, rx 5.5, heights 33·22·43·22·33 on y 58. The base is x 7, y 64, w 71, h 6.5. The dot is at 42/8 r 4 (`docs/design/LOGO.md:10-18`).
2. **`BURNABOY` + `STATS`** in Anton.
3. **`THE NUMBERS, VERIFIED`** in Space Mono.

Satori cannot use the SVG file, because resvg gets no fonts and would drop both lines of type. So `app/lib/og-lockup.tsx` rebuilds the lockup: the crown as an SVG data URI, the words as real text (`app/lib/og-lockup.tsx:4-26`; `docs/design/LOGO.md:45`).

**Size.** It is always **44px tall** (`OG_LOCKUP_HEIGHT = 44`, `app/lib/og-lockup.tsx:76`). Every coordinate is the lockup's own 520×96 box scaled by k = 44/96 = 0.4583 (`app/lib/og-lockup.tsx:79`):

| Part | Code | At 44px |
|---|---|---|
| Whole lockup | `520·k × h` | **238.3 × 44px** |
| Crown image | `84k × 74k` at `(1k, 6k)` | 38.5 × 33.9px at (0.5, 2.75) |
| Crown gradient | vertical `#ffb627 → #ff7a1a` | bars and base |
| Dot | `#3ed17f`, r 4 in the 84-unit box | ≈1.8px radius |
| Wordmark start | `left: 112k` | x = 51.3px |
| `BURNABOY` | Anton `52k`, tracking `0.5k`, `#f5f4f0`, lh 1 | 23.8px |
| `STATS` | same size, `linear-gradient(180deg,#ffb627,#ff7a1a)` clipped to text | 23.8px |
| Tagline | Space Mono `12k`, tracking `6.2k`, `#9b9ba3`, `marginTop 7k` | **5.5px**, tracking 2.8px, 3.2px below |

Line references: `app/lib/og-lockup.tsx:59-71` (crown SVG) and `:78-146` (layout).

**Where it sits.** It is absolutely positioned, so it never pushes the layout.

| Card family | Position | Source |
|---|---|---|
| Template cards (`ogImage`) | **top-left**, `top: 46, left: 90`, aligned with the 90px text column | `app/lib/og-image.tsx:29-31` |
| Root card `/` | top-left, `top: 46, left: 64` | `app/opengraph-image.tsx:27-29` |
| Bespoke cards whose top-left holds a kicker (timeline, dai-dai, song, album, artist, charts, live, cars, and on the branch both On This Day cards) | **top-right**, `top: 56, right: 64`, occupying x ≈ 897.7–1136, y 56–100 | e.g. `app/timeline/opengraph-image.tsx:54-60` |
| Board `/afrobeats` | top-right, `top: 44, right: 56` | `app/afrobeats/opengraph-image.tsx:73-75` |
| Downloadable stat cards (square, story, branch portrait) | **no lockup.** A text brand row, `BURNABOY` + gold `STATS` in Geist | `app/lib/statCardImage.tsx:210-215` |

The comment on every corner-mark card says the mark "takes the facing corner rather than displacing it — same 44px height, same clear space".

**Clear space.** LOGO.md asks for "one bar width (11 units) on every side" (`docs/design/LOGO.md:20`), about 5px at 44px. On the corner-mark cards, any kicker that shares the lockup's line is capped at **`maxWidth: 780`**. The reasoning is "(1072 box - 238 mark - clear space)" (`app/timeline/opengraph-image.tsx:73-76`). `tests/ogLockup.test.ts:208-240` fails any corner-mark card without the cap. With the kicker starting at x 64, the cap ends it at x 844, which leaves 54px before the mark.

**LOGO.md rules that apply to any new card** (`docs/design/LOGO.md:54-60`):
1. The dot is the only green, and STATS is the only gradient text. The test enforces this inside the lockup only (`tests/ogLockup.test.ts:154-158`); the stat-card figure is a gradient too.
2. Keep one bar width of clear space.
3. Never stretch, rotate, outline or drop-shadow the mark.
4. Never place the bare mark on a light ground; use the tile.
5. Never animate the bars.

### 2.5 Canvas, margins and layout families (1200×630)

**The code sets no platform-crop safe zone.** The only margins are the paddings below.

**A. Template** (`ogImage`, `app/lib/og-image.tsx:9-48`). The /updates and /share cards use it.
- Column: `justifyContent: center`, `padding: "0 90px"`, so text runs x 90–1110.
- Kicker: 28px, tracking 8, `#ffb627`, uppercase.
- Title: 108px, lh 1, tracking −3, `#f5f4f0`, 14px below the kicker.
- Sub (optional): 34px, `#9b9ba3`, 26px below, maxWidth 900.
- Footer: absolute at `bottom: 50, left: 90`, 26px, tracking 5, `#9b9ba3`, the fixed text `BURNABOYSTATS.COM` with no path.

**B. Bespoke stat card** (the pattern the branch's On This Day OG cards copy). Examples: `app/timeline/opengraph-image.tsx:38-117`, `app/dai-dai/opengraph-image.tsx:26-180`, `app/music/[song]/opengraph-image.tsx:64-154`.
- Frame: `padding: 64`, `justifyContent: space-between`, so kicker, main block and footer are pinned top, middle and bottom.
- Kicker: 26px, tracking 6, `#ffb627`, uppercase, **maxWidth 780**.
- Title: `#ffb627`, lh 1, tracking −3 (−4 on Dai Dai). Sizes: timeline 110, Dai Dai 126, song 104, album 96, artist 96, charts 92, live 88; **(branch)** On This Day index 110, per-day 120.
- Sub: 28–30px `#c9c9d0`, lh 1.3, 16–18px below, maxWidth 640–900.
- Figure tiles:
  - row gap 14–16, 26–34px below the sub
  - tile: padding `16px 22px` (varies 15/20 to 16/24), bg `#141416`, border `1px solid rgba(245,244,240,0.12)`, **radius 12**, minWidth 128–150
  - figure 44–48px `#ffb627`, lh 1
  - label 17–19px `#9b9ba3`, uppercase, tracking 1, 9px below
- Media variant: a 300×300 cover (280 for artists) with radius 18, border `2px solid rgba(245,244,240,0.16)`, and a 46–50px gap to the text column (`app/dai-dai/opengraph-image.tsx:81-91`).
- Footer: `cardUrl(path)` at 26px, tracking 4, `#9b9ba3`. The Dai Dai card adds an outlined pill on the right: 22px gold, tracking 2, 1px gold border, 999px, padding `10px 20px` (`app/dai-dai/opengraph-image.tsx:156-175`).

**C. Board** (`app/afrobeats/opengraph-image.tsx`):
- Frame: padding `50px 56px`.
- Five 200×200 faces with radius 16, gap 22, fixed widths.
- Name 27px, figure 40px gold, "PLAQUES" 17px.
- Footer: 21px.

**D. Cars** (`app/records/cars/[car]/opengraph-image.tsx:79-112`):
- Left column 560 wide with padding `56px 0 50px 64px`.
- A 600×441 artwork box at `right: 40, top: 95`.

**E. Root** (`app/opengraph-image.tsx`):
- Everything centred.
- "BURNA" 140px plus gold "BOY".
- "STATS" 44px, tracking 16, `#9b9ba3`.
- Sub 30px.

### 2.6 Background treatment

- **Ground.** Flat `#0a0a0b` (= dark `--bg`) on every OG card (`app/lib/og-image.tsx:21`; each bespoke file).
- **Glow.** Bespoke cards add one soft gold pool in the top-right corner: a 560×560 box at `top: -180, right: -140` filled with `radial-gradient(circle, rgba(255,182,39,0.22), rgba(255,182,39,0) 70%)` (e.g. `app/timeline/opengraph-image.tsx:61-71`). The charts card uses 0.20.
  - **Exceptions:** the live card's pool is **green**, `rgba(62,209,127,0.20)` (`app/afrobeats/[artist]/live/opengraph-image.tsx:92-97`). The board has two gold pools, top-left 0.20 and bottom-right 0.13 (`app/afrobeats/opengraph-image.tsx:78-99`). The car card has a warm ellipse, `rgba(224,138,46,0.22)` (`app/records/cars/[car]/opengraph-image.tsx:68-76`).
  - The template card and the root card have **no glow**.
- **Photos.** On OG cards they appear only as bordered, rounded tiles. None is full-bleed.
- **Stat-card face.** A warm near-black gradient `linear-gradient(155deg, #1A1410 0%, #0C0A09 55%, #140F0A 100%)` (`app/lib/statCardImage.tsx:23`) is layered with:
  - a 2px frame `rgba(255,182,39,0.28)`
  - a gold wash `radial-gradient(120% 80% at 100% 0%, rgba(255,182,39,0.22), … 0) 60%)`
  - a full-bleed right-hand portrait, dissolved by four scrims
  - a base wash `linear-gradient(0deg, #0C0A09 8%, rgba(12,10,9,0.6) 34%, rgba(12,10,9,0) 66%)`
  - a ghosted watermark word
  
  Source: `app/lib/statCardImage.tsx:55-208`.

### 2.7 Colour on share images

Satori cannot read CSS variables, so every colour in a card is a **literal**. The literals match the **dark** theme tokens, because share images never go light (`app/globals.css:14-19`).

| Literal | Role on cards | Page token it matches |
|---|---|---|
| `#0a0a0b` | Ground | `--bg` dark |
| `#f5f4f0` | Primary ink, lockup `BURNABOY` | `--text` dark |
| `#ffb627` | Kickers, titles, figures, pills, glow | `--gold` dark |
| `#9b9ba3` | Labels, footers, sub (template), tagline | `--text-muted` dark |
| `#c9c9d0` | Sub line on bespoke cards | *(no token; card-only literal)* |
| `#141416` | Figure tile | `--bg-soft` dark |
| `rgba(245,244,240,0.12)` | Tile border | `--line` dark |
| `#3ed17f` | Crown dot; live card accent | `--green` dark |
| `#8fe3f0` | Top-10 peaks on the charts card | `--cyan` dark |
| `#ffd24a → #ffb627 → #f5890b` | Stat-card figure gradient | *(card-only ramp, `statCardImage.tsx:24`)* |
| `#CFC7BB` / `#8A8279` / `#6B655D` | Stat-card kicker / source / date | `--text-body` dark / `--text-dim-warm` dark / *(no token)* |

**(owner) Link-preview cards stay gold for every artist.** Ayra Starr's Starrgirl purple is page-only. On 22 Aug 2026 the owner asked for her preview cards in purple, then stopped it before the push and chose to drop the idea entirely. Do not propose a per-artist accent for share cards. Nothing in the repo records this decision, because the revert left no trace; the owner's notes are the only record. The one non-gold accent that shipped is the **green** on the `/live` card, which marks live data.

**Data-meaning colours keep their meaning on cards too.** Examples: cyan for a top-10 peak and gold for a No. 1 on the charts card (`app/afrobeats/[artist]/charts/opengraph-image.tsx:130-135`), and green for live. A No. 1 chip is a gold 18% wash with gold text: `rgba(255,182,39,0.18)` (`:133`).

### 2.8 How figures and dates are set on images

- **Figures** are gold `#ffb627` on OG cards, 44–48px inside tiles. On the stat card the figure is a gold gradient clipped to text (`app/lib/statCardImage.tsx:236-250`).
- **"No. 1" always has the space.** The cards printed "No.1" until 25 Sep 2026. The correction is recorded at `app/dai-dai/ogId.ts:27-35` and `app/music/[song]/opengraph-image.tsx:24-26`. Other peaks print as `#<n>`.
- **Thousands separators** come from `toLocaleString("en-US")`, giving "1,238 plaques" (`app/afrobeats/opengraph-image.tsx:188`, and the fix note at `:30-33`).
- **Figures come from data, never typed.** Values are derived, e.g. `app/timeline/opengraph-image.tsx:31-36` and `app/lib/statCards.ts:13-19`. The comment at `app/lib/statCards.ts:13-14` records that "$30.46M", "$6.15M" and "58,973" were once typed four times over.
- **Stat-card figure size steps down with length** (`app/lib/statCardImage.tsx:46-51`). The base is 210 (square) or 260 (story). Up to 3 characters print at 100%, 4 at 86%, 5 at 76%, 6–7 at 62%, and 8 or more at 52%. That gives 210 / 180.6 / 159.6 / 130.2 / 109.2 on the square card.
- **Dates on OG cards** are set as text inside other lines:
  - a pill: "Performed · World Cup Final · 19 July" (`app/dai-dai/ogId.ts:40`)
  - a kicker: "Burna Boy · Est. 2010" (`app/timeline/opengraph-image.tsx:77`)
  - a song kicker that ends in the year (`app/music/[song]/opengraph-image.tsx:103`)
- **Dates on the stat card** print as ISO: "As of {lastUpdated}", uppercase, 21/24px, `#6B655D`, under the source line (`app/lib/statCardImage.tsx:283-306`). `lastUpdated` is the newest `updates.ts` date (`app/lib/api.ts:21`). The live card reads **"AS OF 2026-09-25"**. The comment explains why the date matters: "a card outlives the figure printed on it."
- **The address line** is `cardUrl(path)`: `BURNABOYSTATS.COM` in caps followed by the **path in lowercase**, e.g. `BURNABOYSTATS.COM/timeline` (`app/lib/og-image.tsx:50-77`). Paths are case-sensitive, and seven cards once printed a dead uppercase path. `tests/ogFooterCase.test.ts` guards this. **Never set a path in caps in a mock-up.**
- **Date spelling on the pages** (for the page side of the feature):

  | Format | Output | Source |
  |---|---|---|
  | en-GB long | "23 September 2026" | `app/updates/page.tsx:25-30`, `app/components/LiveBand.tsx:56-62` |
  | en-GB short day + month | **"23 Sept"** (current ICU prints "Sept", not "Sep"; checked in Node 24 / ICU 78.3) | `app/components/MobileUpdates.tsx:31-35` |
  | Home "Verified" | "25 Sept 2026" | `app/page.tsx:43-45` |
  | History made kicker, typed by hand | "19 July 2026" desktop, "19 Jul 2026" phone | `app/page.tsx:161`, `app/components/MobileHome.tsx:326` |

### 2.9 The downloadable stat card, square and story (`app/lib/statCardImage.tsx`)

This is the site's only existing tall format, and the renderer the branch's 4:5 On This Day post card reuses.

| | Square 1080×1080 | Story 1080×1920 | Line |
|---|---|---|---|
| Padding (safe margin) | **84** | **96** | `:29` |
| Frame | 2px `rgba(255,182,39,0.28)` | same | `:66` |
| Portrait width (`BURNA_PORTRAIT`, Spotify) | 50% = 540, full height | 62% = 670, height 56% = 1075, top-anchored, melted out over 240px | `:37-43`, `:146-159` |
| Portrait | `objectFit: cover`, `objectPosition: center top`, opacity 0.9 | same | `:86-101` |
| Text width (`textW`) | 669 | 787.5 | `:44` |
| Brand row | Geist 38, tracking 1, `BURNABOY` + gold `STATS` | 44 | `:211-215` |
| Chip (top-right) | 23px, tracking 3, uppercase, gold, 2px `rgba(255,182,39,.5)`, 999px, padding `10px 24px` | 26px | `:216-231` |
| Figure | base 210, lh 0.82, tracking −4, gradient | base 260 | `:49`, `:236-250` |
| Label | uppercase, lh 1.08; 52 / 44 / 38 by length (≤42 / ≤64 / longer); 30 below the figure | 62 / 52 / 44; 40 below | `:251-270` |
| Rule | 2px `rgba(255,182,39,0.35)`, margin 34 | margin 44 | `:271-278` |
| Kicker (bottom-left) | 27px, lh 1.5, `#CFC7BB`, maxWidth `textW·0.72` = 482 | 32px, max 567 | `:280-282` |
| Source + date (bottom-right) | 21px, tracking 2, uppercase, `#8A8279`; date `#6B655D` 6px below | 24px | `:289-306` |
| Provenance stamp | centred, `bottom: 28`, 21px, tracking 3, `#8a8279`, "burnaboystats.com" (uppercase) | `bottom: 34`, 23px | `:175-191` |
| Watermark word | 360px, `rgba(255,182,39,0.05)`, bleeding off the bottom-right | 460px | `:193-208` |
| Cache | `public, max-age=600, s-maxage=3600, stale-while-revalidate=86400` | same | `:316-318` |

**Layout, top to bottom.** The brand row with its chip sits across the top. The figure block is pinned to the base with `marginTop: auto`: figure, then label, then rule, then the kicker on the left beside source and date on the right. The stamp sits in the bottom padding. The portrait fills the right side.

**Observed on the live PNGs.** There is a visible vertical tone step where the portrait's solid scrim begins. On the square card it falls at x ≈ 430: at y = 60 the pixel at x 425 is `(22,17,14)` and at x 430 it is `(12,10,9)`. On the story card it falls at x ≈ 275. It comes from the scrim `right: photoW·0.55, width: photoW·0.65` (`:105-116`), whose solid `#0C0A09` sits beside the lighter face gradient and gold wash. A tall format drawn over this renderer inherits the step unless the scrim changes.

**(branch) Portrait 4:5, 1080×1350.** It is drawn by the same function. `tall` stays story-only, so portrait takes the **square's** padding (84), type sizes and 540px portrait width. The photo box is capped at 1080 tall (`Math.min(size.height, size.width)`). It melts out 240px above its own bottom edge, and a solid `#0C0A09` fill carries the colour from y = 1080 down to the base (branch `app/lib/statCardImage.tsx`, +30 lines). The card is served at `/on-this-day/<day>/card` (branch `app/on-this-day/[day]/card/route.ts:4-14`). The branch comment says the stat-card builders do not offer the 4:5 option.

**How the site presents and saves a card:**
- **Desktop maker** (`/share`, `app/components/StatCardMaker.tsx`):
  - The preview is an `<img>` of the real PNG in a stage with 26px padding, `--bg-soft-2`, 1px `--line` (`StatCardMaker.module.css:79-86`).
  - Preview widths: square max 460px, story max 300px (`:96-97`). At ≤900 they are 340 and 220 (`:249-250`).
  - A pill ratio toggle whose active segment uses the gold ramp (`:51-77`).
  - "↓ Download PNG" is a 48px gold-ramp pill; "Post on X ↗" and "WhatsApp ↗" are secondaries (`StatCardMaker.tsx:203-228`).
  - The filename is `burna-boy-<id>-<ratio>.png` (`:108`).
- **Phone screen** (`app/components/MobileStatCards.tsx`): story is the default ratio (`:54`). The preview has radius 14 (`mobileStatCards.module.css:122-131`). The button reads "Save or share ↓" when the device can share files, otherwise "Download PNG ↓" (`:79-80`).
- **Saving** goes through `app/lib/saveCard.ts:50-103`: the native share sheet first, then an anchor download, then opening the image in a new tab.
- **Per-row share icon.** `StatCardButton` opens a dialog that previews the real card, defaulting to square (`app/components/StatCardButton.tsx:46`).
- **The route is id-only,** "so nobody can mint an official-looking card with arbitrary text via URL params" (`app/lib/statCards.ts:150-162`).

### 2.10 Versioning: what a design change costs

- Each card's URL carries `ogId(<every string the card prints>)`, salted with **`OG_ART = "lockup-1"`** (`app/lib/og-image.tsx:92`, `119-124`). A **data** change moves that card's id by itself.
- A **drawing** change with the same words needs `OG_ART` bumped, or every scraper keeps the old picture. Bumping it re-versions every card at once (`app/lib/og-image.tsx:79-92`).
- The template cards version through `ogVersions()` (`:126-133`). The unversioned root URL is cited as `ROOT_OG_IMAGE` (`:105`).
- **(owner)** On 8 Sep 2026 the owner shipped the lockup on the cards and **rejected the follow-on redesign**: dropping the tagline, swapping the footer for the page path, and enlarging the crown's dot. He asked for the cards back exactly as they were with only the logo added. On existing cards, the tagline, the footer and the dot size are settled.

### 2.11 Guards a new card must pass

| Test | What it holds |
|---|---|
| `tests/ogLockup.test.ts` | Every card draws the lockup, or uses `ogImage`. Every bespoke card passes `ogFonts`, with Geist first. `OG_ART` is folded into ids. Crown geometry and the green dot are exact. **A corner mark requires the `maxWidth: 780` kicker cap.** |
| `tests/ogFooterCase.test.ts` | Addresses go through `cardUrl`, with the path in lowercase, and no card types a path into its JSX |
| `tests/ogEmojiFallback.test.ts` | A flagged card still renders when the emoji CDN is down |
| `tests/sharePreviewGate.test.tsx` | Each /share layout fetches only its own preview (`<picture><source media>` gating) |
| `tests/daiDaiOgImage.test.ts` | The Dai Dai card |
| `tests/routeChecklist.test.ts` | A new route has its own OG image, sitemap entry, breadcrumb and search entry |

### 2.12 Summary rules for the On This Day images

These are restatements of the code and the owner's decisions, not proposals.
- **Link preview:** 1200×630, `#0a0a0b` ground, Geist Regular for everything but the lockup, gold `#ffb627` for accents. A dated card with a kicker belongs to the **bespoke family**: padding 64, lockup top-right at 56/64 and 44px tall, kicker capped at 780, one top-right gold pool, tiles at radius 12, lowercase path in the footer.
- **Post card:** the stat-card renderer. Square and story exist on main; 4:5 is branch-only. No crown lockup, the text brand row instead. Padding 84 (96 on story). Source and ISO read-date bottom-right. Stamp centred at the base.
- **Always:** gold for every artist, "No. 1" with a space, figures from data, and no bold.

---

## 3. Where the On This Day card sits: list and neighbour anatomy

### 3.1 The Latest Updates list, desktop (`/updates` → `app/components/UpdatesFeed.tsx`, styles in `app/updates/updates.module.css`)

| Part | Spec | Line |
|---|---|---|
| Container | `.wide`: max **1360**, padding `0 40px` | `:13` |
| Filter band | Full-width `--bg-soft` band, 1px `--line` bottom. Padding `22px 40px`, wrap, gap 10. "FILTER" label in Space Mono 11px, 0.12em, muted | `:12`, `:110-118` |
| Filter chip | Min-height **40**, padding `0 16px`, 999px, 1px `--border`, transparent, `--text-muted`, **Geist 600 13px**. Hover → gold border and text. On-state takes the category's ink as border and text (inline style). 8px dot, count in Space Mono 11px | `:119-137`; `UpdatesFeed.tsx:60-87` |
| Entry count | Right-aligned, Space Mono 11.5px, 0.08em, uppercase, muted ("N entries") | `:138-145` |
| Feed band | Padding `10px 40px 40px` | `:148` |
| Month group | 30px above each group | `:149` |
| Month head | Flex baseline, gap 14, padding-bottom 10, 1px `--line` under it. Title in **Anton 26 / 1.05**, 0.01em, uppercase ("SEPTEMBER 2026"). Count in Space Mono 12px muted ("12 entries") | `:150-166` |
| **Row** | The whole row is a link. Grid **`190px 150px 1fr auto`**, gap **24**, align centre, padding **`16px 8px`**, 1px `--line` bottom. **Hover `--bg-raised`**, background transition `--dur-fast` (0.15s) | `:167-177`; `UpdatesFeed.tsx:106-118` |
| Date | Geist, tabular, **13.5px** (`--type-small`), 0.04em, muted, nowrap, e.g. "23 September 2026" | `:178-185`; `UpdatesFeed.tsx:24-29` |
| Category tag | **Outlined** pill in the category's ink: padding `4px 11px`, 999px, 1px border, Space Mono 700 11px, 0.1em, uppercase, 6px dot. "A filled gold pill would read as an award" | `:186-203` |
| Text | 15.5px / 1.5, `--text` | `:204` |
| Arrow | "↗" in gold, 16px | `:205` |
| ≤1239 | Row becomes `150px 1fr auto`: **the date column is dropped**, since the month heading already says it | `:212-221` |

**Category inks** (`app/lib/updateInk.ts:12-24`), all theme-aware tokens:

| Category | Token | Light | Dark |
|---|---|---|---|
| Certifications | `--gold` | `#945e00` | `#ffb627` |
| Charts | `--cyan` | `#0b6e7e` | `#8fe3f0` |
| Firsts & Records | `--ember` | `#b34700` | `#ff7a1a` |
| Awards | `--silver` | `#6b6b74` | `#dfe2e8` |
| Tours | `--green` | `#146b3c` | `#3ed17f` |
| Streaming | `--tier-silver-ink` | `#6b6b74` | `#848F9E` |
| Lifestyle | `--text-muted` | `#5f584f` | `#9b9ba3` |

The hex values come from the Dai Dai extract §3. The categories are defined in `app/data/updates.ts:35`.

**Page context.** The hero eyebrow carries a **green** 22×2 tick (`:34`). The h1 is Anton 96 / 0.88, 70 at ≤1239 (`:35-43`, `:213`). "Last entry" is a 12.5px caption beside a pulsing 8px green dot (`:52-78`).

### 3.2 The Latest Updates list, phone (`app/components/MobileUpdates.tsx`, `app/components/mobileUpdates.module.css`)

| Part | Spec | Line |
|---|---|---|
| Rail | Horizontal scroll, gap 8, padding `4px 18px 16px`, 1px `--line` on top | `:135-142` |
| Chip | Min-height **44**, padding `0 16px`, 999px, 1px `--line`, Space Mono 700 11px, 0.1em, uppercase, 7px dot. Label "All 338" / "Charts 97" | `:143-162`; `.tsx:124-149` |
| Count | "N entries": Space Mono 11px, 0.1em, uppercase, `--dim`, padding `14px 18px 0` | `:191-199` |
| List | 1px `--line` on top | `:165` |
| **Row** | Block link, padding **`14px 18px`**, 1px `--line` bottom. **No hover rule, no arrow** | `:166` |
| Row top | Flex centre, gap 10: **tag left, date right** (`margin-left: auto`) | `:167`, `:182-188` |
| Tag | Outlined, padding `3px 9px`, 999px, Space Mono 700 11px, **0.08em**, 5px dot | `:168-181` |
| Date | Geist, tabular, **12.5px** (`--type-caption`), muted, e.g. "23 Sept" | `:182-188`; `.tsx:31-35` |
| Text | **14.5px / 1.45**, 9px below the top line | `:189` |
| Digest band | After the third entry | `.tsx:156-164` |
| Tail | 96px spacer clears the five-tab bar | `:201` |

**Chrome.** A sticky back bar with 44px circle back button, "UPDATES" in Space Mono 700 11px, then "RSS ↗" or a gold "SUBSCRIBE", then the hamburger (`:20-85`). The kicker is **green** (`:89-96`). The title is Anton 52 / 0.88 with a gold-ramp word (`:97-120`).

### 3.3 The actual neighbour on the home page: History made (main)

**Desktop** (`app/page.tsx:157-174`; `app/page.module.css:325-391`).

The running order is: LiveBand → hero → scoreboard → **History made** → *(branch: On This Day band)* → certifications ledger.

| Part | Spec | Line |
|---|---|---|
| Band | `--bg-soft` surface, 1px `--line` bottom: "A dark surface band, not a gold one" | `:326-332` |
| Inner | max **1360**, padding **`34px 40px`** (`28px 32px 30px` at ≤1239), grid **`1fr 2fr`**, gap **48**, align centre | `:333-341`, `:785` |
| Kicker | Space Mono 700 **11.5px**, **0.18em**, uppercase, `--text-muted`: "History made · 19 July 2026". It was warm orange, and was changed so it no longer adds a third accent colour | `:342-351` |
| Title | Anton **32 / 1.05**, 0.01em, uppercase, 14px below the kicker | `:352-360` |
| Right column | Flex, gap 40, centre. Text 15px / 1.55, max 56ch, opacity 0.85. CTA "Read the story ↗" uses `.btnPrimary` but is **reset to an outlined secondary**, because "The screen already has its one gold action" | `:361-391` |

The section below is the ledger: 1360 wide, padding **`52px 40px 56px`**, kicker 11.5px 0.18em in `--color-accent-700` (= `--gold`, `app/globals.css:332`), h2 Anton 40 (`app/components/certLedger.module.css:3-32`).

**(branch)** The desktop band repeats History made's grid "one row down" (branch `app/components/onThisDayBand.module.css:1-15`):
- max 1360, padding `34px 40px`, `1fr 2fr`, gap 48, but `align-items: start`
- **no `--bg-soft` fill**, only the bottom hairline
- same kicker (11.5 / 0.18em muted) and title (Anton 32)
- rows are a `74px 1fr` grid with padding `14px 12px 14px 0`, hover `--bg-raised`, and the year in Anton 20 gold

**Phone** (`app/components/MobileHome.tsx:321-339`; `app/components/mobileHome.module.css:331-371`, `509-545`).

The running order ends: … album rail → GlobeTeaser → **History made** → *(branch: On This Day card, the last block on the screen)*.

| Part | Spec | Line |
|---|---|---|
| History block | Padding **`22px 18px 26px`**, `--bg-soft`, 1px `--line` **top** | `:510-514` |
| Kicker | `.sectionKicker`: Space Mono 700 **11px**, 0.11em, uppercase, **gold**: "History made · 19 Jul 2026" | `:340-348` |
| Title | Anton **26 / 1.05**, 10px below | `:515-523` |
| Text | 13.5 / 1.5, muted, margin `10px 0 14px` | `:524-529` |
| CTA | Min-height **44**, padding `0 18px`, 999px, **1px gold border, gold text**, Space Mono 700 11px, 0.12em | `:530-545` |
| Generic section rhythm | `.section` padding `26px 0 22px`. Head padding `0 18px`, flex-end, gap 12. Title Anton 26 / 1, 8px below the kicker. Right link "All ↗" in gold Space Mono 11px, 0.12em, 44px | `:332-371` |

On the phone, the page reserves `padding-bottom: calc(64px + max(30px, safe-area))` for the five-tab bar (`app/globals.css:1871-1874`).

**Kicker difference to note.** On desktop the home kickers are muted Space Mono 11.5 / 0.18em. On the phone the same kickers are **gold** Space Mono 11 / 0.11em. Match the layout the card is in.

---

## 4. Reference files

`~/burnaboy-work/otd-handoff/ref/` holds PNGs fetched from burnaboystats.com on 26 Sep 2026. robots.txt was read first, and the User-Agent was "burnaboystats.com (+https://burnaboystats.com/contact)".

| File | What it shows |
|---|---|
| `og-template-updates-1200x630.png` | The template card: lockup top-left, centred column |
| `og-bespoke-timeline-1200x630.png` | The bespoke dated card: lockup top-right, gold pool, figure tiles, lowercase path. This is the pattern the branch OTD OG cards follow |
| `og-bespoke-daidai-1200x630.png` | The bespoke card with a cover and a footer pill |
| `og-root-1200x630.png` | The root card |
| `statcard-square-1080.png`, `statcard-story-1080x1920.png` | The stat card: brand row, portrait, figure, "AS OF 2026-09-25", and the scrim step at x ≈ 430 / 275 |

All of them render every weight as Geist Regular (§2.2).
