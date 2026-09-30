#!/usr/bin/env python3
"""Per-country chart peak, plaque count and certifications board for the 57
countries on the tour map. Read-only. Usage (from this folder):

    python3 country_links.py <repo-root> [boards.txt]

Reads app/data/performedCountries.ts, app/data/charts.ts,
app/data/certifications.ts and app/lib/isoCodes.ts by regex. The board list is
the live /compare/in index (one slug per line); without it, a board is assumed
wherever Burna Boy holds a plaque, which undercounts: a board exists for any
market where Burna OR a board artist holds one (app/lib/certCountry.ts
countryBoardLinks / certCountryCodes).

Prints a markdown table (one row per country, in the map's region order) and
the totals under it.
"""
import re, sys, unicodedata
ROOT = sys.argv[1]
BOARDS = None
if len(sys.argv) > 2:
    BOARDS = {l.strip() for l in open(sys.argv[2]) if l.strip()}

def lines(p):
    return open(f"{ROOT}/{p}", encoding="utf8").read().split("\n")

iso_src = open(f"{ROOT}/app/lib/isoCodes.ts", encoding="utf8").read()
A2 = {a: int(n) for a, n in re.findall(r"\b([A-Z]{2}): (\d+)", iso_src)}
ISO2A2 = {n: a for a, n in A2.items()}

# ── the map's 57 countries ────────────────────────────────────────────────
pcs = []
for i, l in enumerate(lines("app/data/performedCountries.ts"), 1):
    if l.strip().startswith("{ name:"):
        name = re.search(r'name: "([^"]+)"', l).group(1)
        code = int(re.search(r"code: (\d+)", l).group(1))
        region = re.search(r'region: "([^"]+)"', l).group(1)
        pcs.append((region, name, code, i))
REGION_ORDER = ["Africa", "Europe", "Asia", "North America", "South America", "Caribbean", "Oceania"]
pcs.sort(key=lambda r: (REGION_ORDER.index(r[0]), r[3]))

# ── chart bodies and entries ──────────────────────────────────────────────
ch = lines("app/data/charts.ts")
BODY = {}
for l in ch:
    m = re.match(r'\s*([A-Z]{2,4}): \{ name: "[^"]+", flag: "[^"]+", body: "([^"]+)"', l)
    if m:
        BODY[m.group(1)] = m.group(2)
peaks = {}  # code -> list of (peak, title, kind, line)
kind = None; title = None
for i, l in enumerate(ch, 1):
    s = l.strip()
    m = re.match(r"export const (albumCharts|singleCharts|featureCharts)", s)
    if m:
        kind = {"albumCharts": "album", "singleCharts": "single", "featureCharts": "feature"}[m.group(1)]
        continue
    if kind is None or s.startswith("//"):
        continue
    if s.startswith("];"):
        kind = None
        continue
    t = re.search(r'\{ title: "((?:[^"\\]|\\.)*)"', s)
    if t:
        title = t.group(1)
    for c, p in re.findall(r'\{ c: "([A-Z]{2,4})", peak: (\d+)', s):
        peaks.setdefault(c, []).append((int(p), title, kind, i))

# ── certifications ───────────────────────────────────────────────────────
ce = lines("app/data/certifications.ts")
CBODY = {}
for l in ce:
    m = re.match(r'\s*([A-Z]{2}): \{ name: "([^"]+)", flag: "[^"]+", body: "([^"]+)"', l)
    if m:
        CBODY[m.group(1)] = (m.group(2), m.group(3))
plaques = {}
kind = None
for i, l in enumerate(ce, 1):
    s = l.strip()
    m = re.match(r"export const (albums|singles|features): Release", s)
    if m:
        kind = m.group(1)
        continue
    if kind is None or s.startswith("//"):
        continue
    if s.startswith("];"):
        kind = None
        continue
    for c in re.findall(r'\{ c: "([A-Z]{2})", level: "', s):
        plaques[c] = plaques.get(c, 0) + 1

def slug(name):
    n = unicodedata.normalize("NFKD", name)
    n = "".join(ch for ch in n if not unicodedata.combining(ch)).lower()
    return re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", n))

rows = []
for region, name, code, line in pcs:
    a2 = ISO2A2.get(code)
    ps = sorted(peaks.get(a2, [])) if a2 else []
    best = ps[0] if ps else None
    n_best = sum(1 for p in ps if best and p[0] == best[0])
    pl = plaques.get(a2, 0) if a2 else 0
    # The board URL is the country's NAME as a slug (certCountry.ts countrySlug),
    # so it is matched by the map's own name; a board can exist for a market
    # with none of Burna Boy's plaques (Mexico), which the card then skips.
    board = None
    sl = slug(CBODY[a2][0]) if a2 in CBODY else slug(name)
    if BOARDS is None:
        board = f"/compare/in/{sl}" if pl else None
    elif sl in BOARDS:
        board = f"/compare/in/{sl}"
    rows.append({
        "region": region, "name": name, "a2": a2 or "—",
        "peak": best[0] if best else None,
        "peakRelease": f'{best[1]} ({best[2]})' + (f" +{n_best - 1} more at that peak" if n_best > 1 else "") if best else None,
        "chart": BODY.get(a2) if best else None,
        "plaques": pl, "certBody": CBODY[a2][1] if a2 in CBODY and pl else None,
        "board": board,
    })

print("| Region | Country | Code | Best official-chart peak | Release (kind) at that peak | Chart (charts.ts body) | Burna plaques | Certifying body | Certifications board |")
print("|---|---|---|---|---|---|---|---|---|")
for r in rows:
    pk = f"No. {r['peak']}" if r["peak"] else "none"
    print(f"| {r['region']} | {r['name']} | {r['a2']} | {pk} | {r['peakRelease'] or '—'} | {r['chart'] or '—'} | {r['plaques'] or 0} | {r['certBody'] or '—'} | {('`' + r['board'] + '`') if r['board'] else 'none'} |")
wp = sum(1 for r in rows if r["peak"])
wl = sum(1 for r in rows if r["plaques"])
nb = sum(1 for r in rows if not r["peak"] and not r["plaques"])
bd = sum(1 for r in rows if r["board"])
bl = sum(1 for r in rows if r["board"] and r["plaques"])
print()
print(f"Totals: {len(rows)} countries · {wp} with a Burna Boy chart peak · {wl} with at least one Burna Boy plaque · "
      f"{nb} with neither · {bd} with a certifications board, {bl} of them holding a Burna Boy plaque (the card links only those)")
