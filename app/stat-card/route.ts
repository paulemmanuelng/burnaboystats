import { getStatCards } from "../lib/statCards";
import { statCardImage } from "../lib/statCardImage";

// GET /stat-card?stat=<id> → a downloadable 1200×900 PNG for that stat.
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("stat");
  const cards = getStatCards();
  const card = cards.find((c) => c.id === id) ?? cards[0];
  return statCardImage(card);
}
