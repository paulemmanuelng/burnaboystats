# ChartMasters reads

One block per run of scripts/chartmasters-anchor.mjs — what was read, what was paired, what moved.

## 2026-09-17

- career total: offset 115,177,863 (ChartMasters through 2026-09-15 − kworb 2026-09-16); published 11,010,480,657 on kworb's 2026-09-16 page
- ChartMasters milestone: 11B Artist Streams — Sep 14, 2026
- ChartMasters milestone: 7.0B Artist Streams — Sep 11, 2026
- ChartMasters milestone: 800M Artist YouTube Views — Sep 6, 2026
- ChartMasters milestone: 4.0B Artist YouTube Views — Sep 2, 2026
- burna-boy: 2026 ledger anchored at 1,810,927,983 through kworb's 2026-09-16 (was 1,810,927,983 through 2026-09-16)
- wizkid: 2026 ledger anchored at 1,808,204,727 through kworb's 2026-09-16 (was 1,808,204,727 through 2026-09-16)
- tems: 2026 ledger anchored at 1,807,644,361 through kworb's 2026-09-16 (was 1,807,644,361 through 2026-09-16)
- edit: app/data/streamingTotals.ts: "11.01B" → "11.01B"
- edit: app/data/streamingTotals.ts: "11,010,480,657" → "11,010,480,657"

## 2026-09-17 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser
- Captured: `reads/2026-09-17-cities.json` — 50 cities with monthly listeners, 29 countries; Global Ranking #75; popularity 86; followers 17,810,103; monthly listeners 49,058,318 (trend −9,627,572)
- Feeds: app/data/listeners.ts → /music/listeners ("Where the world listens"); tests/listeners.test.ts checks the file against this capture row for row
- Re-read monthly and replace the whole list at once (the page prints the read date beside every figure)

## 2026-09-20 — Artist Global Impact (cities), read by hand

- Source: chartmasters.org/artists-global-performance/?artist_id=3wcj11K77LjEY1PkEazffa, signed in, in the site's own browser (same session as the Playcounts read above)
- Captured: `reads/2026-09-20-cities.json` — the same 50 cities as 17 Sep, re-ranked; 29 countries; Global Ranking #78; popularity 85; followers 17,856,540; monthly listeners 48,227,381 (trend −9,300,495)
- Feeds: app/data/listeners.ts (whole list replaced, LISTENERS_READ_ON 2026-09-20). Followers on the Africa's Biggest board NOT moved: that board is read whole, all five artists on one day, and only Burna Boy was read today.

