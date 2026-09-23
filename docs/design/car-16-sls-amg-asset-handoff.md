# Car 16 — the SLS AMG hero asset

**For:** Claude Design (fresh chat — this document is self-contained; attach the
two files named in §2)
**Site:** burnaboystats.com — a verified statistics reference for Burna Boy. Its
car collection lives at `/records/cars`, one page per car, fifteen cars today.
**Deliverable:** the SLS AMG on the **same stage as the other fifteen**, so the
engineer can cut it out and stand it on the page's floor ring beside them. Two
acceptable forms — §4.
**Not the deliverable:** the page, the spec panel, the price, the copy. The site
prints all of that from its own data; it is already written and waiting.

The car itself is briefed in [car-16-sls-amg-gullwing.md](car-16-sls-amg-gullwing.md)
— what the vehicle is, and the fidelity checklist. **Read that first.** This
document is only about the asset: the stage it stands on and the geometry it
ships in.

---

## 1. Where this stands

The render exists and it is good. What is wrong is its floor, and only its
floor.

## 2. What was supplied, and what each one is

| file | what it is | verdict |
|---|---|---|
| `cars/car-16-sls-render-doors-closed.jpg` (2000×1091) | a clean studio render: gloss black, doors closed, front three-quarter facing the viewer's left, red front calipers, tan interior through the glass, no plate, no text | **the right car, the right angle, the wrong floor** |
| `cars/car-16-sls-page-mock-doors-open.png` (896×1195) | a whole web page — nav bar, SPECIFICATIONS panel, performance bars, colour swatches, "BUILD YOURS", dimension lines drawn across the car, doors open | same class of asset as the fifteen shipped ones, but unusable here — §3 |

## 3. The measurement that decides this

Every shipped car was cut out of a supplied page design whose stage is
**near-black**, within a couple of levels of the site's own background
(`--bg: #0a0a0b`, luminance ≈ 10). That near-match is what makes the cut-out
read as a cut-out rather than as a car on a grey rectangle.

Stage brightness at the frame edges, measured 23 Sep 2026:

| source | stage edges (luminance 0–255) |
|---|---|
| Chiron page design — shipped | 6.7 – 8.7 |
| 911 GT3 RS page design — shipped | 9.0 – 14.3 |
| SLS page mock, doors open | 11.0 – 17.7 |
| **SLS render, doors closed** | **14.7 at the top, 63–67 at the bottom** |
| the site's own background | 10.3 |

The new render's **floor is six times lighter than the site's background**. Two
things follow, and both are why it cannot simply be cropped in:

- A rectangular crop puts a visible grey slab under the car.
- A brightness-based cut-out fails too, because on this render the **car's roof
  (27) is darker than the floor it stands on (61)**. Any threshold that removes
  the floor also removes the roof.

The doors-open mock has the right stage but cannot be the hero: the site pastes
every car at one scale onto one canvas, and an open gullwing doubles the car's
height, so it would shrink to fit and sit smaller than the fourteen beside it.
It also carries dimension lines and page furniture across the body, and at
896px it is below the working size.

## 4. The deliverable — either of these

**Option A, preferred: the same render, re-staged.** The identical car, angle,
lighting and doors-closed pose, on the stage the other fifteen use — a near-black
studio floor and backdrop, edge luminance **≲15**, a single soft key light from
upper left, and a soft reflection directly under the car. No perspective grid,
no horizon, no lighter floor plane. ≥1600px wide, PNG or high-quality JPEG. The
engineer cuts it out from there, exactly as for the fifteen.

**Option B: the finished cut-out.** The car isolated on transparency, no floor,
no reflection, no backdrop — lossless PNG, ≥1600px wide, alpha feathered on the
antialiased rim rather than hard-edged. If you can deliver a clean matte around
the wheel arches, the grille mesh and the wing fins, this skips a step.

Either way: **no text, no badges, no panels, no wordmark, no dimension lines** in
the frame.

## 5. The geometry it ends up in — context, not a requirement

You do not have to hit these numbers; the engineer re-canvases. They are here so
the framing you deliver survives the process with room to spare.

- Hero: **898 × 660 PNG with a real alpha channel**, car centred on its own
  silhouette.
- **Ground line ≈ 0.66 of the canvas height** — the midpoint of the two wheel
  contact lines, not the lowest pixel, because every render is a three-quarter
  view and the near wheel sits 80–100px lower than the far one. Measured per car
  by `scripts/measure-ground-line.mjs`.
- Below that line the hero carries a **mirrored reflection, squashed and fading
  fast** — alpha ~96 forty pixels down, ~25 at 120, ~2 at the canvas edge — plus
  a hard contact shadow and a wide ambient occlusion, all derived from the car's
  own silhouette. The engineer bakes these; they are not yours to draw.
- Index tile: **640 × 400 JPEG**, the framed render. Its ground never shows, so
  the stage is fine in this one.

Leave ~10% clear stage around the car so the cut-out is not clipped.

## 6. Two questions to answer with the delivery

1. **Where did the doors-closed render come from?** It reads like an official
   Mercedes studio photograph. If it is one, `car-artwork-process.md` rules it
   out in as many words — *"no stock 3D models, no traced press photos of other
   people's cars"* — and it would be the only car on the site not using an asset
   made for it. If it was generated, say so and it ships.
2. **The tyres.** The brief records the actual car on **Michelins**, from the
   AbujaCar photographs. This render is on **Pirellis**. Minor, and below the
   fidelity gate's line, but worth knowing which way it was decided.

## 7. How it will be checked

The repository's own tests, before it can ship:

- every hero is a PNG with a real alpha channel — an opaque file cannot quietly
  put the floor back
- two image files per car, at the declared sizes: `<slug>.png` 898×660 and
  `<slug>-tile.jpg` 640×400
- `garage.length === currentCars.length` — a current car ships complete or not
  at all, so this asset is the only thing standing between the SLS and the page

Then the human gate from the car's own brief: *a person who has seen the Abuja
photos looks at it and says "that's the car"* — black gullwing, tan inside, the
twin-five-spoke wheels, the finned wings with the `6.3`, the star in the grille —
on the same stage as the Chiron and the Senna beside it.
