import { size, contentType } from "../../lib/og-image";
import { BODY, BodyBox, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../lib/og-figure";
import { fitSize } from "../../lib/ogFit";
import { plural } from "../../lib/plural";
import { numberOnes, chartEntryCount } from "../../data/charts";

export { size, contentType };

/**
 * The /records/charts preview, figure first (Job 6 · J6-4): his chart
 * entries and his No. 1 peaks, side by side, read from the data. numberOnes
 * counts placements, so its label is the page's own "No. 1 peaks" (C-14,
 * Paul 14 Oct 2026), not the old card's "No. 1s".
 */
const GAP = 32;
const COLUMN = (BODY.right - BODY.left - GAP) / 2;
const figures = [
  { value: chartEntryCount.toLocaleString("en-US"), label: plural(chartEntryCount, "chart entry", "chart entries") },
  { value: numberOnes.toLocaleString("en-US"), label: plural(numberOnes, "No. 1 peak", "No. 1 peaks") },
];
// One size for both, the largest at which the wider fits its column.
const FIGURE = fitSize(figures.map((f) => f.value), COLUMN, 192);
// The alt reads what the card prints (PV-07, live debug 15 Oct 2026).
export const alt = `Burna Boy Official Chart Entries: ${figures.map((f) => `${f.value} ${f.label}`).join(", ")}`;

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
