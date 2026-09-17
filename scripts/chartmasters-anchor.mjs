// ChartMasters re-anchor — the monthly hand step, made one command.
//
// ChartMasters' Playcounts Tool is behind a membership login and its "Export
// CSV" is a button, not a URL, so the stats bot cannot read it from Actions —
// and should not try: a fan's account logging in from a CI server every day
// is how a shared membership gets flagged. So the read is done in the site's
// own browser by a person who is signed in, captured to a small JSON file, and
// THIS script does the arithmetic and the edits that used to be done by hand:
//
//   1. pairs each ChartMasters "streams updated through" day N with kworb's
//      page stamped N+1 (kworb stamps a page with the day it was BUILT — the
//      pairing under which the gap between the two trackers sits still; see
//      docs/sourcing/CAREER-STREAMS-OFFSET.md, 17 Sep 2026), prints the pairs
//      it can make from git history, and sets the career-total offset from the
//      newest pair against kworb's page as read right now;
//   2. re-anchors the 2026 running-streams ledgers for every artist the reading
//      carries a total AND a 2025 close for (ChartMasters through N − close),
//      moving anchor, checkpoint and baseline together, dropping absorbed
//      readings, and rewriting the board rows;
//   3. appends the read to docs/sourcing/chartmasters/reads.md.
//
// HOW TO CAPTURE A READING. Sign in at chartmasters.org in the Browser pane
// (never paste the password anywhere else), open the Playcounts Tool for an
// artist and a date, and run `node scripts/chartmasters-anchor.mjs --snippet`
// to print the JavaScript that reads the page into JSON. Paste each day's
// JSON into a file shaped like docs/sourcing/chartmasters/reads/EXAMPLE.json,
// then:
//
//   node scripts/chartmasters-anchor.mjs docs/sourcing/chartmasters/reads/2026-09-17.json
//   node scripts/chartmasters-anchor.mjs --dry-run <file>   # print, write nothing
//
// The script refuses to write when the pairing it needs is missing (no kworb
// page for N+1 yet — read again tomorrow) and when the new offset moves more
// than 25M from the old one without --force, because that is a roster change
// on one side that deserves a look before it is published.

import { readFile, writeFile, appendFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import {
  extractKworbArtistPage,
  applyAnchoredReplace,
  formatStat,
  rollLedger,
  tiedRows,
} from "./stats-lib.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(dir, "..");
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const FORCE = args.includes("--force");
const OFFSET_STEP_LIMIT = 25_000_000;

// The 2025 closes the 2026 ledgers subtract from. ChartMasters' date picker
// serves only the last fifteen days, so a close is never re-readable there:
// each one is recorded with where it came from, and a ledger with no close
// here stays on kworb's dailies (its anchor is left alone).
const CLOSES_FILE = "docs/sourcing/chartmasters/closes-2025.json";

const SNIPPET = `(() => {
  const t = document.body.innerText;
  const through = (t.match(/Streams updated through ([^.]*)\\./) || [])[1];
  const total = (t.match(/\\tTotal\\t([\\d,]+)/) || [])[1];
  const name = (document.querySelector('select option[selected]') || {}).textContent;
  const id = (document.querySelector('select option[selected]') || {}).value;
  const ms = t.slice(t.indexOf('Recent Milestones'), t.indexOf('Streams Evolution')).split('\\n').map(s => s.trim()).filter(Boolean);
  const milestones = [];
  for (let i = 0; i + 3 < ms.length; i++) if (/^\\d+(\\.\\d+)?[BM]$/.test(ms[i + 1])) milestones.push({ figure: ms[i + 1], what: ms[i + 2], on: ms[i + 3] });
  return JSON.stringify({ artist: name, spotifyId: id, through, total: total && Number(total.replace(/,/g, '')), milestones }, null, 2);
})()`;

if (args.includes("--snippet")) {
  console.log("Run this in the Playcounts Tool page (javascript_tool / DevTools console), once per date:\n");
  console.log(SNIPPET);
  process.exit(0);
}

const file = args.find((a) => !a.startsWith("--"));
if (!file) {
  console.error("usage: node scripts/chartmasters-anchor.mjs [--dry-run] [--force] <reading.json> | --snippet");
  process.exit(2);
}

// ---------------------------------------------------------------------------

const MONTHS = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12 };
const isoOf = (through) => {
  // "September 15, 2026" → "2026-09-15"; an ISO date passes through.
  if (/^\d{4}-\d{2}-\d{2}$/.test(through)) return through;
  const m = /^([A-Z][a-z]+) (\d{1,2}), (\d{4})$/.exec(through.trim());
  if (!m) throw new Error(`unreadable ChartMasters date: ${through}`);
  return `${m[3]}-${String(MONTHS[m[1]]).padStart(2, "0")}-${String(m[2]).padStart(2, "0")}`;
};
const nextDay = (iso) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
};
const fmt = (n) => Math.round(n).toLocaleString("en-US");

const reading = JSON.parse(await readFile(file, "utf8"));
// Shape: { readOn, artists: { <slug>: { spotifyId, name, days: { "YYYY-MM-DD"|"Month D, YYYY": total }, milestones? } } }
if (!reading.readOn || !reading.artists) throw new Error("reading needs readOn and artists — see docs/sourcing/chartmasters/reads/EXAMPLE.json");

const configPath = path.join(repoRoot, "scripts/watched-metrics.json");
const config = JSON.parse(await readFile(configPath, "utf8"));
const closes = existsSync(path.join(repoRoot, CLOSES_FILE)) ? JSON.parse(await readFile(path.join(repoRoot, CLOSES_FILE), "utf8")) : {};
const files = new Map();
const readText = async (rel) => {
  const abs = path.join(repoRoot, rel);
  if (!files.has(abs)) files.set(abs, await readFile(abs, "utf8"));
  return files.get(abs);
};
const setText = (rel, text) => files.set(path.join(repoRoot, rel), text);
const edits = [];
const notes = [];

// kworb, read NOW, for every artist in the reading that has a ledger or is the career total.
const kworbPage = async (spotifyId) => {
  const url = `https://kworb.net/spotify/artist/${spotifyId}_songs.html`;
  const res = await fetch(url, { headers: { "user-agent": "burnaboystats-anchor/1.0 (+https://burnaboystats.com)" } });
  if (!res.ok) throw new Error(`kworb ${res.status} for ${spotifyId}`);
  const page = extractKworbArtistPage(await res.text());
  if (!page) throw new Error(`could not read kworb's stamp/total for ${spotifyId}`);
  return page; // { date, total, daily }
};

// kworb's earlier raw totals, from the bot's own commits — one per stamp.
// The bot records only its latest raw; git holds the rest.
const kworbHistoryBurna = () => {
  const out = new Map(); // stamp date → raw
  let log = "";
  try {
    log = execFileSync("git", ["log", "--format=%h", "-n", "60", "--", "scripts/watched-metrics.json"], { cwd: repoRoot, encoding: "utf8" });
  } catch { return out; }
  for (const h of log.split("\n").filter(Boolean)) {
    try {
      const js = execFileSync("git", ["show", `${h}:scripts/watched-metrics.json`], { cwd: repoRoot, encoding: "utf8", maxBuffer: 1 << 26 });
      const m = JSON.parse(js).metrics.find((x) => x.id === "streams-2026-burna");
      const st = m?.lastStamp;
      if (st?.date && st.total && !out.has(st.date)) out.set(st.date, st.total);
    } catch { /* an old shape; skip */ }
  }
  return out;
};

// ---------------------------------------------------------------------------
// 1. The career-total offset (Burna Boy only).

const burna = reading.artists["burna-boy"];
const total = config.metrics.find((m) => m.id === "spotify-total-streams");
if (burna?.days && total) {
  const days = Object.fromEntries(Object.entries(burna.days).map(([d, v]) => [isoOf(d), Number(v)]));
  const cmDates = Object.keys(days).sort();
  const hist = kworbHistoryBurna();
  const live = await kworbPage(burna.spotifyId ?? "3wcj11K77LjEY1PkEazffa");
  hist.set(live.date, live.total);
  console.log(`\nkworb, read now: page stamped ${live.date}, raw ${fmt(live.total)}, daily ${fmt(live.daily)}`);
  console.log("\nChartMasters day N  ↔  kworb page N+1        gap");
  const pairs = [];
  for (const d of cmDates) {
    const kd = nextDay(d);
    const raw = hist.get(kd);
    if (raw) {
      pairs.push({ cm: d, kw: kd, cmTotal: days[d], raw, gap: days[d] - raw });
      console.log(`  ${d}  ${fmt(days[d])}  ↔  ${kd}  ${fmt(raw)}   ${fmt(days[d] - raw)}`);
    } else {
      console.log(`  ${d}  ${fmt(days[d])}  ↔  ${kd}  (no kworb page for that stamp in the bot's history)`);
    }
  }
  const newest = pairs[pairs.length - 1];
  if (!newest) {
    console.error("\nNo pair could be made — kworb's page for the day after the newest ChartMasters day is not out yet. Read again tomorrow.");
    process.exit(1);
  }
  const step = newest.gap - (total.offset ?? 0);
  console.log(`\noffset ${fmt(total.offset ?? 0)} → ${fmt(newest.gap)} (${step >= 0 ? "+" : ""}${fmt(step)}) from the ${newest.cm} ↔ ${newest.kw} pair`);
  if (Math.abs(step) > OFFSET_STEP_LIMIT && !FORCE) {
    console.error(`\nThe offset would move ${fmt(Math.abs(step))} — more than ${fmt(OFFSET_STEP_LIMIT)}. That is a roster change on one side; read the pairs above, then re-run with --force if it is real.`);
    process.exit(1);
  }
  // Published = the raw on the page read now + the new offset. When that page
  // IS the newest pair's page, published equals ChartMasters to the unit.
  const published = live.total + newest.gap;
  total.offset = newest.gap;
  total.baseline = published;
  total.lastSeenValue = published;
  total.lastRawValue = live.total;
  total.lastChanged = reading.readOn;
  total.lastSeenAt = reading.readOn;
  for (const t of total.siteTargets) {
    const text = await readText(t.file);
    const formatted = formatStat(published, t.format);
    const res = applyAnchoredReplace(text, t.anchor, t.pattern, t.template.replace("%s", formatted));
    if (!res.applied && res.reason !== "already current") throw new Error(`${t.file}: ${res.reason}`);
    setText(t.file, res.text);
    edits.push(`${t.file}: ${res.changedFrom ?? "(same)"} → ${t.template.replace("%s", formatted)}`);
  }
  notes.push(`career total: offset ${fmt(newest.gap)} (ChartMasters through ${newest.cm} − kworb ${newest.kw}); published ${fmt(published)} on kworb's ${live.date} page`);
  for (const ms of burna.milestones ?? []) notes.push(`ChartMasters milestone: ${ms.figure} ${ms.what} — ${ms.on}`);
}

// ---------------------------------------------------------------------------
// 2. The 2026 ledgers.

const LEDGER_IDS = { "burna-boy": "streams-2026-burna", wizkid: "streams-2026-wizkid", tems: "streams-2026-tems", asake: "streams-2026-asake", tyla: "streams-2026-tyla" };
const group = config.metrics.filter((m) => m.group === "streams-2026");
let ledgerDate = null;
const anchored = [];
for (const [slug, id] of Object.entries(LEDGER_IDS)) {
  const a = reading.artists[slug];
  const m = group.find((x) => x.id === id);
  if (!a?.days || !m) continue;
  const close = closes[slug]?.close;
  if (!close) { notes.push(`${slug}: no 2025 close in ${CLOSES_FILE} — ledger left on kworb's dailies`); continue; }
  const days = Object.fromEntries(Object.entries(a.days).map(([d, v]) => [isoOf(d), Number(v)]));
  const cmDay = Object.keys(days).sort().pop();
  const kwDay = nextDay(cmDay);
  const value = days[cmDay] - close;
  const live = await kworbPage(a.spotifyId ?? m.sourceUrl.match(/artist\/([A-Za-z0-9]+)_/)[1]);
  if (live.date < kwDay) { notes.push(`${slug}: kworb's ${kwDay} page is not out yet (newest ${live.date}) — ledger left alone`); continue; }
  const source = `ChartMasters Playcounts Tool, total through ${cmDay} (${fmt(days[cmDay])}) minus the 2025 close (${fmt(close)}, ${closes[slug].source}); read ${reading.readOn}`;
  const rolled = rollLedger({ date: kwDay, value }, m.readings ?? {}, kwDay, value);
  const before = m.checkpoint;
  m.anchor = { date: kwDay, value, source };
  m.checkpoint = rolled.checkpoint;
  m.readings = rolled.readings;
  m.baseline = value;
  m.derived = (m.derived ?? []).filter((d) => d > kwDay);
  if (live.date === kwDay) m.lastStamp = { date: live.date, total: live.total, daily: live.daily };
  ledgerDate = ledgerDate == null || kwDay < ledgerDate ? kwDay : ledgerDate;
  anchored.push({ id, slug, value, kwDay });
  notes.push(`${slug}: 2026 ledger anchored at ${fmt(value)} through kworb's ${kwDay} (was ${fmt(before.value)} through ${before.date})`);
}
if (anchored.length) {
  // Rows: every member's value on the common day, sorted, joint marks by rule.
  const ranked = group.map((m) => ({ id: m.id, value: m.checkpoint.date === ledgerDate ? m.checkpoint.value : null }));
  if (ranked.some((r) => r.value == null)) {
    notes.push(`rows NOT rewritten: not every ledger reaches ${ledgerDate} (the bot publishes them together on the newest day all five cover)`);
  } else {
    ranked.sort((x, y) => y.value - x.value);
    const within = group.find((m) => m.tieWithin != null)?.tieWithin;
    const tied = tiedRows(ranked, within);
    for (const m of group) {
      const value = ranked.find((r) => r.id === m.id).value;
      for (const t of m.siteTargets) {
        const text = await readText(t.file);
        const formatted = t.field === "asOf" ? ledgerDate : `${formatStat(value, t.format)}"${tied.has(m.id) ? ", tie: true" : ""}`;
        const res = applyAnchoredReplace(text, t.anchor, t.pattern, t.template.replace("%s", formatted));
        if (!res.applied && res.reason !== "already current") throw new Error(`${t.file}: ${res.reason}`);
        setText(t.file, res.text);
        if (res.applied) edits.push(`${t.file}: ${t.anchor} ${res.changedFrom} → ${formatted}`);
      }
    }
    // The board keeps its rows sorted by value; re-order the five lines to match.
    const boardFile = group[0].siteTargets[0].file;
    let text = await readText(boardFile);
    const lines = group.map((m) => {
      const re = new RegExp(`^.*${m.siteTargets[0].anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*$`, "m");
      return { id: m.id, line: text.match(re)?.[0], value: ranked.find((r) => r.id === m.id).value };
    });
    if (lines.every((l) => l.line)) {
      // As they sit in the file today, then as they should sit.
      const inFile = [...lines].sort((x, y) => text.indexOf(x.line) - text.indexOf(y.line));
      const block = inFile.map((l) => l.line).join("\n");
      const ordered = [...lines].sort((x, y) => y.value - x.value).map((l) => l.line).join("\n");
      if (text.includes(block) && block !== ordered) {
        text = text.replace(block, ordered);
        setText(boardFile, text);
        edits.push(`${boardFile}: rows re-ordered by value`);
      } else if (!text.includes(block)) {
        notes.push("rows not re-ordered: the five live rows are not contiguous — check the board by hand");
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 3. Report, then write.

console.log("\nEdits:");
for (const e of edits) console.log(`  • ${e}`);
console.log("\nNotes:");
for (const n of notes) console.log(`  • ${n}`);

if (DRY) {
  console.log("\n--dry-run: nothing written.");
  process.exit(0);
}
for (const [abs, text] of files) await writeFile(abs, text);
await writeFile(configPath, JSON.stringify(config, null, 2) + "\n");
await mkdir(path.join(repoRoot, "docs/sourcing/chartmasters"), { recursive: true });
const logPath = path.join(repoRoot, "docs/sourcing/chartmasters/reads.md");
if (!existsSync(logPath)) await writeFile(logPath, "# ChartMasters reads\n\nOne block per run of scripts/chartmasters-anchor.mjs — what was read, what was paired, what moved.\n");
await appendFile(logPath, `\n## ${reading.readOn}\n\n${notes.map((n) => `- ${n}`).join("\n")}\n${edits.map((e) => `- edit: ${e}`).join("\n")}\n`);
console.log(`\nWritten. Now: npm run verify, then commit with the reading file (${path.relative(repoRoot, path.resolve(file))}).`);
