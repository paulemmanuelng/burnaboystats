import { size, contentType } from "../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions, RankList } from "../lib/og-figure";
import { fitSize } from "../lib/ogFit";
import { plural } from "../lib/plural";
import { livePlacementCount, livePlatformTotals, liveNumberOnes } from "../data/liveCharts";

export { size, contentType };
export const alt = "Burna Boy live charts — where he's charting right now";

/**
 * The /live-charts preview, figure first (Job 6 · J6-4, fix 131): how many of
 * his placements are at No. 1 right now, in the live green (J0-6), over the
 * placements counted; beside it the three platforms that carry the most of
 * them, names and counts read from the snapshot (livePlatformTotals, biggest
 * first), never a fixed three. The noun is "placements": the old card said
 * "charts" of the same count.
 */
const GAP = 44;
const COLUMN = (BODY.right - BODY.left - GAP) / 2;

const figure = liveNumberOnes.toLocaleString("en-US");
const label = "at No. 1 now";
const sub = `${livePlacementCount.toLocaleString("en-US")} ${plural(livePlacementCount, "placement", "placements")}`;
const rows = livePlatformTotals.slice(0, 3).map((p) => ({ name: p.platform, value: p.placements.toLocaleString("en-US"), valueColor: FIG.ink }));
const FIGURE = fitSize([figure], COLUMN, 192);

// Versioned by what it prints, so the hourly snapshot moves the preview when
// its figures do.
export const generateImageMetadata = () => ogFigureVersions([figure, label, sub, ...rows.flatMap((r) => [r.name, r.value])], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: COLUMN }}>
          <Figure value={figure} size={FIGURE} color={FIG.green} />
          <MonoLines lines={monoText(label, COLUMN)} style={{ marginTop: 16 }} />
          <MonoLines lines={monoText(sub, COLUMN)} color={FIG.body} style={{ marginTop: 10 }} />
        </div>
        <RankList rows={rows} style={{ width: COLUMN, marginLeft: GAP }} />
      </div>
    </BodyBox>,
  );
}
