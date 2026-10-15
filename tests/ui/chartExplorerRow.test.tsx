import { renderToStaticMarkup } from "react-dom/server";

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

import ChartsPage from "../../app/records/charts/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import { albumCharts, singleCharts, featureCharts } from "../../app/data/charts";
import { artistBySlug } from "../../app/data/afrobeats";
import ledger from "../../app/components/ledgerRow.module.css";
import charts from "../../app/records/charts/charts.module.css";
import { read } from "../fixtures/cssRules";
import { at, frameLeft, hoverShifts, padLeft, pillStart, rowProblems } from "../fixtures/ledgerRowChecks";

/**
 * Job 3 · J3-1 (design review 8 Oct 2026; fixes 61, 56): the desktop chart
 * ledger — /records/charts and every /afrobeats/{artist}/charts — draws the
 * same LedgerRow as the certifications ledger: a 340px title column (280px at
 * 901–1239), the pills from its edge, left to right, so every row's first
 * pill sits on one start line at 1440 (the response's test). Chart rows keep
 * "{credit} · {year}" and the co-lead tag, and carry no count (fix 61's count
 * is "· {n} certifications").
 */

const CSS = read("app/components/ledgerRow.module.css");
const CHARTS_CSS = read("app/records/charts/charts.module.css");
const SEL = { row: ".row", pills: ".pills", cover: ".cover" };

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const rowsOf = (doc: Document) => [...doc.querySelectorAll<HTMLElement>(`.${ledger.row}`)];
const titleOf = (row: Element) => row.querySelector(`.${ledger.title}`)!.textContent!.trim();

type Tree = { route: string; doc: Document; releases: { title: string; credit?: string; year?: number; entries: unknown[] }[] };
let cached: Promise<Tree[]> | undefined;
const trees = () => (cached ??= build());
async function build(): Promise<Tree[]> {
  return [
    { route: "/records/charts", doc: parse(renderToStaticMarkup(<ChartsPage />)), releases: [...albumCharts, ...singleCharts, ...featureCharts] },
    {
      route: "/afrobeats/tyla/charts",
      doc: parse(renderToStaticMarkup(await ArtistChartsPage({ params: Promise.resolve({ artist: "tyla" }) }))),
      releases: artistBySlug("tyla")!.charts,
    },
  ];
}

describe("J3-1: every desktop chart row is a LedgerRow — a list item whose second track is its list of peaks", () => {
  it("one row per charting release; the pills track is the named list of peaks", async () => {
    for (const { route, doc, releases } of await trees()) {
      const rows = rowsOf(doc);
      expect(rows.length, route).toBe(releases.length);
      for (const row of rows) {
        expect(row.getAttribute("role")).toBe("listitem");
        expect(row.children).toHaveLength(2);
        expect(row.children[0].classList.contains(ledger.head)).toBe(true);
        const pills = row.children[1];
        expect(pills.classList.contains(ledger.pills)).toBe(true);
        expect(pills.getAttribute("role")).toBe("list");
        expect(pills.getAttribute("aria-label")).toBe(`${titleOf(row)} — chart peaks`);
        const peaks = [...pills.children];
        expect(peaks.length, `${route} ${titleOf(row)}`).toBe(releases.find((r) => r.title === titleOf(row))!.entries.length);
        for (const p of peaks) {
          expect(p.classList.contains(charts.peak)).toBe(true);
          expect(p.getAttribute("role")).toBe("listitem");
        }
      }
    }
  });

  it("no count on a chart row: fix 61's count is the certifications'", async () => {
    for (const { route, doc } of await trees()) {
      expect(doc.querySelectorAll(`.${ledger.row} .${ledger.metaCount}`), route).toHaveLength(0);
      for (const row of rowsOf(doc)) expect(row.querySelector(`.${ledger.head}`)!.textContent).not.toMatch(/certification/i);
    }
  });

  it("the meta keeps credit · year and the co-lead tag: WGFT", async () => {
    const [{ doc }] = await trees();
    const wgft = [...singleCharts, ...featureCharts].find((r) => r.title === "WGFT")!;
    const row = rowsOf(doc).find((r) => titleOf(r) === "WGFT")!;
    expect(row.querySelector(`.${ledger.metaLine}`)!.textContent).toBe(`${wgft.credit} · ${wgft.year} co-lead`);
    expect(row.querySelector(`.${charts.roleTag}`)!.textContent).toBe("co-lead");
    expect(row.querySelector(`.${ledger.meta}`)!.classList.contains(ledger.metaLong)).toBe(true);
  });

  it("a board row with no credit or year prints no meta line at all", async () => {
    const [, tyla] = await trees();
    for (const row of rowsOf(tyla.doc)) {
      const item = tyla.releases.find((r) => r.title === titleOf(row))!;
      if (!item.credit && !item.year) expect(row.querySelector(`.${ledger.meta}`), item.title).toBeNull();
    }
  });
});

describe("J3-1: one start line — the stylesheet the chart ledger shares", () => {
  it("the same row as the certifications ledger, at every desktop band", () => {
    for (const [w, col] of [[1440, 340], [1240, 340], [1239, 280], [1024, 280], [901, 280]] as const)
      expect(rowProblems(CSS, SEL, w, { col }), String(w)).toEqual([]);
    expect(hoverShifts(CSS, ".row")).toEqual([]);
  });

  it("the pill start x: 440 at 1440 and 332 at 1024 in the explorer's frame", () => {
    const max = Number.parseFloat(at(CHARTS_CSS, ".explorerWrap", "max-width", 1440)!);
    const left1440 = frameLeft(max, padLeft(at(CHARTS_CSS, ".explorerWrap", "padding", 1440)), 1440);
    const left1024 = frameLeft(max, Number.parseFloat(at(CHARTS_CSS, ".explorerWrap", "padding-inline", 1024)!), 1024);
    expect(left1440).toBe(80);
    expect(left1024).toBe(32);
    expect(pillStart(left1440, CSS, ".row", 1440)).toBe(440);
    expect(pillStart(left1024, CSS, ".row", 1024)).toBe(332);
  });

  it("the old card-row classes are gone from the charts sheet; the note and the pills stay", () => {
    const css = CHARTS_CSS.replace(/\/\*[\s\S]*?\*\//g, "");
    for (const cls of [".row", ".rowHead", ".rowText", ".rowCover", ".title", ".titleLink", ".credit", ".peaks"])
      expect(css, cls).not.toMatch(new RegExp(`\\${cls}(?![\\w-])`));
    for (const cls of [".releaseNote", ".peak", ".one", ".top10", ".top40", ".rest", ".roleTag"]) expect(css, cls).toMatch(new RegExp(`\\${cls} \\{`));
  });
});

describe("J3-1 negative controls: what shipped fails", () => {
  // charts.module.css on main f20b5347, the card row, verbatim.
  const SHIPPED = `.row {
  display: grid;
  grid-template-columns: minmax(190px, 1fr) minmax(0, 1.6fr);
  gap: 16px 28px;
  align-items: center;
  padding: 20px 8px;
  border-bottom: 1px solid var(--line);
  transition: background 0.18s ease, padding-left 0.18s ease;
}
.row:hover {
  background: var(--hover);
  border-bottom-color: color-mix(in srgb, var(--gold-ink) 40%, transparent);
  padding-left: 16px;
}
.peaks {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}
.rowCover {
  width: 38px;
  height: 38px;
  flex: none;
}`;

  it("the shipped row's hover slides it 16px, moving every pill", () => {
    expect(hoverShifts(SHIPPED, ".row")).toEqual([".row:hover { padding-left: 16px }"]);
  });

  it("the shipped row has no fixed title track and right-aligned pills", () => {
    const p = rowProblems(SHIPPED, { row: ".row", pills: ".peaks", cover: ".rowCover" }, 1440, { col: 340 }).join("\n");
    expect(p).toMatch(/columns at 1440: minmax\(190px, 1fr\)/);
    expect(p).toMatch(/justify-content at 1440: flex-end/);
    expect(p).toMatch(/\.rowCover: 38px × 38px/);
    expect(Number.isNaN(pillStart(80, SHIPPED, ".row", 1440))).toBe(true);
  });

  it("the 8 Oct row as served: its head is not a LedgerRow head", () => {
    // Verbatim from burnaboystats.com/records/charts, 8 Oct 2026 (job1-scratch/live_records_charts.html).
    const doc = parse(
      `<div class="charts-module__kXOZya__row" role="listitem"><div class="charts-module__kXOZya__rowHead"><span class="charts-module__kXOZya__rowCover" aria-hidden="true" style="background-image:url(https://i.scdn.co/image/ab67616d00001e02c361f3720bafc0da36f14d96)"></span><span class="charts-module__kXOZya__rowText"><span class="charts-module__kXOZya__title">I Told Them…</span><span class="charts-module__kXOZya__credit">2023</span></span></div><div class="charts-module__kXOZya__peaks" role="list" aria-label="I Told Them… — chart peaks"></div></div>`,
    );
    expect(rowsOf(doc)).toHaveLength(0);
  });
});

describe("J3-1: the cover centres on the title and meta, never on a note (review, 14 Oct 2026)", () => {
  /** The note text a cover is centred with: the cover's parent is the box that
   *  centres it, and a note inside that box pulls the cover down beside it. */
  const centredNote = (row: Element, coverSel: string, noteSel: string, centres: (box: Element) => boolean) => {
    const box = row.querySelector(coverSel)!.parentElement!;
    const note = box.querySelector(noteSel);
    return centres(box) && note ? (note.textContent ?? "") : "";
  };

  it("Dai Dai's note sits under the title and meta, outside the cover's line, from the title's edge", async () => {
    const [{ doc }] = await trees();
    const row = rowsOf(doc).find((r) => titleOf(r) === "Dai Dai")!;
    const note = row.querySelector(`.${charts.releaseNote}`)!;
    expect(note, "the premise: a row with a note").not.toBeNull();
    expect(at(CSS, ".line", "align-items", 1440)).toBe("center");
    const centres = (box: Element) => box.classList.contains(ledger.line);
    expect(centredNote(row, `.${ledger.cover}`, `.${charts.releaseNote}`, centres)).toBe("");
    expect(row.querySelector(`.${ledger.cover}`)!.parentElement!.classList.contains(ledger.line)).toBe(true);
    expect(note.parentElement!.classList.contains(ledger.note)).toBe(true);
    expect(note.parentElement!.parentElement!.classList.contains(ledger.head)).toBe(true);
    // The note's left edge is the title's: the 28px cover plus the line's gap.
    const edge = Number.parseFloat(at(CSS, ".cover", "width", 1440)!) + Number.parseFloat(at(CSS, ".line", "gap", 1440)!);
    expect(at(CSS, ".note", "padding", 1440)).toBe(`1px 0 0 ${edge}px`);
  });

  it("negative control: the 8 Oct row as served centred its cover on its note too", () => {
    // Verbatim from burnaboystats.com/records/charts, 8 Oct 2026
    // (job1-scratch/live_records_charts.html), and main's .rowHead rule
    // (charts.module.css, f20b5347); J3-1's first LedgerRow kept that stack.
    const SHIPPED = `<div class="charts-module__kXOZya__row" role="listitem"><div class="charts-module__kXOZya__rowHead"><span class="charts-module__kXOZya__rowCover" aria-hidden="true" style="background-image:url(https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4)"></span><span class="charts-module__kXOZya__rowText"><span class="charts-module__kXOZya__title">Dai Dai</span><span class="charts-module__kXOZya__credit">Shakira &amp; Burna Boy · 2026<!-- --> <span class="charts-module__kXOZya__roleTag" title="A lead for Burna Boy with Shakira: the song is in his own Spotify discography">co-lead</span></span><span class="charts-module__kXOZya__releaseNote">No.1 on both Billboard global charts. Also No.1 on Billboard&#x27;s US World Digital Song Sales and Latin Airplay charts, No.1 on the IFPI Middle East &amp; North Africa chart (No.3 on North Africa), and No.1 on BMAT&#x27;s Central America &amp; Caribbean airplay chart.</span></span></div></div>`;
    const ROW_HEAD = ".rowHead { display: flex; align-items: center; gap: 12px; min-width: 0; }";
    const row = parse(SHIPPED).querySelector('[role="listitem"]')!;
    const centres = (box: Element) => /__rowHead$/.test(box.className) && /align-items:\s*center/.test(ROW_HEAD);
    expect(centredNote(row, '[class$="__rowCover"]', '[class$="__releaseNote"]', centres)).toMatch(/^No\.1 on both Billboard global charts/);
  });
});
