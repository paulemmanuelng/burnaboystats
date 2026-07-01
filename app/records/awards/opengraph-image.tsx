import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more";

export default function Image() {
  return ogImage({
    kicker: "Every win, every nod",
    title: "Awards & Nominations",
    sub: "79 wins from 205 nominations across 42 award bodies worldwide",
  });
}
