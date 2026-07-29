#!/usr/bin/env node
// Regenerates app/data/liveCharts.ts from kworb's artist page.
//
// Unlike the figures in watched-metrics.json — single numbers rewritten in
// place by an anchored find/replace — this is a whole dataset (hundreds of
// placements across six platforms), so it is regenerated wholesale rather than
// patched. Run hourly by .github/workflows/stats-live.yml.
//
// IMPORTANT: this is PLATFORM chart data (Spotify / Apple Music / iTunes /
// Deezer / Shazam / YouTube daily country charts). It is deliberately separate
// from app/data/charts.ts, which holds official national-chart peaks and feeds
// the site's headline "chart entries / No. 1s / countries" totals. The two must
// never be merged: one is where a record is placing right now, the other is the
// highest it has ever officially reached.
//
//   node scripts/build-live-charts.mjs           # write the file
//   node scripts/build-live-charts.mjs --dry     # print a summary only

import { writeFile, readFile } from "node:fs/promises";
import {
  extractLiveCharts,
  CHART_SWEEPS,
  extractCountryChart,
  mergeChartPlacements,
} from "./stats-lib.mjs";

const SOURCE = "https://kworb.net/itunes/artist/burnaboy.html";
const UA = { "user-agent": "burnaboystats-bot" };
const OUT = new URL("../app/data/liveCharts.ts", import.meta.url);
const DRY = process.argv.includes("--dry");

// A run that returns far less than usual almost certainly means the page
// changed shape, not that Burna Boy fell off every chart at once. Refuse to
// overwrite good data with that.
const MIN_PLACEMENTS = 50;

const reach = (r) => r.platforms.reduce((n, p) => n + p.entries.length, 0);

const res = await fetch(SOURCE, { headers: { "user-agent": "burnaboystats-bot" } });
if (!res.ok) {
  console.error(`fetch failed: ${res.status} ${SOURCE}`);
  process.exit(1);
}
const releases = extractLiveCharts(await res.text());

// What the previous run wrote. A sweep we skip this hour carries its data
// forward from here rather than dropping the platform off the page.
const previous = await readFile(OUT, "utf8")
  .then((t) => JSON.parse(t.match(/export const liveCharts: LiveRelease\[\] = (\[[\s\S]*?\n\]);/)?.[1] ?? "[]"))
  .catch(() => []);

const carryForward = (platform) => {
  const rows = [];
  for (const r of previous) {
    for (const p of r.platforms.filter((x) => x.platform === platform)) {
      for (const e of p.entries) rows.push({ platform, release: r.title, ...e });
    }
  }
  return rows;
};

// Deezer and YouTube backfill. The artist page under-reports both badly,
// because they publish only the lead credit and Burna Boy is the featured act
// on his biggest current record. Sweep those country charts directly.
//
// Cadence matters here. This job runs hourly, and sweeping both means ~204
// requests an hour — roughly 5,000 a day against a free service we depend on.
// YouTube's chart is WEEKLY, so an hourly sweep of its 134 pages re-reads
// numbers that cannot have moved. Sweep it a few times a day and carry the
// rest of the time; Deezer is a daily chart, so it runs every time.
// SWEEP_HOUR overrides the clock so the carry-forward path can be exercised
// on demand — it is the half that only runs 5 hours in 6 and would otherwise
// go untested until it broke in production.
const hour = Number(process.env.SWEEP_HOUR ?? new Date().getUTCHours());
for (const spec of CHART_SWEEPS) {
  const due = spec.everyHours ? hour % spec.everyHours === 0 : true;
  const carried = due ? [] : carryForward(spec.platform);
  // Never carry nothing: on a fresh checkout there is no previous file, and
  // skipping would ship the page without the platform entirely.
  if (!due && carried.length > 0) {
    console.error(`${spec.platform} sweep: skipped this hour, carried ${carried.length} placements`);
    mergeChartPlacements(releases, carried);
    continue;
  }

  try {
    const idx = await fetch(spec.index, { headers: UA });
    if (!idx.ok) throw new Error(`index ${idx.status}`);
    const codes = spec.codesFrom(await idx.text());
    if (codes.length === 0) throw new Error("index listed no country charts");

    const rows = [];
    let failed = 0;
    // Sequential on purpose — a courtesy scrape of small pages against a free
    // service, not a race.
    for (const cc of codes) {
      try {
        const r = await fetch(spec.url(cc), { headers: UA });
        if (!r.ok) throw new Error(String(r.status));
        rows.push(...extractCountryChart(await r.text(), cc, spec));
      } catch (err) {
        failed++;
        console.error(`  ${spec.platform}/${cc}: ${err.message}`);
      }
    }
    console.error(
      `${spec.platform} sweep: ${codes.length} charts (${failed} failed) -> ${rows.length} placements`
    );
    // These sweeps exist because the artist page reported 2 Deezer and 6
    // YouTube placements against real figures of ~58 and ~127. Zero rows, or
    // most charts failing, means the sweep is broken — not that he left the
    // platform. Fail rather than quietly shipping a 95% under-count.
    if (rows.length === 0 || failed > codes.length / 2) {
      throw new Error(`returned ${rows.length} rows with ${failed}/${codes.length} failures`);
    }
    mergeChartPlacements(releases, rows);
  } catch (err) {
    console.error(`${spec.platform.toUpperCase()} SWEEP FAILED: ${err.message}`);
    process.exit(1);
  }
}

const placements = releases.reduce((n, r) => n + reach(r), 0);
const numberOnes = releases.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
  0
);
const countries = new Set(
  releases.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
).size;
const platforms = [...new Set(releases.flatMap((r) => r.platforms.map((p) => p.platform)))].sort();

console.error(
  `parsed ${releases.length} releases · ${placements} placements · ${numberOnes} No.1s · ${countries} countries`
);

if (placements < MIN_PLACEMENTS) {
  console.error(
    `REFUSING TO WRITE: only ${placements} placements (expected ≥ ${MIN_PLACEMENTS}). ` +
      `The source page has probably changed shape — check the extractor.`
  );
  process.exit(1);
}

if (DRY) {
  for (const r of releases.slice(0, 8)) console.error(`  ${r.kind.padEnd(5)} ${r.title} — ${reach(r)}`);
  process.exit(0);
}

const body = `// GENERATED FILE — do not edit by hand.
// Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
//
// PLATFORM chart data: where each release is sitting RIGHT NOW on Spotify,
// Apple Music, iTunes, Deezer, Shazam and YouTube country charts. This is not
// official-chart data — app/data/charts.ts holds the official national peaks
// that feed the site's headline totals, and the two are kept apart on purpose.

export interface LiveEntry {
  country: string; // ISO alpha-2
  name: string;
  position: number;
  // Movement against the chart's previous edition: 0 = no change, null = the
  // source flagged a new/re-entry, absent = the source reports no movement for
  // this platform at all (YouTube). Absent and null are different facts.
  movement?: number | null;
  /** Why there is no movement: the source flagged a new entry or a re-entry. */
  status?: "new" | "re";
}

export interface LivePlatform {
  platform: string;
  numberOnes: number;
  entries: LiveEntry[];
}

export interface LiveRelease {
  title: string;
  kind: "song" | "album";
  platforms: LivePlatform[];
}

/** When this snapshot was taken (ISO date). */
export const liveChartsUpdated = ${JSON.stringify(new Date().toISOString().slice(0, 10))};

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ${JSON.stringify(platforms)};

export const liveCharts: LiveRelease[] = ${JSON.stringify(releases, null, 2)};

/** Totals, derived so they can never disagree with the data above. */
export const livePlacementCount = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
  0
);
export const liveNumberOnes = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
  0
);
export const liveCountryCount = new Set(
  liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
).size;

/** Placements per platform, biggest first — powers the summary row. */
export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
  livePlatforms
    .map((platform) => {
      const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
      return {
        platform,
        placements: blocks.reduce((n, p) => n + p.entries.length, 0),
        numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
      };
    })
    .sort((a, b) => b.placements - a.placements);
`;

await writeFile(OUT, body);
console.error(`wrote ${OUT.pathname}`);
