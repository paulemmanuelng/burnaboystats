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
