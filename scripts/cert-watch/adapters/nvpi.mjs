// NVPI (Netherlands) — the JSON API behind goudplatina.nl/database.
// Spec: docs/cert-watcher/SPEC.md §3 row 9, §3.2.
//
//   GET https://www.goudplatina.nl/api/filter?skip=0&take=500
//   → { count, total, items[] }, newest first.
//
// `status` is Goud / Platina / Diamant / Zilver in any case ("goud",
// "PLatina" are in the register), `amount` the multiple ("" = one). Each STEP
// is its own uid, so the highest reading for a record is its current tier.
// `metadata.artists[]` lists featured credits the headline `artist` omits
// ("DAVE | Location" → Dave, Burna Boy), so the credit field reads both.
// NVPI publishes about two months late: the newest award on 24 Sep 2026 was
// dated 16-7-2026.

import { AdapterError, expectOk, collapse, cap } from "./base.mjs";

export const API = "https://www.goudplatina.nl/api/filter";
export const URL_ = `${API}?skip=0&take=500`;
const TIERS = { zilver: "Silver", goud: "Gold", platina: "Platinum", diamant: "Diamond" };
const FORMAT = { single: "single", album: "album" };

/** status + amount → reading. Unseen statuses or a non-numeric amount → null. */
export function parseStatus(status, amount) {
  const tier = TIERS[collapse(status).toLowerCase()];
  if (!tier) return null;
  const a = collapse(amount);
  if (a === "") return { tier, x: 1 };
  if (!/^\d+$/.test(a) || Number(a) < 1) return null;
  return { tier, x: Number(a) };
}

/** "16-7-2026" → "2026-07-16". */
export const isoOf = (dmy) => {
  const m = String(dmy ?? "").match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  return m ? `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}` : null;
};

export function parseFilter(text) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "NVPI: response is not JSON");
  }
  if (!d || !Array.isArray(d.items) || typeof d.count !== "number") throw new AdapterError("format", "NVPI: no items/count");
  const rows = d.items.map((it) => {
    const featured = (it?.metadata?.artists ?? []).map((a) => a?.name).filter(Boolean);
    const artist = collapse(it?.artist ?? "");
    const type = collapse(it?.type ?? "");
    const amount = String(it?.amount ?? "");
    return {
      rowId: it?.uid ?? it?.id ?? null,
      credit: artist,
      // Printed by the register in metadata.artists; the matcher reads them
      // as part of the credit field (match.mjs identifyRow).
      featured,
      title: collapse(it?.title ?? ""),
      format: FORMAT[type.toLowerCase()] ?? "unknown",
      formatRaw: type,
      tierRaw: `${it?.status ?? ""}${amount ? ` ${amount}` : ""}`,
      reading: parseStatus(it?.status ?? "", amount),
      dateRaw: it?.date ?? null,
      url: "https://www.goudplatina.nl/database",
      raw: cap(`${it?.date ?? ""} | ${it?.artist ?? ""} | ${it?.title ?? ""} | ${it?.type ?? ""} | ${it?.status ?? ""}${amount ? ` ${amount}` : ""} | ${it?.company ?? ""} | metadata.artists: ${featured.join(", ") || "none"} | uid ${it?.uid ?? ""}`),
      extra: { company: it?.company ?? null, metadataArtists: featured },
    };
  });
  return { count: d.count, rows };
}

export const nvpi = {
  id: "nvpi",
  country: "NL",
  body: "NVPI",
  programme: null,
  class: "AUTOMATE",
  step: 2,
  hosts: ["www.goudplatina.nl"],
  registerUrl: "https://www.goudplatina.nl/database",
  ladder: "standard",
  dateKind: "award date (NVPI publishes about two months late)",
  humanCheck: "Search https://www.goudplatina.nl/database for each name.",
  minRows: 1,
  // DAVE | Location | Single | Platina | 21-5-2026, metadata artists Dave,
  // Burna Boy: checked in the tests; it falls out of the newest 500 in time.
  total: "register",
  control: { when: "tests", rowId: "2026_dave_location_single_platina", find: (r) => r.rowId === "2026_dave_location_single_platina" },
  // The newest 500 of 6,493 move slowly (NVPI adds a few hundred a year), so
  // the rows naming the sixteen stay from run to run: a read naming under
  // half as many is `unmatched` (health.mjs matchedVerdict).
  matchedFloor: { daily: true, deep: true },
  parse: { filter: parseFilter, status: parseStatus },
  async read(ctx) {
    const res = expectOk(await ctx.request({ url: URL_, success: /"items"/ }), "NVPI filter");
    const { count, rows } = parseFilter(res.body);
    const isos = rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort();
    const top = isos.at(-1) ?? null;
    const topRow = rows.find((r) => isoOf(r.dateRaw) === top);
    return {
      rows,
      total: count,
      newestDate: top,
      newest: `${String(count).replace(/\B(?=(\d{3})+$)/g, ",")} awards in the register; newest ${topRow?.dateRaw ?? "?"} (NVPI publishes late)`,
      notes: [`${rows.length} newest read, back to ${rows.length ? rows.map((r) => isoOf(r.dateRaw)).filter(Boolean).sort()[0] : "?"}`],
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
