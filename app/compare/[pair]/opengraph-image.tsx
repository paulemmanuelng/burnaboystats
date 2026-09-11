import { ogImage, ogId, size, contentType } from "../../lib/og-image";
import { allPairs, canonicalPair, pairCopy, pairSlug, parsePair } from "../../lib/comparePairs";

export { size, contentType };
export const alt = "Two Afrobeats artists' certified units, compared at each body's own threshold";

export function generateStaticParams() {
  return allPairs().map(([a, b]) => ({ pair: pairSlug(a, b) }));
}

const cardFor = (pair: string) => {
  const parsed = parsePair(pair);
  if (!parsed) return { kicker: "Certified units", title: "Compared", sub: "" };
  const [a, b] = canonicalPair(parsed[0], parsed[1]);
  const copy = pairCopy(a, b);
  return { kicker: "Certified units · head to head", title: `${a.name} vs ${b.name}`, sub: copy.sub };
};

// The figures move with each register sweep; folding them into the id keeps a
// scraped preview following the comparison rather than freezing at first
// share. Next probes this route once with no params, so it must survive that.
export async function generateImageMetadata({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const card = cardFor(pair ?? "");
  return [{ id: ogId([card.kicker, card.title, card.sub].join("|")), alt, size, contentType }];
}

export default async function Image({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  return ogImage(cardFor(pair ?? ""));
}
