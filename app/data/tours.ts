// Tours & live — names, dates and box-office grosses.
// Gross / ticket figures are reported by Billboard Boxscore & Pollstar (the
// numbers TouringData aggregates), cross-checked against press, June 2026.

export interface Tour {
  name: string;
  years: string;
  gross?: string;
  tickets?: string;
  shows?: number;
  note: string;
  record?: boolean;
}

export const tours: Tour[] = [
  {
    name: "No Sign of Weakness Tour",
    years: "2025–26",
    gross: "$3.1M",
    tickets: "31,000",
    shows: 4,
    note: "His biggest North American run to date — first Nigerian artist to headline Red Rocks Amphitheatre, performing on a 360° in-the-round stage, with back-to-back nights in Toronto. The Oceania leg alone grossed $3.1M from 31,000 tickets across 4 shows — the most for an African artist there.",
  },
  {
    name: "I Told Them… Tour",
    years: "2023–24",
    gross: "$30.46M",
    tickets: "302,801",
    shows: 22,
    record: true,
    note: "The highest-grossing tour by an African artist in history — $15.19M across 16 North American shows and $15.27M across 6 European shows, averaging about $1.4M a night. It also included the record-breaking London Stadium concert.",
  },
  {
    name: "Love, Damini Tour",
    years: "2022–23",
    gross: "$11.8M",
    shows: 8,
    note: "The breakthrough run that made him the first African artist to headline a UK stadium (London Stadium), sell out a US stadium (Citi Field) and sell out Madison Square Garden. Eight reported shows grossed roughly $11.8M.",
  },
  {
    name: "African Giant Tour",
    years: "2019",
    note: "The global club-and-theatre run behind the Grammy-nominated African Giant that broke him through to worldwide audiences, ahead of the stadium era.",
  },
];

export interface LiveMoment {
  year: string;
  title: string;
  text: string;
  record?: boolean;
}

export const liveMoments: LiveMoment[] = [
  { year: "2026", title: "FIFA World Cup Opening Ceremony", text: "Headlined the opener in Mexico City with Shakira, performing the official tournament song “Dai Dai.”" },
  { year: "2025", title: "Stade de France, Paris", text: "First African artist to headline the Stade de France (April 2025) — 43,000+ tickets sold." },
  { year: "2025", title: "Red Rocks Amphitheatre", text: "First Nigerian artist to headline the iconic Colorado venue, opening the No Sign of Weakness tour." },
  { year: "2024", title: "London Stadium — African concert record", text: "$6.15M from 58,973 tickets: the highest-grossing single concert by any African artist.", record: true },
  { year: "2024", title: "Grammy Awards Stage", text: "First African artist to perform at the Grammys — a medley from I Told Them… with Brandy and 21 Savage." },
  { year: "2023", title: "London Stadium (sold out)", text: "First African artist to headline a UK stadium (3 June 2023), to about 60,000 fans, on the Love, Damini tour." },
  { year: "2023", title: "Citi Field, New York (sold out)", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
  { year: "2022", title: "Madison Square Garden (sold out)", text: "First African artist to sell out the world's most famous arena." },
];
