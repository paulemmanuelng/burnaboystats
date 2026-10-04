# The 57 countries: what each card and panel can say, and where it links

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
  where a country has only two-night stands, the bigger stand, never split. (Canada
  was that case until 3 Oct 2026, when its Vancouver and Edmonton nights joined
  `tourRevenue.ts`; its row below was re-run then and no country is that case now.
  Ireland gained its first line the same day, from his 2022 3Arena night in
  TouringData's own post; with no Irish tour date in `tours.ts` it carried the year,
  until the night itself, 17 Mar 2022, joined the Space Drift dates on 4 Oct 2026
  (owner's ruling, bo-08) — so it now carries the day, and Ireland has a documented line.
  The Netherlands LOST its line the same day: its only reported night, the Ziggo Dome
  2022 gross, was held off the board on the owner's ruling until a Billboard Boxscore or
  Pollstar report of it is found — so, like any country with no reported night, its card
  has no biggest line.)
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
|---|---|---|---|---|---|---|---|
| Africa | Nigeria | 1 tour date · 1 festival or one-off appearance · 1 city · 2016–2021 | — | No. 1 · TurnTable Top 100 / Top 100 Albums · For My Hand (single) +8 more at that peak | 72 | `/compare/in/nigeria` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in Nigeria → `/compare/in/nigeria`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Africa | South Africa | 1 festival or one-off appearance · 1 city · 2022 | — | No. 1 · The Official SA Charts · Last Last (single) | 5 | `/compare/in/south-africa` | Festivals & shows → `/records/tours/festivals`<br>Certifications in South Africa → `/compare/in/south-africa`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Africa | Ghana | 1 festival or one-off appearance · 1 city · 2025 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Kenya | 1 festival or one-off appearance · 1 city · 2025 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Uganda | 1 festival or one-off appearance · 1 city · 2014–2019 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Zimbabwe | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Morocco | 1 festival or one-off appearance · 1 live milestone · 1 city · 2024–2026 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Egypt | 1 festival or one-off appearance · 1 city · 2026 | — | No. 14 · Official Egypt Top 20 (MENA Chart) · Dai Dai (single) | 0 | none | Festivals & shows → `/records/tours/festivals`<br>Chart peak here: No. 14 → `/records/charts` (no per-country anchor today) |
| Africa | Rwanda | 1 festival or one-off appearance · 1 city · 2019 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Senegal | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Côte d'Ivoire | 1 festival or one-off appearance · 1 city · 2024 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Benin | none (no row: event lines only) | — | none | 0 | none | none |
| Africa | Cameroon | none (no row: event lines only) | — | none | 0 | none | none |
| Africa | Tanzania | none (no row: event lines only) | — | none | 0 | none | none |
| Africa | Zambia | none (no row: event lines only) | — | none | 0 | none | none |
| Africa | Botswana | none (no row: event lines only) | — | none | 0 | none | none |
| Africa | Namibia | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Ethiopia | 1 festival or one-off appearance · 1 city · 2017 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Africa | Mauritius | 1 festival or one-off appearance · 2025 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Europe | United Kingdom | 10 tour dates · 3 festival and one-off appearances · 1 live milestone · 6 cities · 2018–2026 | Biggest reported night · London Stadium, London · 29 Jun 2024 · 58,973 tickets | No. 1 · Official Charts Company · I Told Them… (album) +1 more at that peak | 30 | `/compare/in/united-kingdom` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in the UK → `/compare/in/united-kingdom`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | France | 2 tour dates · 1 festival or one-off appearance · 1 city · 2021–2025 | Biggest reported night · Stade de France, Paris · 18 Apr 2025 · 43,881 tickets | No. 1 · SNEP · Dai Dai (single) | 19 | `/compare/in/france` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in France → `/compare/in/france`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Netherlands | 3 tour dates · 1 festival or one-off appearance · 2 cities · 2019–2026 | — | No. 1 · Dutch Charts · Dai Dai (single) +1 more at that peak | 3 | `/compare/in/netherlands` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in the Netherlands → `/compare/in/netherlands`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Belgium | 3 tour dates · 2 cities · 2019–2026 | Biggest reported night · Sportpaleis, Antwerp · 12 Dec 2023 · 8,266 tickets | No. 1 · Ultratop · Dai Dai (single) +1 more at that peak | 2 | `/compare/in/belgium` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Certifications in Belgium → `/compare/in/belgium`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Ireland | 1 tour date · 1 city · 2022 | Biggest reported night · 3Arena, Dublin · 17 Mar 2022 · 7,504 tickets | No. 2 · IRMA · Own It (feature) | 0 | none | Chart peak here: No. 2 → `/records/charts` (no per-country anchor today) |
| Europe | Spain | 2 festival and one-off appearances · 2 cities · 2025–2026 | — | No. 2 · PROMUSICAE · Dai Dai (single) | 2 | `/compare/in/spain` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Spain → `/compare/in/spain`<br>Chart peak here: No. 2 → `/records/charts` (no per-country anchor today) |
| Europe | Italy | 1 festival or one-off appearance · 1 city · 2020 | — | No. 1 · FIMI · Dai Dai (single) | 2 | `/compare/in/italy` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Italy → `/compare/in/italy`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Germany | 5 tour dates · 3 festival and one-off appearances · 3 cities · 2019–2025 | Biggest reported night · Lanxess Arena, Cologne · 10 Dec 2023 · 14,260 tickets | No. 1 · GfK / Offizielle Charts · Dai Dai (single) | 3 | `/compare/in/germany` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in Germany → `/compare/in/germany`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Switzerland | 3 tour dates · 2 festival and one-off appearances · 4 cities · 2022–2026 | Biggest reported night · Hallenstadion, Zurich · 30 Nov 2022 · 8,827 tickets | No. 1 · Schweizer Hitparade · Dai Dai (single) +1 more at that peak | 9 | `/compare/in/switzerland` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in Switzerland → `/compare/in/switzerland`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Sweden | 1 tour date · 1 city · 2026 | — | No. 1 · Sverigetopplistan · Dai Dai (single) | 9 | `/compare/in/sweden` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Certifications in Sweden → `/compare/in/sweden`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Norway | 1 festival or one-off appearance · 1 city · 2024 | — | No. 1 · VG-lista · Dai Dai (single) | 1 | `/compare/in/norway` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Norway → `/compare/in/norway`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Denmark | 1 tour date · 1 festival or one-off appearance · 2 cities · 2023–2026 | — | No. 5 · Hitlisten · Dai Dai (single) | 9 | `/compare/in/denmark` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in Denmark → `/compare/in/denmark`<br>Chart peak here: No. 5 → `/records/charts` (no per-country anchor today) |
| Europe | Finland | 1 festival or one-off appearance · 1 city · 2025 | — | No. 6 · Suomen virallinen lista · Dai Dai (single) | 0 | none | Festivals & shows → `/records/tours/festivals`<br>Chart peak here: No. 6 → `/records/charts` (no per-country anchor today) |
| Europe | Portugal | 6 festival and one-off appearances · 2 cities · 2019–2026 | — | No. 1 · AFP · Dai Dai (single) | 8 | `/compare/in/portugal` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Portugal → `/compare/in/portugal`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Romania | 1 festival or one-off appearance · 1 city · 2024 | — | No. 5 · Billboard Romania Songs · Dai Dai (single) | 0 | none | Festivals & shows → `/records/tours/festivals`<br>Chart peak here: No. 5 → `/records/charts` (no per-country anchor today) |
| Europe | Turkey | 1 live milestone · 1 city · 2023 | — | No. 7 · Radiomonitor Türkiye Intl. (airplay — no other national chart) · Dai Dai (single) | 0 | none | Chart peak here: No. 7 → `/records/charts` (no per-country anchor today) |
| Europe | Greece | 1 festival or one-off appearance · 1 city · 2021 | — | No. 1 · IFPI Greece · Dai Dai (single) | 1 | `/compare/in/greece` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Greece → `/compare/in/greece`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Austria | none (no row: event lines only) | — | No. 1 · Ö3 Austria Top 40 · Dai Dai (single) | 4 | `/compare/in/austria` | Certifications in Austria → `/compare/in/austria`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Europe | Kosovo | 1 festival or one-off appearance · 1 city · 2024 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Asia | United Arab Emirates | 1 festival or one-off appearance · 1 city · 2019 | — | No. 1 · The Official UAE Chart · Dai Dai (single) | 0 | none | Festivals & shows → `/records/tours/festivals`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| North America | United States | 50 tour dates · 7 festival and one-off appearances · 2 live milestones · 30 cities · 2018–2025 | Biggest reported night · Capital One Arena, Washington, D.C. · 8 Dec 2022 · 14,688 tickets | No. 14 · Billboard Hot 100 / 200 · Love, Damini (album) | 8 | `/compare/in/united-states` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Festivals & shows → `/records/tours/festivals`<br>Certifications in the US → `/compare/in/united-states`<br>Chart peak here: No. 14 → `/records/charts` (no per-country anchor today) |
| North America | Canada | 14 tour dates · 4 cities · 2019–2025 | Biggest reported night · Rogers Arena, Vancouver · 7 Nov 2023 · 7,198 tickets | No. 3 · Billboard Canada · Dai Dai (single) | 23 | `/compare/in/canada` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Certifications in Canada → `/compare/in/canada`<br>Chart peak here: No. 3 → `/records/charts` (no per-country anchor today) |
| North America | Mexico | 1 live milestone · 1 city · 2026 | — | none | 0 | `/compare/in/mexico` | none |
| South America | Brazil | 1 festival or one-off appearance · 1 city · 2025 | — | No. 27 · Billboard Brasil Hot 100 · Dai Dai (single) | 3 | `/compare/in/brazil` | Festivals & shows → `/records/tours/festivals`<br>Certifications in Brazil → `/compare/in/brazil`<br>Chart peak here: No. 27 → `/records/charts` (no per-country anchor today) |
| South America | Guyana | 1 festival or one-off appearance · 1 city · 2024 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| South America | Suriname | 1 festival or one-off appearance · 1 city · 2022 | — | No. 1 · Nationale Top 40 · Dai Dai (single) +1 more at that peak | 0 | none | Festivals & shows → `/records/tours/festivals`<br>Chart peak here: No. 1 → `/records/charts` (no per-country anchor today) |
| Caribbean | Jamaica | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Curaçao | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Barbados | 1 tour date · 1 city · 2022 | — | none | 0 | none | Tour dates on the Tours page → `/records/tours` + country anchor (code) |
| Caribbean | Bahamas | 1 festival or one-off appearance · 1 city · 2024 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | St Kitts & Nevis | 1 festival or one-off appearance · 2023 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Dominica | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Trinidad & Tobago | 1 festival or one-off appearance · 1 city · 2022 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Haiti | none (no row: event lines only) | — | none | 0 | none | none |
| Caribbean | Saint Lucia | 1 festival or one-off appearance · 1 city · 2024 | — | none | 0 | none | Festivals & shows → `/records/tours/festivals` |
| Caribbean | Antigua & Barbuda | none (no row: event lines only) | — | none | 0 | none | none |
| Oceania | Australia | 4 tour dates · 4 cities · 2025 | Biggest reported night · Qudos Bank Arena, Sydney · 18 Oct 2025 · 10,401 tickets | No. 10 · ARIA · Dai Dai (single) | 10 | `/compare/in/australia` | Tour dates on the Tours page → `/records/tours` + country anchor (code)<br>Certifications in Australia → `/compare/in/australia`<br>Chart peak here: No. 10 → `/records/charts` (no per-country anchor today) |
| Oceania | New Zealand | 1 festival or one-off appearance · 1 city · 2025 | — | No. 12 · Recorded Music NZ · I Told Them… (album) +1 more at that peak | 19 | `/compare/in/new-zealand` | Festivals & shows → `/records/tours/festivals`<br>Certifications in New Zealand → `/compare/in/new-zealand`<br>Chart peak here: No. 12 → `/records/charts` (no per-country anchor today) |

**Totals:** 57 countries · 28 with a Burna Boy chart peak · 21 with at least one Burna Boy plaque · 29 with neither · 22 with a certifications board, 21 of them holding a Burna Boy plaque (the card links only those)
