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
import { extractLiveCharts } from "./stats-lib.mjs";

const SOURCE = "https://kworb.net/itunes/artist/burnaboy.html";
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
  movement: number | null; // vs 24h ago; 0 = no change, null = new/re-entry
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
