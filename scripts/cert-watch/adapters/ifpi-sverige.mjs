// Ifpi Sverige — the record pages Ifpi Sverige links from its "Guld och
// Platina" page, reached through a Sverigetopplistan search.
// Spec: docs/cert-watcher/SPEC.md §3 row 7, §3.2.
//
//   search  https://sverigetopplistan.se/search/?query=<name>
//           → <li data-liid data-sart> items with badges ("SWE", "Guld",
//             "Platina", "Platina x7"). A badge is only a POINTER.
//   record  https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=<id>
//           → "Guld/Platina: Platina - cert.nr 11317 - 2026-09-18"
//           Served in ISO-8859-1: decoded as latin-1 ("Ljudbärare", "Märke").
//
// The register is the record page; a row is emitted only from a record.
// Daily: the 16 names and the extra search terms, plus a rotating seventh of
// the lead acts (every lead act on deep runs); then a record page for each
// matched item whose certification badge changed since the last run (≤ 15;
// every matched item on deep runs). Grammotex (the GLF copy of the same
// pages) is not used. Titles that never charted have no id here — a coverage
// gap the report names, never a "not certified".

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const SEARCH = "https://sverigetopplistan.se/search/";
export const RECORD = "https://sys2.ifpi.se/netdata/grp006.MBR/artdata";
export const searchUrl = (q) => `${SEARCH}?query=${encodeURIComponent(q).replace(/%20/g, "+")}`;
export const recordUrl = (sart) => `${RECORD}?sart=${sart}`;

/** Sverigetopplistan list ids: 41 is the singles list and 54 the albums list
 *  on every item the 23 Sep sweep saved (Dai Dai, Last Last vs Love, Damini,
 *  Twice As Tall, I Told Them…). Any other list id leaves the format unknown. */
const LIST_FORMAT = { 41: "single", 54: "album" };

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** A search page → { query, total, items }. `total` is the page's own count
 *  ("8 st träffar"); 0 when it says "Inga träffar". */
export function parseSearch(html) {
  const s = String(html ?? "");
  const q = s.match(/<input type="search" name="query" id="query"[^>]*value="([^"]*)"/);
  const hits = s.match(/<strong>(\d+) st<\/strong> träffar hittades för sökkriterie:([^<]*)</);
  const none = /Inga träffar hittades för sökkriterie/.test(s);
  const items = [];
  const re = /<li class="charts-list__item[^"]*"([^>]*)>([\s\S]*?)<\/li>\s*(?=<li class="charts-list__item|<\/ol>)/g;
  for (const m of s.matchAll(re)) {
    const attrs = Object.fromEntries([...m[1].matchAll(/data-(liid|sart|dspy|dspp)="([^"]*)"/g)].map((a) => [a[1], a[2]]));
    const badges = [...m[2].matchAll(/<div class="badge">([\s\S]*?)<\/div>/g)].map((b) => cell(b[1]));
    const title = m[2].match(/<h2 class="title">([\s\S]*?)<\/h2>/);
    const artist = m[2].match(/<p class="artist">([\s\S]*?)<\/p>/);
    items.push({
      sart: attrs.sart ?? null,
      liid: attrs.liid ?? null,
      title: title ? cell(title[1]) : "",
      artist: artist ? cell(artist[1]) : "",
      badges,
      badge: badges.join(","),
      certBadge: badges.filter((b) => b !== "SWE").join(",") || null,
      format: LIST_FORMAT[attrs.liid] ?? "unknown",
    });
  }
  return {
    query: q ? decodeEntities(q[1]) : null,
    total: hits ? Number(hits[1]) : none ? 0 : null,
    criterion: hits ? decodeEntities(hits[2]) : null,
    items,
  };
}

/** A badge → reading ("Guld", "Platina", "Platina x7"); null otherwise. */
export function parseBadge(b) {
  const t = collapse(b);
  if (t === "Guld") return { tier: "Gold", x: 1 };
  if (t === "Platina") return { tier: "Platinum", x: 1 };
  const m = t.match(/^Platina x(\d+)$/);
  if (m && Number(m[1]) >= 2) return { tier: "Platinum", x: Number(m[1]) };
  return null;
}

/** "Guld - cert.nr 10451 - 2023-08-16" / "Platina x7 - cert.nr 7257 -
 *  2016-11-11" → { reading, certNo, date }. Unseen forms give reading null. */
export function parseCertField(s) {
  const t = collapse(s);
  const m = t.match(/^(.+?) - cert\.nr (\d+) - (\d{4}-\d{2}-\d{2})$/);
  if (!m) return { reading: null, certNo: null, date: null };
  return { reading: parseBadge(m[1]), tierWord: m[1], certNo: m[2], date: m[3] };
}

/** A record page (latin-1 already decoded) → its fields, verbatim. */
export function parseRecord(html) {
  const s = String(html ?? "");
  const field = (label) => {
    const m = s.match(new RegExp(`${label}\\s*</th>\\s*<td[^>]*>\\s*<font[^>]*>([\\s\\S]*?)</td>`));
    return m ? cell(m[1]) : null;
  };
  const sart = s.match(/<input type="hidden" name="sart" value="(\d+)">/);
  const head = s.match(/Artikel:([^<]*)<br>\s*([^<]*)<br>/);
  const cert = field("Guld/Platina:");
  return {
    sart: sart ? sart[1] : null,
    article: head ? collapse(head[1]) : null,
    header: head ? cell(head[2]) : null,
    isrc: field("Prefix/Suffix:"),
    carrier: field("Ljudbärare:"),
    artist: field("Artist:"),
    title: field("Titel:"),
    label: field("Märke:"),
    cert,
    ...parseCertField(cert ?? ""),
  };
}

const SEARCH_IDENTITY = /id="form-search-results"/;
const SEARCH_SUCCESS = /träffar hittades för sökkriterie/;
const RECORD_IDENTITY = /<!-- grp006\.mbr -->/;
const RECORD_SUCCESS = /Titel:/;

async function doSearch(ctx, q) {
  const url = searchUrl(q);
  const res = expectOk(await ctx.request({ url, success: SEARCH_SUCCESS }), `Sverigetopplistan search "${q}"`);
  const cls = classifyPage(res, { identity: SEARCH_IDENTITY, success: SEARCH_SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `Sverigetopplistan: ${cls.detail} (${url})`);
  const page = parseSearch(res.body);
  if ((page.query ?? "").toLowerCase() !== q.toLowerCase()) {
    throw new AdapterError("mismatch", `Sverigetopplistan served the search "${page.query}" for "${q}"`);
  }
  if (page.total == null || page.items.length !== page.total) {
    throw new AdapterError("format", `Sverigetopplistan "${q}": ${page.items.length} items parsed, the page says ${page.total}`);
  }
  return { url, ...page };
}

async function doRecord(ctx, sart) {
  const url = recordUrl(sart);
  const res = expectOk(await ctx.request({ url, encoding: "latin1", success: RECORD_SUCCESS }), `Ifpi Sverige record ${sart}`);
  const cls = classifyPage(res, { identity: RECORD_IDENTITY, success: RECORD_SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `Ifpi Sverige record ${sart}: ${cls.detail}`);
  const rec = parseRecord(res.body);
  if (rec.sart !== String(sart)) throw new AdapterError("mismatch", `Ifpi Sverige served record ${rec.sart} for ${sart}`);
  return { url, ...rec };
}

/** The query sent for a name: diacritics folded, because Sverigetopplistan's
 *  search finds nothing for "Beyoncé" or "Joé Dwèt Filé" (0 hits on 24 Sep
 *  2026) and finds the records for "Beyonce" (63 hits in the 23 Sep sweep). */
export const queryFor = (name) => String(name).normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

/** The lead acts read today: all of them on deep runs, else the seventh whose
 *  turn it is (stable by UTC day). */
export function leadActsFor(leads, date, deep) {
  if (deep) return leads;
  const day = Math.floor(date.getTime() / 86400000);
  return leads.filter((_, i) => i % 7 === day % 7);
}

export const ifpiSverige = {
  id: "ifpi-sverige",
  country: "SE",
  body: "Ifpi Sverige",
  programme: null,
  class: "WITH-CARE",
  step: 2,
  hosts: ["sverigetopplistan.se", "sys2.ifpi.se"],
  registerUrl: "https://sverigetopplistan.se/",
  ladder: "standard",
  dateKind: "cert date",
  humanCheck: "Search https://sverigetopplistan.se/ for each name, open the record page (sys2.ifpi.se artdata?sart=…), and read \"Guld/Platina\".",
  // A quiet day reads no record page (no badge changed), so zero rows is a
  // clean read here; the format checks live on the search pages instead.
  minRows: 0,
  control: { deep: true, rowId: "15311162", find: (r) => r.rowId === "15311162" },
  parse: { search: parseSearch, record: parseRecord, certField: parseCertField, badge: parseBadge },
  async read(ctx) {
    const notes = [];
    const cursor = ctx.cursor?.badges ?? {};
    const date = ctx.now ?? new Date();
    const leads = leadActsFor(ctx.leadActs ?? [], date, ctx.deep);
    const terms = [...new Map([...ctx.searchTerms, ...leads].map(queryFor).map((t) => [t.toLowerCase(), t])).values()];
    const items = new Map();
    let searched = 0;
    for (const q of terms) {
      const page = await doSearch(ctx, q);
      searched++;
      for (const it of page.items) if (it.sart && !items.has(it.sart)) items.set(it.sart, { ...it, foundVia: page.url });
    }
    // Matched items that carry a certification badge.
    const matched = [...items.values()].filter((it) => it.certBadge && ctx.matches({ credit: it.artist, title: it.title }));
    const changed = matched.filter((it) => cursor[it.sart] !== it.badge);
    const want = ctx.deep ? matched : changed;
    const cap_ = ctx.deep ? 60 : 15;
    const rows = [];
    const nextBadges = { ...cursor };
    for (const it of want.slice(0, cap_)) {
      const rec = await doRecord(ctx, it.sart);
      nextBadges[it.sart] = it.badge;
      if (!rec.cert) {
        notes.push(`record ${it.sart} carries no Guld/Platina field although the search shows ${it.certBadge}`);
        continue;
      }
      rows.push({
        rowId: it.sart,
        credit: rec.artist ?? it.artist,
        title: rec.title ?? it.title,
        format: it.format,
        formatRaw: `list ${it.liid} · Ljudbärare: ${rec.carrier ?? "?"}`,
        tierRaw: rec.cert,
        reading: rec.reading,
        dateRaw: rec.date,
        url: rec.url,
        readUrl: `${rec.url} (found via ${it.foundVia}, badge ${it.badge})`,
        raw: cap(`Artist: ${rec.artist} · Titel: ${rec.title} · Prefix/Suffix: ${rec.isrc} · Märke: ${rec.label} · Guld/Platina: ${rec.cert}`),
        extra: { sart: it.sart, isrc: rec.isrc, certNo: rec.certNo, badge: it.certBadge },
      });
    }
    const left = want.length - Math.min(want.length, cap_);
    notes.push(`${searched} searches (${leads.length} lead acts), ${matched.length} matched items with a badge, ${Math.min(want.length, cap_)} record page(s) read`);
    if (left) notes.push(`${left} record page(s) left for the next run (cap ${cap_})`);
    const top = rows.map((r) => r.dateRaw).filter(Boolean).sort().at(-1) ?? null;
    return {
      rows,
      newest: top ? `newest cert date read ${top}` : "no badge changed since the last run",
      notes,
      cursor: { badges: nextBadges },
    };
  },
};
