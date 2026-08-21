import { apiJson } from "../../../lib/api";
import {
  afrobeatsArtists,
  certCount,
  countryCount,
  chartEntries,
  chartTerritories,
  chartNo1s,
  countryMeta,
} from "../../../data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../../../data/certifications";
import { numberOnes as burnaNo1s, chartEntryCount as burnaEntries } from "../../../data/charts";

export const dynamic = "force-static";

// The board's whole point is that ten records are counted by ONE rule, so the
// API says the rule out loud rather than leaving a consumer to infer it from
// matching totals. Burna Boy is included in the same shape as the nine — he is
// the reason the board exists, and a comparison dataset that omits its subject
// is a strange thing to publish.
const artists = afrobeatsArtists.map((a) => ({
  slug: a.slug,
  name: a.name,
  country: a.country,
  certifications: certCount(a),
  certifiedCountries: countryCount(a),
  chartEntries: chartEntries(a),
  chartTerritories: chartTerritories(a),
  chartNumberOnes: chartNo1s(a),
  releases: a.releases.map((r) => ({
    title: r.title,
    kind: r.kind,
    certifications: r.certs.map((c) => ({
      countryCode: c.c,
      country: countryMeta(c.c).name,
      body: countryMeta(c.c).body,
      level: c.level,
      multiplier: c.x ?? 1,
    })),
  })),
}));

export function GET() {
  return apiJson({
    endpoint: "/afrobeats",
    description:
      "The Afrobeats Board: ten artists counted by one rule — a plaque is one title in one country at its CURRENT tier, and an upgrade replaces the earlier award rather than adding to it. Chart figures are official national charts plus Billboard's two worldwide charts; platform charts (Spotify, Apple Music, iTunes) are never counted here. Reviewed weekly, where Burna Boy's own pages update daily.",
    count: artists.length + 1,
    data: {
      countingRule:
        "One plaque per title per country at its current tier. Chart No. 1s count placements, not releases.",
      cadence: { board: "weekly", burnaBoy: "daily" },
      subject: {
        slug: "burna-boy",
        name: "Burna Boy",
        country: "Nigeria",
        certifications: totalAwards(),
        certifiedCountries: burnaCountries,
        chartEntries: burnaEntries,
        chartNumberOnes: burnaNo1s,
        note: "The site's subject. His full record lives at /api/v1/certifications and /api/v1/charts.",
      },
      artists,
    },
  });
}
