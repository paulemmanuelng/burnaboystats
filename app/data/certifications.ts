// ============================================================
//  GLOBAL CERTIFICATIONS DATA
//  Sources: RIAA, BPI, Music Canada, SNEP, IFPI Sverige, NVPI, ARIA,
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
  /** Sleeve art, hotlinked from Deezer's CDN — the same source and the same
   *  500x500 rendition the board's 656 covers use, so the compare page does not
   *  serve two different image sizes side by side.
   *
   *  Matched by artist AND title, never title alone, and every match required
   *  Burna Boy to be a credited contributor on the Deezer record. Three releases
   *  are deliberately WITHOUT art because Deezer carries no legitimate copy:
   *  "Be Honest" and "Tshwala Bam (Remix)" return only 8-Bit Arcade chiptune and
   *  karaoke re-recordings, whose titles contain the real artists' names and
   *  therefore sail through a substring check, and "Do I" returns only Phyno's
   *  remix, not a Burna lead. ("B.D'or" was a fourth until 18 Sep 2026, when the
   *  plaque turned out to be Burna Boy's own "B. D'OR" ft. Wizkid, which Deezer
   *  does carry.) Undefined is the
   *  correct answer there — a tribute sleeve would be a visible lie. */
  cover?: string;
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
  // Sweden's certifier is IFPI Sverige (Paul, 24 Sep 2026). GLF is named only
  // as the operator of the register the plaques are read in, Grammotex, which
  // is where the link goes — see the provenance caveat below.
  SE: { name: "Sweden", flag: "🇸🇪", body: "IFPI Sverige", url: "http://www.grammotex.se/catalogue.php?lang=en" },
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
  // ČNS IFPI publishes no standalone award list: the tier is printed inside the
  // weekly chart row ("Zlatý singl" / "Platinový singl"), so it is visible only
  // while a title is in that week's Top 100. Chart 43 is Slovakia, 30 Czechia.
  SK: { name: "Slovakia", flag: "🇸🇰", body: "ČNS IFPI (Slovakia)", url: "https://ifpicr.cz/hitparada/43" },
  CZ: { name: "Czech Republic", flag: "🇨🇿", body: "ČNS IFPI (Czechia)", url: "https://ifpicr.cz/hitparada/30" },
  PL: { name: "Poland", flag: "🇵🇱", body: "ZPAV", url: "https://www.olis.pl/charts/oficjalna-lista-wyroznien" },
  // The register is the weekly TOP's "Gal." (Galardão) column — OU = Ouro,
  // PL…9PL = Platina — published as one PDF per week under this index. AFP's own
  // site afp.org.pt is dead (Wayback stops in Jan 2016), and audiogest.pt's home
  // page carries no certification data, so this is the link that reaches it.
  // Awards to titles NOT charting that week never appear here; those are
  // announced monthly on facebook.com/audiogest. See docs/sourcing/RESUME.md.
  PT: { name: "Portugal", flag: "🇵🇹", body: "AFP", url: "https://www.audiogest.pt/tabelas-oficiais-de-vendas-?lang=pt" },
  // Greece publishes certifications only as an unlabelled "Award" column (G / P /
  // 2P / 3P / D) inside the weekly international digital singles chart, and the
  // file is overwritten each week — so a title is checkable only while it charts.
  GR: { name: "Greece", flag: "🇬🇷", body: "IFPI Greece", url: "https://ifpi.gr/digital_ien.html" },
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
  { title: "I Told Them…", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
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
  // Ifpi Sverige's certification desk.

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
  // recording that is at least 51% Spanish. So this 6x Platino is ~360,000
  // units (6 x 60,000), NOT 6,000,000, which is why `body` overrides it to "RIAA
  // Latin" and the explorer paints a program marker beside the tier. Never total
  // it against standard-programme plaques as if the tiers meant the same thing.
  //
  // 6x is RIAA's own statement: its verified @riaa_awards Instagram post of
  // 23 Sep 2026, 20:24 UTC (instagram.com/p/DdpKVUjjFVf, "RIAA's 2026 Songs of
  // the Summer"), slide 3, badge "RIAA LATIN PLATINUM 6X". The database still
  // read "2X PLATINO, July 9, 2026" on 24 Sep (award 451299) — its Latin rows
  // lag; the same post's other three badges (Zara Larsson 1X, Ariana Grande 1X,
  // Ella Langley 6X Platinum) all match the database. Paul, 24 Sep 2026: add it.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", year: 2026, cover: "https://cdn-images.dzcdn.net/images/cover/a7f9bae0243c512059298a68d09f45a1/500x500-000000-80-0-0.jpg", certs: [
    { c: "US", level: "Platinum", x: 6, body: "RIAA Latin" },
    // Colombia ran no national certifier for years — ASINCOL closed around 2008 —
    // so Colombian "disco de oro" announcements were label-issued, and this one is.
    // Pro Musica Colombia (the IFPI national group) DOES publish a register, but its
    // roster runs only to Aug 2024 and so cannot speak to a 2026 award either way.
    // FR upgraded Platinum -> Diamond, read in SNEP's own register
    // (snepmusique.com/les-certifications/?interprete=Shakira): "Singles | DAI DAI |
    // SHAKIRA & BURNA BOY | SONY MUSIC LATIN / SONY MUSIC ENTERTAINMENT | Diamant",
    // date de constat 27/08/2026, three months from release. One plaque per title
    // per country at its CURRENT tier, so the Diamond replaces the Platinum.
    { c: "CO", level: "Gold", body: "Sony Music Colombia" }, { c: "ES", level: "Platinum" }, { c: "FR", level: "Diamond" }, { c: "HU", level: "Platinum" }, { c: "SK", level: "Platinum" }, { c: "PT", level: "Platinum" }, { c: "GR", level: "Platinum" }, { c: "UK", level: "Silver" }, { c: "CZ", level: "Gold" }, { c: "IT", level: "Gold" },
    // PL read in ZPAV's own award register via olis.pl's API (category 3 =
    // "oficjalna lista wyróżnień", subcategory 6 = "złote płyty"): title "Dai Dai",
    // artist "Shakira, Burna Boy", contractor Sony Music Entertainment, format
    // "singiel". Gold is the current tier — the platinum and diamond registers
    // carry no Dai Dai row, and both are ordered newest-first, so a later Polish
    // upgrade would sit at the top of one of them rather than beyond the read.
    { c: "PL", level: "Gold" },
    // IFPI Austria's own Gold & Platin database, searched by title on 3 Sep 2026:
    // "Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026",
    // one row and the credit matches. Austrian Platinum for a single is 30,000.
    { c: "AT", level: "Platinum" },
    // Ultratop (BRMA) lists it at 10/08/2026: Goud on ultratop.be/nl/goud-platina/2026/singles;
    // the page sits behind a Cloudflare bot check, so it was read 19 Sep 2026 from
    // Paul's own browser (screenshot of the body's page, URL in frame).
    { c: "BE", level: "Gold" },
    // Grammotex record for "SHAKIRA & BURNA BOY — DAI DAI" (ISRC USQX92602558, sart
    // 15311162): "Guld/Platina: Platina - cert.nr 11317 - 2026-09-18", read 20 Sep
    // 2026 at sys2.grammotex.se/netdata/grp006.MBR/artdata?sart=15311162 (http only).
    // The record carried no Guld/Platina line on 27 Aug (docs/sourcing/SWEDEN-FINAL.md).
    { c: "SE", level: "Platinum" },
    // Music Canada's database (musiccanada.com/gold-platinum, read 22 Sep 2026):
    // "September 21, 2026 · Double Platinum Single · Shakira, Burna Boy · Dai Dai ·
    // Sony Music Latin / Sony Music Entertainment Canada Inc." — the only row for
    // the title, so it went straight to 2× (160,000 units at the body's levels).
    { c: "CA", level: "Platinum", x: 2 },
    // BVMI's own Gold-/Platin-Datenbank, searched by title on 23 Sep 2026
    // (musikindustrie.de …/datenbank/?action=suche&strTitel=Dai+Dai): "Shakira &
    // Burna Boy | Dai Dai | 2026 | Single | 1x Gold | Sony Music Entertainment
    // Germany GmbH | Epic" — one row, and the credit matches. A German single's
    // Gold is 300,000 units since 30 June 2023.
    { c: "DE", level: "Gold" },
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
  // NG is GOLD since 23 Sep 2026: TCSN's own register, read in the raw Wayback
  // capture of 21 Feb 2026 (20260221224010id_), holds id 1956 "Ye | Burna Boy |
  // Single | Gold", superseding the Silver (id 970) the site carried. The live
  // page serves only the first 500 rows of that batch; this row is below the
  // cap. docs/sweeps/sweep-2026-09-23.md.
  { title: "Ye", year: 2018, certs: [
    { c: "US", level: "Platinum" }, { c: "UK", level: "Platinum" }, { c: "SE", level: "Platinum" },
    { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "FR", level: "Platinum" },
    { c: "CH", level: "Platinum" }, { c: "NG", level: "Gold" },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" },
    { c: "SE", level: "Platinum" }, { c: "DK", level: "Platinum" }, { c: "FR", level: "Gold" },
    { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "CH", level: "Gold" },
  ] },
  { title: "City Boys", year: 2023, certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "CA", level: "Platinum" }, { c: "FR", level: "Platinum" },
    { c: "UK", level: "Gold" }, { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "PT", level: "Gold" },
  ] },
  { title: "Gbona", year: 2018, cover: "https://cdn-images.dzcdn.net/images/cover/f270e126a51295c0042411f529b2f9d6/500x500-000000-80-0-0.jpg", certs: [
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum" }, { c: "CH", level: "Platinum" },
    { c: "SE", level: "Gold" }, { c: "DK", level: "Gold" }, { c: "PT", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Gold" },
  ] },
  { title: "It's Plenty", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 3 }, { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" },
    { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Alone", year: 2022, certs: [
    { c: "NG", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" },
    { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Anybody", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/b4efa5d273887ff67773697206c618bc/500x500-000000-80-0-0.jpg", certs: [
    { c: "CA", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/5f6dd9dc9d90dd4eb6001f5413aec4b8/500x500-000000-80-0-0.jpg", certs: [
    { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Real Life", credit: "feat. Stormzy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" }, { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Gum Body", credit: "feat. Jorja Smith", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/3cfb4e9b823e7c1c610382ee27cb7575/500x500-000000-80-0-0.jpg", certs: [
    { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Tested, Approved & Trusted", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Kilometre", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/ec97a71561e02e3ce53effc898eb5786/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" }, { c: "CA", level: "Gold" },
  ] },
  { title: "Higher", year: 2024, cover: "https://cdn-images.dzcdn.net/images/cover/a01a6cc7f3c7d316f597492e03caa8fe/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 4 },
  ] },
  { title: "Common Person", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 3 },
  ] },
  // Sleeve added 23 Sep 2026 — the row had none: Deezer's single 760108371.
  { title: "TaTaTa", credit: "feat. Travis Scott", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/370a2314959d2766aad3d693279f0220/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Update", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/ff3c52d12ace7d1e6d256b73e163edcb/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Love", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/9dda72a8a76755ea87382bf0a6f8eab7/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 3 },
  ] },
  { title: "Dem Dey", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  // Year and credit were copied from the neighbours this row arrived with: the
  // Feb 2026 TCSN batch is four No Sign of Weakness tracks (2025, uncredited)
  // plus Giza, which is neither. "Giza (feat. Seyi Vibez)" is an I Told Them…
  // track — albums.ts dates that album 2023 — and the credit was already on the
  // chart row and on this file's own certHistory entry below. 2026 is the AWARD
  // year and belongs there, not here; this field is the release year.
  { title: "Giza", credit: "feat. Seyi Vibez", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 3 },
  ] },
  // NOT a Burna Boy lead, and it sat here as one until 10 Sep 2026. Confirmed
  // at two sources, one of them the body that issued the plaque:
  //   • TCSN's own register (turntablecharts.com/certification) files the row as
  //     "Do I | Phyno & Burna Boy | Single | PLATINUM" — Phyno first-billed.
  //   • Spotify's recording (7yKjDDd9w01nFEOD5adoHq) reads "Phyno, Burna Boy ·
  //     Do I (Remix) · Song · 2023"; kworb asterisks it as a featured credit.
  // The title stays "Do I" because that is how the register that awarded the
  // plaque writes it — the site follows the certifying body on cert data.
  //
  // It KEEPS its place among the singles, on the same reasoning as "Dai Dai"
  // above: an "A & B" joint billing is treated here as a co-lead, an "A ft. B"
  // as a feature. Burna is second-billed on both. If that convention is ever
  // revisited, it must move BOTH records, not one.
  { title: "Do I", credit: "Phyno & Burna Boy", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/060b1718eafdeecf3642fb53b072d2e8/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Different Size", credit: "feat. Victony", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Big 7", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/f5f99a13558a35bbec024b3587357300/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Way Too Big", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "23", year: 2020, certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Dey Play", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "On Form", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Bundle by Bundle", year: 2024, cover: "https://cdn-images.dzcdn.net/images/cover/210cc4c59e508f189c0f69ae6d01ba14/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  // Filed under "B.D'or — Bramsito ft. Burna Boy, 2019" (the French single)
  // from the June 2026 build until 18 Sep 2026. TCSN's register has no such row:
  // its plaque is "B. D'Or — Burna Boy ft. Wizkid", Single, Platinum, certified
  // 8 Jun 2023 (id 184; re-listed 5 Jan and 6 Feb 2025) — Burna Boy's own 2021
  // single, which the Nigeria sweep found at No. 2. RETRACTIONS #12.
  { title: "B. D'OR", credit: "feat. Wizkid", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/22ffd179c90c11da9bbb429c9c13d4a4/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Question", credit: "feat. Don Jazzy", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/f1ded2f2f5b80c9b054ee9f742cce6fd/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Want It All", credit: "feat. Polo G", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/65652c3850bfa36fcf7fe016ffe792f3/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Cloak & Dagger", credit: "feat. J Hus", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Normal", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Science", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Vanilla", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Jagele", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "I Told Them", credit: "feat. GZA", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Rollercoaster", credit: "feat. J Balvin", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/7048ff78d00d6c89e075a75b37cd6380/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  // No Sign of Weakness tracks (2025), added 23 Sep 2026 — the four Golds here
  // and the four Silvers below. TCSN's own register, read in the raw Wayback
  // capture of 21 Feb 2026 (20260221224010id_; ids 2116, 2038, 1996, 2101),
  // which the live page's 500-row cap cuts off. No award date is published: the
  // rows arrived between 8 and 21 Feb 2026, so the dated log carries them as
  // 2026 with no day. Sleeve: the album's (Deezer 784874611), as "Dem Dey"
  // uses, for the tracks that were only ever album tracks. "Sweet Love" was
  // released as a single on 1 May 2025 with its own sleeve, so it carries that
  // one, the way "Update" and "Love" do; "Change Your Mind"'s single reuses the
  // album picture, so the album sleeve stands (cover check, 23 Sep 2026).
  // docs/sweeps/sweep-2026-09-23.md, docs/sourcing/BURNA-FINDINGS.md.
  { title: "No Panic", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Buy You Life", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "28 Grams", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Born Winner", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Wild Dreams", credit: "feat. Khalid", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Glory", credit: "feat. Ladysmith Black Mambazo", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Solid", credit: "feat. Blxst & Kehlani", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Dirty Secrets", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Whiskey", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Bank On It", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "If I'm Lying", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "No Fit Vex", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Thanks", credit: "feat. J. Cole", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Onyeka (Baby)", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "How Bad Could It Be", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Level Up", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd271b2967aa9a67f7cb23f956c58b10/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Wonderful", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/2fff7aefcfa8eaed5d2843521c2b0d55/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Virgil", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/1120c9c53e59dcbaffb9d7f77908db16/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  // The TITLE TRACK, not the album. TCSN id 2247 reads "No Sign Of Weakness |
  // Burna Boy | Single | Silver", and every row of that February batch is a
  // single. The album of the same name holds no certification and is not in
  // `albums` above — so every title-keyed join (the album page, the homepage
  // album cards, the ledger's page links, search, /compare) must look in the
  // array for its own kind. tests/certs.test.ts holds the two apart.
  { title: "No Sign of Weakness", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  // TCSN ids 2316 ("Burna Boy ft. Shaboozey"), 2423 ("Burna Boy ft. Mick
  // Jagger") and 2522 ("Sweet Love (Burna Boy)" — the parenthesis is TCSN's
  // owner tag; no other "Sweet Love" row exists).
  { title: "Change Your Mind", credit: "feat. Shaboozey", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Empty Chairs", credit: "feat. Mick Jagger", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/af66f2a3785c256727e0a2b234a3b90a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Sweet Love", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/144e7407b7ce92a7a741d3fceaf8ccb8/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  { title: "Collateral Damage", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/3cfb4e9b823e7c1c610382ee27cb7575/500x500-000000-80-0-0.jpg", certs: [
    { c: "FR", level: "Gold" },
  ] },
  { title: "Secret", credit: "feat. Jeremih & Serani", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/3cfb4e9b823e7c1c610382ee27cb7575/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Silver" },
  ] },
];

// Songs where Burna Boy is a featured/guest artist.
export const features: Release[] = [
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/ad058398e5f4643b846532fe27cfd2f1/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Platinum", x: 5 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "CH", level: "Platinum", x: 2 }, { c: "ZA", level: "Platinum", x: 2 },
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "NL", level: "Platinum" },
    { c: "DK", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "PT", level: "Gold" },
    { c: "DE", level: "Gold" }, { c: "NG", level: "Platinum" }, { c: "SE", level: "Platinum" },
  ] },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", year: 2024, cover: "https://cdn-images.dzcdn.net/images/cover/8f63a01593c329798544895109f36f8c/500x500-000000-80-0-0.jpg", certs: [
    { c: "FR", level: "Platinum" }, { c: "ES", level: "Platinum" }, { c: "PL", level: "Platinum" }, { c: "UK", level: "Gold" },
    { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "AT", level: "Gold" }, { c: "PT", level: "Gold" },
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, certs: [
    { c: "FR", level: "Diamond" }, { c: "AU", level: "Platinum" }, { c: "UK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "CA", level: "Gold" }, { c: "DK", level: "Gold" },
  ] },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/0a54050a9f976757a64095e18885b099/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Platinum", x: 3 }, { c: "NZ", level: "Platinum" }, { c: "DK", level: "Platinum" },
    { c: "AU", level: "Gold" }, { c: "BR", level: "Gold" }, { c: "PT", level: "Gold" },
  ] },
  { title: "Jerusalema (Remix)", credit: "Master KG, Nomcebo & Burna Boy", year: 2020, certs: [
    { c: "FR", level: "Diamond" }, { c: "IT", level: "Platinum", x: 4 }, { c: "BE", level: "Platinum", x: 2 },
    { c: "DE", level: "Platinum" }, { c: "PT", level: "Platinum", x: 2 }, { c: "AT", level: "Gold" },
  ] },
  // Switzerland is GOLD, not Platinum — corrected 11 Sep 2026 after the compare
  // page surfaced that this row and Wizkid's board row priced the same recording
  // differently. Three independent reads of IFPI Schweiz's register (the
  // Edelmetall lists on hitparade.ch / swisscharts.com, 2020–2026, and Wayback
  // captures from Feb 2024 and Jan 2026) all print one row: "Wizkid feat. Burna
  // Boy | Ginger | Single | Sony | Gold | 2023", badge award_gold.svg. No
  // Platinum row exists in any year. Wizkid's row was right; this one was not.
  // Every OTHER Swiss plaque here was checked against the same lists and matches.
  // "No Stress" (Made in Lagos track 8) is NOT here by design: RiSA's register
  // prints "Wizkid feat. Burna Boy | No Stress | 11 Sep, 2023 | Platinum" (read
  // 17 Sep 2026), but the recording's own credits are Wizkid solo — Burna Boy
  // features on Ginger only — so the exclusion rests on the credits, not on the
  // register (the Bad Influence ruling). docs/sourcing/RETRACTIONS.md #2 and
  // BOARD-FINDINGS.md carry the correction.
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg", certs: [
    { c: "ZA", level: "Platinum", x: 2 }, { c: "NG", level: "Platinum" }, { c: "US", level: "Gold" },
    { c: "CA", level: "Gold" }, { c: "CH", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/b34fa153a6137126a0c37972033c79fc/500x500-000000-80-0-0.jpg", certs: [
    // UK is SILVER, read at BPI's own register on 16 Sep 2026: "SAM SMITH FT
    // BURNA BOY | MY OASIS | Most Recent Certification Silver | 22 August 2025 |
    // Certification history: 22 August 2025 Silver" — one award, no Gold. It
    // was Silver here until 1 Jul 2026, when a typed 2025 event list bumped it.
    { c: "BR", level: "Platinum" }, { c: "AU", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Donne-moi l'accord", credit: "Dadju ft. Burna Boy", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/046cf3983b563fea65147732eeb653c2/500x500-000000-80-0-0.jpg", certs: [
    { c: "FR", level: "Platinum" },
  ] },
  { title: "Play Play", credit: "J Hus ft. Burna Boy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/fd4f0303fd35a1ecdfaa76ea1a4e29a4/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Platinum" },
  ] },
  { title: "Sungba (Remix)", credit: "Asake ft. Burna Boy", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum", x: 4 }, { c: "UK", level: "Silver" },
  ] },
  { title: "Tshwala Bam (Remix)", credit: "TitoM & Yuppe ft. S.N.E & Burna Boy", year: 2024, certs: [
    { c: "NG", level: "Platinum", x: 4 },
  ] },
  { title: "Second Sermon (Remix)", credit: "Black Sherif ft. Burna Boy", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/6d35385e5b10cc9daea1e7c8dfdf5cff/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Platinum" },
  ] },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/eceac2149053e31a54687b05e125c93d/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" },
  ] },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025, certs: [
    { c: "NZ", level: "Platinum" }, { c: "UK", level: "Gold" },
    // AFP/Audiogest Ouro, March 2026 batch — read off Audiogest's own award
    // card ("Wgft / Gunna feat. Burna Boy / Warner Music"), which is where
    // Portugal announces awards to titles that were not charting when the
    // plaque landed. It charted Portugal for four weeks in Feb 2026 with the
    // Gal. column blank throughout and left before the award, so no weekly TOP
    // carries it and the 2026 annual is unpublished.
    { c: "PT", level: "Gold" },
    // TCSN (TurnTable) Platinum, 100,000 units — via the song's certification
    // table sourced to TCSN's database. No announcement date published, so it
    // sits here and not in the dated log.
    { c: "NG", level: "Platinum" },
  ] },
  // NG Silver since 23 Sep 2026: TCSN id 2562, "4 Kampe Ii | Joe Dwet File &
  // Burna Boy | Single | Silver", read in the register's 21 Feb 2026 capture.
  // The register bills it "A & B", which under the "Do I" convention above
  // would read as a co-lead; it stays filed as a feature, as the French Gold
  // is. The plaque is the same either way.
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", year: 2025, cover: "https://cdn-images.dzcdn.net/images/cover/9817ac9ada270ea7c1f56753c0cabf33/500x500-000000-80-0-0.jpg", certs: [
    { c: "FR", level: "Gold" }, { c: "NG", level: "Silver" },
  ] },
  { title: "Loved by You", credit: "Justin Bieber ft. Burna Boy", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500-000000-80-0-0.jpg", certs: [
    { c: "AU", level: "Gold" }, { c: "BR", level: "Gold" },
  ] },
  { title: "Enjoy Yourself (Remix)", credit: "Pop Smoke ft. Burna Boy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/337e152ccbf267774a30a08fbceae106/500x500-000000-80-0-0.jpg", certs: [
    { c: "NZ", level: "Gold" }, { c: "AU", level: "Gold" },
  ] },
  { title: "Yaba Buluku (Remix)", credit: "DJ Tárico & Burna Boy", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/838ae1b6384d70287eb799afdb50512c/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Gold" },
  ] },
  { title: "Toni-Ann Singh", credit: "feat. Popcaan", year: 2022, cover: "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg", certs: [
    { c: "CA", level: "Gold" }, { c: "NG", level: "Silver" },
  ] },
  // Byron Messia's record, Burna Boy featured — the credit charts.ts carries,
  // with the lead act Official Charts prints ("TALIBANS by BYRON MESSIA", read
  // 24 Sep 2026). It read "with Byron Messia" here, which by the credit
  // convention (lib/api.ts CREDIT_NOTE) made it a release Burna Boy leads
  // (F-10, Paul, 24 Sep 2026). The dated log below carries the same credit.
  { title: "Talibans II", credit: "Byron Messia ft. Burna Boy", year: 2023, cover: "https://cdn-images.dzcdn.net/images/cover/249b9a8dd169969947e57d554945f48b/500x500-000000-80-0-0.jpg", certs: [
    { c: "CA", level: "Gold" }, { c: "NG", level: "Platinum" },
  ] },
  { title: "Rollin'", credit: "Mist ft. Burna Boy", year: 2021, cover: "https://cdn-images.dzcdn.net/images/cover/123c9286e946a0ad60a4126acbee6f60/500x500-000000-80-0-0.jpg", certs: [
    { c: "UK", level: "Silver" },
  ] },
  // BNXN's record, Burna Boy featured: Deezer's release page for this cover
  // (album 139323502, Spaceship) dates it 16 Apr 2020 and lists both artists;
  // TCSN's row reads "BNXN & Burna Boy". Read 24 Sep 2026. No Fit Vex and
  // Level Up above are Twice as Tall cuts (Deezer album 166840522, 2020).
  { title: "Lenu (Remix)", credit: "BNXN ft. Burna Boy", year: 2020, cover: "https://cdn-images.dzcdn.net/images/cover/aef7ccf16f0481793eea256ab167aa88/500x500-000000-80-0-0.jpg", certs: [
    { c: "NG", level: "Silver" },
  ] },
  // ZA Gold from the 19 Jun 2026 import with no body read on file: RiSA's
  // register (risa-prod.trafficmanager.net, read 17 Sep 2026) returns no row for
  // ?title=Badd. Kept, per Paul's ruling on register-absent plaques (batch 4a,
  // Last Last ZA) — flagged, not removed.
  { title: "Baddest", credit: "AKA ft. Burna Boy, Khuli Chana & Yanga Chief", year: 2019, cover: "https://cdn-images.dzcdn.net/images/cover/b86f99833d3100ad7eb753ec6966e3aa/500x500-000000-80-0-0.jpg", certs: [
    { c: "ZA", level: "Gold" },
  ] },
  // A LABEL plaque, not a register row: Sony Music Entertainment Africa's
  // 390,000-unit award, Dec 2020, shared by AKA (commit da460d95). RiSA's ladder
  // is Gold / Platinum / Double / Multi and its register (read 17 Sep 2026)
  // holds no row for this title, so 19× = 390,000 ÷ the pre-2024 Platinum of
  // 20,000; /compare prices it at today's 40,000 under the ‡ rule.
  { title: "All Eyes on Me", credit: "AKA ft. Burna Boy, Da L.E.S & JR", year: 2014, cover: "https://cdn-images.dzcdn.net/images/cover/51a425dcf87f37e33159744d5685471d/500x500-000000-80-0-0.jpg", certs: [
    { c: "ZA", level: "Platinum", x: 19 },
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
  { title: "Talibans II", credit: "Byron Messia ft. Burna Boy", country: "NG", level: "Platinum", year: 2026 },
  // The same February 2026 TCSN batch, read 23 Sep 2026 in the register's own
  // 21 Feb 2026 capture — below the live page's 500-row cap, which is why the
  // 12 Aug read above never saw them. Year 2026, no day: the rows arrived
  // between 8 and 21 Feb 2026 and TCSN publishes no award date. Ye's Gold is an
  // upgrade from a Silver never logged here; the other nine are new plaques.
  { title: "Ye", country: "NG", level: "Gold", year: 2026 },
  { title: "No Panic", country: "NG", level: "Gold", year: 2026 },
  { title: "Buy You Life", country: "NG", level: "Gold", year: 2026 },
  { title: "28 Grams", country: "NG", level: "Gold", year: 2026 },
  { title: "Born Winner", country: "NG", level: "Gold", year: 2026 },
  { title: "No Sign of Weakness", country: "NG", level: "Silver", year: 2026 },
  { title: "Change Your Mind", credit: "feat. Shaboozey", country: "NG", level: "Silver", year: 2026 },
  { title: "Empty Chairs", credit: "feat. Mick Jagger", country: "NG", level: "Silver", year: 2026 },
  { title: "Sweet Love", country: "NG", level: "Silver", year: 2026 },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", country: "NG", level: "Silver", year: 2026 },
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
  { title: "I Told Them…", album: true, country: "CA", level: "Gold", year: 2026 },
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
  { title: "Talibans II", credit: "Byron Messia ft. Burna Boy", country: "CA", level: "Gold", year: 2026 },
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
  // BPI title page, read 16 Sep 2026: "Certification history 01 May 2026 Gold |
  // 10 January 2025 Silver". The release row already carried the Gold; the log
  // had only the Silver step.
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "UK", level: "Gold", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "US", level: "Platinum", x: 2, year: 2026, body: "RIAA Latin" },
  // RIAA's @riaa_awards post, 23 Sep 2026: "RIAA LATIN PLATINUM 6X" (see the
  // release row). The database had not yet logged the step on 24 Sep.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "US", level: "Platinum", x: 6, year: 2026, body: "RIAA Latin" },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "CO", level: "Gold", year: 2026, body: "Sony Music Colombia" },
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
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", country: "UK", level: "Silver", year: 2025 }, // BPI: 22 Aug 2025 Silver, read 16 Sep 2026
  { title: "City Boys", country: "US", level: "Gold", year: 2025 },
  { title: "Real Life", credit: "feat. Stormzy", country: "AU", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "AU", level: "Gold", year: 2025 },
  { title: "I Told Them…", album: true, country: "NZ", level: "Gold", year: 2025 },
  { title: "Alone", country: "NZ", level: "Gold", year: 2025 },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "NZ", level: "Gold", year: 2025 },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "UK", level: "Silver", year: 2025 },

  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", country: "ES", level: "Gold", year: 2024 },
  { title: "Love, Damini", album: true, country: "DK", level: "Platinum", year: 2024 },
  { title: "I Told Them…", album: true, country: "UK", level: "Gold", year: 2024 },
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
  // On the release row since the snapshot, never logged: RMNZ (RadioScope
  // table 2052) "Burna Boy | City Boys | Gold | 2024-06-13", read 17 Sep 2026.
  { title: "City Boys", country: "NZ", level: "Gold", year: 2024 },

  // "On the Low" awards that were confirmed at the body on 27 Aug 2026 but had
  // never been logged here. The UK/CA/DK/AU/NZ rows were already present above.
  { title: "On the Low", country: "CH", level: "Platinum", year: 2023 },
  { title: "On the Low", country: "FR", level: "Diamond", year: 2022 },
  { title: "On the Low", country: "US", level: "Gold", year: 2022 },
  { title: "On the Low", country: "UK", level: "Silver", year: 2020 },

  // "African Giant" in the UK — read at BPI's own register on 14 Sep 2026
  // (certified-awards.bpi.co.uk/format/3/artist/4398/title/13134, certification
  // history: Silver 18 September 2020, Gold 22 July 2022). The release row
  // already carried the Gold; neither award event had ever been logged here.
  // The Silver was his first BPI-certified ALBUM (Love, Damini's Silver came
  // 10 Feb 2023, I Told Them's 22 Dec 2023, Twice as Tall's 6 Mar 2026) — not
  // his first BPI award, and NOT "the first certified Nigerian album": Sade's
  // Diamond Life was BPI 4× Platinum by 1987 and Keziah Jones's Blufunk was
  // SNEP Double Or on 27/06/2000. The "22 September 2020" that circulates is
  // the date of the press coverage, not the award.
  { title: "African Giant", album: true, country: "UK", level: "Silver", year: 2020 },
  { title: "African Giant", album: true, country: "UK", level: "Gold", year: 2022 },

  // GLF/Grammotex, read 27 Aug 2026. All four certified 2023-08-16.
  { title: "On the Low", country: "SE", level: "Platinum", year: 2023 },
  { title: "Ye", country: "SE", level: "Platinum", year: 2023 },
  { title: "African Giant", album: true, country: "SE", level: "Gold", year: 2023 },
  { title: "Gbona", country: "SE", level: "Gold", year: 2023 },
  // SNEP's register (read 16 Sep 2026) holds ONE Last Last row: "Diamant | Date
  // de constat 02/11/2023" — no Or or Platine step, so the 2023 event is the
  // Diamond itself, which this log had typed as Platinum.
  { title: "Last Last", country: "FR", level: "Diamond", year: 2023 },
  // RMNZ (RadioScope, read 16 Sep 2026): Gold 2022-09-08, Plat x1 2022-12-08,
  // Plat x2 2023-12-21, Plat x3 2026-03-05. The 2023 event is the 2× Platinum;
  // the Gold and first Platinum are 2022 rows, below.
  { title: "Last Last", country: "NZ", level: "Platinum", x: 2, year: 2023 },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", country: "UK", level: "Platinum", x: 3, year: 2023 },
  { title: "Ye", country: "US", level: "Platinum", year: 2023 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "DK", level: "Platinum", year: 2023 },
  { title: "Gbona", country: "PT", level: "Gold", year: 2022 },
  { title: "Last Last", country: "NZ", level: "Platinum", year: 2022 }, // RMNZ 2022-12-08
  { title: "Last Last", country: "NZ", level: "Gold", year: 2022 }, // RMNZ 2022-09-08
  { title: "Love, Damini", album: true, country: "UK", level: "Silver", year: 2023 },
  // BPI title/9614: certification history "22 December 2023 — Silver" (read
  // 18 Sep 2026); the log had it under 2024.
  { title: "I Told Them…", album: true, country: "UK", level: "Silver", year: 2023 },
  // BPI album page, read 16 Sep 2026: "01 December 2023 Gold | 10 February
  // 2023 Silver" — the Gold step was on the release row but never in this log.
  { title: "Love, Damini", album: true, country: "UK", level: "Gold", year: 2023 },
  // SNEP register, read 16 Sep 2026: "ALONE | BURNA BOY | Or | Date de constat
  // 26/10/2023" — on the release row, absent from this log until now.
  { title: "Alone", country: "FR", level: "Gold", year: 2023 },
  { title: "Gbona", country: "UK", level: "Gold", year: 2026 },
  { title: "Love, Damini", album: true, country: "DK", level: "Gold", year: 2023 },
  { title: "Love, Damini", album: true, country: "NL", level: "Gold", year: 2022 }, // NVPI: "3-11-2022", read 16 Sep 2026
  { title: "Last Last", country: "US", level: "Platinum", year: 2023 },
  { title: "Collateral Damage", country: "FR", level: "Gold", year: 2023 },
  { title: "On the Low", country: "UK", level: "Gold", year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "UK", level: "Gold", year: 2023 },
  // BPI's title page (re-read 23 Sep 2026) prints the ladder: 07 Jun 2019 Gold,
  // 02 Aug 2019 Platinum, 10 Apr 2020 2x, 08 Oct 2021 3x, 05 May 2023 4x,
  // 23 May 2025 5x. The 2023 event is the 4x PLATINUM; this row said "4x Gold".
  { title: "Location", credit: "Dave ft. Burna Boy", country: "UK", level: "Platinum", x: 4, year: 2023 },
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
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", country: "CH", level: "Gold", year: 2023 }, // was logged Platinum; the register prints Gold — see the release row
  { title: "Last Last", country: "AU", level: "Platinum", year: 2023 },
  { title: "On the Low", country: "AU", level: "Gold", year: 2023 },
  { title: "For My Hand", credit: "feat. Ed Sheeran", country: "AU", level: "Gold", year: 2023 },
  // IFPI Schweiz's Edelmetall card: Jahr 2023, Platin — the log said Gold (17 Sep 2026).
  { title: "Gbona", country: "CH", level: "Platinum", year: 2023 },
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
  // 225th: gold badge ("Zlatý singl") on ČNS IFPI's own Singles Digital Top 100,
  // week 32/2026. The row prints no count; 2.5M subscription streams is the Gold
  // threshold in ČNS IFPI's rules (Platinum 5M). Re-read 16 Sep 2026, week
  // 37/2026: still "Zlatý singl" at No. 13 — a reported upgrade was not on the body.
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

  // AFP/Audiogest (Portugal), verified at the body 27 Aug 2026. Portugal has no
  // standalone award register, but the ANNUAL "TOP AFP/AUDIOGEST" reports carry
  // the same "Gal." column as the weeklies and run thousands of positions deep,
  // so they serve as one. Two calibrations make them datable: the column is
  // frozen at the period end -- 11 titles awarded OU between 8 Jan and 11 Mar
  // 2021 are all still blank in the TOP Anual 2020, published 26 Mar 2021 -- and
  // a title missing from a report may simply sit below its cut, since the annuals
  // vary from 200 to 10000 deep. Never charting is not evidence either way: the
  // weekly Top 200 only badges titles it already lists.
  //   "Own It"   blank in TOP Anual 2019 (2824) -> OU in TOP Anual 2020 (244)
  //   "Location" blank in TOP Anual 2019 (698)  -> OU in TOP Anual 2020 (568);
  //              Khalid's "Location" sits blank three lines below at 571, so this
  //              is matched on the credit, not the title
  //   "Gbona"    blank through TOP Anual 2020 (1940) -> OU in TOP Anual 2022
  //              (1555). The 2021 annual stops at 1000, so 2021 and 2022 cannot
  //              be split; the year recorded here is the later bound, and the
  //              2023 previously recorded was not supportable.
  //   "We Pray"  OU in the Semana 08 de 2025 weekly (168), week of 14-20 Feb
  //              2025 -- the one of the four that the weeklies do settle.
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", country: "PT", level: "Gold", year: 2020 },
  { title: "Location", credit: "Dave ft. Burna Boy", country: "PT", level: "Gold", year: 2020 },

  // AFP/Audiogest's March 2026 monthly batch, read off Audiogest's own award
  // cards on 28 Aug 2026. Portugal announces off-chart awards this way and
  // nowhere else: "Wgft" never carried a Gal. badge in the four weeks it
  // charted, so neither the weekly TOP nor an annual could ever have shown it.
  // AFP prints the title "Wgft", not "WGFT".
  { title: "WGFT", credit: "Gunna ft. Burna Boy", country: "PT", level: "Gold", year: 2026 },
  // AFP/Audiogest's APRIL 2026 monthly batch ("Galardões de Ouro de Abril de
  // 2026", Audiogest's Facebook post of 11 May 2026: "City Boys / Burna Boy /
  // Warner Music"), read 18 Sep 2026 from Paul's screenshots of the post —
  // logged out, facebook.com serves only the newest ~10 photos, so the April
  // card was out of reach when the March one was read on 28 Aug. The song was
  // not charting in Portugal in 2026, so no weekly TOP could have badged it.
  { title: "City Boys", country: "PT", level: "Gold", year: 2026 },

  // 31 Aug 2026 — both of these were on the RELEASE and missing from this log,
  // so the by-year figures ran two short. The site's own updates feed recorded
  // them the day they happened ("A French Diamond and a Polish Gold on the same
  // day"): SNEP upgraded "Dai Dai" from Platinum to Diamant at 50 million
  // equivalent streams, and ZPAV entered it on Poland's złote płyty list.
  //
  // France APPENDS, per the append-never-rewrite rule — the Gold and Platinum
  // rows above stay, so this country now logs three events for one plaque.
  // Poland had no row here at all.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "FR", level: "Diamond", year: 2026 },
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "PL", level: "Gold", year: 2026 },
  // Same day, read at the body: IFPI Austria's Gold & Platin database returns
  // "Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026".
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "AT", level: "Platinum", year: 2026 },
  // Greece, Gold -> Platinum, read 16 Sep 2026 at IFPI Greece's own chart page
  // (ifpi.gr/digital_ien.html — Digital Singles Chart (International), Week
  // 36/2026): row 1, "Shakira, Burna Boy | Dai Dai | Sony-Warner |
  // USQX92602560 | P | 1 | 13 | 1 | 2026_35". The Award column is unlabelled;
  // "P" is the tier above the "G" the site carried. An upgrade, so the
  // worldwide total stays put; the GR Gold row above stays. The page is
  // overwritten weekly, so the row is preserved in docs/sourcing/GREECE-2026-W36.md.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "GR", level: "Platinum", year: 2026 },
  // 19 Sep 2026 — Belgium. Ultratop's 2026 singles award list prints "Shakira x
  // Burna Boy / Dai dai / 10/08/2026: Goud". Ultratop is the only publisher of
  // BRMA's awards and sits behind a Cloudflare "verify you are human" wall that
  // this site's tooling never completes, so the row was read from Paul's own
  // browser (ultratop.be/nl/goud-platina/2026/singles). Fourteenth country.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "BE", level: "Gold", year: 2026 },
  // 20 Sep 2026 — Sweden. Grammotex (the GLF/Ifpi Sverige register, http only):
  // "SHAKIRA & BURNA BOY — DAI DAI", Platina, cert.nr 11317, awarded 2026-09-18.
  // The record id came from Sverigetopplistan's own chart markup (data-sart=
  // 15311162), so the record was opened directly; no Guld step is listed.
  // Fifteenth country. Provenance caveat as for every Swedish row (GLF ≠ Ifpi).
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "SE", level: "Platinum", year: 2026 },
  // 22 Sep 2026 — Canada. Music Canada's own database: "September 21, 2026 ·
  // Double Platinum Single · Shakira, Burna Boy · Dai Dai · Sony Music Latin /
  // Sony Music Entertainment Canada Inc." One row, straight to 2×. Sixteenth
  // country for the song.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "CA", level: "Platinum", x: 2, year: 2026 },
  // 23 Sep 2026 — Germany. BVMI's own database: "Shakira & Burna Boy | Dai Dai |
  // 2026 | Single | 1x Gold | Sony Music Entertainment Germany GmbH | Epic".
  // Seventeenth country for the song.
  { title: "Dai Dai", credit: "Shakira & Burna Boy", country: "DE", level: "Gold", year: 2026 },
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
// carry international awards alone, so mixing the NG events into 2026 would
// make the year-on-year comparison read high. Nigerian plaques still count
// everywhere else: the worldwide total, the country grid, every release's row.
export const intlCertHistory = certHistory.filter((e) => e.country !== "NG");

/** The most recent day a certifying body's own register was read for this
 *  file. Printed on the page's sources line in place of a typed "as of" month
 *  — bump it on every body read, in the same edit as the row it changes. */
export const CERTS_VERIFIED_ON = "2026-09-23";

/** "Dai Dai" Platinum plaques beyond the US Latin 2× — the "Platinum in N more"
 *  rail note on the story and its Spanish twin, counted rather than typed after
 *  Greece's upgrade left the Spanish edition saying 5 while English said 6. */
export const daiDaiPlatinumMore = (allItems.find((r) => r.title === "Dai Dai")?.certs ?? []).filter(
  (c) => c.level === "Platinum" && c.c !== "US",
).length;

/** The sources line, built from COUNTRIES so a body renamed or a country added
 *  there (Ultratop for the old BEA, Greece, Colombia…) reaches the page without
 *  a retype. National IFPI groups fold into one "IFPI (Denmark, Norway, …)"
 *  item; a body that already carries its country's name ("Music Canada",
 *  "Pro-Música Brasil") prints alone. Nigeria's TCSN is listed like the rest. */
/** The body that actually issued his plaques in one country. Where every one
 *  of them names the same other issuer, that issuer is the source: Colombia's
 *  only plaque is "Dai Dai"'s Gold from Sony Music Colombia, and the sources
 *  line and the search entry named Pro Musica Colombia (its register, which
 *  lists no such award) while the row beside them said Sony (A-13, Paul,
 *  24 Sep 2026). The US keeps "RIAA": its plaques name two programmes, not one
 *  issuer. The country's own body stays in COUNTRIES, for the register link. */
export const certIssuerIn = (code: string): string => {
  const country = COUNTRIES[code];
  const issuers = new Set(allItems.flatMap((r) => r.certs.filter((x) => x.c === code).map((x) => x.body ?? country?.body)));
  return issuers.size === 1 ? ([...issuers][0] ?? country?.body ?? code) : (country?.body ?? code);
};

export const certSources = (): string => {
  const items: string[] = [];
  const ifpi: string[] = [];
  const cns: string[] = [];
  for (const [code, country] of Object.entries(COUNTRIES)) {
    const c = { ...country, body: certIssuerIn(code) };
    const acronym = c.body.match(/\(([^)]+)\)/)?.[1]; // "TurnTable (TCSN)" → TCSN
    if (/^ČNS IFPI/.test(c.body)) cns.push(c.name);
    else if (/^IFPI( |$)/.test(c.body)) ifpi.push(c.name);
    else if (c.body.toLowerCase().includes(c.name.slice(0, 3).toLowerCase())) items.push(c.body);
    else items.push(`${acronym ?? c.body} (${c.name})`);
  }
  if (ifpi.length) items.push(`IFPI (${ifpi.join(", ")})`);
  if (cns.length) items.push(`ČNS IFPI (${cns.join(", ")})`);
  return items.length > 1
    ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    : items[0] ?? "";
};

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
