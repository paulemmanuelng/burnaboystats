import { describe, it, expect } from "vitest";
import {
  oneRecording500,
  recordingKey500,
  SAME_RECORDING_TOLERANCE_500,
  ranked500,
  type Counted500,
} from "../app/data/african500m";

// The real rows, from Amaarae's kworb page (21UPYSRWFKwtqvSAnFnSvS) in the
// stats bot's refresh of 19 Nov 2026 20:50 UTC (cc1f342f). That refresh listed
// her as an eighth artist with "two" songs past 500M: one remix of her
// "SAD GIRLZ LUV MONEY" that kworb lists under two Spotify track ids, with
// near-identical play counts. It went live on /records/africas-biggest and
// failed the seven-row guard in CI.
const SAD_FEAT: Counted500 = {
  id: "0ABKtkw5dRWJwHH5Q3dbws",
  title: "SAD GIRLZ LUV MONEY Remix (feat. Kali Uchis and Moliy)",
  streams: 629_968_438,
  kworbStar: false,
};
const SAD_DASH: Counted500 = {
  id: "4iGXJxCrsmyfHZlvvp4aUK",
  title: "SAD GIRLZ LUV MONEY - Remix",
  streams: 629_473_108,
  kworbStar: false,
};

describe("one recording counts once (19 Nov 2026: one remix under two track ids)", () => {
  it("the two titles share one recording key, and their counts sit within the tolerance", () => {
    expect(recordingKey500(SAD_FEAT.title)).toBe(recordingKey500(SAD_DASH.title));
    expect(SAD_FEAT.streams - SAD_DASH.streams).toBeLessThanOrEqual(SAD_FEAT.streams * SAME_RECORDING_TOLERANCE_500);
  });

  it("folds the pair into the higher row, the other kept as its copy, in either order", () => {
    for (const rows of [[SAD_FEAT, SAD_DASH], [SAD_DASH, SAD_FEAT]]) {
      const out = oneRecording500(rows);
      expect(out).toHaveLength(1);
      expect(out[0].id).toBe(SAD_FEAT.id);
      expect(out[0].streams).toBe(SAD_FEAT.streams);
      expect(out[0].copies).toEqual([{ id: SAD_DASH.id, title: SAD_DASH.title, streams: SAD_DASH.streams }]);
    }
  });

  it("different recordings still count separately", () => {
    // A "(with …)" billing is part of the version: Rema's original and the
    // Selena Gomez version are two recordings.
    const calm: Counted500 = { id: "calm-down-original-000", title: "Calm Down", streams: 900_000_000, kworbStar: true };
    const calmSG: Counted500 = { id: "calm-down-selena-00000", title: "Calm Down (with Selena Gomez)", streams: 2_000_000_000, kworbStar: true };
    expect(oneRecording500([calm, calmSG])).toHaveLength(2);
    // The same key with counts far apart is two recordings, not one.
    const far: Counted500 = { ...SAD_DASH, id: "far-apart-count-000000", streams: 520_000_000 };
    expect(oneRecording500([SAD_FEAT, far])).toHaveLength(2);
    // Two different songs never merge.
    const other: Counted500 = { id: "shake-it-to-the-max-00", title: "SHAKE IT TO THE MAX (FLY) - REMIX", streams: 523_545_007, kworbStar: false };
    expect(oneRecording500([SAD_FEAT, other])).toHaveLength(2);
  });

  // On the board's old rule, the snapshot of 19 Nov 2026 listed Amaarae as an
  // eighth artist on this one remix (her page began listing both ids that
  // day), and had counted Moliy at three songs, level with Burna Boy, since
  // her page began listing both in mid-October. Counted once, Amaarae has one
  // song past 500M and Moliy two (the remix and “SHAKE IT TO THE MAX (FLY) -
  // REMIX”). The board's data moves, so this checks the rule on every counted
  // row rather than pinning the names.
  it("the live data: no counted row, listed or not, counts one recording twice", () => {
    for (const r of ranked500) {
      for (const [i, a] of r.songs.entries()) {
        for (const b of r.songs.slice(i + 1)) {
          const sameKey = recordingKey500(a.title) === recordingKey500(b.title);
          const close = Math.abs(a.streams - b.streams) <= Math.max(a.streams, b.streams) * SAME_RECORDING_TOLERANCE_500;
          expect(sameKey && close, `${r.name}: “${a.title}” and “${b.title}”`).toBe(false);
        }
      }
    }
  });
});
