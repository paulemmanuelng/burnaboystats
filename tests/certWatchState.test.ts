// @vitest-environment node
import { describe, it, expect } from "vitest";
import {
  mergeRun,
  extractState,
  encodeState,
  stateBlock,
  readTicks,
  readManualTicks,
  isoWeek,
  emptyState,
  StateTooLarge,
  STATE_CAP,
} from "../scripts/cert-watch/state.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { musiccanada, parseAwards } from "../scripts/cert-watch/adapters/musiccanada.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/**
 * Dedupe with no repo writes (SPEC §6). The candidate used throughout is the
 * REAL Music Canada Dai Dai row (id 89702) against the site as it stood before
 * 2c7c709f added the Canadian plaque — a labelled edit to the site.
 */
const before = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["CA|"]);
const now = frozenIndex();
const mcRow = parseAwards(fixture("musiccanada/awards-p1-2026-09-23.json")).filter((r) => r.rowId === "89702");
const candidatesAgainst = (index: ReturnType<typeof frozenIndex>, rows = mcRow) =>
  evaluateRows(musiccanada, rows, { index, liveArtists: LIVE_ARTISTS, config }).candidates;

const base = {
  date: new Date("2026-09-24T06:17:00Z"),
  runId: "1",
  ladders: { musiccanada: "standard" },
  health: { musiccanada: { status: "ok" } },
  automated: new Set(["musiccanada"]),
  watchReadings: {},
  cursors: { musiccanada: { lastId: 89710 } },
};
type State = ReturnType<typeof emptyState>;
const merge = (prev: State | null, today: unknown[], extra: Record<string, unknown> = {}) =>
  mergeRun({ ...base, prev, prevStatus: prev ? "ok" : "missing", today, ticks: new Set(), index: before, ...extra });

describe("state", () => {
  it("round-trips through the issue body, even when a row contains '-->'", () => {
    const first = merge(null, candidatesAgainst(before));
    const body = `Row: \`id 1 · title --> <!-- cert-watch:state:v1\nZm9v\n-->\`\n\n${stateBlock(encodeState(first.next))}\n`;
    const back = extractState(body);
    expect(back.status).toBe("ok");
    expect(back.state!.open).toEqual(first.next.open);
  });

  it("a new candidate notifies; the same fingerprint next run does not", () => {
    const first = merge(null, candidatesAgainst(before));
    expect(first.candidates[0].status).toBe("new");
    expect(first.notifyReasons.some((r) => r.startsWith("new: Burna Boy"))).toBe(true);
    const second = merge(first.next, candidatesAgainst(before));
    expect(second.candidates[0].status).toBe("open");
    expect(second.notifyReasons).toEqual([]);
    expect(second.candidates[0].firstSeen).toBe(first.candidates[0].firstSeen);
  });

  it("a changed reading is a new fingerprint and notifies", () => {
    const first = merge(null, candidatesAgainst(before));
    // LABELLED EDIT to the register row: double → triple platinum.
    const row = { ...mcRow[0], tierRaw: "award_cert-triple-platinum-single", reading: { tier: "Platinum", x: 3 } };
    const next = merge(first.next, candidatesAgainst(before, [row]));
    expect(next.candidates[0].status).toBe("changed");
    expect(next.candidates[0].fp).not.toBe(first.candidates[0].fp);
    expect(next.notifyReasons.some((r) => r.startsWith("changed:"))).toBe(true);
  });

  it("a ticked box dismisses the candidate until its reading changes", () => {
    const first = merge(null, candidatesAgainst(before));
    const fp = first.candidates[0].fp;
    const body = `- [x] 🆕 **Burna Boy — "Dai Dai"** · 🇨🇦 Canada · Music Canada · **NEW PLAQUE** <!-- fp:${fp} -->`;
    expect(readTicks(body)).toEqual(new Set([fp]));
    const second = merge(first.next, candidatesAgainst(before), { ticks: readTicks(body) });
    expect(second.candidates).toEqual([]);
    expect(second.dismissedCount).toBe(1);
    expect(second.notifyReasons).toEqual([]);
    expect(second.next.dismissed[fp]).toBe("2026-09-24");
  });

  it("clears a candidate once the site catches up, even when the row is not re-read", () => {
    const first = merge(null, candidatesAgainst(before));
    const caught = mergeRun({ ...base, prev: first.next, prevStatus: "ok", today: [], ticks: new Set(), index: now });
    expect(caught.candidates).toEqual([]);
    expect(caught.cleared.map((c) => c.release)).toEqual(["Dai Dai"]);
  });

  it("keeps an open candidate when its register was not read today", () => {
    const first = merge(null, candidatesAgainst(before));
    const down = merge(first.next, [], { health: { musiccanada: { status: "challenge" } } });
    expect(down.candidates).toHaveLength(1);
    expect(down.candidates[0].notReRead).toBe("register not read today");
    // …and the cursor does not move for a register that was not read.
    const moved = merge({ ...first.next, cursors: { musiccanada: { lastId: 1 } } }, [], { health: { musiccanada: { status: "challenge" } } });
    expect(moved.next.cursors.musiccanada).toEqual({ lastId: 1 });
  });

  it("a corrupt block is a reset, with a notice", () => {
    expect(extractState("<!-- cert-watch:state:v1\n!!!not base64!!!\n-->").status).toBe("corrupt");
    const r = mergeRun({ ...base, prev: null, prevStatus: "corrupt", today: [], ticks: new Set(), index: before });
    expect(r.next.reset).toBe(true);
    expect(r.notifyReasons[0]).toMatch(/State could not be read/);
  });

  it("refuses to write a truncated state", () => {
    const big = { ...emptyState(), dismissed: Object.fromEntries(Array.from({ length: 2000 }, (_, i) => [`${i}`.padStart(16, "0"), "2026-09-24"])) };
    expect(() => encodeState(big)).toThrow(StateTooLarge);
    expect(STATE_CAP).toBe(30000);
  });

  it("manual ticks belong to one ISO week", () => {
    expect(isoWeek(new Date("2026-09-24T06:17:00Z"))).toBe("2026-W39");
    expect(isoWeek(new Date("2026-09-28T06:17:00Z"))).toBe("2026-W40");
    const body = "- [x] 🇬🇧 **BPI** — … <!-- manual:uk:2026-W39 -->\n- [ ] 🇧🇪 **Ultratop** — … <!-- manual:be:2026-W39 -->";
    expect(readManualTicks(body, "2026-W39")).toEqual(new Set(["uk"]));
    expect(readManualTicks(body, "2026-W40")).toEqual(new Set());
  });

  it("counts a register's bad runs and notifies on the third, and on recovery", () => {
    let s: State | null = emptyState();
    const reasons: string[][] = [];
    for (const status of ["challenge", "challenge", "challenge", "ok"]) {
      const r: ReturnType<typeof merge> = merge(s, [], { health: { musiccanada: { status } } });
      reasons.push(r.notifyReasons);
      s = r.next;
    }
    expect(reasons[0]).toEqual([]);
    expect(reasons[2].join(" ")).toMatch(/not read 3 runs running/);
    expect(reasons[3].join(" ")).toMatch(/recovered/);
  });
});
