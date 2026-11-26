/**
 * The JSON Schema of every FaveIQ board feed (spec 4.9), served at
 * /api/v1/board/schema, and the small validator burnaboystats' own tests run
 * every body through (spec §8: "every body validates against the schema").
 *
 * Strict on purpose: every object closes with `additionalProperties: false`,
 * so a field added to a builder and not here fails the tests the same day.
 * That keeps this document a complete description of the bodies; FaveIQ's
 * own schemas, written from the spec, still pass fields they don't know
 * (additive changes keep faveiq-board/1, spec §2).
 *
 * Draft 2020-12, a small subset: type, properties, required,
 * additionalProperties, items, enum, const, anyOf, pattern. No $ref, so each
 * endpoint's schema stands on its own.
 */

import { FEED_SCHEMA } from "./envelope";

type Schema = Record<string, unknown>;

const ISO_DAY = "^\\d{4}-\\d{2}-\\d{2}$";

const str: Schema = { type: "string" };
const day: Schema = { type: "string", pattern: ISO_DAY };
const int: Schema = { type: "integer" };
const num: Schema = { type: "number" };
const bool: Schema = { type: "boolean" };
const arr = (items: Schema): Schema => ({ type: "array", items });
const nullable = (s: Schema): Schema => ({ anyOf: [s, { type: "null" }] });
const oneOfValues = (...values: (string | number | boolean)[]): Schema => ({ enum: values });
/** A closed object: every listed property required unless named optional. */
const obj = (properties: Record<string, Schema>, optional: readonly string[] = []): Schema => ({
  type: "object",
  properties,
  required: Object.keys(properties).filter((k) => !optional.includes(k)),
  additionalProperties: false,
});
/** A map from any key to one shape. */
const record = (value: Schema): Schema => ({ type: "object", additionalProperties: value });
/** A figure with and without Billboard's rows (spec §7). */
const bb = (s: Schema): Schema => obj({ all: s, withoutBillboard: s });

// ── Shared shapes (spec §3) ─────────────────────────────────────────────────

const tier = oneOfValues("Diamond", "Platinum", "Gold", "Silver");
const tierClass = oneOfValues("diamond", "platinum", "gold", "silver");
const dated = obj({ iso: day, long: str });
const rank = obj({ rank: int, joint: bool, label: str });

const artistRefProps = {
  slug: str,
  name: str,
  fullName: str,
  country: str,
  flag: str,
  image: str,
  href: str,
  wikipedia: str,
  spotifyUrl: str,
};
const artistRef = obj(artistRefProps);

const cert = obj(
  {
    c: str,
    level: tier,
    x: int,
    plus: tier,
    body: str,
    source: oneOfValues("label", "announcement"),
    announced: obj({ via: str, on: day }),
    label: str,
    marker: str,
    issuerMarker: bool,
    tierClass,
    provenance: str,
    home: bool,
  },
  ["plus", "source", "announced", "marker", "provenance"],
);

const dataset = obj({
  name: str,
  description: str,
  keywords: arr(str),
  variableMeasured: arr(str),
  dateModified: day,
  about: arr(obj({ name: str, sameAs: arr(str), id: str }, ["sameAs", "id"])),
});

const seoProps = {
  title: str,
  description: str,
  shareTitle: str,
  shareDescription: str,
  noindex: bool,
  dataset,
};
const seo = obj(seoProps, ["dataset"]);

const dataLine = obj(
  { json: str, csv: obj({ href: str, filename: str }), licence: obj({ name: str, url: str }), cite: str },
  ["csv"],
);

const segment = obj(
  { key: oneOfValues("certs", "charts", "live"), label: str, short: str, count: { anyOf: [int, bb(int)] }, href: str },
  ["count"],
);

const countryMeta = obj({ code: str, name: str, flag: str, body: str, url: str, region: str }, ["url", "region"]);

const tierCounts = obj({ Diamond: int, Platinum: int, Gold: int, Silver: int });

// ── The envelope (spec §2) ──────────────────────────────────────────────────

const envelope = (data: Schema): Schema =>
  obj({
    schema: { const: FEED_SCHEMA },
    endpoint: str,
    generatedAt: str,
    dataAsOf: day,
    contentHash: str,
    license: obj({ name: str, url: str, attribution: str }),
    source: str,
    methodology: str,
    docs: str,
    links: record(str),
    data,
  });

// ── 4.1 The index ───────────────────────────────────────────────────────────

const pageKind = oneOfValues(
  "board",
  "artist",
  "artist-charts",
  "artist-live",
  "compare",
  "pair",
  "country-index",
  "country",
  "box-office",
  "box-office-countries",
);
const pairRef = obj({ slug: str, a: str, b: str });

const indexData = obj({
  pages: arr(
    obj(
      { path: str, kind: pageKind, slug: str, pair: str, country: str, canonical: nullable(str), noindex: bool, lastModified: day },
      ["slug", "pair", "country"],
    ),
  ),
  artists: arr(obj({ slug: str, name: str, swept: bool, pages: obj({ certs: { const: true }, charts: bool, live: bool }) })),
  pairs: arr(pairRef),
  pairOrder: arr(obj({ from: str, to: str })),
  countries: arr(obj({ code: str, slug: str, name: str })),
  featuredPairs: arr(pairRef),
});

// ── 4.2 The Board ───────────────────────────────────────────────────────────

const chip = obj({ slug: str, name: str, href: str, value: int });

const boardData = obj({
  count: int,
  rows: arr(
    obj({
      artist: artistRef,
      hook: str,
      certs: int,
      countries: int,
      topCert: nullable(obj({ label: str, code: str })),
      chartEntries: bb(int),
      no1s: bb(int),
      live: int,
      mostInOneCountry: int,
      rank,
    }),
  ),
  ranksBy: obj({
    certs: record(rank),
    countries: record(rank),
    chartEntries: bb(record(rank)),
    no1s: bb(record(rank)),
    live: record(rank),
  }),
  pending: arr(obj({ artist: artistRef, hook: str })),
  field: arr(obj({ slug: str, name: str, countries: int, plaques: int })),
  lists: arr(obj({ title: str, sub: str, max: int, rows: arr(obj({ slug: str, name: str, href: str, value: int, rank })) })),
  rails: obj({ chartEntries: bb(arr(chip)), live: arr(chip) }),
  cadence: obj({ fullSweep: dated, reread: str, rereadCurly: str }),
  provenanceTile: str,
  liveNote: str,
  seo: obj(
    {
      ...seoProps,
      collectionPage: obj({ name: str, description: str }),
      itemList: arr(obj({ name: str, path: str })),
    },
    ["dataset"],
  ),
  share: obj({ dots: arr(obj({ slug: str, plaques: int, countries: int })), total: int }),
  lastModified: day,
});

// ── 4.3 Artist · Certifications ─────────────────────────────────────────────

const view = obj({
  total: int,
  countries: int,
  tiers: tierCounts,
  tierPct: tierCounts,
  numLabel: str,
  kicker: str,
  lede: str,
  empty: nullable(str),
  offRegister: nullable(obj({ phrase: str, hold: str })),
  provenanceShort: nullable(str),
  strip: arr(
    obj({ code: str, country: str, flag: str, label: str, marker: str, issuerMarker: bool, tierClass, title: str }, ["marker"]),
  ),
  mostCertified: arr(obj({ title: str, meta: str, anchor: str, cover: str, letter: str }, ["cover"])),
  endRegisters: arr(str),
});

const artistData = obj({
  artist: obj({ ...artistRefProps, hook: str, swept: bool, homeCode: str, homeName: str }, ["homeCode"]),
  segments: arr(segment),
  switches: obj({ scope: bool, credit: bool }),
  views: obj({ all: view, intl: view, lead: view, "intl-lead": view }, ["intl", "lead", "intl-lead"]),
  releases: arr(
    obj(
      {
        title: str,
        kind: oneOfValues("Albums", "Lead singles", "Featured appearances"),
        cover: str,
        letter: str,
        anchor: str,
        featured: bool,
        order: obj({ desktop: int, phone: int }),
        certs: arr(cert),
      },
      ["cover"],
    ),
  ),
  countries: record(countryMeta),
  verified: obj({ day: dated, sentence: str }),
  fullSweep: dated,
  chartsCard: nullable(obj({ entries: bb(int), territories: bb(int), no1s: bb(int), note: bb(str) })),
  liveCard: nullable(obj({ placements: int, countries: int, services: int, cadence: str })),
  notes: obj({ charts: nullable(bb(nullable(str))), live: nullable(str) }),
  headToHead: nullable(
    obj({
      self: obj({ total: int, countries: int, no1s: bb(int) }),
      opponent: obj({ artist: artistRef, total: int, countries: int, no1s: bb(int) }),
      note: str,
    }),
  ),
  compareWith: arr(obj({ slug: str, name: str, href: str })),
  showsHref: nullable(str),
  next: obj({ slug: str, name: str, href: str }),
  faqs: arr(obj({ q: str, a: bb(str) })),
  dataLine,
  seo: obj({ all: seo, withoutBillboard: seo, musicGroup: obj({ name: str, alternateName: str, image: str, sameAs: arr(str) }) }),
  share: obj({ topAward: nullable(str), total: int, countries: int }),
  lastModified: day,
});

// ── 4.4 Artist · Charts ─────────────────────────────────────────────────────

const peak = obj(
  { c: str, country: str, flag: str, body: str, peak: int, note: str, weeksAtPeak: int, weeks: int, billboard: bool },
  ["note", "weeksAtPeak", "weeks"],
);

const chartsData = obj({
  artist: artistRef,
  segments: arr(segment),
  releases: arr(obj({ title: str, kind: oneOfValues("Albums", "Singles"), cover: str, letter: str, entries: arr(peak) }, ["cover"])),
  order: bb(obj({ albums: arr(str), singles: arr(str) })),
  railOrder: bb(arr(str)),
  mostCharted: bb(arr(str)),
  countries: record(countryMeta),
  stats: bb(obj({ entries: int, no1s: int, territories: int, releases: int, globalLines: int, territoryNote: str })),
  sourceClause: bb(obj({ long: str, short: str })),
  chartSweep: dated,
  ledes: bb(obj({ phone: str, desktop: str })),
  sourceNote: bb(str),
  liveHref: nullable(str),
  seo: bb(seo),
  share: bb(obj({ bestPeaks: arr(obj({ c: str, flag: str, name: str, peak: int })) })),
  lastModified: day,
});

// ── 4.5 Artist · Live ───────────────────────────────────────────────────────

const status = oneOfValues("new", "re");
const liveEntry = obj({ country: str, name: str, position: int, movement: nullable(int), status }, ["movement", "status"]);

const liveData = obj({
  artist: artistRef,
  segments: arr(segment),
  updated: dated,
  builtAt: str,
  totals: obj({ placements: int, countries: int, numberOnes: int, releases: int, services: int }),
  platformTotals: arr(obj({ platform: str, placements: int, numberOnes: int, cadence: str })),
  releases: arr(
    obj(
      {
        key: str,
        title: str,
        displayTitle: str,
        kind: oneOfValues("song", "album"),
        cover: str,
        letter: str,
        ep: bool,
        total: int,
        no1: int,
        top: arr(obj({ platform: str, country: str, position: int, movement: nullable(int), status }, ["movement", "status"])),
        platforms: arr(obj({ platform: str, countries: str, numberOnes: int, entries: arr(liveEntry) })),
      },
      ["displayTitle", "cover"],
    ),
  ),
  hasChartBoard: bool,
  cadence: obj({ adverb: str, phrase: str, label: str }),
  lead: nullable(obj({ title: str, charts: int, best: int })),
  dataLine,
  seo,
  lastModified: day,
});

// ── 4.7 Box office ──────────────────────────────────────────────────────────

const money = obj({ value: num, compact: str, full: str });
const seoWithItems = obj({ ...seoProps, itemList: arr(obj({ name: str })) }, ["dataset"]);
const revenueSource = obj({ line: str, publishers: arr(str), readOn: dated, asOf: str });

const boxOfficeData = obj({
  top: obj(
    { artist: str, slug: str, venue: str, city: str, flag: str, tour: str, year: str, tickets: str, revenue: num, compact: str, full: str },
    ["tickets"],
  ),
  last: obj({ artist: str, slug: str, venue: str, city: str, flag: str, year: str, revenue: num, compact: str, full: str }),
  figures: obj({ count: int, artists: int, millionPlus: int, boardGross: money, spread: str }),
  leader: obj({ artist: str, slug: str, top10: int, share: obj({ value: num, pct: str }), gross: money, nights: int }),
  artists: arr(obj({ artist: str, slug: str, count: int, gross: num, share: num, pct: str })),
  chips: arr(obj({ artist: str, slug: str, nights: int })),
  shows: arr(
    obj(
      {
        rank: str,
        artist: str,
        slug: str,
        venue: str,
        city: str,
        flag: str,
        tour: str,
        year: str,
        tickets: str,
        revenue: num,
        compact: str,
        full: str,
        source: str,
      },
      ["tickets"],
    ),
  ),
  stands: arr(
    obj({
      artist: str,
      slug: str,
      venue: str,
      city: str,
      flag: str,
      tour: str,
      dates: str,
      nights: int,
      tickets: str,
      revenue: num,
      compact: str,
      source: str,
    }),
  ),
  runs: obj({ basis: obj({ desktop: str, phone: str }), splitNote: str }),
  nightCounts: record(int),
  source: revenueSource,
  anyDash: bool,
  dataLine,
  seo: seoWithItems,
  share: obj({
    top: obj({ artist: str, venue: str, city: str, year: str, revenue: num, compact: str }),
    leader: obj({ artist: str, share: str }),
    count: int,
  }),
  lastModified: day,
});

// ── 4.8 Box office by country ───────────────────────────────────────────────

const artistTotal = obj({
  artist: str,
  slug: str,
  total: num,
  totalM: str,
  shows: int,
  best: nullable(obj({ venue: str, city: str, year: str, revenue: num, revenueM: str, tickets: str }, ["tickets"])),
  stands: arr(obj({ venue: str, city: str, tour: str, dates: str, shows: int, tickets: str, revenue: num, revenueM: str })),
  runsNote: nullable(str),
});

const boxOfficeCountriesData = obj({
  countries: arr(
    obj({
      flag: str,
      name: str,
      continent: str,
      anchor: str,
      total: num,
      totalM: str,
      shows: int,
      leader: artistTotal,
      leaderShare: num,
      leaderLine: obj({ desk: str, phone: str }),
      leadsOnTotal: obj({ desk: nullable(str), phone: nullable(str) }),
      artists: arr(artistTotal),
    }),
  ),
  continents: arr(
    obj({
      continent: str,
      anchor: str,
      total: num,
      totalM: str,
      shows: int,
      leader: nullable(artistTotal),
      artists: arr(artistTotal),
      countries: arr(str),
    }),
  ),
  totals: obj({
    grandTotal: num,
    grandTotalM: str,
    showCount: int,
    singleShows: int,
    standCount: int,
    countryCount: int,
    continentCount: int,
    continentsAll: int,
  }),
  mostLed: obj({ artist: str, slug: str, count: int, of: int }),
  overallLeader: obj({
    artist: str,
    slug: str,
    total: num,
    totalM: str,
    share: obj({ value: num, pct: str }),
    runs: int,
    runsBasis: str,
  }),
  others: obj({ total: num, totalM: str, artists: int }),
  ladder: arr(obj({ rank: str, flag: str, name: str, leader: str, total: num, totalM: str, w: num, leaderShare: num })),
  summary: str,
  dataLine,
  source: revenueSource,
  seo: seoWithItems,
  lastModified: day,
});

// ── The document ────────────────────────────────────────────────────────────

/** Each endpoint's body schema, by the name its pattern below points at. */
export const FEED_SCHEMAS: Readonly<Record<string, Schema>> = {
  index: envelope(indexData),
  board: envelope(boardData),
  artist: envelope(artistData),
  "artist-charts": envelope(chartsData),
  "artist-live": envelope(liveData),
  "box-office": envelope(boxOfficeData),
  "box-office-countries": envelope(boxOfficeCountriesData),
  "not-found": obj({ error: { const: "not-found" }, endpoint: str }),
};

/** Which schema answers which path. */
export const FEED_ENDPOINTS: readonly { path: string; schema: keyof typeof FEED_SCHEMAS }[] = [
  { path: "/api/v1/board/index", schema: "index" },
  { path: "/api/v1/board", schema: "board" },
  { path: "/api/v1/board/{artist}", schema: "artist" },
  { path: "/api/v1/board/{artist}/charts", schema: "artist-charts" },
  { path: "/api/v1/board/{artist}/live", schema: "artist-live" },
  { path: "/api/v1/box-office", schema: "box-office" },
  { path: "/api/v1/box-office/countries", schema: "box-office-countries" },
];

export function feedSchemaDocument() {
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://burnaboystats.com/api/v1/board/schema",
    title: `The Afrobeats Board feeds (${FEED_SCHEMA})`,
    description:
      "One schema per feed body, in $defs, and which path answers with which. An unknown artist, pair or country answers 404 with the not-found body. Objects are closed: a field missing here is a field the feed does not send.",
    schema: FEED_SCHEMA,
    endpoints: FEED_ENDPOINTS.map((e) => ({ path: e.path, schema: `#/$defs/${e.schema}` })),
    $defs: FEED_SCHEMAS,
  };
}

// ── The validator ───────────────────────────────────────────────────────────

const typeOf = (v: unknown): string =>
  v === null ? "null" : Array.isArray(v) ? "array" : Number.isInteger(v) ? "integer" : typeof v;

/** Every way `value` breaks `schema`, as "path: what" lines; [] when it holds. */
export function schemaErrors(schema: Schema, value: unknown, path = "$"): string[] {
  if ("const" in schema && value !== schema.const) return [`${path}: expected ${JSON.stringify(schema.const)}`];
  if (schema.enum && !(schema.enum as unknown[]).includes(value)) return [`${path}: ${JSON.stringify(value)} is not one of ${JSON.stringify(schema.enum)}`];
  if (schema.anyOf) {
    const all = (schema.anyOf as Schema[]).map((s) => schemaErrors(s, value, path));
    return all.some((e) => e.length === 0) ? [] : [`${path}: matches no alternative (${all.map((e) => e[0]).join(" | ")})`];
  }
  const t = typeOf(value);
  if (schema.type) {
    const ok = schema.type === t || (schema.type === "number" && t === "integer");
    if (!ok) return [`${path}: expected ${schema.type}, got ${t}`];
  }
  if (schema.pattern && typeof value === "string" && !new RegExp(schema.pattern as string).test(value))
    return [`${path}: "${value}" does not match ${schema.pattern}`];
  const errors: string[] = [];
  if (t === "array" && schema.items) (value as unknown[]).forEach((v, i) => errors.push(...schemaErrors(schema.items as Schema, v, `${path}[${i}]`)));
  if (t === "object") {
    const o = value as Record<string, unknown>;
    const props = (schema.properties ?? {}) as Record<string, Schema>;
    for (const k of (schema.required ?? []) as string[]) if (!(k in o)) errors.push(`${path}: missing "${k}"`);
    for (const [k, v] of Object.entries(o)) {
      if (props[k]) errors.push(...schemaErrors(props[k], v, `${path}.${k}`));
      else if (schema.additionalProperties === false) errors.push(`${path}: unexpected "${k}"`);
      else if (schema.additionalProperties && typeof schema.additionalProperties === "object")
        errors.push(...schemaErrors(schema.additionalProperties as Schema, v, `${path}.${k}`));
    }
  }
  return errors;
}
