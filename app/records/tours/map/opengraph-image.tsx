import { ogImage, ogVersions, size, contentType } from "../../../lib/og-image";
import { countryCount, regionCount } from "../../../data/performedCountries";

export { size, contentType };
export const alt = "Where Burna Boy Has Performed — Interactive World Map";

const card = {
  kicker: "Live worldwide",
  title: "Where He's Performed",
  sub: `${countryCount} countries across ${regionCount} regions — and counting`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
