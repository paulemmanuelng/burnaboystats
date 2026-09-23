# Car 16 — Mercedes-Benz SLS AMG: the hero asset

**For:** Claude Design (fresh chat)
**Self-contained:** everything this document names is in `car-16-sls-handoff.zip`.
Nothing here depends on another file, a repository or a link.
**Deliverable:** the SLS AMG on the same near-black stage as the fifteen cars
already on the site — §6.
**Not the deliverable:** the page, the spec panel, the price, the copy. The site
prints all of those from its own data; they are written and waiting.

---

## 1. The site

burnaboystats.com is a verified statistics reference for Burna Boy. Its car
collection lives at `/records/cars`: fifteen cars today, one page each, every car
standing at the same scale on a gold floor ring drawn by the page. This is the
sixteenth.

## 2. The car

A **2010 Mercedes-Benz SLS AMG coupé** — the gullwing — bought in September 2026
from AbujaCar in Abuja. Gloss black over a **tan ("Sand") leather** interior,
about 6,000 miles, **factory standard**: no body kit, no aftermarket wheels, no
wrap. Nothing custom to get wrong, so everything stock has to be right.

## 3. What is in the bundle

| file | what it is |
|---|---|
| `car-16-sls-render-doors-closed-2816.jpg` | **the render to work from** — 2816×1536, generated for this site, doors closed, front three-quarter facing the viewer's left |
| `car-16-ref-1-rear-three-quarter-doors-up.jpeg` | the actual car — rear, tan door cards and roof lining inside the open doors, `SLS` / star / `AMG` badges, twin chrome exhaust finishers |
| `car-16-ref-2-front-three-quarter-doors-closed.jpeg` | the actual car — **the angle the render must match**: long bonnet, short tail |
| `car-16-ref-3-front-three-quarter-doors-up.jpeg` | the actual car — the face, the finned wing vents, the wheels, tan interior through the open door |
| `car-16-ref-4-rear-square-doors-up.jpeg` | the actual car — tail lamps, flush spoiler, badge layout, and the dealer's bare plate bracket (**not** part of the car) |
| `car-16-sls-page-mock-doors-open.png` | an earlier concept: a whole web page with the car doors-open. Reference for mood only — **not** a source (§5) |

The four `ref` files are dealer photographs of **his actual car**. They are the
fidelity gate: whatever you deliver is checked against them item by item (§7).

## 4. Where this stands

The render is the right car, at the right angle, with the doors closed. **What is
wrong is its floor, and only its floor.**

## 5. Why the floor is the whole problem

Every car on the site was cut out of a source whose stage is **near-black** —
within a few levels of the site's own background, `#0a0a0b`. That near-match is
what lets a cut-out read as a car standing on the page rather than a car on a
grey slab. Stage brightness at the frame edges (luminance 0–255):

| source | stage edges |
|---|---|
| Bugatti Chiron — already on the site | 6.7 – 8.7 |
| Porsche 911 GT3 RS — already on the site | 9.0 – 14.3 |
| the doors-open concept | 11.0 – 17.7 |
| **the doors-closed render** | **14.3 at the top — 62 to 68 at the floor** |
| the site's own background | 10.3 |

The render's floor is **six times lighter than the page it would stand on**, and
there is a second fact that rules out a quick fix: the **car's roof (28) is
darker than the floor beneath it (60)**. A crop leaves a grey slab; a brightness
cut-out that removes the floor removes the roof with it.

The doors-open concept has the right stage but cannot be the hero: every car
shares one canvas at one scale, and an open gullwing doubles the car's height, so
it would shrink to fit and stand smaller than the fifteen beside it. It also has
dimension lines and page furniture drawn across the body.

## 6. The deliverable — either of these

**Option A, preferred — the same render, re-staged.** Identical car, angle, pose
and lighting, doors closed, on the stage the fifteen share:

- near-black studio floor and backdrop — **edge luminance under 15**, nothing
  close to the grey floor in the current render
- a single soft key light from upper left
- a soft reflection of the car in the floor directly beneath it
- no perspective grid, no horizon line, no lighter floor plane
- ≥1600px wide, PNG or high-quality JPEG; about 10% clear stage around the car

**Option B — the finished cut-out.** The car alone on transparency: no floor, no
reflection, no backdrop. Lossless PNG, ≥1600px wide, alpha feathered on the
antialiased rim rather than hard-edged, with a clean matte around the wheel
arches, the grille mesh and the wing fins.

**Either way: nothing but the car in the frame** — no text, badges, panels,
wordmark, watermark or dimension lines. The page supplies every label; a word
drawn into the image can never be corrected.

## 7. The fidelity checklist

Checked against the four `ref` photographs before anything ships. Items 1–5 are
the car's identity; the render already gets most of these right — keep them.

1. **Gullwing doors**, closed, with the seam line visible along the roof.
2. **Gloss black paint** with sharp studio reflections — a black that reflects,
   not matte or charcoal.
3. **Tan interior** visible through the glass: seats, door cards, tunnel.
4. **The SLS proportion** — very long bonnet with two soft power domes, cabin set
   far back, short high tail, wide low stance.
5. **The face** — wide grille of horizontal chrome slats, the large star on a
   central bar; low black mesh apron with three intakes; bi-xenon headlamps with
   an LED strip along their lower edge; **a vertical three-fin vent with a small
   `6.3` badge behind each front wheel arch**.
6. **Wheels** — AMG twin-five-spoke in titanium grey with machined faces,
   staggered (rears wider, a size larger); **red front brake calipers**.
7. **Rear** — slim wraparound tail lamps, `SLS` left, star centred, `AMG` right,
   one wide chrome trapezoid exhaust each side, spoiler retracted flush.
8. **US-market details** — amber side-markers in the front bumper corners.
9. **No number plate, no plate bracket.** The bare aluminium bracket in ref 4 is
   the dealer's, not the car's.

The bar: someone who has seen the four photographs looks at it and says *"that's
the car"* — not "that's an SLS", but *that* SLS.

## 8. The geometry it lands in — context, not a requirement

You do not need to hit these; the site's engineer re-canvases and grounds every
car the same way. They are here so your framing survives it with room to spare.

- hero: **898 × 660 PNG with a real alpha channel**, car centred on its own
  silhouette
- **ground line at about 0.66 of the height** — the *midpoint* of the two wheel
  contact lines, not the lowest pixel, because in a three-quarter view the near
  wheel sits 80–100px lower than the far one
- below it, baked in by the engineer: a mirrored reflection squashed and fading
  fast (alpha ~96 forty pixels down, ~2 at the canvas edge), a hard contact
  shadow, and a wide ambient occlusion, all derived from the car's own silhouette
- index tile: **640 × 400 JPEG**, the framed render

## 9. Settled, and one open point

- **Settled — provenance.** The doors-closed render was generated for this site;
  it is not a Mercedes press photograph and is fine to use as a source.
- **Open — the tyres.** The render's sidewalls read **Pirelli**. The car's
  original brief recorded Michelins, but no sidewall lettering is legible in any
  of the four photographs at their resolution (checked 23 Sep 2026), so the
  brand on the real car is **unconfirmed**. If you re-render (option A), leave
  the sidewall lettering soft and unreadable rather than asserting either brand.
  If you cut out (option B), leave the render as it is — this sits below the
  fidelity gate's line.

## 10. How it will be checked

- the site's automated tests: the hero must be a PNG with a real alpha channel,
  at exactly the declared size, beside a 640×400 tile — a car ships complete or
  not at all, so this asset is the only thing between the SLS and its page
- then the human gate in §7, against the four photographs
