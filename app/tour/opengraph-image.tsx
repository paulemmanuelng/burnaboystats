import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Live — tour & historic performances";

export default function Image() {
  return ogImage({
    kicker: "Live & on stage",
    title: "On Tour",
    sub: "Sold-out stadiums, the Grammys and the 2026 FIFA World Cup",
  });
}
