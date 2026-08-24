// GENERATED FILE — do not edit by hand.
  // Appended to by scripts/build-live-charts.mjs --artist=wizkid on every sweep.
  //
  // The long memory of Wizkid's WORLDWIDE chart positions. The live
  // snapshot beside it knows only today; this knows every day it has watched, so
  // a run — "Dai Dai" at No. 1 on Spotify's global daily chart for 26 days — can
  // be plotted rather than only counted. One row per release, platform and day
  // (the day's latest reading). Collection began 2026-08-17;
  // entries older than 430 days are dropped.
  
  export interface RunPoint {
    date: string; // ISO "YYYY-MM-DD"
    release: string;
    platform: string;
    position: number;
  }
  
  export const runHistory: RunPoint[] = [
  {
    "date": "2026-08-17",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 58
  },
  {
    "date": "2026-08-20",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 56
  },
  {
    "date": "2026-08-21",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 58
  },
  {
    "date": "2026-08-22",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 58
  },
  {
    "date": "2026-08-23",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 61
  },
  {
    "date": "2026-08-24",
    "release": "One Dance",
    "platform": "Spotify",
    "position": 61
  }
];
  
  /** The dated series for one release on one platform, oldest first. */
  export const runSeries = (release: string, platform: string) =>
    runHistory
      .filter((r) => r.release === release && r.platform === platform)
      .map((r) => ({ date: r.date, value: r.position }));
  
  /** How many days the history actually covers — a chart should say so rather
   *  than implying it has watched a run from its first day. */
  export const runHistoryDays = new Set(runHistory.map((r) => r.date)).size;
  