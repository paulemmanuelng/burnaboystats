// SNEP (France) — snepmusique.com/les-certifications/.
// Spec: docs/cert-watcher/SPEC.md §3 row 5, §3.2.
//
// Daily: page 1 of the register (30 cards, newest date de constat first),
// plus the next page while page 1 does not reach back to the last run's
// newest date. Deep (Mondays): `?interprete=` for each search term.
//
// SNEP REPLACES a card on upgrade and the replacement can carry a different
// credit, so a card that disappears is superseded, never revoked — the
// watcher only ever compares what IS printed, and never reports the site
// ahead of the register. Its CSV export is partial; it is not used.
// robots.txt blocks ClaudeBot only; `*` (and so this User-Agent) may read
// /les-certifications/.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://snepmusique.com/les-certifications/";
const IDENTITY = /<title>Les certifications - SNEP/;
/** Cards, or SNEP's own words for none. */
const SUCCESS = /class="certification"|aucun résultat ne correspond/;
const NONE = /aucun résultat ne correspond à vos critères/;

/** The tier words SNEP prints — on the cards (Or, Platine, Double Platine,
 *  Diamant) and in its own export (Double or, Triple Platine). Unseen words
 *  give null. */
const TIERS = {
  or: { tier: "Gold", x: 1 },
  "double or": { tier: "Gold", x: 2 },
  platine: { tier: "Platinum", x: 1 },
  "double platine": { tier: "Platinum", x: 2 },
  "triple platine": { tier: "Platinum", x: 3 },
  diamant: { tier: "Diamond", x: 1 },
};
export const parseTier = (s) => TIERS[collapse(s).toLowerCase()] ?? null;

const FORMAT = { singles: "single", albums: "album" };
const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** "27/08/2026" → "2026-08-27". */
export const isoOf = (dmy) => {
  const m = String(dmy ?? "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
};

/** Every `div.certification` card on a page, verbatim. */
export function parseCards(html) {
  const rows = [];
  const blocks = String(html ?? "").split('<div class="certification"').slice(1);
  for (const blk of blocks) {
    const field = (cls) => {
      const m = blk.match(new RegExp(`<div class="${cls}">([\\s\\S]*?)</div>`));
      return m ? cell(m[1]) : "";
    };
    const certif = blk.match(/<div class="certif ([^"]*)">([\s\S]*?)<\/div>/);
    const dates = Object.fromEntries(
      [...blk.matchAll(/<div class="date"><span>([\s\S]*?)<\/span>([\s\S]*?)<\/div>/g)].map((d) => [cell(d[1]), cell(d[2])])
    );
    const categorie = field("categorie");
    const titre = field("titre");
    const artiste = field("artiste");
    const editeur = field("editeur");
    const tierRaw = certif ? cell(certif[2]) : "";
    const constat = dates["Date de constat"] ?? "";
    const sortie = dates["Date de sortie"] ?? "";
    rows.push({
      credit: artiste,
      title: titre,
      format: FORMAT[categorie.toLowerCase()] ?? "unknown",
      formatRaw: categorie,
      tierRaw,
      reading: parseTier(tierRaw),
      dateRaw: constat,
      url: `${PAGE}?interprete=${encodeURIComponent(artiste).replace(/%20/g, "+")}&titre=${encodeURIComponent(titre).replace(/%20/g, "+")}&editeur=`,
      raw: cap(`${categorie} | ${titre} | ${artiste} | ${editeur} | ${tierRaw} | sortie ${sortie} | constat ${constat}`),
      extra: { editeur, sortie, iconClass: certif ? certif[1] : null },
    });
  }
  return rows;
}

/** A whole page: its cards, whether SNEP says there are none, and the link
 *  to the next page exactly as the page prints it. */
export function parsePage(html, n = 1) {
  const s = String(html ?? "");
  const next = s.match(new RegExp(`href="(https://snepmusique\\.com/les-certifications/page/${n + 1}[^"]*)"`));
  return { rows: parseCards(s), none: NONE.test(s), next: next ? decodeEntities(next[1]) : null };
}

export const searchUrl = (term) =>
  `${PAGE}?interprete=${encodeURIComponent(term).replace(/%20/g, "+")}&titre=&editeur=`;

async function getPage(ctx, url, n) {
  const res = expectOk(await ctx.request({ url, success: SUCCESS }), `SNEP page ${n}`);
  const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `SNEP: ${cls.detail} (${url})`);
  const page = parsePage(res.body, n);
  if (!page.rows.length && !page.none) throw new AdapterError("format", `SNEP: no cards and no "aucun résultat" (${url})`);
  return page;
}

const newestIso = (rows) => rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort().at(-1) ?? null;
const oldestIso = (rows) => rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort()[0] ?? null;

export const snep = {
  id: "snep",
  country: "FR",
  body: "SNEP",
  programme: null,
  class: "AUTOMATE",
  step: 2,
  hosts: ["snepmusique.com"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "date de constat",
  humanCheck: "Open https://snepmusique.com/les-certifications/?interprete=<name> for each name; read categorie, certif and date de constat.",
  minRows: 1,
  // SHAKIRA & BURNA BOY | DAI DAI | Diamant | constat 27/08/2026 — on the
  // "Burna Boy" interprete search, read on deep runs.
  control: {
    when: "deep",
    rowId: "DAI DAI · Diamant · 27/08/2026",
    find: (r) => r.title === "DAI DAI" && r.credit === "SHAKIRA & BURNA BOY" && r.tierRaw === "Diamant" && r.dateRaw === "27/08/2026",
  },
  // The deep read (artist searches / the whole register or year) keeps its
  // rows naming the sixteen from week to week; the daily newest-first window
  // does not, so only deep reads are judged (health.mjs matchedVerdict).
  matchedFloor: { deep: true },
  parse: { cards: parseCards, page: parsePage, tier: parseTier },
  async read(ctx) {
    const notes = [];
    const lastDate = ctx.cursor?.lastDate ?? null;
    // Daily: the newest cards, back to the last run's newest date (≤ 3 pages).
    const p1 = await getPage(ctx, PAGE, 1);
    const listRows = [...p1.rows];
    let next = p1.next;
    for (let n = 2; n <= 3 && next && lastDate && (oldestIso(listRows) ?? "") >= lastDate; n++) {
      const p = await getPage(ctx, next, n);
      listRows.push(...p.rows);
      next = p.next;
    }
    const rows = [...listRows];
    if (ctx.deep) {
      let searched = 0;
      for (const term of ctx.searchTerms) {
        const first = await getPage(ctx, searchUrl(term), 1);
        rows.push(...first.rows);
        let more = first.next;
        for (let n = 2; n <= 5 && more; n++) {
          const p = await getPage(ctx, more, n);
          rows.push(...p.rows);
          more = p.next;
        }
        searched++;
      }
      notes.push(`${searched} interprète searches`);
    }
    const top = newestIso(listRows);
    const topRow = listRows.find((r) => isoOf(r.dateRaw) === top);
    return {
      newestDate: top,
      // A card read twice (the newest page and a search) is one card.
      rows: [...new Map(rows.map((r) => [r.raw, r])).values()],
      newest: top ? `newest date de constat ${topRow.dateRaw}` : null,
      notes,
      cursor: { lastDate: top ?? lastDate },
    };
  },
};
