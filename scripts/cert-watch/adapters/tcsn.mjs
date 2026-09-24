// TurnTable Certification (TCSN, NG) — turntablecharts.com/certification.
// Spec: docs/cert-watcher/SPEC.md §3 row 21, §3.3.
//
// Daily: GET the page (conditional on its ETag; the body is kept for a 304)
// and parse `<script id="__NEXT_DATA__">` → props.pageProps.certEntries
// (1 request; ~10 MB raw, ~130–535 KB gzipped). The Next.js build id changes
// on every redeploy — three in about 24 hours on 23–24 Sep 2026 with the same
// 500 rows — so it is printed, never compared. What is compared is a sha256
// of the normalised rows: the change detector.
// Deep (Mondays): the Wayback Machine's CDX index for new captures of the page
// since the last run — a LEAD for a human (the live list shows 500 rows), never
// a register read; a CDX failure is a note, not a failed register.
//
// TCSN is request-based and paid; Silver is a real tier (`Silver_1`); the live
// list caps at 500 and shows no Silver, so absence is never evidence. Titles
// can carry an OWNER TAG — "Reason (Omah Lay)" is Omah Lay's, never Asake's
// "Reason" — handled in match.mjs (ownerTags). The report carries TCSN's
// standing caveat on every NG line.

import { createHash } from "node:crypto";
import { AdapterError, expectOk, decodeEntities, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://turntablecharts.com/certification";
export const CDX = "https://web.archive.org/cdx/search/cdx";
export const CAP = 500;
const SUCCESS = /<script id="__NEXT_DATA__"/;
const TIERS = { silver: "Silver", gold: "Gold", platinum: "Platinum", diamond: "Diamond" };
const FORMAT = { single: "single", album: "album", ep: "unknown" };
export const CAVEAT = "TCSN is request-based and paid: a title can be certifiable and not listed, and the live list shows at most 500 rows and no Silver";

/** "Platinum_8" → {Platinum, 8}; unseen → null. */
export function parseMilestone(s) {
  const m = collapse(s).match(/^(silver|gold|platinum|diamond)_(\d+)$/i);
  if (!m) return null;
  const x = Number(m[2]);
  return x >= 1 ? { tier: TIERS[m[1].toLowerCase()], x } : null;
}

/** The page's __NEXT_DATA__ → {buildId, entries}. */
export function parseNextData(html) {
  const m = String(html ?? "").match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!m) throw new AdapterError("format", "TCSN: no __NEXT_DATA__");
  return fromNextData(m[1]);
}

/** A __NEXT_DATA__ JSON text → {buildId, entries}. */
export function fromNextData(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "TCSN: __NEXT_DATA__ is not JSON");
  }
  // Served-is-requested: the Next.js page the data belongs to.
  if (d?.page !== "/certification") throw new AdapterError("mismatch", `TCSN: __NEXT_DATA__ is for page "${d?.page}", not /certification`);
  const entries = d?.props?.pageProps?.certEntries;
  if (!Array.isArray(entries)) throw new AdapterError("format", "TCSN: no props.pageProps.certEntries");
  return { buildId: d.buildId ?? null, entries };
}

/** sha256 of the rows, normalised (key order fixed, ids dropped): what the
 *  watcher compares from run to run. The build id is not in it. */
export function rowsHash(entries) {
  const norm = entries
    .map((e) => [e.artiste, e.title, e.milestone, e.format, e.label, e.certifiedDate, !!e.isClaimed].map((v) => (typeof v === "string" ? collapse(v) : v)))
    .map((r) => JSON.stringify(r))
    .sort();
  return createHash("sha256").update(norm.join("\n")).digest("hex");
}

/** Entries → rows (§2.5), verbatim. */
export function toRows(entries) {
  return entries.map((e) => {
    const credit = collapse(decodeEntities(e?.artiste ?? ""));
    const title = collapse(decodeEntities(e?.title ?? ""));
    const date = String(e?.certifiedDate ?? "");
    return {
      rowId: e?.id != null ? String(e.id) : null,
      credit,
      title,
      format: FORMAT[String(e?.format ?? "").toLowerCase()] ?? "unknown",
      formatRaw: e?.format ?? "",
      tierRaw: e?.milestone ?? "",
      reading: parseMilestone(e?.milestone ?? ""),
      dateRaw: date,
      url: PAGE,
      raw: cap(`${credit} | ${title} | ${e?.milestone ?? ""} | ${e?.format ?? ""} | ${e?.label ?? ""} | ${date} | isClaimed ${!!e?.isClaimed}`),
      extra: { isClaimed: !!e?.isClaimed, label: e?.label ?? "" },
    };
  });
}

/** The CDX answer (output=json): the capture timestamps after `from`. */
export function parseCdx(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    return null;
  }
  if (!Array.isArray(d)) return null;
  const [head, ...rows] = d;
  const ts = Array.isArray(head) ? head.indexOf("timestamp") : -1;
  return ts < 0 ? [] : rows.map((r) => r[ts]).filter(Boolean);
}

export const tcsn = {
  id: "tcsn",
  country: "NG",
  body: "TurnTable (TCSN)",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["turntablecharts.com", "web.archive.org"],
  registerUrl: PAGE,
  ownerTags: true,
  caveat: CAVEAT,
  ladder: "standard",
  dateKind: "certified date",
  humanCheck: "Open https://turntablecharts.com/certification (500-row cap, no Silver shown) and read the rows for the 16 names.",
  minRows: 1,
  // Asake | Lonely At The Top | Platinum_8 — checked DAILY: the daily read is
  // the whole live list, and its 500 rows were the same in the 23 Sep JSON and
  // the 24 Sep HTML (three build ids, one rows hash). If TurnTable ever swaps
  // the 500 for a new batch, the row goes and the read says so ("control row
  // missing"); config.controls.tcsn then names a row from a saved capture.
  control: { when: "daily", rowId: "Asake | Lonely At The Top | Platinum_8", find: (r) => r.credit === "Asake" && r.title === "Lonely At The Top" && r.tierRaw === "Platinum_8" },
  // The whole live list is read every day, so the rows naming the sixteen
  // (291 on 24 Sep 2026) persist: a read naming under half of them is
  // `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  // The live cap: fewer rows than 500 is "shrank".
  total: "page",
  parse: { nextData: parseNextData, fromNextData, milestone: parseMilestone, rowsHash, rows: toRows, cdx: parseCdx },
  async read(ctx) {
    const notes = [];
    const res = expectOk(await ctx.request({ url: PAGE, success: SUCCESS, conditional: true, timeoutMs: 90000 }), "TCSN");
    const cls = classifyPage(res, { identity: /<title>[^<]*<\/title>/, success: SUCCESS });
    if (cls.kind !== "ok") throw new AdapterError(cls.kind, `TCSN: ${cls.detail}`);
    const { buildId, entries } = parseNextData(res.body);
    const hash = rowsHash(entries);
    const was = ctx.cursor?.rowsHash ?? null;
    const since = was === hash ? ctx.cursor?.since ?? null : (ctx.now ?? new Date()).toISOString().slice(0, 10);
    notes.push(
      `${entries.length} rows (the live cap is ${CAP}; no Silver shown)${res.notModified ? " · unchanged (304)" : ""} · ${was == null ? "first read" : was === hash ? `rows unchanged since ${ctx.cursor?.since ?? "the last run"}` : "rows CHANGED since the last run"} · build ${buildId ?? "?"} (printed, never compared)`
    );
    if (ctx.deep) {
      const from = (ctx.cursor?.cdxAfter ?? "20260923000000").slice(0, 14);
      const url = `${CDX}?${new URLSearchParams({ url: "turntablecharts.com/certification", output: "json", from, fl: "timestamp,statuscode", filter: "statuscode:200" })}`;
      const cdx = await ctx.request({ url, success: /\[/ });
      const caps = cdx.ok ? parseCdx(cdx.body) : null;
      if (caps == null) notes.push(`Wayback CDX not read (${cdx.ok ? "not JSON" : cdx.detail}) — a lead only, not a register read`);
      else notes.push(caps.length ? `Wayback: ${caps.length} new capture(s) since ${from} (newest ${caps.at(-1)}) — a lead for a human` : `Wayback: no new capture since ${from}`);
    }
    const dates = entries.map((e) => String(e.certifiedDate ?? "").slice(0, 10)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
    return {
      rows: toRows(entries),
      total: entries.length,
      newestDate: null,
      newest: `newest certified date ${dates.at(-1) ?? "?"}`,
      notes,
      cursor: { rowsHash: hash, since, buildId, cdxAfter: ctx.deep ? (ctx.now ?? new Date()).toISOString().replace(/\D/g, "").slice(0, 14) : ctx.cursor?.cdxAfter ?? null },
    };
  },
};
