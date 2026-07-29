import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { chartEntryCount } from "../data/charts";
import { totalAwards } from "../data/certifications";

export { size, contentType };
export const alt = "Burna Boy Open Data API — free JSON chart and certification dataset";

const card = {
  kicker: "Open data",
  title: "Free JSON API",
  sub: `${chartEntryCount} chart entries · ${totalAwards()} certifications · no key, CC BY 4.0`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
