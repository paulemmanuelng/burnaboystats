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
// Thresholds, their provenance and the reason eight country/format pairs cannot
// be priced at all: app/data/certThresholds.ts.
//
// THREE RULES THIS FILE EXISTS TO ENFORCE
//
//  1. NEVER SUM A RELEASE'S OWN AWARDS. Gold -> Platinum -> 2x Platinum is the
//     same sales recertified, not three sales. Only the highest award a release
//     holds in a country may count. The release arrays happen to carry one
//     plaque per title per country today (audited 10 Sep 2026: zero duplicates
//     across all 1,212), so the rule never fires — it is implemented and tested
//     anyway, because `certHistory` is an APPEND-ONLY EVENT LOG where Gold and
//     Platinum both sit as rows, and anything built off that instead would
//     roughly double every figure on the page.
//
//  2. A MULTIPLIER APPLIES TO WHATEVER TIER IT SITS ON, not just to Platinum.
//     Tyla's "Water" is 2x DIAMOND in Brazil — the one case in the data, and it
//     is why this is written as threshold(tier) * x rather than the Platinum
//     shortcut that would have quietly priced it as a single Diamond.
//
//  3. WHAT CANNOT BE PRICED MUST BE COUNTED AND NAMED. 35 of the 1,212 plaques
//     sit in a country/format whose body publishes no usable threshold. Scoring
//     them zero in silence penalises whoever holds more of them, so every total
//     carries its own exclusion list.
// ============================================================================

import {
  CERT_THRESHOLDS,
  exclusionFor,
  thresholdFor,
  type CertFormat,
} from "../data/certThresholds";
import {
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
  type Tier,
} from "../data/certifications";
import { afrobeatsArtists, BURNA } from "../data/afrobeats";
import { albums as albumArt } from "../data/albums";
import { songs } from "../data/songs";

export interface ComparableCert {
  c: string;
  level: Tier;
  x?: number;
  /** Names the AWARD PROGRAMME when it is not the country's default. */
  body?: string;
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
  releases: ComparableRelease[];
}

// ---------------------------------------------------------------------------
// The roster: Burna Boy plus the fifteen board artists, on one shape.
//
// Burna is deliberately NOT inside `afrobeatsArtists` — that array is his PEERS,
// and the board's own header says so. His releases live in certifications.ts as
// three arrays, which is where the album/single split comes from for him; the
// board carries it as `kind` on each release.
// ---------------------------------------------------------------------------

/** Cover art for one of Burna's releases.
 *
 *  `certifications.ts` now carries its own `cover` for 81 of his 85 certified
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
  return s?.cover;
};

const burna: ComparableArtist = {
  slug: "burna-boy",
  name: BURNA.name,
  image: BURNA.image,
  href: BURNA.href,
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
    releases: a.releases.map((r) => ({
      title: r.title,
      format: (r.kind === "Albums" ? "album" : "single") as CertFormat,
      isFeature: r.kind === "Featured appearances",
      cover: r.cover,
      certs: r.certs,
    })),
  })),
];

export const artistBySlug = (slug: string) =>
  comparableArtists.find((a) => a.slug === slug) ?? null;

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export interface UnitsOptions {
  /** Nigeria is separated by default — TCSN's register is REQUEST-based, so a
   *  gap between two artists there can measure paperwork rather than sales. */
  includeNigeria: boolean;
  /** Featured appearances are off by default: a feature's units are not the
   *  artist's own release. */
  includeFeatures: boolean;
}

export const DEFAULT_OPTIONS: UnitsOptions = {
  includeNigeria: false,
  includeFeatures: false,
};

/** Units behind one plaque, or null with the reason it cannot be priced. */
export function unitsForCert(
  cert: ComparableCert,
  format: CertFormat,
): { units: number | null; why: string | null } {
  // RULE 4, and the one that bit hardest. A body can run more than one award
  // programme and their tiers are NOT interchangeable: RIAA Latin certifies a
  // Platino at 60,000 units against the standard programme's 1,000,000. The
  // first version of this file ignored `body` and priced "Dai Dai"'s US 2x
  // Platino at 2,000,000 instead of 120,000 — exactly what the comment in
  // certifications.ts had warned against for months.
  const excluded = exclusionFor(cert.c, format, cert.body);
  if (excluded) return { units: null, why: excluded };
  const base = thresholdFor(cert.c, format, cert.level, cert.body);
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
  return { units: base * (cert.x ?? 1), why: null };
}

export interface CountryLine {
  country: string;
  body: string;
  units: number;
  /** How many releases contributed — not how many awards, see rule 1. */
  releases: number;
  /** The single biggest plaque behind this line, for display. */
  top: { title: string; level: Tier; x: number } | null;
  /** false = the plaque is real but its body publishes no usable threshold, so
   *  it is LISTED and never summed. A row that vanishes reads as "no plaque",
   *  which is a different and false statement. */
  counted: boolean;
  /** Why it cannot be counted — shown as footnote 1. */
  reason?: string;
  /** A rule this file had to assume because the body publishes none — footnote 2. */
  caveat?: string;
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
  /** Plaques that counted toward `total`. */
  pricedPlaques: number;
}

export function priceArtist(
  artist: ComparableArtist,
  options: UnitsOptions = DEFAULT_OPTIONS,
): ArtistUnits {
  const releases = artist.releases.filter((r) => options.includeFeatures || !r.isFeature);

  // Rule 1: collapse to the highest award this release holds in this country
  // BEFORE anything is summed.
  const best = new Map<string, { release: ComparableRelease; cert: ComparableCert; units: number }>();
  const excluded = new Map<string, Exclusion>();

  for (const release of releases) {
    for (const cert of release.certs) {
      const { units, why } = unitsForCert(cert, release.format);
      if (units === null) {
        const key = `${cert.c}|${release.format}`;
        const row = excluded.get(key);
        if (row) row.plaques += 1;
        else excluded.set(key, { country: cert.c, format: release.format, plaques: 1, why: why ?? "" });
        continue;
      }
      const key = `${release.title}|${cert.c}`;
      const held = best.get(key);
      if (!held || units > held.units) best.set(key, { release, cert, units });
    }
  }

  const lines = new Map<string, CountryLine & { topUnits: number }>();
  const listedLines = new Map<string, CountryLine>();
  let nigeriaUnits = 0;
  let nigeriaPlaques = 0;

  // Plaques that exist but cannot be priced still get a row. Sweden's Gold on
  // "Gbona" is the live case: dropping it would tell the reader Burna holds no
  // Swedish plaque, which is false.
  for (const release of releases) {
    for (const cert of release.certs) {
      if (unitsForCert(cert, release.format).units !== null) continue;
      if (cert.c === "NG" && !options.includeNigeria) continue;
      const held = listedLines.get(cert.c);
      if (held) {
        held.releases += 1;
        continue;
      }
      listedLines.set(cert.c, {
        country: cert.c,
        body: CERT_THRESHOLDS[cert.c]?.body ?? cert.c,
        units: 0,
        releases: 1,
        top: { title: release.title, level: cert.level, x: cert.x ?? 1 },
        counted: false,
        reason: exclusionFor(cert.c, release.format, cert.body) ?? undefined,
      });
    }
  }

  for (const { release, cert, units } of best.values()) {
    if (cert.c === "NG") {
      nigeriaUnits += units;
      nigeriaPlaques += 1;
      if (!options.includeNigeria) continue;
    }
    const line = lines.get(cert.c);
    if (line) {
      line.units += units;
      line.releases += 1;
      if (units > line.topUnits) {
        line.topUnits = units;
        line.top = { title: release.title, level: cert.level, x: cert.x ?? 1 };
      }
    } else {
      lines.set(cert.c, {
        country: cert.c,
        body: CERT_THRESHOLDS[cert.c]?.body ?? cert.c,
        units,
        releases: 1,
        top: { title: release.title, level: cert.level, x: cert.x ?? 1 },
        topUnits: units,
        counted: true,
        caveat: (cert.x ?? 1) > 1 ? CERT_THRESHOLDS[cert.c]?.caveat : undefined,
      });
    }
  }

  const byCountry = [...lines.values()]
    .map(({ topUnits: _drop, ...line }) => line)
    .sort((a, b) => b.units - a.units || a.country.localeCompare(b.country));

  const exclusions = [...excluded.values()].sort((a, b) => b.plaques - a.plaques);

  const listed = [...listedLines.values()].sort((a, b) => a.country.localeCompare(b.country));

  return {
    artist,
    total: byCountry.reduce((n, l) => n + l.units, 0),
    byCountry,
    listed,
    caveats: [...new Set(byCountry.map((l) => l.caveat).filter(Boolean) as string[])],
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
export function nigeriaDefault(a: ComparableArtist, b: ComparableArtist): NigeriaDefault {
  const empty = [a, b].filter((x) => internationalCountryCount(x) === 0);
  if (empty.length) {
    const names = empty.map((x) => x.name).join(" and ");
    return {
      on: true,
      reason: `Nigeria included: ${names} ${empty.length > 1 ? "have" : "has"} no international certifications.`,
    };
  }
  if (isHomeMarketArtist(a) && isHomeMarketArtist(b)) {
    return {
      on: true,
      reason: "Nigeria included: both artists hold most of their plaques there.",
    };
  }
  return { on: false, reason: null };
}

// ---------------------------------------------------------------------------
// The comparison
// ---------------------------------------------------------------------------

export interface ComparisonRow {
  country: string;
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
  notCounted: { country: string; body: string; reason: string }[];
  /** Footnote 2 — multiplier rules this file had to assume. */
  caveats: string[];
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
  const ng = nigeriaDefault(a, b);
  const opts: UnitsOptions = {
    includeNigeria: options?.includeNigeria ?? ng.on,
    includeFeatures: options?.includeFeatures ?? DEFAULT_OPTIONS.includeFeatures,
  };
  const pa = priceArtist(a, opts);
  const pb = priceArtist(b, opts);

  const lineFor = (p: ArtistUnits, code: string) =>
    p.byCountry.find((l) => l.country === code) ?? p.listed.find((l) => l.country === code) ?? null;

  const codes = [
    ...new Set(
      [...pa.byCountry, ...pa.listed, ...pb.byCountry, ...pb.listed].map((l) => l.country),
    ),
  ];

  const all: ComparisonRow[] = codes
    .map((country) => {
      const la = lineFor(pa, country);
      const lb = lineFor(pb, country);
      return {
        country,
        body: CERT_THRESHOLDS[country]?.body ?? country,
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
        x.country.localeCompare(y.country),
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
    const mine = ordered.filter(
      (r) => !r.contested && r.country !== "NG" && (side === "a" ? r.a : r.b),
    );
    if (mine.length <= 6) continue;
    const tail = mine.slice(3);
    tail.forEach((r) => folded.add(r));
    collapsed.push({
      side,
      artist: (side === "a" ? pa : pb).artist.name,
      countries: tail.length,
      units: tail.reduce((n, r) => n + ((side === "a" ? r.a : r.b)?.units ?? 0), 0),
      rows: tail,
    });
  }

  const rows = ordered.filter((r) => !folded.has(r));

  const notCounted = [...pa.listed, ...pb.listed]
    .filter((l, i, xs) => xs.findIndex((y) => y.country === l.country) === i)
    .map((l) => ({ country: l.country, body: l.body, reason: l.reason ?? "" }));

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
  };
}
