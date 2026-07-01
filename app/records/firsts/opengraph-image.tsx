import { ogImage, size, contentType } from "../../lib/og-image";

export { size, contentType };
export const alt = "Burna Boy Firsts & Records — History-Making Milestones";

export default function Image() {
  return ogImage({
    kicker: "History-making milestones",
    title: "Firsts & Records",
    sub: "33 records broken by the African Giant",
  });
}
