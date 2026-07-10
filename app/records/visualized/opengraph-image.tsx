import { ogImage, size, contentType } from "../../lib/og-image";
import { totalWins } from "../../data/awards";
import { totalAwards } from "../../data/certifications";

export { size, contentType };
export const alt = "Burna Boy, Visualized — his career plotted in charts";

export default function Image() {
  return ogImage({
    kicker: "Charts & graphs",
    title: "Visualized",
    sub: `${totalAwards()} certifications · ${totalWins} award wins · the biggest tour in African history — charted`,
  });
}
