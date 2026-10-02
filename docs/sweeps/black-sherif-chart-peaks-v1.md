# Black Sherif — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (Billboard
U.S. Afrobeats Songs, Streaming Songs, Radio Songs); extension charts below a
main chart; year-end, mid-week and recurrent charts.

**After the 2 Oct 2026 charts sweep: 24 singles + 3 albums = 27 chart entries** (was 24); the changes are listed under "Re-read 2 Oct 2026" at the end of this file.

## Total: 22 singles + 2 albums = 24 chart entries

**1 No. 1**, all in Nigeria. **1 territory.**

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
| Kwaku The Traveller | Black Sherif | **#1** | 32 |
| Always | Darkoo ft. Black Sherif  | **#8** | 9 |
| Second Sermon (Remix) | Black Sherif ft. Burna Boy | **#9** | 25 |
| So It Goes | Black Sherif & Fireboy DML | **#10** | 24 |
| Come & Go | Arrdee ft. Black Sherif  | **#12** | 12 |
| Soja | Black Sherif | **#17** | 23 |
| Amazing Grace | Davido ft. Black Sherif | **#20** | 3 |
| WOTOWOTO SEASONING | ODUMODUBLVCK & Black Sherif | **#21** | 24 |
| PopStar | Black Sherif | **#26** | 3 |
| Sacrifice | Black Sherif | **#28** | 24 |
| Oh Paradise | Black Sherif | **#44** | 9 |
| YARD | Poco Lee ft, Black Sherif, Bella Shmurda & Alpha P | **#45** | 3 |

## Outside Nigeria

**Nothing, from the charts that were read.** The UK, Ireland, US, Canada, France,
Belgium, Netherlands, Germany, Switzerland, Austria, the Nordics, Italy, Spain,
Portugal, Poland, Greece, Australia, New Zealand and the two Billboard Global
charts were swept for him and returned no principal-chart entry.

## Re-read 2 Oct 2026 (charts sweep)

Applied from the verified 2 Oct 2026 charts sweep — every row below was CONFIRMED by two independent verifiers reading the chart body itself (method, both votes' issue references and the held items in [charts-sweep-2026-10-02.md](charts-sweep-2026-10-02.md)). Nigerian rows are TurnTable's Official Nigeria Top 100 (the Top 50 before 7 Jul 2022) and Official Top 100 Albums, read at the archive route; a peak is the best PRINTED rank in an issue that credits the artist. Board total now **27 chart entries** (24 singles + 3 albums).

- *Come & Go* — 🇳🇬 NG #12 → **#15**. ng-updates-031 — issue: A: 2022-06-09 (id 1114); also 2022-06-16 (id 1118); B: 2022-06-09 (id 1114) and 2022-06-16 (id 1118)
- *Jolie* — 🇳🇬 NG **#73** added. ng-new-111 — issue: A: 2026-09-17 (id 5940); B: 2026-09-17 id 5940
- *Love Again* — 🇳🇬 NG **#78** added. ng-new-112 — issue: A: 2026-09-17 (id 5940); B: 2026-09-17 id 5940
- *SUN SHERIF - EP* — 🇳🇬 NG **#77** added. ng-new-113 — issue: A: 2026-09-10 (id 5922); B: 2026-09-10 id 5922
