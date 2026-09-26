// GENERATED FILE — do not edit by hand.
  // Appended to by scripts/build-live-charts.mjs --artist=ayra-starr on every sweep.
  //
  // The long memory of Ayra Starr's WORLDWIDE chart positions. The live
  // snapshot beside it knows only today; this knows every day it has watched, so
  // a run — "Dai Dai" at No. 1 on Spotify's global daily chart for 26 days — can
  // be plotted rather than only counted. One row per release, platform and day
  // (the day's latest reading). Collection began 2026-08-20;
  // entries older than 430 days are dropped.
  
  export interface RunPoint {
    date: string; // ISO "YYYY-MM-DD"
    release: string;
    /** Present only on an album's row; absent means a song. */
    kind?: "album";
    platform: string;
    position: number;
  }
  
  export const runHistory: RunPoint[] = [
  {
    "date": "2026-08-20",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 31
  },
  {
    "date": "2026-08-21",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 31
  },
  {
    "date": "2026-08-25",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 8
  },
  {
    "date": "2026-08-26",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 7
  },
  {
    "date": "2026-08-27",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 6
  },
  {
    "date": "2026-08-28",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 6
  },
  {
    "date": "2026-08-29",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 7
  },
  {
    "date": "2026-08-30",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 10
  },
  {
    "date": "2026-08-31",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 10
  },
  {
    "date": "2026-09-01",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 10
  },
  {
    "date": "2026-09-02",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-03",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-04",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-05",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-06",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-07",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-08",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-09",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-11",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-12",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 11
  },
  {
    "date": "2026-09-13",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 27
  },
  {
    "date": "2026-09-14",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 27
  },
  {
    "date": "2026-09-15",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 27
  },
  {
    "date": "2026-09-16",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 36
  },
  {
    "date": "2026-09-17",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 41
  },
  {
    "date": "2026-09-18",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 46
  },
  {
    "date": "2026-09-19",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 47
  },
  {
    "date": "2026-09-23",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 67
  },
  {
    "date": "2026-09-24",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 71
  },
  {
    "date": "2026-09-25",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 75
  },
  {
    "date": "2026-09-26",
    "release": "Heaven Baby",
    "platform": "Shazam",
    "position": 75
  }
];
  
  /** The dated series for one release on one platform, oldest first. A song's
   *  unless `kind` says album: a title track and its album share the name. */
  export const runSeries = (release: string, platform: string, kind: "song" | "album" = "song") =>
    runHistory
      .filter((r) => r.release === release && r.platform === platform && (r.kind ?? "song") === kind)
      .map((r) => ({ date: r.date, value: r.position }));
  
  /** How many days the history actually covers — a chart should say so rather
   *  than implying it has watched a run from its first day. */
  export const runHistoryDays = new Set(runHistory.map((r) => r.date)).size;
  