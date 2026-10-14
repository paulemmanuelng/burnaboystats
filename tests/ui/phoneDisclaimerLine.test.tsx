import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

let path = "/";
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileHome from "../../app/components/MobileHome";
import AboutPage from "../../app/about/page";
import FooterNav from "../../app/components/FooterNav";
import home from "../../app/components/mobileHome.module.css";
import about from "../../app/components/mobileAbout.module.css";
import { PHONE_DISCLAIMER, SITE_DISCLAIMER, footerFor, DEFAULT_FOOTER } from "../../app/lib/links";
import { onThisDayFor } from "../../app/lib/onThisDay";
import { read, winning } from "../fixtures/cssRules";
import { trees } from "../fixtures/phoneTrees";

/**
 * SH-09 (design review 8 Oct 2026, J1-4, approved 8 Oct): the phone has no
 * footer, so the phone home and phone /about end on one muted line above the
 * tab bar — "An unofficial fan site — not affiliated with or endorsed by Burna
 * Boy · Artwork: Spotify", Geist 12, --text-muted. The sentence is the
 * footer's own (SITE_DISCLAIMER, moved out of FooterNav into lib/links.ts), so
 * the two can never drift.
 */

const ROOT = join(__dirname, "..", "..");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const phone = (m: string | null) => m !== null && /max-width:\s*900px/.test(m);
const always = (m: string | null) => m === null;

// With the day's pick, as app/page.tsx renders it, so the card is there.
const homeScreen = parse(renderToStaticMarkup(<MobileHome onThisDay={onThisDayFor(new Date())} />)).querySelector(`.${home.screen}`)!;
const aboutTrees = trees(renderToStaticMarkup(<AboutPage />));

/** Every element whose own text is exactly `s`. */
const holders = (root: Element, s: string) => [...root.querySelectorAll("p, span, div")].filter((e) => words(e) === s && e.children.length === 0);

describe("J1-4: the phone's last line on home and /about", () => {
  it("the phone home ends on the line, once, after the On this day card", () => {
    const last = homeScreen.lastElementChild!;
    expect(last.tagName).toBe("P");
    expect(last.className).toBe(home.disclaimer);
    expect(words(last)).toBe(PHONE_DISCLAIMER);
    expect(holders(homeScreen, PHONE_DISCLAIMER)).toHaveLength(1);
    // the card it follows is the screen's On this day section
    expect(last.previousElementSibling?.getAttribute("aria-labelledby")).toBe("otd-title-m");
  });

  it("phone /about ends on the line, once, the last block before the tab bar's spacer", () => {
    const screen = aboutTrees.phone!;
    expect(screen).toBeTruthy();
    const last = screen.lastElementChild!;
    expect(last.className).toBe(about.spacer);
    const line = last.previousElementSibling!;
    expect(line.tagName).toBe("P");
    expect(line.className).toBe(about.disclaimer);
    expect(words(line)).toBe(PHONE_DISCLAIMER);
    expect(holders(screen, PHONE_DISCLAIMER)).toHaveLength(1);
    // the timeline comes before it, and the desktop column does not carry it
    expect(screen.querySelector(`.${about.timelineWrap}`)!.compareDocumentPosition(line) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(words(aboutTrees.desktop)).not.toContain(PHONE_DISCLAIMER);
  });

  it("Geist 12 in --text-muted, in both modules", () => {
    for (const [file, cls] of [
      ["app/components/mobileHome.module.css", ".disclaimer"],
      ["app/components/mobileAbout.module.css", ".disclaimer"],
    ] as const) {
      const css = read(join(ROOT, file));
      expect(winning(css, cls, "font-size", always), file).toBe("12px");
      expect(winning(css, cls, "color", always), file).toBe("var(--text-muted)");
      expect(winning(css, cls, "font-family", always), file).toMatch(/^var\(--font-geist-sans\)/);
      expect(winning(css, cls, "font-weight", always), file).toBe("400");
    }
  });

  it("the footer's own sentence, minus its full stop, then the artwork credit", () => {
    expect(PHONE_DISCLAIMER).toBe("An unofficial fan site — not affiliated with or endorsed by Burna Boy · Artwork: Spotify");
    expect(PHONE_DISCLAIMER.startsWith(SITE_DISCLAIMER.replace(/\.$/, ""))).toBe(true);
    // FooterNav reads the one constant; it no longer types the sentence.
    const src = readFileSync(join(ROOT, "app/components/FooterNav.tsx"), "utf8");
    expect(src).not.toContain("An unofficial fan site");
    expect(src).toContain("SITE_DISCLAIMER");
  });

  it("the desktop footers print exactly what they printed before the move", () => {
    path = "/";
    const full = parse(renderToStaticMarkup(<FooterNav />));
    expect(words(full.querySelector(".footerDisclaimer"))).toBe(
      "An unofficial fan site — not affiliated with or endorsed by Burna Boy. Artwork provided by Spotify and remains the property of its owners.",
    );
    for (const p of ["/records", "/certifications", "/about"]) {
      path = p;
      const note = (footerFor[p] ?? DEFAULT_FOOTER).note;
      const compact = parse(renderToStaticMarkup(<FooterNav />));
      expect(words(compact.querySelector(".footerDisclaimer")), p).toBe(
        `An unofficial fan site — not affiliated with or endorsed by Burna Boy.${note ? ` ${note}` : ""}`,
      );
    }
    path = "/";
  });

  it("negative control: the home footer's line is not the phone's, and the footer is hidden on a phone", () => {
    // FooterNav.tsx on main e85e6efe (the home footer, verbatim as served).
    const FOOTER = "An unofficial fan site — not affiliated with or endorsed by Burna Boy. Artwork provided by Spotify and remains the property of its owners.";
    expect(FOOTER).not.toBe(PHONE_DISCLAIMER);
    expect(holders(homeScreen, FOOTER)).toHaveLength(0);
    // …and it lives in .footer, which the phone never shows.
    expect(winning(read(join(ROOT, "app/globals.css")), ".footer", "display", phone)).toBe("none");
  });
});
