import { render, cleanup, act } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../../app/records/tours/revenue/page";
import { revenueShows } from "../../app/data/tourRevenue";
import { tours } from "../../app/data/tours";
import { tourBoxOffice } from "../../app/lib/tourBoxOffice";
import { RUNS_HREF, nightAnchor, nightHref } from "../../app/lib/showsDeepLink";
import { RUNS_HEADING } from "../../app/lib/multiNightRuns";
import { twinAnchor } from "../../app/components/AnchorTwins";

/**
 * J3-11's links land where they say (C-19, design review 8 Oct 2026: "the
 * board rank links to that row"). A tour table's "No. 13 ↗" goes to the
 * night's own row on the board — k-night-13 on desktop, m-night-13 on the
 * phone, the two mapped by the page's AnchorTwins — and a run's link to the
 * runs view, #view=runs, read on arrival by both boards.
 */

const box = tourBoxOffice(tours);
const ranks = Object.values(box).flatMap((nights) => Object.values(nights).flatMap((n) => (n.kind === "night" ? [n.rank] : [])));
const doc = new DOMParser().parseFromString(renderToStaticMarkup(<RevenuePage />), "text/html");
const desk = doc.querySelector('[class*="_desktopOnly_"]')!;
const phone = doc.querySelector('[class*="_screen_"]')!;

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("every rank a tour table links to is a row on both boards", () => {
  it("the tables link to more than a handful of nights", () => {
    expect(ranks.length).toBeGreaterThan(20);
  });

  it("each night's row carries its rank's id, desktop k-, phone m-, and only those rows do", () => {
    for (const rank of ranks) {
      const k = desk.querySelector(`#${nightAnchor(rank, "k")}`);
      const m = phone.querySelector(`#${nightAnchor(rank, "m")}`);
      const row = revenueShows[rank - 1];
      expect(k?.textContent, `k ${rank}`).toContain(row.venue);
      expect(m?.textContent, `m ${rank}`).toContain(row.venue);
    }
    // Every night on the board has one, whoever's it is: the rank is the
    // place among all of them.
    expect(desk.querySelectorAll('[id^="k-night-"]').length).toBe(revenueShows.length);
    expect(phone.querySelectorAll('[id^="m-night-"]').length).toBe(revenueShows.length);
  });

  it("a link copied on one layout finds its twin on the other", () => {
    expect(twinAnchor(nightAnchor(13, "k"))).toBe(nightAnchor(13, "m"));
    expect(twinAnchor(nightAnchor(13, "m"))).toBe(nightAnchor(13, "k"));
    expect(nightHref(13, "k")).toBe("/records/tours/revenue#k-night-13");
    expect(readFileSync(join(process.cwd(), "app/records/tours/revenue/page.tsx"), "utf8")).toMatch(/<AnchorTwins \/>/);
  });

  it("the rows land clear of the sticky bars", () => {
    const desktopCss = readFileSync(join(process.cwd(), "app/records/tours/revenue/revenue.module.css"), "utf8");
    const phoneCss = readFileSync(join(process.cwd(), "app/components/mobileRevenue.module.css"), "utf8");
    expect(desktopCss).toMatch(/\.row\[id\]\s*\{\s*scroll-margin-top:\s*calc\(88px/);
    expect(phoneCss).toMatch(/\.showRow\[id\]\s*\{\s*scroll-margin-top:\s*calc\(141px/);
  });
});

describe("#view=runs opens the runs chip, on arrival and on a change of fragment", () => {
  const pressed = (root: Element) => [...root.querySelectorAll("button[aria-pressed='true']")].map((b) => b.childNodes[0].textContent);

  it("arriving on the link: both boards open on Multi-night runs", () => {
    window.history.replaceState(null, "", RUNS_HREF);
    const { container } = render(<RevenuePage />);
    const d = container.querySelector('[class*="desktopOnly"]')!;
    const p = [...container.querySelectorAll("main > div")].find((x) => /screen/.test(x.className))!;
    expect(pressed(d)).toEqual([RUNS_HEADING]);
    expect(pressed(p)).toEqual([RUNS_HEADING]);
  });

  it("the bare address still opens All", () => {
    window.history.replaceState(null, "", "/records/tours/revenue");
    const { container } = render(<RevenuePage />);
    const d = container.querySelector('[class*="desktopOnly"]')!;
    expect(pressed(d)).toEqual(["All artists"]);
  });

  it("a fragment change to #view=runs on the page switches to it", () => {
    window.history.replaceState(null, "", "/records/tours/revenue");
    const { container } = render(<RevenuePage />);
    const d = container.querySelector('[class*="desktopOnly"]')!;
    act(() => {
      window.history.replaceState(null, "", RUNS_HREF);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(pressed(d)).toEqual([RUNS_HEADING]);
  });

});
