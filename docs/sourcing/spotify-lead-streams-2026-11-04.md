# Spotify streams as a lead artist, African artists (read 4 Nov 2026)

This is the re-read of docs/sourcing/spotify-lead-streams-2026-10-21.md. The
whole list was read on one day, after Paul asked on 4 Nov 2026 for the stale
data to be refreshed.

## ChartMasters (the figures the site prints)

Each artist's public page, chartmasters.org/artist/<slug>/, has a "Spotify
statistics" block. All of them were read on 4 Nov 2026, about 07:25 UTC, with
plain curl:

- **robots.txt:** the `*` group allows /artist/.
- **Rounding:** the figures are rounded as the pages print them.
- **Age:** for signed-out visitors, each page still carries ChartMasters' note
  "Playcounts are 7+ days old".
- **The list:** the same ten artists as the 30 Sep and 21 Oct reads, and the
  order has not changed.

| Artist | Lead streams | Feat streams | 21 Oct |
|---|---|---|---|
| burna-boy | 8.2b | 3.2b | 8.1b / 3.1b |
| rema | 6.5b | 415.5m | 6.4b / 412.5m |
| wizkid | 5.0b | 7.0b | 5.0b / 7.0b |
| tems | 4.9b | 1.6b | 4.9b / 1.6b |
| tyla | 4.8b | 139.6m | 4.8b / 138.4m |
| asake | 4.2b | 418.7m | 4.1b / 410.3m |
| ayra-starr | 3.7b | 794.3m | 3.6b / 784.9m |
| davido | 3.5b | 813.5m | 3.4b / 806.8m |
| omah-lay | 3.2b | 660.7m | 3.1b / 657.0m |
| ckay | 3.1b | 78.3m | 3.0b / 77.8m |

Fireboy DML is the nearest name below the ten. He was read the same morning:
2.6b / 180.1m.

## kworb (corroboration)

The summary table on kworb.net/spotify/artist/<id>_songs.html (Total / As lead /
Solo / As feature), read 4 Nov 2026. kworb counts only the first-listed artist
as lead, so its lead totals run lower than ChartMasters', but the order at the
top is the same.

| Artist | As lead | Total | As feature | Solo | Page stamp |
|---|---|---|---|---|---|
| Burna Boy | 6,367,964,750 | 11,191,168,362 | 4,823,203,612 | 4,652,989,007 | 2026/11/03 |
| Rema | 5,088,041,876 | 6,857,166,940 | 1,769,125,064 | 2,826,054,636 | 2026/11/03 |
| Tyla | 4,293,194,946 | 4,969,586,369 | 676,391,423 | 3,455,192,002 | 2026/11/02 |
| Wizkid | 3,485,566,853 | 11,772,776,090 | 8,287,209,237 | 1,389,197,507 | 2026/11/02 |
| Asake | 3,300,012,319 | 4,614,552,870 | 1,314,540,551 | 2,458,908,804 | 2026/11/03 |
| CKay | 2,983,182,751 | 3,104,562,860 | 121,380,109 | 1,622,876,064 | 2026/11/02 |
| Tems | 2,737,027,637 | 6,391,633,296 | 3,654,605,659 | 2,435,428,335 | 2026/11/03 |
| Omah Lay | 2,581,251,227 | 3,825,854,799 | 1,244,603,572 | 2,261,290,157 | 2026/11/01 |
| Davido | 2,366,837,626 | 3,884,655,656 | 1,517,818,030 | 915,590,087 | 2026/11/02 |
| Fireboy DML | 2,144,086,218 | 2,723,290,942 | 579,204,724 | 1,127,405,412 | 2026/11/02 |
| Ayra Starr | 1,846,043,175 | 4,126,095,845 | 2,280,052,670 | 1,301,164,643 | 2026/11/01 |

Both sources rank Burna Boy first as a lead artist:

- **ChartMasters:** 8.2B to Rema's 6.5B.
- **kworb:** 6.37B to Rema's 5.09B.

Wizkid's overall total is still the larger of the two, because most of it
comes from featured credits: 7.0B on ChartMasters and 8.29B on kworb.
