// ============================================================================
//  DATA DOWNLOADS — the dataset as CSV, for anyone who works in a spreadsheet
// ============================================================================
//
// /press offers three files a journalist can open straight in Excel, Sheets or
// Numbers. They are the SAME records the pages and /api/v1 serve, flattened to
// one row each, and every value below is read off the data modules — nothing
// here is typed. A download that disagrees with the page it came from is worse
// than no download, so the row counts are the site's own counts by
// construction (tests/dataDownloads.test.tsx holds them to it).
//
// Three rules the format itself has to get right, because a spreadsheet will
// not tell anyone it got them wrong:
//
//  1. A UTF-8 BYTE-ORDER MARK. Excel opens a BOM-less CSV as Windows-1252 and
//     turns "4 Kampé II (Remix)" into "4 KampÃ© II (Remix)". The BOM is the
//     only signal Excel reads. (Fetch's `text()` strips it on the way in, so a
//     test has to read the bytes.)
//  2. RFC 4180 QUOTING. "Love, Damini" is a real album title; unquoted, it
//     splits into two columns and every field after it shifts one to the right.
//     A field holding a comma, a double quote or a line break is wrapped in
//     double quotes, and a double quote inside it is doubled. Lines end CRLF.
//  3. BLANK MEANS NOT PUBLISHED. A weeks-on-chart the body never printed, or a
//     plaque that cannot be priced, is an empty cell — never 0, which a reader
//     would take for a measured zero.
// ============================================================================

import { apiHeaders, lastUpdated, API_VERSION } from "./api";
import { unitsForCert } from "./certUnits";
import type { CertFormat } from "../data/certThresholds";
import {
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
  COUNTRIES as BURNA_COUNTRIES,
  CERTS_VERIFIED_ON,
  totalAwards,
  type Release,
} from "../data/certifications";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  type ChartRelease,
} from "../data/charts";
import { ceremonies, pendingResults, totalNominations, type AwardNom } from "../data/awards";
import {
  sweptArtists,
  countryMeta,
  chartCountryMeta,
  certCount,
  chartEntries,
  BURNA,
} from "../data/afrobeats";

export type Cell = string | number | boolean | null | undefined;

/** The UTF-8 byte-order mark — rule 1 above. */
export const CSV_BOM = "\uFEFF";

/** One field, quoted only where RFC 4180 requires it. */
export function csvCell(v: Cell): string {
  if (v === null || v === undefined) return "";
  const s = typeof v === "string" ? v : String(v);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** A whole file: BOM, header, rows, CRLF after every record. */
export function toCsv(header: readonly string[], rows: readonly Cell[][]): string {
  const lines = [header, ...rows].map((r) => r.map(csvCell).join(","));
  return CSV_BOM + lines.join("\r\n") + "\r\n";
}

// ---------------------------------------------------------------------------
// The kinds, in the vocabulary /api/v1/afrobeats already publishes, so a row
// here joins against the JSON without a lookup table.
// ---------------------------------------------------------------------------

type CertKind = "Albums" | "Lead singles" | "Featured appearances";

const BURNA_CERT_LEDGERS: [Release[], CertKind][] = [
  [burnaAlbums, "Albums"],
  [burnaSingles, "Lead singles"],
  [burnaFeatures, "Featured appearances"],
];

const BURNA_CHART_LEDGERS: [ChartRelease[], CertKind][] = [
  [albumCharts, "Albums"],
  [singleCharts, "Lead singles"],
  [featureCharts, "Featured appearances"],
];

const formatOf = (kind: string): CertFormat => (kind === "Albums" ? "album" : "single");

// ---------------------------------------------------------------------------
// certifications.csv — one row per plaque, Burna Boy and the board
// ---------------------------------------------------------------------------

export const CERT_HEADER = [
  "artist",
  "release",
  "credit",
  "format",
  "kind",
  "country_code",
  "country",
  "certifying_body",
  "level",
  "multiplier",
  "certified_units",
  "priced",
  "unpriced_reason",
  "register_url",
  "verified_on",
] as const;

interface PlaqueInput {
  artist: string;
  release: string;
  credit: string | null;
  kind: string;
  cert: { c: string; level: "Diamond" | "Platinum" | "Gold" | "Silver"; x?: number; body?: string };
  country: { name: string; body: string; url?: string };
  verifiedOn: string;
}

function plaqueRow(p: PlaqueInput): Cell[] {
  const format = formatOf(p.kind);
  // The site's own pricing — the same call /compare makes, so a units figure
  // here is the one that page sums. A FLOOR: the release passed the body's
  // threshold for this tier, and could be anywhere above it.
  const { units, why } = unitsForCert(p.cert, format);
  return [
    p.artist,
    p.release,
    p.credit,
    format,
    p.kind,
    p.cert.c,
    p.country.name,
    // The per-cert programme wins over the country's default body, exactly as
    // /api/v1 resolves it: "Dai Dai" is RIAA Latin, not RIAA.
    p.cert.body ?? p.country.body,
    p.cert.level,
    p.cert.x ?? 1,
    units,
    units !== null,
    units === null ? why : null,
    p.country.url ?? null,
    p.verifiedOn,
  ];
}

const burnaPlaques: Cell[][] = BURNA_CERT_LEDGERS.flatMap(([items, kind]) =>
  items.flatMap((r) =>
    r.certs.map((cert) =>
      plaqueRow({
        artist: BURNA.name,
        release: r.title,
        // /api/v1/certifications' own default, so the two agree row for row.
        credit: r.credit ?? BURNA.name,
        kind,
        cert,
        country: BURNA_COUNTRIES[cert.c] ?? { name: cert.c, body: cert.c },
        verifiedOn: CERTS_VERIFIED_ON,
      }),
    ),
  ),
);

// sweptArtists, the list /api/v1/afrobeats publishes: an artist whose register
// sweep is still scheduled has not been counted by the board's rule.
const boardPlaques: Cell[][] = sweptArtists.flatMap((a) =>
  a.releases.flatMap((r) =>
    r.certs.map((cert) =>
      plaqueRow({
        artist: a.name,
        release: r.title,
        // The board records no credit string for its releases; blank says so
        // rather than inventing one.
        credit: null,
        kind: r.kind,
        cert,
        country: countryMeta(cert.c),
        verifiedOn: a.verifiedOn,
      }),
    ),
  ),
);

export const certificationRows: Cell[][] = [...burnaPlaques, ...boardPlaques];

/** What the page prints beside the file — derived from the same counters the
 *  rest of the site uses, never from the rows above. */
export const certificationCounts = {
  burna: totalAwards(),
  board: sweptArtists.reduce((n, a) => n + certCount(a), 0),
  artists: 1 + sweptArtists.length,
};

// ---------------------------------------------------------------------------
// chart-peaks.csv — one row per official chart entry
// ---------------------------------------------------------------------------

export const CHART_HEADER = [
  "artist",
  "release",
  "credit",
  "format",
  "kind",
  "country_code",
  "country",
  "chart",
  "peak",
  "weeks_at_peak",
  "weeks_on_chart",
  "note",
] as const;

const burnaEntries: Cell[][] = BURNA_CHART_LEDGERS.flatMap(([items, kind]) =>
  items.flatMap((r) =>
    r.entries.map((e) => [
      BURNA.name,
      r.title,
      r.credit ?? BURNA.name,
      formatOf(kind),
      kind,
      e.c,
      CHART_COUNTRIES[e.c]?.name ?? e.c,
      CHART_COUNTRIES[e.c]?.body ?? null,
      e.peak,
      // Absent unless the chart body publishes it — blank, never 0.
      e.weeksAtPeak ?? null,
      e.weeks ?? null,
      // The caveat travels with the figure it qualifies, as it does in
      // /api/v1/charts: some runs are non-consecutive, some are floors.
      e.note ?? null,
    ]),
  ),
);

const boardEntries: Cell[][] = sweptArtists.flatMap((a) =>
  a.charts.flatMap((r) =>
    r.entries.map((e) => {
      // chartCountryMeta, not countryMeta: a chart row's body is the chart
      // compiler (GfK, Hitlisten), never the certifier (BVMI, IFPI Denmark).
      const meta = chartCountryMeta(e.c);
      return [
        a.name,
        r.title,
        null,
        formatOf(r.kind),
        r.kind,
        e.c,
        meta.name,
        meta.body,
        e.peak,
        e.weeksAtPeak ?? null,
        e.weeks ?? null,
        e.note ?? null,
      ];
    }),
  ),
);

export const chartPeakRows: Cell[][] = [...burnaEntries, ...boardEntries];

export const chartCounts = {
  burna: chartEntryCount,
  board: sweptArtists.reduce((n, a) => n + chartEntries(a), 0),
  artists: 1 + sweptArtists.length,
};

// ---------------------------------------------------------------------------
// awards.csv — Burna Boy's competitive nominations
// ---------------------------------------------------------------------------

export const AWARD_HEADER = ["ceremony", "year", "category", "work", "result"] as const;

/** won / pending / nominated. `won: false` alone cannot tell a loss from a
 *  ceremony that has not happened; pendingResults can, by the same test
 *  awards.ts uses for `pendingNominations`. */
export function nominationResult(ceremony: string, n: AwardNom): "won" | "pending" | "nominated" {
  if (n.won) return "won";
  return pendingResults.some((p) => p.ceremony === ceremony && p.year === n.year)
    ? "pending"
    : "nominated";
}

export const awardRows: Cell[][] = ceremonies.flatMap((c) =>
  c.noms.map((n) => [c.name, n.year, n.category, n.work ?? null, nominationResult(c.name, n)]),
);

// ---------------------------------------------------------------------------
// The three files, as the page, the /api docs and the routes see them
// ---------------------------------------------------------------------------

export type DownloadSlug = "certifications" | "chart-peaks" | "awards";

export interface DataDownload {
  slug: DownloadSlug;
  /** The published path, e.g. /api/v1/certifications.csv. */
  path: string;
  header: readonly string[];
  rows: Cell[][];
  /** The headline row count, from the site's own counters. */
  count: number;
  countOf: string;
  /** One line on what the file holds. */
  what: string;
}

const csvPath = (slug: DownloadSlug) => `/api/${API_VERSION}/${slug}.csv`;

export const DATA_DOWNLOADS: DataDownload[] = [
  {
    slug: "certifications",
    path: csvPath("certifications"),
    header: CERT_HEADER,
    rows: certificationRows,
    count: certificationCounts.burna + certificationCounts.board,
    countOf: "plaques",
    what: `Every plaque for Burna Boy and the ${sweptArtists.length} artists on the Afrobeats Board — body, level, multiplier, certified units and the register to check it in.`,
  },
  {
    slug: "chart-peaks",
    path: csvPath("chart-peaks"),
    header: CHART_HEADER,
    rows: chartPeakRows,
    count: chartCounts.burna + chartCounts.board,
    countOf: "chart entries",
    what: `Every official chart entry for the same ${chartCounts.artists} artists — country, chart, peak, and weeks at peak and on chart where the body publishes them.`,
  },
  {
    slug: "awards",
    path: csvPath("awards"),
    header: AWARD_HEADER,
    rows: awardRows,
    count: totalNominations,
    countOf: "nominations",
    what: "Burna Boy's competitive nominations — ceremony, year, category, work, and whether it was won, lost or is still pending.",
  },
];

export const downloadBySlug = (slug: DownloadSlug) => DATA_DOWNLOADS.find((d) => d.slug === slug)!;

/** The dated name the browser saves the file under. The date is the data's —
 *  the newest logged change, the same `updated` /api/v1 publishes — not the
 *  build's, so two downloads of unchanged data carry the same name. */
export const downloadFilename = (slug: DownloadSlug) => `burnaboystats-${slug}-${lastUpdated}.csv`;

/** The file itself, with the API's CORS, cache and licence headers. */
export function csvResponse(slug: DownloadSlug): Response {
  const d = downloadBySlug(slug);
  return new Response(toCsv(d.header, d.rows), {
    headers: {
      ...apiHeaders(),
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${downloadFilename(slug)}"`,
    },
  });
}

// ---------------------------------------------------------------------------
// How to cite
// ---------------------------------------------------------------------------

/** "23 September 2026" — the data date in the words a citation uses. */
export const dataDateLabel = new Date(`${lastUpdated}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** The citation line /press offers beside the downloads. Its date is the
 *  data's, filled in from the updates log on every build. */
export const DATASET_CITATION = `Source: Burna Boy Stats (burnaboystats.com), data as of ${dataDateLabel}. CC BY 4.0.`;
