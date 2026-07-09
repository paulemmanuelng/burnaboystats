import { ogImage, size, contentType } from "../../lib/og-image";
import { totalAwards } from "../../data/certifications";
import { totalWins } from "../../data/awards";

export { size, contentType };
export const alt = "Burna Boy by the Numbers — every career stat in one place";

export default function Image() {
  return ogImage({
    kicker: "Burna Boy",
    title: "By the Numbers",
    sub: `${totalAwards()} certifications · ${totalWins} award wins · the biggest tour in African history`,
  });
}
