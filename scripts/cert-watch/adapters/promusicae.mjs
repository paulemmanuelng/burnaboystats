// PROMUSICAE (ES) — elportaldemusica.es/awards/index, the weekly award list.
// Spec: docs/cert-watcher/SPEC.md §3 row 15, §3.3.
//
// Daily: the week filter for this ISO week and last (across a year boundary,
// last week is the previous ISO year's last week), plus any week back to the
// last one read, cap 5; 10 awards a page, following the page's own "next"
// link (`per-page` is ignored by the site). Week 38 of 2026 held 19 awards,
// week 37 held 27.
// Deep (Mondays): `AwardsSearch[artist]=<string>` for every artist string in
// the site's OWN dropdown that names one of the sixteen — taken from the page
// the daily read already fetched, never typed.
//
// Each award is a card: group (CANCIONES / ALBUMES / SINGLES / DVD), title,
// credit (" / "-separated), the number "N ×" and the icon "Discos de Oro" /
// "Discos de Platino", and the Año / Semana it was granted. Each step is its
// own card, so the highest reading for a record is its current tier.
//
// The site picks its language per request: with no Accept-Language it served
// English on 24 Sep 2026 ("Showing 1-10 of 19 items.", "Gold award", "Year" /
// "Week"), the recipe re-test got Spanish. The adapter asks for the register's
// own locale (Accept-Language: es-ES, as the register's page does in a Spanish
// browser) and reads either language, both proved on real pages.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";
import { isoWeekMonday } from "../health.mjs";

export const BASE = "https://www.elportaldemusica.es/awards/index";
export const weekUrl = (year, week) => `${BASE}?${new URLSearchParams({ "AwardsSearch[year]": String(year), "AwardsSearch[week]": String(week) })}`;
export const artistUrl = (artist) => `${BASE}?${new URLSearchParams({ "AwardsSearch[artist]": artist })}`;
const IDENTITY = /<select id="awardssearch-week"/;
/** The list, with awards or with the site's own words for none. */
const SUCCESS = /id="awardsList"/;

const cell = (s) => collapse(decodeEntities(stripTags(s)));
const FORMAT = { canciones: "single", singles: "single", albumes: "album" };
const TIER_OF = { golden: "Gold", platinum: "Platinum" };
const ALT_OF = { "Discos de Oro": "Gold", "Discos de Platino": "Platinum", "Gold award": "Gold", "Platinum award": "Platinum" };
const HEADERS = { "Accept-Language": "es-ES" };

/** "1 ×" + class golden|platinum (+ the icon's alt, which must agree) → {tier, x}. */
export function parseAward(numberText, cls, alt) {
  const m = collapse(numberText).match(/^(\d+)\s*×$/);
  const tier = TIER_OF[cls];
  if (!m || !tier || ALT_OF[alt] !== tier) return null;
  const x = Number(m[1]);
  return x >= 1 ? { tier, x } : null;
}

/** The ISO week of a date: { year, week }. */
export function isoWeekOf(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const y = d.getUTCFullYear();
  const week = Math.ceil(((d - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return { year: y, week };
}

/** Every award card on a page, verbatim. */
export function parseCards(html) {
  const s = String(html ?? "");
  const start = s.indexOf('id="awardsList"');
  const body = start >= 0 ? s.slice(start) : "";
  const rows = [];
  const re = /<div data-key="(\d+)">([\s\S]*?)(?=<div data-key="\d+">|<div class="summary">|<ul class="pagination">|<div class="empty">|$)/g;
  for (const m of body.matchAll(re)) {
    const b = m[2];
    const pick = (r) => (b.match(r) ?? [])[1] ?? "";
    const group = cell(pick(/<div class="group">([\s\S]*?)<\/div>/));
    const title = cell(pick(/<h2>([\s\S]*?)<\/h2>/));
    const credit = cell(pick(/<h3>([\s\S]*?)<\/h3>/));
    const numM = b.match(/publication_award_number ([a-z]+)">([\s\S]*?)<\/span>/);
    const alt = pick(/<img class="award_icon"[^>]*alt="([^"]*)"/);
    const year = cell(pick(/(?:Año|Year)\s*<\/td>\s*<td>([\s\S]*?)<\/td>/));
    const week = cell(pick(/(?:Semana|Week)\s*<\/td>\s*<td>([\s\S]*?)<\/td>/));
    const link = pick(/class="publication_link" href="([^"]*)"/);
    const number = numM ? cell(numM[2]) : "";
    rows.push({
      rowId: m[1],
      credit,
      title,
      format: FORMAT[group.toLowerCase()] ?? "unknown",
      formatRaw: group,
      tierRaw: `${number} ${alt}`.trim(),
      reading: parseAward(number, numM ? numM[1] : null, alt),
      dateRaw: `${year} semana ${week}`,
      url: link ? `https://www.elportaldemusica.es${link}` : BASE,
      raw: cap(`${m[1]} · ${group} | ${title} | ${credit} | ${number} ${alt} | año ${year} semana ${week}`),
      extra: { year: Number(year) || null, week: Number(week) || null },
    });
  }
  return rows;
}

/** "Mostrando 1-10 de 19 elementos." / "Showing 1-10 of 19 items." → 19;
 *  the site's "no results" notice → 0. */
export function parseTotal(html) {
  const s = String(html ?? "");
  const m = s.match(/(?:Mostrando|Showing) <b>[^<]*<\/b> (?:de|of) <b>([\d.,]+)<\/b>/);
  if (m) return Number(m[1].replace(/[.,]/g, ""));
  if (/<div class="empty">/.test(s)) return 0;
  return null;
}

/** The option selected in one of the page's own filter <select>s. */
export function selected(html, name) {
  const m = String(html ?? "").match(new RegExp(`<select[^>]*name="AwardsSearch\\[${name}\\]"[^>]*>([\\s\\S]*?)</select>`));
  if (!m) return null;
  const o = m[1].match(/<option value="([^"]*)" selected>/);
  return o ? decodeEntities(o[1]) : "";
}

/** The artist dropdown's strings, decoded, exactly as the site offers them. */
export function artistOptions(html) {
  const m = String(html ?? "").match(/<select id="select2-artist"[^>]*>([\s\S]*?)<\/select>/);
  if (!m) return [];
  return [...m[1].matchAll(/<option value="([^"]*)"/g)].map((o) => decodeEntities(o[1])).filter(Boolean);
}

const nextLink = (html) => {
  const m = String(html ?? "").match(/<li class="next"><a href="([^"]+)"/);
  return m ? new URL(decodeEntities(m[1]), BASE).href : null;
};

/** Every page of one filtered list, checked against what was asked for. */
async function walk(ctx, firstUrl, want, what) {
  const rows = [];
  let url = firstUrl;
  let total = null;
  let firstHtml = null;
  for (let p = 1; url && p <= 10; p++) {
    const res = expectOk(await ctx.request({ url, headers: HEADERS, success: SUCCESS }), `PROMUSICAE ${what} page ${p}`);
    const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
    if (cls.kind !== "ok") throw new AdapterError(cls.kind, `PROMUSICAE ${what}: ${cls.detail}`);
    const html = String(res.body);
    if (p === 1) firstHtml = html;
    for (const [name, value] of Object.entries(want)) {
      const got = selected(html, name);
      if (got !== String(value)) throw new AdapterError("mismatch", `PROMUSICAE served ${name} "${got}" for "${value}" (${what})`);
    }
    const t = parseTotal(html);
    if (t == null) throw new AdapterError("format", `PROMUSICAE ${what}: no count and no "empty" notice`);
    total = t;
    const cards = parseCards(html);
    if (want.week != null && cards.some((c) => c.extra.week !== Number(want.week) || c.extra.year !== Number(want.year))) {
      throw new AdapterError("mismatch", `PROMUSICAE served cards of another week on the week ${want.week}/${want.year} page`);
    }
    rows.push(...cards);
    if (rows.length >= total || !cards.length) break;
    url = nextLink(html);
  }
  if (total != null && rows.length < total) throw new AdapterError("format", `PROMUSICAE ${what}: ${rows.length} of ${total} awards read`);
  return { rows, total, html: firstHtml };
}

export const promusicae = {
  id: "promusicae",
  country: "ES",
  body: "PROMUSICAE",
  programme: null,
  class: "AUTOMATE",
  step: "3b",
  hosts: ["www.elportaldemusica.es"],
  registerUrl: BASE,
  ladder: "standard",
  dateKind: "award week (año · semana)",
  humanCheck: "Open https://www.elportaldemusica.es/awards/index, filter Año and Semana to this week and last, and read the awards for the 16 names.",
  // A new week can have no awards yet.
  minRows: 0,
  // SHAKIRA / BURNA BOY | DAI DAI | 1 × Discos de Platino (card 30349, 2026
  // week 30) — on the artist search, read on deep runs.
  control: { when: "deep", rowId: "30349", find: (r) => r.rowId === "30349" && r.credit === "SHAKIRA / BURNA BOY" && r.title === "DAI DAI" },
  // The deep read (artist searches / the whole register or year) keeps its
  // rows naming the sixteen from week to week; the daily newest-first window
  // does not, so only deep reads are judged (health.mjs matchedVerdict).
  matchedFloor: { deep: true },
  total: null,
  parse: { cards: parseCards, total: parseTotal, award: parseAward, selected, artistOptions, isoWeekOf },
  async read(ctx) {
    const now = ctx.now ?? new Date();
    const notes = [];
    const thisWeek = isoWeekOf(now);
    const weeks = [thisWeek];
    // Last week, and back to the last week read (cap 5 in all).
    const last = ctx.cursor?.lastWeek ?? null;
    for (let i = 1; i < 5; i++) {
      const w = isoWeekOf(new Date(now.getTime() - i * 7 * 86400000));
      if (i > 1 && (!last || w.year < last.year || (w.year === last.year && w.week <= last.week))) break;
      weeks.push(w);
    }
    const rows = [];
    let dropdownHtml = null;
    const counts = [];
    let newestWeek = null;
    for (const w of weeks) {
      const got = await walk(ctx, weekUrl(w.year, w.week), { year: w.year, week: w.week }, `week ${w.week}/${w.year}`);
      dropdownHtml ??= got.html;
      rows.push(...got.rows);
      counts.push(`week ${w.week}: ${got.total}`);
      if (got.rows.length && (!newestWeek || w.year > newestWeek.year || (w.year === newestWeek.year && w.week > newestWeek.week))) newestWeek = w;
    }
    if (ctx.deep) {
      const strings = artistOptions(dropdownHtml).filter((a) => ctx.matches({ credit: a, title: "" }));
      const unselected = [];
      for (const a of strings) {
        try {
          const got = await walk(ctx, artistUrl(a), { artist: a }, `artist "${a}"`);
          rows.push(...got.rows);
        } catch (e) {
          // One dropdown string the site does not select back (it answers "no
          // results" instead) says nothing about the register, and must not
          // sink the daily read: it is named in the notes, never read as "none".
          if (!(e instanceof AdapterError) || e.kind !== "mismatch") throw e;
          unselected.push(a);
        }
      }
      notes.push(`${strings.length} artist searches (strings from the site's own dropdown)`);
      if (unselected.length) notes.push(`not selected back by the site, so not read: ${unselected.map((a) => `"${a}"`).join(", ")}`);
    }
    const fromCursor = ctx.cursor?.newestWeek ?? null;
    const nw = newestWeek ?? fromCursor;
    return {
      rows: [...new Map(rows.map((r) => [r.rowId, r])).values()],
      newestDate: nw ? isoWeekMonday(nw.year, nw.week) : null,
      newest: counts.join(" · "),
      notes,
      cursor: { lastWeek: thisWeek, newestWeek: nw },
    };
  },
};
