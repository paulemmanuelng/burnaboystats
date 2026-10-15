import { renderToStaticMarkup } from "react-dom/server";
import { decl, read, rules, winning } from "../fixtures/cssRules";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/share",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SharePage from "../../app/share/page";
import styles from "../../app/components/mobileStatCards.module.css";

/**
 * J6-1 (design review 8 Oct 2026, fixes 118, 134): on the phone /share, the
 * Story/Square segment sits ABOVE the preview, and the preview is sized to the
 * room left between the segment and the action bar, so the card's figure is
 * above the bar. Below a 240px room the card keeps 240 and runs under the bar;
 * the page scrolls (fix 134).
 *
 * Before: the segment came after the stage, and the story card was the full
 * 366px column wide, 651px tall at 402 x 874. Its figure sat at y≈986, under
 * the 130px bar that starts at y 744.
 *
 * The figures in the model are the brief's (Sharing.dc.html: the rail ends at
 * y 291 at 402 x 874; the figure is 65–76% of the story card's height, its
 * value top ≈1251 and bottom ≈1464 of 1920). Every CSS length is read from the
 * stylesheet, so the model and the build cannot drift. The real geometry is
 * measured in headless Chrome and recorded in the PR.
 */

const CSS_PATH = "app/components/mobileStatCards.module.css";
const CSS = read(CSS_PATH);
const top = (m: string | null) => m === null;
const px = (v: string | undefined) => {
  if (v === "0") return 0;
  const m = v?.match(/^(-?[\d.]+)px$/);
  if (!m) throw new Error(`not a px length: ${v}`);
  return Number(m[1]);
};
/** Every value of `prop` in a rule body, in order (a fallback pair declares it twice). */
const all = (body: string, prop: string) =>
  [...body.matchAll(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`, "g"))].map((m) => m[1].trim());
const bodyOf = (css: string, sel: string, media = top) =>
  rules(css)
    .filter((r) => media(r.media) && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

/** `margin: 6px 18px` and friends → [top, right, bottom, left] in px. */
const box = (v: string) => {
  const p = v.split(/\s+/).map(px);
  const [t, r = t, b = t, l = r] = p;
  return [t, r, b, l];
};

function parse(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

// ── 1 · Source order ────────────────────────────────────────────────────────

/** Where the segment and the card sit in a /share document's phone tree. */
function order(root: HTMLElement) {
  const screen = root.querySelector(`.${styles.screen}`)!;
  const seg = screen.querySelector('[role="group"][aria-label="Card shape"]')!;
  const card = screen.querySelector(`img.${styles.card}`)!;
  const first = screen.querySelector(`.${styles.first}`);
  return {
    segBeforeCard: !!(seg.compareDocumentPosition(card) & Node.DOCUMENT_POSITION_FOLLOWING),
    inFirst: !!first && first.contains(seg) && first.contains(card),
  };
}

describe("J6-1: the Story/Square segment sits above the preview, in the first screen", () => {
  const root = parse(renderToStaticMarkup(<SharePage />));

  it("the segment precedes the card, and both sit in .first", () => {
    expect(order(root)).toEqual({ segBeforeCard: true, inFirst: true });
  });

  it(".first holds the hero, the rail, the segment and the stage, in that order; the notes and the bar follow it", () => {
    const first = root.querySelector(`.${styles.first}`)!;
    const kids = [...first.children].map((c) => c.className);
    expect(kids).toHaveLength(4);
    expect(kids[0]).toContain(styles.hero);
    expect(kids[1]).toContain(styles.rail);
    expect(kids[2]).toContain(styles.ratios);
    expect(kids[3]).toContain(styles.stage);
    const after = [...first.parentElement!.children].slice([...first.parentElement!.children].indexOf(first) + 1);
    expect(after.map((c) => c.className.split(" ")[0])).toEqual([styles.note, styles.note, styles.spacer, styles.actionBar]);
  });

  it("negative control: main before J6-1 put the segment after the stage", () => {
    // MobileStatCards.tsx on e85e6efe, lines 139–141 and 192–195, verbatim.
    const shipped = `      </ScrollRail>

      <div className={styles.stage}>
        )}
      </div>

      <div className={styles.ratios} role="group" aria-label="Card shape">`;
    const stage = shipped.indexOf("<div className={styles.stage}>");
    const seg = shipped.indexOf('<div className={styles.ratios} role="group" aria-label="Card shape">');
    expect(stage).toBeGreaterThan(-1);
    expect(seg).toBeGreaterThan(stage);
    // …and the built file has them the other way round.
    const built = read("app/components/MobileStatCards.tsx");
    expect(built.indexOf('<div className={styles.ratios} role="group" aria-label="Card shape">')).toBeLessThan(
      built.indexOf("<div className={styles.stage}>"),
    );
  });
});

// ── 2 · The CSS contract ────────────────────────────────────────────────────

/** The back bar's height from its own rules: [px, the inset term]. */
function backBarHeight(css: string): [number, string] {
  const bar = bodyOf(css, ".backBar");
  const padTop = decl(bar, "padding-top")!.match(/^calc\(([\d.]+)px \+ (env\([^)]*\))\)$/)!;
  const [, , padBottom] = box(decl(bar, "padding")!);
  const rule = px(decl(bar, "border-bottom")!.split(" ")[0]);
  const btn = px(decl(bodyOf(css, ".backBtn"), "height"));
  return [Number(padTop[1]) + btn + padBottom + rule, padTop[2]];
}

/** The action bar's height from its own rules: [px, the inset term]. */
function actionBarHeight(css: string): [number, string] {
  const bar = bodyOf(css, ".actionBar");
  const pad = decl(bar, "padding")!.match(/^([\d.]+)px [\d.]+px calc\(([\d.]+)px \+ (env\(.*\))\)$/)!;
  const rule = px(decl(bar, "border-top")!.split(" ")[0]);
  const gap = px(decl(bar, "gap"));
  const primary = px(decl(bodyOf(css, ".primary"), "min-height"));
  const shares = px(decl(bodyOf(css, ".secondary"), "min-height"));
  return [rule + Number(pad[1]) + primary + gap + shares + Number(pad[2]), pad[3]];
}

describe("J6-1: the room is read from the bars' own rules", () => {
  // .first's min-height is the viewport less the two bars, each written as
  // (its px + its inset). No custom property: a module never declares one
  // (tests/cssColourTokens.test.ts).
  const terms = (v: string) => {
    const m = v.match(/^calc\((100s?vh) - \(([\d.]+)px \+ (env\([^)]*\))\) - \(([\d.]+)px \+ (env\([^)]*\))\)\)$/);
    if (!m) throw new Error(`unexpected .first min-height: ${v}`);
    return { unit: m[1], back: [Number(m[2]), m[3]], bar: [Number(m[4]), m[5]] };
  };

  it("the back bar's term is its padding, circle and rule (69px at no inset)", () => {
    const [h, inset] = backBarHeight(CSS);
    expect(h).toBe(69);
    for (const v of all(bodyOf(CSS, ".first"), "min-height")) expect(terms(v).back).toEqual([h, inset]);
  });

  it("the action bar's term is its rule, padding, primary, gap and shares (130px at no inset)", () => {
    const [h, inset] = actionBarHeight(CSS);
    expect(h).toBe(130);
    for (const v of all(bodyOf(CSS, ".first"), "min-height")) expect(terms(v).bar).toEqual([h, inset]);
  });

  it(".first fills the viewport between the bars, svh last so it wins where it is understood", () => {
    const first = bodyOf(CSS, ".first");
    // A grid whose last row takes the room: a column flexbox left Chrome's
    // cqh at 0 inside the grown stage, and the card drew 2px wide.
    expect(decl(first, "display")).toBe("grid");
    expect(decl(first, "grid-template-columns")).toBe("minmax(0, 1fr)");
    expect(decl(first, "grid-template-rows")).toBe("auto auto auto 1fr");
    expect(all(first, "min-height").map((v) => terms(v).unit)).toEqual(["100vh", "100svh"]);
  });

  it("the stage takes the rest, with a 240px floor, and is a size container", () => {
    const stage = bodyOf(CSS, ".stage");
    expect(decl(stage, "min-height")).toBe("240px");
    expect(decl(stage, "container-type")).toBe("size");
    expect(decl(stage, "align-items")).toBe("flex-start");
  });

  it("the card fits the room both ways; it no longer takes the column's full width", () => {
    expect(decl(bodyOf(CSS, ".card"), "width")).toBeUndefined();
    expect(winning(CSS, ".cardStory", "width", top)).toBe("min(100cqw, 100cqh * 9 / 16)");
    expect(winning(CSS, ".cardSquare", "width", top)).toBe("min(100cqw, 100cqh)");
    expect(winning(CSS, ".cardStory", "aspect-ratio", top)).toBe("9 / 16");
    expect(winning(CSS, ".cardSquare", "aspect-ratio", top)).toBe("1");
  });

  it("the segment is one 44px frame in a 56px row", () => {
    const seg = bodyOf(CSS, ".ratios");
    const [t, , b] = box(decl(seg, "margin")!);
    expect(t + px(decl(seg, "min-height")) + b).toBe(56);
    expect(decl(seg, "border")).toBe("1px solid var(--btn-edge)");
    expect(decl(seg, "overflow")).toBe("hidden");
    expect(decl(bodyOf(CSS, ".ratio"), "border")).toBe("0");
  });
});

// ── 3 · The model ───────────────────────────────────────────────────────────

const RAIL_END = 291; // the brief's rail end at 402 x 874 (Sharing.dc.html)
const FIGURE = [0.65, 0.76]; // the figure's band on the story card

/** The story card at a viewport, from the stylesheet's own lengths. */
function storyAt(W: number, H: number, css = CSS) {
  const seg = bodyOf(css, ".ratios");
  const [segT, , segB] = box(decl(seg, "margin")!);
  const segRow = segT + px(decl(seg, "min-height")) + segB;
  const stage = bodyOf(css, ".stage");
  const [stT, , stB] = box(decl(stage, "margin")!);
  const [, stR, , stL] = box(decl(stage, "padding")!);
  const floor = px(decl(stage, "min-height"));
  const [bar] = actionBarHeight(css);
  const barTop = H - bar;
  const stageTop = RAIL_END + segRow + stT;
  const room = Math.max(floor, barTop - stB - stageTop);
  const w = Math.min(W - stL - stR, (room * 9) / 16);
  const h = (w * 16) / 9;
  return { stageTop, barTop, w: Math.round(w), h: Math.round(h), figTop: stageTop + FIGURE[0] * h, figBottom: stageTop + FIGURE[1] * h };
}

describe("J6-1: the figure lands above the bar (fix 134's floor below 240)", () => {
  it("402 x 874: a 216 x 384 story, the figure at y≈601–643, above the bar at 744", () => {
    const s = storyAt(402, 874);
    expect([s.stageTop, s.barTop]).toEqual([351, 744]);
    expect([s.w, s.h]).toEqual([216, 384]);
    expect(Math.round(s.figTop)).toBe(601);
    expect(Math.round(s.figBottom)).toBe(643);
    expect(s.figBottom).toBeLessThanOrEqual(s.barTop);
  });

  it("390 x 844: 199 x 354, the figure still above the bar at 714", () => {
    const s = storyAt(390, 844);
    expect([s.w, s.h]).toEqual([199, 354]);
    expect(s.figBottom).toBeLessThanOrEqual(s.barTop);
  });

  it("375 x 667: the 240px floor, 135 x 240; the card runs under the bar and the page scrolls", () => {
    const s = storyAt(375, 667);
    expect([s.w, s.h]).toEqual([135, 240]);
    expect(s.stageTop + s.h).toBeGreaterThan(s.barTop);
  });

  it("whatever the rail's real end, a room at or above the floor keeps the figure above the bar", () => {
    // figure bottom = barTop − 9 − 0.24 × room: above the bar for any room.
    for (const H of [740, 800, 844, 874, 932])
      for (const rail of [260, 291, 330]) {
        const room = H - 130 - 9 - (rail + 56 + 4);
        if (room < 240) continue;
        expect(rail + 56 + 4 + FIGURE[1] * room).toBeLessThan(H - 130);
      }
  });

  it("negative control: main's full-width story card put the figure under the bar at 402", () => {
    // mobileStatCards.module.css on e85e6efe: .stage { padding: 0 18px } and
    // .card { width: 100% } with .cardStory { aspect-ratio: 9 / 16 }; the
    // stage came straight after the rail, and the segment after the stage.
    const w = 402 - 36;
    const h = (w * 16) / 9;
    const stageTop = RAIL_END;
    expect(Math.round(h)).toBe(651);
    expect(stageTop + FIGURE[1] * h).toBeGreaterThan(744);
    expect(stageTop + h).toBeGreaterThan(744 + 130); // the card ran past the screen's foot
  });
});
