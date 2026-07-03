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
    note: "His most expansive run yet — a genuine world tour across Oceania (Oct 2025), North America (Nov–Dec 2025) and Europe (Jan 2026), performed largely on a 360° in-the-round stage. He became the first Nigerian artist to headline Red Rocks, and the Oceania leg alone grossed $3.1M from 31,000 tickets — the most for an African artist there.",
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
      { date: "Dec 12, 2025", venue: "Prudential Center", city: "Newark", country: "USA", cap: 19500 },
      { date: "Dec 15, 2025", venue: "Bell Centre", city: "Montreal", country: "Canada", cap: 21302 },
      { date: "Dec 17, 2025", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Dec 18, 2025", venue: "Scotiabank Arena", city: "Toronto", country: "Canada", cap: 19800 },
      { date: "Jan 15, 2026", venue: "Avicii Arena", city: "Stockholm", country: "Sweden", cap: 13850 },
      { date: "Jan 17, 2026", venue: "Royal Arena", city: "Copenhagen", country: "Denmark", cap: 16000 },
      { date: "Jan 20, 2026", venue: "Hallenstadion", city: "Zurich", country: "Switzerland", cap: 15000 },
      { date: "Jan 23, 2026", venue: "ING Arena", city: "Brussels", country: "Belgium", cap: 15000 },
    ],
  },
  {
    name: "I Told Them… Tour",
    years: "2023–25",
    gross: "$30.46M",
    tickets: "302,801",
    record: true,
    note: "The highest-grossing tour by an African artist in history — $30.46M from 302,801 tickets across North America and Europe, averaging about $1.4M a night. It also included the record-breaking London Stadium concert.",
    dates: [
      { date: "Nov 3, 2023", venue: "BMO Stadium", city: "Los Angeles", country: "USA", cap: 22000 },
      { date: "Nov 5, 2023", venue: "Climate Pledge Arena", city: "Seattle", country: "USA", cap: 18100 },
      { date: "Nov 7, 2023", venue: "Rogers Arena", city: "Vancouver", country: "Canada", cap: 18910 },
      { date: "Nov 9, 2023", venue: "Rogers Place", city: "Edmonton", country: "Canada", cap: 18500 },
      { date: "Nov 12, 2023", venue: "Ball Arena", city: "Denver", country: "USA", cap: 19520 },
      { date: "Nov 17, 2023", venue: "Toyota Center", city: "Houston", country: "USA", cap: 18055 },
      { date: "Nov 18, 2023", venue: "Moody Center", city: "Austin", country: "USA", cap: 15000 },
      { date: "Dec 9, 2023", venue: "Mercedes-Benz Arena", city: "Berlin", country: "Germany" },
      { date: "Dec 10, 2023", venue: "Lanxess Arena", city: "Cologne", country: "Germany" },
      { date: "Dec 12, 2023", venue: "Sportpaleis", city: "Antwerp", country: "Belgium" },
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
      { date: "Mar 11, 2024", venue: "Amalie Arena", city: "Tampa, FL", country: "USA" },
      { date: "Mar 12, 2024", venue: "Hard Rock Live", city: "Hollywood, FL", country: "USA", cap: 7000 },
      { date: "Jun 29, 2024", venue: "London Stadium", city: "London", country: "UK", cap: 80000 },
      { date: "Apr 18, 2025", venue: "Stade de France", city: "Paris", country: "France", cap: 80000 },
      { date: "Apr 21, 2025", venue: "Co-op Live", city: "Manchester", country: "UK", cap: 23000 },
      { date: "Jul 5, 2025", venue: "Waldbühne", city: "Berlin", country: "Germany", cap: 22000 },
      { date: "Jul 6, 2025", venue: "SparkassenPark", city: "Mönchengladbach", country: "Germany", cap: 21000 },
    ],
  },
  {
    name: "Love, Damini Tour",
    years: "2022–23",
    gross: "$11.8M",
    note: "The breakthrough run behind the album — off the back of his Madison Square Garden debut, it made him the first African artist to headline a UK stadium (London Stadium) and to sell out a US stadium (Citi Field). The tour grossed roughly $11.8M across its dates.",
    dates: [
      { date: "Jul 17, 2022", venue: "Tipsy All White Beach Party", city: "Bridgetown", country: "Barbados" },
      { date: "Jul 21, 2022", venue: "Aretha Franklin Amphitheatre", city: "Detroit", country: "USA", cap: 6000 },
      { date: "Jul 22, 2022", venue: "The Armory", city: "Minneapolis", country: "USA", cap: 8400 },
      { date: "Jul 23, 2022", venue: "Huntington Bank Pavilion at Northerly Island", city: "Chicago", country: "USA", cap: 30000 },
      { date: "Jul 24, 2022", venue: "Toyota Center", city: "Houston", country: "USA", cap: 18055 },
      { date: "Jul 27, 2022", venue: "The Pavilion at Toyota Music Factory", city: "Irving", country: "USA", cap: 8000 },
      { date: "Jul 29, 2022", venue: "Leader Bank Pavilion", city: "Boston", country: "USA", cap: 5000 },
      { date: "Jul 30, 2022", venue: "Osheaga Festival", city: "Montreal", country: "Canada" },
      { date: "Jul 31, 2022", venue: "State Farm Arena", city: "Atlanta", country: "USA", cap: 21000 },
      { date: "Nov 30, 2022", venue: "Hallenstadion", city: "Zurich", country: "Switzerland", cap: 15000 },
      { date: "Dec 8, 2022", venue: "Capital One Arena", city: "Washington, D.C.", country: "USA", cap: 20356 },
      { date: "Dec 9, 2022", venue: "Addition Financial Arena", city: "Orlando", country: "USA" },
      { date: "Apr 8, 2023", venue: "Oakland Arena", city: "Oakland", country: "USA", cap: 19500 },
      { date: "Jun 3, 2023", venue: "London Stadium", city: "London", country: "UK", cap: 80000 },
      { date: "Jul 8, 2023", venue: "Citi Field", city: "New York", country: "USA", cap: 41922 },
    ],
  },
  {
    name: "Space Drift World Tour",
    years: "2021–22",
    note: "His first run as a Grammy winner — a pandemic-forced repackaging of the shelved Twice as Tall tour into a new global trek celebrating both the African Giant and Twice as Tall eras. Highlights: his O2 Arena headline debut, becoming the first Nigerian to headline the Hollywood Bowl, an Amsterdam night that sold out the Ziggo Dome in 19 minutes — making him the first African artist ever to sell out the venue — a Lagos homecoming, and a Madison Square Garden finale — the first Nigerian artist to sell out the venue.",
    partial: true,
    dates: [
      { date: "Aug 27, 2021", venue: "The O2 Arena", city: "London", country: "UK", cap: 20000 },
      { date: "Oct 8, 2021", venue: "Hollywood Bowl", city: "Los Angeles", country: "USA", cap: 17500 },
      { date: "Nov 10, 2021", venue: "Accor Arena", city: "Paris", country: "France", cap: 20300 },
      { date: "Dec 27, 2021", venue: "Eko Convention Centre (The Live Experience)", city: "Lagos", country: "Nigeria" },
      { date: "Mar 18, 2022", venue: "Geneva Arena", city: "Geneva", country: "Switzerland", cap: 9500 },
      { date: "Apr 12, 2022", venue: "Rotterdam Ahoy", city: "Rotterdam", country: "Netherlands", cap: 16000 },
      { date: "Apr 14, 2022", venue: "Ziggo Dome", city: "Amsterdam", country: "Netherlands", cap: 17000 },
      { date: "Apr 28, 2022", venue: "Madison Square Garden (One Night in Space)", city: "New York", country: "USA", cap: 20000 },
    ],
  },
  {
    name: "African Giant Tour",
    years: "2019",
    note: "The breakthrough run behind the Grammy-nominated African Giant. Its main leg — the African Giant Returns Tour — swept theatres and clubs across Canada, the US and Europe in late 2019, opening at Toronto's Rebel and closing in Leicester, breaking him through to worldwide audiences ahead of the stadium era.",
    dates: [
      { date: "Aug 9, 2019", venue: "Rebel", city: "Toronto", country: "Canada", cap: 2500 },
      { date: "Aug 11, 2019", venue: "L'Olympia", city: "Montreal", country: "Canada", cap: 2300 },
      { date: "Aug 16, 2019", venue: "Union Hall", city: "Edmonton", country: "Canada" },
      { date: "Aug 17, 2019", venue: "Vogue Theatre", city: "Vancouver", country: "Canada", cap: 1150 },
      { date: "Aug 28, 2019", venue: "House of Blues", city: "San Diego", country: "USA", cap: 1100 },
      { date: "Aug 29, 2019", venue: "The Wiltern", city: "Los Angeles", country: "USA", cap: 1850 },
      { date: "Sep 4, 2019", venue: "Summit", city: "Denver", country: "USA" },
      { date: "Sep 8, 2019", venue: "House of Blues", city: "Chicago", country: "USA", cap: 1300 },
      { date: "Sep 10, 2019", venue: "Buckhead Theatre", city: "Atlanta", country: "USA", cap: 2500 },
      { date: "Sep 13, 2019", venue: "Theatre of Living Arts", city: "Philadelphia", country: "USA", cap: 1000 },
      { date: "Sep 15, 2019", venue: "The Fillmore Silver Spring", city: "Washington, D.C.", country: "USA", cap: 2000 },
      { date: "Sep 20, 2019", venue: "The Fillmore", city: "San Francisco", country: "USA", cap: 1150 },
      { date: "Oct 20, 2019", venue: "Palais 12", city: "Brussels", country: "Belgium" },
      { date: "Oct 24, 2019", venue: "AFAS Live", city: "Amsterdam", country: "Netherlands", cap: 6000 },
      { date: "Nov 3, 2019", venue: "The SSE Arena, Wembley", city: "London", country: "UK", cap: 12500 },
      { date: "Nov 6, 2019", venue: "Albert Hall", city: "Manchester", country: "UK", cap: 2500 },
      { date: "Nov 9, 2019", venue: "O2 Academy", city: "Leicester", country: "UK", cap: 1450 },
    ],
  },
  {
    name: "Life on the Outside Tour",
    years: "2018",
    note: "His first international headline tour, behind Outside — his Atlantic Records debut. An intimate club-and-theatre run across North America in early summer, then a sold-out UK leg in the autumn capped by a packed O2 Academy Brixton — growing his audience beyond Nigeria, just before the African Giant breakthrough.",
    dates: [
      { date: "May 30, 2018", venue: "Howard Theatre", city: "Washington, D.C.", country: "USA", cap: 1100 },
      { date: "May 31, 2018", venue: "The Foundry", city: "Philadelphia", country: "USA", cap: 450 },
      { date: "Jun 2, 2018", venue: "Gramercy Theatre", city: "New York", country: "USA", cap: 650 },
      { date: "Jun 3, 2018", venue: "Brighton Music Hall", city: "Boston", country: "USA", cap: 480 },
      { date: "Jun 5, 2018", venue: "The Velvet Underground", city: "Toronto", country: "Canada" },
      { date: "Jun 6, 2018", venue: "Reggies", city: "Chicago", country: "USA" },
      { date: "Jun 8, 2018", venue: "Complex", city: "Oakland", country: "USA" },
      { date: "Jun 10, 2018", venue: "The Roxy", city: "Los Angeles", country: "USA", cap: 500 },
      { date: "Jun 14, 2018", venue: "House of Blues (Bronze Peacock)", city: "Houston", country: "USA" },
      { date: "Jun 17, 2018", venue: "House of Blues (Cambridge Room)", city: "Dallas", country: "USA" },
      { date: "Sep 20, 2018", venue: "The Garage", city: "Glasgow", country: "UK", cap: 600 },
      { date: "Sep 22, 2018", venue: "O2 Academy", city: "Newcastle", country: "UK", cap: 2000 },
      { date: "Sep 23, 2018", venue: "O2 Academy", city: "Leeds", country: "UK", cap: 2300 },
      { date: "Sep 24, 2018", venue: "O2 Ritz", city: "Manchester", country: "UK", cap: 1500 },
      { date: "Oct 7, 2018", venue: "O2 Academy Brixton", city: "London", country: "UK", cap: 4900 },
      { date: "Oct 24, 2018", venue: "Thekla", city: "Bristol", country: "UK", cap: 400 },
      { date: "Oct 25, 2018", venue: "O2 Academy 2", city: "Birmingham", country: "UK", cap: 600 },
    ],
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
  { year: "2026", title: "AFCON 2025 Fan Zone grand finale", text: "Headlined “The AFCON Last Dance” in Rabat (16 Jan 2026), closing out the Africa Cup of Nations hosted by Morocco — on a bill with Stormzy, Stonebwoy and Jaylann." },
  { year: "2025", title: "Stade de France, Paris", text: "First African artist to headline the Stade de France (April 2025) — a $4.53M gross." },
  { year: "2025", title: "Red Rocks Amphitheatre", text: "First Nigerian artist to headline the iconic Colorado venue, opening the No Sign of Weakness tour." },
  { year: "2024", title: "London Stadium — African concert record", text: "$6.15M from 58,973 tickets: the highest-grossing single concert by any African artist.", record: true },
  { year: "2024", title: "Grammy Awards Stage", text: "First African artist to perform on the Grammys' main telecast stage — a medley from I Told Them… with Brandy and 21 Savage." },
  { year: "2023", title: "London Stadium (sold out)", text: "First African artist to headline a UK stadium (3 June 2023), to about 60,000 fans, on the Love, Damini tour." },
  { year: "2023", title: "Citi Field, New York (sold out)", text: "First African artist to headline and sell out a stadium in the United States." },
  { year: "2023", title: "UEFA Champions League Final", text: "First African artist to perform at the Champions League final kick-off show, in Istanbul." },
  { year: "2023", title: "NBA All-Star Game halftime show", text: "Headlined an Afrobeats halftime show at the 2023 NBA All-Star Game in Salt Lake City, alongside Tems and Rema." },
  { year: "2022", title: "Madison Square Garden (sold out)", text: "First African artist to sell out the world's most famous arena." },
  { year: "2022", title: "Billboard Music Awards", text: "Performed at the 2022 Billboard Music Awards in Las Vegas." },
  { year: "2022", title: "National Stadium, Jamaica", text: "His first concert in Jamaica — about 19,000 fans in Kingston, joined by Popcaan and Lila Iké, staking his claim in reggae's home." },
  { year: "2021", title: "Grammy Awards Premiere Ceremony", text: "Performed “Ye,” “Onyeka” and “Level Up” at the 2021 pre-telecast ceremony — the year Twice as Tall won Best Global Music Album." },
  { year: "2020", title: "One World: Together at Home", text: "Performed “African Giant” and “Hallelujah” from Lagos on the Global Citizen/WHO Covid-19 benefit special curated by Lady Gaga, spotlighting relief efforts across Africa." },
];

// Festivals & one-off shows (year-level; not single-venue tour dates).
// Personal headline tours are NOT listed here — they live in `tours` above.
export interface Festival {
  year: string;
  name: string;
  location: string;
  note: string;
}

// Festivals Burna Boy has HEADLINED (topped the bill).
export const festivals: Festival[] = [
  { year: "2023", name: "St Kitts Music Festival", location: "St Kitts & Nevis", note: "The event's first-ever African headlining artist, anchoring the multi-day lineup." },
  { year: "2024", name: "Mawazine Festival", location: "Rabat, Morocco", note: "Headlined the OLM Souissi main stage at one of the world's largest festivals, on a 2024 bill that also featured Nicki Minaj, Kylie Minogue and Camila Cabello." },
  { year: "2025", name: "Flow Festival", location: "Helsinki, Finland", note: "A Main Stage headliner, topping one of the three nights — on a bill with Charli XCX, FKA twigs, Little Simz and Air." },
  { year: "2019", name: "Afro Nation", location: "Portimão, Portugal", note: "A headliner at the festival's inaugural edition, sharing the Saturday bill with Davido (Wizkid closed Sunday)." },
  { year: "2022", name: "Afro Nation", location: "Portimão, Portugal", note: "Closed the festival (3 July) with what press called a headline performance, after Davido and Wizkid topped the earlier nights." },
  { year: "2023", name: "Afro Nation", location: "Portimão, Portugal", note: "Headlined the opening night (28 June), with Wizkid and Asake the following night and 50 Cent and Davido closing the festival." },
  { year: "2023", name: "Afro Nation", location: "Miami, US", note: "Closed day one of the festival's Miami debut, with Wizkid headlining day two." },
  { year: "2023", name: "Afro Nation", location: "Detroit, US", note: "Closed day one with an hour-long set, alongside fellow headliner Davido, who closed day two." },
  { year: "2025", name: "Afro Nation", location: "Portimão, Portugal", note: "A main-stage headliner of the world's biggest Afrobeats festival (5th edition, July 2025), topping the bill alongside Davido and Mary J. Blige." },
  { year: "2026", name: "Afro Nation", location: "Portimão, Portugal", note: "Headliner of the main “Lit Stage,” topping the opening night (3 July) alongside Tyla — with Asake and Wizkid headlining the nights after." },
  { year: "2026", name: "Reggae Land", location: "Milton Keynes, UK", note: "Headlining the festival's first-ever Friday at the 65,000-capacity National Bowl, topping a bill with Masicka, Christopher Martin and Julian Marley." },
  { year: "2025", name: "GTCO Music Concert", location: "Accra, Ghana", note: "A headline act at the free second edition (19 Dec 2025) before 30,000+ at the Accra Sports Stadium — on a stacked pan-African bill with Shatta Wale, Sarkodie, Ayra Starr, Patoranking, Fireboy DML, Joeboy, King Promise and R2Bees." },
  { year: "2025", name: "MadfunXperience", location: "Nairobi, Kenya", note: "Headlined the Uhuru Gardens show (1 Mar 2025) with his full band, The Outsiders — joined on stage by Sauti Sol, with Bensoul, Charisma and Vigro Deep supporting." },
  { year: "2022", name: "DStv Delicious Festival", location: "Johannesburg, South Africa", note: "Headlined the main stage at the food-and-music festival (Kyalami, Sept 2022), on a bill that also featured Babyface, Digable Planets and Stereo MCs." },
  { year: "2016", name: "NATIVELAND Festival", location: "Muri Okunola Park, Lagos", note: "A headliner of the inaugural NATIVELAND (22 Dec 2016), The NATIVE magazine's flagship Lagos festival — on a bill with Skepta, YCEE and Maleek Berry." },
  { year: "2025", name: "Afrosoul Festival", location: "Go Media Stadium, Auckland", note: "Headlined the inaugural Afrosoul (11 Oct 2025) — the first African artist to headline a stadium concert in New Zealand, opening his Oceania run." },
  { year: "2022", name: "World Creole Music Festival", location: "Windsor Park Stadium, Roseau, Dominica", note: "Headlined night two of Dominica's flagship festival (Oct 2022)." },
  { year: "2024", name: "Sunny Hill Festival", location: "Pristina, Kosovo", note: "Headlined Kosovo's biggest festival (2024) before ~15,000 — wrapped in the Kosovo flag." },
  { year: "2024", name: "Stell'Air Festival", location: "Abidjan, Côte d'Ivoire", note: "Drew about 20,000 during AFCON 2024 (Jan 2024)." },
  { year: "2024", name: "Saint Lucia Jazz Festival", location: "Castries, Saint Lucia", note: "A full-band headline set at the island's flagship festival (May 2024)." },
  { year: "2022", name: "Festi Dakar", location: "Grand Théâtre, Dakar, Senegal", note: "Closed the festival's third edition (Feb 2022) — his first Dakar concert." },
  { year: "2022", name: "TOMAC Festival", location: "Plymouth Recreation Ground, Tobago", note: "Headlined Tobago's Music, Arts & Culture festival through torrential rain (Oct 2022)." },
  { year: "2021", name: "SNF Nostos Festival", location: "Athens, Greece", note: "His Greece debut (Aug 2021)." },
  { year: "2025", name: "Coca-Cola Food Fest", location: "Tribeca Mall, Mauritius", note: "Billed as the biggest live show Mauritius had ever seen (2 Aug 2025)." },
];

// Other festivals & one-off shows he performed at (NOT as the headliner).
export const otherShows: Festival[] = [
  { year: "2019", name: "Coachella", location: "Indio, USA", note: "His Coachella debut, performing across both weekends on the Mojave stage." },
  { year: "2021", name: "Governors Ball Music Festival", location: "New York, USA", note: "A Sunday main-stage set at Citi Field, on a bill headlined by Post Malone." },
  { year: "2022", name: "Global Citizen Festival", location: "New York, USA", note: "Performed on the Great Lawn in Central Park at the 10th-anniversary festival." },
  { year: "2023", name: "Coachella", location: "Indio, USA", note: "Returned to Coachella for a second appearance, on a bigger stage than his 2019 debut." },
  { year: "2023", name: "Roskilde Festival", location: "Roskilde, Denmark", note: "Played one of Europe's largest festivals to a huge crowd." },
  { year: "2024", name: "Glastonbury Festival", location: "Worthy Farm, UK", note: "A primetime Pyramid Stage set, immediately before Sunday headliner SZA, on a bill topped by Dua Lipa and Coldplay." },
  { year: "2025", name: "Wireless Festival", location: "London, UK", note: "A top-billed name on the Sunday line-up at Finsbury Park, on a bill headlined by Drake — who headlined all three days." },
  { year: "2025", name: "The Town", location: "São Paulo, Brazil", note: "His first show in Brazil — a Skyline Stage set at the giant São Paulo festival (Autódromo de Interlagos, 6 Sept 2025), on a day topped by headliner Travis Scott, before a roughly 100,000-strong daily crowd." },
  { year: "2019", name: "One Africa Music Fest", location: "Dubai, UAE", note: "A co-headline slot at the Afrobeats festival's Dubai edition (Festival Arena, 15 Nov 2019), on a bill with Wizkid, Tiwa Savage, Tekno, Teni and 2Baba, hosted by Banky W." },
  { year: "2024", name: "Untold Festival", location: "Cluj-Napoca, Romania", note: "Performed at one of Europe's biggest festivals (Aug 2024) — his Romania debut." },
  { year: "2024", name: "Superbloom Festival", location: "Munich, Germany", note: "A set at the Munich festival in the Olympiapark (8 Sept 2024)." },
  { year: "2024", name: "MEO Kalorama", location: "Lisbon, Portugal", note: "A set at the Lisbon festival in Parque da Bela Vista (Aug 2024)." },
  { year: "2024", name: "Stavern Festival", location: "Stavern, Norway", note: "His Norway debut — a festival set in summer 2024." },
];

// Solo headline concerts — his own standalone shows (not festival slots, and not
// dates within a routed multi-city tour, which live in `tours` above).
export const concerts: Festival[] = [
  { year: "2026", name: "Burna Boy Live in El Gouna", location: "El Gouna Conference & Cultural Center, Egypt", note: "His first-ever performance in Egypt (11 April 2026), blending hits like On the Low and Gbona with cuts from No Sign of Weakness." },
  { year: "2022", name: "Burna Boy Live in Harare", location: "Belgravia Sports Club, Zimbabwe", note: "His Zimbabwe debut (4 June 2022) — also remembered for declining to wear a ruling-party (ZANU-PF) scarf, refusing any political endorsement." },
  { year: "2021", name: "Burna Boy: The Live Experience", location: "Eko Convention Centre, Lagos", note: "His sold-out Lagos homecoming concert — a hometown spectacle staged as a newly-crowned Grammy winner." },
  { year: "2022", name: "National Stadium, Kingston", location: "Jamaica", note: "His first-ever headline concert in Jamaica — about 19,000 fans, joined on stage by Popcaan and Lila Iké, planting his flag in the home of reggae and dancehall." },
  { year: "2019", name: "Burna Boy Xperience", location: "Sheraton Gardens, Kampala", note: "A packed Kampala headline concert (22 March 2019) — his return to Uganda after debuting at Namboole Stadium's Club MegaFest in 2014." },
  { year: "2025", name: "Burna Boy Live in Madrid", location: "FITZ, Madrid", note: "Two nights in the Spanish capital (5–6 Nov 2025)." },
  { year: "2020", name: "Burna Boy Live in Rome", location: "Atlantico, Rome", note: "His first-ever performance in Italy (7 Feb 2020)." },
  { year: "2024", name: "Unforgettable Concert", location: "Guyana National Stadium, Providence", note: "Headlined the biggest concert in Guyana's history (1 May 2024) — about 20,000 fans, the country's most expensive show ever staged." },
  { year: "2019", name: "Burna Boy Experience", location: "Intare Conference Arena, Kigali", note: "A sold-out Kigali headline concert (23 March 2019)." },
  { year: "2022", name: "Burna Boy Live in Suriname", location: "Paramaribo", note: "His first concert in Suriname (Dec 2022)." },
];
