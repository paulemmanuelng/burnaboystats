#!/usr/bin/env python3
"""What sits under a corner inset box, for the Dai Dai replay map and for the
tour map, at 1440 and 1024. Area share per shape, by polygon clipping in map
units. Usage: python3 inset_candidates.py <repo-root>  (reads derived.json too)."""
import json, re, sys
ROOT = sys.argv[1]
ws = open(ROOT + "/app/data/worldShapes.ts").read().split("\n")
line = next(l for l in ws if l.startswith("export const worldShapes"))
paths = {s["code"]: s["d"] for s in json.loads(line.split("= ", 1)[1].rstrip(";"))}
iso_src = open(ROOT + "/app/lib/isoCodes.ts").read()
A2 = {a: int(n) for a, n in re.findall(r"\b([A-Z]{2}): (\d+)", iso_src)}
charts = open(ROOT + "/app/data/charts.ts").read().split("\n")
lo = next(i for i, l in enumerate(charts) if l.strip().startswith('{ title: "Dai Dai"'))
hi = next(i for i in range(lo, len(charts)) if charts[i].strip().startswith("], note:"))
dd = {}
for l in charts[lo:hi]:
    for c, p in re.findall(r'\{ c: "([A-Z]{2,4})", peak: (\d+)', l):
        dd[c] = int(p)
dd_iso = {A2[c]: (c, p) for c, p in dd.items() if c in A2 and A2[c] in paths}
d = json.load(open("derived.json"))
tour_iso = {p["code"]: p["name"] for p in d["pcs"] if p["code"] in paths}

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
def under(box, codes):
    res = []
    for iso in codes:
        rs = rings(paths[iso]); tot = sum(area(r) for r in rs)
        ins = sum(area(c) for c in (clip(r, *box) for r in rs) if len(c) >= 3)
        if ins / tot > 0.005:
            res.append((iso, round(100 * ins / tot)))
    return sorted(res, key=lambda x: -x[1])

def boxes(ox, oy, k, inner_w, inner_h, bw, bh, pad=9):
    """Corner boxes (border box, pad px from the frame's inner edges) -> map units."""
    to = lambda x, y: ((x - ox) / k, (y - oy) / k)
    out = {}
    for name, (x, y) in {"bottom-left": (pad, inner_h - pad - bh), "bottom-right": (inner_w - pad - bw, inner_h - pad - bh), "top-right": (inner_w - pad - bw, pad)}.items():
        a = to(x, y); b = to(x + bw, y + bh)
        out[name] = (a[0], a[1], b[0], b[1])
    return out

print("== Dai Dai replay map (the box is .mapBox's padding box; the inset is 31% of its width, 1:0.86)")
for label, W in [("1440", 746), ("1024", 884)]:
    H = 428
    cw, ch = W - 12, H - 12
    k = min(cw / 900, ch / 470)
    ox = 6 + (cw - 900 * k) / 2; oy = 6 + (ch - 470 * k) / 2
    bw = 0.31 * W; bh = bw * 0.86
    for name, box in boxes(ox, oy, k, W, H, bw, bh, pad=8).items():
        u = under(box, dd_iso.keys())
        print(f"  {label} {name} {bw:.0f}x{bh:.0f}px:", ", ".join(f"{dd_iso[i][0]} (peak {dd_iso[i][1]}) {pct}%" for i, pct in u) or "no charted country")
    bw = 200; bh = 172
    for name, box in boxes(ox, oy, k, W, H, bw, bh, pad=8).items():
        u = under(box, dd_iso.keys())
        print(f"  {label} {name} 200x172px:", ", ".join(f"{dd_iso[i][0]} (peak {dd_iso[i][1]}) {pct}%" for i, pct in u) or "no charted country")

print("== Tour map frame (the svg fills the frame exactly: aspect 900/470)")
for label, W in [("1440", 1158), ("1024", 942)]:
    k = W / 900; H = 470 * k
    for bw in (260, 200):
        bh = round(bw * 0.86)
        for name, box in boxes(0, 0, k, W, H, bw, bh, pad=9).items():
            u = under(box, tour_iso.keys())
            print(f"  {label} {name} {bw}x{bh}px:", ", ".join(f"{tour_iso[i]} {pct}%" for i, pct in u) or "no performed country")
    # the 8 dots
    for name, box in boxes(0, 0, k, W, H, 260, 224, pad=9).items():
        dots = [p["name"] for p in d["pcs"] if p["marker"] and box[0] <= p["marker"][0] <= box[2] and box[1] <= p["marker"][1] <= box[3]]
        if dots: print(f"  {label} {name} 260x224 dots under:", dots)
