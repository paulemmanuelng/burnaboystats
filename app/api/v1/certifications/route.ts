import { apiJson } from "../../../lib/api";
import { allItems, COUNTRIES, totalAwards, countryCount, announcedPlaques } from "../../../data/certifications";
import { plaqueSource } from "../../../lib/dataDownloads";
import { noRowLabelClause } from "../../../lib/offRegister";

export const dynamic = "force-static";

const releases = allItems.map((r) => ({
  title: r.title,
  credit: r.credit ?? "Burna Boy",
  year: r.year ?? null,
  certifications: r.certs.map((c) => ({
    countryCode: c.c,
    country: COUNTRIES[c.c]?.name ?? c.c,
    // A cert can override its country's default body (e.g. RIAA Latin).
    body: c.body ?? COUNTRIES[c.c]?.body ?? null,
    level: c.level,
    multiplier: c.x ?? 1,
    // A lower tier awarded on top in the same award (AMPROFON's "Platino &
    // Oro") — the shape /api/v1/afrobeats documents. None of his rows has one.
    ...(c.plus ? { plus: c.plus } : {}),
    // What the award was read from where it is NOT a register row — "label"
    // or "announcement", the CSV's own `source` column (C-05/D-02, 4 Oct
    // 2026: Dai Dai's Danish Gold rests on IFPI Danmark's chart, not its
    // register). Absent = a register row.
    ...(COUNTRIES[c.c] && plaqueSource(c, COUNTRIES[c.c]) !== "register" ? { source: plaqueSource(c, COUNTRIES[c.c]) } : {}),
  })),
}));

export function GET() {
  return apiJson({
    endpoint: "/certifications",
    description:
      `Certifications by release, each verified against the awarding body's own database or, in a market with no current public register, the label's own plaque${noRowLabelClause(", or, ")} (\`body\` names the issuer)${
        announcedPlaques.length
          ? ", or the body's own published chart where its database has not yet listed the certification (`source: \"announcement\"`)"
          : ""
      }. \`multiplier\` is the multi-platinum/gold factor (2 = 2× Platinum).`,
    // 234 awards across 85 releases. `countOf` names the unit, because `count`
    // alone read as "85 releases" to anyone who assumed it was the length of
    // `data.releases` — that length is now published as `certifiedReleases`,
    // the same way /charts publishes `chartedReleases`.
    count: totalAwards(),
    countOf: "certifications",
    data: {
      totals: {
        certifications: totalAwards(),
        countries: countryCount,
        certifiedReleases: releases.length,
      },
      releases,
    },
  });
}
