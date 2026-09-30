#!/usr/bin/env python3
"""Share of each charted country's AREA under the Dai Dai Europe inset, in map units.
The inset rect (border box, opaque) and the world map's drawn box come from the
live measurement (daidai-out.json); the shapes from worldShapes.ts."""
import json, re, sys
d = json.load(open("derived.json"))
dd = json.load(open("daidai-out.json"))["evalResult"]
shapes = {int(k): v for k, v in d["shapeInfo"].items()}
ws = open(sys.argv[1] + "/app/data/worldShapes.ts").read().split("\n")
line = next(l for l in ws if l.startswith("export const worldShapes"))
paths = {s["code"]: s["d"] for s in json.loads(line.split("= ", 1)[1].rstrip(";"))}
iso_src = open(sys.argv[1] + "/app/lib/isoCodes.ts").read()
A2 = {a: int(n) for a, n in re.findall(r"\b([A-Z]{2}): (\d+)", iso_src)}

def rings(dstr):
    out = []
    for ring in dstr.split("Z"):
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
    def ix(x):
        return lambda a, b: (x, a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]))
    def iy(y):
        return lambda a, b: (a[0] + (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]), y)
    p = poly
    for inside, inter in [(lambda q: q[0] >= x0, ix(x0)), (lambda q: q[0] <= x1, ix(x1)), (lambda q: q[1] >= y0, iy(y0)), (lambda q: q[1] <= y1, iy(y1))]:
        if not p: break
        p = cut(p, inside, inter)
    return p

for key in ["w1440", "w1024"]:
    m = dd[key]
    wx, wy, ww, wh = m["world"]
    cw, ch = ww - 12, wh - 12            # .world padding 6px (DaiDaiReplay.module.css:169)
    k = min(cw / 900, ch / 470)
    ox = wx + 6 + (cw - 900 * k) / 2
    oy = wy + 6 + (ch - 470 * k) / 2
    ex, ey, ew, eh = m["europe"]
    box = ((ex - ox) / k, (ey - oy) / k, (ex + ew - ox) / k, (ey + eh - oy) / k)
    print(key, "px/unit %.4f" % k, "inset in map units x %.1f–%.1f y %.1f–%.1f" % (box[0], box[2], box[1], box[3]))
    codes = [u["code"] for u in m["underInset"]]
    for c in codes:
        iso = A2.get(c)
        rs = rings(paths[iso])
        tot = sum(area(r) for r in rs)
        inside = sum(area(clip(r, *box)) for r in rs if len(clip(r, *box)) >= 3)
        band = next(u["band"] for u in m["underInset"] if u["code"] == c)
        print("  %s iso %s band %s  area under inset %.0f%%" % (c, iso, band, 100 * inside / tot))
