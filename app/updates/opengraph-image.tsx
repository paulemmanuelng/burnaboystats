import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Stats — Latest Updates";

export default function Image() {
  return ogImage({
    kicker: "Tracked as it happens",
    title: "Latest Updates",
    sub: "New chart peaks, certifications & records",
  });
}
