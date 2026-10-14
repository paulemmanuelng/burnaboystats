import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../../app/page";
import page from "../../app/page.module.css";

/**
 * homeModuleOrder (site review 8 Oct 2026, Job 5 · J5-7, fix 105): Section 7
 * of the canvas is a module sheet, not an order. The page order ruled on
 * 26 Sep stays History made → On This Day → the ledger, with the globe in its
 * aside → the No. 1 board.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const doc = () => parse(renderToStaticMarkup(<Home />));

describe("homeModuleOrder: the page order is unchanged (fix 105)", () => {
  /** The desktop tree's sections, in document order. */
  function order(d: Document) {
    const marks = [
      ["history", d.querySelector(`.${page.historyBand}`)],
      ["otd", d.getElementById("otd-title")?.closest("section") ?? null],
      ["certs", d.getElementById("certs")],
      ["live", d.getElementById("live")],
    ] as const;
    return marks
      .filter(([, el]) => el)
      .sort(([, a], [, b]) => (a!.compareDocumentPosition(b!) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .map(([k]) => k);
  }

  it("History made → On This Day → the ledger (the globe in its aside) → the No. 1 board", () => {
    const d = doc();
    expect(order(d)).toEqual(["history", "otd", "certs", "live"]);
    // The globe teaser sits inside the ledger section's aside.
    const certs = d.getElementById("certs")!;
    expect(certs.querySelector('a[href="/records/tours/map"]')).not.toBeNull();
  });

  it("negative control: the home page before On This Day landed (78c816c2^) fails the order", () => {
    // app/page.tsx at 78c816c2^: History made, then the ledger, then the
    // board — no OnThisDayBand.
    const shipped = parse(
      `<section class="${page.historyBand}"></section><section id="certs"></section><section id="live"></section>`,
    );
    expect(order(shipped)).not.toEqual(["history", "otd", "certs", "live"]);
  });
});
