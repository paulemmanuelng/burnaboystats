#!/usr/bin/env python3
"""The arithmetic behind the brief's §3.5 D (the desktop close-up) and §6.2
(the Dai Dai inset). Read-only; reads derived.json and the repo. Usage:

    python3 closeup_and_inset.py <repo-root>

Part A: what a corner box inside the TOUR MAP frame covers, with the frame
  uncropped (viewBox 0 0 900 470, today) and cropped to map y 10-415 (the
  planned Antarctica crop, viewBox 0 10 900 405). The box sits 9 px in from
  the frame's inner edges, like the Dai Dai inset (8 px + a 1 px border).
Part B: how much a close-up magnifies. The close-up's drawing area is the box
  minus a 1 px border and 4 px padding each side (the Dai Dai inset's build),
  and its content is fitted inside it: scale = min(inner_w / w, inner_h / h).
  Magnification = that scale / the world's scale at 1440 (1158 / 900).
Part C: the Dai Dai inset. Map box width by viewport, from the CSS
  (app/dai-dai/dai-dai.module.css .wrap: max 1280, padding 0 40;
  DaiDaiReplay.module.css .replay: padding 28 + 1 px border; .body 2fr:1fr with
  a 20 px gap at >= 1240, one column below): V <= 1239 -> V - 138;
  V >= 1240 -> (min(V, 1280) - 158) * 2/3. Height 430 (428 inside the border).
  The world SVG has 6 px padding and letterboxes to 900:470.
"""
import json, re, sys

ROOT = sys.argv[1]
# ── shared with inset_candidates.py: shapes, Dai Dai peaks, polygon clipping ──
ws = open(ROOT + "/app/data/worldShapes.ts").read().split("\n")
line = next(l for l in ws if l.startswith("export const worldShapes"))
paths = {s["code"]: s["d"] for s in json.loads(line.split("= ", 1)[1].rstrip(";"))}
A2 = {a: int(n) for a, n in re.findall(r"\b([A-Z]{2}): (\d+)", open(ROOT + "/app/lib/isoCodes.ts").read())}
charts = open(ROOT + "/app/data/charts.ts").read().split("\n")
lo = next(i for i, l in enumerate(charts) if l.strip().startswith('{ title: "Dai Dai"'))
hi = next(i for i in range(lo, len(charts)) if charts[i].strip().startswith("], note:"))
dd = {}
for l in charts[lo:hi]:
    for c, p in re.findall(r'\{ c: "([A-Z]{2,4})", peak: (\d+)', l):
        dd[c] = int(p)
dd_iso = {A2[c]: (c, p) for c, p in dd.items() if c in A2 and A2[c] in paths}
def rings(s):
    out = []
    for ring in s.split("Z"):
        n = [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", ring)]
        if len(n) >= 6:
            out.append(list(zip(n[0::2], n[1::2])))
    return out
def area(p):
    return abs(sum(p[i][0] * p[(i + 1) % len(p)][1] - p[(i + 1) % len(p)][0] * p[i][1] for i in range(len(p)))) / 2
def clip(poly, x0, y0, x1, y1):
    def cut(pts, inside, inter):
        out = []
        for i in range(len(pts)):
            a, b = pts[i - 1], pts[i]
            if inside(b):
                if not inside(a): out.append(inter(a, b))
                out.append(b)
            elif inside(a): out.append(inter(a, b))
        return out
    ix = lambda x: (lambda a, b: (x, a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0])))
    iy = lambda y: (lambda a, b: (a[0] + (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]), y))
    p = poly
    for inside, inter in [(lambda q: q[0] >= x0, ix(x0)), (lambda q: q[0] <= x1, ix(x1)), (lambda q: q[1] >= y0, iy(y0)), (lambda q: q[1] <= y1, iy(y1))]:
        if not p: break
        p = cut(p, inside, inter)
    return p
d = json.load(open("derived.json"))
pcs = d["pcs"]
tour = {p["code"]: p["name"] for p in pcs if p["code"] in paths}
dots = [(p["name"], p["marker"]) for p in pcs if p["marker"]]

def under(box, codes, names):
    out = []
    for iso in codes:
        rs = rings(paths[iso]); tot = sum(area(r) for r in rs)
        ins = sum(area(c) for c in (clip(r, *box) for r in rs) if len(c) >= 3)
        if ins / tot > 0.005:
            out.append(f"{names(iso)} {round(100 * ins / tot)}%")
    return out

def corners(W, H, bw, bh, pad=9):
    return {"bottom-left": (pad, H - pad - bh), "top-right": (W - pad - bw, pad),
            "bottom-right": (W - pad - bw, H - pad - bh), "top-left": (pad, pad)}

print("== A. Corner boxes on the tour map frame")
for crop, (vy, vh) in (("uncropped", (0, 470)), ("cropped y 10-415", (10, 405))):
    for label, W in (("1440", 1158), ("1024", 942)):
        k = W / 900; H = vh * k
        print(f"-- {crop}, {label}: frame {W} x {H:.0f}")
        for bw, bh in ((200, 172), (260, 224), (300, 258)):
            for name, (x, y) in corners(W, H, bw, bh).items():
                box = (x / k, vy + y / k, (x + bw) / k, vy + (y + bh) / k)
                hit = under(box, tour.keys(), lambda i: tour[i])
                dd = [n for n, (mx, my) in dots if box[0] <= mx <= box[2] and box[1] <= my <= box[3]]
                print(f"   {bw}x{bh} {name}: " + (", ".join(hit) if hit else "no played country")
                      + (f"; dots: {', '.join(dd)}" if dd else ""))

print("\n== B. Close-up magnification (world at 1440 = 1.2867 px/unit)")
wk = 1158 / 900
CONTENT = {
    "All of Europe, Turkey included (lon -11 to 45, lat 34 to 71)": (423.2, 31.0, 129.7, 92.4),
    "The Dai Dai Europe box (lon -11 to 32, lat 35 to 71, 1:0.86)": (420.9, 31.0, 103.9, 89.3),
    "Only the small countries (map x 426-501, y 56-118)": (426, 56, 75, 62),
}
be = next(p for p in pcs if p["name"] == "Belgium")
bb = d["shapeInfo"][str(be["code"])]["bbox"]
for name, (x, y, w, h) in CONTENT.items():
    cells = []
    for bw, bh in ((200, 172), (260, 224)):
        iw, ih = bw - 10, bh - 10
        s = min(iw / w, ih / h)
        cells.append(f"{bw}x{bh}: {s / wk:.1f}x, Belgium {(bb[2]-bb[0])*s:.0f} x {(bb[3]-bb[1])*s:.0f} px")
    print(f"   {name}: " + " | ".join(cells))

print("\n== C. The Dai Dai inset")
def box_w(V):
    return V - 138 if V <= 1239 else (min(V, 1280) - 158) * 2 / 3
EU = (420.9, 31.0, 103.9, 89.3)
for V in (901, 1000, 1024, 1100, 1180, 1239, 1240, 1280, 1440):
    Wb = box_w(V) - 2; Hb = 428
    cw, ch = Wb - 12, Hb - 12
    k = min(cw / 900, ch / 470)
    ox = 6 + (cw - 900 * k) / 2; oy = 6 + (ch - 470 * k) / 2
    res = []
    for tag, bw in (("31% (today)", 0.31 * (Wb + 2)), ("200 x 172", 200)):
        bh = bw * 0.86 if tag.startswith("31") else 172
        x, y = 8, Hb - 8 - bh
        box = ((x - ox) / k, (y - oy) / k, (x + bw - ox) / k, (y + bh - oy) / k)
        hit = under(box, dd_iso.keys(), lambda i: f"{dd_iso[i][0]} (No. {dd_iso[i][1]})")
        s = min((bw - 10) / EU[2], (bh - 10) / EU[3])
        res.append(f"{tag} {bw:.0f}x{bh:.0f}, Europe at {s / k:.2f}x the world: " + (", ".join(hit) if hit else "no charted country"))
    print(f"   {V}: map box {Wb + 2:.0f} px, world {k:.3f} px/unit -> " + " | ".join(res))
# option (a): bottom-right, sea east of New Zealand at 1440
Wb = box_w(1440) - 2; cw = Wb - 12; ch = 428 - 12; k = min(cw / 900, ch / 470); ox = 6 + (cw - 900 * k) / 2
nz = d["shapeInfo"][str(554)]["bbox"]
print(f"   1440: New Zealand's east edge at x {ox + nz[2] * k:.0f} px of a {Wb:.0f} px box -> {Wb - 8 - (ox + nz[2] * k):.0f} px of sea to the inset's 8 px margin")
