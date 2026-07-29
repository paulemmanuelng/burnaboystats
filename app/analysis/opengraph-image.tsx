import { ogImage, ogVersions, size, contentType } from "../lib/og-image";
import { daiDaiNumberOneShare, chartedCountryCount } from "../lib/analysis";

export { size, contentType };
export const alt = "Burna Boy chart analysis — what the numbers actually say";

const card = {
  kicker: "Analysis",
  title: "What the numbers say",
  sub: `One song holds ${daiDaiNumberOneShare}% of his No. 1s · charted in ${chartedCountryCount} countries · four findings`,
};

// Versioned by the card's own contents, so the link preview follows the data.
export const generateImageMetadata = () => ogVersions(card, alt);

export default function Image() {
  return ogImage(card);
}
