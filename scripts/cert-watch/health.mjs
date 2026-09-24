// Per-register health verdicts — PURE. Spec: docs/cert-watcher/SPEC.md §3.4, §7.
//
// A register that was not read cleanly says NOTHING about today, and the
// report must say so. This file decides, for one adapter's read, whether it
// was clean (`ok`), clean but quiet for longer than its cadence (`stale`), or
// not to be trusted (`format`, `shrank`). What it never does is turn a bad
// read into "no new certifications".
//
//   * decoy       RiSA's tarpit answers a browser User-Agent with HTTP 200 and
//                 a `<title>ai/…</title>` page of generated text. That is a bot
//                 wall, not a register page (http.mjs asks isDecoy).
//   * control     a positive-control row that must be present — daily where
//                 the daily read covers a stable row, on deep runs otherwise,
//                 and, where the daily read is a newest-first window, on
//                 every run whose window still reaches past the row (its
//                 `window` test); only in the tests where no read can say.
//   * fields      credit and title must look like a credit and a title: a
//                 parser that shifts a column prints dates, markup or nothing
//                 in them while still finding its rows.
//   * matched     rows naming one of the sixteen, against the peak of the
//                 clean reads of the same kind: a read whose matched rows
//                 persist (a whole register, a year, fixed name searches)
//                 that matches under half its peak — or none — is
//                 `unmatched`, not "✅ read". A parser that finds its markers
//                 but mangles artist or title would otherwise read as a
//                 clean day with nothing new. The floor never becomes 0 and
//                 never follows a slide down (review, 24 Sep 2026).
//   * rolling     a newest-first window whose fixed control row has scrolled
//                 off for good (Music Canada, IFPI Danmark): the last clean
//                 read's newest rows, which today's read must still hold
//                 wherever it reaches back to them.
//   * floor       the register's total, learned from earlier clean reads and
//                 never typed. A read below it is `shrank`; the floor is
//                 lowered only after three runs read the same lower total.
//                 A year-bound floor starts again when the year read changes.
//   * staleness   the newest award date against config.staleAfterDays: a
//                 register read cleanly whose newest date has not moved in its
//                 usual cadence is `stale` — read, but not evidence of "none".

/** RiSA's decoy: HTTP 200, `<title>ai/certification-levels/certifications/</title>`. */
export const DECOY_TITLE_RE = /<title>\s*ai\//i;
export const isDecoy = (body) => DECOY_TITLE_RE.test(String(body ?? ""));

/** Statuses that count as "read cleanly" — everything else is "not read". */
export const CLEAN = new Set(["ok", "stale"]);
export const isClean = (status) => CLEAN.has(status);

/** Runs a lower total must repeat before the floor is lowered (§6.1). */
export const FLOOR_RUNS = 3;

/** A credit or title that is not one: empty, a bare date, or markup left
 *  over from a parse. Titles that are numbers are real ("02:30", "44"). */
const DATE_ONLY_RE = /^\s*(?:\d{1,2}[./-]\d{1,2}[./-]\d{2,4}\.?|\d{4}-\d{2}-\d{2}(?:[T ][\d:.]+Z?)?)\s*$/;
export const badCreditOrTitle = (r) => {
  const c = String(r?.credit ?? "").trim();
  const t = String(r?.title ?? "").trim();
  return !c || !t || DATE_ONLY_RE.test(c) || DATE_ONLY_RE.test(t) || /<\/?[a-z]/i.test(c) || /<\/?[a-z]/i.test(t);
};
/** Below this many rows the field check says nothing (a quiet day). */
const FIELD_MIN_ROWS = 10;
/** More than this share of rows with an unknown tier is a changed format (§7). */
export const UNPARSED_LIMIT = 0.05;

const fmt = (n) => String(n).replace(/\B(?=(\d{3})+$)/g, ",");

/** "2026-07-16" + 90 → "2026-10-14". */
export const addDays = (iso, n) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

/** The Monday of ISO week `week` of `year`, as yyyy-mm-dd. */
export function isoWeekMonday(year, week) {
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const day = jan4.getUTCDay() || 7;
  const monday = new Date(jan4);
  monday.setUTCDate(jan4.getUTCDate() - day + 1 + (week - 1) * 7);
  return monday.toISOString().slice(0, 10);
}

/**
 * The control that applies to a LIVE read today, or null. config.controls
 * may name a new row for an adapter (after a year rollover, say): it must be
 * a row taken from a saved fixture, with `why` and `on`.
 */
export function liveControl(adapter, config) {
  const o = config?.controls?.[adapter.id];
  if (o) {
    const want = ["rowId", "credit", "title", "tierRaw"].filter((k) => o[k] != null);
    return {
      when: o.when ?? "daily",
      year: o.year ?? null,
      rowId: o.rowId ?? `${o.credit ?? ""} | ${o.title ?? ""}${o.tierRaw ? ` | ${o.tierRaw}` : ""}`,
      find: (r) => want.every((k) => r[k] === o[k]),
      fromConfig: true,
    };
  }
  return adapter.control ?? null;
}

/** Is the control checked on this run? `years` = the years the read covered;
 *  `got` = the read, for a control with a `window` test: a newest-first read
 *  that reaches past the control row must hold it, whatever `when` says. */
export function controlDue(control, { deep, years, got = null }) {
  if (!control) return { due: false, why: null };
  if (typeof control.window === "function" && got) {
    let inWindow = false;
    try {
      inWindow = !!control.window(got);
    } catch {
      inWindow = false;
    }
    if (inWindow) return { due: true, why: null };
  }
  if (control.when === "tests") return { due: false, why: null };
  if (control.when === "deep" && !deep) return { due: false, why: null };
  if (control.when !== "daily" && control.when !== "deep") return { due: false, why: null };
  if (control.year != null && Array.isArray(years) && !years.includes(control.year)) {
    return { due: false, why: `no live control this year (the control row is in ${control.year}; set config.controls.<id> from a saved fixture)` };
  }
  return { due: true, why: null };
}

/**
 * The rolling control (§3.4): `rolling` = { checks: [{ label, due, find }] }
 * built by the adapter from the last clean read's newest rows (their
 * digests, carried in its cursor), or null on a read with no such cursor.
 * `due` says whether today's newest-first read reaches back to that row.
 * One due row present is enough (a register may withdraw a row); none of
 * them present is a changed format — the read no longer holds what it
 * served last time.
 */
export function rollingVerdict(rolling, rows) {
  const checks = rolling?.checks ?? [];
  if (!checks.length) return { status: "ok", detail: null, note: "rolling control: none yet (no earlier clean read to carry one)" };
  const due = checks.filter((c) => c.due);
  if (!due.length) return { status: "ok", detail: null, note: "rolling control not reached — today's read ends before the last clean read's newest rows" };
  const present = due.filter((c) => rows.some(c.find));
  const missing = due.filter((c) => !present.includes(c));
  if (!present.length) {
    return {
      status: "format",
      detail: `rolling control missing — none of the last clean read's ${due.length} newest row${due.length === 1 ? "" : "s"} is in today's read (${due.map((c) => c.label).join("; ")})`,
      note: null,
    };
  }
  return {
    status: "ok",
    detail: null,
    note: `rolling control: ${present.length} of ${due.length} of the last clean read's newest rows present${missing.length ? ` (not found: ${missing.map((c) => c.label).join("; ")})` : ""}`,
  };
}

/**
 * The verdict on one adapter's completed read.
 *
 *   adapter:  { id, minRows, control, total }   (§2.5)
 *   got:      { rows, total?, totalYear?, years?, newestDate? }
 *   prev:     the previous state's health entry for this adapter (or null)
 *   staleAfterDays: number | undefined
 *   now:      Date
 *
 * Returns { status, detail, notes[], track, events[] } where `track` holds the
 * fields the state keeps (floor, low, floorYear, newest, staleSince) and
 * `events` are floor changes, {type: "floor-learned" | "floor-lowered", text},
 * for the run details — a lowered floor also notifies (§6.4).
 */
export function verdict({ adapter, got, deep = false, prev = null, staleAfterDays, now = new Date(), config = null }) {
  const rows = got?.rows ?? [];
  const notes = [];
  const events = [];
  const track = {
    floor: prev?.floor ?? null,
    low: prev?.low ?? null,
    floorYear: prev?.floorYear ?? null,
    newest: got?.newestDate ?? prev?.newest ?? null,
    staleSince: null,
  };
  let status = "ok";
  let detail = null;

  // 1. Enough rows, rows whose tiers this parser knows, and credit and
  //    title fields that look like a credit and a title.
  const minRows = adapter.minRows ?? 1;
  const unparsed = rows.filter((r) => !r.reading).length;
  const badFields = rows.filter(badCreditOrTitle).length;
  if (rows.length < minRows) {
    status = "format";
    detail = `${rows.length} rows parsed (fewer than ${minRows})`;
  } else if (rows.length && unparsed / rows.length > UNPARSED_LIMIT) {
    status = "format";
    detail = `${unparsed} of ${rows.length} rows have a tier this parser does not know`;
  } else if (rows.length >= FIELD_MIN_ROWS && badFields / rows.length > UNPARSED_LIMIT) {
    status = "format";
    detail = `${badFields} of ${rows.length} rows have an empty, date-like or markup credit or title`;
  }

  // 2. The positive control, where it is due today.
  if (status === "ok") {
    const control = liveControl(adapter, config);
    const due = controlDue(control, { deep, years: got?.years ?? null, got });
    if (due.why) notes.push(due.why);
    // A window control the newest-first read no longer reaches: say so, so
    // the line never implies a live check that did not happen.
    if (!due.due && typeof control?.window === "function" && (control.when === "tests" || !deep)) {
      notes.push(`control row older than today's read reaches — checked ${control.when === "tests" ? "in the tests" : "on deep runs"}`);
    }
    if (due.due) {
      if (!rows.some(control.find)) {
        status = "format";
        detail = `control row missing (${control.rowId})`;
      } else {
        notes.push(`control ${control.rowId} present`);
      }
    }
  }

  // 2b. The rolling control, for a newest-first window whose fixed control
  //     row has scrolled off for good (Music Canada, IFPI Danmark): the last
  //     clean read's newest rows, which today's read must still hold
  //     wherever it reaches back to them.
  if (status === "ok" && got && "rolling" in got) {
    const rv = rollingVerdict(got.rolling, rows);
    if (rv.status !== "ok") {
      status = rv.status;
      detail = rv.detail;
    }
    if (rv.note) notes.push(rv.note);
  }

  // 3. The floor — learned, never typed; only a clean read moves it.
  if (status === "ok" && adapter.total && typeof got?.total === "number") {
    const total = got.total;
    let floor = track.floor;
    if (adapter.total === "year" && got.totalYear != null && track.floorYear !== got.totalYear) {
      if (floor != null) notes.push(`floor reset for ${got.totalYear} (was ${fmt(floor)} for ${track.floorYear})`);
      floor = null;
      track.low = null;
    }
    if (floor == null) {
      track.floor = total;
      track.low = null;
      events.push({ type: "floor-learned", text: `floor learned: ${fmt(total)}` });
    } else if (total >= floor) {
      track.floor = total;
      track.low = null;
    } else {
      const low = track.low && track.low.n === total ? { n: total, runs: track.low.runs + 1 } : { n: total, runs: 1 };
      if (low.runs >= FLOOR_RUNS) {
        events.push({ type: "floor-lowered", text: `shrank from ${fmt(floor)} to ${fmt(total)} and stayed there for ${low.runs} runs — floor lowered` });
        track.floor = total;
        track.low = null;
      } else {
        status = "shrank";
        detail = `register shrank (${fmt(floor)} → ${fmt(total)})`;
        track.low = low;
      }
    }
    if (adapter.total === "year" && got.totalYear != null) track.floorYear = got.totalYear;
  }

  // 4. Staleness: read cleanly, but nothing newer than the usual gap. The
  //    register goes stale ON newest + staleAfterDays (NVPI: 16-7-2026 + 90
  //    days = 2026-10-14), counted in whole UTC days.
  if (status === "ok" && staleAfterDays && got?.newestDate) {
    const since = addDays(got.newestDate, staleAfterDays);
    if (now.toISOString().slice(0, 10) >= since) {
      status = "stale";
      track.staleSince = since;
      detail = `source stale since ${since}`;
    }
  }

  return { status, detail, notes, track, events };
}

/**
 * Matched rows (§7): rows naming one of the sixteen, against the PEAK — the
 * highest count a clean read of the SAME kind (daily or deep) has had.
 * Applied only to the read kinds an adapter declares in `matchedFloor`
 * ({daily, deep}: true), the ones whose matched rows persist between runs: a
 * whole register (TCSN, AMPROFON), a year (BVMI, MAHASZ, swisscharts), fixed
 * name searches (RIAA Latin, Pro-Música Brasil, every deep artist search). A
 * newest-first window that scrolls its rows away (Music Canada, IFPI
 * Danmark, the daily RIAA list) is never judged this way: none matched there
 * is an ordinary day (those registers carry a rolling control instead).
 *
 * Today's count below HALF the peak — none included — is `unmatched`: a
 * parser that still finds its markers but mangles credits or titles. Small
 * moves (an upgrade that overwrites a row, an alias ruling) pass, with a
 * note, but the floor does NOT follow them down: it is the peak, so a
 * register that slides a little every day still trips the check once it is
 * under half of where it stood, instead of each day's count becoming the
 * next day's floor (100 → 51 → 26 → … → 1). As with the total floor, a lower
 * count read on FLOOR_RUNS runs running is accepted, with a notify — but
 * never a count of 0: a floor of 0 would switch the check off for good (0 is
 * at least half of 0), so a register that names none of the sixteen for
 * three runs stays `unmatched` until a human looks. For the same reason a
 * first read, or a stored floor, of 0 is no floor at all. A year-bound read
 * starts again when its year changes.
 *
 *   adapter:  { matchedFloor }
 *   matched:  today's count (evaluateRows)
 *   prev:     the previous state's health entry ({ matched: {daily, deep}
 *             — the peaks, matchedLow, matchedYear })
 *   year:     the year a year-bound read covered (got.totalYear), or null
 *
 * Returns { status: "ok" | "unmatched", detail, notes, track, events }.
 */
export function matchedVerdict({ adapter, matched, deep = false, prev = null, year = null }) {
  const kind = deep ? "deep" : "daily";
  const floors = { ...(prev?.matched ?? {}) };
  let low = prev?.matchedLow ?? null;
  const events = [];
  const notes = [];
  // A read kind the adapter does not declare is not judged, and its state is
  // left as it was (nothing is written for it).
  if (!adapter?.matchedFloor?.[kind] || typeof matched !== "number") return { status: "ok", detail: null, notes, track: {}, events };
  const track = { matched: floors, matchedLow: low, matchedYear: prev?.matchedYear ?? null };
  if (year != null && track.matchedYear != null && track.matchedYear !== year) {
    delete floors.daily;
    delete floors.deep;
    low = null;
    events.push({ type: "floor-reset", text: `matched rows: floor reset for ${year}` });
  }
  if (year != null) track.matchedYear = year;
  // This kind's streak ends on any read that is not under half the peak.
  const endStreak = () => (low && low.kind !== kind ? low : null);
  // 0 is never a floor — not learned, not kept from an older state.
  if (!(floors[kind] > 0)) delete floors[kind];
  const peak = floors[kind] ?? null;
  if (peak == null) {
    if (matched > 0) floors[kind] = matched;
    else notes.push(`no rows naming the 16 on the ${kind} read yet — no matched floor learned`);
    return { status: "ok", detail: null, notes, track: { ...track, matched: floors, matchedLow: endStreak() }, events };
  }
  if (matched >= peak) {
    floors[kind] = matched;
    return { status: "ok", detail: null, notes, track: { ...track, matched: floors, matchedLow: endStreak() }, events };
  }
  if (matched > 0 && matched >= Math.ceil(peak / 2)) {
    // Above half the peak: passes, and the peak stays where it was.
    notes.push(`${fmt(matched)} rows naming the 16 on the ${kind} read (peak ${fmt(peak)})`);
    return { status: "ok", detail: null, notes, track: { ...track, matched: floors, matchedLow: endStreak() }, events };
  }
  const next = low && low.kind === kind && low.n === matched ? { kind, n: matched, runs: low.runs + 1 } : { kind, n: matched, runs: 1 };
  if (next.runs >= FLOOR_RUNS && matched > 0) {
    floors[kind] = matched;
    events.push({ type: "floor-lowered", text: `matched rows (${kind} read) fell from ${fmt(peak)} to ${fmt(matched)} and stayed there for ${next.runs} runs — floor lowered` });
    return { status: "ok", detail: null, notes, track: { ...track, matched: floors, matchedLow: null }, events };
  }
  const detail =
    matched === 0 && next.runs >= FLOOR_RUNS
      ? `rows naming the 16 dropped from ${fmt(peak)} to 0 on the ${kind} read and stayed there for ${next.runs} runs — 0 is never accepted as the floor; check the parser`
      : `rows naming the 16 dropped from ${fmt(peak)} to ${fmt(matched)} on the ${kind} read — the parser may be misreading credits or titles`;
  return { status: "unmatched", detail, notes, track: { ...track, matched: floors, matchedLow: next }, events };
}
