#!/usr/bin/env node
// Cert watcher — the runner. Spec: docs/cert-watcher/SPEC.md.
//
// Reads every certification register a machine may read for the sixteen
// artists, compares each row naming one of them with the site's own plaque
// data, and renders ONE issue body listing every plaque the site lacks. It
// never edits site data, never commits, never pushes: every plaque is added by
// hand after a human confirms it at the certifying body.
//
// This file and http.mjs are the only ones that do I/O. Everything they call
// (match, site, state, report, the adapters' parsers) is pure and tested.
//
//   node --no-warnings scripts/cert-watch/index.mjs --dry-run
//   node --no-warnings scripts/cert-watch/index.mjs --dry-run --only=riaa-latin
//   node --no-warnings scripts/cert-watch/index.mjs --offline --dry-run
//   node --no-warnings scripts/cert-watch/index.mjs --self-test

import { readFile, writeFile, mkdir, appendFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

import { LIVE_ARTISTS } from "../live-artists.mjs";
import { REGISTRY, AUTOMATED, countryOf } from "./adapters/index.mjs";
import { AdapterError } from "./adapters/base.mjs";
import { createHttp, createFixtureHttp, USER_AGENT } from "./http.mjs";
import { buildSiteIndex, hydrateSiteIndex, holdingFor, holdingLabel } from "./site.mjs";
import { evaluateRows, identifyRow, normTitle } from "./match.mjs";
import { verdict, isClean, matchedVerdict } from "./health.mjs";
import { extractState, readTicks, readManualTicks, isoWeek, mergeRun, applyTicks, encodeState, stateBlock, StateTooLarge, watchVerdict } from "./state.mjs";
import { renderBodyWithin, renderReport, renderComment, githubOutputs } from "./report.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO = path.resolve(HERE, "../..");
export const FIXTURES = path.join(REPO, "tests/fixtures/cert-watch");

export class ConfigError extends Error {}

/** How many of an untrusted read's would-be candidates the body shows (§5.1). */
const QUARANTINE_EXAMPLES = 3;

// ── CLI ─────────────────────────────────────────────────────────────────────
const FLAGS = new Set([
  "--dry-run",
  "--offline",
  "--deep",
  "--render-only",
  "--self-test",
]);
const VALUED = new Set([
  "--only",
  "--prev-body",
  "--results",
  "--site-json",
  "--dump-site-index",
  "--save-raw",
  "--cache",
  "--out",
  "--config",
  "--issue-number",
  "--now",
  "--offline-fail",
  "--run-url",
]);

export function parseArgs(argv) {
  const o = { flags: new Set(), values: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const eq = a.indexOf("=");
    const name = eq > 0 ? a.slice(0, eq) : a;
    if (FLAGS.has(name)) {
      o.flags.add(name);
      continue;
    }
    if (VALUED.has(name)) {
      const v = eq > 0 ? a.slice(eq + 1) : argv[++i];
      if (v === undefined) throw new ConfigError(`${name} needs a value`);
      o.values[name.slice(2)] = v;
      continue;
    }
    throw new ConfigError(`unknown argument "${a}"`);
  }
  const ids = (s, flag) => {
    if (s == null || s === "") return null;
    if (!/^[a-z0-9-]+(,[a-z0-9-]+)*$/.test(s)) throw new ConfigError(`${flag} must be comma-separated adapter ids`);
    const list = s.split(",");
    const unknown = list.filter((id) => !REGISTRY.some((r) => r.id === id));
    if (unknown.length) throw new ConfigError(`${flag}: unknown adapter id(s) ${unknown.join(", ")} — known: ${REGISTRY.map((r) => r.id).join(", ")}`);
    return list;
  };
  const issue = o.values["issue-number"];
  if (issue != null && issue !== "" && !/^\d+$/.test(issue)) throw new ConfigError("--issue-number must be a number");
  const now = o.values.now;
  if (now != null && Number.isNaN(Date.parse(now))) throw new ConfigError("--now must be an ISO date-time");
  return {
    dryRun: o.flags.has("--dry-run"),
    offline: o.flags.has("--offline"),
    deep: o.flags.has("--deep"),
    renderOnly: o.flags.has("--render-only"),
    selfTest: o.flags.has("--self-test"),
    only: ids(o.values.only, "--only"),
    offlineFail: ids(o.values["offline-fail"], "--offline-fail") ?? [],
    prevBody: o.values["prev-body"] ?? null,
    results: o.values.results ?? null,
    siteJson: o.values["site-json"] ?? null,
    dumpSiteIndex: o.values["dump-site-index"] ?? null,
    saveRaw: o.values["save-raw"] ?? null,
    cache: o.values.cache ?? path.join(REPO, ".cert-watch-cache"),
    out: o.values.out ?? path.join(REPO, "cert-watch-out"),
    config: o.values.config ?? path.join(HERE, "config.json"),
    issueNumber: issue || null,
    now: now ? new Date(now) : new Date(),
    runUrl: o.values["run-url"] ?? null,
  };
}

// ── Config ──────────────────────────────────────────────────────────────────
const TOP_KEYS = [
  "version", "issueTitle", "userAgent", "weeklyTodo", "budget", "hosts", "adapters", "staleAfterDays", "controls", "searchTerms", "watchlist",
  "knownDivergences", "heldRows", "leadAliases", "chartOnlyAliases", "creditTypos", "namesakes", "titleAliases", "manualChecks", "coverageNotes",
];
const TIERS = ["Silver", "Gold", "Platinum", "Diamond"];
const ENTRY_KEYS = {
  watchlist: ["id", "artist", "title", "country", "programme", "adapter", "rowId", "until", "lead", "on", "lastHumanReading"],
  knownDivergences: ["adapter", "artist", "title", "printed", "credit", "readingRaw", "why", "ruledBy", "on"],
  heldRows: ["adapter", "credit", "title", "why", "ruledBy", "on"],
  leadAliases: ["artist", "lead", "title", "release", "why", "ruledBy", "on"],
  chartOnlyAliases: ["artist", "lead", "title", "why", "ruledBy", "on"],
  creditTypos: ["register", "printed", "artist", "why", "ruledBy", "on"],
  namesakes: ["artist", "names", "why"],
  titleAliases: ["register", "artist", "printed", "release", "duplicateOk", "why", "ruledBy", "on"],
  manualChecks: ["id", "flag", "body", "url", "check"],
};
const REQUIRED = {
  watchlist: ["id", "artist", "title", "country", "adapter", "until", "lead", "on"],
  knownDivergences: ["adapter", "artist", "title", "readingRaw", "why", "ruledBy", "on"],
  heldRows: ["adapter", "credit", "title", "why", "ruledBy", "on"],
  leadAliases: ["artist", "lead", "title", "why", "ruledBy", "on"],
  chartOnlyAliases: ["artist", "lead", "title", "why", "ruledBy", "on"],
  creditTypos: ["register", "printed", "artist", "why", "on"],
  namesakes: ["artist", "names", "why"],
  titleAliases: ["artist", "printed", "release", "why", "on"],
  manualChecks: ["id", "flag", "body", "url", "check"],
};

/** Every problem with a parsed config, as a list. Empty = valid. Checks that
 *  need the site (release names) take `index`; without it they are skipped. */
export function configProblems(config, index = null) {
  const p = [];
  if (typeof config !== "object" || config === null || Array.isArray(config)) return ["config is not an object"];
  for (const k of Object.keys(config)) if (!TOP_KEYS.includes(k)) p.push(`unknown key "${k}"`);
  if (config.version !== 1) p.push("version must be 1");
  if (config.userAgent !== USER_AGENT) p.push(`userAgent must be exactly "${USER_AGENT}"`);
  for (const [list, keys] of Object.entries(ENTRY_KEYS)) {
    const arr = config[list] ?? [];
    if (!Array.isArray(arr)) {
      p.push(`${list} must be a list`);
      continue;
    }
    arr.forEach((e, i) => {
      for (const k of Object.keys(e)) if (!keys.includes(k)) p.push(`${list}[${i}]: unknown key "${k}"`);
      for (const k of REQUIRED[list]) if (e[k] === undefined || e[k] === "") p.push(`${list}[${i}]: missing "${k}"`);
    });
  }
  const artistKeys = new Set(Object.keys(LIVE_ARTISTS));
  const adapterIds = new Set(REGISTRY.map((r) => r.id));
  const needArtist = (list, field = "artist") =>
    (config[list] ?? []).forEach((e, i) => {
      if (e[field] && !artistKeys.has(e[field])) p.push(`${list}[${i}]: unknown artist "${e[field]}"`);
    });
  ["watchlist", "knownDivergences", "leadAliases", "chartOnlyAliases", "creditTypos", "namesakes", "titleAliases"].forEach((l) => needArtist(l));
  // A chart-only ruling names a chart alias that exists (live-artists.mjs).
  (config.chartOnlyAliases ?? []).forEach((e, i) => {
    const al = (LIVE_ARTISTS[e.artist]?.aliases ?? []).find((a) => a.artist === e.lead && normTitle(a.title) === normTitle(e.title ?? ""));
    if (e.artist && LIVE_ARTISTS[e.artist] && !al) p.push(`chartOnlyAliases[${i}]: live-artists.mjs has no chart alias (${e.lead}, "${e.title}") for ${e.artist}`);
  });
  for (const list of ["watchlist", "knownDivergences", "heldRows"]) {
    (config[list] ?? []).forEach((e, i) => {
      if (e.adapter && !adapterIds.has(e.adapter)) p.push(`${list}[${i}]: unknown adapter "${e.adapter}"`);
    });
  }
  (config.creditTypos ?? []).forEach((e, i) => {
    if (!adapterIds.has(e.register)) p.push(`creditTypos[${i}]: unknown register "${e.register}"`);
  });
  // A divergence ruled on a row printed under another title (a remix the
  // site counts as its original) names that title and credit exactly as the
  // register prints them; `title` stays the site release it is counted as.
  (config.knownDivergences ?? []).forEach((e, i) => {
    for (const k of ["printed", "credit"]) {
      if (e[k] !== undefined && (typeof e[k] !== "string" || !e[k].trim())) p.push(`knownDivergences[${i}]: "${k}" must be the register's own text`);
    }
    if (e.printed !== undefined && e.credit === undefined) p.push(`knownDivergences[${i}]: a divergence on a printed title needs the row's "credit" too`);
  });
  (config.titleAliases ?? []).forEach((e, i) => {
    if (e.register !== undefined && !adapterIds.has(e.register)) p.push(`titleAliases[${i}]: unknown register "${e.register}"`);
  });
  const ids = (config.watchlist ?? []).map((w) => w.id);
  if (new Set(ids).size !== ids.length) p.push("watchlist ids must be unique");
  // `until` (SPEC §5.4): when the item lands, in one of two known shapes.
  (config.watchlist ?? []).forEach((w, i) => {
    const u = w.until;
    if (u === undefined) return;
    const keys = u && typeof u === "object" ? Object.keys(u) : [];
    const okRegister = keys.length === 1 && u.register === "atLeastSite";
    const okSite =
      keys.length === 1 &&
      u.site &&
      typeof u.site === "object" &&
      Object.keys(u.site).every((k) => k === "tier" || k === "x") &&
      TIERS.includes(u.site.tier) &&
      (u.site.x === undefined || (Number.isInteger(u.site.x) && u.site.x >= 1));
    if (!okRegister && !okSite) p.push(`watchlist[${i}]: "until" must be {"register": "atLeastSite"} or {"site": {"tier", "x"}}`);
  });
  // staleAfterDays: registry ids → days (a positive number), plus "why".
  if (config.staleAfterDays !== undefined) {
    const sa = config.staleAfterDays;
    if (!sa || typeof sa !== "object" || Array.isArray(sa)) p.push("staleAfterDays must be an object");
    else {
      if (!sa.why) p.push('staleAfterDays: missing "why"');
      for (const [k, v] of Object.entries(sa)) {
        if (k === "why") continue;
        if (!adapterIds.has(k)) p.push(`staleAfterDays.${k}: unknown adapter`);
        else if (typeof v !== "number" || !(v > 0)) p.push(`staleAfterDays.${k}: must be a positive number of days`);
      }
    }
  }
  // controls: a live control row named in config (after a year rollover). It
  // must come from a saved fixture, so it says why and when.
  if (config.controls !== undefined) {
    if (!config.controls || typeof config.controls !== "object" || Array.isArray(config.controls)) p.push("controls must be an object");
    else {
      for (const [id, c] of Object.entries(config.controls)) {
        if (!adapterIds.has(id)) p.push(`controls.${id}: unknown adapter`);
        for (const k of Object.keys(c ?? {})) if (!["rowId", "credit", "title", "tierRaw", "year", "when", "why", "on"].includes(k)) p.push(`controls.${id}: unknown key "${k}"`);
        if (!c?.why || !c?.on) p.push(`controls.${id}: needs "why" and "on"`);
        if (!["rowId", "credit", "title"].some((k) => c?.[k])) p.push(`controls.${id}: name the row by rowId, credit or title`);
        if (c?.when !== undefined && !["daily", "deep"].includes(c.when)) p.push(`controls.${id}: "when" must be "daily" or "deep"`);
        if (c?.year !== undefined && !Number.isInteger(c.year)) p.push(`controls.${id}: "year" must be a year`);
      }
    }
  }
  const mids = (config.manualChecks ?? []).map((m) => m.id);
  if (new Set(mids).size !== mids.length) p.push("manualChecks ids must be unique");
  for (const [id, a] of Object.entries(config.adapters ?? {})) {
    if (!adapterIds.has(id)) p.push(`adapters.${id}: unknown adapter`);
    for (const k of Object.keys(a)) if (!["enabled", "why", "permission", "permanent", "ruledBy", "on"].includes(k)) p.push(`adapters.${id}: unknown key "${k}"`);
    if (typeof a.enabled !== "boolean") p.push(`adapters.${id}: "enabled" must be true or false`);
    if (!a.why) p.push(`adapters.${id}: missing "why"`);
    const reg = REGISTRY.find((r) => r.id === id);
    // An owner ruling that a register stays manual FOR GOOD (RiSA and FIMI,
    // Paul, 24 Sep 2026: both ask not to be read by AI tools — SPEC §0.4). It
    // says who ruled and when, and nothing — no permission record, no code
    // change — enables it.
    if (a.permanent !== undefined) {
      if (a.permanent !== true) p.push(`adapters.${id}: "permanent" may only be true`);
      if (!a.ruledBy || !a.on) p.push(`adapters.${id}: a permanent ruling needs "ruledBy" and "on"`);
      if (a.enabled !== false || a.permission) p.push(`adapters.${id}: permanently manual by owner ruling (${a.ruledBy ?? "?"}, ${a.on ?? "?"}) — it can never be enabled`);
      if (reg && reg.class !== "MANUAL") p.push(`adapters.${id}: a permanently manual register must be a MANUAL row in the registry`);
    }
    // A register held by its robots.txt, or by a policy awaiting Paul's
    // ruling, is enabled only by a WRITTEN permission record (SPEC §11.1) —
    // never by a code change.
    if ((reg?.heldBy === "robots" || reg?.heldBy === "policy") && a.enabled === true) {
      const perm = a.permission;
      const what = reg.heldBy === "robots" ? "a register its robots.txt disallows" : "a register held awaiting a ruling";
      if (!perm || !perm.from || !perm.on || !perm.scope) p.push(`adapters.${id}: enabling ${what} needs "permission": {from, on, scope}`);
    }
  }
  for (const [host, h] of Object.entries(config.hosts ?? {})) {
    for (const k of Object.keys(h)) if (!["minGapMs", "why", "cookies"].includes(k)) p.push(`hosts.${host}: unknown key "${k}"`);
    if (typeof h.minGapMs !== "number" || h.minGapMs < 1100) p.push(`hosts.${host}: minGapMs must be a number ≥ 1100`);
    if (host !== "*" && !h.why) p.push(`hosts.${host}: missing "why"`);
    // A session cookie lives in memory for ONE run and is never written.
    if (h.cookies !== undefined && h.cookies !== "run") p.push(`hosts.${host}: "cookies" may only be "run" (kept in memory for one run, never written)`);
    if (host === "*" && h.cookies !== undefined) p.push('hosts.*: cookies are opt-in per host, never for "*"');
  }
  if (!config.hosts?.["*"]) p.push('hosts must set "*"');
  if (index) {
    const hasRelease = (artist, title) => {
      const a = index.artists[artist];
      const nt = normTitle(title);
      return !!a && (a.byTitle.has(nt) || a.byAlt.has(nt));
    };
    for (const list of ["watchlist", "knownDivergences"]) {
      (config[list] ?? []).forEach((e, i) => {
        if (e.artist && e.title && !hasRelease(e.artist, e.title)) p.push(`${list}[${i}]: no release "${e.title}" for ${e.artist} on the site`);
      });
    }
    (config.leadAliases ?? []).forEach((e, i) => {
      if (!hasRelease(e.artist, e.release ?? e.title)) p.push(`leadAliases[${i}]: no release "${e.release ?? e.title}" for ${e.artist} on the site`);
    });
    (config.titleAliases ?? []).forEach((e, i) => {
      if (!hasRelease(e.artist, e.release)) p.push(`titleAliases[${i}]: no release "${e.release}" for ${e.artist} on the site`);
    });
  }
  return p;
}

async function loadConfig(file) {
  let text;
  try {
    text = await readFile(file, "utf8");
  } catch (e) {
    throw new ConfigError(`${path.basename(file)} is unreadable (${e.code ?? e.message})`);
  }
  let config;
  try {
    config = JSON.parse(text);
  } catch (e) {
    throw new ConfigError(`${path.basename(file)} is not valid JSON (${e.message})`);
  }
  const problems = configProblems(config);
  if (problems.length) throw new ConfigError(`${path.basename(file)}: ${problems.join("; ")}`);
  return config;
}

// ── Site ────────────────────────────────────────────────────────────────────
async function loadIndex(opts, config) {
  if (opts.siteJson) {
    try {
      return JSON.parse(await readFile(opts.siteJson, "utf8"));
    } catch (e) {
      throw new ConfigError(`--site-json ${opts.siteJson}: ${e.message}`);
    }
  }
  try {
    const { loadSite } = await import("./load-site.mjs");
    const { certs, afro } = await loadSite(REPO);
    return buildSiteIndex(certs, afro, LIVE_ARTISTS, config);
  } catch (e) {
    throw new ConfigError(`the site's plaque data would not load: ${e.message}`);
  }
}

// ── Offline fixture routes ──────────────────────────────────────────────────
/** Offline runs replay the responses PROVENANCE.json marks `replay: true`,
 *  matched on the exact (method, url, body) the watcher sent live. */
export async function offlineRoutes() {
  const prov = JSON.parse(await readFile(path.join(FIXTURES, "PROVENANCE.json"), "utf8"));
  return prov
    .filter((e) => e.replay && e.request)
    .map((e) => ({
      method: e.request.method ?? "GET",
      match: (u, b) => u === e.request.url && (b ?? "") === (e.request.body ?? ""),
      file: e.file,
      status: e.request.status ?? 200,
      headersFile: e.headers ?? null,
      encoding: e.request.encoding ?? undefined,
      nth: e.request.nth ?? undefined,
    }));
}

// ── Adapters ────────────────────────────────────────────────────────────────

function artistNames() {
  return Object.values(LIVE_ARTISTS).map((a) => a.name);
}

/** Lead acts (SPEC §3): the distinct leads of ALL the index's lead aliases —
 *  LIVE_ARTISTS aliases (chart-only ones included: a search term only widens
 *  the read, and a row still has to match a certification alias), the lead
 *  of each Burna Boy feature credit, and config.leadAliases — less the
 *  sixteen themselves. Sorted, so a rotation over them is stable. */
export function leadActsOf(index, names) {
  const own = new Set(names.map((n) => n.toLowerCase()));
  const leads = new Map();
  for (const al of index.leadAliases ?? []) {
    const k = String(al.lead).toLowerCase();
    if (!own.has(k) && !leads.has(k)) leads.set(k, al.lead);
  }
  return [...leads.values()].sort((x, y) => x.localeCompare(y, "en"));
}

/** An adapter's search terms: the sixteen names and config.searchTerms, plus
 *  the credit a register misspells in a typo scoped to it — Pro-Música
 *  Brasil files Tems as "Teams", and a name search for "Tems" never finds
 *  that card. Other registers never see another register's typo. */
export function searchTermsFor(adapterId, base, config) {
  const typos = (config.creditTypos ?? []).filter((t) => t.register === adapterId).map((t) => t.printed);
  const terms = new Map();
  for (const t of [...base, ...typos]) if (!terms.has(t.toLowerCase())) terms.set(t.toLowerCase(), t);
  return [...terms.values()];
}

async function runAdapters({ opts, config, index, http, prevState, startedAt }) {
  const health = {};
  const outputs = {};
  const budget = config.budget ?? {};
  const runDeadline = startedAt + (budget.runSeconds ?? 540) * 1000;
  const names = artistNames();
  const searchTerms = [...names, ...(config.searchTerms ?? [])];
  const deep = opts.deep || opts.offline;

  const toRun = [];
  for (const r of REGISTRY) {
    if (opts.only && !opts.only.includes(r.id)) {
      health[r.id] = { status: "skipped", detail: "not in --only" };
      continue;
    }
    const conf = config.adapters?.[r.id];
    if (r.heldBy === "policy" && conf?.enabled !== true) {
      health[r.id] = { status: "held-policy", detail: conf?.why ?? r.note };
      continue;
    }
    if (r.class === "MANUAL" && !r.heldBy) {
      health[r.id] = { status: "manual", detail: r.note };
      continue;
    }
    if (r.heldBy === "robots" && conf?.enabled === false) {
      health[r.id] = { status: "held-robots", detail: conf.why };
      continue;
    }
    if (!r.built) {
      health[r.id] = { status: "not-built", detail: `step ${r.step}` };
      continue;
    }
    if (conf?.enabled === false) {
      health[r.id] = { status: "skipped", detail: `disabled in config: ${conf.why}` };
      continue;
    }
    toRun.push(r);
  }

  const evalCtx = { index, liveArtists: LIVE_ARTISTS, config };
  const leadActs = leadActsOf(index, names);
  const runOne = async (a) => {
    const t0 = Date.now();
    if (Date.now() > runDeadline) {
      health[a.id] = { status: "not-reached", detail: "the run budget was spent before this register started" };
      return;
    }
    const adapterDeadline = Math.min(runDeadline, t0 + ((budget.overrides ?? {})[a.id] ?? budget.adapterSeconds ?? 90) * 1000);
    let requests = 0;
    const ctx = {
      deep,
      cursor: prevState?.cursors?.[a.id] ?? null,
      searchTerms: searchTermsFor(a.id, searchTerms, config),
      artistNames: names,
      leadActs,
      now: opts.now,
      watch: (config.watchlist ?? []).filter((w) => w.adapter === a.id),
      config,
      // The robots verdict for a URL, without fetching it (BPI asks first).
      robotsCheck: (url) => http.robotsCheck(url),
      // Does a register row name one of the sixteen (artist AND title)? For
      // adapters that must choose which pages to open (Ifpi Sverige records).
      matches: (row) => {
        const id = identifyRow(row, { adapterId: a.id, liveArtists: LIVE_ARTISTS, config, leadAliases: index.certAliases, ownerTags: !!a.ownerTags });
        return !id.reject && !id.held && id.matches.length > 0;
      },
      request: (req) => {
        requests++;
        if (opts.offline && opts.offlineFail.includes(a.id)) {
          return Promise.resolve({ ok: false, kind: "network", detail: "offline: this register's fixture fetch is set to fail (--offline-fail)" });
        }
        return http.request({ ...req, adapterId: a.id, adapterDeadline });
      },
      wantsHistory: (row) => evaluateRows(a, [row], evalCtx).candidates.length > 0,
    };
    try {
      const got = await a.read(ctx);
      const rows = got.rows ?? [];
      // The verdict (health.mjs): structure, the control due today, the
      // learned floor, and the register's cadence.
      const v = verdict({
        adapter: a,
        got,
        deep,
        prev: prevState?.health?.[a.id] ?? null,
        staleAfterDays: config.staleAfterDays?.[a.id],
        now: opts.now,
        config,
      });
      outputs[a.id] = got;
      health[a.id] = {
        status: v.status,
        detail: v.detail,
        rows: rows.length,
        total: typeof got.total === "number" ? got.total : null,
        newest: got.newest ?? null,
        newestDate: got.newestDate ?? null,
        // The health verdict's own notes (control present, floor reset…)
        // first, so a long adapter note never cuts them off the table cell.
        notes: [...v.notes, ...(got.notes ?? [])],
        track: v.track,
        events: v.events,
        requests,
        ms: Date.now() - t0,
      };
    } catch (e) {
      if (e instanceof AdapterError) {
        const status = e.kind === "robots" ? "held-robots" : e.kind === "budget" ? "not-reached" : e.kind;
        health[a.id] = { status, detail: e.message, reason: e.reason, http: e.http, decoy: !!e.decoy, requests, ms: Date.now() - t0 };
      } else {
        health[a.id] = { status: "error", detail: e?.message ?? String(e), stack: e?.stack ?? null, requests, ms: Date.now() - t0 };
      }
    }
  };

  // Each host has its own queue: adapters sharing a host (riaa, riaa-latin)
  // run one after the other, so one adapter's budget is never spent waiting
  // on another's requests. Up to six hosts run at once.
  const byHost = new Map();
  for (const a of toRun) {
    const h = a.hosts?.[0] ?? a.id;
    if (!byHost.has(h)) byHost.set(h, []);
    byHost.get(h).push(a);
  }
  // Longest first (by each group's adapter budget), so the slow walkers —
  // Pro-Música Brasil, Ifpi Sverige, BVMI — never start last and run out the
  // run budget; ties keep the registry order.
  const cost = (g) => Math.max(...g.map((a) => (budget.overrides ?? {})[a.id] ?? budget.adapterSeconds ?? 90));
  const groups = [...byHost.values()].map((g, i) => ({ g, i })).sort((x, y) => cost(y.g) - cost(x.g) || x.i - y.i).map((x) => x.g);
  const workers = Array.from({ length: Math.min(6, groups.length) }, async () => {
    while (groups.length) {
      for (const a of groups.shift()) await runOne(a);
    }
  });
  await Promise.all(workers);
  // Registry order, whatever order the hosts finished in: the state block and
  // the golden render must not depend on network timing.
  const inOrder = (o) => Object.fromEntries(REGISTRY.filter((r) => r.id in o).map((r) => [r.id, o[r.id]]));
  return { health: inOrder(health), outputs: inOrder(outputs) };
}

/** The watchlist's readings today, and whether each item has landed (§5.4).
 *  Every target is derived at run time from the site index — never typed. */
function readWatch(config, outputs, health, index, prevState) {
  const out = [];
  const readings = {};
  for (const w of config.watchlist ?? []) {
    const adapter = REGISTRY.find((r) => r.id === w.adapter);
    const ladder = adapter?.ladder ?? "standard";
    const got = outputs[w.adapter];
    const readClean = !!got && isClean(health[w.adapter]?.status);
    let reading = null;
    let row = null;
    if (readClean) {
      row =
        (w.rowId && got.rows.find((r) => r.rowId === w.rowId)) ||
        got.rows.find((r) => {
          const id = identifyRow(r, { adapterId: w.adapter, liveArtists: LIVE_ARTISTS, config, leadAliases: index.certAliases, ownerTags: !!adapter?.ownerTags });
          return id.matches.some((m) => m.artist === w.artist) && normTitle(id.title) === normTitle(w.title);
        }) ||
        null;
      if (row) {
        const hist = row.extra?.history;
        reading = {
          label: hist?.current?.label ?? row.extra?.badgeTitle ?? null,
          raw: row.tierRaw,
          parsed: row.reading ?? null,
          rowId: row.rowId ?? null,
          date: hist?.current?.date ?? row.dateRaw ?? null,
        };
      }
    }
    const { release, holding } = holdingFor(index, w.artist, w.title, w.country, w.programme);
    const v = watchVerdict(w, { reading: reading?.parsed ?? null, readClean: readClean && !!reading, holding, ladder, body: adapter?.body ?? w.adapter });
    const was = prevState?.watch?.[w.id] ?? null;
    out.push({
      ...w,
      releaseCredit: release?.credit ?? null,
      reading,
      siteHolding: holding ? holdingLabel(holding) : null,
      siteAhead: v.siteAhead,
      landsWhen: v.landsWhen,
      landedNow: v.landed,
      lastReading: was?.raw ? { raw: was.raw, since: was.since ?? null } : null,
    });
    readings[w.id] = { raw: reading?.raw ?? null, landedNow: v.landed, landedText: v.landedText };
  }
  return { watch: out, readings };
}

/** Per host: the first register response (status, server, cf-ray, marker) and
 *  the smallest gap between two requests — what the first Actions run shows
 *  host by host, and how the politeness gaps are checked (§2.4, §10). */
export function hostSummary(log) {
  const first = {};
  const minGapMs = {};
  const last = {};
  for (const l of [...log].sort((a, b) => String(a.at).localeCompare(String(b.at)))) {
    const t0 = Date.parse(l.at);
    if (l.kind !== "offline" && last[l.host] != null && Number.isFinite(t0)) {
      const gap = t0 - last[l.host];
      minGapMs[l.host] = Math.min(minGapMs[l.host] ?? Infinity, gap);
    }
    if (Number.isFinite(t0)) last[l.host] = t0 + (l.ms ?? 0);
    if (l.kind === "robots" || first[l.host]) continue;
    first[l.host] = { status: l.status ?? null, kind: l.kind, server: l.server ?? null, cfRay: !!l.cfRay, marker: l.marker ?? null };
  }
  const sorted = (o) => Object.fromEntries(Object.keys(o).sort((a, b) => a.localeCompare(b, "en")).map((k) => [k, o[k]]));
  return { first: sorted(first), minGapMs: sorted(minGapMs) };
}

// Formatted by hand, not by Intl: ICU versions disagree ("Sep" vs "Sept"),
// and CI (Node 20) and the workflow (Node 24) must render the same body.
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const longDate = (d) => `${WEEKDAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
const shortDate = (d) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCFullYear()}`;

/** Apply the body's ticks and produce what renders. */
export function finalize(results, body, prevStateB64) {
  const ticks = readTicks(body);
  const week = results.manual.week;
  const prevManual = results.state.manualWeek === week ? new Set(results.state.manualTicks ?? []) : new Set();
  const manualTicks = new Set([...prevManual, ...readManualTicks(body, week)]);
  const { shown, hidden, state } = applyTicks(results.candidates, results.state, ticks, results.date.slice(0, 10));
  const finalState = { ...state, manualWeek: week, manualTicks: [...manualTicks] };
  return {
    shown,
    hidden: hidden + (results.dismissedCount ?? 0),
    manualTicks,
    state: finalState,
    prevStateB64: prevStateB64 ?? null,
    prevStateBlock: prevStateB64 ? stateBlock(prevStateB64) : null,
  };
}

async function writeOutputs(opts, results, view, { comment = true } = {}) {
  await mkdir(opts.out, { recursive: true });
  const body = renderBodyWithin(results, view);
  await writeFile(path.join(opts.out, "issue-body.md"), body);
  const report = renderReport(results, view);
  await writeFile(path.join(opts.out, "report.md"), report);
  if (comment) {
    const c = renderComment(results, view);
    if (c) await writeFile(path.join(opts.out, "comment.md"), `${c}\n`);
  }
  await writeFile(path.join(opts.out, "results.json"), `${JSON.stringify(results, null, 1)}\n`);
  if (process.env.GITHUB_OUTPUT) {
    const outs = githubOutputs(results, view);
    await appendFile(process.env.GITHUB_OUTPUT, Object.entries(outs).map(([k, v]) => `${k}=${v}`).join("\n") + "\n");
  }
  return { body, report };
}

// ── Main ────────────────────────────────────────────────────────────────────
export async function main(argv = process.argv.slice(2)) {
  const opts = parseArgs(argv);
  const config = await loadConfig(opts.config);

  if (opts.renderOnly) {
    if (!opts.results) throw new ConfigError("--render-only needs --results");
    const results = JSON.parse(await readFile(opts.results, "utf8"));
    const body = opts.prevBody ? await readFile(opts.prevBody, "utf8").catch(() => "") : "";
    const view = finalize(results, body, results.prevStateB64);
    await writeOutputs(opts, results, view, { comment: false });
    console.log(`Re-rendered ${path.join(opts.out, "issue-body.md")} with the latest ticks.`);
    return 0;
  }

  const indexJson = await loadIndex(opts, config);
  const index = hydrateSiteIndex(indexJson, LIVE_ARTISTS, config);
  const siteProblems = configProblems(config, index);
  if (siteProblems.length) throw new ConfigError(`config.json: ${siteProblems.join("; ")}`);

  if (opts.dumpSiteIndex) {
    await writeFile(opts.dumpSiteIndex, `${JSON.stringify(indexJson, null, 1)}\n`);
    console.log(`Wrote the site index to ${opts.dumpSiteIndex}.`);
    return 0;
  }
  if (opts.selfTest) {
    const t = indexJson.totals;
    console.log(
      `certifications.ts: ${t.burnaReleases.albums} albums, ${t.burnaReleases.singles} singles, ${t.burnaReleases.features} features, ${t.burnaPlaques} plaques`
    );
    console.log(`afrobeats.ts: ${t.boardArtists} artists, ${t.boardReleases} releases, ${t.boardPlaques} plaques`);
    console.log(
      `index: ${t.releases} releases, ${t.plaques} plaques, ${indexJson.leadAliases.length} lead aliases (${index.certAliases.length} valid for certifications, ${index.chartOnlyAliases.length} chart only); registry: ${REGISTRY.length} registers (${AUTOMATED.length} automated)`
    );
    return 0;
  }

  const startedAt = Date.now();
  // Previous state: the issue body first, then the cache backup.
  let prevBody = "";
  if (opts.prevBody) prevBody = await readFile(opts.prevBody, "utf8").catch(() => "");
  let { state: prevState, status: prevStatus } = extractState(prevBody);
  let prevB64 = prevState ? encodeState(prevState) : null;
  if (!prevState && !opts.dryRun) {
    try {
      const cached = JSON.parse(await readFile(path.join(opts.cache, "state.json"), "utf8"));
      if (cached?.v === 1) {
        prevState = { ...cached, reset: false };
        prevStatus = "ok";
        prevB64 = encodeState(prevState);
      }
    } catch {
      /* no backup: a fresh start, marked as a reset */
    }
  }

  const http = opts.offline
    ? createFixtureHttp({ root: FIXTURES, routes: await offlineRoutes(), robotsDir: path.join(FIXTURES, "robots") })
    : createHttp({ config, cacheDir: opts.cache, saveRawDir: opts.saveRaw, runDeadline: startedAt + (config.budget?.runSeconds ?? 540) * 1000 });

  const { health, outputs } = await runAdapters({ opts, config, index, http, prevState, startedAt });

  // Evaluate every adapter that returned rows. Only a CLEAN read (ok or
  // stale) is data: its candidates become leads. A read that came back but
  // is not trusted — format changed, a missing control, shrank, matched rows
  // dropped — says nothing about today (§7), so its would-be candidates are
  // QUARANTINED: listed under "Held back" as plain text, never as a lead
  // with a box to tick, never remembered in state and never notified. They
  // return as leads on the register's next clean read.
  const today = [];
  const quarantined = [];
  const suppressed = { divergences: [], held: [], tribute: [] };
  for (const r of REGISTRY) {
    const got = outputs[r.id];
    if (!got) continue;
    const ev = evaluateRows(r, got.rows ?? [], { index, liveArtists: LIVE_ARTISTS, config });
    const h = health[r.id];
    h.matched = ev.counts.matched;
    h.inSync = ev.counts.inSync;
    // Rows naming the sixteen against the peak of clean reads of the same
    // kind (health.mjs matchedVerdict): a clean-looking read that suddenly
    // names none of them is `unmatched`, never "✅ read" (§7).
    if (isClean(h.status)) {
      const mv = matchedVerdict({ adapter: r, matched: ev.counts.matched, deep: opts.deep || opts.offline, prev: prevState?.health?.[r.id] ?? null, year: got.totalYear ?? null });
      h.track = { ...(h.track ?? {}), ...mv.track };
      h.events = [...(h.events ?? []), ...mv.events];
      h.notes = [...mv.notes, ...(h.notes ?? [])];
      if (mv.status !== "ok") {
        h.status = mv.status;
        h.detail = mv.detail;
      }
    }
    if (isClean(h.status)) {
      for (const c of ev.candidates) today.push(c);
      for (const k of Object.keys(suppressed)) suppressed[k].push(...ev.suppressed[k]);
    } else if (ev.candidates.length) {
      h.quarantined = ev.candidates.length;
      quarantined.push({
        adapter: r.id,
        status: h.status,
        detail: h.detail ?? null,
        count: ev.candidates.length,
        // A few, for a human to see what the untrusted read produced — as
        // text only, with no fingerprint and no box.
        examples: ev.candidates.slice(0, QUARANTINE_EXAMPLES).map((c) => ({
          artistName: c.artistName,
          release: c.release ?? null,
          title: c.title,
          kind: c.kind,
          tierRaw: c.tierRaw ?? null,
          row: c.rows?.[0] ?? null,
        })),
      });
    }
  }

  const { watch, readings } = readWatch(config, outputs, health, index, prevState);
  const ladders = Object.fromEntries(REGISTRY.map((r) => [r.id, r.ladder ?? "standard"]));
  const merged = mergeRun({
    prev: prevState,
    prevStatus,
    today,
    date: opts.now,
    runId: process.env.GITHUB_RUN_ID ?? null,
    ticks: readTicks(prevBody),
    index,
    ladders,
    health,
    automated: new Set(AUTOMATED.map((r) => r.id)),
    watchReadings: readings,
    cursors: Object.fromEntries(Object.entries(outputs).map(([id, o]) => [id, o.cursor ?? null])),
  });
  for (const w of watch) {
    const was = prevState?.watch?.[w.id];
    w.changed = !!(was?.raw && w.reading && was.raw !== w.reading.raw);
    const now = merged.next.watch[w.id];
    w.since = now?.since ?? null;
    w.landed = now?.landed ?? null;
  }

  const notifyReasons = [...merged.notifyReasons];
  const automated = AUTOMATED.filter((r) => !opts.only || opts.only.includes(r.id));
  const clean = AUTOMATED.filter((r) => isClean(health[r.id]?.status));
  const warnings = [];
  if (automated.length && clean.length === 0) {
    notifyReasons.push("No register was read today — this run says nothing");
    console.log("::error::Cert watch: no automated register was read cleanly today");
  }

  let stateError = null;
  try {
    encodeState(merged.next);
  } catch (e) {
    if (!(e instanceof StateTooLarge)) throw e;
    stateError = `${e.message}; the previous state was kept`;
    notifyReasons.push(`State too large: ${e.message}`);
    console.log(`::error::Cert watch: ${e.message}`);
  }

  const isMonday = opts.now.getUTCDay() === 1;
  const notify = notifyReasons.length > 0;
  const writeIssue = !opts.dryRun && (!!opts.issueNumber || notify || (isMonday && config.weeklyTodo !== false));

  // Hosts in a fixed order (alphabetical), not in the order the network
  // happened to answer them.
  const byHost = {};
  for (const l of [...http.log].sort((a, b) => a.host.localeCompare(b.host, "en"))) byHost[l.host] = (byHost[l.host] ?? 0) + 1;
  const hosts = hostSummary(http.log);
  const week = isoWeek(opts.now);
  const results = {
    v: 1,
    date: opts.now.toISOString(),
    dateLabel: longDate(opts.now),
    dateLabelShort: shortDate(opts.now),
    runUrl: opts.runUrl ?? (process.env.GITHUB_RUN_ID && process.env.GITHUB_REPOSITORY ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null),
    durationMs: Date.now() - startedAt,
    dryRun: opts.dryRun,
    deep: opts.deep || opts.offline,
    offline: opts.offline,
    only: opts.only,
    registry: REGISTRY.map((r) => {
      const c = countryOf(r.country);
      const manual = (config.manualChecks ?? []).find((m) => m.id === r.manualCheck);
      return {
        id: r.id,
        country: r.country,
        flag: c.flag,
        countryName: c.name,
        body: r.body,
        programme: r.programme ?? null,
        class: r.class,
        step: r.step,
        built: !!r.built,
        registerUrl: r.registerUrl,
        humanCheck: r.humanCheck ?? null,
        manualCheckText: manual ? `open ${manual.url}, ${manual.check}` : null,
        heldBy: r.heldBy ?? null,
        staleAfterDays: config.staleAfterDays?.[r.id] ?? null,
        caveat: r.caveat ?? null,
        heldWhy: r.heldBy ? config.adapters?.[r.id]?.why ?? null : null,
        note: r.note ?? null,
      };
    }),
    health,
    candidates: merged.candidates,
    quarantined,
    cleared: merged.cleared,
    dismissedCount: merged.dismissedCount,
    suppressed,
    watch,
    manual: { week, checks: config.manualChecks ?? [], coverageNotes: config.coverageNotes ?? [] },
    state: stateError ? { ...(prevState ?? merged.next) } : merged.next,
    prevStateB64: prevB64,
    stateError,
    notify,
    notifyReasons,
    writeIssue,
    requests: { total: http.log.length, byHost, first: hosts.first, minGapMs: opts.offline ? {} : hosts.minGapMs },
    warnings,
  };

  const view = finalize(results, prevBody, prevB64);
  const { report } = await writeOutputs(opts, results, view);

  if (!opts.dryRun && !stateError) {
    await mkdir(opts.cache, { recursive: true });
    await writeFile(path.join(opts.cache, "state.json"), JSON.stringify(view.state));
  }

  if (opts.dryRun) {
    console.log(report);
  } else {
    const n = view.shown.length;
    console.log(`Cert watch: ${n} candidate(s) open, ${clean.length} of ${AUTOMATED.length} automated registers read cleanly; notify=${notify}, write_issue=${writeIssue}.`);
  }
  return 0;
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) {
  main().then(
    (code) => process.exit(code),
    (err) => {
      if (err instanceof ConfigError) {
        console.error(`REFUSING TO CONTINUE: ${err.message}`);
      } else {
        // A bug in match, report or state (not inside an adapter): exit 1 and
        // write no issue. Adapter failures never reach here — they are
        // per-register statuses.
        console.error("Cert watch failed:", err?.stack ?? err);
      }
      process.exit(1);
    }
  );
}

