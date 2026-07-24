#!/usr/bin/env node
// Review-gated stat refresh. Fetches the same public sources as the monitor,
// and for any figure that has drifted past its threshold it DRAFTS the site
// edit — anchored find/replace in the data files declared on each metric's
// `siteTargets` — and bumps that metric's baseline to match. It then writes a
// PR body describing what it changed and what still needs a human.
//
// It never merges anything. The workflow opens a pull request; Paul reviews the
// diff and merges or closes it. His live tracking always wins — closing the PR
// is a valid outcome. Fast-moving figures are only ever changed behind this gate.
//
// Safety rule that makes this trustworthy: a metric's baseline is bumped ONLY if
// every one of its site edits applied cleanly. If a file changed shape and an
// anchor is missing, that metric is skipped whole (site + baseline untouched)
// and listed under "needs your attention" — so the baseline can never silently
// drift away from what the page shows.
//
//   node scripts/apply-stat-updates.mjs            # apply + write PR body
//   node scripts/apply-stat-updates.mjs --dry-run  # report only, no writes

import { readFile, writeFile, appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  extractKworbListeners,
  extractKworbTotalStreams,
  evaluateMetric,
  isActionable,
  formatStat,
  applyAnchoredReplace,
} from "./stats-lib.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(dir, "..");
const DRY = process.argv.includes("--dry-run");

const extractors = {
  kworbListeners: (html, metric) => {
    const row = extractKworbListeners(html, metric.artistId);
    return row ? row[metric.field] : NaN;
  },
  kworbTotalStreams: (html) => extractKworbTotalStreams(html),
};

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "burnaboystats-refresh/1.0 (+https://burnaboystats.com)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

const fmt = (n) => (n == null || Number.isNaN(n) ? "—" : Math.round(n).toLocaleString("en-US"));

// Apply every siteTarget for one metric to the working copy of each file.
// Returns { ok, edits, failures } — ok is true only if the metric has targets
// and ALL of them applied (or were already current).
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

  const files = new Map(); // abs path -> working text (edited in place, written once)
  const applied = []; // metrics fully auto-drafted
  const manual = []; // actionable but not fully auto-applied → human needed

  for (const r of actionable) {
    const { ok, edits, failures } = await applyTargets(r, files);
    if (ok && edits.some((e) => !e.noop)) {
      applied.push({ r, edits });
    } else if (ok) {
      // Every target already current — nothing to do, don't reopen it.
    } else {
      manual.push({ r, failures });
    }
  }

  // Bump baselines for the metrics we fully applied — same edited config object.
  if (applied.length) {
    for (const { r } of applied) {
      const m = config.metrics.find((x) => x.id === r.id);
      if (m) m.baseline = Math.round(r.live);
    }
    files.set(configPath, JSON.stringify(config, null, 2) + "\n");
  }

  // Write the working copies (unless dry-run).
  if (!DRY) {
    for (const [abs, text] of files) await writeFile(abs, text);
  }

  // Build the PR body.
  const lines = [];
  lines.push("## 🤖 Stat refresh — review & merge\n");
  if (applied.length) {
    lines.push(`Auto-drafted **${applied.length}** figure update(s) from the live sources. Review the diff, then merge — or close if your own tracking has a fresher number.\n`);
    for (const { r, edits } of applied) {
      lines.push(`### ${r.label}`);
      lines.push(`Source shows **${fmt(r.live)}** (was ${fmt(r.baseline)}). _${r.sourceName}_`);
      for (const e of edits) lines.push(`- \`${e.file}\`: ${e.from} → **${e.to}**`);
      lines.push(`- \`scripts/watched-metrics.json\`: baseline → ${fmt(r.live)}`);
      if (r.manualAfter?.length) {
        lines.push(`\n  Still needs your hand (prose/judgement):`);
        for (const step of r.manualAfter) lines.push(`  - [ ] ${step}`);
      }
      lines.push("");
    }
  }
  if (manual.length) {
    lines.push(`### ⚠️ Needs your attention (not auto-applied)\n`);
    lines.push(`These drifted but couldn't be drafted safely — update them by hand:\n`);
    for (const { r, failures } of manual) {
      lines.push(`- **${r.label}**: baseline ${fmt(r.baseline)} → source ${fmt(r.live)} (${failures.map((f) => f.reason).join("; ")})`);
    }
    lines.push("");
  }
  if (!applied.length && !manual.length) {
    lines.push("All watched figures are within tolerance. Nothing to update.");
  }
  const body = lines.join("\n");

  console.log(body);
  await writeFile(path.join(process.cwd(), "refresh-pr-body.md"), body);
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_changes=${applied.length > 0}\n`);
    await appendFile(process.env.GITHUB_OUTPUT, `has_manual=${manual.length > 0}\n`);
  }
}

main().catch((err) => {
  console.error("Stat refresh error:", err);
  process.exit(0);
});
