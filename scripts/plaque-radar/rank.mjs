// Build the candidates and rank them. Pure: site data, BuzzJack entries and
// chart rows in; ranked lists out. tests/plaqueRadar.test.ts runs it on
// fixtures.
//
// HOW A UK TITLE IS JUDGED
//   1. Its dated steps: every BuzzJack weekly-list row for it, plus any dated
//      UK row in the board's sweep documents, collapsed to a staircase.
//   2. If a step is ABOVE the tier the site carries, the list has already
//      printed the plaque: that is a "listed" candidate, the strongest kind.
//   3. Otherwise the last two steps give a weekly rate, the rate is carried
//      forward from the last step, and the day the next tier's units would be
//      reached is estimated — stretched by the slowdown these same titles have
//      shown between their past steps (historicalPace), because streams fade.
//   4. The BPI certifies on its own every Friday, and BuzzJack transcribes the
//      full list most weeks. So if the estimated crossing is several COMPLETE
//      weekly lists ago and none of them printed it, the straight line was too
//      generous — the title slowed — and it drops out of the main list. The
//      titles kept are those whose crossing falls in the weeks the lists have
//      not covered yet (or will in the next month).

import { titleKey, looseTitleKey, creditHas, creditHasArtist, namesInCredit, artistsInCredit, artistAliases } from "./normalize.mjs";
import { unitsOf, tierLabel, nextTier, maxTier, staircase, project, against, weeksBetween } from "./units.mjs";
import { fridayOnOrBefore } from "./lists.mjs";

/** A week whose transcription has at least this many rows is the FULL list;
 *  below it, it is the handful the BRITs account posted. */
export const COMPLETE_LIST_ROWS = 40;
/** Complete lists that can pass without printing a projected crossing before
 *  the projection is dropped from the main list as too generous. */
export const UNSEEN_LIMIT = 2;
/** How far ahead a crossing may be and still make the list ("due soon"). */
export const SOON_DAYS = 28;
/** Momentum (see occScore / liveScore) a rate-less title needs to be listed:
 *  roughly a place on this week's Afrobeats chart, or a few platform charts. */
export const MOMENTUM_FLOOR = 0.25;

const PLATFORM_WEIGHT = { Spotify: 1, "Apple Music": 0.8, YouTube: 0.6, Deezer: 0.3, Shazam: 0.3, iTunes: 0.2, "Spotify Albums": 1 };
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const fmtDate = (iso) => {
  const [y, m, d] = String(iso).split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};
export const fmtUnits = (n) => {
  const a = Math.abs(n);
  const s = a >= 1e6 ? `${(a / 1e6).toFixed(a >= 1e7 ? 1 : 2)}M` : a >= 1e3 ? `${Math.round(a / 1e3)}k` : String(Math.round(a));
  return n < 0 ? `-${s}` : s;
};
const addDays = (iso, days) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + Math.round(days));
  return d.toISOString().slice(0, 10);
};

// ── Matching ────────────────────────────────────────────────────────────────

/** Names a release can be matched through besides its own artist: the
 *  release's credit and any names in its title's parentheses. */
function anchorsFor(release) {
  const paren = (String(release.title).match(/\(([^)]*)\)/g) ?? []).join(" & ");
  return [...namesInCredit(release.credit), ...namesInCredit(paren)];
}

/** A credit + title row belongs to this release: same format, same title,
 *  AND the credit names the release's artist — or, for an exact title only,
 *  one of its anchors. (The loose title drops "(Remix)", and Burna Boy's
 *  "Tshwala Bam (Remix)" must not collect the original's plaques through
 *  TitoM & Yuppe's names.) `aliases` is artistAliases(site.artists). */
export function rowMatchesRelease(release, row, aliases) {
  if (row.format && release.format !== row.format) return false;
  const exact = titleKey(release.title) === titleKey(row.title);
  if (!exact && looseTitleKey(release.title) !== looseTitleKey(row.title)) return false;
  const credit = row.credit ?? row.artist ?? "";
  if (creditHasArtist(credit, release.slug, aliases)) return true;
  return exact && anchorsFor(release).some((n) => creditHas(credit, n));
}

/**
 * Group the site's releases into records — one per real-world recording —
 * and hang every BuzzJack row, chart row and sweep row on its record.
 * Releases merge when they share a title AND either name each other in their
 * credits or match the same list row ("Bandana" is Asake's and Fireboy DML's);
 * Tems's "Higher" and Burna Boy's "Higher" share a title and nothing else, and
 * stay apart.
 */
export function buildRecords(site, entries) {
  const rel = site.releases;
  const parent = rel.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a !== b) parent[b] = a;
  };
  const byKey = new Map();
  rel.forEach((r, i) => {
    const k = `${r.format}|${looseTitleKey(r.title)}`;
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(i);
  });
  const aliases = artistAliases(site.artists);
  const names = (slug) => aliases[slug]?.names ?? [];
  for (const idx of byKey.values()) {
    for (let a = 0; a < idx.length; a++)
      for (let b = a + 1; b < idx.length; b++) {
        const A = rel[idx[a]];
        const B = rel[idx[b]];
        const linked =
          A.slug === B.slug ||
          anchorsFor(A).some((n) => names(B.slug).some((m) => creditHas(n, m))) ||
          anchorsFor(B).some((n) => names(A.slug).some((m) => creditHas(n, m)));
        if (linked) union(idx[a], idx[b]);
      }
  }
  const ours = entries.filter((e) => artistsInCredit(e.credit, aliases).length);
  const hits = ours.map((e) => rel.map((r, i) => (rowMatchesRelease(r, e, aliases) ? i : -1)).filter((i) => i >= 0));
  for (const h of hits) for (let k = 1; k < h.length; k++) union(h[0], h[k]);

  const records = new Map();
  rel.forEach((r, i) => {
    const root = find(i);
    if (!records.has(root)) records.set(root, { id: `r${root}`, format: r.format, title: r.title, releases: [], entries: [], charts: [], live: [], sweep: [], slugs: new Set() });
    const rec = records.get(root);
    rec.releases.push(r);
    rec.slugs.add(r.slug);
  });
  const recOf = (i) => records.get(find(i));

  // List rows that match no release: plaques the site does not hold at all.
  const orphans = new Map();
  ours.forEach((e, k) => {
    if (hits[k].length) {
      recOf(hits[k][0]).entries.push(e);
      return;
    }
    const slugs = artistsInCredit(e.credit, aliases);
    const key = `${e.format}|${looseTitleKey(e.title)}|${slugs.sort().join(",")}`;
    if (!orphans.has(key)) orphans.set(key, { id: `o${orphans.size}`, format: e.format, title: e.title, releases: [], entries: [], charts: [], live: [], sweep: [], slugs: new Set(slugs), orphan: true });
    orphans.get(key).entries.push(e);
  });

  const all = [...records.values(), ...orphans.values()];
  // Index every record by artist, format and both title keys, so the chart,
  // live and sweep rows attach without a scan per row.
  const index = new Map();
  const indexRec = (rec) => {
    const titles = rec.releases.length ? rec.releases.map((r) => r.title) : [rec.title];
    for (const slug of rec.slugs)
      for (const t of titles)
        for (const k of [`t|${titleKey(t)}`, `l|${looseTitleKey(t)}`]) {
          const key = `${slug}|${rec.format}|${k}`;
          if (!index.has(key)) index.set(key, rec);
        }
  };
  all.forEach(indexRec);
  const lookup = (row) =>
    index.get(`${row.slug}|${row.format}|t|${titleKey(row.title)}`) ?? index.get(`${row.slug}|${row.format}|l|${looseTitleKey(row.title)}`);
  const attach = (row, field) => {
    const rec = lookup(row);
    if (rec) rec[field].push(row);
    return Boolean(rec);
  };
  const loose = new Map();
  const attachOrKeep = (row, field) => {
    if (attach(row, field)) return;
    const key = `${row.slug}|${row.format}|${looseTitleKey(row.title)}`;
    if (!loose.has(key)) {
      const rec = { id: `c${loose.size}`, format: row.format, title: row.title, releases: [], entries: [], charts: [], live: [], sweep: [], slugs: new Set([row.slug]), chartOnly: true };
      loose.set(key, rec);
      indexRec(rec);
    }
    loose.get(key)[field].push(row);
  };
  for (const c of site.charts) attachOrKeep(c, "charts");
  for (const l of site.live) attachOrKeep(l, "live");
  for (const s of site.sweepRows ?? []) {
    // A sweep row names a single; albums in the sweeps are titled like albums.
    const asSingle = { ...s, format: "single" };
    if (!attach(asSingle, "sweep")) attach({ ...s, format: "album" }, "sweep");
  }
  return [...all, ...loose.values()];
}

// ── Helpers on a record ─────────────────────────────────────────────────────

const artistNames = (rec, site) => {
  const nameOf = Object.fromEntries(site.artists.map((a) => [a.slug, a.name]));
  return [...rec.slugs].map((s) => nameOf[s] ?? s).join(" / ");
};

export function siteTier(rec, market, ladder) {
  let best = null;
  for (const r of rec.releases) for (const c of r.certs) if (c.c === market) best = maxTier(ladder, best, { level: c.level, x: c.x ?? 1 });
  return best;
}

/** Live platform charts today in one country, weighted and summed (0 … ~3). */
function liveScore(rows) {
  let s = 0;
  for (const r of rows) s += (PLATFORM_WEIGHT[r.platform] ?? 0.2) * Math.max(0, 1 - (r.position - 1) / 200);
  return s;
}
const liveLine = (rows, market) =>
  rows
    .slice()
    .sort((a, b) => (PLATFORM_WEIGHT[b.platform] ?? 0) - (PLATFORM_WEIGHT[a.platform] ?? 0) || a.position - b.position)
    .slice(0, 3)
    .map((r) => `${r.platform} ${market} #${r.position}`)
    .join(", ");

/** Peak strength of an official chart run (0 … 0.7). */
function peakScore(entry) {
  if (!entry) return 0;
  const p = entry.peak;
  const base = p <= 10 ? 0.5 : p <= 20 ? 0.4 : p <= 40 ? 0.3 : p <= 75 ? 0.15 : 0.05;
  return base + (entry.weeks ? Math.min(entry.weeks / 30, 1) * 0.2 : 0);
}
const bestEntry = (rec, market) =>
  rec.charts
    .flatMap((c) => c.entries.filter((e) => e.c === market))
    .sort((a, b) => a.peak - b.peak || (b.weeks ?? 0) - (a.weeks ?? 0))[0] ?? null;

function occFor(rec, occ, aliases) {
  if (!occ?.length) return [];
  const titles = rec.releases.length ? rec.releases.map((r) => r.title) : [rec.title];
  return occ.filter(
    (o) =>
      o.format === rec.format &&
      titles.some((t) => titleKey(t) === titleKey(o.title) || looseTitleKey(t) === looseTitleKey(o.title)) &&
      ([...rec.slugs].some((s) => creditHasArtist(o.artist, s, aliases)) || rec.releases.some((r) => anchorsFor(r).some((n) => creditHas(o.artist, n)))),
  );
}
function occScore(rows) {
  let s = 0;
  for (const o of rows) {
    if (o.chart === "afrobeats") s += 0.4 * Math.max(0, 1 - (o.pos - 1) / 20);
    else s += 0.6 * Math.max(0, 1 - (o.pos - 1) / 100);
    if (typeof o.weeks === "number") s += Math.min(o.weeks / 20, 1) * 0.15;
  }
  return s;
}
const occLine = (rows) => rows.map((o) => `${o.chartName.replace("Official ", "")} #${o.pos}${typeof o.weeks === "number" ? ` (${o.weeks} wks)` : ""}`).join(", ");

/** What to type. The BPI's search matches titles; a title of three characters
 *  or fewer ("Ye", "23") drowns in other records, so the artist goes in instead. */
export function searchTerm(title, artist) {
  const t = String(title).replace(/\s*[([](?:feat|ft|with)\.?[^)\]]*[)\]]/gi, "").replace(/\s*\((?:[^)]*&[^)]*)\)\s*$/, "").trim();
  const letters = t.replace(/[^A-Za-z0-9]/g, "");
  if (letters.length <= 3) return { type: artist, then: `then find "${t}" in the results` };
  return { type: t, then: artist ? `then look for the ${artist} row` : "" };
}

const REGISTER = {
  UK: "BPI certified-awards search (bpi.co.uk/page/certified-awards)",
  ZA: "RiSA certification search",
  AU: "ARIA accreditation lists (find in the PDF)",
  PT: "Audiogest monthly award cards / TOP PDF (find in the file)",
};

// ── The UK ──────────────────────────────────────────────────────────────────

/** Rows per Friday in the transcriptions, and which Fridays carry the full list. */
export function coverage(entries) {
  const byWeek = new Map();
  for (const e of entries) byWeek.set(e.date, (byWeek.get(e.date) ?? 0) + 1);
  const weeks = [...byWeek.keys()].filter((d) => d >= "2022-01-01").sort();
  const complete = weeks.filter((d) => byWeek.get(d) >= COMPLETE_LIST_ROWS);
  return { byWeek, first: weeks[0] ?? null, last: weeks[weeks.length - 1] ?? null, lastComplete: complete[complete.length - 1] ?? null, complete: new Set(complete), partial: weeks.filter((d) => byWeek.get(d) < COMPLETE_LIST_ROWS) };
}

/**
 * Full weekly lists that could have printed a plaque whose units were reached
 * on `crossing`, up to `asOf`. A Friday list covers the chart week to the
 * Thursday before it, so the first list that can show a crossing is the
 * Friday AFTER it (a Friday crossing waits a week).
 */
export function unseenCompleteLists(cov, crossing, asOf) {
  const from = addDays(fridayOnOrBefore(crossing), 7);
  let n = 0;
  for (const d of cov.complete) if (d >= from && d <= asOf) n++;
  return n;
}

const ukSteps = (rec, ladder) =>
  staircase(ladder, [
    ...rec.entries.map((e) => ({ date: e.date, level: e.level, x: e.x, source: "BuzzJack" })),
    ...rec.sweep.filter((s) => s.market === "UK").map((s) => ({ date: s.date, level: s.level, x: s.x, source: "sweep doc" })),
  ]);

/**
 * How much slower than the straight line these titles have actually been.
 * Every title with three or more dated UK steps is replayed: the pace between
 * two steps predicts when the next one lands, and the actual wait is divided
 * by the predicted one. The median of those ratios is the slowdown factor —
 * read from the data on every run, never typed. Fewer than MIN_PACE_SAMPLES
 * replays and the factor is 1 (the straight line, unadjusted).
 */
export const MIN_PACE_SAMPLES = 8;
export function historicalPace(records, site) {
  const ratios = [];
  for (const rec of records) {
    const ladder = site.thresholds.UK?.[rec.format];
    if (!ladder) continue;
    const steps = ukSteps(rec, ladder);
    for (let k = 2; k < steps.length; k++) {
      const p = project(steps.slice(0, k), steps[k].date);
      if (!p || p.rate <= 0) continue;
      const predicted = (steps[k].units - p.to.units) / p.rate;
      if (predicted > 0) ratios.push(weeksBetween(p.to.date, steps[k].date) / predicted);
    }
  }
  ratios.sort((a, b) => a - b);
  if (ratios.length < MIN_PACE_SAMPLES) return { factor: 1, samples: ratios.length };
  const mid = ratios.length / 2;
  const median = ratios.length % 2 ? ratios[Math.floor(mid)] : (ratios[mid - 1] + ratios[mid]) / 2;
  return { factor: Math.min(Math.max(median, 1), 3), samples: ratios.length };
}

export function judgeUK(rec, ctx) {
  const { site, asOf, cov, occ } = ctx;
  const ladder = site.thresholds.UK?.[rec.format];
  if (!ladder) return null;
  const steps = ukSteps(rec, ladder);
  const onSite = siteTier(rec, "UK", ladder);
  const top = steps[steps.length - 1] ?? null;
  const artist = artistNames(rec, site);
  const title = rec.releases[0]?.title ?? rec.title;
  // Search for the title as the BPI's list printed it ("Title", not the site's
  // "Title (Subtitle)"), in the site's casing where the two agree.
  const printed = [...rec.entries].sort((a, b) => b.date.localeCompare(a.date))[0]?.title;
  const listTitle = printed && titleKey(printed) === titleKey(title) ? title : printed;
  const occRows = occFor(rec, occ, artistAliases(site.artists));
  const liveRows = rec.live.filter((l) => l.country === "UK");
  const momentum = occScore(occRows) + Math.min(liveScore(liveRows) * 0.3, 0.5);
  const momentumText = [occRows.length ? `this week: ${occLine(occRows)}` : "", liveRows.length ? `today: ${liveLine(liveRows, "UK")}` : ""].filter(Boolean).join("; ");
  const base = { market: "UK", artist, title, format: rec.format, siteTier: tierLabel(onSite), search: searchTerm(listTitle ?? title, artist.split(" / ")[0]), where: REGISTER.UK, momentum, momentumText };

  if (top && unitsOf(ladder, top) > (unitsOf(ladder, onSite) ?? 0)) {
    const e = [...rec.entries].filter((x) => x.date === top.date).sort((a, b) => (unitsOf(ladder, b) ?? 0) - (unitsOf(ladder, a) ?? 0))[0];
    const credit = e?.credit ? ` ("${e.credit} - ${e.title}")` : "";
    return {
      ...base,
      kind: "listed",
      confidence: "high",
      nextTier: tierLabel(top),
      when: top.date,
      score: 100 + weeksBetween("2022-01-01", top.date) / 1000,
      evidence: `${top.source === "BuzzJack" ? `BuzzJack's transcription of the BPI list for ${fmtDate(top.date)}` : `sweep doc row dated ${fmtDate(top.date)}`} prints ${tierLabel(top)}${credit}; the site carries ${onSite ? tierLabel(onSite) : "no UK plaque"}${rec.orphan ? " and has no row for this title" : ""}.`,
      steps,
    };
  }

  if (!onSite && !top) return null; // never certified: judgeUKChart's list
  const known = maxTier(ladder, onSite, top);
  const next = nextTier(ladder, known);
  if (!next) return null;
  const nextUnits = unitsOf(ladder, next);
  const releaseDate = rec.entries.map((e) => e.releaseDate).filter(Boolean).sort()[0];
  const proj = project(steps, asOf, { releaseDate });
  if (!proj || proj.rate <= 0) {
    // No rate. A title charting in the UK this week is still worth a search;
    // say what pace it would have needed, and how many full lists have passed.
    if (momentum >= MOMENTUM_FLOOR) {
      const last = top && unitsOf(ladder, top) >= (unitsOf(ladder, onSite) ?? 0) ? top : null;
      const need = last ? (nextUnits - last.units) / Math.max(weeksBetween(last.date, asOf), 1) : null;
      const lists = last ? unseenCompleteLists(cov, last.date, asOf) : null;
      const from = last
        ? `${tierLabel(last)} ${fmtDate(last.date)} is the only dated step; ${tierLabel(next)} by now needs ≈${fmtUnits(need)}/wk since then, and ${lists} full weekly list${lists === 1 ? "" : "s"} since have not printed it`
        : `${tierLabel(onSite)} on the site has no dated step in the lists`;
      return {
        ...base,
        kind: "momentum",
        confidence: "low",
        nextTier: tierLabel(next),
        score: 20 + 10 * momentum,
        evidence: `${from}. ${momentumText[0].toUpperCase()}${momentumText.slice(1)}.`,
        steps,
      };
    }
    return { ...base, kind: "unprojectable", nextTier: tierLabel(next), steps, reason: steps.length ? "one dated step and no release date" : "no dated step in the lists (plaque predates 2022 or was never transcribed)" };
  }
  // A site tier above the last dated step: the plaque exists, its date does not.
  const floor = unitsOf(ladder, known) ?? 0;
  const k = ctx.pace?.factor ?? 1;
  const projected = Math.max(proj.projected, floor);
  // The same projection at the slowdown these titles have shown before.
  const likely = Math.max(Math.round(proj.to.units + (proj.rate / k) * proj.since), floor);
  const res = against({ ...proj, projected: likely, rate: proj.rate / k }, nextUnits);
  const gap = (nextUnits - proj.to.units) / proj.rate; // weeks, on the straight line
  const straight = addDays(proj.to.date, gap * 7);
  const crossing = addDays(proj.to.date, gap * k * 7);
  const unseen = crossing <= asOf ? unseenCompleteLists(cov, crossing, asOf) : 0;
  const stretch = proj.since / Math.max(proj.weeks, 1);
  const slowing = proj.earlierRate != null && proj.rate < 0.8 * proj.earlierRate;
  const soon = crossing > asOf && crossing <= addDays(asOf, SOON_DAYS);

  let kind;
  if (crossing <= asOf && unseen === 0) kind = "due";
  else if (soon) kind = "soon";
  else if (crossing <= asOf && unseen <= UNSEEN_LIMIT) kind = "stale";
  else kind = crossing <= asOf ? "slowed" : "later";

  const pace = `${proj.fromRelease ? "released" : tierLabel(proj.from)} ${fmtDate(proj.from.date)} → ${tierLabel(proj.to)} ${fmtDate(proj.to.date)}: ≈${fmtUnits(proj.rate)}/wk over ${Math.round(proj.weeks)} wks${proj.fromRelease ? " (lifetime average, flatters an older title)" : ""}${slowing ? ` — slowing, was ≈${fmtUnits(proj.earlierRate)}/wk` : ""}`;
  const lines = k > 1 ? `${fmtUnits(nextUnits)} ≈${fmtDate(crossing)} at the usual slowdown (straight line ≈${fmtDate(straight)})` : `${fmtUnits(nextUnits)} ≈${fmtDate(crossing)}`;
  const where =
    kind === "due"
      ? `reaches ${lines}, after the last full list (${fmtDate(cov.lastComplete)}); ≈${fmtUnits(likely)} now`
      : kind === "soon"
        ? `reaches ${lines}; ≈${fmtUnits(likely)} now`
        : kind === "later"
          ? `reaches ${lines}`
          : `was due to reach ${lines}, but ${unseen} full weekly list${unseen === 1 ? "" : "s"} since have not printed it`;

  let confidence = "low";
  if (kind === "due" && !proj.fromRelease && stretch <= 3) confidence = "medium";

  let score = kind === "due" ? 50 : kind === "soon" ? 30 : kind === "stale" ? 10 : 0;
  score += 10 * Math.min(res.ratio, 2) + 5 * momentum;
  if (proj.fromRelease) score -= 5;
  if (slowing) score -= 3;
  if (stretch > 4) score -= 3;

  return {
    ...base,
    kind,
    confidence,
    nextTier: tierLabel(next),
    when: crossing,
    straight,
    ratio: res.ratio,
    projected,
    likely,
    nextUnits,
    rate: proj.rate,
    score,
    evidence: `${pace}; ${where}.${momentumText ? ` ${momentumText[0].toUpperCase()}${momentumText.slice(1)}.` : ""}`,
    steps,
  };
}

/** Never certified in the UK, but a chart run says it could be near Silver. */
export function judgeUKChart(rec, ctx) {
  const { site, occ } = ctx;
  const ladder = site.thresholds.UK?.[rec.format];
  if (!ladder) return null;
  if (siteTier(rec, "UK", ladder) || rec.entries.length) return null;
  const peak = bestEntry(rec, "UK");
  const occRows = occFor(rec, occ, artistAliases(site.artists));
  const liveRows = rec.live.filter((l) => l.country === "UK");
  // Silver is an accumulation, so a chart run counts by how long it has lasted:
  // a new entry at No. 2 has banked a week, a ten-week No. 1 has banked ten.
  const banked = occRows.reduce((n, o) => n + occScore([o]) * (typeof o.weeks === "number" ? Math.min(o.weeks / 12, 1) : 0.5), 0);
  const now = banked + Math.min(liveScore(liveRows) * 0.3, 0.5) * 0.5;
  const hist = peakScore(peak);
  if (!now && (!peak || peak.peak > 40)) return null;
  const artist = artistNames(rec, site);
  const title = rec.releases[0]?.title ?? rec.title;
  const next = nextTier(ladder, null);
  const bits = [
    peak ? `UK peak #${peak.peak}${peak.weeks ? `, ${peak.weeks} wks` : ""}` : "",
    occRows.length ? `this week: ${occLine(occRows)}` : "",
    liveRows.length ? `today: ${liveLine(liveRows, "UK")}` : "",
    "no plaque in any BuzzJack list 2022 on",
  ].filter(Boolean);
  return {
    market: "UK",
    kind: "chart",
    confidence: "low",
    artist,
    title,
    format: rec.format,
    siteTier: "none",
    nextTier: `${tierLabel(next)} (${fmtUnits(unitsOf(ladder, next))} units)`,
    score: now * 2 + hist,
    evidence: `${bits.join("; ")}.`,
    search: searchTerm(title, artist.split(" / ")[0]),
    where: REGISTER.UK,
  };
}

// ── South Africa, Australia, Portugal ───────────────────────────────────────

export function judgeHint(rec, market, ctx) {
  const { site } = ctx;
  const ladder = site.thresholds[market]?.[rec.format];
  if (!ladder) return null;
  const liveRows = rec.live.filter((l) => l.country === market);
  const peak = bestEntry(rec, market);
  const now = liveScore(liveRows);
  const hist = peakScore(peak);
  if (!now && hist < 0.3) return null;
  const onSite = siteTier(rec, market, ladder);
  const next = nextTier(ladder, onSite);
  if (!next) return null;
  const elsewhere = new Set(rec.releases.flatMap((r) => r.certs.filter((c) => c.c !== market && c.level !== "Silver" && c.level !== "Gold").map((c) => c.c))).size;
  const dated = rec.sweep.filter((s) => s.market === market).sort((a, b) => b.date.localeCompare(a.date))[0];
  const artist = artistNames(rec, site);
  const title = rec.releases[0]?.title ?? rec.title;
  const bits = [
    liveRows.length ? `today: ${liveLine(liveRows, market)}` : "",
    peak ? `${market} chart peak #${peak.peak}${peak.weeks ? `, ${peak.weeks} wks` : ""}` : "",
    dated ? `${tierLabel(dated)} dated ${fmtDate(dated.date)} in the sweep` : "",
    elsewhere ? `Platinum or better in ${elsewhere} other ${elsewhere === 1 ? "country" : "countries"}` : "",
  ].filter(Boolean);
  return {
    market,
    kind: "hint",
    confidence: "low",
    artist,
    title,
    format: rec.format,
    siteTier: tierLabel(onSite),
    nextTier: `${tierLabel(next)} (${fmtUnits(unitsOf(ladder, next))} units)`,
    score: now + hist * 0.6 + Math.min(elsewhere, 4) * 0.05,
    evidence: `${bits.join("; ")}. No readable register ladder — a chart signal, not a unit count.`,
    search: searchTerm(title, artist.split(" / ")[0]),
    where: REGISTER[market],
  };
}

// ── Everything ──────────────────────────────────────────────────────────────

/**
 * One row per recording. A record the site holds only as platform-chart rows
 * carries no credit to merge on, so "Sponono" arrives once as Burna Boy's and
 * once as Wizkid's; identical evidence for the same title is the same record.
 */
export function mergeDuplicates(rows) {
  const out = new Map();
  for (const r of rows) {
    const key = `${r.market}|${r.format}|${looseTitleKey(r.title)}|${r.siteTier}|${r.evidence}`;
    const had = out.get(key);
    if (!had) out.set(key, { ...r });
    else if (!had.artist.split(" / ").includes(r.artist)) had.artist = `${had.artist} / ${r.artist}`;
  }
  return [...out.values()];
}

/**
 * Rank every candidate.
 *   markets  which of UK / ZA / AU / PT to judge
 *   top      cap on the main UK list (the "handful")
 *   lowTop   cap on the UK chart-only list
 *   hintTop  cap per ZA / AU / PT market
 */
export function rankAll({ site, entries, occ = [], asOf, markets = ["UK", "ZA", "AU", "PT"], top = 10, lowTop = 5, hintTop = 3 }) {
  const records = buildRecords(site, entries);
  const cov = coverage(entries);
  const pace = historicalPace(records, site);
  const ctx = { site, asOf, cov, occ, pace };
  const out = { main: [], chart: [], unprojectable: [], slowed: [], later: [], hints: {}, coverage: cov, pace, records: records.length };

  if (markets.includes("UK")) {
    const judged = records.map((r) => judgeUK(r, ctx)).filter(Boolean);
    const main = judged.filter((j) => ["listed", "due", "soon", "momentum", "stale"].includes(j.kind)).sort((a, b) => b.score - a.score);
    out.main = main.slice(0, top);
    out.overflow = main.length - out.main.length;
    out.unprojectable = judged.filter((j) => j.kind === "unprojectable");
    out.slowed = judged.filter((j) => j.kind === "slowed");
    out.later = judged.filter((j) => j.kind === "later").sort((a, b) => a.when.localeCompare(b.when));
    const inMain = new Set(out.main.map((m) => `${m.format}|${looseTitleKey(m.title)}`));
    out.chart = mergeDuplicates(records.map((r) => judgeUKChart(r, ctx)).filter((j) => j && !inMain.has(`${j.format}|${looseTitleKey(j.title)}`)))
      .sort((a, b) => b.score - a.score)
      .slice(0, lowTop);
  }
  for (const m of markets.filter((m) => m !== "UK")) {
    const cap = markets.length === 1 ? top : hintTop;
    out.hints[m] = mergeDuplicates(records.map((r) => judgeHint(r, m, ctx)).filter(Boolean))
      .sort((a, b) => b.score - a.score)
      .slice(0, cap);
  }
  return out;
}
