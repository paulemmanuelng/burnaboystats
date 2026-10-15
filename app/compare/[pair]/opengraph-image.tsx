import { size, contentType } from "../../lib/og-image";
import { Bar, BodyBox, FIG, Figure, Headline, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../lib/og-figure";
import { wrapLines } from "../../lib/ogFit";
import { allPairs, canonicalPair, pairCopy, pairSlug, parsePair } from "../../lib/comparePairs";
import { PAIR_COLUMN, PAIR_GAP, PAIR_HEAD, PAIR_SPACE, PAIR_WIDTH, pairFigureSize, pairUnits, pairVerdict, verdictLine } from "../../lib/ogPairCard";

export { size, contentType };
export const alt = "Two Afrobeats artists' certified units, compared at each body's own threshold";

export function generateStaticParams() {
  return allPairs().map(([a, b]) => ({ pair: pairSlug(a, b) }));
}

/**
 * A pair page's preview, figure first (Job 6 · J6-4, fixes 128 and 129):
 * "{A} vs {B}" over each side's certified units, "at least" over each total,
 * a bar each at its share of the larger, and the verdict on one line: who
 * leads, by how much, and the scope, without the two totals printed above
 * it (lib/ogPairCard.ts pairVerdict; live debug 15 Oct 2026, PV-06). Colour
 * is the data's, never the position's: his total and bar are gold when he
 * is in the pair, the other side ink on the neutral bar; a pair without him
 * is ink and neutral on both sides.
 *
 * Every pair card sets its totals at one size, the largest at which the
 * widest total on the board fits its column: a slot sized for its longest
 * value. A title that needs two lines steps the figures down so the body
 * still ends above the foot (fix 128). The geometry is lib/ogPairCard.ts's.
 */
const HIS = "burna-boy"; // the engine's slug for him (lib/certUnits.ts)

const cardFor = (pair: string) => {
  const parsed = parsePair(pair);
  if (!parsed) return null;
  const [a, b] = canonicalPair(parsed[0], parsed[1]);
  const copy = pairCopy(a, b);
  const top = Math.max(...copy.totals, 1);
  const title = wrapLines(`${a.name} vs ${b.name}`.toUpperCase(), "anton", PAIR_HEAD, PAIR_WIDTH, 2);
  const verdict = verdictLine(pairVerdict(a, b, copy));
  const sides = [a, b].map((artist, i) => {
    const his = artist.slug === HIS;
    return {
      key: artist.slug,
      total: pairUnits(copy.totals[i]),
      label: monoText(`${artist.name} · units`, PAIR_COLUMN, 1),
      share: copy.totals[i] / top,
      figure: his ? FIG.gold : FIG.ink,
      bar: his ? FIG.gold : FIG.other,
    };
  });
  return {
    title,
    verdict,
    sides,
    fig: pairFigureSize(title.length, verdict.lines.length),
    // Per pair: all the cards carried the one generic alt above. It reads the
    // card's figures and its verdict (PV-07, live debug 15 Oct 2026).
    alt: `${a.name} vs ${b.name} — certified units compared at each body's own threshold: ${[a, b]
      .map((x, i) => `${x.name} at least ${pairUnits(copy.totals[i])}`)
      .join(", ")}; ${pairVerdict(a, b, copy)}`,
  };
};

/** Every string a pair card prints. */
const textsOf = (card: NonNullable<ReturnType<typeof cardFor>>) => [
  ...card.title,
  ...card.sides.flatMap((s) => ["AT LEAST", s.total, ...s.label]),
  ...card.verdict.lines,
];

// The figures move with each register sweep; folding them into the id keeps a
// scraped preview following the comparison rather than freezing at first
// share. Next probes this route once with no params, so it must survive that.
export async function generateImageMetadata({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const card = cardFor(pair ?? "");
  return card ? ogFigureVersions(textsOf(card), card.alt) : ogFigureVersions(["compared"], alt);
}

export default async function Image({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const card = cardFor(pair ?? "");
  if (!card) {
    return ogFigureCard(
      <BodyBox>
        <Headline lines={["CERTIFIED UNITS, COMPARED"]} size={PAIR_HEAD} />
      </BodyBox>,
    );
  }
  return ogFigureCard(
    <BodyBox>
      <Headline lines={card.title} size={PAIR_HEAD} />
      <div style={{ display: "flex", marginTop: PAIR_SPACE.afterTitle }}>
        {card.sides.map((s, i) => (
          <div key={s.key} style={{ display: "flex", flexDirection: "column", width: PAIR_COLUMN, marginLeft: i ? PAIR_GAP : 0 }}>
            <MonoLines lines={["AT LEAST"]} color={FIG.muted} />
            <Figure value={s.total} size={card.fig} color={s.figure} style={{ marginTop: PAIR_SPACE.overFigure }} />
            <MonoLines lines={s.label} style={{ marginTop: PAIR_SPACE.overLabel }} />
            <Bar share={s.share} color={s.bar} style={{ marginTop: PAIR_SPACE.overBar }} />
          </div>
        ))}
      </div>
      <MonoLines lines={card.verdict.lines} tracking={card.verdict.tracking} color={FIG.body} style={{ marginTop: PAIR_SPACE.beforeVerdict }} />
    </BodyBox>,
  );
}
