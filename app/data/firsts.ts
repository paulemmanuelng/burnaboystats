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
      { year: "2025", title: "First African artist to headline a stadium concert in New Zealand", text: "Headlining the inaugural Afrosoul Festival at Auckland's Go Media Stadium." },
      { year: "2025", title: "First African artist to sell out the Stade de France", text: "Headlining the 80,000-capacity Paris stadium (April 2025) — a $4.53M night." },
      { year: "2023", title: "First African artist to headline & sell out a UK stadium", text: "London Stadium, to around 60,000 fans, on the Love, Damini tour." },
      { year: "2023", title: "First African artist to headline & sell out a US stadium", text: "Citi Field, New York." },
      { year: "2022", title: "First Nigerian artist to headline & sell out Madison Square Garden", text: "His “One Night in Space” show — the Space Drift World Tour finale." },
      { year: "2021", title: "First Nigerian artist to headline the Hollywood Bowl", text: "His debut at the legendary Los Angeles amphitheatre." },
      { year: "2019", title: "First Afrobeats artist to sell out the SSE Arena, Wembley", text: "A sold-out London arena show that earned him a special plaque — an early breakthrough for the genre." },
    ],
  },
  {
    label: "World stages",
    items: [
      { year: "2026", title: "First African artist to headline a FIFA World Cup opening ceremony", text: "Mexico City, performing the official tournament song “Dai Dai” with Shakira." },
      { year: "2024", title: "First African artist to perform on the Grammys' main telecast stage", text: "A medley from I Told Them… with Brandy and 21 Savage." },
      { year: "2023", title: "First African artist to perform at a UEFA Champions League final", text: "The kick-off show ahead of the final in Istanbul." },
    ],
  },
  {
    label: "Awards & honours",
    items: [
      { year: "2021", title: "First winner of the Grammy for Best Global Music Album", text: "Twice as Tall took the award in its debut year — the category renamed from Best World Music Album." },
      { year: "2023", title: "First African artist to win a Billboard Music Award as lead artist", text: "Recognised at the Billboard Music Awards as a headline act — the first African to win one in his own right." },
      { year: "2024", title: "First African lead artist nominated for a Grammy outside the global categories", text: "His Best Melodic Rap Performance nod broke African artists into the Grammys' mainstream genre fields." },
      { year: "2026", title: "Most certified African artist worldwide", text: "213 certifications across 22 countries — Gold, Silver, Platinum and Diamond combined — more than any other African artist." },
    ],
  },
  {
    label: "Charts & streaming",
    items: [
      { year: "2026", title: "First African artist to chart the Billboard Hot 100 six years running", text: "An unbroken run from 2021 through 2026." },
      { year: "2026", title: "Most Billboard Hot 100 entries by an African artist", text: "Nine career entries — the record for any African artist, extended by “Dai Dai”." },
      { year: "2024", title: "First African artist to surpass 2 billion UK streams", text: "Recognised with a BRIT Billion award — the first African to reach it." },
      { year: "2024", title: "First African artist to surpass 1 billion UK streams", text: "Awarded his first BRIT Billion plaque." },
      { year: "2022", title: "Highest-charting Nigerian album in Billboard 200 history", text: "Love, Damini debuted at No. 14 — passing the previous Nigerian best, Wizkid's Made in Lagos (No. 28)." },
      { year: "2025", title: "First Nigerian artist to chart five albums on the Billboard 200", text: "Outside, African Giant, Twice as Tall, Love, Damini and No Sign of Weakness." },
      { year: "2024", title: "First African artist with two albums over 1 billion Spotify streams", text: "Love, Damini and African Giant have each crossed a billion streams." },
      { year: "2023", title: "First Afrobeats artist to top the UK Official Albums Chart", text: "I Told Them… debuted at No. 1 in Britain — one better than Love, Damini's record No. 2." },
      { year: "2023", title: "First African artist to earn a UK No. 1 album and No. 1 single", text: "“Own It” (with Stormzy & Ed Sheeran) topped the UK Singles Chart in 2019, and I Told Them… topped the UK Albums Chart in 2023 — no other African artist had held both." },
      { year: "2023", title: "First African artist to reach 1 billion streams on Audiomack", text: "A milestone on the streaming platform where Afrobeats has its biggest home." },
      { year: "2026", title: "First African artist to top the Billboard Colombia Hot 100", text: "“Dai Dai” with Shakira reached No. 1 in Colombia." },
      { year: "2026", title: "First African artist with two No. 1 singles in Belgium", text: "Both “Jerusalema (Remix)” and “Dai Dai” have topped Belgium's Ultratop 50." },
      { year: "2026", title: "First African artist to appear on the Billboard Vietnam Hot 100", text: "“Dai Dai” with Shakira debuted at No. 93 — afrobeats breaking onto Vietnam's chart." },
      { year: "2026", title: "One of only two African artists to top the Billboard Global 200 (Excl. US)", text: "“Dai Dai” (with Shakira) reached No. 1 — Burna Boy joins Rema (“Calm Down”) as the only African acts ever to lead the chart." },
      { year: "2026", title: "First Burna Boy song to top Spotify's Daily Global chart", text: "“Dai Dai” (with Shakira) hit No. 1 on Spotify's Daily Top Songs Global chart — also the highest-peaking FIFA World Cup anthem in the chart's history." },
      { year: "2026", title: "First African artist with 20 songs over 100M Spotify streams", text: "Twenty of his songs have each passed 100 million streams on Spotify — eight of them solo, a record for an African artist." },
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
