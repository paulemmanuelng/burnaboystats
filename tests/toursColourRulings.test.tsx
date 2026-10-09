import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, cleanup, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../app/records/tours/page";
import MobileTours from "../app/components/MobileTours";
import { tours } from "../app/data/tours";
import { liveMoments } from "../app/data/liveMoments";
import { RECORD_PILL } from "../app/lib/tourMeta";

/**
 * Quick win 12, tours part (design review of 8 Oct 2026): colour decisions
 * already made, applied.
 *  T-06 — phone tour dates printed venue capacity in --cyan, the Top 10 peak
 *         band's colour; the desktop table prints it in ink Geist.
 *  T-07 — "Record" was a gold-ramp pill on the phone and a green outline
 *         ("African record") on desktop, and desktop's record nights wore an
 *         unlabelled green wash standing for that pill. T-07 made both the
 *         green outline; the Job 0 colour roles (J0-6, C-3) then made the one
 *         record treatment the ink outline tag "Record" on a --rule edge.
 *  T-15 — the tour map's view chips drew their on-state as an ink fill, not
 *         the 5 Oct N2 selected chip (held in tests/chipsN2.test.tsx too).
 */

const ROOT = join(__dirname, "..");
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");
/** The declarations of the one rule whose selector is exactly `selector`. */
function rule(css: string, selector: string): Record<string, string> | null {
  for (const m of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].split(",").map((s) => s.trim()).includes(selector)) {
      const d: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const k = part.indexOf(":");
        if (k > 0) d[part.slice(0, k).trim()] = part.slice(k + 1).replace(/\s+/g, " ").trim();
      }
      return d;
    }
  }
  return null;
}
const GOLD = /var\(--gold|--ink-on-gold/;
const PHONE_TOURS = "app/components/mobileTours.module.css";
const DESK_TOURS = "app/records/tours/tours.module.css";

// mobileTours.module.css on origin/main (63e558a9), verbatim.
const SHIPPED_DATE_CAP = `.dateCap {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 12px;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex: none;
}`;
const SHIPPED_RECORD_BADGE = `.recordBadge {
  padding: 3px 8px;
  border-radius: 999px;
  background-color: var(--gold-fill);
  /* The gold ramp — the site's one treatment for a gold fill. */
  background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
  color: var(--ink-on-gold);
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}`;
// mobileTourMap.module.css on origin/main (63e558a9), verbatim.
const SHIPPED_MAP_CHIP_ON = `.chipOn {
  background: var(--text);
  border-color: var(--text);
  color: var(--bg);
}`;

/** Capacity reads as the desktop table's cell: no cyan, the body face, tabular. */
const capLikeDesktop = (d: Record<string, string> | null, desk: Record<string, string> | null) =>
  !!d && !!desk && !/--cyan/.test(Object.values(d).join(";")) && d["font-family"] === desk["font-family"] && d["color"] === desk["color"] && d["font-variant-numeric"] === "tabular-nums";

/** The record tag is the desktop's ink outline tag (J0-6), never gold or green. */
const inkOutline = (d: Record<string, string> | null, desk: Record<string, string> | null) =>
  !!d &&
  !!desk &&
  !GOLD.test(Object.values(d).join(";")) &&
  !/--green/.test(Object.values(d).join(";")) &&
  d["border"] === "1px solid var(--rule)" &&
  d["color"] === "var(--text)" &&
  ["border", "border-radius", "background", "color"].every((k) => d[k] === desk[k]);
// tours.module.css .recordPill on main d3c39eda (T-07's green outline), verbatim.
const SHIPPED_RECORD_PILL_GREEN = `.recordPill {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--green) 45%, transparent);
  background: transparent;
  color: var(--green);
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}`;

const isN2 = (d: Record<string, string> | null) =>
  !!d && d["border-color"] === "var(--chip-on-edge)" && d["background"] === "var(--chip-on-wash)" && d["color"] === "var(--chip-on-ink)";

describe("T-06: phone capacity is a venue fact in ink, not the Top 10 cyan", () => {
  it("the phone's .dateCap is the desktop's .dCap: body face, its ink, tabular", () => {
    expect(capLikeDesktop(rule(read(PHONE_TOURS), ".dateCap"), rule(read(DESK_TOURS), ".dCap"))).toBe(true);
  });
  it("no tours stylesheet paints anything in --cyan", () => {
    for (const f of [PHONE_TOURS, DESK_TOURS, "app/components/mobileTourMap.module.css", "app/components/mobileFestivals.module.css", "app/records/tours/festivals/festivals.module.css"]) {
      expect(read(f).replace(/\/\*[\s\S]*?\*\//g, ""), f).not.toMatch(/var\(--cyan\)/);
    }
  });
  it("negative control: the shipped rule fails", () => {
    expect(capLikeDesktop(rule(SHIPPED_DATE_CAP, ".dateCap"), rule(read(DESK_TOURS), ".dCap"))).toBe(false);
  });
});

describe("T-07 / J0-6: one record treatment, the ink outline 'Record' tag", () => {
  it("the phone tag is the desktop tag's outline, ink and ground, on a --rule edge", () => {
    const desk = rule(read(DESK_TOURS), ".recordPill");
    expect(inkOutline(desk, desk)).toBe(true);
    expect(inkOutline(rule(read(PHONE_TOURS), ".recordBadge"), desk)).toBe(true);
    expect(RECORD_PILL).toBe("Record");
  });

  it("negative controls: the shipped gold-ramp badge and T-07's green outline both fail", () => {
    const desk = rule(read(DESK_TOURS), ".recordPill");
    expect(inkOutline(rule(SHIPPED_RECORD_BADGE, ".recordBadge"), desk)).toBe(false);
    const green = rule(SHIPPED_RECORD_PILL_GREEN, ".recordPill");
    expect(inkOutline(green, green)).toBe(false);
  });

  it("both layouts print the same words on the record tour", () => {
    const record = tours.find((t) => t.record)!;
    const { container } = render(
      <MobileTours
        tours={tours}
        topGross="$30.46M"
        topTourName="I Told Them…"
        countryCount={57}
        regionCount={7}
        biggestNight="58,973"
        biggestVenue="London Stadium"
        yearSpan="2018 — 2026"
        hisShowCount={20}
        revenueShowCount={82}
        appearanceCount={58}
        headlinedCount={32}
        today="2026-10-08"
      />,
    );
    const badges = [...container.querySelectorAll('[class*="_recordBadge_"]')].map((b) => b.textContent);
    expect(badges).toEqual([RECORD_PILL]);
    expect(screen.getByRole("button", { name: new RegExp(record.name) }).textContent).toContain(RECORD_PILL);
    cleanup();
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");
    const desk = doc.querySelector('[class*="_desktopOnly_"]')!;
    const tourPills = [...desk.querySelectorAll('[class*="_tourTitleRow_"] [class*="_recordPill_"]')].map((p) => p.textContent);
    expect(tourPills).toEqual([RECORD_PILL]);
  });

  it("desktop's record nights carry the labelled pill, not an unexplained wash", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");
    const rows = [...doc.querySelectorAll('[class*="_desktopOnly_"] [class*="_moment_"]')];
    expect(rows.length).toBe(liveMoments.length);
    rows.forEach((row, i) => {
      const pill = row.querySelector('[class*="_recordPill_"]');
      expect(!!pill, liveMoments[i].title).toBe(!!liveMoments[i].record);
      if (pill) expect(pill.textContent).toBe(RECORD_PILL);
    });
    expect(liveMoments.filter((m) => m.record).length).toBeGreaterThan(0);
    const css = read(DESK_TOURS).replace(/\/\*[\s\S]*?\*\//g, "");
    expect(css).not.toMatch(/\.momentRecord\b/);
  });
});

describe("T-15: the tour map's view chips take N2", () => {
  it("the selected chip is the ember edge, wash and ink label", () => {
    expect(isN2(rule(read("app/components/mobileTourMap.module.css"), ".chipOn"))).toBe(true);
  });
  it("negative control: the shipped ink fill fails", () => {
    expect(isN2(rule(SHIPPED_MAP_CHIP_ON, ".chipOn"))).toBe(false);
  });
});
