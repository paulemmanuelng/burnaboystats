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
 * This is the LEGACY series, and it is one day ahead of Spotify's own column
 * throughout (see below). Only entries describing charts BEFORE the body read
 * are collected: from the body read onward the column governs, and mixing the
 * two conventions in one set would make the consistency check fail on a
 * correct entry.
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

  it("has one start date that every dated reading agrees on", () => {
    const implied = anchors.map((a) => ({
      ...a,
      startsOn: new Date((day(a.chartDate) - a.n + 1) * 86_400_000).toISOString().slice(0, 10),
    }));
    const distinct = [...new Set(implied.map((i) => i.startsOn))];
    expect(
      distinct.length === 1 ? [] : implied.map((i) => `${i.entry}: ${i.n} on ${i.chartDate} → ${i.startsOn}`),
      `the feed's own readings imply different start dates (${distinct.join(" vs ")}). One of those entries is wrong.`,
    ).toEqual([]);
    // The feed's prose sits exactly ONE DAY AHEAD of Spotify's own Streak
    // column — it says 82 for the 10 Aug chart where the column reads 81 — so
    // it implies 21 May where the body says 22 May. The body governs; this
    // pins the known offset so it cannot quietly widen. If this ever fails,
    // the two series have drifted further apart and one of them has changed.
    const feedStart = Date.parse(`${distinct[0]}T00:00:00Z`) / 86_400_000;
    const bodyStart = Date.parse(`${DAI_DAI_SPOTIFY_STREAK_SINCE}T00:00:00Z`) / 86_400_000;
    expect(
      bodyStart - feedStart,
      `the feed's readings imply ${distinct[0]} and the body read implies ${DAI_DAI_SPOTIFY_STREAK_SINCE}; that gap was 1 day and is now ${bodyStart - feedStart}`,
    ).toBe(1);
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
