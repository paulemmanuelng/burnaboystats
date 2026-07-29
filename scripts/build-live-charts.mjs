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

import { writeFile } from "node:fs/promises";
import {
  extractLiveCharts,
  deezerCountryCodes,
  extractDeezerChart,
  mergeDeezerPlacements,
} from "./stats-lib.mjs";

const SOURCE = "https://kworb.net/itunes/artist/burnaboy.html";
const DEEZER_INDEX = "https://kworb.net/charts/";
const DEEZER_CHART = (cc) => `https://kworb.net/charts/deezer/${cc}.html`;
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

// Deezer backfill. The artist page under-reports Deezer badly, because Deezer
// publishes only the lead credit and Burna Boy is the featured act on his
// biggest current record. Sweep the country charts directly and merge.
// Failure here is non-fatal: a partial Deezer picture beats no page at all.
try {
  const idx = await fetch(DEEZER_INDEX, { headers: { "user-agent": "burnaboystats-bot" } });
  if (!idx.ok) throw new Error(`charts index ${idx.status}`);
  const codes = deezerCountryCodes(await idx.text());

  const rows = [];
  let failed = 0;
  // Sequential on purpose — this is a courtesy scrape of ~70 small pages
  // against a free service, not a race.
  for (const cc of codes) {
    try {
      const r = await fetch(DEEZER_CHART(cc), { headers: { "user-agent": "burnaboystats-bot" } });
      if (!r.ok) throw new Error(String(r.status));
      rows.push(...extractDeezerChart(await r.text(), cc));
    } catch (err) {
      failed++;
      console.error(`  deezer/${cc}: ${err.message}`);
    }
  }
  console.error(
    `deezer sweep: ${codes.length} charts (${failed} failed) → ${rows.length} placements`
  );
  // The whole reason this sweep exists is that the artist page yields ~2 Deezer
  // placements while the real number is ~60. Zero rows, or most charts failing,
  // means the sweep is broken — not that he left Deezer. Fail rather than
  // quietly shipping a page that under-reports by 95%.
  if (rows.length === 0 || failed > codes.length / 2) {
    throw new Error(`sweep returned ${rows.length} rows with ${failed}/${codes.length} failures`);
  }
  mergeDeezerPlacements(releases, rows);
} catch (err) {
  console.error(`DEEZER SWEEP FAILED: ${err.message}`);
  process.exit(1);
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
