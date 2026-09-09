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
});
