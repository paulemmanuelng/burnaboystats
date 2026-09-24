import { apiJson } from "../../../lib/api";
import { downloadBySlug } from "../../../lib/dataDownloads";
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
// filter instead of a traversal. `won` is the honest field for what this
// endpoint carries: a pending nomination and a loss both read false here, and
// the description says so. The data model CAN tell them apart — awards.ts's
// pendingResults lists the editions still to be decided — and awards.csv
// publishes that split as its `result` column, so the description points
// there rather than claiming the split does not exist.
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
      `Every competitive award nomination, one row each, with the ceremony, year, category and the work it was for. \`won\` is false both for a loss and for a nomination whose result is not yet known; this endpoint does not separate the two, and the result column of ${downloadBySlug("awards").path} does (won, nominated or pending). Honours and special recognitions are listed separately from the competitive total, by design.`,
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
