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

import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import { allItems } from "../../app/data/certifications";
import { artistBySlug } from "../../app/data/afrobeats";
import { coLeadsFor } from "../../app/data/songRoles";
import ledger from "../../app/components/ledgerRow.module.css";
import certStyles from "../../app/certifications/certifications.module.css";
import { metaWords } from "../../app/components/LedgerRow";
import { read } from "../fixtures/cssRules";
import { at, frameLeft, hoverShifts, padLeft, pillStart, rowProblems } from "../fixtures/ledgerRowChecks";

/**
 * Job 3 · J3-1 (design review 8 Oct 2026; fixes 61, 56): the desktop
 * certifications ledger — /certifications and every /afrobeats/{artist} — is
 * one row per release: a fixed 340px title column (280px at 901–1239) with a
 * 28px cover, the Anton title and the meta line, then the pills from the
 * column's edge, left to right. "The pill start x is equal across rows at
 * 1440" (the response's test): equal by construction, a fixed first track and
 * a row with no inset, read here from the stylesheet.
 *
 * Fix 61: the meta keeps "{credit} · {year}" and the co-lead tag (#441), then
 * "· {n} certifications"; only the credit ellipsizes; Geist 12.5 past three
 * words, the mono label otherwise.
 */

const CSS = read("app/components/ledgerRow.module.css");

/**
 * Why a ledger sheet lets the count cut the credit (review, 14 Oct 2026), or
 * an empty list: the meta must wrap (the count, the optional part, takes a
 * line of its own when the whole line does not fit) and clip sideways only;
 * the count's "·" must sit out of flow in the column gap, as wide as it, so
 * on a line of its own it falls left of the meta's edge and is clipped.
 */
function countWrapProblems(css: string): string[] {
  const out: string[] = [];
  const wrap = at(css, ".meta", "flex-wrap", 1440);
  if (wrap !== "wrap") out.push(`.meta flex-wrap: ${wrap}`);
  const clip = at(css, ".meta", "overflow-x", 1440);
  if (clip !== "clip") out.push(`.meta overflow-x: ${clip}`);
  if (at(css, ".meta", "overflow-y", 1440) !== undefined || at(css, ".meta", "overflow", 1440) !== undefined)
    out.push(".meta clips vertically (the co-lead tag's box would be cut)");
  // "1px calc(0.9em + 1ch)": the row gap, then the column gap (which may hold spaces).
  const gap = at(css, ".meta", "gap", 1440)?.trim();
  const columnGap = gap?.match(/^\S+\s+(.+)$/)?.[1] ?? gap;
  if (at(css, ".metaCount", "position", 1440) !== "relative") out.push(".metaCount is not the separator's box");
  if (at(css, ".countSep", "position", 1440) !== "absolute" || at(css, ".countSep", "right", 1440) !== "100%")
    out.push(".countSep is not out of flow before the count");
  if (!columnGap || at(css, ".countSep", "width", 1440) !== columnGap)
    out.push(`.countSep width ${at(css, ".countSep", "width", 1440)} is not the meta's column gap ${columnGap}`);
  // The Geist line sets its own gap for its narrower dot; the "·" box follows it.
  const longGap = at(css, ".metaLong", "column-gap", 1440);
  if (longGap !== at(css, ".metaLong .countSep", "width", 1440))
    out.push(`.metaLong .countSep width ${at(css, ".metaLong .countSep", "width", 1440)} is not the Geist line's column gap ${longGap}`);
  return out;
}
const CERTS_CSS = read("app/certifications/certifications.module.css");
const SEL = { row: ".row", pills: ".pills", cover: ".cover" };

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const rowsOf = (doc: Document) => [...doc.querySelectorAll<HTMLElement>(`.${ledger.row}`)];
const titleOf = (row: Element) => row.querySelector(`.${ledger.title}`)!.textContent!.trim();

type Tree = { route: string; doc: Document; releases: { title: string; credit?: string; year?: number; certs: unknown[] }[] };
let cached: Promise<Tree[]> | undefined;
/** /certifications and /afrobeats/wizkid, served once for the whole file. */
const trees = () => (cached ??= build());
async function build(): Promise<Tree[]> {
  const wizkid = artistBySlug("wizkid")!;
  return [
    { route: "/certifications", doc: parse(renderToStaticMarkup(<CertificationsPage />)), releases: allItems },
    {
      route: "/afrobeats/wizkid",
      doc: parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }))),
      releases: wizkid.releases,
    },
  ];
}

describe("J3-1: every desktop cert row is a LedgerRow, its pills in the second track", () => {
  it("every release with a plaque has one row; every pill sits in its row's pills track", async () => {
    for (const { route, doc, releases } of await trees()) {
      const rows = rowsOf(doc);
      expect(rows.length, route).toBe(releases.filter((r) => r.certs.length > 0).length);
      for (const row of rows) {
        expect(row.children, route).toHaveLength(2);
        expect(row.children[0].classList.contains(ledger.head)).toBe(true);
        expect(row.children[1].classList.contains(ledger.pills)).toBe(true);
        expect(row.children[0].querySelector(`.${ledger.cover}`)).not.toBeNull();
      }
      // No ledger pill outside a row's pills track (the dated log's pills are its own rows).
      const pills = [...doc.querySelectorAll(`.${certStyles.groupList} .${certStyles.cBadge}`)];
      expect(pills.length, route).toBeGreaterThan(0);
      for (const p of pills) expect(p.parentElement!.classList.contains(ledger.pills), route).toBe(true);
    }
  });
});

describe("J3-1: one start line — the stylesheet", () => {
  it("340px / 280px title column, 20px gap, no inset, pills from the column's edge, 56px rows, a 28px cover", () => {
    expect(rowProblems(CSS, SEL, 1440, { col: 340 })).toEqual([]);
    expect(rowProblems(CSS, SEL, 1240, { col: 340 })).toEqual([]);
    expect(rowProblems(CSS, SEL, 1239, { col: 280 })).toEqual([]);
    expect(rowProblems(CSS, SEL, 1024, { col: 280 })).toEqual([]);
    expect(rowProblems(CSS, SEL, 901, { col: 280 })).toEqual([]);
  });

  it("the hover only paints: no row slides under the pointer", () => {
    expect(hoverShifts(CSS, ".row")).toEqual([]);
    expect(at(CSS, ".row:hover", "background", 1440)).toBe("var(--hover)");
  });

  it("the pill start x: 440 at 1440 and 332 at 1024, the canvas's x≈441 and x≈333", () => {
    // The ledger sits in the page's 1360/40 frame (.wide inside .groupSection), 32 at ≤1239.
    const max = Number.parseFloat(at(CERTS_CSS, ".wide", "max-width", 1440)!);
    const left1440 = frameLeft(max, padLeft(at(CERTS_CSS, ".groupSection .wide", "padding", 1440)), 1440);
    const left1024 = frameLeft(max, Number.parseFloat(at(CERTS_CSS, ".groupSection .wide", "padding-inline", 1024)!), 1024);
    expect(left1440).toBe(80);
    expect(left1024).toBe(32);
    expect(pillStart(left1440, CSS, ".row", 1440)).toBe(440);
    expect(pillStart(left1024, CSS, ".row", 1024)).toBe(332);
  });

  it("the old row classes are gone from the certifications sheet", () => {
    for (const cls of [".certRow", ".certRowHead", ".certTitle", ".certCredit", ".certText", ".certCover", ".certTitleLink", ".badges"])
      expect(CERTS_CSS.replace(/\/\*[\s\S]*?\*\//g, ""), cls).not.toMatch(new RegExp(`\\${cls}\\b`));
  });
});

describe("J3-1 / fix 61: the meta line keeps credit · year · co-lead, then the count", () => {
  it("Yaba Buluku (Remix), the longest real credit: credit, year, the tag and “· N certifications”", async () => {
    const [{ doc }] = await trees();
    const item = allItems.find((r) => r.title === "Yaba Buluku (Remix)")!;
    expect(coLeadsFor([item.title])[item.title]?.length, "the premise: a co-lead").toBeGreaterThan(0);
    const row = rowsOf(doc).find((r) => titleOf(r) === item.title)!;
    const meta = row.querySelector(`.${ledger.meta}`)!;
    expect(row.querySelector(`.${ledger.metaCredit}`)!.textContent).toBe(item.credit);
    expect(row.querySelector(`.${ledger.metaYear}`)!.textContent).toBe(String(item.year));
    expect(row.querySelector(`.${certStyles.roleTag}`)!.textContent).toBe("co-lead");
    const n = item.certs.length;
    expect(row.querySelector(`.${ledger.metaCount}`)!.textContent).toBe(` · ${n} ${n === 1 ? "certification" : "certifications"}`);
    expect(meta.textContent).toBe(`${item.credit} · ${item.year} co-lead · ${n} ${n === 1 ? "certification" : "certifications"}`);
    // Past three words: Geist.
    expect(metaWords(item)).toBeGreaterThan(3);
    expect(meta.classList.contains(ledger.metaLong)).toBe(true);
  });

  it("the count never takes the credit's room: it wraps to a line of its own, and its “·” goes with it", () => {
    expect(countWrapProblems(CSS)).toEqual([]);
  });

  it("the count's “·” is still in the markup, in the gap before the count", async () => {
    const [{ doc }] = await trees();
    const item = allItems.find((r) => r.title === "Dai Dai")!;
    expect(item.credit, "the premise: a credited row").toBeTruthy();
    const row = rowsOf(doc).find((r) => titleOf(r) === item.title)!;
    const sep = row.querySelector(`.${ledger.metaCount} > .${ledger.countSep}`)!;
    expect(sep.textContent).toBe(" · ");
    expect(sep.classList.contains(ledger.metaSep)).toBe(true);
    // A row with no credit or year (a board row) has nothing to separate the count from.
    const [, wiz] = await trees();
    const essence = rowsOf(wiz.doc).find((r) => titleOf(r) === "Essence")!;
    expect(essence.querySelector(`.${ledger.countSep}`)).toBeNull();
  });

  it("only the credit ellipsizes; the year, the tag and the count never do", () => {
    expect(at(CSS, ".meta", "white-space", 1440)).toBe("nowrap");
    expect(at(CSS, ".metaCredit", "text-overflow", 1440)).toBe("ellipsis");
    expect(at(CSS, ".metaCredit", "overflow", 1440)).toBe("hidden");
    expect(at(CSS, ".metaCredit", "min-width", 1440)).toBe("0");
    for (const sel of [".metaYear", ".metaTag", ".metaCount", ".metaSep"]) {
      expect(at(CSS, sel, "flex", 1440), sel).toBe("none");
      expect(at(CSS, sel, "text-overflow", 1440), sel).toBeUndefined();
    }
  });

  it("every row's count is its plaques in the view; a board row (no credit, no year) is the count alone, mono", async () => {
    for (const { route, doc, releases } of await trees()) {
      for (const row of rowsOf(doc)) {
        const item = releases.find((r) => r.title === titleOf(row))!;
        const n = row.querySelectorAll(`.${certStyles.cBadge}`).length;
        expect(n, `${route} ${item.title}`).toBe(item.certs.length);
        expect(row.querySelector(`.${ledger.metaCount}`)!.textContent!.replace(/^ · /, "")).toBe(
          `${n} ${n === 1 ? "certification" : "certifications"}`,
        );
      }
    }
    const [, wiz] = await trees();
    const essence = rowsOf(wiz.doc).find((r) => titleOf(r) === "Essence")!;
    const meta = essence.querySelector(`.${ledger.meta}`)!;
    expect(essence.querySelector(`.${ledger.metaLine}`)).toBeNull();
    expect(meta.textContent).toMatch(/^\d+ certifications$/);
    expect(meta.classList.contains(ledger.metaLong)).toBe(false);
  });

  it("the faces: mono 11 caps to three words, Geist 12.5 past them", async () => {
    expect(at(CSS, ".meta", "font-family", 1440)).toMatch(/--font-mono/);
    expect(at(CSS, ".meta", "font-size", 1440)).toBe("var(--type-label)");
    expect(at(CSS, ".meta", "text-transform", 1440)).toBe("uppercase");
    expect(at(CSS, ".metaLong", "font-family", 1440)).toMatch(/^var\(--font-geist-sans\)/);
    expect(at(CSS, ".metaLong", "font-size", 1440)).toBe("var(--type-caption)");
    expect(at(CSS, ".metaLong", "text-transform", 1440)).toBe("none");
    // A year alone ("2022", Last Last) stays the label.
    const [{ doc }] = await trees();
    const last = rowsOf(doc).find((r) => titleOf(r) === "Last Last")!;
    expect(last.querySelector(`.${ledger.metaLine}`)!.textContent).toBe(String(allItems.find((r) => r.title === "Last Last")!.year));
    expect(last.querySelector(`.${ledger.meta}`)!.classList.contains(ledger.metaLong)).toBe(false);
    expect(metaWords({ year: 2022 })).toBe(1);
    expect(metaWords({ credit: "Gunna ft. Burna Boy", year: 2025 })).toBe(5);
    expect(metaWords({ credit: "Phyno & Burna Boy" })).toBe(3);
    // The line's words, count included ("it runs past three words", fix 61):
    // "2022 · 12 certifications" is three, a label; "feat. Wizkid · 2023 · 1
    // certification" is five, a sentence.
    expect(metaWords({ year: 2022, count: 12 })).toBe(3);
    expect(metaWords({ credit: "feat. Wizkid", year: 2023, count: 1 })).toBe(5);
    expect(metaWords({ count: 7 })).toBe(2);
  });

  it("every row takes the face its own line's word count gives it", async () => {
    for (const { route, doc, releases } of await trees()) {
      let geist = 0;
      for (const row of rowsOf(doc)) {
        const item = releases.find((r) => r.title === titleOf(row))!;
        const long = metaWords({ credit: item.credit, year: item.year, count: item.certs.length }) > 3;
        expect(row.querySelector(`.${ledger.meta}`)!.classList.contains(ledger.metaLong), `${route} ${item.title}`).toBe(long);
        if (long) geist++;
      }
      if (route === "/certifications") expect(geist, "his credited rows are sentences").toBeGreaterThan(0);
    }
  });
});

describe("J3-1 negative controls: what shipped fails", () => {
  // certifications.module.css on main f20b5347 (the second, winning row block
  // and its ≤1239 rule), verbatim.
  const SHIPPED = `.certRow {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(0, 1.6fr);
  gap: 16px 28px;
  align-items: center;
  padding: 18px 8px;
  border-bottom: 1px solid var(--line);
  transition: background var(--dur-fast) var(--ease);
}
.certRow:hover { background: var(--hover); }
.certRowHead { min-width: 0; }
.certCover {
  width: 38px;
  height: 38px;
  flex: none;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}
@media (max-width: 1239px) {
  .certRow { grid-template-columns: 1fr; }
  .badges { justify-content: flex-start; }
}`;
  // …and the first block it overrode, whose hover still applied (the 16px slide).
  const SHIPPED_HOVER = `.certRow:hover {
  background: var(--hover);
  border-bottom-color: color-mix(in srgb, var(--gold-ink) 40%, transparent);
  padding-left: 16px;
}`;

  it("the shipped rows fail the column and start-line checks at 1440 and 1024", () => {
    const sel = { row: ".certRow", pills: ".badges", cover: ".certCover" };
    const at1440 = rowProblems(SHIPPED, sel, 1440, { col: 340 }).join("\n");
    expect(at1440).toMatch(/columns at 1440: minmax\(220px, 1fr\)/);
    expect(at1440).toMatch(/justify-content at 1440: flex-end/);
    expect(at1440).toMatch(/padding at 1440: 18px 8px/);
    expect(rowProblems(SHIPPED, sel, 1024, { col: 280 }).join("\n")).toMatch(/columns at 1024: 1fr/);
    expect(Number.isNaN(pillStart(80, SHIPPED, ".certRow", 1440))).toBe(true);
    expect(hoverShifts(SHIPPED_HOVER, ".certRow")).toEqual([".certRow:hover { padding-left: 16px }"]);
  });

  it("the meta as J3-1 first built it (3e91ae84) kept the count on the credit's line: Dai Dai read “S…” at 1024", () => {
    // ledgerRow.module.css at 3e91ae84, its .meta rule verbatim. Measured on
    // the dev server on 14 Oct 2026: 22px of Dai Dai's 116px credit showed at
    // 1024, 38 of Yaba Buluku's 272px.
    const FIRST = `.meta {
  display: flex;
  align-items: baseline;
  gap: 0 0.45em;
  min-width: 0;
  white-space: nowrap;
  font-family: var(--font-mono), monospace;
  font-size: var(--type-label);
  line-height: 1.15;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}`;
    const problems = countWrapProblems(FIRST).join("\n");
    expect(problems).toMatch(/\.meta flex-wrap: undefined/);
    expect(problems).toMatch(/\.meta overflow-x: undefined/);
    expect(problems).toMatch(/\.countSep/);
  });

  it("the change list's first meta, “a mono meta line” carrying the count alone, drops credit, year and tag", () => {
    // Ledgers.dc.html's J3-1 as first written, a row with its credit stripped:
    // fix 61's failure (it would undo #441).
    const keeps = (text: string, item: { credit?: string; year?: number }) =>
      (!item.credit || text.includes(item.credit)) && (!item.year || text.includes(String(item.year)));
    const yaba = allItems.find((r) => r.title === "Yaba Buluku (Remix)")!;
    expect(keeps("17 CERTIFICATIONS", yaba)).toBe(false);
    expect(keeps(`${yaba.credit} · ${yaba.year} co-lead · ${yaba.certs.length} certifications`, yaba)).toBe(true);
  });
});
