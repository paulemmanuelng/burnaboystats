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
export const spotifyTotalStreams = "10.83B";

// The same daily figure, unrounded.
//
// The compact string above is what the site shows nearly everywhere, and it is
// the right choice there — "10.78B" is what a reader takes in. But
// /analysis/spotify-unmerge argues from arithmetic a reader is invited to check,
// and rounding the one live input forced its derived figures to be rounded too.
// Both are written by the SAME metric on the same daily run, so they cannot
// disagree with each other.
export const spotifyTotalStreamsExact = "10,828,657,346";

// Every Burna Boy video on YouTube, across his channel and others'.
export const youtubeTotalViews = "3.19B";
