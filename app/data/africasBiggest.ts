// "Africa's Biggest" — leaderboard-style stat boxes comparing African artists.
// RANKINGS ONLY (no stream totals): Spotify does not publish official per-artist
// annual totals, so we show the Top-5 order from Spotify Wrapped / official
// year-end reporting. Years still in progress are flagged (inProgress) and the
// row shows only the current leader, not a final order.

export interface RankRow {
  label: string; // usually a year
  entries: string[]; // ordered Top-5 (or current leader if inProgress)
  inProgress?: boolean;
  note?: string;
}

export interface LeaderboardBox {
  id: string;
  title: string;
  meta: string; // metric + source descriptor
  rows: RankRow[];
  source: string;
}

// Name highlighted across every box (the site's subject).
export const HIGHLIGHT = "Burna Boy";

export const statBoxes: LeaderboardBox[] = [
  {
    id: "most-streamed-african-artist",
    title: "Most-streamed African artist",
    meta: "Spotify · global · by year",
    rows: [
      {
        label: "2026",
        entries: ["Tems"],
        inProgress: true,
        note: "Year in progress — Tems leading so far; final order not yet set.",
      },
      { label: "2025", entries: ["Burna Boy", "Tyla", "Ayra Starr", "Rema", "Tems"] },
      { label: "2024", entries: ["Burna Boy", "Tyla", "Ayra Starr", "Rema", "Tems"] },
    ],
    source:
      "Spotify Wrapped global African-artist rankings (2024 & 2025). Earlier years (2021–2023) are being verified — Spotify reported those by country / “most exported,” not as a clean global Top-5.",
  },
];
