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
export const DAI_DAI_VIDEO_VIEWS = "932M";

// Total Spotify streams for "Dai Dai" — same live pipeline as the video count.
export const DAI_DAI_SPOTIFY_STREAMS = "389M";

// ---------------------------------------------------------------------------
// The Spotify Global Daily Top Songs run.
//
// Days on chart is DERIVED here rather than typed into prose, because a typed
// one goes stale the day after it is written — and did. "98 days on the chart"
// shipped on 28 Aug 2026 carrying two errors at once: it was an elapsed-days
// count taken on 20 Aug, and elapsed days is the wrong quantity anyway, since
// the song spent one day off the chart. Neither error was visible to any test,
// because both lived inside a sentence.
//
// The count runs from the debut through CONFIRMED_THROUGH — the last daily
// chart actually seen — and NOT through today. That is the whole point: a
// figure derived from `new Date()` keeps counting through a drop-off nobody
// has checked for, which is the same failure in a new costume. Bump the date
// when you read a newer chart, and the number moves with it.
//
// charts.spotify.com is login-gated (its API answers 401 missing_token to an
// anonymous caller), so these three constants are the record of what has been
// established off-site, not something a scraper can refresh.
export const DAI_DAI_SPOTIFY_DEBUT = "2026-05-15"; // entered at No. 114, the day after release
export const DAI_DAI_SPOTIFY_CONFIRMED_THROUGH = "2026-08-27";
/** Days it has dropped off the chart and returned. One, as of the date above. */
export const DAI_DAI_SPOTIFY_DAYS_OFF = 1;

const daysInclusive = (from: string, to: string) =>
  Math.round(
    (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000
  ) + 1;

/** Days "Dai Dai" has appeared on Spotify's Global Daily Top Songs chart. */
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
