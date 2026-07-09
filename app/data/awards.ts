// ============================================================
//  AWARDS & NOMINATIONS
//  Compiled from Wikipedia's cited "List of awards and nominations
//  received by Burna Boy" and cross-checked against press reporting,
//  re-verified June 2026. Includes the 9th AFRIMA (2025 edition, held
//  Jan 2026: Album of the Year for No Sign of Weakness + Best African
//  Collaboration for Laho II won), the 2025 MTV VMAs and the Trace
//  Awards. Each entry is a single { year, category, work?, won } — only
//  items confirmed with a year + category are listed (win-count-only
//  social-media tallies are not added without that detail).
//
//  DEEP RESEARCH PASS (July 2026): a fan tracker claimed the real total
//  was higher than what was listed. Two research passes went body-by-body
//  through every previously-"held" claim (BMI, ASCAP, SESAC, Caribbean
//  Music Awards, Urban Music Awards, Metro FM, Ghana diaspora shows, MTN
//  Liberia, Uganda HiPipo, 4Syte TV, NET Honours, Africa Golden Awards,
//  The FABYs, That Grape Juice, Odudu PH City) plus a broad sweep for any
//  2025–2026 ceremony result not yet captured. Confirmed additions (all
//  primary-sourced) are folded in below. Still NOT added — no primary
//  source found naming Burna Boy at all: ASCAP (a specific song/year),
//  The FABYs, That Grape Juice, Africa Golden Awards, Odudu PH City
//  Awards, Nigeria Music Video Awards win (nominations only, low-
//  confidence source). A literal "Ghana Music Awards USA" doesn't appear
//  to exist — the real diaspora show is Ghana Entertainment Awards USA
//  (GEA-USA), added under that name instead.
//
//  FOLLOW-UP PASS (July 2026, birthday tally from @chartsafrica): most of
//  that tally already matched exactly (Grammy, BET, MOBO, MTV EMAs, AFRIMA,
//  Ghana Music Awards, SoundCity — all confirmed our existing counts). One
//  real correction came out of it: Ghana Music Awards UK is a genuinely
//  separate, London-based ceremony from the Accra-based Telecel Ghana Music
//  Awards (confirmed via ghanamusic.com's own 2022 winners list) — split out
//  as its own entry instead of being folded into the main Ghana Music Awards
//  ceremony. Checked and rejected: NMPA Songwriter Awards (no evidence at
//  all), TooXclusive Awards (real ceremony, no verifiable win), The Nation
//  Newspaper Awards (editorial praise, not a competitive award), a 10th
//  Headies win (stays at 9 — no source breaks down what it would be), and a
//  4th Metro FM win (stays at 3, all from 2016).
//
//  PASS (July 2026, a "103 career awards" social tally): body-by-body primary
//  checks. One real correction — Burna WON Best Afrobeats Entertainer at the
//  2023 (40th) IRAWMA (confirmed via reggae-international.com's winners list),
//  which had been logged as a loss; flipped to a win (IRAWMA 2 -> 3). Confirmed
//  the tally's inflated counts are NOT supported by any primary source and stay
//  at ours: Headies (9, not 10), AFRIMMA (8, not 10 — 2019/2020 OkayAfrica
//  winner lists match us exactly), Metro FM (3, not 4), BMI (1, not 2 — only
//  "Last Last" 2023), AEA USA (2, not 3 — lost 2024), Galaxy (1, not 5 — no
//  breakdown anywhere). The tally also UNDER-counts NEA (says 2; we have 4
//  sourced), confirming it's an unverified aggregation. Still rejected, no
//  source names Burna Boy: ASCAP, The FABYS, That Grape Juice, Africa Golden
//  Awards, Odudu P-H City Awards (4), Nigeria Music Video Award win.
// ============================================================

export interface AwardNom {
  year: number;
  category: string;
  work?: string;
  won: boolean;
}

export interface Ceremony {
  name: string;
  noms: AwardNom[];
}

export const ceremonies: Ceremony[] = [
  {
    name: "Grammy Awards",
    noms: [
      { year: 2020, category: "Best World Music Album", work: "African Giant", won: false },
      { year: 2021, category: "Best Global Music Album", work: "Twice as Tall", won: true },
      { year: 2022, category: "Album of the Year", work: "Justice (as featured artist)", won: false },
      { year: 2022, category: "Best Global Music Performance", work: "Do Yourself (with Angélique Kidjo)", won: false },
      { year: 2023, category: "Best Global Music Performance", work: "Last Last", won: false },
      { year: 2023, category: "Best Global Music Album", work: "Love, Damini", won: false },
      { year: 2024, category: "Best Melodic Rap Performance", work: "Sittin' on Top of the World", won: false },
      { year: 2024, category: "Best Global Music Performance", work: "Alone", won: false },
      { year: 2024, category: "Best African Music Performance", work: "City Boys", won: false },
      { year: 2024, category: "Best Global Music Album", work: "I Told Them...", won: false },
      { year: 2025, category: "Best African Music Performance", work: "Higher", won: false },
      { year: 2026, category: "Best Global Music Album", work: "No Sign of Weakness", won: false },
      { year: 2026, category: "Best African Music Performance", work: "Love", won: false },
    ],
  },
  {
    name: "BET Awards",
    noms: [
      { year: 2019, category: "Best International Act", won: true },
      { year: 2020, category: "Best International Act", won: true },
      { year: 2021, category: "Best International Act", won: true },
      { year: 2023, category: "Best International Act", won: true },
      { year: 2023, category: "Best Male R&B/Pop Artist", won: false },
      { year: 2023, category: "Video Director of the Year", won: false },
      { year: 2023, category: "Viewer's Choice Award", work: "Last Last", won: false },
      { year: 2024, category: "Best Male R&B/Pop Artist", won: false },
      { year: 2024, category: "Best Male Hip Hop Artist", won: false },
      { year: 2025, category: "Best Male Hip Hop Artist", won: false },
      { year: 2026, category: "Best Collaboration", work: "WGFT (Gunna ft. Burna Boy)", won: false },
    ],
  },
  {
    name: "BET Hip Hop Awards",
    noms: [
      { year: 2024, category: "Hip Hop Artist of the Year", won: false },
      { year: 2024, category: "Song of the Year", work: "Sittin' on Top of the World", won: false },
      { year: 2024, category: "Best Collaboration", won: false },
      { year: 2024, category: "Best Hip Hop Video", won: false },
      { year: 2024, category: "Lyricist of the Year", won: false },
      { year: 2024, category: "Best Live Performer", won: false },
      { year: 2024, category: "Hustler of the Year", won: false },
    ],
  },
  {
    name: "BRIT Awards",
    noms: [
      { year: 2020, category: "Best International Solo Act", won: false },
      { year: 2020, category: "Song of the Year", work: "Location (with Dave)", won: false },
      { year: 2021, category: "International Male Solo Artist", won: false },
      { year: 2023, category: "International Artist of the Year", won: false },
      { year: 2024, category: "International Artist of the Year", won: false },
    ],
  },
  {
    name: "American Music Awards",
    noms: [
      { year: 2022, category: "Favorite Afrobeats Artist", won: false },
      { year: 2026, category: "Best Afrobeats Artist", won: false },
      { year: 2026, category: "Best Hip-Hop Song", work: "WGFT (Gunna ft. Burna Boy)", won: false },
    ],
  },
  {
    name: "Billboard Music Awards",
    noms: [
      { year: 2023, category: "Top Afrobeats Artist", won: true },
    ],
  },
  {
    name: "NAACP Image Awards",
    noms: [
      { year: 2024, category: "Outstanding Male Artist", won: false },
      { year: 2024, category: "Outstanding Album", work: "I Told Them...", won: false },
      { year: 2024, category: "Outstanding Duo, Group or Collaboration", work: "Sittin' on Top of the World", won: false },
      { year: 2024, category: "Outstanding Hip Hop/Rap Song", won: false },
      { year: 2024, category: "Outstanding International Song", work: "City Boys", won: false },
      { year: 2025, category: "Outstanding Duo, Group or Collaboration", work: "Coming Home (with Usher)", won: false },
      { year: 2026, category: "Outstanding International Song", work: "Love", won: false },
    ],
  },
  {
    name: "Soul Train Awards",
    noms: [
      { year: 2022, category: "Song of the Year", work: "Last Last", won: false },
      { year: 2022, category: "Video of the Year", work: "Last Last", won: false },
      { year: 2022, category: "Ashford & Simpson Songwriter's Award", won: false },
      { year: 2022, category: "R&B/Soul Male Artist", won: false },
    ],
  },
  {
    name: "iHeartRadio Music Awards",
    noms: [
      { year: 2023, category: "Afrobeats Artist of the Year", won: false },
      { year: 2024, category: "Best African Music Act", won: true },
      { year: 2025, category: "World Artist of the Year", won: false },
    ],
  },
  {
    name: "NME Awards",
    noms: [
      { year: 2022, category: "Best Solo Act in the World", won: true },
    ],
  },
  {
    name: "MTV Europe Music Awards",
    noms: [
      { year: 2019, category: "Best African Act", won: true },
      { year: 2020, category: "Best African Act", won: false },
      { year: 2022, category: "Best African Act", won: true },
      { year: 2023, category: "Best African Act", won: false },
      { year: 2023, category: "Best Live", won: false },
      { year: 2023, category: "Best Afrobeats", work: "Last Last", won: false },
    ],
  },
  {
    name: "MOBO Awards",
    noms: [
      { year: 2020, category: "Best International Act", won: true },
      { year: 2020, category: "Best African Act", won: false },
      { year: 2022, category: "Best African Music Act", won: true },
      { year: 2022, category: "Best International Act", won: true },
      { year: 2024, category: "Best African Act", won: false },
    ],
  },
  {
    name: "MTV Africa Music Awards",
    noms: [
      { year: 2014, category: "Best New Act", won: false },
      { year: 2015, category: "Best Collaboration", work: "All Eyes on Me", won: true },
    ],
  },
  {
    name: "MTV Video Music Awards",
    noms: [
      { year: 2025, category: "Best Afrobeats", work: "TaTaTa (with Travis Scott)", won: false },
      { year: 2025, category: "Video for Good", work: "Higher", won: false },
    ],
  },
  {
    name: "All Africa Music Awards (AFRIMA)",
    noms: [
      { year: 2015, category: "Best African Collaboration", won: true },
      { year: 2019, category: "West African Male Artiste of the Year", won: true },
      { year: 2019, category: "Artiste of the Year in Africa", won: true },
      { year: 2019, category: "Album of the Year", work: "African Giant", won: false },
      { year: 2019, category: "Best African Collaboration", work: "Killin' Dem", won: false },
      { year: 2019, category: "Song of the Year in Africa", work: "On the Low", won: false },
      { year: 2023, category: "Artist of the Year", won: true },
      { year: 2023, category: "Album of the Year", work: "Love, Damini", won: true },
      { year: 2023, category: "Song of the Year", work: "Last Last", won: false },
      { year: 2025, category: "Album of the Year", work: "No Sign of Weakness", won: true },
      { year: 2025, category: "Best African Collaboration", work: "Laho II (with Shallipopi)", won: true },
      { year: 2025, category: "Artiste of the Year", won: false },
    ],
  },
  {
    name: "The Headies",
    noms: [
      { year: 2013, category: "Next Rated", won: false },
      { year: 2013, category: "Best R&B Single", work: "Like to Party", won: false },
      { year: 2014, category: "Best R&B Single", work: "Don Gorgon", won: false },
      { year: 2014, category: "Best R&B/Pop Album", work: "L.I.F.E", won: false },
      { year: 2014, category: "Revelation of the Year", won: false },
      { year: 2014, category: "Album of the Year", won: false },
      { year: 2019, category: "Artiste of the Year", won: true },
      { year: 2019, category: "Song of the Year", work: "Ye", won: true },
      { year: 2019, category: "Best Collaboration", work: "Killin' Dem", won: true },
      { year: 2019, category: "Viewer's Choice", won: false },
      { year: 2019, category: "Best Recording of the Year", work: "Ye", won: false },
      { year: 2019, category: "Best Pop Single", won: false },
      { year: 2019, category: "Best R&B/Pop Album", work: "Outside", won: false },
      { year: 2019, category: "Album of the Year", won: false },
      { year: 2022, category: "Best African Artiste of the Year", won: true },
      { year: 2022, category: "Best Male Artiste of the Year", won: true },
      { year: 2023, category: "Best R&B Single", work: "For My Hand", won: true },
      { year: 2023, category: "Afrobeats Single of the Year", work: "Last Last", won: true },
      { year: 2023, category: "Song of the Year", won: true },
      { year: 2023, category: "Album of the Year", work: "Love, Damini", won: false },
      { year: 2023, category: "Best Recording of the Year", work: "Alone", won: false },
      { year: 2023, category: "Songwriter of the Year", won: false },
      { year: 2023, category: "Best Collaboration", work: "Sungba (Remix)", won: false },
      { year: 2023, category: "Digital Artiste of the Year", won: false },
      { year: 2023, category: "African Artiste of the Year", won: false },
      { year: 2023, category: "Male Artiste of the Year", won: false },
      { year: 2025, category: "Best Performer (Live)", work: "African Giant Live From London", won: true },
      { year: 2025, category: "Best Recording of the Year", work: "Higher", won: false },
      { year: 2025, category: "Artiste of the Year", won: false },
    ],
  },
  {
    name: "Soundcity MVP Awards Festival",
    noms: [
      { year: 2019, category: "Listener's Choice", work: "Ye", won: true },
      { year: 2019, category: "Song of the Year", won: true },
      { year: 2019, category: "Best Male MVP", won: true },
      { year: 2019, category: "African Artiste of the Year", won: true },
      { year: 2019, category: "Viewer's Choice", won: false },
      { year: 2020, category: "Song of the Year", work: "Killin' Dem", won: true },
      { year: 2020, category: "African Artiste of the Year", won: true },
      { year: 2020, category: "Best Male MVP", won: true },
      { year: 2020, category: "Best Collaboration", won: false },
      { year: 2020, category: "Listeners' Choice", work: "Killin' Dem", won: false },
      { year: 2020, category: "Viewers' Choice", work: "On the Low", won: false },
      { year: 2023, category: "African Artiste of the Year", won: true },
    ],
  },
  {
    name: "African Muzik Magazine Awards (AFRIMMA)",
    noms: [
      { year: 2018, category: "Best African Dancehall/Reggae Act", won: true },
      { year: 2018, category: "Best Live Act", won: false },
      { year: 2019, category: "Song of the Year", work: "Killin' Dem", won: true },
      { year: 2019, category: "Best Collaboration", won: true },
      { year: 2019, category: "Artist of the Year", won: true },
      { year: 2019, category: "Best Male West Africa", won: true },
      { year: 2019, category: "Video of the Year", won: false },
      { year: 2019, category: "Best Live Act", won: false },
      { year: 2019, category: "Crossing Boundaries with Music", won: false },
      { year: 2020, category: "Crossing Boundaries with Music", won: true },
      { year: 2020, category: "Best Collaboration", work: "Jerusalema (Remix)", won: true },
      { year: 2022, category: "Artist of the Year", won: true },
      { year: 2020, category: "Best Male West Africa", won: false },
      { year: 2020, category: "Artiste of the Year", won: false },
      { year: 2020, category: "Best Live Act", won: false },
      { year: 2020, category: "Song of the Year", work: "Anybody", won: false },
      { year: 2022, category: "Best Live Act", won: false },
      { year: 2022, category: "Best Male West Africa", won: false },
      { year: 2022, category: "Best Collaboration", work: "Sungba (Remix)", won: false },
    ],
  },
  {
    name: "Nigeria Entertainment Awards",
    noms: [
      { year: 2013, category: "Best New Act of the Year", won: true },
      { year: 2015, category: "Best Pop Artist of the Year", won: true },
      { year: 2015, category: "Album of the Year", work: "L.I.F.E", won: true },
      { year: 2018, category: "Album of the Year", work: "Outside", won: true },
    ],
  },
  {
    name: "Ghana Music Awards",
    noms: [
      { year: 2019, category: "African Artiste of the Year", won: true },
      { year: 2020, category: "African Artiste of the Year", won: true },
      { year: 2025, category: "African Song of the Year", work: "Tshwala Bam (TitoM & Yuppe ft. S.N.E & Burna Boy)", won: true },
      { year: 2026, category: "Best African Song", work: "Laho II (Shallipopi & Burna Boy)", won: false },
    ],
  },
  {
    name: "Ghana Music Awards UK",
    noms: [
      { year: 2021, category: "African Artist of the Year", won: false },
      { year: 2022, category: "African Artiste of the Year", won: true },
    ],
  },
  {
    name: "International Reggae & World Music Awards (IRAWMA)",
    noms: [
      { year: 2020, category: "Best African Reggae/Dancehall Entertainer", won: false },
      { year: 2021, category: "Best Afrobeat Entertainer", won: false },
      { year: 2023, category: "Best Crossover", work: "Toni-Ann Singh", won: false },
      { year: 2023, category: "Best Afrobeats Entertainer", won: true },
      { year: 2024, category: "Best African Entertainer", won: true },
      { year: 2025, category: "Best African Entertainer", won: true },
    ],
  },
  {
    name: "Global Music Awards Africa",
    noms: [
      { year: 2021, category: "Artiste of the Year", won: true },
      { year: 2021, category: "Global Reggae/Dancehall Artiste of the Year", won: false },
    ],
  },
  {
    name: "The Future Awards Africa",
    noms: [
      { year: 2019, category: "Award Prize for Music", won: true },
      { year: 2019, category: "Young Person of the Year", won: true },
    ],
  },
  {
    name: "African Entertainment Awards USA",
    noms: [
      { year: 2022, category: "Artist of the Year", won: true },
      { year: 2023, category: "Best Male Artiste", won: true },
      { year: 2024, category: "Best Male Artist", won: false },
      { year: 2024, category: "Artist of the Year", won: false },
      { year: 2024, category: "Best Music Video", work: "Tshwala Bam", won: false },
      { year: 2024, category: "Song of the Year", won: false },
      { year: 2024, category: "Best Collaboration", won: false },
      { year: 2024, category: "Best Collaboration", work: "Rollercoaster", won: false },
      { year: 2025, category: "Best Male Artist", won: false },
      { year: 2025, category: "International Artist of the Year", won: false },
    ],
  },
  {
    name: "Edison Awards",
    noms: [
      { year: 2020, category: "Best World Album", work: "African Giant", won: true },
    ],
  },
  {
    name: "Planet Rap Awards",
    noms: [
      { year: 2023, category: "Best International Artist", won: true },
    ],
  },
  {
    name: "Trace Awards",
    noms: [
      { year: 2023, category: "Album of the Year", work: "Love, Damini", won: true },
      { year: 2025, category: "Album of the Year", work: "I Told Them...", won: false },
      { year: 2025, category: "Song of the Year", work: "Active (with Travis Scott)", won: false },
      { year: 2025, category: "Best Collaboration", work: "Tshwala Bam (Remix)", won: false },
      { year: 2025, category: "Best Live Performance", won: false },
      { year: 2025, category: "Best Male Artist", won: false },
    ],
  },
  {
    name: "Galaxy Music Awards",
    noms: [
      { year: 2023, category: "Artist of the Year", won: true },
    ],
  },
  {
    name: "Rocklan One Radio Music Awards",
    noms: [
      { year: 2023, category: "Afrobeats Artist of the Year", won: true },
    ],
  },
  {
    name: "BreakTudo Awards",
    noms: [
      { year: 2023, category: "Global Artist", won: false },
    ],
  },
  {
    name: "Nigeria South South Music Awards",
    noms: [
      { year: 2013, category: "Best African Act", won: true },
    ],
  },
  {
    name: "BMI Awards",
    noms: [
      { year: 2023, category: "Most Performed Work of the Year (BMI London)", work: "Last Last", won: true },
    ],
  },
  {
    name: "SESAC Awards",
    noms: [
      { year: 2021, category: "Pop Music Award", work: "Enjoy Yourself (Remix)", won: true },
      { year: 2024, category: "Music Award", work: "Sittin' on Top of the World", won: true },
    ],
  },
  {
    name: "Caribbean Music Awards",
    noms: [
      { year: 2024, category: "Collaboration of the Year (Dancehall)", work: "Talibans II (with Byron Messia)", won: true },
      { year: 2025, category: "Konpa — Song of the Year", work: "4 Kampé II (Remix)", won: false },
    ],
  },
  {
    name: "Urban Music Awards",
    noms: [
      { year: 2020, category: "Artist of the Year (Africa)", won: true },
      { year: 2025, category: "International Artist of the Year", won: false },
    ],
  },
  {
    name: "Africa Arts and Entertainment Awards (AAEA)",
    noms: [
      { year: 2025, category: "Overall Male Artist in Africa", won: true },
    ],
  },
  {
    name: "Metro FM Music Awards",
    noms: [
      { year: 2016, category: "One Africa Award", won: true },
      { year: 2016, category: "Best Hit Single", work: "Baddest (AKA ft. Burna Boy, Khuli Chana & Yanga Chief)", won: true },
      { year: 2016, category: "Best Collaboration", work: "Baddest (AKA ft. Burna Boy, Khuli Chana & Yanga Chief)", won: true },
    ],
  },
  {
    name: "Ghana Entertainment Awards USA",
    noms: [
      { year: 2022, category: "Best African Entertainer", won: false },
      { year: 2023, category: "Best African Entertainer", won: true },
    ],
  },
  {
    name: "MTN Liberia Music Awards",
    noms: [
      { year: 2020, category: "International Artist of the Year", won: true },
      { year: 2023, category: "International Artiste of the Year", won: false },
    ],
  },
  {
    name: "Uganda HiPipo Music Awards",
    noms: [
      { year: 2019, category: "Kenya Video of the Year", work: "Afrikan Star (Sauti Sol ft. Burna Boy)", won: false },
      { year: 2025, category: "Africa's Number One", won: false },
    ],
  },
  {
    name: "4Syte TV Music Video Awards",
    noms: [
      { year: 2019, category: "African Act", won: true },
      { year: 2021, category: "Best African Act", won: false },
    ],
  },
  {
    name: "NET Honours",
    noms: [
      { year: 2023, category: "Most Popular Music Artiste Male", won: false },
      { year: 2023, category: "Most Searched Music Artiste Male", won: false },
      { year: 2023, category: "Most Popular Fandom", won: false },
    ],
  },
];

// Honours & special recognitions (not competitive category awards).
export interface Honour {
  title: string;
  org: string;
  year: number;
  note?: string;
}

export const honours: Honour[] = [
  {
    title: "Apple Music “Up Next” Artist",
    org: "Apple Music",
    year: 2019,
    note: "Spotlighted as a global breakthrough act, with a Beats 1 interview and a short documentary.",
  },
  {
    title: "Distinguished Service Star of Rivers State (DSSRS)",
    org: "Rivers State, Nigeria",
    year: 2021,
    note: "The state's second-highest honour, conferred after his Grammy win.",
  },
  {
    title: "Member of the Order of the Federal Republic (MFR)",
    org: "Federal Republic of Nigeria",
    year: 2022,
    note: "National honour conferred at the National Honours Investiture.",
  },
  {
    title: "Rolling Stone's 200 Greatest Singers of All Time (No. 197)",
    org: "Rolling Stone",
    year: 2023,
    note: "One of only two Nigerians on the list, alongside Fela Kuti — named the ambassador of Afrobeats as a global movement.",
  },
  {
    title: "BRIT Billion Award",
    org: "BPI · United Kingdom",
    year: 2024,
    note: "For surpassing 1 billion UK streams.",
  },
  {
    title: "BRIT Billion Award",
    org: "BPI · United Kingdom",
    year: 2024,
    note: "For 2 billion UK streams — the first African artist to reach it.",
  },
  {
    title: "\"Burna Boy Day\" Proclamation",
    org: "Boston City Council",
    year: 2024,
    note: "March 2 declared \"Burna Boy Day\" by the Boston City Council, recognising his role in popularising Afrobeats worldwide.",
  },
];

// Helpers
export const allNoms: AwardNom[] = ceremonies.flatMap((c) => c.noms);
export const totalNominations = allNoms.length;
export const totalWins = allNoms.filter((n) => n.won).length;
export const ceremonyCount = ceremonies.length;
export const grammyWins = ceremonies
  .find((c) => c.name === "Grammy Awards")!
  .noms.filter((n) => n.won).length;

export function ceremonyWins(c: Ceremony): number {
  return c.noms.filter((n) => n.won).length;
}
