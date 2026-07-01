import { ogImage, size, contentType } from "../../../lib/og-image";

export { size, contentType };
export const alt = "Where Burna Boy Has Performed — Interactive World Map";

export default function Image() {
  return ogImage({
    kicker: "Live worldwide",
    title: "Where He's Performed",
    sub: "54 countries across 7 regions — and counting",
  });
}
