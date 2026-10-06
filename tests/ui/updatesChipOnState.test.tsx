import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
import { inkFor } from "../../app/lib/updateInk";

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
 * draw it on the laptop). The category keeps its colour on the chip's dot.
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

const chips = () => within(screen.getByText("Filter").parentElement as HTMLElement).getAllByRole("button");
/** The chip's name: its text without the count. */
const label = (b: HTMLElement) => (b.textContent ?? "").replace(/\d+$/, "").trim();

describe("V-core-12: every pressed /updates chip looks pressed", () => {
  it("each chip, pressed in turn, alone carries the on-state class and paints nothing inline", async () => {
    expect(styles.chipOn).toBeTruthy();
    render(<UpdatesFeed items={updates} />);
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
      await userEvent.click(chips()[i]);
      const now = chips();
      expect(now.filter((b) => b.getAttribute("aria-pressed") === "true").map(label), names[i]).toEqual([names[i]]);
      expect(now[i].className, names[i]).toContain(styles.chipOn);
      for (const b of now) {
        expect(b.getAttribute("style"), label(b)).toBeNull();
        if (b !== now[i]) expect(b.className, `${label(b)} while ${names[i]} is pressed`).not.toContain(styles.chipOn);
      }
      // The category still reads in its own colour, on the dot.
      const dot = now[i].querySelector(`.${styles.chipDot}`) as HTMLElement;
      expect(dot.style.background, names[i]).toBe(inkFor(names[i] as Parameters<typeof inkFor>[0]));
      await userEvent.click(now[0]);
    }
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
    const SHIPPED_ON = (c: Parameters<typeof inkFor>[0]) => ({ borderColor: inkFor(c), color: inkFor(c) });
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
