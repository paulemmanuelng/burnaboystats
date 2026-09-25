import type { LiveRelease } from "../data/liveCharts";

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
/** The Spanish edition's LIVE_CADENCE. /dai-dai/es typed "actualizado cada
 *  hora" beside an English page that said "several times a day". */
export const LIVE_CADENCE_ES = "actualizado varias veces al día";

/** Total placements for a release, across every platform it charts on. */
export const reachOf = (r: { platforms: { entries: unknown[] }[] }) =>
  r.platforms.reduce((n, p) => n + p.entries.length, 0);

/** No. 1s for a release. `numberOnes` is a subset of `entries`, never additive. */
export const numberOnesOf = (r: { platforms: { numberOnes: number }[] }) =>
  r.platforms.reduce((n, p) => n + p.numberOnes, 0);

/**
 * What identifies a live release: its KIND and its title, never the title
 * alone. A title track charts twice under one name. On 24 Sep 2026 Burna Boy's
 * album "African Giant" (Apple Music No. 1 in Guinea-Bissau) was joined by the
 * song "African Giant" (Apple Music No. 171 there), two releases and two sets
 * of placements. The board already carried four such pairs (Seyi Vibez's
 * "SWAGUU" and "FUJI MOTO", Fireboy DML's "Playboy", Victony's "STARLIFE").
 * Anything that keys, opens or looks up a release by title alone mixes the two
 * up; the pages, the panels and the tests all key on this.
 */
export const releaseKey = (r: { kind: string; title: string }) => `${r.kind}:${r.title}`;

/** Keys held by more than one release: the same kind AND title twice. An album
 *  and a song sharing a title are two releases and are not reported. */
export function duplicateReleaseKeys(releases: { kind: string; title: string }[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const r of releases) {
    const k = releaseKey(r);
    if (seen.has(k)) dupes.add(k);
    seen.add(k);
  }
  return [...dupes];
}

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

/**
 * The releases as the live-charts API serves them: Britain under one code.
 *
 * The counting above merges kworb's two codes; the JSON passed both through,
 * so /api/v1/live-charts listed "United Kingdom" as GB (Spotify) AND as UK
 * (the other five platforms), 146 country codes against the page's 145
 * countries (24 Sep 2026). "UK" is the code the charts and certifications
 * endpoints use, and flagFor already draws it, so Spotify's GB becomes UK.
 */
export function withApiCountryCodes(releases: LiveRelease[]): LiveRelease[] {
  return releases.map((r) => ({
    ...r,
    platforms: r.platforms.map((p) => ({
      ...p,
      entries: p.entries.map((e) => (e.country === "GB" ? { ...e, country: "UK" } : e)),
    })),
  }));
}
