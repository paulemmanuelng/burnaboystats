import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/visualized",
}));

import VisualizedPage from "../../app/records/visualized/page";
import TierDonut from "../../app/components/TierDonut";
import donutStyles from "../../app/components/TierDonut.module.css";
import vizStyles from "../../app/components/mobileVisualized.module.css";
import { totalWins, decidedNominations as decided, pendingNominations as pending } from "../../app/data/awards";
import { trees, text, dom } from "../fixtures/phoneTrees";

/**
 * oneDenominator (site review 8 Oct 2026, Job 5 · J5-2 (c), fix 114): the
 * win-rate donut counts one thing — decided nominations — in its title, its
 * centre, its ring and its legend. Pending nominations are listed as a count
 * with no arc and no percentage.
 */
const rate = Math.round((totalWins / decided) * 100);
const { desktop, phone } = trees(renderToStaticMarkup(<VisualizedPage />));

/** Each arc's drawn length plus its gap, summed: a ring of one denominator closes at C. */
const arcSum = (svg: Element, gap: number) =>
  [...svg.querySelectorAll("circle[stroke-dasharray]")]
    .map((c) => Number(c.getAttribute("stroke-dasharray")!.split(" ")[0]) + gap)
    .reduce((a, b) => a + b, 0);

describe("oneDenominator: the win-rate donut counts decided nominations only", () => {
  it("desktop: the title, the centre and the ring", () => {
    const section = desktop!.querySelector("#win-rate")!;
    expect(text(section.querySelector("h2"))).toBe(`Won ${totalWins} of ${decided}`);
    const svg = section.querySelector("svg")!;
    const [num, label] = [...svg.querySelectorAll("text")];
    expect(text(num)).toBe(`${totalWins} won`);
    expect([...label.querySelectorAll("tspan")].map(text)).toEqual([`${rate}% of ${decided}`, "decided"]);
    // Two arcs, Won and Not won, closing the ring: the ring is the decided count.
    expect(svg.querySelectorAll("circle[stroke-dasharray]").length).toBe(2);
    expect(arcSum(svg, 3)).toBeCloseTo(2 * Math.PI * 78, 3);
  });

  it("desktop: the legend's shares are over decided; Pending is a count with no %", () => {
    const section = desktop!.querySelector("#win-rate")!;
    const items = [...section.querySelectorAll(`.${donutStyles.legendItem}`)];
    const row = (label: string) => items.find((li) => text(li.querySelector(`.${donutStyles.legendLabel}`)) === label)!;
    const pct = (li: Element) => Number(text(li.querySelector(`.${donutStyles.pct}`)).replace("%", ""));
    expect(pct(row("Won"))).toBe(rate);
    expect(pct(row("Won")) + pct(row("Not won"))).toBe(100);
    expect(text(row("Not won"))).toContain(String(decided - totalWins));
    if (pending > 0) {
      const p = row("Pending");
      expect(text(p)).toBe(`Pending${pending}`);
      expect(text(p)).not.toContain("%");
      expect(p.querySelector(`.${donutStyles.swatch}`)?.getAttribute("style") ?? "").not.toMatch(/background/);
    } else {
      expect(row("Pending")).toBeUndefined();
    }
  });

  it("phone: the same title, the count in the ring, one denominator in the label", () => {
    const donut = [...phone!.querySelectorAll(`.${vizStyles.donut}`)].find((d) => text(d.querySelector("h2")).startsWith("Won"))!;
    expect(text(donut.querySelector("h2"))).toBe(`Won ${totalWins} of ${decided}`);
    const svg = donut.querySelector("svg")!;
    expect(text(svg.querySelector("text"))).toBe(String(totalWins));
    expect(text(donut.querySelector(`.${vizStyles.donutCentreLabel}`))).toBe(`won · ${rate}% of ${decided} decided`);
    expect(svg.querySelectorAll("circle").length).toBe(2);
    expect(arcSum(svg, 2)).toBeCloseTo(2 * Math.PI * 34, 3);
    const rows = [...donut.querySelectorAll(`.${vizStyles.legendRow}`)].map(text);
    expect(rows).toEqual(["Won" + totalWins, "Not won" + (decided - totalWins), ...(pending ? ["Pending" + pending] : [])]);
    expect(rows.join(" ")).not.toContain("%");
  });

  it("negative control: the shipped call split one ring over two denominators", () => {
    // app/records/visualized/page.tsx:814–818 on main e85e6efe: Pending in the
    // ring (total decided + pending) under a centre that is the rate of decided.
    // Rendered with the awards page's mid-October 2026 figures (83 won, 238
    // decided, 11 pending; REC-8 in tests/liveDebug1015bRecords.test.tsx), not
    // today's. From 25 Nov 2026, with BreakTudo decided, only five are pending,
    // and the two shares round to the same 34% (85/252 and 85/247), so live
    // figures could no longer show the split.
    const [won, dec, pend] = [83, 238, 11];
    const shippedRate = Math.round((won / dec) * 100);
    const shipped = dom(
      renderToStaticMarkup(
        <TierDonut
          segments={[
            { label: "Won", value: won, color: "x" },
            { label: "Not won", value: dec - won, color: "x" },
            { label: "Pending", value: pend, color: "x" },
          ]}
          total={dec + pend}
          centerNum={`${shippedRate}%`}
          centerLabel="win rate"
          ariaLabel="x"
        />,
      ),
    );
    const wonPct = Number(text(shipped.querySelector(`.${donutStyles.pct}`)).replace("%", ""));
    expect(wonPct).toBe(Math.round((won / (dec + pend)) * 100)); // 33: the ring's share
    expect(wonPct).not.toBe(shippedRate); // 35: the centre's, over a different base
  });
});
