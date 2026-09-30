#!/usr/bin/env python3
"""The counting rules for the tour-map card, panel and headline figures, applied
to derived.json (make it first with derive.py). Read-only.

    python3 card_counts.py            # prints the rules' results as markdown

RULES (the brief's §3.3 states them in words; this file is the reference):

1. Tour dates: one per `tours[].dates` row. One row = one night.
2. Festival and one-off appearances: one per `festivals` / `otherShows` /
   `concerts` row, EXCEPT a row that is the same night as a tour date (same
   country, same city, same date or, where the row has no day, same year and
   the same venue). Today that is one row: concerts tours.ts:433, "Burna Boy:
   The Live Experience", Lagos, which is the tour date tours.ts:163
   (27 Dec 2021). A row that spans several nights (FITZ Madrid "two nights",
   Coachella 2019 "both weekends") counts ONCE: these are entries, not nights.
3. Live milestones: a `liveMoments` row that names a place and does not repeat
   a tour date or an appearance (six today: Mexico, Morocco, Turkey, the UK
   parade, the NBA All-Star Game and the Billboard Music Awards). The three
   that name no place and the One World broadcast are not placed.
4. Cities: distinct city names across 1–3, as each record spells them.
5. Years: every year in 1–3 plus every year written in the map's own event
   lines (performedCountries.ts `events`). One rule for the card and the
   headline. The documented line itself shows only when the country has at
   least one row in 1-3; the nine countries known only from the map's event
   lines show those lines and no documented line.
6. Biggest reported night: the Burna Boy single night with the most tickets in
   tourRevenue.ts for that country. Where a country has no single night but has
   two-night stands (Canada only), the stand with the most tickets, never split.
"""
import json, re, datetime
from collections import OrderedDict

d = json.load(open("derived.json"))
shows, fest, moms, pcs = d["shows"], d["fest"], d["moments"], d["pcs"]

def sdate(s):
    return datetime.datetime.strptime(s["date"], "%b %d, %Y").date()

def repeats_tour_date(f):
    for s in shows:
        if s["country"] != f["country"] or s["year"] != f["year"]:
            continue
        if f["date"] and sdate(s).isoformat() == f["date"]:
            return s
        if f["city"] and s["city"].split(",")[0] == f["city"].split(",")[0] and (
            f["name"].split(":")[-1].strip().lower() in s["venue"].lower()
            or s["venue"].split(" (")[0].lower() in f["location"].lower()):
            return s
    return None

dups = [(f, repeats_tour_date(f)) for f in fest]
dups = [(f, s) for f, s in dups if s]
appear = [f for f in fest if not repeats_tour_date(f)]
milestones = [m for m in moms if m["country"] and not m["duplicate"]]

MONTH = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()
def short(dt):
    return f"{dt.day} {MONTH[dt.month - 1]} {dt.year}"

rows = []
for p in pcs:
    n = p["name"]
    ds = [s for s in shows if s["country"] == n]
    fs = [f for f in appear if f["country"] == n]
    ms = [m for m in milestones if m["country"] == n]
    cities = sorted({s["city"] for s in ds} | {f["city"] for f in fs if f["city"]} | {m["city"] for m in ms})
    yrs = [s["year"] for s in ds] + [f["year"] for f in fs] + [m["year"] for m in ms]
    ev_yrs = [int(y) for e in p["events"] for y in re.findall(r"\b((?:19|20)\d\d)\b", e)]
    allyrs = yrs + ev_yrs
    big = None
    rv = [r for r in d["rev"] if r["country"] == n and r["tickets"]]
    if rv:
        b = max(rv, key=lambda r: r["tickets"])
        m = [s for s in ds if s["venue"].startswith(b["venue"]) and s["year"] == b["year"]]
        when = short(sdate(m[0])) if len(m) == 1 else str(b["year"])
        big = ("Biggest reported night", b["venue"], b["city"], when, f'{b["tickets"]:,} tickets', b["line"])
    elif n == "Canada" and d["stands"]:
        st = max(d["stands"], key=lambda s: s["tickets"])
        dd = re.sub(r"(\d+)–(\d+) (\w{3})\w* (\d{4})", r"\1–\2 \3 \4", st["dates"])
        big = ("Biggest reported stand", st["venue"], st["city"], dd, f'{st["tickets"]:,} tickets over {st["shows"]} shows', st["line"])
    rows.append(OrderedDict(
        region=p["region"], name=n, tourDates=len(ds), appearances=len(fs), milestones=len(ms),
        cities=len(cities), cityList=cities,
        years=(f"{min(allyrs)}–{max(allyrs)}" if allyrs and min(allyrs) != max(allyrs) else (str(allyrs[0]) if allyrs else "")),
        yearsRowsOnly=(f"{min(yrs)}–{max(yrs)}" if yrs and min(yrs) != max(yrs) else (str(yrs[0]) if yrs else "none")),
        events=p["events"], more=p["more"], big=big,
    ))

def plural(n, one, many):
    return f"{n} {one if n == 1 else many}"
def documented_line(r):
    # The line needs at least one row; a country known only from the map's own
    # event lines (nine today) shows those lines and no documented line.
    if not (r["tourDates"] or r["appearances"] or r["milestones"]):
        return ""
    parts = []
    if r["tourDates"]: parts.append(plural(r["tourDates"], "tour date", "tour dates"))
    if r["appearances"]: parts.append(plural(r["appearances"], "festival or one-off appearance", "festival and one-off appearances"))
    if r["milestones"]: parts.append(plural(r["milestones"], "live milestone", "live milestones"))
    if r["cities"]: parts.append(plural(r["cities"], "city", "cities"))
    if r["years"]: parts.append(r["years"])
    return " · ".join(parts)

print("## Rows that repeat a tour date (counted once, as the tour date)\n")
for f, s in dups:
    print(f'- {f["list"]} tours.ts:{f["line"]} "{f["name"]}", {f["location"]} ({f["year"]}) = tour date tours.ts:{s["line"]} {s["date"]}, {s["venue"]}')
print()
all_cities = {s["city"] for s in shows} | {f["city"] for f in appear if f["city"]} | {m["city"] for m in milestones}
all_years = [s["year"] for s in shows] + [f["year"] for f in appear] + [m["year"] for m in milestones] + \
    [int(y) for p in pcs for e in p["events"] for y in re.findall(r"\b((?:19|20)\d\d)\b", e)]
print("## Headline totals\n")
print(f"- Tour dates: {len(shows)}")
print(f"- Festival and one-off appearances: {len(appear)} ({len(fest)} rows, {len(fest) - len(appear)} repeating a tour date)")
print(f"- Documented shows (tour dates + appearances): {len(shows) + len(appear)}")
print(f"- Live milestones with a place (not in the shows figure): {len(milestones)}")
print(f"- Cities (distinct names across tour dates, appearances and placed milestones): {len(all_cities)}"
      f" (tour dates alone: {len({s['city'] for s in shows})})")
print(f"- Years: {min(all_years)}–{max(all_years)}")
print()
print("## Per country: the documented line and the biggest line\n")
print("| Region | Country | Documented line (rules 1–5) | Years, rows only | Biggest line (rule 6) | Map event lines | Hand-set `more` today |")
print("|---|---|---|---|---|---|---|")
for r in rows:
    b = r["big"]
    bl = f'{b[0]} · {b[1]}, {b[2]} · {b[3]} · {b[4]} (tourRevenue.ts:{b[5]})' if b else "none (line absent)"
    print(f'| {r["region"]} | {r["name"]} | {documented_line(r) or "none (no row: event lines only)"} | {r["yearsRowsOnly"]} | {bl} | {" / ".join(r["events"])} | {"yes" if r["more"] else ""} |')
print()
toronto = [s for s in shows if s["city"] == "Toronto"]
print(f"Toronto: {len(toronto)} tour dates ({', '.join(s['date'] + ' tours.ts:' + str(s['line']) for s in toronto)})"
      f" + {sum(1 for f in appear if f['city'] == 'Toronto')} appearances")
venues = sorted({r["big"][1] for r in rows if r["big"]}, key=len, reverse=True)
print("Venues that can appear in a biggest line, longest first:", ", ".join(f"{v} ({len(v)})" for v in venues))
lines = sorted(((documented_line(r), r["name"]) for r in rows), key=lambda x: len(x[0]), reverse=True)[:3]
print("Longest documented lines:", "; ".join(f"{n}: {l} ({len(l)})" for l, n in lines))
