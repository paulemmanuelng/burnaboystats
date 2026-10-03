// Every reported single-show gross by an African artist that we could verify,
// ranked. There is no floor. From 3 Oct 2026 a night is added once its figure
// is read at a body — TouringData, which republishes Billboard Boxscore and
// Pollstar reports, read at its own site archive or in its own posts on X
// (read from the owner's screenshots, 3 Oct 2026, each batch reconciled
// against TD's running totals; the evidence notes are in the owner's
// boxoffice/paul-x-screens folder, one *-read.md per artist) — or in two
// press reports that quote one; rows on the board before then carry their
// own provenance in the comments beside them. Cross-checked against press
// reporting and, for Burna Boy's own dates, against the site's own verified
// tour records — last re-read on the date in REVENUE_AS_OF below. This is
// PER-SHOW gross, distinct from the tour-level totals on the main Tours page.
//
// Reported but not on the board, pending a body read: Tiwa Savage at O2
// Academy Brixton, London, 2022 ($344,500) — printed by Top Charts Africa
// only, and not one of the sixteen Water & Garri nights in TouringData's own
// posts.

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
// night earned "approximately". The run is in `revenueStands` at the body's
// own figure: TouringData's post of 26 May 2022 (MADE IN LAGOS, "$2,875,468
// Revenue ($958,489 avg.) / 50,814 (100%) Tickets Sold (16,938 avg.) / 3/20
// Reported Shows (O2 Arena, London)"), read from the owner's screenshot
// (3 Oct 2026; wizkid-read.md). The dates are the press's.
export const revenueShows: RevenueShow[] = [
  { artist: "Burna Boy", venue: "London Stadium", city: "London", flag: "🇬🇧", tour: "I Told Them… Tour", year: "2024", tickets: "58,973", revenue: 6147209 },
  { artist: "Burna Boy", venue: "Stade de France", city: "Paris", flag: "🇫🇷", tour: "I Told Them… Tour", year: "2025", tickets: "43,881", revenue: 4528368 },
  // The tour name is TouringData's: its own X post of 16 Feb 2024 files the
  // night under FORMULE, read from the owner's screenshot (3 Oct 2026;
  // fally-read.md). The board had it as "Live In Concert".
  { artist: "Fally Ipupa", venue: "La Défense Arena", city: "Paris", flag: "🇫🇷", tour: "Formule Tour", year: "2023", tickets: "39,048", revenue: 3160842 },
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
  // own highest-grossing and most-attended show. $1,175,124 / 9,050 is
  // TouringData's own figure (posts of 29 Jul 2026, read from the owner's
  // screenshot, 3 Oct 2026; tyla-read.md) and Wikipedia's We Wanna Party Tour
  // table's (from Pollstar). Pollstar's news story of 27 Jul 2026 prints
  // $1,173,026 — a different body; the board follows TouringData. Her Manila
  // and Singapore nights from the same posts are on the board too.
  { artist: "Tyla", venue: "Ariake Arena", city: "Tokyo", flag: "🇯🇵", tour: "We Wanna Party Tour", year: "2025", tickets: "9,050", revenue: 1175124 },
  { artist: "Burna Boy", venue: "Qudos Bank Arena", city: "Sydney", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "10,401", revenue: 1116628 },
  { artist: "Burna Boy", venue: "Mercedes-Benz Arena", city: "Berlin", flag: "🇩🇪", tour: "I Told Them… Tour", year: "2023", tickets: "11,839", revenue: 1089184 },
  { artist: "Wizkid", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "More Love, Less Ego Tour", year: "2022", tickets: "12,901", revenue: 1002709 },
  { artist: "Burna Boy", venue: "Hard Rock Live", city: "Hollywood, FL", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,591", revenue: 965925 },
  // Re-read 3 Oct 2026: TheRadar (24 Jun 2024) prints "$916,954 | Scotiabank Arena".
  { artist: "Asake", venue: "Scotiabank Arena", city: "Toronto", flag: "🇨🇦", tour: "Live in Canada", year: "2024", tickets: "9,652", revenue: 916954 },
  // His, settled by the body: TouringData's own X post of 3 Aug 2022 files
  // $905,024 / 12,753 (100%) under LOVE, DAMINI, @burnaboy, 1/7 reported —
  // his 31 Jul 2022 night — read from the owner's screenshot (3 Oct 2026;
  // love-damini-read.md). BusinessDay (16 Feb 2024), NME (22 Feb 2024) and
  // TheRadar (24 Jun 2024) agree; Top Charts Africa's "Wizkid" label is wrong.
  { artist: "Burna Boy", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "12,753", revenue: 905024 },
  { artist: "Burna Boy", venue: "Oakland Arena", city: "Oakland", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2023", tickets: "9,436", revenue: 885278 },
  { artist: "Davido", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Timeless Tour", year: "2023", tickets: "8,577", revenue: 884147 },
  { artist: "Asake", venue: "Barclays Center", city: "New York", flag: "🇺🇸", tour: "Work of Art Tour", year: "2023", tickets: "8,464", revenue: 866409 },
  // Asake's two Lungu Boy nights, confirmed by TouringData's own X posts of
  // 8 Nov 2024 (MSG) and 26 Mar 2025 (Capital One), read from the owner's
  // screenshot (3 Oct 2026); both reconcile with TD's running totals
  // (asake-read.md).
  { artist: "Asake", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "11,096", revenue: 860761 },
  { artist: "Asake", venue: "Capital One Arena", city: "Washington, D.C.", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "8,690", revenue: 823316 },
  { artist: "Burna Boy", venue: "Hallenstadion", city: "Zurich", flag: "🇨🇭", tour: "Love, Damini Tour", year: "2022", tickets: "8,827", revenue: 822939 },
  { artist: "Davido", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "Timeless Tour", year: "2024", tickets: "10,185", revenue: 809689 },
  { artist: "Burna Boy", venue: "Sidney Myer Music Bowl", city: "Melbourne", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "8,237", revenue: 805250 },
  // The 10,595 headcount is TouringData's own X post of 7 Aug 2025, read from
  // the owner's screenshot (3 Oct 2026; rema-read.md). "HEIS Tour", one
  // spelling for the tour across its three rows, as the album is titled.
  { artist: "Rema", venue: "Madison Square Garden", city: "New York", flag: "🇺🇸", tour: "HEIS Tour", year: "2025", tickets: "10,595", revenue: 793707 },
  { artist: "Burna Boy", venue: "Sportpaleis", city: "Antwerp", flag: "🇧🇪", tour: "I Told Them… Tour", year: "2023", tickets: "8,266", revenue: 781236 },
  // The 11,024 headcount is TouringData's own X post of 21 Oct 2025, read from
  // the owner's screenshot (3 Oct 2026; davido-read.md).
  { artist: "Davido", venue: "Merriweather Post Pavilion", city: "Columbia, MD", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", tickets: "11,024", revenue: 695845 },
  { artist: "Burna Boy", venue: "Wintrust Arena", city: "Chicago", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,775", revenue: 674283 },
  { artist: "Burna Boy", venue: "RAC Arena", city: "Perth", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "6,835", revenue: 644871 },
  { artist: "Burna Boy", venue: "Addition Financial Arena", city: "Orlando", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2022", tickets: "7,137", revenue: 636923 },
  { artist: "Davido", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "A.W.A.Y Festival", year: "2023", tickets: "11,246", revenue: 599343 },
  { artist: "Burna Boy", venue: "Amalie Arena", city: "Tampa, FL", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2024", tickets: "5,890", revenue: 580424 },
  // TouringData's own X post of 16 Jun 2023 (LOVE, DAMINI; the show of 12 Apr
  // 2023), read from the owner's screenshot (3 Oct 2026); the batch reconciles
  // with TD's 6/23 total of $5,244,021 / 58,891 (love-damini-read.md).
  { artist: "Burna Boy", venue: "American Airlines Center", city: "Dallas", flag: "🇺🇸", tour: "Love, Damini Tour", year: "2023", tickets: "6,050", revenue: 559332 },
  // TouringData's No Sign of Weakness report (14 Mar 2026); the Oceania leg's
  // published total ($3.1M over 4 shows) only sums with this row in it.
  { artist: "Burna Boy", venue: "Brisbane Entertainment Centre", city: "Brisbane", flag: "🇦🇺", tour: "No Sign of Weakness Tour", year: "2025", tickets: "5,473", revenue: 556874 },
  // Pulse Nigeria (13 Nov 2025: "a full house of 8,863 fans contributed
  // $552,822") and BusinessDay (22 Oct 2025, "Davido makes $1.61M from
  // initial North America tour stops"), both quoting Touring Data.
  { artist: "Davido", venue: "Barclays Center", city: "New York", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", tickets: "8,863", revenue: 552822 },
  // Boxscore via press (Oct 2024): her highest-grossing show, and the highest
  // by a Nigerian female artist. The 5,956 (100%) headcount is TouringData's
  // own X post of 21 Oct 2024, read from the owner's screenshot (3 Oct 2026;
  // tems-read.md).
  { artist: "Tems", venue: "Radio City Music Hall", city: "New York", flag: "🇺🇸", tour: "Born in the Wild Tour", year: "2024", tickets: "5,956", revenue: 547697 },
  // Burna Boy's Vancouver, Seattle, Edmonton, Houston and Austin rows (the
  // first of them just below) are 5, 7, 9, 17 and 18 November 2023, read at
  // TouringData's own I Told Them… Tour table (touringdata.org/2025/12/29/
  // burna-boy-i-told-them-tour/, via the Internet Archive, snapshot
  // 20260205190633; same rows in the archived wp-json record of post 27489).
  // Vancouver is also in BusinessDay (14 Jun 2024) and Pop Central (14 Jun
  // 2024); Seattle in Top Charts Africa (10 Feb 2024), which prints Edmonton's
  // pair under a wrong "State Farm Arena" label — the table names Rogers
  // Place. Houston and Austin are in the table alone, read independently
  // twice, the same standing as the board's other TouringData-only rows.
  { artist: "Burna Boy", venue: "Rogers Arena", city: "Vancouver", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2023", tickets: "7,198", revenue: 527395 },
  // TouringData's own X post of 29 Jul 2026 (WE WANNA PARTY), read from the
  // owner's screenshot (3 Oct 2026); with Tokyo and Singapore it makes TD's 3/5
  // total of $2,062,943 / 18,023 (tyla-read.md). Also in Wikipedia's We Wanna
  // Party Tour table, from Pollstar.
  { artist: "Tyla", venue: "SM Mall of Asia Arena", city: "Manila", flag: "🇵🇭", tour: "We Wanna Party Tour", year: "2025", tickets: "5,356", revenue: 502612 },
  // TouringData's own X post of 1 Mar 2024 (TIMELESS), read from the owner's
  // screenshot (3 Oct 2026); with the O2 it makes TD's 4/11 total of $2,779,251 /
  // 35,386 (davido-read.md). Played 31 Jan 2024: Getty Images' photo caption
  // (news photo 1976090407, "at Accor Arena on January 31, 2024") and
  // concertaparis.fr's listing.
  { artist: "Davido", venue: "Accor Arena", city: "Paris", flag: "🇫🇷", tour: "Timeless Tour", year: "2024", tickets: "7,227", revenue: 501580 },
  { artist: "Burna Boy", venue: "Climate Pledge Arena", city: "Seattle", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "5,980", revenue: 495533 },
  { artist: "Burna Boy", venue: "Rogers Place", city: "Edmonton", flag: "🇨🇦", tour: "I Told Them… Tour", year: "2023", tickets: "6,770", revenue: 450087 },
  { artist: "Burna Boy", venue: "Toyota Center", city: "Houston", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "4,217", revenue: 435723 },
  { artist: "Burna Boy", venue: "Moody Center", city: "Austin", flag: "🇺🇸", tour: "I Told Them… Tour", year: "2023", tickets: "4,580", revenue: 409544 },
  // TouringData's own X post of 29 Jul 2026 (WE WANNA PARTY; TD prints the
  // venue as "Arena Expo"), read from the owner's screenshot (3 Oct 2026); part
  // of TD's 3/5 total (tyla-read.md). Also in Wikipedia's We Wanna Party Tour
  // table, from Pollstar.
  { artist: "Tyla", venue: "Singapore Expo", city: "Singapore", flag: "🇸🇬", tour: "We Wanna Party Tour", year: "2025", tickets: "3,617", revenue: 385207 },
  // TouringData's own X post of 27 May 2022 (SPACE DRIFT; the 17 Mar 2022
  // show), read from the owner's screenshot (3 Oct 2026); with the O2 and MSG
  // it makes TD's 3/14 total of $3,302,776 / 36,255 (burna-read.md).
  { artist: "Burna Boy", venue: "3Arena", city: "Dublin", flag: "🇮🇪", tour: "Space Drift Tour", year: "2022", tickets: "7,504", revenue: 378802 },
  // Pulse Nigeria (13 Nov 2025: "5,713 tickets sold at 95.2% capacity
  // grossed $364,495") and BusinessDay (22 Oct 2025), both quoting Touring Data.
  { artist: "Davido", venue: "Agganis Arena", city: "Boston", flag: "🇺🇸", tour: "5ive Alive Tour", year: "2025", tickets: "5,713", revenue: 364495 },
  // TouringData's own X post of 26 Mar 2025 (LUNGU BOY), read from the owner's
  // screenshot (3 Oct 2026); with Capital One and Inglewood it takes TD's total
  // to 5/11 = $2,532,174 / 29,753 (asake-read.md). Played 1 Oct 2024, the
  // tour's last date: Spin 1038's tour announcement ("concludes on ... Tuesday,
  // 1st October at 3Arena Dublin") and setlist.fm's 1 Oct 2024 3Arena setlist.
  { artist: "Asake", venue: "3Arena", city: "Dublin", flag: "🇮🇪", tour: "Lungu Boy Tour", year: "2024", tickets: "4,100", revenue: 329432 },
  // TouringData's own X post of 8 Nov 2024 (LUNGU BOY), read from the owner's
  // screenshot (3 Oct 2026); with MSG it makes TD's 2/11 total of $1,162,514 /
  // 14,351 (asake-read.md).
  { artist: "Asake", venue: "State Farm Arena", city: "Atlanta", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "3,255", revenue: 301753 },
  // TouringData's own X post of 19 Jun 2024 (LIVE IN CANADA), read from the
  // owner's screenshot (3 Oct 2026); with Toronto it makes TD's 2/2 total of
  // $1,212,892 / 15,416 (asake-read.md).
  { artist: "Asake", venue: "Rogers Place", city: "Edmonton", flag: "🇨🇦", tour: "Live in Canada", year: "2024", tickets: "5,764", revenue: 295938 },
  // TouringData's own X post of 21 Oct 2024 (BORN IN THE WILD), read from the
  // owner's screenshot (3 Oct 2026); with Radio City it takes TD's total to
  // 4/28 = $1,099,834 / 17,024 (tems-read.md).
  { artist: "Tems", venue: "The Anthem", city: "Washington, D.C.", flag: "🇺🇸", tour: "Born in the Wild Tour", year: "2024", tickets: "6,000", revenue: 291440 },
  // TouringData's own X post of 7 Aug 2025 (HEIS), read from the owner's
  // screenshot (3 Oct 2026); with MSG and Boston it makes TD's 3/20 total of
  // $1,254,840 / 18,482 (rema-read.md).
  { artist: "Rema", venue: "Place Bell", city: "Laval", flag: "🇨🇦", tour: "HEIS Tour", year: "2025", tickets: "4,071", revenue: 259253 },
  // TouringData's own X post of 1 Aug 2024 (EXCLUSIVE CONCERT IN GERMANY, 1/1
  // reported), read from the owner's screenshot (3 Oct 2026) (rema-read.md).
  { artist: "Rema", venue: "Mitsubishi Electric Halle", city: "Düsseldorf", flag: "🇩🇪", tour: "Exclusive Concert in Germany", year: "2024", tickets: "4,695", revenue: 254940 },
  // TouringData's own X post of 26 Mar 2025 (LUNGU BOY), read from the owner's
  // screenshot (3 Oct 2026) (asake-read.md). Played 27 Aug 2024: the venue's
  // own event page (youtubetheater.com, "Tue., Aug. 27, 2024") and setlist.fm's
  // 27 Aug 2024 setlist.
  { artist: "Asake", venue: "YouTube Theater", city: "Inglewood, CA", flag: "🇺🇸", tour: "Lungu Boy Tour", year: "2024", tickets: "2,612", revenue: 216912 },
  // TouringData's own X post of 7 Aug 2025 (HEIS), read from the owner's
  // screenshot (3 Oct 2026); part of TD's 3/20 total (rema-read.md).
  { artist: "Rema", venue: "MGM Music Hall", city: "Boston", flag: "🇺🇸", tour: "HEIS Tour", year: "2025", tickets: "3,816", revenue: 201880 },
  // TouringData's own X post of 3 Aug 2023 (TIMELESS), read from the owner's
  // screenshot (3 Oct 2026); with Capital One it makes TD's 2/12 total of
  // $1,076,254 / 13,240 (davido-read.md).
  { artist: "Davido", venue: "MGM Music Hall", city: "Boston", flag: "🇺🇸", tour: "Timeless Tour", year: "2023", tickets: "4,663", revenue: 192107 },
  // TouringData's own X post of 20 Aug 2024 (BORN IN THE WILD), read from the
  // owner's screenshot (3 Oct 2026); with Cologne it makes TD's 2/27 total of
  // $260,697 / 5,068 (tems-read.md).
  { artist: "Tems", venue: "Tempodrom", city: "Berlin", flag: "🇩🇪", tour: "Born in the Wild Tour", year: "2024", tickets: "3,468", revenue: 178473 },
  // TouringData's own X post of 22 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The Fillmore", city: "Silver Spring, MD", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "2,150", revenue: 175420 },
  // TouringData's own X post of 15 Aug 2023 (RAVE & ROSES, 1/15 reported), read
  // from the owner's screenshot (3 Oct 2026) (rema-read.md).
  { artist: "Rema", venue: "House of Blues", city: "Boston", flag: "🇺🇸", tour: "Rave & Roses Tour", year: "2023", tickets: "2,425", revenue: 136580 },
  // TouringData's own X post of 25 Jul 2022 (WE RISE BY LIFTING OTHERS, 1/5
  // reported), read from the owner's screenshot (3 Oct 2026) (davido-read.md).
  { artist: "Davido", venue: "House of Blues", city: "Boston", flag: "🇺🇸", tour: "We Rise by Lifting Others Tour", year: "2022", tickets: "2,425", revenue: 113750 },
  // TouringData's own X post of 3 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Warsaw", city: "New York", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,299", revenue: 109735 },
  // TouringData's own X post of 24 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The Loft", city: "Atlanta", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,213", revenue: 108234 },
  // TouringData's own X post of 24 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "White Oak Music Hall", city: "Houston", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,200", revenue: 102512 },
  // TouringData's own X post of 24 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Echo Music Hall", city: "Dallas", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,105", revenue: 101348 },
  // TouringData's own X post of 10 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "August Hall", city: "San Francisco", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,147", revenue: 97384 },
  // TouringData's own X post of 1 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Varsity Theater", city: "Minneapolis", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "1,110", revenue: 90255 },
  // TouringData's own X post of 1 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Union Hall", city: "Edmonton", flag: "🇨🇦", tour: "Water & Garri Tour", year: "2022", tickets: "1,120", revenue: 82481 },
  // TouringData's own X post of 20 Aug 2024 (BORN IN THE WILD), read from the
  // owner's screenshot (3 Oct 2026); with Berlin it makes TD's 2/27 total
  // (tems-read.md).
  { artist: "Tems", venue: "Carlswerk Victoria", city: "Cologne", flag: "🇩🇪", tour: "Born in the Wild Tour", year: "2024", tickets: "1,600", revenue: 82224 },
  // TouringData's own X post of 1 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The King of Clubs", city: "Columbus", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "850", revenue: 80653 },
  // TouringData's own X post of 22 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The Opera House", city: "Toronto", flag: "🇨🇦", tour: "Water & Garri Tour", year: "2022", tickets: "1,230", revenue: 78629 },
  // TouringData's own X post of 22 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Corona Theatre", city: "Montreal", flag: "🇨🇦", tour: "Water & Garri Tour", year: "2022", tickets: "1,125", revenue: 77149 },
  // TouringData's own X post of 1 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The Promontory", city: "Chicago", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "525", revenue: 67124 },
  // TouringData's own X post of 22 Jul 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Underground Arts", city: "Philadelphia", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "683", revenue: 64888 },
  // TouringData's own X post of 24 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Marquis Theater", city: "Denver", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "601", revenue: 61543 },
  // TouringData's own X post of 10 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"; TD names the venue "The Roxy Theater"), read from the owner's
  // screenshot (3 Oct 2026); each batch reconciles with TD's running totals
  // (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "The Roxy Theatre", city: "Los Angeles", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "616", revenue: 60562 },
  // TouringData's own X post of 16 Jan 2024 (AUSTRALIAN TOUR), read from the
  // owner's screenshot (3 Oct 2026); with Melbourne it makes TD's 2/2 total of
  // $100,555 / 1,921 (fireboy-read.md). Played Mon 2 Oct 2023: the promoter's
  // own tour page (handsometours.com/tours/fireboy-dml/).
  { artist: "Fireboy DML", venue: "Metro Theatre", city: "Sydney", flag: "🇦🇺", tour: "Australian Tour", year: "2023", tickets: "1,040", revenue: 53334 },
  // TouringData's own X post of 10 Jun 2022 (WATER & GARRI, which TD spells
  // "WATTER"), read from the owner's screenshot (3 Oct 2026); each batch
  // reconciles with TD's running totals (tiwa-read.md).
  { artist: "Tiwa Savage", venue: "Neumos", city: "Seattle", flag: "🇺🇸", tour: "Water & Garri Tour", year: "2022", tickets: "652", revenue: 50297 },
  // TouringData's own X post of 16 Jan 2024 (AUSTRALIAN TOUR), read from the
  // owner's screenshot (3 Oct 2026); part of TD's 2/2 total (fireboy-read.md).
  // Played Sun 1 Oct 2023: the promoter's own tour page
  // (handsometours.com/tours/fireboy-dml/).
  { artist: "Fireboy DML", venue: "170 Russell", city: "Melbourne", flag: "🇦🇺", tour: "Australian Tour", year: "2023", tickets: "881", revenue: 47221 },
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
  // TouringData's own X post of 26 May 2022 (MADE IN LAGOS, 3/20 reported
  // shows, O2 Arena, London), read from the owner's screenshot (3 Oct 2026;
  // wizkid-read.md). The dates are Nairametrics' and fourthavenew.net's.
  { artist: "Wizkid", venue: "The O2 Arena", city: "London", flag: "🇬🇧", tour: "Made in Lagos Tour", dates: "28–29 November and 1 December 2021", shows: 3, tickets: "50,814", revenue: 2875468 },
];
