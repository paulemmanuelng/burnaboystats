import { renderToStaticMarkup } from "react-dom/server";

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
import phoneStyles from "../../app/components/mobileStatCards.module.css";
import { getStatCards } from "../../app/lib/statCards";

/**
 * Fix 118 (design review 8 Oct 2026): on /share only the stage, the
 * Story/Square segment and the actions change (J6-1, J6-2). The canvas renamed
 * the h1 "Share a number", drew it as an h2, dropped the kicker and the gold
 * split word, and stripped the phone back bar's badge and menu. None of that
 * is on the change list, so everything else is pinned here exactly as built.
 */

function parse(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

/** The h1's words, and which of them carry the split-word class. */
function splitWord(h1: Element, cls: string) {
  return {
    text: h1.textContent!.replace(/\s+/g, " ").trim(),
    marked: [...h1.querySelectorAll(`.${cls}`)].map((s) => s.textContent),
  };
}

describe("fix 118, phone: the back bar, kicker, h1 and lede are as built", () => {
  const root = parse(renderToStaticMarkup(<SharePage />));
  const screen = root.querySelector(`.${phoneStyles.screen}`)!;

  it("the back bar: the back circle home, \"Stat cards\", the \"N cards\" badge and the menu", () => {
    const bar = screen.querySelector(`.${phoneStyles.backBar}`)!;
    const back = bar.querySelector(`a.${phoneStyles.backBtn}`)!;
    expect(back.getAttribute("href")).toBe("/");
    expect(back.getAttribute("aria-label")).toBe("Back");
    expect(bar.querySelector(`.${phoneStyles.backLabel}`)!.textContent).toBe("Stat cards");
    const badge = bar.querySelector(`.${phoneStyles.badge}`)!.textContent;
    expect(badge).toBe(`${getStatCards().length} cards`);
    // Negative control, the shipped C-20 state: a bare gold count.
    expect(badge).not.toBe(String(getStatCards().length));
    expect(bar.querySelectorAll("button[data-mobile-menu-button]")).toHaveLength(1);
  });

  it("the kicker, the h1 with its gold split word, and the lede", () => {
    expect(screen.querySelector(`.${phoneStyles.kicker}`)!.textContent).toBe("Built for the timeline");
    const h1s = screen.querySelectorAll("h1");
    expect(h1s).toHaveLength(1);
    expect(screen.querySelector("h2")).toBeNull();
    expect(splitWord(h1s[0], phoneStyles.gold)).toEqual({ text: "Stat cards", marked: ["cards"] });
    expect(screen.querySelector(`.${phoneStyles.lede}`)!.textContent).toBe(
      "Pick a record, download a card. Story ratio is the default on a phone.",
    );
  });

  it("negative control: the shipped h1 with its span removed fails the split-word check", () => {
    const shipped = `<h1 class="${phoneStyles.title}">Stat <span class="${phoneStyles.gold}">cards</span></h1>`;
    const h1 = parse(shipped).querySelector("h1")!;
    expect(splitWord(h1, phoneStyles.gold)).toEqual({ text: "Stat cards", marked: ["cards"] });
    h1.querySelector("span")!.replaceWith("cards");
    expect(splitWord(h1, phoneStyles.gold)).not.toEqual({ text: "Stat cards", marked: ["cards"] });
  });
});
