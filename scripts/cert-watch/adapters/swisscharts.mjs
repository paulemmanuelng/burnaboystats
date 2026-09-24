// IFPI Schweiz (CH), via swisscharts.com/edelmetall/<year>.
// Spec: docs/cert-watcher/SPEC.md §3 row 18, §3.3.
//
// swisscharts.com publishes the IFPI Schweiz awards as a public site in its
// own right. It is NOT a way round hitparade.ch: hitparade.ch serves a bot
// challenge (403), and the watcher never swaps hosts to get round one — it
// never requests hitparade.ch at all.
//
// Daily: this year's page (1 request; robots.txt Crawl-delay 10 — config.hosts
// holds the gap); in January the previous year's too. Served in ISO-8859-1,
// decoded as latin1. The page must say "Gewinner <year>" and select that year.
// It says of itself "keine abschliessende Liste": not a complete list, so a
// missing card is never evidence of anything.
//
// A card: <b>Artist</b><br>Title, Kategorie, Jahr, Label, "Edelmetall:" tier
// word. The multiple is in the image name (award_platin_2.svg); older cards
// carry only the word (Doppel-Platin, Dreifach-Platin, Dreifach Gold…).

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const yearUrl = (y) => `https://swisscharts.com/edelmetall/${y}`;
const SUCCESS = /class="award_item"/;
const cell = (s) => collapse(decodeEntities(stripTags(s)));
const FORMAT = { single: "single", album: "album" };

const MULT = { doppel: 2, zweifach: 2, dreifach: 3, vierfach: 4, "fünffach": 5, sechsfach: 6, siebenfach: 7, achtfach: 8, neunfach: 9, zehnfach: 10 };

/** The tier word as printed → {tier, x}, or null. */
export function parseWord(w) {
  const s = collapse(w).toLowerCase();
  if (s === "gold") return { tier: "Gold", x: 1 };
  if (s === "platin") return { tier: "Platinum", x: 1 };
  if (s === "diamant") return { tier: "Diamond", x: 1 };
  const m = s.match(/^([a-zäöüß]+?)[\s-]?(platin|gold)$/);
  if (m && MULT[m[1]]) return { tier: m[2] === "gold" ? "Gold" : "Platinum", x: MULT[m[1]] };
  return null;
}

/** The award image → {tier, x}, or null. */
export function parseImage(img) {
  if (/^award_gold\.svg$/.test(img ?? "")) return { tier: "Gold", x: 1 };
  const m = String(img ?? "").match(/^award_platin_(\d+)\.svg$/);
  return m && Number(m[1]) >= 1 ? { tier: "Platinum", x: Number(m[1]) } : null;
}

/** Image and word must agree where both are printed; either alone will do. */
export function parseCardTier(img, word) {
  const a = img ? parseImage(img) : null;
  const b = parseWord(word);
  if (img && !a) return null;
  if (a && b && (a.tier !== b.tier || a.x !== b.x)) return null;
  return a ?? b;
}

/** Every award card on a year page, verbatim. */
export function parseCards(html, year) {
  const rows = [];
  for (const blk of String(html ?? "").split('<div class="award_item">').slice(1)) {
    const img = (blk.match(/<img src="\/images\/(award_[^"]+)"/) ?? [])[1] ?? null;
    const head = blk.match(/<b>([\s\S]*?)<\/b><br>([\s\S]*?)<\/div>/);
    const field = (name) => cell((blk.match(new RegExp(`<b>${name}: </b>([^<]*)`)) ?? [])[1] ?? "");
    const credit = head ? cell(head[1]) : "";
    const title = head ? cell(head[2]) : "";
    const kategorie = field("Kategorie");
    const jahr = field("Jahr");
    const label = field("Label");
    const word = field("Edelmetall");
    rows.push({
      credit,
      title,
      format: FORMAT[kategorie.toLowerCase()] ?? "unknown",
      formatRaw: kategorie,
      tierRaw: `${word}${img ? ` · ${img}` : ""}`,
      reading: parseCardTier(img, word),
      dateRaw: jahr,
      url: yearUrl(year),
      raw: cap(`${jahr} · ${credit} | ${title} | ${kategorie} | ${label} | ${word}${img ? ` | ${img}` : ""}`),
      extra: { label, image: img },
    });
  }
  return rows;
}

/** A year page, checked: it says it is that year's, in its heading and form. */
export function readYear(res, year, { allowEmpty = false } = {}) {
  const cls = classifyPage(res, { identity: new RegExp(`<h1>Gewinner ${year}</h1>`), success: allowEmpty ? null : SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `swisscharts.com ${year}: ${cls.detail}`);
  if (!new RegExp(`<option value="${year}" selected>`).test(res.body)) throw new AdapterError("mismatch", `swisscharts.com: the page does not select ${year}`);
  const rows = parseCards(res.body, year);
  if (rows.some((r) => !r.credit || !r.title)) throw new AdapterError("format", `swisscharts.com ${year}: a card without artist or title`);
  return rows;
}

export const swisscharts = {
  id: "swisscharts",
  country: "CH",
  body: "IFPI Schweiz (swisscharts.com)",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["swisscharts.com"],
  registerUrl: yearUrl(2026),
  ladder: "standard",
  dateKind: "award year",
  humanCheck: "Open https://swisscharts.com/edelmetall/<this year> (never hitparade.ch) and read the award cards for the 16 names; the page is not a complete list.",
  minRows: 0,
  // Tyla | Chanel | Single | 2026 | Sony | Gold — on the 2026 page, checked
  // every day while 2026 is read.
  control: { when: "daily", year: 2026, rowId: "Tyla | Chanel | 2026", find: (r) => r.credit === "Tyla" && r.title === "Chanel" && r.dateRaw === "2026" },
  // This year's cards (29 on 24 Sep 2026); the floor starts again in January.
  // The daily read is the whole register (or year, or the fixed name
  // searches), so its rows naming the sixteen persist between runs: a read
  // naming under half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  total: "year",
  parse: { cards: parseCards, word: parseWord, image: parseImage, tier: parseCardTier, year: readYear },
  async read(ctx) {
    const now = ctx.now ?? new Date();
    const year = now.getUTCFullYear();
    const years = now.getUTCMonth() === 0 ? [year, year - 1] : [year];
    const rows = [];
    const notes = [];
    let thisYear = 0;
    for (const y of years) {
      const res = expectOk(await ctx.request({ url: yearUrl(y), encoding: "latin1", success: SUCCESS }), `swisscharts.com ${y}`);
      const got = readYear(res, y, { allowEmpty: y === year && years.length > 1 });
      if (y === year) thisYear = got.length;
      else notes.push(`${got.length} cards for ${y} too (January)`);
      rows.push(...got);
    }
    notes.push("not a complete list (the page says so)");
    return { rows, total: thisYear, totalYear: year, years, newestDate: null, newest: `${thisYear} cards for ${year}`, notes, cursor: { year, cards: thisYear } };
  },
};
