import { describe, it, expect } from "vitest";
import { updates } from "../app/data/updates";
import {
  DAI_DAI_SPOTIFY_BODY_READ,
  DAI_DAI_SPOTIFY_DEBUT,
  DAI_DAI_SPOTIFY_STREAK_SINCE,
  DAI_DAI_SPOTIFY_CONFIRMED_THROUGH,
  DAI_DAI_SPOTIFY_DAYS_OFF,
  daiDaiSpotifyStraightDays,
  daiDaiSpotifyDaysOnChart,
} from "../app/data/daiDai";

// "Dai Dai" has TWO Spotify Global Daily longevity figures and they are not
// interchangeable: the consecutive run (what the site publishes, and what its
// own feed entries call "straight days on the chart") and the total number of
// days it has appeared. On 29 Aug 2026 a "fix" swapped one for the other and
// then rewrote a dated log entry that had been correct — a wrong number is
// recoverable, a wrong DEFINITION quietly rewrites history. See RETRACTIONS #5.
//
// charts.spotify.com's chart pages are login-gated, so the run cannot be
// re-read on demand. It CAN be read when a dated screenshot of Spotify's own
// UI arrives — DAI_DAI_SPOTIFY_BODY_READ holds the latest such reading, and it
// is what the published figure is anchored to. This file checks the two
// figures stay distinct, that they reconcile with the debut and the one-day
// break, and that the body read and the feed's older prose stay in the known
// relationship to each other.

const day = (s: string) => Date.parse(`${s}T00:00:00Z`) / 86_400_000;
const inclusive = (from: string, to: string) => day(to) - day(from) + 1;

const MONTHS: Record<string, number> = { May: 4, June: 5, July: 6, August: 7, September: 8 };

/**
 * Readings in updates.ts that name BOTH their chart date and the day count —
 * "…for 10 August…82 days on the chart", "A 90th day…on the 18 August list".
 *
 * These are TOTAL days on chart, and reading them as anything else is what went
 * wrong here. This file used to treat them as STREAKS, found them all exactly
 * one day ahead of Spotify's own Streak column, and pinned that offset as a
 * known transcription drift — a test asserting the discrepancy rather than
 * resolving it. They are not streaks and there is no drift: every one of them
 * is the exact total once the song is six days off the chart rather than one.
 */
const anchors = updates.flatMap((u) => {
  if (!/Global Daily|Daily Top Songs/.test(u.text)) return [];
  const when = u.text.match(/(?:for|on the) (\d{1,2}) (May|June|July|August|September)/);
  const count =
    u.text.match(/(\d{2,3}) days on the chart/) ??
    u.text.match(/A (\d{2,3})(?:st|nd|rd|th) day on Spotify/);
  if (!when || !count) return [];
  const d = new Date(Date.UTC(2026, MONTHS[when[2]], Number(when[1])));
  const chartDate = d.toISOString().slice(0, 10);
  if (chartDate >= DAI_DAI_SPOTIFY_BODY_READ.date) return [];
  return [{ chartDate, n: Number(count[1]), entry: u.date }];
});

describe("the Spotify Global Daily run", () => {
  it("has enough dated readings in the feed to anchor anything", () => {
    expect(
      anchors.length,
      "no updates.ts entry pairs a chart date with a day count any more — the phrasing changed and this file is now checking nothing",
    ).toBeGreaterThanOrEqual(4);
  });

  it("every dated reading in the feed reconciles as a TOTAL day count", () => {
    // The strong form, and the one the old version could not do: DAYS_OFF
    // appears on ONE side here. Six published readings, each naming its own
    // chart, each derived from the debut and DAYS_OFF alone — so a wrong
    // DAYS_OFF cannot balance the equation by sitting on both sides of it.
    // That is exactly how DAYS_OFF = 1 survived a green suite from May to
    // September while every one of these readings contradicted it.
    const off = anchors.map((a) => ({
      ...a,
      derived: inclusive(DAI_DAI_SPOTIFY_DEBUT, a.chartDate) - DAI_DAI_SPOTIFY_DAYS_OFF,
    }));
    expect(
      off.filter((a) => a.derived !== a.n).map((a) => `${a.entry}: feed says ${a.n} for the ${a.chartDate} chart, DAYS_OFF=${DAI_DAI_SPOTIFY_DAYS_OFF} derives ${a.derived}`),
      "the feed's own dated readings no longer agree with DAYS_OFF — one of them is wrong, or DAYS_OFF is",
    ).toEqual([]);
  });

  // Spotify prints the total itself, which is the one number on this page that
  // nothing on our side could otherwise check: streak, total and days-off are
  // three constants and two dates, and any one of them can be wrong without the
  // arithmetic between them complaining. This is the external anchor.
  it("matches the Total days on chart Spotify prints in the expanded row", () => {
    expect(
      daiDaiSpotifyDaysOnChart,
      `Spotify's ${DAI_DAI_SPOTIFY_BODY_READ.date} chart shows Total days on chart ${DAI_DAI_SPOTIFY_BODY_READ.totalDaysOnChart}`,
    ).toBe(DAI_DAI_SPOTIFY_BODY_READ.totalDaysOnChart);
    // And the same row names the debut, so the other end is anchored too.
    expect(
      inclusive(DAI_DAI_SPOTIFY_DEBUT, DAI_DAI_SPOTIFY_BODY_READ.date) - DAI_DAI_SPOTIFY_BODY_READ.totalDaysOnChart,
      "the debut, the total and DAYS_OFF no longer reconcile",
    ).toBe(DAI_DAI_SPOTIFY_DAYS_OFF);
  });

  // The published streak comes from Spotify's own column, not from our prose.
  it("matches the figure read off Spotify's own Streak column", () => {
    expect(
      inclusive(DAI_DAI_SPOTIFY_STREAK_SINCE, DAI_DAI_SPOTIFY_BODY_READ.date),
      `Spotify's chart for ${DAI_DAI_SPOTIFY_BODY_READ.date} shows Streak ${DAI_DAI_SPOTIFY_BODY_READ.streak}`,
    ).toBe(DAI_DAI_SPOTIFY_BODY_READ.streak);
    expect(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH).toBe(DAI_DAI_SPOTIFY_BODY_READ.date);
  });

  it("keeps the streak and the total distinct, and both derived", () => {
    expect(daiDaiSpotifyStraightDays).toBe(
      inclusive(DAI_DAI_SPOTIFY_STREAK_SINCE, DAI_DAI_SPOTIFY_CONFIRMED_THROUGH),
    );
    expect(daiDaiSpotifyDaysOnChart).toBe(
      inclusive(DAI_DAI_SPOTIFY_DEBUT, DAI_DAI_SPOTIFY_CONFIRMED_THROUGH) - DAI_DAI_SPOTIFY_DAYS_OFF,
    );
    // The total counts days the streak does not — the ones before the break.
    // If these ever come out equal, one of the three constants has drifted.
    expect(daiDaiSpotifyDaysOnChart).toBeGreaterThan(daiDaiSpotifyStraightDays);
  });

  it("reconciles: days before the break, plus the streak, equals the total", () => {
    const beforeBreak = inclusive(DAI_DAI_SPOTIFY_DEBUT, DAI_DAI_SPOTIFY_STREAK_SINCE) - 1 - DAI_DAI_SPOTIFY_DAYS_OFF;
    expect(beforeBreak + daiDaiSpotifyStraightDays).toBe(daiDaiSpotifyDaysOnChart);
  });

  it("never counts past a chart someone has read", () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(DAI_DAI_SPOTIFY_STREAK_SINCE > DAI_DAI_SPOTIFY_DEBUT).toBe(true);
    expect(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH <= today).toBe(true);
  });
});
