// ============================================================================
//  CERTIFIED UNITS — pricing a plaque, and comparing two artists by the result
// ============================================================================
//
// WHAT THIS COMPUTES, AND WHAT IT DOES NOT. A certification is a FLOOR, not a
// measurement. 3x Platinum in Nigeria means the release passed 300,000 units; it
// could be 590,000 and nobody would know until it reached 6x. So everything here
// is a MINIMUM, and the word "sold" must not appear beside any figure it
// produces. That is not a weakness — it is a floor for both sides under
// identical rules, which is exactly what makes the comparison hold up.
//
// Thresholds, their provenance and the reason two country/format pairs cannot
// be priced at all (Colombia, both formats — recounted 23 Sep 2026, when
// Poland's singles were priced at ZPAV's own 2 zł a single and left the list;
// Greece left it on 20 Sep, at IFPI's June 2013 level):
// app/data/certThresholds.ts.
//
// THREE RULES THIS FILE EXISTS TO ENFORCE
//
//  1. NEVER SUM A RELEASE'S OWN AWARDS. Gold -> Platinum -> 2x Platinum is the
//     same sales recertified, not three sales. Only the highest award a release
//     holds in a country may count. The release arrays happen to carry one
//     plaque per title per country today (audited 10 Sep 2026: zero duplicates
//     across all 1,212; 1,218 on 20 Sep), so the rule never fires — it is implemented and tested
//     anyway, because `certHistory` is an APPEND-ONLY EVENT LOG where Gold and
//     Platinum both sit as rows, and anything built off that instead would
//     roughly double every figure on the page.
//
//  2. A MULTIPLIER APPLIES TO WHATEVER TIER IT SITS ON, not just to Platinum.
//     Tyla's "Water" is 2x DIAMOND in Brazil — the one case in the data, and it
//     is why this is written as threshold(tier) * x rather than the Platinum
//     shortcut that would have quietly priced it as a single Diamond.
//
//  3. WHAT CANNOT BE PRICED MUST BE COUNTED AND NAMED. 2 of the 1,238 plaques
//     sit in a country/format whose body publishes no usable threshold
//     (recounted 23 Sep 2026, once Poland's singles were priced: Colombia 2;
//     it was 10 with Poland's 8. The 18 plaques the 23 Sep register sweep
//     added all price). Scoring them zero in silence penalises
//     whoever holds more of them, so every total carries its own exclusion
//     list.
//
//  And two kinds of line priced on a figure nobody prints today: Greece, at
//  the last level IFPI ever published for it (June 2013), and Poland's
//  singles, at ZPAV's current złoty levels divided by the 2 zł a single its
//  rules printed until 2024. Every such line carries `historic` — footnote 5,
//  the ¶ mark — so the reader knows the figure rests on a number the body no
//  longer publishes.
// ============================================================================

import {
  CERT_PROGRAMS,
  CERT_THRESHOLDS,
  exclusionFor,
  historicFor,
  vintageFor,
  assumedFor,
  exactThresholdFor,
  type CertFormat,
  type ExactUnits,
} from "../data/certThresholds";
import {
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
  CERTS_VERIFIED_ON,
  CERTS_LAST_FULL_SWEEP,
  type Tier,
} from "../data/certifications";
import { afrobeatsArtists, BURNA, AFROBEATS_LAST_FULL_SWEEP, countryMeta } from "../data/afrobeats";
import { albums as albumArt } from "../data/albums";
import { songs } from "../data/songs";
import { coverFor } from "./covers";
import { artAt } from "./artAt";
import { isFeaturedKind } from "./certScope";
import { awardRank } from "./awardName";

export interface ComparableCert {
  c: string;
  level: Tier;
  x?: number;
  /** A lower tier awarded on top of the main one (AMPROFON's "Platino & Oro"):
   *  priced as one more plaque of that tier — see unitsForCert. */
  plus?: Tier;
  /** Names the AWARD PROGRAMME when it is not the country's default. */
  body?: string;
  /** Not a register row: "label" (the label's own plaque) or "announcement".
   *  Carried so the chip names a label's issuer even where it is the
   *  country's listed body (Turkey; lib/issuerMarker). */
  source?: "label" | "announcement";
}

export interface ComparableRelease {
  title: string;
  /** "feat. Travis Scott", "Dave ft. Burna Boy" — Burna's data carries these; the
   *  board's `AfroRelease` has no credit field, so it is undefined there. */
  credit?: string;
  format: CertFormat;
  isFeature: boolean;
  cover?: string;
  certs: ComparableCert[];
}

export interface ComparableArtist {
  slug: string;
  name: string;
  image: string;
  /** Where this artist's own ledger lives. */
  href: string;
  /** The last day this ledger was verified (ISO) — moves on a partial read
   *  too. A pair page stamps its Dataset with the newer of the two. */
  verifiedOn: string;
  /** The last day EVERY register behind this ledger was read (ISO): his
   *  last full sweep for Burna Boy (CERTS_LAST_FULL_SWEEP), the board's for
   *  every board artist (AFROBEATS_LAST_FULL_SWEEP). A pair page's
   *  "registers read" line prints these, not `verifiedOn` (3 Oct 2026: Tyla's
   *  verifiedOn moved on a photo and a post, and the line said "both registers
   *  read 3 October 2026"). */
  registersReadOn: string;
  releases: ComparableRelease[];
}

// ---------------------------------------------------------------------------
// The roster: Burna Boy plus every board artist, on one shape.
//
// Burna is deliberately NOT inside `afrobeatsArtists` — that array is his PEERS,
// and the board's own header says so. His releases live in certifications.ts as
// three arrays, which is where the album/single split comes from for him; the
// board carries it as `kind` on each release.
// ---------------------------------------------------------------------------

/** Cover art for one of Burna's releases.
 *
 *  `certifications.ts` now carries its own `cover` for 79 of his 93 certified
 *  releases; albums.ts and songs.ts remain as a fallback for the handful that
 *  already had Spotify art before the Deezer fill. Four releases have none on
 *  purpose — see the `cover` field's own note. Undefined is expected there. */
const burnaCover = (title: string, own?: string): string | undefined => {
  if (own) return own;
  const key = title.toLowerCase();
  const a = (albumArt as { title: string; cover?: string }[]).find(
    (x) => x.title.toLowerCase() === key,
  );
  if (a?.cover) return a.cover;
  const s = (songs as { title: string; cover?: string }[]).find(
    (x) => x.title.toLowerCase() === key,
  );
  // …and finally the resolver the certifications page itself uses, which adds
  // the tracklist lookup and the hand-resolved overrides for features on other
  // artists' records. Without it "Be Honest" (Jorja Smith's) and "Tshwala Bam
  // (Remix)" (TitoM & Yuppe's) carried art on /certifications and rendered
  // blank on /compare — the same plaque, two answers (Paul, 23 Sep 2026).
  //
  // Normalised to 500px on the way through. That table holds 100px URLs,
  // sized for the ledger's badges, and this side's invariant is that every
  // sleeve is stored at one size so a row of them never renders at two
  // scales — a test says so, and caught these the moment they arrived.
  if (s?.cover) return s.cover;
  const shared = coverFor(title);
  return shared ? artAt(shared, 500) : undefined;
};

const burna: ComparableArtist = {
  slug: "burna-boy",
  name: BURNA.name,
  image: BURNA.image,
  href: BURNA.href,
  verifiedOn: CERTS_VERIFIED_ON,
  // His last FULL sweep, not CERTS_VERIFIED_ON, which a one-register read
  // moves (Dai Dai's Danish Gold, 4 Oct 2026; debug pass, 5 Oct 2026).
  registersReadOn: CERTS_LAST_FULL_SWEEP,
  releases: [
    ...burnaAlbums.map((r) => ({ ...r, format: "album" as const, isFeature: false })),
    ...burnaSingles.map((r) => ({ ...r, format: "single" as const, isFeature: false })),
    ...burnaFeatures.map((r) => ({ ...r, format: "single" as const, isFeature: true })),
  ].map((r) => ({
    title: r.title,
    credit: r.credit,
    format: r.format,
    isFeature: r.isFeature,
    cover: burnaCover(r.title, (r as { cover?: string }).cover),
    certs: r.certs,
  })),
};

export const comparableArtists: ComparableArtist[] = [
  burna,
  ...afrobeatsArtists.map((a) => ({
    slug: a.slug,
    name: a.name,
    image: a.image,
    href: `/afrobeats/${a.slug}`,
    verifiedOn: a.verifiedOn,
    registersReadOn: AFROBEATS_LAST_FULL_SWEEP,
    releases: a.releases.map((r) => ({
      title: r.title,
      format: (r.kind === "Albums" ? "album" : "single") as CertFormat,
      isFeature: isFeaturedKind(r.kind),
      cover: r.cover,
      certs: r.certs,
    })),
  })),
];

export const artistBySlug = (slug: string) =>
  comparableArtists.find((a) => a.slug === slug) ?? null;

/** The titles this artist is FEATURED on — the releases /compare's "lead
 *  credits only" switch leaves out. The certifications views. Lead
 *  switch (lib/certScope) reads its featured appearances from here, so the
 *  two pages can never disagree about a release (Paul, 3 Oct 2026: "exactly
 *  what the compare page and others uses"). Empty for an unknown slug. */
export function featuredTitlesOf(slug: string): Set<string> {
  const a = artistBySlug(slug);
  return new Set(a ? a.releases.filter((r) => r.isFeature).map((r) => r.title) : []);
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export interface UnitsOptions {
  /** Nigeria is separated by default — TCSN's register is REQUEST-based, so a
   *  gap between two artists there can measure paperwork rather than sales. */
  includeNigeria: boolean;
  /** Featured appearances count by default (Paul, 12 Sep 2026): a plaque the
   *  artist holds is a plaque, and the certifications pages count them —
   *  "All Eyes on Me", 19× Platinum in South Africa, is his even though the
   *  record is AKA's. The switch drops to lead credits only for a reader who
   *  wants each artist's own releases. */
  includeFeatures: boolean;
}

export const DEFAULT_OPTIONS: UnitsOptions = {
  includeNigeria: false,
  includeFeatures: true,
};

// ---------------------------------------------------------------------------
// Exact sums. A level a body prints in streams is a fraction of a unit
// (NVPI's single Gold is 10,000,000 / 215), and floored plaque by plaque the
// remainders are lost from every sum: three Dutch plaques worth 130,232.56
// added up to 130,231 beside Tyla's two at 130,232, and the board ranked her
// first on the remainder (debug pass, 5 Oct 2026). So a plaque carries its
// exact worth, a line or a total sums those, and each sum is floored ONCE.
// Integer fractions, not floats: 3 × 50,000,000 / 150 is exactly 1,000,000.
// ---------------------------------------------------------------------------

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
export const ZERO_UNITS: ExactUnits = { num: 0, den: 1 };
export const addUnits = (a: ExactUnits, b: ExactUnits): ExactUnits => {
  const den = (a.den / gcd(a.den, b.den)) * b.den;
  return { num: a.num * (den / a.den) + b.num * (den / b.den), den };
};
export const floorUnits = (e: ExactUnits): number => Math.floor(e.num / e.den);
export const sumUnits = (xs: (ExactUnits | null | undefined)[]): ExactUnits =>
  xs.reduce<ExactUnits>((n, x) => (x ? addUnits(n, x) : n), ZERO_UNITS);

/** Units behind one plaque, or null with the reason it cannot be priced.
 *  `units` is the plaque's own figure, floored; `exact` is what sums use. */
export function unitsForCert(
  cert: ComparableCert,
  format: CertFormat,
): { units: number | null; why: string | null; exact?: ExactUnits } {
  // RULE 4, and the one that bit hardest. A body can run more than one award
  // programme and their tiers are NOT interchangeable: RIAA Latin certifies a
  // Platino at 60,000 units against the standard programme's 1,000,000. The
  // first version of this file ignored `body` and priced "Dai Dai"'s US 2x
  // Platino at 2,000,000 instead of 120,000 — exactly what the comment in
  // certifications.ts had warned against for months.
  const excluded = exclusionFor(cert.c, format, cert.body);
  if (excluded) return { units: null, why: excluded };
  const base = exactThresholdFor(cert.c, format, cert.level, cert.body);
  if (base === null) {
    // Audited to zero occurrences on 10 Sep 2026 — every plaque's tier exists at
    // its own body. Kept because a new plaque could arrive at a tier the body
    // does not publish, and that must surface rather than score zero.
    return {
      units: null,
      why: `${cert.body ?? CERT_THRESHOLDS[cert.c]?.body ?? cert.c} publishes no ${cert.level} threshold for ${format}s.`,
    };
  }
  // Rule 2: the multiplier rides whatever tier it is on. Brazil's "2x Diamond"
  // is the live case.
  //
  // Rule 2b: a half step ON TOP is priced too. AMPROFON prints combined
  // awards — "Platino & Oro | 4 & 1" — and One Dance's Mexican plaque is four
  // Platinos AND an Oro, so it is worth 4 × Platino + 1 × Oro at the same
  // body, programme and format, read from the same table. Still one plaque.
  const multiplied: ExactUnits = { num: base.num * (cert.x ?? 1), den: base.den };
  if (cert.plus) {
    const extra = exactThresholdFor(cert.c, format, cert.plus, cert.body);
    if (extra === null) {
      // A half step at a tier the body does not publish must surface, like a
      // main tier would, rather than silently pricing the plaque without it.
      return {
        units: null,
        why: `${cert.body ?? CERT_THRESHOLDS[cert.c]?.body ?? cert.c} publishes no ${cert.plus} threshold for ${format}s.`,
      };
    }
    const exact = addUnits(multiplied, extra);
    return { units: floorUnits(exact), why: null, exact };
  }
  return { units: floorUnits(multiplied), why: null, exact: multiplied };
}

/** The programme a plaque was awarded under, when the body runs more than one
 *  and the threshold table prices them separately — today that is RIAA Latin
 *  and nothing else.
 *
 *  RULE 5, and Paul's (23 Sep 2026): A SEPARATELY-PRICED PROGRAMME IS A
 *  SEPARATE LINE. RIAA Latin certifies a Platino at 60,000 units where RIAA
 *  certifies a Platinum at 1,000,000; the two are not the same award and a
 *  "United States" line that sums them reports three plaques RIAA never
 *  issued. The units are still US units and still count toward the artist's
 *  total — they simply never sit inside the RIAA line.
 *
 *  A `body` that merely names a different ISSUER is not a programme: Colombia's
 *  "Sony Music Colombia" plaque has no published scale of its own, which is why
 *  this asks CERT_PROGRAMS rather than testing for a body override. */
export const programOf = (cert: { body?: string }): string | undefined =>
  cert.body && CERT_PROGRAMS[cert.body] ? cert.body : undefined;

/** The line a plaque belongs on: its country, and its programme when that
 *  programme is priced separately. */
export const marketKey = (country: string, program?: string) =>
  program ? `${country}|${program}` : country;

/** The four notes a priced figure can carry — /compare's †, ‡, § and ¶. */
export interface PlaqueNotes {
  /** † — a multiple priced by a rule the body does not publish. */
  caveat?: string;
  /** ‡ — the body raised its thresholds, and this is today's level. */
  vintage?: string;
  /** § — a stream-to-unit ratio the body does not publish. */
  assumed?: string;
  /** ¶ — a level or rate the body published once and no longer prints. */
  historic?: string;
}

/** The notes in the order /compare prints their marks: † ‡ § ¶. */
export const PLAQUE_NOTE_ORDER = ["caveat", "vintage", "assumed", "historic"] as const;

/** The headings /compare prints over those footnotes. The CSV's `units_note`
 *  (app/lib/dataDownloads.ts) names a figure's notes in these same words, so a
 *  download can never describe a figure differently from the page. */
export const PLAQUE_NOTE_HEADINGS: Record<keyof PlaqueNotes, string> = {
  caveat: "Multiplier assumed",
  vintage: "This body raised its thresholds since 2015",
  assumed: "Ratio assumed",
  historic: "Historic figure",
};

/** The † footnote's body. Several bodies' notes end on the same rule — "An N×
 *  award is priced here as N × Platinum." — and a table with four of them on
 *  screen printed it four times (debug pass, 5 Oct 2026). Said once, at the
 *  end, where two or more share it; each body's own note keeps it on the
 *  country boards, which print one body at a time. */
export const SHARED_MULTIPLE_RULE = "An N× award is priced here as N × Platinum.";
export function caveatParagraph(caveats: string[]): string {
  const sharing = caveats.filter((c) => c.endsWith(` ${SHARED_MULTIPLE_RULE}`));
  if (sharing.length < 2) return caveats.join(" ");
  return [...caveats.map((c) => (sharing.includes(c) ? c.slice(0, -SHARED_MULTIPLE_RULE.length).trim() : c)), SHARED_MULTIPLE_RULE].join(" ");
}
/** The notes ONE priced plaque carries — the rule priceArtist applies to every
 *  line, and the CSV to every row.
 *
 *  A separately-priced programme publishes its own scale, so the country's
 *  threshold notes are not statements about it (rule 5): RIAA Latin's
 *  Platinos carry none. The multiplier note needs a multiple or a half step
 *  on top — a single Gold assumes no rule for multiples, however the body
 *  writes them. */
export function plaqueNotes(cert: ComparableCert, format: CertFormat): PlaqueNotes {
  const own = !programOf(cert);
  return {
    // A half step on top (AMPROFON's "Platino & Oro") is priced by the same
    // assumed stacking rule as a multiple, so it carries the same †.
    caveat: own && ((cert.x ?? 1) > 1 || cert.plus) ? CERT_THRESHOLDS[cert.c]?.caveat : undefined,
    vintage: own ? vintageFor(cert.c, format) : undefined,
    assumed: own ? assumedFor(cert.c, format) : undefined,
    historic: own ? historicFor(cert.c, format) : undefined,
  };
}

export interface CountryLine {
  country: string;
  /** Set when this line is a separately-priced programme rather than the
   *  country's own body — see `programOf`. */
  program?: string;
  body: string;
  units: number;
  /** How many releases contributed — not how many awards, see rule 1. */
  releases: number;
  /** The single biggest plaque behind this line, for display. `body` names the
   *  award PROGRAMME when it is not the country's default — RIAA Latin — so the
   *  chip can be marked the way Burna's own page marks "Dai Dai". */
  top: { title: string; level: Tier; x: number; body?: string; source?: "label" | "announcement"; plus?: Tier } | null;
  /** false = the plaque is real but its body publishes no usable threshold, so
   *  it is LISTED and never summed. A row that vanishes reads as "no plaque",
   *  which is a different and false statement. */
  counted: boolean;
  /** Why it cannot be counted — shown as footnote 1. */
  reason?: string;
  /** A rule this file had to assume because the body publishes none — footnote 2. */
  caveat?: string;
  /** Plaques in this country that could NOT be priced, when the same country
   *  also holds priced ones. Sweden is the live case: Burna's album Gold prices
   *  and his five single plaques do not, and the row has to say both — the
   *  first version of this file silently dropped the five. */
  notCounted?: { plaques: number; top: { title: string; level: Tier; x: number; body?: string; source?: "label" | "announcement"; plus?: Tier }; reason: string };
  /** The body changed its thresholds inside the window and this line is priced
   *  at today's level regardless — footnote 3, on every line for the country. */
  vintage?: string;
  /** This line is priced at a stream-to-unit ratio the body does not publish
   *  (Sweden, Mexico) — footnote 4, on every line for the country. */
  assumed?: string;
  /** This line rests on a figure the body no longer prints — Greece's IFPI
   *  June 2013 level, or the 2 zł a single Poland's singles are divided by —
   *  footnote 5 (¶), on every line it applies to. */
  historic?: string;
}

export interface Exclusion {
  country: string;
  format: CertFormat;
  plaques: number;
  why: string;
}

export interface ArtistUnits {
  artist: ComparableArtist;
  /** Sum of every priced plaque under the chosen options. A FLOOR. */
  total: number;
  byCountry: CountryLine[];
  /** Nigeria, always computed so it can be shown even when excluded from `total`. */
  nigeria: { units: number; plaques: number };
  /** Countries holding a real plaque that cannot be priced. Rendered as rows
   *  with the tier chip and "not counted", never dropped. */
  listed: CountryLine[];
  excluded: Exclusion[];
  excludedPlaques: number;
  /** Bodies whose multiplier rule this file assumed — footnote 2. */
  caveats: string[];
  /** Bodies whose thresholds moved inside the window — footnote 3. */
  vintages: string[];
  /** Bodies priced at a stream ratio they do not publish — footnote 4. */
  assumptions: string[];
  /** Lines resting on a figure the body no longer prints — Greece's last LEVEL,
   *  Poland's last single RATE — footnote 5 (¶). */
  historics: string[];
  /** Plaques that counted toward `total`. */
  pricedPlaques: number;
}

export function priceArtist(
  artist: ComparableArtist,
  options: UnitsOptions = DEFAULT_OPTIONS,
): ArtistUnits {
  const releases = artist.releases.filter((r) => options.includeFeatures || !r.isFeature);

  // Tier, then multiplier, then any half step on top — app/lib/awardName.ts.
  const rank = awardRank;

  // Rule 1: collapse to the highest award this release holds in this country
  // BEFORE anything is summed. Keyed on title AND format: two different
  // releases sharing a name — an album and its title-track single — are two
  // releases, and keying on the title alone silently folded them into one.
  const best = new Map<string, { release: ComparableRelease; cert: ComparableCert; units: number; exact: ExactUnits }>();
  // Unpriceable plaques, also collapsed per release per country and ranked by
  // tier, so the chip shown is the HIGHEST one held there rather than the first
  // one enumerated. Poland, before its singles were priced, was showing
  // Burna's Gold on "Dai Dai" while his Platinum on "We Pray" sat behind it.
  const unpriced = new Map<string, { release: ComparableRelease; cert: ComparableCert; why: string }>();
  const excluded = new Map<string, Exclusion>();

  for (const release of releases) {
    for (const cert of release.certs) {
      const { units, why, exact } = unitsForCert(cert, release.format);
      const key = `${release.title}|${release.format}|${cert.c}`;
      if (units === null) {
        const ek = `${cert.c}|${release.format}`;
        const row = excluded.get(ek);
        if (row) row.plaques += 1;
        else excluded.set(ek, { country: cert.c, format: release.format, plaques: 1, why: why ?? "" });
        const held = unpriced.get(key);
        // Keep the reason unitsForCert produced — for a tier the body does not
        // award it is the only reason there is, and re-deriving it from
        // exclusionFor returned null on that path.
        if (!held || rank(cert) > rank(held.cert)) unpriced.set(key, { release, cert, why: why ?? "" });
        continue;
      }
      const held = best.get(key);
      if (!held || units > held.units) best.set(key, { release, cert, units, exact: exact ?? { num: units, den: 1 } });
    }
  }

  // `exact` is the line's sum before it is floored — see addUnits.
  const lines = new Map<string, CountryLine & { topUnits: number; exact: ExactUnits }>();
  const listedLines = new Map<string, CountryLine & { topRank: number }>();
  let nigeriaUnits = 0;
  let nigeriaPlaques = 0;

  for (const { release, cert, units, exact } of best.values()) {
    if (cert.c === "NG") {
      nigeriaUnits += units;
      nigeriaPlaques += 1;
      if (!options.includeNigeria) continue;
    }
    // The notes are a property of the LINE: each applies whenever any plaque
    // that earns it contributes, not only when that plaque happened to be
    // enumerated first. Burna's New Zealand line opened on an unmultiplied
    // plaque and his 3x Platinum on "Last Last" then shipped with no dagger.
    // What each plaque earns is plaqueNotes' call — one rule, shared with the
    // CSV download.
    const notes = plaqueNotes(cert, release.format);
    // Rule 5: a separately-priced programme is its own line. Everything below
    // keys on the MARKET, not the country, so RIAA Latin's Platinos never land
    // inside the RIAA line.
    const program = programOf(cert);
    const key = marketKey(cert.c, program);
    const line = lines.get(key);
    if (line) {
      line.exact = addUnits(line.exact, exact);
      line.units = floorUnits(line.exact);
      line.releases += 1;
      // The chip is the HIGHEST award on the line, units only breaking a tie
      // between equal awards: Asake's UK line showed a Silver single (200,000
      // units) over his Gold album (100,000), "Silver · 7 plaques · top
      // shown" beside a UK Gold (debug pass, 5 Oct 2026). certCountry picks
      // its lines' `top` by the same rule; tests/compareCountry.test.ts holds
      // the two together.
      if (rank(cert) > rank(line.top!) || (rank(cert) === rank(line.top!) && units > line.topUnits)) {
        line.topUnits = units;
        line.top = { title: release.title, level: cert.level, x: cert.x ?? 1, body: cert.body, ...(cert.source ? { source: cert.source } : {}), ...(cert.plus ? { plus: cert.plus } : {}) };
      }
      // Like the caveat, the ¶ is the LINE's: Poland's is singles-only, and
      // Rema's Polish line opens on his album before "Calm Down" joins it.
      for (const k of PLAQUE_NOTE_ORDER) if (!line[k]) line[k] = notes[k];
    } else {
      lines.set(key, {
        country: cert.c,
        program,
        // A programme line is the PROGRAMME's, so it names it — the country's
        // default body never awarded these.
        body: program ?? CERT_THRESHOLDS[cert.c]?.body ?? cert.c,
        units,
        exact,
        releases: 1,
        top: { title: release.title, level: cert.level, x: cert.x ?? 1, body: cert.body, ...(cert.source ? { source: cert.source } : {}), ...(cert.plus ? { plus: cert.plus } : {}) },
        topUnits: units,
        counted: true,
        // A programme publishes its own scale, so the country's threshold
        // notes — the raised-levels ‡, the assumed-ratio §, the historic ¶ —
        // are not statements about it; plaqueNotes returns none for one.
        ...notes,
      });
    }
  }

  // Plaques that exist but cannot be priced still get a row. Sweden's Gold on
  // "Gbona" is the live case: dropping it would tell the reader Burna holds no
  // Swedish plaque, which is false. Where the same country ALSO holds priced
  // plaques, the unpriced ones attach to that line rather than vanishing.
  for (const { release, cert, why } of unpriced.values()) {
    if (cert.c === "NG" && !options.includeNigeria) continue;
    const top = { title: release.title, level: cert.level, x: cert.x ?? 1, body: cert.body, ...(cert.source ? { source: cert.source } : {}), ...(cert.plus ? { plus: cert.plus } : {}) };
    // Keyed on the market for the same reason the priced lines are: a tier a
    // PROGRAMME does not award (there is no Silver Platino) must not attach
    // itself to the country's line.
    const program = programOf(cert);
    const key = marketKey(cert.c, program);
    const priced = lines.get(key);
    if (priced) {
      const nc = priced.notCounted;
      if (!nc) priced.notCounted = { plaques: 1, top, reason: why };
      else {
        nc.plaques += 1;
        if (rank(cert) > rank(nc.top)) nc.top = top;
      }
      continue;
    }
    const held = listedLines.get(key);
    if (held) {
      held.releases += 1;
      if (rank(cert) > held.topRank) {
        held.top = top;
        held.topRank = rank(cert);
      }
      continue;
    }
    listedLines.set(key, {
      country: cert.c,
      program,
      body: program ?? CERT_THRESHOLDS[cert.c]?.body ?? cert.c,
      units: 0,
      releases: 1,
      top,
      topRank: rank(cert),
      counted: false,
      reason: why,
    });
  }

  const byCountry = [...lines.values()]
    .map(({ topUnits: _drop, exact: _exact, ...line }) => line)
    .sort((a, b) => b.units - a.units || a.country.localeCompare(b.country));

  const exclusions = [...excluded.values()].sort((a, b) => b.plaques - a.plaques);

  const listed = [...listedLines.values()]
    .map(({ topRank: _drop, ...line }) => line)
    .sort((a, b) => a.country.localeCompare(b.country));

  return {
    artist,
    total: byCountry.reduce((n, l) => n + l.units, 0),
    byCountry,
    listed,
    caveats: [...new Set(byCountry.map((l) => l.caveat).filter(Boolean) as string[])],
    vintages: [...new Set(byCountry.map((l) => l.vintage).filter(Boolean) as string[])],
    assumptions: [...new Set(byCountry.map((l) => l.assumed).filter(Boolean) as string[])],
    historics: [...new Set(byCountry.map((l) => l.historic).filter(Boolean) as string[])],
    nigeria: { units: nigeriaUnits, plaques: nigeriaPlaques },
    excluded: exclusions,
    excludedPlaques: exclusions.reduce((n, e) => n + e.plaques, 0),
    pricedPlaques: byCountry.reduce((n, l) => n + l.releases, 0),
  };
}

/** One release, priced the same way — for the song-vs-song comparison. */
export function priceRelease(
  artist: ComparableArtist,
  title: string,
  options: UnitsOptions = DEFAULT_OPTIONS,
): (ArtistUnits & { release: ComparableRelease }) | null {
  const release = artist.releases.find(
    (r) => r.title.toLowerCase() === title.toLowerCase(),
  );
  if (!release) return null;
  const priced = priceArtist({ ...artist, releases: [release] }, {
    ...options,
    // A song the reader explicitly picked is never filtered out for being a
    // feature — the toggle governs artist TOTALS, not an explicit choice.
    includeFeatures: true,
  });
  return { ...priced, release };
}

// ---------------------------------------------------------------------------
// The Nigeria default
// ---------------------------------------------------------------------------

/** Share of an artist's plaques awarded in Nigeria. Derived, never a typed list:
 *  Asake sits at 89% and is about four plaques from crossing the line. */
export function nigeriaShare(a: ComparableArtist): number {
  const certs = a.releases.flatMap((r) => r.certs);
  if (!certs.length) return 0;
  return certs.filter((c) => c.c === "NG").length / certs.length;
}

export const isHomeMarketArtist = (a: ComparableArtist) => nigeriaShare(a) >= 0.5;

/** Countries outside Nigeria where this artist holds a plaque. */
export function internationalCountryCount(a: ComparableArtist): number {
  return new Set(
    a.releases.flatMap((r) => r.certs.map((c) => c.c)).filter((c) => c !== "NG"),
  ).size;
}

export interface NigeriaDefault {
  on: boolean;
  /** Shown on screen whenever the default is flipped. Silently folding in a
   *  request-based register is the thing the separation exists to prevent. */
  reason: string | null;
}

/**
 * Whether the comparison opens with Nigeria included.
 *
 * Two clauses, fire on either (Paul, 10 Sep 2026), tested against all 120 pairs:
 * 57 fire — 28 on the first clause, 12 on the second, 17 on both.
 *
 * A third clause was tried — "or the international union is under ~6 rows" — and
 * changes ZERO pairs, because every artist who is not home-market holds at least
 * 14 international countries, so a thin union already implies both sides are
 * home-market. It is redundant, not a safety net. Do not re-add it.
 */
export function nigeriaDefault(
  a: ComparableArtist,
  b: ComparableArtist,
  /** The features setting the VIEW will use. The zero-international clause
   *  exists to prevent a blank column, so it has to look at the same plaques
   *  the column will show: an artist whose international plaques are all
   *  featured appearances (Tiwa Savage's one, "Romantic"; BNXN's, until the
   *  credit-role rule of 7 Oct 2026 made "Mood", "Finesse" and "Propeller"
   *  his leads) rendered "at least 0" with features off and no rescue,
   *  because this was counting plaques the view had already excluded. */
  includeFeatures = DEFAULT_OPTIONS.includeFeatures,
): NigeriaDefault {
  const empty = noneOutsideNigeria([a, b], includeFeatures);
  if (empty.on) return empty;
  if (isHomeMarketArtist(a) && isHomeMarketArtist(b)) {
    return {
      on: true,
      reason: "Nigeria included: both artists hold most of their plaques there.",
    };
  }
  return { on: false, reason: null };
}

/**
 * The same default for ONE artist — /compare with one side filled (or the same
 * artist twice). Only the first clause carries over: it is about the artist,
 * and it fires in every pairing that artist is in, whoever the other side is.
 * The second is about the pair. The one-side state hardcoded Nigeria off, so
 * Seyi Vibez alone, every one of his 102 plaques Nigerian, read "at least 0 ·
 * 0 of 0 plaques counted" where each of his pair pages opens on 11,125,000
 * (debug pass, 6 Oct 2026).
 */
export function nigeriaDefaultSolo(
  a: ComparableArtist,
  includeFeatures = DEFAULT_OPTIONS.includeFeatures,
): NigeriaDefault {
  return noneOutsideNigeria([a], includeFeatures);
}

/** The first clause: a side with no plaque outside Nigeria among the plaques
 *  the view counts. */
function noneOutsideNigeria(artists: ComparableArtist[], includeFeatures: boolean): NigeriaDefault {
  const scoped = (x: ComparableArtist): ComparableArtist => ({
    ...x,
    releases: x.releases.filter((r) => includeFeatures || !r.isFeature),
  });
  const empty = artists.filter((x) => internationalCountryCount(scoped(x)) === 0);
  if (!empty.length) return { on: false, reason: null };
  const names = empty.map((x) => x.name).join(" and ");
  return {
    on: true,
    // "outside Nigeria", not "international": Black Sherif is Ghanaian, and
    // every one of his 25 Nigerian plaques is international for him — the
    // line said he had none (debug pass, 5 Oct 2026; page.tsx and
    // comparePairs adopted the same words on 3 Oct). With featured
    // appearances off the count is of lead credits, and says so.
    reason: `Nigeria included: ${names} ${empty.length > 1 ? "have" : "has"} no certifications outside Nigeria${includeFeatures ? "" : " as lead artist"}.`,
  };
}

// ---------------------------------------------------------------------------
// The comparison
// ---------------------------------------------------------------------------

export interface ComparisonRow {
  country: string;
  /** Set when the row is a separately-priced programme rather than the
   *  country's own body (RIAA Latin) — see `programOf`. */
  program?: string;
  body: string;
  a: CountryLine | null;
  b: CountryLine | null;
  /** Both sides hold a plaque here. These are the rows a reader came for, and
   *  they are NEVER folded away. */
  contested: boolean;
}

/** One side's folded tail — never contested rows, only its own exclusives. */
export interface CollapsedTail {
  side: "a" | "b";
  artist: string;
  countries: number;
  units: number;
  rows: ComparisonRow[];
}

export interface Comparison {
  a: ArtistUnits;
  b: ArtistUnits;
  /** What renders, in order: Nigeria first when included, then by the larger
   *  side's figure. */
  rows: ComparisonRow[];
  /** Rows folded out of `rows`, behind "Show all". */
  collapsed: CollapsedTail[];
  contested: ComparisonRow[];
  uncontested: ComparisonRow[];
  nigeria: NigeriaDefault;
  options: UnitsOptions;
  /** Footnote 1 — bodies whose plaques could not be priced, with the reason. */
  /** `issuer` is the programme the plaque actually came from (e.g. Sony Music
   *  Colombia) when the country's own body prices nothing — the footnote names
   *  it rather than a body that never issued the plaque. */
  notCounted: { country: string; body: string; issuer?: string; reason: string }[];
  /** Footnote 2 — multiplier rules this file had to assume. */
  caveats: string[];
  /** Footnote 3 — bodies that changed their thresholds inside the window. */
  vintages: string[];
  /** Footnote 4 — bodies priced at a stream ratio they do not publish. */
  assumptions: string[];
  /** Footnote 5 — lines resting on a figure the body no longer prints (¶). */
  historics: string[];
}

/** Footnote 1's entries: one per COUNTRY, naming every issuer behind its
 *  unpriced plaques. De-duplicated on the country alone, it named the first
 *  side's: Burna Boy vs Rema read "Colombia (Sony Music Colombia)" over Rema's
 *  Pro Musica Colombia Diamond (debug pass, 5 Oct 2026). The song mode on
 *  /compare builds its footnote here too. */
export function notCountedNotes(
  lines: CountryLine[],
): { country: string; body: string; issuer?: string; reason: string }[] {
  const byCountry = new Map<string, CountryLine[]>();
  for (const l of lines) byCountry.set(l.country, [...(byCountry.get(l.country) ?? []), l]);
  return [...byCountry.values()].map((group) => {
    const first = group[0];
    const issuers = [
      // The UNPRICED plaque's issuer: a listed line's own top, or what rides
      // unpriced on a priced line. A plaque naming no issuer is the body's.
      ...new Set(group.map((l) => (l.counted ? l.notCounted?.top : l.top)?.body ?? countryMeta(l.country).body)),
    ];
    return {
      country: first.country,
      body: first.body,
      issuer: issuers.length ? issuers.join(" · ") : undefined,
      reason: first.reason ?? first.notCounted?.reason ?? "",
    };
  });
}

/**
 * Two artists, priced and laid out.
 *
 * THE COLLAPSE RULE, which is the one worth stating: a row where BOTH sides hold
 * a plaque is never folded, however lopsided the pair. Only a side's own
 * exclusive rows fold, only past its top three, and only when it has more than
 * six of them. Burna vs Olamide is the case it was written for — eighteen rows
 * of which Olamide competes in exactly one, and that one must stay on screen.
 */
export function compare(
  a: ComparableArtist,
  b: ComparableArtist,
  options?: Partial<UnitsOptions>,
): Comparison {
  const includeFeatures = options?.includeFeatures ?? DEFAULT_OPTIONS.includeFeatures;
  const ng = nigeriaDefault(a, b, includeFeatures);
  const opts: UnitsOptions = {
    includeNigeria: options?.includeNigeria ?? ng.on,
    includeFeatures,
  };
  const pa = priceArtist(a, opts);
  const pb = priceArtist(b, opts);

  // Rows are MARKETS, not countries: rule 5 gives a separately-priced
  // programme a line of its own, so the United States can appear twice — once
  // as RIAA, once as RIAA Latin — and neither figure includes the other.
  const keyOf = (l: CountryLine) => marketKey(l.country, l.program);
  const lineFor = (p: ArtistUnits, key: string) =>
    p.byCountry.find((l) => keyOf(l) === key) ?? p.listed.find((l) => keyOf(l) === key) ?? null;

  const codes = [
    ...new Set(
      [...pa.byCountry, ...pa.listed, ...pb.byCountry, ...pb.listed].map(keyOf),
    ),
  ];

  const all: ComparisonRow[] = codes
    .map((key) => {
      const la = lineFor(pa, key);
      const lb = lineFor(pb, key);
      const line = la ?? lb!;
      return {
        country: line.country,
        program: line.program,
        body: line.body,
        a: la,
        b: lb,
        contested: Boolean(la && lb),
      };
    })
    // Rule 1: sort by the larger side. A listed-not-counted plaque scores 0 — it
    // is shown, but it does not buy position.
    .sort(
      (x, y) =>
        Math.max(y.a?.units ?? 0, y.b?.units ?? 0) - Math.max(x.a?.units ?? 0, x.b?.units ?? 0) ||
        x.country.localeCompare(y.country) ||
        (x.program ?? "").localeCompare(y.program ?? ""),
    );

  // Rule 3: Nigeria pins to the top when it is in scope, so an included Nigeria
  // reads as its own thing rather than merging into the middle of the table.
  const ordered = opts.includeNigeria
    ? [...all.filter((r) => r.country === "NG"), ...all.filter((r) => r.country !== "NG")]
    : all;

  // Rule 2.
  const collapsed: CollapsedTail[] = [];
  const folded = new Set<ComparisonRow>();
  for (const side of ["a", "b"] as const) {
    // A row carrying an unpriced plaque never folds: "not counted" must be
    // visible, or the plaque is unseen as well as unsummed (Paul, 12 Sep 2026).
    const unpriced = (l: CountryLine | null) => Boolean(l && (!l.counted || l.notCounted));
    const mine = ordered.filter(
      (r) => !r.contested && r.country !== "NG" && (side === "a" ? r.a : r.b) && !unpriced(r.a) && !unpriced(r.b),
    );
    if (mine.length <= 6) continue;
    const tail = mine.slice(3);
    tail.forEach((r) => folded.add(r));
    collapsed.push({
      side,
      artist: (side === "a" ? pa : pb).artist.name,
      countries: 0, // counted below, once the rows on screen are known
      units: tail.reduce((n, r) => n + ((side === "a" ? r.a : r.b)?.units ?? 0), 0),
      rows: tail,
    });
  }

  const rows = ordered.filter((r) => !folded.has(r));
  // COUNTRIES, not market rows, and none already on screen: a folded RIAA
  // Latin line is the United States, whose RIAA row is visible above it — "+ 14
  // further countries" on Burna Boy vs Davido held 13 (debug pass, 5 Oct 2026).
  for (const t of collapsed)
    t.countries = new Set(t.rows.map((r) => r.country).filter((code) => !rows.some((r) => r.country === code))).size;

  const notCounted = notCountedNotes([
    ...pa.listed,
    ...pb.listed,
    ...pa.byCountry.filter((l) => l.notCounted),
    ...pb.byCountry.filter((l) => l.notCounted),
  ]);

  return {
    a: pa,
    b: pb,
    rows,
    collapsed,
    contested: ordered.filter((r) => r.contested),
    uncontested: ordered.filter((r) => !r.contested),
    nigeria: ng,
    options: opts,
    notCounted,
    caveats: [...new Set([...pa.caveats, ...pb.caveats])],
    vintages: [...new Set([...pa.vintages, ...pb.vintages])],
    assumptions: [...new Set([...pa.assumptions, ...pb.assumptions])],
    historics: [...new Set([...pa.historics, ...pb.historics])],
  };
}
