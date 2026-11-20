# Spotify streams as a lead artist, African artists (read 20 Nov 2026)

This is the re-read of docs/sourcing/spotify-lead-streams-2026-11-04.md. The
whole list was read on one day.

**Not applied.** The board's rows and `SPOTIFY_LEAD_STREAMS_READ_ON` stay at
the 4 Nov reading. Since 4 Nov, ChartMasters has moved songs between its lead
and feat columns, and some of the songs now counted as lead are features on
other artists' records. That is no longer the measure the board prints (see
"Why the reading was not applied" below). Paul to rule.

## ChartMasters (as the pages print them)

Each artist's public page, chartmasters.org/artist/<slug>/, has a "Spotify
statistics" block. All of them were read on 20 Nov 2026 between 16:59:00 and
16:59:59 UTC with plain curl, five seconds apart. The user agent was
`burnaboystats-research/1.0 (+https://burnaboystats.com)`.

- **robots.txt:** re-read the same day. The `*` group allows /artist/.
  Claude-User is not named; ClaudeBot, Claude-Web and anthropic-ai are
  barred.
- **Rounding:** the figures are rounded as the pages print them.
- **Age:** for signed-out visitors, each page still carries ChartMasters' note
  "Playcounts are 7+ days old".
- **Exact counts:** seven of the pages give their exact lead count in the
  "Artist Rankings" sentence ("With N lead streams on Spotify"):
  - Burna Boy: 9,912,427,414
  - Rema: 6,617,474,409
  - Tems: 6,278,780,297
  - WizKid: 5,784,304,153
  - Tyla: 4,571,406,890
  - Asake: 4,525,655,823
  - Ayra Starr: 4,173,014,567
- **Another block:** the pages also carry a "Key Performance Indicators"
  block. Its "On-demand audio streams" figures (Burna Boy: 20.8b lead, 3.2b
  feat) are not Spotify's, so they were not used.
- **The list:** the same ten artists as the 30 Sep, 21 Oct and 4 Nov reads.
  Read as printed, the order changes at the top: Tems (6.3b) passes Wizkid
  (5.8b) for third. Burna Boy still leads.

| Artist | Lead streams | Feat streams | 4 Nov |
|---|---|---|---|
| burna-boy | 9.9b | 1.5b | 8.2b / 3.2b |
| rema | 6.6b | 316.8m | 6.5b / 415.5m |
| tems | 6.3b | 302.1m | 4.9b / 1.6b |
| wizkid | 5.8b | 6.4b | 5.0b / 7.0b |
| tyla | 4.6b | 453.0m | 4.8b / 139.6m |
| asake | 4.5b | 191.0m | 4.2b / 418.7m |
| ayra-starr | 4.2b | 217.1m | 3.7b / 794.3m |
| davido | 3.7b | 570.6m | 3.5b / 813.5m |
| omah-lay | 3.5b | 371.6m | 3.2b / 660.7m |
| ckay | 3.1b | 19.9m | 3.1b / 78.3m |

Fireboy DML is the nearest name below the ten. He was read in the same run:
2.7b / 98.0m (2.6b / 180.1m on 4 Nov).

## Why the reading was not applied

- **Songs have moved between the columns.** Feat streams fell for ten of
  the eleven artists read. Burna Boy's went from 3.2b to 1.5b, Tems' from
  1.6b to 302.1m, and Ayra Starr's from 794.3m to 217.1m. Tyla's moved the
  other way: her lead fell from 4.8b to 4.6b while her feat rose from 139.6m
  to 453.0m. Spotify play counts only climb, so ChartMasters must have moved
  songs from one column to the other since 4 Nov. Each artist's lead plus
  feat moved little (Burna Boy's is 11.4b on both days).
- **Some of the moved songs are features.** Tems' kworb page (below) has
  3,693,467,161 streams on rows where she is not billed first:
  - "WAIT FOR U (feat. Drake & Tems)": 1,446,960,566
  - "Raindance (feat. Tems)": 939,690,909
  - "Essence (feat. Tems)": 412,168,495
  - "Fountains (with Tems)": 259,647,407

  Her feat column on ChartMasters now holds only 302.1m, so at least 3.39B of
  those streams sit in her lead count. Without "WAIT FOR U", the other rows
  add up to only 2.25B, so "WAIT FOR U" must be in it.
- **The board measures something else.** Its measure is streams on the
  artist's own songs, not features (Paul, 30 Sep 2026). The answer on
  /records/africas-biggest says so: "By lead credits (the artist's own songs,
  not features)". The songs are filed by Rule C (app/data/songRoles.ts),
  which matched ChartMasters' figures in October. The 20 Nov figures are no
  longer that measure, so applying them would print a different metric
  under the same name.
- **What applying them would print.** The answer would read "ahead of Rema
  (6.6B) and Tems (6.3B)". Tems would be third on features such as
  "WAIT FOR U".

## kworb (corroboration)

The summary table on kworb.net/spotify/artist/<id>_songs.html (Total / As lead
/ Solo / As feature), read 20 Nov 2026, 17:02 to 17:03 UTC. These are the same
fetches as the 200M recount in docs/sourcing/BOARD-READINGS-2026-11-20.md.
kworb counts only the first-listed artist as lead.

| Artist | As lead | Total | As feature | Solo | Page stamp |
|---|---|---|---|---|---|
| Burna Boy | 6,416,113,302 | 11,255,395,121 | 4,839,281,819 | 4,690,088,324 | 2026/11/19 |
| Rema | 5,128,978,027 | 6,869,132,122 | 1,740,154,095 | 2,860,372,268 | 2026/11/19 |
| Tyla | 4,331,389,951 | 5,017,206,605 | 685,816,654 | 3,485,506,084 | 2026/11/19 |
| Wizkid | 3,521,106,551 | 11,625,834,782 | 8,104,728,231 | 1,406,244,910 | 2026/11/19 |
| Asake | 3,356,315,001 | 4,701,107,332 | 1,344,792,331 | 2,504,114,033 | 2026/11/19 |
| CKay | 3,002,610,533 | 3,124,863,831 | 122,253,298 | 1,633,938,337 | 2026/11/19 |
| Tems | 2,770,486,093 | 6,463,953,254 | 3,693,467,161 | 2,465,995,807 | 2026/11/19 |
| Omah Lay | 2,614,043,659 | 3,845,142,727 | 1,231,099,068 | 2,287,310,882 | 2026/11/17 |
| Davido | 2,394,771,797 | 3,924,038,316 | 1,529,266,519 | 925,763,449 | 2026/11/19 |
| Fireboy DML | 2,164,933,221 | 2,749,040,929 | 584,107,708 | 1,140,970,923 | 2026/11/18 |
| Ayra Starr | 1,873,376,119 | 4,168,994,184 | 2,295,618,065 | 1,315,106,254 | 2026/11/19 |

The top two are the same on both sources: Burna Boy ranks first as a lead
artist and Rema second.

- **ChartMasters:** Burna Boy 9.9B, Rema 6.6B.
- **kworb:** Burna Boy 6.42B, Rema 5.13B.

Wizkid's kworb total is 146,941,308 lower than on 4 Nov (11,772,776,090, page
of 2 Nov), so at least one row has left his page or been corrected.
