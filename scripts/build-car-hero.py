#!/usr/bin/env python3
"""Build a car's hero PNG and index tile from a cut-out.

    python3 scripts/build-car-hero.py <cutout.png> <slug> --width <px> [--hue LO-HI] [--soften SIGMA]
    python3 scripts/build-car-hero.py --check <slug> [<slug> ...]

The SLS AMG (car 16) was built with:
    python3 scripts/build-car-hero.py docs/design/cars/car-16-sls-amg-cutout.png \\
        mercedes-sls-amg --width 758 --hue 18-45 --soften 0.7

The first form writes public/cars/<slug>.png (898 x 660 RGBA) and
public/cars/<slug>-tile.jpg (640 x 400), then prints the numbers cars.ts
needs: the car's width, its ground line and a palette. A new car also needs
its two files imported in app/lib/carImageAssets.ts (since 23 Sep 2026 the
pages paint from those imports, so the URL survives a deploy); the last line
printed says so, and tests/carImageAssets.test.tsx fails until it is done.

WHY THIS FILE EXISTS. The fifteen heroes were cut out and grounded by a
pipeline that was never committed (630568aa, 8b92e291 describe it; neither
adds a script). This is a rebuild, not a recovery. Every constant below was
MEASURED off the fifteen shipped heroes rather than chosen, and `--check`
proves it: it strips an existing hero back to its car, re-grounds it with
these constants, and prints how far the result lands from the shipped file.
On the fifteen that is about one alpha level in 255, below the car.

What a hero is, measured across all fifteen:
  - 898 x 660, the car's lowest pixel (alpha > 200) on row 474, centred on
    its own silhouette at x 448.5. Widths run 660-758px; the frames were
    drawn at one scale, not at each car's real length.
  - under the car, three layers derived from its own silhouette, all black
    except the reflection, and all under alpha 200 so measure-ground-line
    still reads only the car:
      reflection  the car mirrored about the bottom of row 474, squashed to
                  0.52 of its height, blurred ~3px, its colour at 0.565.
                  Its alpha fades over the car's OWN height, not a fixed
                  distance: a tall car's reflection fades more slowly.
      contact     a hard line under whatever touches row 474: the bottom
                  3px of the body, mirrored at half height.
      occlusion   the body collapsed onto the ground line, weighted to the
                  parts nearest the floor, spread wide (sigma 40 x 17px).
Where each layer came from is in the comment beside its constants.
"""

import argparse
import os
import sys

import numpy as np
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARS = os.path.join(ROOT, "public", "cars")

# ── The hero canvas ───────────────────────────────────────────────────────────
W, H = 898, 660
GROUND_ROW = 474          # every hero's lowest car pixel (alpha > 200)
CENTRE_X = 448.5          # every hero is centred here on its own silhouette
AXIS = GROUND_ROW + 0.5   # layers mirror about the bottom edge of that row
CAR = 200                 # the alpha measure-ground-line counts as car

# ── Reflection ───────────────────────────────────────────────────────────────
# Fitted mirror: IoU 0.998 against the reflection in the Maybach S680, the
# 812 GTS and the Chiron (axis 474.5-475, squash 0.515-0.52).
REFLECT_SQUASH = 0.52
REFLECT_BLUR = 3.0
REFLECT_COLOUR = 0.565    # un-premultiplied colour vs source; 0.555-0.575
# Alpha (0-255) against u = the reflected point's height up the car / the
# car's height. Medians across all fifteen, 0.05 bins; p10-p90 spread is
# within 3 levels in every bin.
REFLECT_FADE = [
    (0.0, 68.5), (0.025, 67.2), (0.075, 63.3), (0.125, 59.8), (0.175, 53.6),
    (0.225, 45.9), (0.275, 39.0), (0.325, 33.0), (0.375, 28.0), (0.425, 23.0),
    (0.475, 19.0), (0.525, 15.0), (0.575, 12.0), (0.625, 9.0), (0.675, 7.0),
    (0.725, 4.0), (0.775, 3.0), (0.825, 1.0), (0.875, 0.0), (1.0, 0.0),
]

# ── Contact shadow ──────────────────────────────────────────────────────────
# Fitted on rows 474-490 of six heroes (rms 2.60 -> 1.88 against no contact).
CONTACT_SLIVER = 3.0      # px of body above the ground line that cast it
CONTACT_SQUASH = 0.5
CONTACT_BLUR = 0.8
CONTACT_STRENGTH = 0.20

# ── Ambient occlusion ───────────────────────────────────────────────────────
# Fitted beside and between the wheels, where nothing else lands, on five
# heroes: rms 1.31 levels. Weighting by height is what the data asked for;
# an unweighted silhouette left the front 8 levels light and the rear 6 dark.
AO_FALLOFF = 150.0        # px up the car at which a pixel's weight is 1/e
AO_SQUASH = 0.02
AO_BLUR_X, AO_BLUR_Y = 40.0, 17.0
AO_STRENGTH = 2.608

# ── The index tile ──────────────────────────────────────────────────────────
TILE_W, TILE_H = 640, 400
TILE_QUALITY = 86         # every tile's quantisation table is IJG quality 86
# Where the fifteen stand in their own tiles: each hero matched into its tile
# by masked cross-correlation (ncc 0.93-0.98). Medians across the fifteen.
TILE_SCALE = 0.84
TILE_CENTRE_X = 347       # right of centre: the fronts face left
TILE_GROUND_ROW = 368
# ...but a long car at that centre loses its tail. The fifteen's tails run
# off the right edge by 15px at the median (-2 to 28); cap it there.
TILE_MAX_OVERRUN = 15
# The tiles' stage, sampled where no car reaches: medians across the fifteen.
TILE_TOP = (5.0, 8.0, 12.0)       # row 0
TILE_BOTTOM = (17.0, 19.0, 23.0)  # row 399


def gauss_matrix(n, sigma):
    i = np.arange(n)
    k = np.exp(-0.5 * ((i[:, None] - i[None, :]) / sigma) ** 2)
    return k / (np.sqrt(2 * np.pi) * sigma)


def blur(a, sx, sy):
    """Separable gaussian with zero padding (the layers fade to nothing)."""
    if sx > 0:
        a = a @ gauss_matrix(a.shape[1], sx)
    if sy > 0:
        a = gauss_matrix(a.shape[0], sy) @ a
    return a


def resample_rows(layer, src_rows):
    """Row y of the result is `layer` sampled at the fractional row src_rows[y]."""
    out = np.zeros_like(layer)
    i = np.floor(src_rows).astype(int)
    t = src_rows - i
    ok = (i >= 0) & (i < layer.shape[0] - 1)
    out[ok] = (1 - t[ok])[:, None] * layer[i[ok]] + t[ok][:, None] * layer[i[ok] + 1]
    return out


def squash(layer, f):
    """Scale a layer vertically about AXIS by f (it stays on its own side)."""
    y = np.arange(layer.shape[0], dtype=float)
    return resample_rows(layer, AXIS + (y - AXIS) / f)


def mirror(layer, k):
    """Reflect a layer about AXIS, squashed by k, into the rows below it."""
    y = np.arange(layer.shape[0], dtype=float)
    out = resample_rows(layer, AXIS - (y - AXIS) / k)
    out[y < AXIS] = 0
    return out


def soften(car_img, sigma):
    """Blur the car's colour (not its outline) by `sigma` px.

    The fifteen were cut at 1:1 from 1374 x 768 JPEG frames; a car cut from a
    bigger render and shrunk carries detail none of them has — the SLS, from a
    2816px render at 0.34x, measured 9.7 on the fine-detail scale (mean
    |L - blur 1.5px| on the body) against a median 5.3 for the fifteen, the
    sharpest car in the garage by a distance. Premultiplied, so no dark rim
    bleeds in from the transparent pixels; alpha is left as cut.
    """
    a = np.asarray(car_img).astype(float) / 255
    alpha = a[:, :, 3]
    pre = a[:, :, :3] * alpha[:, :, None]
    soft_pre = np.stack([blur(pre[:, :, c], sigma, sigma) for c in range(3)], 2)
    soft_a = blur(alpha, sigma, sigma)
    rgb = np.where(soft_a[:, :, None] > 1e-4, soft_pre / np.maximum(soft_a, 1e-4)[:, :, None], 0)
    rgb = np.where(alpha[:, :, None] > 0, rgb, a[:, :, :3])
    return Image.fromarray(np.round(np.dstack([np.clip(rgb, 0, 1), alpha]) * 255).astype(np.uint8), "RGBA")


def ground_layers(car):
    """The floor under a car, derived from its silhouette.

    `car` is straight-alpha RGBA as floats 0..1, already on the hero canvas.
    Returns (alpha, premultiplied rgb) of the floor alone.
    """
    alpha = car[:, :, 3]
    body = (alpha > CAR / 255).astype(float)
    ys, _ = np.nonzero(body)
    car_h = ys.max() - ys.min() + 1
    height = np.clip(AXIS - np.arange(H, dtype=float), 0, None)[:, None]

    occlusion = AO_STRENGTH * blur(squash(body * np.exp(-height / AO_FALLOFF), AO_SQUASH), AO_BLUR_X, AO_BLUR_Y)
    sliver = body * ((height > 0) & (height < CONTACT_SLIVER))
    contact = CONTACT_STRENGTH * blur(mirror(sliver, CONTACT_SQUASH), CONTACT_BLUR, CONTACT_BLUR)
    shade = 1 - (1 - np.clip(occlusion, 0, 1)) * (1 - np.clip(contact, 0, 1))

    solid = alpha * body
    pre = car[:, :, :3] * solid[:, :, None]
    soft_a = blur(solid, REFLECT_BLUR, REFLECT_BLUR)
    soft_rgb = np.stack([blur(pre[:, :, c], REFLECT_BLUR, REFLECT_BLUR) for c in range(3)], 2)
    ref_a = mirror(soft_a, REFLECT_SQUASH)
    ref_rgb = np.stack([mirror(soft_rgb[:, :, c], REFLECT_SQUASH) for c in range(3)], 2)
    ref_rgb = REFLECT_COLOUR * ref_rgb / np.maximum(ref_a, 1e-6)[:, :, None]
    u = ((np.arange(H) - AXIS) / REFLECT_SQUASH) / car_h
    fade = np.interp(np.clip(u, 0, 1), *zip(*REFLECT_FADE)) / 255
    fade[np.arange(H) < AXIS] = 0
    ref_a = np.clip(ref_a * fade[:, None], 0, 1)

    # The reflection lies on the floor, over the two shadows.
    floor_a = ref_a + shade * (1 - ref_a)
    floor_pre = np.clip(ref_rgb, 0, 1) * ref_a[:, :, None]
    return floor_a, floor_pre


def over(top_a, top_pre, under_a, under_pre):
    return top_a + under_a * (1 - top_a), top_pre + under_pre * (1 - top_a)[:, :, None]


def to_rgba(a, pre):
    rgb = np.where(a[:, :, None] > 0, pre / np.maximum(a, 1e-6)[:, :, None], 0)
    out = np.dstack([np.clip(rgb, 0, 1), np.clip(a, 0, 1)])
    return Image.fromarray(np.round(out * 255).astype(np.uint8), "RGBA")


def bbox(alpha8):
    ys, xs = np.nonzero(alpha8 > CAR)
    return xs.min(), xs.max(), ys.min(), ys.max()


def place(cutout, width):
    """Scale the cut-out so the car is `width` px wide and stand it on the canvas."""
    src = np.asarray(cutout)
    x0, x1, _, _ = bbox(src[:, :, 3])
    scale = width / (x1 - x0 + 1)
    for _ in range(6):  # resampling rounds the edge; nudge until it lands
        size = (round(cutout.width * scale), round(cutout.height * scale))
        small = cutout.convert("RGBa").resize(size, Image.LANCZOS).convert("RGBA")
        sx0, sx1, _, sy1 = bbox(np.asarray(small)[:, :, 3])
        got = sx1 - sx0 + 1
        if got == width:
            break
        scale *= width / got
    ox = round(CENTRE_X - (sx0 + sx1) / 2)
    oy = GROUND_ROW - sy1
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    canvas.paste(small, (ox, oy))
    if np.asarray(small)[:, :, 3].sum() != np.asarray(canvas)[:, :, 3].sum():
        sys.exit("the car does not fit the 898 x 660 canvas at this width")
    return canvas, scale


def ground_line(alpha8):
    """scripts/measure-ground-line.mjs, line for line."""
    car = alpha8 > CAR
    ys, xs = np.nonzero(car)
    x0, x1 = xs.min(), xs.max()
    span = x1 - x0
    bot = {x: np.nonzero(car[:, x])[0].max() for x in range(x0, x1 + 1) if car[:, x].any()}
    left = [v for k, v in bot.items() if k < x0 + span * 0.38]
    right = [v for k, v in bot.items() if k > x0 + span * 0.62]
    return round(((max(left) + max(right)) / 2) / alpha8.shape[0], 4)


def band_mean(rgb, lum, mask):
    c = np.round(rgb[mask].mean(0)).astype(int)
    return "#%02x%02x%02x" % tuple(c)


def palette(cutout, hue_band=None):
    """Five swatches, the way the fifteen's were taken.

    Each of the fifteen's swatches is the mean colour of the car's pixels in
    a narrow brightness band (checked on the 812 GTS, SF90, Purosangue,
    Senna and GLS 600: every swatch within 3 levels). A black car gets greys
    off that ladder, a highlight, and the ~38 near-black all fifteen end on:
    the 812 GTS is 88 / 118 / 152 / highlight / 38.

    `hue_band` ("lo-hi" degrees) swaps the 118 grey for the lit pixels of
    one hue, placed first as the fifteen place their livery colour.
    """
    a = np.asarray(cutout).astype(float)
    body = a[:, :, 3] > CAR
    rgb = a[:, :, :3][body]
    lum = rgb @ [0.299, 0.587, 0.114]
    sat = (rgb.max(1) - rgb.min(1)) / np.maximum(rgb.max(1), 1)
    grey = sat < 0.15
    swatches = [
        band_mean(rgb, lum, grey & (abs(lum - 88) < 8)),
        band_mean(rgb, lum, grey & (abs(lum - 118) < 8)),
        band_mean(rgb, lum, grey & (abs(lum - 152) < 8)),
        band_mean(rgb, lum, lum >= 235),
        band_mean(rgb, lum, grey & (abs(lum - 38) < 8)),
    ]
    if hue_band:
        lo, hi = (float(v) for v in hue_band.split("-"))
        r, g, b = rgb.T
        hue = np.degrees(np.arctan2(np.sqrt(3) * (g - b), 2 * r - g - b)) % 360
        # Lit only: through glass most of a colour sits in shadow near black.
        lit = (hue >= lo) & (hue < hi) & (sat > 0.25) & (lum >= 72) & (lum < 104)
        swatches = [band_mean(rgb, lum, lit)] + swatches[:1] + swatches[2:]
    return swatches


def build_tile(hero):
    """The car and its floor on the stage the other tiles show.

    Not a crop of the render: the SLS render's floor is luminance 62-68 and
    every other tile's ground is near-black, so it would be the one grey card.
    The stage matches the fifteen's colour, not their tiled floor texture.
    """
    y = np.linspace(0, 1, TILE_H)[:, None, None]
    top, bottom = np.array(TILE_TOP), np.array(TILE_BOTTOM)
    stage = top + (bottom - top) * y ** 1.2
    stage = np.broadcast_to(stage, (TILE_H, TILE_W, 3)).copy()
    # A level of noise, so quality 86 does not band a gradient this dark.
    stage += np.random.default_rng(16).uniform(-0.5, 0.5, stage.shape)

    size = (round(W * TILE_SCALE), round(H * TILE_SCALE))
    small = hero.convert("RGBa").resize(size, Image.LANCZOS).convert("RGBA")
    x0, x1, _, _ = bbox(np.asarray(hero)[:, :, 3])
    half = (x1 - x0 + 1) * TILE_SCALE / 2
    centre = min(TILE_CENTRE_X, TILE_W + TILE_MAX_OVERRUN - half)
    ox = round(centre - CENTRE_X * TILE_SCALE)
    oy = round(TILE_GROUND_ROW - (GROUND_ROW + 1) * TILE_SCALE)
    layer = Image.new("RGBA", (TILE_W, TILE_H), (0, 0, 0, 0))
    layer.alpha_composite(small, (max(ox, 0), max(oy, 0)), (max(-ox, 0), max(-oy, 0)))
    base = Image.fromarray(np.round(np.clip(stage, 0, 255)).astype(np.uint8), "RGB").convert("RGBA")
    base.alpha_composite(layer)
    return base.convert("RGB")


def detail(img):
    """Fine detail on the body: mean |L - gaussian(L, 1.5px)| where alpha is solid."""
    a = np.asarray(img.convert("RGBA")).astype(float)
    solid = np.asarray(Image.fromarray(((a[:, :, 3] >= 250) * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(7))) > 127
    lum = a[:, :, :3] @ [0.299, 0.587, 0.114]
    soft = np.asarray(Image.fromarray(np.clip(lum, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.5))).astype(float)
    return float(np.abs(lum - soft)[solid].mean())


def build(cutout_path, slug, width, hue_band, sigma=0.0):
    cutout = Image.open(cutout_path).convert("RGBA")
    car, scale = place(cutout, width)
    if sigma:
        car = soften(car, sigma)
    f = np.asarray(car).astype(float) / 255
    floor_a, floor_pre = ground_layers(f)
    a, pre = over(f[:, :, 3], f[:, :, :3] * f[:, :, 3:], floor_a, floor_pre)
    hero = to_rgba(a, pre)

    alpha8 = np.asarray(hero)[:, :, 3]
    car8 = np.asarray(car)[:, :, 3]
    x0, x1, y0, y1 = bbox(alpha8)
    stray = ((alpha8 > CAR) & (car8 <= CAR)).sum()
    if (x0, x1, y0, y1) != bbox(car8) or y1 != GROUND_ROW:
        sys.exit(f"the floor is being read as car: bbox {bbox(car8)} became {(x0, x1, y0, y1)}")

    hero_path = os.path.join(CARS, f"{slug}.png")
    tile_path = os.path.join(CARS, f"{slug}-tile.jpg")
    hero.save(hero_path, optimize=True)
    build_tile(hero).save(tile_path, quality=TILE_QUALITY, subsampling="4:2:0")

    print(f"hero      {os.path.relpath(hero_path, ROOT)}  {W} x {H}")
    print(f"tile      {os.path.relpath(tile_path, ROOT)}  {TILE_W} x {TILE_H}")
    print(f"scale     {scale:.4f} of the cut-out")
    print(f"car       {x1 - x0 + 1} x {y1 - y0 + 1}px, x {x0}-{x1}, rows {y0}-{y1}, centre {(x0 + x1) / 2}")
    print(f"floor     {stray} rim pixels pushed over alpha {CAR} by the floor (bbox unchanged)")
    print(f"groundLine {ground_line(alpha8)}")
    print(f"palette   {palette(cutout, hue_band)}")
    print(f"detail    {detail(hero):.2f} (fifteen: median 5.32, range 2.62-7.18)")
    print(f"imports   a new car: import {slug}-tile.jpg and {slug}.png in app/lib/carImageAssets.ts")


def check(slug):
    """Re-ground a shipped hero from its own car and diff it against the file."""
    shipped = np.asarray(Image.open(os.path.join(CARS, f"{slug}.png")).convert("RGBA")).astype(float) / 255
    body = shipped[:, :, 3] > CAR / 255
    car = shipped * body[:, :, None]
    floor_a, _ = ground_layers(car)
    a, _ = over(car[:, :, 3], car[:, :, :3] * car[:, :, 3:], floor_a, floor_a[:, :, None] * 0)
    below = ~body
    below[:430] = False
    diff = (a - shipped[:, :, 3])[below] * 255
    print(f"{slug:36} rms {np.sqrt((diff ** 2).mean()):5.2f}   max {np.abs(diff).max():4.0f}   (alpha levels, rows 430-659, off the car)")


if __name__ == "__main__":
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("cutout", nargs="?")
    p.add_argument("slug", nargs="?")
    p.add_argument("--width", type=int, help="the car's width in px (alpha > 200); the fifteen run 660-758")
    p.add_argument("--hue", metavar="LO-HI", help="one livery hue for the palette, in degrees, e.g. 18-45")
    p.add_argument("--soften", type=float, default=0.0, metavar="SIGMA",
                   help="blur the car's colour to the fifteen's detail level (see soften())")
    p.add_argument("--check", nargs="+", metavar="SLUG")
    args = p.parse_args()
    if args.check:
        for s in args.check:
            check(s)
    elif args.cutout and args.slug and args.width:
        build(args.cutout, args.slug, args.width, args.hue, args.soften)
    else:
        p.error("give <cutout> <slug> --width, or --check <slug> ...")
