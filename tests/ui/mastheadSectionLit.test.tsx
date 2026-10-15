import { renderToStaticMarkup } from "react-dom/server";

let pathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn() }),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Nav from "../../app/components/Nav";
import MobileTabBar from "../../app/components/MobileTabBar";
import { navItems } from "../../app/lib/links";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";
import sitemap from "../../app/sitemap";
import { songSlugs } from "../../app/data/songs";
import { albumPageSlugs } from "../../app/data/albumPages";
import { carSlugs } from "../../app/data/cars";

/**
 * Question 5 (live debug 15 Oct 2026, music-11; Paul: "yes to all"): the
 * desktop masthead lit a section link only on the section's own page — MUSIC
 * on /music, dark on every song, album and listener page — while the phone's
 * tab bar lit the section throughout. The masthead now lights the section a
 * page belongs to by the tab bar's rule (lib/navSection.ts), keeps
 * aria-current="page" for the exact page only, and leaves /dai-dai unlit.
 */

const suggested = suggestedSearchDocs();
const el = (html: string) => {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d;
};
/** The masthead at a path: its lit links, and the one marked current. */
function masthead(path: string) {
  pathname = path;
  const d = el(renderToStaticMarkup(<Nav suggested={suggested} />));
  const links = [...d.querySelectorAll("#primary-menu a")];
  return {
    lit: links.filter((a) => a.classList.contains("navActive")).map((a) => a.textContent),
    current: links.filter((a) => a.getAttribute("aria-current") === "page").map((a) => a.textContent),
  };
}
/** The phone tab bar's lit tab's href, at a path (null: none, or no bar). */
function tab(path: string) {
  pathname = path;
  const d = el(renderToStaticMarkup(<MobileTabBar />));
  return d.querySelector('a[aria-current="page"]')?.getAttribute("href") ?? null;
}

const label = (href: string) => navItems.find((i) => i.href === href)!.label;
const paths = [...new Set(sitemap().map((e) => new URL(e.url).pathname.replace(/\/$/, "") || "/"))];

describe("question 5: the masthead lights the section on its sub-pages", () => {
  it("MUSIC on every song, album and listener page, and none of them is the current page", () => {
    const deep = [...songSlugs.map((s) => `/music/${s}`), ...albumPageSlugs.map((a) => `/music/albums/${a}`), "/music/listeners"];
    expect(deep.length).toBeGreaterThan(20);
    for (const p of deep) expect(masthead(p), p).toEqual({ lit: ["Music"], current: [] });
  });

  it("RECORDS on the record books and the car pages", () => {
    for (const p of ["/records/awards", "/records/tours/map", ...carSlugs.map((c) => `/records/cars/${c}`)])
      expect(masthead(p), p).toEqual({ lit: ["Records"], current: [] });
  });

  it("RECORDS on the calendar and its day pages, filed with the records as on the phone", () => {
    for (const p of ["/on-this-day", "/on-this-day/16-august"]) expect(masthead(p), p).toEqual({ lit: ["Records"], current: [] });
  });

  it("the section's own page is lit and is the current page", () => {
    for (const i of navItems) expect(masthead(i.href), i.href).toEqual({ lit: [i.label], current: [i.label] });
  });

  it("a page with a masthead link of its own lights that link alone: Afrobeats on the board, Compare on a pair", () => {
    expect(masthead("/afrobeats/wizkid/charts")).toEqual({ lit: ["Afrobeats"], current: [] });
    expect(masthead("/afrobeats/wizkid")).toEqual({ lit: ["Afrobeats"], current: [] });
    expect(masthead("/compare/burna-boy-vs-wizkid").lit).toEqual(["Compare"]);
  });

  it("/dai-dai and /dai-dai/es stay unlit, as on the phone; so do home and the pages about the site", () => {
    for (const p of ["/dai-dai", "/dai-dai/es", "/", "/about", "/faq", "/methodology"])
      expect(masthead(p), p).toEqual({ lit: [], current: [] });
  });

  it("on every route in the sitemap: at most one link lit, and the tab bar's section wherever the masthead has that link", () => {
    expect(paths.length).toBeGreaterThan(200);
    const wrong: string[] = [];
    for (const p of paths) {
      const { lit } = masthead(p);
      if (lit.length > 1) wrong.push(`${p}: ${lit.join("+")}`);
      const t = tab(p);
      // Where the page has a masthead link of its own (Afrobeats, Compare),
      // that one; otherwise the phone's tab, when the masthead carries it.
      const own = navItems.find((i) => p === i.href || p.startsWith(`${i.href}/`));
      const want = own ? own.label : t && navItems.some((i) => i.href === t) ? label(t) : null;
      if ((lit[0] ?? null) !== want) wrong.push(`${p}: ${lit[0] ?? "none"} (want ${want ?? "none"})`);
    }
    expect(wrong).toEqual([]);
  });
});

describe("negative control", () => {
  it("main's rule (Nav.tsx: `const active = pathname === item.href`) lights nothing on a song page", () => {
    const shipped = (path: string) => navItems.filter((item) => path === item.href).map((i) => i.label);
    expect(shipped(`/music/${songSlugs[0]}`)).toEqual([]);
    expect(masthead(`/music/${songSlugs[0]}`).lit).not.toEqual(shipped(`/music/${songSlugs[0]}`));
  });
});
