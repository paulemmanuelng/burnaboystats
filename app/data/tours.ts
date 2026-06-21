// Tours & live — names, dates and box-office grosses.
// Gross / ticket figures are reported by Billboard Boxscore & Pollstar (the
// numbers TouringData aggregates), cross-checked against press, June 2026.
// `shows` lists documented dates (venue · city · capacity). Capacities are the
// venues' standard listed capacities. Where a full itinerary was never publicly
// documented (early tours) or a routing changed (cancellations), only confirmed
// shows are listed — `partial: true` flags those.

export interface Show {
  date: string;
  venue: string;
  city: string;
  country: string;
  cap?: number;
}

export interface Tour {
  name: string;
  years: string;
  gross?: string;
  tickets?: string;
  shows?: number;
  note: string;
  record?: boolean;
  dates?: Show[];
  partial?: boolean;
}

export const tours: Tour[] = [
  {
    name: "No Sign of Weakness Tour",
    years: "2025–26",
    note: "His most expansive run yet — a genuine world tour across Oceania (Oct 2025), North America (Nov–Dec 2025) and Europe (Jan 2026), performed largely on a 360° in-the-round stage. He became the first Nigerian artist to headline Red Rocks, and the Oceania leg alone grossed $3.1M from 31,000 tickets — the most for an African artist there. (Two US dates — Minneapolis and Chicago — were cancelled.)",
    dates: [
      { date: "Oct 16, 2025", venue: "Sidney Myer Music Bowl", city: "Melbourne", country: "Australia", cap: 12000 },
      { date: "Oct 18, 2025", venue: "Qudos Bank Arena", city: "Sydney", country: "Australia", cap: 21000 },
      { date: "Oct 20, 2025", venue: "Brisbane Entertainment Centre", city: "Brisbane", country: "Australia", cap: 13500 },
      { date: "Oct 24, 2025", venue: "RAC Arena", city: "Perth", country: "Australia", cap: 15500 },
      { date: "Nov 12, 2025", venue: "Red Rocks Amphitheatre", city: "Morrison, CO", country: "USA", cap: 9525 },
      { date: "Nov 16, 2025", venue: "Climate Pledge Arena", city: "Seattle", country: "USA", cap: 18100 },
      { date: "Nov 18, 2025", venue: "Oakland Arena", city: "Oakland", country: "USA", cap: 19500 },
      { date: "Nov 19, 2025", venue: "Intuit Dome", city: "Inglewood", country: "USA", cap: 18000 },
      { date: "Nov 22, 2025", venue: "Toyota Center", city: "Houston", country: "USA", cap: 18055 },
      { date: "Nov 24, 2025", venue: "American Airlines Center", city: "Dallas", country: "USA", cap: 20000 },
      { date: "Dec 3, 2025", venue: "TD Garden", city: "Boston", country: "USA", cap: 19580 },
      { date: "Dec 5, 2025", venue: "Capital One Arena", city: "Washington, D.C.", country: "USA", cap: 20356 },
      { date: "Dec 6, 2025", venue: "UBS Arena", city: "Elmont, NY", country: "USA", cap: 19000 },
      { date: "Dec 8, 2025", venue: "State Farm Arena", city: "Atlanta", country: "USA", cap: 21000 },
      { date: "Dec 10, 2025", venue: "Kia Center", city: "Orlando", country: "USA", cap: 18846 },
      { date: "Dec 12, 2025", venue: "Prudential Center", city: "Newark", country: "USA", cap: 19500 },
      { date: "Dec 15, 2025", venue: "Bell Centre", city: "Montreal", country: "Canada", cap: 21302 },
      { date: "Dec 17, 2025", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Dec 18, 2025", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Jan 13, 2026", venue: "Helsinki Ice Hall", city: "Helsinki", country: "Finland", cap: 8200 },
      { date: "Jan 15, 2026", venue: "Avicii Arena", city: "Stockholm", country: "Sweden", cap: 13850 },
      { date: "Jan 17, 2026", venue: "Royal Arena", city: "Copenhagen", country: "Denmark", cap: 16000 },
      { date: "Jan 20, 2026", venue: "Hallenstadion", city: "Zurich", country: "Switzerland", cap: 15000 },
      { date: "Jan 23, 2026", venue: "ING Arena", city: "Brussels", country: "Belgium", cap: 15000 },
    ],
  },
  {
    name: "I Told Them… Tour",
    years: "2023–24",
    gross: "$30.46M",
    tickets: "302,801",
    shows: 22,
    record: true,
    note: "The highest-grossing tour by an African artist in history — $15.19M across 16 North American shows and $15.27M across 6 European shows, averaging about $1.4M a night. It also included the record-breaking London Stadium concert.",
    dates: [
      { date: "Nov 3, 2023", venue: "BMO Stadium", city: "Los Angeles", country: "USA", cap: 22000 },
      { date: "Nov 5, 2023", venue: "Climate Pledge Arena", city: "Seattle", country: "USA", cap: 18100 },
      { date: "Nov 7, 2023", venue: "Rogers Arena", city: "Vancouver", country: "Canada", cap: 18910 },
      { date: "Nov 9, 2023", venue: "Rogers Place", city: "Edmonton", country: "Canada", cap: 18500 },
      { date: "Nov 12, 2023", venue: "Ball Arena", city: "Denver", country: "USA", cap: 19520 },
      { date: "Nov 17, 2023", venue: "Toyota Center", city: "Houston", country: "USA", cap: 18055 },
      { date: "Nov 18, 2023", venue: "Moody Center", city: "Austin", country: "USA", cap: 15000 },
      { date: "Feb 18, 2024", venue: "Target Center", city: "Minneapolis", country: "USA", cap: 18978 },
      { date: "Feb 21, 2024", venue: "Wintrust Arena", city: "Chicago", country: "USA", cap: 10387 },
      { date: "Feb 22, 2024", venue: "Nationwide Arena", city: "Columbus", country: "USA", cap: 18500 },
      { date: "Feb 24, 2024", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Feb 25, 2024", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Feb 28, 2024", venue: "Bell Centre", city: "Montreal", country: "Canada", cap: 21302 },
      { date: "Feb 29, 2024", venue: "Bell Centre", city: "Montreal", country: "Canada", cap: 21302 },
      { date: "Mar 2, 2024", venue: "TD Garden", city: "Boston", country: "USA", cap: 19580 },
      { date: "Mar 7, 2024", venue: "Capital One Arena", city: "Washington, D.C.", country: "USA", cap: 20356 },
      { date: "Mar 9, 2024", venue: "State Farm Arena", city: "Atlanta", country: "USA", cap: 21000 },
      { date: "Mar 12, 2024", venue: "Hard Rock Live", city: "Hollywood, FL", country: "USA", cap: 7000 },
      { date: "Jun 29, 2024", venue: "London Stadium", city: "London", country: "UK", cap: 80000 },
    ],
  },
  {
    name: "Love, Damini Tour",
    years: "2022–23",
    gross: "$11.8M",
    shows: 8,
    note: "The breakthrough run that made him the first African artist to headline a UK stadium (London Stadium), sell out a US stadium (Citi Field) and sell out Madison Square Garden. Eight reported shows grossed roughly $11.8M.",
    partial: true,
    dates: [
      { date: "Apr 28, 2022", venue: "Madison Square Garden", city: "New York", country: "USA", cap: 20000 },
      { date: "Jun 3, 2023", venue: "London Stadium", city: "London", country: "UK", cap: 80000 },
    ],
  },
  {
    name: "Twice as Tall Tour",
    years: "2020–21",
    note: "Announced for 2020 but reshaped by the pandemic, it ran through 2021 as the Space Drift arena tour — his first run as a Grammy winner — taking in his debut headline show at London's O2 Arena, a Hollywood Bowl debut, and an Amsterdam night that sold out in 19 minutes.",
    dates: [
      { date: "Aug 27, 2021", venue: "The O2 Arena", city: "London", country: "UK", cap: 20000 },
      { date: "Oct 8, 2021", venue: "Hollywood Bowl", city: "Los Angeles", country: "USA", cap: 17500 },
      { date: "Nov 10, 2021", venue: "Accor Arena", city: "Paris", country: "France", cap: 20300 },
      { date: "Nov 15, 2021", venue: "Ziggo Dome", city: "Amsterdam", country: "Netherlands", cap: 17000 },
      { date: "Nov 20, 2021", venue: "Rotterdam Ahoy", city: "Rotterdam", country: "Netherlands", cap: 16000 },
    ],
  },
  {
    name: "African Giant Tour",
    years: "2019",
    note: "The global club-and-theatre run behind the Grammy-nominated African Giant — including a second leg, the African Giant Returns tour — that broke him through to worldwide audiences ahead of the stadium era. A full itinerary was never published.",
  },
  {
    name: "Life on the Outside Tour",
    years: "2018",
    note: "His first headline tour of the major-label era, behind Outside — his Atlantic Records debut — as he built a touring audience beyond Nigeria. A full itinerary was never published.",
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
  { year: "2025", title: "Stade de France, Paris", text: "First African artist to headline the Stade de France (April 2025) — a $4.53M gross." },
  { year: "2025", title: "Red Rocks Amphitheatre", text: "First Nigerian artist to headline the iconic Colorado venue, opening the No Sign of Weakness tour." },
  { year: "2024", title: "London Stadium — African concert record", text: "$6.15M from 58,973 tickets: the highest-grossing single concert by any African artist.", record: true },
  { year: "2024", title: "Grammy Awards Stage", text: "First African artist to perform at the Grammys — a medley from I Told Them… with Brandy and 21 Savage." },
  { year: "2023", title: "London Stadium (sold out)", text: "First African artist to headline a UK stadium (3 June 2023), to about 60,000 fans, on the Love, Damini tour." },
  { year: "2023", title: "Citi Field, New York (sold out)", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
  { year: "2022", title: "Madison Square Garden (sold out)", text: "First African artist to sell out the world's most famous arena." },
];
