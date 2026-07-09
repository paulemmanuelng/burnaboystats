import { ogImage, size, contentType } from "../../lib/og-image";
import { totalWins, totalNominations, ceremonyCount } from "../../data/awards";

export { size, contentType };
export const alt = "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more";

export default function Image() {
  return ogImage({
    kicker: "Every win, every nod",
    title: "Awards & Nominations",
    sub: `${totalWins} wins from ${totalNominations} nominations across ${ceremonyCount} award bodies worldwide`,
  });
}
