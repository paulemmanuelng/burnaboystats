import { ogImage, size, contentType } from "../lib/og-image";
import { chartEntryCount } from "../data/charts";
import { totalAwards } from "../data/certifications";

export { size, contentType };
export const alt = "Burna Boy Open Data API — free JSON chart and certification dataset";

export default function Image() {
  return ogImage({
    kicker: "Open data",
    title: "Free JSON API",
    sub: `${chartEntryCount} chart entries · ${totalAwards()} certifications · no key, CC BY 4.0`,
  });
}
