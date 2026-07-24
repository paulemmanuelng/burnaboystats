#!/usr/bin/env node
// Stats monitor — fetches public stat sources and compares them to the site's
// baselines in watched-metrics.json. It DOES NOT edit any site data; it just
// reports drift so a human can verify and update. Designed to run in CI
// (.github/workflows/stats-monitor.yml) but also runnable locally:
//
//   node scripts/check-stats.mjs
//
// Exit code is always 0 (drift is a signal, not a failure). When run in CI it
// writes a Markdown report to drift-report.md and sets `has_drift` so the
// workflow can open/update a GitHub issue.

import { readFile, writeFile, appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  extractKworbListeners,
  extractKworbTotalStreams,
  extractYouTubeViews,
  evaluateMetric,
  isActionable,
} from "./stats-lib.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));

const extractors = {
  kworbListeners: (html, metric) => {
    const row = extractKworbListeners(html, metric.artistId);
    return row ? row[metric.field] : NaN;
  },
  kworbTotalStreams: (html) => extractKworbTotalStreams(html),
  youtubeViews: (html) => extractYouTubeViews(html),
};

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "burnaboystats-monitor/1.0 (+https://burnaboystats.com)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function fmt(n) {
  return n == null || Number.isNaN(n) ? "—" : Math.round(n).toLocaleString("en-US");
}

async function main() {
  const config = JSON.parse(await readFile(path.join(dir, "watched-metrics.json"), "utf8"));

  // Fetch each unique source page once.
  const urls = [...new Set(config.metrics.map((m) => m.sourceUrl))];
  const pages = new Map();
  for (const url of urls) {
    try {
      pages.set(url, await fetchText(url));
    } catch (err) {
      pages.set(url, { error: err.message });
    }
  }

  const results = config.metrics.map((metric) => {
    const page = pages.get(metric.sourceUrl);
    if (page && page.error) return { ...metric, live: null, status: "unavailable", reason: page.error };
    let live = NaN;
    try {
      live = extractors[metric.extractor]?.(page, metric) ?? NaN;
    } catch (err) {
      return { ...metric, live: null, status: "unavailable", reason: err.message };
    }
    return evaluateMetric(metric, live);
  });

  const actionable = results.filter((r) => isActionable(r.status));

  // Build a report table.
  const lines = [];
  lines.push("| Metric | Baseline | Live | Change | Status |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const r of results) {
    const change =
      r.drift != null ? `${(r.drift * 100).toFixed(1)}%`
      : r.delta != null ? `${r.delta} place${r.delta === 1 ? "" : "s"} ${r.live > r.baseline ? "down" : "up"}`
      : r.status === "new-peak" ? "new high"
      : "—";
    const badge =
      r.status === "drift" ? "⚠️ drift"
      : r.status === "new-peak" ? "🚀 new peak"
      : r.status === "rank-change" ? "🔀 rank move"
      : r.status === "unavailable" ? "⏭️ source unavailable"
      : r.status === "unbaselined" ? "ℹ️ unbaselined"
      : "✅ ok";
    lines.push(`| ${r.label} | ${fmt(r.baseline)} | ${fmt(r.live)} | ${change} | ${badge} |`);
  }
  const table = lines.join("\n");

  let report = `## 📊 Burna Boy Stats — data monitor\n\n`;
  if (actionable.length) {
    report += `**${actionable.length} figure(s) need a look.** Verify against the primary source, then update the site (and the baseline in \`scripts/watched-metrics.json\`).\n\n`;
  } else {
    report += `All watched figures are within tolerance. Nothing to do.\n\n`;
  }
  report += table + "\n\n";
  for (const r of actionable) {
    report += `- **${r.label}**: site baseline ${fmt(r.baseline)} → source shows ${fmt(r.live)}. ${r.note ?? ""} (Source: ${r.sourceName} — ${r.sourceUrl})\n`;
  }

  console.log(report);

  // Wire up CI outputs.
  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, report);
  }
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_drift=${actionable.length > 0}\n`);
  }
  await writeFile(path.join(process.cwd(), "drift-report.md"), report);
}

main().catch((err) => {
  // Never fail the pipeline for a monitoring hiccup — just log it.
  console.error("Stats monitor error:", err);
  process.exit(0);
});
