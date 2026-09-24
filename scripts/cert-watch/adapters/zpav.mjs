// ZPAV (Poland) — the award register behind olis.pl's "Oficjalna lista
// wyróżnień". Spec: docs/cert-watcher/SPEC.md §3 row 6, §3.2.
//
//   POST https://www.olis.pl/api/search   (the page's own XHR)
//   {"category_id":3,"subcategory_id":6|7|8,"limit":100}
//     6 = złote płyty (Gold), 7 = platynowe (Platinum), 8 = diamentowe (Diamond)
//
// Daily: the newest 100 of each subcategory (3 requests; newest first).
// Deep (Mondays): the same with `search_in: "contractor"` and a keyword per
// artist name — the register's artist search (≤ 48 requests).
//
// ONE ROW CAN BE A MULTIPLE. Each row carries date_1 … date_7 and the FILLED
// one is the step: One Dance is a single Platinum row with date_3, which is
// 3× Platinum, not 1×. Never count rows to get a multiple.
//
// Without the XHR headers (X-Requested-With, Referer) Cloudflare answers a
// 302 to the chart page; the real 143-byte response is a fixture.

import { AdapterError, expectOk, collapse, cap } from "./base.mjs";

export const API = "https://www.olis.pl/api/search";
const REFERER = "https://www.olis.pl/charts/oficjalna-lista-wyroznien/zlote-plyty";
const HEADERS = { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", Referer: REFERER };
export const SUBCATEGORIES = { 6: { tier: "Gold", name: "złote płyty" }, 7: { tier: "Platinum", name: "platynowe płyty" }, 8: { tier: "Diamond", name: "diamentowe płyty" } };
const FORMAT = { singiel: "single", album: "album" };

/** The filled date_N of a row → { step, date }, or null when none (or more
 *  than one) is filled — an unseen shape, never guessed. */
export function stepOf(row) {
  const filled = [1, 2, 3, 4, 5, 6, 7].filter((n) => row?.[`date_${n}`]);
  if (filled.length !== 1) return null;
  return { step: filled[0], date: row[`date_${filled[0]}`] };
}

export const bodyFor = (sub, keyword = null) =>
  JSON.stringify(keyword ? { category_id: 3, subcategory_id: sub, search_in: "contractor", keyword, limit: 100 } : { category_id: 3, subcategory_id: sub, limit: 100 });

/** One API response → rows. `sub` is the subcategory REQUESTED; each row's
 *  own subcategory must agree (served-is-requested). */
export function parseSearch(text, sub) {
  let d;
  try {
    d = JSON.parse(text);
  } catch {
    throw new AdapterError("format", "ZPAV: response is not JSON");
  }
  if (d?.success !== true || !Array.isArray(d.tracks)) throw new AdapterError("format", "ZPAV: no success/tracks in the response");
  const meta = SUBCATEGORIES[sub];
  return d.tracks.map((t) => {
    const m = t?.music ?? {};
    const served = m?.subcategory?.id;
    if (served != null && Number(served) !== Number(sub)) {
      throw new AdapterError("mismatch", `ZPAV served subcategory ${served} for ${sub}`);
    }
    const credit = collapse(m?.artist?.title ?? "");
    const title = collapse(m?.title ?? "");
    const st = stepOf(t);
    const fmt = String(m?.format ?? "");
    const dates = [1, 2, 3, 4, 5, 6, 7].filter((n) => t?.[`date_${n}`]).map((n) => `date_${n}: ${t[`date_${n}`]}`).join(", ");
    return {
      rowId: `${sub}:${m?.id}`,
      credit,
      title,
      format: FORMAT[fmt] ?? "unknown",
      formatRaw: fmt,
      tierRaw: `${meta.name} · ${dates || "no date_N"}`,
      reading: st && meta ? { tier: meta.tier, x: st.step } : null,
      dateRaw: st?.date ?? null,
      url: `https://www.olis.pl/charts/oficjalna-lista-wyroznien/${meta.name.startsWith("zł") ? "zlote" : meta.name.startsWith("pl") ? "platynowe" : "diamentowe"}-plyty`,
      raw: cap(`${meta.name} | ${m?.artist?.title ?? ""} | ${m?.title ?? ""} | ${fmt} | ${m?.contractor ?? ""} | ${dates} | month ${t?.month ?? ""}`),
      extra: { subcategory: sub, musicId: m?.id ?? null, contractor: m?.contractor ?? null, month: t?.month ?? null },
    };
  });
}

async function search(ctx, sub, keyword) {
  const body = bodyFor(sub, keyword);
  const res = expectOk(await ctx.request({ method: "POST", url: API, headers: HEADERS, body, success: /"success"\s*:\s*true/ }), `ZPAV ${SUBCATEGORIES[sub].name}${keyword ? ` "${keyword}"` : ""}`);
  return parseSearch(res.body, sub);
}

export const zpav = {
  id: "zpav",
  country: "PL",
  body: "ZPAV",
  programme: null,
  class: "AUTOMATE",
  step: 2,
  hosts: ["www.olis.pl"],
  registerUrl: "https://www.olis.pl/charts/oficjalna-lista-wyroznien",
  ladder: "standard",
  dateKind: "award date (the filled date_N)",
  humanCheck: "Open https://www.olis.pl/charts/oficjalna-lista-wyroznien, filter by performer, and read the award, its step number and its date.",
  minRows: 1,
  // Shakira, Burna Boy | Dai Dai | złote płyty | date_1 2026-08-26 — on the
  // "Burna Boy" Gold search, read on deep runs; and on every run whose newest
  // 100 Gold awards (date-descending) still reach back past 2026-08-26 — they
  // went back to 2026-05-13 on 24 Sep 2026, with Dai Dai 26th.
  control: {
    when: "deep",
    window: (got) => (got.window?.oldest?.[6] ?? "9999") < "2026-08-26",
    rowId: "6:31629",
    find: (r) => r.rowId === "6:31629" && r.dateRaw === "2026-08-26",
  },
  // The deep read (artist searches / the whole register or year) keeps its
  // rows naming the sixteen from week to week; the daily newest-first window
  // does not, so only deep reads are judged (health.mjs matchedVerdict).
  matchedFloor: { deep: true },

  // Rows served by the three newest reads (limit 100 each).
  total: "page",
  parse: { search: parseSearch, step: stepOf },
  async read(ctx) {
    const notes = [];
    const rows = [];
    const newest = {};
    const oldest = {};
    let served = 0;
    for (const sub of [6, 7, 8]) {
      const got = await search(ctx, sub, null);
      rows.push(...got);
      served += got.length;
      const dates = got.map((r) => r.dateRaw).filter(Boolean).sort();
      newest[sub] = dates.at(-1) ?? null;
      oldest[sub] = dates[0] ?? null;
    }
    if (ctx.deep) {
      for (const name of ctx.artistNames) for (const sub of [6, 7, 8]) rows.push(...(await search(ctx, sub, name)));
      notes.push(`${ctx.artistNames.length * 3} artist searches`);
    }
    const top = Object.values(newest).filter(Boolean).sort().at(-1) ?? null;
    return {
      total: served,
      // How far back each newest-first list reaches (the control's window).
      window: { oldest },
      newestDate: top,
      rows: [...new Map(rows.map((r) => [`${r.rowId}|${r.tierRaw}`, r])).values()],
      newest: top ? `newest award ${top}` : null,
      notes,
      cursor: { lastDate: top ?? ctx.cursor?.lastDate ?? null },
    };
  },
};
