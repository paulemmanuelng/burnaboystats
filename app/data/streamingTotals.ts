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
// Auto-published daily again (7 Aug 2026): the spotify-total-streams metric
// now adds the featured-credits gap kworb misses (+107,613,681, measured
// against Paul's tracked total on 31 Jul 2026) as a pipeline offset before
// writing this string, so it tracks the source without undercounting. If a
// new featured credit changes the gap itself, re-measure the offset in
// scripts/watched-metrics.json.
export const spotifyTotalStreams = "10.68B";

// Every Burna Boy video on YouTube, across his channel and others'.
export const youtubeTotalViews = "3.17B";
