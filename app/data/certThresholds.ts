// ============================================================================
//  CERTIFICATION UNIT THRESHOLDS — what one plaque is worth, per body
// ============================================================================
//
// Researched 10 September 2026, every figure read on the CERTIFYING BODY'S OWN
// site or a PDF it publishes. A cited table on Wikipedia, a chart blog or a fan
// wiki is not a source here and was never accepted as one. Full evidence, with
// each source URL and the body's own wording: docs/sourcing/CERT-THRESHOLDS.md
// and CERT-THRESHOLDS.json.
//
// THE FINDING THAT SHAPES THIS FILE: "units" is NOT a common currency. These 27
// bodies do not all measure the same thing. France states a Gold single as
// 15,000,000 STREAMS; Australia states one as 35,000 UNITS. Poland measures
// singles in PLN REVENUE. Adding those together would produce a number that
// means nothing, so this file puts everything it can on ONE scale —
// sales-equivalent units — and refuses to price the rest.
//
// NORMALISATION USES THE BODY'S OWN ARITHMETIC, NEVER AN ESTIMATE. Four
// countries publish in streams AND publish a sale-equivalence; those are divided
// by it and the printed figure is kept alongside in `*Raw` so the conversion can
// be checked. Where a body publishes thresholds in something other than units and
// gives no conversion, the format is EXCLUDED rather than guessed.
//
// null MEANS TWO DIFFERENT THINGS AND THE DIFFERENCE MATTERS:
//   • a null TIER inside a present object = that body does not award that tier.
//     There is no Diamond at the BPI, and Silver exists at only three bodies —
//     TCSN, the BPI, and ARIA for albums. Nothing is missing; no plaque can
//     ever land in a null tier.
//   • a null FORMAT (with an `Excluded` reason beside it) = real plaques exist
//     and CANNOT be priced. Those must be surfaced to the reader, per artist,
//     because silently scoring them zero penalises whoever holds more of them.
//
// DO NOT fill a gap by interpolating from a neighbouring country, by carrying a
// figure over from a secondary source, or by assuming a tier exists because it
// exists elsewhere. A null with a reason is the correct answer; a plausible
// invented number is the worst outcome this file can produce.
//
// TODAY'S THRESHOLDS, FOR EVERY BODY (Paul, 11 Sep 2026). Twelve of the 27
// bodies changed their levels inside the window the plaques span, and eleven
// of them RAISED them. Two rules were weighed:
//   • price every plaque at the body's LOWEST level since 2015, so "at least"
//     is never false whatever the award date — at the cost of understating
//     every plaque earned after a rise (Tyla's 2024 South African plaques at
//     half what she cleared);
//   • price every plaque at TODAY'S level, which is what the bodies publish
//     and what a reader will check against — at the cost that a plaque awarded
//     before a rise may have cleared a lower bar than the figure implies.
// Paul chose today's. So the pricing values below are the current published
// levels, and every body that raised its levels carries a ‡ note saying so on
// screen. The floor values sit beside them in `floor`, because establishing
// them cost three agent passes and the trail is worth keeping.
//
// Two facts from that work still shape the table under either rule:
//   • A body that changed WHAT IT MEASURES — ZPAV to PLN revenue in Mar 2017,
//     AMPROFON to raw streams in Nov 2020 — cannot have its singles priced from
//     the old unit regime. Those stay excluded.
//   • BVMI keys single bands to RELEASE date; every German single here was
//     released 2016 or later, so its band is the one that ever applied.
// ============================================================================

export type CertFormat = "single" | "album";

// ---------------------------------------------------------------------------
// PROGRAMME OVERRIDES — a body can run more than one award scheme, and their
// tiers are NOT interchangeable.
//
// RIAA runs two. The standard programme certifies a single at 500,000 units for
// Gold and 1,000,000 for Platinum. Its Latin programme — Premios de Oro y
// Platino, which requires a recording at least 51% Spanish — certifies at
// 30,000 for Oro and 60,000 for Platino. That is a SIXTEEN-fold difference, and
// certifications.ts has carried the warning in prose since long before this file
// existed: "Never total it against standard-programme plaques as if the tiers
// meant the same thing."
//
// A cert names its programme through the optional `body` field. When it does,
// the figures here replace the country's own — the country still says WHERE, the
// programme says AT WHAT SCALE.
//
// Sourced with the rest of the table; see docs/sourcing/CERT-THRESHOLDS.md.
// ---------------------------------------------------------------------------
export const CERT_PROGRAMS: Record<string, { single: TierUnits; album: TierUnits; note: string }> = {
  "RIAA Latin": {
    single: { silver: null, gold: 30_000, platinum: 60_000, diamond: 600_000 },
    album: { silver: null, gold: 30_000, platinum: 60_000, diamond: 600_000 },
    note:
      "Premios de Oro y Platino. Oro 30,000 units, Platino 60,000, Multi-Platino in 60,000 steps; " +
      "Diamante is 10x Platino. Requires a recording at least 51% Spanish, which is why a US plaque " +
      "on a Spanish-language record must never be priced at the standard programme's 1,000,000.",
  },
};


/** Units required for each tier. A null tier is one the body does not award. */
export interface TierUnits {
  silver: number | null;
  gold: number | null;
  platinum: number | null;
  diamond: number | null;
}

export interface CountryThresholds {
  code: string;
  body: string;
  /** The page actually read. */
  sourceUrl: string;
  /** null = this format cannot be priced; see the matching `*Excluded`. */
  single: TierUnits | null;
  album: TierUnits | null;
  singleExcluded?: string;
  albumExcluded?: string;
  /** What the body PRINTED, where this file had to convert it. */
  singleRaw?: Partial<Record<keyof TierUnits, number>>;
  albumRaw?: Partial<Record<keyof TierUnits, number>>;
  /** How and why the conversion was done. */
  normalised?: string;
  /** Set where the body does NOT publish a rule this file had to assume — shown
   *  to the reader as a footnote rather than hidden. */
  caveat?: string;
  /** The LOWEST level the body applied at any point since 1 Jan 2015 to a record
   *  on this roster, kept for the record where it differs from today's. The
   *  pricing values above are TODAY'S (Paul, 11 Sep 2026) — see the header for
   *  the rule and what it costs. Established by three agent passes, the last an
   *  adversarial one; docs/sourcing/CERT-THRESHOLDS.md has the trail. */
  floor?: { single?: TierUnits; album?: TierUnits };
  /** Set where the body RAISED its thresholds inside the window. Attached to
   *  every line for the country, not only multiplied ones, and rendered as the
   *  ‡ footnote: it says the figure is today's level and that a plaque awarded
   *  before the rise may have cleared a lower bar. */
  vintage?: string;
}

export const CERT_THRESHOLDS: Record<string, CountryThresholds> = {
  AT: {
    code: "AT",
    caveat:
      "IFPI Austria’s Richtlinien set quantities for Gold and Platin only and give no formula for multiples, although its own database displays awards as “N-fach PLATIN”. An N× award is priced here as N × Platinum.",
    body: "IFPI Austria (Verband der Österreichischen Musikwirtschaft)",
    sourceUrl: "https://ifpi.at/website2018/wp-content/uploads/2018/12/gold-platin_richtlinien.pdf",
    single: { silver: null, gold: 15_000, platinum: 30_000, diamond: null },
    album: { silver: null, gold: 7_500, platinum: 15_000, diamond: null },
  },
  AU: {
    code: "AU",
    body: "ARIA (Australian Recording Industry Association)",
    sourceUrl: "https://www.aria.com.au/accreditations",
    single: { silver: null, gold: 35_000, platinum: 70_000, diamond: null },
    album: { silver: 20_000, gold: 35_000, platinum: 70_000, diamond: 500_000 },
  },
  BE: {
    code: "BE",
    normalised:
      "Found on 10 Sep 2026 after the body's own site proved empty: BRMA sets the thresholds and Ultratop, its chart-and-awards operator, publishes them — «De drempels voor Goud/Platina worden vastgesteld door BRMA» — read in the 21 Feb 2026 archive of ultratop.be/nl/info_goud_platina.asp, identical since 2022. Two tiers by REPERTOIRE LANGUAGE: singles 10,000 / 20,000 / 100,000 for Belgian or Dutch/French-sung records and 20,000 / 40,000 / 200,000 for all other repertoire; albums 10,000 / 20,000 / 100,000 regardless. Every plaque on this board is 'other repertoire' and is priced on that tier; a French- or Dutch-sung record would take the lower one.",
    body: "BRMA — Belgian Recorded Music Association (renamed from BEA in 2022); the gold/platinum roster is published by Ultratop on BRMA's behalf",
    sourceUrl: "https://www.ultratop.be/nl/info_goud_platina.asp",
    single: { silver: null, gold: 20_000, platinum: 40_000, diamond: 200_000 },
    album: { silver: null, gold: 10_000, platinum: 20_000, diamond: 100_000 },
  },
  BR: {
    code: "BR",
    normalised:
      "INTERNACIONAL table, not NACIONAL. Pro-Música Brasil publishes two tables side by side and certifies non-Brazilian repertoire on the international one at exactly half: Ouro 20,000 / Platina 40,000 / Diamante 160,000 for both singles and albums. Every plaque on this site is international repertoire. The first version of this file carried the Nacional figures (40,000 / 80,000 / 300,000) and priced all 15 Brazilian plaques at double.",
    body: "Pro-Música Brasil (Pró-Música Brasil Produtores Fonográficos Associados)",
    sourceUrl: "https://pro-musicabr.org.br/home-2/certificados/tabela-de-niveis-de-certificacao-pro-musica/",
    single: { silver: null, gold: 20_000, platinum: 40_000, diamond: 160_000 },
    album: { silver: null, gold: 20_000, platinum: 40_000, diamond: 160_000 },
  },
  CA: {
    code: "CA",
    body: "Music Canada (Gold & Platinum Certification Program)",
    sourceUrl: "https://musiccanada.com/certification/",
    single: { silver: null, gold: 40_000, platinum: 80_000, diamond: 800_000 },
    album: { silver: null, gold: 40_000, platinum: 80_000, diamond: 800_000 },
  },
  CH: {
    code: "CH",
    body: "IFPI Schweiz (IFPI Switzerland)",
    sourceUrl: "https://www.ifpi.ch/_files/ugd/b5a9f7_3d842e23897f4a89b177618e9146a598.pdf",
    single: { silver: null, gold: 15_000, platinum: 30_000, diamond: null },
    album: { silver: null, gold: 10_000, platinum: 20_000, diamond: null },
  },
  CO: {
    code: "CO",
    body: "PRO MÚSICA (Pro Música Colombia) — IFPI-affiliated body covering Colombia, Ecuador and Peru",
    sourceUrl: "https://pro-musica.co/certificaciones-2/",
    single: null,
    singleExcluded:
      "Pro Música Colombia publishes an awarded roster but no unit thresholds. Its whole site was read: the body says only that it awards for 'la música más vendida en formatos físicos y digitales'.",
    album: null,
    albumExcluded:
      "Pro Música Colombia publishes an awarded roster but no unit thresholds. Its whole site was read: the body says only that it awards for 'la música más vendida en formatos físicos y digitales'.",
  },
  CZ: {
    code: "CZ",
    normalised:
      "Found 10 Sep 2026; the body's site had been unreachable from every earlier route. ČNS IFPI's rules effective 9 March 2026 state every threshold in SUBSCRIPTION STREAMS — Zlatý singl 2,500,000, Platinový singl 5,000,000, Zlaté album 5,000,000, Platinové album 10,000,000 — and publish the equivalence «1 download = 222 subscription streamů», which is what these are divided by. Both formats normalised. The body awards Zlatý and Platinový only: no Silver, no Diamond, no multiplier rule. Eligible releases: from 1 January 2022 onward.",
    caveat:
      "ČNS IFPI states no multiplier rule; an N× award is priced here as N × Platinum.",
    vintage:
      "ČNS IFPI's stream thresholds have not moved, but its download equivalence fell from 225 to 222 subscription streams on 9 March 2026, so the same threshold is worth slightly more units today than in 2025. Priced at today's ratio. Before July 2025 Czech certification ran on CZK revenue — a different measure.",
    body: "ČNS IFPI — Česká národní skupina IFPI",
    sourceUrl: "https://ifpicr.cz/files/page/c3/7a/c37a8df18b916ffe6a7a40db48f8000f/Pravidla-pro-udelovani-oceneni-od-9.3.2026-CR-2084.pdf",
    single: { silver: null, gold: 11_261, platinum: 22_522, diamond: null },
    singleRaw: { gold: 2_500_000, platinum: 5_000_000 },
    album: { silver: null, gold: 22_522, platinum: 45_045, diamond: null },
    floor: { single: { silver: null, gold: 11_111, platinum: 22_222, diamond: null }, album: { silver: null, gold: 22_222, platinum: 44_444, diamond: null } },
    albumRaw: { gold: 5_000_000, platinum: 10_000_000 },
  },
  DE: {
    code: "DE",
    caveat:
      "BVMI’s ladder is NOT linear — it runs 1x Gold, 1x Platin, 3x Gold, 2x Platin, 5x Gold, skipping the even Gold multiples because they collide with Platinum. Multiples are priced here as N × that tier’s own threshold.",
    body: "BVMI (Bundesverband Musikindustrie e.V.)",
    sourceUrl: "https://www.musikindustrie.de/fileadmin/bvmi/upload/01_Der_BVMI/Dokumente-zum-Download/Richtlinien_BVMI_Gold_Platin_3_0_FINAL.pdf",
    vintage:
      "BVMI raised its single levels on 30 June 2023 from 200,000 / 400,000 / 1,000,000 to 300,000 / 600,000 / 1,500,000. Albums did not move. Priced at today's level; a plaque awarded before then may have cleared the lower bar. BVMI keys bands to release date and every German single here was released 2016 or later.",
    single: { silver: null, gold: 300_000, platinum: 600_000, diamond: 1_500_000 },
    floor: { single: { silver: null, gold: 200_000, platinum: 400_000, diamond: 1_000_000 } },
    album: { silver: null, gold: 75_000, platinum: 150_000, diamond: 750_000 },
  },
  DK: {
    code: "DK",
    body: "IFPI Danmark",
    sourceUrl: "http://www.ifpi.dk/guld-platin",
    normalised:
      "SINGLES normalised: IFPI Danmark counts 1 stream = 1 enhed, so Guld reads 4,500,000. Divided by its own «1 download = 100 enheder». Albums were already units.",
    single: { silver: null, gold: 45_000, platinum: 90_000, diamond: null },
    singleRaw: { gold: 4_500_000, platinum: 9_000_000 },
    album: { silver: null, gold: 10_000, platinum: 20_000, diamond: null },
  },
  ES: {
    code: "ES",
    caveat:
      "Promusicae publishes Oro and Platino thresholds only and never states the arithmetic for a multiple. An N× award is priced here as N × Platinum.",
    body: "Promusicae (Productores de Música de España), publishing through its own portal El Portal de Música (EPDM)",
    sourceUrl: "https://www.elportaldemusica.es/awards/index",
    vintage:
      "Promusicae raised its song thresholds in April 2025 from 20,000 / 40,000 to 50,000 / 100,000. Priced at today's level; a plaque awarded before then may have cleared the lower bar.",
    single: { silver: null, gold: 50_000, platinum: 100_000, diamond: null },
    floor: { single: { silver: null, gold: 20_000, platinum: 40_000, diamond: null } },
    album: { silver: null, gold: 20_000, platinum: 40_000, diamond: null },
  },
  FR: {
    code: "FR",
    body: "SNEP — Syndicat National de l'Édition Phonographique",
    sourceUrl: "https://snepmusique.com/les-certifications/a-propos-des-certifications/",
    vintage:
      "SNEP raised its single levels on 27 April 2018 from 10, 20 and 35 million équivalent streams to 15, 30 and 50 million — 66,666 / 133,333 / 233,333 units to 100,000 / 200,000 / 333,333 at its 150:1 ratio. Priced at today's level; a plaque awarded before then may have cleared the lower bar.",
    normalised:
      "SINGLES normalised: SNEP publishes them in streams (Gold 15,000,000). Divided by the body's own «1 téléchargement = 150 streams». Albums were already units.",
    single: { silver: null, gold: 100_000, platinum: 200_000, diamond: 333_333 },
    floor: { single: { silver: null, gold: 66_666, platinum: 133_333, diamond: 233_333 } },
    singleRaw: { gold: 15_000_000, platinum: 30_000_000, diamond: 50_000_000 },
    album: { silver: null, gold: 50_000, platinum: 100_000, diamond: 500_000 },
  },
  GR: {
    code: "GR",
    body: "IFPI Greece",
    sourceUrl: "https://ifpi.gr/",
    single: null,
    singleExcluded:
      "IFPI Greece awards certifications and prints the codes on its own Digital Singles charts, but publishes no thresholds anywhere. All 15 pages of ifpi.gr were read in both Greek and English; there is no criteria page and no streaming conversion ratio.",
    album: null,
    albumExcluded:
      "IFPI Greece awards certifications and prints the codes on its own Digital Singles charts, but publishes no thresholds anywhere. All 15 pages of ifpi.gr were read in both Greek and English; there is no criteria page and no streaming conversion ratio.",
  },
  HU: {
    code: "HU",
    body: "MAHASZ — Magyar Hangfelvétel-kiadók Szövetsége (the Hungarian group of IFPI)",
    sourceUrl: "https://slagerlistak.hu/arany-es-platinalemezek/mi-szamit-arany-es-platinalemeznek",
    vintage:
      "MAHASZ raised singles from 1,500 / 3,000 to 5,000 / 10,000 and international albums from 1,000 / 2,000 to 2,000 / 4,000 inside the window, keying the changes to release date. Priced at today's level; a plaque on an earlier release may have cleared the lower bar.",
    single: { silver: null, gold: 5_000, platinum: 10_000, diamond: null },
    album: { silver: null, gold: 2_000, platinum: 4_000, diamond: null },
    floor: { single: { silver: null, gold: 1_500, platinum: 3_000, diamond: null }, album: { silver: null, gold: 1_000, platinum: 2_000, diamond: null } },
  },
  IT: {
    code: "IT",
    body: "FIMI (Federazione Industria Musicale Italiana), with sales measurement by NIQ (formerly GfK) — 'Dal gennaio 2009 FIMI in collaborazione con NIQ … ufficializza le certificazioni di vendita di ogni singola registrazione musicale pubblicata e venduta in Italia.'",
    sourceUrl: "https://www.fimi.it/top-of-the-music/certificazioni/",
    vintage:
      "FIMI raised its single levels three times from week 01/2020 — 15,000 / 30,000 / 300,000 to today's 100,000 / 200,000 / 2,000,000. Albums never moved. Priced at today's level; a plaque awarded before 2020 may have cleared a bar as low as a seventh of this.",
    single: { silver: null, gold: 100_000, platinum: 200_000, diamond: 2_000_000 },
    floor: { single: { silver: null, gold: 15_000, platinum: 30_000, diamond: 300_000 } },
    album: { silver: null, gold: 25_000, platinum: 50_000, diamond: 500_000 },
  },
  MX: {
    code: "MX",
    body: "AMPROFON — Asociación Mexicana de Productores de Fonogramas y Videogramas",
    sourceUrl: "https://amprofon.com.mx/es/media/documentos/antecedentes_criterios_certificaciones.pdf",
    vintage:
      "AMPROFON raised album levels from 30,000 / 60,000 / 300,000 to 70,000 / 140,000 / 700,000 for releases from 1 November 2020. Priced at today's level; a plaque on an earlier release may have cleared the lower bar. Singles are not priced: measured in units until Oct 2020 and in raw audio streams since, with no ratio, and every Mexican single here is from the later regime.",
    single: null,
    singleExcluded:
      "AMPROFON states single levels are 'medidos en audio streams' and publishes no stream-to-unit ratio.",
    album: { silver: null, gold: 70_000, platinum: 140_000, diamond: 700_000 },
    floor: { album: { silver: null, gold: 30_000, platinum: 60_000, diamond: 300_000 } },
  },
  NG: {
    code: "NG",
    body: "TurnTable Certification System of Nigeria (TCSN) — TurnTable Charts / TurnTable Media, Data and Analytics",
    sourceUrl: "https://www.turntablecharts.com/news/751",
    single: { silver: 25_000, gold: 50_000, platinum: 100_000, diamond: null },
    album: { silver: 12_500, gold: 25_000, platinum: 50_000, diamond: null },
  },
  NL: {
    code: "NL",
    caveat:
      "NVPI abolished Meervoudig Platina on 1 January 2024 and replaced it with Diamant, so no multiplier rule is in force today. A pre-2024 N× Platina is priced here as N × Platinum.",
    body: "NVPI (Nederlandse Vereniging van Producenten en Importeurs van beeld- en geluidsdragers) — NVPI Muziek/Audio, which runs the official certification register at goudplatina.nl",
    sourceUrl: "https://www.goudplatina.nl/informatie",
    vintage:
      "NVPI's singles were 15,000 / 30,000 units before mid-2016 and are 10, 20 and 50 million streams at 215 streams per sale today — 46,511 / 93,023 / 232,558 units. Priced at today's level; a plaque awarded under an earlier regime may have cleared a lower bar.",
    normalised:
      "BOTH normalised: NVPI is the reverse of everyone else — it converts sales INTO streams and states thresholds in streams. Divided by its own «1 singleverkoop = 215 streams» and «1 albumverkoop = 2150 streams».",
    single: { silver: null, gold: 46_511, platinum: 93_023, diamond: 232_558 },
    floor: { single: { silver: null, gold: 15_000, platinum: 30_000, diamond: 232_558 } },
    singleRaw: { gold: 10_000_000, platinum: 20_000_000, diamond: 50_000_000 },
    album: { silver: null, gold: 18_604, platinum: 37_209, diamond: 93_023 },
    albumRaw: { gold: 40_000_000, platinum: 80_000_000, diamond: 200_000_000 },
  },
  NO: {
    code: "NO",
    caveat:
      "IFPI Norge publishes no written multiplier rule, although its trophy register carries a Nivå column running 1x to 9x beside the Platina marker. An N× award is priced here as N × Platinum.",
    body: "IFPI Norge AS",
    sourceUrl: "https://ifpi.no/vilkar/",
    normalised:
      "SINGLES normalised: IFPI Norge counts 1 stream = 1 salg, so Gull reads 3,000,000. Divided by its own «1 nedlastning = 100 salg». Albums were already units.",
    single: { silver: null, gold: 30_000, platinum: 60_000, diamond: null },
    singleRaw: { gold: 3_000_000, platinum: 6_000_000 },
    album: { silver: null, gold: 10_000, platinum: 20_000, diamond: null },
  },
  NZ: {
    code: "NZ",
    caveat:
      "RMNZ publishes no multiplier rule: its Chart Rules and About page define Gold and Platinum only, with one threshold each, and never use the words multi-platinum or 2x. An N× award is priced here as N × Platinum.",
    body: "Recorded Music NZ (RMNZ), which compiles and publishes the Official Aotearoa Music Charts",
    sourceUrl: "https://aotearoamusiccharts.co.nz/api/media/file/2025-09-30%20-%20Chart%20Rules%20-%20PDF%20version%20for%20website.pdf",
    single: { silver: null, gold: 15_000, platinum: 30_000, diamond: null },
    album: { silver: null, gold: 7_500, platinum: 15_000, diamond: null },
  },
  PL: {
    code: "PL",
    body: "ZPAV (Związek Producentów Audio-Video)",
    sourceUrl: "https://www.olis.pl/terms_oliw",
    vintage:
      "ZPAV raised album levels from 10,000 / 20,000 / 100,000 to 15,000 / 30,000 / 150,000 on 1 January 2025. Priced at today's level; a plaque awarded before then may have cleared the lower bar. Singles are not priced: measured in units only Aug 2015–Feb 2017 and in PLN wholesale revenue since 1 March 2017, and every Polish single here is from the revenue regime.",
    single: null,
    singleExcluded:
      "ZPAV measures singles in PLN REVENUE, not units. Albums are units and ARE priced.",
    album: { silver: null, gold: 15_000, platinum: 30_000, diamond: 150_000 },
    floor: { album: { silver: null, gold: 10_000, platinum: 20_000, diamond: 100_000 } },
  },
  PT: {
    code: "PT",
    body: "Audiogest (issuer of the galardões under the AFP/Audiogest TOP regime; AFP – Associação Fonográfica Portuguesa has no live website)",
    sourceUrl: "https://audiogest.pt/documents/files/Regulamento%20_%20TOP%20e%20Galard%C3%A3o_novas%20altera%C3%A7%C3%B5es%20_%202025%281%29.pdf",
    vintage:
      "Audiogest raised its single levels from 5,000 / 10,000 / 100,000 to 12,000 / 25,000 / 250,000 on 1 January 2024. Albums did not move. Priced at today's level; a plaque awarded before 2024 may have cleared the lower bar.",
    single: { silver: null, gold: 12_000, platinum: 25_000, diamond: 250_000 },
    floor: { single: { silver: null, gold: 5_000, platinum: 10_000, diamond: 100_000 } },
    album: { silver: null, gold: 3_500, platinum: 7_000, diamond: 70_000 },
  },
  SE: {
    code: "SE",
    body: "Ifpi Sverige (the former GLF, Grammofonleverantörernas förening) — 'Guld- och Platinacertifikat delas ut av Ifpi Sverige.'",
    sourceUrl: "https://www.ifpi.se/musikbolag/guld-och-platina/",
    single: null,
    singleExcluded:
      "Ifpi Sverige counts CAPPED streams only and has excluded downloads entirely since 1 Jan 2018, so it publishes no sale-equivalence to convert with.",
    album: { silver: null, gold: 15_000, platinum: 30_000, diamond: null },
  },
  SK: {
    code: "SK",
    normalised:
      "Found 10 Sep 2026 in a 21 May 2026 archive of the body's own PDF, confirmed current by ČNS IFPI's awards page as captured 1 September 2026. The Slovak rules effective 9 March 2026 state every threshold in SUBSCRIPTION STREAMS — Zlatý singel 850,000, Platinový singel 1,700,000, Zlatý album 1,750,000, Platinový album 3,500,000 — and publish «1 download = 217 subscription streamov», which is what these are divided by. Both formats normalised. Zlatý and Platinový only: no Silver, no Diamond, no multiplier rule.",
    caveat:
      "ČNS IFPI's Slovak rules state no multiplier rule; an N× award is priced here as N × Platinum.",
    vintage:
      "ČNS IFPI's Slovak stream thresholds have not moved, but its download equivalence fell from 240 to 217 subscription streams on 9 March 2026, with two unarchived revisions between, so the same threshold is worth more units today than in 2025. Priced at today's ratio. Until 2022 the Slovak awards ran on euro revenue — a different measure.",
    body: "ČNS IFPI — Česká národní skupina IFPI (which administers the Slovak awards; SNS IFPI / ifpi.sk is the Slovak national group)",
    sourceUrl: "https://web.archive.org/web/20260521153213id_/https://ifpicr.cz/files/page/4b/9c/4b9c16f09271779fffe0975269b85eed/Pravidla-pre-udelovanie-ocenenia-od-9.3.2026-SR.pdf",
    single: { silver: null, gold: 3_917, platinum: 7_834, diamond: null },
    singleRaw: { gold: 850_000, platinum: 1_700_000 },
    album: { silver: null, gold: 8_064, platinum: 16_129, diamond: null },
    floor: { single: { silver: null, gold: 3_541, platinum: 7_083, diamond: null }, album: { silver: null, gold: 7_291, platinum: 14_583, diamond: null } },
    albumRaw: { gold: 1_750_000, platinum: 3_500_000 },
  },
  UK: {
    code: "UK",
    body: "BPI — British Phonographic Industry (BRIT Certified Awards)",
    sourceUrl: "https://certified-awards.bpi.co.uk/about",
    single: { silver: 200_000, gold: 400_000, platinum: 600_000, diamond: null },
    album: { silver: 60_000, gold: 100_000, platinum: 300_000, diamond: null },
  },
  US: {
    code: "US",
    body: "RIAA (Recording Industry Association of America)",
    sourceUrl: "https://www.riaa.com/gold-platinum/about-awards/",
    single: { silver: null, gold: 500_000, platinum: 1_000_000, diamond: 10_000_000 },
    album: { silver: null, gold: 500_000, platinum: 1_000_000, diamond: 10_000_000 },
  },
  ZA: {
    code: "ZA",
    body: "RiSA (Recording Industry of South Africa)",
    sourceUrl: "https://risa.org.za/certification-levels/",
    vintage:
      "RiSA roughly doubled its thresholds for sales after 1 January 2024 — singles Gold 10,000 → 20,000, Platinum 20,000 → 40,000; albums Gold 15,000 → 25,000, Platinum 30,000 → 50,000 — and prints both regimes side by side. Priced at today's level; a plaque awarded before 2024 may have cleared the lower bar.",
    single: { silver: null, gold: 20_000, platinum: 40_000, diamond: null },
    album: { silver: null, gold: 25_000, platinum: 50_000, diamond: null },
    floor: { single: { silver: null, gold: 10_000, platinum: 20_000, diamond: null }, album: { silver: null, gold: 15_000, platinum: 30_000, diamond: null } },
  },
};

/**
 * Units for one tier, or null when it cannot be priced.
 *
 * Returns null for BOTH reasons a figure can be absent — the tier does not exist
 * at that body, or the format is excluded — because a caller totalling units
 * must treat them identically: neither can contribute a number. Callers that
 * need to TELL THE READER which it was ask `exclusionFor` instead.
 */
export function thresholdFor(
  code: string,
  format: CertFormat,
  tier: "Silver" | "Gold" | "Platinum" | "Diamond",
  /** The cert's own `body`, when it names a programme other than the country's
   *  default. Passing it is not optional for correctness — omitting it prices a
   *  RIAA Latin Platino at 1,000,000 instead of 60,000. */
  program?: string,
): number | null {
  const key = tier.toLowerCase() as keyof TierUnits;
  if (program && CERT_PROGRAMS[program]) return CERT_PROGRAMS[program][format][key] ?? null;
  const tiers = CERT_THRESHOLDS[code]?.[format];
  if (!tiers) return null;
  return tiers[key] ?? null;
}

/** Why a format cannot be priced at all, or null when it can. */
export function exclusionFor(
  code: string,
  format: CertFormat,
  program?: string,
): string | null {
  // A named programme brings its own published scale, so it is priceable even
  // where the country's own thresholds are not.
  if (program && CERT_PROGRAMS[program]) return null;
  const c = CERT_THRESHOLDS[code];
  if (!c) return `No threshold record for ${code}.`;
  return (format === "single" ? c.singleExcluded : c.albumExcluded) ?? null;
}

/** Countries whose plaques can be priced at all, for a given format. */
export const pricedCountries = (format: CertFormat) =>
  Object.values(CERT_THRESHOLDS).filter((c) => c[format] !== null).map((c) => c.code);
