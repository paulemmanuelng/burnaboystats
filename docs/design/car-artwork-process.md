# Car artwork — the standing process

**For:** Claude design (fresh chat — this document is self-contained)
**Site:** burnaboystats.com — a verified statistics reference for Burna Boy
**Supersedes:** the artwork section of `car-collection-brief.md`. The layout/spec-panel ideas in that document remain future work; **how the cars get drawn is now governed by this file.**

---

## What changed, and why

Round one asked for cars in batches, by model name — "draw a Revuelto." That failed for a predictable reason: no reference in the world tells a designer what **Burna Boy's** Revuelto looks like, and the owner knows these specific cars. Several of them are one-offs — a Venuum widebody Chiron, an MSO carbon Senna, a Novitec Urus. A generic drawing of the model is a drawing of a car he doesn't own.

So the unit of work is now:

> **One car = one brief = one deliverable.** Each car's brief leads with reference imagery of the actual vehicle and a checklist of required features. The artwork ships only when it passes a fidelity check against those references.

No batches. No page redesign bundled in. Car by car, starting with the most recognisable.

---

## The deliverable, per car

One production-ready **SVG illustration** of the actual car.

| constraint | value |
|---|---|
| ViewBox | `0 0 720 400` — fixed, identical for every car, so all of them align when shown together |
| Angle | **Front three-quarter, car facing the viewer's left.** Fixed for every car. It's the angle that shows a car's face, bonnet and stance — where the identity lives |
| Ground line | wheels sit on y ≈ 340; car centred horizontally |
| Style | flat vector fills — deliberately an *illustration*, not a fake photo. No gradients, no photo textures, no filters |
| Colours | **the car's real colours**, as flat fills — 6–10 flats per car. (This overrides the earlier "site palette only" instruction: resemblance requires the real livery. The page's gold-on-dark frame lives *around* the art, not inside it) |
| Path budget | ≤ ~300 paths — it has to render instantly on a mid-range phone |
| Background | none — transparent. The site supplies the backdrop |

### Group naming

Structure the SVG so parts can later animate independently (a planned build-in effect — not your problem now, but the naming is):

```
#body  #glass  #wheel-front  #wheel-rear  #stripe  #badge  #details  #shadow
```

`#shadow` is a soft ground ellipse, the only permitted opacity < 1.

---

## The fidelity gate

Before anything ships, the implementing engineer places the artwork beside the reference photos and checks the car's brief checklist off item by item — body kit, colour split, wheels, distinguishing marks. **Any required feature wrong or missing fails the gate** and the artwork goes back with the specific items named. Wrong wheels on the right car is a fail. A stock body on a widebody car is a fail.

The bar is: *a person who follows this man's garage recognises whose car this is at a glance.* It is **not** photorealism — flat illustration is the medium, chosen deliberately. If a checklist item is genuinely too fine for flat vector at 720px (an engraved name, a stitched interior), the brief marks it optional.

## What not to do

- **No stock 3D models, no traced press photos of other people's cars.** Several of these cars are unique; a stock asset depicts a different vehicle. This is the whole reason the process exists.
- **No photorealism.** Kilobytes, not megabytes; illustration, not render.
- **Don't design the page.** Layout, spec panels and animation come later, after several cars exist. One car's art is the entire deliverable.

## Order of production

1. **Bugatti Chiron (Venuum Widebody)** — `car-01-chiron.md`
2. McLaren Senna (MSO Carbon Edition)
3. Lamborghini Revuelto
4. …continuing down the collection by recognisability. Sold/unconfirmed cars last, if at all.

Each subsequent brief is one page: references + required-features checklist. Conventions never repeat — they live here.
