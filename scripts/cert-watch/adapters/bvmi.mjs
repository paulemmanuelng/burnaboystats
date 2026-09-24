// BVMI (DE) — the Gold-/Platin-/Diamond-Datenbank on musikindustrie.de.
// Spec: docs/cert-watcher/SPEC.md §3 row 16, §3.3.
//
// Daily: the current year, walked page by page —
// `?action=suche&strJahr=YYYY&intseite=N`, 20 rows a page, ALPHABETICAL by
// artist, about 40 pages (784 rows in 2026). A new award can land on any page,
// so the whole year is read every day and the diff is against the site, never
// against yesterday's page positions. In January, the previous year too.
//
// The walk stops when a page repeats the one before it (a page past the end
// returns the last page again) or has fewer than 20 rows; cap 60. The pager's
// `value="N" name="submit"` is a window of page numbers, not a total, so it is
// not trusted. The page must say it is the year asked for.
//
// NO NAME SEARCH: every variant of `strInterpret` returned an empty result on
// 24 Sep 2026. An empty search is evidence about the query, never about the
// register, so it is never read as "not certified" — and never used.
//
// Preis: `1x Gold`, `3x Gold` (a Gold multiple, below 1x Platin), `2x Platin`,
// `1x Diamond`. Rows sit under section heads: "Gold/Platin" is the music
// products award; Jazz, Kids, Comedy, Audio Books, Musikvideo and Classical
// are other programmes with their own thresholds, kept apart by programme.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://www.musikindustrie.de/wie-musik-zur-karriere-werden-kann/markt-bestseller/gold-/platin-und-diamond-auszeichnung/datenbank/";
export const pageUrl = (year, n) => `${PAGE}?action=suche&strJahr=${year}&intseite=${n}`;
export const PER_PAGE = 20;
export const MAX_PAGES = 60;
const IDENTITY = /<title>Datenbank: BVMI<\/title>/;
const SUCCESS = /class="result-list"/;
/** The section of the music-products award; every other head is a programme. */
export const MAIN_SECTION = "Gold/Platin";

const cell = (s) => collapse(decodeEntities(stripTags(s)));
const FORMAT = { single: "single", alben: "album" };
const TIERS = { gold: "Gold", platin: "Platinum", diamond: "Diamond" };

/** "3x Gold" → {Gold, 3}; unseen words → null. */
export function parsePreis(s) {
  const m = collapse(s).match(/^(\d+)x\s+(gold|platin|diamond)$/i);
  if (!m) return null;
  const x = Number(m[1]);
  return x >= 1 ? { tier: TIERS[m[2].toLowerCase()], x } : null;
}

/** The year the page's own form says it shows. */
export function selectedYear(html) {
  const m = String(html ?? "").match(/<select name="strJahr"[^>]*>([\s\S]*?)<\/select>/);
  const o = m ? m[1].match(/<option value="(\d{4})" selected="selected">/) : null;
  return o ? Number(o[1]) : null;
}

/** Every result row, verbatim, with the section head it sits under. */
export function parseRows(html) {
  const rows = [];
  let section = null;
  const re =
    /result-head" colspan="7"><strong>([\s\S]*?)<\/strong>|<tr><td class="result-list">([\s\S]*?)<\/td><td class="result-list">([\s\S]*?)<\/td><td class="result-list" nowrap="nowrap">([\s\S]*?)<\/td><td class="result-list" nowrap="nowrap">([\s\S]*?)<\/td><td class="result-list" nowrap="nowrap">([\s\S]*?)<\/td><td class="result-list">([\s\S]*?)<\/td><td class="result-list">([\s\S]*?)<\/td><\/tr>/g;
  for (const m of String(html ?? "").matchAll(re)) {
    if (m[1] !== undefined) {
      section = cell(m[1]);
      continue;
    }
    const [credit, title, jahr, formatRaw, preis, firma, label] = m.slice(2, 9).map(cell);
    rows.push({
      credit,
      title,
      format: FORMAT[formatRaw.toLowerCase()] ?? "unknown",
      formatRaw,
      tierRaw: preis,
      reading: parsePreis(preis),
      dateRaw: jahr,
      // Only the music-products award compares with the site's DE plaques.
      programme: section === MAIN_SECTION ? null : `BVMI ${section ?? "(no section)"}`,
      url: PAGE,
      raw: cap(`${section ?? ""} · ${credit} | ${title} | ${jahr} | ${formatRaw} | ${preis} | ${firma} | ${label}`),
      extra: { section, firma, label },
    });
  }
  return rows;
}

/** One page, checked: BVMI's page, the year asked for, rows or the end. */
export function readPage(res, year) {
  const cls = classifyPage(res, { identity: IDENTITY, success: null });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `BVMI ${year}: ${cls.detail}`);
  const served = selectedYear(res.body);
  if (served !== year) throw new AdapterError("mismatch", `BVMI served the year ${served ?? "(none selected)"} for ${year}`);
  const rows = parseRows(res.body);
  const count = (String(res.body).match(/<tr><td class="result-list">/g) ?? []).length;
  if (rows.length !== count) throw new AdapterError("format", `BVMI ${year}: ${rows.length} of ${count} rows parsed`);
  return rows;
}

/** Walk a year until a page repeats or runs short. `allowEmpty`: a new
 *  year's first page, in January, may have no rows yet. */
async function walkYear(ctx, year, { allowEmpty = false } = {}) {
  const rows = [];
  let prev = null;
  let pages = 0;
  for (let n = 1; n <= MAX_PAGES; n++) {
    const got = readPage(expectOk(await ctx.request({ url: pageUrl(year, n), success: SUCCESS }), `BVMI ${year} page ${n}`), year);
    const key = got.map((r) => r.raw).join("\n");
    if (prev !== null && key === prev) break; // past the end: the last page again
    pages = n;
    rows.push(...got);
    if (got.length < PER_PAGE) break;
    prev = key;
    if (n === MAX_PAGES) throw new AdapterError("format", `BVMI ${year}: still full pages at the ${MAX_PAGES}-page cap`);
  }
  if (!rows.length && !allowEmpty) throw new AdapterError("format", `BVMI ${year}: no rows on page 1`);
  return { rows, pages };
}

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

export const bvmi = {
  id: "bvmi",
  country: "DE",
  body: "BVMI",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["www.musikindustrie.de"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "award year",
  humanCheck: "Open the BVMI Gold-/Platin-Datenbank, choose this year, and read every page for the 16 names (its name search returns nothing; walk the year).",
  minRows: 1,
  // Shakira & Burna Boy | Dai Dai | 2026 | Single | 1x Gold — in this year's
  // walk, so checked every day while 2026 is read (SPEC §3.4).
  control: {
    when: "daily",
    year: 2026,
    rowId: "Shakira & Burna Boy | Dai Dai | 2026 | Single | 1x Gold",
    find: (r) => r.credit === "Shakira & Burna Boy" && r.title === "Dai Dai" && r.dateRaw === "2026" && r.tierRaw === "1x Gold",
  },
  // This year's rows (784 on 24 Sep 2026); the floor starts again in January.
  // The daily read is the whole register (or year, or the fixed name
  // searches), so its rows naming the sixteen persist between runs: a read
  // naming under half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  total: "year",
  parse: { rows: parseRows, preis: parsePreis, page: readPage, selectedYear },
  async read(ctx) {
    const now = ctx.now ?? new Date();
    const year = now.getUTCFullYear();
    const years = now.getUTCMonth() === 0 ? [year, year - 1] : [year];
    const notes = [];
    const rows = [];
    let thisYear = 0;
    for (const y of years) {
      const got = await walkYear(ctx, y, { allowEmpty: y === year && years.length > 1 });
      if (y === year) {
        thisYear = got.rows.length;
        notes.push(`${fmt(got.rows.length)} rows on ${got.pages} pages (${y})`);
      } else notes.push(`${fmt(got.rows.length)} rows for ${y} too (January)`);
      rows.push(...got.rows);
    }
    return {
      rows,
      total: thisYear,
      totalYear: year,
      years,
      newestDate: null,
      newest: `${year}: ${fmt(thisYear)} rows · year only`,
      notes,
      cursor: { year, rows: thisYear },
    };
  },
};
