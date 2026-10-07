import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
  redirect: () => {
    throw new Error("redirect()");
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
import CountryPage, { generateStaticParams } from "../../app/compare/in/[country]/page";
import { keepParens } from "../../app/compare/chips";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareB-05, the full-site debug of 5 Oct 2026. keepParens returned a
 * title as two siblings — the words, then a nowrap span " (…)" that began with
 * the space — and two parents split them:
 *
 * - The song/album picker chip is inline-flex, so the words and the span were
 *   two flex items and the span's leading space collapsed. Read live in
 *   headless Chrome, 7 Oct (1440 dark, 390 light, 320 system-dark): "Buga(Lo
 *   Lo Lo)", "Cough(Odo)", "love nwantiti(ah ah ah)", 0px between the word and
 *   the "(" on every bracketed chip whose words and bracket shared a line (at
 *   1440: 8 of 8 on Kizz Daniel and Ayra Starr's pickers, 18 of 18 on CKay and
 *   Wizkid's, 10 of 10 on Rema and CKay's), while the slot title above read
 *   "BUGA (LO LO LO)".
 * - The country board's Biggest plaques title is a grid, so "(ah ah ah)" took
 *   a row of its own under "love nwantiti" on the UK board ("(Remix)" under
 *   "Jerusalema" in France, under "Enjoy Yourself" in Australia), every width.
 *
 * The title is now ONE span — one flex or grid item — with the space before
 * the "(" outside the nowrap run. With that markup grafted onto the live pages
 * at the same widths and themes, every chip read one space (8.1px) between
 * word and bracket, each board title kept its bracket on the title's line,
 * the slot and top-plaque titles (running text) measured exactly as before,
 * and a too-long slot title broke at that space ("LIKE THAT (BOMBOCLATT) /
 * (SHALLIPOPI FT. WIZKID)") instead of inside "(BOMBOCLATT)". Keeping the
 * space INSIDE the run would also have fixed the gap, but glued the last word
 * to the bracket: 25 bracketed chips ran past a 320 screen's edge as shipped,
 * 29 that way, 17 this way.
 *
 * jsdom does no layout, so this pins the markup that makes it work.
 */

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const compare = async (sp: Record<string, string>) => html(await ComparePage({ searchParams: Promise.resolve(sp) }));
const board = async (country: string) => html(await CountryPage({ params: Promise.resolve({ country }) }));

/** A parent's layout items: element children and non-blank text runs. */
const items = (el: Element) =>
  [...el.childNodes].filter((n) => n.nodeType === Node.ELEMENT_NODE || (n.nodeType === Node.TEXT_NODE && norm(n.textContent) !== ""));

/** How a title element is set: one item; its "(…)" alone in a nowrap span;
 *  the space before it (if the title has one) in the words, outside the run. */
function titleAsSet(title: Element) {
  const paren = title.querySelector(`.${styles.nowrap}`);
  const before = paren?.previousSibling;
  return {
    text: norm(title.textContent),
    parenAlone: /^\([^()]*\)$/.test(paren?.textContent ?? ""),
    spaceOutsideRun: before?.nodeType === Node.TEXT_NODE && /\s$/.test(before.textContent ?? ""),
  };
}

/** The shipped helper, verbatim, as the negative control. */
const shippedKeepParens = (title: string) => {
  const m = title.match(/^(.*?)(\s*\([^()]*\))$/);
  return m ? <>{m[1]}<span className={styles.nowrap}>{m[2]}</span></> : title;
};

describe("keepParens returns one element, so a flex or grid parent cannot split the title", () => {
  it("“Buga (Lo Lo Lo)” is one span: the words and their space, then the nowrap “(Lo Lo Lo)”", () => {
    const chip = html(<a className={styles.chip}>{keepParens("Buga (Lo Lo Lo)")}</a>).firstElementChild!;
    const [only, ...rest] = items(chip);
    expect(rest).toHaveLength(0);
    expect(only.nodeName).toBe("SPAN");
    expect(items(only as Element).map((n) => n.textContent)).toEqual(["Buga ", "(Lo Lo Lo)"]);
    expect(titleAsSet(only as Element)).toEqual({ text: "Buga (Lo Lo Lo)", parenAlone: true, spaceOutsideRun: true });
  });

  it("negative control: the shipped helper gave the chip two items, the second starting with the space", () => {
    const chip = html(<a className={styles.chip}>{shippedKeepParens("Buga (Lo Lo Lo)")}</a>).firstElementChild!;
    expect(items(chip).map((n) => n.textContent)).toEqual(["Buga", " (Lo Lo Lo)"]);
    expect(titleAsSet(chip).parenAlone).toBe(false);
  });

  it("only the LAST bracket is held together, and a title with no space before it gains none", () => {
    const two = html(keepParens("Goodbye (Warm Up) (with Asake)") as React.ReactElement).firstElementChild!;
    expect(items(two).map((n) => n.textContent)).toEqual(["Goodbye (Warm Up) ", "(with Asake)"]);
    const tight = html(keepParens("Title(Remix)") as React.ReactElement).firstElementChild!;
    expect(tight.textContent).toBe("Title(Remix)");
  });

  it("a title with no bracket is the plain string, as before", () => {
    expect(keepParens("Last Last")).toBe("Last Last");
    expect(keepParens("Love, Damini")).toBe("Love, Damini");
  });
});

describe("picker chips keep the space before a bracket", () => {
  for (const [sp, expected] of [
    [{ a: "kizz-daniel", b: "ayra-starr", mode: "songs" }, ["Buga (Lo Lo Lo)", "Cough (Odo)"]],
    [{ a: "ckay", b: "wizkid", mode: "songs" }, ["love nwantiti (ah ah ah)", "BODY (danz)"]],
    [{ a: "rema", b: "ckay", mode: "songs" }, ["Dimension (JAE5 ft. Skepta & Rema)"]],
  ] as const) {
    it(`/compare?${new URLSearchParams(sp)}: every chip with a bracket is one flex item, its space outside the nowrap run`, async () => {
      const root = await compare({ ...sp });
      const chips = [...root.querySelectorAll(`a.${styles.chip}`)].filter((c) => c.querySelector(`.${styles.nowrap}`));
      expect(chips.length).toBeGreaterThan(1);
      for (const chip of chips) {
        const [only, ...rest] = items(chip);
        const title = new URL(chip.getAttribute("href")!, "https://x.test").searchParams;
        const want = title.get("sa") ?? title.get("sb");
        expect(rest, norm(chip.textContent)).toHaveLength(0);
        expect(only.nodeType, norm(chip.textContent)).toBe(Node.ELEMENT_NODE);
        const t = titleAsSet(only as Element);
        expect(t.text).toBe(want);
        expect(t.parenAlone, t.text).toBe(true);
        expect(t.spaceOutsideRun, t.text).toBe(/\s\([^()]*\)$/.test(want!));
      }
      const texts = chips.map((c) => norm(c.textContent));
      for (const want of expected) expect(texts).toContain(want);
    });
  }
});

describe("the board's Biggest plaques title keeps its bracket beside its words", () => {
  for (const [country, title] of [
    ["united-kingdom", "love nwantiti (ah ah ah)"],
    ["france", "Jerusalema (Remix)"],
    ["australia", "Enjoy Yourself (Remix)"],
  ] as const) {
    it(`/compare/in/${country}: “${title}” is one grid row over its holders`, async () => {
      const root = await board(country);
      const host = [...root.querySelectorAll(`.${styles.cbPlaqueTitle}`)].find((el) => norm(el.textContent).startsWith(title));
      expect(host, title).toBeTruthy();
      const grid = items(host!);
      expect(grid).toHaveLength(2);
      expect((grid[1] as Element).classList.contains(styles.cbPlaqueBy)).toBe(true);
      expect(grid[0].nodeType).toBe(Node.ELEMENT_NODE);
      expect(titleAsSet(grid[0] as Element)).toEqual({ text: title, parenAlone: true, spaceOutsideRun: true });
    });
  }

  it("every board: each Biggest plaques title is two grid rows, the title and its holders", async () => {
    for (const { country } of generateStaticParams()) {
      const root = await board(country);
      for (const host of root.querySelectorAll(`.${styles.cbPlaqueTitle}`)) {
        expect(items(host).length, `${country}: ${norm(host.textContent)}`).toBe(2);
      }
    }
  });
});
