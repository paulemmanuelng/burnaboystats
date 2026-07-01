// LATEST UPDATES — a running log of what's changed on the site, so a repeat
// visitor can see what's new without spotting the diff themselves. Add a new
// entry here (top of the array = most recent) whenever a real fact changes —
// not for wording/design tweaks. Keep `text` to one short headline (the single
// most important number/fact) — no lists of sources, methodology or "up from X".

export type UpdateCategory = "Charts" | "Certifications" | "Streaming" | "Firsts & Records" | "Awards";

export interface Update {
  date: string; // ISO "YYYY-MM-DD"
  category: UpdateCategory;
  text: string;
  href: string;
}

export const updates: Update[] = [
  {
    date: "2026-07-01",
    category: "Awards",
    text: "New Awards page filter — by Result, Year or Award body.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Awards",
    text: "Found 32 missing nominations — now 79 wins across 42 award bodies.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "New “Certifications by year” browser — 2023 through 2026.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "123 certifications added for 2023–2026 — total now 213.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "Two new records: a UK No.1 album + single double, and most certified African artist worldwide.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "New Spotify monthly-listeners peak: 46.85M — highest ever for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "“Dai Dai” hit new peaks in 6 countries, including a No.3 high in Spain.",
    href: "/records/charts",
  },
];

export function latestUpdates(n: number): Update[] {
  return updates.slice(0, n);
}
