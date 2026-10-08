import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/afrobeats",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfrobeatsPage from "../app/afrobeats/page";
import desktop from "../app/afrobeats/afrobeats.module.css";
import phone from "../app/components/mobileAfrobeatsHub.module.css";
import { AFROBEATS_LAST_FULL_SWEEP, sweptArtists } from "../app/data/afrobeats";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * The /afrobeats eyebrow and cadence line (design review 8 Oct 2026, J0-3 with
 * fix 6). Only face and colour change: the eyebrow keeps its live words and
 * its derived count, in --text-muted, with the gold tick as built; the cadence
 * line keeps its live words and its sweep-date slot and becomes a sentence in
 * Geist 12.5, --text-body, at the 62ch measure. Fix 6 struck the canvas's
 * invented copy ("every Monday": there are no weekly sweeps) and its typed
 * "twenty", and the renamed, green eyebrow.
 */

const DESKTOP_CSS = read("app/afrobeats/afrobeats.module.css");
const PHONE_CSS = read("app/components/mobileAfrobeatsHub.module.css");
const page = new DOMParser().parseFromString(renderToStaticMarkup(<AfrobeatsPage />), "text/html");
const text = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const all = (cls: string) => [...page.querySelectorAll(`.${cls}`)];

const sweepLong = new Date(`${AFROBEATS_LAST_FULL_SWEEP}T12:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const boardSize = sweptArtists.length + 1;

/** The body of the last rule whose selector is exactly `sel`. */
const body = (css: string, sel: string) => rules(css).filter((r) => r.selector === sel).pop()?.body ?? "";

describe("/afrobeats eyebrow: the live words, in --text-muted, the gold tick as built", () => {
  it("both layouts print 'One rule, {n} verified artists' with the derived count", () => {
    const eyebrows = [...all(desktop.eyebrow), ...all(phone.eyebrow)];
    expect(eyebrows).toHaveLength(2);
    for (const e of eyebrows) {
      expect(text(e)).toMatch(/^One rule, \d+ verified artists$/);
      expect(text(e)).toBe(`One rule, ${boardSize} verified artists`);
    }
  });

  it.each([
    ["desktop", DESKTOP_CSS],
    ["phone", PHONE_CSS],
  ])("%s: the eyebrow is --text-muted and its tick stays gold", (_l, css) => {
    expect(decl(body(css, ".eyebrow"), "color")).toBe("var(--text-muted)");
    expect(decl(body(css, ".eyebrowRule"), "background")).toBe("var(--gold)");
  });
});

describe("/afrobeats cadence line: a sentence in Geist 12.5, --text-body", () => {
  it("desktop keeps its live sentence with the sweep-date slot", () => {
    const lines = all(desktop.cadence);
    expect(lines).toHaveLength(1);
    expect(text(lines[0])).toBe(`The board is re-read at each register sweep — last on ${sweepLong}. Burna Boy's own pages update daily.`);
  });

  it("the phone keeps its own live words with the same slot", () => {
    const lines = all(phone.cadence);
    expect(lines).toHaveLength(1);
    expect(text(lines[0])).toBe(`Re-read at each sweep, last ${sweepLong} · Burna Boy’s pages daily`);
  });

  it.each([
    ["desktop", DESKTOP_CSS],
    ["phone", PHONE_CSS],
  ])("%s .cadence: Geist, --type-caption, --text-body, no gold, no caps, no fade", (_l, css) => {
    const b = body(css, ".cadence");
    expect(decl(b, "font-family")).toMatch(/^var\(--font-geist-sans\)/);
    expect(decl(b, "font-size")).toBe("var(--type-caption)");
    expect(decl(b, "color")).toBe("var(--text-body)");
    expect(b).not.toMatch(/--gold|uppercase|--text-fade|--font-mono/);
  });

  it("desktop sets it at the measure (62ch)", () => {
    expect(decl(body(DESKTOP_CSS, ".cadence"), "max-width")).toBe("var(--measure)");
    expect(read("app/globals.css")).toMatch(/--measure:\s*62ch;/);
    expect(read("app/globals.css")).toMatch(/--type-caption:\s*12\.5px;/);
  });

  it("never prints the canvas's invented copy", () => {
    const t = text(page.body);
    expect(t).not.toMatch(/every Monday/i);
    expect(t).not.toMatch(/\btwenty verified\b/i);
  });

  it("negative control: the shipped .cadence rules (mono, uppercase, gold at --text-fade) fail", () => {
    // app/afrobeats/afrobeats.module.css:43–51 and mobileAfrobeatsHub.module.css:85–92 on main d3c39eda.
    const shippedDesktop = `.cadence {
  margin: 12px 0 0;
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: var(--text-fade);
}`;
    const shippedPhone = `.cadence {
  margin-top: 12px;
  font-family: var(--font-mono), monospace;
  font-size: var(--type-label);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: var(--text-fade);
}`;
    for (const s of [shippedDesktop, shippedPhone]) {
      const b = body(s, ".cadence");
      expect(decl(b, "font-family")).not.toMatch(/--font-geist-sans/);
      expect(decl(b, "color")).toBe("var(--gold)");
      expect(b).toMatch(/uppercase/);
    }
  });
});
