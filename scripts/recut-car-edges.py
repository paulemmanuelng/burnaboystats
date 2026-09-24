#!/usr/bin/env python3
"""Re-edge the fifteen original car heroes: soft edges, clean gaps, no page type.

    python3 scripts/recut-car-edges.py            # all fifteen
    python3 scripts/recut-car-edges.py <slug> ... # some of them

Writes public/cars/<slug>.png in place. The tiles are not touched: they are
framed cards, not cut-outs, and none of the three faults below shows in them.

WHAT WAS WRONG (24 Sep 2026). 8b92e291 re-cut the fifteen from their frames in
docs/design/cars with a BINARY alpha: every edge pixel was all car or all
stage, so on a light page each silhouette stepped like a staircase, and its
outermost pixels — half the car, half the near-black stage — drew a dark line
round it. The cut before it (630568aa) was anti-aliased but clipped the cars.
Two gaps were also wrong: filling enclosed holes, so a windscreen stays glass,
also filled the stage showing under three rear wings (GT3 RS, Senna, Aventador
SVJ) — a dark slab in light mode. And the frames are whole-page mocks, so page
type printed over two cars: "DRIVING" across the Revuelto's windscreen, and
the leg of the SVJ headline's R on its roll hoop.

WHAT THIS DOES. The silhouette is 8b92e291's (read from git), and every car
pixel is the frame's own, bit for bit — each hero is a 1:1 crop of its frame
at FRAME_ORIGIN. Only the edge is re-cut:
  - a band 1.5px either side of the hard edge is matted against two local
    colours, the car just inside it and the stage just outside, and each
    partial pixel has the stage un-mixed from its colour, so the rim is the
    car's colour at part opacity rather than a dark line. Where car and stage
    are too alike to split, the edge is the hard one anti-aliased (0.6px);
  - on the lower body the "stage" is the car's reflection in the floor, so
    only the anti-aliased edge is used there and the car cannot grow into it;
    where page type or lines touch the car the same holds;
  - the pixels that set a hero's measurements — the sides of its alpha > 200
    box and each wheel band's lowest row (scripts/measure-ground-line.mjs) —
    stay solid, so cars.ts's groundLine and the pipeline's centring hold;
  - the floor is the shipped floor wherever the car did not cover it; under
    the car's now-soft rim it is build-car-hero.py's re-grounding of the same
    hard car, which --check puts within about one alpha level of the shipped.
No bigger originals exist: the cars are 660-758px wide in 1374px frames, so
this is as sharp as they get without new renders.
"""

import importlib.util
import io
import os
import subprocess
import sys

import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.dont_write_bytecode = True  # no scripts/__pycache__ from loading the pipeline
_spec = importlib.util.spec_from_file_location("build_car_hero", os.path.join(ROOT, "scripts", "build-car-hero.py"))
bch = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(bch)

HARD_CUT = "8b92e291"   # the commit whose binary-alpha heroes give the silhouettes

# Each hero's origin in its frame (docs/design/cars/MANIFEST.md): the heroes are
# bit-exact 1:1 crops, and run() refuses to continue if one is not.
FRAME = {
    "bugatti-chiron": ("IMG_1530.jpeg", (192, 73)),
    "mclaren-senna": ("IMG_1531.jpeg", (202, 77)),
    "ferrari-sf90-spider": ("IMG_1529.jpeg", (197, 69)),
    "ferrari-purosangue": ("IMG_0104.png", (222, 77)),
    "lamborghini-revuelto": ("IMG_0106.png", (233, 68)),
    "rolls-royce-cullinan-black-badge": ("IMG_1532.jpeg", (225, 79)),
    "lamborghini-aventador-svj-roadster": ("IMG_1534.jpeg", (212, 81)),
    "rolls-royce-dawn": ("IMG_1533.jpeg", (214, 86)),
    "ferrari-812-gts": ("IMG_1538.jpeg", (208, 80)),
    "porsche-911-gt3-rs": ("IMG_1535.jpeg", (224, 87)),
    "lamborghini-urus": ("IMG_1539.jpeg", (221, 84)),
    "mercedes-maybach-s680": ("IMG_0110.jpeg", (236, 74)),
    "mercedes-maybach-gls-600": ("IMG_0111.jpeg", (240, 77)),
    "ferrari-testarossa": ("IMG_0112.jpeg", (225, 66)),
    "ferrari-328-gts": ("IMG_0113.jpeg", (222, 51)),
}

# Stage showing under a rear wing, filled in by the hard cut. Each is grown
# from a seed on that stage (colour within `tol` of the seed), inside `box`,
# then taken to its convex hull less anything clearly not stage (> 35 levels
# off it), so the cut edge is straight where the wing and uprights are.
GAPS = {
    "porsche-911-gt3-rs": [
        dict(box=(624, 56, 706, 108), seed=(665, 85), tol=14),        # between the uprights
    ],
    "mclaren-senna": [
        dict(box=(544, 64, 742, 156), seed=(575, 95), tol=12),        # endplate to left upright
        dict(box=(544, 64, 742, 156), seed=(700, 110), tol=12),       # between the uprights
    ],
    "lamborghini-aventador-svj-roadster": [
        dict(box=(586, 70, 806, 130), seed=(750, 100), tol=14),       # right of the centre pylon
        dict(box=(586, 70, 806, 130), seed=(640, 84), tol=14),        # left of it
    ],
}

# "...REDEFINING EXTREME DRIVING" runs onto the Revuelto's windscreen. The glass
# shading and the A-pillar's highlight both run along the pillar, so the word
# is filled along curves parallel to it: y = a x^2 + b x + c, fitted to the
# pillar's top edge over x 296-365 (residual under 1px).
REVUELTO_TEXT_BOX = (309, 158, 388, 183)
REVUELTO_PILLAR = (2.06932130e-03, -1.89955089e+00, 5.60538570e+02)

# "...SVJ ROADSTER": the R's leg reaches the roll hoop's top edge, rows 93-94.
SVJ_R_BOX = (522, 92, 540, 95)


# ── small image tools ───────────────────────────────────────────────────────
def shift(m, dy, dx):
    """m moved so out[y, x] = m[y + dy, x + dx]; off-canvas reads False."""
    out = np.zeros_like(m)
    H, W = m.shape
    out[max(0, -dy):min(H, H - dy), max(0, -dx):min(W, W - dx)] = m[max(0, dy):min(H, H + dy), max(0, dx):min(W, W + dx)]
    return out


def dilate(m, steps=1, within=None, diagonal=False):
    for _ in range(steps):
        g = m.copy()
        g[1:] |= m[:-1]; g[:-1] |= m[1:]; g[:, 1:] |= m[:, :-1]; g[:, :-1] |= m[:, 1:]
        if diagonal:
            g[1:, 1:] |= m[:-1, :-1]; g[:-1, :-1] |= m[1:, 1:]; g[1:, :-1] |= m[:-1, 1:]; g[:-1, 1:] |= m[1:, :-1]
        m = g if within is None else g & within
    return m


def grow(seed, within):
    """The part of `within` connected to `seed`."""
    reg = seed & within
    while True:
        g = dilate(reg, within=within)
        if (g == reg).all():
            return reg
        reg = g


def open_close(m):
    ero = lambda a: ~dilate(~a, diagonal=True)
    dil = lambda a: dilate(a, diagonal=True)
    return ero(dil(dil(ero(m))))


def fill_holes(m):
    border = np.zeros_like(m)
    border[0] = border[-1] = True
    border[:, 0] = border[:, -1] = True
    return ~grow(border & ~m, ~m)


def edge_distance(M, R=8):
    """For car pixels, the distance to the nearest stage pixel; for stage pixels,
    to the nearest car pixel (pixel centres, capped at R + 1)."""
    d_in = np.full(M.shape, R + 1.0)
    d_out = np.full(M.shape, R + 1.0)
    for dy in range(-R, R + 1):
        for dx in range(-R, R + 1):
            r = np.hypot(dy, dx)
            if 0 < r <= R:
                sh = shift(M, dy, dx)
                d_in = np.where(M & ~sh, np.minimum(d_in, r), d_in)
                d_out = np.where(~M & sh, np.minimum(d_out, r), d_out)
    return d_in, d_out


def local_mean(I, ring, s, robust=0, tol=28.0):
    """Mean colour of the `ring` pixels near each pixel (normalised convolution),
    optionally dropping outliers; falls back to a 3x wider window where the ring is thin."""
    def nc(w, sig):
        w = w.astype(float)
        den = bch.blur(w, sig, sig)
        return np.stack([bch.blur(I[:, :, c] * w, sig, sig) for c in range(3)], 2) / np.maximum(den, 1e-9)[:, :, None], den
    X, den = nc(ring, s)
    for _ in range(robust):
        X, den = nc(ring & (np.sqrt(((I - X) ** 2).sum(2)) < tol), s)
    wide, _ = nc(ring, 3 * s)
    X[den < 0.03] = wide[den < 0.03]
    return X


LUM = np.array([0.299, 0.587, 0.114])


# ── the three fixes ─────────────────────────────────────────────────────────
def hull(points):
    pts = sorted(set(points))
    cross = lambda o, a, b: (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lo, up = [], []
    for p in pts:
        while len(lo) >= 2 and cross(lo[-2], lo[-1], p) <= 0:
            lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up) >= 2 and cross(up[-2], up[-1], p) <= 0:
            up.pop()
        up.append(p)
    return lo[:-1] + up[:-1]


def inside_polygon(poly, shape):
    """Pixel centres inside a polygon (even-odd rule)."""
    ys, xs = np.mgrid[0:shape[0], 0:shape[1]].astype(float)
    inside = np.zeros(shape, bool)
    for (xa, ya), (xb, yb) in zip(poly, poly[1:] + poly[:1]):
        crosses = (ya > ys) != (yb > ys)
        with np.errstate(divide="ignore", invalid="ignore"):
            xint = xa + (ys - ya) * (xb - xa) / (yb - ya)
        inside ^= crosses & (xs < xint)
    return inside


def wing_gaps(slug, I, M):
    gap = np.zeros_like(M)
    for g in GAPS.get(slug, []):
        x0, y0, x1, y1 = g["box"]
        box = np.zeros_like(M)
        box[y0:y1, x0:x1] = True
        sx, sy = g["seed"]
        seed = np.zeros_like(M)
        seed[sy, sx] = True
        stage = np.median(I[sy - 2:sy + 3, sx - 2:sx + 3].reshape(-1, 3), 0)
        d = np.sqrt(((I - stage) ** 2).sum(2))
        reg = grow(seed, box & M & (d < g["tol"]))
        reg = open_close(fill_holes(reg) & box) & M
        ys, xs = np.nonzero(reg)
        poly = hull(list(zip(xs.tolist(), ys.tolist())))
        reg = grow(seed, inside_polygon(poly, M.shape) & M & (d < 35))
        gap |= open_close(fill_holes(reg) & box) & M
    return gap


def fill_along(I, hole, car, slope, reach=80):
    """Fill `hole` by interpolating, along the curves dy/dx = slope(x), between the
    nearest car pixel outside the hole on either side."""
    out = I.copy()
    H, W = hole.shape
    for y, x in zip(*np.nonzero(hole)):
        ends = []
        for sgn in (1, -1):
            px, py = float(x), float(y)
            for t in range(1, reach):
                s = slope(px)
                n = np.hypot(1.0, s)
                px += sgn / n
                py += sgn * s / n
                qx, qy = int(round(px)), int(round(py))
                if not (0 <= qx < W and 0 <= qy < H) or not car[qy, qx]:
                    break
                if not hole[qy, qx]:
                    ends.append((t, I[qy, qx]))
                    break
        if len(ends) == 2:
            (t1, c1), (t2, c2) = ends
            out[y, x] = (c1 * t2 + c2 * t1) / (t1 + t2)
        elif ends:
            out[y, x] = ends[0][1]
    return out


def remove_revuelto_text(I, car):
    a, b, _ = REVUELTO_PILLAR
    slope = lambda x: 2 * a * min(max(x, 296.0), 365.0) + b
    x0, y0, x1, y1 = REVUELTO_TEXT_BOX
    box = np.zeros(car.shape, bool)
    box[y0:y1, x0:x1] = True
    box &= car
    glass = fill_along(I, box, car, slope)                  # the glass with no word on it
    word = box & (np.abs(I @ LUM - glass @ LUM) > 14)       # the letters stand out of it
    hole = dilate(word, 2) & box                            # with their JPEG halo
    out = fill_along(I, hole, car, slope)
    grain = (I @ LUM - glass @ LUM)[box & ~hole].std()      # the glass's own grain
    out[hole] += np.random.default_rng(5).normal(0, 0.8 * grain, hole.sum())[:, None]
    return np.clip(out, 0, 255), int(hole.sum())


def remove_svj_letter(I, car):
    """The R's pixels on the hoop's top row are type, not car; the row under them
    was tinted by it and takes the hoop's colour from further down."""
    x0, y0, x1, y1 = SVJ_R_BOX
    out = I.copy()
    type_px = np.zeros(car.shape, bool)
    for y in range(y0, y1):
        for x in range(x0, x1):
            if car[y, x]:
                warm = I[y, x, 0] - I[y, x, 2]
                if not car[y - 1, x] and warm > 25:
                    type_px[y, x] = True
                elif warm > 12:
                    out[y, x] = I[y + 1, x] if warm < 25 or not car[y + 2, x] else I[y + 2, x]
    return out, type_px


# ── the edge ────────────────────────────────────────────────────────────────
def page_overlay(I, M, d_out):
    """Page type and lines printed over the stage: brighter than the stage around
    them, reaching more than 3px from the car — and the run that joins them to it."""
    far = ~M & (d_out >= 3) & (d_out <= 14)
    stage = local_mean(I, far, 5.0, robust=2, tol=20)
    bright = ~M & (I @ LUM - stage @ LUM > 22)
    return dilate(bright & (d_out >= 3), 4, within=bright)


def matte(I, M, lower_row):
    d_in, d_out = edge_distance(M)
    F = local_mean(I, M & (d_in >= 1.5) & (d_in <= 3.2), 1.5)                  # car, just inside
    B = local_mean(I, ~M & (d_out >= 1.5) & (d_out <= 3.6), 1.5, robust=2)    # stage, just outside
    band = (M & (d_in <= 1.5)) | (~M & (d_out <= 1.5))

    FB = F - B
    c2 = (FB ** 2).sum(2)
    split = np.clip(((I - B) * FB).sum(2) / np.maximum(c2, 1.0), 0, 1)       # how much of each pixel is car
    trust = np.clip((np.sqrt(c2) - 12) / 24, 0, 1)                           # none below 12 levels apart
    smooth = np.clip(bch.blur(M.astype(float), 0.6, 0.6), 0, 1)              # the hard edge, anti-aliased

    # On the lower body a downward-facing edge sits on the floor reflection.
    soft = bch.blur(M.astype(float), 1.5, 1.5)
    gy = np.zeros_like(soft)
    gx = np.zeros_like(soft)
    gy[1:-1] = (soft[2:] - soft[:-2]) / 2
    gx[:, 1:-1] = (soft[:, 2:] - soft[:, :-2]) / 2
    facing_down = -gy / (np.hypot(gx, gy) + 1e-9) > 0.35
    trust[facing_down & (np.arange(M.shape[0])[:, None] > lower_row)] = 0
    near_type = dilate(page_overlay(I, M, d_out), 2)
    trust[near_type] = 0

    alpha = M.astype(float)
    alpha[band] = (trust * split + (1 - trust) * smooth)[band]
    alpha[near_type & ~M] = 0
    # JPEG grain moves the split by about a tenth either way: below that it is
    # a speck of haze beside the edge, not car
    alpha[band & (alpha < 0.12)] = 0

    # un-mix the stage from every partial pixel; the less of a pixel is car the
    # noisier that gets, so under half it eases toward the car's colour just inside
    a = np.maximum(alpha, 0.1)[:, :, None]
    unmixed = (I - (1 - a) * B) / a
    t = np.clip((alpha - 0.1) / 0.4, 0, 1)[:, :, None]
    rgb = I.copy()
    part = band & (alpha < 1) & ~near_type
    rgb[part] = np.clip(t * unmixed + (1 - t) * F, 0, 255)[part]
    rgb[alpha <= 0] = 0
    return alpha, rgb


def measured(M):
    """The pixels a hero is measured by: its box's four sides and the lowest row
    of each wheel band, exactly as ground_line() splits the car."""
    ys, xs = np.nonzero(M)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    keep = np.zeros_like(M)
    keep[:, x0] |= M[:, x0]
    keep[:, x1] |= M[:, x1]
    keep[y0] |= M[y0]
    keep[y1] |= M[y1]
    cols = np.arange(M.shape[1])
    bottom = np.array([np.nonzero(M[:, x])[0].max() if M[:, x].any() else -1 for x in cols])
    lowest = np.full(M.shape[1], M.shape[0])
    for band in (cols < x0 + (x1 - x0) * 0.38, cols > x0 + (x1 - x0) * 0.62):
        band &= bottom >= 0
        row = bottom[band].max()
        keep[row, cols[band & (bottom == row)]] = True
        lowest[band] = row
    return keep, (x0, x1, y0, y1), lowest


def hard_cut(slug):
    blob = subprocess.run(["git", "show", f"{HARD_CUT}:public/cars/{slug}.png"], cwd=ROOT, capture_output=True, check=True).stdout
    return np.asarray(Image.open(io.BytesIO(blob)).convert("RGBA")).astype(float)


def recut(slug):
    old = hard_cut(slug)
    M0 = old[:, :, 3] >= 255
    name, (ox, oy) = FRAME[slug]
    frame = np.asarray(Image.open(os.path.join(ROOT, "docs", "design", "cars", name)).convert("RGB")).astype(float)
    H, W = M0.shape
    I = frame[oy:oy + H, ox:ox + W]
    if I.shape[:2] != (H, W) or np.abs(I - old[:, :, :3])[M0].max() != 0:
        sys.exit(f"{slug}: the hero is not a 1:1 crop of {name} at {(ox, oy)}")

    notes = []
    M = M0.copy()
    if slug == "lamborghini-revuelto":
        I, n = remove_revuelto_text(I, M0)
        notes.append(f"'DRIVING' painted out of the windscreen ({n} px)")
    if slug == "lamborghini-aventador-svj-roadster":
        I, type_px = remove_svj_letter(I, M0)
        M &= ~type_px
        notes.append(f"the headline's R off the roll hoop ({int(type_px.sum())} px)")
    if slug in GAPS:
        gap = wing_gaps(slug, I, M)
        M &= ~gap
        notes.append(f"stage cut out from under the wing ({int(gap.sum())} px)")

    top = np.nonzero(M.any(1))[0].min()
    alpha, rgb = matte(I, M, top + 0.5 * (bch.GROUND_ROW - top))

    keep, (x0, x1, y0, y1), lowest = measured(M0)
    alpha[keep] = 1
    rgb[keep] = I[keep]

    # the shipped floor, and under the car the pipeline's floor for that hard car
    old_a = old[:, :, 3] / 255
    fa, fpre = bch.ground_layers(np.dstack([old[:, :, :3] / 255 * M0[:, :, None], M0.astype(float)]))
    floor_a = np.where(M0, fa, old_a)
    floor_pre = np.where(M0[:, :, None], fpre, old[:, :, :3] / 255 * old_a[:, :, None])

    rows = np.arange(H)[:, None]
    cols = np.arange(W)[None, :]
    outside = (cols < x0) | (cols > x1) | (rows < y0) | (rows > y1) | (rows > lowest[None, :])
    for _ in range(3):
        a, pre = bch.over(alpha, rgb / 255 * alpha[:, :, None], floor_a, floor_pre)
        hero = bch.to_rgba(a, pre)
        a8 = np.asarray(hero)[:, :, 3]
        # a soft rim over the floor must not read as car beyond the measured box
        spill = (a8 > bch.CAR) & ~M0 & outside
        if not spill.any():
            break
        target = (bch.CAR - 0.5) / 255
        alpha[spill] = np.clip((target - floor_a[spill]) / (1 - floor_a[spill]), 0, 1)

    was = old[:, :, 3].astype(np.uint8)
    if bch.bbox(a8) != bch.bbox(was) or bch.ground_line(a8) != bch.ground_line(was):
        sys.exit(f"{slug}: the recut moved the car: box {bch.bbox(was)} -> {bch.bbox(a8)}, "
                 f"groundLine {bch.ground_line(was)} -> {bch.ground_line(a8)}")
    path = os.path.join(bch.CARS, f"{slug}.png")
    hero.save(path, optimize=True)
    soft = int(((alpha > 0) & (alpha < 1)).sum())
    print(f"{slug:36} {soft:5d} soft edge px   groundLine {bch.ground_line(a8)}   {'; '.join(notes)}")


if __name__ == "__main__":
    for s in sys.argv[1:] or FRAME:
        if s not in FRAME:
            sys.exit(f"{s}: not one of the fifteen (the SLS is built by build-car-hero.py)")
        recut(s)
