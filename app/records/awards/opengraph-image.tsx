import { size, contentType } from "../../lib/og-image";
import { BODY, BodyBox, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../lib/og-figure";
import { fitSize } from "../../lib/ogFit";
import { plural } from "../../lib/plural";
import { totalWins, totalNominations, ceremonyCount } from "../../data/awards";

export { size, contentType };
export const alt = "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more";

/**
 * The /records/awards preview, figure first like Job 6's thirteen (J6-4;
 * live debug 15 Oct 2026, Paul "yes"): his wins, his nominations and the
 * award bodies behind them, one row, each read from the data, under the
 * page's own labels. Every figure is his, so every figure is gold.
 */
const GAP = 32;
const COLUMN = (BODY.right - BODY.left - 2 * GAP) / 3;
const figures = [
  { value: totalWins.toLocaleString("en-US"), label: plural(totalWins, "win", "wins") },
  { value: totalNominations.toLocaleString("en-US"), label: plural(totalNominations, "nomination", "nominations") },
  { value: ceremonyCount.toLocaleString("en-US"), label: plural(ceremonyCount, "award body", "award bodies") },
];
// One size for the three, the largest at which the widest fits its column.
const FIGURE = fitSize(figures.map((f) => f.value), COLUMN, 192);

// Versioned by what it prints, so the preview follows the data.
export const generateImageMetadata = () => ogFigureVersions(figures.flatMap((f) => [f.value, f.label]), alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex" }}>
        {figures.map((f, i) => (
          <div key={f.label} style={{ display: "flex", flexDirection: "column", width: COLUMN, marginLeft: i ? GAP : 0 }}>
            <Figure value={f.value} size={FIGURE} />
            <MonoLines lines={monoText(f.label, COLUMN)} style={{ marginTop: 16 }} />
          </div>
        ))}
      </div>
    </BodyBox>,
  );
}
