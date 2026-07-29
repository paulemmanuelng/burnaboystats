import { ogImage, size, contentType } from "../lib/og-image";
import { livePlacementCount, liveCountryCount, liveNumberOnes } from "../data/liveCharts";

export { size, contentType };
export const alt = "Burna Boy live charts — where he's charting right now";

export default function Image() {
  return ogImage({
    kicker: "Live charts",
    title: `${livePlacementCount} charts`,
    sub: `Charting in ${liveCountryCount} countries right now · ${liveNumberOnes} at No. 1 · refreshed hourly`,
  });
}
