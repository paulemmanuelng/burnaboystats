# Car 16 — Mercedes-Benz SLS AMG (C197), 2010

Everything the entry in `app/data/cars.ts` needs, researched 23 September 2026.
The car is NOT on the site yet, and cannot be until the render lands — see
"What is still missing". The render brief is `docs/design/car-16-sls-amg-gullwing.md`.

## What happened

Burna Boy bought a black 2010 SLS AMG coupé — the gullwing — from **AbujaCar**,
the same Abuja dealer that supplied the Chiron and the Senna. Two posts on
**9 September 2026** report it, and the dealer's own video carries the car with
`SOLD` and `OFF TO LAGOS` over it.

## The price: two claims, one origin, no dealer figure

| Claim | Who | When |
|---|---|---|
| "$700K+" | @Toluwase_x (X) | 9 Sep 2026 |
| "about $1M" | @1BENNY7G (X) | 9 Sep 2026 |

`man-man.nl` (14 Sep 2026) carries "**naar verluidt betaalde hij om en nabij de
$700.000**" — but its own citation is the @Toluwase_x post, so it is the same
claim in another language, **not** a second source. AbujaCar has published no
price, and neither has Burna Boy.

This is weaker provenance than any car currently on the site: the Chiron carries
the selling dealer's own figure, the Senna the dealer's sale post. Two fan
accounts disagreeing by $300,000 is a `valueBasis: "reported"` at best, and the
`desc` has to say both numbers and that neither is the dealer's.

**Naira**, at the CBN NFEM weighted-average rate on 9 September 2026, the day
both posts ran (cbn.gov.ng/api/GetAllNFEM_Rates, read 23 Sep 2026 —
**₦1,329.2129/$**):

- $700,000 → ₦930,449,030 → carried as **₦930 million**
- $1,000,000 → ₦1,329,212,900 → carried as **₦1.33 billion**

Worth knowing before choosing: a 6,000-mile SLS AMG is a modern classic, and
published auction results for comparable low-mileage cars sit well below either
figure. The site reports what is claimed, with provenance — it does not price
cars — but a figure this far from the market is one a reader may query, so the
`desc` should carry the disagreement plainly rather than pick a winner quietly.

## Specifications — Mercedes' own figures

| Row | Value |
|---|---|
| Engine | 6.3-litre AMG V8 (M159), front-mid, dry sump |
| Power | 420 kW — **563 hp** (Mercedes states "420 kW/571 hp", where its "hp" is PS) |
| Torque | 650 Nm |
| 0–100 km/h | 3.8 s |
| Top speed | 317 km/h, electronically limited |
| Drivetrain | RWD, seven-speed dual-clutch in a transaxle |
| Weight | 1,620 kg (DIN kerb) |
| Body | Aluminium spaceframe, gullwing doors |

Source: Mercedes-Benz Group Media, *"Mercedes-Benz SLS AMG: fascination and high
tech — New legend with unrivalled performance"*, `oid=9905144`.

**A problem to resolve before `verified` can be set.** That release is no longer
served: every deep link into `group-media.mercedes-benz.com/marsMediaSite/...`
now redirects to the media home page, and the Wayback Machine has no copy of it
(checked 23 Sep 2026, by curl and in a real browser). The figures above are
Mercedes' own wording, but they were read from a search engine's index of that
page, **not off the page itself** — so `verified: true`, which this repo defines
as "a person read each row off `source`", is not mine to set.

Two honest ways to close it, in preference order:

1. Open the release in a normal browser (it is not blocked for everyone — this
   machine is) and read the eight rows off it. Then `verified: true` with the
   live URL.
2. If it is dead for everyone, follow the Senna precedent: cite an archived copy
   and say so in the spec `note`. No copy exists today, so this needs one.

## The entry, ready to paste

Slots into `cars` in value order. `palette`, `heroSize` and `groundLine` are
derived FROM the render (palette sampled from it, groundLine measured with
`scripts/measure-ground-line.mjs`), so they are left for the commit that brings
the image.

```ts
{
  make: "Mercedes-Benz", model: "SLS AMG",
  year: 2010, yearIs: "model",
  valueUsd: 700_000, valueNaira: "₦930 million", valueBasis: "reported",
  desc: "The gullwing — a 2010 SLS AMG coupé in black over tan, showing about 6,000 miles, bought in September 2026 from AbujaCar in Abuja, the dealer that also supplied the Chiron and the Senna, whose own video carries the car marked SOLD and off to Lagos. The price is reported and disputed: one account put it above $700,000 on 9 September 2026 and another at about $1 million the same day, and a Dutch outlet's $700,000 cites the first of those posts rather than a second source. Neither AbujaCar nor Burna Boy has published a figure.",
  slug: "mercedes-sls-amg",
  subtitle: "THE GULLWING — 2010 SLS AMG, ABOUT 6,000 MILES",
  specs: {
    engine: "6.3L V8 (M159)", power: "563 hp", zeroToHundred: "3.8 s",
    topSpeed: "317 km/h", drivetrain: "RWD", weight: "1,620 kg (DIN)",
    basis: "as built",
    source: "<the Mercedes URL, once it can be read off — see above>",
    note: "Mercedes states 420 kW/571 PS; 563 hp is that output in imperial terms, the unit this panel uses throughout. Top speed is electronically limited. 1,620 kg is Mercedes' DIN kerb weight. Drive is to the rear through a seven-speed dual-clutch transaxle.",
    verified: false,
  },
  num: { hp: 563, kg: 1620, acc: 3.8, vmax: 317 },
}
```

At $700,000 it joins the Dawn and the 812 GTS in a **three-car tie at $700,000**,
landing 8th–10th of 16 (the page says "joint" where values tie — `jointWith`).
At $1,000,000 it would instead join the existing **five-car tie** at 3rd–7th,
making it six. Either way it does not change the top two or the bottom two.

## What is still missing

1. **The render.** `public/cars/mercedes-sls-amg.png` (cut-out, transparent,
   898×660) and `-tile.jpg` (640×400). The repo's tests enforce both, and
   `garage.length === currentCars.length` means a current car cannot be added
   half-way: it ships complete or not at all, by design.

   The asset supplied on 23 Sep (`Gemini_Generated_Image_nqv3upnqv3upnqv3.jpeg`,
   and the same image again inside `Mercedes_SLS_AMG_Graphics.zip`) is a mock of
   a whole web page — nav bar, spec panel, performance bars, "BUILD YOURS" — with
   the car doors-open and dimension lines drawn across it. It cannot be the hero:
   the brief's §4 requires **doors closed** (an open gullwing doubles the car's
   height and shrinks it in the grid beside the other fifteen) and **no text in
   the frame**, and the page supplies every label itself.

2. **`verified`** — see the specifications section.

3. **A decision on the price**, since the two reports differ by $300,000 and
   neither is the dealer's.
