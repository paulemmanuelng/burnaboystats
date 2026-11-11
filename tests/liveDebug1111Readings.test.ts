import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { statBoxes, rankOf, STREAMS_200M_READ_ON } from "../app/data/africasBiggest";

// 11 Nov 2026: the 200M-songs board recounted on kworb's artist pages
// (docs/sourcing/BOARD-READINGS-2026-11-11.md), on Paul's ask to update the
// boards that count each artist's songs past a stream mark.
const DOC = readFileSync("docs/sourcing/BOARD-READINGS-2026-11-11.md", "utf8");
const b = statBoxes.find((x) => x.id === "most-200m-stream-songs")!;

describe("Africa's Biggest: the 200M-songs board recounted on kworb on 11 Nov", () => {
  it("Rema's eighth ties him with Tems on eight; every other count stood", () => {
    expect(STREAMS_200M_READ_ON).toBe("2026-11-11");
    expect(b.entries!.map((e) => [e.name, e.value])).toEqual([["Burna Boy", "15"], ["Tems", "8"], ["Rema", "8"], ["Tyla", "6"], ["CKay & Seether", "4"]]);
    expect(b.entries!.map((_, i, es) => rankOf(es, i))).toEqual([1, 2, 2, 4, 5]);
    // The board marks a tie in the sub, as it did for Tyla and Rema on six
    // before 21 Oct 2026 (it has no "=n" joint marks).
    expect(b.jointMarks).toBeUndefined();
    expect(b.entries!.filter((e) => e.sub?.endsWith(" · tied")).map((e) => e.name)).toEqual(["Tems", "Rema", "CKay & Seether"]);
    for (const s of ["| Burna Boy | 2026/11/10 | **15** | 15 | 9 | 9 |", "| Tems | 2026/11/09 | **8** | 8 | 6 | 5 |", "| Rema | 2026/11/10 | **8** | 7 | 3 | 2 |", "| Tyla | 2026/11/10 | **6** | 6 | 6 | 6 |", "204,783,009", "300,831,976"]) expect(DOC, s).toContain(s);
  });

  it("the note gives the 300M tier as read: Burna Boy nine, Tyla and Tems six each", () => {
    expect(b.note).toContain("nine deep in it");
    expect(b.note).toContain("The next-deepest are Tyla and Tems, with six each.");
    expect(b.source).toContain("“love nwantiti” (210M)");
    expect(b.source).toContain("“Careless Whisper” (211M)");
    expect(b.source).toContain("read 11 November 2026");
  });

  it("negative control: the board origin/main served on 11 Nov 2026 fails", () => {
    expect(b.entries!.find((e) => e.name === "Rema")!.value).not.toBe("7");
    expect(b.note).not.toContain("then Tems with five");
    expect(b.source).not.toContain("(209M)");
    expect(b.source).not.toContain("read 4 November 2026");
  });
});
