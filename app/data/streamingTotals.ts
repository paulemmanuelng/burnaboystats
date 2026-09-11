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
// to kworb's raw sum before writing this string. Never hand-edit either string —
// the next bot run overwrites it. To move the figure, move the offset.
//
// RE-ANCHORED 10 Sep 2026 to ChartMasters, by Paul's decision, after their
// figure was independently restated by a premium subscriber. The offset is the
// SAME-DATE gap between the two trackers on the 9 Sep reading:
//
//     ChartMasters  10,956,307,905
//     kworb raw     10,844,002,099
//     offset           112,305,806
//
// Both sides are dated reads of the same day, which is what makes the
// subtraction meaningful; an earlier version of this note compared reads a day
// apart and the timing quietly flattered the result.
//
// WHAT IS EVIDENCED AND WHAT IS NOT. 80,606,612 of that was measured track by
// track: 42 credited recordings that exist on Spotify but are absent from
// kworb's 291-row roster, each read at open.spotify.com/track/<id> and joined by
// track id, every one on another artist's release or a various-artists
// compilation — which is exactly what the artist-page "appears on" shelf kworb
// reads drops. The remaining 31,699,194 is the amount by which ChartMasters'
// roster exceeds both kworb's and our own hunt. Its mechanism is named and
// plausible — catalogue completeness, counted further — but it has NOT been
// enumerated. Do not call the whole 112,305,806 measured.
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
// IT DECAYS, AND THAT IS THE MAINTENANCE JOB. kworb's cumulative has been rising
// about 10.81M/day against actual streaming near 7.6M/day, which is a tracker
// absorbing catalogue it previously missed, and every unit of that closes this
// gap. Left alone, this offset will drift the published figure ABOVE
// ChartMasters. Re-read ChartMasters and re-subtract against kworb's raw on the
// SAME date; never derive it by arithmetic on the published figure. The bot
// cannot catch the drift — 31M on 10.9B is 0.3%, far under its 3% threshold.
//
// Method and full evidence: docs/sourcing/CAREER-STREAMS-OFFSET.md.
export const spotifyTotalStreams = "10.96B";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "10,963,734,953";

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
