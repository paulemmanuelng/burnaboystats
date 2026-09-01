# Handoff — Car collection: index page + per-car pages

**For:** Claude design → then the implementing engineer
**Routes:** `/records/cars` (rebuilt index) and `/records/cars/[car]` (new, 15 pages)
**Input:** 15 supplied page designs, one per car
**Status:** full build-out. The page design *is* the deliverable this time.

---

## 0. What this supersedes

Two documents in this folder now conflict with the direction below. Read this
section before you read them.

| document | standing |
|---|---|
| `car-artwork-process.md` | **Superseded on artwork and on scope.** It mandates flat SVG illustrations, ≤300 paths, one car at a time, and says in as many words *"Don't design the page."* The supplied designs are photoreal renders and the page layout is now the job. Its **fidelity principle survives** — see §5.4. |
| `car-01-chiron.md` | Historic. The Chiron's feature checklist is still the best written description of that car and is useful as a *verification* checklist against the supplied render. |
| `car-collection-brief.md` | Its §5b was already retired. Its description of the current page, the data shape and the mobile "deep page" grammar is still accurate and still applies. |

Nothing here asks for the supplied car designs to be altered. They are the
reference; the site is built to fit them.

---

## 1. Scope, as requested

1. A **collection index** where every car shows a **preview image** before you open it.
2. Tapping a car opens **the full per-car page**.
3. The per-car pages **match the supplied designs exactly** — the designs are not to be edited.
4. The **Gemini watermark** on a few of the car images is removed or covered.
5. A **full professional build-out**, not a mockup.
6. The **image and specification data layer is built out as part of this work** —
   `cars.ts` carries neither today (§6.2).
7. The frames are **fully accessible to whoever builds this**: committed to
   `docs/design/cars/`, originals untouched, with a manifest.

---

## 2. Asset manifest — the 15 designs

**Where they live:** all fifteen frames are committed to this repo at
**`docs/design/cars/`**, originals untouched, with their own
[`MANIFEST.md`](cars/MANIFEST.md). Nothing needs to be requested or re-sent —
clone the repo and they are there. Filenames are the originals as supplied and
**must stay that way**: this table and the manifest both cite them, and renaming
breaks the audit trail. Slugged asset names are derived only at export (§8.2).

All frames are ~1374×768. Widths vary by 1–2px between the two batches; normalise
on ingest.

| # | file | car | in `cars.ts` as |
|---|---|---|---|
| 1 | `IMG_1530.jpeg` | Bugatti Chiron | Bugatti Chiron (Venuum Widebody) |
| 2 | `IMG_1531.jpeg` | McLaren Senna | McLaren Senna (MSO Carbon Edition) |
| 3 | `IMG_1529.jpeg` | Ferrari SF90 Spider | Ferrari SF90 Spider |
| 4 | `IMG_0104.png` ⚠ | Ferrari Purosangue | Ferrari Purosangue |
| 5 | `IMG_0106.png` ⚠ | Lamborghini Revuelto | Lamborghini Revuelto |
| 6 | `IMG_1532.jpeg` | Rolls-Royce Cullinan Black Badge | Rolls-Royce Cullinan Black Badge |
| 7 | `IMG_1534.jpeg` | Lamborghini Aventador SVJ Roadster | Lamborghini Aventador SVJ Roadster |
| 8 | `IMG_1533.jpeg` | Rolls-Royce Dawn | Rolls-Royce Dawn |
| 9 | `IMG_1538.jpeg` ⚠︎ | Ferrari 812 GTS | Ferrari 812 GTS |
| 10 | `IMG_1535.jpeg` | Porsche 911 GT3 RS | Porsche 911 GT3 RS (Weissach) — the frame's "(992)" is not shipped, §5.5 |
| 11 | `IMG_1539.jpeg` | Lamborghini Urus | Lamborghini Urus (Novitec Edition) |
| 12 | `IMG_0110.jpeg` | Mercedes-Maybach S680 4MATIC | Mercedes-Maybach S680 4MATIC |
| 13 | `IMG_0111.jpeg` ⚠ | Mercedes-Maybach GLS 600 | Mercedes-Maybach GLS 600 |
| 14 | `IMG_0112.jpeg` | Ferrari Testarossa | Ferrari Testarossa |
| 15 | `IMG_0113.jpeg` ⚠ | Ferrari 328 GTS | Ferrari 328 GTS |

⚠ = carries the Gemini watermark (§8.1). ⚠︎ = wordmark typo (§4).

**The set is a 1:1 cover of the fifteen `status: "current"` cars.** The five cars
with no design are exactly the two `sold` (Ferrari 458 Italia, 488 Spider) and
the three `unconfirmed` (Bentley Continental GT, Range Rover Autobiography,
Mercedes-AMG G63). That alignment is not a coincidence to design around — it is
the rule: **imagery belongs to the counted garage only.** §7.3 covers how the
other five appear without pretending to an image.

---

## 3. What the designs actually are

They are **concept frames**, not production comps. Every pixel of text in them is
rendered *into the image* by the generator, which is why several words are
misspelled. Treat them as: correct on **layout, hierarchy, palette, proportion
and mood**; unreliable on **every string and every number**.

The practical consequence governs the whole build:

> **Do not ship the frames as images with an HTML overlay.**
> Rebuild each page in code, using only the car itself from the frame.

Shipping the frames would bake in the typos permanently, put the specifications
beyond search, screen readers, translation and correction, break at every
viewport that isn't 16:9, and cost ~15 MB of hero imagery. Rebuilding in code
reproduces the design exactly *and* makes it a real page. §8 covers extracting
the car.

---

## 4. Mockup defects — do not reproduce

Faithfulness to the design means faithfulness to its *design*, not to its
generator's spelling.

| in the frames | ship instead |
|---|---|
| `MODEL VIEN` (on eight frames) | `3D MODEL` — or drop it, §5.3 |
| `PERFOKMANCE` | `PERFORMANCE` |
| `BUILD YONRS` | see §5.3 |
| `ORAG TO ROTATE` | see §5.3 |
| `HAROLING` | `HANDLING` |
| **`BURNADDYSTATS.COM`** on `IMG_1538` | `BURNABOYSTATS.COM` |
| `ESPECIFICACIONES` on frames 12–15 | `SPECIFICATIONS` |

Also inconsistent between the two batches: the subtitle. Frames `IMG_01xx` use a
single upper-case line (`V12 MASTERPIECE — FERRARI'S FIRST FOUR-DOOR`); frames
`IMG_153x` use two sentence-case lines (`Limited Edition` / `Sports Plug-in
hybrid`). **Pick the upper-case single line** — it matches the site's existing
kicker treatment — and write all fifteen to that pattern.

---

## 5. Where the design collides with what this site is

burnaboystats.com's entire value is that every number traces to the body that
owns it. Four elements of the design cannot ship as drawn. None of these require
editing the car designs; they are decisions about what the *page* asserts.

### 5.1 The performance bars are invented

Each frame carries SPEED / HANDLING / ACCELERATION / BRAKING as 0–10 bars. No
publisher issues those numbers; the generator made them up, and they differ
between frames for no reason. A 0–10 "handling" score is exactly the kind of
unsourceable figure this site refuses everywhere else.

**Recommended:** keep the bar *component* — it is the design's strongest visual
device — and drive it from figures that do exist, normalised across the fifteen
cars: power-to-weight, 0–100 km/h, top speed, and (as the fourth bar) price.
Label the panel `RELATIVE TO THIS GARAGE` and state the basis in a footnote. The
bars then mean something and stay honest. If that is rejected, drop the panel;
do not ship invented scores.

### 5.2 The dimension callouts are unverified

The orange floor ring carries millimetre callouts (`4,794 MM`, `2,018 MM`…).
Manufacturer dimensions are published and citable, so these *can* be real — but
the numbers in the frames are generated and several are wrong for the model
shown. Either populate them from the manufacturer's own spec sheet (cited, like
everything else) or render the ring **without** numerals as pure geometry. The
ring is a beautiful device; the digits are the liability.

### 5.3 Four controls promise features that don't exist

`3D MODEL`, `DRAG TO ROTATE`, `CUSTOMIZE`, and `BUILD YOURS` are lifted from
manufacturer configurator UI. There is no 3D model, nothing rotates, and
**`BUILD YOURS` on a fan site implies a commercial relationship with the
manufacturer that does not exist** — that one must go regardless.

**Recommended:** keep the *slot* each occupies so the composition survives, and
repoint them at things the site really has:

| design control | ships as |
|---|---|
| `3D MODEL` | **removed** — or `GALLERY`, if a gallery exists |
| `DRAG TO ROTATE` | removed |
| `CUSTOMIZE` | removed |
| `BUILD YOURS` → | **`SOURCE`** — the car's existing `link` / `linkLabel` (e.g. "Watch the reveal"), which is already the most valuable button on the page |
| the four empty `+` gallery tiles | either real additional angles, or removed — never empty placeholders |

That last swap is the single best change in this document: the design's most
prominent CTA becomes the site's verification link.

### 5.4 The renders must not read as photographs

`car-artwork-process.md` exists because a generic picture of a *model* is a
picture of a car he doesn't own. That principle outlives the artwork format.
Several supplied frames clearly depict **his actual car** — the Chiron render has
the baby-blue-over-black split, the tricolour centre stripe and the "7" roundel,
which is unmistakably his. Others are generic examples of the model in a colour
that may not be his.

Because these renders are photoreal, a visitor will read them as photographs of
his cars. So, without touching the images:

1. Every car image carries a visible caption: **`Illustration`** (and where it applies, `Illustration — depicts the actual vehicle`).
2. The `alt` text says the same in words.
3. Run `car-01-chiron.md`'s checklist against the Chiron render, and write the equivalent one-line check for the other fourteen, recording per car whether the render matches his known spec. Store the outcome as a field on the car (§6.2) and let the caption follow the data.

This costs nothing visually and keeps the page consistent with the rest of the
site.

### 5.5 The Porsche designation — resolved

The design frame reads **911 GT3 RS (992)**; `cars.ts` holds **911 GT3 RS
(Weissach)**.

> **Decided: the site's designation ships.** The car is
> **Porsche 911 GT3 RS (Weissach)** on the index, on the detail page, in the
> `<title>`, and in the OG image. The frame's "(992)" is a generated string like
> every other string in these mockups (§4) — it is not evidence, and it is not
> reproduced.

`cars.ts` needs no change. The rule this sets for the rest of the build: **where a
frame and the data disagree about a fact, the data wins and the frame's text is
treated as a defect.** The frames are authority on layout, never on content.

---

## 6. Architecture

### 6.1 Routes

Follow the house pattern already set by `app/music/[song]/`:

```
app/records/cars/
  page.tsx              ← index, rebuilt (§7)
  cars.module.css
  opengraph-image.tsx   ← exists
  [car]/
    page.tsx            ← new detail page (§8)
    car.module.css
    opengraph-image.tsx ← new, per car
```

- `export const dynamicParams = false` and `generateStaticParams()` over the 15 current slugs — anything else 404s, exactly as `[song]` does.
- Slug from make + model, kebab-cased: `bugatti-chiron`, `rolls-royce-cullinan-black-badge`, `porsche-911-gt3-rs`.
- `generateMetadata` per car via `pageMetadata` from `app/lib/seo.ts`.
- Sold and unconfirmed cars **get no detail route**.

### 6.2 Data — a designer deliverable, not a leftover

`cars.ts` today holds only `make, model, valueUsd, valueNaira, desc, link,
linkLabel, status`. There is **no image field and no specifications at all** —
the SPECIFICATIONS panel and the preview tiles have nothing behind them.

**Building that data layer is part of this handoff.** Do not treat it as
engineering cleanup to be picked up afterwards; the design cannot be implemented
without it, and the person who decides what a spec panel says is the person
designing the spec panel. Ship it with the design.

#### The shape to add

```ts
image: {
  hero: string;      // /cars/<slug>.avif      — extracted car, ~1600px
  preview: string;   // /cars/<slug>-tile.avif — index thumbnail, ~640px
  depicts: "actual" | "model";   // drives the caption — §5.4
};
specs: {
  engine: string;        // "6.5L naturally aspirated V12"
  power: string;         // "759 hp"
  zeroToHundred: string; // "2.5 s"
  topSpeed: string;      // "350 km/h"
  drivetrain: string;    // "AWD"
  weight: string;        // "1,772 kg (dry)"
  basis: "as built" | "base model";  // §6.3
  source: string;        // manufacturer spec page — REQUIRED
};
```

#### What to produce, per car

1. **Two images**, cut per §8.2 and exported to `public/cars/`.
2. **Six specifications**, read off the manufacturer's own spec sheet — not a
   blog, not a wiki, not an aggregator.
3. **The source URL** for those figures.
4. **The `depicts` verdict** — §5.4. A per-car determination has already been
   run and is tabulated in §5.6; use it, and re-check any car you have better
   evidence on.

#### Two rules that are not negotiable

**`specs.source` is required, not optional.** It makes it impossible to add a
specification without saying where it came from. Add a test asserting every car
with `specs` has a resolvable source, in the style of the existing data tests —
that way the rule survives the next person who edits this file.

**Units are written once and never mixed.** Pick metric-first with no imperial
second value; the site's audience is global and the manufacturers publish metric.
Power in `hp`, speed in `km/h`, weight in `kg`, acceleration in seconds to one
decimal. `font-variant-numeric: tabular-nums` on the panel so the digits align.

### 6.3 Where a car is a one-off

The Chiron widebody, the Novitec Urus and the MSO Senna are conversions. Nobody
has published measured figures for the converted cars, so the base model's
numbers are the only honest ones available.

Set `basis: "base model"` on those three and let the panel render a
`BASE MODEL` label in its header. The alternative — printing base-model figures
under a heading that implies the actual car was measured — is precisely the kind
of quiet elision this site exists not to do. The label costs one line and makes
the panel true.

---

## 7. The index page — `/records/cars`

Keep the page's existing spine (hero, by-marque tally, the ranked garage, "no
longer counted", the honesty note — all described in `car-collection-brief.md`).
The change is that **the garage becomes a grid of image tiles.**

### 7.1 The tile

Ranked most-expensive-first, as today. Each tile:

```
┌─────────────────────────────┐
│                             │   preview image, 16:10, dark ground
│         [ car ]             │   car centred, bleeding to the edges
│                             │
├─────────────────────────────┤
│ 01                          │   rank, mono, gold
│ BUGATTI                     │   make — small caps, muted
│ Chiron (Venuum Widebody)    │   model — display face, white
│ $6,190,000 · ₦9 billion     │   value — mono
└─────────────────────────────┘
```

- The **whole tile is one link** to the detail page. One link per card, not three — a make, a model and an image that each link separately is three tab stops and three screen-reader announcements for one destination.
- Hover/focus: the gold hairline border brightens and the image scales ~1.03 inside `overflow: hidden`. Nothing moves the layout. Wrap the transform in `@media (prefers-reduced-motion: no-preference)`.
- Focus ring visible against `--bg`, per the tokens in `globals.css`.
- The description paragraph does **not** appear on the tile — it moves to the detail page. The index becomes scannable, which is the point of adding images.

### 7.2 Grid

- Desktop ≥1100px: 3 columns. 700–1100px: 2. <700px: 1, full-bleed.
- `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))` with a `max-width` cap, so it degrades without breakpoint cliffs.
- Consistent aspect ratio on every tile via `aspect-ratio: 16 / 10` on the image box — the frames are all ~16:9, so a fixed ratio guarantees no ragged rows.

### 7.3 The five cars with no image

Sold and unconfirmed cars keep their existing text treatment in the **"No longer
counted"** section, below the grid, unchanged. Do not generate placeholder
imagery for them and do not give them empty tiles — the absence is honest and
the section already explains itself. A short line at the top of that section —
*"Not pictured: these cars are recorded but not counted."* — closes the loop for
anyone wondering why the images stop.

### 7.4 Mobile

`/records/cars` is on the shared "deep page" grammar (mobile screen 18), which
several sibling pages share. A single-column image grid **fits inside** that
grammar — it is still a list, just with pictures — so no breakout is needed and
no sibling page is affected. Keep the top back bar.

---

## 8. The per-car page — `/records/cars/[car]`

Reproduce the supplied composition in code. Reading the frame clockwise from top
left, with the honest source of each region:

| region | design | source of truth |
|---|---|---|
| top bar | `BURNABOYSTATS.COM` wordmark + nav | the site's real header component — do **not** rebuild a fake nav |
| headline | two lines: make (white) / model (gold) | `car.make` / `car.model` |
| subtitle | one upper-case line | new one-line field, or first clause of `desc` |
| hero | car on the orange dimension ring | extracted render (§8.2) + CSS/SVG ring |
| top right | SPECIFICATIONS panel | `car.specs` — §6.2 |
| bottom right | PERFORMANCE bars | derived, §5.1 |
| bottom left | COLOR PALETTE swatches | real livery colours, sampled from the render — decorative, no claim attached |
| bottom right CTA | `BUILD YOURS` | → `SOURCE`, `car.link` / `car.linkLabel` — §5.3 |
| bottom strip | four empty `+` tiles | removed unless real images exist |
| — | *not in the design* | **`car.desc`** and the **value** must appear on the page. They are the two things the site actually knows about this car and the frames omit both. Place `desc` below the hero and the value beside the headline. |

That last row is the one addition to the design, and it is not optional: a car
page on this site that omits the provenance paragraph and the price would be a
worse page than the one that exists today.

### 8.1 The Gemini watermark

Four frames — `IMG_0104.png`, `IMG_0106.png`, `IMG_0111.jpeg`, `IMG_0113.jpeg` —
carry Gemini's four-pointed sparkle in the lower right, just above the `BUILD
YOURS` panel. On the 1374×768 frames it sits inside a box of roughly
**x 1210–1310, y 598–688**, centred near **(1253, 641)**, about 40×40px of
semi-transparent light grey on flat near-black.

**It resolves itself under the recommended pipeline.** The preview crop (§8.2)
takes roughly x 20–80%, y 16–78% of the frame; the sparkle sits at x ≈ 91%,
y ≈ 83.5% — outside that window on both axes. Extract the car and the watermark
is never in a shipped asset.

If any full frame is ever shipped, the region is flat near-black with one faint
horizontal rule, so a patch is trivial: sample the row either side and fill, or
crop the frame's bottom 15%. Do not blur — a blurred smudge is more conspicuous
than the mark.

### 8.2 Extracting the car

The one real asset risk. Each car sits on a dark stage, and the site's own
background is `--bg: #0a0a0b` — the frames' corners sample `(4,9,12)` and
`(3,7,10)`, which is within a couple of levels of it.

**That near-match is the shortcut.** A generous rectangular crop of the car, laid
on the site's own background, reads as a cut-out with no matting at all. Try
that first, per car, and only reach for alpha matting on cars whose stage
gradient is visibly lighter than `--bg` at the crop edge. Feather the crop edge
2–3px if any seam shows.

Deliverables per car: `hero` at 1600px wide and `preview` at 640px wide, AVIF
with WebP fallback, in `public/cars/`.

### 8.3 Responsive

The design is a fixed 16:9 dashboard; the page must not be. Reflow:

- **≥1200px** — the design as drawn: hero centred, panels floated at the corners.
- **768–1200px** — hero full width; SPECIFICATIONS and PERFORMANCE drop beneath it as a two-column row.
- **<768px** — single column: headline → hero → value → `desc` → specs → performance → palette → source link. The corner panels become stacked cards. Keep the gold hairline rules; they carry the design's identity down to phone width better than the layout does.

Never letterbox the design to preserve its proportions on a phone.

---

## 9. Cross-cutting requirements

**New-route checklist** (this repo has been bitten by each of these):

- [ ] `opengraph-image.tsx` **inside** `[car]/` — OG images do not cascade from a parent route
- [ ] sitemap entries for all 15
- [ ] breadcrumb label for the new depth
- [ ] `app/lib/links.ts` — related-links entry
- [ ] `app/lib/searchIndex.ts` — one entry per car, so cars become searchable
- [ ] `app/lib/navGroups.ts` — the `{carCount} cars` meta still counts correctly

**Accessibility**

- Every car image needs `alt` naming the car and stating it is an illustration.
- The performance bars need accessible values, not just widths — `role="img"` with an `aria-label` carrying the number, or a visually-hidden table.
- Colour-palette swatches are decorative: `aria-hidden`.
- Check gold-on-near-black contrast against the notes already in `globals.css` — some tier golds are documented there as failing AA at small sizes.

**Performance**

- The index loads 15 preview images. First row `loading="eager"` with `fetchPriority="high"`, the rest lazy.
- Explicit `width`/`height` (or `aspect-ratio`) on every image — no layout shift.
- Budget: the index's images ≤ 400 KB total on first paint; a detail hero ≤ 120 KB.
- Note the known trap recorded for this repo: **a hidden eager `<img>` is still fetched** even when CSS hides it. If any two-layout treatment is used, gate the eager image behind `<source media>`.

**Content log**

This is a real content change, so it needs an entry in `app/data/updates.ts`
when it ships — describing the new car pages, not the engineering.

---

## 10. Decisions needed from Paul

1. **Performance bars** — derive from real figures (recommended), or drop the panel?
2. **Dimension callouts** — source real manufacturer dimensions, or render the ring without numerals (recommended)?
3. **`BUILD YOURS` → `SOURCE`** — confirmed? It must not stay as drawn.
4. **Gallery tiles** — are there more angles per car, or are the four `+` tiles removed?
5. **Caption wording** — `Illustration` on every car image: confirm the phrasing.

Items 1–3 block the build. 4 and 5 can be defaulted to the recommendation above
and revisited.

**Resolved since the first draft:** the Porsche designation (§5.5 — the site's
`(Weissach)` ships, the frame's `(992)` does not) and ownership of the image and
specification data (§6.2 — the designer builds it out with the design).
