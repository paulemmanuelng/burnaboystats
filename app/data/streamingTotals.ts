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
// CURRENT ANCHOR — 25 Sep 2026, a DIRECT read of ChartMasters' Playcounts Tool
// (Paul's premium account, read in the site's own browser). ChartMasters'
// "streams updated through" day N pairs with kworb's page stamped N+1 — kworb
// stamps a page with the day it was built:
//
//     ChartMasters through 23 Sep   11,070,534,585
//     kworb raw, page 2026/09/24    10,929,316,373
//     offset                           141,218,212
//
// Why then: kworb's raw sum FELL 16,051,434 in its 24 Sep build (a title left
// its Burna Boy list while its own Daily read +7.38M), and the bot's drift alarm
// asked for a re-measure. docs/sourcing/chartmasters/reads/2026-09-25.json.
// CAREER_STREAMS_ANCHOR_READ_ON below carries the date.
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
//     25 Sep  141,218,212  through 23 Sep ↔ page 09/24 (above)
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
export const spotifyTotalStreams = "11.10B";

/**
 * The day ChartMasters' Playcounts Tool was last read to anchor the offset —
 * the newest docs/sourcing/chartmasters/reads/<date>.json. 23 Sep 2026: kworb's
 * page moved after five frozen days, and a ChartMasters-21 ↔ kworb-22 pair
 * re-measured the offset at 114,858,823 (the 22 Sep --kworb-frozen note above
 * is superseded). 25 Sep 2026: kworb's raw sum fell 16,051,434 (a title left its
 * list), and a ChartMasters-23 ↔ kworb-24 pair re-measured it at 141,218,212.
 * /methodology prints this date; it still said "17 September"
 * after four newer reads. Move it with every anchor read, and
 * tests/siteDebugWording.test.ts holds it to the newest read on file.
 */
export const CAREER_STREAMS_ANCHOR_READ_ON = "2026-09-25";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "11,096,123,866";

// Every video on Burna Boy's own YouTube channel — the total its about page
// prints for that channel alone, not his videos on other artists' channels.
// He leads all Nigerian artists on this measure — 346 videos to 4.04 billion views,
// ahead of Wizkid (2.66B), Rema (2.60B) and Davido (2.47B).
//
// Re-measured 14 Sep 2026 at youtube.com/@BurnaBoy/about, which reported
// 4,043,634,651 views across 346 videos and 7.31m subscribers. Displayed to a
// tenth of a billion, so the string does not move — but the measurement date does,
// and the gap to the next Nigerian act is what makes the 4-billion first below
// arithmetic rather than a press claim.
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
