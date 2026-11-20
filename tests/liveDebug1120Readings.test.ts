import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { statBoxes, rankOf, STREAMS_200M_READ_ON } from "../app/data/africasBiggest";

// 20 Nov 2026: the 200M-songs board recounted on kworb's artist pages, the
// way the 11 Nov count was made (docs/sourcing/BOARD-READINGS-2026-11-20.md,
// its second section).
const DOC = readFileSync("docs/sourcing/BOARD-READINGS-2026-11-20.md", "utf8");
const b = statBoxes.find((x) => x.id === "most-200m-stream-songs")!;

describe("Africa's Biggest: the 200M-songs board recounted on kworb on 20 Nov", () => {
  it("every count stood; the doc has the counts", () => {
    expect(STREAMS_200M_READ_ON).toBe("2026-11-20");
    expect(b.entries!.map((e) => [e.name, e.value])).toEqual([["Burna Boy", "15"], ["Tems", "8"], ["Rema", "8"], ["Tyla", "6"], ["CKay & Seether", "4"]]);
    expect(b.entries!.map((_, i, es) => rankOf(es, i))).toEqual([1, 2, 2, 4, 5]);
    for (const s of [
      "| Burna Boy | 2026/11/19 | **15** | 15 | 9 | 9 |",
      "| Tems | 2026/11/19 | **8** | 8 | 6 | 6 |",
      "| Rema | 2026/11/19 | **8** | 8 | 3 | 3 |",
      "| Tyla | 2026/11/19 | **6** | 6 | 6 | 6 |",
      "| CKay | 2026/11/19 | **4** | 4 | 3 | 3 |",
      "| Seether | 2026/11/16 | **4** | 4 | 2 | 2 |",
    ])
      expect(DOC, s).toContain(s);
  });

  it("the source line quotes the two near-the-line songs at the 20 Nov reading", () => {
    expect(b.note).toContain("nine deep in it");
    expect(b.note).toContain("The next-deepest are Tyla and Tems, with six each.");
    expect(b.source).toContain("“love nwantiti” (211M)");
    expect(b.source).toContain("“Careless Whisper” (211M)");
    expect(b.source).toContain("read 20 November 2026");
    for (const s of ["210,586,314, so **211M**", "211,198,572, so **211M**"]) expect(DOC, s).toContain(s);
  });

  it("negative control: the board origin/main served on 20 Nov 2026 fails", () => {
    expect(b.source).not.toContain("“love nwantiti” (210M)");
    expect(b.source).not.toContain("read 11 November 2026");
  });
});
