import { BODY, FIG } from "./og-figure";
import { worldMap } from "./ogWorld";
import { projectEqualEarth } from "./equalEarth";
import { dotRadius, drawnRadius, LABEL_PX, labelWidthPx, MAP_H_CROP, placeLabels, RMAX_DESKTOP, type LabelDot } from "./listenerDots";
import { MAP_W as MAP_UNITS } from "../data/worldShapes";
import { cityCount, compactListeners, listenerCities, listenerInsights, MONTHLY_LISTENERS_ON_READ } from "../data/listeners";

/**
 * The listeners preview, as data (Job 6 · J6-4, fix 131), apart from the
 * route so the guards can read it.
 *
 * The figure is the page's own insight (listenerInsights: one derivation for
 * the tile and the card); the route sets the read date under it. The map is the page's
 * laptop map, cropped where the page crops it: each city at its place and at
 * the page's area-true size (lib/listenerDots.ts, Job 5), held at the 2px
 * floor, the top three named. Names are set at the 28px floor by the map's
 * own placement rule: placeLabels lays out its 11px labels, so at k × 11/28
 * its boxes are these labels at this scale; cities closer than a label line
 * share one label (fix 107), so Lagos and Port Harcourt are named together
 * and London apart (C-12). The phone World view's "a lone city is labelled
 * to its right" (fix 107) is not taken: at this scale the right of London is
 * Europe's cluster, and the 28px name covered the cities there. The rule's
 * own order sets it instead: the first spot beside the dot that covers no
 * other city, left of the British Isles.
 */

/** The two columns: the figure, then the map (the drawing's 1 : 1.2). */
export const LISTENERS_GAP = 44;
export const LISTENERS_LEFT = (BODY.right - BODY.left - LISTENERS_GAP) / 2.2;
export const LISTENERS_MAP_W = Math.round(BODY.right - BODY.left - LISTENERS_GAP - LISTENERS_LEFT);
export const LISTENERS_MAP_H = Math.round((LISTENERS_MAP_W * MAP_H_CROP) / MAP_UNITS);
/** Card px per map unit. */
export const LISTENERS_K = LISTENERS_MAP_W / MAP_UNITS;
/** The cities named on the map. */
export const NAMED = 3;
/** The names' size: the 28px floor. */
export const LABEL_SIZE = 28;
const scale = LABEL_SIZE / LABEL_PX;
/** Space Mono's ascender and descender (1120 and −361 per 1000 em): a line's
 *  box, and where its baseline sits in it. */
export const LABEL_LINE_BOX = (1120 + 361) / 1000;
const ASCENDER = 1120 / 1000;

export interface LabelLine {
  text: string;
  /** Left and top of the line's box on the map, in card px. */
  x: number;
  top: number;
}

export function listenersCard() {
  const k = LISTENERS_K;
  const figure = listenerInsights().tiles[0].value;
  const label = `of ${compactListeners(MONTHLY_LISTENERS_ON_READ)} in ${cityCount} cities`;

  // Largest first, so the smaller paint over them, as the page draws.
  const max = listenerCities[0].listeners;
  const dots: LabelDot[] = [...listenerCities]
    .sort((a, b) => b.listeners - a.listeners)
    .map((c) => ({ rank: c.rank, city: c.city, code: c.code, ...projectEqualEarth(c.lon, c.lat), r: drawnRadius(dotRadius(c.listeners, max, RMAX_DESKTOP), k) }));

  const labels = placeLabels(
    dots.filter((d) => d.rank <= NAMED).sort((a, b) => a.rank - b.rank),
    k / scale,
    "phone",
    { drawn: dots },
  );
  const lines: LabelLine[] = labels.flatMap((l) =>
    l.lines.map((t, i) => {
      const text = t.toUpperCase();
      return {
        text,
        x: l.x * k - (l.anchor === "end" ? labelWidthPx(text) * scale : 0),
        top: (l.y + i * l.pitch) * k - ASCENDER * LABEL_SIZE,
      };
    }),
  );

  const map = worldMap({
    view: [0, 0, MAP_UNITS, MAP_H_CROP],
    px: LISTENERS_MAP_W,
    fill: () => FIG.track,
    dots: dots.map((d) => ({ x: d.x, y: d.y, r: d.r, fill: FIG.gold, opacity: 0.75, stroke: FIG.gold })),
    lines: labels.flatMap((l) => (l.leader ? [{ ...l.leader, stroke: FIG.ink }] : [])),
  });

  return { figure, label, dots, labels, lines, map };
}

/** The strings the card's figure and map print (the route adds the read
 *  date). The dots move only with a new reading, and the date with them. */
export const listenersCardTexts = (c: ReturnType<typeof listenersCard>) => [c.figure, c.label, ...c.lines.map((l) => l.text)];
