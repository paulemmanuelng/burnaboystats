import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/api",
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

import ApiPage from "../app/api/page";
import { GET as liveChartsJson } from "../app/api/v1/live-charts/route";
import { liveCharts, livePlacementCount } from "../app/data/liveCharts";

/**
 * #8 of the live debug of 15 Oct 2026 (tools-api-1, Paul: "yes to all"). The
 * /api page's /live-charts card was the one endpoint card whose figure was
 * not the endpoint's own count: it said "{placements} placements" while the
 * endpoint answers count = the releases, countOf "releases". Now it reads
 * "{releases} releases · {placements} placements", both read from the
 * snapshot, on both layouts.
 */

const n = (x: number, one: string, many: string) => `${x} ${x === 1 ? one : many}`;
const expected = () => `${n(liveCharts.length, "release", "releases")} · ${n(livePlacementCount, "placement", "placements")}`;

/** The size printed on every /live-charts endpoint row, desktop and phone. */
function liveSizes() {
  const { container } = render(<ApiPage />);
  const rows = [...container.querySelectorAll('a[href$="/api/v1/live-charts"]')].filter((a) => a.querySelector('[class*="size"]'));
  const desktop = container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  return {
    desktop: rows.filter((a) => desktop.contains(a)).map((a) => a.querySelector('[class*="size"]')?.textContent),
    phone: rows.filter((a) => !desktop.contains(a)).map((a) => a.querySelector('[class*="size"]')?.textContent),
  };
}

describe("#8: the /api live-charts card leads with the endpoint's own count", () => {
  it("both layouts print '{releases} releases · {placements} placements'", () => {
    const { desktop, phone } = liveSizes();
    expect(desktop).toEqual([expected()]);
    expect(phone).toEqual([expected()]);
  });

  it("its first figure is the endpoint's own count and noun", async () => {
    const body = await liveChartsJson().json();
    expect(body.countOf).toBe("releases");
    expect(body.count).toBe(liveCharts.length);
    const { desktop } = liveSizes();
    expect(desktop[0]).toMatch(new RegExp(`^${body.count} ${body.countOf} · `));
    // The placements are the snapshot's, summed across its releases.
    expect(livePlacementCount).toBe(liveCharts.reduce((s, r) => s + r.platforms.reduce((m, p) => m + p.entries.length, 0), 0));
    expect(desktop[0]).toMatch(new RegExp(` · ${livePlacementCount} placements$`));
  });

  it("the page types neither figure", () => {
    const src = readFileSync("app/api/page.tsx", "utf8");
    expect(src).toContain("count(liveCharts.length, \"release\", \"releases\")");
    expect(src).toContain("count(livePlacementCount, \"placement\", \"placements\")");
  });

  it("negative control: the card origin/main shipped did not say its endpoint's count", async () => {
    // app/api/page.tsx:77 on origin/main (a9574c64), verbatim.
    const shipped = `${livePlacementCount} placements`;
    const body = await liveChartsJson().json();
    expect(shipped).not.toContain(`${body.count} ${body.countOf}`);
    expect(shipped).not.toBe(expected());
  });
});
