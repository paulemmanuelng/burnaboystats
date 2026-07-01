// LATEST UPDATES — a running log of what's changed on the site, so a repeat
// visitor can see what's new without spotting the diff themselves. Add a new
// entry here (top of the array = most recent) whenever a real fact changes —
// not for wording/design tweaks.
//
// "content" entries must read as news ABOUT BURNA BOY, not as dev/changelog
// notes about the site's data work. Write "Burna Boy has now won 79 awards…",
// never "logged X, fixed Y, added a missing Z" — that's how the fact was
// produced, not the fact itself.

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
    category: "Awards",
    kind: "build",
    text: "Added a proper filter to the Awards page — filter by Result, Year or Award body (all 42 ceremonies), and combine all three at once.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Awards",
    kind: "content",
    text: "Burna Boy has now won 79 awards from 205 nominations across 42 award bodies worldwide, including wins at the BMI Awards, SESAC Awards and Caribbean Music Awards.",
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
    text: "Burna Boy's total certifications now stand at 213 worldwide, after “Last Last” was confirmed Platinum in South Africa.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    kind: "content",
    text: "Burna Boy is the first African artist to hold both a UK No.1 album and No.1 single — and is now the most certified African artist in the world.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    kind: "content",
    text: "Burna Boy's Spotify monthly listeners have hit an all-time peak of 46.85M — the highest ever for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    kind: "content",
    text: "“Dai Dai” (Shakira x Burna Boy) keeps climbing, with new peaks in Spain (No.3), Hungary (No.14), Israel (No.38), Canada (No.24), Brazil (No.63) and the US (No.74).",
    href: "/records/charts",
  },
];

// Homepage teaser: only real Burna Boy facts, never site build/feature notes.
export function latestUpdates(n: number): Update[] {
  return updates.filter((u) => u.kind === "content").slice(0, n);
}
