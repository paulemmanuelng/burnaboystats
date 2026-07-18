import { ogImage, size, contentType } from "../../../lib/og-image";
import { countryCount, regionCount } from "../../../data/performedCountries";

export { size, contentType };
export const alt = "Where Burna Boy Has Performed — Interactive World Map";

export default function Image() {
  return ogImage({
    kicker: "Live worldwide",
    title: "Where He's Performed",
    sub: `${countryCount} countries across ${regionCount} regions — and counting`,
  });
}
