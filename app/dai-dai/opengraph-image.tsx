import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Dai Dai — Shakira & Burna Boy's World Cup anthem, live at the 2026 halftime show";

export default function Image() {
  return ogImage({
    kicker: "Shakira × Burna Boy",
    title: "Dai Dai",
    sub: "The World Cup anthem — No.1 worldwide, and live at the Final halftime show this weekend",
  });
}
