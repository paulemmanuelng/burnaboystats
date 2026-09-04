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
  extractKworbYouTubeVideo,
  extractKworbYouTubeTotal,
  extractKworbSongStreams,
  extractKworbArtistDaily,
  evaluateMetric,
  isActionable,
  certWatchStatus,
} from "./stats-lib.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Every extractor a watched metric may name.
 *
 * This list is the SAME list apply-stat-updates.mjs keeps, and it had fallen
 * four entries behind it. `youtube-total-views` names `kworbYouTubeTotal`, which
 * was never registered here — so on every weekly run the lookup below resolved
 * to `undefined`, `?? NaN` turned that into NaN, and evaluateMetric reported the
 * metric as "source unavailable". Which is not actionable. Which means no alert.
 *
 * The page was fine the whole time: it returns HTTP 200 and the extractor reads
 * 3,196,624,195 out of it when it is actually called (checked 4 Sep 2026). That
 * metric exists as a CANARY — kworb's per-video totals froze on 25 Aug 2026 and
 * the watch is there to say when they start moving again — and its total has now
 * risen 9,057,734 above its baseline, exactly the event it was left in place to
 * report, and the monitor could not see it.
 *
 * Two registries for one set of extractors is what did it, so the guard below
 * makes the divergence loud instead of silent.
 */
const extractors = {
  kworbListeners: (html, metric) => {
    const row = extractKworbListeners(html, metric.artistId);
    return row ? row[metric.field] : NaN;
  },
  kworbTotalStreams: (html) => extractKworbTotalStreams(html),
  youtubeViews: (html) => extractYouTubeViews(html),
  kworbYouTubeVideo: (html, metric) => extractKworbYouTubeVideo(html, metric.match),
  kworbYouTubeTotal: (html) => extractKworbYouTubeTotal(html),
  kworbSongStreams: (html, metric) => extractKworbSongStreams(html, metric.match),
  kworbArtistDaily: (html, metric) => extractKworbArtistDaily(html, metric.match),
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

/**
 * Read watched-metrics.json, or stop the run and say why.
 *
 * watched-metrics.json is HAND-MAINTAINED — every confirmed figure on the site
 * means a human editing a baseline in it — so the ordinary typo (a trailing
 * comma, an unescaped quote, a lost brace) is a live risk, and a bare
 * `JSON.parse` turns that into a `SyntaxError: Unexpected token }` with no file
 * name and no hint that the stats monitor is what just died.
 *
 * Worse, this script's own `main().catch()` deliberately exits 0 so a monitoring
 * hiccup never reddens CI — correct for an unreachable source, catastrophic
 * here. A malformed config would have printed one line into a log nobody reads
 * and gone green every Monday, and because the monitor's whole output is "all
 * quiet unless something drifted", a monitor that never runs looks exactly like
 * a monitor with nothing to report. Silence is its success state, which is why
 * it is the one script that must never fail quietly.
 *
 * So: exit 1, name the file, name the fault. Same contract as
 * build-live-charts.mjs, which refuses to continue for the same class of reason.
 * An unreachable SOURCE is still handled per-metric below and still exits 0 —
 * that is drift monitoring working, not the monitor breaking.
 */
async function readConfig(file) {
  let text;
  try {
    text = await readFile(file, "utf8");
  } catch (err) {
    console.error(
      `REFUSING TO CONTINUE: could not read ${file} (${err?.code ?? err}). ` +
        `Every baseline this monitor compares against lives in that file; without it ` +
        `there is nothing to check and a green run would mean "no drift found".`
    );
    process.exit(1);
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error(
      `REFUSING TO CONTINUE: ${file} is not valid JSON — ${err.message}. ` +
        `It is edited by hand every time a figure is confirmed, so this is usually a ` +
        `trailing comma or an unescaped quote in a note. Continuing would report zero ` +
        `drift across every watched figure, which is indistinguishable from all-clear.`
    );
    process.exit(1);
  }
}

async function main() {
  const config = await readConfig(path.join(dir, "watched-metrics.json"));

  // Live metrics (followers, peak listeners) are auto-published hourly by the
  // stats-live workflow — the weekly tripwire only covers the review-gated rest.
  const metrics = config.metrics.filter((m) => !m.live);

  // A metric naming an extractor this runner does not have is a CONFIG fault,
  // and it will never fix itself. It used to be indistinguishable from a source
  // outage: the lookup returned undefined, `?? NaN` made it NaN, and the metric
  // reported "source unavailable" — a status isActionable() deliberately ignores,
  // because a site being down for a week is not news. So a metric could sit in
  // this file being reported on every Monday and never once be read.
  //
  // Checked up front, before a single fetch, and named individually: "the
  // monitor cannot read this metric" and "the source was down" are different
  // facts and must not share a badge.
  const unknown = metrics.filter((m) => typeof extractors[m.extractor] !== "function");
  if (unknown.length) {
    console.error(
      `REFUSING TO CONTINUE: ${unknown.length} watched metric(s) name an extractor this ` +
        `script does not have — ${unknown.map((m) => `${m.id} → "${m.extractor}"`).join(", ")}. ` +
        `Register it above (scripts/apply-stat-updates.mjs keeps the same list and is the ` +
        `usual place it already exists) or the metric is watched in name only.`
    );
    process.exit(1);
  }

  // Fetch each unique source page once.
  const urls = [...new Set(metrics.map((m) => m.sourceUrl))];
  const pages = new Map();
  for (const url of urls) {
    try {
      pages.set(url, await fetchText(url));
    } catch (err) {
      pages.set(url, { error: err.message });
    }
  }

  const results = metrics.map((metric) => {
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

  // Certification watches — registers polled for a release that is expected to
  // appear. A hit is actionable exactly like drift: verify at the register,
  // then update the site by hand.
  const certWatchResults = [];
  // A watch with `resolved` has already been found and published — polling it
  // again would trip the drift issue every week for a certification that is
  // long since on the site.
  for (const w of (config.certWatches ?? []).filter((c) => !c.resolved)) {
    let status = "unavailable";
    try {
      const res = await fetch(w.endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "user-agent": "burnaboystats-monitor/1.0 (+https://burnaboystats.com)",
        },
        body: w.body,
      });
      const data = res.ok ? await res.json() : null;
      status = certWatchStatus(data?.html ?? "", w.pattern);
    } catch {
      status = "unavailable";
    }
    certWatchResults.push({ ...w, status });
  }
  const certHits = certWatchResults.filter((w) => w.status === "found");

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
  for (const w of certWatchResults) {
    const badge =
      w.status === "found" ? "🏅 in the register — verify & add"
      : w.status === "unavailable" ? "⏭️ register unavailable"
      : "✅ not listed yet";
    lines.push(`| ${w.label} | — | — | — | ${badge} |`);
  }
  const table = lines.join("\n");

  let report = `## 📊 Burna Boy Stats — data monitor\n\n`;
  if (actionable.length || certHits.length) {
    report += `**${actionable.length + certHits.length} item(s) need a look.** Verify against the primary source, then update the site (and the baseline in \`scripts/watched-metrics.json\`).\n\n`;
  } else {
    report += `All watched figures are within tolerance. Nothing to do.\n\n`;
  }
  report += table + "\n\n";
  for (const r of actionable) {
    report += `- **${r.label}**: site baseline ${fmt(r.baseline)} → source shows ${fmt(r.live)}. ${r.note ?? ""} (Source: ${r.sourceName} — ${r.sourceUrl})\n`;
  }
  for (const w of certHits) {
    report += `- **${w.label}** is now IN the register. ${w.note ?? ""} (Register: ${w.sourceName} — ${w.sourceUrl})\n`;
  }

  console.log(report);

  // Wire up CI outputs.
  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, report);
  }
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_drift=${actionable.length > 0 || certHits.length > 0}\n`);
  }
  await writeFile(path.join(process.cwd(), "drift-report.md"), report);
}

main().catch((err) => {
  // Never fail the pipeline for a monitoring hiccup — just log it.
  console.error("Stats monitor error:", err);
  process.exit(0);
});
