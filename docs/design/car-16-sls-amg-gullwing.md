# Car 16 — Mercedes-Benz SLS AMG (C197 Gullwing), 2010

**For:** Claude (fresh chat — this document is self-contained; attach the four reference photos with it)
**Site:** burnaboystats.com — a verified statistics reference for Burna Boy. Its car collection lives at `/records/cars`, one page per car.
**Deliverable:** one photoreal render of **this car**, matching the fifteen renders already on the site, so it drops into the same page and the same index grid. A second render with the doors open is welcome — see §4.
**Not the deliverable:** the page, any text, the price, the mileage. The site prints those from its own data.

---

## 1. The car

A 2010 Mercedes-Benz SLS AMG coupé — the gullwing — bought in September 2026 from a dealer in Abuja, in black over a tan ("Sand") leather interior, showing about 6,000 miles. It is a factory-standard car: no body kit, no aftermarket wheels, no wrap. That makes it the opposite of the site's Chiron problem — there is nothing custom to get wrong, but everything **stock** has to be right, because the four photos supplied are of the actual car and the render will be checked against them item by item.

## 2. References — the actual car

Four dealer photos, taken in the AbujaCar forecourt, supplied alongside this brief:

1. **Rear three-quarter, doors up** — the tan door cards and tan roof lining inside the open gullwings; `SLS` badge, star, `AMG` badge; the two wide chrome exhaust finishers; a bare aluminium plate bracket (do **not** render the bracket — see §3, item 9).
2. **Front three-quarter, doors up** — the face: chrome-slat grille with the large central star, the finned front-wing vents with the `6.3` badge, the AMG twin-five-spoke wheels, the tan interior visible through the open door.
3. **Front three-quarter, doors closed** — the primary angle for the site. Long bonnet, short tail, the silhouette this render must match.
4. **Rear, doors up, square on** — tail lamps, the flush rear spoiler, the third brake light over the rear glass, the badge layout.

Work from all four; do not trace one. The photos are the fidelity gate.

## 3. Required features — the fidelity checklist

Every item is checked against the photos before the render ships. Items 1–5 are the car's identity.

1. **Gullwing doors.** Hinged at the roof's centreline, opening upward. Closed (the primary render), the door's upper edge runs into the roof with a visible seam line along the roof; open (the secondary render), each door stands roughly vertical with the mirror carried up with it, tan trim on its inner face, a small red warning lamp at the trailing corner.
2. **Gloss black paint.** Deep gloss black with sharp studio reflections — a black that reflects, not a matte or a charcoal. (Factory Obsidian Black; it reads as pure black in every photo.)
3. **Tan interior.** Sand/tan leather on the seats, door cards, transmission tunnel and the roof lining, against a black dash top and black carpet. Visible through the glass in the closed render, unmistakable in the open one.
4. **The SLS proportion.** Very long bonnet, cabin set far back, short high tail, wide low stance. A generic "Mercedes coupé" silhouette fails the gate. The bonnet carries two soft longitudinal power domes.
5. **The face.** A wide grille of horizontal chrome slats with the **large three-pointed star** on a central bar; a low black mesh apron beneath it with three intakes; bi-xenon headlamps with an LED strip along their lower edge, following the wing line. **Front wings: a vertical vent with three chrome fins and a small `6.3` badge behind the wheel arch.** Same fins on the bonnet sides.
6. **Wheels and tyres.** AMG twin-five-spoke (ten-spoke) alloys in titanium grey with machined spoke faces; staggered — the rears are wider and a size larger than the fronts (19" front / 20" rear on the factory fitment). Michelin tyres, low profile. The front brake calipers show **red** in photo 2 — render them red; the rears are dark.
7. **Rear.** Slim wraparound tail lamps with a clear lower section; `SLS` badge on the left of the boot, the star centred, `AMG` on the right; a black diffuser with **one wide chrome trapezoid exhaust finisher each side**, set low. Rear spoiler **retracted, flush** with the boot lid. A third brake light in a slot above the rear glass.
8. **US-market details, because this is an imported US car:** amber side-marker lamps in the front bumper corners and red ones in the rear bumper corners. Body-coloured mirrors on the doors.
9. **No number plate, no plate bracket.** The dealer's bare aluminium bracket in photos 1 and 4 is not part of the car — render the rear plate recess clean and the front bumper without a plate.

**Optional (do not force):** the `AMG` script on the sill trims, the `6.3` on the engine cover, the stitching pattern on the seats.

## 4. Render conventions — match the fifteen already on the site

These are fixed; they are what lets one car sit beside another.

| | value |
|---|---|
| Angle | **Front three-quarter, car facing the viewer's left**, front wheels turned slightly toward the camera. Camera a little above eye level (~15°), so the bonnet and roof both read. |
| Doors | **Primary render: closed.** The site pastes every car at the same scale onto one canvas and stands it on a floor ring; an open gullwing doubles the car's height and would shrink it in the grid. **Secondary render: doors open**, same angle, same stage — the car's signature, for the car's own page. |
| Stage | A near-black studio floor and backdrop, `#0a0a0b` at the edges, a single soft key light from upper left, a soft reflection of the car in the floor under it. No environment, no showroom, no road. |
| Framing | The car fills about 80% of the frame width, centred, with clear stage all round — it will be cut out. |
| Style | Photoreal, as the existing fifteen: a studio product render of the actual car, not a painting, not a stylised illustration. |
| Size | At least **1600 px wide**, PNG or high-quality JPEG. The site derives its 898×660 hero and 640×400 tile from that. |
| Nothing else in the frame | **No text, no badges, no spec panels, no wordmark, no watermark.** The page supplies all of that; a rendered word can never be corrected. |

## 5. What done looks like

A person who has seen the four Abuja photos looks at the render and says *"that's the car"* — black gullwing, tan inside, the twin-five-spoke wheels, the finned wings with the `6.3`, the star in the grille — on the same angle and stage as the Chiron, the Senna and the two Maybachs beside it. Not "that's an SLS": *that* SLS. Expect one round at the fidelity gate; that is the process working.

## 6. What this brief does not decide

- **The price and the mileage.** "$700K+" and "6,000 miles" are the report, not yet a source. The site's `cars.ts` carries a reported value with its provenance for every car, and a spec panel read off Mercedes' own page; both are filled by the engineer, not by the render.
- **The caption.** Every car page says whether its picture depicts *the model* or *his actual car*. This is the first car with photographs of the actual vehicle to draw from — whether the caption is allowed to say so is a data decision, made against these photos, after the render passes the checklist.
