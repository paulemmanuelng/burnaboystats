import { size, contentType } from "../../../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions, Strip } from "../../../lib/og-figure";
import { fitSize } from "../../../lib/ogFit";
import { FESTIVALS_STRIP, festivalsCard, festivalsCardTexts } from "../../../lib/ogTourCards";

export { size, contentType };
export const alt = "Burna Boy — Festivals & Shows";

/**
 * The festivals preview, figure first (Job 6 · J6-4, fix 131): the festivals
 * he has headlined at the left, and one bar per year at the right, from the
 * first year to the latest, each its year's headline slots; an empty year is
 * a hairline, and only the latest year is gold. All of it counted from the
 * festival list (lib/ogTourCards.ts), no year typed.
 */
const GAP = 44;
// The drawing's columns, 1.3 : 1.
const LEFT = ((BODY.right - BODY.left - GAP) * 1.3) / 2.3;
const RIGHT = BODY.right - BODY.left - GAP - LEFT;

const card = festivalsCard();
const FIGURE = fitSize([card.figure], LEFT, 192);

// Versioned by what it prints and by each year's count, so a new festival
// moves the preview.
export const generateImageMetadata = () => ogFigureVersions(festivalsCardTexts(card), alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: LEFT }}>
          <Figure value={card.figure} size={FIGURE} />
          <MonoLines lines={monoText(card.label, LEFT)} style={{ marginTop: 16 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: RIGHT, marginLeft: GAP }}>
          <Strip bars={card.years} height={FESTIVALS_STRIP.height} gap={FESTIVALS_STRIP.gap} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            {card.ends.map((year) => (
              <MonoLines key={year} lines={[year]} color={FIG.muted} />
            ))}
          </div>
        </div>
      </div>
    </BodyBox>,
  );
}
