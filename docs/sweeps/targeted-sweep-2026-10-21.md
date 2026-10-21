# Targeted register sweep — 21 October 2026 (Wednesday)

Certifications only, Burna Boy and every board artist, one register: ČNS IFPI,
which administers both the Czech and the Slovak awards and prints them in the
rows of its weekly charts. Read on the owner's report that "Dai Dai" is
Platinum in the Czech Republic. No other register was read.

**Status: one upgrade, no new plaque.** *Dai Dai* 🇨🇿 Gold → Platinum: the
current issue of ČNS IFPI's CZ Singles Digital Top 100 prints "Platinový singl"
on the row, where the issue before it printed "Zlatý singl". Applied in the
same edit (`app/data/certifications.ts`, the release row and the dated log),
which moved `CERTS_VERIFIED_ON` to 2026-10-21. The day is logged in
`TARGETED_REGISTER_READS` with CZ and SK.

| code | register | newest batch read | result |
|---|---|---|---|
| CZ | ČNS IFPI chart 30, CZ - SINGLES DIGITAL - TOP 100 (ifpicr.cz/hitparada/30), all 100 rows | week 42 of 2026 (weekId 3041) | No. 29, "Dai Dai \| SHAKIRA & BURNA BOY - SONY MUSIC \| Platinový singl \| Počet kol: 19 \| Nejvýše: 1": **upgrade from Gold, applied**. Week 41 (weekId 3040), re-read the same day: "Zlatý singl", No. 27, 18 weeks. No other board or Burna Boy row on the chart |
| SK | ČNS IFPI chart 43, SK - SINGLES DIGITAL - TOP 100 (ifpicr.cz/hitparada/43), all 100 rows | week 42 of 2026 (weekId 3041) | No. 6, "Dai Dai \| SHAKIRA & BURNA BOY \| Platinový singl \| Počet kol: 20 \| Nejvýše: 1", already on the site. No other board or Burna Boy row. ifpi.sk was not read |

What the body prints, and what it does not: the chart row carries the award
name only. There is no award date and no certificate number, on the row or on
the title's own page (`/hitparada/30/shakira-burna-boy/dai-dai/180018`, which
lists its weekly positions, week 24 to week 42 of 2026). So the Platinum carries
no `date` in the log, as the Slovak and Greek chart-badge upgrades before it.
The chart page prints no publication date either; week 42 was not there when
week 41 was read on 14 Oct 2026, and was the current issue when read on 21 Oct
2026. ifpicr.cz/oceneni still lists only the rules PDFs, no award list.
5,000,000 subscription streams is the Platinum threshold in ČNS IFPI's rules
from 9 March 2026 (Gold 2,500,000), which /compare prices at 22,522 units
(÷ 222).

robots.txt on ifpicr.cz is empty (HTTP 200, 0 bytes), so nothing is disallowed.
Fetched with curl, user agent "burnaboystats-bot". The raw captures stay in
the sweep's working folder (`cz1021`); this file is the record of what the
register showed.
