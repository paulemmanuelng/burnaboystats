// RMNZ (NZ) — the certification tables RadioScope publishes (TablePress 2052
// singles, 2051 albums). Spec: docs/cert-watcher/SPEC.md §3 row 19, §3.3.
//
// Each table is server-side (DataTables SSP): the page carries a per-page-load
// ajax URL and token in its `DT_TP['<id>']` block, and the JSON comes from
// that URL. So each read is a pair — the page, then the SSP call, built with
// URLSearchParams (hand-built strings break on `[` `]`):
//   daily   the newest 100 of each table, ordered by date certified (col 4) desc
//   deep    the newest 500, and `search[value]` for the control title
// The server is BitNinja-WafPro: a block is a challenge and the adapter stops.
//
// Rows are CUMULATIVE — each step its own row (Raindance: Gold 2026-02-05,
// Plat x1 2026-03-19, Plat x2 2026-08-27) — so the highest reading for a
// record is its current tier. `recordsTotal` is the floor.

import { AdapterError, expectOk, decodeEntities, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const TABLES = [
  { id: "2052", format: "single", page: "https://www.radioscope.co.nz/2024/04/06/single-cert-search/" },
  { id: "2051", format: "album", page: "https://www.radioscope.co.nz/2024/04/06/album-cert-search/" },
];
const PAGE_IDENTITY = /<title>(?:Single|Album) Certification Search &#8211; RadioScope<\/title>/;
const SSP_SUCCESS = /"recordsTotal"/;

/** "Gold", "Plat x2", "Plat x 2", "Plat", "plat x1" (as printed) → {tier, x}. */
export function parseLevel(s) {
  const t = collapse(s).toLowerCase();
  if (t === "gold") return { tier: "Gold", x: 1 };
  const m = t.match(/^plat(?:\s*x\s*(\d+))?$/);
  if (!m) return null;
  const x = m[1] ? Number(m[1]) : 1;
  return x >= 1 ? { tier: "Platinum", x } : null;
}

/** The page's own ajax URL (with its token) for a table, or null. */
export function ajaxUrl(html, tableId) {
  const m = String(html ?? "").match(new RegExp(`DT_TP\\['${tableId}'\\][\\s\\S]*?url:'([^']+)'`));
  return m ? m[1] : null;
}

/** The SSP query, exactly as the page's DataTable sends it. */
export function sspUrl(base, { start = 0, length = 100, search = "" } = {}) {
  const p = new URLSearchParams();
  p.set("draw", "1");
  for (let i = 0; i < 5; i++) {
    p.set(`columns[${i}][data]`, String(i));
    p.set(`columns[${i}][name]`, "");
    p.set(`columns[${i}][searchable]`, "true");
    p.set(`columns[${i}][orderable]`, "true");
    p.set(`columns[${i}][search][value]`, "");
    p.set(`columns[${i}][search][regex]`, "false");
  }
  p.set("order[0][column]", "4");
  p.set("order[0][dir]", "desc");
  p.set("start", String(start));
  p.set("length", String(length));
  p.set("search[value]", search);
  p.set("search[regex]", "false");
  return `${base}${base.includes("?") ? "&" : "?"}${p}`;
}

/** The SSP JSON → {total, filtered, rows}. */
export function parseSsp(text, { format, table }) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", `RMNZ ${table}: the SSP answer is not JSON`);
  }
  if (!d || !Array.isArray(d.data) || typeof d.recordsTotal !== "number") throw new AdapterError("format", `RMNZ ${table}: no data / recordsTotal`);
  const rows = d.data.map((r) => {
    if (!Array.isArray(r) || r.length !== 5) throw new AdapterError("format", `RMNZ ${table}: a row without five cells`);
    const [, artist, title, level, date] = r.map((c) => collapse(decodeEntities(String(c ?? ""))));
    return {
      credit: artist,
      title,
      format,
      formatRaw: format === "single" ? "Single (table 2052)" : "Album (table 2051)",
      tierRaw: level,
      reading: parseLevel(level),
      dateRaw: date,
      url: TABLES.find((t) => t.id === table).page,
      raw: cap(`${artist} | ${title} | ${level} | ${date}`),
      extra: { table },
    };
  });
  return { total: d.recordsTotal, filtered: d.recordsFiltered, rows };
}

/** One table read: a fresh page load for its token, then the SSP call. */
async function readTable(ctx, t, opts, repeat) {
  const page = expectOk(await ctx.request({ url: t.page, success: /DT_TP\[/, repeat }), `RMNZ ${t.id} page`);
  const cls = classifyPage(page, { identity: PAGE_IDENTITY, success: new RegExp(`DT_TP\\['${t.id}'\\]`) });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `RMNZ ${t.id} page: ${cls.detail}`);
  const base = ajaxUrl(page.body, t.id);
  if (!base) throw new AdapterError("format", `RMNZ ${t.id}: no ajax URL in the page's DT_TP['${t.id}'] block`);
  if (new URL(base).host !== new URL(t.page).host) throw new AdapterError("mismatch", `RMNZ ${t.id}: the ajax URL is on another host (${new URL(base).host})`);
  const res = expectOk(
    await ctx.request({ url: sspUrl(base, opts), headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest", Referer: t.page }, success: SSP_SUCCESS }),
    `RMNZ ${t.id} SSP`
  );
  return parseSsp(res.body, { format: t.format, table: t.id });
}

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

export const rmnz = {
  id: "rmnz",
  country: "NZ",
  body: "RMNZ (RadioScope)",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["www.radioscope.co.nz"],
  registerUrl: TABLES[0].page,
  ladder: "standard",
  dateKind: "date certified",
  humanCheck: "Search RadioScope's single and album cert tables for each name; rows are cumulative, so the latest row is the current tier.",
  minRows: 1,
  // Dave feat. Tems | Raindance | Plat x2 | 2026-08-27 — on the deep search
  // for "Raindance"; and on every run whose newest singles (date-descending)
  // still reach back past 2026-08-27.
  control: {
    when: "deep",
    window: (got) => (got.window?.singlesOldest ?? "9999") < "2026-08-27",
    rowId: "Dave feat. Tems | Raindance | Plat x2",
    find: (r) => r.credit === "Dave feat. Tems" && r.title === "Raindance" && r.tierRaw === "Plat x2",
  },
  // recordsTotal of both tables (24,435 singles on 24 Sep 2026).
  total: "register",
  parse: { level: parseLevel, ajax: ajaxUrl, ssp: parseSsp, sspUrl },
  async read(ctx) {
    const rows = [];
    const notes = [];
    let total = 0;
    let n = 0;
    let singlesOldest = null;
    for (const t of TABLES) {
      const got = await readTable(ctx, t, { length: ctx.deep ? 500 : 100 }, n++);
      rows.push(...got.rows);
      total += got.total;
      notes.push(`${t.format}s: ${fmt(got.total)} rows`);
      if (t.format === "single") singlesOldest = got.rows.map((r) => r.dateRaw).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort()[0] ?? null;
    }
    if (ctx.deep) {
      const got = await readTable(ctx, TABLES[0], { length: 100, search: "Raindance" }, n++);
      rows.push(...got.rows);
      notes.push(`control search "Raindance": ${got.filtered} row(s)`);
    }
    const dates = rows.map((r) => r.dateRaw).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
    const top = dates.at(-1) ?? null;
    return {
      rows: [...new Map(rows.map((r) => [`${r.extra.table}|${r.raw}`, r])).values()],
      total,
      // How far back the newest-first singles read reaches (the control's window).
      window: { singlesOldest },
      newestDate: top,
      newest: `${fmt(total)} rows; newest ${top ?? "?"}`,
      notes,
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
