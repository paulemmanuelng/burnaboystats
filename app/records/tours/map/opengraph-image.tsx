import { size, contentType } from "../../../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../../../lib/og-figure";
import { fitSize } from "../../../lib/ogFit";
import { worldMap } from "../../../lib/ogWorld";
import { plural } from "../../../lib/plural";
import { landCodes, VIEWS } from "../../../lib/tourMapData";
import { countryCount, regionCount, performedCountries } from "../../../data/performedCountries";

export { size, contentType };
export const alt = "Where Burna Boy Has Performed — Interactive World Map";

/**
 * The tour map's preview, figure first (Job 6 · J6-4): the countries he has
 * performed in and their regions at the left, read from the data, and the
 * page's own World view at the right: every country he played gold, the land
 * nobody played on the dark track, and the islands too small for a shape as
 * dots, all from the shapes and the lists the page draws from
 * (lib/tourMapData.ts).
 */
const GAP = 44;
// The drawing's columns, 1 : 1.2.
const LEFT = ((BODY.right - BODY.left - GAP) * 1) / 2.2;
const RIGHT = BODY.right - BODY.left - GAP - LEFT;

const figure = countryCount.toLocaleString("en-US");
const label = `${plural(countryCount, "country", "countries")} · ${regionCount} ${plural(regionCount, "region", "regions")}`;
const FIGURE = fitSize([figure], LEFT, 176);

const view = VIEWS.world;
const MAP_W = Math.round(RIGHT);
const MAP_H = Math.round((MAP_W * view[3]) / view[2]);
/** The page's island dots are 8px across at every view; so are the card's. */
const DOT_R_PX = 4;
const k = MAP_W / view[2];

const played = new Set(performedCountries.map((c) => c.code));
const land = new Set(landCodes);
const map = worldMap({
  view,
  px: MAP_W,
  fill: (code) => (played.has(code) ? FIG.gold : land.has(code) ? FIG.track : null),
  dots: performedCountries.flatMap((c) => (c.marker ? [{ x: c.marker.x, y: c.marker.y, r: DOT_R_PX / k, fill: FIG.gold }] : [])),
});

// Versioned by what it prints and by the countries it colours, so a new
// country moves the preview even where the count would not.
export const generateImageMetadata = () =>
  ogFigureVersions([figure, label, [...played].sort((a, b) => a - b).join(",")], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: LEFT }}>
          <Figure value={figure} size={FIGURE} />
          <MonoLines lines={monoText(label, LEFT)} style={{ marginTop: 16 }} />
        </div>
        <img src={map} width={MAP_W} height={MAP_H} alt="" style={{ marginLeft: GAP, width: MAP_W, height: MAP_H }} />
      </div>
    </BodyBox>,
  );
}
