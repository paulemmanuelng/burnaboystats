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
  /** The certifying body's own site — where a reader can check the plaque.
   *  The site names RIAA, BPI, SNEP and the rest on nearly every figure and
   *  linked none of them, a strange gap on a page whose whole claim is that
   *  each number is traced to the body that awarded it. Optional: only bodies
   *  whose page has been opened and confirmed are listed, because a dead link
   *  to a primary source is worse than no link. */
  url?: string;
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
  US: { name: "United States", flag: "🇺🇸", body: "RIAA", url: "https://www.riaa.com/gold-platinum/" },
  UK: { name: "United Kingdom", flag: "🇬🇧", body: "BPI", url: "https://certified-awards.bpi.co.uk/" },
  CA: { name: "Canada", flag: "🇨🇦", body: "Music Canada", url: "https://musiccanada.com/gold-platinum/" },
  FR: { name: "France", flag: "🇫🇷", body: "SNEP", url: "https://snepmusique.com/les-certifications/" },
  DE: { name: "Germany", flag: "🇩🇪", body: "BVMI", url: "https://www.musikindustrie.de/" },
  IT: { name: "Italy", flag: "🇮🇹", body: "FIMI", url: "https://www.fimi.it/" },
  // BEA renamed to BRMA and publishes no register; Ultratop keeps the Belgian roster.
  BE: { name: "Belgium", flag: "🇧🇪", body: "Ultratop", url: "https://www.ultratop.be/fr/or-platine" },
  // http:// only — https times out, which is what made earlier sweeps call it dead.
  SE: { name: "Sweden", flag: "🇸🇪", body: "GLF", url: "http://www.grammotex.se/catalogue.php?lang=en" },
  NL: { name: "Netherlands", flag: "🇳🇱", body: "NVPI", url: "https://www.goudplatina.nl/database" },
  AU: { name: "Australia", flag: "🇦🇺", body: "ARIA", url: "https://www.aria.com.au/accreditations" },
  // RMNZ publishes no standalone register: certifications ride on chart rows.
  NZ: { name: "New Zealand", flag: "🇳🇿", body: "RMNZ", url: "https://aotearoamusiccharts.co.nz/archive" },
  ES: { name: "Spain", flag: "🇪🇸", body: "Promusicae", url: "https://www.elportaldemusica.es/" },
  DK: { name: "Denmark", flag: "🇩🇰", body: "IFPI Denmark", url: "http://ifpi.dk/certificeringer-0" },
  NO: { name: "Norway", flag: "🇳🇴", body: "IFPI Norway", url: "https://ifpi.no/trofeoversikt/" },
  // Swiss certification is REQUEST-BASED, like TCSN: ifpi.ch publishes thresholds only
  // and charges CHF 75 + VAT for a GfK check, so absence never implies uncertified.
  // The awarded roster sits on hitparade.ch, which is behind a Cloudflare bot-wall.
  CH: { name: "Switzerland", flag: "🇨🇭", body: "IFPI", url: "https://www.ifpi.ch/edelmetallpruefung" },
  AT: { name: "Austria", flag: "🇦🇹", body: "IFPI Austria", url: "https://ifpi.at/auszeichnungen/" },
  HU: { name: "Hungary", flag: "🇭🇺", body: "MAHASZ", url: "https://slagerlistak.hu/arany-es-platinalemezek/adatbazis" },
  SK: { name: "Slovakia", flag: "🇸🇰", body: "ČNS IFPI" },
  CZ: { name: "Czech Republic", flag: "🇨🇿", body: "ČNS IFPI" },
  PL: { name: "Poland", flag: "🇵🇱", body: "ZPAV", url: "https://www.olis.pl/charts/oficjalna-lista-wyroznien/platynowe-plyty" },
  PT: { name: "Portugal", flag: "🇵🇹", body: "AFP", url: "https://www.audiogest.pt/" },
  GR: { name: "Greece", flag: "🇬🇷", body: "IFPI Greece" },
  ZA: { name: "South Africa", flag: "🇿🇦", body: "RiSA", url: "https://risa.org.za/" },
  // TCSN's public register (turntablecharts.com/certification) is REQUEST-based
  // and paid — "certification is not automatic" — so it will never mirror every
  // award, and absence from it proves nothing. Silver IS a real TCSN tier (their
  // application form: "Silver, Gold, Platinum or Multi-Platinum") even though
  // the register currently displays no Silver awards for anyone. Do not "clean
  // up" NG entries against the register — see PR #97 and its correction comment.
  NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable (TCSN)", url: "https://turntablecharts.com/certification" },
  BR: { name: "Brazil", flag: "🇧🇷", body: "Pro-Música Brasil", url: "https://pro-musicabr.org.br/certificados/" },
  CO: { name: "Colombia", flag: "🇨🇴", body: "Pro Musica Colombia", url: "https://pro-musica.co/" },
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

  // SWEDEN. Ifpi Sverige stopped publishing an awarded-certification register
  // after 2004, which is why these rows sat unsourced for so long. The tiers are
  // now backed by records in Grammotex, the Swedish record industry's own trade
  // database, which carries a "Guld/Platina" line per article giving tier,
  // certificate number and award date. Record pages are PUBLIC at
  //   http://sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=<id>
  // (HTTP only -- https times out, which is what made earlier sweeps call the
  // site dead and conclude, wrongly, that Swedish certs were unverifiable).
  // Only the SEARCH is login-walled, so ids must come from a trade account.
  //
  // READ 27 Aug 2026, all four awarded 2023-08-16:
  //   On the Low      Platinum  cert. no. 10448  (ISRC USAT21812249)
  //   Ye ("Yeh")      Platinum  cert. no. 10450  (ISRC USAT21800327)
  //   African Giant   Guld      cert. no. 10452  (album)
  //   Gbona           Guld      cert. no. 10453  (sart=9225432, read directly)
  // 10449 and 10451 fall inside the same run and are unaccounted for.
  //
  // PROVENANCE CAVEAT, and it matters. Grammotex is badged to Grammofon-
  // leverantorernas Forening (GLF), which is NOT the same legal person as Ifpi
  // Sverige: separate organisationsnummer (GLF 769601-2397, an ekonomisk
  // forening; Ifpi Svenska Gruppen 802005-0186, an ideell forening) and
  // separate legal forms. They share the switchboard 08-735 97 50, which
  // evidences a shared secretariat, NOT shared identity -- an earlier version of
  // this comment inferred exactly that and was wrong. GLF ran the official
  // Swedish charts from 1975 until those duties passed to Ifpi Sverige, and
  // sv.wikipedia records GLF as having ceased in 2021, yet these certificates
  // are dated 2023. So the Guld/Platina field is the industry's own record of a
  // certification, not demonstrably the certifying body's own register entry.
  //
  // The TIERS are nonetheless the best-evidenced Swedish rows this file has
  // ever carried: Ye, African Giant and Gbona already held these exact tiers
  // before Grammotex was read, and On the Low's Platinum is independently
  // asserted elsewhere. Treat the certificate numbers as strong corroboration
  // and not yet as a body reading. Closing it properly means one email to
  // info@ifpi.se, who answer certification enquiries.

// Burna Boy's own (lead) singles.
export const singles: Release[] = [
  // Billed "Shakira & Burna Boy" — Deezer's contributor list for every edition
  // reads ["Shakira", "Burna Boy"], Wikipedia's infobox says "Shakira and Burna
  // Boy", and Billboard writes it with an ampersand. The "X" this once carried
  // was a site invention and the only credit here not in the "A & B" / "A ft. B"
  // form the rest of the file uses.
  //
  // The US plaque is the site's ONLY Latin-program award, and the program is not
  // interchangeable with the main one: RIAA Latin (Premios de Oro y Platino)
  // certifies at 30,000 units for Oro, 60,000 for Platino and 120,000 for 2x —
  // against 500,000 and 1,000,000 for the standard awards — and needs a
  // recording that is at least 51% Spanish. So this 2x Platino is ~120,000
  // units, NOT 2,000,000, which is why `body` overrides it to "RIAA Latin" and
  // the explorer paints a program marker beside the tier. Never total it against
  // standard-programme plaques as if the tiers meant the same thing.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", year: 2026, certs: [
    { c: "US", level: "Platinum", x: 2, body: "RIAA Latin" },
    // Colombia ran no national certifier for years — ASINCOL closed around 2008 —
    // so Colombian "disco de oro" announcements were label-issued, and this one is.
    // Pro Musica Colombia (the IFPI national group) DOES publish a register, but its
    // roster runs only to Aug 2024 and so cannot speak to a 2026 award either way.
    { c: "CO", level: "Gold", body: "Sony Music Colombia" }, { c: "ES", level: "Platinum" }, { c: "FR", level: "Platinum" }, { c: "HU", level: "Platinum" }, { c: "SK", level: "Platinum" }, { c: "PT", level: "Platinum" }, { c: "GR", level: "Gold" }, { c: "UK", level: "Silver" }, { c: "CZ", level: "Gold" }, { c: "IT", level: "Gold" },
  ] },
  { title: "Last Last", year: 2022, certs: [
    { c: "CA", level: "Platinum", x: 4 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "UK", level: "Platinum", x: 2 },
    { c: "NG", level: "Platinum", x: 5 }, { c: "US", level: "Platinum" }, { c: "AU", level: "Platinum" },
    { c: "FR", level: "Diamond" }, { c: "SE", level: "Platinum" }, { c: "CH", level: "Platinum" },
    { c: "AT", level: "Gold" }, { c: "DK", level: "Gold" }, { c: "ZA", level: "Platinum" },
  ] },
  // Read body-by-body on 27 Aug 2026 — SNEP, Music Canada, BPI, IFPI Schweiz,
  // RIAA, ARIA, IFPI Danmark and TCSN each in their own register. The tiers
  // already here all held except Nigeria, which the TCSN register gives as GOLD,
  // not Silver. Sweden is new, from GLF/Grammotex: Platinum, certificate no.
  // 10448, awarded 2023-08-16.
  //  FR  SNEP "date de constat" 14/07/2022; SNEP publishes no unit count.
  //  UK  BPI publishes the escalation: Silver 16 Oct 2020, Gold 7 Apr 2023,
  //      Platinum 23 Jan 2026. Its register needs an HX-Request header now.
  //  CH  swisscharts.com mirror; IFPI Schweiz calls it non-exhaustive and
  //      label-issued, and publishes a YEAR only (2023).
  //  NG  TCSN archive. Its "Feb 6, 2025" stamp is shared by 1,274 entries — a
  //      migration batch date, not an award date, so no dated-log row.
  //  NZ  NOT re-read, and it should not be quietly treated as if it were.
  //      Recorded Music NZ does publish certifications, but as a field on a
  //      CHART ROW (aotearoamusiccharts.co.nz embeds
  //      "certification":{"nz":…,"type":…,"multiple":…} per row) rather than as
  //      a standalone register. "On the Low" has no New Zealand chart entry, so
  //      there is no row for the marker to hang on — structurally the same
  //      problem as Sweden. The Platinum here predates this sweep and stands.
  { title: "On the Low", year: 2018, certs: [
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "CH", level: "Platinum" }, { c: "SE", level: "Platinum" },
    { c: "US", level: "Gold" }, { c: "AU", level: "Gold" }, { c: "DK", level: "Gold" },
    { c: "NG", level: "Gold" },
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
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Update", year: 2025, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Love", year: 2025, certs: [
    { c: "NG", level: "Platinum", x: 3 },
  ] },
  { title: "Dem Dey", year: 2025, certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Giza", year: 2025, certs: [
    { c: "NG", level: "Platinum", x: 3 },
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
    { c: "NG", level: "Platinum" },
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
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Platinum", x: 5 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "CH", level: "Platinum", x: 2 }, { c: "ZA", level: "Platinum", x: 2 },
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "NL", level: "Platinum" },
    { c: "DK", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "PT", level: "Gold" },
    { c: "DE", level: "Gold" }, { c: "NG", level: "Platinum" }, { c: "SE", level: "Platinum" },
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
    // TCSN (TurnTable) Platinum, 100,000 units — via the song's certification
    // table sourced to TCSN's database. No announcement date published, so it
    // sits here and not in the dated log.
    { c: "NG", level: "Platinum" },
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
    { c: "CA", level: "Gold" }, { c: "NG", level: "Platinum" },
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
  // TCSN (Nigeria) register, read directly at turntablecharts.com/certification
  // on 12 Aug 2026 — the relaunch batch is dated 6 Feb 2026. Four new plaques
  // and four upgrades; upgrade rows APPEND (the earlier tier's row stays).
  { title: "TaTaTa", credit: "feat. Travis Scott", country: "NG", level: "Platinum", year: 2026 },
  { title: "Update", country: "NG", level: "Platinum", year: 2026 },
  { title: "Love", country: "NG", level: "Platinum", x: 3, year: 2026 },
  { title: "Dem Dey", country: "NG", level: "Gold", year: 2026 },
  { title: "Giza", credit: "feat. Seyi Vibez", country: "NG", level: "Platinum", x: 3, year: 2026 },
  { title: "Bundle by Bundle", country: "NG", level: "Platinum", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "NG", level: "Platinum", year: 2026 },
  { title: "Talibans II", credit: "with Byron Messia", country: "NG", level: "Platinum", year: 2026 },
  // APPEND upgrades, never rewrite them. This is a log of award EVENTS, not of
  // current status: when a release moves Gold → Platinum, the Gold stays and the
  // Platinum is added as its own row. The page says so in its own words ("a
  // release can appear twice in a year if it was certified at two tiers"), and
  // the per-release `certs` arrays above are what track current level.
  // "Dai Dai" in Spain was rewritten in place on 27 Jul 2026, which silently
  // deleted a real award and left 2026 one short; restored 11 Aug 2026.
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
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "US", level: "Platinum", x: 2, year: 2026, body: "RIAA Latin" },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "CO", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "ES", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "FR", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "HU", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "SK", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "PT", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "GR", level: "Gold", year: 2026 },
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

  // "On the Low" awards that were confirmed at the body on 27 Aug 2026 but had
  // never been logged here. The UK/CA/DK/AU/NZ rows were already present above.
  { title: "On the Low", country: "CH", level: "Platinum", year: 2023 },
  { title: "On the Low", country: "FR", level: "Diamond", year: 2022 },
  { title: "On the Low", country: "US", level: "Gold", year: 2022 },
  { title: "On the Low", country: "UK", level: "Silver", year: 2020 },

  // GLF/Grammotex, read 27 Aug 2026. All four certified 2023-08-16.
  { title: "On the Low", country: "SE", level: "Platinum", year: 2023 },
  { title: "Ye", country: "SE", level: "Platinum", year: 2023 },
  { title: "African Giant", album: true, country: "SE", level: "Gold", year: 2023 },
  { title: "Gbona", country: "SE", level: "Gold", year: 2023 },
  { title: "Last Last", country: "FR", level: "Platinum", year: 2023 },
  { title: "Last Last", country: "NZ", level: "Platinum", year: 2023 },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", country: "UK", level: "Platinum", x: 3, year: 2023 },
  { title: "Ye", country: "US", level: "Platinum", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "DK", level: "Platinum", year: 2023 },
  { title: "Gbona", country: "PT", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "UK", level: "Silver", year: 2023 },
  { title: "Gbona", country: "UK", level: "Gold", year: 2026 },
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
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "ES", level: "Platinum", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "FR", level: "Platinum", year: 2026 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "SE", level: "Platinum", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "SK", level: "Platinum", year: 2026 },
  // Gold→Platinum upgrade, verified in AFP/Audiogest's own week-31 2026 PDF
  // (Top 200 Singles, pos. 1, Gal. "PL", 11th week on top).
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "PT", level: "Platinum", year: 2026 },
  // Announced by the BRIT Awards' own account (#BRITcertified), 7 Aug 2026.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "UK", level: "Silver", year: 2026 },
  // 225th: gold badge ("Zlatý singl") on ČNS IFPI's own Singles Digital Top 100, week 32/2026 — 2.5M streams.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "CZ", level: "Gold", year: 2026 },
  // Gold→Platinum upgrade — verified at MAHASZ's own register search
  // (slagerlistak.hu/arany-es-platinalemezek/kereso) 14 Aug 2026, which returns
  // the row under Platinalemez and nothing under Aranylemez. An upgrade, so the
  // worldwide plaque total stays put while Platinum crosses 100; the HU Gold
  // row above stays, per the append-never-rewrite rule.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "HU", level: "Platinum", year: 2026 },
  // FIMI week 33/2026 — read at the register's own search endpoint
  // (fimi.it/ajax/filter-certificazioni.php, formato=2&year=2026): "DAI DAI /
  // SHAKIRA & BURNA BOY / COLUMBIA-ATLANTIC / oro / Singoli Online". Burna's
  // second Italian certification, after Jerusalema (Remix)'s 4x Platinum.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "IT", level: "Gold", year: 2026 },
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

// "Dai Dai"'s OWN certifications only — so the Dai Dai page never borrows Burna
// Boy's artist-wide 2026 total. Counts distinct country certs for the song.
// The dated by-year log counts INTERNATIONAL certifications only. The logs
// for earlier years predate Nigeria's TCSN register (relaunched Feb 2026) and
// carry international awards alone, so mixing the 8 NG events into 2026 would
// make the year-on-year comparison read high. Nigerian plaques still count
// everywhere else: the worldwide total, the country grid, every release's row.
export const intlCertHistory = certHistory.filter((e) => e.country !== "NG");

/** Every year the international log actually covers, newest first.
 *
 *  Derived, because both year rails used to hardcode [2026, 2025, 2024, 2023].
 *  The log holds 2022 and 2020 events too — including the French Diamond for
 *  "On the Low", the rarest tier on the site — and with no "All" chip they were
 *  reachable from neither layout. A literal would also have quietly stopped
 *  covering the current year on 1 Jan 2027. */
export const certHistoryYears = [...new Set(intlCertHistory.map((e) => e.year))].sort(
  (a, b) => b - a,
);

/** International plaques logged in one year. */
export const intlCertsInYear = (year: number) =>
  intlCertHistory.filter((e) => e.year === year).length;

/** The best year before `year`, as [year, count] — or null if there is none. */
export const bestIntlYearBefore = (year: number): [number, number] | null => {
  const prior = certHistoryYears.filter((y) => y < year);
  if (!prior.length) return null;
  return prior
    .map((y) => [y, intlCertsInYear(y)] as [number, number])
    .sort((a, b) => b[1] - a[1])[0];
};

/** International certifications awarded in a given calendar year — the "most
 *  in one year" record on /records/firsts derives from this rather than
 *  freezing at the threshold it crossed. */
export const certsInYear = (year: number) =>
  intlCertHistory.filter((e) => e.year === year).length;

// The plaques the song currently holds — one per country at its highest tier,
// same convention as totalAwards(). Counted off the release list rather than
// the dated log: France's Gold-then-Platinum upgrade gives the log two rows
// for one plaque, and this figure sits beside the badge row it must match.
export const daiDaiCertCount =
  allItems.find((r) => r.title === "Dai Dai")?.certs.length ?? 0;
