import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/analysis",
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

import AnalysisPage from "../app/analysis/page";
import MobileAnalysis from "../app/components/MobileAnalysis";
import { twinOf } from "../app/components/AnchorTwins";
import { findings } from "../app/lib/analysisFindings";
import analysisStyles from "../app/analysis/analysis.module.css";
import { read } from "./fixtures/cssRules";

/**
 * The live debug pass of 15 Oct 2026, tools lane: /analysis. The negative
 * control is the phone layout origin/main (51ad46b1) shipped.
 */

// ── tools-analysis-3 ────────────────────────────────────────────────────────

describe("tools-analysis-3: a shared /analysis#… link lands on the phone's copy", () => {
  const doc = () => new DOMParser().parseFromString(renderToStaticMarkup(<AnalysisPage />), "text/html");
  /** The desktop layout's section ids: every id inside the desktop-only tree
   *  that a reader can be linked to (the findings and the correction). */
  const desktopIds = (d: Document) =>
    [...d.querySelectorAll(`.${analysisStyles.desktopOnly} [id]`)]
      .map((e) => e.id)
      .filter((id) => findings.some((f) => f.id === id) || id === "correction");

  it("the desktop carries the five ids the finding named", () => {
    expect(desktopIds(doc()).sort()).toEqual(["britain-not-america", "correction", "diamond-country", "one-song", "reach-vs-dominance"].sort());
  });

  it("every desktop id has a phone twin outside the desktop tree, and the page's map names it", () => {
    const d = doc();
    const src = read("app/analysis/page.tsx");
    expect(src).toContain("<AnchorTwins pairs={LAYOUT_TWINS} />");
    // The map the page mounts, rebuilt the way it builds it.
    const pairs = Object.fromEntries([...findings.map((f) => f.id), "correction"].map((id) => [id, `m-${id}`]));
    for (const id of desktopIds(d)) {
      const twin = twinOf(id, pairs);
      expect(twin, id).toBe(`m-${id}`);
      const el = d.getElementById(twin!);
      expect(el, twin!).not.toBeNull();
      expect(el!.closest(`.${analysisStyles.desktopOnly}`), twin!).toBeNull();
      // and back: a phone link opened on a desktop finds the desktop copy
      expect(twinOf(twin!, pairs)).toBe(id);
    }
  });

  it("each phone finding's twin is the finding itself: its headline is the desktop's", () => {
    const d = doc();
    for (const f of findings) expect(d.getElementById(`m-${f.id}`)?.querySelector("h2")?.textContent, f.id).toBe(f.h);
  });

  it("/analysis#one-song on a phone (the desktop copy has no box) scrolls to #m-one-song", () => {
    const calls: string[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element) {
      calls.push(this.id);
    };
    const spy = vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
      return (this.id.startsWith("m-") ? [{}] : []) as unknown as DOMRectList;
    });
    try {
      window.history.replaceState(null, "", "/analysis#one-song");
      const r = render(<AnalysisPage />);
      expect(calls).toEqual(["m-one-song"]);
      r.unmount();
    } finally {
      spy.mockRestore();
      proto.scrollIntoView = had;
      window.history.replaceState(null, "", "/");
    }
  });

  it("negative control: the shipped phone layout carried no ids and the page mounted no AnchorTwins", () => {
    // origin/main 51ad46b1, app/components/MobileAnalysis.tsx, each finding:
    const SHIPPED_FINDING = `        <div key={f.id} className={styles.finding}>`;
    expect(read("app/components/MobileAnalysis.tsx")).not.toContain(SHIPPED_FINDING);
    // The phone tree as it shipped: the findings without their ids.
    const html = renderToStaticMarkup(<MobileAnalysis findings={findings} lede="" reviewedOn="2026-10-15" checkNote="" />).replace(
      / id="m-[^"]*"/g,
      "",
    );
    const shipped = new DOMParser().parseFromString(html, "text/html");
    expect(shipped.querySelectorAll("[id]")).toHaveLength(0);
    // With no twin and no map, /analysis#one-song on a phone goes nowhere.
    const calls: string[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element) {
      calls.push(this.id);
    };
    try {
      window.history.replaceState(null, "", "/analysis#one-song");
      expect(twinOf("one-song")).toBeNull();
      const r = render(<section id="one-song" />);
      expect(calls).toEqual([]);
      r.unmount();
    } finally {
      proto.scrollIntoView = had;
      window.history.replaceState(null, "", "/");
    }
  });
});
