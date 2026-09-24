// RIAA Gold & Platinum — two adapters, one per award PROGRAMME:
//   riaa        the standard programme (badges DI / ST)
//   riaa-latin  Premios de Oro y Platino (badge LA), programme "RIAA Latin"
// Spec: docs/cert-watcher/SPEC.md §3 rows 1–2 and §3.1.
//
// The programme is read from the BADGE on every row, never from the tab: a
// standard-tab search for "burna" returns the Latin "DAI DAI" row too (badge
// LA level 2), and a Latin 2X Platino is ~120,000 units, not 2,000,000. RIAA's
// share text says "earned RIAA 2x Platinum Award" for both programmes — a
// generic template, and a trap. The badge is what designates the programme.
//
// The level keeps the count: "badge DI level 11" is titled "1X Diamond" but is
// eleven times Platinum. The site holds One Dance and Wait For U at Diamond by
// a modelling choice (afrobeats.ts, 10 Sep 2026); config.knownDivergences
// carries the exact reading, so level 12 would surface again.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

const PAGE = "https://www.riaa.com/gold-platinum/";
const AJAX = "https://www.riaa.com/wp-admin/admin-ajax.php";
const HOSTS = ["www.riaa.com"];
/** The RIAA search form: present on every real RIAA list page, results or none. */
const IDENTITY = /id="simple_search_field"/;
/** Rows, or RIAA's own words for none. */
const SUCCESS = /table_award_row|No matching results/;
const LATIN = "RIAA Latin";

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
/** "July 9, 2026" → "2026-07-09"; anything else → null. */
export function isoDate(s) {
  const m = String(s ?? "").trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!m) return null;
  const mi = MONTHS.indexOf(m[1].toLowerCase());
  if (mi < 0) return null;
  return `${m[3]}-${String(mi + 1).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
}

const PROGRAMME_OF_CODE = { DI: null, ST: null, LA: LATIN };

/** "badge LA level 2" → { code, level, programme, reading }. Level 0 is Gold,
 *  1–9 N× Platinum, 10+ Diamond (title) — and `level` keeps the count. An
 *  unseen badge code gives reading null; it is never guessed. */
export function parseBadge(alt) {
  const m = String(alt ?? "").match(/^badge ([A-Z]+) level (\d+)$/);
  if (!m) return null;
  const code = m[1];
  const level = Number(m[2]);
  if (!(code in PROGRAMME_OF_CODE)) return { code, level, programme: null, reading: null };
  const reading =
    level === 0
      ? { tier: "Gold", x: 1, level }
      : level < 10
        ? { tier: "Platinum", x: level, level }
        : { tier: "Diamond", x: Math.floor(level / 10), level };
  return { code, level, programme: PROGRAMME_OF_CODE[code], reading };
}

const FORMAT = { SINGLE: "single", ALBUM: "album" };

/** Every `tr.table_award_row` in a page or a load-more fragment. */
export function parseRows(html) {
  const rows = [];
  const re = /<tr class="table_award_row" id="([^"]+)">([\s\S]*?)<\/tr>/g;
  for (const m of String(html ?? "").matchAll(re)) {
    const rowId = m[1];
    const body = m[2];
    const badge = body.match(/alt="(badge [^"]*)" title="([^"]*)"/);
    const cells = [...body.matchAll(/<td class=['"](?:tw-artists_cell|others_cell)[^'"]*['"]\s*>([\s\S]*?)<\/td>/g)].map((c) =>
      collapse(decodeEntities(stripTags(c[1])))
    );
    const [credit = "", title = "", label = "", formatRaw = "", dateRaw = ""] = cells;
    const alt = badge ? badge[1] : null;
    const badgeTitle = badge ? decodeEntities(badge[2]) : null;
    const parsed = parseBadge(alt);
    const programme = parsed ? parsed.programme : null;
    rows.push({
      rowId,
      credit,
      title,
      format: FORMAT[formatRaw.toUpperCase()] ?? "unknown",
      formatRaw,
      tierRaw: alt,
      reading: parsed ? parsed.reading : null,
      dateRaw,
      programme,
      url: `${PAGE}?tab_active=${programme === LATIN ? "platinum-latin" : "default-award"}&se=${encodeURIComponent(title).replace(/%20/g, "+")}`,
      raw: cap(`${rowId} · ${alt} · "${badgeTitle}" · ${credit} | ${title} | ${label} | ${formatRaw} | ${dateRaw}`),
      extra: { badgeTitle, label, code: parsed?.code ?? null },
    });
  }
  return rows;
}

/** A whole RIAA list page: what it says it is, its rows, and whether more. */
export function parsePage(html) {
  const s = String(html ?? "");
  const tab = s.match(/<input type="hidden" name="tab_active" id="tab_active" value="([^"]*)"/);
  const se = s.match(/id="simple_search_field"[^>]*\bvalue="([^"]*)"/);
  const qp = s.match(/window\.queryParams = (\{[\s\S]*?\});/);
  let queryParams = null;
  if (qp) {
    try {
      queryParams = JSON.parse(qp[1]);
    } catch {
      queryParams = null;
    }
  }
  return {
    tabActive: tab ? tab[1] : null,
    se: se ? decodeEntities(se[1]) : null,
    queryParams,
    rows: parseRows(s),
    noResults: /No matching results/.test(s),
    // The Show More container is hidden (`!tw-hidden`) when there is nothing more.
    hasMore: /class="tw-button-gnp-container-load-more\s*"/.test(s),
  };
}

/** admin-ajax load_more_search_default → { rows, hasMore, nextPage, total }. */
export function parseLoadMore(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "RIAA load-more: not JSON");
  }
  if (typeof d !== "object" || d === null || !("has_more" in d)) throw new AdapterError("format", "RIAA load-more: no has_more");
  return { rows: parseRows(d.data ?? ""), hasMore: !!d.has_more, nextPage: Number(d.next_page) || null, total: Number(d.total) || 0 };
}

/** admin-ajax load_detail_from_recent_timeline → the award's current and first
 *  certification, and every rung on its ladder, verbatim. */
export function parseHistory(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "RIAA award history: not JSON");
  }
  const body = String(d?.body ?? "");
  const card = (label) => {
    const i = body.indexOf(`>${label}<`);
    if (i < 0) return null;
    const next = body.indexOf("tw-font-label", i + label.length);
    const chunk = body.slice(i, next > 0 ? next : undefined);
    const date = chunk.match(/>Date<\/div><div class="tw-text-sm">([^<]+)</);
    const lab = chunk.match(/<div class="tw-text-xs tw-font-semibold">([^<]+)<\/div><div><img/);
    const badge = chunk.match(/alt="(badge [^"]+)" title="([^"]*)"/);
    return {
      label: lab ? collapse(decodeEntities(lab[1])) : null,
      badgeAlt: badge ? badge[1] : null,
      badgeTitle: badge ? decodeEntities(badge[2]) : null,
      date: date ? collapse(date[1]) : null,
    };
  };
  const h4 = [...String(d?.title ?? "").matchAll(/<h4[^>]*>([^<]*)<\/h4>/g)].map((m) => decodeEntities(m[1]));
  const ladder = [...body.matchAll(/<p class="tw-tag-label">([^<]+)<\/p>/g)].map((m) => collapse(decodeEntities(m[1])));
  const current = card("Current Certification");
  if (!current || !current.badgeAlt) throw new AdapterError("format", "RIAA award history: no Current Certification");
  return { title: h4[0] ?? null, credit: h4[1] ?? null, current, first: card("First Certification"), ladder };
}

// ── Fetching ────────────────────────────────────────────────────────────────
const REFERER = { Referer: PAGE };
const XHR = {
  Referer: PAGE,
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};
const sameSe = (a, b) => String(a ?? "").trim().toLowerCase().replace(/\s+/g, " ") === String(b ?? "").trim().toLowerCase().replace(/\s+/g, " ");

async function getPage(ctx, url, { tabs, se }) {
  const res = expectOk(await ctx.request({ url, headers: REFERER, success: SUCCESS }), "RIAA list page");
  const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `RIAA list page: ${cls.detail}`);
  const page = parsePage(res.body);
  // Served-is-requested: the page must be the tab and the search we asked for.
  if (!tabs.includes(page.tabActive)) {
    throw new AdapterError("mismatch", `RIAA served tab "${page.tabActive}" for ${url}`);
  }
  if (!sameSe(page.se, se)) {
    throw new AdapterError("mismatch", `RIAA served the search "${page.se}" for "${se}"`);
  }
  if (!page.rows.length && !page.noResults) throw new AdapterError("format", `RIAA list page: no rows and no "No matching results" (${url})`);
  return page;
}

async function loadMore(ctx, queryParams, n) {
  const url = `${AJAX}?${new URLSearchParams(queryParams)}`;
  const res = expectOk(
    await ctx.request({ method: "POST", url, headers: XHR, body: `action=load_more_search_default&page=${n}`, success: /has_more/ }),
    `RIAA load-more page ${n}`
  );
  return parseLoadMore(res.body);
}

async function history(ctx, awardId) {
  const res = expectOk(
    await ctx.request({
      method: "POST",
      url: AJAX,
      headers: XHR,
      body: `action=load_detail_from_recent_timeline&id=${awardId}`,
      success: /Current Certification/,
    }),
    `RIAA award history ${awardId}`
  );
  return parseHistory(res.body);
}

/** A search, followed through its load-more pages (cap). */
async function search(ctx, tab, term, maxPages = 10) {
  const url = `${PAGE}?tab_active=${tab}&se=${encodeURIComponent(term).replace(/%20/g, "+")}`;
  const page = await getPage(ctx, url, { tabs: tab === "platinum-latin" ? ["platinum-latin"] : ["recent-award", "default-award"], se: term });
  const rows = [...page.rows];
  let more = page.hasMore && page.queryParams;
  for (let n = 2; more && n <= maxPages; n++) {
    const m = await loadMore(ctx, page.queryParams, n);
    rows.push(...m.rows);
    more = m.hasMore;
  }
  return rows;
}

/** The newest list of a tab, followed back to `cutoff` (ISO date, inclusive). */
async function newest(ctx, tab, cutoffFor, maxPages = 20) {
  const url = `${PAGE}?tab_active=${tab}&ord=desc&col=certification_date`;
  const page = await getPage(ctx, url, { tabs: tab === "platinum-latin" ? ["platinum-latin"] : ["recent-award", "default-award"], se: "" });
  const rows = [...page.rows];
  const dates = () => rows.map((r) => isoDate(r.dateRaw)).filter(Boolean).sort();
  const top = dates().at(-1) ?? null;
  const cutoff = cutoffFor(top);
  let more = page.hasMore && page.queryParams;
  for (let n = 2; more && n <= maxPages && cutoff && (dates()[0] ?? "") >= cutoff; n++) {
    const m = await loadMore(ctx, page.queryParams, n);
    rows.push(...m.rows);
    more = m.hasMore;
  }
  return { rows, url };
}

const minusDays = (iso, n) => {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};

const dedupe = (rows) => [...new Map(rows.map((r) => [r.rowId, r])).values()];

/** Replace a row's reading with its award's CURRENT certification (search
 *  results can drop an older duplicate row of a title). Cap 20 per run. */
async function enrich(ctx, rows, forced = new Set()) {
  let n = 0;
  for (const r of rows) {
    if (n >= 20) break;
    const id = String(r.rowId).replace(/^default_/, "");
    if (!forced.has(r.rowId) && !ctx.wantsHistory(r)) continue;
    const h = await history(ctx, id);
    n++;
    r.extra.history = h;
    const b = parseBadge(h.current.badgeAlt);
    if (b && b.reading) {
      r.reading = b.reading;
      r.tierRaw = h.current.badgeAlt;
    }
    r.readUrl = `POST ${AJAX} action=load_detail_from_recent_timeline&id=${id}`;
  }
  return n;
}

const newestDate = (rows) => rows.map((r) => isoDate(r.dateRaw)).filter(Boolean).sort().at(-1) ?? null;

export const riaa = {
  id: "riaa",
  country: "US",
  body: "RIAA",
  programme: null,
  class: "AUTOMATE",
  step: 1,
  hosts: HOSTS,
  registerUrl: PAGE,
  ladder: "riaa",
  dateKind: "certification date",
  humanCheck: "Open https://www.riaa.com/gold-platinum/, search the title, and read the badge on the RIAA Gold & Platinum Program tab.",
  minRows: 1,
  control: { deep: true, rowId: "default_424119", find: (r) => r.rowId === "default_424119" },
  parse: { rows: parseRows, page: parsePage, loadMore: parseLoadMore, history: parseHistory, badge: parseBadge },
  async read(ctx) {
    const notes = [];
    const cursor = ctx.cursor ?? {};
    const { rows: listRows } = await newest(ctx, "default-award", (top) => minusDays(cursor.lastDate ?? top, 3));
    let rows = [...listRows];
    if (ctx.deep) {
      for (const term of ctx.searchTerms) rows.push(...(await search(ctx, "default-award", term)));
    }
    rows = dedupe(rows);
    const latin = rows.filter((r) => r.programme === LATIN).length;
    rows = rows.filter((r) => r.programme !== LATIN);
    if (latin) notes.push(`${latin} Latin row(s) left to riaa-latin`);
    const h = await enrich(ctx, rows);
    if (h) notes.push(`${h} award histor${h === 1 ? "y" : "ies"} read`);
    const top = newestDate(listRows);
    return {
      rows,
      newest: top ? `newest award ${listRows.find((r) => isoDate(r.dateRaw) === top)?.dateRaw}` : null,
      notes,
      cursor: { lastDate: top ?? cursor.lastDate ?? null },
    };
  },
};

export const riaaLatin = {
  id: "riaa-latin",
  country: "US",
  body: "RIAA",
  programme: LATIN,
  class: "AUTOMATE",
  step: 1,
  hosts: HOSTS,
  registerUrl: `${PAGE}?tab_active=platinum-latin`,
  ladder: "riaa",
  dateKind: "certification date",
  humanCheck: "Open the RIAA Gold & Platinum page, Latin tab (Premios de Oro y Platino), search the title; read the badge.",
  minRows: 1,
  control: { deep: true, rowId: "default_451299", find: (r) => r.rowId === "default_451299" },
  parse: { rows: parseRows, page: parsePage, loadMore: parseLoadMore, history: parseHistory, badge: parseBadge },
  async read(ctx) {
    const notes = [];
    const cursor = ctx.cursor ?? {};
    let rows = [];
    for (const name of ctx.artistNames) rows.push(...(await search(ctx, "platinum-latin", name, 5)));
    let listTop = null;
    if (ctx.deep) {
      const { rows: listRows } = await newest(ctx, "platinum-latin", (top) => minusDays(cursor.lastDate ?? top, 3));
      rows.push(...listRows);
      listTop = newestDate(listRows);
    }
    rows = dedupe(rows);
    const other = rows.filter((r) => r.programme !== LATIN).length;
    rows = rows.filter((r) => r.programme === LATIN);
    if (other) notes.push(`${other} non-Latin row(s) on the Latin tab ignored`);
    const watched = new Set((ctx.watch ?? []).map((w) => w.rowId).filter(Boolean));
    const h = await enrich(ctx, rows, watched);
    if (h) notes.push(`${h} award histor${h === 1 ? "y" : "ies"} read`);
    const top = newestDate(rows);
    const topRow = rows.find((r) => isoDate(r.dateRaw) === top);
    return {
      rows,
      newest: `${rows.length} row(s) for the ${ctx.artistNames.length} names${topRow ? ` (newest: ${topRow.title}, ${topRow.dateRaw})` : ""}`,
      notes,
      cursor: { lastDate: listTop ?? cursor.lastDate ?? null },
    };
  },
};
