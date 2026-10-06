import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage, { CompareView } from "../../app/compare/page";
import { artistBySlug, comparableArtists, priceRelease } from "../../app/lib/certUnits";

/**
 * V-compareA-05, the full-site debug of 5 Oct 2026. Two records with no
 * Nigerian plaque between them still got the Nigeria strip: live at 1440 dark
 * and 390 light, /compare?mode=songs&a=burna-boy&b=wizkid&sa=Dai+Dai&sb=One+Dance
 * read "NIGERIA — SEPARATED. … DAI DAI — 0 PLAQUES · AT LEAST 0 ONE DANCE — 0
 * PLAQUES · AT LEAST 0 INCLUDE NIGERIA", and the action (ng=1) changed nothing
 * but the labels: 2,215,928 and 24,886,333 either way, the same 23 rows. Album
 * mode the same (African Giant vs Rave & Roses: 293,604 / 290,000, 8 rows).
 * The strip shows when a side on screen holds a Nigerian plaque.
 */

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const page = async (sp: Record<string, string>) => html(await ComparePage({ searchParams: Promise.resolve(sp) }));

function read(root: HTMLElement) {
  const strip = root.querySelector('section[aria-label="Nigeria"]');
  const sw = [...root.querySelectorAll("a")].find((x) => norm(x.textContent).startsWith("Nigeria: "));
  const head = root.querySelector("#result");
  return {
    strip: strip ? norm(strip.textContent) : null,
    switchLabel: sw ? norm(sw.textContent) : null,
    head: head ? [...head.children].map((c) => norm(c.querySelectorAll("p")[1]?.textContent)) : [],
    rows: root.querySelectorAll("table tbody tr").length,
    text: norm(root.textContent),
  };
}

const DAI_DAI = { mode: "songs", a: "burna-boy", b: "wizkid", sa: "Dai Dai", sb: "One Dance" };
const GIANT = { mode: "albums", a: "burna-boy", b: "rema", sa: "African Giant", sb: "Rave & Roses" };

describe("the Nigeria strip needs a Nigerian plaque on screen", () => {
  for (const [name, sp, figures, rows] of [
    ["Dai Dai vs One Dance", DAI_DAI, ["2,215,928", "24,886,333"], 23],
    ["African Giant vs Rave & Roses", GIANT, ["293,604", "290,000"], 8],
  ] as const) {
    it(`${name}: no strip of zeros, either way round`, async () => {
      const off = read(await page(sp));
      const on = read(await page({ ...sp, ng: "1" }));

      // The comparison itself renders, with its figures and table.
      expect(off.head).toEqual(figures);
      expect(off.rows).toBe(rows);

      expect(off.strip).toBeNull();
      expect(on.strip).toBeNull();
      // Negative control: what the live page printed.
      expect(off.text).not.toContain(`${sp.sa} — 0 plaques · at least 0`);
      expect(off.text).not.toContain("Include Nigeria");
      expect(on.text).not.toContain("Separate Nigeria");

      // The premise: including Nigeria moves nothing here.
      expect(on.head).toEqual(off.head);
      expect(on.rows).toBe(off.rows);

      // The setting itself stays, so it carries to the next pick.
      expect(off.switchLabel).toBe("Nigeria: separated");
      expect(on.switchLabel).toBe("Nigeria: included");
    });
  }

  it("one side with a Nigerian plaque keeps the strip and its action", async () => {
    const sp = { ...DAI_DAI, sa: "Last Last" };
    const off = read(await page(sp));
    expect(off.strip).toContain("Last Last — 1 plaque · at least 500,000");
    expect(off.strip).toContain("One Dance — 0 plaques · at least 0");
    expect(off.strip).toContain("Include Nigeria");
    const on = read(await page({ ...sp, ng: "1" }));
    expect(on.head[0]).toBe("3,763,333");
    expect(off.head[0]).toBe("3,263,333");
  });

  it("artist totals keep the strip on every pair page", async () => {
    for (const [a, b] of [["burna-boy", "wizkid"], ["tyla", "tems"], ["tyla", "oxlade"]]) {
      const A = artistBySlug(a)!;
      const B = artistBySlug(b)!;
      for (const feat of ["1", "0"]) {
        const sp = feat === "0" ? { a, b, feat } : { a, b };
        const root = html(await CompareView({ sp, path: `/compare/${a}-vs-${b}`, leaf: `${A.name} vs ${B.name}`, pairTitle: `${A.name} vs ${B.name}` }));
        expect(read(root).strip, `${a} vs ${b} feat=${feat}`).toMatch(/^🇳🇬 Nigeria — (separated|included)\./);
      }
    }
  });

  it("wherever a record holds no Nigerian plaque, the switch moves no figure", () => {
    // The rule above hides the strip exactly where its action is inert; this
    // holds it to the data, every record on the board.
    let checked = 0;
    for (const artist of comparableArtists) {
      for (const r of artist.releases) {
        const off = priceRelease(artist, r.title, { includeNigeria: false, includeFeatures: true })!;
        if (off.nigeria.plaques > 0) continue;
        const on = priceRelease(artist, r.title, { includeNigeria: true, includeFeatures: true })!;
        expect([on.total, on.byCountry.length, on.listed.length], `${artist.slug} · ${r.title}`).toEqual([off.total, off.byCountry.length, off.listed.length]);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(50);
  });
});
