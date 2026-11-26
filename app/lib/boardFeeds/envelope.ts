import { createHash } from "node:crypto";
import { apiHeaders, LIVE_CACHE_CONTROL, provenance } from "../api";
import { FEED_LINKS } from "./shared";

/**
 * The envelope every FaveIQ board feed answers in (spec §2).
 *
 * `schema` is the contract's major version: FaveIQ refuses any other value,
 * so a breaking change ships at /api/v2 beside this one rather than in place.
 * `contentHash` hashes `data` alone — not the stamps around it — so it moves
 * only when what FaveIQ renders moves, and the strong ETag is the same hash.
 */

export const FEED_SCHEMA = "faveiq-board/1" as const;

/** The board's cache rule: the live-charts one (five minutes in a browser,
 *  an hour at the edge, a day stale while the edge revalidates). Every feed
 *  changes only with a deploy, which busts the edge. */
export const FEED_CACHE_CONTROL = LIVE_CACHE_CONTROL;

/** A short hash of a body's data: the first 32 hex characters of its SHA-256. */
export const contentHashOf = (data: unknown): string =>
  createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 32);

export type FeedBody<D> = {
  schema: typeof FEED_SCHEMA;
  endpoint: string;
  generatedAt: string;
  dataAsOf: string;
  contentHash: string;
  license: (typeof provenance)["license"];
  source: string;
  methodology: string;
  docs: string;
  links: Readonly<Record<string, string>>;
  data: D;
};

/** The envelope around one feed's data. `dataAsOf` is the newest date among
 *  the inputs the body reads (spec §2); `generatedAt` the moment it was built,
 *  which for a prerendered feed is the deploy. */
export function feedBody<D>(endpoint: string, dataAsOf: string, data: D, generatedAt = new Date().toISOString()): FeedBody<D> {
  return {
    schema: FEED_SCHEMA,
    endpoint,
    generatedAt,
    dataAsOf,
    contentHash: contentHashOf(data),
    ...provenance,
    links: FEED_LINKS,
    data,
  };
}

/** The headers every feed answer carries: the open API's CORS, licence and
 *  cache headers, plus a strong ETag that is the body's content hash. */
export const feedHeaders = (contentHash: string): Record<string, string> => ({
  ...apiHeaders(FEED_CACHE_CONTROL),
  ETag: `"${contentHash}"`,
});

export function feedResponse<D>(body: FeedBody<D>): Response {
  return Response.json(body, { headers: feedHeaders(body.contentHash) });
}

/**
 * An unknown artist, pair or country: a small JSON 404 that no cache keeps,
 * never the site's HTML 404 page (the reason the dynamic feed routes keep
 * dynamicParams true, as /api/v1/live-charts/<artist> does). The path is
 * echoed back bounded: it is arbitrary input.
 */
export function feedNotFound(endpoint: string): Response {
  const echoed = endpoint.length > 160 ? `${endpoint.slice(0, 160)}…` : endpoint;
  return Response.json(
    { error: "not-found", endpoint: echoed },
    { status: 404, headers: { ...apiHeaders(FEED_CACHE_CONTROL), "Cache-Control": "no-store" } },
  );
}
