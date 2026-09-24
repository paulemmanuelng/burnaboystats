// The issue body, the notify comment and the run report — PURE.
// Spec: docs/cert-watcher/SPEC.md §5.
//
// Every line is a LEAD. The body never says "no new certifications" for a
// register it did not read cleanly: the not-read list is printed in the
// headline whenever it is non-empty, and the one sentence that may say
// "no new certification leads" carries that list beside it.
//
// Register text is untrusted. It goes into inline code with backticks fenced,
// control characters stripped, HTML-comment markers broken and a 300-character
// cap — so an `@mention`, HTML or a stray `-->` in a register row is inert.

import { encodeState, stateBlock, StateTooLarge } from "./state.mjs";
import { tierLabel } from "./match.mjs";

export const BODY_LIMIT = 60000;
export const FULL_CANDIDATES = 40;

// ── Hygiene ─────────────────────────────────────────────────────────────────
// Control characters are removed; the word joiner (U+2060) breaks an HTML
// comment opener or closer without changing what a reader sees.
const CONTROL_RE = /[\u0000-\u001f\u007f-\u009f]/g;
const WJ = "\u2060";

/** Untrusted text → an inert inline code span. */
export function code(s, max = 300) {
  let t = String(s ?? "").replace(CONTROL_RE, " ").replace(/\s+/g, " ").trim();
  if (t.length > max) t = `${t.slice(0, max - 1)}…`;
  t = t.replace(/<!--/g, `<!${WJ}--`).replace(/-->/g, `--${WJ}>`);
  if (!t) return "` `";
  const runs = t.match(/`+/g) ?? [];
  const fence = "`".repeat(Math.max(0, ...runs.map((r) => r.length)) + 1);
  const pad = t.startsWith("`") || t.endsWith("`") ? " " : "";
  return `${fence}${pad}${t}${pad}${fence}`;
}

/** Untrusted text outside code (titles in bold): no markup, no mentions. */
export function plain(s, max = 120) {
  let t = String(s ?? "").replace(CONTROL_RE, " ").replace(/\s+/g, " ").trim();
  if (t.length > max) t = `${t.slice(0, max - 1)}…`;
  return t
    .replace(/[\\`*_[\]<>|#~]/g, (c) => `\\${c}`)
    .replace(/@/g, `@${WJ}`)
    .replace(/-->/g, `--${WJ}>`);
}

/** A register-supplied URL: printed bare only when it is a plain http(s)
 *  URL with nothing that markdown could read as markup; otherwise as code. */
export const safeUrl = (u) => (/^https?:\/\/[^\s<>()[\]`"'*_|]+$/.test(String(u ?? "")) ? String(u) : code(u, 200));

// ── Labels ──────────────────────────────────────────────────────────────────
export function statusLabel(h, r) {
  const d = h?.detail ? ` — ${h.detail}` : "";
  switch (h?.status) {
    case "ok":
      return "✅ read";
    case "unreachable":
      return `⏭️ not read — ${h.reason ?? "network"}${h.fails > 1 ? ` · day ${h.fails}` : ""}`;
    case "challenge":
      return `⏭️ not read — bot challenge${h.http ? ` (HTTP ${h.http})` : ""}${h.fails > 1 ? ` · day ${h.fails}` : " · 1st day"}`;
    case "format":
      return `⚠️ format changed${d}`;
    case "mismatch":
      return `⚠️ served a different page${d}`;
    case "held-robots":
      return "⏸️ held — robots.txt";
    case "robots":
      return "⏸️ held — robots.txt";
    case "manual":
      return "📋 human check";
    case "not-built":
      return `🧱 not built yet (step ${r?.step ?? "?"})`;
    case "not-reached":
      return "⏭️ not reached (run budget)";
    case "budget":
      return "⏭️ not reached (run budget)";
    case "skipped":
      return "➖ not run (--only)";
    case "error":
      return `⚠️ adapter error: ${plain(h.detail ?? "", 160)}`;
    default:
      return `⚠️ ${h?.status ?? "unknown"}`;
  }
}

const shortReason = (h, r) => {
  switch (h?.status) {
    case "unreachable":
      return h.reason ?? "network";
    case "challenge":
      return "bot challenge";
    case "format":
      return "format changed";
    case "mismatch":
      return "served a different page";
    case "not-built":
      return `not built yet — step ${r.step}`;
    case "skipped":
      return "not run this time";
    case "not-reached":
    case "budget":
      return "run budget";
    case "error":
      return "adapter error";
    default:
      return h?.status ?? "unknown";
  }
};

const regName = (r) => `${r.flag} ${r.programme ?? r.body}`;

/** The headline's counts, all derived from the results. */
export function counts(results, shown) {
  const automated = results.registry.filter((r) => r.class === "AUTOMATE" || r.class === "WITH-CARE");
  const clean = automated.filter((r) => results.health[r.id]?.status === "ok");
  const notRead = automated.filter((r) => results.health[r.id]?.status !== "ok");
  const list = shown ?? results.candidates;
  return {
    open: list.length,
    new: list.filter((c) => c.status === "new" || c.status === "changed").length,
    automated: automated.length,
    clean: clean.length,
    notRead,
    manual: results.manual.checks.length,
    watch: results.watch.length,
  };
}

/** "Not read today: … — those registers say nothing about today." Grouped
 *  by reason so twenty not-built rows read as one clause. */
export function notReadSentence(results, notRead) {
  if (!notRead.length) return null;
  const groups = new Map();
  for (const r of notRead) {
    const why = shortReason(results.health[r.id], r);
    if (!groups.has(why)) groups.set(why, []);
    groups.get(why).push(regName(r));
  }
  const parts = [...groups].map(([why, names]) => `${names.join(", ")} (${why})`);
  return `Not read today: ${parts.join("; ")} — ${notRead.length === 1 ? "that register says" : "those registers say"} nothing about today.`;
}

const kindLine = (c) => {
  if (c.kind === "UPGRADE") return `**UPGRADE** ${tierLabel(c.holding)} → ${tierLabel(c.reading)}`;
  return `**${c.kind}**`;
};

const holdingText = (c, country) => {
  if (c.kind === "NEW RELEASE") return `no release titled like this on ${plain(c.artistName)}'s page`;
  if (!c.holding) return `nothing in ${country} for this release`;
  return `${tierLabel(c.holding)}${c.holding.body ? ` (${c.holding.body})` : ""}`;
};

function candidateBlock(c, reg) {
  const country = reg ? reg.country : c.country;
  const flag = reg?.flag ?? "";
  const who = `${plain(c.artistName)} — "${plain(c.release ?? c.title)}"`;
  const badge = c.status === "new" || c.status === "changed" ? "🆕 " : "";
  const lines = [
    `- [ ] ${badge}**${who}** · ${flag} ${reg?.countryName ?? country} · ${plain(reg ? reg.programme ?? reg.body : c.adapter)} · ${kindLine(c)} <!-- fp:${c.fp} -->`,
  ];
  lines.push(`  - Register reads: ${c.tierRaw ? code(c.tierRaw) : "`(no tier printed)`"}${c.reading ? ` (${tierLabel(c.reading)})` : " — tier not parsed; read it by eye"}`);
  if (c.dateRaw) lines.push(`  - Award date: ${code(c.dateRaw, 60)}${c.dateKind ? ` (${c.dateKind})` : ""}`);
  for (const raw of c.rows ?? []) lines.push(`  - Row: ${code(raw)}`);
  lines.push(`  - Site holds now: ${holdingText(c, country)}`);
  const check = reg?.registerUrl ? `Check: ${reg.registerUrl}` : null;
  const read = c.readUrl ? `Read via: ${code(c.readUrl, 200)}` : c.url ? `Row link: ${safeUrl(c.url)}` : null;
  if (check || read) lines.push(`  - ${[check, read].filter(Boolean).join(" · ")}`);
  for (const f of c.flags ?? []) lines.push(`  - ⚠ ${plain(f, 200)}`);
  if (c.notReRead) lines.push(`  - ${c.notReRead}`);
  lines.push(`  - First seen: ${c.firstSeen}`);
  return lines.join("\n");
}

function watchLine(w, results) {
  const reg = results.registry.find((r) => r.id === w.adapter);
  const h = results.health[w.adapter];
  const name = `${plain(w.title)}${w.releaseCredit ? ` (${plain(w.releaseCredit)})` : ""} — ${reg?.flag ?? ""} ${plain(w.programme ?? reg?.body ?? w.adapter)}`;
  const site = w.siteHolding ?? "nothing";
  if (h?.status === "ok" && w.reading) {
    const r = w.reading;
    const bits = [r.label ? code(r.label, 60) : null, r.raw ? code(r.raw, 60) : null, r.rowId ? `award ${code(r.rowId, 40)}` : null, r.date ? `certification date ${plain(r.date, 40)}` : null].filter(Boolean);
    const changed = w.changed ? " · 🔔 reading changed since the last run" : "";
    return `- ⏳ **${name}** · register: ${bits[0] ?? "?"}${bits.length > 1 ? ` (${bits.slice(1).join(", ")})` : ""} · site: ${site} · waiting for: ${plain(w.expect)} · lead: ${plain(w.lead, 240)} · read ✅ today${changed}`;
  }
  if (h?.status === "ok" && !w.reading) {
    return `- ⚠️ **${name}** · the register was read but the watched row was not found${w.rowId ? ` (${code(w.rowId, 40)})` : ""} · site: ${site} · waiting for: ${plain(w.expect)} · lead: ${plain(w.lead, 240)}`;
  }
  const last = w.lastHumanReading
    ? ` · last reading (${plain(w.lastHumanReading.source, 80)}): ${code(w.lastHumanReading.raw, 160)}`
    : "";
  const icon = h?.status === "held-robots" || h?.status === "robots" ? "⏸️" : "⏭️";
  const human = reg?.manualCheckText ? ` · human check: ${plain(reg.manualCheckText, 300)}` : reg?.humanCheck ? ` · human check: ${plain(reg.humanCheck, 300)}` : "";
  return `- ${icon} **${name}** · not machine-read today: ${statusLabel(h, reg)}${reg?.heldWhy ? ` (${plain(reg.heldWhy, 160)})` : ""}${last} · site: ${site} · waiting for: ${plain(w.expect)} · lead: ${plain(w.lead, 240)}${human}`;
}

function healthTable(results) {
  const rows = ["| Register | Class | Today | Newest seen / note |", "|---|---|---|---|"];
  for (const r of results.registry) {
    const h = results.health[r.id] ?? { status: "unknown" };
    const note =
      h.status === "ok"
        ? [h.newest, ...(h.notes ?? [])].filter(Boolean).join(" · ")
        : h.status === "manual" || h.status === "held-robots"
          ? [r.note, "human check below"].filter(Boolean).join(" · ")
          : h.status === "not-built"
            ? `human check: ${r.humanCheck ?? "see manual checks"}`
            : h.detail ?? "";
    rows.push(`| ${regName(r)} | ${r.class} | ${statusLabel(h, r)} | ${plain(note, 220).replace(/\|/g, "\\|")} |`);
  }
  return rows.join("\n");
}

function manualSection(results, manualTicks) {
  const { week, checks, coverageNotes } = results.manual;
  const lines = [`### Manual checks this week (${week}; ticks reset Monday)`, ""];
  for (const m of checks) {
    const ticked = manualTicks?.has(m.id) ? "x" : " ";
    lines.push(`- [${ticked}] ${m.flag} **${plain(m.body)}** — open ${m.url}, ${plain(m.check, 400)} <!-- manual:${m.id}:${week} -->`);
  }
  if (coverageNotes?.length) lines.push(`- Coverage the bot cannot close: ${coverageNotes.map((n) => plain(n, 160)).join(" · ")}`);
  return lines.join("\n");
}

function runDetails(results, hiddenCount) {
  const s = results.suppressed;
  const byHost = Object.entries(results.requests?.byHost ?? {})
    .map(([h, n]) => `${h} ${n}`)
    .join(", ");
  const secs = Math.round((results.durationMs ?? 0) / 1000);
  const dur = secs >= 60 ? `${Math.floor(secs / 60)} m ${secs % 60} s` : `${secs} s`;
  const div = s.divergences.length
    ? `${s.divergences.length} known divergence${s.divergences.length === 1 ? "" : "s"} (${s.divergences.map((d) => `${plain(d.title)} ${code(d.readingRaw, 40)}`).join(", ")})`
    : "0 known divergences";
  const held = s.held.length ? `${s.held.length} held row${s.held.length === 1 ? "" : "s"} (${s.held.map((h) => code(`${h.credit} | ${h.title}`, 80)).join(", ")})` : "0 held rows";
  const cleared = results.cleared.length
    ? results.cleared.map((c) => `${plain(c.artistName ?? c.artist)} — "${plain(c.release ?? c.title)}" (${c.adapter})`).join("; ")
    : "none";
  const lines = [
    "<details><summary>Run details</summary>",
    "",
    `Run ${results.date.replace("T", " ").slice(0, 16)} UTC${results.runUrl ? ` · ${results.runUrl}` : ""} · ${dur} · ${results.requests?.total ?? 0} requests${byHost ? ` (${byHost})` : ""}${results.offline ? " · OFFLINE (saved responses)" : ""}${results.deep ? " · deep reads" : ""}${results.dryRun ? " · dry run" : ""}`,
    "",
    `Suppressed: ${div}, ${held}, ${s.tribute.length} tribute reject${s.tribute.length === 1 ? "" : "s"}, ${hiddenCount} dismissed · cleared since the last run (the site caught up): ${cleared}`,
  ];
  for (const w of results.warnings ?? []) lines.push("", `⚠️ ${plain(w, 300)}`);
  const errs = Object.entries(results.health).filter(([, h]) => h.status === "error" && h.stack);
  for (const [id, h] of errs) lines.push("", `Adapter ${id} threw:`, "", "```", String(h.stack).replace(/```/g, "ʼʼʼ").slice(0, 1500), "```");
  lines.push("</details>");
  return lines.join("\n");
}

/**
 * Render the issue body. `view` = { shown, hidden, manualTicks, state } from
 * finalize(); results is the run's results.json.
 */
export function renderBody(results, view, { withState = true } = {}) {
  const shown = view.shown;
  const n = counts(results, shown);
  const out = [];
  out.push(`## 🏅 Certification watch — ${results.dateLabel}`, "");
  const lead =
    n.open === 0
      ? `**0 candidates**`
      : `**${n.open} candidate${n.open === 1 ? "" : "s"} to verify** (${n.new} new since the last run)`;
  out.push(
    `${lead} · ${n.clean} of ${n.automated} automated registers read cleanly · ${n.manual} manual checks this week · ${n.watch} on the watchlist`
  );
  const nr = notReadSentence(results, n.notRead);
  if (n.clean === 0) out.push("", "**No register was read today — this run says nothing.**");
  if (n.open === 0 && n.clean > 0) {
    out.push("", `No new certification leads in the ${n.clean} register${n.clean === 1 ? "" : "s"} read cleanly.${nr ? ` **${nr}**` : ""}`);
  } else if (nr) {
    out.push("", `**${nr}**`);
  }
  if (results.stateError) out.push("", `⚠️ ${plain(results.stateError, 300)} — the previous state was kept.`);
  if (results.state?.reset) out.push("", "ℹ️ No previous state was found, so every open candidate is listed as new.");
  out.push(
    "",
    "> Every line is a **lead**, not a fact. Confirm it in the body's own register, then add it by hand: `certifications.ts` / `afrobeats.ts`, its `/compare` pricing, the country's register link, the updates feed. This bot never edits site data."
  );

  out.push("", "### Candidates", "");
  if (!shown.length) out.push("_None open._", "");
  const regOf = (id) => results.registry.find((r) => r.id === id);
  const ordered = [...shown].sort(
    (a, b) =>
      (a.status === "new" || a.status === "changed" ? 0 : 1) - (b.status === "new" || b.status === "changed" ? 0 : 1) ||
      String(b.firstSeen).localeCompare(String(a.firstSeen)) ||
      String(a.artistName).localeCompare(String(b.artistName))
  );
  const full = ordered.slice(0, FULL_CANDIDATES);
  for (const c of full) out.push(candidateBlock(c, regOf(c.adapter)), "");
  const rest = ordered.slice(FULL_CANDIDATES);
  if (rest.length) {
    out.push(`_${rest.length} more candidate${rest.length === 1 ? "" : "s"}, listed without detail:_`, "");
    for (const c of rest) {
      out.push(`- [ ] ${c.status === "new" || c.status === "changed" ? "🆕 " : ""}${plain(c.artistName)} — "${plain(c.release ?? c.title)}" · ${regOf(c.adapter)?.flag ?? ""} ${plain(c.adapter)} · ${c.kind} · ${code(c.tierRaw ?? "", 60)} <!-- fp:${c.fp} -->`);
    }
    out.push("");
  }

  out.push("### Watchlist — reported every run until it lands", "");
  for (const w of results.watch) out.push(watchLine(w, results));
  if (!results.watch.length) out.push("_Empty._");

  out.push("", "### Register health", "", healthTable(results));
  out.push("", manualSection(results, view.manualTicks), "");
  out.push(runDetails(results, view.hidden));

  let body = out.join("\n");
  if (withState) {
    let block;
    try {
      block = stateBlock(encodeState(view.state));
    } catch (e) {
      if (!(e instanceof StateTooLarge)) throw e;
      block = view.prevStateBlock ?? "";
    }
    body = `${body}\n\n${block}\n`;
  }
  return body;
}

/** Keep the body under the limit: first fewer full candidates, then fewer
 *  listed ones. The state block always survives whole. */
export function renderBodyWithin(results, view, opts) {
  let body = renderBody(results, view, opts);
  if (body.length <= BODY_LIMIT) return body;
  let keep = view.shown.length;
  while (body.length > BODY_LIMIT && keep > 0) {
    keep = Math.floor(keep * 0.8);
    const trimmed = { ...view, shown: view.shown.slice(0, keep) };
    body = renderBody(results, trimmed, opts);
    if (body.length <= BODY_LIMIT) {
      const note = `\n\n_${view.shown.length - keep} further candidate(s) are open but not printed — the issue body is capped at ${String(BODY_LIMIT).replace(/\B(?=(\d{3})+$)/g, ",")} characters. Their state is kept._\n`;
      return body.replace("### Watchlist", `${note}\n### Watchlist`);
    }
  }
  return body;
}

/** The notify comment (§5.3), or null when there is nothing to notify. */
export function renderComment(results, view) {
  if (!results.notify) return null;
  const fresh = view.shown.filter((c) => c.status === "new" || c.status === "changed");
  const day = results.dateLabelShort;
  const out = [];
  out.push(
    fresh.length
      ? `### 🏅 ${fresh.length} new certification lead${fresh.length === 1 ? "" : "s"} — ${day}`
      : `### 🏅 Certification watch — ${day}`
  );
  const regOf = (id) => results.registry.find((r) => r.id === id);
  for (const c of fresh.slice(0, 30)) {
    const reg = regOf(c.adapter);
    out.push(
      `- 🆕 ${plain(c.artistName)} — "${plain(c.release ?? c.title)}" · ${reg?.flag ?? ""} ${plain(reg?.programme ?? reg?.body ?? c.adapter)} · ${code(c.tierRaw ?? "", 80)}${c.dateRaw ? ` (${plain(String(c.dateRaw).slice(0, 20))})` : ""} · site: ${c.holding ? tierLabel(c.holding) : "none"}`
    );
  }
  if (fresh.length > 30) out.push(`- …and ${fresh.length - 30} more in the issue body.`);
  const other = results.notifyReasons.filter((r) => !/^(new|changed): /.test(r));
  for (const r of other) out.push(`- ${plain(r, 300)}`);
  const cleared = results.cleared.length
    ? results.cleared.map((c) => `${plain(c.artistName ?? c.artist)} — "${plain(c.release ?? c.title)}"`).join("; ")
    : "none";
  out.push(`Full detail in the issue body. Cleared since last time (the site caught up): ${cleared}.`);
  return out.join("\n");
}

/** report.md: the body without the state block. */
export const renderReport = (results, view) => renderBodyWithin(results, view, { withState: false });

/** Values for $GITHUB_OUTPUT (§2.6). */
export function githubOutputs(results, view) {
  const n = counts(results, view.shown);
  return {
    write_issue: String(!!results.writeIssue),
    notify: String(!!results.notify),
    open: String(n.open),
    new: String(n.new),
    not_read: String(n.notRead.length),
    has_drift: String(!!results.notify),
  };
}
