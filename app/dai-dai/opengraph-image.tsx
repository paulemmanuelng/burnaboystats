import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "The Dai Dai Story — how Burna Boy & Shakira's World Cup song conquered 2026";

export default function Image() {
  return ogImage({
    kicker: "The Dai Dai story",
    title: "Dai Dai",
    sub: "How Burna Boy & Shakira's World Cup anthem became the biggest song in the world",
  });
}
