import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Certifications — Silver, Gold, Platinum & Diamond";

export default function Image() {
  return ogImage({
    kicker: "Certified worldwide",
    title: "Certifications",
    sub: "213 awards across 22 countries — every tier from Silver to Diamond",
  });
}
