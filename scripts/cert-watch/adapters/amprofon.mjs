// AMPROFON (MX) — certificaciones.php, one table of every certification.
// Spec: docs/cert-watcher/SPEC.md §3 row 20, §3.3.
//
// Daily: GET the page with Accept-Language: es-MX (1 request; 4.56 MB raw,
// 265 KB gzipped; no ETag or Last-Modified, so a full read every day). The
// host is Hostinger's CDN (`server: hcdn`): its "Checking your browser" page
// is a challenge, and the adapter stops — it never retries or works round it.
//
// One table, #filtertable; each row is keyed by `idenCertificacion`. The
// CERTIFICACIÓN column can hold several tiers ("PLATINO & ORO") and NIVEL the
// matching counts ("3 & 1"): the FIRST number goes with the FIRST tier, and
// the first tier is the highest, so "PLATINO & ORO" / "3 & 1" reads Platinum
// ×3 (the Oro half-step is kept verbatim). A count list that does not pair
// with the tier list is unparsed. Names are HTML entities (JULI&Oacute;N),
// decoded; the row count is the floor.

import { AdapterError, expectOk, decodeEntities, stripTags, collapse, cap } from "./base.mjs";
import { classifyPage } from "../http.mjs";

export const PAGE = "https://amprofon.com.mx/es/pages/certificaciones.php";
const IDENTITY = /<title>AMPROFON<\/title>/;
const SUCCESS = /<table id="filtertable"/;
const TIERS = { ORO: "Gold", PLATINO: "Platinum", DIAMANTE: "Diamond" };
const RANK = { Gold: 1, Platinum: 2, Diamond: 3 };
const FORMAT = { "SINGLE TRACK": "single", ALBUM: "album" };

const cell = (s) => collapse(decodeEntities(stripTags(s)));

/** CERTIFICACIÓN + NIVEL → {tier, x} of the first (highest) tier, or null. */
export function parseCert(cert, nivel) {
  const tiers = collapse(cert).split(/\s*&\s*/).map((t) => TIERS[t]);
  const counts = collapse(nivel).split(/\s*&\s*/).map((n) => (/^\d+$/.test(n) ? Number(n) : NaN));
  if (!tiers.length || tiers.some((t) => !t)) return null;
  if (counts.length !== tiers.length || counts.some((n) => !(n >= 1))) return null;
  // The register lists the highest tier first; anything else is not guessed.
  for (let i = 1; i < tiers.length; i++) if (RANK[tiers[i]] >= RANK[tiers[i - 1]]) return null;
  return { tier: tiers[0], x: counts[0] };
}

/** Every row of #filtertable, verbatim. */
export function parseTable(html) {
  const s = String(html ?? "");
  const start = s.indexOf('<table id="filtertable"');
  const end = s.indexOf("</table>", start);
  if (start < 0 || end < 0) throw new AdapterError("format", "AMPROFON: no #filtertable");
  const body = s.slice(start, end);
  const rows = [];
  const re = /<input type="hidden" name="idenCertificacion" value="(\d+)"\s*>([\s\S]*?)<\/form><\/tr>/g;
  for (const m of body.matchAll(re)) {
    const tds = [...m[2].matchAll(/<td>([\s\S]*?)<\/td>/g)].map((c) => cell(c[1]));
    if (tds.length !== 7) throw new AdapterError("format", `AMPROFON: row ${m[1]} has ${tds.length} cells`);
    const [artista, titulo, disquera, formato, certificacion, nivel, ultima] = tds;
    rows.push({
      rowId: m[1],
      credit: artista,
      title: titulo,
      format: FORMAT[formato] ?? "unknown",
      formatRaw: formato,
      tierRaw: `${certificacion} / ${nivel}`,
      reading: parseCert(certificacion, nivel),
      dateRaw: ultima,
      url: PAGE,
      raw: cap(`idenCertificacion ${m[1]} · ${artista} | ${titulo} | ${disquera} | ${formato} | ${certificacion} | ${nivel} | ${ultima}`),
      extra: { disquera },
    });
  }
  const count = (body.match(/name="idenCertificacion"/g) ?? []).length;
  if (rows.length !== count) throw new AdapterError("format", `AMPROFON: ${rows.length} of ${count} rows parsed`);
  return rows;
}

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

export const amprofon = {
  id: "amprofon",
  country: "MX",
  body: "AMPROFON",
  programme: null,
  class: "WITH-CARE",
  step: "3c",
  hosts: ["amprofon.com.mx"],
  registerUrl: PAGE,
  ladder: "standard",
  dateKind: "última certificación",
  humanCheck: "Open https://amprofon.com.mx/es/pages/certificaciones.php in a browser and filter ARTISTA by each name.",
  minRows: 1,
  // idenCertificacion 5987 · TYLA | WATER | ORO | 1 — the read is the whole
  // table, so it is checked every day.
  control: { when: "daily", rowId: "5987", find: (r) => r.rowId === "5987" && r.credit === "TYLA" && r.title === "WATER" && r.tierRaw === "ORO / 1" },
  // The table's row count (8,685 on 24 Sep 2026).
  // The daily read is the whole register (or year, or the fixed name
  // searches), so its rows naming the sixteen persist between runs: a read
  // naming under half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  total: "register",
  parse: { table: parseTable, cert: parseCert },
  async read(ctx) {
    const res = expectOk(await ctx.request({ url: PAGE, headers: { "Accept-Language": "es-MX" }, success: SUCCESS, timeoutMs: 90000 }), "AMPROFON");
    const cls = classifyPage(res, { identity: IDENTITY, success: SUCCESS });
    if (cls.kind !== "ok") throw new AdapterError(cls.kind, `AMPROFON: ${cls.detail}`);
    const rows = parseTable(res.body);
    const dates = rows.map((r) => r.dateRaw).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
    const top = dates.at(-1) ?? null;
    const topId = Math.max(0, ...rows.map((r) => Number(r.rowId)).filter(Number.isFinite));
    return {
      rows,
      total: rows.length,
      newestDate: top,
      newest: `${fmt(rows.length)} rows; newest ${top ?? "?"} (id ${topId})`,
      notes: [],
      cursor: { lastId: topId, lastDate: top },
    };
  },
};
