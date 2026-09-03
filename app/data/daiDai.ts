// "Dai Dai"'s two live figures, in one place.
//
// These used to be declared inside app/dai-dai/page.tsx, which was fine while
// exactly one page showed them. The Spanish edition at /dai-dai/es shows the
// same numbers, and the stats bot rewrites these strings hourly — a second
// copy in another file would simply be missed by the bot and start lying
// within a day. One home, two readers, no drift.
//
// Both are bot-written (scripts/watched-metrics.json targets THIS file now):
// dai-dai-video-views and spotify-streams-dai-dai.

// Views of the official "Dai Dai" video (youtube.com/watch?v=fcnDmrtj6Sk),
// shown in whole millions — rewritten only when the figure ticks over another
// million, so the page changes exactly when the number does.
export const DAI_DAI_VIDEO_VIEWS = "976M";

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
export const DAI_DAI_SPOTIFY_STREAMS = "409M";

// ---------------------------------------------------------------------------
// The Spotify Global Daily Top Songs run.
//
// TWO figures, and they are NOT interchangeable — conflating them is what went
// wrong here on 29 Aug 2026. The site has always published the STREAK, and the
// earlier feed entries say so in as many words ("69 straight days on the
// chart"). A "correction" that quietly swapped in the TOTAL then rewrote a
// dated log entry that had been right. See RETRACTIONS.md #5.
//
// The streak's start is not a guess. The updates feed carries six readings that
// each name their own chart date — 10 Aug 82, 11 Aug 83, 14 Aug 86, 15 Aug 87,
// 18 Aug 90, 21 Aug 93 — and all six imply the same day one, 21 May 2026.
//
// The debut was 15 May, at No. 114. The song was therefore on the chart for
// part of 15–20 May, off it for exactly one day (Paul, from live tracking), and
// unbroken from 21 May. That reconciles every figure: 5 days before the streak
// plus the streak equals the total, and the total equals elapsed minus one.
//
// Both count to CONFIRMED_THROUGH — the last chart actually seen — not to
// today. charts.spotify.com is login-gated (its API answers 401 missing_token
// to an anonymous caller), so these constants are the record of what has been
// established off-site, not something a scraper can refresh.
export const DAI_DAI_SPOTIFY_DEBUT = "2026-05-15"; // entered at No. 114, the day after release
/**
 * Spotify's OWN "Streak" column, read off the Daily Top Songs Global chart for
 * 28 Aug 2026: Dai Dai — Peak 1, Prev 6, **Streak 99**, 3,350,583 streams.
 *
 * This is the anchor now, and it replaces one derived from the updates feed's
 * prose. Those six dated readings are internally consistent but sit exactly one
 * day AHEAD of Spotify's column at every point (they say 82 for 10 Aug where
 * the column reads 81), so they implied a 21 May start where the body says
 * 22 May. Same published figure, sounder basis: the body governs over our own
 * transcription of it.
 */
export const DAI_DAI_SPOTIFY_BODY_READ = { date: "2026-08-28", streak: 99 } as const;
export const DAI_DAI_SPOTIFY_STREAK_SINCE = "2026-05-22"; // from the body read above
export const DAI_DAI_SPOTIFY_CONFIRMED_THROUGH = "2026-08-28";
/** Days it has dropped off the chart, ever. One, on a day in 15–20 May. */
export const DAI_DAI_SPOTIFY_DAYS_OFF = 1;

const daysInclusive = (from: string, to: string) =>
  Math.round(
    (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000
  ) + 1;

/** CONSECUTIVE days on the chart — the figure the site publishes. */
export const daiDaiSpotifyStraightDays = daysInclusive(
  DAI_DAI_SPOTIFY_STREAK_SINCE,
  DAI_DAI_SPOTIFY_CONFIRMED_THROUGH
);

/** TOTAL days on the chart, streak plus the days before it. A different
 *  number from the one above; never substitute one for the other. */
export const daiDaiSpotifyDaysOnChart =
  daysInclusive(DAI_DAI_SPOTIFY_DEBUT, DAI_DAI_SPOTIFY_CONFIRMED_THROUGH) -
  DAI_DAI_SPOTIFY_DAYS_OFF;

// ---------------------------------------------------------------------------
// The YouTube Global Daily Top Music Videos run, on the same footing and for
// the same reason.
//
// "48 days" sat on both editions for a month. It was last true on 26 July
// 2026, and the updates feed then RE-STATED it on 13 August, when the run was
// on day 66 — so this was not a figure that quietly went unmaintained, it was
// a figure that got copied forward as if freshly counted. streakParity.test.ts
// stayed green throughout, because it holds the card and the feed to EACH
// OTHER; two copies of a wrong number agree perfectly.
//
// The run was then walked day by day at charts.youtube.com — all 97 days from
// the 23 May debut to the 27 Aug chart, twice and from both directions, with
// the chart's own "days on chart" counter (18 on 9 Jun, 97 on 27 Aug) proving
// no chart day is missing from the middle. Rows were matched on video id
// fcnDmrtj6Sk, not on title: from 8 Aug a second row, "Dai dai (Live)" by
// Shakira & Beéle (mapfegnAXOg), sits on the same chart.
export const DAI_DAI_YT_NO1_SINCE = "2026-06-09"; // first day of the current unbroken run
export const DAI_DAI_YT_CONFIRMED_THROUGH = "2026-08-27"; // latest published daily chart

/** Consecutive days at No. 1 on YouTube's global daily music-video chart. */
export const daiDaiYouTubeDaysAtNo1 = daysInclusive(
  DAI_DAI_YT_NO1_SINCE,
  DAI_DAI_YT_CONFIRMED_THROUGH
);

// Deliberately NOT published: the video has also spent 93 days at No. 1 in
// total (only 28-29 May, 2 June and 8 June were ever missed). That is a
// different metric from the run the card describes, and swapping one number
// for the other inside a sentence that says "as the most-viewed music video
// on YouTube worldwide" is exactly the conflation this repo keeps paying for.
