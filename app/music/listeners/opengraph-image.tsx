import { size, contentType } from "../../lib/og-image";
import { BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../lib/og-figure";
import { fitSize } from "../../lib/ogFit";
import { listenerCities, listenersReadOnLabel } from "../../data/listeners";
import {
  LABEL_LINE_BOX,
  LABEL_SIZE,
  LISTENERS_GAP,
  LISTENERS_LEFT,
  LISTENERS_MAP_H,
  LISTENERS_MAP_W,
  listenersCard,
  listenersCardTexts,
  NAMED,
} from "../../lib/ogListenersCard";

export { size, contentType };

/**
 * The listeners preview, figure first (Job 6 · J6-4, fix 131): the top
 * cities' share of his monthly listeners at the left, with the date it was
 * read under it (fix 131 keeps it); at the right the page's dot map at
 * its area-true sizes (listenerDots), the top three named, each led by its
 * rank. The figures, the dots and the names' places are
 * lib/ogListenersCard.ts's.
 */
const card = listenersCard();
const read = `read ${listenersReadOnLabel}`;
const FIGURE = fitSize([card.figure], LISTENERS_LEFT, 144);
// The alt reads what the card prints, and the cities it names by rank
// (PV-07, live debug 15 Oct 2026).
export const alt = `Where the World Listens to Burna Boy: ${card.figure} ${card.label}, ${read}; the top ${NAMED} named on a map of his Spotify cities: ${listenerCities
  .filter((c) => c.rank <= NAMED)
  .sort((a, b) => a.rank - b.rank)
  .map((c) => `${c.rank} ${c.city}`)
  .join(", ")}`;

// Versioned by what it prints, so a new reading moves the preview.
export const generateImageMetadata = () => ogFigureVersions([...listenersCardTexts(card), read], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: LISTENERS_LEFT }}>
          <Figure value={card.figure} size={FIGURE} />
          <MonoLines lines={monoText(card.label, LISTENERS_LEFT)} style={{ marginTop: 16 }} />
          <MonoLines lines={monoText(read, LISTENERS_LEFT)} color={FIG.muted} style={{ marginTop: 10 }} />
        </div>
        <div style={{ display: "flex", position: "relative", width: LISTENERS_MAP_W, height: LISTENERS_MAP_H, marginLeft: LISTENERS_GAP }}>
          <img
            src={card.map}
            width={LISTENERS_MAP_W}
            height={LISTENERS_MAP_H}
            alt=""
            style={{ position: "absolute", left: 0, top: 0, width: LISTENERS_MAP_W, height: LISTENERS_MAP_H }}
          />
          {card.lines.map((l, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: l.x,
                top: l.top,
                display: "flex",
                fontFamily: "Space Mono",
                fontSize: LABEL_SIZE,
                lineHeight: LABEL_LINE_BOX,
                color: FIG.ink,
                whiteSpace: "nowrap",
              }}
            >
              {l.text}
            </div>
          ))}
        </div>
      </div>
    </BodyBox>,
  );
}
