import { statBoxes, HIGHLIGHT, type LeaderboardBox } from "../data/africasBiggest";

/**
 * The fourteen boards, shaped for mobile screen 16.
 *
 * From designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html → `africa()`.
 * Two things there are worth stating, because both are decisions rather than
 * formatting:
 *
 *  - A **year board becomes one row per year**, naming that year's winner, with
 *    "1st" as the value and an em dash where the year isn't over. It is not a
 *    ranking of artists, so it never counts toward "he leads" — the desktop's
 *    `heLeads` is list-only — and it carries its own badge instead.
 *  - The **badge** states his standing on each board at a glance: LEADS when he
 *    tops it, otherwise his position, so a reader can scan fourteen boards
 *    without reading fourteen lists.
 *
 * Everything is derived from app/data/africasBiggest.ts.
 */

export interface BoardRow {
  rank: string;
  name: string;
  sub: string;
  value: string;
  /** His row — gold wherever it falls, which is the point of the page. */
  his: boolean;
}

export interface Board {
  id: string;
  title: string;
  meta: string;
  note?: string;
  rows: BoardRow[];
  badge: string;
  /** LEADS reads as a win and takes the filled gold pill; a position doesn't. */
  leads: boolean;
}

/**
 * Country flags aren't carried on the year boards, so they're borrowed from the
 * ranked boards, where every artist's `sub` already opens with one.
 */
function flagIndex(): Map<string, string> {
  const flags = new Map<string, string>();
  for (const box of statBoxes) {
    for (const e of box.entries ?? []) {
      const flag = /^(\p{RI}\p{RI})/u.exec(e.sub ?? "")?.[1];
      if (flag && !flags.has(e.name)) flags.set(e.name, flag);
    }
  }
  return flags;
}

function yearBoard(box: LeaderboardBox, flags: Map<string, string>): Board {
  const years = box.rows ?? [];
  const rows: BoardRow[] = years.map((r, i) => {
    const winner = r.entries[0];
    const streams = winner?.value ? ` · ${winner.value} streams` : "";
    return {
      rank: String(i + 1).padStart(2, "0"),
      name: winner?.name ?? "—",
      sub: `${flags.get(winner?.name ?? "") ?? ""} ${r.label ?? ""}${
        r.inProgress ? " · in progress" : streams
      }`.trim(),
      // An em dash, not a placing: the year hasn't finished, so no one has won
      // it yet. Absence, never zero.
      value: r.inProgress ? "—" : "1st",
      his: winner?.name === HIGHLIGHT && !r.inProgress,
    };
  });
  const won = rows.filter((r) => r.his).length;
  return {
    id: box.id,
    title: box.title,
    meta: box.meta,
    note: box.note,
    rows,
    badge: `${won} of ${years.length} yrs`,
    leads: false,
  };
}

function listBoard(box: LeaderboardBox): Board {
  const entries = box.entries ?? [];
  const pos = entries.findIndex((e) => e.name === HIGHLIGHT);
  const leads = pos === 0;
  return {
    id: box.id,
    title: box.title,
    meta: box.meta,
    note: box.note,
    rows: entries.map((e, i) => ({
      rank: String(i + 1).padStart(2, "0"),
      name: e.name,
      sub: e.sub ?? "",
      value: e.value ?? "",
      his: e.name === HIGHLIGHT,
    })),
    badge: leads ? "Leads" : pos < 0 ? "—" : `No. ${pos + 1}`,
    leads,
  };
}

export const africaBoards: Board[] = statBoxes.map((box) => {
  const flags = flagIndex();
  return box.layout === "year" ? yearBoard(box, flags) : listBoard(box);
});

/** Boards he tops. Year boards are excluded by design — see the note above. */
export const boardsHeLeads = africaBoards.filter((b) => b.leads).length;

/**
 * Boards another artist tops. Not simply `total - leads`: a year board has no
 * single leader, so it belongs to neither side — which is exactly why the
 * design's footer sentence names all three groups.
 */
export const boardsOthersLead = africaBoards.filter(
  (b) => !b.leads && b.rows.some((r) => !r.his) && !b.badge.endsWith("yrs")
).length;

/** His position on the worldwide YouTube-audience board, e.g. "7th". */
export const youtubeWorldRank = (() => {
  const board = africaBoards.find((b) => b.id === "youtube-audience-world");
  const i = board?.rows.findIndex((r) => r.his) ?? -1;
  if (i < 0) return "—";
  const n = i + 1;
  const suffix = n % 10 === 1 && n % 100 !== 11 ? "st"
    : n % 10 === 2 && n % 100 !== 12 ? "nd"
      : n % 10 === 3 && n % 100 !== 13 ? "rd"
        : "th";
  return `${n}${suffix}`;
})();
