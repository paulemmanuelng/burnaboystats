# Africa's Biggest and the followers board: readings re-read on 4 Nov 2026

Paul asked on 4 Nov 2026 for the stale data to be refreshed. Each figure below
is a hand-maintained, dated reading that the stats bot does not refresh. Each
was re-read on 4 Nov 2026 from the pages it was first read from:

- **ChartMasters and kworb:** plain curl with the "burnaboystats-bot" user
  agent. robots.txt allows both for `*`.
- **Spotify:** the desktop app's browser pane, read only.

## Best-selling African artist (EAS_READING)

ChartMasters' Best-Selling Artists of All-Time board
(chartmasters.org/best-selling-artists-of-all-time/):

- **The page:** dateModified 2026-11-04T01:56:43+00:00, served with
  Last-Modified Wed, 04 Nov 2026 01:56:43 GMT.
- **How it was read:** all 29 pages of its table, by
  `POST /wp-admin/admin-ajax.php` with action=cm_data_table and
  table=artist_top_cspc, 25 rows a page. Every response reported a total of
  **708**.
- **Rank:** the g# column runs 1 to 708 with no gaps. Sorting by Total EAS
  reproduces it with 0 mismatches.
- **Sales columns:** 211 of the 708 rows have all-zero sales columns.

| Artist (board's spelling) | g# | Total EAS | Streams stamp | Spotify id (edit link) |
|---|---|---|---|---|
| Burna Boy | 530 | 15,672,000 | 11/02/26 | 3wcj11K77LjEY1PkEazffa |
| WizKid | 539 | 15,266,000 | 11/02/26 | 3tVQdUvClmAT7URs9V3rsp |
| Asake | 652 | 11,445,000 | 09/18/26 | 3a1tBryiczPAZpgoZN9Rzg |
| Rema | 706 | 10,091,000 | 11/02/26 | 46pWGuE3dSwY3bMMXGBvVS |

The four rows check out as follows:

- **Sales columns:** for all four, the studio-album, other-LP, physical-single
  and digital-single columns read 0, and Total EAS equals the streams figure
  to the digit. They are streaming-only.
- **Spotify ids:** all four match app/data/spotify.ts.
- **Country search:** "country:nigeria" returns exactly these four. Fifty
  other searches were run, one per African country plus "africa" and "south".
  Only "country:niger", a substring of Nigeria, returns any African row, and
  it returns the same four. "country:south" returns South Korea's 18.

Akon is No. 500 with 17,007,000. He is American, as before. Beéle, the
Colombian act the board tags Afrobeats, has 11,241,000.

Burna Boy's lead over WizKid is 406,000, and both counts are stamped 2 Nov.
Since the 21 Oct read, Burna Boy has gained 133,000 and WizKid 107,000.

## Spotify streams as a lead artist (spotifyLeadStreams)

See docs/sourcing/spotify-lead-streams-2026-11-04.md.

## Most songs over 200M Spotify streams (STREAMS_200M_READ_ON)

Every song row at or past 200,000,000 on each artist's kworb page
(`kworb.net/spotify/artist/<id>_songs.html`, all credits, separate versions
counted as kworb lists them; the summary table above the song list is not a
song and is not counted):

| Artist | Page stamp | Songs ≥ 200M | 21 Oct | ≥ 300M |
|---|---|---|---|---|
| Burna Boy | 2026/11/03 | **15** | 15 | 9 |
| Tems | 2026/11/03 | **8** | 8 | 5 |
| Rema | 2026/11/03 | **7** | 7 | 2 |
| Tyla | 2026/11/02 | **6** | 6 | 6 |
| CKay | 2026/11/02 | **4** | 4 | 3 |
| Seether | 2026/10/31 | **4** | 4 | 2 |
| Wizkid | 2026/11/02 | 3 | 3 | 2 |
| Omah Lay | 2026/11/01 | 3 | 3 | 1 |
| MOLIY | 2026/10/24 | 3 | 3 | 3 |
| Ayra Starr | 2026/11/01 | 2 | 2 | 2 |
| Asake | 2026/11/03 | 2 | 2 | 0 |
| Fireboy DML | 2026/11/02 | 2 | 2 | 1 |
| Davido | 2026/11/02 | 1 | 1 | 0 |

Every count stands. The nearest crossings are Rema's "Secondhand (feat. Rema)"
at 199,498,698 and Davido's "KANTE (feat. Fave)" at 195,706,297.

The two songs the board's source line quotes near the line now read:

- CKay's "love nwantiti (feat. ElGrande Toto) - North African Remix":
  209,017,847, so **209M** (it was quoted as 208M).
- Seether's "Careless Whisper (Bonus Track)": 209,754,109, so **210M** (it was
  quoted as 208M).

The board's note on the 300M tier is unchanged on the same pages: Burna Boy
nine, Tyla six, Tems five.

Not changed here: the firsts entry "50 songs past 50 million" dates its rivals'
counts to kworb's 20 Oct pages ("Wizkid is next with 40, Asake with 31"). On
these pages the counts are Burna Boy 52, Wizkid 40 and Asake 32. That entry is
a dated reading with its own date, and it belongs to the firsts lane.

## Spotify Daily Top Artists: Global (SPOTIFY_TOP_ARTISTS_DAILY)

charts.spotify.com/charts/view/artist-global-daily/<date>, in the browser pane.
Every chart from 7 Oct to 2 Nov 2026 was read, 27 dates, and the 6 Oct chart
was re-read as a control. On 6 Oct Burna Boy was No. 172 with Streak 139, as
the stored reading has it.

On each date the table's 200 rows were checked against two lists. The first is
every board artist and every artist in the field, plus Dave, GIMS, Stromae,
Damso and other African names. The second is the 6 Oct chart, so that any
newcomer to the chart was listed.

- **Burna Boy** is on all 27 charts, Streak 140 (7 Oct) to 166 (2 Nov). His
  positions:

  168, 172, 163, 142, 153, 161, 174, 179, 178, 178, 151, 172, 177, 168, 177, 175, 177, 163, 170, 183, 180, 180, 181, 182, 176, 179, 179

- **His expanded row on the 2 Nov chart:** No. 179, Peak 40, Prev 179,
  Streak 166. "First entry date Jul 8, 2022 · First entry position 40 ·
  **Total days on chart 429**" (402 + 27).
- **No other African artist by nationality** is on any of the 27 charts. The
  newcomers are Latin, Brazilian, Indian, Korean, American and European acts,
  for example Panda, Alicia Keys, Chappell Roan, Fontaines D.C., ILLIT,
  Judeline, Megan Thee Stallion and Mariah Carey. So the field's rows stand as
  read on 7 Oct.

The method fields move to the new totals:

- **datesRead:** 552 + 27 = 579 of the 1,839 chart dates.
- **maxGap:** 3.

The walk, date by date, is kept in the working folder
(`sweep-1104/readings/topartists-walk.txt`).

## Spotify followers (spotifyFollowersRead)

Each artist's own page, open.spotify.com/artist/<id>, in the browser pane: the
exact count in the About panel ("N Followers"). All 23 rows were read on
4 Nov 2026. The order is the same as on 11 Oct.

| Artist | Followers | 11 Oct |
|---|---|---|
| Burna Boy | 18,386,018 | 18,121,851 |
| Wizkid | 13,243,785 | 13,039,903 |
| Davido | 12,350,815 | 12,178,294 |
| Rema | 12,340,426 | 12,114,563 |
| Asake | 11,300,600 | 11,023,141 |
| Omah Lay | 8,351,711 | 8,174,859 |
| Ayra Starr | 8,131,604 | 7,958,957 |
| Ruger | 6,536,398 | 6,468,037 |
| Seyi Vibez | 6,372,441 | 6,199,797 |
| Kizz Daniel | 6,193,249 | 6,118,858 |
| Fireboy DML | 5,877,828 | 5,803,810 |
| Olamide | 5,701,759 | 5,623,998 |
| Tyla | 5,570,224 | 5,498,044 |
| Tems | 5,255,297 | 5,172,342 |
| BNXN | 4,649,840 | 4,521,041 |
| Tiwa Savage | 4,049,310 | 3,983,995 |
| Black Sherif | 3,205,178 | 3,155,701 |
| Victony | 3,005,918 | 2,941,494 |
| CKay | 2,327,410 | 2,312,801 |
| Diamond Platnumz | 1,997,195 | 1,966,418 |
| Oxlade | 1,865,056 | 1,851,403 |
| Black Coffee | 1,758,640 | 1,740,634 |
| MOLIY | 356,361 | 348,813 |

## Firsts: "50 songs past 50 million" — the rivals' counts

Every song row at or past 50,000,000 on kworb's artist pages stamped
2026/11/03 (curl, "burnaboystats-bot", 4 Nov 2026): Burna Boy 52, Wizkid 40,
Asake 32 (Rema 25, Tems 23). Asake was 31 on the 2026/10/20 pages, so the
first now dates its counts to these pages.

Re-checked and unchanged on the same pages: "past 100 million" (Burna Boy 23,
Wizkid 18) and "past 400 million" (Burna Boy 5, Tems 4, Tyla 3; Burna Boy 9
past 300M, Tyla 6, Tems 5). Those two firsts keep the dates they print.
