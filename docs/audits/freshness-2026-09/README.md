# Page-by-page freshness audit — September 2026

Started 16 Sep 2026 at Paul's request: check every page of the site is up to
date, one agent per page, then adversarially verify every non-note finding at
the body that publishes the figure before anything is changed.

| Batch | Pages | Findings (non-note) | Confirmed | Refuted | Landed |
|---|---|---|---|---|---|
| 1 | /, /dai-dai, /certifications, /records/{charts,awards,africas-biggest,firsts,tours,cars}, /updates | 52 | 50 | 2 | PR #269, 16 Sep |
| 2 | /music, /live-charts, /analysis, /compare, /records/by-the-numbers, /records/tours/{revenue,festivals}, /dai-dai/es, /about, /faq, /methodology, /press | 34 | 32 | 2 | PR #270, 17 Sep |
| 3 | /afrobeats + the 15 artist pages with their /charts and /live | 55 | 51 | 4 | PR #274, 17 Sep |
| 4 | song, album, car and compare-pair pages; /timeline, /records/visualized, /records/tours/map, /search, /share, /contact, /curator, /api, /analysis/spotify-unmerge | not yet run | | | |

Files: `audit-batch{N}-raw.json` is what the auditors reported (every finding,
notes included); `audit-batch{N}-verdicts.json` is the verifier's ruling on
each non-note finding with the evidence it read and the corrected fix;
`fixes-applied-*.json` (batches 1–2, and batch 3) is the ledger of what actually changed on the site,
written for the report to Paul.

Rules the audit runs under: a figure is read at the body that publishes it; a
tier downgrade needs the register's own row quoted; a live chart run's peak is
published only with the "peak still open" note; both layouts carry the same
figures; a typed figure with a source of truth in app/data is derived, not
retyped.
