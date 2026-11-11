# Board readings, 11 Nov 2026

kworb.net artist songs pages (`kworb.net/spotify/artist/<id>_songs.html`),
fetched 11 Nov 2026 about 06:20 UTC with curl and the user agent
`burnaboystats-bot` (kworb's robots.txt: `User-agent: *`, `Allow: /`). Rows
read with `extractKworbSongsTable` (scripts/stats-lib.mjs), the parser the
500M board uses.

## Most songs over 200M Spotify streams (STREAMS_200M_READ_ON)

Every song row at or past 200,000,000 on each artist's page (all credits,
separate versions counted as kworb lists them; the summary table is not a song):

| Artist | Page stamp | Songs ≥ 200M | 4 Nov | ≥ 300M | 4 Nov |
|---|---|---|---|---|---|
| Burna Boy | 2026/11/10 | **15** | 15 | 9 | 9 |
| Tems | 2026/11/09 | **8** | 8 | 6 | 5 |
| Rema | 2026/11/10 | **8** | 7 | 3 | 2 |
| Tyla | 2026/11/10 | **6** | 6 | 6 | 6 |
| CKay | 2026/11/09 | **4** | 4 | 3 | 3 |
| Seether | 2026/11/08 | **4** | 4 | 2 | 2 |
| Wizkid | 2026/11/10 | 3 | 3 | 2 | 2 |
| Omah Lay | 2026/11/09 | 3 | 3 | 1 | 1 |
| MOLIY | 2026/11/03 | 3 | 3 | 3 | 3 |
| Ayra Starr | 2026/11/09 | 2 | 2 | 2 | 2 |
| Asake | 2026/11/10 | 2 | 2 | 0 | 0 |
| Fireboy DML | 2026/11/06 | 2 | 2 | 1 | 1 |
| Davido | 2026/11/09 | 1 | 1 | 0 | 0 |

Every other artist on the 500M roster (Master KG, Nomcebo Zikode, Amaarae,
Libianca, Oxlade, Black Coffee, Sofiya Nzau; Freshlyground off Shakira's page)
has one song or none past 200M.

What moved:

- Rema's eighth: "Secondhand (feat. Rema)" at 204,783,009 (199,498,698 on
  4 Nov). Rema and Tems are now tied on eight, sharing second.
- Rema's third past 300M: "Soweto - Sped Up" at 301,098,015.
- Tems' sixth past 300M: "Higher" at 300,831,976. The note's "Tyla with six,
  then Tems with five" now reads Tyla and Tems with six each.
- Burna Boy stays at 15 and nine; his next past 300M are "City Boys"
  (296,061,860) and "Gbona" (294,728,900).

The two near-the-line songs the source line quotes:

- CKay's "love nwantiti (feat. ElGrande Toto) - North African Remix":
  209,656,589, so **210M** (209M on 4 Nov).
- Seether's "Careless Whisper (Bonus Track)": 210,525,068, so **211M** (210M on
  4 Nov).

Nearest to 200M: Davido's "KANTE (feat. Fave)" 196,682,122; Wizkid's "Come
Closer (feat. Drake)" 193,001,344; Omah Lay's "Infinity (feat. Omah Lay)"
192,058,781; "Essence (feat. Justin Bieber & Tems)" 192,019,807 on Tems' page.

## Most 500M-stream songs on Spotify (bot-fed)

`node scripts/build-african-500m.mjs --dry --pages=<the pages above>`:
Burna Boy 3, Rema 2, Tems 2, Tyla 2, CKay 2, Ayra Starr 2, Moliy 3, and one
each for Wizkid, Freshlyground, Seether, Master KG, Nomcebo Zikode, Amaarae and
Libianca. Every count equals the committed app/data/african500m.snapshot.json
(PR #533). Nothing is hand-edited; the bot publishes the refresh.
