import { ogImage, size, contentType } from "../lib/og-image";
import { daiDaiNumberOneShare, chartedCountryCount } from "../lib/analysis";

export { size, contentType };
export const alt = "Burna Boy chart analysis — what the numbers actually say";

export default function Image() {
  return ogImage({
    kicker: "Analysis",
    title: "What the numbers say",
    sub: `One song holds ${daiDaiNumberOneShare}% of his No. 1s · charted in ${chartedCountryCount} countries · four findings`,
  });
}
