import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AboutPage from "../app/about/page";
import aboutStyles from "../app/about/about.module.css";
import mobileAboutStyles from "../app/components/mobileAbout.module.css";
import { BURNA_BOY_REAL_NAME } from "../app/lib/seo";

/**
 * The copy fixes of the 8 Oct 2026 design review (SUGGESTIONS.md §3, the
 * owner's "go" of 8 Oct). One block per item; every negative control is the
 * line the live site served before the fix.
 */

const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

// ── Copy 1 (C-10) ─────────────────────────────────────────────────────────

describe("Copy 1 (C-10): /about answers the real-name search in its own heading and opening line", () => {
  /** What a reader who searched "burna boy real name" needs from the first
   *  two lines: whose page it is, then the name. */
  const answers = (h1: string, lede: string) =>
    /Burna Boy/.test(h1) && lede.startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}`);

  // Live on burnaboystats.com/about, both layouts, 8 Oct 2026.
  const SHIPPED_H1 = "About the Giant";
  const SHIPPED_LEDE = "The story of Damini Ogulu — Afrobeats' African Giant.";

  it("both layouts: the h1 names him and the lede leads with the real name from lib/seo.ts", () => {
    const d = dom(renderToStaticMarkup(<AboutPage />));
    const h1s = [...d.querySelectorAll("h1")].map(text);
    expect(h1s).toEqual(["About Burna Boy", "About Burna Boy"]);
    const desk = text(d.querySelector(`.${aboutStyles.lede}`));
    const phone = text(d.querySelector(`.${mobileAboutStyles.lede}`));
    for (const lede of [desk, phone]) expect(answers(h1s[0], lede), lede).toBe(true);
    expect(desk).toBe(phone);
    // The fast fact reads the same constant.
    expect(d.body.textContent).toContain(`Real name${BURNA_BOY_REAL_NAME}`);
  });

  it("negative control: the heading and lede the site shipped do not answer it", () => {
    expect(answers(SHIPPED_H1, SHIPPED_LEDE)).toBe(false);
  });
});
