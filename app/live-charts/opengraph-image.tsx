import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { livePlacementCount, liveCountryCount, liveNumberOnes } from "../data/liveCharts";
import { LIVE_CADENCE } from "../lib/liveChartMeta";

export { size, contentType };
export const alt = "Burna Boy live charts — where he's charting right now";

const card = {
  kicker: "Live charts",
  title: `${livePlacementCount} charts`,
  sub: `Charting in ${liveCountryCount} countries right now · ${liveNumberOnes} at No. 1 · ${LIVE_CADENCE}`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
