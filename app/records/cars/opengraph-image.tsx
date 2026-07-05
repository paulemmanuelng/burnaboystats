import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy's Car Collection";

export default function Image() {
  return ogImage({
    kicker: "The garage",
    title: "Car Collection",
    sub: "Every confirmed vehicle, and what it reportedly cost him",
  });
}
