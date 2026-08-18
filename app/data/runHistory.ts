// GENERATED FILE — do not edit by hand.
// Appended to by scripts/build-live-charts.mjs on every sweep.
//
// The long memory of WORLDWIDE chart positions. app/data/liveCharts.ts knows
// only today; this knows every day it has watched, so a run — "Dai Dai" at
// No. 1 on Spotify's global daily chart for 26 days — can be plotted rather
// than only counted. One row per release, platform and day (the day's latest
// reading). Collection began 2026-08-09; entries older than
// 430 days are dropped.

export interface RunPoint {
  date: string; // ISO "YYYY-MM-DD"
  release: string;
  platform: string;
  position: number;
}

export const runHistory: RunPoint[] = [
  {
    "date": "2026-08-09",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 15
  },
  {
    "date": "2026-08-09",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 7
  },
  {
    "date": "2026-08-09",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-10",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 15
  },
  {
    "date": "2026-08-10",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 8
  },
  {
    "date": "2026-08-10",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-11",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 18
  },
  {
    "date": "2026-08-11",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 8
  },
  {
    "date": "2026-08-11",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-12",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 20
  },
  {
    "date": "2026-08-12",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 8
  },
  {
    "date": "2026-08-12",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-13",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 23
  },
  {
    "date": "2026-08-13",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 8
  },
  {
    "date": "2026-08-13",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-14",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 16
  },
  {
    "date": "2026-08-14",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 7
  },
  {
    "date": "2026-08-14",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-15",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 24
  },
  {
    "date": "2026-08-15",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 7
  },
  {
    "date": "2026-08-15",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-16",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 15
  },
  {
    "date": "2026-08-16",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 6
  },
  {
    "date": "2026-08-16",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-17",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 26
  },
  {
    "date": "2026-08-17",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 6
  },
  {
    "date": "2026-08-17",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
  },
  {
    "date": "2026-08-18",
    "release": "Dai Dai",
    "platform": "Deezer",
    "position": 17
  },
  {
    "date": "2026-08-18",
    "release": "Dai Dai",
    "platform": "Shazam",
    "position": 6
  },
  {
    "date": "2026-08-18",
    "release": "Dai Dai",
    "platform": "Spotify",
    "position": 1
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
