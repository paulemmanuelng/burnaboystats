import { describe, it, expect } from "vitest";
import { africaBoards } from "../app/lib/africaBoards";
import { statBoxes, HIGHLIGHT } from "../app/data/africasBiggest";
import { readFileSync } from "node:fs";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { allChartItems } from "../app/data/charts";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../app/data/daiDai";
import { updates } from "../app/data/updates";

/**
 * The phone's year boards are DERIVED from app/data/africasBiggest.ts, and
 * until 16 Sep 2026 the derivation read only entries[0] — so the 2026 row of
 * the most-streamed board named Tems alone while the same data (and the
 * desktop that reads it) marked Tems, Burna Boy and Wizkid joint first within
 * the count's ten-million resolution. The rule the data declares has to
 * survive the trip to the smaller screen.
 */
describe("mobile year boards honour the data's ties", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
  const board = africaBoards.find((b) => b.id === box.id)!;

  it("names every member of a tied leading group, in the data's order", () => {
    for (const [i, year] of (box.rows ?? []).entries()) {
      const group = [year.entries[0]];
      for (const e of year.entries.slice(1)) {
        if (!e.tie) break;
        group.push(e);
      }
      const row = board.rows[i];
      for (const e of group) expect(row.name, `${year.label}`).toContain(e.name);
      if (group.length > 1) {
        expect(row.sub).toContain("joint");
        expect(row.name).toMatch(/ & /);
      } else {
        expect(row.name).toBe(group[0].name);
        expect(row.sub).not.toContain("joint");
      }
    }
  });

  it("the running year names its leader and calls the lead", () => {
    // Paul retired the joint mark on 17 Sep 2026: the row carries the count's
    // leader, "Leads" (not "1st" — the year is not won yet), his total so far,
    // and gold when the leader is Burna Boy; the badge counts closed years only.
    const row = board.rows.find((r) => r.sub.includes("2026"))!;
    const data = box.rows!.find((r) => r.label === "2026")!;
    expect(row.name).toBe(data.entries[0].name);
    expect(row.value).toBe("Leads");
    expect(row.sub).toBe(`🇳🇬 2026 · ${data.entries[0].value} so far · in progress`);
    expect(row.his).toBe(data.entries[0].name === "Burna Boy");
    const closedWins = box.rows!.filter((r) => !r.inProgress && r.entries[0].name === "Burna Boy").length;
    const closedYears = box.rows!.filter((r) => !r.inProgress).length;
    // Both sides count closed years. The phone shipped "3 of 5 yrs": three
    // closed wins over five years, the running one among them.
    expect(board.badge).toBe(`${closedWins} of ${closedYears} yrs`);
  });
});

describe("a year board carries every year in full, not just its winner", () => {
  // The phone drew a year board as one row per year naming that year's winner,
  // so the ranking behind each year — which is the board — was not on the
  // screen at all. The desktop's StatBox has always drawn the full five per
  // year; `years` carries the same detail to the phone, and the year pills
  // keep the old summary by marking the years he took (Paul, 23 Sep 2026).
  const yearBoards = africaBoards.filter((b) => b.years);

  it("exists, and matches the data row for row", () => {
    expect(yearBoards.length).toBeGreaterThan(0);
    for (const b of yearBoards) {
      const box = statBoxes.find((x) => x.id === b.id)!;
      const rows = box.rows ?? [];
      expect(b.years!.length, b.id).toBe(rows.length);
      b.years!.forEach((y, i) => {
        const r = rows[i];
        expect(y.label, `${b.id} ${i}`).toBe(r.label);
        expect(y.entries.map((e) => e.name), `${b.id} ${y.label}`).toEqual(r.entries.map((e) => e.name));
        expect(y.entries.map((e) => e.value), `${b.id} ${y.label} values`).toEqual(
          r.entries.map((e) => e.value),
        );
        // Ranks are 01..N in the data's own order; the board never re-sorts.
        expect(y.entries.map((e) => e.rank)).toEqual(
          r.entries.map((_, j) => String(j + 1).padStart(2, "0")),
        );
      });
    }
  });

  it("marks his years, and marks his row inside each year", () => {
    for (const b of yearBoards)
      for (const y of b.years!) {
        expect(y.his, `${b.id} ${y.label}`).toBe(y.entries[0]?.name === HIGHLIGHT);
        for (const e of y.entries) expect(e.his, `${b.id} ${y.label} ${e.name}`).toBe(e.name === HIGHLIGHT);
      }
  });

  it("prints the running year's read date in words, never as an ISO string", () => {
    const running = yearBoards.flatMap((b) => b.years!).filter((y) => y.inProgress);
    expect(running.length, "a year board should have a year in progress").toBeGreaterThan(0);
    for (const y of running) {
      if (!y.asOf) continue;
      expect(y.asOf, `${y.label} read date`).not.toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(y.asOf).toMatch(/^\d{1,2} [A-Z][a-z]+ \d{4}$/);
    }
  });

  it("keeps the one-row-per-year summary too, because the pills are built from it", () => {
    for (const b of yearBoards) expect(b.rows.length).toBe(b.years!.length);
  });
});

describe("every artist on a year panel has a flag beside their name", () => {
  // Ayra Starr won third place in 2024 and places on no ranked board here, so
  // the flag index — which borrows from those boards' `sub` strings — had
  // nothing for her, and hers was the one row on the phone's year panels with
  // a blank where every other row had a country (Paul, 23 Sep 2026).
  it("has no blank flag, and Ayra Starr's is Nigeria's", () => {
    const blanks: string[] = [];
    for (const b of africaBoards)
      for (const y of b.years ?? [])
        for (const e of y.entries) if (!e.flag) blanks.push(`${b.id} ${y.label}: ${e.name}`);
    expect(blanks).toEqual([]);
    const ayra = africaBoards
      .flatMap((b) => b.years ?? [])
      .flatMap((y) => y.entries)
      .find((e) => e.name === "Ayra Starr");
    expect(ayra?.flag).toBe("🇳🇬");
  });
});

// ── Debug fixes, 24 Sep 2026 ───────────────────────────────────────────────

describe("the Global 200 board agrees with the chart data under it", () => {
  // The board typed Tyla's "Water" at No. 9 while her own chart page, reading
  // afrobeats.ts, said No. 6 (Billboard's chart history: peak 6, 2 Dec 2023),
  // and it left out Tems, whose featured turn on "Wait For U" peaked at No. 2
  // — though the Hot 100 board on the same page counts featured credits.
  const box = statBoxes.find((b) => b.id === "billboard-global-200-peak")!;
  const peakOf = (name: string): number | undefined => {
    const rows =
      name === HIGHLIGHT
        ? allChartItems.flatMap((r) => r.entries)
        : afrobeatsArtists.find((a) => a.name === name)?.charts.flatMap((r) => r.entries);
    const glb = (rows ?? []).filter((e) => e.c === "GLB").map((e) => e.peak);
    return glb.length ? Math.min(...glb) : undefined;
  };

  it("prints each artist's best Global 200 peak from the data", () => {
    for (const e of box.entries!) {
      const peak = peakOf(e.name);
      if (peak === undefined) continue; // Libianca and others off the board carry no rows here
      expect(e.value, e.name).toBe(`No. ${peak}`);
    }
  });

  it("leaves out no board artist who peaked higher than its last entry", () => {
    const last = Number(box.entries!.at(-1)!.value!.replace(/\D/g, ""));
    const missing = afrobeatsArtists
      .filter((a) => (peakOf(a.name) ?? Infinity) <= last)
      .filter((a) => !box.entries!.some((e) => e.name === a.name))
      .map((a) => `${a.name} (No. ${peakOf(a.name)})`);
    expect(missing).toEqual([]);
  });

  it("the FAQ answer states the same peaks as the board", () => {
    const page = readFileSync("app/records/africas-biggest/page.tsx", "utf8");
    const faq = page.match(/q: "What is the highest-charting African song on the Billboard Global 200\?",\s*a: "([^"]*)"/)?.[1] ?? "";
    expect(faq).toContain(`Tyla's “Water” (No. ${peakOf("Tyla")})`);
    expect(faq).toContain("Tems");
    // The line the site shipped, which this guard must refuse.
    expect(faq).not.toContain("Tyla's “Water” (No. 9)");
  });
});

describe("the Spotify Global note makes no all-time record claim", () => {
  // Owner-approved (24 Sep 2026): 37 days ties "WAP" but is nowhere near the
  // most days any song has spent at No. 1 on the chart; kworb's totals list
  // dozens above it. What the run holds is the 2026 record.
  const REFUSED = /WAP|most days any song has (ever )?spent/;
  const note = statBoxes.find((b) => b.id === "highest-spotify-global-peak")!.note ?? "";

  it("says the 2026 record, from the same total the Dai Dai page reads", () => {
    expect(note).toContain(`${DAI_DAI_SPOTIFY_NO1_DAYS} days in total`);
    expect(note).toContain("the most days at No. 1 by any song in 2026");
    expect(note).toContain("first and only African artist to reach No. 1");
    expect(note).not.toMatch(REFUSED);
  });

  it("refuses the lines the site shipped, on the board and in the feed", () => {
    expect(
      "tying “WAP” by Cardi B and Megan Thee Stallion for the most days any song has spent on top of the chart.",
    ).toMatch(REFUSED);
    const feed = updates.filter((u) => u.text.includes("Spotify") && REFUSED.test(u.text));
    expect(feed.map((u) => u.date)).toEqual([]);
  });
});
