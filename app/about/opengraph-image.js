import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "About Burna Boy — biography & career timeline";

export default function Image() {
  return ogImage({
    kicker: "Biography",
    title: "The African Giant",
    sub: "The story of Damini Ogulu — Afro-Fusion pioneer & Grammy winner",
  });
}
