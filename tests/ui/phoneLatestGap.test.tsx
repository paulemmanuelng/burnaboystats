import { renderToStaticMarkup } from "react-dom/server";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import MobileHome from "../../app/components/MobileHome";
import styles from "../../app/components/mobileHome.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Paul, 14 Oct 2026, on the phone home: "fix this big gap here". The Latest
 * row (J1-3) closes the hero, and its own 10px bottom padding, the hero's 18px
 * foot and the stat grid's 26px margin stacked into 54px of empty band between
 * the headline and the grid. With the row there, the hero drops its foot and
 * the grid sits 10px under it. Every figure here is read from the stylesheet.
 */

const CSS = read(join(__dirname, "..", "..", "app/components/mobileHome.module.css"));
const any = () => true;
const px = (v: string | undefined) => (v === undefined ? NaN : v === "0" ? 0 : Number(v.replace(/px$/, "")));
/** The bottom padding a rule set gives, from padding-bottom or the shorthand's 1st/3rd value. */
const padBottom = (sel: string) => {
  const pb = winning(CSS, sel, "padding-bottom", any);
  if (pb !== undefined) return px(pb);
  const p = winning(CSS, sel, "padding", any)?.split(/\s+/);
  return p ? px(p[2] ?? p[0]) : 0;
};

/** Headline → stat grid rule, in px, for a hero whose foot and grid margin are given. */
const band = (heroFoot: number, gridTop: number) => padBottom(".latest") + heroFoot + gridTop;

describe("the phone home: Latest row to the stat grid", () => {
  const doc = new DOMParser().parseFromString(renderToStaticMarkup(<MobileHome />), "text/html");
  const hero = doc.querySelector(`.${styles.hero}`)!;

  it("the hero that ends on the Latest row carries heroLatest", () => {
    expect(hero.lastElementChild?.classList.contains(styles.latest)).toBe(true);
    expect(hero.classList.contains(styles.heroLatest)).toBe(true);
    expect(hero.nextElementSibling?.classList.contains(styles.statGrid)).toBe(true);
  });

  it("leaves at most 24px from the headline to the grid's rule", () => {
    const gap = band(padBottom(".heroLatest"), px(winning(CSS, ".heroLatest + .statGrid", "margin-top", any)));
    expect(gap).toBeLessThanOrEqual(24);
    expect(gap).toBeGreaterThanOrEqual(padBottom(".latest"));
  });

  it("negative control: the shipped spacing (hero foot, grid margin) gave 54px", () => {
    const shipped = band(padBottom(".hero"), px(winning(CSS, ".statGrid", "margin-top", any)));
    expect(shipped).toBe(54);
    expect(shipped).toBeGreaterThan(24);
  });
});
