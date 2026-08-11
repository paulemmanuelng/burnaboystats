# Design brief — Burna Boy Stats, Car Collection page

**For:** Claude design
**Route:** `/records/cars` (desktop) + its mobile screen
**Status:** the page exists and works. This is a visual redesign of an existing, data-complete page — not a new feature.

---

## 1. What this site is, in one paragraph

burnaboystats.com is a fan-built statistics reference for the Nigerian artist Burna Boy — certifications, chart runs, awards, tours, streaming records. Its entire value proposition is **verification**: every figure is traced to the body that owns it, estimates are labelled as estimates, and conflicting sources are disclosed rather than quietly resolved. The visual language is editorial and data-forward — heavy display type, gold on near-black, monospace labels, hairline rules. It should feel like a well-made almanac, not a fan blog.

The car page is the site's one "indulgent" page, and today it's the least visual page on the site: **twenty cars rendered as text and numbers, with no imagery at all.**

---

## 2. The brief in one line

Turn the car collection from a priced list into the page people screenshot — **without ever showing a car we can't prove he owns.**

---

## 3. What exists today

### Current page structure (desktop)

1. **Hero** — kicker "The garage · priced individually", huge "Car Collection" wordmark, one-line summary, two stat blocks (`{count}` Confirmed cars / `{total}+` Reported value)
2. **By marque** — a small tally strip (`{n}` × `{make}`)
3. **The garage** — the ranked list, most expensive first: rank number, make, model, description paragraph, source link, USD value, Naira value
4. **No longer counted** — sold or unconfirmed cars, kept deliberately for the record
5. **A note on this list** — the honesty note about completeness and currency conversion

The existing design file is in the handoff repo as `designs/desktop/Records - Cars.dc.html`. **Please read it before starting** — it defines the current page and the template-placeholder convention (`{{ c.make }}`, `{{ c.usd }}` etc.) that the build reads from.

### Mobile today

`/records/cars` is on the shared **"deep page" grammar** (screen 18) — a common template several record pages share, with a top back bar. Mobile lists the whole current garage rather than a preview. If the redesign needs mobile to break out of that shared grammar, say so explicitly, because it affects sibling pages.

### The data that exists per car

```ts
{
  make: "Bugatti",
  model: "Chiron (Venuum Widebody)",
  valueUsd: 6190000,
  valueNaira: "₦9 billion",
  desc: "A one-of-one custom build by Dubai's Venuum, unveiled July 2026 …",   // 1–3 sentences
  link: "https://…",          // optional source
  linkLabel: "Watch the reveal"  // optional
}
```

**Twenty cars, in three states:**

| state | count | meaning |
|---|---|---|
| current | 15 | counted in the totals |
| `sold` | 2 | Ferrari 458 Italia, 488 Spider |
| `unconfirmed` | 3 | not sighted with him in years |

Descriptions vary a lot in length. Some carry hedges that **must stay visible** ("reportedly", "(est.)", "neither Burna Boy nor Venuum has confirmed the exact price").

### The collection

Bugatti Chiron (Venuum Widebody) · McLaren Senna (MSO Carbon Edition) · Ferrari SF90 Spider · Ferrari Purosangue · Lamborghini Revuelto · Rolls-Royce Cullinan Black Badge · Lamborghini Aventador SVJ Roadster · Rolls-Royce Dawn · Ferrari 812 GTS · Porsche 911 GT3 RS (Weissach) · Lamborghini Urus (Novitec Edition) · Mercedes-Maybach S680 · Mercedes-Maybach GLS 600 · Ferrari Testarossa · Ferrari 328 GTS · Ferrari 458 Italia · Ferrari 488 Spider · Bentley Continental GT · Range Rover Autobiography · Mercedes-AMG G63

---

## 4. Design system — use these exact tokens

```css
--bg:          #0C0A09;   /* page */
--soft:        #151210;   /* raised surface */
--text:        #F5F0E8;
--muted:       #9C948A;
--dim:         #8A8279;
--gold:        #FBB417;   /* primary accent */
--gold-bright: #FFC93C;   /* emphasis */
--green:       #3ED17F;   /* positive / live only */
--line:        rgba(245,240,232,0.13);
--border:      rgba(245,240,232,0.20);
```

**Type:** Anton (display/numerals), Archivo (body), JetBrains Mono (labels, kickers, stat captions — uppercase, letter-spaced).

Existing house patterns worth matching: hairline-separated grids where the 1px gap *is* the divider; monospace uppercase kickers above display headings; big Anton numerals with a small mono caption beneath.

---

## 5. What to design

### 5a. A per-car detail treatment — the core of this brief

Today every car is a row. The ask is a **detail view per car** with the presence of a configurator page: the car as the centrepiece, its specifications beside it, its story below.

Reference for *layout and information density only* — a spec panel (engine, power, 0–100, top speed, drivetrain, weight), dimension callouts around the vehicle, a small performance-bar block, a colourway strip. Please treat that reference as a starting point to beat, not a template to copy; it's a generic supercar microsite and this page should feel like **this site**, editorial and typographic, not like a manufacturer's landing page.

Decide and show:

- how a car detail opens — inline expansion, a dedicated `/records/cars/[slug]` route, or an overlay (each has a cost; recommend one)
- how the ranked list and the detail view relate
- how the page still reads as a *collection* — the "twenty cars, ₦X billion" story shouldn't be lost to a car-by-car browser
- where the source link and hedging language live so they stay prominent, not buried in a footnote

### 5b. The car artwork — read this carefully

**Do not design around photographs or photoreal 3D renders.** This is a hard constraint and it isn't about effort:

Several of these are one-off or heavily modified cars — a **one-of-one widebody** Chiron, an **MSO** Senna, a **Novitec** Urus, a **Weissach** GT3 RS. Any stock photo or off-the-shelf 3D model would depict a car he does not own, on a site whose credibility rests on never publishing what it can't source. That's why the page has no imagery today.

**Instead: stylised vector silhouettes.** Flat, abstracted, unmistakably illustration rather than photography — so the page gains a visual centrepiece without asserting photographic accuracy. Think schematic or blueprint rather than render.

The strongest idea on the table (from a reader) is a **shape-assembly animation**: the silhouette builds itself from small geometric pieces that fly into place when the car is opened, then settles into the finished outline. Site precedent: the world map at `/records/tours/map` is hand-built SVG with no mapping library, so a bespoke SVG animation is in keeping.

**Please deliver at least one finished silhouette** — the Lamborghini Revuelto — as production SVG, and establish the convention the other nineteen will follow:

- one fixed `viewBox` every car reuses, so all twenty align
- consistent view angle (side profile or 3/4 — recommend one and justify it)
- named groups for the parts that animate separately: body, glass, wheels, intakes, wing
- flat fills from the palette, no gradients or photographic texture
- a path budget that animates smoothly on a mid-range phone (a couple of hundred shapes, not thousands)

If assembling twenty of these is unrealistic, say so and propose the fallback (e.g. silhouettes for the top five, a typographic treatment for the rest) — a good answer here is more useful than an over-promise.

### 5c. Specification data — new fields

We plan to add manufacturer specs per car: engine, power, 0–100 km/h, top speed, drivetrain, weight, and length/width/height for dimension callouts. These come from the manufacturers' own published sheets, so they meet the site's sourcing standard.

Design the panel assuming **some cars will have gaps** — a 1984 Testarossa won't have the same published figures as a 2024 Revuelto. There is an existing "not reported" convention on the tours revenue page; a missing value must never render as a blank or a zero.

### 5d. The three states

`sold` and `unconfirmed` cars need visual treatment that is honest without being buried — they're deliberately kept on the page. Consider whether they earn the full detail treatment or a reduced one.

---

## 6. Hard constraints

1. **Both breakpoints.** Desktop and mobile are designed separately on this site, never scaled versions of each other. Mobile is not an afterthought here — Lagos, Port Harcourt and Abuja are three of his five biggest listening cities, so a large share of readers are on phones and on metered mobile data. Keep the animation light.
2. **No external libraries.** Charts, maps and animations on this site are hand-built SVG/CSS. Assume no three.js, no animation library.
3. **Performance budget.** The page must stay fast. Kilobytes of SVG, not megabytes of model.
4. **Accessibility.** The animation needs a sensible `prefers-reduced-motion` state, and every figure shown as a graphic must also exist as text.
5. **Don't lose the honesty.** The hedges, the source links, the "this list isn't guaranteed complete" note and the sold/unconfirmed section are the reason the page is trustworthy. They're not clutter to design away.

---

## 7. Deliverables

- Desktop design for `/records/cars`, in the same `.dc.html` convention as the existing handoff files, using the template-placeholder style (`{{ c.make }}`) so it maps onto real data
- The mobile screen design
- At least one production-ready SVG silhouette (Revuelto) with the animation's keyframes/behaviour specified
- A short note on: how the detail view opens, whether mobile stays on the shared deep-page grammar, and the fallback plan if twenty silhouettes isn't realistic

---

## 8. Out of scope

The data itself, the values, the descriptions and the sourcing — all of that is maintained and correct. Please don't propose changes to what the page says, only to how it looks and behaves.
