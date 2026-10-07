import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareB-08, the full-site debug of 5 Oct 2026. In a tie the head still
 * styled side A as the leader. Live at 1440 and 390, light and dark, 7 Oct:
 * /compare?a=black-sherif&b=tiwa-savage&feat=0&ng=0 read "Level — both at
 * least 0 certified units." under two zeros, A's in ink (.figureLead) and B's
 * muted (.figureBehind), and B's bar carried .barFillBehind. The page decided
 * "lead" as totalA >= totalB, so any equal totals put B behind. A side is
 * styled behind only when it trails.
 */

const norm = (s: string | null | undefined) => (s ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
const page = async (sp: Record<string, string>) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));
  return root;
};

type Side = { figure: string; figureClasses: string[]; barClasses: string[] };

function head(root: HTMLElement): { sides: Side[]; diff: string } {
  const result = root.querySelector("#result");
  expect(result).not.toBeNull();
  const sides = [...result!.children].map((cell) => {
    const figure = cell.querySelector(`p.${styles.figure}`)!;
    const bar = cell.querySelector(`.${styles.barFill}`)!;
    return { figure: norm(figure.textContent), figureClasses: [...figure.classList], barClasses: [...bar.classList] };
  });
  const diff = norm(result!.nextElementSibling?.querySelector("p")?.textContent);
  return { sides, diff };
}

const behind = (s: Side) => ({
  figure: s.figureClasses.includes(styles.figureBehind),
  bar: s.barClasses.includes(styles.barFillBehind),
});
/** Level means neither side reads as behind, and both carry the same styling. */
const level = (sides: Side[]) =>
  sides.length === 2 &&
  sides.every((s) => !behind(s).figure && !behind(s).bar) &&
  sides[0].figureClasses.join(" ") === sides[1].figureClasses.join(" ") &&
  sides[0].barClasses.join(" ") === sides[1].barClasses.join(" ");

const TIE = { a: "black-sherif", b: "tiwa-savage", feat: "0", ng: "0" };

describe("a tie styles neither side as the leader", () => {
  it("Black Sherif vs Tiwa Savage, featured off and Nigeria separated: both at 0, both styled the same", async () => {
    const { sides, diff } = head(await page(TIE));

    // The premise: this is the tie the live page showed.
    expect(diff).toBe("Level — both at least 0 certified units.");
    expect(sides.map((s) => s.figure)).toEqual(["0", "0"]);

    expect(sides.map(behind)).toEqual([
      { figure: false, bar: false },
      { figure: false, bar: false },
    ]);
    expect(sides.every((s) => s.figureClasses.includes(styles.figureLead))).toBe(true);
    expect(level(sides)).toBe(true);
  });

  it("negative control: the classes the live page shipped for that tie are not level", () => {
    // Read off burnaboystats.com in headless Chrome (1440 and 390, both themes).
    const shipped: Side[] = [
      { figure: "0", figureClasses: [styles.figure, styles.figureLead], barClasses: [styles.barFill] },
      { figure: "0", figureClasses: [styles.figure, styles.figureBehind], barClasses: [styles.barFill, styles.barFillBehind] },
    ];
    expect(level(shipped)).toBe(false);
  });

  it("a real lead still mutes the trailing side, whichever side trails", async () => {
    // 1,550,000 vs 865,000 with the pair's defaults.
    const ab = head(await page({ a: "black-sherif", b: "tiwa-savage" }));
    expect(ab.diff).toMatch(/^Black Sherif leads by at least /);
    expect(ab.sides.map(behind)).toEqual([
      { figure: false, bar: false },
      { figure: true, bar: true },
    ]);
    expect(ab.sides[0].figureClasses).toContain(styles.figureLead);

    const ba = head(await page({ a: "tiwa-savage", b: "black-sherif" }));
    expect(ba.diff).toMatch(/^Black Sherif leads by at least /);
    expect(ba.sides.map(behind)).toEqual([
      { figure: true, bar: true },
      { figure: false, bar: false },
    ]);
    expect(ba.sides[1].figureClasses).toContain(styles.figureLead);
  });

  it("one side alone keeps the lead styling", async () => {
    const { sides } = head(await page({ a: "black-sherif" }));
    expect(sides).toHaveLength(1);
    expect(behind(sides[0])).toEqual({ figure: false, bar: false });
    expect(sides[0].figureClasses).toContain(styles.figureLead);
  });
});
