// IFPI Danmark — http://ifpi.dk/certificeringer-0 (HTTP ONLY: https fails
// the certificate's name check, curl 60). Spec: docs/cert-watcher/SPEC.md §3
// row 8, §3.2.
//
// The register is a paged table, newest first, 50 rows a page. Rows that
// share a date are TIED, and at a page boundary the pager can print the same
// tied row on both pages and never print another: the 24 Sep 2026 read of
// pages 0–2 gave 150 rows but only 140 distinct, and a second read of the
// same URLs gave the same 140. The explicit date-descending order breaks the
// ties differently (134 distinct, 12 of them new; 152 together). So the
// daily read unions three rounds over pages 0–2 — the default order, the
// explicit date-descending order, then the default again (the 23 Sep sweep
// saw the ties reshuffle between requests) — stopping once a round adds
// nothing (≤ 9 requests). A row printed twice is reported in the notes: the
// dates it falls on may still be short of rows. New awards arrive at the top
// by date, so there is no deep read.
//
// The Artist column is CUT at about 40 characters with "...": "Major Lazer
// Feat. Moti Ty Dolla $ign..." | "Boom" is Wizkid's record, matched through
// config.leadAliases and flagged.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap, rowDigest } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "http://ifpi.dk/certificeringer-0";
export const pageUrl = (n) => `${PAGE}?page=${n}`;
export const dateDescUrl = (n) => `${PAGE}?order=field_certdato&sort=desc&page=${n}`;
/** The three rounds: [url for page n, repeat index for the memo]. */
export const ROUNDS = [
  { label: "default order", url: pageUrl, repeat: 0 },
  { label: "date descending", url: dateDescUrl, repeat: 0 },
  { label: "default order again", url: pageUrl, repeat: 1 },
];
const IDENTITY = /view-field-certstatus-table-column/;
const SUCCESS = /<tr class="certpagetable">/;
const FORMAT = { track: "single", album: "album" };

/** "Guld", "Platin", "2xPlatin" … "19xPlatin" — every status in the 13,508-row
 *  union. Anything else (including the six blank statuses) is null. */
export function parseStatus(s) {
  const t = collapse(s);
  if (t === "Guld") return { tier: "Gold", x: 1 };
  if (t === "Platin") return { tier: "Platinum", x: 1 };
  const m = t.match(/^(\d+)xPlatin$/);
  if (m && Number(m[1]) >= 2) return { tier: "Platinum", x: Number(m[1]) };
  return null;
}

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** One page → rows, verbatim. */
export function parsePage(html) {
  const rows = [];
  for (const m of String(html ?? "").matchAll(/<tr class="certpagetable">([\s\S]*?)<\/tr>/g)) {
    const tds = [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => cell(c[1]));
    const [dato = "", artist = "", udgivelse = "", selskab = "", formatRaw = "", status = ""] = tds;
    const iso = m[1].match(/datetime="(\d{4}-\d{2}-\d{2})/);
    rows.push({
      credit: artist,
      title: udgivelse,
      format: FORMAT[formatRaw.toLowerCase()] ?? "unknown",
      formatRaw,
      tierRaw: status,
      reading: parseStatus(status),
      dateRaw: dato,
      url: PAGE,
      raw: cap(`${dato} | ${artist} | ${udgivelse} | ${selskab} | ${formatRaw} | ${status}`),
      extra: { iso: iso ? iso[1] : null, label: selskab },
    });
  }
  return rows;
}

const idOf = (r) => r.raw;

/** The rolling control: how many rows the cursor carries, and what is digested. */
export const ROLLING_ROWS = 3;
export const ROLLING_FIELDS = ["raw"];

/** Is a carried row surely in a read that reaches back to `oldest`? A row
 *  whose date others share only once the read goes PAST that date: on the
 *  date itself, its batch may run over the end of page 2. */
export const rollingDue = (p, oldest) => !!oldest && (p.tie ? oldest < p.iso : oldest <= p.iso);

/** The rows to carry: one from each of the read's three newest dates (the
 *  first by its verbatim text), so no single page boundary can hide them
 *  all. IFPI Danmark certifies in dated batches — on 24 Sep 2026 every date
 *  in pages 0–2 was shared — so a row whose date others share is marked
 *  `tie`: it is only surely in a later read that goes past its date. */
export function rollingRows(rows) {
  const byDate = new Map();
  for (const r of rows) {
    const iso = r.extra?.iso;
    if (!iso) continue;
    if (!byDate.has(iso)) byDate.set(iso, []);
    byDate.get(iso).push(r);
  }
  return [...byDate.keys()]
    .sort()
    .reverse()
    .slice(0, ROLLING_ROWS)
    .map((iso) => {
      const group = byDate.get(iso).sort((a, b) => a.raw.localeCompare(b.raw));
      return { iso, h: rowDigest(group[0], ROLLING_FIELDS), ...(group.length > 1 ? { tie: true } : {}) };
    });
}

export const ifpiDanmark = {
  id: "ifpi-danmark",
  country: "DK",
  body: "IFPI Danmark",
  programme: null,
  class: "WITH-CARE",
  step: 2,
  hosts: ["ifpi.dk"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "certification date",
  humanCheck: "Open http://ifpi.dk/certificeringer-0 (http only) and read the newest pages for the 16 names.",
  minRows: 1,
  // The fixed control: Dave feat. Tems | Raindance | Track | Platin |
  // 07.07.2026 (page 6 on 23 Sep 2026), checked in the tests. Pages 0–2 are
  // the newest ~150 rows, and they only ever move forward in time: on
  // 24 Sep they reached back to 11.08.2026, so this row had already scrolled
  // off and no daily read will reach it again. The `window` test stays so
  // that a read which does reach back past 07.07.2026 must hold it — but the
  // LIVE check is the rolling control below.
  control: {
    when: "tests",
    window: (got) => (got.window?.oldest ?? "9999") < "2026-07-07",
    rowId: "07.07.2026. | Dave feat. Tems | Raindance",
    find: (r) => r.dateRaw === "07.07.2026." && r.credit === "Dave feat. Tems" && r.title === "Raindance" && r.tierRaw === "Platin",
  },
  // The rolling control (review, 24 Sep 2026): one row from each of the last
  // clean read's three newest dates, carried in the cursor as (date, digest
  // of the verbatim row). Today's pages 0–2 reach back about six weeks, so
  // they hold yesterday's newest rows unless ~150 awards arrive in a day;
  // one of the three present is enough (see rollingRows for ties).
  rollingControl: true,
  parse: { page: parsePage, status: parseStatus },
  async read(ctx) {
    const prevRolling = Array.isArray(ctx.cursor?.rolling) ? ctx.cursor.rolling : null;
    const union = new Map();
    let requests = 0;
    let rounds = 0;
    let twice = 0;
    for (const [i, round] of ROUNDS.entries()) {
      let added = 0;
      const seenThisRound = new Set();
      for (let n = 0; n <= 2; n++) {
        const url = round.url(n);
        const res = expectOk(await ctx.request({ url, repeat: round.repeat, success: SUCCESS }), `IFPI Danmark page ${n} (${round.label})`);
        requests++;
        const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
        if (cls.kind !== "ok") throw new AdapterError(cls.kind, `IFPI Danmark: ${cls.detail} (${url})`);
        const rows = parsePage(res.body);
        if (rows.length !== 50) throw new AdapterError("format", `IFPI Danmark page ${n}: ${rows.length} rows (a full page has 50)`);
        for (const r of rows) {
          if (seenThisRound.has(idOf(r)) && i === 0) twice++;
          seenThisRound.add(idOf(r));
          if (!union.has(idOf(r))) {
            union.set(idOf(r), r);
            added++;
          }
        }
      }
      rounds++;
      if (i > 0 && added === 0) break;
    }
    const rows = [...union.values()];
    const isos = rows.map((r) => r.extra.iso).filter(Boolean).sort();
    const top = isos.at(-1) ?? null;
    const oldest = isos[0] ?? null;
    const notes = [`${rows.length} distinct rows from pages 0–2 in ${rounds} round(s), ${requests} requests`];
    if (twice) notes.push(`${twice} row(s) printed on two pages in the default order — tied dates at page boundaries may still be short`);
    const last = ctx.cursor?.lastDate ?? null;
    if (last && oldest && oldest > last) notes.push(`the pages read end at ${oldest}, after the last run's newest ${last} — rows in between were not read`);
    return {
      rows,
      // How far back pages 0–2 reach (the control's window).
      window: { oldest },
      rolling: prevRolling
        ? {
            checks: prevRolling.map((p) => ({
              label: `the ${p.iso} row ${p.h.slice(0, 8)}`,
              due: rollingDue(p, oldest),
              find: (r) => r.extra?.iso === p.iso && rowDigest(r, ROLLING_FIELDS) === p.h,
            })),
          }
        : null,
      newestDate: top,
      newest: top ? `newest ${rows.find((r) => r.extra.iso === top).dateRaw.replace(/\.$/, "")}` : null,
      notes,
      cursor: { lastDate: top ?? last, rolling: rows.length ? rollingRows(rows) : prevRolling },
    };
  },
};
