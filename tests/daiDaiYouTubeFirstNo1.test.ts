import { describe, it, expect } from "vitest";
import {
  DAI_DAI_YT_FIRST_NO1,
  DAI_DAI_YT_NO1_SINCE,
  DAI_DAI_YT_CONFIRMED_THROUGH,
  DAI_DAI_YT_NO1_AGAIN_SEEN_ON,
  DAI_DAI_YT_DAYS_ON_CHART_AT_RECLAIM,
} from "../app/data/daiDai";

// "Dai Dai" was No. 1 on YouTube's Global Daily Top Music Videos chart on its
// debut chart, 23 May 2026, and 9 June is only the first day of the 80-day run.
// A feature that reads DAI_DAI_YT_NO1_SINCE as "went to No. 1" dates it 17 days
// late. The anchors here are the chart's OWN "days on chart" counter, read at
// the body (docs/sourcing/RETRACTIONS.md: 18 on 9 Jun, 97 on 27 Aug; daiDai.ts:
// 108 on 7 Sep), not a second copy of the constant.

const daysInclusive = (from: string, to: string) =>
  Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000) + 1;

// The walk's only days NOT at No. 1 (RETRACTIONS.md), each a No. 2.
const MISSES = ["2026-05-28", "2026-05-29", "2026-06-02", "2026-06-08"];

describe("the first day Dai Dai was No. 1 on YouTube's global video chart", () => {
  it("is day 1 of the chart's own counter", () => {
    expect(daysInclusive(DAI_DAI_YT_FIRST_NO1, "2026-06-09")).toBe(18);
    expect(daysInclusive(DAI_DAI_YT_FIRST_NO1, DAI_DAI_YT_CONFIRMED_THROUGH)).toBe(97);
    expect(daysInclusive(DAI_DAI_YT_FIRST_NO1, DAI_DAI_YT_NO1_AGAIN_SEEN_ON)).toBe(
      DAI_DAI_YT_DAYS_ON_CHART_AT_RECLAIM,
    );
  });

  it("was a No. 1 day, and 93 of the 97 were", () => {
    expect(MISSES).not.toContain(DAI_DAI_YT_FIRST_NO1);
    expect(daysInclusive(DAI_DAI_YT_FIRST_NO1, DAI_DAI_YT_CONFIRMED_THROUGH) - MISSES.length).toBe(93);
  });

  it("comes before the 80-day run, which starts the day after the last miss", () => {
    expect(DAI_DAI_YT_FIRST_NO1 < DAI_DAI_YT_NO1_SINCE).toBe(true);
    expect(daysInclusive(MISSES[MISSES.length - 1], DAI_DAI_YT_NO1_SINCE)).toBe(2);
  });

  it("a negative control: the run's start fails as the first day", () => {
    // The On This Day build dated "went to No. 1" from DAI_DAI_YT_NO1_SINCE.
    expect(daysInclusive("2026-06-09", "2026-06-09")).not.toBe(18);
  });
});
