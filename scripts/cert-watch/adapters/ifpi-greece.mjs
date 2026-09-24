// IFPI Greece (GR) — the Award column of its two weekly digital singles charts.
// Spec: docs/cert-watcher/SPEC.md §3 row 17, §3.3.
//
// Daily: https://ifpi.gr/digital_ien.html (International) and digital_en.html
// (Local), each a GET conditional on its Last-Modified (2 requests). A 304 is
// "unchanged since the last read": a clean read of the kept body. Staleness
// counts from the FILE's date (Last-Modified), not the chart week: the week-37
// chart was published on 23 Sep 2026.
//
// Each chart is a Word-exported table: Rank, Artist, Title, Company, ISRC,
// Award, Week-1, # of Weeks, Best Position, Best Week / Year, Status. Award is
// G / P / 2P / 3P / D (and so on): only titles charting that week carry one,
// so a missing award is never evidence of none, and rows without one are not
// emitted. The ISRC is the key.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";
import { isoWeekMonday } from "../health.mjs";

export const CHARTS = [
  { file: "digital_ien.html", name: "International" },
  { file: "digital_en.html", name: "Local" },
];
export const urlOf = (file) => `https://www.ifpi.gr/${file}`;
const IDENTITY = /<title>\s*Charts\s*<\/title>/;
const SUCCESS = />\s*Award<\/span>/;
const HEAD = ["Rank", "Artist", "Title", "Company", "ISRC", "Award", "Week-1", "# of Weeks", "Best Position", "Best Week / Year", "Status"];
const TIERS = { G: "Gold", P: "Platinum", D: "Diamond" };

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** "2P" → {Platinum, 2}; "G" → {Gold, 1}; anything else → null. */
export function parseAward(s) {
  const m = collapse(s).match(/^(\d*)([GPD])$/);
  if (!m) return null;
  const x = m[1] ? Number(m[1]) : 1;
  return x >= 1 ? { tier: TIERS[m[2]], x } : null;
}

/** The chart's week as the page prints it ("Week: 37/2026", split by tags). */
export function parseWeek(html) {
  const text = collapse(decodeEntities(stripTags(String(html ?? "")))).replace(/\s+/g, "");
  const m = text.match(/Week:(\d{1,2})\/(\d{4})/);
  return m ? { week: Number(m[1]), year: Number(m[2]) } : null;
}

/** The chart table: its header must be the eleven columns above. */
export function parseChart(html, chartName) {
  const s = String(html ?? "");
  const table = (s.match(/<table[\s\S]*?<\/table>/g) ?? []).find((t) => />\s*ISRC<\/span>/.test(t));
  if (!table) throw new AdapterError("format", `IFPI Greece ${chartName}: no chart table`);
  const trs = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => cell(c[1])));
  const head = trs[0] ?? [];
  if (head.join("|") !== HEAD.join("|")) throw new AdapterError("format", `IFPI Greece ${chartName}: header reads "${head.join(" | ")}"`);
  const week = parseWeek(s);
  const label = week ? `week ${week.week}/${week.year}` : "week ?";
  const body = trs.slice(1);
  const bad = body.filter((r) => r.length !== HEAD.length);
  if (bad.length) throw new AdapterError("format", `IFPI Greece ${chartName}: ${bad.length} row(s) without ${HEAD.length} cells`);
  const rows = body
    .filter((r) => r[5])
    .map((r) => {
      const [rank, artist, title, company, isrc, award, prev, weeks, best, bestWeek, status] = r;
      return {
        rowId: isrc,
        credit: artist,
        title,
        format: "single",
        formatRaw: `Digital Singles (${chartName})`,
        tierRaw: award,
        reading: parseAward(award),
        dateRaw: label,
        url: urlOf(chartName === "Local" ? "digital_en.html" : "digital_ien.html"),
        raw: cap(`${label} ${chartName} · #${rank} | ${artist} | ${title} | ${company} | ${isrc} | ${award} | week-1 ${prev} | ${weeks} wks | best ${best} (${bestWeek}) | ${status}`),
        extra: { isrc, rank, company, chart: chartName },
      };
    });
  return { week, count: body.length, rows };
}

export const ifpiGreece = {
  id: "ifpi-greece",
  country: "GR",
  body: "IFPI Greece",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["www.ifpi.gr"],
  registerUrl: urlOf("digital_ien.html"),
  ladder: "standard",
  dateKind: "chart week",
  humanCheck: "Open https://www.ifpi.gr/digital_ien.html and digital_en.html and read the Award column for the 16 names' charting titles.",
  // A chart can print no award for any of its titles.
  minRows: 0,
  // Tems, Dave | Raindance (feat. Tems) | GBUM72506029 | 2P — in the tests
  // only: an award shows only while the title charts.
  control: { when: "tests", rowId: "GBUM72506029", find: (r) => r.rowId === "GBUM72506029" && r.tierRaw === "2P" },
  total: null,
  parse: { chart: parseChart, award: parseAward, week: parseWeek },
  async read(ctx) {
    const rows = [];
    const notes = [];
    const cursor = {};
    let newest = null;
    let weekOf = null;
    for (const c of CHARTS) {
      const res = expectOk(await ctx.request({ url: urlOf(c.file), success: SUCCESS, conditional: true }), `IFPI Greece ${c.name}`);
      const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
      if (cls.kind !== "ok") throw new AdapterError(cls.kind, `IFPI Greece ${c.name}: ${cls.detail}`);
      const got = parseChart(res.body, c.name);
      rows.push(...got.rows);
      const lm = res.headers?.["last-modified"] ?? ctx.cursor?.[c.file] ?? null;
      cursor[c.file] = lm;
      notes.push(`${c.name}: ${got.week ? `week ${got.week.week}/${got.week.year}` : "week ?"} · ${got.rows.length} award(s) on ${got.count} rows${res.notModified ? " · unchanged since the last read (304)" : ""}${lm ? ` · file Last-Modified ${lm}` : ""}`);
      const fileDate = lm && !Number.isNaN(Date.parse(lm)) ? new Date(lm).toISOString().slice(0, 10) : null;
      if (fileDate && (!newest || fileDate > newest)) newest = fileDate;
      if (got.week) {
        const d = isoWeekMonday(got.week.year, got.week.week);
        if (!weekOf || d > weekOf) weekOf = d;
      }
    }
    notes.push("charting titles only");
    return { rows, newestDate: newest, newest: `${weekOf ? `chart week of ${weekOf}` : "chart week ?"}${newest ? ` · file dated ${newest}` : ""}`, notes, cursor };
  },
};
