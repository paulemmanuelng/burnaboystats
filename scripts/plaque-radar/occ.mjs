// This week's Official Charts Company charts — current UK momentum only.
// Read through net.mjs, so robots.txt decides whether they are read at all.

import { decodeEntities } from "./buzzjack.mjs";

export const OCC_CHARTS = [
  { id: "singles", name: "Official Singles Chart", format: "single", url: "https://www.officialcharts.com/charts/singles-chart/" },
  { id: "albums", name: "Official Albums Chart", format: "album", url: "https://www.officialcharts.com/charts/albums-chart/" },
  { id: "afrobeats", name: "Official Afrobeats Chart", format: "single", url: "https://www.officialcharts.com/charts/afrobeats-chart/" },
];

const text = (s) => decodeEntities(String(s ?? "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

/** Rows of one chart page: { pos, title, artist, lastWeek, peak, weeks }, plus the chart week. */
export function parseOccChart(html) {
  html = String(html);
  const rows = [];
  for (const item of html.split('data-item="item-').slice(1)) {
    const pos = Number(item.match(/chart-key[^>]*>[\s\S]*?<strong>(\d+)<\/strong>/)?.[1]);
    const nameHtml = item.match(/class="chart-name[^"]*"[^>]*>([\s\S]*?)<\/a>/)?.[1] ?? "";
    const spans = [...nameHtml.matchAll(/<span>([^<]*)<\/span>/g)].map((m) => m[1]);
    const title = text(spans.length ? spans[spans.length - 1] : nameHtml);
    const artist = [...item.matchAll(/class="chart-artist[^"]*"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => text(m[1])).join(" ");
    const num = (label) => {
      const v = item.match(new RegExp(`${label}:\\s*<span[^>]*>([^<]*)<`))?.[1]?.trim();
      return v && /^\d+$/.test(v) ? Number(v) : v ?? null;
    };
    if (!pos || !title) continue;
    rows.push({ pos, title, artist, lastWeek: num("LW"), peak: num("Peak"), weeks: num("Weeks") });
  }
  const flat = text(html);
  const week = flat.match(/(\d{1,2} [A-Z][a-z]+ \d{4}\s*-\s*\d{1,2} [A-Z][a-z]+ \d{4})/)?.[1] ?? null;
  return { week, rows };
}

const rowsOf = (c, html) => {
  const { week, rows } = parseOccChart(html);
  return { week, rows: rows.map((r) => ({ ...r, chart: c.id, chartName: c.name, format: c.format, week })) };
};

/** Fetch every chart; a chart that cannot be read is logged and skipped.
 *  `save(id, html)` keeps a copy, so an --offline re-run the same day can
 *  reuse this week's charts without asking the site again. */
export async function fetchOcc(get, log = () => {}, save = () => {}) {
  const out = [];
  for (const c of OCC_CHARTS) {
    const res = await get(c.url);
    if (!res.ok) {
      log(`${c.name}: ${res.error ?? `HTTP ${res.status}`} — skipped`);
      continue;
    }
    const { week, rows } = rowsOf(c, res.body);
    if (!rows.length) {
      log(`${c.name}: page read but no chart rows found — skipped`);
      continue;
    }
    save(c.id, res.body);
    log(`${c.name}: ${rows.length} rows${week ? `, week ${week}` : ""}`);
    out.push(...rows);
  }
  return out;
}

/** The charts an earlier online run saved, via `read(id)` (null if none). */
export function occFromSaved(read) {
  const out = [];
  for (const c of OCC_CHARTS) {
    const html = read(c.id);
    if (html) out.push(...rowsOf(c, html).rows);
  }
  return out;
}
