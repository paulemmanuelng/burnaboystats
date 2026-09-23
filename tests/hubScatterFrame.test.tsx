import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HubScatter from "../app/components/HubScatter";
import { totalAwards } from "../app/data/certifications";

/**
 * The design's rule for the hub scatter is that no dot sits on the frame: its
 * y scale puts the domain's top at y = 30, and the frame is above that. Burna
 * Boy passed the design's fixed 240 plaques on 23 Sep 2026 (248), which at
 * 240 would have drawn his dot at y ≈ 21.7 — on the frame, with his label
 * above the viewBox. This renders the component itself, so it fails if the
 * component stops using the derived domain (lib/hubScatterScale.ts).
 */
describe("hub scatter keeps every dot inside the frame", () => {
  const cys = (html: string) => [...html.matchAll(/<circle[^>]*\bcy="([\d.]+)"/g)].map((m) => Number(m[1]));

  it.each([
    ["today's leader", totalAwards()],
    ["a board past 300", 312],
    ["a board under the design's 240", 180],
  ])("%s", (_label, top) => {
    const html = renderToStaticMarkup(
      HubScatter({
        dots: [
          { slug: "a", name: "A", countries: 25, plaques: top, anchor: true },
          { slug: "b", name: "B", countries: 3, plaques: 12, anchor: false },
        ],
      }),
    );
    const ys = cys(html);
    expect(ys.length).toBe(2);
    for (const y of ys) {
      expect(y, "above the frame's inner edge").toBeGreaterThanOrEqual(30);
      expect(y, "below the baseline").toBeLessThanOrEqual(280);
    }
  });
});
