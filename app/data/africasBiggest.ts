// "Africa's Biggest" — leaderboard-style stat boxes comparing African artists.
// Two box layouts:
//   • "year" — a ranked Top-5 per year (e.g. most-streamed artist by year).
//     Stream totals are NOT shown (Spotify doesn't publish official per-year
//     totals), so those boxes are rankings only.
//   • "list" — a single ranked list, optionally with a value per entry
//     (e.g. peak monthly listeners, which ARE visible on Spotify).

export interface RankEntry {
  name: string;
  value?: string; // e.g. "46.58M" (only used in "list" boxes)
}

export interface RankRow {
  label?: string; // usually a year ("year" layout)
  entries: RankEntry[];
  inProgress?: boolean;
  note?: string;
}

export interface LeaderboardBox {
  id: string;
  title: string;
  meta: string; // metric + source descriptor
  layout: "year" | "list";
  rows?: RankRow[]; // for layout "year"
  entries?: RankEntry[]; // for layout "list"
  note?: string; // box-level highlight / record callout
  source: string;
}

// Name highlighted across every box (the site's subject).
export const HIGHLIGHT = "Burna Boy";

export const statBoxes: LeaderboardBox[] = [
  {
    id: "most-streamed-african-artist",
    title: "Most-streamed African artist",
    meta: "Total Spotify streams · global · per year",
    layout: "year",
    rows: [
      {
        label: "2026",
        entries: [{ name: "Tems" }],
        inProgress: true,
        note: "Year in progress — Tems leading so far; final order not yet set.",
      },
      {
        label: "2025",
        entries: [
          { name: "Burna Boy", value: "1.986B" },
          { name: "Wizkid", value: "1.947B" },
          { name: "Tyla", value: "1.798B" },
          { name: "Rema", value: "1.267B" },
          { name: "Tems", value: "1.195B" },
        ],
        note: "Burna Boy's 1.986 billion streams set a record for the biggest streaming year ever by an African artist on Spotify.",
      },
      {
        label: "2024",
        entries: [
          { name: "Burna Boy" },
          { name: "Tyla" },
          { name: "Ayra Starr" },
          { name: "Rema" },
          { name: "Tems" },
        ],
      },
    ],
    source:
      "Ranked by total Spotify streams each year, sourced from streaming trackers. Covers 2024 & 2025; earlier years are added as they're confirmed.",
  },
  {
    id: "monthly-listeners-peak",
    title: "Highest monthly-listeners peak",
    meta: "Spotify · African artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Tyla", value: "46.58M" },
      { name: "Tems", value: "45.5M" },
      { name: "Burna Boy", value: "42.63M" },
      { name: "Rema", value: "40.01M" },
      { name: "Ayra Starr", value: "32.19M" },
    ],
    note: "Burna Boy holds the highest monthly-listeners peak ever for a male African artist on Spotify — and it's still climbing.",
    source:
      "Peak Spotify monthly listeners, from Spotify artist pages and monitoring trackers, as of June 2026. Burna Boy's figure is his current peak and still rising, so it updates as Spotify's numbers change.",
  },
];
