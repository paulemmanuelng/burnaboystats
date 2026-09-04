import { apiJson } from "../../../lib/api";
import {
  ceremonies,
  honours,
  totalWins,
  totalNominations,
  ceremonyCount,
} from "../../../data/awards";

export const dynamic = "force-static";

// One row per nomination rather than a nested tree: a flat shape is what a
// journalist or a spreadsheet actually wants, and it makes "every 2023 win" a
// filter instead of a traversal. `won` is the honest field — a pending
// nomination and a loss both read false, which is stated in the description
// because the data model genuinely cannot tell them apart.
const nominations = ceremonies.flatMap((c) =>
  c.noms.map((n) => ({
    ceremony: c.name,
    year: n.year,
    category: n.category,
    work: n.work ?? null,
    won: n.won,
  }))
);

export function GET() {
  return apiJson({
    endpoint: "/awards",
    description:
      "Every competitive award nomination, one row each, with the ceremony, year, category and the work it was for. `won` is false for both a loss and a nomination whose ceremony has not happened yet — the dataset does not distinguish them. Honours and special recognitions are listed separately from the competitive total, by design.",
    count: nominations.length,
    countOf: "nominations",
    data: {
      totals: {
        wins: totalWins,
        nominations: totalNominations,
        ceremonies: ceremonyCount,
        honours: honours.length,
      },
      nominations,
      honours: honours.map((h) => ({
        title: h.title,
        organisation: h.org,
        year: h.year,
        note: h.note ?? null,
      })),
    },
  });
}
