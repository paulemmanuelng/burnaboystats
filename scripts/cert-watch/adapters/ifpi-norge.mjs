// IFPI Norge (NO) — ifpi.no/trofe/trofeoversikt/, the trophy list.
// Spec: docs/cert-watcher/SPEC.md §3 row 14, §3.3.
//
// Daily: `?pg=1`, the newest 100 trophies (1 request; the page is slow, 2–4 s,
// and the gap is never shortened for it). Deep (Mondays): `?aar=<year>`, this
// year's trophies, following the page's own pager (cap 10 pages).
//
// The trophy is an IMAGE — Trofe_GULL_… (Gull, Gold) or Trofe_PLATINA_…
// (Platina) — and the level is FREE TEXT in "Nivå": "1x", "1X", "x1", "X2",
// "2x", "1xx", blank, "Gull", "Platinum", "1x platina" all occur (the 23 Sep
// sweep's union of 2,809 rows). So the digits are the multiple; a Platina
// with no digits is ×1; a Gull with a level above 1 was never seen and is
// left unparsed, as is an image that is neither.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://ifpi.no/trofe/trofeoversikt/";
export const pageUrl = (n) => `${PAGE}?pg=${n}`;
export const yearUrl = (y) => `${PAGE}?aar=${y}`;
const IDENTITY = /<title>Trofeoversikt - IFPI/;
const SUCCESS = /class="table100-head"/;

const cell = (s) => collapse(decodeEntities(stripTags(s)));
const FORMAT = { singel: "single", album: "album" };

/** Trophy image + Nivå → {tier, x} or null. */
export function parseTrophy(img, niva) {
  const kind = /Trofe_GULL_/i.test(img ?? "") ? "Gold" : /Trofe_PLATINA_/i.test(img ?? "") ? "Platinum" : null;
  if (!kind) return null;
  const n = collapse(niva);
  const digits = n.match(/\d+/g);
  if (digits && digits.length > 1) return null; // "1x2"? never seen — not guessed
  const x = digits ? Number(digits[0]) : 1;
  if (!(x >= 1)) return null;
  if (!digits && n && !/^(gull|platina|platinum)$/i.test(n)) return null;
  if (kind === "Gold" && x !== 1) return null;
  return { tier: kind, x };
}

/** "25/08/2026" → "2026-08-25". */
export const isoOf = (dmy) => {
  const m = String(dmy ?? "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
};

/** Every trophy row, verbatim. */
export function parseRows(html, url) {
  const rows = [];
  for (const m of String(html ?? "").matchAll(/<tr class="">([\s\S]*?)<\/tr>/g)) {
    const tds = [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((t) => t[1]);
    if (tds.length !== 7) continue;
    const [dato, artist, tittel, selskap, formatRaw] = tds.slice(0, 5).map(cell);
    const img = (tds[5].match(/src="[^"]*\/(Trofe_[^"/]+)"/) ?? [])[1] ?? "";
    const niva = cell(tds[6]);
    rows.push({
      credit: artist,
      title: tittel,
      format: FORMAT[formatRaw.toLowerCase()] ?? "unknown",
      formatRaw,
      tierRaw: `${img || "(no trophy image)"} · Nivå "${niva}"`,
      reading: parseTrophy(img, niva),
      dateRaw: dato,
      url,
      raw: cap(`${dato} | ${artist} | ${tittel} | ${selskap} | ${formatRaw} | ${img || "(no image)"} | ${niva}`),
      extra: { selskap, image: img, niva },
    });
  }
  return rows;
}

/** The pager's current page and its next link, as the page prints them. */
export function parsePager(html) {
  const s = String(html ?? "");
  const cur = s.match(/pods-pagination-current\s*">\s*(\d+)\s*</);
  const next = s.match(/<a href="([^"]+)"\s*class="pods-pagination-label pods-pagination-next\s*"/);
  return { current: cur ? Number(cur[1]) : null, next: next ? new URL(decodeEntities(next[1]), PAGE).href : null };
}

function readPage(res, what, { page, year }) {
  const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `IFPI Norge ${what}: ${cls.detail}`);
  const html = String(res.body);
  const pager = parsePager(html);
  // Served-is-requested: the page number asked for, and for a year read, the
  // year selected in the page's own form and on every row.
  if (page != null && pager.current != null && pager.current !== page) {
    throw new AdapterError("mismatch", `IFPI Norge served page ${pager.current} for page ${page}`);
  }
  const rows = parseRows(html, res.url ?? PAGE);
  const trs = (html.match(/<tr class="">/g) ?? []).length;
  if (rows.length !== trs) throw new AdapterError("format", `IFPI Norge ${what}: ${rows.length} of ${trs} rows parsed`);
  if (year != null) {
    if (!new RegExp(`<option value=['"]${year}['"][^>]*selected`).test(html)) throw new AdapterError("mismatch", `IFPI Norge: the page does not say it is ${year}`);
    const other = rows.filter((r) => !String(r.dateRaw).endsWith(`/${year}`));
    if (other.length) throw new AdapterError("mismatch", `IFPI Norge served ${other.length} row(s) outside ${year} (${other[0].dateRaw})`);
  }
  return { rows, pager };
}

export const ifpiNorge = {
  id: "ifpi-norge",
  country: "NO",
  body: "IFPI Norge",
  programme: null,
  class: "AUTOMATE",
  step: "3b",
  hosts: ["ifpi.no"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "trophy date",
  humanCheck: "Open https://ifpi.no/trofe/trofeoversikt/?pg=1 and read the newest trophies; the image is the tier, Nivå the multiple.",
  minRows: 1,
  // DAVE | Location | Platina 1x (19/05/2026), the sweep's evidence row.
  // Checked on every run whose newest 100 (date-descending) still reach back
  // past 19/05/2026 — page 1 went back to 01/12/2025 on 24 Sep 2026 — and on
  // every deep run while the year read is 2026.
  control: {
    when: "deep",
    year: 2026,
    window: (got) => (got.window?.oldest ?? "9999") < "2026-05-19",
    rowId: "19/05/2026 | DAVE | Location",
    find: (r) => r.dateRaw === "19/05/2026" && r.credit === "DAVE" && r.title === "Location",
  },
  // The deep read (artist searches / the whole register or year) keeps its
  // rows naming the sixteen from week to week; the daily newest-first window
  // does not, so only deep reads are judged (health.mjs matchedVerdict).
  matchedFloor: { deep: true },
  total: null,
  parse: { rows: parseRows, trophy: parseTrophy, pager: parsePager, page: readPage },
  async read(ctx) {
    const notes = [];
    const first = readPage(expectOk(await ctx.request({ url: pageUrl(1), success: SUCCESS }), "page 1"), "page 1", { page: 1 });
    const rows = [...first.rows];
    if (ctx.deep) {
      const year = (ctx.now ?? new Date()).getUTCFullYear();
      let url = yearUrl(year);
      let n = 0;
      for (let p = 1; url && p <= 10; p++) {
        const got = readPage(expectOk(await ctx.request({ url, success: SUCCESS }), `${year} page ${p}`), `${year} page ${p}`, { page: p, year });
        rows.push(...got.rows);
        n += got.rows.length;
        url = got.pager.next;
      }
      notes.push(`deep read: ${n} trophies for ${year}`);
    }
    const isos = first.rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort();
    const top = isos.at(-1) ?? null;
    const year = (ctx.now ?? new Date()).getUTCFullYear();
    return {
      rows: [...new Map(rows.map((r) => [r.raw, r])).values()],
      // How far back the newest-first page 1 reaches (the control's window),
      // and the year a deep read covered (the control's and matched floor's).
      window: { oldest: isos[0] ?? null },
      ...(ctx.deep ? { years: [year], totalYear: year } : {}),
      newestDate: top,
      newest: top ? `newest trophy ${first.rows.find((r) => isoOf(r.dateRaw) === top).dateRaw}` : null,
      notes,
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
