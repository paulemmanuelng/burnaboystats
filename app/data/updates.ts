// LATEST UPDATES — a running log of what's changed on the site, so a repeat
// visitor can see what's new without spotting the diff themselves. Add a new
// entry here (top of the array = most recent) whenever a real fact changes —
// not for wording/design tweaks.

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
    text: "Added a proper filter to the Awards page — filter by Result, Year or Award body (all 42 ceremonies), and combine all three at once.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Awards",
    text: "Deep research pass on the Awards page found 32 missing nominations across 12 award bodies (BMI, SESAC, Caribbean Music Awards, Urban Music Awards, Metro FM, MTN Liberia, 4Syte TV and more) — total now 79 wins from 205 nominations across 42 award bodies, up from 65 wins / 173 nominations / 30 bodies.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "Added a “Certifications by year” browser — every certification Burna Boy earned in 2023, 2024, 2025 and 2026, one click away.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "Logged 123 individual certifications across 2023–2026, fixed three stale certification tiers, and added a missing “Last Last” (South Africa) certification — total awards now 213.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "Added two new records: first African artist to hold a UK No.1 album and No.1 single, and most certified African artist worldwide.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "Burna Boy's Spotify monthly listeners hit a new peak of 46.85M — the highest ever for an African artist, overtaking Tyla.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "“Dai Dai” (Shakira x Burna Boy) hit new peaks: No.3 in Spain, No.14 in Hungary, No.38 in Israel, No.24 on the Canadian Hot 100, No.63 on the Brazil Hot 100 and No.74 on the Billboard Hot 100.",
    href: "/records/charts",
  },
];

export function latestUpdates(n: number): Update[] {
  return updates.slice(0, n);
}
