import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../../app/page";
import page from "../../app/page.module.css";
import { boardCells, boardCountriesShown, boardCountryTotal, boardDominantSong } from "../../app/lib/homeData";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * homeNo1BoardCells (site review 8 Oct 2026, Job 5 · J5-7, fix 110): each
 * desktop No. 1 board cell keeps its code, its flag (or NEW), its country and
 * its chart, and the 28px cover becomes one Geist 12.5 song line with an
 * ellipsis. The header stays one line, and names a song only while it holds
 * more than half the cells shown. The phone board is not named (C-10).
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const doc = () => parse(renderToStaticMarkup(<Home />));

describe("homeNo1BoardCells (fix 110)", () => {
  it("each desktop cell: code, flag or NEW, country, chart, then the song line", () => {
    const cells = [...doc().querySelectorAll(`#live .${page.boardCell}`)];
    expect(cells).toHaveLength(boardCells.length);
    cells.forEach((cell, i) => {
      const c = boardCells[i];
      const kids = [...cell.children].map((k) => k.className);
      expect(cell.querySelector(`.${page.boardCode}`)!.textContent).toBe(c.code);
      expect(cell.querySelector(`.${page.boardFlag}`)!.textContent).toBe(c.isNew ? "NEW" : c.flag);
      expect(cell.querySelector(`.${page.boardName}`)!.textContent).toBe(c.name);
      expect(cell.querySelector(`.${page.boardChart}`)!.textContent).toBe(c.chart);
      if (c.coverTitle) {
        const song = cell.querySelector(`.${page.boardSong}`)!;
        expect(song.textContent).toBe(c.coverTitle);
        expect(song.getAttribute("title")).toBe(c.coverTitle);
        expect(kids[kids.length - 1]).toBe(page.boardSong);
      }
    });
  });

  it("no cover image in the desktop board", () => {
    expect(doc().querySelectorAll(`#live .${page.boardGrid} img`)).toHaveLength(0);
  });

  it("the song line is one Geist 12.5 line in muted ink, cut with an ellipsis", () => {
    const body = rules(read("app/page.module.css"))
      .filter((r) => r.media === null && r.selector === ".boardSong")
      .map((r) => r.body)
      .join(";");
    expect(decl(body, "font-family")).toMatch(/^var\(--font-geist-sans\)/);
    expect(decl(body, "font-size")).toBe("var(--type-caption)");
    expect(decl(body, "color")).toBe("var(--text-muted)");
    expect(decl(body, "white-space")).toBe("nowrap");
    expect(decl(body, "text-overflow")).toBe("ellipsis");
    expect(decl(body, "overflow")).toBe("hidden");
  });

  it("the header is one line, with the song clause only while one song holds over half the cells", () => {
    const tally = new Map<string, number>();
    for (const c of boardCells) if (c.coverTitle) tally.set(c.coverTitle, (tally.get(c.coverTitle) ?? 0) + 1);
    const [song, k] = [...tally].sort((a, b) => b[1] - a[1])[0];
    const clause = k > boardCells.length / 2 ? ` · ${k} with “${song}”` : "";
    const head = doc().querySelector(`#live .${page.boardCount}`)!.textContent!.replace(/\s+/g, " ").trim();
    expect(head).toBe(`Showing ${boardCountriesShown} of ${boardCountryTotal} · official national charts${clause}`);
  });

  it("boardDominantSong: over half names the song, half or fewer names none", () => {
    const cells = (n: number, total: number) =>
      Array.from({ length: total }, (_, i) => ({ coverTitle: i < n ? "Dai Dai" : `Song ${i}` }));
    expect(boardDominantSong(cells(13, 24))).toEqual({ song: "Dai Dai", k: 13 });
    expect(boardDominantSong(cells(12, 24))).toBeNull();
    expect(boardDominantSong([])).toBeNull();
  });

  it("negative control: the shipped desktop cell drew a 28px cover image", () => {
    // app/page.tsx:333 on main e85e6efe.
    const shipped = '<img className={styles.boardCover} src={spotifyImage(c.cover, 64)} width={28} height={28} />';
    expect(shipped).toMatch(/<img className=\{styles\.boardCover\}/);
    expect(read("app/page.tsx")).not.toMatch(/<img[^>]*boardCover/);
    expect(read("app/page.module.css")).not.toMatch(/\.boardCover\b/);
  });
});
