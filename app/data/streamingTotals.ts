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
// Auto-published daily: the spotify-total-streams metric adds the
// featured-credits gap kworb misses as a pipeline offset before writing this
// string, so it tracks the source without undercounting. The gap GROWS as
// featured songs accrue streams — +107,613,681 on 31 Jul 2026, re-measured to
// +129,703,877 on 11 Aug — so when the published figure falls behind the
// tracked total, re-measure the offset in scripts/watched-metrics.json rather
// than editing this string. A 22M drift on 10.6B is only 0.2%, well under the
// metric's 3% threshold, so the bot will never self-correct it.
export const spotifyTotalStreams = "10.89B";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "10,885,132,110";

// Every Burna Boy video on YouTube, across his channel and others'. He leads
// all Nigerian artists on this measure — 343 videos to 4.0 billion views, ahead
// of Wizkid (2.66B), Rema (2.60B) and Davido (2.47B). Tracked 24 Aug 2026.
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
/** When the figure above was last measured — it is not bot-refreshed. */
export const youtubeTotalViewsAsOf = "2026-08-24";
