import { ogImage, size, contentType } from "../../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy — Highest Revenue Per Show";

export default function Image() {
  return ogImage({
    kicker: "Box office",
    title: "Highest Revenue Per Show",
    sub: "The 40 highest-grossing single shows by an African artist, ranked",
  });
}
