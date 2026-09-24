// Pro-Música Brasil (BR) — the certificate search on pro-musicabr.org.br.
// Spec: docs/cert-watcher/SPEC.md §3 row 22, §3.3.
//
// Daily: `/home-2/certificados/?busca_artista=<term>` for each search term,
// with Accept-Language: pt-BR (≈19 requests; 1.6–3.4 s each), following the
// page's own pager (40 cards a page, cap 5). The search is a substring match
// on the artist field: "Burna" finds "Stormzy, Ed Sheeran, Burna Boy".
// Deep (Mondays): the whole current year, `busca_ano=<year>` (cap 40 pages;
// 1,274 certificates, 32 pages, on 24 Sep 2026).
//
// A card: year, medium (SINGLE / ÁLBUM / CD / DVD / DMS / DAL / DIGITAL …),
// artist, work, label, and the badge image whose alt is the tier: Ouro,
// Platina, Platina 2x, Diamante, Diamante 3x… The register's own words for no
// results ("0 resultados") are a clean empty answer — and, being a search,
// never evidence that a title is uncertified.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://pro-musicabr.org.br/home-2/certificados/";
/** Page 1 is the form's own GET; a later page is WordPress's canonical
 *  `/page/N/?…` (empty fields as bare keys) — what `?paged=N` 301-redirects
 *  to, asked for directly so each page costs one request. */
export const searchUrl = ({ artist = "", year = 0, page = 1 }) => {
  const fields = [
    ["busca_artista", artist],
    ["busca_tipo_produto", ""],
    ["busca_tipo_certificado", "0"],
    ["busca_pela_gravadora", "0"],
    ["busca_ano", String(year)],
  ];
  if (page <= 1) return `${PAGE}?${new URLSearchParams(fields)}`;
  const q = fields.map(([k, v]) => (v === "" ? k : `${k}=${encodeURIComponent(v).replace(/%20/g, "+")}`)).join("&");
  return `${PAGE}page/${page}/?${q}`;
};
const IDENTITY = /<title>CERTIFICADOS - Pro-Música Brasil<\/title>/;
const SUCCESS = /class="pmblc-lista-certificados"|resultados?\)<\/span>/;
const HEADERS = { "Accept-Language": "pt-BR" };
const TIERS = { ouro: "Gold", platina: "Platinum", diamante: "Diamond" };
const FORMAT = { single: "single", "digital (música)": "single", dms: "single", "álbum": "album", cd: "album", "digital (álbum)": "album", dal: "album" };

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** The badge alt → {tier, x}: "Ouro", "Platina 2x", "Diamante 16x". */
export function parseBadge(alt) {
  const m = collapse(alt).match(/^(ouro|platina|diamante)(?:\s+(\d+)x)?$/i);
  if (!m) return null;
  const x = m[2] ? Number(m[2]) : 1;
  return x >= 1 ? { tier: TIERS[m[1].toLowerCase()], x } : null;
}

/** "de 377 (15059 resultados)" → {pages, total}. */
export function parseCounter(html) {
  const m = String(html ?? "").match(/<span>de ([\d.]+) \(([\d.]+) resultados?\)<\/span>/);
  return m ? { pages: Number(m[1].replace(/\./g, "")), total: Number(m[2].replace(/\./g, "")) } : null;
}

/** The search the page says it ran (its own form's fields). */
export function servedQuery(html) {
  const s = String(html ?? "");
  const v = (name) => {
    const m = s.match(new RegExp(`<input type="hidden" name="${name}" value="([^"]*)"`));
    return m ? decodeEntities(m[1]) : null;
  };
  const page = s.match(/<input type="text" name="paged"[^>]*value="(\d+)"/);
  return { artist: v("busca_artista"), year: v("busca_ano"), page: page ? Number(page[1]) : null };
}

/** Every certificate card, verbatim. */
export function parseCards(html, url) {
  const rows = [];
  for (const m of String(html ?? "").matchAll(/<li class="pmblc-card-certificado">([\s\S]*?)<\/li>/g)) {
    const c = m[1];
    const pick = (r) => (c.match(r) ?? [])[1] ?? "";
    const ano = cell(pick(/<span class="pmblc-ano[^"]*">([\s\S]*?)<\/span>/)).replace(/[()]/g, "");
    const midia = cell(pick(/<\/span>([\s\S]*?)<\/h4>/));
    const artista = cell(pick(/<h3 class="pmblc-artista">([\s\S]*?)<\/h3>/));
    const obra = cell(pick(/<h2 class="pmblc-obra">([\s\S]*?)<\/h2>/));
    const gravadora = cell(pick(/<h4 class="pmblc-gravadora">([\s\S]*?)<\/h4>/));
    const badge = c.match(/class="pmblc-img-classificacao"\s*src="[^"]*\/([^"/]+)"\s*alt="([^"]*)"/);
    const alt = badge ? decodeEntities(badge[2]) : "";
    rows.push({
      credit: artista,
      title: obra,
      format: FORMAT[midia.toLowerCase()] ?? "unknown",
      formatRaw: midia,
      tierRaw: alt,
      reading: parseBadge(alt),
      dateRaw: ano,
      url,
      raw: cap(`(${ano}) ${midia} | ${artista} | ${obra} | ${gravadora} | ${alt}${badge ? ` (${badge[1]})` : ""}`),
      extra: { gravadora, image: badge ? badge[1] : null },
    });
  }
  return rows;
}

/** Every page of one search, checked against what was asked for. */
async function walk(ctx, query, maxPages) {
  const rows = [];
  let pages = 1;
  let total = 0;
  for (let p = 1; p <= Math.min(pages, maxPages); p++) {
    const url = searchUrl({ ...query, page: p });
    const res = expectOk(await ctx.request({ url, headers: HEADERS, success: SUCCESS }), `Pro-Música Brasil ${JSON.stringify(query)} page ${p}`);
    const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
    if (cls.kind !== "ok") throw new AdapterError(cls.kind, `Pro-Música Brasil: ${cls.detail}`);
    const served = servedQuery(res.body);
    if (served.artist !== (query.artist ?? "") || String(served.year) !== String(query.year ?? 0) || (served.page != null && served.page !== p)) {
      throw new AdapterError("mismatch", `Pro-Música Brasil served ${JSON.stringify(served)} for ${JSON.stringify({ ...query, page: p })}`);
    }
    const counter = parseCounter(res.body);
    if (!counter) throw new AdapterError("format", "Pro-Música Brasil: no result counter");
    pages = counter.pages;
    total = counter.total;
    const cards = parseCards(res.body, url);
    rows.push(...cards);
    if (!cards.length) break;
  }
  const complete = rows.length >= total;
  return { rows, total, complete };
}

export const promusicaBr = {
  id: "promusica-br",
  country: "BR",
  body: "Pro-Música Brasil",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["pro-musicabr.org.br"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "year",
  humanCheck: "Search https://pro-musicabr.org.br/home-2/certificados/?busca_artista=<name> for each name.",
  // Most of the sixteen have no Brazilian certificate: a quiet read is clean.
  minRows: 0,
  // Stormzy, Ed Sheeran, Burna Boy | Own It | Ouro (2020) — on the daily
  // "Burna" search, so checked every day.
  control: { when: "daily", rowId: "Stormzy, Ed Sheeran, Burna Boy | Own It | Ouro", find: (r) => r.credit === "Stormzy, Ed Sheeran, Burna Boy" && r.title === "Own It" && r.tierRaw === "Ouro" },
  // The daily read is the whole register (or year, or the fixed name
  // searches), so its rows naming the sixteen persist between runs: a read
  // naming under half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  total: null,
  parse: { cards: parseCards, badge: parseBadge, counter: parseCounter, served: servedQuery },
  async read(ctx) {
    const notes = [];
    const rows = [];
    const incomplete = [];
    for (const term of ctx.searchTerms) {
      const got = await walk(ctx, { artist: term, year: 0 }, 5);
      rows.push(...got.rows);
      if (!got.complete) incomplete.push(term);
    }
    const fromSearches = new Set(rows.map((r) => r.raw)).size;
    notes.push(`${ctx.searchTerms.length} artist searches`);
    if (incomplete.length) notes.push(`searches with more than 5 pages, read in part: ${incomplete.join(", ")}`);
    if (ctx.deep) {
      const year = (ctx.now ?? new Date()).getUTCFullYear();
      const got = await walk(ctx, { artist: "", year }, 40);
      rows.push(...got.rows);
      notes.push(`deep read: ${got.rows.length} of ${got.total} certificates for ${year}`);
    }
    return { rows: [...new Map(rows.map((r) => [r.raw, r])).values()], newestDate: null, newest: `${fromSearches} certificate(s) on the name searches`, notes, cursor: null };
  },
};
