import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { chartCountryCount } from "../app/data/charts";
import { chartedCountryCount } from "../app/lib/analysis";
import { afrobeatsArtists, chartTerritories, chartGlobalLines } from "../app/data/afrobeats";
import { generateMetadata as chartsMetadata } from "../app/afrobeats/[artist]/charts/page";
import { GET as statsGET } from "../app/api/v1/stats/route";
import { GET as chartsGET } from "../app/api/v1/charts/route";

// This site publishes two chart-footprint figures that differ by exactly two:
//
//   chartCountryCount    every chart he has entered — "territories"
//   chartedCountryCount  the same set minus Billboard's Global 200 and
//                        Global 200 Excl. US — "countries"
//
// Both are correct. They answer different questions, and the site needs both:
// /records/charts is about charts, /analysis and /press are about markets. What
// went wrong is not the numbers, it is the words over them. The territory
// figure was printed under "countries" on the /api mobile hero (while the
// desktop badge on the same page printed the country figure under the same
// word), on the homepage's Today's Number panel, on the timeline band and on a
// share card; the country figure was printed under "territories" on /press,
// where /records/charts prints the two-higher figure under that same word.
//
// So these guards are about labels, not values. Rule: the word "countries"
// takes chartedCountryCount, the word "territories" takes chartCountryCount.

const read = (p: string) => readFileSync(p, "utf8");

/** Comments name these constants to explain the bug; only rendered code counts. */
const code = (p: string) =>
  read(p).replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

/** Every app source file, so a new page cannot quietly reintroduce the pairing. */
const sources = execSync("git ls-files 'app/**/*.ts' 'app/**/*.tsx'", { encoding: "utf8" })
  .trim()
  .split("\n");

describe("countries and territories", () => {
  it("differ by exactly the two Billboard global charts", () => {
    // If this ever stops holding, the labelling rule below needs rethinking
    // rather than enforcing — so assert the relationship, not the values.
    expect(chartCountryCount - chartedCountryCount).toBe(2);
  });

  it("never prints the territory figure under the word “countries”", () => {
    // The /api mobile pill said "69 countries" beside a desktop badge reading
    // "67 countries charted": one page, one word, two numbers, and the bigger
    // one counts two worldwide charts as countries.
    const offenders = sources.flatMap((f) => {
      const hits = code(f).match(/\$\{chartCountryCount\}[^`"\n]{0,12}\bcountr/g) ?? [];
      return hits.map((h) => `${f} — ${h.trim()}`);
    });
    expect(
      offenders,
      "chartCountryCount counts Billboard's Global 200 and Global 200 Excl. US; neither is a country. Use chartedCountryCount, or call it territories."
    ).toEqual([]);
  });

  it("never prints the country figure under the word “territories”", () => {
    // /press printed "67 territories" while /records/charts and
    // /records/by-the-numbers printed "69 territories" — pages a journalist
    // reads in one sitting.
    const offenders = sources.flatMap((f) => {
      const hits = code(f).match(/\$\{chartedCountryCount\}[^`"\n]{0,12}\bterritor/g) ?? [];
      return hits.map((h) => `${f} — ${h.trim()}`);
    });
    expect(
      offenders,
      "a territory on this site is a country OR one of the two global charts, which is the two-higher chartCountryCount"
    ).toEqual([]);
  });

  it("means the same thing by `countries` on every API endpoint", async () => {
    // The dataset is CC BY and joinable, so one field name carrying two values
    // across two endpoints is worse here than on a page: nothing on the
    // consumer's side reveals the mismatch. /charts published the territory
    // figure under `countries` while /stats published the country figure.
    const stats = (await statsGET().json()) as {
      data: { charts: { countries: number } };
    };
    const charts = (await chartsGET().json()) as {
      data: { totals: { countries: number; territories: number } };
    };
    expect(charts.data.totals.countries).toBe(stats.data.charts.countries);
    expect(charts.data.totals.countries).toBe(chartedCountryCount);
    // The territory figure is not lost, it just stops being called a country.
    expect(charts.data.totals.territories).toBe(chartCountryCount);
  });

  it("never pairs a No. 1s count with the charted-territory count", () => {
    // homeScoreboardParity.test.ts pins this for the homepage tile. It came
    // back twice in prose: Today's Number read "47 No. 1s across 69 countries"
    // and the share card chipped "Countries 69" under a 47-No.-1s headline —
    // both asserting he has topped the chart in 69 places. He has in 30.
    for (const f of ["app/components/TodaysNumber.tsx", "app/lib/statCards.ts"]) {
      expect(
        /import \{[^}]*\bchartCountryCount\b[^}]*\} from "[^"]*data\/charts"/.test(read(f)),
        `${f} imports chartCountryCount and states a No. 1s figure — use numberOneCountryCount from lib/analysis, which is the count those No. 1s are actually spread across`
      ).toBe(false);
    }
  });
});

// ── The Afrobeats Board inherited the same confusion ────────────────────────
//
// The board keeps its own pair of figures, artist by artist, with exactly the
// relationship above: chartTerritories counts every distinct chart code an
// artist has entered, and for eleven of the fifteen boards two of those codes
// are GLB and GLBX — Billboard's Global 200 and Global 200 Excl. US.
//
// /afrobeats/[artist]/charts printed that figure under "read from each
// country's principal national chart", in the meta description, in the Dataset
// node search engines are invited to cite, and in both layouts' ledes. Wizkid's
// said 32 territories were 32 countries' own national charts. Thirty of them
// are. The page's own stat cell already knew better — it has read "incl. 2
// global charts" since the sweep landed — so the markup was contradicting the
// visible page beside it.
describe("the board's chart pages", () => {
  const boards = afrobeatsArtists.filter((a) => a.charts.length > 0);

  it("has boards to check", () => {
    // Cheap anchor: every assertion below loops, so an empty list passes them
    // all without testing anything.
    expect(boards.length).toBeGreaterThanOrEqual(15);
    expect(boards.filter((a) => chartGlobalLines(a) > 0).length).toBeGreaterThan(0);
  });

  it("counts a global line as a territory and never as a country", () => {
    for (const a of boards) {
      const codes = new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)));
      const countries = [...codes].filter((c) => c !== "GLB" && c !== "GLBX");
      expect(chartTerritories(a) - chartGlobalLines(a), a.slug).toBe(countries.length);
    }
  });

  it("names Billboard's global charts in the meta description that counts them", async () => {
    for (const a of boards) {
      const meta = await chartsMetadata({ params: Promise.resolve({ artist: a.slug }) });
      const description = String(meta.description);
      expect(description, a.slug).toContain(`${chartTerritories(a)} territor`);
      if (chartGlobalLines(a) > 0) {
        expect(
          description,
          `${a.slug}: ${chartTerritories(a)} territories includes ${chartGlobalLines(a)} Billboard global chart(s), so "read from each country's national chart" is false for those — name them or drop the claim`
        ).toMatch(/Billboard global chart/);
      } else {
        // Four artists have never charted on either global line. Their pages
        // must not invent a disclosure that does not apply to them.
        expect(description, a.slug).not.toMatch(/Billboard global chart/);
      }
      // The disclosure is worth ~24 characters and the budget is Google's, not
      // ours. scripts/check-seo.mjs only sees this after a full build.
      expect(description.length, `${a.slug}: ${description.length} chars`).toBeLessThanOrEqual(160);
    }
  });

  it("routes every territory sentence on the page through one derivation", () => {
    // Four strings state this — meta description, Dataset description, the
    // desktop lede and the mobile screen's — and they were four independent
    // copies of the same sentence. Any line that puts the territory figure and
    // the word "country" or "national" in one template has to build its source
    // clause from the artist's own data.
    const src = readFileSync("app/afrobeats/[artist]/charts/page.tsx", "utf8");
    const offenders = src
      .split("\n")
      .filter((l) => l.includes("`") && /territor/.test(l))
      .filter((l) => /\bcountry\b|\bcountries\b|national/.test(l))
      .filter((l) => !l.includes("sourceClause("))
      .map((l) => l.trim());
    expect(
      offenders,
      "these pair the territory count with a country claim without deriving the global-chart disclosure"
    ).toEqual([]);
  });
});
