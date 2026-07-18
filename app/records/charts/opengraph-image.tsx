import { ogImage, size, contentType } from "../../lib/og-image";
import { numberOnes, chartCountryCount } from "../../data/charts";

export { size, contentType };
export const alt = "Burna Boy Official Chart Entries — Peak Positions Worldwide";

export default function Image() {
  return ogImage({
    kicker: "Peak positions worldwide",
    title: "Official Charts",
    sub: `${numberOnes} No.1 peaks across ${chartCountryCount} countries and territories`,
  });
}
