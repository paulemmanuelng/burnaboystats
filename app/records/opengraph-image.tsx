import { ogImage, size, contentType } from "../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Career Records — Charts, Awards, Tours & Firsts";

export default function Image() {
  return ogImage({
    kicker: "Career records",
    title: "Career Records",
    sub: "Charts, awards, tours and firsts — every record, verified",
  });
}
