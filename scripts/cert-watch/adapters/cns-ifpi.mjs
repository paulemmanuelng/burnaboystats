// ČNS IFPI — the award badges printed on its own chart rows (Czech Republic
// chart 30, Slovakia chart 43: the Singles Digital Top 100s).
// Spec: docs/cert-watcher/SPEC.md §3 rows 10–11, §3.2.
//
// ČNS IFPI publishes no standalone award list. A badge ("Zlatý singl",
// "Platinový singl") is printed inside `chart-full-row__details` while a
// title charts. So: no albums, no multiples, only titles released 2022 or
// later, and only while charting. A row WITHOUT a badge is not evidence of
// no award — rows without a badge are never emitted.
//
// Daily: the current week (1 request per chart). Deep (Mondays): also the
// previous week, taken from the page's own week selector (week ids are not
// consecutive: 3036 follows 3033). The page must say it is the week and the
// chart requested.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";
import { isoWeekMonday } from "../health.mjs";

export const BASE = "https://ifpicr.cz/hitparada/";
const SUCCESS = /class="chart-full-row"/;

/** The two badges ever seen. A never-seen "Diamantový" is null, not guessed. */
const BADGES = { "Zlatý singl": { tier: "Gold", x: 1 }, "Platinový singl": { tier: "Platinum", x: 1 } };
export const parseBadge = (s) => BADGES[collapse(s)] ?? null;

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** The page's selected chart and week, and the week list in page order. */
export function parseSelectors(html) {
  const s = String(html ?? "");
  const select = (name) => {
    const m = s.match(new RegExp(`<select[^>]*name="${name}"[^>]*>([\\s\\S]*?)</select>`));
    if (!m) return { selected: null, options: [] };
    const options = [...m[1].matchAll(/<option value="(\d+)"( selected)?>([^<]*)</g)].map((o) => ({ id: o[1], selected: !!o[2], label: collapse(o[3]) }));
    return { selected: options.find((o) => o.selected) ?? null, options };
  };
  return { chart: select("chartId"), week: select("weekId") };
}

/** Every `div.chart-full-row` → the rows that carry a badge, verbatim. */
export function parseChart(html, { chart, week }) {
  const s = String(html ?? "");
  const all = [];
  for (const blk of s.split('<div class="chart-full-row">').slice(1)) {
    const pos = blk.match(/chart-full-row__position">\s*([^<\s]+)/);
    const tit = blk.match(/chart-full-row__title">\s*<a href="([^"]+)">([\s\S]*?)<\/a>/);
    const itp = blk.match(/chart-full-row__interpreter">\s*<a href="[^"]+">([\s\S]*?)<\/a>\s*(?:<small>([\s\S]*?)<\/small>)?/);
    const det = blk.match(/chart-full-row__details">([\s\S]*?)<\/div>/);
    const strong = det ? det[1].match(/<strong[^>]*>([\s\S]*?)<\/strong>/) : null;
    const badge = strong ? cell(strong[1]) : null;
    const title = tit ? cell(tit[2]) : "";
    const artist = itp ? cell(itp[1]) : "";
    const label = itp && itp[2] ? cell(itp[2]).replace(/^-\s*/, "") : "";
    all.push({
      position: pos ? pos[1] : null,
      badge,
      row: {
        rowId: tit ? tit[1] : null,
        credit: artist,
        title,
        format: "single",
        formatRaw: `chart ${chart}`,
        tierRaw: badge,
        reading: badge ? parseBadge(badge) : null,
        dateRaw: week,
        url: tit ? `https://ifpicr.cz${tit[1]}` : `${BASE}${chart}`,
        raw: cap(`${week} · #${pos ? pos[1] : "?"} · ${artist} - ${label} | ${title} | ${badge ?? "(no badge)"}`),
        extra: { week, position: pos ? pos[1] : null, label },
      },
    });
  }
  return { count: all.length, rows: all.filter((r) => r.badge).map((r) => r.row) };
}

/** "38. týden 2026" → "week 38/2026"; any other label verbatim. */
export const weekLabel = (label) => {
  const m = String(label ?? "").match(/^(\d+)\. týden (\d{4})$/);
  return m ? `week ${m[1]}/${m[2]}` : String(label ?? "");
};

async function readWeek(ctx, chart, weekId) {
  const url = weekId ? `${BASE}${chart}?weekId=${weekId}` : `${BASE}${chart}`;
  const res = expectOk(await ctx.request({ url, success: SUCCESS }), `ČNS IFPI chart ${chart}${weekId ? ` week ${weekId}` : ""}`);
  const cls = classifyPage(res, { identity: /name="weekId"/, success: SUCCESS });
  if (cls.kind !== "ok") throw new AdapterError(cls.kind, `ČNS IFPI: ${cls.detail} (${url})`);
  const sel = parseSelectors(res.body);
  if (sel.chart.selected?.id !== String(chart)) throw new AdapterError("mismatch", `ČNS IFPI served chart ${sel.chart.selected?.id} for ${chart}`);
  if (weekId && sel.week.selected?.id !== String(weekId)) throw new AdapterError("mismatch", `ČNS IFPI served week ${sel.week.selected?.id} for ${weekId}`);
  if (!sel.week.selected) throw new AdapterError("format", "ČNS IFPI: no selected week");
  const got = parseChart(res.body, { chart, week: sel.week.selected.label });
  if (got.count < 50) throw new AdapterError("format", `ČNS IFPI chart ${chart}: ${got.count} chart rows (a Top 100)`);
  const i = sel.week.options.findIndex((o) => o.selected);
  return { ...got, week: sel.week.selected, previous: sel.week.options[i + 1] ?? null };
}

function make(id, country, chart) {
  return {
    id,
    country,
    body: `ČNS IFPI (chart ${chart})`,
    programme: null,
    class: "WITH-CARE",
    step: 2,
    hosts: ["ifpicr.cz"],
    registerUrl: `${BASE}${chart}`,
    ladder: "standard",
    dateKind: "chart week",
    humanCheck: `Open ${BASE}${chart} and read the badge on each charting row by the 16 names.`,
    // A week can print no badge at all; the format check is the chart itself.
    minRows: 0,
    // Dai Dai, week 38/2026: "Zlatý singl" at 15 on chart 30, "Platinový
    // singl" at 5 on chart 43. Checked in the tests only — a badge leaves the
    // page when the title stops charting.
    // Rows on the chart page itself (100).
    total: "page",
    control: {
      when: "tests",
      rowId: `/hitparada/${chart}/shakira-burna-boy/dai-dai/180018`,
      find: (r) => r.rowId === `/hitparada/${chart}/shakira-burna-boy/dai-dai/180018` && r.tierRaw === (chart === 30 ? "Zlatý singl" : "Platinový singl"),
    },
    parse: { chart: parseChart, selectors: parseSelectors, badge: parseBadge },
    async read(ctx) {
      const now = await readWeek(ctx, chart, null);
      const rows = [...now.rows];
      const notes = [`${now.rows.length} badge(s) on ${now.count} chart rows · badges show only while a title charts`];
      if (ctx.deep && now.previous) {
        const prev = await readWeek(ctx, chart, now.previous.id);
        rows.push(...prev.rows);
        notes.push(`previous week (${weekLabel(prev.week.label)}): ${prev.rows.length} badge(s)`);
      }
      const wk = String(now.week.label ?? "").match(/^(\d+)\. týden (\d{4})$/);
      return {
        rows,
        total: now.count,
        // A chart week's Monday: the page's own week label, read as an ISO week.
        newestDate: wk ? isoWeekMonday(Number(wk[2]), Number(wk[1])) : null,
        newest: `${weekLabel(now.week.label)} (week id ${now.week.id})`,
        notes,
        cursor: { weekId: now.week.id },
      };
    },
  };
}

export const cnsIfpiCz = make("cns-ifpi-cz", "CZ", 30);
export const cnsIfpiSk = make("cns-ifpi-sk", "SK", 43);
