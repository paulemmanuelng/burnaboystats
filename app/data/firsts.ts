// FIRSTS & RECORDS — history-making milestones, grouped.
// Every entry was verified against multiple sources during the build of the
// Tours, Charts and Awards pages (June 2026). Only firsts/records that could be
// confirmed are listed — nothing is included on a single unverified claim.

export interface First {
  year: string;
  title: string;
  text: string;
}

export interface FirstGroup {
  label: string;
  items: First[];
}

export const firstGroups: FirstGroup[] = [
  {
    label: "Stadiums & arenas",
    items: [
      { year: "2025", title: "First Nigerian artist to headline Red Rocks Amphitheatre", text: "Opening the No Sign of Weakness tour at the iconic Colorado venue." },
      { year: "2025", title: "First African artist to sell out the Stade de France", text: "Headlining the 80,000-capacity Paris stadium (April 2025) — a $4.53M night." },
      { year: "2023", title: "First African artist to headline & sell out a UK stadium", text: "London Stadium, to around 60,000 fans, on the Love, Damini tour." },
      { year: "2023", title: "First African artist to headline & sell out a US stadium", text: "Citi Field, New York." },
      { year: "2022", title: "First Nigerian artist to headline & sell out Madison Square Garden", text: "His “One Night in Space” show — the Space Drift World Tour finale." },
      { year: "2021", title: "First Nigerian artist to headline the Hollywood Bowl", text: "His debut at the legendary Los Angeles amphitheatre." },
    ],
  },
  {
    label: "World stages",
    items: [
      { year: "2026", title: "First African artist to headline a FIFA World Cup opening ceremony", text: "Mexico City, performing the official tournament song “Dai Dai” with Shakira." },
      { year: "2024", title: "First African artist to perform on the Grammy Awards stage", text: "A medley from I Told Them… with Brandy and 21 Savage." },
      { year: "2023", title: "First African artist to perform at a UEFA Champions League final", text: "The kick-off show ahead of the final in Istanbul." },
      { year: "2021", title: "First winner of the Grammy for Best Global Music Album", text: "Twice as Tall took the award in its debut year — the category renamed from Best World Music Album." },
    ],
  },
  {
    label: "Charts & streaming",
    items: [
      { year: "2026", title: "First African artist to chart the Billboard Hot 100 six years running", text: "An unbroken run from 2021 through 2026." },
      { year: "2026", title: "Joint-most Billboard Hot 100 entries by an African artist", text: "Eight career entries — level with Tems." },
      { year: "2024", title: "First African artist to surpass 2 billion UK streams", text: "Recognised with a BRIT Billion award — the first African to reach it." },
      { year: "2024", title: "First African artist to surpass 1 billion UK streams", text: "Awarded his first BRIT Billion plaque." },
    ],
  },
  {
    label: "Box office",
    items: [
      { year: "2025", title: "Highest-grossing tour ever by an African artist", text: "The I Told Them… Tour grossed $30.46M across 22 reported shows." },
      { year: "2024", title: "Highest-grossing single concert by any African artist", text: "London Stadium — $6.15M from 58,973 fans." },
      { year: "2026", title: "First African artist to gross over $1M from a single Oceania concert", text: "On the No Sign of Weakness Oceania run (which grossed $3.1M in total)." },
    ],
  },
];

export const allFirsts: First[] = firstGroups.flatMap((g) => g.items);
export const firstsCount = allFirsts.length;
