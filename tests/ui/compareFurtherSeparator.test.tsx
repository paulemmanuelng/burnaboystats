import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
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

import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";

/**
 * Design review CC-15, 8 Oct 2026. /compare's own rule (803a803e, 7 Oct):
 * "the · ends a line and never opens one". The folded row under a pair's
 * country table glued its dot to the START of the next segment — " ·" after a
 * plain space — so Burna Boy vs Wizkid at 390 read "+ 4 further countries
 * where only Burna Boy is certified" / "·at least 89,095".
 *
 * jsdom does no layout, so this reads where the text CAN break: a plain space
 * is a break opportunity, a no-break space is not. No "·" in the caption may
 * follow a breakable space.
 */
const SHIPPED = "+ 4 further countries where only Burna Boy is certified · at least 89,095";
const opensALine = (t: string) => / ·/.test(t);

describe("CC-15: a pair page's folded-row caption never opens a line on its separator", () => {
  it("negative control: the caption as it shipped can break before its \"·\"", () => {
    expect(opensALine(SHIPPED)).toBe(true);
  });

  it.each(["burna-boy-vs-wizkid", "burna-boy-vs-seyi-vibez", "burna-boy-vs-davido"])("%s", async (slug) => {
    const root = document.createElement("div");
    root.innerHTML = renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) }));
    const captions = [...root.querySelectorAll(`.${styles.collapseText}`)].map((c) => c.textContent!);
    expect(captions.length, slug).toBeGreaterThan(0);
    for (const c of captions) {
      expect(c).toMatch(/certified · at least/);
      expect(opensALine(c), c).toBe(false);
    }
  });
});
