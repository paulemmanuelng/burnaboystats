# Black Sherif — official chart peaks

**Standard:** one entry per **country** per **release**, on that country's
**principal national singles or albums chart**. *peak* = the highest position the
release has ever reached. Lead, co-billed and featured credits all count.

**Excluded throughout:** platform charts (Spotify, Apple Music, iTunes, Deezer,
Shazam, YouTube, Audiomack, Boomplay); **genre and component charts** (Billboard
U.S. Afrobeats Songs, Streaming Songs, Radio Songs); extension charts below a
main chart; year-end, mid-week and recurrent charts.

## Total: 22 singles + 0 albums = 22 chart entries

**1 No. 1.** One territory: 🇳🇬 Nigeria.

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

## Everywhere else

The international chart sweep is **incomplete and is not published as zeros.**
Germany, the Netherlands, Switzerland and Austria were read in full for
Black Sherif on both singles and albums and hold nothing. France (lescharts) and
Belgium (Ultratop) sit behind a Cloudflare bot check that was not bypassed; the
UK, Ireland, US, Canada, the Nordics, Italy, Spain, Portugal and Greece were not
completed. Those territories are **gaps**, and this file claims one territory
only.
