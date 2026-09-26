import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

let path = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileTabBar from "../app/components/MobileTabBar";

/**
 * The phone's tab bar on /dai-dai/es.
 *
 * Change-list item 13 of the Dai Dai redesign (approved by Paul, 26 Sep 2026):
 * "the phone top bar and tabs translated". The first build translated the top
 * bar and left the tabs alone, so the Spanish edition showed HOME / MUSIC /
 * CERTS / CHARTS / RECORDS at 390 — the bar is global, in the root layout, and
 * the redesign never touched it.
 *
 * The expected words are the artboard's (tabsEs in "Dai Dai Redesign.dc.html").
 * The design handoff is not in the repo, so they are written out here.
 */
const ARTBOARD_ES = ["Inicio", "Música", "Certs", "Listas", "Récords"];
const ENGLISH = ["Home", "Music", "Certs", "Charts", "Records"];

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const bar = (at: string) => {
  path = at;
  return doc(renderToStaticMarkup(<MobileTabBar />)).querySelector("nav");
};
const labels = (nav: Element | null) =>
  [...(nav?.querySelectorAll("a") ?? [])].map((a) => a.lastElementChild?.textContent);

describe("the phone tab bar speaks the edition's language", () => {
  it("draws the artboard's Spanish tabs on /dai-dai/es", () => {
    const nav = bar("/dai-dai/es");
    expect(labels(nav)).toEqual(ARTBOARD_ES);
    expect(nav?.getAttribute("lang")).toBe("es");
    expect(nav?.getAttribute("aria-label")).toBe("Barra de pestañas");
  });

  it("keeps the English tabs everywhere else, including the English Dai Dai page", () => {
    for (const at of ["/", "/dai-dai", "/music", "/records"]) {
      const nav = bar(at);
      expect(labels(nav), at).toEqual(ENGLISH);
      expect(nav?.hasAttribute("lang"), at).toBe(false);
      expect(nav?.getAttribute("aria-label"), at).toBe("Tab bar");
    }
  });

  it("changes only the words: the same five places, in the same order", () => {
    const hrefs = (nav: Element | null) => [...(nav?.querySelectorAll("a") ?? [])].map((a) => a.getAttribute("href"));
    expect(hrefs(bar("/dai-dai/es"))).toEqual(hrefs(bar("/dai-dai")));
  });

  it("negative control: the tabs the Spanish edition shipped fail the check", () => {
    // The bar as it rendered on /dai-dai/es before this fix (English labels).
    const shipped = doc(
      '<nav aria-label="Tab bar"><a href="/"><span></span><span>Home</span></a><a href="/music"><span>♪</span><span>Music</span></a><a href="/certifications"><span>★</span><span>Certs</span></a><a href="/live-charts"><span>▲</span><span>Charts</span></a><a href="/records"><span>⌗</span><span>Records</span></a></nav>',
    ).querySelector("nav");
    expect(labels(shipped)).not.toEqual(ARTBOARD_ES);
  });
});
