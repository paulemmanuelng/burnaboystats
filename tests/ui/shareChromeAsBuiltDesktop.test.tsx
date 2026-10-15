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
import shareStyles from "../../app/share/share.module.css";
import makerStyles from "../../app/components/StatCardMaker.module.css";
import { getStatCards } from "../../app/lib/statCards";

/**
 * Fix 118 (design review 8 Oct 2026), the desktop half of shareChromeAsBuilt:
 * on /share only the stage, the Story/Square segment and the actions change
 * (J6-2). The breadcrumb, the kicker, the h1 with its split word, the lede and
 * "Pick a record" are pinned here exactly as built. The phone half is
 * shareChromeAsBuilt.test.tsx (J6-1); each item's guard is its own file, so
 * either commit reverts alone.
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

describe("fix 118, desktop: the breadcrumb, kicker, h1, lede and \"Pick a record\" are as built", () => {
  const root = parse(renderToStaticMarkup(<SharePage />));
  const desk = root.querySelector(`.${shareStyles.desktopOnly}`)!;

  it("the breadcrumb bar sits above the hero", () => {
    const crumbs = desk.querySelector('nav[aria-label="Breadcrumb"]')!;
    expect(crumbs).toBeTruthy();
    const hero = desk.querySelector(`.${shareStyles.heroPad}`)!;
    expect(crumbs.compareDocumentPosition(hero) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("the kicker, the h1 with its split word, and the lede", () => {
    expect(desk.querySelector(`.${shareStyles.kicker}`)!.textContent).toBe("Built for the timeline");
    const h1s = desk.querySelectorAll("h1");
    expect(h1s).toHaveLength(1);
    expect(h1s[0].className).toBe(shareStyles.h1);
    expect(splitWord(h1s[0], "inkText")).toEqual({ text: "Stat Cards", marked: ["Cards"] });
    expect(desk.querySelector(`.${shareStyles.lede}`)!.textContent!.replace(/\s+/g, " ")).toBe(
      "Pick a Burna Boy record and download a card built for sharing — the numbers, the African Giant, one tap away.",
    );
  });

  it("\"Pick a record\" leads the record chips", () => {
    const picker = desk.querySelector('[role="group"][aria-label="Choose a record"]')!;
    expect(picker.firstElementChild!.className).toBe(makerStyles.pickerLabel);
    expect(picker.firstElementChild!.textContent).toBe("Pick a record");
    expect(picker.querySelectorAll("button")).toHaveLength(getStatCards().length);
  });
});
