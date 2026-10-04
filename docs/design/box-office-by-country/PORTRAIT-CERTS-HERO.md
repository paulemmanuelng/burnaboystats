# Add-on: Burna Boy's portrait in the certifications hero (Job 3)

**From the owner, 4 Oct 2026.** In the new certifications design, put Burna Boy's portrait back at the **top right of the hero**, the way the live site has it.

Your phone draft ([assets/certs-phone-hero-draft-no-portrait.png](assets/certs-phone-hero-draft-no-portrait.png)) has dropped it. Everything else in that draft stays as you drew it.

## The image

- **File:** [assets/burna-boy-portrait-640.jpg](assets/burna-boy-portrait-640.jpg), 640 × 640.
- **Source:** the same Spotify artist image the site already serves (`BURNA.image` in `app/data/afrobeats.ts`). Use this file; don't swap in a different photo.
- **What it shows:** a pale studio backdrop, with him centre-left of the frame.

## How the live site places it

The live site is a reference, not a rule; you can improve on it within these rules.

**Phone** (`app/components/mobileCerts.module.css`, `.heroArt` and `.heroScrim`):
- **Box:** anchored to the right edge and overhanging it (`right: -24%`). It is 76% of the hero's width, has a fixed 2 : 5 aspect ratio, and is centred vertically.
- **Fill:** `object-fit: cover`.
- **Focal point:** `26% 36%`, so his face lands in the visible part.
- **Opacity and colour:** opacity 0.42, grayscale 0.3, contrast 1.03.
- **Fade:** a left-to-right mask: transparent at 0%, 30% at 14%, opaque from 44%.
- **Scrims behind the type:**
  - Across: page colour to 38%, 78% at 62%, 35% at 100%.
  - Down: 55% at the top, 10% at 40%, page colour at the bottom.

**Desktop** (`app/certifications/certifications.module.css`, `.heroArt`, `.heroArtBlur`, `.heroScrim`):
- **Sharp copy:** 40% of the hero's width, full height, right-aligned, opacity 0.38, grayscale 0.3. Its mask fades at both ends.
- **Blurred copy:** 58% wide behind it, blur 34px, opacity 0.28.
- **Scrim:** same idea as the phone.

The per-artist values (focal point, opacity, grey) live in `app/lib/portraitArt.ts`. The same slot shows **each artist's own photo** on `/afrobeats/<artist>`, so design the slot, not just this one picture.

## Rules

1. **Type first.** The kicker, the big number, the units and the lede must keep at least 4.5:1 contrast against the brightest part of the photo behind them, in both light and dark themes. The portrait is never the brightest or warmest thing in the hero.
2. **Top right, behind the type.** It never pushes the number or the kicker, and it doesn't move when the switches change the count.
3. **The face stays in frame** at 320, 360, 390 and 1440. Don't let the crop show only braids or a shoulder.
4. **Both themes.** The scrims use the page colour (`--bg`), so the photo blends into whichever theme is showing.
5. **Draw it on your artboards:** phone at 390 (and 320) and desktop at 1440, in light and dark, with the switches both on and off.
