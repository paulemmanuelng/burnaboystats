// Career-wide streaming totals — the sum of every song and every video.
//
// These were tracked by the stats bot for weeks before they were shown
// anywhere, which made them the one automated figure the site collected but
// never published. Both live here as their own home so the hourly bot can
// rewrite exactly one string per figure and have it update everywhere.
//
// The Spotify total is written by the stats bot (scripts/apply-stat-updates.mjs,
// the spotify-total-streams metric: kworb's raw sum plus a measured offset); the
// YouTube total is hand-maintained (see below — the bot was taken off it on
// 27 Aug 2026). Displayed to two decimals of a billion ("11.09B") and one
// ("4.0B") respectively — these move by millions a day, so more precision would
// be noise; the one page that argues from the arithmetic reads the unrounded
// Spotify figure below.

// Every Burna Boy song on Spotify, lead and featured credits combined.
//
// Auto-published daily: the spotify-total-streams metric adds a pipeline offset
// to kworb's raw sum before writing this string. Never hand-edit either string —
// the next bot run overwrites it. To move the figure, move the offset.
//
// CURRENT ANCHOR — 8 Oct 2026, a plain run on ChartMasters' PUBLIC artist
// page (chartmasters.org/artist/burna-boy/, allowed by its robots.txt, read
// with no login). Its "Streams Over Time" chart prints every month-end running
// total exactly, and its newest point is the total to date:
//
//     ChartMasters through 5 Oct    11,153,473,176
//     kworb raw, page 2026/10/06    11,025,107,311
//     offset                           128,365,865
//
// The page prints no day for its newest point. 5 Oct is inferred: the
// Playcounts Tool's 2 Oct total plus kworb's dailies leaves one ordinary day
// (6,668,941) for the 4 Oct kworb skipped, and @theowensblock's graphic
// labelled 5 Oct prints the same total to the unit. Why now: across its 4 and
// 6 Oct builds kworb's raw sum rose 16,631,829 against ChartMasters'
// 21,294,635 for the same three days (catalogue leaving its roster), so the
// 4 Oct offset published 11,148,810,370, 4,662,806 low. The series is the
// Tool's Total: every "September 2026" point equals the Tool's 30 Sep read to
// the unit. docs/sourcing/chartmasters/reads/2026-10-08.json (and
// 2026-10-08-series.json beside it). CAREER_STREAMS_ANCHOR_READ_ON below
// carries the date.
//
// The 4 Oct anchor (second read that day), a plain run on a DIRECT read of
// ChartMasters' Playcounts Tool (Paul's account, the site's own browser; Paul
// opened each page, since chartmasters.org's robots.txt bars the tool's ?-URLs
// for automated visitors): ChartMasters through 2 Oct 11,132,178,541 against
// kworb's 3 Oct page (raw 11,008,475,482), offset 123,703,059.
//
// ChartMasters' day N pairs with kworb's page stamped N+1 (kworb stamps a page
// with the day it was built). Why that second read: kworb had skipped its 1 Oct
// page, so its 3 Oct build's daily column carried TWO days (1 + 2 Oct) for
// Burna, Tems and Asake — Burna's read 14,367,844 against ChartMasters'
// 7,596,115 for 2 Oct — and the ledgers added both on top of the first 4 Oct
// anchor, which already held 1 Oct: Burna's 2026 total ran 6,771,729 high. The
// same build's raw sum rose 21,658,006 (a title came back), which is the offset's
// -14,061,891 move. ChartMasters' 2 Oct day is complete on every page (each
// 1 → 2 Oct step equals the Total row's daily column), and Burna, Wizkid and
// Tems match @theowensblock's 2 Oct table to the unit.
// docs/sourcing/chartmasters/reads/2026-10-04b.json.
//
// The first 4 Oct read: ChartMasters through 1 Oct 11,124,582,426 against
// kworb's 2 Oct page (raw 10,986,817,476), offset 137,764,950.
// docs/sourcing/chartmasters/reads/2026-10-04.json.
//
// The previous anchor, 2 Oct 2026, published with --kworb-frozen:
// ChartMasters through 30 Sep 11,117,228,942 against kworb's 2 Oct page as
// served (raw 10,986,817,476, not a same-date pair), offset 130,411,466.
// ChartMasters' 29 Sep day was left out (it gained only 2,439,236 against the
// ~7M a day around it). docs/sourcing/chartmasters/reads/2026-10-02.json.
//
// Before that, 30 Sep 2026: ChartMasters through 28 Sep 11,107,256,033
// against kworb's 29 Sep page 10,989,875,203, offset 117,380,830 — kworb's raw
// sum had ROSE 27,953,016 in its 29 Sep build (dropped titles came back).
//
// How the offset got here, oldest first — each a day-N ↔ page-N+1 pair unless
// marked:
//
//     10 Sep  112,305,806  through 8 Sep ↔ page 09/09
//     17 Sep  115,177,863  through 15 Sep ↔ page 09/16, eight pairs deep (8–15 Sep),
//                          stable to within half a million except a +2.6M step on
//                          kworb's 09/15 page, whose cumulative moved only
//                          4,694,787 against its own Daily of 7,319,821: a roster
//                          removal on kworb's side that ChartMasters did not make
//     22 Sep  168,789,190  --kworb-frozen, NOT a measured gap: ChartMasters through
//                          20 Sep (11,048,637,922, published directly on Paul's
//                          instruction) against kworb's stale 18 Sep build
//     23 Sep  114,858,823  through 21 Sep ↔ page 09/22, kworb moving again
//     25 Sep  141,218,212  through 23 Sep ↔ page 09/24, a title left kworb's list
//     30 Sep  117,380,830  through 28 Sep ↔ page 09/29 (above)
//      2 Oct  130,411,466  --kworb-frozen on ChartMasters through 30 Sep (above)
//      4 Oct  137,764,950  through 1 Oct ↔ page 10/02, a title left kworb's list
//      4 Oct  123,703,059  through 2 Oct ↔ page 10/03, the title came back (above)
//      8 Oct  128,365,865  through 5 Oct ↔ page 10/06, ChartMasters' public page;
//                          kworb skipped 5 Oct and lost catalogue (above)
//
// Full table in scripts/watched-metrics.json; the method, and the evidence for
// the reads up to 17 Sep, in docs/sourcing/CAREER-STREAMS-OFFSET.md.
//
// WHAT IS EVIDENCED AND WHAT IS NOT. Of the 10 Sep offset (112,305,806),
// 80,606,612 was measured track by track: 42 credited recordings that exist on
// Spotify but are absent from kworb's 291-row roster, each read at
// open.spotify.com/track/<id> and joined by track id, every one on another
// artist's release or a various-artists compilation — which is exactly what the
// artist-page "appears on" shelf kworb reads drops. The remaining 31,699,194 was
// the amount by which ChartMasters' roster exceeded both kworb's and our own
// hunt. Its mechanism is named and plausible — catalogue completeness, counted
// further — but it has NOT been enumerated, and nor have the later moves, which
// follow kworb's roster (the 09/15 step, the title that left the 09/24 build).
// Do not call the whole offset measured.
//
// Neither figure is ground truth. Spotify publishes no career total anywhere —
// not on the artist page, not in the Web API — so both trackers are estimates
// and both are floors: any credited track a tracker has not found contributes
// zero.
//
// TWO CLAIMS AN EARLIER NOTE MADE THAT ARE FALSE AT THE BODY, kept here so they
// are not reinstated: kworb does not "undercount featured credits" — its total
// already contains 4,640,678,029 of them, 43% of the figure — and the gap does
// not grow.
//
// IT DOES NOT DECAY — IT MOVES WHEN KWORB'S ROSTER MOVES, in either direction,
// and only a same-date re-read of ChartMasters catches it (the bot's rawJumpAlert
// flags a kworb jump, not a quiet drift). The earlier note here said the gap
// closes as kworb absorbs catalogue; eight dated pairs say otherwise. Re-read
// chartmasters.org/spotify-streaming-numbers-tool (the account is set to Burna
// Boy; the date picker serves the last 15 days) monthly or on any raw jump,
// and move offset and baseline together; never derive the offset from the
// published figure.
//
// Method and full evidence: docs/sourcing/CAREER-STREAMS-OFFSET.md.
export const spotifyTotalStreams = "11.17B";

/**
 * The day ChartMasters (its Playcounts Tool, or its public artist page) was last read to anchor the offset —
 * the newest docs/sourcing/chartmasters/reads/<date>.json. 23 Sep 2026: kworb's
 * page moved after five frozen days, and a ChartMasters-21 ↔ kworb-22 pair
 * re-measured the offset at 114,858,823 (the 22 Sep --kworb-frozen note above
 * is superseded). 25 Sep 2026: kworb's raw sum fell 16,051,434 (a title left its
 * list), and a ChartMasters-23 ↔ kworb-24 pair re-measured it at 141,218,212.
 * 30 Sep 2026: kworb's raw sum rose 27,953,016 (dropped titles came back), and a
 * ChartMasters-28 ↔ kworb-29 pair re-measured it at 117,380,830. 2 Oct 2026:
 * kworb skipped its 1 Oct page and its 2 Oct page lost a title, so ChartMasters
 * through 30 Sep was published directly (--kworb-frozen), offset 130,411,466.
 * 4 Oct 2026: the ChartMasters-1 Oct ↔ kworb-2 Oct pair it was waiting for
 * re-measured it at 137,764,950 (plain run); a second read the same day, on the
 * ChartMasters-2 Oct ↔ kworb-3 Oct pair, re-measured it at 123,703,059 after
 * kworb's 3 Oct build carried two days and a returning title. 8 Oct 2026: read
 * on ChartMasters' public artist page instead (the same series, printed exactly
 * in its "Streams Over Time" chart), the ChartMasters-5 Oct ↔ kworb-6 Oct pair
 * re-measured it at 128,365,865 after kworb skipped 5 Oct and lost catalogue.
 * /methodology prints this date; it still said "17 September"
 * after four newer reads. Move it with every anchor read, and
 * tests/siteDebugWording.test.ts holds it to the newest read on file.
 */
export const CAREER_STREAMS_ANCHOR_READ_ON = "2026-10-08";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "11,173,897,232";

// Every video on Burna Boy's own YouTube channel — the total its about page
// prints for that channel alone, not his videos on other artists' channels.
// He leads all Nigerian artists on this measure — 346 videos to 4.04 billion views,
// ahead of Wizkid (2.66B), Rema (2.60B) and Davido (2.47B).
//
// Measured 14 Sep 2026 at youtube.com/@BurnaBoy/about, which reported
// 4,043,634,651 views across 346 videos and 7.31m subscribers. Displayed to a
// tenth of a billion, so the string does not move — but the measurement date does,
// and the gap to the next Nigerian act is what makes the 4-billion first below
// arithmetic rather than a press claim.
//
// Re-read 2 Oct 2026 at the same about page: 7.39M subscribers (the header
// rounds it to "7.4M"), but the SAME 4,043,634,651 views and the same 346
// videos as 14 Sep. The about page's view total did not move in 18 days, while
// his videos gained views every day of them (the per-video counts the stats bot
// reads kept climbing), so that total is evidently not refreshed daily by
// YouTube. The 2 Oct read therefore adds no new count, and
// `youtubeTotalViewsAsOf` stays on 14 Sep, the last day the page printed a
// total that had moved. Re-read it in a few weeks; if it is still frozen,
// the date printed on /records/by-the-numbers is the honest one.
//
// HAND-MAINTAINED, deliberately. The stats bot used to write this field from
// kworb, and was taken off it on 27 Aug 2026 because kworb cannot measure it:
// its page lists 187 videos totalling 3,187,566,461 against the 343 videos and
// 4.0B counted here. Two populations, not two opinions about one number, and no
// wider kworb view exists. Had it stayed wired up, the bot would have published
// 3.2B over this the moment kworb's total passed its baseline — quietly swapping
// the channel's own total for a partial one.
//
// So do NOT "correct" this down to kworb's number, and do not re-point a metric
// at it without a source that counts every video on the channel. kworb is still watched for
// its own sake (watched-metrics.json → youtube-total-views, watch-only), so its
// movement still gets reported; it just no longer writes here.
export const youtubeTotalViews = "4.0B";
/**
 * When the figure above was last measured — it is not bot-refreshed.
 *
 * Published, not merely recorded. This constant existed for weeks with NOTHING
 * importing it while `youtubeTotalViews` rendered undated on
 * /records/by-the-numbers: the one headline figure on the site that cannot
 * refresh itself was the one a reader had no way to date, and the stamp built to
 * date it was dead code. /records/by-the-numbers prints it in that stat's
 * subtitle ("counted by hand on 3 September 2026"), and
 * tests/publishedFigureStamps.test.tsx fails if that stops being true — because a
 * stamp nothing renders is indistinguishable from no stamp at all.
 *
 * Bump it whenever you re-count the figure above, EVEN IF the rounded string
 * does not move. 4.0B covers 3.95B–4.05B, roughly a hundred million views and
 * about two months of his growth, so the display staying still is the normal
 * case and says nothing about freshness. The date is the only part that can.
 */
export const youtubeTotalViewsAsOf = "2026-09-14";
