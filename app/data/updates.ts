// LATEST UPDATES — a running log of what's changed on the site, so a repeat
// visitor can see what's new without spotting the diff themselves. Add a new
// entry here (top of the array = most recent) whenever a real fact changes —
// not for wording/design tweaks.
//
// "content" entries must read as news ABOUT BURNA BOY, not as dev/changelog
// notes about the site's data work — state the fact itself, never "logged X,
// fixed Y, added a missing Z" (that's how the fact was produced, not the fact).
//
// Vary sentence openers — don't start every entry with "Burna Boy". Lead with
// the number, the song, or the milestone instead. Use past tense for facts
// that were true before today and are only being caught up on now (e.g. a
// career award tally) — reserve present/"just happened" phrasing for things
// that are genuinely new this week (a debut chart peak, a fresh streaming high).

export type UpdateCategory = "Charts" | "Certifications" | "Streaming" | "Firsts & Records" | "Awards";

// "content" = a real fact about Burna Boy (chart peak, cert, record, streaming
// milestone) — these are the only ones shown on the homepage teaser.
// "build" = a site feature/change (new filter, new page section) — only
// visible on the full /updates page.
export type UpdateKind = "content" | "build";

export interface Update {
  date: string; // ISO "YYYY-MM-DD"
  category: UpdateCategory;
  kind: UpdateKind;
  text: string;
  href: string;
}

export const updates: Update[] = [
  {
    date: "2026-07-01",
    category: "Charts",
    kind: "content",
    text: "A brand-new market: “Dai Dai” debuted at No.60 on the Billboard Japan Hot 100.",
    href: "/records/charts",
  },
  {
    date: "2026-07-01",
    category: "Awards",
    kind: "build",
    text: "Added a proper filter to the Awards page — filter by Result, Year or Award body (all 42 ceremonies), and combine all three at once.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Awards",
    kind: "content",
    text: "From the BMI Awards to the Caribbean Music Awards, the career tally reached 79 wins from 205 nominations across 42 award bodies worldwide.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    kind: "build",
    text: "Added a “Certifications by year” browser — every certification Burna Boy earned in 2023, 2024, 2025 and 2026, one click away.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    kind: "content",
    text: "Platinum in South Africa too — “Last Last” pushed the worldwide certification count to 213.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    kind: "content",
    text: "No other African artist has held both a UK No.1 album and a UK No.1 single — until Burna Boy, now also the most certified African artist worldwide.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    kind: "content",
    text: "46.85 million monthly listeners on Spotify — a new all-time peak, and the highest ever recorded for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    kind: "content",
    text: "Six new chart peaks in one week for “Dai Dai”: No.3 in Spain, No.14 in Hungary, No.38 in Israel, No.24 in Canada, No.63 in Brazil and No.74 in the US.",
    href: "/records/charts",
  },
];

// Homepage teaser: only real Burna Boy facts, never site build/feature notes.
export function latestUpdates(n: number): Update[] {
  return updates.filter((u) => u.kind === "content").slice(0, n);
}
