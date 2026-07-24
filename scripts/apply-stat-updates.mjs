#!/usr/bin/env node
// Draft site-figure updates from live sources and edit the data files in place.
// Two modes, selected by the workflow that runs it:
//
//   (default)  → metrics WITHOUT `live: true`. Edits are drafted for a human to
//                review; the PR workflow opens a pull request. Never merges.
//   --live     → metrics WITH `live: true` (followers, peak listeners). Edits go
//                through a SANITY GATE and, if they pass, are committed straight
//                to main by the hourly workflow — no review. The gate is the
//                safety net: an implausible value (kworb's mis-read failure mode)
//                is rejected and skipped, so it never reaches the public site.
//
//   node scripts/apply-stat-updates.mjs [--live] [--dry-run]
//
// Baseline-bump safety rule (both modes): a metric's baseline is bumped ONLY if
// every one of its site edits applied cleanly, so the baseline can't drift away
// from what the page shows.

import { readFile, writeFile, appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  extractKworbListeners,
  extractKworbTotalStreams,
  extractYouTubeViews,
  extractSpotifyFollowers,
  evaluateMetric,
  isActionable,
  formatStat,
  applyAnchoredReplace,
  withinSanity,
} from "./stats-lib.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(dir, "..");
const DRY = process.argv.includes("--dry-run");
const LIVE = process.argv.includes("--live");

const UA = { "user-agent": "burnaboystats-refresh/1.0 (+https://burnaboystats.com)" };

// HTML-page extractors (fed the fetched page text).
const htmlExtractors = {
  kworbListeners: (html, metric) => {
    const row = extractKworbListeners(html, metric.artistId);
    return row ? row[metric.field] : NaN;
  },
  kworbTotalStreams: (html) => extractKworbTotalStreams(html),
  youtubeViews: (html) => extractYouTubeViews(html),
};

async function fetchText(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// Spotify client-credentials token → follower count. Needs SPOTIFY_CLIENT_ID /
// SPOTIFY_CLIENT_SECRET in the environment; without them the metric is skipped
// (followers just stays at the committed value — never zeroed out).
async function spotifyFollowers(metric) {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!id || !secret) throw new Error("missing SPOTIFY_CLIENT_ID/SECRET");
  console.error(`  [diag] id len=${id.trim().length} secret len=${secret.trim().length}`);
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      authorization: "Basic " + Buffer.from(`${id.trim()}:${secret.trim()}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });
  console.error(`  [diag] token status=${tokenRes.status}`);
  if (!tokenRes.ok) throw new Error(`token HTTP ${tokenRes.status}: ${(await tokenRes.text()).slice(0, 120)}`);
  const token = (await tokenRes.json()).access_token;
  console.error(`  [diag] token present=${!!token}`);
  const artistRes = await fetch(`https://api.spotify.com/v1/artists/${metric.artistId}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  console.error(`  [diag] artist status=${artistRes.status}`);
  if (!artistRes.ok) throw new Error(`artist HTTP ${artistRes.status}: ${(await artistRes.text()).slice(0, 120)}`);
  const artistJson = await artistRes.json();
  console.error(`  [diag] name=${artistJson?.name} followers.total=${artistJson?.followers?.total}`);
  return extractSpotifyFollowers(artistJson);
}

const fmt = (n) => (n == null || Number.isNaN(n) ? "—" : Math.round(n).toLocaleString("en-US"));

// Get one metric's live value, handling both source types, with a shared page
// cache so a source URL is fetched at most once.
async function liveValue(metric, pageCache) {
  if (metric.extractor === "spotifyFollowers") return spotifyFollowers(metric);
  if (!pageCache.has(metric.sourceUrl)) {
    pageCache.set(metric.sourceUrl, fetchText(metric.sourceUrl).catch((e) => ({ error: e.message })));
  }
  const page = await pageCache.get(metric.sourceUrl);
  if (page && page.error) throw new Error(page.error);
  return htmlExtractors[metric.extractor]?.(page, metric) ?? NaN;
}

async function applyTargets(metric, files) {
  const edits = [];
  const failures = [];
  if (!metric.siteTargets?.length) return { ok: false, edits, failures: [{ reason: "no siteTargets" }] };
  for (const t of metric.siteTargets) {
    const abs = path.join(repoRoot, t.file);
    if (!files.has(abs)) files.set(abs, await readFile(abs, "utf8"));
    const replacement = formatStat(metric.live, t.format);
    if (replacement == null) {
      failures.push({ file: t.file, reason: `bad format "${t.format}"` });
      continue;
    }
    const res = applyAnchoredReplace(files.get(abs), t.anchor, t.pattern, replacement);
    if (!res.applied && res.reason !== "already current") {
      failures.push({ file: t.file, reason: res.reason });
      continue;
    }
    files.set(abs, res.text);
    edits.push({ file: t.file, from: res.changedFrom ?? replacement, to: replacement, noop: !res.applied });
  }
  return { ok: failures.length === 0, edits, failures };
}

async function main() {
  const configPath = path.join(dir, "watched-metrics.json");
  const config = JSON.parse(await readFile(configPath, "utf8"));

  // Live mode handles the `live` metrics; default mode handles the rest.
  const metrics = config.metrics.filter((m) => (LIVE ? m.live === true : !m.live));

  const pageCache = new Map();
  const results = [];
  for (const metric of metrics) {
    let live = NaN;
    try {
      live = await liveValue(metric, pageCache);
    } catch (err) {
      results.push({ ...metric, live: null, status: "unavailable", reason: err.message });
      continue;
    }
    results.push(evaluateMetric(metric, live));
  }

  // Diagnostic: every metric's fetch outcome, so the Actions log always shows
  // whether a source (esp. the Spotify API) was reached — an unchanged value is
  // otherwise invisible in the summary below.
  console.error("Fetch status:");
  for (const r of results) {
    const detail = r.live != null && !Number.isNaN(r.live) ? `(${fmt(r.live)})` : r.reason ? `— ${r.reason}` : "";
    console.error(`  • ${r.label}: ${r.status} ${detail}`);
  }
  console.error("");

  const files = new Map();
  const applied = [];
  const manual = [];
  const rejected = []; // live values that failed the sanity gate

  for (const r of results.filter((x) => isActionable(x.status))) {
    // In live mode, gate every value before it can touch a file.
    if (LIVE && !withinSanity(r.baseline, r.live, r.sanity)) {
      rejected.push(r);
      continue;
    }
    const { ok, edits, failures } = await applyTargets(r, files);
    if (ok && edits.some((e) => !e.noop)) applied.push({ r, edits });
    else if (ok) {
      /* every target already current — nothing to do */
    } else manual.push({ r, failures });
  }

  if (applied.length) {
    for (const { r } of applied) {
      const m = config.metrics.find((x) => x.id === r.id);
      if (m) m.baseline = Math.round(r.live);
    }
    files.set(configPath, JSON.stringify(config, null, 2) + "\n");
  }

  if (!DRY) for (const [abs, text] of files) await writeFile(abs, text);

  const lines = [];
  lines.push(LIVE ? "## 🤖 Live stat refresh\n" : "## 🤖 Stat refresh — review & merge\n");
  if (applied.length) {
    lines.push(`Updated **${applied.length}** figure(s) from the live sources.\n`);
    for (const { r, edits } of applied) {
      lines.push(`### ${r.label}`);
      lines.push(`Source shows **${fmt(r.live)}** (was ${fmt(r.baseline)}). _${r.sourceName}_`);
      for (const e of edits) lines.push(`- \`${e.file}\`: ${e.from} → **${e.to}**`);
      lines.push(`- \`scripts/watched-metrics.json\`: baseline → ${fmt(r.live)}`);
      if (!LIVE && r.manualAfter?.length) {
        lines.push(`\n  Still needs your hand (prose/judgement):`);
        for (const step of r.manualAfter) lines.push(`  - [ ] ${step}`);
      }
      lines.push("");
    }
  }
  if (rejected.length) {
    lines.push(`### ⛔ Rejected by the sanity gate (not published)\n`);
    for (const r of rejected) {
      lines.push(`- **${r.label}**: source ${fmt(r.live)} vs baseline ${fmt(r.baseline)} — implausible, skipped.`);
    }
    lines.push("");
  }
  if (manual.length) {
    lines.push(`### ⚠️ Needs your attention (not auto-applied)\n`);
    for (const { r, failures } of manual) {
      lines.push(`- **${r.label}**: baseline ${fmt(r.baseline)} → source ${fmt(r.live)} (${failures.map((f) => f.reason).join("; ")})`);
    }
    lines.push("");
  }
  if (!applied.length && !manual.length && !rejected.length) {
    lines.push("All watched figures are within tolerance. Nothing to update.");
  }
  const body = lines.join("\n");

  console.log(body);
  await writeFile(path.join(process.cwd(), "refresh-pr-body.md"), body);
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_changes=${applied.length > 0}\n`);
    await appendFile(process.env.GITHUB_OUTPUT, `has_manual=${manual.length > 0}\n`);
    await appendFile(process.env.GITHUB_OUTPUT, `has_rejected=${rejected.length > 0}\n`);
  }
}

main().catch((err) => {
  console.error("Stat refresh error:", err);
  process.exit(0);
});
