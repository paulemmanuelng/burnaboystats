// BPI (BRIT Certified) — certified-awards.bpi.co.uk.
// Spec: docs/cert-watcher/SPEC.md §3 row 4, §3.2, §11.1.
//
// HELD. BPI's robots.txt reads `User-agent: *` / `Disallow: /` (read 24 Sep
// 2026), so this adapter never fetches a register page: read() asks the
// robots gate first and stops with a `robots` error before any request. The
// parsers are built and tested on pages the 23 Sep sweep saved (before its
// robots.txt was read). Enabling it takes a written permission record in
// config (`adapters.bpi.permission`, SPEC §11.1) — and even then read() asks
// the robots gate first and stops while robots.txt says Disallow. Until then
// UK is a weekly human check.
//
// The list view names the lead act only for many featured records
// ("VICTONY/TOLIVER/REMA/TEMPOE | SOWETO", "WIZKID FT BUJU | MOOD"), and a
// detail page's "Most Recent Certification" is the current tier; the list's
// Award column is the same reading.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const BASE = "https://certified-awards.bpi.co.uk/";
const FORMAT = { single: "single", album: "album" };

/** "Silver" / "Gold" / "Platinum" / "2x Platinum" … "10x Platinum" — the
 *  forms BPI prints. Anything else (a Diamond BPI has never been seen to
 *  print, "Music DVDs" tiers) is null, never guessed. */
export function parseTier(s) {
  const t = collapse(s);
  if (t === "Silver") return { tier: "Silver", x: 1 };
  if (t === "Gold") return { tier: "Gold", x: 1 };
  if (t === "Platinum") return { tier: "Platinum", x: 1 };
  const m = t.match(/^(\d+)x Platinum$/);
  if (m && Number(m[1]) >= 2) return { tier: "Platinum", x: Number(m[1]) };
  return null;
}

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** The list view (`?view=list`, an htmx fragment): Artist, Title, Award,
 *  Format, Corporate Group/Label, Latest Certification, Released. */
export function parseList(html) {
  const rows = [];
  const re = /<tr[^>]*hx-get="(\/format\/\d+\/artist\/\d+\/title\/\d+)"[^>]*>([\s\S]*?)<\/tr>/g;
  for (const m of String(html ?? "").matchAll(re)) {
    const tds = [...m[2].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => cell(c[1]));
    const [credit = "", title = "", award = "", formatRaw = "", label = "", dateRaw = "", released = ""] = tds;
    rows.push({
      rowId: m[1],
      credit,
      title,
      format: FORMAT[formatRaw.toLowerCase()] ?? "unknown",
      formatRaw,
      tierRaw: award,
      reading: parseTier(award),
      dateRaw,
      url: `${BASE.replace(/\/$/, "")}${m[1]}`,
      raw: cap(`${credit} | ${title} | ${award} | ${formatRaw} | ${label} | ${dateRaw} | ${released}`),
      extra: { label, released },
    });
  }
  return rows;
}

/** A detail page: the header, "Most Recent Certification" and its date, and
 *  the certification history, verbatim. */
export function parseDetail(html) {
  const s = String(html ?? "");
  const card = (label) => {
    const i = s.indexOf(`>${label}</p>`);
    if (i < 0) return null;
    const h3 = s.slice(i).match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    return h3 ? cell(h3[1]) : null;
  };
  const head = s.match(/<p class="text-sm font-semibold f">([^<]*)<\/p><h2[^>]*>([\s\S]*?)<\/h2><p class="text-2xl italic">([\s\S]*?)<\/p>/);
  const hist = s.indexOf(">Certification history<");
  const history = [];
  if (hist >= 0) {
    const re = /<p class="font-bold text-sm[^"]*">([^<]*)<\/p>[\s\S]*?<p class="font-bold text-base[^"]*">([^<]*)<\/p>/g;
    for (const m of s.slice(hist).matchAll(re)) history.push({ date: collapse(m[1]), tier: collapse(m[2]) });
  }
  const current = card("Most Recent Certification");
  if (!head || !current) throw new AdapterError("format", "BPI detail page: no header or no \"Most Recent Certification\"");
  return {
    formatRaw: collapse(head[1]),
    credit: cell(head[2]),
    title: cell(head[3]),
    current,
    reading: parseTier(current),
    currentDate: card("Most Recent Certification Date"),
    released: card("Release Date"),
    history,
  };
}

/** The list URL the watcher would read: certified since `from`, newest first. */
export const listUrl = (from) =>
  `${BASE}?certified_date_from=${from}&sort=certificationDate%20desc&view=list`;

const minusDays = (iso, n) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};
const isoOf = (dmy) => {
  const m = String(dmy ?? "").match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
};

export const bpi = {
  id: "bpi",
  country: "UK",
  body: "BPI",
  programme: null,
  class: "MANUAL",
  step: 2,
  hosts: ["certified-awards.bpi.co.uk"],
  registerUrl: BASE,
  heldBy: "robots",
  manualCheck: "uk",
  note: "robots.txt: User-agent: * / Disallow: /",
  ladder: "standard",
  dateKind: "certification date",
  humanCheck: "Open https://certified-awards.bpi.co.uk/, search the title, open its detail page and read \"Most Recent Certification\".",
  minRows: 0,
  control: { when: "tests", rowId: "/format/2/artist/6930/title/22159", find: (r) => r.rowId === "/format/2/artist/6930/title/22159" },
  parse: { list: parseList, detail: parseDetail, tier: parseTier },
  async read(ctx) {
    const today = (ctx.now ?? new Date()).toISOString().slice(0, 10);
    const from = ctx.cursor?.lastDate ? minusDays(ctx.cursor.lastDate, 7) : minusDays(today, 21);
    const url = listUrl(from);
    // The robots gate FIRST: with today's robots.txt this throws before a
    // single register request is made.
    const rv = await ctx.robotsCheck(url);
    if (rv.unreadable) throw new AdapterError("unreachable", `BPI: ${rv.detail}`, { reason: "robots.txt unreadable" });
    if (!rv.allowed) throw new AdapterError("robots", `robots.txt disallows ${new URL(url).pathname} (${rv.by === "*" ? "User-agent: *" : "our User-agent"}: Disallow: ${rv.rule?.path})`);
    const res = expectOk(await ctx.request({ url, headers: { "HX-Request": "true" }, success: /hx-get="\/format\/|<tbody/ }), "BPI list");
    const cls = classifyPage(res, { identity: /Latest Certification/, success: /awards-table-body/ });
    if (cls.kind !== "ok") throw new AdapterError(cls.kind, `BPI list: ${cls.detail}`);
    const rows = parseList(res.body);
    const dates = rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort();
    const top = dates.at(-1) ?? null;
    return {
      rows,
      newest: top ? `newest certification ${top}` : `no certification since ${from}`,
      notes: [`${rows.length} row(s) certified since ${from}`],
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
