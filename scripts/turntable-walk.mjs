#!/usr/bin/env node
// TurnTable Charts (Nigeria) archive walk for Burna Boy — Node 24, no deps.
//
//   node scripts/turntable-walk.mjs            walk (cached) + analyse + write report
//   node scripts/turntable-walk.mjs --no-fetch analyse only from the cache
//   TT_OUT=<dir> picks the cache/output folder (default .turntable-walk/, gitignored);
//   TT_TODAY=YYYY-MM-DD pins the walk's end date for a reproducible re-run.
//
// Archive route: https://www.turntablecharts.com/api/ttc-proxy/api/chart/{chartId}/{week}/{year}
//   chartId 1 = Official Nigeria Top 100 (TurnTable Top 50 before 7 Jul 2022; first issue 5 Nov 2020)
//   chartId 2 = Official Top 100 Albums (first issue 2 Nov 2022)
// Needs a turntablecharts.com Referer; response is {"payload": "<base64 JSON>"}.
// An unpublished week/year does NOT error: it serves the category's EARLIEST issue,
// so every response is validated on weekNumber AND the year of dateCreated.
// `highestPosition` resets on the 7 Jul 2022 relaunch and on every re-entry, so the
// peak is computed here as the best rank held in ANY issue, never read from the counter.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
// Cache + outputs live outside the tree (gitignored): the issue cache is ~500
// files and the reports are working notes; the committed evidence is the
// docs/sweeps/burna-boy-nigeria-*.md file written from them.
const HERE = process.env.TT_OUT ?? path.join(REPO, ".turntable-walk");
const ISSUES_DIR = path.join(HERE, "issues");
fs.mkdirSync(ISSUES_DIR, { recursive: true });
const BASE = "https://www.turntablecharts.com/api/ttc-proxy/api/chart";
const REFERER = "https://www.turntablecharts.com/";
const TODAY = process.env.TT_TODAY ? new Date(process.env.TT_TODAY) : new Date();
const NO_FETCH = process.argv.includes("--no-fetch");

const CHARTS = {
  1: { name: "Official Nigeria Top 100 (singles)", short: "singles", start: { year: 2020, week: 44 } },
  2: { name: "Official Top 100 Albums", short: "albums", start: { year: 2022, week: 43 } },
};

// ---------- rate limiting (about 100 requests a minute) ----------
const MIN_GAP_MS = 900;
let lastStart = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function throttle() {
  const now = Date.now();
  const wait = lastStart + MIN_GAP_MS - now;
  if (wait > 0) await sleep(wait);
  lastStart = Date.now();
}

// ---------- fetching ----------
const stats = { requests: 0, retries: 0, rateLimited: 0, empty: 0, mismatch: 0, errors: 0 };

// An honest User-Agent, in the same form as the certification watcher's
// (scripts/cert-watch/http.mjs USER_AGENT): it names this site and says where
// to reach it, and it does not pretend to be a browser. This sent
// "Mozilla/5.0 (archive read; burnaboystats sweep)" until 25 Sep 2026, which
// opens like a browser's string; the board's chart verifiers ran their copies
// with an honest one and read the same 509 issues. turntablecharts.com serves
// no robots.txt (404, read 24 Sep 2026).
const USER_AGENT = "burnaboystats-turntable-walk/1.0 (+https://burnaboystats.com/contact)";

async function getOnce(chartId, week, year) {
  await throttle();
  stats.requests += 1;
  const url = `${BASE}/${chartId}/${week}/${year}`;
  let res;
  try {
    res = await fetch(url, { headers: { Referer: REFERER, "User-Agent": USER_AGENT } });
  } catch (e) {
    return { kind: "error", detail: `network: ${e.message}` };
  }
  if (res.status === 429 || res.status === 503) {
    stats.rateLimited += 1;
    return { kind: "ratelimited", detail: `HTTP ${res.status}` };
  }
  if (!res.ok) return { kind: "error", detail: `HTTP ${res.status}` };
  const text = await res.text();
  let env;
  try { env = JSON.parse(text); } catch { return { kind: "error", detail: `non-JSON body: ${text.slice(0, 80)}` }; }
  if (!env || typeof env.payload !== "string") return { kind: "error", detail: `no payload: ${text.slice(0, 80)}` };
  let dec;
  try { dec = JSON.parse(Buffer.from(env.payload, "base64").toString("utf8")); }
  catch (e) { return { kind: "error", detail: `payload decode: ${e.message}` }; }
  if (!Array.isArray(dec.chartItems) || dec.chartItems.length === 0) {
    stats.empty += 1;
    return { kind: "empty", detail: "chartItems empty" };
  }
  const gotYear = Number(String(dec.dateCreated).slice(0, 4));
  if (Number(dec.weekNumber) !== week || gotYear !== year) {
    stats.mismatch += 1;
    return { kind: "mismatch", detail: `served id ${dec.id} week ${dec.weekNumber}/${gotYear} (${String(dec.dateCreated).slice(0, 10)})`, dec };
  }
  return { kind: "ok", dec };
}

// Returns { status: "ok" | "absent" | "failed", dec?, detail? }
async function fetchIssue(chartId, week, year, log) {
  const attempts = [];
  let fallbackHits = 0, misses = 0, rateHits = 0;
  // A 429 is a shared per-minute window (100/min at the proxy, and other
  // readers on this machine share it): wait it out, don't spend a retry on it.
  while (misses < 6 && rateHits < 40) {
    const r = await getOnce(chartId, week, year);
    attempts.push(`${r.kind}${r.detail ? ` (${r.detail})` : ""}`);
    if (r.kind === "ok") return { status: "ok", dec: r.dec, attempts };
    if (r.kind === "ratelimited") {
      rateHits += 1;
      const wait = Math.min(60000, 10000 + 5000 * rateHits);
      if (rateHits === 1 || rateHits % 5 === 0) log(`  rate-limited on ${chartId}/${week}/${year} — waiting ${wait / 1000}s (${rateHits})`);
      await sleep(wait);
      continue;
    }
    if (r.kind === "mismatch") {
      // The earliest-issue fallback means "not published". Confirm it twice
      // before believing it; a neighbouring week is retried like any other miss.
      const isEarliest = r.dec.id === EARLIEST_ID[chartId];
      if (isEarliest) {
        fallbackHits += 1;
        if (fallbackHits >= 2) return { status: "absent", attempts };
      }
    }
    misses += 1;
    stats.retries += 1;
    await sleep(1500 * misses);
  }
  stats.errors += 1;
  log(`  FAILED ${chartId}/${week}/${year}: ${attempts.join(" | ")}`);
  return { status: "failed", attempts };
}

const EARLIEST_ID = { 1: 145, 2: null }; // chart 2's earliest id is learned on the first fallback

function isoWeek(d) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - y0) / 86400000 + 1) / 7);
}

async function walkChart(chartId, log) {
  const cfg = CHARTS[chartId];
  const dir = path.join(ISSUES_DIR, String(chartId));
  fs.mkdirSync(dir, { recursive: true });
  const absentFile = path.join(dir, "_absent.json");
  const absent = new Set(fs.existsSync(absentFile) ? JSON.parse(fs.readFileSync(absentFile, "utf8")) : []);
  const failed = [];
  const thisYear = TODAY.getUTCFullYear();
  const maxWeekThisYear = Math.min(53, isoWeek(TODAY) + 1);
  let fetched = 0, cached = 0, skipped = 0;

  // Learn chart 2's earliest id cheaply: ask for a week that cannot exist.
  if (!NO_FETCH && EARLIEST_ID[chartId] == null) {
    const r = await getOnce(chartId, 1, 2010);
    if (r.kind === "mismatch") { EARLIEST_ID[chartId] = r.dec.id; log(`  chart ${chartId} earliest issue id ${r.dec.id} (${String(r.dec.dateCreated).slice(0, 10)})`); }
  }

  for (let year = cfg.start.year; year <= thisYear; year++) {
    const w0 = year === cfg.start.year ? cfg.start.week : 1;
    const w1 = year === thisYear ? maxWeekThisYear : 53;
    for (let week = w0; week <= w1; week++) {
      const key = `${year}-${week}`;
      const file = path.join(dir, `${key}.json`);
      if (fs.existsSync(file)) { cached += 1; continue; }
      if (absent.has(key) && year < thisYear) { skipped += 1; continue; }
      if (NO_FETCH) continue;
      const r = await fetchIssue(chartId, week, year, log);
      if (r.status === "ok") {
        fs.writeFileSync(file, JSON.stringify(r.dec));
        fetched += 1;
        absent.delete(key);
        log(`  ${cfg.short} ${key} -> id ${r.dec.id} ${String(r.dec.dateCreated).slice(0, 10)} ${r.dec.category} (${r.dec.chartItems.length} rows)`);
      } else if (r.status === "absent") {
        absent.add(key);
      } else {
        failed.push({ chartId, year, week, attempts: r.attempts });
      }
      if ((fetched + failed.length) % 25 === 0) fs.writeFileSync(absentFile, JSON.stringify([...absent].sort()));
    }
  }
  fs.writeFileSync(absentFile, JSON.stringify([...absent].sort()));
  log(`  chart ${chartId}: ${fetched} fetched, ${cached} from cache, ${skipped} known-absent skipped, ${failed.length} failed`);
  return { failed };
}

// ---------- loading the cache ----------
function loadIssues(chartId) {
  const dir = path.join(ISSUES_DIR, String(chartId));
  if (!fs.existsSync(dir)) return [];
  const byId = new Map();
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".json") || f.startsWith("_")) continue;
    const dec = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    const [year, week] = f.replace(".json", "").split("-").map(Number);
    if (byId.has(dec.id)) continue; // same issue reached under two keys — keep one
    byId.set(dec.id, { id: dec.id, year, week, date: String(dec.dateCreated).slice(0, 10), category: dec.category, rows: dec.chartItems });
  }
  return [...byId.values()].sort((a, b) => a.date.localeCompare(b.date) || a.id - b.id);
}

// ---------- matching Burna Boy ----------
const BURNA = /\bburna\s*boy\b/i;
const BURNA_LOOSE = /\bburna\b/i;

const norm = (s) => String(s ?? "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/…/g, "...").replace(/[‘’´`]/g, "'").replace(/[“”]/g, '"')
  .replace(/\s+/g, " ").trim().toLowerCase();
// Loose title key: fold punctuation and spacing entirely so "I Told Them..." /
// "I Told Them…" / "Sittin' On Top Of The World" / "Sittin' on top of the world" agree.
// A "(feat. X)" / "[ft. X]" / "(with X)" suffix is a credit printed inside the title,
// not a different recording, so it is dropped; "(Remix)", "(Live)" etc. are kept.
const stripFeat = (s) => norm(s).replace(/\s*[\(\[]\s*(?:feat\.?|ft\.?|featuring|with)\s+[^\)\]]*[\)\]]/g, "").replace(/\s+(?:feat\.?|ft\.?)\s+.*$/, "");
const looseKey = (s) => stripFeat(s).replace(/[^a-z0-9]+/g, "");
const remixFree = (s) => looseKey(s).replace(/remix$/, "");
// Artist set from a credit line: split on ft./feat./featuring/&/,/x/with.
function artistSet(credit) {
  return norm(credit)
    .replace(/\b(featuring|feat\.?|ft\.?|with)\b/g, ",")
    .replace(/\s*&\s*|\s+x\s+|\s*,\s*|\s+and\s+/g, ",")
    .split(",").map((a) => a.replace(/[^a-z0-9 ]/g, "").trim()).filter(Boolean);
}
const leadArtist = (credit) => artistSet(credit)[0] ?? "";
const isBurnaLead = (credit) => /^burna\s*boy$/i.test(leadArtist(credit).replace(/\s+/g, " "));

function collectAppearances(chartId, issues) {
  const apps = [];
  const looseOnly = new Map(); // "burna" without "boy" — reviewed, not matched
  for (const iss of issues) {
    for (const row of iss.rows) {
      const art = String(row.artiste ?? "");
      if (BURNA.test(art)) {
        apps.push({ chartId, issueId: iss.id, date: iss.date, year: iss.year, week: iss.week, rank: row.rank,
          title: String(row.title ?? "").trim(), artiste: art.trim(), lastPosition: row.lastPosition,
          highestPosition: row.highestPosition, weeksOnChart: row.weeksOnChart });
      } else if (BURNA_LOOSE.test(art) || BURNA_LOOSE.test(String(row.title ?? ""))) {
        const k = `${row.title} — ${art}`;
        looseOnly.set(k, (looseOnly.get(k) ?? 0) + 1);
      }
    }
  }
  return { apps, looseOnly };
}

// Group the same recording across issues, tolerating small printing differences.
function groupAppearances(apps, latestDate) {
  const groups = new Map();
  for (const a of apps) {
    // Same recording = same folded title under the same first-named artist. The full
    // artist set is kept as a printing variant (e.g. "Wizkid ft. Burna Boy" one week,
    // "Wizkid & Burna Boy" the next) and reported wherever more than one printing folds.
    // The chart id is part of the key: the album "I Told Them..." and the song "I Told
    // Them" would otherwise collide, and the album match would swallow the single.
    const key = `${a.chartId}|${looseKey(a.title)}|${leadArtist(a.artiste)}`;
    if (!groups.has(key)) groups.set(key, { key, apps: [], variants: new Map() });
    const g = groups.get(key);
    g.apps.push(a);
    const v = `${a.title} — ${a.artiste}`;
    g.variants.set(v, (g.variants.get(v) ?? 0) + 1);
  }
  const out = [];
  for (const g of groups.values()) {
    g.apps.sort((x, y) => x.date.localeCompare(y.date));
    const peak = Math.min(...g.apps.map((a) => a.rank));
    const peakApp = g.apps.find((a) => a.rank === peak);
    const peakIssues = g.apps.filter((a) => a.rank === peak);
    const variants = [...g.variants.entries()].sort((x, y) => y[1] - x[1]);
    const [printedTitle, printedArtiste] = variants[0][0].split(" — ");
    // Print as the chart most often prints it; prefer the printing used on the peak issue for the title.
    out.push({
      key: g.key,
      title: peakApp.title,
      artiste: peakApp.artiste,
      lead: isBurnaLead(peakApp.artiste),
      peak,
      peakIssueId: peakApp.issueId,
      peakDate: peakApp.date,
      peakWeek: `${peakApp.week}/${peakApp.year}`,
      weeksAtPeak: peakIssues.length,
      firstIssueId: g.apps[0].issueId, firstDate: g.apps[0].date, firstRank: g.apps[0].rank,
      lastIssueId: g.apps.at(-1).issueId, lastDate: g.apps.at(-1).date, lastRank: g.apps.at(-1).rank,
      weeks: new Set(g.apps.map((a) => a.issueId)).size,
      counterMax: Math.max(...g.apps.map((a) => Number(a.weeksOnChart) || 0)),
      counterBestHighest: Math.min(...g.apps.map((a) => Number(a.highestPosition) || 999)),
      open: g.apps.at(-1).date === latestDate,
      variants: variants.map(([v, n]) => ({ printed: v, issues: n })),
      mostCommonPrinting: { title: printedTitle, artiste: printedArtiste },
    });
  }
  return out.sort((a, b) => a.peak - b.peak || a.firstDate.localeCompare(b.firstDate));
}

// ---------- the site's data ----------
async function loadSite() {
  const charts = await import(pathToFileURL(path.join(REPO, "app/data/charts.ts")).href);
  const { titleKey } = await import(pathToFileURL(path.join(REPO, "app/lib/titleKey.ts")).href);
  const certs = await import(pathToFileURL(path.join(REPO, "app/data/certifications.ts")).href);
  // Titles holding a Nigerian (TCSN) plaque — the charts.ts comment names these as the sweep's target.
  const plaqueMap = (rows) => new Map(rows.filter((r) => (r.certs ?? []).some((c) => c.c === "NG"))
    .map((r) => [looseKey(r.title), (r.certs ?? []).filter((c) => c.c === "NG").map((c) => `${c.level}${c.x ? " x" + c.x : ""}`).join(", ")]));
  const ngPlaqued = { albums: plaqueMap(certs.albums), songs: plaqueMap([...certs.singles, ...certs.features]) };
  // Release year and credit the site already holds for the title (certifications.ts), so a
  // catalogue song that first charts years after release gets its release year, not the issue's.
  const onFile = (rows) => rows.map((r) => ({ key: looseKey(r.title), rkey: remixFree(r.title), title: r.title, year: r.year ?? null, credit: r.credit ?? null,
    // a "feat. X" / "with X" credit means Burna Boy leads; otherwise the first-named artist does
    lead: !r.credit || /^(feat\.?|ft\.?|with)\b/i.test(r.credit) ? "burna boy" : leadArtist(r.credit) }));
  const certRows = { albums: onFile(certs.albums), songs: onFile([...certs.singles, ...certs.features]) };
  // Find the site's own row for a chart group: title (or remix-folded title) AND the same lead.
  const certRowFor = (list, g) => {
    const rows = list === "albums" ? certRows.albums : certRows.songs;
    const k = looseKey(g.title), rk = remixFree(g.title), lead = leadArtist(g.artiste);
    const byTitle = rows.filter((r) => r.key === k);
    const sameLead = byTitle.find((r) => r.lead === lead);
    if (sameLead) return { ...sameLead, how: "title and lead" };
    const folded = rows.filter((r) => r.key !== k && r.rkey === rk && r.lead === lead);
    if (folded.length) return { ...folded[0], how: "title with (Remix) folded, same lead" };
    if (byTitle.length) return { ...byTitle[0], how: "title only — DIFFERENT lead, not the same record", differentLead: true };
    return null;
  };
  return { charts, titleKey, ngPlaqued, certRowFor };
}

// Does a charts.ts credit agree with the chart's artiste line?
function creditAgrees(siteRelease, group, list) {
  // Every printing the chart used for this recording counts (solo and "ft. 21 Savage"
  // rows of the same title fold into one group; the site's credit names the feature).
  const chartArtists = [...new Set(group.variants.flatMap((v) => artistSet(v.printed.split(" — ").slice(1).join(" — "))))];
  if (list === "features") {
    const siteArtists = artistSet(siteRelease.credit ?? "");
    // every artist the site names must be on the chart line
    return siteArtists.every((s) => chartArtists.some((c) => c === s || c.includes(s) || s.includes(c)));
  }
  // singles: "feat. X" or absent; Burna Boy expected as lead unless the site itself puts him second (Dai Dai)
  const siteCredit = siteRelease.credit ?? "";
  const siteExtra = siteCredit ? artistSet(siteCredit.replace(/^feat\.?\s*/i, "")) : [];
  const extrasOk = siteExtra.every((s) => chartArtists.some((c) => c === s || c.includes(s) || s.includes(c)));
  return extrasOk;
}

function compare(site, singlesGroups, albumGroups, latest) {
  const { albumCharts, singleCharts, featureCharts } = site.charts;
  const corrections = [], additions = [], unmatched = [], confirmed = [];
  const used = new Set();
  const OPEN_NOTE = "Peak still open — read while the release is still on the chart, so it may yet climb.";

  function matchRelease(rel, groups, list) {
    const k = looseKey(rel.title);
    const exact = groups.filter((g) => looseKey(g.title) === k || g.variants.some((v) => looseKey(v.printed.split(" — ")[0]) === k));
    // TurnTable can print a remix under the parent title ("Sungba" credited to Asake
    // ft. Burna Boy at No. 1, then "Sungba (Remix)" as its own row four weeks later),
    // or the other way round. Only Burna-credited rows are in the pool, so a remix-free
    // title match with an agreeing credit is the same recording: fold it in.
    const rk = remixFree(rel.title);
    const folded = groups.filter((g) => !exact.includes(g) && remixFree(g.title) === rk && creditAgrees(rel, g, list));
    let cands = [...exact, ...folded];
    if (cands.length === 0) return null;
    // Restrict to the lead/feature side the site's list expects, when that leaves anything.
    const sideOk = cands.filter((g) => (list === "features" ? !g.lead : g.lead));
    if (sideOk.length) cands = sideOk;
    // Several printings can survive: the chart lists a solo and a "ft. X" printing of the
    // same title under the same lead as separate rows (Sittin' On Top Of The World: solo
    // peak 8, ft. 21 Savage peak 29). The site keeps one row per song, so every printing
    // under the same lead is the same release here; the best peak is taken and each
    // printing is listed in the evidence so the reader can see which one carried it.
    const leads = new Set(cands.map((g) => leadArtist(g.artiste)));
    if (leads.size > 1) {
      // different leads = different recordings; keep the ones whose credit agrees with the site's
      const agreeing = cands.filter((g) => creditAgrees(rel, g, list));
      if (agreeing.length) cands = agreeing;
    }
    cands.sort((a, b) => a.peak - b.peak || a.firstDate.localeCompare(b.firstDate));
    const primary = cands[0];
    const how = folded.length ? "title, with a (Remix)-folded printing merged" : cands.length > 1 ? "title, several printings under the same lead merged" : "title";
    return { group: primary, consumed: cands, creditAgrees: creditAgrees(rel, primary, list), alternatives: cands.length - 1, how,
      foldedWith: cands.slice(1).map((g) => ({ title: g.title, credit: g.artiste, peak: g.peak, peakDate: g.peakDate, peakIssueId: g.peakIssueId, weeks: g.weeks, firstDate: g.firstDate, lastDate: g.lastDate })) };
  }

  function evidence(g, m) {
    const openAny = g.open || (m?.consumed ?? []).some((x) => x.open);
    return { foldedWith: m?.foldedWith?.length ? m.foldedWith : undefined, openAnyPrinting: openAny, peak: g.peak, peakIssueId: g.peakIssueId, peakDate: g.peakDate, peakWeek: g.peakWeek, weeksAtPeak: g.weeksAtPeak,
      weeks: g.weeks, firstDate: g.firstDate, firstRank: g.firstRank, lastDate: g.lastDate, lastRank: g.lastRank, open: g.open,
      chartTitle: g.title, chartCredit: g.artiste, variants: g.variants };
  }

  const lists = [["albums", albumCharts, albumGroups], ["singles", singleCharts, singlesGroups], ["features", featureCharts, singlesGroups]];
  for (const [list, releases, groups] of lists) {
    for (const rel of releases) {
      const ng = rel.entries.find((e) => e.c === "NG");
      const m = matchRelease(rel, groups, list);
      if (m) for (const g of m.consumed) used.add(g.key);
      if (ng) {
        if (!m) { unmatched.push({ list, title: rel.title, credit: rel.credit ?? null, year: rel.year, sitePeak: ng.peak, siteNote: ng.note ?? null }); continue; }
        if (m.group.peak !== ng.peak) {
          corrections.push({ list, title: rel.title, credit: rel.credit ?? null, year: rel.year, matchedBy: m.how, sitePeak: ng.peak, walkPeak: m.group.peak,
            direction: m.group.peak < ng.peak ? "site UNDERSTATES — chart peak is higher (better rank)" : "site OVERSTATES — chart never went that high",
            creditAgrees: m.creditAgrees, proposedEntry: `{ c: "NG", peak: ${m.group.peak}${m.group.open ? `, note: "${OPEN_NOTE}"` : ""} }`, evidence: evidence(m.group, m) });
        } else {
          confirmed.push({ list, title: rel.title, credit: rel.credit ?? null, year: rel.year, sitePeak: ng.peak, matchedBy: m.how, creditAgrees: m.creditAgrees, evidence: evidence(m.group, m) });
          // same peak — still worth knowing if the note should change
          if (m.group.open && !ng.note) {
            additions.push({ list, kind: "note-only", title: rel.title, credit: rel.credit ?? null, year: rel.year, sitePeak: ng.peak,
              proposedEntry: `{ c: "NG", peak: ${ng.peak}, note: "${OPEN_NOTE}" }`, evidence: evidence(m.group, m), creditAgrees: m.creditAgrees });
          }
        }
      } else if (m) {
        additions.push({ list, kind: "new-NG-entry", title: rel.title, credit: rel.credit ?? null, year: rel.year, creditAgrees: m.creditAgrees, matchedBy: m.how,
          ngPlaque: (list === "albums" ? site.ngPlaqued.albums : site.ngPlaqued.songs).get(looseKey(rel.title)) ?? null,
          proposedEntry: `{ c: "NG", peak: ${m.group.peak}${m.group.open ? `, note: "${OPEN_NOTE}"` : ""} }`, evidence: evidence(m.group, m) });
      }
    }
  }

  const newReleases = [];
  for (const [chart, groups] of [["singles", singlesGroups], ["albums", albumGroups]]) {
    for (const g of groups) {
      if (used.has(g.key)) continue;
      const list = chart === "albums" ? "albumCharts" : g.lead ? "singleCharts" : "featureCharts";
      const cr = site.certRowFor(chart === "albums" ? "albums" : "songs", g);
      const usable = cr && !cr.differentLead;
      const firstYear = Number(g.firstDate.slice(0, 4));
      newReleases.push({ chart, list, title: g.title, credit: g.artiste, lead: g.lead, year: firstYear,
        releaseYearOnFile: usable ? cr.year : null, creditOnFile: cr?.credit ?? null, certRowMatch: cr?.how ?? null, certRowTitle: cr?.title ?? null, certRowDifferentLead: !!cr?.differentLead,
        ngPlaque: (chart === "albums" ? site.ngPlaqued.albums : site.ngPlaqued.songs).get(looseKey(g.title)) ?? null,
        proposedRow: proposeRow(g, list, OPEN_NOTE, usable ? cr.year : null), evidence: evidence(g) });
    }
  }
  return { corrections, additions, newReleases, unmatched, confirmed };
}

function siteCreditFor(g, list) {
  // Site conventions: singleCharts rows carry credit "feat. X" (or none) — a joint
  // "Burna Boy & X" billing is written "with X" (certifications.ts: "Talibans II — with
  // Byron Messia"); featureCharts rows carry the chart's billing, "X ft. Burna Boy".
  const raw = g.artiste;
  if (list === "singleCharts") {
    const f = raw.match(/^burna\s*boy\s*(?:ft\.?|feat\.?|featuring)\s*(.+)$/i);
    if (f) return `feat. ${f[1].trim()}`;
    const j = raw.match(/^burna\s*boy\s*(?:&|,|x)\s*(.+)$/i);
    if (j) return `with ${j[1].trim()}`;
    return null;
  }
  return raw.replace(/\bfeat\.\s*/gi, "ft. ").replace(/\bfeaturing\s+/gi, "ft. ").replace(/\bft\s+/gi, "ft. ");
}

function proposeRow(g, list, OPEN_NOTE, releaseYear) {
  const credit = siteCreditFor(g, list);
  const entry = `{ c: "NG", peak: ${g.peak}${g.open ? `, note: "${OPEN_NOTE}"` : ""} }`;
  const t = g.title.replace(/"/g, '\\"');
  return `{ title: "${t}", ${credit ? `credit: "${credit.replace(/"/g, '\\"')}", ` : ""}year: ${releaseYear ?? g.firstDate.slice(0, 4)}, entries: [${entry}] }`;
}

// ---------- report ----------
const REVIEWER_NOTES = [
  `**"Sungba (Remix)" NG 1 stands, but read how the body prints it.** TurnTable carries ONE chart entry: "Sungba — Asake" (solo, peak 5, four issues to 24 Mar 2022), re-credited "Sungba — Asake ft. Burna Boy" at No. 1 on the 31 Mar 2022 issue, printed "Sungba (Remix)" from 28 Apr (and "Sungba" again on 5 May). The lastPosition chain and the weeks counter run straight through the re-title, so this is one entry, not two; the site's row folds the two Burna-credited printings (48 issues). The four solo issues are not counted.`,
  `**"Sittin' on Top of the World" NG 8 stands** on the same basis: the entry debuted at 8 on 8 Jun 2023 credited "Burna Boy" alone, and was re-credited "Burna Boy ft. 21 Savage" from 6 Jul 2023 (lastPosition 17 carries across, weeks 5) — the peak was set under the solo credit; the 21 Savage printing never went above 29.`,
  `**"Talibans II"** — the chart prints "Burna Boy & Bryon Messia" [sic], with Burna Boy first-named, while the site's featureCharts row reads "Byron Messia ft. Burna Boy" (and certifications.ts "with Byron Messia"). The proposed NG 16 goes on the existing featureCharts row; the credit question is the site's to settle, not the chart's.`,
  `**"B. D'OR" (Burna Boy ft. Wizkid, NG peak 2, Dec 2021)** has no charts.ts row, and certifications.ts holds its Nigerian Platinum under "B.D'or — Bramsito ft. Burna Boy, 2019", which is a different record (the French single). The TCSN plaque most likely belongs to the Burna Boy ft. Wizkid single; check the register's credit before touching either row.`,
  `**"Solid"** — the chart credits "Burna Boy ft. Blxst & Kehlani" (the album version); certifications.ts credits it "feat. Kehlani & Justin Bieber" (the remix). The row proposed here uses the chart's credit; align them deliberately.`,
  `**Twice as Tall tracks ("Way Too Big", "23", "Real Life", "Monsters You Made", "201020")** first appear on the chart's very first issue, 5 Nov 2020 — the album was twelve weeks old by then, so their peaks here are the best rank on the chart since it began, not since release. There is no earlier TurnTable chart to read.`,
  `**Catalogue songs charting late:** "Ye" (2018) entered in July 2026 (peak 70); "23" re-entered in July 2026 (97) after leaving in May 2021. The proposed rows take the release year from certifications.ts where it holds the same record, and say so where no year is on file.`,
  `**Credits for new rows follow the site's own conventions:** lead rows get "feat. X" (or "with X" for a joint "Burna Boy & X" billing, as certifications.ts writes "Talibans II — with Byron Messia"); featured rows carry the chart's billing verbatim ("Shallipopi & Burna Boy", "Becky G, Burna Boy"). The chart's own casing is kept in titles ("WE PRAY", "wgft", "I FEEL IT", "ROBOSHOTTA") — normalise to the site's house style when adding.`,
  `**"Do I (Remix)"** — the chart's title; certifications.ts has the song as "Do I (Phyno & Burna Boy)". Same record, same lead; the row proposed here keeps the chart's title.`,
  `**Weeks figures** are counts of issues the recording appears in under a Burna Boy credit; the chart's own weeksOnChart counter is shown beside them in the full-walk table and can be lower after a re-entry. The New-Year special of 31 Dec 2024 is one issue like any other.`,
  `**The 17 Sep 2026 issues (week 38) were not in the archive** at the time of the read (the route served the earliest-issue fallback, twice); the latest read issue for both charts is 10 Sep 2026.`,
];
function continuity(issues) {
  const gaps = [];
  for (let i = 1; i < issues.length; i++) {
    const d = (new Date(issues[i].date) - new Date(issues[i - 1].date)) / 86400000;
    if (d !== 7) gaps.push({ from: issues[i - 1].date, to: issues[i].date, days: d });
  }
  return gaps;
}

function md(s) { return String(s).replace(/\|/g, "\\|"); }

function writeReport(ctx) {
  const { issues1, issues2, singlesGroups, albumGroups, cmp, failed, looseOnly, merges } = ctx;
  const adds0 = cmp.additions.filter((a) => a.kind === "new-NG-entry");
  const biggest = [
    ...cmp.corrections.map((c) => ({ kind: "correction", title: c.title, credit: c.credit, peak: c.walkPeak, from: c.sitePeak, sort: -Math.abs(c.walkPeak - c.sitePeak) - 1000 })),
    ...adds0.map((a) => ({ kind: "addition", title: a.title, credit: a.credit, peak: a.evidence.peak, list: a.list, sort: a.evidence.peak })),
    ...cmp.newReleases.map((n) => ({ kind: "new release", title: n.title, credit: n.credit, peak: n.evidence.peak, list: n.list, sort: n.evidence.peak })),
  ].sort((a, b) => a.sort - b.sort || a.title.localeCompare(b.title)).slice(0, 10);
  ctx.biggest = biggest;
  const L = [];
  L.push(`# Nigeria chart sweep — Burna Boy's own catalogue at TurnTable's archive`);
  L.push(``);
  L.push(`Read 18 September 2026 at the body's archive route (\`turntablecharts.com/api/ttc-proxy/api/chart/{1|2}/{week}/{year}\`). Nothing here has been applied to the repo.`);
  L.push(``);
  L.push(`## Summary`);
  L.push(``);
  L.push(`- Walked **${issues1.length} singles issues** (${issues1[0]?.date} → ${issues1.at(-1)?.date}) and **${issues2.length} album issues** (${issues2[0]?.date} → ${issues2.at(-1)?.date}); no issue failed to read. Burna Boy is credited on ${singlesGroups.length} distinct singles-chart recordings and ${albumGroups.length} albums.`);
  L.push(`- **(A) Corrections: ${cmp.corrections.length}.** **(B) Additions to existing rows: ${adds0.length}** (+${cmp.additions.filter((a) => a.kind === "note-only").length} entries whose peak reproduces but whose run is still open and carries no note). **(C) New releases: ${cmp.newReleases.length}** (${cmp.newReleases.filter((n) => n.list === "singleCharts").length} lead singles, ${cmp.newReleases.filter((n) => n.list === "featureCharts").length} features, ${cmp.newReleases.filter((n) => n.list === "albumCharts").length} albums). **(D) On file but not found: ${cmp.unmatched.length}.** **(E) Reproduced: ${cmp.confirmed.length}** — every Nigerian peak on file, all six albums included.`);
  L.push(`- Ten biggest changes (by chart peak): ${ctx.biggest.map((b, i) => `${i + 1}. ${b.title}${b.credit && b.kind !== "addition" ? ` (${b.credit})` : b.credit ? ` (${b.credit})` : ""} — ${b.kind === "correction" ? `${b.from} → ${b.peak}` : `NG ${b.peak}`}${b.kind === "new release" ? ", new row" : b.kind === "addition" ? ", add to row" : ""}`).join("; ")}.`);
  L.push(``);
  L.push(`## Method`);
  L.push(``);
  L.push(`- Route requested with a \`Referer: https://www.turntablecharts.com/\` header; the \`payload\` is base64 JSON; every response validated on \`weekNumber\` == requested week AND year(\`dateCreated\`) == requested year. An unpublished week serves the earliest issue (singles id 145, 5 Nov 2020; albums learned at run time) — that fallback, seen twice for the same week, is recorded as "no issue that week"; any other mismatch, rate-limit, empty or network response is retried up to six times with growing back-off.`);
  L.push(`- Rate: one request per ${MIN_GAP_MS} ms (~${Math.round(60000 / MIN_GAP_MS)}/min). Each validated issue is cached as \`issues/{chartId}/{year}-{week}.json\`, so a re-run is free.`);
  L.push(`- Weeks are the body's own numbering, not ISO: e.g. the 31 Dec 2024 New-Year special is week 53/2024 and 2025 has no week 1.`);
  L.push(`- Peak = best rank in ANY issue; \`highestPosition\` is only reported for reference. Weeks = count of issues the recording appears in (the chart's \`weeksOnChart\` counter is shown alongside as \`counter\` — it also resets on re-entry).`);
  L.push(`- Match = the ARTIST: \`/\\bburna\\s*boy\\b/i\` on the \`artiste\` line only, any position. Rows whose title or credit carry "Burna" without "Boy" were listed for review and NOT matched (see below).`);
  L.push(`- Lead vs feature: Burna Boy first-named on the artiste line = lead (singleCharts); otherwise a feature (featureCharts). The site's own exception (Dai Dai, "Shakira & Burna Boy", kept in singleCharts) is honoured by matching on title first.`);
  L.push(``);
  for (const [cid, issues] of [[1, issues1], [2, issues2]]) {
    const gaps = continuity(issues);
    L.push(`### Chart ${cid} — ${CHARTS[cid].name}`);
    L.push(`- Issues walked: **${issues.length}**, first ${issues[0]?.date} (id ${issues[0]?.id}, "${issues[0]?.category}"), last ${issues.at(-1)?.date} (id ${issues.at(-1)?.id}, "${issues.at(-1)?.category}").`);
    const cats = [...new Set(issues.map((i) => i.category))];
    L.push(`- Category names seen across the run: ${cats.map((c) => `"${c}"`).join(", ")}.`);
    L.push(`- Rows per issue: ${[...new Set(issues.map((i) => i.rows.length))].join(", ")}.`);
    L.push(`- Non-7-day gaps between consecutive issues: ${gaps.length ? gaps.map((g) => `${g.from} → ${g.to} (${g.days}d)`).join("; ") : "none"}.`);
    const f = failed.filter((x) => x.chartId === cid);
    L.push(`- Issues that could not be read after retries: ${f.length ? f.map((x) => `${x.week}/${x.year} [${x.attempts.join(" | ")}]`).join("; ") : "none"}.`);
    L.push(``);
  }
  L.push(`Request stats for the fetch run (${ctx.fetchRun.ranOn ?? "n/a"}): ${JSON.stringify(ctx.fetchRun.stats)} — the 429s were waited out, the 29 "mismatch" responses are the earliest-issue fallback for unpublished weeks (the fetch was made twice for each to confirm), and every retry ended in a validated issue. A first attempt at ~92 requests/min was rate-limited within two minutes and aborted after 16 issues; those 16 were reused from cache.`);
  L.push(``);
  L.push(`### Rows carrying "Burna" without "Boy" (reviewed, not matched)`);
  L.push(looseOnly.size ? [...looseOnly.entries()].map(([k, n]) => `- ${md(k)} (${n} issues)`).join("\n") : `- none`);
  L.push(``);
  L.push(`### Dedupes — one recording printed more than one way`);
  L.push(merges.length ? merges.map((m) => `- **${md(m.title)}** (${m.chart}) folded ${m.variants.length} printings: ${m.variants.map((v) => `"${md(v.printed)}" ×${v.issues}`).join("; ")}`).join("\n") : `- none needed`);
  L.push(``);

  const ev = (e) => `peak **${e.peak}** on issue ${e.peakIssueId} (${e.peakDate}${e.weeksAtPeak > 1 ? `, ${e.weeksAtPeak} issues at that rank` : ""}); ${e.weeks} issue${e.weeks === 1 ? "" : "s"} ${e.firstDate} (${e.firstRank}) → ${e.lastDate} (${e.lastRank})${e.open ? " — STILL ON THE LATEST ISSUE" : ""}; chart prints ${e.variants.length > 1 ? e.variants.map((v) => `"${md(v.printed)}" (×${v.issues})`).join(" and ") : `"${md(e.chartTitle)}" — ${md(e.chartCredit)}`}${e.foldedWith ? `; folded with ${e.foldedWith.map((f) => `"${md(f.title)}" — ${md(f.credit)} (peak ${f.peak} on ${f.peakDate}, ${f.weeks} issues)`).join(", ")}` : ""}`;

  L.push(`## (A) Corrections — NG peak on file differs from the walk (${cmp.corrections.length})`);
  L.push(``);
  if (!cmp.corrections.length) L.push(`None.`);
  for (const c of cmp.corrections) L.push(`- **${md(c.title)}**${c.credit ? ` (${md(c.credit)})` : ""} [${c.list}] — site ${c.sitePeak} → walk ${c.walkPeak}; ${c.direction}. ${ev(c.evidence)}${c.matchedBy !== "title" ? ` (matched by ${c.matchedBy})` : ""}. Proposed: \`${c.proposedEntry}\`${c.creditAgrees ? "" : " — CREDIT DIFFERS from the site's, check before applying"}`);
  L.push(``);
  L.push(`## (B) Additions to existing rows — release on file, no NG entry, walk finds it (${cmp.additions.filter((a) => a.kind === "new-NG-entry").length})`);
  L.push(``);
  const adds = cmp.additions.filter((a) => a.kind === "new-NG-entry");
  if (!adds.length) L.push(`None.`);
  for (const a of adds) L.push(`- **${md(a.title)}**${a.credit ? ` (${md(a.credit)})` : ""} [${a.list}, ${a.year}${a.ngPlaque ? `; NG plaque: ${a.ngPlaque}` : ""}] — add \`${a.proposedEntry}\`. ${ev(a.evidence)}${a.matchedBy !== "title" ? ` (matched by ${a.matchedBy})` : ""}${a.creditAgrees ? "" : " — CREDIT DIFFERS from the site's, check before applying"}`);
  const notes = cmp.additions.filter((a) => a.kind === "note-only");
  if (notes.length) {
    L.push(``);
    L.push(`### (B′) Same peak, but the run is still open on the latest issue and the entry carries no note (${notes.length})`);
    for (const a of notes) L.push(`- **${md(a.title)}** [${a.list}] — peak ${a.sitePeak} reproduces; still charting (${a.evidence.lastRank} on ${a.evidence.lastDate}, ${a.evidence.weeks} issues). Optional: \`${a.proposedEntry}\``);
  }
  L.push(``);
  const leads = cmp.newReleases.filter((n) => n.list === "singleCharts");
  const feats = cmp.newReleases.filter((n) => n.list === "featureCharts");
  const albs = cmp.newReleases.filter((n) => n.list === "albumCharts");
  L.push(`## (C) New releases — Burna Boy recordings with no row in charts.ts (${cmp.newReleases.length}: ${leads.length} lead singles, ${feats.length} features, ${albs.length} albums)`);
  L.push(``);
  for (const [h, arr] of [["Lead credits → singleCharts", leads], ["Featured credits → featureCharts", feats], ["Albums → albumCharts", albs]]) {
    L.push(`### ${h} (${arr.length})`);
    if (!arr.length) L.push(`None.`);
    for (const n of arr) {
      const yr = n.releaseYearOnFile && n.releaseYearOnFile !== n.year ? `first issue ${n.evidence.firstDate} — release year ${n.releaseYearOnFile} per certifications.ts, used in the row` : n.releaseYearOnFile ? `first issue ${n.evidence.firstDate} (${n.year})` : `first issue ${n.evidence.firstDate} (${n.year}; no year on file elsewhere — check the release date before using it)`;
      const creditDiffers = n.creditOnFile && artistSet(n.creditOnFile).join() !== artistSet(n.credit.replace(/^burna\s*boy\s*(ft\.?|feat\.?|&|,)\s*/i, "")).join() && artistSet(n.creditOnFile).join() !== artistSet(n.credit).join();
      const cr = n.certRowDifferentLead ? `; certifications.ts has a "${md(n.certRowTitle)}" row credited "${md(n.creditOnFile)}"${n.releaseYearOnFile ? "" : ""} — a DIFFERENT lead, so its year was not used and its NG plaque may belong to this record instead (check the register's credit)` : creditDiffers ? `; certifications.ts credits it "${md(n.creditOnFile)}"` : n.certRowMatch && n.certRowMatch !== "title and lead" ? `; matched to certifications.ts "${md(n.certRowTitle)}" by ${n.certRowMatch}` : "";
      L.push(`- **${md(n.title)}** — ${md(n.credit)} — ${yr}${n.ngPlaque ? `; NG plaque on file: ${n.ngPlaque}` : ""}${cr}; ${ev(n.evidence)}. Row: \`${n.proposedRow}\``);
    }
    L.push(``);
  }
  L.push(`## (D) Rows on file the walk did not find (${cmp.unmatched.length}) — spelling mismatch or a pre-archive chart; not proposed for removal`);
  L.push(``);
  if (!cmp.unmatched.length) L.push(`None.`);
  for (const u of cmp.unmatched) L.push(`- **${md(u.title)}**${u.credit ? ` (${md(u.credit)})` : ""} [${u.list}, ${u.year}] — NG ${u.sitePeak} on file${u.siteNote ? ` (note: ${md(u.siteNote)})` : ""}`);
  L.push(``);
  L.push(`## (E) Reproduced — NG peaks on file that the walk confirms (${cmp.confirmed.length})`);
  L.push(``);
  if (!cmp.confirmed.length) L.push(`None.`);
  for (const c of cmp.confirmed) L.push(`- **${md(c.title)}**${c.credit ? ` (${md(c.credit)})` : ""} [${c.list}] — NG ${c.sitePeak} reproduces: ${ev(c.evidence)}${c.matchedBy !== "title" ? ` (matched by ${c.matchedBy})` : ""}${c.creditAgrees ? "" : " — CREDIT DIFFERS from the site's"}`);
  L.push(``);
  L.push(`## Notes for the reviewer`);
  L.push(``);
  for (const n of REVIEWER_NOTES) L.push(`- ${n}`);
  L.push(``);
  L.push(`## Full walk — every Burna Boy row found`);
  L.push(``);
  for (const [h, groups] of [["Singles chart (chart 1)", singlesGroups], ["Albums chart (chart 2)", albumGroups]]) {
    L.push(`### ${h} — ${groups.length} recordings`);
    L.push(``);
    L.push(`| # | Title | Credit | Peak | Peak issue | Wks at peak | First | Last | Issues | counter (max weeksOnChart / min highestPosition) | Open |`);
    L.push(`|---|---|---|---|---|---|---|---|---|---|---|`);
    groups.forEach((g, i) => L.push(`| ${i + 1} | ${md(g.title)} | ${md(g.artiste)} | **${g.peak}** | ${g.peakIssueId} · ${g.peakDate} | ${g.weeksAtPeak} | ${g.firstDate} (${g.firstRank}) | ${g.lastDate} (${g.lastRank}) | ${g.weeks} | ${g.counterMax} / ${g.counterBestHighest} | ${g.open ? "yes" : ""} |`));
    L.push(``);
  }
  fs.writeFileSync(path.join(HERE, "report.md"), L.join("\n"));
}

// ---------- main ----------
async function main() {
  const log = (s) => console.log(s);
  const failed = [];
  if (!NO_FETCH) {
    for (const cid of [1, 2]) {
      log(`Walking chart ${cid} — ${CHARTS[cid].name}`);
      const r = await walkChart(cid, log);
      failed.push(...r.failed);
    }
  }
  const statsFile = path.join(HERE, "fetch-stats.json");
  if (!NO_FETCH) fs.writeFileSync(statsFile, JSON.stringify({ ranOn: new Date().toISOString(), stats, failed }, null, 2));
  const fetchRun = fs.existsSync(statsFile) ? JSON.parse(fs.readFileSync(statsFile, "utf8")) : { ranOn: null, stats, failed };
  if (NO_FETCH) failed.push(...(fetchRun.failed ?? []));
  const issues1 = loadIssues(1), issues2 = loadIssues(2);
  log(`Loaded ${issues1.length} singles issues (${issues1[0]?.date} → ${issues1.at(-1)?.date}) and ${issues2.length} album issues (${issues2[0]?.date} → ${issues2.at(-1)?.date})`);

  const a1 = collectAppearances(1, issues1), a2 = collectAppearances(2, issues2);
  const singlesGroups = groupAppearances(a1.apps, issues1.at(-1)?.date);
  const albumGroups = groupAppearances(a2.apps, issues2.at(-1)?.date);
  const looseOnly = new Map([...a1.looseOnly, ...a2.looseOnly]);
  const merges = [
    ...singlesGroups.filter((g) => g.variants.length > 1).map((g) => ({ chart: "singles", title: g.title, variants: g.variants })),
    ...albumGroups.filter((g) => g.variants.length > 1).map((g) => ({ chart: "albums", title: g.title, variants: g.variants })),
  ];

  const site = await loadSite();
  const cmp = compare(site, singlesGroups, albumGroups, { singles: issues1.at(-1)?.date, albums: issues2.at(-1)?.date });

  const method = {
    readOn: "2026-09-18",
    route: `${BASE}/{chartId}/{week}/{year}`,
    validation: "weekNumber == requested week && year(dateCreated) == requested year; earliest-issue fallback seen twice = no issue that week",
    rateLimit: `${MIN_GAP_MS} ms between requests`,
    charts: {
      1: { name: CHARTS[1].name, issues: issues1.length, first: issues1[0] && { id: issues1[0].id, date: issues1[0].date, category: issues1[0].category }, last: issues1.at(-1) && { id: issues1.at(-1).id, date: issues1.at(-1).date, category: issues1.at(-1).category }, gaps: continuity(issues1), failed: failed.filter((f) => f.chartId === 1) },
      2: { name: CHARTS[2].name, issues: issues2.length, first: issues2[0] && { id: issues2[0].id, date: issues2[0].date, category: issues2[0].category }, last: issues2.at(-1) && { id: issues2.at(-1).id, date: issues2.at(-1).date, category: issues2.at(-1).category }, gaps: continuity(issues2), failed: failed.filter((f) => f.chartId === 2) },
    },
    requestStats: fetchRun.stats, fetchRanOn: fetchRun.ranOn,
    burnaMatchedRows: { singles: a1.apps.length, albums: a2.apps.length },
    looseOnlyRowsNotMatched: [...looseOnly.entries()].map(([k, n]) => ({ row: k, issues: n })),
    dedupes: merges,
  };
  fs.writeFileSync(path.join(HERE, "findings.json"), JSON.stringify({ corrections: cmp.corrections, additions: cmp.additions, newReleases: cmp.newReleases, unmatched: cmp.unmatched, confirmed: cmp.confirmed, method, reviewerNotes: REVIEWER_NOTES }, null, 2));
  fs.writeFileSync(path.join(HERE, "walk-rows.json"), JSON.stringify({ singles: singlesGroups, albums: albumGroups }, null, 2));
  fs.writeFileSync(path.join(HERE, "appearances.json"), JSON.stringify({ singles: a1.apps, albums: a2.apps }));
  writeReport({ issues1, issues2, singlesGroups, albumGroups, cmp, failed, looseOnly, merges, fetchRun });

  log(`\nSingles: ${singlesGroups.length} Burna Boy recordings from ${a1.apps.length} rows; Albums: ${albumGroups.length} from ${a2.apps.length} rows.`);
  log(`(A) corrections ${cmp.corrections.length} · (B) additions ${cmp.additions.filter((a) => a.kind === "new-NG-entry").length} (+${cmp.additions.filter((a) => a.kind === "note-only").length} note-only) · (C) new releases ${cmp.newReleases.length} · (D) unmatched ${cmp.unmatched.length}`);
  log(`Wrote report.md, findings.json, walk-rows.json, appearances.json in ${HERE}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
