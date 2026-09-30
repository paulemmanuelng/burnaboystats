#!/usr/bin/env python3
"""Region views for the phone tour map: each candidate view as a lon/lat box,
the same box in map units, and what it does in a phone map frame. Read-only;
reads derived.json (make it with derive.py). Usage, from this folder:

    python3 region_views.py [frame_width]      # default 364 (a 402-wide phone)

A view is a lon/lat box projected exactly as the Dai Dai EUROPE box is
(app/components/DaiDaiReplay.tsx:52-63): x from the box's west and east
longitudes at the latitude nearest the equator (where Equal Earth is widest),
y from its north and south latitudes. In a frame of W x H px the view keeps
its centre and is widened in one direction to the frame's shape, so
scale = min(W / w, H / h) px per map unit. "World" is the whole 900-unit width.

Sizes: a country's size is its bounding box (all its pieces) times the scale.
Dot spacing is centre to centre between the two nearest dots inside the view.
Dots keep a steady screen size in every view (the listeners map does this), so
only their spacing changes.
"""
import json, math, sys

W = float(sys.argv[1]) if len(sys.argv) > 1 else 364.0
A1, A2, A3, A4 = 1.340264, -0.081106, 0.000893, 0.003796
SCALE, TX, TY = 167.8786, 448.6977, 235.3565
def proj(lon, lat):  # app/lib/equalEarth.ts, unrounded
    l = math.radians(lon); p = math.radians(lat)
    th = math.asin(math.sqrt(3) / 2 * math.sin(p)); t2 = th * th; t6 = t2 ** 3
    x = 2 * math.sqrt(3) * l * math.cos(th) / (3 * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)))
    y = th * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))
    return SCALE * x + TX, TY - SCALE * y

def box_units(w_lon, e_lon, s_lat, n_lat):
    near_eq = 0 if s_lat <= 0 <= n_lat else (s_lat if abs(s_lat) < abs(n_lat) else n_lat)
    x0 = proj(w_lon, near_eq)[0]; x1 = proj(e_lon, near_eq)[0]
    y0 = proj(0, n_lat)[1]; y1 = proj(0, s_lat)[1]
    return x0, y0, x1, y1

VIEWS = [  # name, (west lon, east lon, south lat, north lat), the countries it is for
    ("Europe, all 19 incl. Turkey", (-11, 45, 34, 71), "Europe"),
    ("Europe, the Dai Dai box (cuts Turkey)", (-11, 32, 35, 71), "Europe"),
    ("Africa + Mauritius", (-18, 58, -35, 37.5), "Africa"),
    ("Caribbean only", (-80, -59, 9.5, 27.5), "Caribbean"),
    ("Caribbean + Guyana & Suriname", (-80, -53.5, 1, 27.5), None),
    ("Americas & Caribbean (Mexico to Suriname)", (-118, -53.5, 1, 33), None),
    ("The whole Americas", (-168, -34, -34, 83), None),
]
HEIGHTS = [round(W * 470 / 900), 260, 300]

d = json.load(open("derived.json"))
shape = {int(k): v for k, v in d["shapeInfo"].items()}
pcs = d["pcs"]
def ubox(p):
    if p["marker"]:
        x, y = p["marker"]; return (x, y, x, y)
    return tuple(shape[p["code"]]["bbox"])
world_k = W / 900

print(f"Frame width {W:.0f} px (World = {world_k:.4f} px per map unit)\n")
print("| View | lon / lat box | Same box in map units (x, y, w, h) | " + " | ".join(f"Frame {W:.0f} x {h}" for h in HEIGHTS) + " |")
print("|---|---|---|" + "---|" * len(HEIGHTS))
details = []
for name, (wl, el, sl, nl), region in VIEWS:
    x0, y0, x1, y1 = box_units(wl, el, sl, nl)
    w, h = x1 - x0, y1 - y0
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    cells = []
    for H in HEIGHTS:
        k = min(W / w, H / h)
        vw, vh = W / k, H / k  # the visible rect in map units, centred on the box
        vx0, vy0 = cx - vw / 2, cy - vh / 2
        vis = [p for p in pcs if (lambda b: b[2] >= vx0 and b[0] <= vx0 + vw and b[3] >= vy0 and b[1] <= vy0 + vh)(ubox(p))]
        dots = [p for p in vis if p["marker"]]
        gap = None
        for i in range(len(dots)):
            for j in range(i + 1, len(dots)):
                a, b = dots[i]["marker"], dots[j]["marker"]
                g = math.hypot(a[0] - b[0], a[1] - b[1])
                if gap is None or g < gap[0]:
                    gap = (g, dots[i]["name"], dots[j]["name"])
        size = lambda nm: next(((lambda b: f"{nm} {(b[2]-b[0])*k:.1f} x {(b[3]-b[1])*k:.1f}")(ubox(p)) for p in vis if p["name"] == nm), None)
        bits = [f"{k / world_k:.1f}x"]
        for nm in ("Belgium", "Rwanda", "Trinidad & Tobago"):
            s = size(nm)
            if s: bits.append(s)
        if gap: bits.append(f"closest dots {gap[0] * k:.1f} px ({gap[1]}, {gap[2]})")
        cells.append(" · ".join(bits))
        others = [p["name"] for p in vis if region and p["region"] != region]
        details.append((name, H, len(vis), [p["name"] for p in vis if not region or p["region"] == region], others, (vx0, vy0, vw, vh)))
    print(f"| {name} | lon {wl} to {el}, lat {sl} to {nl} | {x0:.1f}, {y0:.1f}, {w:.1f}, {h:.1f} | " + " | ".join(cells) + " |")

print("\nPlayed countries visible in each view (any part inside the frame), and those from another region:\n")
for name, H, n, own, others, r in details:
    print(f"- {name}, frame {W:.0f} x {H}: {n} visible (visible rect x {r[0]:.1f}, y {r[1]:.1f}, w {r[2]:.1f}, h {r[3]:.1f})."
          + (f" From other regions: {', '.join(others)}." if others else ""))

print("\nAsia and the other regions without a view, at World in this frame width:")
for nm in ("United Arab Emirates", "Guyana", "Suriname", "Mexico", "New Zealand"):
    p = next(p for p in pcs if p["name"] == nm); b = ubox(p)
    print(f"- {nm}: {(b[2]-b[0])*world_k:.1f} x {(b[3]-b[1])*world_k:.1f} px")
