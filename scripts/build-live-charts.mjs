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
// The same pipeline serves the Afrobeats Board: pass --artist to build for
// anyone in scripts/live-artists.mjs. Burna Boy is the default, so the hourly
// job's command line and his generated file are unchanged.
//
//   node scripts/build-live-charts.mjs                    # Burna Boy
//   node scripts/build-live-charts.mjs --artist=wizkid    # a board artist
//   node scripts/build-live-charts.mjs --dry              # summary only

import { writeFile, readFile } from "node:fs/promises";
import {
  extractLiveCharts,
  CHART_SWEEPS,
  extractCountryChart,
  mergeChartPlacements,
} from "./stats-lib.mjs";
import { liveArtist } from "./live-artists.mjs";

const ARTIST = liveArtist(
  process.argv.find((a) => a.startsWith("--artist="))?.slice("--artist=".length) ?? "burna-boy"
);
const SOURCE = ARTIST.source;
const UA = { "user-agent": "burnaboystats-bot" };
const OUT = new URL(`../app/data/${ARTIST.out}`, import.meta.url);
// Append-only daily record of worldwide chart positions. liveCharts.ts is a
// SNAPSHOT — it only ever knows today — so a run like "Dai Dai" spending
// weeks at No. 1 globally leaves no trace the site can plot. This file is the
// memory: one row per release/platform/day.
const RUN_OUT = ARTIST.runOut ? new URL(`../app/data/${ARTIST.runOut}`, import.meta.url) : null;
// ~14 months, so a chart can always show a full year without the file growing
// without limit.
const RUN_KEEP_DAYS = 430;
const DRY = process.argv.includes("--dry");

// A run that returns far less than usual almost certainly means the page
// changed shape, not that Burna Boy fell off every chart at once. Refuse to
// overwrite good data with that.
const MIN_PLACEMENTS = ARTIST.slug === "burna-boy" ? 50 : 25;

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
        rows.push(...extractCountryChart(await r.text(), cc, spec, ARTIST));
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
    for (const row of rows) row.release = ARTIST.titleAliases?.[row.release] ?? row.release;
    mergeChartPlacements(releases, rows);
  } catch (err) {
    console.error(`${spec.platform.toUpperCase()} SWEEP FAILED: ${err.message}`);
    process.exit(1);
  }
}

// ── Artwork ──────────────────────────────────────────────────────────────
// The site's own cover lookup (app/lib/covers.ts) only knows Burna Boy's
// catalogue, so a board artist's releases would render as monograms. Resolve
// each title once here, from Deezer's open API, and ship the URL in the data.
// Artwork is decoration: a title that cannot be resolved keeps its monogram
// rather than borrowing another release's cover.
if (ARTIST.covers) {
  const previousCovers = new Map(
    previous.filter((r) => r.cover).map((r) => [r.title, r.cover])
  );
  let found = 0;
  for (const r of releases) {
    const carried = previousCovers.get(r.title);
    if (carried) {
      r.cover = carried;
      found++;
      continue;
    }
    const base = r.title.replace(/\s*[([](?:feat|ft|with|w\/)\.?\s[^)\]]*[)\]]/gi, "").trim();
    for (const q of [`artist:"${ARTIST.name}" ${r.kind === "album" ? "album" : "track"}:"${base}"`, `${ARTIST.name} ${base}`]) {
      try {
        const res = await fetch(
          `https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=3`,
          { headers: UA }
        );
        if (!res.ok) continue;
        const hit = (await res.json()).data?.find((d) => d.album?.cover_big || d.album?.cover_medium);
        if (hit) {
          r.cover = hit.album.cover_big ?? hit.album.cover_medium;
          found++;
          break;
        }
      } catch {
        /* artwork is optional — never fail a build over a cover */
      }
      await new Promise((ok) => setTimeout(ok, 250));
    }
  }
  console.error(`artwork: ${found}/${releases.length} releases`);
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
// Rebuilt hourly by scripts/build-live-charts.mjs${ARTIST.slug === "burna-boy" ? "" : ` --artist=${ARTIST.slug}`} from kworb's artist page.
//
// PLATFORM chart data for ${ARTIST.name}: where each release is sitting RIGHT
// NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
// charts. This is not official-chart data — the official national peaks that
// feed the site's headline totals live elsewhere, and the two are kept apart
// on purpose.

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
  /** Release artwork, resolved at build time. Absent means unresolved — the
   *  page draws a monogram rather than borrowing another release's cover. */
  cover?: string;
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

// ── Worldwide run history ────────────────────────────────────────────────
// Burna Boy only: this file is the memory behind his trend charts, and nothing
// on the board plots one yet.
if (RUN_OUT) {
// Today's worldwide positions, appended to the long record. Runs on every
// sweep; the day's row is upserted rather than duplicated, so the hourly
// cadence leaves exactly one reading per day (the most recent one).
const today = new Date().toISOString().slice(0, 10);
const todaysRuns = [];
for (const r of releases) {
  for (const p of r.platforms) {
    const ww = p.entries.find((e) => e.country === "WW" || /^world/i.test(e.name ?? ""));
    if (ww) todaysRuns.push({ date: today, release: r.title, platform: p.platform, position: ww.position });
  }
}

const priorRuns = await readFile(RUN_OUT, "utf8")
  .then((t) => JSON.parse(t.match(/export const runHistory: RunPoint\[\] = (\[[\s\S]*?\n\]);/)?.[1] ?? "[]"))
  .catch(() => []);

const isToday = (x) => x.date === today;
const keptFrom = new Date(Date.now() - RUN_KEEP_DAYS * 86_400_000).toISOString().slice(0, 10);
const mergedRuns = [...priorRuns.filter((x) => !isToday(x) && x.date >= keptFrom), ...todaysRuns].sort(
  (a, b) => a.date.localeCompare(b.date) || a.release.localeCompare(b.release) || a.platform.localeCompare(b.platform)
);

const runBody = `// GENERATED FILE — do not edit by hand.
// Appended to by scripts/build-live-charts.mjs${ARTIST.slug === "burna-boy" ? "" : ` --artist=${ARTIST.slug}`} on every sweep.
//
// The long memory of ${ARTIST.name}'s WORLDWIDE chart positions. The live
// snapshot beside it knows only today; this knows every day it has watched, so
// a run — "Dai Dai" at No. 1 on Spotify's global daily chart for 26 days — can
// be plotted rather than only counted. One row per release, platform and day
// (the day's latest reading). Collection began ${mergedRuns[0]?.date ?? today};
// entries older than ${RUN_KEEP_DAYS} days are dropped.

export interface RunPoint {
  date: string; // ISO "YYYY-MM-DD"
  release: string;
  platform: string;
  position: number;
}

export const runHistory: RunPoint[] = ${JSON.stringify(mergedRuns, null, 2)};

/** The dated series for one release on one platform, oldest first. */
export const runSeries = (release: string, platform: string) =>
  runHistory
    .filter((r) => r.release === release && r.platform === platform)
    .map((r) => ({ date: r.date, value: r.position }));

/** How many days the history actually covers — a chart should say so rather
 *  than implying it has watched a run from its first day. */
export const runHistoryDays = new Set(runHistory.map((r) => r.date)).size;
`;

await writeFile(RUN_OUT, runBody);
console.error(
  `run history: +${todaysRuns.length} worldwide rows for ${today} (${mergedRuns.length} total, ${
    new Set(mergedRuns.map((r) => r.date)).size
  } days)`
);
}

