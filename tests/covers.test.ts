import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper shared with the stats bot
import { titleKey } from "../scripts/stats-lib.mjs";
import { coverFor, monogramFor } from "../app/lib/covers";
import { liveCharts } from "../app/data/liveCharts";
import { albums } from "../app/data/albums";

// Cover art on /live-charts is resolved by normalising a title and looking it
// up. Two things can break it silently: the normaliser drifting from the one
// the chart sweeps use, and a hand-written key that no title can ever produce.

describe("cover lookup", () => {
  it("normalises titles the same way the chart sweeps do", () => {
    // covers.ts keeps a local copy of this logic. If the two drift, every
    // lookup quietly starts missing — no error, just monograms everywhere.
    const samples = [
      "On The Low",
      "I Told Them...",
      "For My Hand (feat. Ed Sheeran)",
      "Real Life (w/ Stormzy)",
      "4 Kampé II",
      "L.I.F.E - Leaving an Impact for Eternity",
      "WE PRAY",
    ];
    // Reaching the same cover for a title and its normalised form proves the
    // two normalisers agree on that title.
    for (const s of samples) {
      expect(coverFor(s), s).toBe(coverFor(titleKey(s)));
    }
  });

  it("resolves a track to the cover of the album it was released on", () => {
    const africanGiant = albums.find((a) => a.title === "African Giant")!.cover;
    expect(coverFor("Gbona")).toBe(africanGiant);
    expect(coverFor("Anybody")).toBe(africanGiant);
    expect(coverFor("Gum Body")).toBe(africanGiant);

    const loveDamini = albums.find((a) => a.title === "Love, Damini")!.cover;
    expect(coverFor("It's Plenty")).toBe(loveDamini);
    expect(coverFor("Common Person")).toBe(loveDamini);
  });

  it("resolves an album by its own name, including the spelled-out debut", () => {
    expect(coverFor("African Giant")).toBe(albums.find((a) => a.title === "African Giant")!.cover);
    // kworb writes the debut in full; albums.ts calls it "L.I.F.E".
    expect(coverFor("L.I.F.E - Leaving an Impact for Eternity")).toBe(
      albums.find((a) => a.title === "L.I.F.E")!.cover
    );
  });

  it("covers features on other artists' records", () => {
    // These can never come from albums.ts — the artwork belongs to the host
    // artist's release.
    for (const t of ["Ginger", "Location", "WE PRAY", "My Oasis", "Sponono", "Laho II", "Baddest", "Special Someone", "4 Kampé II"]) {
      expect(coverFor(t), `no cover for ${t}`).toBeTruthy();
    }
  });

  it("has art for nearly every charting release", () => {
    // Not asserted at 100%: kworb surfaces new songs on its own schedule, and a
    // freshly-charting track with no art yet is expected, not a regression. A
    // floor still catches the lookup breaking wholesale.
    const withArt = liveCharts.filter((r) => coverFor(r.title)).length;
    expect(withArt / liveCharts.length).toBeGreaterThan(0.85);
  });

  it("falls back to a single upper-case letter", () => {
    expect(monogramFor("Ginger")).toBe("G");
    expect(monogramFor("  spaced")).toBe("S");
    expect(monogramFor("")).toBe("?");
  });
});
