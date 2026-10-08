import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SearchPage from "../../app/search/page";
import Nav from "../../app/components/Nav";
import MobileNavSheet from "../../app/components/MobileNavSheet";
import { navGroups, navSearchHint, navUpdated, searchPlaceholder } from "../../app/lib/navGroups";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";
import { searchIndex, searchDocs, type SearchDoc } from "../../app/lib/searchIndex";

/**
 * SH-20 (design review, 8 Oct 2026), copy item 7: search said three things
 * about itself and filed pages where the menu does not.
 *
 *  - Three placeholders: the palette "Search charts, awards, cars, FAQ…", the
 *    sheet "Search 251 certs, 384 entries…", /search "Songs, records,
 *    countries, awards, pages…". Now one, the sheet's, with its live counts.
 *  - Certifications tagged MUSIC though it is a menu section of its own, Live
 *    charts RECORDS, the Dai Dai story RECORDS though the menu files it under
 *    The site. A page the menu lists now carries the menu's name for it.
 *  - For "dai", "Dai Dai — en español" ranked second, above the English "Dai
 *    Dai" release record. The edition now ranks below the English pages.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
/** The placeholders that differ from the first, in words; [] when they agree. */
const disagreeing = (texts: string[]) => texts.filter((t) => t !== texts[0]).map((t) => `"${t}" ≠ "${texts[0]}"`);

describe("SH-20: one placeholder in every search field", () => {
  it("the placeholder is the sheet's own, counts and all", () => {
    expect(searchPlaceholder).toBe(`Search ${navSearchHint}…`);
    expect(searchPlaceholder).toMatch(/^Search \d+ certs, \d+ entries…$/);
  });

  it("the sheet, the palette and /search read the same words", async () => {
    const sheet = render(<MobileNavSheet groups={navGroups} updated={navUpdated} searchHint={navSearchHint} />);
    const sheetText = sheet.container.querySelector('[class*="searchText"]')?.textContent ?? "";
    sheet.unmount();

    // ⌘K opens the palette only where its trigger is displayed; jsdom lays
    // nothing out, so the trigger is reported as on screen (as searchPalette.test does).
    const rects = vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
    render(<Nav suggested={suggestedSearchDocs()} searchPlaceholder={searchPlaceholder} />);
    fireEvent.keyDown(window, { key: "k", metaKey: true });
    rects.mockRestore();
    const palette = screen.getByRole("combobox", { name: "Search query" }).getAttribute("placeholder") ?? "";

    const page = parse(renderToStaticMarkup(await SearchPage({ searchParams: Promise.resolve({}) })));
    const field = page.querySelector('input[type="search"]')?.getAttribute("placeholder") ?? "";

    expect(disagreeing([sheetText, palette, field])).toEqual([]);
    expect(palette).toBe(searchPlaceholder);
  });

  it("the layout hands the palette the placeholder", () => {
    const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
    expect(layout).toMatch(/<Nav suggested=\{suggestedSearchDocs\(\)\} searchPlaceholder=\{searchPlaceholder\} \/>/);
  });

  // The three as shipped (https://burnaboystats.com, live 8 Oct 2026).
  it("negative control: the three shipped placeholders are caught", () => {
    const SHIPPED = ["Search 251 certs, 384 entries…", "Search charts, awards, cars, FAQ…", "Songs, records, countries, awards, pages…"];
    expect(disagreeing(SHIPPED)).toHaveLength(2);
  });
});

/** The menu's name for where each listed page sits (Home is the site itself). */
const BROWSE: Record<string, string> = {
  "/music": "Music",
  "/certifications": "Certifications",
  "/records": "Records",
  "/live-charts": "Live charts",
  "/afrobeats": "Afrobeats",
  "/compare": "Compare",
  "/updates": "Updates",
};
function expectedSection(group: string, href: string): string | undefined {
  if (group === "Browse") return BROWSE[href];
  if (group === "Deep data") return "Records";
  if (group === "The site") return "Site";
  return undefined;
}

/** Each listed page whose search tag is not the menu's, in words. */
function sectionProblems(docs: Pick<SearchDoc, "path" | "section">[]): string[] {
  const out: string[] = [];
  for (const g of navGroups)
    for (const row of g.items) {
      const want = expectedSection(g.name, row.href);
      if (!want) continue;
      const doc = docs.find((d) => d.path === row.href);
      if (!doc) continue;
      if (doc.section !== want) out.push(`${row.href}: tagged ${doc.section}, the menu says ${want}`);
    }
  return out;
}

describe("SH-20: search files each page where the menu does", () => {
  it("the premise: every row of the menu but Home has a page doc", () => {
    const missing = navGroups.flatMap((g) => g.items.filter((r) => r.href !== "/" && !searchIndex.some((d) => d.path === r.href)).map((r) => r.href));
    expect(missing).toEqual([]);
  });

  it("every listed page carries the menu's name for it", () => {
    expect(sectionProblems(searchIndex)).toEqual([]);
  });

  it("the compare hub and the country boards sit with their 218 pair pages", () => {
    expect(searchIndex.find((d) => d.path === "/compare/in")?.section).toBe("Compare");
  });

  // The tags as shipped (app/lib/searchIndex.ts on origin/main, 8 Oct 2026).
  it("negative control: the shipped tags are caught", () => {
    const SHIPPED = [
      { path: "/certifications", section: "Music" },
      { path: "/live-charts", section: "Records" },
      { path: "/dai-dai", section: "Records" },
    ];
    expect(sectionProblems(SHIPPED)).toEqual([
      "/certifications: tagged Music, the menu says Certifications",
      "/live-charts: tagged Records, the menu says Live charts",
      "/dai-dai: tagged Records, the menu says Site",
    ]);
  });
});

/** Whether the Spanish edition ranks above an English Dai Dai result. */
const editionAboveEnglish = (titles: string[]) => {
  const es = titles.indexOf("Dai Dai — en español");
  const english = ["Dai Dai", "Dai Dai — the World Cup Anthem"].map((t) => titles.indexOf(t)).filter((i) => i >= 0);
  return es >= 0 && english.some((i) => i > es);
};

describe("SH-20: the English Dai Dai ranks above Dai Dai en español", () => {
  for (const q of ["dai", "dai dai", "Dai Dai"]) {
    it(`"${q}": the story and the release record, then the edition`, () => {
      const titles = searchDocs(q, 12).map((d) => d.title);
      expect(titles).toContain("Dai Dai — en español");
      expect(editionAboveEnglish(titles), titles.join(" | ")).toBe(false);
    });
  }

  for (const q of ["dai dai español", "dai dai espanol", "spanish", "mundial"]) {
    it(`"${q}": a search in its language still finds the edition first`, () => {
      expect(searchDocs(q, 8)[0]?.title).toBe("Dai Dai — en español");
    });
  }

  // "dai" as origin/main ranked it (8 Oct 2026), the review's evidence.
  it("negative control: the shipped order, the edition second, is caught", () => {
    expect(editionAboveEnglish(["Dai Dai — the World Cup Anthem", "Dai Dai — en español", "Dai Dai", "Chart Records"])).toBe(true);
  });
});
