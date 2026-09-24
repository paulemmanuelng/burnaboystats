// Dedupe with no repo writes — PURE. Spec: docs/cert-watcher/SPEC.md §6.
//
// State lives in a hidden, base64 block at the end of the issue body, so
// register text can never close the comment it sits in. The body is rewritten
// every run; ticks Paul makes in it are read back from it.

import { readingId, rankOf, compareRank, normTitle, tierLabel } from "./match.mjs";

export const STATE_TAG = "cert-watch:state:v1";
export const STATE_CAP = 30000; // characters of base64

export class StateTooLarge extends Error {}

export function emptyState() {
  return { v: 1, updated: null, run: null, reset: true, open: {}, dismissed: {}, watch: {}, health: {}, cursors: {}, manualWeek: null, manualTicks: [] };
}

export function encodeState(state) {
  const b64 = Buffer.from(JSON.stringify(state), "utf8").toString("base64");
  if (b64.length > STATE_CAP) throw new StateTooLarge(`state is ${b64.length} characters of base64; the cap is ${STATE_CAP}`);
  return b64;
}

export const stateBlock = (b64) => `<!-- ${STATE_TAG}\n${b64}\n-->`;

/**
 * Read the state block back. Takes the LAST block in the body, and accepts
 * only base64 between the markers. Returns { state, status } where status is
 * "ok" | "missing" | "corrupt".
 */
export function extractState(body) {
  const text = String(body ?? "");
  const re = new RegExp(`<!-- ${STATE_TAG}\\n([A-Za-z0-9+/=\\n]*?)\\n-->`, "g");
  const all = [...text.matchAll(re)];
  if (!all.length) return { state: null, status: text.includes(STATE_TAG) ? "corrupt" : "missing" };
  try {
    const json = JSON.parse(Buffer.from(all.at(-1)[1].replace(/\n/g, ""), "base64").toString("utf8"));
    if (json?.v !== 1 || typeof json.open !== "object" || typeof json.dismissed !== "object") {
      return { state: null, status: "corrupt" };
    }
    return { state: { ...emptyState(), ...json, reset: false }, status: "ok" };
  } catch {
    return { state: null, status: "corrupt" };
  }
}

/** Fingerprints Paul ticked: `- [x] … <!-- fp:0123456789abcdef -->`. */
export function readTicks(body) {
  const fps = new Set();
  for (const m of String(body ?? "").matchAll(/^\s*[-*] \[[xX]\] .*?<!-- fp:([0-9a-f]{16}) -->/gm)) fps.add(m[1]);
  return fps;
}

/** Manual checks ticked for a given ISO week: `<!-- manual:<id>:<week> -->`. */
export function readManualTicks(body, week) {
  const ids = new Set();
  for (const m of String(body ?? "").matchAll(/^\s*[-*] \[[xX]\] .*?<!-- manual:([a-z0-9-]+):(\d{4}-W\d{2}) -->/gm)) {
    if (m[2] === week) ids.add(m[1]);
  }
  return ids;
}

/** ISO 8601 week, "2026-W39". */
export function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Does the site now hold at least `reading` for this candidate? Where the
 *  candidate's title fits more than one release (no format, an album and a
 *  single alike — an AMBIGUOUS lead), every one of them must hold it: that
 *  is the only state in which evaluateRows would not have raised it. */
export function siteCaughtUp(index, cand, ladder) {
  const a = index.artists[cand.artist];
  if (!a) return false;
  const nt = cand.normTitle ?? normTitle(cand.release ?? cand.title);
  const fits = (r) => !cand.format || cand.format === "unknown" || r.format === cand.format;
  const own = (a.byTitle.get(nt) ?? []).filter(fits);
  const rels = [...new Set(own.length ? own : (a.byAlt.get(nt) ?? []).filter(fits))];
  if (!rels.length) return false;
  if (!cand.reading) return false; // an unreadable tier is resolved by a human, never inferred
  const rr = rankOf(ladder, cand.reading);
  return rels.every((rel) => {
    const h = rel.holdings[`${cand.country}|${cand.programme ?? ""}`];
    const hr = h ? rankOf(ladder, h) : null;
    return !!hr && !!rr && compareRank(hr, rr) >= 0;
  });
}

const STREAK_NOTIFY = 3;

/**
 * Merge today's run into the previous state (§6.2–6.4).
 *
 * input: { prev, prevStatus, today, date, runId, ticks, index, ladders,
 *          health: {id → {status, detail}}, automated: Set<id>,
 *          watchReadings: {id → {raw}}, cursors: {id → cursor} }
 *   today: candidates from evaluateRows, across adapters
 *   ladders: {adapterId → ladder}
 *
 * Returns { next, candidates, cleared, dismissedCount, notifyReasons }.
 */
export function mergeRun(input) {
  const { prev: prevIn, prevStatus, today, date, runId, ticks, index, ladders, health, automated, watchReadings, cursors } = input;
  const reset = !prevIn;
  const prev = prevIn ?? emptyState();
  const notify = [];
  const next = emptyState();
  next.reset = reset;
  next.updated = new Date(date).toISOString().replace(/\.\d{3}Z$/, "Z");
  next.run = runId ?? null;
  const day = next.updated.slice(0, 10);

  if (reset) {
    notify.push(
      prevStatus === "corrupt"
        ? "State could not be read — every open candidate is listed as new"
        : "No previous state — this is the first run (or the state was reset), so every open candidate is listed as new"
    );
  }

  // Dismissals: everything Paul ticked, kept forever.
  next.dismissed = { ...prev.dismissed };
  for (const fp of ticks ?? []) if (!next.dismissed[fp]) next.dismissed[fp] = day;

  const candidates = [];
  let dismissedCount = 0;
  const seenKeys = new Set();
  for (const c of today) {
    seenKeys.add(c.key);
    if (next.dismissed[c.fp]) {
      dismissedCount++;
      continue;
    }
    const was = prev.open[c.key];
    let status;
    let firstSeen = day;
    if (was && was.fp === c.fp) {
      status = "open";
      firstSeen = was.firstSeen ?? day;
    } else if (was) {
      status = "changed";
      notify.push(`changed: ${c.artistName} — "${c.release ?? c.title}" · ${c.adapter} (${was.reading?.raw ?? "?"} → ${c.tierRaw ?? "?"})`);
    } else {
      status = "new";
      notify.push(`new: ${c.artistName} — "${c.release ?? c.title}" · ${c.adapter}`);
    }
    candidates.push({ ...c, status, firstSeen });
  }

  // Carried-over candidates: resolved, or still open.
  const cleared = [];
  for (const [key, was] of Object.entries(prev.open)) {
    if (seenKeys.has(key)) continue;
    if (next.dismissed[was.fp]) continue;
    const ladder = ladders[was.adapter] ?? "standard";
    if (siteCaughtUp(index, was, ladder)) {
      cleared.push({ key, ...was });
      continue;
    }
    const st = health[was.adapter]?.status;
    candidates.push({
      ...was,
      key,
      status: "open",
      carried: true,
      notReRead: st === "ok" || st === "stale" ? "not re-read today (outside today's window)" : "register not read today",
    });
  }

  for (const c of candidates) {
    next.open[c.key] = {
      fp: c.fp,
      kind: c.kind,
      firstSeen: c.firstSeen,
      lastSeen: c.carried ? c.lastSeen ?? c.firstSeen : day,
      reading: c.reading ? { ...c.reading, raw: c.tierRaw ?? c.reading.raw ?? null } : null,
      tierRaw: c.tierRaw ?? null,
      adapter: c.adapter,
      artist: c.artist,
      artistName: c.artistName,
      release: c.release ?? null,
      title: String(c.title ?? "").slice(0, 120),
      country: c.country,
      programme: c.programme ?? null,
      format: c.format,
      normTitle: c.normTitle,
      dateRaw: c.dateRaw ?? null,
      url: c.url ?? null,
    };
  }

  // Register health — automated registers that were actually run: streaks
  // of reads that were not clean, floors, and staleness (§6.1, §6.4, §7).
  // A read that was not clean keeps the floor it had; only a clean read
  // (health.mjs's `track`) moves it.
  const FIRST_TIME = { format: "format changed", mismatch: "served a different page", shrank: "register shrank", unmatched: "matched rows dropped" };
  for (const [id, h] of Object.entries(health)) {
    if (!automated.has(id)) continue;
    if (["not-built", "held-robots", "held-policy", "skipped", "manual"].includes(h.status)) {
      if (prev.health[id]) next.health[id] = prev.health[id];
      continue;
    }
    const was = prev.health[id] ?? { status: "ok", fails: 0 };
    const keep = {
      floor: was.floor ?? null,
      low: was.low ?? null,
      floorYear: was.floorYear ?? null,
      newest: was.newest ?? null,
      staleSince: null,
      matched: was.matched ?? null,
      matchedLow: was.matchedLow ?? null,
      matchedYear: was.matchedYear ?? null,
    };
    const track = h.track ? { ...keep, ...h.track } : keep;
    const clean = h.status === "ok" || h.status === "stale";
    const tracked = Object.fromEntries(Object.entries(track).filter(([, v]) => v !== null && v !== undefined));
    if (clean) {
      if ((was.fails ?? 0) >= STREAK_NOTIFY) notify.push(`recovered: ${id} read cleanly again after ${was.fails} runs`);
      const sameStatus = was.status === h.status;
      next.health[id] = { status: h.status, since: sameStatus ? was.since ?? day : day, fails: 0, ...tracked };
      if (h.status === "stale" && was.status !== "stale") notify.push(`${id}: stale — ${h.detail ?? "nothing newer than its usual gap"}`);
      if (h.status === "ok" && was.status === "stale") notify.push(`${id}: no longer stale (newest ${track.newest ?? "?"})`);
    } else {
      const fails = (was.fails ?? 0) + 1;
      const wasClean = was.status === "ok" || was.status === "stale";
      next.health[id] = { status: h.status, since: wasClean ? day : was.since ?? day, fails, ...tracked };
      if (fails === STREAK_NOTIFY) notify.push(`not read ${STREAK_NOTIFY} runs running: ${id} (${h.status})`);
      if (FIRST_TIME[h.status] && was.status !== h.status) {
        notify.push(`${id}: ${FIRST_TIME[h.status]}${(h.status === "shrank" || h.status === "unmatched") && h.detail ? ` — ${h.detail}` : ""} — first time`);
      }
    }
    for (const e of h.events ?? []) if (e.type === "floor-lowered") notify.push(`${id}: ${e.text}`);
  }

  // Watchlist readings and landings (§5.4). A change in the reading
  // notifies whether or not the item lands; a landing notifies once and is
  // kept (the item renders "landed" until someone removes it from config).
  for (const [id, w] of Object.entries(watchReadings ?? {})) {
    const was = prev.watch[id] ?? null;
    const entry = { raw: was?.raw ?? null, since: was?.since ?? null, landed: was?.landed ?? null };
    if (w?.raw) {
      if (was?.raw && was.raw !== w.raw) notify.push(`watchlist ${id}: ${was.raw} → ${w.raw}`);
      entry.since = was?.raw === w.raw ? was.since ?? day : day;
      entry.raw = w.raw;
    }
    if (w?.landedNow && !entry.landed) {
      entry.landed = day;
      notify.push(`watchlist ${id}: landed — ${w.landedText ?? "its target is met"}; remove it from config.json`);
    }
    if (entry.raw || entry.landed) next.watch[id] = entry;
  }

  // Manual-check ticks: carried; finalize() resets them when the ISO week turns.
  next.manualWeek = prev.manualWeek ?? null;
  next.manualTicks = [...(prev.manualTicks ?? [])];

  // Cursors advance only for adapters that read cleanly.
  next.cursors = { ...prev.cursors };
  for (const [id, cur] of Object.entries(cursors ?? {})) if (health[id]?.status === "ok" && cur) next.cursors[id] = cur;

  return { next, candidates, cleared, dismissedCount, notifyReasons: notify };
}

/**
 * A watchlist item against today's reading and the site (§5.4). Both targets
 * are derived at run time, never typed:
 *   until {register: "atLeastSite"}  the site published ahead of the register;
 *        lands when the register's reading ranks at or above the site holding.
 *   until {site: {tier, x}}          a lead the site has not confirmed; lands
 *        when the site's holding ranks at or above the target.
 * Returns { landed, siteAhead, landsWhen, landedText }.
 */
export function watchVerdict(w, { reading, readClean, holding, ladder, body }) {
  const u = w.until ?? {};
  if (u.site) {
    const target = { tier: u.site.tier, x: u.site.x ?? 1 };
    const hr = holding ? rankOf(ladder, holding) : null;
    const tr = rankOf(ladder, target);
    const landed = !!hr && !!tr && compareRank(hr, tr) >= 0;
    return {
      landed,
      siteAhead: false,
      landsWhen: `the site holds ${tierLabel(target)} (added by hand after a human confirms it at the ${body})`,
      landedText: `the site now holds ${tierLabel(holding)}`,
    };
  }
  if (u.register === "atLeastSite") {
    const hr = holding ? rankOf(ladder, holding) : null;
    const rr = reading ? rankOf(ladder, reading) : null;
    const landed = !!readClean && !!rr && (!hr || compareRank(rr, hr) >= 0);
    const siteAhead = !!hr && !!rr && compareRank(hr, rr) > 0;
    let landsWhen = "the register's reading ranks at or above the site's holding";
    if (holding && ladder === "riaa" && hr) {
      landsWhen = hr[0] === 0.5 ? "the register reads Gold (level 0) or more" : `the register reads level ${hr[0]} or more`;
    } else if (holding) {
      landsWhen = `the register reads ${tierLabel(holding)} or more`;
    }
    return { landed, siteAhead, landsWhen, landedText: `the register now matches the site (${holding ? tierLabel(holding) : "nothing held"})` };
  }
  return { landed: false, siteAhead: false, landsWhen: "?", landedText: "" };
}

/** Apply ticks from a body to finished results (render time, idempotent):
 *  ticked candidates are dismissed and hidden. */
export function applyTicks(candidates, state, ticks, day) {
  const dismissed = { ...state.dismissed };
  let hidden = 0;
  const shown = [];
  for (const c of candidates) {
    if (ticks.has(c.fp) || dismissed[c.fp]) {
      if (!dismissed[c.fp]) dismissed[c.fp] = day;
      hidden++;
      continue;
    }
    shown.push(c);
  }
  const open = Object.fromEntries(Object.entries(state.open).filter(([, v]) => !dismissed[v.fp]));
  return { shown, hidden, state: { ...state, dismissed, open } };
}

export { readingId };
