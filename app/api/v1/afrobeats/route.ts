import { apiJson } from "../../../lib/api";
import {
  sweptArtists,
  certCount,
  countryCount,
  chartEntries,
  chartTerritories,
  chartNo1s,
  countryMeta,
} from "../../../data/afrobeats";
import {
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
  COUNTRIES as BURNA_COUNTRIES,
  totalAwards,
  countryCount as burnaCountries,
  type Release as BurnaRelease,
} from "../../../data/certifications";
import {
  numberOnes as burnaNo1s,
  chartEntryCount as burnaEntries,
  chartCountryCount as burnaTerritories,
} from "../../../data/charts";

export const dynamic = "force-static";

// The board's whole point is that every record on it is counted by ONE rule, so
// the API says the rule out loud rather than leaving a consumer to infer it
// from matching totals. Burna Boy is included in the same shape as the rest —
// he is the reason the board exists, and a comparison dataset that omits its
// subject is a strange thing to publish. (This said "ten records" and "the
// nine" while the board carried fifteen; a hard-coded count in a comment goes
// stale the first time an artist joins.)
//
// sweptArtists, not afrobeatsArtists: an artist whose register sweep is still
// scheduled has NOT been counted by the rule this endpoint advertises, so
// publishing them here would put an unverified row under a claim of
// comparability. The two lists are the same today (nothing is pending), which
// is exactly why the wrong one was easy to write; the board page and the API
// index both count sweptArtists, so all three now move together.
const artists = sweptArtists.map((a) => ({
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

// The subject's plaques in the SAME shape as every other row on the board, so
// `[subject, ...artists]` is one uniform list. It was not: `subject` carried
// neither `chartTerritories` nor `releases`, so a consumer folding the sixteen
// into one table got `undefined` for the subject's territories and a TypeError
// the moment it read `.releases.length` — on the one row the whole dataset
// exists to compare against.
//
// `kind` comes from which of the three ledgers a release sits in, which is the
// same distinction the board's own `kind` draws. Country and body resolve
// through certifications.ts (with the per-cert `body` override for cases like
// RIAA Latin), so his rows here can never disagree with /api/v1/certifications.
const KINDS: [BurnaRelease[], "Albums" | "Lead singles" | "Featured appearances"][] = [
  [burnaAlbums, "Albums"],
  [burnaSingles, "Lead singles"],
  [burnaFeatures, "Featured appearances"],
];
const subjectReleases = KINDS.flatMap(([items, kind]) =>
  items.map((r) => ({
    title: r.title,
    kind,
    certifications: r.certs.map((c) => ({
      countryCode: c.c,
      country: BURNA_COUNTRIES[c.c]?.name ?? c.c,
      body: c.body ?? BURNA_COUNTRIES[c.c]?.body ?? null,
      level: c.level,
      multiplier: c.x ?? 1,
    })),
  }))
);

export function GET() {
  return apiJson({
    endpoint: "/afrobeats",
    description:
      `The Afrobeats Board: ${artists.length + 1} artists counted by one rule — a plaque is one title in one country at its CURRENT tier, and an upgrade replaces the earlier award rather than adding to it. Chart figures are official national charts plus Billboard's two worldwide charts; platform charts (Spotify, Apple Music, iTunes) are never counted here. Reviewed weekly, where Burna Boy's own pages update daily.`,
    // The subject is a row on this board, not an appendix, so he is inside the
    // count — and `countOf` says so, because `data.artists` holds fifteen.
    count: artists.length + 1,
    countOf: `artists (${artists.length} on the board in \`artists\`, plus the subject)`,
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
        // 69, and `chartTerritories` is the only honest word for it: the figure
        // includes Billboard's Global 200 and Global 200 Excl. US, which are
        // charts, not countries. The board artists' field means the same thing.
        chartTerritories: burnaTerritories,
        chartNumberOnes: burnaNo1s,
        releases: subjectReleases,
        note: "The site's subject. His full record lives at /api/v1/certifications and /api/v1/charts.",
      },
      artists,
    },
  });
}
