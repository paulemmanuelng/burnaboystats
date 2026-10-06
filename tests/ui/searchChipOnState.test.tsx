import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(window.location.search),
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/search",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SearchResults from "../../app/components/SearchResults";
import styles from "../../app/search/search.module.css";

/**
 * V-core-01 (full-site debug, 5 Oct 2026; with the known V-core-K1).
 *
 * On the live /search, typing "dai" and pressing "Site 2" filtered the list to
 * two results with no chip looking pressed: the pressed chip wore its
 * section's ink inline, SECTION_INK listed only Site, Records, Music and Song,
 * and Site's ink — and inkFor()'s fallback for every other section — was the
 * resting chip's own border and label. Measured in headless Chrome at 1440
 * and 390, light and dark: for "a", 10 of the 13 section chips (Compare, On
 * this day, Release, Country, Afrobeats, Awards, Car, Site, Album, Analysis)
 * computed exactly the resting rgb(220,217,211) / rgb(95,88,79) when pressed
 * (rgb(38,38,43) / rgb(155,155,163) in dark). And "All" stayed gold inline on
 * phones, after every other phone rail took N2.
 *
 * Now every chip, All included, takes one pressed state from the stylesheet:
 * the design's gold edge, wash and label on the laptop (as charts' .fChipOn
 * and the stat-card maker's .chipOn), N2's tokens on a phone (held with every
 * other phone rail by tests/phoneChipsN2.test.tsx).
 */

const ROOT = process.cwd();
const CSS = readFileSync(join(ROOT, "app/search/search.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const PHONE_AT = CSS.indexOf("@media (max-width: 900px)");
const decls = (body: string): Record<string, string> =>
  Object.fromEntries(
    body
      .split(";")
      .map((d) => [d.slice(0, d.indexOf(":")).trim(), d.slice(d.indexOf(":") + 1).replace(/\s+/g, " ").trim()])
      .filter(([k]) => k),
  );
/** A rule's declarations, by its exact selector list, outside or inside the phone block. */
function rule(selector: string, phone: boolean): Record<string, string> {
  const src = phone ? CSS.slice(PHONE_AT) : CSS.slice(0, PHONE_AT);
  const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/,\s*/g, ",\\s*");
  const m = new RegExp(`(?:^|[}\\s])${esc}\\s*\\{([^}]*)\\}`).exec(src);
  if (!m) throw new Error(`no ${selector} rule ${phone ? "in the phone block" : "outside it"}`);
  return decls(m[1]);
}

const chips = () => within(screen.getByText("Filter").parentElement as HTMLElement).getAllByRole("button");
const label = (b: HTMLElement) => (b.firstChild?.textContent ?? "").trim();

describe("V-core-01: every pressed search chip looks pressed", () => {
  it("each chip, pressed in turn, alone carries the on-state class and paints nothing inline", async () => {
    expect(styles.chipOn).toBeTruthy();
    render(<SearchResults initialQuery="a" stats={{}} />);
    const all = chips();
    // "a" offers every section the index has: the ten that had no ink among them.
    const names = all.map(label);
    for (const s of ["All", "Site", "Country", "Release", "Album", "Awards", "Compare", "Records", "Music", "Song"])
      expect(names, s).toContain(s);
    expect(all.length).toBeGreaterThanOrEqual(14);

    // All starts pressed, from the class, not an inline gold.
    expect(all[0]).toHaveAttribute("aria-pressed", "true");
    expect(all[0].className).toContain(styles.chipOn);
    expect(all[0].getAttribute("style")).toBeNull();

    for (let i = 1; i < all.length; i++) {
      await userEvent.click(chips()[i]);
      const now = chips();
      const on = now.filter((b) => b.getAttribute("aria-pressed") === "true");
      expect(on.map(label), names[i]).toEqual([names[i]]);
      expect(now[i].className, names[i]).toContain(styles.chipOn);
      for (const b of now) {
        expect(b.getAttribute("style"), label(b)).toBeNull();
        if (b !== now[i]) expect(b.className, `${label(b)} while ${names[i]} is pressed`).not.toContain(styles.chipOn);
      }
      await userEvent.click(now[0]);
    }
  });

  it("the laptop's on-state differs from the resting chip in edge, wash and label: the design's gold", () => {
    const rest = rule(".chip", false);
    const on = rule(".chipOn", false);
    expect(rest["border"]).toBe("1px solid var(--border)");
    expect(rest["color"]).toBe("var(--text-muted)");
    expect(rest["background"]).toBe("transparent");
    expect(on["border-color"]).toBe("var(--gold)");
    expect(on["color"]).toBe("var(--gold)");
    // The desktop filter chips' wash (charts .fChipOn, StatCardMaker .chipOn).
    expect(on["background"]).toBe("color-mix(in srgb, var(--gold-wash-base) calc(16% * var(--wash-strength)), transparent)");
  });

  it("on a phone the pressed chip is N2's, hover included", () => {
    const on = rule(".chipOn, .chipOn:hover", true);
    expect(on).toEqual({
      "border-color": "var(--chip-on-edge)",
      background: "var(--chip-on-wash)",
      color: "var(--chip-on-ink)",
    });
  });

  it("negative control: the shipped pressed styles were the resting chip's, or gold on a phone", () => {
    // SearchResults.tsx as it shipped on main (9cd6a889): Site's entry, the
    // fallback every unlisted section took, and the All chip's inline style.
    const SHIPPED_SITE: [string, string] = ["var(--text-muted)", "var(--border)"];
    const SHIPPED_FALLBACK = (s: string) =>
      ({ Site: SHIPPED_SITE } as Record<string, [string, string]>)[s] ?? ["var(--text-muted)", "var(--border)"];
    const SHIPPED_ALL = { borderColor: "var(--gold)", color: "var(--gold)" };
    const rest = rule(".chip", false);
    for (const s of ["Site", "Country", "Release", "Album", "Awards", "Compare", "Car", "Afrobeats", "Analysis", "On this day"]) {
      const [color, border] = SHIPPED_FALLBACK(s);
      // Pressed and resting computed the same border and label: nothing showed.
      expect(`1px solid ${border}`, s).toBe(rest["border"]);
      expect(color, s).toBe(rest["color"]);
    }
    // And All's phone on-state was gold, which N2 never is.
    expect(SHIPPED_ALL.borderColor).toMatch(/--gold/);
    expect(rule(".chipOn, .chipOn:hover", true)["border-color"]).not.toMatch(/--gold/);
  });
});
