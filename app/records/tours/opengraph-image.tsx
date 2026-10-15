import { size, contentType } from "../../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions, Strip } from "../../lib/og-figure";
import { fitSize } from "../../lib/ogFit";
import { TOURS_STRIP, toursCard, toursCardTexts } from "../../lib/ogTourCards";

export { size, contentType };
export const alt = "Burna Boy Tours & Live — Grosses, Sold-Out Stadiums & Records";

/**
 * The tours preview, figure first (Job 6 · J6-4, fix 124): his top tour
 * gross at the left, read from the tour that earned it, and every tour at the
 * right in date order: the reported grosses as bars, the rest as hairlines
 * "not reported", gold only on the record tour. Nothing is typed: the figure
 * is the data's (lib/ogTourCards.ts).
 */
const GAP = 44;
// The drawing's columns, 1.3 : 1.
const LEFT = ((BODY.right - BODY.left - GAP) * 1.3) / 2.3;
const RIGHT = BODY.right - BODY.left - GAP - LEFT;

const card = toursCard();
const FIGURE = fitSize([card.figure], LEFT, 128);

// Versioned by what it prints and by what each column draws, so a newly
// reported gross moves the preview.
export const generateImageMetadata = () => ogFigureVersions(toursCardTexts(card), alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: LEFT }}>
          <Figure value={card.figure} size={FIGURE} />
          <MonoLines lines={monoText(card.label, LEFT)} style={{ marginTop: 16 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: RIGHT, marginLeft: GAP }}>
          <Strip bars={card.columns} height={TOURS_STRIP.height} gap={TOURS_STRIP.gap} labels={card.columns.map((c) => c.label)} />
          {card.legend ? <MonoLines lines={monoText(card.legend, RIGHT, 1)} color={FIG.muted} style={{ marginTop: 16 }} /> : null}
        </div>
      </div>
    </BodyBox>,
  );
}
