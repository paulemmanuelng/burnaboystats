import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/methodology",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MethodologyPage from "../app/methodology/page";
import S from "../app/methodology/methodology.module.css";
import { afterHitBox, decl, read, rules } from "./fixtures/cssRules";

/**
 * Design review of 8 Oct 2026, quick win 7 (MU-05, C-02, CC-14, B-19): phone
 * controls under the 44px the site's own accessibility statement promises.
 * The visible controls stay as they are; only their hit areas grow.
 *
 * Measured on the live site at 390px with elementFromPoint, scanning out from
 * each control's centre (the HIT box, not the drawn box):
 *   - the "+N" fold on chart rows (/records/charts, /afrobeats/rema/charts):
 *     drawn 29.5x30 / 36.2x30, hit 30x44 / 38x44 — the ::after added height only;
 *   - the "+N" fold on certification rows (/certifications, /afrobeats/wizkid):
 *     drawn 41.2x27.6, hit 42x46;
 *   - the 28 register links on phone /methodology: hit 26px tall.
 * The FAQ questions (song, album and Dai Dai pages) measured a 48px hit height
 * through FaqList's existing ::after (inset −11px 0) — drawn 26px, which is
 * what the review read — so they need no change; the guard below keeps them.
 */

const after = (file: string, selector: string) => rules(read(file)).find((r) => r.selector === selector)?.body ?? "";

/** Padding boxes measured live (drawn box less any border). */
const CHART_FOLDS: [string, [number, number]][] = [
  ["+4", [29.5, 30]],
  ["+58", [36.2, 30]],
];
const CERT_FOLD: [number, number] = [39.2, 25.6]; // "+7": 41.2x27.6 with a 1px dashed border

describe("CC-14 / B-19: the '+N' folds are 44px each way", () => {
  const charts = after("app/components/mobileOfficialCharts.module.css", ".more::after");
  const certs = after("app/components/mobileCerts.module.css", ".badgeMore::after");

  it("chart rows' fold (MobileOfficialCharts: /records/charts and every board chart page)", () => {
    for (const [label, box] of CHART_FOLDS) {
      const [w, h] = afterHitBox(charts, box);
      expect(w, label).toBeGreaterThanOrEqual(44);
      expect(h, label).toBeGreaterThanOrEqual(44);
    }
  });

  it("certification rows' fold (MobileCerts: /certifications and every board artist)", () => {
    const [w, h] = afterHitBox(certs, CERT_FOLD);
    expect(w).toBeGreaterThanOrEqual(44);
    expect(h).toBeGreaterThanOrEqual(44);
  });

  it("negative control: the shipped ::after rules added height only", () => {
    // mobileOfficialCharts.module.css and mobileCerts.module.css as shipped.
    const shippedCharts = `content: "";\n  position: absolute;\n  inset: -7px 0;`;
    const shippedCerts = `content: "";\n  position: absolute;\n  inset: -10px 0;`;
    expect(afterHitBox(shippedCharts, CHART_FOLDS[0][1])).toEqual([29.5, 44]);
    expect(afterHitBox(shippedCerts, CERT_FOLD)[0]).toBeLessThan(44);
  });
});

describe("C-02: phone /methodology's register links take their whole row", () => {
  const css = read("app/methodology/methodology.module.css");
  const phoneRule = (css: string, selector: string) =>
    rules(css).find((r) => r.selector === selector && r.media !== null && /\(max-width:\s*900px\)/.test(r.media));

  it("the link's ::after fills its row, and the row is the positioned box", () => {
    const a = phoneRule(css, "a.registerLink::after");
    const row = phoneRule(css, ".registerRow");
    expect(a && decl(a.body, "position")).toBe("absolute");
    expect(a && decl(a.body, "inset")).toBe("0");
    expect(row && decl(row.body, "position")).toBe("relative");
  });

  it("every register link sits directly in its row, so the row is what it stretches over", () => {
    const d = new DOMParser().parseFromString(renderToStaticMarkup(MethodologyPage()), "text/html");
    const links = [...d.querySelectorAll(`a.${S.registerLink}`)];
    expect(links.length).toBeGreaterThanOrEqual(28);
    for (const l of links) expect(l.parentElement?.classList.contains(S.registerRow), l.textContent ?? "").toBe(true);
    // A body with no register is a span: no ::after, an inert row.
    for (const s of d.querySelectorAll(`span.${S.registerLink}`)) expect(s.closest("a")).toBeNull();
  });

  it("negative control: the shipped sheet had no hit area beyond the 26px name", () => {
    const shipped = `.registerLink { color: var(--gold); text-decoration: none; font-weight: 600; }
.registerLink:hover { text-decoration: underline; }
@media (max-width: 640px) {
  .registerRow { grid-template-columns: auto 1fr; }
  .registerWhere { grid-column: 2; }
}`;
    expect(phoneRule(shipped, "a.registerLink::after")).toBeUndefined();
  });
});

describe("MU-05 / B-19: the phone FAQ questions already reach 44px (guard)", () => {
  it("FaqList's ::after adds 22px to a one-line 26px question", () => {
    const [, h] = afterHitBox(after("app/components/faqList.module.css", ".toggle::after"), [354, 26]);
    expect(h).toBeGreaterThanOrEqual(44);
  });
});

describe("MU-05: phone album tracklist rows are their song page's link", () => {
  // Measured in headless Chrome at 390: "Last Last  SONG PAGE →" on Love,
  // Damini drawn and hit 162x22, in a 43.6px row (354px wide); no hit area
  // beyond the text. Now the whole row: 355x44 at 390; desktop unchanged.
  const css = read("app/music/albums/[album]/album.module.css");
  const phoneRule = (css: string, selector: string) =>
    rules(css).find((r) => r.selector === selector && r.media !== null && /\(max-width:\s*900px\)/.test(r.media));
  it("on a phone the link's ::after covers its row, at least 44px tall; the row is the positioned box", () => {
    const a = phoneRule(css, ".trackLink::after");
    // Against the row's padding box (354x43.6 at 390).
    const [w, h] = afterHitBox(a?.body ?? "", [354, 43.6]);
    expect(w).toBe(354);
    expect(h).toBeGreaterThanOrEqual(44);
    expect(decl(phoneRule(css, ".track")?.body ?? "", "position")).toBe("relative");
    // The link itself is not positioned, so the row is what the ::after is placed against.
    expect(decl(rules(css).find((r) => r.selector === ".trackLink")?.body ?? "", "position")).toBeUndefined();
  });
  it("negative control: the shipped sheet had no hit area beyond the 22px title", () => {
    const shipped = `.trackLink {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  color: var(--text);
  text-decoration: none;
}
.trackLink:hover {
  color: var(--gold);
}`;
    expect(phoneRule(shipped, ".trackLink::after")).toBeUndefined();
  });
});

describe("CC-14: the US board's 'RIAA's own levels ↗' already hits 44px tall (guard)", () => {
  // The review read its drawn box, 112x20. Its ::after (7 Oct 2026) centres a
  // 44px-tall hit area on it: measured 114x44 in headless Chrome at 390 (fold open) and 1440.
  it("::after inset calc(50% - 22px) 0 on a positioned link", () => {
    const css = read("app/compare/compare.module.css");
    const a = rules(css).find((r) => r.selector === ".cbRegister::after");
    expect(a && decl(a.body, "position")).toBe("absolute");
    expect(a && decl(a.body, "inset")).toBe("calc(50% - 22px) 0");
    expect(decl(rules(css).find((r) => r.selector === ".cbRegister")?.body ?? "", "position")).toBe("relative");
  });
});
