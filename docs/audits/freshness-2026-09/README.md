# Page-by-page freshness audit — September 2026

Started 16 Sep 2026 at Paul's request: check every page of the site is up to
date, one agent per page, then adversarially verify every non-note finding at
the body that publishes the figure before anything is changed.

| Batch | Pages | Findings (non-note) | Confirmed | Refuted | Landed |
|---|---|---|---|---|---|
| 1 | /, /dai-dai, /certifications, /records/{charts,awards,africas-biggest,firsts,tours,cars}, /updates | 52 | 50 | 2 | PR #269, 16 Sep |
| 2 | /music, /live-charts, /analysis, /compare, /records/by-the-numbers, /records/tours/{revenue,festivals}, /dai-dai/es, /about, /faq, /methodology, /press | 34 | 32 | 2 | PR #270, 17 Sep |
| 3 | /afrobeats + the 15 artist pages with their /charts and /live | 55 | 51 | 4 | PR #274, 17 Sep |
| 4a | the 14 song pages under /music/<slug> | 59 (17 non-note) | 29 | 14 | PR #283, 17 Sep — verified one page at a time for four pages, then the remaining ten together (Paul's call); Ye NG Silver→Gold and Last Last ZA Platinum removal VETOED by Paul, everything else applied |
| 4b | 8 album pages + 15 car pages | 139 (26 non-note) | 104 | 31 (5 unverifiable) | PR #286, 18 Sep — find pass 7 parallel + 12 sequential + 4 parallel (Paul paced, then full speed); verify 19 + 4 in parallel |
| 4c | /timeline, /records/visualized, /records/tours/map, /records, /search, /share, /contact, /curator, /api, /analysis/spotify-unmerge, 3 compare pairs | 79 (18 non-note) | 70 | 8 (1 unverifiable) | PR #285, 17 Sep — find pass 6 parallel + 7 sequential (Paul pacing credits), verify 13 in parallel after the 22:10 reset |

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

## The four open decisions — settled 17 Sep 2026

Paul asked for the best decision on each; these are they, and why.

1. **Live boards are not hourly — the wording stands.** The only GitHub-native
   way to make the half-hourly cron fire is a self-dispatching job that sleeps
   on a runner around the clock, which burns ~22 runner-hours a day and uses
   Actions as a timer against its usage terms. Not done. The pages say
   "refreshed several times a day" and stamp the snapshot to the minute, which
   is true. If hourly is wanted, an external trigger on `workflow_dispatch`
   (a fine-grained token, Actions: write, at a scheduler such as cron-job.org)
   is five minutes of Paul's time and no code change.
2. **The Afrobeats Board's cadence is printed, not promised.** Every "reviewed
   weekly" became "last re-read at every register on <date>", derived from the
   artists' own `verifiedOn`, in batch 3 — so the copy cannot rot the way
   "hourly" did. No alarm: a red build for a missed sweep would block unrelated
   work; the printed date is the honest signal.
3. **The Headies "Music Video of the Year" row is dropped.** The body presents
   that award to the video's director and its card names DK; the site keeps
   producer credits out of every count for the same reason. Four 2026 Headies
   nominations stand; 241 nominations site-wide. Feed entry logged.
4. **Track counts stay at the standard edition**, so every album is counted
   the same way (the rule was already stated in albums.ts). Where the linked
   Spotify release differs — L.I.F.E's 19-track deluxe, On a Spaceship's "Soke"
   bonus track — an `editionNote` now says so beside the count on both layouts
   and in the tracklist dialog, instead of changing the count.
