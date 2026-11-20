# The followers board: Spotify followers re-read on 20 Nov 2026

One reading: the Spotify follower counts behind the "Most-followed African
artist on Spotify" board on /records/africas-biggest and Burna Boy's followers
stat card (`spotifyFollowersRead` and `SPOTIFY_FOLLOWERS_READ_ON` in
`app/data/spotify.ts`). Nothing else in `docs/sourcing/BOARD-READINGS-2026-11-04.md`
was re-read.

## Spotify followers (spotifyFollowersRead)

Each artist's own page, open.spotify.com/artist/<id>, in the browser pane: the
exact count in the About panel ("N Followers"). All 23 rows were read on
20 Nov 2026 in one session, from 16:25:04Z (Burna Boy) to 16:28:47Z (MOLIY).
Before reading each panel, the reader checked that its card named the
expected artist and that no earlier panel's text was still on the page.
Nothing was played.

Burna Boy's first read missed the count: the script looked inside Spotify's
hidden language chooser, the first dialog on the page. A re-read of the open
panel at 16:25:19Z gave "18,581,418 Followers".

Every count is above its 4 Nov figure; Burna Boy's is up 195,400. One change
of order: Rema (12,515,666) has passed Davido (12,474,776) by 40,890 for third.
On 4 Nov Davido was above by 10,389. Diamond Platnumz is past 2 million
(2,022,289). The list below is highest first, the order of `spotifyFollowersRead`.

| Artist | Followers | 4 Nov |
|---|---|---|
| Burna Boy | 18,581,418 | 18,386,018 |
| Wizkid | 13,398,521 | 13,243,785 |
| Rema | 12,515,666 | 12,340,426 |
| Davido | 12,474,776 | 12,350,815 |
| Asake | 11,505,663 | 11,300,600 |
| Omah Lay | 8,467,109 | 8,351,711 |
| Ayra Starr | 8,244,158 | 8,131,604 |
| Ruger | 6,581,660 | 6,536,398 |
| Seyi Vibez | 6,499,198 | 6,372,441 |
| Kizz Daniel | 6,241,944 | 6,193,249 |
| Fireboy DML | 5,926,023 | 5,877,828 |
| Olamide | 5,757,202 | 5,701,759 |
| Tyla | 5,610,637 | 5,570,224 |
| Tems | 5,314,312 | 5,255,297 |
| BNXN | 4,744,105 | 4,649,840 |
| Tiwa Savage | 4,103,973 | 4,049,310 |
| Black Sherif | 3,239,200 | 3,205,178 |
| Victony | 3,047,355 | 3,005,918 |
| CKay | 2,337,752 | 2,327,410 |
| Diamond Platnumz | 2,022,289 | 1,997,195 |
| Oxlade | 1,878,076 | 1,865,056 |
| Black Coffee | 1,771,143 | 1,758,640 |
| MOLIY | 361,795 | 356,361 |

## Most songs over 200M Spotify streams (STREAMS_200M_READ_ON)

A second reading, added after the followers one above: the songs-over-200M
board, recounted the way docs/sourcing/BOARD-READINGS-2026-11-11.md counted it.
kworb.net artist songs pages (`kworb.net/spotify/artist/<id>_songs.html`) were
fetched on 20 Nov 2026 between 17:02 and 17:03 UTC with curl. The user agent was
`burnaboystats-research/1.0 (+https://burnaboystats.com)`, and the pages were
fetched one at a time. kworb's robots.txt, re-read the same day, still says
`User-agent: *`, `Allow: /`. The rows were read with `extractKworbSongsTable`
(scripts/stats-lib.mjs), the parser the 500M board uses.

Every song row at or past 200,000,000 on each artist's page was counted. That
covers all credits, with separate versions counted as kworb lists them. The
summary table is not a song.

| Artist | Page stamp | Songs ≥ 200M | 11 Nov | ≥ 300M | 11 Nov |
|---|---|---|---|---|---|
| Burna Boy | 2026/11/19 | **15** | 15 | 9 | 9 |
| Tems | 2026/11/19 | **8** | 8 | 6 | 6 |
| Rema | 2026/11/19 | **8** | 8 | 3 | 3 |
| Tyla | 2026/11/19 | **6** | 6 | 6 | 6 |
| CKay | 2026/11/19 | **4** | 4 | 3 | 3 |
| Seether | 2026/11/16 | **4** | 4 | 2 | 2 |
| Wizkid | 2026/11/19 | 3 | 3 | 2 | 2 |
| Omah Lay | 2026/11/17 | 3 | 3 | 1 | 1 |
| MOLIY | 2026/11/13 | 3 | 3 | 3 | 3 |
| Ayra Starr | 2026/11/19 | 2 | 2 | 2 | 2 |
| Asake | 2026/11/19 | 2 | 2 | 0 | 0 |
| Fireboy DML | 2026/11/18 | 2 | 2 | 1 | 1 |
| Amaarae | 2026/11/18 | 2 | — | 2 | — |
| Davido | 2026/11/19 | 1 | 1 | 0 | 0 |

Amaarae's page has two rows past 200M. Both are listings of the "SAD GIRLZ
LUV MONEY" remix (629,968,438 and 629,473,108), the same pair MOLIY's page
carries. The 11 Nov section put her at one song or none, so she was not in
its table. She is below the board either way.

Counted once, as the 500M board counts it since PR #546 (`oneRecording500`),
the pair is one song: Amaarae has one song past 200M and MOLIY two (the remix
and "SHAKE IT TO THE MAX (FLY) - REMIX"), not two and three as kworb's rows
read. The 200M board's published rows are typed and neither artist is on them,
so nothing the site prints changes.

Every other artist on the 500M roster has exactly one song past 200M: Master
KG, Nomcebo Zikode, Libianca, Oxlade, Black Coffee and Sofiya Nzau, plus
Freshlyground off Shakira's page.

What moved:

- Nothing on the board. Every count stood, and so did the 300M tier: Burna
  Boy has nine, and Tyla and Tems have six each.
- Burna Boy's next songs past 300M are "City Boys" (297,214,960) and "Gbona"
  (295,810,148).

The two near-the-line songs the source line quotes:

- CKay's "love nwantiti (feat. ElGrande Toto) - North African Remix":
  210,586,314, so **211M** (210M on 11 Nov). The source line now quotes 211M.
- Seether's "Careless Whisper (Bonus Track)": 211,198,572, so **211M**, the
  same as on 11 Nov.

Nearest to 200M:

- Davido's "KANTE (feat. Fave)": 198,209,683
- Wizkid's "Come Closer (feat. Drake)": 193,850,035
- Omah Lay's "Infinity (feat. Omah Lay)": 192,604,990
- "Essence (feat. Justin Bieber & Tems)": 192,514,871, on Tems' and Wizkid's
  pages
