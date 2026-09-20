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
