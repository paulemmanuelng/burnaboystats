import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import UpdatesFeed from "../../app/components/UpdatesFeed";
import styles from "../../app/updates/updates.module.css";
import { updates } from "../../app/data/updates";
import { markFor } from "../../app/lib/updateInk";
import { KIND_MARK } from "../../app/lib/onThisDayKinds";
import type { UpdateCategory } from "../../app/data/updates";

/**
 * V-core-12 (full-site debug, 5 Oct 2026; filed with V-records-07).
 *
 * The desktop /updates filter painted its pressed chip inline: "All" a gold
 * edge and label with no wash, a category chip its category's ink. Lifestyle's
 * ink is --text-muted, the resting chip's own label, so pressing it filtered
 * the feed to its 5 entries while the label did not change: measured live in
 * headless Chrome at 1440, the pressed chip computed rgb(155,155,163) on
 * rgb(155,155,163) in dark and rgb(95,88,79) on rgb(95,88,79) in light, the
 * resting chips' exact label, with only the edge moving off --border.
 *
 * Now every chip, All included, takes one pressed state from the stylesheet:
 * the design's gold edge, wash and label (Updates.dc.html's chips; as charts'
 * and certifications' .fChipOn, the stat-card maker's and /search's .chipOn
 * draw it on the laptop). The category kept its colour on the chip's dot
 * until the Job 0 colour roles (J0-6, 8 Oct 2026) made it an ink shape.
 * The phone rail is MobileUpdates, held to N2 by tests/phoneChipsN2.test.tsx.
 */

const ROOT = process.cwd();
const CSS = readFileSync(join(ROOT, "app/updates/updates.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const decls = (body: string): Record<string, string> =>
  Object.fromEntries(
    body
      .split(";")
      .map((d) => [d.slice(0, d.indexOf(":")).trim(), d.slice(d.indexOf(":") + 1).replace(/\s+/g, " ").trim()])
      .filter(([k]) => k),
  );
/** A top-level rule's declarations, by its exact selector. */
function rule(selector: string): Record<string, string> {
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = new RegExp(`(?:^|[}\\s])${esc}\\s*\\{([^}]*)\\}`).exec(CSS);
  if (!m) throw new Error(`no ${selector} rule`);
  return decls(m[1]);
}

/** The chip's name: its text without the count. */
const label = (b: HTMLElement) => (b.textContent ?? "").replace(/\d+$/, "").trim();

describe("V-core-12: every pressed /updates chip looks pressed", () => {
  // fireEvent and querySelectorAll, as tests/ui/searchChipOnState.test.tsx:
  // every press re-renders the whole feed, and userEvent plus getAllByRole
  // took this to 2.4s under a full-suite load, half of vitest's 5s default.
  it("each chip, pressed in turn, alone carries the on-state class and paints nothing inline", () => {
    expect(styles.chipOn).toBeTruthy();
    render(<UpdatesFeed items={updates} />);
    const bar = screen.getByText("Filter").parentElement as HTMLElement;
    const chips = () => Array.from(bar.querySelectorAll<HTMLElement>("button"));
    const all = chips();
    const names = all.map(label);
    expect(names[0]).toBe("All");
    // Lifestyle, the chip whose ink was the resting label, is on the rail.
    expect(names).toContain("Lifestyle");
    expect(all.length).toBeGreaterThanOrEqual(5);

    // All starts pressed, from the class, not an inline gold.
    expect(all[0]).toHaveAttribute("aria-pressed", "true");
    expect(all[0].className).toContain(styles.chipOn);
    expect(all[0].getAttribute("style")).toBeNull();

    for (let i = 1; i < all.length; i++) {
      fireEvent.click(chips()[i]);
      const now = chips();
      expect(now.filter((b) => b.getAttribute("aria-pressed") === "true").map(label), names[i]).toEqual([names[i]]);
      expect(now[i].className, names[i]).toContain(styles.chipOn);
      for (const b of now) {
        expect(b.getAttribute("style"), label(b)).toBeNull();
        if (b !== now[i]) expect(b.className, `${label(b)} while ${names[i]} is pressed`).not.toContain(styles.chipOn);
      }
      // The category wears its On This Day shape in the chip's own ink, or no
      // mark at all (Job 0 colour roles, J0-6 with fix 5, C-2: its coloured
      // dot is gone).
      const want = markFor(names[i] as UpdateCategory);
      const path = now[i].querySelector("svg path");
      if (want) {
        expect(path?.getAttribute("d"), names[i]).toBe(KIND_MARK[want].d);
        expect(path?.getAttribute(KIND_MARK[want].filled ? "fill" : "stroke"), names[i]).toBe("currentColor");
      } else expect(path, names[i]).toBeNull();
    }
    // And back to All: it alone is pressed again.
    fireEvent.click(chips()[0]);
    expect(chips().filter((b) => b.getAttribute("aria-pressed") === "true").map(label)).toEqual(["All"]);
  });

  it("the on-state differs from the resting chip in edge, wash and label: the design's gold", () => {
    const rest = rule(".chip");
    const on = rule(".chipOn");
    expect(rest["border"]).toBe("1px solid var(--border)");
    expect(rest["color"]).toBe("var(--text-muted)");
    expect(rest["background"]).toBe("transparent");
    expect(on["border-color"]).toBe("var(--gold)");
    expect(on["color"]).toBe("var(--gold)");
    // The desktop filter chips' wash (charts/certifications .fChipOn, /search and StatCardMaker .chipOn).
    expect(on["background"]).toBe("color-mix(in srgb, var(--gold-wash-base) calc(16% * var(--wash-strength)), transparent)");
  });

  it("negative control: the shipped pressed Lifestyle chip kept the resting label", () => {
    // UpdatesFeed.tsx as it shipped on main (b9341135): a pressed category
    // chip's inline style, and the All chip's.
    // Lifestyle's shipped ink was --text-muted (app/lib/updateInk.ts UPDATE_INK).
    const SHIPPED_INK: Partial<Record<UpdateCategory, string>> = { Lifestyle: "var(--text-muted)" };
    const SHIPPED_ON = (c: UpdateCategory) => ({ borderColor: SHIPPED_INK[c], color: SHIPPED_INK[c] });
    const SHIPPED_ALL = { borderColor: "var(--gold)", color: "var(--gold)" };
    const rest = rule(".chip");
    // Pressed and resting: the same label, and no wash.
    expect(SHIPPED_ON("Lifestyle").color).toBe(rest["color"]);
    expect("background" in SHIPPED_ON("Lifestyle")).toBe(false);
    expect("background" in SHIPPED_ALL).toBe(false);
    // The class differs from the resting label, so this cannot happen again.
    expect(rule(".chipOn")["color"]).not.toBe(rest["color"]);
  });
});
