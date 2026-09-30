#!/usr/bin/env python3
"""Sizes on screen, fill contrast, Antarctica band, Europe-box coverage — from derived.json."""
import json, math
d = json.load(open("derived.json"))
names = {p["code"]: p["name"] for p in d["pcs"]}
shape = {int(k): v for k, v in d["shapeInfo"].items()}

# ── on-screen scale per layout (px per viewBox unit), from the CSS ─────────
# phone: .mapCard margin 0 18px + 1px border (mobileTourMap.module.css:102) -> 375-36-2
# desktop: .wrap max 1240 pad 0 40 (map.module.css:12) + .frame 1px border (:64)
W = {"phone375": 375 - 36 - 2, "phone390": 390 - 36 - 2, "d1024": 1024 - 80 - 2, "d1440": 1240 - 80 - 2}
out = {}
for lay, w in W.items():
    k = w / 900
    rows = []
    for p in d["pcs"]:
        if p["code"] in shape:
            x0, y0, x1, y1 = shape[p["code"]]["bbox"]
            lx0, ly0, lx1, ly1 = shape[p["code"]]["largest"]
            rows.append((p["name"], (x1 - x0) * k, (y1 - y0) * k, (lx1 - lx0) * k, (ly1 - ly0) * k, False))
        else:
            dia = 6.4 * k
            rows.append((p["name"], dia, dia, dia, dia, True))
    under_one = [r for r in rows if min(r[1], r[2]) < 12]
    under_both = [r for r in rows if max(r[1], r[2]) < 12]
    under_one_largest = [r for r in rows if min(r[3], r[4]) < 12]
    under44 = [r for r in rows if min(r[1], r[2]) < 44]
    out[lay] = {
        "k": round(k, 4), "mapH": round(470 * k, 1),
        "underOneSide": len(under_one), "underBothSides": len(under_both),
        "underOneSideLargestRing": len(under_one_largest), "under44oneSide": len(under44),
        "dotDiameter": round(6.4 * k, 2), "dotWithStroke": round(7.4 * k, 2),
        "rows": [(n, round(a, 1), round(b, 1), round(c, 1), round(e, 1), m) for n, a, b, c, e, m in rows],
    }
json.dump(out, open("sizes.json", "w"), ensure_ascii=False, indent=1)
for lay in out:
    o = out[lay]
    print(lay, "k", o["k"], "mapH", o["mapH"], "under12 one side", o["underOneSide"], "both", o["underBothSides"],
          "largest ring one side", o["underOneSideLargestRing"], "under44", o["under44oneSide"], "dot", o["dotDiameter"], o["dotWithStroke"])

# ── contrast ───────────────────────────────────────────────────────────────
def hx(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))
def over(fg, a, bg):
    return tuple(round(a * f + (1 - a) * b) for f, b in zip(fg, bg))
def lum(c):
    def ch(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(v) for v in c)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
def cr(a, b):
    la, lb = lum(a), lum(b)
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)
def h(c): return "#%02X%02X%02X" % c
T = {  # globals.css:23-25, 141, 422, 464, 50
    "light": {"bg": "#f7f4ee", "bgsoft": "#ffffff", "bgsoft2": "#efeae1", "wash": "#945e00", "hit": "#5f3c00", "bright": "#945e00"},
    "dark": {"bg": "#0a0a0b", "bgsoft": "#141416", "bgsoft2": "#1c1c21", "wash": "#ffb627", "hit": "#ffd24a", "bright": "#ffd24a"},
}
scrim = hx("#0c0a09")
print()
for th, t in T.items():
    ground = hx(t["bgsoft"])  # .frame / .mapInner background: var(--bg-soft)
    on = over(hx(t["wash"]), 0.42, ground)
    off = hx(t["bgsoft2"])
    dot = over(hx(t["wash"]), 0.75, ground)
    hit = hx(t["hit"])
    stroke_on_on = over(scrim, 0.9, on)
    print(th, "on", h(on), "off", h(off), "on:off %.2f" % cr(on, off), "on:ground %.2f" % cr(on, ground),
          "off:ground %.2f" % cr(off, ground), "hit:on %.2f" % cr(hit, on), "hit:off %.2f" % cr(hit, off),
          "dot", h(dot), "dot:off %.2f" % cr(dot, off), "dot:ground %.2f" % cr(dot, ground),
          "border %s border:on %.2f border:off %.2f" % (h(stroke_on_on), cr(stroke_on_on, on), cr(over(scrim, 0.9, off), off)))
    # what wash alpha would reach 3:1 against the unperformed fill?
    for a in [x / 100 for x in range(42, 101)]:
        c = over(hx(t["wash"]), a, ground)
        if cr(c, off) >= 3:
            print("   3:1 reached at alpha", a, h(c))
            break
    else:
        print("   3:1 not reachable with this wash colour at any alpha (max %.2f at 100%%)" % cr(hx(t["wash"]), off))

# ── Antarctica band ────────────────────────────────────────────────────────
ant = shape.get(10)
print()
print("Antarctica bbox", ant["bbox"] if ant else None)
ymax = max(v["bbox"][3] for c, v in shape.items() if c != 10)
ymin = min(v["bbox"][1] for c, v in shape.items() if c != 10)
print("land except Antarctica y", ymin, ymax, "=> crop fraction below", round((470 - ymax) / 470, 3))
perf_ymax = max(shape[p["code"]]["bbox"][3] for p in d["pcs"] if p["code"] in shape)
perf_ymin = min(shape[p["code"]]["bbox"][1] for p in d["pcs"] if p["code"] in shape)
print("performed shapes y range", perf_ymin, perf_ymax)
