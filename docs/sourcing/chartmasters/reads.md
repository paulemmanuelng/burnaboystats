# ChartMasters reads

One block per run of scripts/chartmasters-anchor.mjs — what was read, what was paired, what moved.

## 2026-09-17

- career total: offset 115,177,863 (ChartMasters through 2026-09-15 − kworb 2026-09-16); published 11,010,480,657 on kworb's 2026-09-16 page
- ChartMasters milestone: 11B Artist Streams — Sep 14, 2026
- ChartMasters milestone: 7.0B Artist Streams — Sep 11, 2026
- ChartMasters milestone: 800M Artist YouTube Views — Sep 6, 2026
- ChartMasters milestone: 4.0B Artist YouTube Views — Sep 2, 2026
- burna-boy: 2026 ledger anchored at 1,810,927,983 through kworb's 2026-09-16 (was 1,810,927,983 through 2026-09-16)
- tems: 2026 ledger anchored at 1,807,644,361 through kworb's 2026-09-16 (was 1,807,644,361 through 2026-09-16)
- edit: app/data/streamingTotals.ts: "11.01B" → "11.01B"
- edit: app/data/streamingTotals.ts: "11,010,480,657" → "11,010,480,657"

## 2026-09-17 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser
- Captured: `reads/2026-09-17-cities.json` — 50 cities with monthly listeners, 29 countries; Global Ranking #75; popularity 86; followers 17,810,103; monthly listeners 49,058,318 (trend −9,627,572)
- Feeds: app/data/listeners.ts → /music/listeners ("Where the world listens"); tests/listeners.test.ts checks the file against this capture row for row
- Re-read monthly and replace the whole list at once (the page prints the read date beside every figure)

## 2026-09-20

- career total: offset 138,341,132 (ChartMasters through 2026-09-17 − kworb 2026-09-18); published 11,018,189,864 on kworb's 2026-09-18 page
- ChartMasters milestone: 11B Artist Streams — Sep 14, 2026
- ChartMasters milestone: 7.0B Artist Streams — Sep 11, 2026
- ChartMasters milestone: 800M Artist YouTube Views — Sep 6, 2026
- burna-boy: kworb's 2026-09-19 page is not out yet (newest 2026-09-18) — ledger left alone
- tems: kworb's 2026-09-19 page is not out yet (newest 2026-09-18) — ledger left alone
- asake: no 2025 close in docs/sourcing/chartmasters/closes-2025.json — ledger left on kworb's dailies
- tyla: no 2025 close in docs/sourcing/chartmasters/closes-2025.json — ledger left on kworb's dailies
- rows NOT rewritten: not every ledger reaches 2026-09-19 (the bot publishes them together on the newest day all five cover)
- edit: app/data/streamingTotals.ts: "11.02B" → "11.02B"
- edit: app/data/streamingTotals.ts: "11,017,903,423" → "11,018,189,864"
- wizkid: the script anchored the 2026 ledger at 1,826,947,622 through kworb's 2026-09-19 page (ChartMasters through 18 Sep 11,783,919,650 − close), but that page exists for Wizkid only — Burna Boy's and Tems' kworb pages are still stamped 18 Sep — so the move was REVERTED by hand to keep the five ledgers on one day (16 Sep). Re-run this same reading file once kworb's 19 Sep pages exist for all three; the 18 Sep totals are in it.
- ChartMasters' own history for Burna Boy: 16 Sep 11,019,018,361 → 17 Sep 11,018,189,864 (−828,497) → 18 Sep 11,033,727,620. The 17 Sep snapshot is the one the pairing could use today (kworb 18 Sep); it sits ~8M below trend, so the offset set today (138,341,132) will read LOW by about that until the 18 ↔ 19 Sep pair is available. Not smoothed: the tool's figure is the figure.
- why now: the bot's rawJumpAlert of 19 Sep — kworb's raw career total fell 22,876,828 in one build (10,902,725,560 → 10,879,848,732), a roster removal on kworb's side; the offset moved by +23,163,269, the same event seen from the other tracker.
- kworb note: Wizkid's kworb raw fell 112,009,471 between its 17 and 19 Sep pages (11,541,369,048 → 11,429,359,577) — the ledger design (dated dailies, never cumulative deltas) is what makes that harmless.

## 2026-09-20 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser (same session as the Playcounts read above)
- Captured: `reads/2026-09-20-cities.json` — the same 50 cities as 17 Sep, re-ranked; 29 countries; Global Ranking #78; popularity 85; followers 17,856,540; monthly listeners 48,227,381 (trend −9,300,495)
- Feeds: app/data/listeners.ts (whole list replaced, LISTENERS_READ_ON 2026-09-20). Followers on the Africa's Biggest board NOT moved: that board is read whole, all five artists on one day, and only Burna Boy was read today.

## 2026-09-21

- Playcounts Tool re-read on Paul's signed-in account (reads/2026-09-21.json): Burna Boy through 19 Sep 11,041,813,621 and 20 Sep 11,048,637,922; Wizkid 11,790,150,044 / 11,795,511,579; Tems 18 Sep 6,260,065,902 (reproduces the 20 Sep reading exactly), 19 Sep 6,271,063,940, 20 Sep 6,275,904,209; Asake 4,392,647,106 and Tyla 4,842,757,274 through 20 Sep.
- The "Tems 18 Sep looks ~5.7M low" suspicion (21 Sep verifier, from a fan table and kworb's rate) is withdrawn: the tool's own series steps +11.0M on the 19th and +4.8M on the 20th. The fan table (@theowensblock, 19 Sep) prints ChartMasters' 19 Sep totals to the unit for all three.
- No re-anchor possible today: kworb's Burna Boy page is still stamped 2026-09-18 (frozen since the 18th, daily column reading 611,670), so no ChartMasters-day ↔ kworb-page pair exists after the one used on 20 Sep. Re-run `node scripts/chartmasters-anchor.mjs docs/sourcing/chartmasters/reads/2026-09-21.json` when kworb's Burna page moves; the five 2026 ledgers publish together, so the Africa's Biggest 2026 rows stay at 16 Sep until then.
- Spotify About panels read the same session (for the followers board): Burna Boy 17,870,932 · Wizkid 12,822,411 · Davido 12,001,372 · Rema 11,911,168 · Asake 10,726,832 · Ayra Starr 7,804,641 · Tyla 5,428,431.


## 2026-09-22

- career total: offset 168,789,190 (ChartMasters through 2026-09-20 − kworb 2026-09-18 (frozen page; no 2026-09-21 page)); published 11,048,637,922 on kworb's 2026-09-18 page — KWORB FROZEN: the offset pairs ChartMasters with a stale page and must be re-measured with a plain run once kworb's page moves
- burna-boy: 2026 ledger anchored at 1,849,085,248 through kworb's 2026-09-21 (was 1,810,927,983 through 2026-09-16)
- wizkid: 2026 ledger anchored at 1,838,539,551 through kworb's 2026-09-21 (was 1,808,204,727 through 2026-09-16)
- tems: 2026 ledger anchored at 1,834,679,231 through kworb's 2026-09-21 (was 1,807,644,361 through 2026-09-16)
- asake: 2026 ledger anchored at 1,488,417,714 through kworb's 2026-09-21 (was 1,460,097,619 through 2026-09-16)
- tyla: 2026 ledger anchored at 1,225,464,906 through kworb's 2026-09-21 (was 1,208,808,241 through 2026-09-16)
- edit: app/data/streamingTotals.ts: "11.02B" → "11.05B"
- edit: app/data/streamingTotals.ts: "11,018,189,864" → "11,048,637,922"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.808B" → 1.835B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-09-16 → 2026-09-21
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.808B" → 1.839B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.811B" → 1.849B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.460B" → 1.488B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.209B" → 1.225B"

## 2026-09-23 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser (same session as the Playcounts read above)
- Captured: `reads/2026-09-23-cities.json` — the same 50 cities as 20 Sep, re-ranked; 29 countries; Global Ranking #82; popularity 85; followers 17,897,540; monthly listeners 47,645,686 (trend −8,784,501)
- Feeds: app/data/listeners.ts (whole list replaced, LISTENERS_READ_ON 2026-09-23), applied with `node scripts/listeners-apply.mjs` rather than by hand for the first time. Followers on the Africa's Biggest board NOT moved: that board is read whole, all five artists on one day, and only Burna Boy was read today.
- 18 rank moves and only 8 of the 50 cities up: Johannesburg 32→29, Montreal 12→10, Mexico City 10→9, Berlin 9→11. Lagos 1,425,699. The fall is real and visible elsewhere — the global listener rank published on /records/by-the-numbers moved 75 → 82 the same day.

## 2026-09-23

- career total: offset 114,858,823 (ChartMasters through 2026-09-21 − kworb 2026-09-22); published 11,055,651,410 on kworb's 2026-09-22 page
- burna-boy: 2026 ledger anchored at 1,856,098,736 through kworb's 2026-09-22 (was 1,849,085,248 through 2026-09-21)
- wizkid: 2026 ledger anchored at 1,844,027,673 through kworb's 2026-09-22 (was 1,838,539,551 through 2026-09-21)
- tems: 2026 ledger anchored at 1,840,024,687 through kworb's 2026-09-22 (was 1,834,679,231 through 2026-09-21)
- asake: 2026 ledger anchored at 1,493,780,651 through kworb's 2026-09-22 (was 1,488,417,714 through 2026-09-21)
- tyla: 2026 ledger anchored at 1,228,692,984 through kworb's 2026-09-22 (was 1,225,464,906 through 2026-09-21)
- edit: app/data/streamingTotals.ts: "11.05B" → "11.06B"
- edit: app/data/streamingTotals.ts: "11,048,637,922" → "11,055,651,410"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.835B" → 1.840B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-09-21 → 2026-09-22
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.839B" → 1.844B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.849B" → 1.856B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.488B" → 1.494B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.225B" → 1.229B"

## 2026-09-24 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in by Paul, in the site's own browser
- Captured: `reads/2026-09-24-cities.json` — the same 50 cities as 23 Sep, re-ranked; 29 countries; Global Ranking #82; popularity 85; followers 17,911,287; monthly listeners 47,144,753 (trend −8,556,927)
- Feeds: app/data/listeners.ts (whole list replaced, LISTENERS_READ_ON 2026-09-24), applied with `node scripts/listeners-apply.mjs`. The followers figure matches the artist's own Spotify About panel read the same evening (17,911,287), which moved the Africa's Biggest board in its own change, with all five artists read that day.
- 23 rank moves, all one-place swaps (Sydney 7→6 past São Paulo; Santiago 12→11; Johannesburg 29→28; Accra 37→36), and 4 of the 50 cities up: Lagos (1,430,157), Abuja, Johannesburg, Accra. Top-50 sum 15,337,559.

## 2026-09-25

- career total: offset 141,218,212 (ChartMasters through 2026-09-23 − kworb 2026-09-24); published 11,070,534,585 on kworb's 2026-09-24 page
- burna-boy: 2026 ledger anchored at 1,870,981,911 through kworb's 2026-09-24 (was 1,870,893,694 through 2026-09-24)
- wizkid: 2026 ledger anchored at 1,856,260,714 through kworb's 2026-09-24 (was 1,855,915,010 through 2026-09-24)
- tems: 2026 ledger anchored at 1,851,038,320 through kworb's 2026-09-24 (was 1,850,976,710 through 2026-09-24)
- asake: 2026 ledger anchored at 1,504,923,545 through kworb's 2026-09-24 (was 1,504,913,543 through 2026-09-24)
- tyla: 2026 ledger anchored at 1,235,340,009 through kworb's 2026-09-24 (was 1,235,338,424 through 2026-09-24)
- edit: app/data/streamingTotals.ts: "11.06B" → "11.07B"
- edit: app/data/streamingTotals.ts: "11,060,226,630" → "11,070,534,585"

## 2026-09-30

- career total: offset 117,380,830 (ChartMasters through 2026-09-28 − kworb 2026-09-29); published 11,107,256,033 on kworb's 2026-09-29 page
- ChartMasters milestone: 1.4B Album Streams — Sep 25, 2026
- ChartMasters milestone: 11B Artist Streams — Sep 14, 2026
- burna-boy: 2026 ledger NOT re-anchored. The script anchored it at 1,907,703,359 through kworb's 2026-09-29 (was 1,900,611,867 through 2026-09-28, plus a 29 Sep daily of 6,883,734), but the board prints 28 Sep and a ledger cannot give a figure for a day before its checkpoint (tests/statsGuards "the board is never ahead of the ledgers" failed). The ledger was never wrong: kworb's returning titles moved its raw sum, not its dailies, and the two routes differ by 207,758. Reverted by hand; re-anchor the 2026 ledgers only on a read that carries all five artists.
- edit: app/data/streamingTotals.ts: "11.13B" → "11.11B"
- edit: app/data/streamingTotals.ts: "11,131,093,415" → "11,107,256,033"

## 2026-10-02 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser
- Captured: `reads/2026-10-02-cities.json` — 50 cities, 29 countries; Global Ranking #90; popularity 85; followers 18,016,193; monthly listeners 45,971,055 (trend −7,231,066)
- Feeds: app/data/listeners.ts (whole list replaced, LISTENERS_READ_ON 2026-10-02), applied with `node scripts/listeners-apply.mjs`.
- 9 of 50 cities up, 41 down; 23 rank moves. Top city Lagos 1,439,126.
- New in the top 50: Cape Town (#48) and Auckland (#50); out: Hanover and Athens. Their markers were placed by hand (Cape Town 18.42, −33.92; Auckland 174.76, −36.85) before the apply.

## 2026-10-02 — Playcounts Tool, read and NOT used

- Burna Boy (identity from the select value and the share link): through 28 Sep 11,107,256,033 (the 30 Sep anchor, unchanged); through 29 Sep 11,109,695,269; through 30 Sep 11,109,695,269 — the SAME figure two days running, +2,439,236 over two days, against kworb's +6,557,034 for the single day 29→30 Sep (raw 10,989,875,203 → 10,996,432,237). The 30 Sep table also printed "−100.0%" and "N/A" in its vs-7-days column.
- The 29 Sep ↔ kworb 30 Sep pair would move the offset 117,380,830 → 113,263,032 and publish ~4.1M low. ChartMasters' 29–30 Sep data reads as incomplete, so the offset was LEFT at 117,380,830 (the clean 28 ↔ 29 pair). Re-read once its days advance normally.
- Same session, through 30 Sep (not used, the ledgers move only together on a sound day): Wizkid 11,846,789,925; Tems 6,323,948,145; Asake 4,440,990,714 (identity from share links). Tyla read 4,792,419,068, about 60M BELOW her 23 Sep reading, with no share link to confirm identity — treated as unconfirmed.

## 2026-10-02

- career total: offset 130,411,466 (ChartMasters through 2026-09-30 − kworb 2026-10-02 (frozen page; no 2026-10-01 page)); published 11,117,228,942 on kworb's 2026-10-02 page — KWORB FROZEN: the offset pairs ChartMasters with a stale page and must be re-measured with a plain run once kworb's page moves
- burna-boy: 2026 ledger anchored at 1,917,676,268 through kworb's 2026-10-01 (was 1,914,229,262 through 2026-09-30)
- wizkid: 2026 ledger anchored at 1,896,035,465 through kworb's 2026-10-01 (was 1,891,325,566 through 2026-09-30)
- tems: 2026 ledger anchored at 1,888,314,691 through kworb's 2026-10-01 (was 1,882,859,106 through 2026-09-30)
- asake: 2026 ledger anchored at 1,542,793,546 through kworb's 2026-10-01 (was 1,537,315,823 through 2026-09-30)
- tyla: 2026 ledger anchored at 1,257,747,511 through kworb's 2026-10-01 (was 1,254,413,452 through 2026-09-30)
- edit: app/data/streamingTotals.ts: "11.11B" → "11.12B"
- edit: app/data/streamingTotals.ts: "11,113,813,067" → "11,117,228,942"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.883B" → 1.888B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-09-30 → 2026-10-01
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.891B" → 1.896B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.914B" → 1.918B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.537B" → 1.543B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.254B" → 1.258B"

## 2026-10-04

- career total: offset 137,764,950 (ChartMasters through 2026-10-01 − kworb 2026-10-02); published 11,124,582,426 on kworb's 2026-10-02 page
- burna-boy: 2026 ledger anchored at 1,925,029,752 through kworb's 2026-10-02 (was 1,921,714,611 through 2026-10-02)
- wizkid: 2026 ledger anchored at 1,902,152,248 through kworb's 2026-10-02 (was 1,901,932,293 through 2026-10-02)
- tems: 2026 ledger anchored at 1,893,898,597 through kworb's 2026-10-02 (was 1,891,114,953 through 2026-10-02)
- asake: 2026 ledger anchored at 1,548,705,999 through kworb's 2026-10-02 (was 1,545,739,315 through 2026-10-02)
- tyla: 2026 ledger anchored at 1,261,011,748 through kworb's 2026-10-02 (was 1,261,061,026 through 2026-10-02)
- edit: app/data/streamingTotals.ts: "11.12B" → "11.12B"
- edit: app/data/streamingTotals.ts: "11,117,228,942" → "11,124,582,426"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.891B" → 1.894B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.922B" → 1.925B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.546B" → 1.549B"

## 2026-10-04

- career total: offset 123,703,059 (ChartMasters through 2026-10-02 − kworb 2026-10-03); published 11,132,178,541 on kworb's 2026-10-03 page
- burna-boy: 2026 ledger anchored at 1,932,625,867 through kworb's 2026-10-03 (was 1,939,397,596 through 2026-10-03)
- wizkid: 2026 ledger anchored at 1,908,427,016 through kworb's 2026-10-03 (was 1,909,815,160 through 2026-10-03)
- tems: 2026 ledger anchored at 1,899,624,709 through kworb's 2026-10-03 (was 1,905,096,086 through 2026-10-03)
- asake: 2026 ledger anchored at 1,555,198,391 through kworb's 2026-10-03 (was 1,559,867,461 through 2026-10-03)
- tyla: 2026 ledger anchored at 1,264,342,179 through kworb's 2026-10-03 (was 1,264,331,348 through 2026-10-03)
- edit: app/data/streamingTotals.ts: "11.15B" → "11.13B"
- edit: app/data/streamingTotals.ts: "11,146,240,432" → "11,132,178,541"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.905B" → 1.900B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.910B" → 1.908B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.939B" → 1.933B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.560B" → 1.555B"

## 2026-10-08

- career total: offset 128,365,865 (ChartMasters through 2026-10-05 − kworb 2026-10-06); published 11,153,473,176 on kworb's 2026-10-06 page
- burna-boy: 2026 ledger anchored at 1,953,920,502 through kworb's 2026-10-06 (was 1,940,468,231 through 2026-10-04)
- wizkid: 2026 ledger anchored at 1,926,017,319 through kworb's 2026-10-06 (was 1,914,458,563 through 2026-10-04)
- tems: 2026 ledger anchored at 1,915,793,850 through kworb's 2026-10-06 (was 1,905,226,177 through 2026-10-04)
- asake: 2026 ledger anchored at 1,572,594,760 through kworb's 2026-10-06 (was 1,561,045,782 through 2026-10-04)
- tyla: 2026 ledger anchored at 1,274,515,534 through kworb's 2026-10-06 (was 1,267,523,885 through 2026-10-04)
- edit: app/data/streamingTotals.ts: "11.15B" → "11.15B"
- edit: app/data/streamingTotals.ts: "11,148,810,370" → "11,153,473,176"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.905B" → 1.916B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-10-04 → 2026-10-06
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.914B" → 1.926B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.940B" → 1.954B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.561B" → 1.573B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.268B" → 1.275B"
- read: ChartMasters' PUBLIC artist pages (chartmasters.org/artist/<slug>/), not the Playcounts Tool — the exact month-end series in each page's "Streams Over Time" chart (reads/2026-10-08-series.json); the newest point carries no printed day, dated 5 Oct by kworb's dailies and @theowensblock's 5 Oct graphic (a lead). Wizkid's page had moved on to 6 Oct (11,889,076,613), so his 5 Oct total (11,882,989,347) is the graphic's. Confirm all five on the Playcounts Tool at valid_as_of=20261005 before merge.
- closes: Asake 2,904,229,392 → 2,904,149,809 and Tyla 3,617,292,368 → 3,616,238,389 (ChartMasters' own December 2025 points); Wizkid and Tems confirmed to the unit; Burna Boy's corrected close kept.
- why: kworb skipped its 5 Oct page for Burna Boy, Tems and Asake and their totals fell across the gap, so the skipped-day fill refused and the board was held at kworb's 4 Oct; the anchor on kworb's 6 Oct moves every checkpoint past the hole.

## 2026-10-14

- career total: offset 131,342,829 (ChartMasters through 2026-10-12 − kworb 2026-10-13); published 11,203,035,730 on kworb's 2026-10-13 page
- burna-boy: 2026 ledger anchored at 2,003,483,056 through kworb's 2026-10-13 (was 1,996,343,307 through 2026-10-12)
- wizkid: 2026 ledger anchored at 1,968,321,034 through kworb's 2026-10-13 (was 1,961,318,916 through 2026-10-12)
- tems: 2026 ledger anchored at 1,952,839,893 through kworb's 2026-10-13 (was 1,947,409,574 through 2026-10-12)
- asake: 2026 ledger anchored at 1,611,950,117 through kworb's 2026-10-13 (was 1,605,224,127 through 2026-10-12)
- tyla: 2026 ledger anchored at 1,296,729,127 through kworb's 2026-10-13 (was 1,293,642,422 through 2026-10-12)
- edit: app/data/streamingTotals.ts: "11.20B" → "11.20B"
- edit: app/data/streamingTotals.ts: "11,200,058,766" → "11,203,035,730"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.947B" → 1.953B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-10-12 → 2026-10-13
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.961B" → 1.968B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 1.996B" → 2.003B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.605B" → 1.612B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.294B" → 1.297B"
- frozen: run with --kworb-frozen because kworb's Tems page was still stamped 2026/10/12 (the other four on 2026/10/13). Tems' ledger is anchored on 13 Oct with no kworb 13 Oct page for her; her anchor source says so, and her dailies resume from the first page stamped after 2026/10/13. Burna Boy's career pair and the other four ledgers are same-date day-N ↔ page-N+1 pairs, so their lines carry no frozen caveat.
- read: ChartMasters' PUBLIC artist pages, all five fetched 14 Oct 13:22 UTC, the "Streams Over Time" chart's October 2026 point; every earlier month-end point equals reads/2026-10-08-series.json to the unit. Dated 12 Oct by inference: 5 Oct read + kworb's dailies to 12 Oct leaves Burna +449,615, Wizkid +1,307,298, Tems +514,458 (one ordinary day for her missing page), Asake +1,354,894, Tyla +49,799; through 11 Oct or 13 Oct misses by most of a day for every artist. The 07:22/07:34 UTC reads had Wizkid and Asake one day behind; their steps since equal kworb's 12 Oct dailies to within 131,057 and 1,623. No Playcounts Tool confirmation was taken.
- why: Paul, 14 Oct, "use chartmasters for all 5 now". kworb's frozen Tems page held the board on 12 Oct (all five on their common day, or none); a Tems-only re-anchor that morning mixed two reads and was reverted. This read moves all five together.

## 2026-10-18

- career total: offset 152,487,385 (ChartMasters through 2026-10-16 − kworb 2026-10-17); published 11,231,093,436 on kworb's 2026-10-17 page
- burna-boy: 2026 ledger anchored at 2,031,540,762 through kworb's 2026-10-17 (was 2,010,260,369 through 2026-10-14)
- wizkid: 2026 ledger anchored at 1,992,754,642 through kworb's 2026-10-17 (was 1,974,030,006 through 2026-10-14)
- tems: 2026 ledger anchored at 1,973,615,055 through kworb's 2026-10-17 (was 1,957,913,974 through 2026-10-14)
- asake: 2026 ledger anchored at 1,634,202,134 through kworb's 2026-10-17 (was 1,617,274,987 through 2026-10-14)
- tyla: 2026 ledger anchored at 1,310,224,069 through kworb's 2026-10-17 (was 1,300,036,138 through 2026-10-14)
- edit: app/data/streamingTotals.ts: "11.20B" → "11.23B"
- edit: app/data/streamingTotals.ts: "11,203,870,430" → "11,231,093,436"
- edit: app/data/streamingTotals.ts: "2026-10-15" → "2026-10-18"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tems */ 1.958B" → 1.974B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asof */ 2026-10-14 → 2026-10-17
- edit: app/data/africasBiggest.ts: /* live:streams-2026-wizkid */ 1.974B" → 1.993B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-burna */ 2.010B" → 2.032B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-asake */ 1.617B" → 1.634B"
- edit: app/data/africasBiggest.ts: /* live:streams-2026-tyla */ 1.300B" → 1.310B"
- frozen: run with --kworb-frozen because kworb's Tems page was still stamped 2026/10/16 (the other four on 2026/10/17; kworb had skipped her 15 Oct page). Tems' ledger is anchored on 17 Oct with no kworb 17 Oct page for her; her anchor source says so, and her dailies resume from the first page stamped after 2026/10/17. Burna Boy's career pair and the other four ledgers are same-date day-N ↔ page-N+1 pairs, so their lines carry no frozen caveat.
- read: ChartMasters' PUBLIC artist pages, all five fetched 18 Oct 05:52:45–05:52:58 UTC, the "Streams Over Time" chart's October 2026 point; every earlier month-end point equals reads/2026-10-08-series.json to the unit. Dated 16 Oct by inference: the 14 Oct read (through 12 Oct) + kworb's dailies to 16 Oct leaves Burna +341,102, Wizkid +828,508, Tems +308,468 (one ordinary day for her missing 17 Oct page), Asake +117,319, Tyla +51,264; through 15 or 17 Oct misses by most of a day for every artist. kworb's 16 Oct dailies come from the bot's 17 Oct run logs (never committed). No Playcounts Tool confirmation was taken.
- offset: +21,144,556, more than the first alarm's 13,560,918: kworb's raw sum ran 5,942,613, 20,413,611 and 13,790,725 short of the day's daily on its 14, 15 and 16 Oct pages and 19,343,495 over it on its 17 Oct page (net 20,803,454), and ChartMasters ran 341,102 above kworb's dailies. Under the 25M guard; no --force.
- cross-check (not used): @WITTIEWIZ's "Friday, October 16, 2026" post, a hand read of Paul's screenshot (Burna 7.28M, Wizkid 6.28M, Asake 5.99M, Tems 5.24M, Tyla 3.39M), sits +94,065 / +230,893 / +88,634 / +10,417 above kworb's 17 Oct-page dailies (Tems +109,328 on her 16 Oct page), within 60,000 of each once ChartMasters' mean daily lead over kworb is added: ChartMasters' 16 Oct day.
- why: the bot's offset alarm (kworb's raw sum fell on its 15 and 16 Oct pages) and a board held at its 14 Oct checkpoint (kworb skipped Tems' 15 Oct page, the bot's runs since 16 Oct 21:12 UTC have not committed, and Burna Boy's 16 Oct page was never banked). Paul's rule of 14 Oct, "use chartmasters for all 5": all five together, on one read.
- stamps: the five ledgers' lastSeenValue, lastSeenAt and lastChanged set by hand to their new values and 2026-10-18, as a publish sets them (the script stamps only the career total). Their sources were read moving that morning (kworb pages past their committed stamps: Burna, Wizkid, Asake and Tyla 15 -> 17 Oct, Tems 14 -> 16 Oct), but the bot's runs since 16 Oct had not committed, so Tems' lastSeenAt sat on 15 Oct and tests/staleness.test.ts ("the real config is not already stale", run in ci.yml) flagged her on 18 Oct.
