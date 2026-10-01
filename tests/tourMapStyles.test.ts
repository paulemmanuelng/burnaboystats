import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The tour map's look, read from its stylesheets (design response of 30 Sep
 * 2026, change list items 8, 12, 22–28 and 30a, and the review of 1 Oct).
 *
 * Each guard runs the same check on the rule as it is now and on the line the
 * site shipped before the redesign (origin/main cda9fb74, quoted verbatim
 * below), so a guard that passes on both would be caught as vacuous. Where the
 * redesign renamed a class (.countBig became .figValue, .cardRegion became the
 * card sheet's .region), the check is the same and only the selector differs.
 */

const MAP = readFileSync("app/records/tours/map/map.module.css", "utf8");
const SVG = readFileSync("app/components/tourMapSvg.module.css", "utf8");
const CARD = readFileSync("app/components/tourMapCard.module.css", "utf8");
const PHONE = readFileSync("app/components/mobileTourMap.module.css", "utf8");

const stripComments = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, "");

/** The body of one @media block, by its exact query text. */
const media = (css: string, query: string) => {
  const clean = stripComments(css);
  const at = clean.indexOf(`@media ${query}`);
  if (at < 0) return "";
  const open = clean.indexOf("{", at);
  let depth = 0;
  for (let i = open; i < clean.length; i++) {
    if (clean[i] === "{") depth++;
    else if (clean[i] === "}" && --depth === 0) return clean.slice(open + 1, i);
  }
  return "";
};

/** The top level only: comments and @media blocks removed. */
const top = (css: string) => stripComments(css).replace(/@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, "");

/** Rules in source order: [selector, declarations]. Selectors are
 *  whitespace-normalised, so ".a,\n.b" reads ".a, .b". */
const rules = (css: string) =>
  [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => {
    const d: Record<string, string> = {};
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) d[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    return [m[1].trim().replace(/\s+/g, " "), d] as const;
  });

/** The declarations of one exact selector, later rules winning. */
const decls = (css: string, selector: string) =>
  Object.assign({}, ...rules(css).filter(([s]) => s === selector).map(([, d]) => d)) as Record<string, string>;

const px = (v: string | undefined) => (v === undefined ? NaN : parseFloat(v));

// ── The shipped lines (origin/main cda9fb74), verbatim ─────────────────────
const SHIPPED_MAP = `
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
}
.countBig {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 58px;
  line-height: 0.9;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}
.frame { position: relative; border: 1px solid var(--line); background: var(--bg-soft); }
.swatch {
  width: 14px;
  height: 14px;
  background: color-mix(in srgb, var(--gold-wash-base) 42%, transparent);
  border: 1px solid var(--gold);
  display: block;
  flex: none;
}
.namesCell { font-size: 13.5px; line-height: 1.7; color: var(--text-body); }
.pills { display: flex; gap: 10px; flex-wrap: wrap; padding: 40px 0 72px; }
.on {
  fill: color-mix(in srgb, var(--gold-wash-base) 42%, transparent);
  stroke: color-mix(in srgb, var(--scrim-base) 90%, transparent);
  stroke-width: 0.4;
  cursor: pointer;
  transition: fill 0.15s ease;
  outline: none;
}
.on:hover,
.on:focus-visible { fill: var(--gold-hit); }
.activePath { fill: var(--gold-hit); }
.card {
  position: fixed;
  z-index: 50;
  pointer-events: none;
  background: color-mix(in srgb, var(--veil-base) 97%, transparent);
  border: 1px solid var(--gold);
  box-shadow: 0 10px 34px color-mix(in srgb, var(--shadow-base) calc(55% * var(--shadow-strength)), transparent);
  padding: 12px 14px;
  max-width: 280px;
}
.cardAbove .arrow { bottom: -7px; border-top: 7px solid var(--gold); }
.cardBelow .arrow { top: -7px; border-bottom: 7px solid var(--gold); }
.cardRegion {
  display: block;
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}
`;
const SHIPPED_PHONE = `
.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--ember);
}
.regionCount {
  margin-left: auto;
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 19px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}
`;

// ── Desktop pills: inside the content column ────────────────────────────────

/** The side padding an element carrying every one of these classes gets
 *  (same specificity, so source order decides), from the top level. */
const sidePadding = (css: string, classes: string[]) => {
  let left: string | undefined, right: string | undefined;
  for (const [sel, d] of rules(top(css))) {
    if (!classes.includes(sel)) continue;
    if (d.padding) {
      const v = d.padding.split(/\s+/);
      right = v[1] ?? v[0];
      left = v[3] ?? v[1] ?? v[0];
    }
    if (d["padding-inline"]) {
      const v = d["padding-inline"].split(/\s+/);
      left = v[0];
      right = v[1] ?? v[0];
    }
    if (d["padding-left"]) left = d["padding-left"];
    if (d["padding-right"]) right = d["padding-right"];
  }
  return { left, right };
};

describe("the desktop pills sit in the content column (TM Desktop: padX column, margin 24px 0 64px)", () => {
  it("the page renders them on one element with .wrap", () => {
    expect(readFileSync("app/components/TourMapDesktop.tsx", "utf8")).toContain("className={`${styles.wrap} ${styles.pills}`}");
  });

  it("they keep .wrap's 40px sides, with 24px above and 64px below", () => {
    expect(sidePadding(MAP, [".wrap", ".pills"])).toEqual({ left: "40px", right: "40px" });
    expect(decls(top(MAP), ".pills")).toMatchObject({ "padding-top": "24px", "padding-bottom": "64px" });
  });

  it("negative control: the shipped `padding: 40px 0 72px` zeroed the sides (x 100 at 1440, not 140)", () => {
    expect(sidePadding(SHIPPED_MAP, [".wrap", ".pills"])).toEqual({ left: "0", right: "0" });
  });

  it("negative control: so did the first build's `padding: 24px 0 64px`", () => {
    const firstBuild = `.wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
.pills { display: flex; gap: 12px; flex-wrap: wrap; padding: 24px 0 64px; }`;
    expect(sidePadding(firstBuild, [".wrap", ".pills"]).left).toBe("0");
  });
});

// ── Item 30a: hover is --gold-hit plus a 1.5px --text outline ──────────────

/** The --text outline a hovered country shows OUTSIDE its shape: half the
 *  stroke of an unfilled --text outline layer that a hover (".hot…" or
 *  ":hover") rule draws, since the country's own fill covers the inner half.
 *  0 when the sheet draws no such layer. */
const hoverOutlinePx = (css: string) => {
  const outline = rules(top(css)).find(([s, d]) => /hot|:hover/i.test(s) && d.fill === "none" && d.stroke === "var(--text)");
  return outline ? px(outline[1]["stroke-width"]) / 2 : 0;
};
const hoverFills = (css: string) =>
  rules(top(css))
    .filter(([s]) => /hot|:hover/i.test(s))
    .map(([, d]) => d.fill)
    .filter(Boolean);

describe("item 30a: hover is --gold-hit with a 1.5px --text outline", () => {
  it("the outline layer is 3px of --text, half of it outside the shape; the refill is --gold-hit", () => {
    expect(decls(top(SVG), ".hotOutline")).toMatchObject({ fill: "none", stroke: "var(--text)", "stroke-width": "3px" });
    expect(decls(top(SVG), ".refillHot").fill).toBe("var(--gold-hit)");
    expect(hoverOutlinePx(SVG)).toBe(1.5);
    expect(hoverFills(SVG)).toContain("var(--gold-hit)");
  });

  it("negative control: the shipped hover was the --gold-hit fill alone, no outline", () => {
    expect(hoverFills(SHIPPED_MAP)).toContain("var(--gold-hit)");
    expect(hoverOutlinePx(SHIPPED_MAP)).toBe(0);
  });
});

// ── Item 8: the close-up ────────────────────────────────────────────────────

describe("item 8: the close-up is 260 × 224, 200 × 172 in the 1024 band, bottom-left, labelled", () => {
  const BAND = "(max-width: 1239px)";

  it("its box at 1440 and in the 1024 band", () => {
    expect(decls(top(MAP), ".closeup")).toMatchObject({ width: "260px", height: "224px", left: "9px", bottom: "9px", position: "absolute" });
    expect(decls(media(MAP, BAND), ".closeup")).toMatchObject({ width: "200px", height: "172px" });
  });

  it("its label band (22px) sits inside the box, and the label is 'Western Europe'", () => {
    expect(decls(top(MAP), ".closeup")["box-sizing"]).toBe("border-box");
    expect(decls(top(MAP), ".closeupLabel").height).toBe("22px");
    expect(readFileSync("app/components/TourMapDesktop.tsx", "utf8")).toMatch(/<span className=\{styles\.closeupLabel\}>Western Europe<\/span>/);
  });

  it("negative control: the shipped sheet has no close-up, so the size check fails on it", () => {
    expect(decls(top(SHIPPED_MAP), ".closeup").width).toBeUndefined();
    expect(decls(top(SHIPPED_MAP), ".frame")).toMatchObject({ position: "relative" }); // the shipped frame does parse
  });
});

// ── Item 12: country names are 24px buttons ─────────────────────────────────

describe("item 12: each country name is a button, at least 24px tall (the mouse target)", () => {
  it(".countryBtn", () => {
    expect(px(decls(top(MAP), ".countryBtn")["min-height"])).toBeGreaterThanOrEqual(24);
    expect(readFileSync("app/components/TourMapDesktop.tsx", "utf8")).toMatch(/<button[\s\S]{0,120}?className=\{`\$\{styles\.countryBtn\}/);
  });

  it("the region names stay at the approved 17px (D-06)", () => {
    expect(decls(top(MAP), ".table th.regionCell")["font-size"]).toBe("17px");
  });

  it("negative control: the shipped names were one text cell with no target height", () => {
    expect(px(decls(top(SHIPPED_MAP), ".namesCell")["min-height"])).toBeNaN();
  });
});

// ── Items 22–28: gold steps back ───────────────────────────────────────────

describe("item 22: the headline figures are ink", () => {
  it(".figValue is --text, on both layouts", () => {
    expect(decls(top(MAP), ".figValue").color).toBe("var(--text)");
    expect(decls(top(PHONE), ".figValue").color).toBe("var(--text)");
  });
  it("negative control: the shipped .countBig was gold", () => {
    expect(decls(top(SHIPPED_MAP), ".countBig").color).toBe("var(--gold)");
  });
});

describe("item 23: the phone's region counts are ink", () => {
  it(".regionCount is --text", () => {
    expect(decls(top(PHONE), ".regionCount").color).toBe("var(--text)");
  });
  it("negative control: the shipped .regionCount was gold", () => {
    expect(decls(top(SHIPPED_PHONE), ".regionCount").color).toBe("var(--gold)");
  });
});

describe("item 24: the phone badge is --gold, as on every sibling back-bar page (owner)", () => {
  it(".badge is --gold, and reads '{n} countries' from the data", () => {
    expect(decls(top(PHONE), ".badge").color).toBe("var(--gold)");
    expect(readFileSync("app/components/MobileTourMap.tsx", "utf8")).toMatch(/className=\{styles\.badge\}[^>]*>\s*\{[^}]*totals\.countries\} countries/);
  });
  it("negative control: the superseded artboard (designs/desktop/TM Phone.dc.html) drew it muted", () => {
    // The badge's inline style there, verbatim, read as a rule.
    const artboard = ".badge { font:700 11px/1 'Space Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted) }";
    expect(decls(artboard, ".badge").color).not.toBe("var(--gold)");
  });
});

describe("item 25: the card's region label is muted", () => {
  it("the card sheet's .region is --text-muted", () => {
    expect(decls(top(CARD), ".region, .label, .hint").color).toBe("var(--text-muted)");
  });
  it("negative control: the shipped .cardRegion was gold", () => {
    expect(decls(top(SHIPPED_MAP), ".cardRegion").color).toBe("var(--gold)");
  });
});

describe("item 26: the kickers are muted, with the ember tick", () => {
  it("desktop and phone .kicker are --text-muted; the tick is --ember", () => {
    for (const css of [MAP, PHONE]) {
      expect(decls(top(css), ".kicker").color).toBe("var(--text-muted)");
      expect(decls(top(css), ".tick").background).toBe("var(--ember)");
    }
    const desktop = readFileSync("app/components/TourMapDesktop.tsx", "utf8");
    expect(desktop).toMatch(/<span className=\{styles\.tick\} aria-hidden="true" \/>\s*Live worldwide/);
  });
  it("negative control: the shipped kickers were gold (desktop) and ember text (phone)", () => {
    expect(decls(top(SHIPPED_MAP), ".kicker").color).toBe("var(--gold)");
    expect(decls(top(SHIPPED_PHONE), ".kicker").color).toBe("var(--ember)");
  });
});

describe("item 27: the card's edge is --rule, and it has no pointer arrow", () => {
  const drawsPointer = (css: string) => rules(top(css)).some(([, d]) => Object.entries(d).some(([k, v]) => /^border-(top|bottom)$/.test(k) && /^7px solid/.test(v)));
  it(".card border is 1px --rule; no rule draws the 7px triangle", () => {
    expect(decls(top(CARD), ".card").border).toBe("1px solid var(--rule)");
    expect(drawsPointer(CARD)).toBe(false);
  });
  it("negative control: the shipped card was gold-edged with a 7px gold arrow", () => {
    expect(decls(top(SHIPPED_MAP), ".card").border).toBe("1px solid var(--gold)");
    expect(drawsPointer(SHIPPED_MAP)).toBe(true);
  });
});

describe("item 28: each legend swatch is the fill it explains, never gold", () => {
  it("the swatches take the map's own fills and the --map-border edge", () => {
    const played = decls(top(SVG), ".played").fill;
    const land = decls(top(SVG), ".land").fill;
    expect(played).toBe("var(--map-played)");
    expect(decls(top(MAP), ".swatch, .swatchLand").border).toBe("1px solid var(--map-border)");
    expect(decls(top(MAP), ".swatch").background).toBe(played);
    expect(decls(top(MAP), ".swatchLand").background).toBe(land);
    expect(decls(top(MAP), ".swatchDot").background).toBe(decls(top(SVG), ".dot").fill);
  });
  it("negative control: the shipped swatch was the 42% gold wash with a gold edge, not today's played fill", () => {
    const shipped = decls(top(SHIPPED_MAP), ".swatch");
    expect(shipped.background).toBe("color-mix(in srgb, var(--gold-wash-base) 42%, transparent)");
    expect(shipped.background).not.toBe(decls(top(SVG), ".played").fill);
    expect(shipped.border).toBe("1px solid var(--gold)");
  });
});


describe("item 5: the desktop lede is set at body size so the map reaches the first screen", () => {
  const css = readFileSync(join(process.cwd(), "app/records/tours/map/map.module.css"), "utf8");
  const ledeRule = (src: string) => /\n\.lede \{([^}]*)\}/.exec(src)?.[1] ?? "";
  it("uses --type-body (16px) and its leading, not --type-lede", () => {
    expect(ledeRule(css)).toContain("font-size: var(--type-body);");
    expect(ledeRule(css)).toContain("line-height: var(--type-body-lh);");
    expect(ledeRule(css)).not.toContain("--type-lede");
  });
  it("negative control: the shipped rule is caught", () => {
    const SHIPPED = "\n.lede {\n  margin: 0;\n  max-width: 430px;\n  font-size: var(--type-lede);\n  line-height: var(--type-lede-lh);\n  color: var(--text-body);\n  text-wrap: pretty;\n}";
    expect(ledeRule(SHIPPED)).toContain("--type-lede");
    expect(ledeRule(SHIPPED)).not.toContain("font-size: var(--type-body);");
  });
});

describe("item 5: the desktop lede stays at two lines on its 430px measure", () => {
  const src = readFileSync(join(process.cwd(), "app/components/TourMapDesktop.tsx"), "utf8");
  const ledeText = (s: string) =>
    (/<p className=\{styles\.lede\}>([\s\S]*?)<\/p>/.exec(s)?.[1] ?? "").replace(/\s+/g, " ").trim();
  // Measured in Chrome at 1440x900, 16px Geist: 105 characters wrap to two
  // lines (map foot 905px); the shipped 157-character lede took four (934px).
  it("is short enough for two lines", () => {
    expect(ledeText(src).length).toBeGreaterThan(40);
    expect(ledeText(src).length).toBeLessThanOrEqual(105);
  });
  it("negative control: the shipped four-line lede is caught", () => {
    const SHIPPED =
      '<p className={styles.lede}>\n            The countries Burna Boy has taken to the stage, from arena tours and stadium nights to festival headline sets. Pick a\n            country on the map or in the list for its shows.\n          </p>';
    expect(ledeText(SHIPPED).length).toBeGreaterThan(105);
  });
});
