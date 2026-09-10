// Career-wide streaming totals — the sum of every song and every video.
//
// These were tracked by the stats bot for weeks before they were shown
// anywhere, which made them the one automated figure the site collected but
// never published. Both live here as their own home so the hourly bot can
// rewrite exactly one string per figure and have it update everywhere.
//
// Auto-updated hourly by scripts/apply-stat-updates.mjs (the
// spotify-total-streams and youtube-total-views metrics), read from kworb's
// artist totals. Displayed in whole billions — these move by millions a day,
// so more precision would be noise.

// Every Burna Boy song on Spotify, lead and featured credits combined.
//
// Auto-published daily: the spotify-total-streams metric adds a pipeline offset
// to kworb's raw sum before writing this string. On 10 Sep 2026 that offset was
// MEASURED for the first time and fell from 146,757,255 to 80,606,612.
//
// What the offset is: the streams on 42 credited recordings that exist on
// Spotify but are absent from kworb's 291-row roster — every one of them on
// another artist's release or a various-artists compilation, which is what the
// artist-page "appears on" shelf that kworb reads simply drops. Each was read at
// open.spotify.com/track/<id> and joined to kworb by track id.
//
// What it is NOT, because the previous note here asserted both and both are
// false at the body: kworb does not "undercount featured credits" — its total
// already contains 4,640,678,029 of them, 43% of the figure — and the gap does
// not GROW, it shrinks as kworb absorbs catalogue it had been missing.
//
// A second, real mechanism was measured and deliberately left out: kworb's
// featured rows trail Spotify's own counters by 1,702,137 across all 101 rows,
// which is under nine hours of featured streaming. That is freshness between two
// samples, not missing data, and baking it in would permanently re-add streams
// kworb reports by tomorrow.
//
// Re-measure by re-running the catalogue hunt, never by arithmetic on the
// published figure. Method and evidence: docs/sourcing/CAREER-STREAMS-OFFSET.md.
// Note the bot cannot self-correct this: 57M on 10.9B is 0.5%, under the
// metric's 3% threshold.
export const spotifyTotalStreams = "10.92B";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "10,924,608,711";

// Every Burna Boy video on YouTube, across his channel and others'. He leads
// all Nigerian artists on this measure — 344 videos to 4.03 billion views,
// ahead of Wizkid (2.66B), Rema (2.60B) and Davido (2.47B).
//
// Re-measured 3 Sep 2026 at youtube.com/@BurnaBoy/about, which reported
// 4,029,086,804 views across 344 videos and 7.22m subscribers. Displayed in
// whole billions, so the string does not move — but the measurement date does,
// and the gap to the next Nigerian act is what makes the 4-billion first below
// arithmetic rather than a press claim.
//
// HAND-MAINTAINED, deliberately. The stats bot used to write this field from
// kworb, and was taken off it on 27 Aug 2026 because kworb cannot measure it:
// its page lists 187 videos totalling 3,187,566,461 against the 343 videos and
// 4.0B counted here. Two populations, not two opinions about one number, and no
// wider kworb view exists. Had it stayed wired up, the bot would have published
// 3.2B over this the moment kworb's total passed its baseline — quietly swapping
// an all-channel figure for a partial one.
//
// So do NOT "correct" this down to kworb's number, and do not re-point a metric
// at it without a source that counts every channel. kworb is still watched for
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
export const youtubeTotalViewsAsOf = "2026-09-03";
