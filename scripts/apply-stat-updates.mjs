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
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import {
  extractKworbListeners,
  extractKworbTotalStreams,
  extractYouTubeViews,
  extractKworbYouTubeVideo,
  extractKworbYouTubeTotal,
  extractKworbSongStreams,
  extractKworbArtistPage,
  alignLedgers,
  ledgerGaps,
  rollLedger,
  extractSpotifyFollowers,
  evaluateMetric,
  isActionable,
  formatStat,
  applyAnchoredReplace,
  appendTrendPoint,
  withinSanity,
  staleMetrics,
  offsetDrift,
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
  // The cumulative total on an artist's own page. A `group` metric reads it
  // dated (extractKworbArtistPage) and is aligned with its peers; registered
  // here too so every extractor a metric can name is implemented in one list.
  kworbArtistPage: (html) => extractKworbArtistPage(html)?.total ?? NaN,
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
//
// `metric.offset` is added to whatever the source reports, for sources that
// undercount by a known, measured amount (kworb's artist total misses some
// featured credits). It applies at this single point, so the baseline, the
// sanity gate and the written display all live in corrected space — a
// metric's offset can only be changed together with a matching baseline.
async function liveValue(metric, pageCache) {
  const corrected = (n) => (Number.isNaN(n) ? n : n + (metric.offset ?? 0));
  if (metric.extractor === "spotifyFollowers") return corrected(await spotifyFollowers(metric));
  if (!pageCache.has(metric.sourceUrl)) {
    pageCache.set(metric.sourceUrl, fetchText(metric.sourceUrl).catch((e) => ({ error: e.message })));
  }
  const page = await pageCache.get(metric.sourceUrl);
  if (page && page.error) throw new Error(page.error);
  return corrected(htmlExtractors[metric.extractor]?.(page, metric) ?? NaN);
}

// A DATED reading for a ledger (`group`) metric — the artist's own kworb page:
// its stamp, its total and the day's streams. Ledger metrics are not evaluated
// one by one: each day's daily is kept under the page's date on the metric,
// and the group publishes on the newest date every member covers without a
// hole (alignLedgers), each member's checkpoint plus its dailies to that date.
// No once-per-day gate exists any more, because none is needed: the page's
// date is the key, so the same page read twice records one day once.
async function datedReading(metric, pageCache) {
  if (!pageCache.has(metric.sourceUrl)) {
    pageCache.set(metric.sourceUrl, fetchText(metric.sourceUrl).catch((e) => ({ error: e.message })));
  }
  const page = await pageCache.get(metric.sourceUrl);
  if (page && page.error) throw new Error(page.error);
  const reading = extractKworbArtistPage(page);
  if (!reading) throw new Error("no dated daily on the page");
  return reading;
}

/**
 * Any run of consecutive `/* live:<prefix>-<name> *\/ { name: …, value: "N.NNNB" }`
 * lines is sorted by that value, descending, in place. Only runs of the same
 * prefix are touched (the five streams-2026-* rows); a run whose values do
 * not all parse is left alone.
 */
export function reorderLiveRows(text) {
  const lines = text.split("\n");
  const row = /^(\s*)\/\* live:([a-z0-9-]+?)-[a-z0-9]+ \*\/ \{ name: "[^"]+", value: "([\d.]+)B" \},?$/;
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(row);
    if (!m) { i++; continue; }
    let j = i;
    while (j < lines.length) {
      const n = lines[j].match(row);
      if (!n || n[2] !== m[2]) break;
      j++;
    }
    if (j - i >= 2) {
      const run = lines.slice(i, j);
      const sorted = [...run].sort((x, y) => Number(y.match(row)[3]) - Number(x.match(row)[3]));
      // Keep the trailing comma pattern exactly as it was, line by line.
      lines.splice(i, run.length, ...sorted.map((l, k) => l.replace(/,?$/, run[k].endsWith(",") ? "," : "")));
    }
    i = j;
  }
  return lines.join("\n");
}

async function applyTargets(metric, files) {
  const edits = [];
  const failures = [];
  if (!metric.siteTargets?.length) return { ok: false, edits, failures: [{ reason: "no siteTargets" }] };
  for (const t of metric.siteTargets) {
    const abs = path.join(repoRoot, t.file);
    if (!files.has(abs)) files.set(abs, await readFile(abs, "utf8"));
    // `field: "asOf"` writes the group's common date instead of the value, so
    // the board can say which day its totals are read at.
    const formatted = t.field === "asOf" ? (metric.asOf ?? null) : formatStat(metric.live, t.format);
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
    } else if (res.reason !== "already current") {
      // Site targets push their reason to `failures` a few lines up; this arm
      // used to drop it, so `ok` stayed true and the baseline still bumped.
      // The damage is quiet and specific: the peak figure advances while the
      // date derived from the newest trend point does not, so the two disagree
      // and anything reading that date starts reporting a stale peak as fresh.
      failures.push({ file: ts.file, reason: res.reason });
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
  const today = new Date().toISOString().slice(0, 10);
  let readingsMoved = false;
  const groups = new Map(); // group → members read this run
  const ledgerNotes = []; // per-member coverage, for the summary
  for (const metric of metrics) {
    if (metric.group) {
      // Record the day's daily under the page's date on the config metric;
      // evaluation waits for the whole group below.
      try {
        const reading = await datedReading(metric, pageCache);
        const m = config.metrics.find((x) => x.id === metric.id);
        m.readings ??= {};
        if (reading.date > m.checkpoint.date && !(reading.date in m.readings)) {
          // A daily is gated on its own plausibility before it can enter the
          // ledger: a mis-parse must not poison a running total for the year.
          if (!(reading.daily >= 0 && reading.daily <= (m.dailyMax ?? Infinity))) {
            throw new Error(`implausible daily ${fmt(reading.daily)} on the ${reading.date} page — not recorded`);
          }
          m.readings[reading.date] = reading.daily;
          // The source moved, whether or not the group can publish yet — a
          // member waiting on a lagging peer is not a stale source.
          m.lastSeenAt = today;
          readingsMoved = true;
        }
        if (!groups.has(metric.group)) groups.set(metric.group, []);
        groups.get(metric.group).push(metric);
      } catch (err) {
        results.push({ ...metric, live: null, status: "unavailable", reason: err.message });
      }
      continue;
    }
    let live = NaN;
    try {
      live = await liveValue(metric, pageCache);
    } catch (err) {
      results.push({ ...metric, live: null, status: "unavailable", reason: err.message });
      continue;
    }
    const r = evaluateMetric(metric, live);
    // Judge the RAW value too: an offset is only valid while the source
    // counts the same set of things, and corrected space cannot show that.
    r.drift = offsetDrift(metric, live);
    results.push(r);
  }
  for (const [group, read] of groups) {
    // Alignment is over EVERY member in the config, not just those read this
    // run: a member whose fetch failed still has its earlier dailies, and a
    // member missing a day holds the whole group at the last day it covers.
    const members = config.metrics.filter((m) => m.group === group);
    const aligned = alignLedgers(members);
    for (const m of members) {
      const gaps = ledgerGaps(m.checkpoint, m.readings);
      const dates = Object.keys(m.readings ?? {}).sort();
      ledgerNotes.push({
        group, id: m.id, label: m.label, checkpoint: m.checkpoint.date,
        newest: dates[dates.length - 1] ?? null, gaps, common: aligned?.date ?? null, hold: m.hold ?? null,
      });
    }
    // Every member is evaluated from its STORED dailies, not only those whose
    // page was fetched this run: a member's total through the common day does
    // not depend on today's fetch, and leaving a member out would let the
    // other four advance the shared as-of date past a row that never moved.
    for (const m of members) {
      if (!aligned) {
        results.push({ ...m, live: null, status: "unaligned", reason: "no day every member of the group covers" });
        continue;
      }
      if (m.hold) {
        results.push({ ...m, live: aligned.values[m.id], status: "held", reason: m.hold, asOf: aligned.date });
        continue;
      }
      const r = evaluateMetric(m, aligned.values[m.id]);
      r.asOf = aligned.date;
      results.push(r);
    }
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
    // A peak metric records an all-time HIGH, and its baseline can be fresher
    // than the source (Paul reads Spotify's own page; kworb lags it by hours).
    // Without this guard, a lagging source that formats differently rewrote
    // the site DOWNWARD — 60.01M back to 59.99M on 8 Aug 2026 — through this
    // display-sync path, which bypassed the only-moves-up rule in
    // evaluateMetric. A peak below its baseline is lag, never news.
    if (r.kind === "peak" && r.live <= r.baseline) return false;
    const fmt = r.siteTargets?.[0]?.format ?? r.format;
    if (!fmt) return false;
    return formatStat(r.live, fmt) !== formatStat(r.baseline, fmt);
  };

  const actionable = results.filter((x) => x.status !== "held" && (isActionable(x.status) || displayWouldChange(x)));

  // A group writes all of its rows or none of them. The five 2026 totals
  // share one as-of date, so four rows published beside one held back would
  // print a day the fifth never reached, and re-sort a stale figure among
  // fresh ones. One member failing the sanity gate, or one anchored edit
  // failing, holds the whole group: its edits are made on a trial copy of the
  // files and merged only when every member's went through.
  const byGroup = new Map();
  for (const r of actionable) {
    if (!r.group) continue;
    if (!byGroup.has(r.group)) byGroup.set(r.group, []);
    byGroup.get(r.group).push(r);
  }
  for (const [group, rs] of byGroup) {
    if (LIVE && rs.some((r) => !withinSanity(r.baseline, r.live, r.sanity))) {
      rejected.push(...rs);
      continue;
    }
    const trial = new Map(files);
    const outcomes = [];
    for (const r of rs) outcomes.push({ r, ...(await applyTargets(r, trial)) });
    if (outcomes.every((o) => o.ok)) {
      for (const [abs, text] of trial) files.set(abs, text);
      for (const o of outcomes) if (o.edits.some((e) => !e.noop)) applied.push({ r: o.r, edits: o.edits });
    } else {
      console.error(`  ⚠ group ${group}: an anchored edit failed — none of its rows were written`);
      for (const o of outcomes) manual.push({ r: o.r, failures: o.ok ? [{ reason: `held with the group` }] : o.failures });
    }
  }

  for (const r of actionable.filter((x) => !x.group)) {
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
    // The RAW reading behind an offset metric, recorded so the next run can
    // see a discontinuity. Written even when the corrected value is unchanged:
    // the point is to track the source's own shape, not the published figure.
    if (r.drift && r.drift.raw != null) {
      const raw = Math.round(r.drift.raw);
      if (m.lastRawValue !== raw) {
        m.lastRawValue = raw;
        sourcesMoved = true;
      }
    }
  }
  if (sourcesMoved || readingsMoved) files.set(configPath, JSON.stringify(config, null, 2) + "\n");

  if (applied.length) {
    for (const { r } of applied) {
      const m = config.metrics.find((x) => x.id === r.id);
      if (m) {
        m.baseline = Math.round(r.live);
        // Stamped only on a real write, so it records when the figure last
        // MOVED — not merely when the bot last ran. That distinction is the
        // whole point: a frozen source still runs fine every hour.
        m.lastChanged = new Date().toISOString().slice(0, 10);
        // A value cannot change without having been read, so a write also
        // proves the source was seen. The loop above already stamps that in
        // the normal case; restating it here keeps `lastSeenAt >= lastChanged`
        // true even if the two ever land in the file from separate runs — a
        // merge once left four metrics "changed today, last seen two days ago",
        // which would have fired the staleness alarm on healthy sources.
        m.lastSeenValue = Math.round(r.live);
        m.lastSeenAt = m.lastChanged;
        // A published ledger rolls forward: its checkpoint becomes the day
        // just written and the dailies that day absorbed are dropped. The
        // record of each day stays in this file's git history.
        if (r.asOf && m.checkpoint) Object.assign(m, rollLedger(m.checkpoint, m.readings, r.asOf, Math.round(r.live)));
      }
    }
    files.set(configPath, JSON.stringify(config, null, 2) + "\n");
  }

  // Ranked live rows follow their numbers. The five 2026 running totals on
  // the Africa's Biggest board are written into rows whose ORDER is source
  // order, and tests/watchedMetrics.test.ts refuses a board that lists a
  // smaller total above a larger one — so the day the summed total for Burna
  // Boy passed Wizkid's (11 Sep 2026 — a pass the doubled days had invented),
  // every hourly run wrote the right numbers into the wrong order, failed its
  // own gate, and nothing was committed for two days: no totals, and no
  // lastSeenAt stamps, which set off the staleness alarm on fourteen healthy
  // song figures. Sort the marked rows by value after writing.
  for (const [abs, text] of files) files.set(abs, reorderLiveRows(text));

  if (!DRY) for (const [abs, text] of files) await writeFile(abs, text);

  const lines = [];
  lines.push(LIVE ? "## 🤖 Live stat refresh\n" : "## 🤖 Stat refresh — review & merge\n");
  if (applied.length) {
    lines.push(`Updated **${applied.length}** figure(s) from the live sources.\n`);
    for (const { r, edits } of applied) {
      lines.push(`### ${r.label}`);
      lines.push(`Source shows **${fmt(r.live)}** (was ${fmt(r.baseline)}). _${r.sourceName}_`);
      // A target another member of the same group already wrote this run is
      // reported once, by whoever wrote it.
      for (const e of edits) if (!e.noop) lines.push(`- \`${e.file}\`: ${e.from} → **${e.to}**`);
      lines.push(`- \`scripts/watched-metrics.json\`: baseline → ${fmt(r.live)}`);
      if (!LIVE && r.manualAfter?.length) {
        lines.push(`\n  Still needs your hand (prose/judgement):`);
        for (const step of r.manualAfter) lines.push(`  - [ ] ${step}`);
      }
      lines.push("");
    }
  }
  if (ledgerNotes.length) {
    // Where each running total stands: the day the group is published at,
    // and — loudly — any day a member is missing, because a hole holds the
    // whole group and only a hand can fill it (from the tracker's own daily
    // post) or move the checkpoint past it.
    const gapped = ledgerNotes.filter((n) => n.gaps.length);
    lines.push(`### 📒 Running totals${gapped.length ? " — ⚠️ gaps need a hand" : ""}\n`);
    for (const n of ledgerNotes) {
      lines.push(`- **${n.label}**: ${n.hold ? `HELD (${n.hold}) — would publish through` : "published through"} ${n.common ?? "— (no common day)"}, checkpoint ${n.checkpoint}, newest daily ${n.newest ?? "none"}${n.gaps.length ? `, **missing ${n.gaps.join(", ")}**` : ""}`);
    }
    lines.push("");
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

  // Offset-drift alarm. Louder than staleness because it means a figure that
  // looks healthy is actively wrong: the arithmetic downstream is consistent,
  // it is the constant feeding it that no longer matches the source.
  const drifted = results.filter((r) => r.drift && (r.drift.kind === "shrank" || r.drift.kind === "jumped"));
  if (drifted.length) {
    lines.push("");
    lines.push(`### 🚨 ${drifted.length} offset(s) no longer match their source\n`);
    for (const r of drifted) {
      lines.push(`- **${r.label}** — ${r.drift.why}`);
      lines.push(`  - raw now \`${fmt(r.drift.raw)}\`, previously \`${fmt(r.drift.raw - r.drift.delta)}\`, offset \`${fmt(r.offset)}\``);
      lines.push(`  - published figure is ${r.drift.kind === "shrank" ? "running LOW" : "running HIGH"} by about \`${fmt(Math.abs(r.drift.delta))}\` until the offset is re-measured.`);
    }
    lines.push("");
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

// Run only as a script. tests/watchedMetrics.test.ts imports reorderLiveRows
// from this module, and an import that ran main() fetched every live source
// inside the test suite and could write scripts/watched-metrics.json.
const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) main().catch((err) => {
  console.error("Stat refresh error:", err);
  // Exit 1, not 0. An UNREACHABLE SOURCE is already handled per-metric above
  // (status: "unavailable"), and that path is the one scripts/README documents
  // as never failing the build. Reaching here instead means the script itself
  // broke — a malformed watched-metrics.json, a bad anchor, a code fault.
  //
  // Exiting 0 on that made every failure indistinguishable from success: the
  // workflow went green, `git status --porcelain` came back empty because
  // nothing had been written, and the run reported "nothing changed". A crash
  // could have frozen all 25 live figures every 30 minutes, indefinitely,
  // without a single red tick. build-live-charts.mjs exits 1 in seven places
  // for the same reason; this is the script that writes to main UNREVIEWED,
  // so it is the last one that should fail quietly.
  process.exit(1);
});
