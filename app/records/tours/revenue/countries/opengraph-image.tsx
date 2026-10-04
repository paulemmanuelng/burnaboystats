import { ogLadder, ogId, cardUrl, size, contentType, type OgLadderCard } from "../../../../lib/og-image";
import { ladderRows, nightsLabel, revenueByCountry, usdM } from "../../../../lib/revenueByCountry";

export { size, contentType };
export const alt = "Highest-grossing African artists by country — reported box office";

// Claude Design round 1 (4 Oct 2026), GXOG.dc.html, page "countries": the
// countries he leads as the figure at the left, the page's own ladder at the
// right — each country's total, his part gold — with each leader named, muted,
// after the country, his name too (review fix 10). No flags: next/og draws an
// emoji only by fetching it at render time (tests/ogEmojiFallback.test.ts),
// and the shows card carries none either. Every figure is derived, so the
// card is versioned: a new country, a new leader or a moved bar changes the
// id and a shared preview follows it (no OG_ART bump). The figure is his —
// the countries he leads — so it is gold.
const PATH = "/records/tours/revenue/countries";
const board = revenueByCountry();
/** Rows that fit the card's right half above its foot. */
const FIT = 12;
const rows = ladderRows(board);

const card: OgLadderCard = {
  kicker: "African artists · box office",
  title: "Highest-Grossing Artists by Country",
  big: `${board.hisLeads} of ${board.countryCount}`,
  bigHis: true,
  bigCap: "countries led by Burna Boy, on total reported gross",
  graphTitle: rows.length > FIT ? "The twelve biggest countries · gold is his" : "Each country’s total · gold is his",
  rows: rows.slice(0, FIT).map((r) => ({ label: r.name, note: r.leader, w: r.w, his: r.his > 0, hisShare: r.his })),
  path: PATH,
  foot: `${usdM(board.grandTotal)} · ${nightsLabel(board.showCount)}`,
};

export const generateImageMetadata = () => [
  { id: ogId(`${JSON.stringify(card)}|${cardUrl(PATH)}`), alt, size, contentType },
];

export default function Image() {
  return ogLadder(card);
}
