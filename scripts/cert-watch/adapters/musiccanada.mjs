// Music Canada Gold/Platinum — the WordPress REST collection behind
// musiccanada.com/gold-platinum/. Spec: docs/cert-watcher/SPEC.md §3 row 3, §3.1.
//
// Newest id first, 100 a page, down to the last id seen. Each STEP of a
// record's ladder is its own id (a Double Platinum and the earlier Platinum
// are two rows), so the newest row for a record is its current tier.
//
// Never `?_gp_search` (fuzzy, caps at 200). Never ACF fields: they carry label
// contact names — personal data this watcher must not read or store. The
// `_fields` list below is the whole request; a test holds it to that.
// robots.txt: `User-agent: *` / `Crawl-delay: 30` — config.hosts honours it.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap, rowDigest } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const API = "https://musiccanada.com/wp-json/wp/v2/award";
/** The rolling control: how many of the newest awards the cursor carries, and
 *  the fields whose digest must not change between two reads. */
export const ROLLING_ROWS = 3;
export const ROLLING_FIELDS = ["rowId", "credit", "title", "tierRaw"];
export const FIELDS = "id,date,title,content,class_list,link";
export const pageUrl = (n) => `${API}?per_page=100&orderby=id&order=desc&_fields=${FIELDS}${n > 1 ? `&page=${n}` : ""}`;

const NUMBER_WORDS = {
  double: 2,
  triple: 3,
  quadruple: 4,
  quintuple: 5,
  sextuple: 6,
  septuple: 7,
  octuple: 8,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
};
const FORMATS = { single: "single", singles: "single", album: "album", albums: "album" };

/**
 * `award_cert-<tier>-<format>` → { tier: {tier, x} | null, format }.
 * Tier words seen: gold, platinum, double-platinum, triple-platinum,
 * quadruple-platinum, quintuple-platinum, <n>-times-platinum (six-times…,
 * seven-times… as served 22 Sep 2026), diamond, double-diamond. Any other
 * word is unparsed — never guessed.
 */
export function parseCertClass(classList) {
  const cls = (classList ?? []).find((c) => /^award_cert-/.test(c));
  if (!cls) return { cls: null, reading: null, format: "unknown" };
  const m = cls.match(/^award_cert-(.+)-(singles?|albums?)$/);
  if (!m) return { cls, reading: null, format: "unknown" };
  const word = m[1];
  const format = FORMATS[m[2]];
  let reading = null;
  if (word === "gold") reading = { tier: "Gold", x: 1 };
  else if (word === "platinum") reading = { tier: "Platinum", x: 1 };
  else if (word === "diamond") reading = { tier: "Diamond", x: 1 };
  // "double-diamond" (e.g. id 59901, Adele / 21, award_cert-double-diamond-albums;
  // five -single rows in the 23 Sep sweep's full dump): Diamond ×2.
  else if (word === "double-diamond") reading = { tier: "Diamond", x: 2 };
  else {
    const p = word.match(/^([a-z]+|\d+)(?:-times)?-platinum$/);
    if (p) {
      const n = /^\d+$/.test(p[1]) ? Number(p[1]) : NUMBER_WORDS[p[1]];
      if (n) reading = { tier: "Platinum", x: n };
    }
  }
  return { cls, reading, format };
}

/** The JSON page → rows (§2.5). Credit and title are decoded to the text the
 *  register prints; `raw` keeps the JSON strings verbatim. */
export function parseAwards(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "Music Canada: response is not JSON");
  }
  if (!Array.isArray(d)) throw new AdapterError("format", "Music Canada: response is not a list of awards");
  return d.map((a) => {
    const titleRendered = a?.title?.rendered ?? "";
    const contentRendered = a?.content?.rendered ?? "";
    const { cls, reading, format } = parseCertClass(a?.class_list);
    const typeCls = (a?.class_list ?? []).find((c) => /^award_type-/.test(c)) ?? "";
    return {
      rowId: String(a?.id),
      credit: collapse(decodeEntities(titleRendered)),
      title: collapse(decodeEntities(stripTags(contentRendered))),
      format,
      formatRaw: typeCls,
      tierRaw: cls,
      reading,
      dateRaw: a?.date ?? null,
      url: a?.link ?? null,
      raw: cap(
        `id ${a?.id} · title.rendered ${JSON.stringify(titleRendered)} · content.rendered ${JSON.stringify(contentRendered)} · ${cls ?? "(no award_cert class)"} · ${typeCls}${a?.link ? ` · ${a.link}` : ""}`
      ),
      extra: {},
    };
  });
}

export const musiccanada = {
  id: "musiccanada",
  country: "CA",
  body: "Music Canada",
  programme: null,
  class: "AUTOMATE",
  step: 1,
  hosts: ["musiccanada.com"],
  registerUrl: "https://musiccanada.com/gold-platinum/",
  ladder: "standard",
  dateKind: "publication date",
  humanCheck: "Open https://musiccanada.com/gold-platinum/, search the artist, and read the award's tier and format.",
  minRows: 1,
  // The fixed control, id 89702 (Dai Dai, Double Platinum), is checked in
  // the tests. Live, it could only be reached by a read that goes back past
  // it, and the daily read is the newest ids down to the last one seen: it
  // left page 1 within days and will never be read again. Its `window` test
  // stays so that a read which does reach it must hold it — but the LIVE
  // check is the rolling control below.
  control: { when: "tests", window: (got) => (got.window?.minId ?? Infinity) < 89702, rowId: "89702", find: (r) => r.rowId === "89702" },
  // The rolling control (review, 24 Sep 2026): the last clean read's three
  // newest awards (id + a digest of credit, title and tier, carried in the
  // cursor) must still be there, unchanged, today — the read always goes
  // back to the last id seen, so it always reaches them.
  rollingControl: true,
  // X-WP-Total: the register's award count (31,858 on 24 Sep 2026).
  total: "register",
  parse: { awards: parseAwards, certClass: parseCertClass },
  async read(ctx) {
    const notes = [];
    const lastId = Number(ctx.cursor?.lastId) || null;
    const prevRolling = Array.isArray(ctx.cursor?.rolling) ? ctx.cursor.rolling : null;
    const rows = [];
    let total = null;
    for (let n = 1; n <= 3; n++) {
      const url = pageUrl(n);
      const res = expectOk(await ctx.request({ url, success: /"class_list"/ }), `Music Canada page ${n}`);
      const cls = classifyPage(res, { identity: /^\s*\[/, success: /"class_list"/ });
      if (cls.kind !== "ok") throw new AdapterError(cls.kind, `Music Canada: ${cls.detail}`);
      const page = parseAwards(res.body);
      rows.push(...page);
      total = res.headers?.["x-wp-total"] ?? total;
      const oldest = Math.min(...page.map((r) => Number(r.rowId)));
      const pages = Number(res.headers?.["x-wp-totalpages"]) || 1;
      // Stop at the last id seen. With no cursor (first run) one page is read.
      if (!lastId || oldest <= lastId || n >= pages) break;
    }
    const ids = rows.map((r) => Number(r.rowId)).filter(Number.isFinite);
    const top = ids.length ? Math.max(...ids) : null;
    const topRow = rows.find((r) => Number(r.rowId) === top);
    if (total) notes.push(`${String(Number(total)).replace(/\B(?=(\d{3})+$)/g, ",")} awards in the register (X-WP-Total)`);
    const fresh = lastId ? rows.filter((r) => Number(r.rowId) > lastId).length : rows.length;
    notes.push(lastId ? `${fresh} new since id ${lastId}` : `first read: newest ${rows.length} awards`);
    const minId = ids.length ? Math.min(...ids) : null;
    const newest = [...rows].filter((r) => Number.isFinite(Number(r.rowId))).sort((a, b) => Number(b.rowId) - Number(a.rowId)).slice(0, ROLLING_ROWS);
    return {
      rows,
      // How far back the newest-first read reaches by id (the control's window).
      window: { minId },
      rolling: prevRolling
        ? {
            checks: prevRolling.map((p) => ({
              label: `id ${p.id}`,
              due: minId != null && minId <= Number(p.id),
              find: (r) => r.rowId === String(p.id) && rowDigest(r, ROLLING_FIELDS) === p.h,
            })),
          }
        : null,
      total: total ? Number(total) : undefined,
      newestDate: topRow?.dateRaw ? String(topRow.dateRaw).slice(0, 10) : null,
      newest: top ? `newest id ${top}, ${String(topRow?.dateRaw ?? "").slice(0, 10)}` : null,
      notes,
      cursor: { lastId: top ?? lastId, rolling: newest.length ? newest.map((r) => ({ id: Number(r.rowId), h: rowDigest(r, ROLLING_FIELDS) })) : prevRolling },
    };
  },
};
