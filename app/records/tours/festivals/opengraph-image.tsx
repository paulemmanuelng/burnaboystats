import { ogImage, size, contentType } from "../../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy — Festivals & Shows";

export default function Image() {
  return ogImage({
    kicker: "Big-stage appearances",
    title: "Festivals & Shows",
    sub: "Every festival he's headlined, plus other big-stage appearances",
  });
}
