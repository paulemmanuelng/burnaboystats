// Highest reported box-office revenue per individual show, among African
// artists. Sourced from TouringData (which aggregates Billboard Boxscore),
// cross-checked against press reporting and, for Burna Boy's own dates,
// against the site's own verified tour records — July 2026. This is PER-SHOW
// gross, distinct from the tour-level totals on the main Tours page.

import type { LeaderboardBox } from "./africasBiggest";

export interface RevenueShow {
  artist: string;
  venue: string;
  city: string;
  flag: string;
  tour: string;
  year: string;
  tickets?: string;
  revenue: number; // USD
}

export const revenueShows: RevenueShow[] = [
  { artist: "Burna Boy", venue: "London Stadium", city: "London", flag: "🇬🇧", tour: "I Told Them… Tour", year: "2024", tickets: "58,973", revenue: 6147209 },
  { artist: "Burna Boy", venue: "Stade de France", city: "Paris", flag: "🇫🇷", tour: "I Told Them… Tour", year: "2025", tickets: "43,881", revenue: 4528368 },
  { artist: "Fally Ipupa (DR Congo)", venue: "La Défense Arena", city: "Paris", flag: "🇫🇷", tour: "Solo concert", year: "2023", tickets: "39,048", revenue: 3160842 },
  { artist: "Burna Boy", venue: "La Défense Arena", city: "Paris", flag: "🇫🇷", tour: "Love, Damini Tour", year: "2023", tickets: "36,585", revenue: 2863340 },
  { artist: "Burna Boy", venue: "Scotiabank Arena", city: "Toronto", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2024", tickets: "29,579 (2 nights)", revenue: 2801928 },
  { artist: "Burna Boy", venue: "Bell Centre", city: "Montreal", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2024", tickets: "26,303 (2 nights)", revenue: 1904384 },
  { artist: "Burna Boy", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "13,892", revenue: 1724853 },
  { artist: "Burna Boy", venue: "TD Garden", city: "Boston", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "13,219", revenue: 1592684 },
  { artist: "Burna Boy", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Space Drift Tour", year: "2022", tickets: "13,586", revenue: 1576641 },
  { artist: "Burna Boy", venue: "Ziggo Dome", city: "Amsterdam", flag: "🇳🇱", tour: "Space Drift Tour", year: "2022", tickets: "17,000", revenue: 1564720 },
  { artist: "Burna Boy", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "14,688", revenue: 1434525 },
  { artist: "Burna Boy", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "13,331", revenue: 1394173 },
  { artist: "Burna Boy", venue: "Lanxess Arena", city: "Cologne", flag: "🇩🇪", tour: "I Told Them… Tour", year: "2023", tickets: "14,260", revenue: 1386581 },
  { artist: "Burna Boy", venue: "The O2 Arena", city: "London", flag: "🇬🇧", tour: "Space Drift Tour", year: "2021", tickets: "15,165", revenue: 1347333 },
  { artist: "Burna Boy", venue: "Co-op Live", city: "Manchester", flag: "🇬🇧", tour: "I Told Them… Tour", year: "2025", tickets: "13,204", revenue: 1338176 },
  { artist: "Burna Boy", venue: "BMO Stadium", city: "Los Angeles", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "10,684", revenue: 1224617 },
  { artist: "Davido", venue: "The O2 Arena", city: "London", flag: "🇬🇧", tour: "Timeless Tour", year: "2024", tickets: "14,919", revenue: 1201417 },
  { artist: "Burna Boy", venue: "Qudos Bank Arena", city: "Sydney", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "10,401", revenue: 1116628 },
  { artist: "Burna Boy", venue: "Mercedes-Benz Arena", city: "Berlin", flag: "🇩🇪", tour: "I Told Them… Tour", year: "2023", tickets: "11,839", revenue: 1089184 },
  { artist: "Wizkid", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Made in Lagos Encore Tour", year: "2022", tickets: "12,901", revenue: 1002709 },
  { artist: "Burna Boy", venue: "Hard Rock Live", city: "Hollywood, FL", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,591", revenue: 965925 },
  { artist: "Wizkid", venue: "The O2 Arena", city: "London", flag: "🇬🇧", tour: "Made in Lagos Tour", year: "2021", tickets: "16,938", revenue: 958489 },
  { artist: "Asake", venue: "Scotiabank Arena", city: "Toronto", flag: "🇨🇦", tour: "Live in Canada", year: "2024", tickets: "9,652", revenue: 916954 },
  { artist: "Burna Boy", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "12,753", revenue: 905024 },
  { artist: "Burna Boy", venue: "Oakland Arena", city: "Oakland", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2023", tickets: "9,436", revenue: 885278 },
  { artist: "Davido", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Timeless Tour", year: "2023", tickets: "8,577", revenue: 884147 },
  { artist: "Asake", venue: "Barclays Center", city: "New York", flag: "🇺🇸", tour: "Work of Art Tour", year: "2023", tickets: "8,464", revenue: 866409 },
  { artist: "Asake", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "11,096", revenue: 860761 },
  { artist: "Asake", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "8,690", revenue: 823316 },
  { artist: "Burna Boy", venue: "Hallenstadion", city: "Zurich", flag: "🇨🇭", tour: "Love, Damini Tour", year: "2022", tickets: "8,827", revenue: 822939 },
  { artist: "Davido", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Timeless Tour", year: "2024", tickets: "10,185", revenue: 809689 },
  { artist: "Burna Boy", venue: "Sidney Myer Music Bowl", city: "Melbourne", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "8,237", revenue: 805250 },
  { artist: "Rema", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Heis Tour", year: "2025", revenue: 793707 },
  { artist: "Burna Boy", venue: "Sportpaleis", city: "Antwerp", flag: "🇧🇪", tour: "I Told Them… Tour", year: "2023", tickets: "8,266", revenue: 781236 },
  { artist: "Davido", venue: "Merriweather Post Pavilion", city: "Columbia, MD", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", revenue: 695845 },
  { artist: "Burna Boy", venue: "Wintrust Arena", city: "Chicago", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,775", revenue: 674283 },
  { artist: "Burna Boy", venue: "RAC Arena", city: "Perth", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "6,835", revenue: 644871 },
  { artist: "Burna Boy", venue: "Addition Financial Arena", city: "Orlando", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "7,137", revenue: 636923 },
  { artist: "Davido", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "A.W.A.Y Festival", year: "2023", tickets: "11,246", revenue: 599343 },
  { artist: "Burna Boy", venue: "Amalie Arena", city: "Tampa, FL", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,890", revenue: 580424 },
];

function formatUSD(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export function revenueLeaderboardBox(
  shows: RevenueShow[],
  opts: { title: string; meta: string; source: string; note?: string }
): LeaderboardBox {
  return {
    id: "highest-revenue-per-show",
    title: opts.title,
    meta: opts.meta,
    layout: "list",
    entries: shows.map((s) => ({
      name: s.artist,
      sub: `${s.flag} ${s.venue}, ${s.city} · ${s.tour} · ${s.year}${s.tickets ? ` · ${s.tickets} tickets` : ""}`,
      value: formatUSD(s.revenue),
    })),
    note: opts.note,
    source: opts.source,
  };
}
