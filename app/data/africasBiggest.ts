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
    id: "billboard-global-200-peak",
    title: "Highest Billboard Global 200 peak",
    meta: "Billboard Global 200 · African artists · best peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "No. 1" },
      { name: "CKay", sub: "🇳🇬 “Love Nwantiti”", value: "No. 2" },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 9" },
      { name: "Libianca", sub: "🇨🇲 “People”", value: "No. 20" },
    ],
    note: "“Dai Dai” made Burna Boy the first African artist ever to top Billboard's US-inclusive Global 200 — leading the five biggest African crossover hits on the chart. (Wizkid & Tems' “Essence” sits just outside, at No. 28.)",
    source: "Best peak on Billboard's Global 200 chart (US-inclusive), per Billboard and each song's Wikipedia-cited chart history. Several of these peaked even higher on the separate Global 200 Excl. US chart. Verified July 2026.",
  },
  {
    id: "billboard-hot-100-peak",
    title: "Highest Billboard Hot 100 peak",
    meta: "Billboard Hot 100 · African artists · best peak",
    layout: "list",
    entries: [
      { name: "Wizkid", sub: "🇳🇬 “One Dance” (with Drake)", value: "No. 1" },
      { name: "Tems", sub: "🇳🇬 “Wait for U” (Future & Drake)", value: "No. 1" },
      { name: "Rema", sub: "🇳🇬 “Calm Down” (with Selena Gomez)", value: "No. 3" },
      { name: "Tyla", sub: "🇿🇦 “Water”", value: "No. 7" },
      { name: "Burna Boy", sub: "🇳🇬 “WGFT” (with Gunna)", value: "No. 16" },
    ],
    note: "The highest any African artist has charted on the Billboard Hot 100, counting lead and featured credits — Wizkid and Tems both hit No. 1 via global smashes with Drake and Future. Burna Boy's best is “WGFT” at No. 16 (his real Hot 100 record is entries, where he leads all African acts with nine).",
    source: "Best Billboard Hot 100 peak (lead or featured credit), per Billboard and Wikipedia-cited chart histories. As of July 2026.",
  },
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
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "52.07M" },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "46.58M" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "45.5M" },
      { name: "Rema", sub: "🇳🇬 Nigeria", value: "40.01M" },
      { name: "CKay", sub: "🇳🇬 Nigeria", value: "34.78M" },
    ],
    note: "Burna Boy is the first African artist ever to reach 50 million Spotify monthly listeners — a milestone no African act had crossed before, and his peak is still climbing.",
    source:
      "Peak Spotify monthly listeners, from Spotify artist pages and monitoring trackers, as of July 2026. Burna Boy's figure is his current peak and still rising, so it updates as Spotify's numbers change.",
  },
  {
    id: "biggest-spotify-debut",
    title: "Biggest Spotify debut",
    meta: "African albums · global · first-week streams",
    layout: "list",
    entries: [
      { name: "Asake", sub: "🇳🇬 M$NEY", value: "55.98M" },
      { name: "Wizkid", sub: "🇳🇬 Morayo", value: "52.8M" },
      { name: "Davido", sub: "🇳🇬 5ive", value: "51.95M" },
      { name: "Tyla", sub: "🇿🇦 Tyla", value: "46.4M" },
      { name: "Burna Boy", sub: "🇳🇬 I Told Them…", value: "37.6M" },
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
      "Career Billboard Hot 100 entries by African artists, from Billboard chart histories. Burna Boy (9), Tems (8) and Tyla (4) confirmed via Billboard; Seether (7), Wizkid (5) and Hugh Masekela (4) cross-checked against Billboard and chart-stat trackers. As of July 2026.",
  },
  {
    id: "most-200m-stream-songs",
    title: "Most songs over 200M Spotify streams",
    meta: "African artists · all credits · Spotify",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "14" },
      { name: "Tems", sub: "🇳🇬 Nigeria", value: "8" },
      { name: "Tyla", sub: "🇿🇦 South Africa · tied", value: "6" },
      { name: "Rema", sub: "🇳🇬 Nigeria · tied", value: "6" },
      { name: "Wizkid, CKay & Omah Lay", sub: "🇳🇬 Nigeria · tied", value: "3" },
    ],
    note: "Burna Boy has the most songs past 200 million Spotify streams of any African artist — 14, well clear of the field. Counts include lead and featured credits, and separate song versions are counted individually (as trackers list them).",
    source:
      "Songs with 200M+ Spotify streams (all credits), counted from kworb.net stream totals. As of July 2026 — figures shift as songs cross the threshold.",
  },
  {
    id: "most-followed-spotify",
    title: "Most-followed African artist on Spotify",
    meta: "Spotify followers · African artists · current",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "16.9M" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "12.0M" },
      { name: "Davido", sub: "🇳🇬 Nigeria", value: "11.3M" },
      { name: "Asake", sub: "🇳🇬 Nigeria", value: "9.7M" },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "5.1M" },
    ],
    note: "Burna Boy is the most-followed African artist on Spotify — nearly 5 million clear of Wizkid in second.",
    source:
      "Spotify follower counts, taken directly from each artist's official Spotify page. As of July 2026 — this updates continuously as Spotify's live counts change.",
  },
  {
    id: "highest-spotify-global-peak",
    title: "Highest-charting song on Spotify Global",
    meta: "Spotify Daily Top Songs Global · peak position · all credits",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 “Dai Dai” (with Shakira)", value: "#1" },
      { name: "Wizkid & Tems", sub: "🇳🇬 “One Dance” / “Raindance” · tied", value: "#5" },
      { name: "Rema & Tyla", sub: "🇳🇬🇿🇦 “Calm Down” (Remix) / “Water” & “Chanel” · tied", value: "#8" },
      { name: "CKay", sub: "🇳🇬 “love nwantiti (ah ah ah)”", value: "#9" },
    ],
    note: "Burna Boy is the first and only African artist to reach No. 1 on Spotify's Global Daily Top Songs chart — no other African artist has ever cracked the top 4.",
    source:
      "Peak positions on Spotify's Daily Top Songs Global chart, each artist's best-charting song across all credits, from chart-tracking accounts. As of July 2026.",
  },
  {
    id: "youtube-music-audience-peak",
    title: "Highest monthly audience peak on YouTube",
    meta: "YouTube · African artists · all-time peak",
    layout: "list",
    entries: [
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "699M" },
      { name: "Tyla", sub: "🇿🇦 South Africa", value: "654M" },
      { name: "Moliy", sub: "🇬🇭 Ghana", value: "602M" },
      { name: "Rema", sub: "🇳🇬 Nigeria", value: "471M" },
    ],
    note: "Burna Boy's monthly-audience peak on YouTube has climbed to 699 million — the highest of any African artist, and one of the six biggest of any singer ever, behind only Bruno Mars, Rosé, Lady Gaga, Shakira and Michael Jackson.",
    source:
      "Peak monthly audience on YouTube (YouTube for Artists), from chart-tracking accounts. As of July 2026 — figures update as they climb.",
  },
];
