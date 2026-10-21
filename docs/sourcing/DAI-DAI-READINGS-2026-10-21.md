# "Dai Dai" — the readings refreshed on 21 Oct 2026

Paul, 21 Oct 2026: "update stream count and anything else that is outdated
since our last update". The last hand refresh of these readings was #504
(15–16 Oct; docs/sourcing/DAI-DAI-READINGS-2026-10-15.md). Each reading below
was taken on 21 Oct 2026 at the same source it was taken from then, after
checking that source's robots.txt for `*`: plain curl with the
"burnaboystats-bot" user agent for kworb.net (`User-agent: * Allow: /`), and
the desktop app's browser pane for charts.spotify.com (drawn client-side;
robots.txt answers 404, so no rules), at a desktop-width viewport so the
table prints all its columns.

Not touched here, on purpose: the stream count and the video's view count
(the stats bot publishes both, DAI_DAI_SPOTIFY_STREAMS and
DAI_DAI_VIDEO_VIEWS, and its 21 Oct run already wrote 530M and 1.28B); the UK
Official Singles Chart and the Billboard Global 200 (officialcharts.com and
billboard.com are not fetched from this side; they wait for Paul).

## Spotify, Daily Top Songs Global (charts.spotify.com)

`charts.spotify.com/charts/view/regional-global-daily/2026-10-19` (and
`/latest`, which served the same chart: "October 19, 2026" was the newest
Spotify had published at about 06:30 UTC on 21 Oct), in Spotify's own table
and the row's expanded panel:

- Chart dated **19 October 2026**: Dai Dai — No. 50, Prev 36, Peak 1,
  **Streak 151**, 1,798,325 streams.
- Expanded row: Release Date May 14, 2026 · First entry date May 15, 2026 ·
  First entry position 114 · **Total days on chart 152**.

kworb's copy of the same chart (`kworb.net/spotify/country/global_daily.html`,
"Global - 2026/10/19") prints the same row to the stream: No. 50, -14,
Days 152, Pk 1 (x37), 1,798,325.

The charts between the last body read (14 Oct, No. 36, Streak 146, Total 147)
and this one, day by day off kworb's history of the song
(`kworb.net/spotify/track/0kosUz0jePvjiz4ctmR6wL.html`, daily table), Global
column: 15 Oct 38 · 16 Oct 42 · 17 Oct 26 · 18 Oct 36 · 19 Oct 50. On the chart
every day (146 + 5 = 151 straight, 147 + 5 = 152 in all), never inside the
Top 10 and never at No. 1. kworb's all-time tally (`global_daily_totals.html`,
through 2026/10/19) reads Days 152, T10 85, Pk 1 (x37) for the song.

So: **151 straight days, 152 in all, through the 19 Oct chart; 37 days at No. 1
and 85 in the Top 10, both unchanged and now confirmed through the same chart.**

## Spotify, Weekly Top Songs Global (charts.spotify.com)

`charts.spotify.com/charts/view/regional-global-weekly/latest`, "Top Songs
Global · October 9 - 15, 2026" (the chart dated 15 October 2026): Dai Dai —
No. 35, Prev 27, Peak 1, Streak 21, 14,531,152 streams. Expanded row: First
entry date May 28, 2026 · First entry position 115 · **Total weeks on chart 21**.

kworb's copy (`global_weekly.html`, "Global - 2026/10/15"): No. 35, -8, Wks 21,
Pk 1 (x6), 14,531,152. Its weekly history of the song runs 2026/05/28
(No. 115) to 2026/10/15 (No. 35) with no week missed, and
`global_weekly_totals.html` (through 2026/10/15) reads Wks 21, Pk 1 (x6),
PkStreams 40,283,139.

So: **a 21-week stay counted through the chart dated 15 October 2026** (was 20
through 8 Oct); the six weeks at No. 1 and the 40.28M peak week are unchanged.

## Apple Music and iTunes (kworb)

kworb's worldwide and European iTunes and Apple Music song charts, each page
dated 2026/10/20, and each one's totals page. "(x?)" is kworb's count of days
at the peak; the peak is 1 on all four, so it is the days at No. 1.

| Chart (kworb page) | Position on 2026/10/20 | Days on chart | Days at No. 1 | Site before |
|---|---|---|---|---|
| Worldwide iTunes (`/ww/`) | 22 | 159 | **40** | 40 |
| European iTunes (`/eu/`) | 10 | 159 | **16** | 16 |
| Worldwide Apple Music (`/apple_songs/`) | 19 | 153 | **11** | 11 |
| European Apple Music (`/apple_songs_eu/`) | 6 | 158 | **69** | 69 |

All four unchanged and all four closed (none of the charts has had the song at
No. 1 since August); only the date they are counted to moves, 14 Oct → 20 Oct.

**Not refreshed, and why:** the iTunes No. 1 countries count (73, as of
21 Aug), for the reason the 15 Oct doc gives: no kworb page lists a song's
best iTunes position country by country.

## The 500M board's reading

`app/data/african500m.artists.json` keeps the 8 Oct reading off Spotify's own
track page (501,627,594) for the days kworb trailed it. kworb's Burna Boy page
(stamped 2026/10/20) has the song at 529,527,246, past the reading, so the
board already counts kworb's figure and the reading no longer shows. Nothing to
change.

## Not readable from here, so left as they are

- UK Official Singles Chart (through the chart of 15 October, No. 43,
  19 weeks): officialcharts.com is not fetched from this side. The chart of
  16–22 October is out; it needs Paul.
- Billboard Global 200 (through the issue of 17 October): Paul's screenshots.
- YouTube's global music-video chart and Spotify's Global Music Video chart:
  as on 15 Oct, neither has a readable archive.
