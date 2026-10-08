import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { describe, it, expect, vi } from "vitest";
import { statBoxes, EAS_READING, EAS_STREAMS_COUNTED_TO } from "../app/data/africasBiggest";
import { updates } from "../app/data/updates";
import { pageFaqs } from "../app/records/africas-biggest/page";

/**
 * The best-selling board, re-read 8 Oct 2026: ChartMasters' Best-Selling
 * Artists of All-Time board, all 1,014 rows through the page's own paged table
 * (a fan's "TOTAL EAS" table on X was the lead; it matched to the digit).
 *
 * The figures below are typed from that read, not from EAS_READING, so a typo
 * in the reading cannot balance against itself here. A later re-read changes
 * EAS_READING and this file's pins with it; the 8 Oct feed entry is a dated log
 * line and keeps its own day's figures whatever the board says later.
 */
const board = statBoxes.find((b) => b.id === "best-selling-african-artist-eas")!;
const BEST_SELLING = "Who is the best-selling African artist of all time?";
const answer = pageFaqs.find((f) => f.q === BEST_SELLING)!.a;

/**
 * The 30 Sep reading as it was live until 8 Oct: the rows and note from
 * d1fdedc0 (30 Sep), and the source line as c2e52670 rewrote it on 1 Oct, with
 * its stamp filled in.
 */
const SHIPPED_30_SEP = {
  entries: `{ name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "15.34M" },`,
  note: "Burna Boy is the best-selling African artist of all time, and his lead over Wizkid, now past 15 million equivalent album sales himself, has stretched from about 30,000 to some 339,000 across the “Dai Dai” run. Asake is the third African artist on ChartMasters' 696-name board. Read the scope with the figure: these three are the only artists from any African country on it (the board also tags Colombia's Beéle, 11.02M, as Afrobeats).",
  source:
    "Total equivalent album sales (EAS) on ChartMasters' daily Best-Selling Artists of All-Time board, all 696 rows read 30 September 2026: Burna Boy 15,341,000 (rank 532), Wizkid 15,002,000 (rank 538), Asake 11,445,000 (rank 638). Burna Boy's and Wizkid's streams are both stamped 28 September, a same-date pair; Asake's are still stamped 18 September, so his figure trails his real total by some ten days of streams. ChartMasters has not completed a CSPC sales study for any of the three, so all three totals are streaming-only estimates that would understate a full sales count. Artists are counted by nationality: Akon (rank 501, 16,736,000) is on the board, but he is an American artist, as ChartMasters also lists him, so he is not in this comparison.",
};

describe("best-selling board: the 8 Oct 2026 reading", () => {
  it("holds the read's rows, every African artist on the board in board order", () => {
    expect(EAS_READING.readOn).toBe("2026-10-08");
    expect(EAS_READING.boardSize).toBe(1014);
    expect(EAS_READING.african.map((r) => [r.name, r.eas, r.rank, r.stamped])).toEqual([
      ["Burna Boy", 15_414_000, 533, "2026-10-06"],
      ["Wizkid", 15_060_000, 538, "2026-10-06"],
      ["Asake", 11_445_000, 638, "2026-09-18"],
      ["Rema", 9_921_000, 704, "2026-10-06"],
      ["Davido", 9_307_000, 718, "2026-10-06"],
      ["Omah Lay", 7_423_000, 775, "2026-10-06"],
      ["Fireboy DML", 5_445_000, 854, "2026-10-06"],
    ]);
    // Board order is rank order is EAS order.
    const rows = EAS_READING.african;
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i].rank).toBeGreaterThan(rows[i - 1].rank);
      expect(rows[i].eas).toBeLessThan(rows[i - 1].eas);
    }
    expect(rows.every((r) => r.country === "Nigeria" && r.streamingOnly)).toBe(true);
  });

  it("dates both leaders by one stamp, because the answer says 'both' are counted to it", () => {
    const [first, second] = EAS_READING.african;
    expect(first.stamped).toBe(second.stamped);
    expect(EAS_STREAMS_COUNTED_TO).toBe("2026-10-06");
    expect(answer).toContain("counted to 6 October 2026");
  });

  it("prints the rows at the board's precision", () => {
    expect(board.entries).toEqual([
      { name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "15.41M" },
      { name: "Wizkid", sub: "🇳🇬 Nigeria", value: "15.06M" },
      { name: "Asake", sub: "🇳🇬 Nigeria", value: "11.45M" },
    ]);
    expect(answer).toContain("15.41M to Wizkid's 15.06M");
  });

  it("the note states the 8 Oct lead and scope", () => {
    expect(board.note).toContain("his lead over Wizkid, now past 15 million equivalent album sales himself");
    expect(board.note).toContain("to some 354,000 across the “Dai Dai” run");
    expect(board.note).toContain("Asake is the third African artist on ChartMasters' 1,014-name board");
    expect(board.note).toContain(
      "seven artists from African countries are on it, all of them from Nigeria, with Rema, Davido, Omah Lay and Fireboy DML below these three",
    );
    expect(board.note).toContain("Colombia's Beéle, 11.07M, as Afrobeats");
    // Was true on 30 Sep, false since the board grew.
    expect(board.note).not.toContain("the only artists from any African country");
  });

  it("the source line states the read, the ranks, the stamps, the method and the nationality rule", () => {
    const s = board.source;
    expect(s).toContain("all 1,014 rows read 8 October 2026");
    expect(s).toContain("Burna Boy 15,414,000 (rank 533), Wizkid 15,060,000 (rank 538), Asake 11,445,000 (rank 638).");
    expect(s).toContain(
      "The board's other African artists: Rema 9,921,000 (rank 704), Davido 9,307,000 (rank 718), Omah Lay 7,423,000 (rank 775) and Fireboy DML 5,445,000 (rank 854).",
    );
    expect(s).toContain("Burna Boy's and Wizkid's streams are both stamped 6 October, a same-date pair");
    expect(s).toContain("Asake's are stamped 18 September, so his figure trails his real total by some 18 days of streams");
    expect(s).toContain("any of the seven, so all seven totals are streaming-only estimates");
    expect(s).toContain("Akon (rank 502, 16,777,000) is on the board, but he is an American artist");
  });

  it("negative control: the 30 Sep note and source as shipped fail the same checks", () => {
    expect(SHIPPED_30_SEP.note).not.toContain("to some 354,000");
    expect(SHIPPED_30_SEP.note).not.toContain("1,014-name board");
    expect(SHIPPED_30_SEP.note).toContain("the only artists from any African country");
    expect(SHIPPED_30_SEP.source).not.toContain("all 1,014 rows read 8 October 2026");
    expect(SHIPPED_30_SEP.source).not.toContain("both stamped 6 October");
    expect(SHIPPED_30_SEP.source).not.toContain("Akon (rank 502, 16,777,000)");
  });
});

describe("best-selling board: nothing in the board block is typed", () => {
  const src = readFileSync(join(process.cwd(), "app/data/africasBiggest.ts"), "utf8");
  const start = src.indexOf(`id: "best-selling-african-artist-eas"`);
  const block = src.slice(start, src.indexOf("source: easSource", start));
  /** Figures typed outside comments: "15,414,000", "354,000", "15.41M". */
  const typedFigures = (code: string) =>
    code
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "")
      .match(/\d{1,3}(?:,\d{3})+|\d+\.\d+M/g) ?? [];

  it("the rows, note and source come from EAS_READING", () => {
    expect(start).toBeGreaterThan(-1);
    expect(block).toContain("entries: easEntries");
    expect(block).toContain("note: easNote");
    expect(typedFigures(block)).toEqual([]);
  });

  it("negative control: the rows and note as they shipped on 30 Sep are caught", () => {
    const shipped = `${SHIPPED_30_SEP.entries}\n    note: ${JSON.stringify(SHIPPED_30_SEP.note)},`;
    expect(typedFigures(shipped)).toEqual(["15.34M", "30,000", "339,000", "11.02M"]);
  });
});

describe("the 8 Oct 2026 feed entry quotes the 8 Oct reading", () => {
  const entry = updates.find((u) => u.date === "2026-10-08" && /best-selling African artist/.test(u.text));
  const checks = (text: string) => [
    text.includes("15.41 million equivalent album sales"),
    text.includes("Wizkid's 15.06M"),
    text.includes("a 354,000 lead"),
    text.includes("both counted to 6 October"),
  ];

  it("exists, is about Burna Boy, and states the figures, the lead and the stamp", () => {
    expect(entry).toBeDefined();
    expect(entry!.text).toContain("Burna Boy");
    expect(entry!.href).toBe("/records/africas-biggest");
    expect(checks(entry!.text)).toEqual([true, true, true, true]);
  });

  it("negative control: the 30 Sep entry, from the older reading, fails every check", () => {
    const shipped = updates.find((u) => u.date === "2026-09-30" && /best-selling African artist/.test(u.text))!.text;
    expect(shipped).toBe(
      "Still the best-selling African artist of all time: ChartMasters has Burna Boy on 15.34 million equivalent album sales to Wizkid's 15.00M, a 339,000 lead, both counted to 28 September.",
    );
    expect(checks(shipped)).toEqual([false, false, false, false]);
  });
});
