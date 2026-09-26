#!/usr/bin/env node
// The plaque radar — a PRIVATE, run-by-hand list of titles likely due a new
// certification in the markets whose registers can't be read automatically
// (UK BPI, South Africa RiSA, Australia ARIA, Portugal AFP).
//
//   node scripts/plaque-radar/index.mjs                 # every market, online
//   node scripts/plaque-radar/index.mjs --market UK     # one market
//   node scripts/plaque-radar/index.mjs --offline       # saved pages only
//
// Writes ~/burnaboy-work/radar/radar-<YYYY-MM-DD>.md and prints a summary.
// It never runs on a schedule, never touches the site's data, and never
// requests a certification register. See README.md beside this file.

import "./ts-hook.mjs";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { loadSite, MARKETS } from "./site.mjs";
import { loadSavedPages, fetchNewerPages, THREADS } from "./buzzjack.mjs";
import { parsePosts } from "./lists.mjs";
import { artistsInCredit, artistAliases } from "./normalize.mjs";
import { createClient } from "./net.mjs";
import { fetchOcc, occFromSaved } from "./occ.mjs";
import { rankAll } from "./rank.mjs";
import { renderReport, renderSummary } from "./report.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const HELP = `Plaque radar — titles likely due a new plaque (private; estimates only).

  node scripts/plaque-radar/index.mjs [--market UK|ZA|AU|PT] [--offline]

  --market M     one market (repeat or comma-separate for several); default all
  --offline      no network: saved BuzzJack pages and the site's own data only
  --as-of DATE   judge as of this date (YYYY-MM-DD); default today
  --top N        how many UK titles to list (default 10)
  --out DIR      where the report goes (default ~/burnaboy-work/radar)
  --buzzjack DIR saved BuzzJack pages (default ~/burnaboy-work/buzzjack)`;

function parseArgs(argv) {
  const a = { markets: [], offline: false, asOf: null, top: 10, out: join(homedir(), "burnaboy-work/radar"), buzzjack: join(homedir(), "burnaboy-work/buzzjack") };
  for (let i = 0; i < argv.length; i++) {
    const [flag, inline] = argv[i].split("=");
    const val = () => inline ?? argv[++i];
    if (flag === "--help" || flag === "-h") a.help = true;
    else if (flag === "--offline") a.offline = true;
    else if (flag === "--market") a.markets.push(...val().split(",").map((m) => m.trim().toUpperCase()));
    else if (flag === "--as-of") a.asOf = val();
    else if (flag === "--top") a.top = Number(val());
    else if (flag === "--out") a.out = val();
    else if (flag === "--buzzjack") a.buzzjack = val();
    else throw new Error(`unknown option ${argv[i]}\n\n${HELP}`);
  }
  a.markets = a.markets.map((m) => (m === "GB" ? "UK" : m));
  if (!a.markets.length || a.markets.includes("ALL")) a.markets = [...MARKETS];
  const bad = a.markets.filter((m) => !MARKETS.includes(m));
  if (bad.length) throw new Error(`unknown market ${bad.join(", ")} — use ${MARKETS.join(", ")}`);
  if (a.asOf && !/^\d{4}-\d{2}-\d{2}$/.test(a.asOf)) throw new Error("--as-of wants YYYY-MM-DD");
  if (!Number.isInteger(a.top) || a.top < 1) throw new Error("--top wants a whole number");
  return a;
}

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function repoState() {
  try {
    const sha = execFileSync("git", ["-C", ROOT, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
    const branch = execFileSync("git", ["-C", ROOT, "rev-parse", "--abbrev-ref", "HEAD"], { encoding: "utf8" }).trim();
    const dirty = execFileSync("git", ["-C", ROOT, "status", "--porcelain", "--", "app/data", "docs/sweeps"], { encoding: "utf8" }).trim();
    return `${branch} @ ${sha}${dirty ? " (with uncommitted data edits)" : ""}`;
  } catch {
    return "the working tree";
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) return console.log(HELP);
  const asOf = args.asOf ?? today();
  const netLog = [];
  const log = (s) => netLog.push(s);

  const site = await loadSite(ROOT);

  // This week's Official Charts pages are kept beside the report, one file per
  // chart and day, so an --offline re-run the same day still has them.
  const occDir = join(args.out, "occ");
  const occFile = (id) => join(occDir, `${asOf}-${id}.html`);
  let occ = [];
  let occNote = "not needed for these markets";
  if (args.markets.includes("UK") && !args.offline) {
    const client = createClient({ log });
    const year = Number(asOf.slice(0, 4));
    const pages = await fetchNewerPages({ dir: args.buzzjack, year, get: client.get });
    netLog.push(...pages.map((p) => `BuzzJack ${year} ${p}`));
    mkdirSync(occDir, { recursive: true });
    occ = await fetchOcc(client.get, (s) => netLog.push(`OCC ${s}`), (id, html) => writeFileSync(occFile(id), html));
    const weeks = [...new Set(occ.map((o) => o.week).filter(Boolean))];
    occNote = occ.length ? `read this week's charts (${weeks.join("; ") || "week not printed"})` : "not read — see the network line";
    if (!THREADS[year]) netLog.push(`no BuzzJack thread id for ${year}`);
  } else if (args.markets.includes("UK")) {
    occ = occFromSaved((id) => (existsSync(occFile(id)) ? readFileSync(occFile(id), "utf8") : null));
    const weeks = [...new Set(occ.map((o) => o.week).filter(Boolean))];
    occNote = occ.length ? `offline — the copies an online run saved today (${weeks.join("; ")})` : "not read (offline, and no copy saved today)";
  }

  const { posts } = loadSavedPages(args.buzzjack);
  const entries = parsePosts(posts);
  const ranked = rankAll({ site, entries, occ, asOf, markets: args.markets, top: args.top });

  const aliases = artistAliases(site.artists);
  const inputs = {
    repo: repoState(),
    artists: site.artists.length,
    releases: site.releases.length,
    ukPlaques: site.releases.filter((r) => r.certs.some((c) => c.c === "UK")).length,
    lists: ranked.coverage.byWeek ? [...ranked.coverage.byWeek.keys()].filter((d) => d >= "2022-01-01").length : 0,
    ourRows: entries.filter((e) => artistsInCredit(e.credit, aliases).length).length,
    occ: occNote,
    liveUpdated: site.liveUpdated,
    thresholds: site.thresholds,
    netLog,
  };
  const argsText = process.argv.slice(2).join(" ");
  const md = renderReport({ asOf, markets: args.markets, ranked, inputs, offline: args.offline, argsText });
  mkdirSync(args.out, { recursive: true });
  const file = join(args.out, `radar-${asOf}.md`);
  writeFileSync(file, md);
  console.log(renderSummary({ file, ranked, markets: args.markets }));
}

main().catch((err) => {
  console.error(`plaque radar: ${err.message}`);
  process.exit(1);
});
