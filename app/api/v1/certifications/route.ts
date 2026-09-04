import { apiJson } from "../../../lib/api";
import { allItems, COUNTRIES, totalAwards, countryCount } from "../../../data/certifications";

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
  })),
}));

export function GET() {
  return apiJson({
    endpoint: "/certifications",
    description:
      "Certifications by release, each verified against the awarding body's own database. `multiplier` is the multi-platinum/gold factor (2 = 2× Platinum).",
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
