import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Certifications — Gold, Platinum & Diamond";

export default function Image() {
  return ogImage({
    kicker: "Certified worldwide",
    title: "Certifications",
    sub: "162 awards across 21 countries — every Gold, Platinum & Diamond",
  });
}
