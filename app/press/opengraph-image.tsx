import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Press & Data Kit — verified Burna Boy figures, free to use with attribution";

export default function Image() {
  return ogImage({
    kicker: "Press & data kit",
    title: "Cite the numbers",
    sub: "Verified figures, an open CC BY 4.0 API and shareable stat cards — free with attribution",
  });
}
