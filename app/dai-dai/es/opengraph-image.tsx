import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy";

export default function Image() {
  return ogImage({
    kicker: "Mundial de la FIFA 2026",
    title: "Dai Dai",
    sub: "El himno de Shakira y Burna Boy — 37 días como la canción más escuchada del mundo",
  });
}
