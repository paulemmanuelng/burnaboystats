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
//     There is no Diamond at the BPI, no Silver anywhere but Nigeria and the UK.
//     Nothing is missing; no plaque can ever land there.
//   • a null FORMAT (with an `Excluded` reason beside it) = real plaques exist
//     and CANNOT be priced. Those must be surfaced to the reader, per artist,
//     because silently scoring them zero penalises whoever holds more of them.
//
// DO NOT fill a gap by interpolating from a neighbouring country, by carrying a
// figure over from a secondary source, or by assuming a tier exists because it
// exists elsewhere. A null with a reason is the correct answer; a plausible
// invented number is the worst outcome this file can produce.
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
}

export const CERT_THRESHOLDS: Record<string, CountryThresholds> = {
  AT: {
    code: "AT",
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
    body: "BRMA — Belgian Recorded Music Association (renamed from BEA in 2022); the gold/platinum roster is published by Ultratop on BRMA's behalf",
    sourceUrl: "https://www.ultratop.be/nl/info_goud_platina.asp",
    single: null,
    singleExcluded:
      "Belgium's certifying body (BRMA) publishes no criteria page at all — its entire sitemap is a home page, a contact page and news posts — and Ultratop, which hosts the awarded roster, publishes thresholds nowhere either.",
    album: null,
    albumExcluded:
      "Belgium's certifying body (BRMA) publishes no criteria page at all — its entire sitemap is a home page, a contact page and news posts — and Ultratop, which hosts the awarded roster, publishes thresholds nowhere either.",
  },
  BR: {
    code: "BR",
    body: "Pro-Música Brasil (Pró-Música Brasil Produtores Fonográficos Associados)",
    sourceUrl: "https://pro-musicabr.org.br/home-2/certificados/tabela-de-niveis-de-certificacao-pro-musica/",
    single: { silver: null, gold: 40_000, platinum: 80_000, diamond: 300_000 },
    album: { silver: null, gold: 40_000, platinum: 80_000, diamond: 300_000 },
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
    body: "ČNS IFPI — Česká národní skupina IFPI",
    sourceUrl: "https://ifpicr.cz/limity-pro-udelovani-oceneni",
    single: null,
    singleExcluded:
      "ČNS IFPI's site is network-unreachable from every route tried. Czech certification is also reported to have run on CZK REVENUE rather than units for part of 2016-2025, so a unit threshold may be the wrong shape of answer entirely — confirm at the body before pricing.",
    album: null,
    albumExcluded:
      "ČNS IFPI's site is network-unreachable from every route tried. Czech certification is also reported to have run on CZK REVENUE rather than units for part of 2016-2025, so a unit threshold may be the wrong shape of answer entirely — confirm at the body before pricing.",
  },
  DE: {
    code: "DE",
    body: "BVMI (Bundesverband Musikindustrie e.V.)",
    sourceUrl: "https://www.musikindustrie.de/fileadmin/bvmi/upload/01_Der_BVMI/Dokumente-zum-Download/Richtlinien_BVMI_Gold_Platin_3_0_FINAL.pdf",
    single: { silver: null, gold: 300_000, platinum: 600_000, diamond: 1_500_000 },
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
    body: "Promusicae (Productores de Música de España), publishing through its own portal El Portal de Música (EPDM)",
    sourceUrl: "https://www.elportaldemusica.es/awards/index",
    single: { silver: null, gold: 50_000, platinum: 100_000, diamond: null },
    album: { silver: null, gold: 20_000, platinum: 40_000, diamond: null },
  },
  FR: {
    code: "FR",
    body: "SNEP — Syndicat National de l'Édition Phonographique",
    sourceUrl: "https://snepmusique.com/les-certifications/a-propos-des-certifications/",
    normalised:
      "SINGLES normalised: SNEP publishes them in streams (Gold 15,000,000). Divided by the body's own «1 téléchargement = 150 streams». Albums were already units.",
    single: { silver: null, gold: 100_000, platinum: 200_000, diamond: 333_333 },
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
    single: { silver: null, gold: 5_000, platinum: 10_000, diamond: null },
    album: { silver: null, gold: 2_000, platinum: 4_000, diamond: null },
  },
  IT: {
    code: "IT",
    body: "FIMI (Federazione Industria Musicale Italiana), with sales measurement by NIQ (formerly GfK) — 'Dal gennaio 2009 FIMI in collaborazione con NIQ … ufficializza le certificazioni di vendita di ogni singola registrazione musicale pubblicata e venduta in Italia.'",
    sourceUrl: "https://www.fimi.it/top-of-the-music/certificazioni/",
    single: { silver: null, gold: 100_000, platinum: 200_000, diamond: 2_000_000 },
    album: { silver: null, gold: 25_000, platinum: 50_000, diamond: 500_000 },
  },
  MX: {
    code: "MX",
    body: "AMPROFON — Asociación Mexicana de Productores de Fonogramas y Videogramas",
    sourceUrl: "https://amprofon.com.mx/es/media/documentos/antecedentes_criterios_certificaciones.pdf",
    single: null,
    singleExcluded:
      "AMPROFON states single levels are 'medidos en audio streams' and publishes no stream-to-unit ratio.",
    album: { silver: null, gold: 70_000, platinum: 140_000, diamond: 700_000 },
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
    body: "NVPI (Nederlandse Vereniging van Producenten en Importeurs van beeld- en geluidsdragers) — NVPI Muziek/Audio, which runs the official certification register at goudplatina.nl",
    sourceUrl: "https://www.goudplatina.nl/informatie",
    normalised:
      "BOTH normalised: NVPI is the reverse of everyone else — it converts sales INTO streams and states thresholds in streams. Divided by its own «1 singleverkoop = 215 streams» and «1 albumverkoop = 2150 streams».",
    single: { silver: null, gold: 46_512, platinum: 93_023, diamond: 232_558 },
    singleRaw: { gold: 10_000_000, platinum: 20_000_000, diamond: 50_000_000 },
    album: { silver: null, gold: 18_605, platinum: 37_209, diamond: 93_023 },
    albumRaw: { gold: 40_000_000, platinum: 80_000_000, diamond: 200_000_000 },
  },
  NO: {
    code: "NO",
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
    body: "Recorded Music NZ (RMNZ), which compiles and publishes the Official Aotearoa Music Charts",
    sourceUrl: "https://aotearoamusiccharts.co.nz/api/media/file/2025-09-30%20-%20Chart%20Rules%20-%20PDF%20version%20for%20website.pdf",
    single: { silver: null, gold: 15_000, platinum: 30_000, diamond: null },
    album: { silver: null, gold: 7_500, platinum: 15_000, diamond: null },
  },
  PL: {
    code: "PL",
    body: "ZPAV (Związek Producentów Audio-Video)",
    sourceUrl: "https://www.olis.pl/terms_oliw",
    single: null,
    singleExcluded:
      "ZPAV measures singles in PLN REVENUE, not units. Albums are units and ARE priced.",
    album: { silver: null, gold: 15_000, platinum: 30_000, diamond: 150_000 },
  },
  PT: {
    code: "PT",
    body: "Audiogest (issuer of the galardões under the AFP/Audiogest TOP regime; AFP – Associação Fonográfica Portuguesa has no live website)",
    sourceUrl: "https://audiogest.pt/documents/files/Regulamento%20_%20TOP%20e%20Galard%C3%A3o_novas%20altera%C3%A7%C3%B5es%20_%202025%281%29.pdf",
    single: { silver: null, gold: 12_000, platinum: 25_000, diamond: 250_000 },
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
    body: "ČNS IFPI — Česká národní skupina IFPI (which administers the Slovak awards; SNS IFPI / ifpi.sk is the Slovak national group)",
    sourceUrl: "https://ifpicr.cz/limity-pro-udelovani-oceneni",
    single: null,
    singleExcluded:
      "ČNS IFPI's Slovak site is network-unreachable from every route tried. As with Czechia, certification is reported to have run on REVENUE rather than units for part of 2016-2025, so a unit threshold may be the wrong shape of answer — confirm at the body before pricing.",
    album: null,
    albumExcluded:
      "ČNS IFPI's Slovak site is network-unreachable from every route tried. As with Czechia, certification is reported to have run on REVENUE rather than units for part of 2016-2025, so a unit threshold may be the wrong shape of answer — confirm at the body before pricing.",
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
    single: { silver: null, gold: 20_000, platinum: 40_000, diamond: null },
    album: { silver: null, gold: 25_000, platinum: 50_000, diamond: null },
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
