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

import FooterNav from "../../app/components/FooterNav";
import { navGroups } from "../../app/lib/navGroups";
import { footerColumns } from "../../app/lib/links";

/**
 * SH-07 (design review, 8 Oct 2026): the home page's footer sitemap, the full
 * five-column one, had no link to Compare or the press kit. The home HTML's
 * only /compare link was a row in the phone menu sheet, which is display:none
 * at 1240px and up, so a desktop reader on the home page could reach neither.
 * Compare now sits in "The data" beside Certifications, and the press kit in
 * "The site" beside the API.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const WANTED = ["/compare", "/press"];
const missing = (grid: ParentNode) => {
  const hrefs = new Set([...grid.querySelectorAll("a")].map((a) => a.getAttribute("href")));
  return WANTED.filter((h) => !hrefs.has(h));
};

describe("SH-07: the home footer's sitemap carries Compare and the press kit", () => {
  const grid = parse(renderToStaticMarkup(<FooterNav />)).querySelector(".footerGrid")!;

  it("the premise: the phone menu sheet lists both", () => {
    const sheet = navGroups.flatMap((g) => g.items.map((i) => i.href));
    for (const h of WANTED) expect(sheet).toContain(h);
  });

  it("the home footer links both", () => {
    expect(grid).not.toBeNull();
    expect(missing(grid)).toEqual([]);
  });

  it("each in its column: Compare beside Certifications, the press kit beside the API", () => {
    const data = footerColumns.find((c) => c.label === "The data")!.links.map((l) => l.href);
    expect(data.indexOf("/compare")).toBe(data.indexOf("/certifications") + 1);
    const site = footerColumns.find((c) => c.label === "The site")!.links;
    const i = site.findIndex((l) => l.href === "/press");
    expect(site[i - 1].href).toBe("/api");
    expect(site[i].label).toBe("Press kit");
  });

  // The hrefs of https://burnaboystats.com/'s footer grid, verbatim and in
  // order (live 8 Oct 2026).
  it("negative control: the shipped sitemap, without either, is caught", () => {
    const SHIPPED = ["https://www.tiktok.com/@paulemmanuelng", "/certifications", "/live-charts", "/records/charts", "/music", "/music/listeners", "/records/by-the-numbers", "/records/visualized", "/analysis", "/records", "/records/awards", "/records/tours", "/records/tours/revenue", "/records/tours/festivals", "/records/tours/map", "/records/firsts", "/records/africas-biggest", "/afrobeats", "/records/cars", "/dai-dai", "/dai-dai/es", "/updates", "/timeline", "/on-this-day", "/about", "/music", "/rss.xml", "/methodology", "/curator", "/api", "/search", "/share", "/embed", "/faq", "/contact"];
    const shipped = parse(`<div class="footerGrid">${SHIPPED.map((h) => `<a href="${h}">x</a>`).join("")}</div>`).querySelector("div")!;
    expect(missing(shipped)).toEqual(["/compare", "/press"]);
  });
});
