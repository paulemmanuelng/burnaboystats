import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

/**
 * Every button rule that sets a label colour must pin -webkit-text-fill-color
 * beside it.
 *
 * WebKit resolves -webkit-text-fill-color AHEAD of `color`. On this site that
 * is not a theoretical ordering detail — it has produced two reported bugs,
 * both iPhone-only, both invisible to every desktop browser and to an emulated
 * mobile viewport:
 *
 *   * .btnPrimary rendered orange-on-gold on an iPhone while measuring 10.6:1
 *     everywhere else. Fixed by pinning the fill colour and resetting filter,
 *     blend mode and text-shadow — see the CAUTION comment on that rule.
 *   * .btnSecondary rendered with a BLANK label on /dai-dai, 9 Sep 2026, while
 *     measuring 18:1 everywhere else. Same signature, same device class, and
 *     the button sits in the same flex row as the one already fixed — the
 *     hardening simply never reached it.
 *
 * The second one is why this file exists. A fix applied to one button and not
 * its neighbour is not a fix, it is a coin toss on which control a reader taps
 * first. So the rule is enforced across the class rather than remembered.
 */

const CSS = readFileSync("app/globals.css", "utf8");

/** Rule blocks whose selector names a button and which set `color`. */
const buttonRules = [...CSS.matchAll(/^(\.[A-Za-z][\w-]*(?:[^{\n]*)?)\{([^}]*)\}/gm)]
  .map((m) => ({ selector: m[1].trim(), body: m[2] }))
  .filter((r) => /\.btn|\.navStatCard/i.test(r.selector))
  .filter((r) => /(?:^|[;{\s])color\s*:/.test(r.body));

describe("button labels cannot be re-tinted by the device", () => {
  it("finds the button rules at all", () => {
    expect(
      buttonRules.length,
      "no button rule in globals.css sets a colour any more — this guard is now checking nothing"
    ).toBeGreaterThanOrEqual(4);
  });

  it.each(buttonRules.map((r) => [r.selector, r] as const))(
    "%s pins -webkit-text-fill-color",
    (selector, rule) => {
      expect(
        /-webkit-text-fill-color\s*:/.test(rule.body),
        `${selector} sets \`color\` without pinning \`-webkit-text-fill-color\`. WebKit ` +
          `resolves the fill colour first, so this label can render a colour no rule in ` +
          `this codebase ever set — which is exactly how .btnPrimary shipped orange-on-gold ` +
          `and .btnSecondary shipped blank, both on iPhone, both measuring fine everywhere else.`
      ).toBe(true);
    }
  );

  // The resting state carries the resets too. A filter, a blend mode or an
  // inherited text-shadow can each alter a label the cascade says is solid, and
  // all three were part of the original iPhone fix.
  it("the two hero buttons also reset the ways a label can be altered", () => {
    for (const name of [".btnPrimary", ".btnSecondary"]) {
      const rule = buttonRules.find((r) => r.selector === name);
      expect(rule, `${name} is gone from globals.css`).toBeTruthy();
      for (const prop of ["text-shadow", "filter", "mix-blend-mode"]) {
        expect(
          new RegExp(`${prop}\\s*:`).test(rule!.body),
          `${name} no longer resets ${prop} — one of the three guards from the original iPhone fix`
        ).toBe(true);
      }
    }
  });

  // THE THIRD GUARD, and the one that took three attempts to identify.
  //
  // Pinning the fill colour and resetting filter/blend was not enough:
  // .btnSecondary's label was still blank on iPhone, and the tell was that it
  // appeared ON HOVER. The only thing hover added was a transform — a
  // compositing layer. With no layer at rest the label did not paint at all.
  //
  // So every button that pins a fill colour must also be promoted at rest, and
  // must KEEP the promotion in its hover state rather than swapping it out for
  // a plain translate, which tears the layer down and rebuilds it.
  it.each([".btnPrimary", ".btnSecondary", ".btnGhost"])(
    "%s promotes its layer at rest",
    (name) => {
      const rule = buttonRules.find((r) => r.selector === name);
      expect(rule, `${name} is gone from globals.css`).toBeTruthy();
      expect(
        /transform\s*:[^;]*translateZ\(0\)/.test(rule!.body),
        `${name} does not promote its compositing layer at rest. Without it a WebKit ` +
          `label can fail to paint until something else creates a layer — which is exactly ` +
          `how .btnSecondary shipped blank until hover.`
      ).toBe(true);
    }
  );

  it.each([".btnPrimary", ".btnSecondary"])("%s:hover keeps the promotion", (name) => {
    const rule = buttonRules.find((r) => r.selector === `${name}:hover`)
      ?? { body: (/\.btnSecondary:hover \{([^}]*)\}/.exec(CSS)?.[1] ?? "") };
    const hover = new RegExp(`\\${name}:hover \\{([^}]*)\\}`).exec(CSS)?.[1] ?? rule.body;
    if (!/transform\s*:/.test(hover)) return; // no transform on hover, nothing to tear down
    expect(
      /translateZ\(0\)/.test(hover),
      `${name}:hover sets a transform without translateZ, so the layer promoted at rest is ` +
        `torn down and rebuilt on hover — the state the resting promotion exists to avoid`
    ).toBe(true);
  });
});
