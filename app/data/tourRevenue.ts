// Every reported single-show gross by an African artist that we could verify,
// ranked. There is no floor. From 3 Oct 2026 a night is added once its figure
// is read at a body (TouringData's own tables, which carry Billboard Boxscore
// reports) or in two press reports that quote one; rows on the board before
// then carry their own provenance in the comments beside them. Sourced from
// TouringData, cross-checked against press reporting and, for Burna Boy's own
// dates, against the site's own verified tour records — last re-read on the
// date in REVENUE_AS_OF below. This is PER-SHOW gross, distinct from the
// tour-level totals on the main Tours page.
//
// Reported but not on the board yet, each awaiting a second source: Tyla's
// Manila ($502,612) and Singapore ($385,207) dates, which Wikipedia's We
// Wanna Party Tour table prints from Pollstar and nothing else we could read
// does.

/** The month the board was last re-read at its bodies — printed on the hub's
 *  source note and the leaderboard's own; move it whenever the board is. */
export const REVENUE_AS_OF = "October 2026";

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

// NOT ON THE RANKED BOARD, carried below it as stands: Toronto and Montreal,
// February 2024. TouringData/Boxscore report each as ONE combined two-show
// figure and never published a per-night gross, so a per-show board cannot
// rank them. They were carried here as exact halves ($1,400,964 and $952,192)
// from 3 Jul 2026 to 16 Sep 2026 — an even split the body never printed, with
// the headcount it did print dropped as "not reported". The body's own
// figures are in `revenueStands`.
//
// NOT ON THE RANKED BOARD either: Wizkid at The O2 Arena, London, 28 and 29
// November and 1 December 2021 (Made in Lagos Tour). The board carried it
// until 3 Oct 2026 as one show, "$958,489 from 16,938 tickets" — but that is
// the per-night AVERAGE of a sold-out three-night run, not a night anyone
// reported: $2,875,468 / 3 = $958,489 and 50,814 / 3 = 16,938. The press
// reports the run as one figure — Nairametrics (5 Aug 2022): "$2.9 million
// from 50,800 tickets sold" over the three nights; fourthavenew.net (23 Feb
// 2022) likewise — and TheRadar (24 Jun 2024) prints $958,489 as what each
// night earned "approximately". The run goes into `revenueStands` once the
// body's exact figure is read at the body itself; the exact total
// ($2,875,468 / 50,814) has so far been seen only in the title of a Touring
// Data post on X, and a stand here carries the body's own numbers.
export const revenueShows: RevenueShow[] = [
  { artist: "Burna Boy", venue: "London Stadium", city: "London", flag: "🇬🇧", tour: "I Told Them… Tour", year: "2024", tickets: "58,973", revenue: 6147209 },
  { artist: "Burna Boy", venue: "Stade de France", city: "Paris", flag: "🇫🇷", tour: "I Told Them… Tour", year: "2025", tickets: "43,881", revenue: 4528368 },
  { artist: "Fally Ipupa", venue: "La Défense Arena", city: "Paris", flag: "🇫🇷", tour: "Live In Concert", year: "2023", tickets: "39,048", revenue: 3160842 },
  { artist: "Burna Boy", venue: "La Défense Arena", city: "Paris", flag: "🇫🇷", tour: "Love, Damini Tour", year: "2023", tickets: "36,585", revenue: 2863340 },
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
  // The first African concert anywhere in Asia to gross over $1M, and Tyla's
  // own highest-grossing and most-attended show. $1,175,124 is the figure in
  // Wikipedia's We Wanna Party Tour table (citing Pollstar's tour history);
  // Pollstar's own news story of 27 Jul 2026 prints the night as $1,173,026,
  // $2,098 lower — kept as is until the owner decides between them. Her two
  // other reported dates on this run, Manila ($502,612) and Singapore
  // ($385,207), are not on the board yet: Pollstar via Wikipedia is their only
  // source so far, and each awaits a second.
  { artist: "Tyla", venue: "Ariake Arena", city: "Tokyo", flag: "🇯🇵", tour: "We Wanna Party Tour", year: "2025", tickets: "9,050", revenue: 1175124 },
  { artist: "Burna Boy", venue: "Qudos Bank Arena", city: "Sydney", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "10,401", revenue: 1116628 },
  { artist: "Burna Boy", venue: "Mercedes-Benz Arena", city: "Berlin", flag: "🇩🇪", tour: "I Told Them… Tour", year: "2023", tickets: "11,839", revenue: 1089184 },
  { artist: "Wizkid", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "More Love, Less Ego Tour", year: "2022", tickets: "12,901", revenue: 1002709 },
  { artist: "Burna Boy", venue: "Hard Rock Live", city: "Hollywood, FL", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,591", revenue: 965925 },
  // Re-read 3 Oct 2026: TheRadar (24 Jun 2024) prints "$916,954 | Scotiabank Arena".
  { artist: "Asake", venue: "Scotiabank Arena", city: "Toronto", flag: "🇨🇦", tour: "Live in Canada", year: "2024", tickets: "9,652", revenue: 916954 },
  // His, re-checked 3 Oct 2026: BusinessDay (16 Feb 2024, citing ChartsAfrica),
  // NME (22 Feb 2024) and TheRadar (24 Jun 2024) all credit $905,024 to Burna
  // Boy; only Top Charts Africa (10 Feb 2024) prints the pair under Wizkid.
  // The 12,753 headcount is printed only by Top Charts Africa (under Wizkid),
  // so it awaits a body read — as does the pairing with his 31 Jul 2022 night
  // (AJC, 1 Aug 2022), the only candidate date found, which no source prints.
  { artist: "Burna Boy", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "12,753", revenue: 905024 },
  { artist: "Burna Boy", venue: "Oakland Arena", city: "Oakland", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2023", tickets: "9,436", revenue: 885278 },
  { artist: "Davido", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Timeless Tour", year: "2023", tickets: "8,577", revenue: 884147 },
  { artist: "Asake", venue: "Barclays Center", city: "New York", flag: "🇺🇸", tour: "Work of Art Tour", year: "2023", tickets: "8,464", revenue: 866409 },
  // Asake's two Lungu Boy nights (MSG and Capital One, 2024) were not
  // re-found at a body or in the press in the 3 Oct 2026 re-read — TouringData
  // has no Lungu Boy post — and stay pending the owner's hand check.
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
  // TouringData's No Sign of Weakness report (14 Mar 2026); the Oceania leg's
  // published total ($3.1M over 4 shows) only sums with this row in it.
  { artist: "Burna Boy", venue: "Brisbane Entertainment Centre", city: "Brisbane", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "5,473", revenue: 556874 },
  // Pulse Nigeria (13 Nov 2025: "a full house of 8,863 fans contributed
  // $552,822") and BusinessDay (22 Oct 2025, "Davido makes $1.61M from
  // initial North America tour stops"), both quoting Touring Data.
  { artist: "Davido", venue: "Barclays Center", city: "New York", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", tickets: "8,863", revenue: 552822 },
  // Boxscore via press (Oct 2024): her highest-grossing show, and the highest
  // by a Nigerian female artist. No headcount we could verify, so none is shown.
  { artist: "Tems", venue: "Radio City Music Hall", city: "New York", flag: "🇺🇸", tour: "Born in the Wild Tour", year: "2024", revenue: 547697 },
  // The five rows below are 5, 7, 9, 17 and 18 November 2023, read at
  // TouringData's own I Told Them… Tour table (touringdata.org/2025/12/29/
  // burna-boy-i-told-them-tour/, via the Internet Archive, snapshot
  // 20260205190633; same rows in the archived wp-json record of post 27489).
  // Vancouver is also in BusinessDay (14 Jun 2024) and Pop Central (14 Jun
  // 2024); Seattle in Top Charts Africa (10 Feb 2024), which prints Edmonton's
  // pair under a wrong "State Farm Arena" label — the table names Rogers
  // Place. Houston and Austin are in the table alone, read independently
  // twice, the same standing as the board's other TouringData-only rows.
  { artist: "Burna Boy", venue: "Rogers Arena", city: "Vancouver", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2023", tickets: "7,198", revenue: 527395 },
  { artist: "Burna Boy", venue: "Climate Pledge Arena", city: "Seattle", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "5,980", revenue: 495533 },
  { artist: "Burna Boy", venue: "Rogers Place", city: "Edmonton", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2023", tickets: "6,770", revenue: 450087 },
  { artist: "Burna Boy", venue: "Toyota Center", city: "Houston", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "4,217", revenue: 435723 },
  { artist: "Burna Boy", venue: "Moody Center", city: "Austin", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "4,580", revenue: 409544 },
  // Pulse Nigeria (13 Nov 2025: "5,713 tickets sold at 95.2% capacity
  // grossed $364,495") and BusinessDay (22 Oct 2025), both quoting Touring Data.
  { artist: "Davido", venue: "Agganis Arena", city: "Boston", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", tickets: "5,713", revenue: 364495 },
];

/**
 * Stands the body reports as ONE figure for several nights. They are real,
 * verified box-office reports — TouringData's I Told Them… Tour table prints
 * "February 24-25, 2024 · Scotiabank Arena · $2,801,928 · 29,579 (100%) · 2
 * shows" — and belong on the page; they just cannot sit in a ranking of single
 * shows, where a two-night total would place fifth on nights it never had. So
 * they are shown beneath the board as what they are, with the body's numbers
 * and no per-night split invented for them.
 */
export interface RevenueStand {
  artist: string;
  venue: string;
  city: string;
  flag: string;
  tour: string;
  dates: string;
  shows: number;
  tickets: string;
  revenue: number; // USD, the stand's combined gross as the body prints it
}

export const revenueStands: RevenueStand[] = [
  { artist: "Burna Boy", venue: "Scotiabank Arena", city: "Toronto", flag: "🇨🇦", tour: "I Told Them… Tour", dates: "24–25 February 2024", shows: 2, tickets: "29,579", revenue: 2801928 },
  { artist: "Burna Boy", venue: "Centre Bell", city: "Montreal", flag: "🇨🇦", tour: "I Told Them… Tour", dates: "28–29 February 2024", shows: 2, tickets: "26,303", revenue: 1904384 },
];
