// IFPI Austria (AT) — ifpi.at/auszeichnungen/, a FacetWP listing.
// Spec: docs/cert-watcher/SPEC.md §3 row 12, §3.3.
//
// Daily: `?fwp_per_page=100` — the newest-added 100 (1 request). ALWAYS send
// `fwp_per_page`: the default URL serves a stale cache (per_page 4, total_rows
// 5,982 on 24 Sep 2026, when the real register held 5,994). The page's own
// FacetWP pager must say it served the page size asked for; anything else is
// `mismatch` — a different page than the one requested.
// Deep (Mondays): `?fwp_per_page=7000`, the whole register (≈1.5 MB).
//
// Status: GOLD, PLATIN, `N-fach PLATIN` (and, in older rows, `Gold`, `Platin`,
// `N-fach GOLD`). The order is newest ADDED, not by date; some old rows have
// no date at all.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://ifpi.at/auszeichnungen/";
export const urlFor = (perPage) => `${PAGE}?fwp_per_page=${perPage}`;
export const DAILY_PER_PAGE = 100;
export const DEEP_PER_PAGE = 7000;
const IDENTITY = /<title>Auszeichnungen Archiv - IFPI Austria/;
const SUCCESS = /<!--fwp-loop-->/;

const cell = (s) => collapse(decodeEntities(stripTags(s)));
const FORMAT = { single: "single", album: "album" };
const TIERS = { gold: "Gold", platin: "Platinum" };

/** "GOLD", "Platin", "2-fach PLATIN", "3-fach GOLD" → {tier, x}; anything
 *  else (a "DIAMANT" never seen here, a blank) → null. */
export function parseTier(s) {
  const m = collapse(s).match(/^(?:(\d+)-fach\s+)?(gold|platin)$/i);
  if (!m) return null;
  const x = m[1] ? Number(m[1]) : 1;
  if (!(x >= 1)) return null;
  return { tier: TIERS[m[2].toLowerCase()], x };
}

/** "03.09.2026" → "2026-09-03". */
export const isoOf = (dmy) => {
  const m = String(dmy ?? "").match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
};

/** FacetWP's pager as the page prints it: {page, per_page, total_rows, total_pages}. */
export function parsePager(html) {
  const m = String(html ?? "").match(/"pager":\{([^}]*)\}/);
  if (!m) return null;
  const out = {};
  for (const kv of m[1].matchAll(/"(\w+)":(\d+)/g)) out[kv[1]] = Number(kv[2]);
  return out;
}

/** Every six-cell row of the awards table, verbatim. */
export function parseTable(html) {
  const s = String(html ?? "");
  const loop = s.indexOf("<!--fwp-loop-->");
  const body = loop >= 0 ? s.slice(loop) : s;
  const rows = [];
  const re = /<tr>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/g;
  for (const m of body.matchAll(re)) {
    const [credit, title, formatRaw, tierRaw, firma, dateRaw] = m.slice(1).map(cell);
    rows.push({
      credit,
      title,
      format: FORMAT[formatRaw.toLowerCase()] ?? "unknown",
      formatRaw,
      tierRaw,
      reading: parseTier(tierRaw),
      dateRaw,
      url: urlFor(DAILY_PER_PAGE),
      raw: cap(`${credit} | ${title} | ${formatRaw} | ${tierRaw} | ${firma} | ${dateRaw}`),
      extra: { firma },
    });
  }
  return rows;
}

/** One page, checked: the register's page, the page size asked for. */
export function readPage(res, perPage) {
  const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `IFPI Austria: ${cls.detail}`);
  const pager = parsePager(res.body);
  if (!pager || pager.per_page !== perPage) {
    throw new AdapterError(
      "mismatch",
      `IFPI Austria served per_page ${pager?.per_page ?? "?"} (total_rows ${pager?.total_rows ?? "?"}) for fwp_per_page=${perPage} — the stale default page, not the one requested`
    );
  }
  const rows = parseTable(res.body);
  const expected = Math.min(perPage, pager.total_rows);
  if (rows.length !== expected) throw new AdapterError("format", `IFPI Austria: ${rows.length} rows parsed where the pager promises ${expected}`);
  return { rows, pager };
}

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

export const ifpiAustria = {
  id: "ifpi-austria",
  country: "AT",
  body: "IFPI Austria",
  programme: null,
  class: "AUTOMATE",
  step: "3b",
  hosts: ["ifpi.at"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "award date (the list is ordered by date added)",
  humanCheck: "Open https://ifpi.at/auszeichnungen/?fwp_per_page=100 (never the bare page — it is a stale cache) and read the newest rows.",
  minRows: 1,
  // Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026 —
  // checked on deep runs, whose read is the whole register (fwp_per_page
  // 7000). Not daily: the newest 100 are in date-ADDED order, so no date
  // says whether the row is still among them.
  control: {
    when: "deep",
    rowId: "Shakira & Burna Boy | Dai Dai | PLATIN | 03.09.2026",
    find: (r) => r.credit === "Shakira & Burna Boy" && r.title === "Dai Dai" && r.tierRaw === "PLATIN" && r.dateRaw === "03.09.2026",
  },
  // The deep read (artist searches / the whole register or year) keeps its
  // rows naming the sixteen from week to week; the daily newest-first window
  // does not, so only deep reads are judged (health.mjs matchedVerdict).
  matchedFloor: { deep: true },
  // FacetWP's total_rows: the register's size (5,994 on 24 Sep 2026).
  total: "register",
  parse: { table: parseTable, pager: parsePager, tier: parseTier, page: readPage },
  async read(ctx) {
    const notes = [];
    const daily = readPage(expectOk(await ctx.request({ url: urlFor(DAILY_PER_PAGE), success: SUCCESS }), "IFPI Austria newest 100"), DAILY_PER_PAGE);
    let rows = [...daily.rows];
    let total = daily.pager.total_rows;
    if (ctx.deep) {
      const all = readPage(expectOk(await ctx.request({ url: urlFor(DEEP_PER_PAGE), success: SUCCESS, timeoutMs: 90000 }), "IFPI Austria full register"), DEEP_PER_PAGE);
      rows = [...rows, ...all.rows];
      total = all.pager.total_rows;
      notes.push(`deep read: all ${fmt(all.rows.length)} rows`);
    }
    const isos = daily.rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort();
    const top = isos.at(-1) ?? null;
    return {
      // A row read twice (the newest 100 and the full register) is one row.
      rows: [...new Map(rows.map((r) => [r.raw, r])).values()],
      total,
      newestDate: top,
      newest: `${fmt(total)} awards in the register (read with fwp_per_page; the default page is a stale cache)${top ? ` · newest date ${daily.rows.find((r) => isoOf(r.dateRaw) === top).dateRaw}` : ""}`,
      notes,
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
