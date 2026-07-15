import { ogImage, size, contentType } from "../lib/og-image";
import { totalAwards, countryCount } from "../data/certifications";

export { size, contentType };
export const alt = "Burna Boy Certifications — Silver, Gold, Platinum & Diamond";

export default function Image() {
  return ogImage({
    kicker: "Certified worldwide",
    title: "Certifications",
    sub: `${totalAwards()} awards across ${countryCount} countries — every tier from Silver to Diamond`,
  });
}
