// Shared plumbing for the public JSON API under /api/v1.
//
// The site's whole value is that its numbers are verified against primary
// sources, so the same dataset is published in machine-readable form for
// anyone who wants to cite, chart or build on it. Every payload carries its
// own provenance (source, licence, methodology) so a consumer who only ever
// sees the JSON still knows where the figures came from.

import { siteUrl } from "../site";
import { updates } from "../data/updates";

export const API_VERSION = "v1";

// `updated` is the date of the newest logged content change, NOT the build
// time. A payload that claims to be freshly generated on every deploy trains
// consumers to ignore the field — the same reasoning the sitemap uses for
// lastmod.
export const lastUpdated = [...updates.map((u) => u.date)].sort().at(-1)!;

export const LICENSE = {
  name: "CC BY 4.0",
  url: "https://creativecommons.org/licenses/by/4.0/",
  attribution: `Data from Burna Boy Stats (${siteUrl})`,
} as const;

/**
 * Where a payload came from and on what terms — the block every /api/v1
 * response carries.
 *
 * Exported rather than kept private to `apiJson` because the two live-charts
 * routes cannot use the envelope: the live-charts page's own country panels
 * read `releases` off the TOP level (app/lib/useLiveRelease.ts), so nesting
 * them under `data` would break the page. They shipped with neither — no
 * licence, no attribution string, no source, and no X-License header — which
 * on a CC BY dataset means a consumer who only ever sees that JSON was never
 * told the one condition attached to using it. They now spread this.
 */
export const provenance = {
  license: LICENSE,
  source: siteUrl,
  methodology: `${siteUrl}/methodology`,
  docs: `${siteUrl}/api`,
} as const;

// The underlying data changes a few times a day at most, so cache hard at the
// edge and let stale copies serve while revalidating.
export const API_CACHE_CONTROL =
  "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400";

// The live-charts snapshots are rebuilt hourly by the stats bot rather than a
// few times a day, so they keep a shorter browser max-age. It lives here, not
// in either route file: Next type-checks route.ts exports against a fixed set,
// and an extra `export const` in one fails `next build`.
export const LIVE_CACHE_CONTROL =
  "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400";

/**
 * CORS, cache and licence headers. The live-charts snapshots pass their own
 * Cache-Control because they are rebuilt hourly rather than a few times a day.
 *
 * X-License rides on every response, not just in the body: a crawler or a HEAD
 * request that never parses the JSON still learns the terms.
 */
export function apiHeaders(cacheControl: string = API_CACHE_CONTROL): Record<string, string> {
  return {
    // Open data: any origin may read it straight from the browser.
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Cache-Control": cacheControl,
    "X-License": "CC-BY-4.0",
  };
}

type Envelope = {
  endpoint: string;
  description: string;
  data: unknown;
} & (
  // `count` and `countOf` travel together or not at all. A bare `count` was
  // documented here as "the collection count" while /charts set it to 278
  // chart entries over 38 releases and /certifications to 234 awards over 85
  // releases — one field name, three different units, in a dataset people
  // join against. The pair is enforced by the type so the ambiguity cannot
  // come back: you cannot publish a number without saying what it counts.
  | { count?: undefined; countOf?: undefined }
  | { count: number; countOf: string }
);

/**
 * Wraps a payload in the standard envelope and returns it with CORS, cache and
 * licence headers.
 *
 * `count` is the endpoint's headline size and `countOf` names its unit in the
 * site's own words ("chart entries", "certifications", "songs"). It is NOT
 * always the length of the array in `data` — where the two differ, the
 * endpoint publishes the collection's own length under `data.totals` as well,
 * so a consumer can have either without guessing which one it got.
 */
export function apiJson({ endpoint, description, count, countOf, data }: Envelope) {
  return Response.json(
    {
      artist: "Burna Boy",
      endpoint: `/api/${API_VERSION}${endpoint}`,
      description,
      updated: lastUpdated,
      ...(count === undefined ? {} : { count, countOf }),
      ...provenance,
      data,
    },
    { headers: apiHeaders() }
  );
}

// Note: no OPTIONS handler on purpose. A route that exports anything beyond GET
// is excluded from static generation, and a plain cross-origin GET never fires
// a CORS preflight — so adding one would trade static delivery for a handler
// nothing calls.
