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

const HEADERS: Record<string, string> = {
  // Open data: any origin may read it straight from the browser.
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  // The underlying data changes a few times a day at most, so cache hard at
  // the edge and let stale copies serve while revalidating.
  "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
  "X-License": "CC-BY-4.0",
};

type Envelope = {
  endpoint: string;
  description: string;
  count?: number;
  data: unknown;
};

/**
 * Wraps a payload in the standard envelope and returns it with CORS + cache
 * headers. `count` is included only when the payload is a collection.
 */
export function apiJson({ endpoint, description, count, data }: Envelope) {
  return Response.json(
    {
      artist: "Burna Boy",
      endpoint: `/api/${API_VERSION}${endpoint}`,
      description,
      updated: lastUpdated,
      ...(count === undefined ? {} : { count }),
      license: {
        name: "CC BY 4.0",
        url: "https://creativecommons.org/licenses/by/4.0/",
        attribution: `Data from Burna Boy Stats (${siteUrl})`,
      },
      source: siteUrl,
      methodology: `${siteUrl}/methodology`,
      docs: `${siteUrl}/api`,
      data,
    },
    { headers: HEADERS }
  );
}

// Note: no OPTIONS handler on purpose. A route that exports anything beyond GET
// is excluded from static generation, and a plain cross-origin GET never fires
// a CORS preflight — so adding one would trade static delivery for a handler
// nothing calls.
