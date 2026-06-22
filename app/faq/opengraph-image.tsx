import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy FAQ — Grammys, certifications, records & stats";

export default function Image() {
  return ogImage({
    kicker: "FAQ",
    title: "Burna Boy, answered",
    sub: "Grammys, certifications, tours, chart records & more",
  });
}
