#!/usr/bin/env python3
"""Derive the tour-map tables from the repo's data files (read-only).

Reads app/data/tours.ts, app/data/tourRevenue.ts, app/data/performedCountries.ts
and app/data/worldShapes.ts by regex (each row is a one-line object literal), and
prints JSON with every derived figure plus the source line of every row.
"""
import json, re, sys, math
from collections import defaultdict, OrderedDict

ROOT = sys.argv[1] if len(sys.argv) > 1 else "."
def read(p):
    with open(f"{ROOT}/{p}", encoding="utf8") as f:
        return f.read().split("\n")

tours_src = read("app/data/tours.ts")
# liveMoments moved to its own file on 4 Oct 2026 (app/data/liveMoments.ts).
lm_src = read("app/data/liveMoments.ts")
rev_src = read("app/data/tourRevenue.ts")
pc_src = read("app/data/performedCountries.ts")
ws_src = read("app/data/worldShapes.ts")

def field(s, k):
    m = re.search(rf'\b{k}: "((?:[^"\\]|\\.)*)"', s)
    return m.group(1) if m else None
def num(s, k):
    m = re.search(rf'\b{k}: (\d+)', s)
    return int(m.group(1)) if m else None

ALIAS = {"USA": "United States", "UK": "United Kingdom", "US": "United States", "UAE": "United Arab Emirates"}

# ── performedCountries ─────────────────────────────────────────────────────
pcs = []
for i, line in enumerate(pc_src, 1):
    if line.strip().startswith("{ name:"):
        name = field(line, "name")
        ev = re.search(r'events: \[(.*?)\]', line).group(1)
        events = re.findall(r'"((?:[^"\\]|\\.)*)"', ev)
        mk = re.search(r'marker: \{ x: ([\d.]+), y: ([\d.]+) \}', line)
        pcs.append({
            "name": name, "code": num(line, "code"), "region": field(line, "region"),
            "flag": field(line, "flag"), "events": events, "more": "more: true" in line,
            "marker": [float(mk.group(1)), float(mk.group(2))] if mk else None, "line": i,
        })
pc_by_name = {c["name"]: c for c in pcs}

# ── tours: dated shows ─────────────────────────────────────────────────────
shows = []
tour = None
lo = next(i for i, l in enumerate(tours_src, 1) if l.startswith("export const tours"))
hi = next(i for i, l in enumerate(tours_src, 1) if l.startswith("export interface LiveMoment"))
for i in range(lo, hi):
    line = tours_src[i - 1]
    if re.match(r'^    name: "', line):
        tour = field(line, "name")
    if line.strip().startswith("{ date:"):
        d = field(line, "date")
        y = int(d[-4:])
        shows.append({
            "tour": tour, "date": d, "year": y, "venue": field(line, "venue"), "city": field(line, "city"),
            "country": ALIAS.get(field(line, "country"), field(line, "country")), "cap": num(line, "cap"), "line": i,
        })

# ── festivals / otherShows / concerts ──────────────────────────────────────
# location strings are free-form; this table maps each to (country, city).
# city None = the row names no city.
LOC = {
    "St Kitts & Nevis": ("St Kitts & Nevis", None),
    "Rabat, Morocco": ("Morocco", "Rabat"),
    "Helsinki, Finland": ("Finland", "Helsinki"),
    "Rotterdam, Netherlands": ("Netherlands", "Rotterdam"),
    "Portimão, Portugal": ("Portugal", "Portimão"),
    "Miami, US": ("United States", "Miami"),
    "Detroit, US": ("United States", "Detroit"),
    "Milton Keynes, UK": ("United Kingdom", "Milton Keynes"),
    "Accra, Ghana": ("Ghana", "Accra"),
    "Nairobi, Kenya": ("Kenya", "Nairobi"),
    "Johannesburg, South Africa": ("South Africa", "Johannesburg"),
    "Muri Okunola Park, Lagos": ("Nigeria", "Lagos"),
    "Go Media Stadium, Auckland": ("New Zealand", "Auckland"),
    "Windsor Park Stadium, Roseau, Dominica": ("Dominica", "Roseau"),
    "Pristina, Kosovo": ("Kosovo", "Pristina"),
    "Abidjan, Côte d'Ivoire": ("Côte d'Ivoire", "Abidjan"),
    "Grand Théâtre, Dakar, Senegal": ("Senegal", "Dakar"),
    "Roskilde, Denmark": ("Denmark", "Roskilde"),
    "Plymouth Recreation Ground, Tobago": ("Trinidad & Tobago", "Plymouth, Tobago"),
    "Athens, Greece": ("Greece", "Athens"),
    "Tribeca Mall, Mauritius": ("Mauritius", None),
    "O Beach Ibiza, San Antonio, Spain": ("Spain", "San Antonio, Ibiza"),
    "Bois de Vincennes, Paris, France": ("France", "Paris"),
    "Fühlinger See, Cologne, Germany": ("Germany", "Cologne"),
    "Bern, Switzerland": ("Switzerland", "Bern"),
    "Nyon, Switzerland": ("Switzerland", "Nyon"),
    "Olympiastadion & Olympiapark, Berlin, Germany": ("Germany", "Berlin"),
    "Fort Charlotte, Nassau, Bahamas": ("Bahamas", "Nassau"),
    "Indio, USA": ("United States", "Indio"),
    "New York, USA": ("United States", "New York"),
    "Worthy Farm, UK": ("United Kingdom", None),
    "London, UK": ("United Kingdom", "London"),
    "São Paulo, Brazil": ("Brazil", "São Paulo"),
    "Dubai, UAE": ("United Arab Emirates", "Dubai"),
    "Cluj-Napoca, Romania": ("Romania", "Cluj-Napoca"),
    "Munich, Germany": ("Germany", "Munich"),
    "Lisbon, Portugal": ("Portugal", "Lisbon"),
    "Stavern, Norway": ("Norway", "Stavern"),
    "New Orleans, USA": ("United States", "New Orleans"),
    "El Gouna Conference & Cultural Center, Egypt": ("Egypt", "El Gouna"),
    "Belgravia Sports Club, Zimbabwe": ("Zimbabwe", "Harare"),  # city from the row's name
    "Eko Convention Centre, Lagos": ("Nigeria", "Lagos"),
    "Jamaica": ("Jamaica", "Kingston"),  # city from the row's name
    "Sheraton Gardens, Kampala": ("Uganda", "Kampala"),
    "FITZ, Madrid": ("Spain", "Madrid"),
    "Atlantico, Rome": ("Italy", "Rome"),
    "Guyana National Stadium, Providence": ("Guyana", "Providence"),
    "Intare Conference Arena, Kigali": ("Rwanda", "Kigali"),
    "Addis Ababa, Ethiopia": ("Ethiopia", "Addis Ababa"),
    "Paramaribo": ("Suriname", "Paramaribo"),
    "Festival Center Brievengat, Willemstad": ("Curaçao", "Willemstad"),
    "Independence Stadium, Namibia": ("Namibia", "Windhoek"),  # city from the row's name
    "Vigie Playing Field, Castries, Saint Lucia": ("Saint Lucia", "Castries"),
}
def arr(name, stop):
    lo = next(i for i, l in enumerate(tours_src, 1) if l.startswith(f"export const {name}"))
    out = []
    for i in range(lo + 1, len(tours_src) + 1):
        line = tours_src[i - 1]
        if line.startswith("];"):
            break
        if line.strip().startswith("{ year:"):
            loc = field(line, "location")
            c, city = LOC[loc]
            out.append({"list": name, "year": int(field(line, "year")), "date": field(line, "date"),
                        "name": field(line, "name"), "location": loc, "country": c, "city": city, "line": i})
    return out
fest = arr("festivals", None) + arr("otherShows", None) + arr("concerts", None)

# ── liveMoments: place only where the text names one (manual, cited) ───────
lm = []
lo = next(i for i, l in enumerate(lm_src, 1) if l.startswith("export const liveMoments"))
for i in range(lo + 1, len(lm_src) + 1):
    line = lm_src[i - 1]
    if line.startswith("];"):
        break
    if line.strip().startswith("{ year:"):
        lm.append({"year": int(field(line, "year")), "title": field(line, "title"), "line": i})
LM_PLACE = {  # title -> (country, city, duplicate-of-dated-show?)
    "FIFA World Cup Final halftime show": ("United States", "East Rutherford", False),  # MetLife Stadium (its text names it since 5 Oct 2026)
    "FIFA World Cup Opening Ceremony": ("Mexico", "Mexico City", False),
    "AFCON 2025 Fan Zone grand finale": ("Morocco", "Rabat", False),
    "Stade de France, Paris": ("France", "Paris", True),
    "Red Rocks Amphitheatre": ("United States", "Morrison, CO", True),
    "England Lionesses' Euro victory parade": ("United Kingdom", "London", False),
    "London Stadium — African concert record": ("United Kingdom", "London", True),
    "Grammy Awards Stage": (None, None, False),
    "London Stadium (sold out)": ("United Kingdom", "London", True),
    "Citi Field, New York (sold out)": ("United States", "New York", True),
    "UEFA Champions League Final": ("Turkey", "Istanbul", False),
    "NBA All-Star Game halftime show": ("United States", "Salt Lake City", False),
    "Madison Square Garden (sold out)": ("United States", "New York", True),
    "Billboard Music Awards": ("United States", "Las Vegas", False),
    "National Stadium, Jamaica": ("Jamaica", "Kingston", True),  # same night as the concerts row
    "Grammy Awards Premiere Ceremony": (None, None, False),
    "One World: Together at Home": ("Nigeria", "Lagos", True),  # a broadcast filmed in Lagos, not a live show: excluded
}
for m in lm:
    c, city, dup = LM_PLACE[m["title"]]
    m.update({"country": c, "city": city, "duplicate": dup})

# ── revenue ────────────────────────────────────────────────────────────────
rev = []
for i, line in enumerate(rev_src, 1):
    if line.strip().startswith('{ artist: "Burna Boy"') and "revenue:" in line and "dates:" not in line:
        t = field(line, "tickets")
        rev.append({"venue": field(line, "venue"), "city": field(line, "city"), "flag": field(line, "flag"),
                    "tour": field(line, "tour"), "year": int(field(line, "year")),
                    "tickets": int(t.replace(",", "")) if t else None, "revenue": num(line, "revenue"), "line": i})
stands = []
for i, line in enumerate(rev_src, 1):
    if line.strip().startswith('{ artist: "Burna Boy"') and "dates:" in line:
        stands.append({"venue": field(line, "venue"), "city": field(line, "city"), "dates": field(line, "dates"),
                       "shows": num(line, "shows"), "tickets": int(field(line, "tickets").replace(",", "")),
                       "revenue": num(line, "revenue"), "line": i})
FLAG_COUNTRY = {"🇬🇧": "United Kingdom", "🇫🇷": "France", "🇺🇸": "United States", "🇳🇱": "Netherlands",
                "🇩🇪": "Germany", "🇦🇺": "Australia", "🇨🇭": "Switzerland", "🇧🇪": "Belgium", "🇨🇦": "Canada", "🇮🇪": "Ireland"}
for r in rev:
    r["country"] = FLAG_COUNTRY[r["flag"]]
    # join to a dated tour show by venue + year
    r["matchesDatedShow"] = any(s["venue"].startswith(r["venue"]) and s["year"] == r["year"] for s in shows)

# ── worldShapes: bboxes ────────────────────────────────────────────────────
ws_line = next(i for i, l in enumerate(ws_src, 1) if l.startswith("export const worldShapes"))
shapes = json.loads(ws_src[ws_line - 1].split("= ", 1)[1].rstrip(";"))
def bbox_rings(d):
    rings = []
    for ring in d.split("Z"):
        n = [float(x) for x in re.findall(r'-?\d+(?:\.\d+)?', ring)]
        if len(n) < 4:
            continue
        xs, ys = n[0::2], n[1::2]
        rings.append((min(xs), min(ys), max(xs), max(ys)))
    return rings
shape_info = {}
order = []
for s in shapes:
    rings = bbox_rings(s["d"])
    x0 = min(r[0] for r in rings); y0 = min(r[1] for r in rings)
    x1 = max(r[2] for r in rings); y1 = max(r[3] for r in rings)
    big = max(rings, key=lambda r: (r[2] - r[0]) * (r[3] - r[1]))
    shape_info[s["code"]] = {"bbox": (x0, y0, x1, y1), "largest": big, "bytes": len(s["d"])}
    order.append(s["code"])

# ── per-country table ──────────────────────────────────────────────────────
def years_in(ev):
    return [int(y) for y in re.findall(r'\b(20\d\d)\b', ev)]
table = []
for c in pcs:
    n = c["name"]
    ds = [s for s in shows if s["country"] == n]
    fs = [f for f in fest if f["country"] == n]
    ms = [m for m in lm if m["country"] == n and not m["duplicate"]]
    cities_tour = sorted({s["city"] for s in ds})
    cities_all = sorted({s["city"] for s in ds} | {f["city"] for f in fs if f["city"]} | {m["city"] for m in ms if m["city"]})
    yrs_rows = [s["year"] for s in ds] + [f["year"] for f in fs] + [m["year"] for m in ms]
    yrs_ev = [y for e in c["events"] for y in years_in(e)]
    yrs = yrs_rows + yrs_ev
    rv = [r for r in rev if r["country"] == n and r["tickets"]]
    best = max(rv, key=lambda r: r["tickets"]) if rv else None
    st = [s for s in stands if FLAG_COUNTRY.get("🇨🇦") == n] if n == "Canada" else []
    caps = [s for s in ds if s["cap"]]
    bigcap = max(caps, key=lambda s: s["cap"]) if caps else None
    sources = []
    if ds: sources.append("tour dates")
    if fs: sources.append("festival/one-off rows")
    if ms: sources.append("live moment")
    only_events = not ds and not fs and not ms
    sh = shape_info.get(c["code"])
    table.append({
        "name": n, "flag": c["flag"], "region": c["region"], "code": c["code"], "pcLine": c["line"],
        "datedShows": len(ds), "festRows": len(fs), "moments": len(ms),
        "tourCities": cities_tour, "allCities": cities_all,
        "firstYear": min(yrs) if yrs else None, "lastYear": max(yrs) if yrs else None,
        "firstYearRows": min(yrs_rows) if yrs_rows else None,
        "bestNight": {"venue": best["venue"], "year": best["year"], "tickets": best["tickets"], "line": best["line"]} if best else None,
        "stands": [{"venue": s["venue"], "dates": s["dates"], "tickets": s["tickets"], "shows": s["shows"], "line": s["line"]} for s in st],
        "bigCap": {"venue": bigcap["venue"], "cap": bigcap["cap"], "date": bigcap["date"], "line": bigcap["line"]} if bigcap else None,
        "sources": sources, "onlyMapEvents": only_events, "events": c["events"], "more": c["more"],
        "marker": c["marker"], "shaped": sh is not None,
        "tours": sorted({s["tour"] for s in ds}),
    })

out = OrderedDict()
out["counts"] = {
    "performedCountries": len(pcs),
    "regions": len({c["region"] for c in pcs}),
    "markers": sum(1 for c in pcs if c["marker"]),
    "datedShows": len(shows),
    "tourCitiesDistinct": len({s["city"] for s in shows}),
    "countriesWithDatedShows": len({s["country"] for s in shows}),
    "datedShowYears": [min(s["year"] for s in shows), max(s["year"] for s in shows)],
    "tours": len({s["tour"] for s in shows}),
    "festivalsRows": sum(1 for f in fest if f["list"] == "festivals"),
    "otherShowsRows": sum(1 for f in fest if f["list"] == "otherShows"),
    "concertsRows": sum(1 for f in fest if f["list"] == "concerts"),
    "festRowsTotal": len(fest),
    "festRowsWithDate": sum(1 for f in fest if f["date"]),
    "festCountries": len({f["country"] for f in fest}),
    "liveMoments": len(lm),
    "revenueNights": len(rev),
    "revenueNightsWithTickets": sum(1 for r in rev if r["tickets"]),
    "revenueStands": len(stands),
    "allCitiesDistinct": len({s["city"] for s in shows} | {f["city"] for f in fest if f["city"]}),
    "datedShowsWithCap": sum(1 for s in shows if s["cap"]),
    "countriesOnlyMapEvents": [t["name"] for t in table if t["onlyMapEvents"]],
    "countriesNoDatedShow": [t["name"] for t in table if t["datedShows"] == 0],
    "unmatchedRevenue": [(r["venue"], r["year"], r["line"]) for r in rev if not r["matchesDatedShow"]],
    "shapesTotal": len(shapes),
    "shapesPerformed": sum(1 for c in pcs if c["code"] in shape_info),
}
bn = max(rev, key=lambda r: r["tickets"] or 0)
out["biggestNight"] = bn
out["biggestGross"] = max(rev, key=lambda r: r["revenue"])
out["perShowCities"] = sorted({(s["city"], s["country"]) for s in shows})
out["table"] = table
out["shows"] = shows
out["fest"] = fest
out["moments"] = lm
out["rev"] = rev
out["stands"] = stands
out["shapeOrderPerformed"] = [c for c in order if c in {p["code"] for p in pcs}]
out["shapeInfo"] = {str(k): v for k, v in shape_info.items()}
out["pcs"] = pcs
out["pathBytes"] = {"all": sum(v["bytes"] for v in shape_info.values()),
                    "performed": sum(shape_info[c["code"]]["bytes"] for c in pcs if c["code"] in shape_info)}
json.dump(out, sys.stdout, ensure_ascii=False, indent=1, default=list)
