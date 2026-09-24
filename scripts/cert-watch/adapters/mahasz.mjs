// MAHASZ (HU) — slagerlistak.hu, "Arany- és platinalemezek › Adatbázis".
// Spec: docs/cert-watcher/SPEC.md §3 row 13, §3.3.
//
// Daily: this year's page, /arany-es-platinalemezek/adatbazis/YYYY (1
// request); in January the previous year's too. Deep (Mondays): the Kereső
// form, POST eloado=<term> for each search term — the register's own search.
//
// The award is an ICON, legend checked at the body in the 23 Sep sweep (a
// Kereső search with minosites=1, "Aranylemez", returns only fa-circle rows):
//   fa-circle                                   Arany (Gold)
//   fa-play, optionally <span arany_platina_db>N  Platina ×N (none printed = ×1)
// Anything else is unparsed. The register prints the award YEAR only, and no
// format (albums and singles share the list), so a row locates by artist and
// title alone. robots.txt blocks ClaudeBot only; `*` may read these pages.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const BASE = "https://slagerlistak.hu/arany-es-platinalemezek";
export const yearUrl = (y) => `${BASE}/adatbazis/${y}`;
export const SEARCH = `${BASE}/kereso`;
const YEAR_IDENTITY = /<title>Adatbázis - Arany- és platinalemezek/;
const SEARCH_IDENTITY = /<title>Kereső - Arany- és platinalemezek/;
const ROWS = /class="ap_lemez_sor"/;
/** The search form, whatever it found — its absence is a changed page. */
const SEARCH_FORM = /<form method="post" name="kereso"/;

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** The award cell → {tier, x} or null, and its verbatim form. */
export function parseAward(iconCell) {
  const s = String(iconCell ?? "");
  const db = s.match(/<span class="arany_platina_db">(\d+)<\/span>/);
  const icon = s.match(/<i class="([^"]+)"><\/i>/);
  const cls = icon ? icon[1] : "";
  const raw = `${cls || "(no icon)"}${db ? ` · arany_platina_db ${db[1]}` : ""}`;
  if (/\bfa-circle\b/.test(cls) && !db) return { raw, reading: { tier: "Gold", x: 1 } };
  if (/\bfa-play\b/.test(cls)) {
    const x = db ? Number(db[1]) : 1;
    return { raw, reading: x >= 1 ? { tier: "Platinum", x } : null };
  }
  return { raw, reading: null };
}

/** Every `ap_lemez_sor` row, verbatim. */
export function parseRows(html, url) {
  const rows = [];
  const re =
    /<td class="ap_lemez_sor"><span class="eloado">([\s\S]*?)<\/span><br \/>([\s\S]*?)<br \/><span class="kiado_sor">([\s\S]*?)<\/span><\/td>\s*<td class="arany_platina_sor">([\s\S]*?)<\/td>\s*<td class="ap_dij_ev">([\s\S]*?)<\/td>\s*<td class="logo_sor">([\s\S]*?)<\/td>/g;
  for (const m of String(html ?? "").matchAll(re)) {
    const credit = cell(m[1]);
    const title = cell(m[2]);
    const kiado = cell(m[3]);
    const award = parseAward(m[4]);
    const year = cell(m[5]);
    const lemez = m[6].match(/lemez\.php\?id=(\d+)/);
    rows.push({
      rowId: lemez ? `lemez ${lemez[1]}` : null,
      credit,
      title,
      format: "unknown",
      formatRaw: "",
      tierRaw: award.raw,
      reading: award.reading,
      dateRaw: year,
      url: lemez ? `https://slagerlistak.hu/lemez.php?id=${lemez[1]}` : url,
      raw: cap(`${credit} | ${title} | ${kiado} | ${award.raw} | ${year}`),
      extra: { kiado, year: Number(year) || null },
    });
  }
  return rows;
}

/** A year page, checked: MAHASZ's page, every row of the year asked for.
 *  `allowEmpty`: a new year's page, in January, may have no rows yet. */
export function readYear(res, year, { allowEmpty = false } = {}) {
  const cls = classifyPage(res, { identity: YEAR_IDENTITY, success: ROWS });
  if (cls.kind === "format" && allowEmpty) return [];
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `MAHASZ ${year}: ${cls.detail}`);
  const rows = parseRows(res.body, yearUrl(year));
  const count = (String(res.body).match(/class="ap_lemez_sor"/g) ?? []).length;
  if (rows.length !== count) throw new AdapterError("format", `MAHASZ ${year}: ${rows.length} of ${count} rows parsed`);
  const other = rows.filter((r) => r.dateRaw !== String(year));
  if (other.length) throw new AdapterError("mismatch", `MAHASZ served ${other.length} row(s) of another year (${other[0].dateRaw}) on the ${year} page`);
  return rows;
}

/** A Kereső answer: the search page, and its rows (none is a valid answer). */
export function readSearch(res, term) {
  const cls = classifyPage(res, { identity: SEARCH_IDENTITY, success: SEARCH_FORM });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `MAHASZ search "${term}": ${cls.detail}`);
  return parseRows(res.body, SEARCH);
}

/** The Kereső form's own fields, as its page posts them. */
export const searchBody = (term) => new URLSearchParams({ eloado: term, album: "", minosites: "", ev: "", submit: "Keresés" }).toString();

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

export const mahasz = {
  id: "mahasz",
  country: "HU",
  body: "MAHASZ",
  programme: null,
  class: "AUTOMATE",
  step: "3b",
  hosts: ["slagerlistak.hu"],
  registerUrl: `${BASE}/adatbazis`,
  ladder: "standard",
  dateKind: "award year",
  humanCheck: "Open this year's MAHASZ database page (slagerlistak.hu/arany-es-platinalemezek/adatbazis/<year>) and read the rows for the 16 names.",
  // A new year's page can be empty in its first days (then last year's is read too).
  minRows: 0,
  // Shakira x Burna Boy | Dai Dai | Platina — on the 2026 page, so checked
  // every day while 2026 is read (SPEC §3.4 "Year rollover").
  control: {
    when: "daily",
    year: 2026,
    rowId: "Shakira x Burna Boy | Dai Dai | 2026",
    find: (r) => r.credit === "Shakira x Burna Boy" && r.title === "Dai Dai" && r.dateRaw === "2026" && r.reading?.tier === "Platinum",
  },
  // This year's row count (269 on 24 Sep 2026); it starts again in January.
  // The daily read is the whole register (or year, or the fixed name
  // searches), so its rows naming the sixteen persist between runs: a read
  // naming under half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  total: "year",
  parse: { rows: parseRows, award: parseAward, year: readYear, search: readSearch },
  async read(ctx) {
    const now = ctx.now ?? new Date();
    const year = now.getUTCFullYear();
    const years = now.getUTCMonth() === 0 ? [year, year - 1] : [year];
    const notes = [];
    let rows = [];
    let thisYear = 0;
    for (const y of years) {
      const got = readYear(expectOk(await ctx.request({ url: yearUrl(y), success: ROWS }), `MAHASZ ${y}`), y, { allowEmpty: y === year && years.length > 1 });
      if (y === year) thisYear = got.length;
      else notes.push(`${fmt(got.length)} rows for ${y} too (January)`);
      rows.push(...got);
    }
    if (ctx.deep) {
      let n = 0;
      for (const term of ctx.searchTerms) {
        const res = expectOk(
          await ctx.request({ method: "POST", url: SEARCH, headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: searchBody(term), success: SEARCH_FORM }),
          `MAHASZ search "${term}"`
        );
        rows.push(...readSearch(res, term));
        n++;
      }
      notes.push(`${n} Kereső searches`);
    }
    return {
      rows: [...new Map(rows.map((r) => [r.raw, r])).values()],
      total: thisYear,
      totalYear: year,
      years,
      newestDate: null,
      newest: `${fmt(thisYear)} rows for ${year} · year only`,
      notes,
      cursor: { year, rows: thisYear },
    };
  },
};
