// Parse BuzzJack's transcriptions of the BPI's weekly certification lists.
//
// Pure: text in, entries out. No network, no files — tests/plaqueRadar.test.ts
// feeds it fixture posts.
//
// The thread has used four layouts since 2022, and all four are read here:
//
//   1. BPI's own export, tab-separated (most of 2022 to 2024):
//        Burna Boy<TAB>City Boys<TAB>Atlantic<TAB>Silver<TAB>Single<TAB>05.01.2024<TAB>25.08.2023
//      artist, title, label, tier, format, CERTIFICATION date, RELEASE date.
//   2. A dated master post (2022): "07 January 2022", "Songs", then
//        "Ed Sheeran - Galway Girl - 4x Platinum"
//   3. "Full certifications list for 2nd January 2026:" (2025 to date), with
//      SINGLES: / ALBUMS: and PLATINUM & MULTI-PLATINUM / GOLD / SILVER headers,
//      then "Oasis - Don't Look Back In Anger (7x)".
//   4. "Certifications announced via the BRITs Twitter account:" and "Full list
//      of certifications from this week" (2023-24), rows written
//      "Ed Sheeran - The A Team (5X PLATINUM)". These carry no date of their
//      own, so they take the Friday on or before the post, because the BPI
//      dates its awards on Fridays. "All certifications for 3rd November
//      2023:" carries its date and is read like layout 3.

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const TIER_WORD = /^(?:(\d+)\s*x\s+)?(silver|gold|platinum|diamond)(?:\s*\(?\s*(\d+)\s*x\s*\)?)?$/i;
const LEVEL = { silver: "Silver", gold: "Gold", platinum: "Platinum", diamond: "Diamond" };

const pad = (n) => String(n).padStart(2, "0");

/** "2nd January 2026" / "07 January 2022" / "7 Sept 2026" -> "2026-01-02". */
export function parseLongDate(s) {
  const m = String(s).match(/(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})\.?,?\s+(\d{4})/);
  if (!m) return null;
  const mon = MONTHS.indexOf(m[2].slice(0, 3).toLowerCase());
  if (mon < 0) return null;
  return `${m[3]}-${pad(mon + 1)}-${pad(Number(m[1]))}`;
}

/** "05.01.2024" -> "2024-01-05". */
export function parseDotDate(s) {
  const m = String(s).match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : null;
}

/** The Friday on or before an ISO date or timestamp. */
export function fridayOnOrBefore(iso) {
  const d = new Date(`${String(iso).slice(0, 10)}T00:00:00Z`);
  const back = (d.getUTCDay() - 5 + 7) % 7;
  d.setUTCDate(d.getUTCDate() - back);
  return d.toISOString().slice(0, 10);
}

/** "Platinum 2x" / "2x Platinum" / "Silver" -> { level, x }. */
export function parseTierWord(s) {
  const m = String(s).trim().match(TIER_WORD);
  if (!m) return null;
  const x = Number(m[1] ?? m[3] ?? 1);
  return { level: LEVEL[m[2].toLowerCase()], x: x > 1 ? x : 1 };
}

const clean = (s) =>
  String(s)
    .replace(/ /g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[ \t]+$/g, "")
    .replace(/^\s+/, "");

/** Strip a trailing "(7x)" and the thread's working marks from a title. */
function splitMultiple(title) {
  let t = title.trim().replace(/\s*[*†]+$/, "");
  let x = 1;
  const m = t.match(/\s*\(\s*(\d+)\s*x\s*\)\s*$/i);
  if (m) {
    x = Number(m[1]);
    t = t.slice(0, m.index).trim();
  }
  return { title: t, x };
}

/**
 * Parse one post. Returns certification entries:
 *   { date, credit, title, format: "single"|"album", level, x, releaseDate?, layout }
 */
export function parsePost(post) {
  const out = [];
  const lines = String(post.text ?? "").split(/\r?\n/).map(clean);
  let date = null;
  let format = null;
  let tier = null;
  let structural = false;
  let undated = false;
  const dash = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    // Layout 1 — the BPI's own tab export. Self-dated, so always trusted.
    const cells = raw.split("\t").map((c) => c.trim());
    if (cells.length >= 6 && /^(single|album)$/i.test(cells[4]) && parseDotDate(cells[5])) {
      const t = parseTierWord(cells[3]);
      if (t && t.level !== "Diamond" && cells[0] && cells[1]) {
        out.push({
          date: parseDotDate(cells[5]),
          credit: cells[0],
          title: cells[1],
          format: cells[4].toLowerCase(),
          level: t.level,
          x: t.x,
          releaseDate: parseDotDate(cells[6] ?? "") ?? undefined,
          layout: "tab",
        });
      }
      continue;
    }

    const full = line.match(/^(?:full\s+|all\s+)?certifications?\b[^:]{0,20}?\bfor\s+(\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]{3,9}\.?\s+\d{4})\s*:?\s*$/i);
    if (full && parseLongDate(full[1])) {
      date = parseLongDate(full[1]);
      undated = false;
      structural = true;
      format = null;
      tier = null;
      continue;
    }
    if (line.length < 110 && /^(?:full\s+list\s+of\s+certifications|all\s+certifications|certifications?)\b/i.test(line) && /\b(?:this\s+week|today|announced)\b/i.test(line)) {
      date = fridayOnOrBefore(post.date);
      undated = true;
      structural = true;
      format = null;
      tier = null;
      continue;
    }
    if (/^\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]{3,9}\.?\s+\d{4}\s*:?$/.test(line)) {
      date = parseLongDate(line);
      undated = false;
      structural = true;
      format = null;
      tier = null;
      continue;
    }
    if (/^(singles|songs|single)\s*:?$/i.test(line)) { format = "single"; tier = null; structural = true; continue; }
    if (/^albums?\s*:?$/i.test(line)) { format = "album"; tier = null; structural = true; continue; }
    if (/^(music\s+)?(dvds?|videos?)\s*:?$/i.test(line)) { format = null; tier = null; continue; }
    if (/^breakthrough\b/i.test(line)) { tier = null; continue; }
    const hdr = line.match(/^(platinum(?:\s*(?:&|and)\s*multi-?platinum)?|multi-?platinum|gold|silver)\s*:?(?:\s|$)/i);
    if (hdr && line.length < 40 && !/\s[-–—]\s/.test(line)) {
      tier = /plat/i.test(hdr[1]) ? "Platinum" : LEVEL[hdr[1].toLowerCase()];
      continue;
    }

    // Layouts 2 and 3 — "Artist - Title - Tier" or "Artist - Title (7x)".
    if (!format || !date) continue;
    const parts = line.replace(/\t+/g, " - ").split(/\s+[-–—]\s+/);
    if (parts.length < 2) continue;
    const rest = parts.slice(1).join(" - ");
    const paren = rest.match(/\s*\(\s*(?:(\d+)\s*x\s+)?(platinum|gold|silver|diamond|breakthrough)\s*\)\s*$/i);
    const last = parseTierWord(parts[parts.length - 1]);
    if (paren) {
      const level = LEVEL[paren[2].toLowerCase()];
      if (!level || level === "Diamond") continue;
      const x = Number(paren[1] ?? 1);
      dash.push({ date, credit: parts[0], title: rest.slice(0, paren.index).trim(), format, level, x: x > 1 ? x : 1, layout: undated ? "twitter" : "list" });
    } else if (last && parts.length >= 3) {
      if (last.level === "Diamond") continue;
      dash.push({ date, credit: parts[0], title: parts.slice(1, -1).join(" - "), format, level: last.level, x: last.x, layout: "dash" });
    } else if (tier) {
      const { title, x } = splitMultiple(rest);
      dash.push({ date, credit: parts[0], title, format, level: tier, x: tier === "Platinum" ? x : 1, layout: undated ? "twitter" : "list" });
    }
  }
  // Chat that happens to contain "Artist - Title" is not a list: a dash-layout
  // post has to carry its own headers and at least a handful of rows.
  if (structural && dash.length >= 3) out.push(...dash);
  return out;
}

/** Parse many posts; each entry keeps a pointer back to its post. */
export function parsePosts(posts) {
  const out = [];
  for (const p of posts) {
    for (const e of parsePost(p)) out.push({ ...e, credit: e.credit.trim(), title: e.title.trim(), post: p.id, page: p.page, year: p.year });
  }
  return out;
}
