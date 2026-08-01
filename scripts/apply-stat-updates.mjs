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
  extractKworbYouTubeVideo,
  extractKworbYouTubeTotal,
  extractKworbSongStreams,
  extractSpotifyFollowers,
  evaluateMetric,
  isActionable,
  formatStat,
  applyAnchoredReplace,
  appendTrendPoint,
  withinSanity,
  staleMetrics,
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
  kworbYouTubeVideo: (html, metric) => extractKworbYouTubeVideo(html, metric.match),
  kworbYouTubeTotal: (html) => extractKworbYouTubeTotal(html),
  kworbSongStreams: (html, metric) => extractKworbSongStreams(html, metric.match),
};

async function fetchText(url) {
  // YouTube shows datacenter IPs (CI runners) a cookie-consent wall instead of
  // the watch page, so viewCount is missing. A consent cookie + en/US locale
  // gets the real HTML.
  const browserish = {
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
    "accept-language": "en-US,en;q=0.9",
  };
  const headers = url.includes("youtube.com")
    ? { ...browserish, cookie: "CONSENT=YES+cb.20210328-17-p0.en+FX+000" }
    : UA;
  const res = await fetch(url, { headers });
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
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      authorization: "Basic " + Buffer.from(`${id.trim()}:${secret.trim()}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });
  if (!tokenRes.ok) throw new Error(`token HTTP ${tokenRes.status}`);
  const token = (await tokenRes.json()).access_token;
  const artistRes = await fetch(`https://api.spotify.com/v1/artists/${metric.artistId}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (!artistRes.ok) throw new Error(`artist HTTP ${artistRes.status}`);
  // NOTE: as of 2026 Spotify strips `followers`/`popularity`/`genres` from the
  // artist object for standard app credentials, so this returns NaN and the
  // metric is skipped. Kept wired in case that access is restored/granted.
  return extractSpotifyFollowers(await artistRes.json());
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
    const formatted = formatStat(metric.live, t.format);
    if (formatted == null) {
      failures.push({ file: t.file, reason: `bad format "${t.format}"` });
      continue;
    }
    // `template` scopes the rewrite to a named field (e.g. `ytViews: "%s"`) so
    // the pattern can't accidentally match another number after the anchor.
    const replacement = t.template ? t.template.replace("%s", formatted) : formatted;
    const res = applyAnchoredReplace(files.get(abs), t.anchor, t.pattern, replacement);
    if (!res.applied && res.reason !== "already current") {
      failures.push({ file: t.file, reason: res.reason });
      continue;
    }
    files.set(abs, res.text);
    edits.push({ file: t.file, from: res.changedFrom ?? replacement, to: replacement, noop: !res.applied });
  }

  // Optional: also append today's reading to a trend series, so the site's
  // history grows by itself. Idempotent — one point per date, ever.
  const ts = metric.trendSeries;
  if (ts && failures.length === 0) {
    const abs = path.join(repoRoot, ts.file);
    if (!files.has(abs)) files.set(abs, await readFile(abs, "utf8"));
    const value = ts.divide ? +(metric.live / ts.divide).toFixed(ts.decimals ?? 2) : Math.round(metric.live);
    const date = new Date().toISOString().slice(0, 10);
    const res = appendTrendPoint(files.get(abs), ts.anchor, date, value);
    if (res.applied) {
      files.set(abs, res.text);
      edits.push({ file: ts.file, from: "(new point)", to: `${date} → ${value}`, noop: false });
    }
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

  // A percentage threshold cannot see a round-number crossing. "Last Last"
  // went 598,991,932 -> 600,032,476: a 0.174% move against a 0.5% threshold,
  // so nothing fired — while the site went on printing "599M" for a song that
  // had passed 600 million. Whenever the RENDERED string would differ, the
  // published figure is simply wrong, so treat that as actionable regardless
  // of how small the percentage move was.
  const displayWouldChange = (r) => {
    if (r.live == null || Number.isNaN(r.live) || r.baseline == null) return false;
    const fmt = r.siteTargets?.[0]?.format ?? r.format;
    if (!fmt) return false;
    return formatStat(r.live, fmt) !== formatStat(r.baseline, fmt);
  };

  for (const r of results.filter((x) => isActionable(x.status) || displayWouldChange(x))) {
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

  // Record when the raw SOURCE value last moved, on every run — separate from
  // when the displayed figure last changed. A mature catalogue song moves ~0.03%
  // a day against a 0.1% rewrite threshold, so its display can sit unchanged for
  // days while the source is perfectly healthy. Judging staleness on the display
  // made the alarm fire on 17 healthy metrics at once.
  let sourcesMoved = false;
  for (const r of results) {
    if (r.live == null || Number.isNaN(r.live)) continue;
    const m = config.metrics.find((x) => x.id === r.id);
    if (!m) continue;
    const seen = Math.round(r.live);
    if (m.lastSeenValue !== seen) {
      m.lastSeenValue = seen;
      m.lastSeenAt = new Date().toISOString().slice(0, 10);
      sourcesMoved = true;
    }
  }
  if (sourcesMoved) files.set(configPath, JSON.stringify(config, null, 2) + "\n");

  if (applied.length) {
    for (const { r } of applied) {
      const m = config.metrics.find((x) => x.id === r.id);
      if (m) {
        m.baseline = Math.round(r.live);
        // Stamped only on a real write, so it records when the figure last
        // MOVED — not merely when the bot last ran. That distinction is the
        // whole point: a frozen source still runs fine every hour.
        m.lastChanged = new Date().toISOString().slice(0, 10);
      }
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

  // Staleness alarm. Runs on the config AFTER this run's writes, so a figure
  // that moved today is already cleared. Anything left has not moved in days
  // while reporting "ok" every hour — the signature of a source that changed
  // shape rather than a stat that happens to be flat.
  const stale = staleMetrics(config.metrics);
  if (stale.length) {
    lines.push("");
    lines.push(`### ⚠️ ${stale.length} figure(s) have stopped moving\n`);
    for (const s of stale) {
      lines.push(`- **${s.label}** — unchanged for ${s.days} days (expected to move within ${s.limit}).`);
    }
    lines.push("");
    lines.push("These fetch cleanly but never change, which usually means the source page changed shape. Check the extractor before trusting the figure.");
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
