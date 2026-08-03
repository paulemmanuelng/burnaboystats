import { getStatCards } from "../lib/statCards";
import { statCardImage } from "../lib/statCardImage";
import type { CardRatio } from "../lib/cardSizes";

// GET /stat-card?stat=<id>&ratio=square|story → a downloadable PNG for that
// stat. Square is 1080×1080 (timeline), story is 1080×1920 (Instagram/WhatsApp).
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("stat");
  const ratio: CardRatio = searchParams.get("ratio") === "story" ? "story" : "square";
  const cards = getStatCards();
  const card = cards.find((c) => c.id === id) ?? cards[0];
  return statCardImage(card, ratio);
}
