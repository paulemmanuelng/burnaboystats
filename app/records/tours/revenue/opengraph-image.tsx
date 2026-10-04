import { ogLadder, ogId, cardUrl, size, contentType, type OgLadderCard } from "../../../lib/og-image";
import { usdFull } from "../../../lib/revenueByCountry";
import { showsBoard } from "../../../lib/showsBoard";
import { revenueShows } from "../../../data/tourRevenue";

export { size, contentType };
export const alt = "Burna Boy — Highest-Grossing Shows";

// Claude Design round 1 (4 Oct 2026), GXOG.dc.html, page "shows": the record
// night at the left, the top twelve nights as scale bars at the right, each
// labelled "{artist} · {venue}" (review fix 11). Every figure is derived, so the
// card is versioned: a new night, a new No. 1 or a moved bar changes the id,
// and a shared preview follows it. The record figure is gold only while the
// night is his (N6).
const PATH = "/records/tours/revenue";
const b = showsBoard();
const top12 = revenueShows.slice(0, 12);

const card: OgLadderCard = {
  kicker: "African artists · box office",
  title: "Highest-grossing shows",
  big: usdFull(b.top.revenue),
  bigHis: b.top.his,
  bigCap: `${b.top.artist} · ${b.top.venue} · ${b.top.year} — No. 1 of ${revenueShows.length}`,
  graphTitle: "The top twelve nights · gold is his",
  rows: top12.map((s) => ({ label: `${s.artist} · ${s.venue}`, w: s.revenue / b.top.revenue, his: s.artist === "Burna Boy" })),
  path: PATH,
  foot: `${b.hisTop10} of the top 10 are his`,
};

export const generateImageMetadata = () => [
  { id: ogId(`${JSON.stringify(card)}|${cardUrl(PATH)}`), alt, size, contentType },
];

export default function Image() {
  return ogLadder(card);
}
