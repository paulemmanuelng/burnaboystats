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
//   node scripts/build-live-charts.mjs --artist=board     # every board artist
//   node scripts/build-live-charts.mjs --dry              # summary only

import { writeFile, readFile } from "node:fs/promises";
import {
  extractLiveCharts,
  CHART_SWEEPS,
  extractCountryChart,
  mergeChartPlacements,
  titleKey,
} from "./stats-lib.mjs";
import { liveArtist, LIVE_ARTISTS } from "./live-artists.mjs";

// One process can build several artists. That matters because the Deezer and
// YouTube sweeps read the SAME 204 country charts for everyone: fetching them
// once per artist would be ~1,600 requests an hour against a free service, so
// each chart is fetched once and every artist is matched against it.
// "--artist=board" means every artist on the Afrobeats Board — i.e. the whole
// registry except Burna Boy, whose live charts are the site's own page. The
// hourly job passes that rather than a hardcoded list, so adding an artist to
// the registry is genuinely one edit.
const requested = (
  process.argv.find((a) => a.startsWith("--artist="))?.slice("--artist=".length) ?? "burna-boy"
).split(",").map((x) => x.trim()).filter(Boolean);
const SLUGS = requested.flatMap((slug) =>
  slug === "board" ? Object.keys(LIVE_ARTISTS).filter((s) => s !== "burna-boy") : [slug]
);
const ARTISTS = SLUGS.map(liveArtist);
const UA = { "user-agent": "burnaboystats-bot" };
// Append-only daily record of worldwide chart positions. liveCharts.ts is a
// SNAPSHOT — it only ever knows today — so a run like "Dai Dai" spending
// weeks at No. 1 globally leaves no trace the site can plot. This file is the
// memory: one row per release/platform/day.
// ~14 months, so a chart can always show a full year without the file growing
// without limit.
const RUN_KEEP_DAYS = 430;
const DRY = process.argv.includes("--dry");

// A run that returns far less than usual almost certainly means the page
// changed shape, not that Burna Boy fell off every chart at once. Refuse to
// overwrite good data with that.

const reach = (r) => r.platforms.reduce((n, p) => n + p.entries.length, 0);

/** Per-artist working state, keyed by slug. */
const work = new Map();
for (const artist of ARTISTS) {
  const res = await fetch(artist.source, { headers: UA });
  if (!res.ok) {
    console.error(`fetch failed: ${res.status} ${artist.source}`);
    process.exit(1);
  }
  work.set(artist.slug, { artist, releases: extractLiveCharts(await res.text()) });
}

// What the previous run wrote. A sweep we skip this hour carries its data
// forward from here rather than dropping the platform off the page.
// Fold the artist page's own aliases before anything else reads the titles.
// The alias list was written for swept rows, but kworb's artist page can carry
// both names too — it listed "Ako" AND "Ako - Live in London", so the YouTube
// row survived under two titles even after the sweep was rewritten.
// Aliases match on the NORMALISED title, not the exact string: kworb writes
// the same live cut three ways — "Ako - Live in London" on the artist page,
// "Ako (Live in London)" on the YouTube chart — and an exact-match list would
// need every spelling.
for (const w of work.values()) {
  if (!w.artist.titleAliases) continue;
  w.aliasByKey = new Map(
    Object.entries(w.artist.titleAliases).map(([from, to]) => [titleKey(from), to])
  );
}

for (const w of work.values()) {
  const map = w.aliasByKey;
  if (!map) continue;
  const folded = [];
  w.releases = w.releases.filter((r) => {
    const to = map.get(titleKey(r.title));
    if (!to) return true;
    for (const p of r.platforms)
      for (const e of p.entries) folded.push({ platform: p.platform, release: to, ...e });
    return false;
  });
  if (folded.length) mergeChartPlacements(w.releases, folded);
}

for (const w of work.values()) {
  w.previous = await readGenerated(
    new URL(`../app/data/${w.artist.out}`, import.meta.url),
    // Same empty-array case as the run history below.
    /export const liveCharts: LiveRelease\[\] = (\[\]|\[[\s\S]*?\n\]);/,
    `${w.artist.slug}'s live charts file`
  );
}

/**
 * Read a previously generated array back out of its own file.
 *
 * The two call sites used to be `t.match(...)?.[1] ?? "[]"` inside a
 * `.catch(() => [])`, which folds three very different outcomes into one silent
 * empty array: the file is not there yet (fine — first run), the file is there
 * and unreadable (a real failure), and the file is there but the regex no longer
 * matches it (a real failure, and the likeliest one, because the pattern is
 * coupled to the formatting of output this same script writes).
 *
 * That last case is quietly destructive for the run history, which is
 * append-only: parsing it as empty drops every day already collected and the
 * data cannot be re-fetched, only re-observed. So a missing file is allowed and
 * anything else stops the run.
 */
async function readGenerated(url, pattern, what) {
  let text;
  try {
    text = await readFile(url, "utf8");
  } catch (err) {
    if (err?.code === "ENOENT") return []; // first run for this artist
    console.error(`REFUSING TO CONTINUE: could not read ${what} (${err?.code ?? err}).`);
    process.exit(1);
  }
  const match = text.match(pattern);
  if (!match) {
    console.error(
      `REFUSING TO CONTINUE: ${what} exists but its array could not be found. ` +
        `This script writes that file, so its own output has probably been reformatted ` +
        `and the pattern needs updating. Continuing would treat the file as empty and ` +
        `discard what it holds.`
    );
    process.exit(1);
  }
  try {
    return JSON.parse(match[1]);
  } catch {
    console.error(`REFUSING TO CONTINUE: ${what} contains an array that is not valid JSON.`);
    process.exit(1);
  }
}

const carryForward = (platform, previous) => {
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
  if (!due) {
    let any = false;
    for (const w of work.values()) {
      const carried = carryForward(spec.platform, w.previous);
      // Never carry nothing: on a fresh checkout there is no previous file, and
      // skipping would ship the page without the platform entirely.
      if (carried.length > 0) {
        // The carried snapshot is the platform's ENTIRE truth — it was
        // reconciled against the chart's real pages at its last fresh sweep.
        // The artist page's own copy of this platform lags those pages (it
        // still listed a row the chart had replaced), and merging the two put
        // one chart position under two titles on every carry-forward hour —
        // the fresh path was fixed for this and this path re-created it six
        // times a day. So the artist page's entries for this platform go
        // entirely, and the carried set stands alone. A release the artist
        // page learned about since the last sweep waits for the next one,
        // at most six hours: consistency beats freshness on a weekly chart.
        for (const r of w.releases) {
          r.platforms = r.platforms.filter((pf) => pf.platform !== spec.platform);
        }
        mergeChartPlacements(w.releases, carried);
        any = true;
      }
    }
    if (any) {
      console.error(`${spec.platform} sweep: skipped this hour, carried from the last run`);
      continue;
    }
  }

  try {
    const idx = await fetch(spec.index, { headers: UA });
    if (!idx.ok) throw new Error(`index ${idx.status}`);
    const codes = spec.codesFrom(await idx.text());
    if (codes.length === 0) throw new Error("index listed no country charts");

    const rows = new Map(SLUGS.map((slug) => [slug, []]));
    // The countries whose chart page was actually READ this run. For those,
    // the sweep is the chart's current edition and outranks anything else.
    const okCodes = new Set();
    let failed = 0;
    // Sequential on purpose — a courtesy scrape of small pages against a free
    // service, not a race.
    for (const cc of codes) {
      try {
        const r = await fetch(spec.url(cc), { headers: UA });
        if (!r.ok) throw new Error(String(r.status));
        const html = await r.text();
        okCodes.add(cc === "global" ? "WW" : cc.toUpperCase());
        for (const w of work.values())
          rows.get(w.artist.slug).push(...extractCountryChart(html, cc, spec, w.artist));
      } catch (err) {
        failed++;
        console.error(`  ${spec.platform}/${cc}: ${err.message}`);
      }
    }
    const swept = [...rows.values()].reduce((n, r) => n + r.length, 0);
    console.error(
      `${spec.platform} sweep: ${codes.length} charts (${failed} failed) -> ${swept} placements across ${SLUGS.length} artist(s)`
    );
    // These sweeps exist because the artist page reported 2 Deezer and 6
    // YouTube placements against real figures of ~58 and ~127. Zero rows, or
    // most charts failing, means the sweep is broken — not that he left the
    // platform. Fail rather than quietly shipping a 95% under-count.
    // `mayChartNowhere` is an explicit per-artist opt-in for an artist whose
    // catalogue genuinely holds no current placement — CKay's breakout is a
    // 2021 record. It only excuses a CLEAN zero: if any chart in the sweep
    // failed, or most of them did, this still throws, because that is the
    // broken-sweep case the guard was written for. Never set it on an artist
    // who charts; it is the difference between "nothing there" and "we could
    // not see".
    const zeroIsFine =
      failed === 0 && [...work.values()].every((w) => w.artist.mayChartNowhere);
    if ((swept === 0 && !zeroIsFine) || failed > codes.length / 2) {
      throw new Error(`returned ${swept} rows with ${failed}/${codes.length} failures`);
    }
    for (const w of work.values()) {
      const mine = rows.get(w.artist.slug);
      for (const row of mine) row.release = w.aliasByKey?.get(titleKey(row.release)) ?? row.release;

      // A sweep may only add placements to a release the artist page already
      // knows, or to one an explicit alias named. Anything else is the credit
      // matcher firing on somebody else: /rema/i matched "Reman - Ropero" and
      // "La Suprema Corte - Porque Fallaste", and two Burkinabè songs and an
      // Ecuadorian one appeared on Rema's board. Word-anchoring the matchers
      // fixed those; this makes the whole class of mistake structural.
      // A version of a known record still counts as the artist's: "soso
      // (Remix)" is Omah Lay's even though his artist page lists only "soso",
      // and the site's rule is that a remix charts as its own release rather
      // than folding into the original. So the BASE title is what has to be
      // known — which still excludes a stranger's song outright.
      const base = (t) => titleKey(String(t).replace(/\s*[([-][^)\]]*\)?\s*$/, "").trim() || t);
      const known = new Set(w.releases.flatMap((r) => [titleKey(r.title), base(r.title)]));
      const alias = new Set([...(w.aliasByKey?.values() ?? [])].map(titleKey));
      const kept = mine.filter(
        (row) => known.has(titleKey(row.release)) || known.has(base(row.release)) || alias.has(titleKey(row.release))
      );
      const dropped = mine.filter((row) => !kept.includes(row));
      if (dropped.length) {
        console.error(
          `  ${w.artist.name}: dropped ${dropped.length} swept row(s) for releases its artist page does not list — ` +
            [...new Set(dropped.map((d) => `${d.release} (${d.country})`))].slice(0, 6).join(", ")
        );
      }
      // The artist page carries its own copy of these platform blocks, and it
      // LAGS the weekly country pages: it still listed "Tell Everybody" at
      // YouTube Ghana #3 while the Ghana page's current edition had "B4 B4"
      // there — one physical chart row, two titles, and the board double-
      // counted it. A freshly read country page IS the current edition, so its
      // rows replace the artist page's for that platform and country — which
      // also removes the row entirely where the artist has dropped off, the
      // case a merge alone can never fix. Countries the sweep failed to fetch
      // keep their artist-page rows: stale beats absent.
      for (const r of w.releases) {
        for (const pf of r.platforms) {
          if (pf.platform !== spec.platform) continue;
          pf.entries = pf.entries.filter((e) => !okCodes.has(e.country));
          pf.numberOnes = pf.entries.filter((e) => e.position === 1).length;
        }
        r.platforms = r.platforms.filter((pf) => pf.entries.length > 0);
      }
      mergeChartPlacements(w.releases, kept);
    }
  } catch (err) {
    console.error(`${spec.platform.toUpperCase()} SWEEP FAILED: ${err.message}`);
    process.exit(1);
  }
}
// ── Per artist: artwork, totals, and the files ───────────────────────────
for (const w of work.values()) {
  const artist = w.artist;
  const releases = w.releases;
  const previous = w.previous;
  const OUT = new URL(`../app/data/${artist.out}`, import.meta.url);
  const RUN_OUT = artist.runOut ? new URL(`../app/data/${artist.runOut}`, import.meta.url) : null;
  const MIN_PLACEMENTS = artist.mayChartNowhere ? 0 : artist.slug === "burna-boy" ? 50 : 25;
  // How much of the previous run may vanish before this is a source failure
  // rather than a quiet week. Chart churn moves these files by a few per cent
  // an hour; 40% is far outside that and well inside a half-scraped page.
  const MAX_DROP = 0.4;

// ── Artwork ──────────────────────────────────────────────────────────────
  // The site's own cover lookup (app/lib/covers.ts) only knows Burna Boy's
  // catalogue, so a board artist's releases would render as monograms. Resolve
  // each title once here, from Deezer's open API, and ship the URL in the data.
  // Artwork is decoration: a title that cannot be resolved keeps its monogram
  // rather than borrowing another release's cover.
    if (artist.covers) {
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
      for (const q of [`artist:"${artist.name}" ${r.kind === "album" ? "album" : "track"}:"${base}"`, `${artist.name} ${base}`]) {
        try {
          const res = await fetch(
            `https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=3`,
            { headers: UA }
          );
          if (!res.ok) continue;
          // The artist on the RESULT has to be the artist we asked for.
          // Without this, a common title takes whatever Deezer returns first:
          // Ayra Starr's "Dangerous" was shipping Cheque's "Bravo" artwork,
          // because `artist:"..."` is a fuzzy filter and the second query is
          // plain text. `artist.credit` is the same word-anchored regex the
          // chart matcher uses, so it already knows the difference between
          // "Rema" and "Reman".
          // A featured record is billed to its LEAD on Deezer, so the alias
          // list supplies the name to expect there instead.
          const alias = (artist.aliases ?? []).find((al) => al.release === r.title);
          const rightArtist = (n) =>
            !!n &&
            (artist.credit.test(n) ||
              (alias && n.toLowerCase().includes(alias.artist.toLowerCase())));
          const hit = (await res.json()).data?.find(
            (d) => (d.album?.cover_big || d.album?.cover_medium) && rightArtist(d.artist?.name)
          );
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

  // The absolute floor above is a backstop, not a guard. It sits at 50 against a
  // real value in the hundreds — Burna Boy's file carries ~709 placements — so a
  // sweep could lose 90% of its data and still write. What catches a partial
  // source failure is the size of the DROP, not the size of what survived.
  //
  // Counting `"position":` in the previous file rather than re-parsing it: the
  // count is a structural property of the data, so it survives any reformatting
  // of the generated output, which a regex over the whole array does not.
  const priorFile = await readFile(OUT, "utf8").catch(() => "");
  const before = (priorFile.match(/"position":/g) ?? []).length;
  if (before > 0) {
    const drop = (before - placements) / before;
    if (drop > MAX_DROP) {
      console.error(
        `REFUSING TO WRITE: ${placements} placements against ${before} last time — ` +
          `a ${Math.round(drop * 100)}% drop, over the ${Math.round(MAX_DROP * 100)}% limit. ` +
          `Part of the source is probably missing. The previous file is left in place; ` +
          `re-run once the source is healthy, or raise MAX_DROP if the fall is real.`
      );
      process.exit(1);
    }
  }
  
  if (DRY) {
    for (const r of releases.slice(0, 8)) console.error(`  ${r.kind.padEnd(5)} ${r.title} — ${reach(r)}`);
    process.exit(0);
  }
  
  const body = `// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs${artist.slug === "burna-boy" ? "" : ` --artist=${artist.slug}`} from kworb's artist page.
  //
  // PLATFORM chart data for ${artist.name}: where each release is sitting RIGHT
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
  
  // This one is append-only and irreplaceable: a silent empty here drops every
  // day already collected, and those readings cannot be fetched again.
  const priorRuns = await readGenerated(
    RUN_OUT,
    // `[]` is matched explicitly. JSON.stringify writes an EMPTY array as "[]"
    // on one line, with no newline before the bracket, so the multi-line form
    // below cannot match it — and readGenerated treats a non-match as "this
    // file was reformatted" and halts the whole sweep. Five board artists had
    // empty run histories, so every run died on the first of them (tyla) and
    // the board's live pages froze while his own figures kept publishing.
    /export const runHistory: RunPoint\[\] = (\[\]|\[[\s\S]*?\n\]);/,
    `${artist.slug}'s run history`
  );
  
  const isToday = (x) => x.date === today;
  const keptFrom = new Date(Date.now() - RUN_KEEP_DAYS * 86_400_000).toISOString().slice(0, 10);
  const mergedRuns = [...priorRuns.filter((x) => !isToday(x) && x.date >= keptFrom), ...todaysRuns].sort(
    (a, b) => a.date.localeCompare(b.date) || a.release.localeCompare(b.release) || a.platform.localeCompare(b.platform)
  );
  
  const runBody = `// GENERATED FILE — do not edit by hand.
  // Appended to by scripts/build-live-charts.mjs${artist.slug === "burna-boy" ? "" : ` --artist=${artist.slug}`} on every sweep.
  //
  // The long memory of ${artist.name}'s WORLDWIDE chart positions. The live
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
  
  
}
