import { allPairs, canonicalPair, pairSlug, parsePair } from "../../../../lib/comparePairs";
import { compareStamp, compareView } from "../../../../lib/boardFeeds/compare";
import { feedBody, feedNotFound, feedResponse } from "../../../../lib/boardFeeds/envelope";

// One head-to-head page (feed spec 4.6): the engine's answer for the pair,
// prebuilt at deploy for all 190. A pair is canonical in one order (by plaques
// held); the reversed slug is a 404 here, and FaveIQ redirects it with the
// index's pairOrder.
export const dynamicParams = true;
export function generateStaticParams() {
  return allPairs().map(([a, b]) => ({ pair: pairSlug(a, b) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const endpoint = `/api/v1/compare/${pair}`;
  const parsed = parsePair(pair);
  if (!parsed || pairSlug(parsed[0], parsed[1]) !== pair) return feedNotFound(endpoint);
  const [a, b] = canonicalPair(parsed[0], parsed[1]);
  const sp = { a: a.slug, b: b.slug };
  const view = compareView(sp, { path: `/compare/${pair}`, leaf: `${a.name} vs ${b.name}`, pairTitle: `${a.name} vs ${b.name}` });
  return feedResponse(feedBody(endpoint, compareStamp(sp), { query: Object.entries(sp), ...view }));
}
