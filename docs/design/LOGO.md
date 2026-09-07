# Logo — burnaboystats.com

**Chosen direction:** 2a, the crown masthead (turn 2 of `designs/desktop/Burnaboystats Logo.dc.html`).
**Files:** this folder. Every colour is a `globals.css` token; the SVGs carry the literal hex with the token named in a comment.

## The mark

A crown built from five chart bars on a base rule, with the LIVE dot as its jewel. It says the three things the site is: charts (bars), the No. 1 position (a crown), and live data (the green dot). Nothing else on the internet has this silhouette, and it survives at 16px.

```
viewBox 0 0 84 74
bars      x 7 · 22 · 37 · 52 · 67   width 11   rx 5.5
heights   33 · 22 · 43 · 22 · 33    tops y 25 · 36 · 15 · 36 · 25   (all bottoms at y 58)
base      x 7  y 64  w 71  h 6.5    rx 3.25
dot       cx 42  cy 8  r 4          r 4.5 on the tile · r 6 in favicon.svg · r 6.5 in the 16–48px PNGs
gradient  vertical  --gold #ffb627 → --grad-b #ff7a1a   (the same ramp the hero figure uses)
dot       --green #3ed17f — the only green, always present
```

Clear space: **one bar width (11 units) on every side.** Never render the crown without its dot. Never recolour the dot.

## Files

| file | use |
|---|---|
| `burnaboystats-mark.svg` | the crown alone, transparent — for dark surfaces ≥24px |
| `burnaboystats-mark-tile.svg` | crown on its `--bg` tile, 20% radius — **the version for any light surface** (documents, partner pages, avatars) |
| `burnaboystats-horizontal.svg` | crown + `BURNABOYSTATS` + `THE NUMBERS, VERIFIED` — headers, OG images, print |
| `burnaboystats-stacked.svg` | crown above the wordmark — square placements, social |
| `favicon.svg` | tile with the enlarged dot; browsers that take SVG favicons |
| `favicon-16.png` · `favicon-32.png` · `favicon-48.png` | legacy favicons |
| `apple-touch-icon.png` (180) · `icon-192.png` · `icon-512.png` | iOS home screen · PWA manifest |

## The wordmark

`BURNABOY` in `--text` + `STATS` in the gold gradient, Anton 400, letter-spacing 0.5 at 52px. Tagline `THE NUMBERS, VERIFIED` in Space Mono, `--text-muted`, tracked 6.2 at 12px. Both lockups carry the type as **live text** so they stay editable and match the site's own `.brand` rendering exactly.

**Outline the text before using a lockup anywhere Anton is not loaded** (Figma → flatten; Illustrator → Create Outlines). On the site itself, do not use the lockup SVGs at all — see below.

## On the site

- **Nav / footer:** keep `.brand` and `.footerMark` as live text (they already match the wordmark). Add the mark as an inline SVG **before** the text: 22px tall in the 68px bar, `gap: 10px`, `aria-hidden` (the text is the accessible name). Nothing else about the header changes — lockup, sizes, gold word all stay.
- **Below 24px of height the wordmark drops and the crown stands alone** — the tab bar's Home icon, the back bars, the `Stat card` chip.
- **Light mode (when it ships):** the header stays dark (masthead), so the mark never needs a light variant there. On any themed surface use `burnaboystats-mark-tile.svg`, never the bare mark on paper.
- **OG images:** `burnaboystats-horizontal.svg` top-left at 44px tall, on the dark ground they already use.
- **`<head>`:**
  ```html
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">   <!-- icon-192 + icon-512, theme_color #0a0a0b -->
  ```

## Rules

1. The dot is the only green; `STATS` is the only gradient text.
2. One bar-width of clear space.
3. Never stretch, rotate, outline, or drop-shadow the mark.
4. Never place the bare mark on a light ground — use the tile.
5. Never animate the bars. The dot may pulse (the site's existing live-dot pulse) **only** where it sits next to live data.

## Superseded

Turn-1 directions 1a (wordmark only), 1b (crown alone) and 1c (circular plaque) are kept in the design file for the record. 2a is 1a + 1b merged, and is the only one to ship.
