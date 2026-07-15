// ============================================================
//  GLOBAL CERTIFICATIONS DATA
//  Sources: RIAA, BPI, Music Canada, SNEP, GLF, NVPI, ARIA,
//  RMNZ, Promusicae, IFPI (DK/NO/CH/AT), RiSA, TCSN (TurnTable),
//  ZPAV, AFP, BVMI (Germany), FIMI (Italy), BEA (Belgium),
//  Pro-Música Brasil — cross-checked against each body's cited
//  data, re-verified June 2026. Nigeria via TurnTable (TCSN).
//  Each cert: { c: countryCode, level, x?: multiplier }
// ============================================================

export type Tier = "Diamond" | "Platinum" | "Gold" | "Silver";

export interface Country {
  name: string;
  flag: string;
  body: string;
}

export interface Cert {
  c: string;
  level: Tier;
  x?: number;
  body?: string; // overrides the country's default certifying body (e.g. "RIAA Latin")
}

export interface Release {
  title: string;
  credit?: string;
  year?: number;
  certs: Cert[];
}

export const COUNTRIES: Record<string, Country> = {
  US: { name: "United States", flag: "🇺🇸", body: "RIAA" },
  UK: { name: "United Kingdom", flag: "🇬🇧", body: "BPI" },
  CA: { name: "Canada", flag: "🇨🇦", body: "Music Canada" },
  FR: { name: "France", flag: "🇫🇷", body: "SNEP" },
  DE: { name: "Germany", flag: "🇩🇪", body: "BVMI" },
  IT: { name: "Italy", flag: "🇮🇹", body: "FIMI" },
  BE: { name: "Belgium", flag: "🇧🇪", body: "BEA" },
  SE: { name: "Sweden", flag: "🇸🇪", body: "GLF" },
  NL: { name: "Netherlands", flag: "🇳🇱", body: "NVPI" },
  AU: { name: "Australia", flag: "🇦🇺", body: "ARIA" },
  NZ: { name: "New Zealand", flag: "🇳🇿", body: "RMNZ" },
  ES: { name: "Spain", flag: "🇪🇸", body: "Promusicae" },
  DK: { name: "Denmark", flag: "🇩🇰", body: "IFPI Denmark" },
  NO: { name: "Norway", flag: "🇳🇴", body: "IFPI Norway" },
  CH: { name: "Switzerland", flag: "🇨🇭", body: "IFPI" },
  AT: { name: "Austria", flag: "🇦🇹", body: "IFPI Austria" },
  HU: { name: "Hungary", flag: "🇭🇺", body: "MAHASZ" },
  SK: { name: "Slovakia", flag: "🇸🇰", body: "ČNS IFPI" },
  PL: { name: "Poland", flag: "🇵🇱", body: "ZPAV" },
  PT: { name: "Portugal", flag: "🇵🇹", body: "AFP" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "RiSA" },
  NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable (TCSN)" },
  BR: { name: "Brazil", flag: "🇧🇷", body: "Pro-Música Brasil" },
  CO: { name: "Colombia", flag: "🇨🇴", body: "Sony Music Colombia" },
};

export const albums: Release[] = [
  { title: "African Giant", year: 2019, certs: [
    { c: "FR", level: "Platinum" }, { c: "UK", level: "Gold" }, { c: "SE", level: "Gold" },
    { c: "CA", level: "Gold" }, { c: "NL", level: "Gold" }, { c: "CH", level: "Gold" },
    { c: "DK", level: "Gold" },
  ] },
  { title: "Love, Damini", year: 2022, certs: [
    { c: "CA", level: "Platinum" }, { c: "UK", level: "Gold" }, { c: "SE", level: "Gold" },
    { c: "FR", level: "Gold" }, { c: "NL", level: "Gold" }, { c: "DK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "NG", level: "Platinum", x: 5 },
  ] },
  { title: "I Told Them...", year: 2023, certs: [
    { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "NG", level: "Platinum" },
  ] },
  { title: "Twice as Tall", year: 2020, certs: [
    { c: "UK", level: "Silver" },
  ] },
];

// Burna Boy's own (lead) singles.
export const singles: Release[] = [
  { title: "Last Last", year: 2022, certs: [
    { c: "CA", level: "Platinum", x: 4 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "UK", level: "Platinum", x: 2 },
    { c: "NG", level: "Platinum", x: 5 }, { c: "US", level: "Platinum" }, { c: "AU", level: "Platinum" },
    { c: "FR", level: "Diamond" }, { c: "SE", level: "Platinum" }, { c: "CH", level: "Platinum" },
    { c: "AT", level: "Gold" }, { c: "DK", level: "Gold" }, { c: "ZA", level: "Platinum" },
  ] },
  { title: "On the Low", year: 2018, certs: [
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "US", level: "Gold" },
    { c: "AU", level: "Gold" }, { c: "DK", level: "Gold" }, { c: "NG", level: "Silver" },
  ] },
  { title: "Ye", year: 2018, certs: [
    { c: "US", level: "Platinum" }, { c: "UK", level: "Platinum" }, { c: "SE", level: "Platinum" },
    { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "FR", level: "Platinum" },
    { c: "CH", level: "Platinum" }, { c: "NG", level: "Silver" },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" },
    { c: "SE", level: "Platinum" }, { c: "DK", level: "Platinum" }, { c: "FR", level: "Gold" },
    { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "CH", level: "Gold" },
  ] },
  { title: "City Boys", year: 2023, certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "CA", level: "Platinum" }, { c: "FR", level: "Platinum" },
    { c: "UK", level: "Gold" }, { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Gbona", year: 2018, certs: [
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum" }, { c: "CH", level: "Platinum" },
    { c: "SE", level: "Gold" }, { c: "DK", level: "Gold" }, { c: "PT", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Gold" },
  ] },
  { title: "It's Plenty", year: 2022, certs: [
    { c: "NG", level: "Platinum", x: 3 }, { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" },
    { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Alone", year: 2022, certs: [
    { c: "NG", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" },
    { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Anybody", year: 2019, certs: [
    { c: "CA", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, certs: [
    { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Real Life", credit: "feat. Stormzy", year: 2020, certs: [
    { c: "NG", level: "Platinum" }, { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Gum Body", credit: "feat. Jorja Smith", year: 2019, certs: [
    { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Tested, Approved & Trusted", year: 2023, certs: [
    { c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Kilometre", year: 2021, certs: [
    { c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" },
  ] },
  { title: "Higher", year: 2024, certs: [
    { c: "NG", level: "Platinum", x: 4 },
  ] },
  { title: "Common Person", year: 2022, certs: [
    { c: "NG", level: "Platinum", x: 3 },
  ] },
  { title: "Giza", year: 2025, certs: [
    { c: "NG", level: "Platinum", x: 2 },
  ] },
  { title: "Do I", year: 2023, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Different Size", credit: "feat. Vict0ny", year: 2022, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Big 7", year: 2023, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Way Too Big", year: 2020, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "23", year: 2022, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Dey Play", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "On Form", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Bundle by Bundle", year: 2024, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Question", credit: "feat. Don Jazzy", year: 2021, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Want It All", credit: "feat. Polo G", year: 2021, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Cloak & Dagger", credit: "feat. J Hus", year: 2022, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Normal", year: 2023, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Science", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Vanilla", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Jagele", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "I Told Them", year: 2023, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Rollercoaster", credit: "feat. J Balvin", year: 2022, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, certs: [
    { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Wild Dreams", credit: "feat. Khalid", year: 2022, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Glory", credit: "feat. Ladysmith Black Mambazo", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Solid", credit: "feat. Kehlani & Justin Bieber", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Dirty Secrets", year: 2022, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Whiskey", year: 2020, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Bank On It", year: 2020, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "If I'm Lying", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "No Fit Vex", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Thanks", year: 2020, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Onyeka (Baby)", year: 2019, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "How Bad Could It Be", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Level Up", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Wonderful", year: 2020, certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Virgil", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Collateral Damage", year: 2019, certs: [
    { c: "FR", level: "Gold" },
  ] },
  { title: "Secret", credit: "feat. Jeremih & Serani", year: 2019, certs: [
    { c: "UK", level: "Silver" },
  ] },
];

// Songs where Burna Boy is a featured/guest artist.
export const features: Release[] = [
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", year: 2026, certs: [
    { c: "US", level: "Platinum", x: 2, body: "RIAA Latin" },
    { c: "CO", level: "Gold" }, { c: "ES", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "HU", level: "Gold" }, { c: "SK", level: "Gold" },
  ] },
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Platinum", x: 5 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "CH", level: "Platinum", x: 2 }, { c: "ZA", level: "Platinum", x: 2 },
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "NL", level: "Platinum" },
    { c: "DK", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "PT", level: "Gold" },
    { c: "DE", level: "Gold" }, { c: "NG", level: "Gold" },
  ] },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", year: 2024, certs: [
    { c: "FR", level: "Platinum" }, { c: "ES", level: "Platinum" }, { c: "PL", level: "Platinum" }, { c: "UK", level: "Gold" },
    { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "AT", level: "Gold" }, { c: "PT", level: "Gold" },
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, certs: [
    { c: "FR", level: "Diamond" }, { c: "AU", level: "Platinum" }, { c: "UK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "DK", level: "Gold" },
  ] },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Platinum", x: 3 }, { c: "NZ", level: "Platinum" }, { c: "DK", level: "Platinum" },
    { c: "AU", level: "Gold" }, { c: "BR", level: "Gold" }, { c: "PT", level: "Gold" },
  ] },
  { title: "Jerusalema (Remix)", credit: "Master KG, Nomcebo & Burna Boy", year: 2020, certs: [
    { c: "FR", level: "Diamond" }, { c: "IT", level: "Platinum", x: 4 }, { c: "BE", level: "Platinum", x: 2 },
    { c: "DE", level: "Platinum" }, { c: "PT", level: "Platinum", x: 2 }, { c: "AT", level: "Gold" },
  ] },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, certs: [
    { c: "ZA", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum" }, { c: "US", level: "Gold" },
    { c: "CA", level: "Gold" }, { c: "CH", level: "Platinum" }, { c: "UK", level: "Silver" },
  ] },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, certs: [
    { c: "BR", level: "Platinum" }, { c: "AU", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Gold" },
  ] },
  { title: "Donne-moi l'accord", credit: "Dadju ft. Burna Boy", year: 2019, certs: [
    { c: "FR", level: "Platinum" },
  ] },
  { title: "Play Play", credit: "J Hus ft. Burna Boy", year: 2020, certs: [
    { c: "UK", level: "Platinum" },
  ] },
  { title: "Sungba (Remix)", credit: "Asake ft. Burna Boy", year: 2022, certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "UK", level: "Silver" },
  ] },
  { title: "Tshwala Bam (Remix)", credit: "TitoM & Yuppe ft. S.N.E & Burna Boy", year: 2024, certs: [
    { c: "NG", level: "Platinum", x: 4 },
  ] },
  { title: "Second Sermon (Remix)", credit: "Black Sherif ft. Burna Boy", year: 2021, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" },
  ] },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025, certs: [
    { c: "NZ", level: "Platinum" }, { c: "UK", level: "Gold" },
  ] },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", year: 2025, certs: [
    { c: "FR", level: "Gold" },
  ] },
  { title: "Loved by You", credit: "Justin Bieber ft. Burna Boy", year: 2021, certs: [
    { c: "AU", level: "Gold" }, { c: "BR", level: "Gold" },
  ] },
  { title: "Enjoy Yourself (Remix)", credit: "Pop Smoke ft. Burna Boy", year: 2020, certs: [
    { c: "NZ", level: "Gold" }, { c: "AU", level: "Gold" },
  ] },
  { title: "Yaba Buluku (Remix)", credit: "DJ Tarico & Burna Boy", year: 2021, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Toni-Ann Singh", credit: "feat. Popcaan", year: 2022, certs: [
    { c: "CA", level: "Gold" }, { c: "NG", level: "Silver" },
  ] },
  { title: "Talibans II", credit: "with Byron Messia", year: 2023, certs: [
    { c: "CA", level: "Gold" }, { c: "NG", level: "Gold" },
  ] },
  { title: "Rollin'", credit: "Mist ft. Burna Boy", year: 2021, certs: [
    { c: "UK", level: "Silver" },
  ] },
  { title: "Lenu (Remix)", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Baddest", credit: "AKA ft. Burna Boy, Khuli Chana & Yanga Chief", year: 2019, certs: [
    { c: "ZA", level: "Gold" },
  ] },
  { title: "All Eyes on Me", credit: "AKA ft. Burna Boy, Da L.E.S & JR", year: 2014, certs: [
    { c: "ZA", level: "Platinum", x: 19 },
  ] },
  { title: "B.D'or", credit: "Bramsito ft. Burna Boy", year: 2019, certs: [
    { c: "NG", level: "Platinum" },
  ] },
];

// ------------------------------------------------------------
//  CERTIFICATIONS BY YEAR — a dated log of individual certification
//  announcements (as opposed to the "current tier" snapshot above).
//  A release can appear more than once in the same year if it was
//  certified at more than one tier that year (e.g. Gold then Platinum).
//  Source: @BurnaBoyStats' own certification-tracking, cross-checked
//  against the current-tier snapshot above.
// ------------------------------------------------------------

export interface CertEvent {
  title: string;
  credit?: string;
  album?: boolean;
  country: string;
  level: Tier;
  x?: number;
  year: number;
  body?: string; // overrides the country's default certifying body (e.g. "RIAA Latin")
}

export const certHistory: CertEvent[] = [
  { title: "Location", credit: "Dave ft. Burna Boy", country: "NL", level: "Platinum", year: 2026 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "ES", level: "Platinum", year: 2026 },
  { title: "Love, Damini", album: true, country: "CA", level: "Platinum", year: 2026 },
  { title: "I Told Them...", album: true, country: "CA", level: "Gold", year: 2026 },
  { title: "Last Last", country: "CA", level: "Platinum", x: 4, year: 2026 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "CA", level: "Platinum", x: 2, year: 2026 },
  { title: "It's Plenty", country: "CA", level: "Platinum", year: 2026 },
  { title: "Kilometre", country: "CA", level: "Gold", year: 2026 },
  { title: "Toni-Ann Singh", credit: "feat. Popcaan", country: "CA", level: "Gold", year: 2026 },
  { title: "Alone", country: "US", level: "Gold", year: 2026 },
  { title: "On the Low", country: "UK", level: "Platinum", year: 2026 },
  { title: "On the Low", country: "CA", level: "Platinum", x: 2, year: 2026 },
  { title: "Gbona", country: "CA", level: "Platinum", year: 2026 },
  { title: "City Boys", country: "CA", level: "Platinum", year: 2026 },
  { title: "Talibans II", credit: "with Byron Messia", country: "CA", level: "Gold", year: 2026 },
  { title: "Tested, Approved & Trusted", country: "CA", level: "Gold", year: 2026 },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", country: "CA", level: "Gold", year: 2026 },
  { title: "Gbona", country: "DK", level: "Gold", year: 2026 },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "NZ", level: "Gold", year: 2026 },
  { title: "On the Low", country: "NZ", level: "Platinum", year: 2026 },
  { title: "Last Last", country: "NZ", level: "Platinum", x: 3, year: 2026 },
  { title: "Twice as Tall", album: true, country: "UK", level: "Silver", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "NZ", level: "Platinum", x: 3, year: 2026 },
  { title: "It's Plenty", country: "NZ", level: "Platinum", year: 2026 },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", country: "FR", level: "Gold", year: 2026 },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "UK", level: "Gold", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "FR", level: "Diamond", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "NO", level: "Platinum", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "DE", level: "Gold", year: 2026 },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "NZ", level: "Platinum", year: 2026 },
  { title: "Gbona", country: "NZ", level: "Gold", year: 2026 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "PL", level: "Platinum", year: 2026 },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "US", level: "Platinum", x: 2, year: 2026, body: "RIAA Latin" },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "CO", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "ES", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "FR", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "HU", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira ft. Burna Boy", country: "SK", level: "Gold", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "ZA", level: "Platinum", x: 2, year: 2026 },
  { title: "Gbona", country: "FR", level: "Diamond", year: 2026 },

  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "UK", level: "Silver", year: 2025 },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", country: "CA", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "FR", level: "Gold", year: 2025 },
  { title: "Anybody", country: "FR", level: "Gold", year: 2025 },
  { title: "On the Low", country: "DK", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "PT", level: "Gold", year: 2025 },
  { title: "City Boys", country: "UK", level: "Gold", year: 2025 },
  { title: "Donne-moi l'accord", credit: "Dadju ft. Burna Boy", country: "FR", level: "Platinum", year: 2025 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "UK", level: "Platinum", x: 5, year: 2025 },
  { title: "Last Last", country: "AT", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "AT", level: "Gold", year: 2025 },
  { title: "City Boys", country: "FR", level: "Platinum", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "FR", level: "Platinum", year: 2025 },
  { title: "Cheat on Me", credit: "feat. Dave", country: "UK", level: "Silver", year: 2025 },
  { title: "It's Plenty", country: "FR", level: "Gold", year: 2025 },
  { title: "Secret", credit: "feat. Jeremih & Serani", country: "UK", level: "Silver", year: 2025 },
  { title: "Enjoy Yourself (Remix)", credit: "Pop Smoke ft. Burna Boy", country: "NZ", level: "Gold", year: 2025 },
  { title: "Tested, Approved & Trusted", country: "NZ", level: "Gold", year: 2025 },
  { title: "Real Life", credit: "feat. Stormzy", country: "NZ", level: "Gold", year: 2025 },
  { title: "Love, Damini", album: true, country: "NZ", level: "Platinum", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "PL", level: "Gold", year: 2025 },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", country: "UK", level: "Gold", year: 2025 },
  { title: "City Boys", country: "US", level: "Gold", year: 2025 },
  { title: "Real Life", credit: "feat. Stormzy", country: "AU", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "AU", level: "Gold", year: 2025 },
  { title: "I Told Them...", album: true, country: "NZ", level: "Gold", year: 2025 },
  { title: "Alone", country: "NZ", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "NZ", level: "Gold", year: 2025 },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "UK", level: "Silver", year: 2025 },

  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "ES", level: "Gold", year: 2024 },
  { title: "Love, Damini", album: true, country: "DK", level: "Platinum", year: 2024 },
  { title: "I Told Them...", album: true, country: "UK", level: "Gold", year: 2024 },
  { title: "African Giant", album: true, country: "CH", level: "Gold", year: 2024 },
  { title: "Anybody", country: "CH", level: "Gold", year: 2024 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "US", level: "Gold", year: 2024 },
  { title: "Last Last", country: "UK", level: "Platinum", x: 2, year: 2024 },
  { title: "Ye", country: "FR", level: "Platinum", year: 2024 },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", country: "UK", level: "Silver", year: 2024 },
  { title: "Play Play", credit: "J Hus ft. Burna Boy", country: "UK", level: "Platinum", year: 2024 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "UK", level: "Platinum", year: 2024 },
  { title: "Last Last", country: "DK", level: "Gold", year: 2024 },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", country: "DK", level: "Gold", year: 2024 },
  { title: "It's Plenty", country: "UK", level: "Silver", year: 2024 },
  { title: "African Giant", album: true, country: "FR", level: "Platinum", year: 2024 },
  { title: "Rollin'", credit: "Mist ft. Burna Boy", country: "UK", level: "Silver", year: 2024 },
  { title: "Alone", country: "UK", level: "Silver", year: 2024 },
  { title: "City Boys", country: "FR", level: "Gold", year: 2024 },
  { title: "City Boys", country: "UK", level: "Silver", year: 2024 },
  { title: "I Told Them...", album: true, country: "UK", level: "Silver", year: 2024 },

  { title: "Last Last", country: "FR", level: "Platinum", year: 2023 },
  { title: "Last Last", country: "NZ", level: "Platinum", year: 2023 },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", country: "UK", level: "Platinum", x: 3, year: 2023 },
  { title: "Ye", country: "US", level: "Platinum", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "DK", level: "Platinum", year: 2023 },
  { title: "Gbona", country: "PT", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "UK", level: "Silver", year: 2023 },
  { title: "Gbona", country: "UK", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "DK", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "NL", level: "Gold", year: 2023 },
  { title: "Last Last", country: "US", level: "Platinum", year: 2023 },
  { title: "Collateral Damage", country: "FR", level: "Gold", year: 2023 },
  { title: "On the Low", country: "UK", level: "Gold", year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "UK", level: "Gold", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "UK", level: "Gold", x: 4, year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "CA", level: "Platinum", year: 2023 },
  { title: "Gum Body", credit: "feat. Jorja Smith", country: "CA", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "CA", level: "Gold", year: 2023 },
  { title: "Last Last", country: "CA", level: "Platinum", x: 2, year: 2023 },
  { title: "It's Plenty", country: "CA", level: "Gold", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "FR", level: "Platinum", year: 2023 },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", country: "AU", level: "Platinum", year: 2023 },
  { title: "Anybody", country: "UK", level: "Silver", year: 2023 },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", country: "UK", level: "Silver", year: 2023 },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", country: "UK", level: "Gold", year: 2023 },
  { title: "Ye", country: "UK", level: "Platinum", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "CH", level: "Platinum", x: 2, year: 2023 },
  { title: "African Giant", album: true, country: "DK", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "SE", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "FR", level: "Gold", year: 2023 },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", country: "CH", level: "Platinum", year: 2023 },
  { title: "Last Last", country: "AU", level: "Platinum", year: 2023 },
  { title: "On the Low", country: "AU", level: "Gold", year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "AU", level: "Gold", year: 2023 },
  { title: "Gbona", country: "CH", level: "Gold", year: 2023 },
  { title: "Last Last", country: "ZA", level: "Platinum", year: 2023 },
  { title: "Last Last", country: "CH", level: "Platinum", year: 2023 },
  { title: "Ye", country: "CH", level: "Platinum", year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "CH", level: "Gold", year: 2023 },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", country: "AU", level: "Gold", year: 2023 },
];

// Helpers
export function tierOf(level: string): "diamond" | "platinum" | "gold" | "silver" {
  if (level === "Diamond") return "diamond";
  if (level === "Platinum") return "platinum";
  if (level === "Gold") return "gold";
  return "silver";
}

export const allItems: Release[] = [...albums, ...singles, ...features];
export const certifiedReleaseCount = allItems.length;
export const countryCount = Object.keys(COUNTRIES).length;
export function totalAwards() {
  return allItems.reduce((sum, it) => sum + it.certs.length, 0);
}
