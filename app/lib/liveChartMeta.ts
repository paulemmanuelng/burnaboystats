/**
 * How often each platform's chart actually refreshes.
 *
 * YouTube's is a weekly chart and supplies most of the No. 1s on the live page,
 * so the cadence is shown next to the numbers rather than only in a footnote —
 * a No. 1 held for a week and one held for a day are not the same claim.
 *
 * Shared so the desktop page and the mobile screen can never state it
 * differently.
 */
// "Spotify Albums" is Spotify's Weekly Top Albums chart — a weekly chart,
// unlike the daily songs chart the "Spotify" rows come from; the extractor in
// scripts/stats-lib.mjs publishes it under this name (SPOTIFY_ALBUMS) for
// exactly that reason.
const CADENCE: Record<string, string> = { YouTube: "weekly", "Spotify Albums": "weekly" };

export const cadenceOf = (platform: string) => CADENCE[platform] ?? "daily";

/**
 * How often the live boards are ACTUALLY rebuilt, stated once. The job runs
 * on four fixed slots a day (.github/workflows/stats-live.yml, 00:17, 06:17,
 * 12:17 and 18:17 UTC, since 23 Sep 2026 — each run is a deploy, and each
 * deploy starts the page cache cold). Before that it was scheduled every half
 * hour, but GitHub runs `schedule` events on a best-effort basis, and this
 * repo's fired every two to six hours — four to ten runs a day across the
 * 12–16 Sep 2026 run history. The site said "hourly" in forty places until 16 Sep; it
 * says this instead, from one home, so the day the cadence is made real (an
 * external dispatcher on the workflow_dispatch trigger) is a one-line change.
 * tests/liveClaims.test.ts refuses "hourly" anywhere in rendered text.
 */
export const LIVE_CADENCE_ADVERB = "several times a day";
export const LIVE_CADENCE = `refreshed ${LIVE_CADENCE_ADVERB}`;
export const LIVE_CADENCE_REBUILT = `rebuilt ${LIVE_CADENCE_ADVERB}`;
export const LIVE_CADENCE_LABEL = `Refreshed ${LIVE_CADENCE_ADVERB}`;

/** Total placements for a release, across every platform it charts on. */
export const reachOf = (r: { platforms: { entries: unknown[] }[] }) =>
  r.platforms.reduce((n, p) => n + p.entries.length, 0);

/** No. 1s for a release. `numberOnes` is a subset of `entries`, never additive. */
export const numberOnesOf = (r: { platforms: { numberOnes: number }[] }) =>
  r.platforms.reduce((n, p) => n + p.numberOnes, 0);

/**
 * How many COUNTRIES a set of live placements covers.
 *
 * kworb's codes are not clean ISO: it labels Britain "UK" on the Apple Music,
 * Shazam, iTunes, Deezer and YouTube charts but "GB" on Spotify's, and it emits
 * "WW" for its worldwide chart, which is not a country at all. Counting the raw
 * codes therefore claimed the UK twice and the world as a nation — Burna Boy's
 * page said 164 countries where the data holds 162.
 *
 * app/lib/flagFor.ts already knew both facts for rendering; this is the same
 * knowledge applied to the arithmetic, in one place both his page and the
 * board's read.
 */
const COUNTRY_ALIASES: Record<string, string> = { UK: "GB" };
const NOT_A_COUNTRY = new Set(["WW"]);

export const countriesOf = (entries: { country: string }[]) =>
  new Set(
    entries
      .map((e) => COUNTRY_ALIASES[e.country] ?? e.country)
      .filter((c) => !NOT_A_COUNTRY.has(c))
  ).size;
