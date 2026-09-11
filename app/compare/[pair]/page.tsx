import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompareView } from "../page";
import { pageMetadata } from "../../lib/seo";
import { allPairs, canonicalPair, pairCopy, pairSlug, parsePair } from "../../lib/comparePairs";

/**
 * /compare/<a>-vs-<b> — the compare page with both artists filled, as a page
 * of its own. 120 of them, one per unordered pair of the sixteen artists,
 * statically generated; the reverse order redirects to the canonical one, so
 * no comparison lives at two URLs. Everything else — the pickers, the
 * toggles, the song and album modes — is /compare with a query string, and
 * canonicals back here when it is this comparison it is showing.
 */

// Only the 120 generated pairs exist: anything else is a real 404 at the
// routing layer, and the reverse order of a pair is a real 308 from
// next.config.mjs (see scripts/build-compare-redirects.mjs) — a redirect or
// notFound thrown from a prerendered page can only be a meta-refresh with 200.
export const dynamicParams = false;

export function generateStaticParams() {
  return allPairs().map(([a, b]) => ({ pair: pairSlug(a, b) }));
}

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();
  const [a, b] = canonicalPair(parsed[0], parsed[1]);
  const copy = pairCopy(a, b);
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/compare/${pairSlug(a, b)}`,
    shareTitle: `${a.name} vs ${b.name}`,
    shareDescription: copy.sub,
  });
}

export default async function PairPage({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();
  const [a, b] = canonicalPair(parsed[0], parsed[1]);
  return CompareView({ sp: { a: a.slug, b: b.slug }, path: `/compare/${pair}`, leaf: `${a.name} vs ${b.name}` });
}
