#!/usr/bin/env python3
"""Emit the markdown tables for research/tour-map.md from derived.json."""
import json
from collections import OrderedDict
d = json.load(open("derived.json"))
REG = ["Africa", "Europe", "Asia", "North America", "South America", "Caribbean", "Oceania"]
shows, fest, moms = d["shows"], d["fest"], d["moments"]

def lines(rows):
    ls = sorted(r["line"] for r in rows)
    if not ls:
        return ""
    # compress consecutive runs
    out, a = [], ls[0]
    prev = a
    for x in ls[1:] + [None]:
        if x is not None and x == prev + 1:
            prev = x
            continue
        out.append(f"{a}" if a == prev else f"{a}–{prev}")
        if x is not None:
            a = prev = x
    return ", ".join(out)

def fmt(n):
    return f"{n:,}"

md = []
md.append("| Region | Country | Dated tour shows (tours.ts lines) | Festival / one-off rows (tours.ts lines) | Other placed moments | Distinct cities (tour · all) | Years documented | Biggest reported night (tickets) | Drawn as | Source note |")
md.append("|---|---|---|---|---|---|---|---|---|---|")
for reg in REG:
    for t in [x for x in d["table"] if x["region"] == reg]:
        n = t["name"]
        ds = [s for s in shows if s["country"] == n]
        fs = [f for f in fest if f["country"] == n]
        ms = [m for m in moms if m["country"] == n and not m["duplicate"]]
        dcell = f"{len(ds)} ({lines(ds)})" if ds else "0"
        fcell = f"{len(fs)} ({lines(fs)})" if fs else "0"
        mcell = "; ".join(f"{m['title']} {m['year']} (:{m['line']})" for m in ms) or "—"
        cities = f"{len(t['tourCities'])} · {len(t['allCities'])}"
        yrs = f"{t['firstYear']}–{t['lastYear']}" if t["firstYear"] != t["lastYear"] else f"{t['firstYear']}"
        if t["firstYearRows"] is not None and t["firstYearRows"] != t["firstYear"]:
            yrs += f" (rows from {t['firstYearRows']})"
        if t["bestNight"]:
            b = t["bestNight"]
            best = f"{b['venue']} {b['year']}, {fmt(b['tickets'])} (tourRevenue.ts:{b['line']})"
        elif t["stands"]:
            best = "; ".join(f"{s['venue']} {s['dates']}: {fmt(s['tickets'])} over {s['shows']} shows, no per-night figure (tourRevenue.ts:{s['line']})" for s in t["stands"])
        else:
            best = "not reported"
        drawn = "dot" if t["marker"] else "shape"
        note = []
        if t["onlyMapEvents"]:
            note.append(f"**known only from the map's own events list** (performedCountries.ts:{t['pcLine']}: “{'; '.join(t['events'])}”)")
        elif not ds and not fs and ms:
            note.append("**known only from a ceremony / live moment**")
        if n == "Nigeria":
            note.append("the one dated show (tours.ts:163) is the same night as the concerts row tours.ts:433")
        md.append(f"| {reg} | {t['flag']} {n} | {dcell} | {fcell} | {mcell} | {cities} | {yrs} | {best} | {drawn} | {'; '.join(note)} |")

# region summary
md2 = ["| Region | Countries | Dots | Dated tour shows | Festival / one-off rows | Countries with a dated show |", "|---|---|---|---|---|---|"]
tot = [0, 0, 0, 0, 0]
for reg in REG:
    ts = [x for x in d["table"] if x["region"] == reg]
    nm = {x["name"] for x in ts}
    a = len(ts); b = sum(1 for x in ts if x["marker"]); c = sum(1 for s in shows if s["country"] in nm)
    e = sum(1 for f in fest if f["country"] in nm); g = sum(1 for x in ts if x["datedShows"])
    for i, v in enumerate([a, b, c, e, g]):
        tot[i] += v
    md2.append(f"| {reg} | {a} | {b} | {c} | {e} | {g} |")
md2.append(f"| **Total** | **{tot[0]}** | **{tot[1]}** | **{tot[2]}** | **{tot[3]}** | **{tot[4]}** |")

# per-tour summary
md3 = ["| Tour (years) | Dated shows | Countries | Cities | First – last date | tours.ts lines |", "|---|---|---|---|---|---|"]
tours = OrderedDict()
for s in shows:
    tours.setdefault(s["tour"], []).append(s)
for name, ss in tours.items():
    md3.append(f"| {name} | {len(ss)} | {len({s['country'] for s in ss})} | {len({s['city'] for s in ss})} | {ss[0]['date']} – {ss[-1]['date']} | {lines(ss)} |")

# revenue nights
md4 = ["| Night | Tour | Tickets | Gross (USD) | tourRevenue.ts | In tours.ts itinerary? |", "|---|---|---|---|---|---|"]
for r in sorted(d["rev"], key=lambda r: -r["tickets"]):
    md4.append(f"| {r['venue']}, {r['city']} {r['year']} | {r['tour']} | {fmt(r['tickets'])} | {fmt(r['revenue'])} | :{r['line']} | {'yes' if r['matchesDatedShow'] else '**no**'} |")

# festival rows with no city / multi-night
open("tables.md", "w").write("\n".join(["## per-country", *md, "", "## regions", *md2, "", "## tours", *md3, "", "## revenue", *md4]) + "\n")
tour_c = {s["city"] for s in shows}
fest_c = sorted({f["city"] for f in fest if f["city"]} - tour_c)
print("fest-only cities", len(fest_c), fest_c)
print("years overall rows", min(s["year"] for s in shows), min(f["year"] for f in fest), max(f["year"] for f in fest))
