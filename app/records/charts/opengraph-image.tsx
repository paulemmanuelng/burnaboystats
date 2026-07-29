import { ogImage, ogVersions, size, contentType } from "../../lib/og-image";
import { numberOnes, chartCountryCount } from "../../data/charts";

export { size, contentType };
export const alt = "Burna Boy Official Chart Entries — Peak Positions Worldwide";

const card = {
  kicker: "Peak positions worldwide",
  title: "Official Charts",
  sub: `${numberOnes} No.1 peaks across ${chartCountryCount} countries and territories`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
