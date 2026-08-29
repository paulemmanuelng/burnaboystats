# Olamide — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (Billboard
U.S. Afrobeats Songs, Streaming Songs, Radio Songs); extension charts below a
main chart; year-end, mid-week and recurrent charts.

## Total: 100 singles + 0 albums = 100 chart entries

**4 No. 1s**, all in Nigeria. **2 territories.**

## Nigeria — the complete archive, read directly

TurnTable's site renders only the current week, but its backend exposes every
issue it has ever published. All **303 weekly issues of the Official Nigeria Top
100 — 2020-11-05 to 2026-08-20** — were read through

```
GET /api/ttc-proxy/api/chart/1/{weekNumber}/{year}
```

with a turntablecharts.com `Referer` (without one it returns 403), decoding the
base64 `payload` envelope. Continuity was verified by differencing consecutive
issue dates: the only non-7-day gaps are 2024-12-26 → 2024-12-31 and →
2025-01-09, which are TurnTable's own New Year's Eve special issue.

**The trap, recorded because it silently corrupts an archive:** an invalid
week/year does **not** error — it returns the category's *earliest* instance. Two
separate passes here mistook rate-limited responses for absent weeks and produced
an archive a third short, which would have published peaks that were too low and
looked entirely normal. Every response is validated against the `weekNumber` and
`dateCreated` that were requested.

Peaks are the best of the row's own `rank` and the chart's `highestPosition`
across all 303 issues.

### Highest peaks

| title | credit as the chart prints it | peak | weeks |
|---|---|---|---|
| Omo Ope | Asake ft. Olamide  | **#1** | 49 |
| 99 | Olamide, Seyi Vibez, Asake & Young Jonn ft. Daecolm | **#1** | 42 |
| Rock | Olamide  | **#1** | 30 |
| Amapiano | Asake & Olamide | **#1** | 28 |
| Infinity | Olamide ft. Omah Lay | **#2** | 28 |
| Billionaires Club | Olamide, Wizkid & Darkoo | **#2** | 25 |
| New Religion | Olamide & Asake | **#2** | 20 |
| Metaverse | Olamide | **#3** | 24 |
| Kai! | Olamide & Wizkid | **#3** | 24 |
| Triumphant | Olamide ft. Bella Shmurda | **#3** | 20 |
| Hate Me | Olamide ft. Wande Coal  | **#4** | 7 |
| Jinja | Olamide | **#5** | 26 |

## Outside Nigeria

**One entry, read at the body.** *Amapiano*, credited `ASAKE FT OLAMIDE`, reached
**No. 86 on the UK Official Singles Chart** — confirmed at the chart week itself,
not the summary row: the OCC archive for the week of 23/6/2023 lists it at 86,
marked NEW, annotated "Peak: 86, Weeks: 1".

**Two better-looking numbers for the same record were rejected.** Its *Official
Singles Chart Update* peak is 72 and its *UK Afrobeats Chart* peak is 3. Neither
is a principal national chart, so neither is published here.
