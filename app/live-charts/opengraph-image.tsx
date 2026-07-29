import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { livePlacementCount, liveCountryCount, liveNumberOnes } from "../data/liveCharts";

export { size, contentType };
export const alt = "Burna Boy live charts — where he's charting right now";

const card = {
  kicker: "Live charts",
  title: `${livePlacementCount} charts`,
  sub: `Charting in ${liveCountryCount} countries right now · ${liveNumberOnes} at No. 1 · refreshed hourly`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
