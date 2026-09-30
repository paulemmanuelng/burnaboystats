#!/usr/bin/env python3
"""Joins card-counts.md and country-links.md (both made by the scripts in this
folder) into the one per-country table in ../countries.md. Usage:

    python3 card_counts.py > card-counts.md
    python3 country_links.py <repo-root> boards.txt > country-links.md
    python3 countries_md.py > ../countries.md
"""
import re

def table(path, start):
    rows, on = [], False
    for l in open(path, encoding="utf8"):
        if l.startswith(start):
            on = True
            continue
        if on and l.startswith("|---"):
            continue
        if on and l.startswith("|"):
            rows.append([c.strip() for c in l.strip().strip("|").split("|")])
        elif on and rows:
            break
    return rows

cards = {r[1]: r for r in table("card-counts.md", "| Region | Country | Documented line")}
links = table("country-links.md", "| Region | Country | Code")

LABEL = {"United Kingdom": "the UK", "United States": "the US", "Netherlands": "the Netherlands",
         "United Arab Emirates": "the UAE"}
print("""# The 57 countries: what each card and panel can say, and where it links

Made 30 Sep 2026 by `tour-map-method/card_counts.py`, `country_links.py` and
`countries_md.py` from `app/data/performedCountries.ts`, `tours.ts`,
`tourRevenue.ts`, `charts.ts`, `certifications.ts` and `app/lib/isoCodes.ts`,
plus the live list of certifications boards at https://burnaboystats.com/compare/in
(27 boards, read 30 Sep 2026; `tour-map-method/boards.txt`). The build derives every
value; these are the sizing and example values the brief's §3.3 and §3.5 E use.

**The rules** (the brief's §3.3 states them; `card_counts.py` is the reference):
- *Documented line*: tour dates (one per dated row, one row = one night) · festival
  and one-off appearances (one per row; a row that is the same night as a tour date
  counts once, as the tour date; a row that spans two nights still counts once) ·
  live milestones (a `liveMoments` row with a place that repeats no show) · cities
  (distinct names across the three, as spelt) · years (every year in the three plus
  every year written in the map's own event lines). A segment with a zero is left out.
- *Biggest line*: the single night with the most reported tickets (`tourRevenue.ts`);
  where a country has only two-night stands (Canada), the bigger stand, never split.
  The date comes from the matching tour date; where no row matches, the year.
- *Best official-chart peak*: the lowest `peak` for that country across
  `albumCharts`, `singleCharts` and `featureCharts` in `charts.ts`, on the chart the
  file names for that country. Features count, as they do in the site's own No. 1s tally.
- *Plaques*: Burna Boy's certifications in that country (`certifications.ts`,
  albums + singles + features), counted as `totalAwards()` counts them.
- *Board*: `/compare/in/<country>`, from `countryBoardLinks()`
  (`app/lib/certCountry.ts:319-328`). A board exists wherever Burna Boy **or** a
  board artist holds a plaque; the card links it only where Burna Boy holds one
  (Mexico has a board with none of his plaques, so no link).

| Region | Country | Documented line | Biggest line | Best official-chart peak (chart · release) | Burna plaques | Board | Card links, in order |
|---|---|---|---|---|---|---|---|""")
for r in links:
    region, name, code, peak, rel, chart, plaq, body, board = r
    c = cards[name]
    doc, big = c[2], c[4]
    big = re.sub(r" \(tourRevenue\.ts:\d+\)", "", big)
    tour_dates = re.match(r"(\d+) tour date", doc)
    fest = re.search(r"(\d+) festival", doc)
    ls = []
    if tour_dates:
        ls.append("Tour dates on the Tours page → `/records/tours` + country anchor (code)")
    if fest:
        ls.append("Festivals & shows → `/records/tours/festivals`")
    if plaq != "0" and board != "none":
        ls.append(f"Certifications in {LABEL.get(name, name)} → {board}")
    if peak != "none":
        ls.append(f"Chart peak here: {peak} → `/records/charts` (no per-country anchor today)")
    pk = f"{peak} · {chart} · {rel}" if peak != "none" else "none"
    print(f"| {region} | {name} | {doc} | {big if not big.startswith('none') else '—'} | {pk} | {plaq} | {board} | {'<br>'.join(ls) if ls else 'none'} |")
print()
tot = open("country-links.md", encoding="utf8").read().strip().split("\n")[-1]
print(tot.replace("Totals:", "**Totals:**"))
