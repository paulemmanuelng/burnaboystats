import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { totalAwards, countryCount } from "../data/certifications";

export { size, contentType };
export const alt = "Burna Boy Certifications — Silver, Gold, Platinum & Diamond";

const card = {
  kicker: "Certified worldwide",
  title: "Certifications",
  sub: `${totalAwards()} awards across ${countryCount} countries — every tier from Silver to Diamond`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
