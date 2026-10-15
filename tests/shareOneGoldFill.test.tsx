import { renderToStaticMarkup } from "react-dom/server";
import { decl, read, rules } from "./fixtures/cssRules";

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

import SharePage from "../app/share/page";
import maker from "../app/components/StatCardMaker.module.css";
import phone from "../app/components/mobileStatCards.module.css";
import share from "../app/share/share.module.css";

/**
 * oneGoldFill (J6-1, J6-2; design review 8 Oct 2026): /share is a Tool page,
 * so each layout has one gold fill, the save action. The desktop's Square/Story
 * segment wore the gold ramp beside Download, and "By the numbers ↗" was a
 * second gold pill (btn btnPrimary) in the bottom row. The segments now take
 * Job 0's ink fill on both layouts, and By the numbers is a gold text link in
 * the right column.
 */

const FILL_PROPS = ["background", "background-color", "background-image"];
const GOLD_FILL = /var\(--gold-fill\)|var\(--gold-bright\)/;

/** The selectors whose background names a gold fill token. */
const goldFills = (css: string) =>
  rules(css)
    .filter((r) => FILL_PROPS.some((p) => GOLD_FILL.test(decl(r.body, p) ?? "")))
    .map((r) => r.selector);

function parse(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

describe("oneGoldFill: one gold fill per /share layout", () => {
  it("desktop: only Download (and its hover) fills gold", () => {
    expect(goldFills(read("app/components/StatCardMaker.module.css"))).toEqual([".primary", ".primary:hover"]);
  });

  it("phone: only the action bar's primary fills gold", () => {
    expect(goldFills(read("app/components/mobileStatCards.module.css"))).toEqual([".primary"]);
  });

  it("each rendered layout holds exactly one primary and no btnPrimary", () => {
    const root = parse(renderToStaticMarkup(<SharePage />));
    const desk = root.querySelector(`.${share.desktopOnly}`)!;
    const screen = root.querySelector(`.${phone.screen}`)!;
    expect(desk.querySelectorAll(".btnPrimary")).toHaveLength(0);
    expect(screen.querySelectorAll(".btnPrimary")).toHaveLength(0);
    expect(desk.querySelectorAll(`.${maker.primary}`)).toHaveLength(1);
    expect(screen.querySelectorAll(`.${phone.primary}`)).toHaveLength(1);
  });

  it("By the numbers ↗ is a text link in the right column, to the same page", () => {
    const root = parse(renderToStaticMarkup(<SharePage />));
    const desk = root.querySelector(`.${share.desktopOnly}`)!;
    const links = [...desk.querySelectorAll('a[href="/records/by-the-numbers"]')];
    expect(links.map((a) => [a.className, a.textContent])).toEqual([[maker.asideNumbers, "By the numbers ↗"]]);
    expect(desk.querySelector(`.${maker.aside}`)!.contains(links[0])).toBe(true);
    const css = read("app/components/StatCardMaker.module.css");
    const body = rules(css).filter((r) => r.selector === ".asideNumbers").map((r) => r.body).join(";");
    expect(decl(body, "color")).toBe("var(--gold)");
    for (const p of FILL_PROPS) expect(decl(body, p)).toBeUndefined();
  });

  it("negative controls: the shipped gold segment and the shipped gold pill fail", () => {
    // StatCardMaker.module.css on e85e6efe, lines 78–82, verbatim.
    const shippedCss = `.ratioOn {
  background-color: var(--gold-fill);
  background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
  color: var(--ink-on-gold);
}`;
    expect(goldFills(`${read("app/components/StatCardMaker.module.css")}\n${shippedCss}`)).not.toEqual([".primary", ".primary:hover"]);
    // StatCardMaker.tsx on e85e6efe, line 267, as it renders.
    const shippedPill = parse('<a href="/records/by-the-numbers" class="btn btnPrimary">By the numbers ↗</a>');
    expect(shippedPill.querySelectorAll(".btnPrimary")).not.toHaveLength(0);
  });
});
