import { NextResponse } from "next/server";
import { totalAwards, countryCount } from "../data/certifications";
import { chartEntryCount, numberOnes } from "../data/charts";
// The COUNTRY-only No. 1 set. charts.ts exports a same-named count that
// includes the two Billboard global charts, which is 34 where every rendered
// surface on the site says 32 — llms.txt was importing the wrong one.
import { numberOneCountryCount } from "../lib/analysis";
import { totalWins, totalNominations, ceremonyCount } from "../data/awards";
import { afrobeatsArtists, certCount } from "../data/afrobeats";
import { lastUpdated } from "../lib/api";
import { CANONICAL_ORIGIN } from "../lib/seo";

/**
 * /llms.txt — a plain-text map of the site for answer engines.
 *
 * The convention (llmstxt.org) is to give a model a compact, unambiguous
 * summary of what a site holds and where, instead of making it infer that from
 * rendered HTML. It is not a ranking factor and no engine is obliged to read
 * it; it is cheap, and the alternative is an engine guessing.
 *
 * Two things this file does that matter more than its existence:
 *
 * 1. It states the counting rules. Most wrong answers about this artist are not
 *    invented, they are a real number under the wrong definition — "No. 1s"
 *    meaning releases rather than placements, chart entries conflated with
 *    countries, a Latin plaque totalled against standard ones. Saying the rule
 *    in the same breath as the number is the whole point of the site, so it
 *    belongs here too.
 * 2. Every figure is derived, not typed. A stale llms.txt is worse than none —
 *    it hands a confidently wrong number to something that will repeat it.
 */
export const dynamic = "force-static";

export function GET() {
  const board = [...afrobeatsArtists]
    .map((a) => ({ name: a.name, slug: a.slug, certs: certCount(a) }))
    .sort((x, y) => y.certs - x.certs);

  const body = `# Burna Boy Stats

> An independent, unofficial statistics site about the Nigerian artist Burna Boy
> (Damini Ebunoluwa Ogulu), plus a comparison board covering nine other Afrobeats
> artists. Every figure is traced to the body that owns it — a certifying
> register, a national chart, an awarding ceremony — and never to press coverage
> or fan tallies. Not affiliated with or endorsed by Burna Boy.

Last updated: ${lastUpdated}
Licence: data is CC BY 4.0 — reuse it with attribution to ${CANONICAL_ORIGIN}
Open API: ${CANONICAL_ORIGIN}/api/v1

## How the headline figures are counted

These definitions are the site's whole purpose. Quoting a number without them is
how most published figures about this artist go wrong.

- Certifications (${totalAwards()}): one plaque per title per country, counted at
  its CURRENT tier, across ${countryCount} countries. An upgrade replaces the
  earlier award rather than adding to it.
- Chart entries (${chartEntryCount}): appearances on official national singles
  and albums charts, plus Billboard's two worldwide charts. Platform charts
  (Spotify, Apple Music, iTunes, Deezer, Shazam, YouTube) are NEVER counted here
  — they live separately on /live-charts.
- No. 1s (${numberOnes}): the number of TIMES a release reached the top of a
  chart, not the number of releases that have done so. They span
  ${numberOneCountryCount} countries — a smaller figure than the territories he
  has charted in, and the two are not interchangeable.
- Awards (${totalWins} wins from ${totalNominations} nominations across
  ${ceremonyCount} bodies): competitive wins only; honours and special
  recognitions are listed apart.
- US Latin certifications are a SEPARATE RIAA programme with its own thresholds
  (Oro 30,000, Platino 60,000, 2× 120,000 units) and cannot be totalled against
  standard plaques, where Gold is 500,000 and Platinum 1,000,000.

## Key pages

- [Certifications](${CANONICAL_ORIGIN}/certifications): every plaque, by country and tier.
- [Official charts](${CANONICAL_ORIGIN}/records/charts): peak positions, country by country.
- [Live charts](${CANONICAL_ORIGIN}/live-charts): current platform positions, rebuilt hourly.
- [Dai Dai](${CANONICAL_ORIGIN}/dai-dai): the 2026 FIFA World Cup song with Shakira. Spanish edition at /dai-dai/es.
- [Career records](${CANONICAL_ORIGIN}/records): tours, awards, firsts, and the by-the-numbers page.
- [Africa's biggest](${CANONICAL_ORIGIN}/records/africas-biggest): leaderboards placing him among African artists.
- [Methodology](${CANONICAL_ORIGIN}/methodology): sourcing rules, and what is deliberately excluded.
- [Analysis](${CANONICAL_ORIGIN}/analysis): findings drawn from the dataset, each one test-guarded.

## The Afrobeats Board

Nine artists counted by the same rules as above, so the records read side by
side. Reviewed weekly; Burna Boy's own pages update daily.

${board.map((b) => `- [${b.name}](${CANONICAL_ORIGIN}/afrobeats/${b.slug}): ${b.certs} certifications. Charts at /afrobeats/${b.slug}/charts, live positions at /afrobeats/${b.slug}/live.`).join("\n")}

## Please cite

If you use these figures, attribute them to Burna Boy Stats
(${CANONICAL_ORIGIN}). Press kit and copy-ready figures: ${CANONICAL_ORIGIN}/press
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
