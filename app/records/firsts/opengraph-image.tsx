import { ogImage, size, contentType } from "../../lib/og-image";
import { firstsCount } from "../../data/firsts";

export { size, contentType };
export const alt = "Burna Boy Firsts & Records — History-Making Milestones";

export default function Image() {
  return ogImage({
    kicker: "History-making milestones",
    title: "Firsts & Records",
    sub: `${firstsCount} records broken by the African Giant`,
  });
}
