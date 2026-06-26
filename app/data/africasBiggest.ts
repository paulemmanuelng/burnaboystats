// "Africa's Biggest" — leaderboard-style stat boxes comparing African artists.
// Two box layouts:
//   • "year" — a ranked Top-5 per year (e.g. most-streamed artist by year).
//     Mostly rankings only; a year may carry stream totals where they're
//     reliably sourced (e.g. 2025).
//   • "list" — a single ranked list, optionally with a value per entry
//     (e.g. peak monthly listeners, which ARE visible on Spotify).

export interface RankEntry {
  name: string;
  sub?: string; // optional secondary label, e.g. an album title ("list" boxes)
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
        entries: [
          { name: "Tems" },
          { name: "Wizkid" },
          { name: "Burna Boy" },
          { name: "Asake" },
          { name: "Tyla" },
        ],
        inProgress: true,
        note: "Tems leading so far.",
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
      {
        label: "2023",
        entries: [
          { name: "Rema" },
          { name: "Burna Boy" },
          { name: "Wizkid" },
          { name: "Tems" },
          { name: "Ayra Starr" },
        ],
      },
      {
        label: "2022",
        entries: [
          { name: "Burna Boy" },
          { name: "Wizkid" },
          { name: "Rema" },
          { name: "Tems" },
          { name: "Asake" },
        ],
      },
    ],
    source:
      "Ranked by total Spotify streams each year (2022–2026), sourced from streaming trackers. Stream totals are shown for 2025; the other years are rankings only. *2026 is still in progress, so its order may change.",
  },
  {
    id: "monthly-listeners-peak",
    title: "Highest monthly-listeners peak",
    meta: "Spotify · African artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Tyla", value: "46.58M" },
      { name: "Tems", value: "45.5M" },
      { name: "Burna Boy", value: "44.21M" },
      { name: "Rema", value: "40.01M" },
      { name: "Ayra Starr", value: "32.19M" },
    ],
    note: "Burna Boy holds the highest monthly-listeners peak ever for a male African artist on Spotify — and it's still climbing.",
    source:
      "Peak Spotify monthly listeners, from Spotify artist pages and monitoring trackers, as of June 2026. Burna Boy's figure is his current peak and still rising, so it updates as Spotify's numbers change.",
  },
  {
    id: "biggest-spotify-debut",
    title: "Biggest Spotify debut",
    meta: "African albums · global · first-week streams",
    layout: "list",
    entries: [
      { name: "Asake", sub: "M$NEY", value: "55.98M" },
      { name: "Wizkid", sub: "Morayo", value: "52.8M" },
      { name: "Davido", sub: "5ive", value: "51.95M" },
      { name: "Tyla", sub: "Tyla", value: "46.4M" },
      { name: "Burna Boy", sub: "I Told Them…", value: "37.6M" },
    ],
    note: "Burna Boy's I Told Them… is one of the five biggest first-week debuts ever for an African album on Spotify — the record belongs to Asake's M$NEY (55.98M).",
    source: "Biggest opening-week streams for African albums on Spotify (global), sourced from streaming trackers.",
  },
  {
    id: "most-hot-100-entries",
    title: "Most Billboard Hot 100 entries",
    meta: "African artists · career · US Billboard Hot 100",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "9" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "8" },
      { name: "Seether", sub: "🇿🇦 South Africa", value: "7" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "5" },
      { name: "Tyla & Hugh Masekela", sub: "🇿🇦 South Africa · tied", value: "4" },
    ],
    note: "Burna Boy has the most Billboard Hot 100 entries of any African artist in history — 9, extended by “Dai Dai” with Shakira. Tyla and Hugh Masekela are tied on 4: Tyla holds the record for the most by an African woman, and Masekela was the first African act to top the chart (“Grazing in the Grass,” No. 1, 1968).",
    source:
      "Career Billboard Hot 100 entries by African artists, from Billboard chart histories. Burna Boy (9), Tems (8) and Tyla (4 — Water, Chanel, She Did It Again, Push 2 Start) confirmed via Billboard; Seether (7), Wizkid (5) and Hugh Masekela (4) cross-checked against Billboard and chart-stat trackers. As of 26 June 2026.",
  },
];
