import { decl, read, rules } from "./fixtures/cssRules";
import { THEMES, colour, contrast, type RGBA, type Theme } from "./fixtures/tokenColours";

/**
 * Fix 120 (design review 8 Oct 2026): in light, /share's Download fills
 * #945e00 with white ink, as btnPrimary does; the gold ramp is dark-only. The
 * canvas drew the dark ramp and near-black ink on the light artboards. The
 * site was already right (globals.css: --gold-bright, --gold-fill and
 * --gold-dim all resolve to #945e00 in light, --ink-on-gold to #ffffff); this
 * holds it, on both layouts.
 */

const LAYOUTS = ["app/components/StatCardMaker.module.css", "app/components/mobileStatCards.module.css"];
const hex = (c: RGBA) => `#${c.slice(0, 3).map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;

/** `.primary`'s fill, ramp stops and label, resolved in a theme. */
function primary(file: string, theme: Theme) {
  const body = rules(read(file))
    .filter((r) => r.media === null && r.selector === ".primary")
    .map((r) => r.body)
    .join(";");
  const image = decl(body, "background-image")!;
  const stops = [...image.matchAll(/var\(--[\w-]+\)/g)].map((m) => hex(colour(m[0], theme)));
  return {
    fill: hex(colour(decl(body, "background-color")!, theme)),
    stops,
    label: hex(colour(decl(body, "color")!, theme)),
  };
}

describe("fix 120: Download in light is #945e00 with white ink; the ramp is dark-only", () => {
  it.each(LAYOUTS)("%s", (file) => {
    const light = primary(file, "light");
    expect(light).toEqual({ fill: "#945e00", stops: ["#945e00", "#945e00", "#945e00"], label: "#ffffff" });
    expect(contrast(colour(light.label, "light"), colour(light.fill, "light"))).toBeGreaterThanOrEqual(4.5);
    const dark = primary(file, "dark");
    expect(dark).toEqual({ fill: "#ffb627", stops: ["#ffd24a", "#ffb627", "#c98a2e"], label: "#14100a" });
  });

  it("negative control: the dark resolution, which the light canvas drew, is not the light one", () => {
    // The second arms of globals.css's light-dark() pairs for the three ramp
    // tokens and the label: the drawing the canvas showed in light.
    for (const file of LAYOUTS) {
      const [l, d] = THEMES.map((t) => primary(file, t));
      expect(d.stops).not.toEqual(l.stops);
      expect(d.label).not.toBe(l.label);
      expect(contrast(colour(d.label, "dark"), colour(l.fill, "light"))).toBeLessThan(4.5);
    }
  });
});
