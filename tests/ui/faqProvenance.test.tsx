import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/faq",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FaqPage from "../../app/faq/page";
import { lastUpdated } from "../../app/lib/api";
import { provDateText } from "../../app/lib/provenance";
import desk from "../../app/faq/faq.module.css";
import phone from "../../app/components/mobileFaq.module.css";

/**
 * /faq (design review 8 Oct 2026, J1-16; fixes 24, 29 and 30). The
 * month-only foot note ("…verified against official sources as of October
 * 2026") becomes a day-precise P1 in the hero on both layouts: "Updated
 * {lastUpdated}", no source item (the answers are built from the site's own
 * data), and the method link to /methodology#principles. The hero copy is
 * unchanged.
 */

const DOC = new DOMParser().parseFromString(renderToStaticMarkup(<FaqPage />), "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const before = (a: Element, b: Element) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
const NOTE = /verified against official sources as of/;

describe.each([
  ["desktop", () => DOC.querySelector(`.${desk.desktopOnly}`)!, `.${desk.lede}`, `.${desk.jumpPad}`, "How this is counted ↗"],
  // The phone's chip rail is its docking index since Job 4 (J4-7, fix 85).
  ["phone", () => DOC.querySelector(`.${phone.screen}`)!, `.${phone.lede}`, '[data-dock="phone"]', "How it's counted ↗"],
] as const)("%s", (_layout, root, ledeSel, nextSel, methodLabel) => {
  it("one P1, after the lede and before the jump band or chip rail", () => {
    const p1s = root().querySelectorAll('[data-provenance="p1"]');
    expect(p1s.length).toBe(1);
    expect(before(root().querySelector(ledeSel)!, p1s[0])).toBe(true);
    expect(before(p1s[0], root().querySelector(nextSel)!)).toBe(true);
    expect(before(p1s[0], root().querySelector("h2")!)).toBe(true);
  });

  it("'Updated {lastUpdated}', no source item, the method to /methodology#principles", () => {
    const p1 = root().querySelector('[data-provenance="p1"]')!;
    const date = p1.querySelector("[data-provenance-date]")!;
    expect(words(date)).toBe(`Updated ${provDateText({ label: "Updated", day: lastUpdated })}`);
    expect(date.querySelector("time")?.getAttribute("datetime")).toBe(lastUpdated);
    expect(p1.querySelector("[data-provenance-sources]")).toBeNull();
    const method = p1.querySelector("[data-provenance-method]")!;
    expect(method.getAttribute("href")).toBe("/methodology#principles");
    expect(words(method)).toBe(methodLabel);
    expect(words(p1)).not.toContain("Open data");
  });

  it("the month-only foot note is gone", () => {
    expect(words(root())).not.toMatch(NOTE);
  });
});

describe("the hero copy is unchanged; the source band and its rules went", () => {
  it("the ledes as built", () => {
    expect(words(DOC.querySelector(`.${desk.lede}`))).toBe(
      "Quick, verified answers to the questions people ask most about the African Giant — every figure pulled from the same data as the rest of the site.",
    );
    expect(words(DOC.querySelector(`.${phone.lede}`))).toBe("Quick, verified answers to the questions people ask most.");
  });

  it("no .source / .sourcePad rule or class remains", () => {
    for (const f of ["app/faq/faq.module.css", "app/components/mobileFaq.module.css"]) {
      expect(readFileSync(f, "utf8")).not.toMatch(/\.source(Pad)?\s*\{/);
    }
    for (const f of ["app/faq/page.tsx", "app/components/MobileFaq.tsx"]) {
      expect(readFileSync(f, "utf8")).not.toMatch(/styles\.source\b|SOURCE_NOTE/);
    }
  });
});

describe("negative controls: the foot notes as they shipped on 8 Oct 2026", () => {
  it("both fail the guard", () => {
    // Verbatim from burnaboystats.com/faq, 8 Oct 2026.
    const shipped = new DOMParser().parseFromString(
      `<div class="mobileFaq-module__4NV0La__screen"><p class="mobileFaq-module__4NV0La__source">Figures stay in sync with the site&#x27;s certifications, charts, awards and tours data, verified against official sources as of October 2026.</p></div><div class="faq-module__VSI0LW__desktopOnly"><p class="faq-module__VSI0LW__source">Figures stay in sync with the site&#x27;s certifications, charts, awards and tours data, verified against official sources as of October 2026.</p></div>`,
      "text/html",
    );
    for (const el of shipped.querySelectorAll("div")) {
      expect(words(el)).toMatch(NOTE);
      expect(el.querySelectorAll('[data-provenance="p1"]').length).toBe(0);
    }
  });
});
