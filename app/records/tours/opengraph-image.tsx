import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Tours & Live — Grosses, Sold-Out Stadiums & Records";

export default function Image() {
  return ogImage({
    kicker: "Record-breaking grosses",
    title: "Tours & Live",
    sub: "$30.46M — the highest-grossing tour ever by an African artist",
  });
}
