// LATEST UPDATES — a running log of real facts about Burna Boy (chart peaks,
// certifications, records, streaming milestones), so a repeat visitor can see
// what's new without spotting the diff themselves. Add a new entry to the TOP
// of the array whenever a real fact changes — and move it to the top even if
// you're only updating an existing figure, so the freshest fact always leads.
//
// This list is Burna Boy news only — never log site/dev changes here (new
// filters, new pages, SEO tweaks, etc.). Nobody visiting this page cares that
// a meta description got shorter.
//
// Every entry must read as news ABOUT BURNA BOY, not as dev/changelog copy —
// state the fact itself, never "logged X, fixed Y, added a missing Z" (that's
// how the fact was produced, not the fact).
//
// Vary sentence openers — don't start every entry with "Burna Boy". Lead with
// the number, the song, or the milestone instead. Use past tense for facts
// that were true before today and are only being caught up on now (e.g. a
// career award tally) — reserve present/"just happened" phrasing for things
// that are genuinely new this week (a debut chart peak, a fresh streaming high).

export type UpdateCategory = "Charts" | "Certifications" | "Streaming" | "Firsts & Records" | "Awards" | "Tours" | "Lifestyle";

export interface Update {
  date: string; // ISO "YYYY-MM-DD"
  category: UpdateCategory;
  text: string;
  href: string;
}

export const updates: Update[] = [
  {
    date: "2026-07-05",
    category: "Lifestyle",
    text: "A ₦9 billion one-of-one Bugatti Chiron — billed as the world's first widebody Chiron — now leads a reported 18-car collection worth over $17 million, alongside a new Ferrari SF90 Stradale.",
    href: "/records/cars",
  },
  {
    date: "2026-07-03",
    category: "Tours",
    text: "Five major European festivals headlined in one summer: We Love Green in Paris, SummerJam in Cologne, Gurtenfestival in Bern, Paléo in Nyon and Lollapalooza Berlin — all in 2024.",
    href: "/records/tours/festivals",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A jump of nine in Italy: “Dai Dai” reaches a new peak of No.10 on the FIMI Official Singles Chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up to No.18 in the UK: “Dai Dai” climbs again on the Official Singles Chart, its 5th week there.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "No.1 in Germany: “Dai Dai” tops the Top 100 Singles Chart there this week.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up five spots in Ireland: “Dai Dai” climbs to No.27 on the Official Irish Singles Chart, its 5th week there.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Streaming",
    text: "47.87 million monthly listeners on Spotify — yet another all-time peak, still the highest ever recorded for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A leap from No.60 to No.5 in Lithuania: “Dai Dai” makes its biggest jump yet, now in its 5th week on the AGATA chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up to No.2 in Norway: “Dai Dai” climbs again in its 6th week on the VG-lista chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Tours",
    text: "Seven headline sets and counting at Afro Nation: five in Portugal (2019, 2022, 2023, 2025, 2026), plus Miami and Detroit in 2023.",
    href: "/records/tours/festivals",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A new high for “Dai Dai” in Australia: No.47 on the ARIA Top 50.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A new market for “Dai Dai”: a debut at No.7 in Ecuador.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Streaming",
    text: "592 million monthly audience peak on YouTube Music — third among African artists, behind only Tyla and Moliy, and still climbing.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-03",
    category: "Awards",
    text: "Ghana Music Awards UK confirmed as its own ceremony, separate from the main Ghana Music Awards — the career tally now reads 79 wins from 206 nominations across 43 award bodies worldwide.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "No other African artist has ever cracked the top 4 on Spotify's Global Daily chart — Burna Boy is the only one to ever reach No. 1.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "No. 1 on Spotify's Global Daily chart: “Dai Dai” just made Burna Boy the first African artist ever to top it — and the highest-peaking FIFA World Cup anthem in the chart's history.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "47.38 million monthly listeners on Spotify — a new all-time peak, and the highest ever recorded for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "A brand-new market: “Dai Dai” debuted at No.60 on the Billboard Japan Hot 100.",
    href: "/records/charts",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "Six new chart peaks in one week for “Dai Dai”: No.3 in Spain, No.14 in Hungary, No.38 in Israel, No.24 in Canada, No.63 in Brazil and No.74 in the US.",
    href: "/records/charts",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "Platinum in South Africa too — “Last Last” pushed the worldwide certification count to 213.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "No other African artist has held both a UK No.1 album and a UK No.1 single — until Burna Boy, now also the most certified African artist worldwide.",
    href: "/records/firsts",
  },
];

export function latestUpdates(n: number): Update[] {
  return updates.slice(0, n);
}
