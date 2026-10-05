import { render, screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import mobileStyles from "../../app/components/mobileCerts.module.css";

/**
 * Claude Design round 2 (4 Oct 2026), the certifications phone hero: the
 * switches moved under the lede, the tier bars one line each, the provenance
 * caption under them, and the active tier chip an ember edge and wash rather
 * than a second gold fill (owner's ruling N2).
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));
const artist = async (slug: string) => render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const screenOf = (c: HTMLElement) => c.querySelector(`.${mobileStyles.screen}`)!;
const heroOf = (c: HTMLElement) => screenOf(c).querySelector(`.${mobileStyles.hero}`)!;
/** a comes before b in the document. */
const before = (a: Element, b: Element) => Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

describe("the phone hero's order: kicker · total · lede · switches · tier bars · caption", () => {
  it("Tyla: every part in the hero, in order; the focus bar and the rail after it", async () => {
    at("/afrobeats/tyla#release=Water");
    const { container } = await artist("tyla");
    const hero = heroOf(container);
    const parts = [
      hero.querySelector(`.${mobileStyles.kicker}`)!,
      within(hero as HTMLElement).getByRole("heading", { level: 1 }),
      hero.querySelector(`.${mobileStyles.lede}`)!,
      within(hero as HTMLElement).getByRole("group", { name: "Which plaques count" }),
      hero.querySelector(`.${mobileStyles.tierList}`)!,
      hero.querySelector(`.${mobileStyles.provenance}`)!,
    ];
    for (const p of parts) expect(p).toBeTruthy();
    for (let i = 1; i < parts.length; i++) expect(before(parts[i - 1], parts[i]), `part ${i}`).toBe(true);
    // The live region keeps the scoped noun, beside the switches.
    expect(hero.querySelector('[aria-live="polite"]')!.textContent).toMatch(/^\d+ certifications across \d+ countries$/);
    // After the hero: the #release focus bar, then the tier rail.
    const focus = screenOf(container).querySelector(`.${mobileStyles.focusBar}`)!;
    const rail = screenOf(container).querySelector("#cert-rail")!;
    expect(hero.contains(focus)).toBe(false);
    expect(before(hero, focus)).toBe(true);
    expect(before(focus, rail)).toBe(true);
  });

  it("negative control: the switch row as shipped sat after the hero, not in it", () => {
    // MobileCerts.tsx until this change rendered <CertViewSwitches> after the
    // focus bar, below </div> of .hero — the order this test now rules out.
    const shipped = document.createElement("div");
    shipped.innerHTML = `<div class="${mobileStyles.hero}"><p class="${mobileStyles.lede}"></p></div><div role="group" aria-label="Which plaques count"></div>`;
    expect(shipped.querySelector(`.${mobileStyles.hero} [role="group"]`)).toBeNull();
  });

  it("each tier is one line: name, bar, count and share, the shares summing to ~100", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    const rows = [...heroOf(container).querySelectorAll(`.${mobileStyles.tierRow}`)];
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) {
      expect([...r.children].map((c) => c.className)).toEqual([
        mobileStyles.tierName,
        mobileStyles.tierTrack,
        mobileStyles.tierCount,
        mobileStyles.tierPct,
      ]);
    }
    const pcts = rows.map((r) => Number(r.querySelector(`.${mobileStyles.tierPct}`)!.textContent!.replace("%", "")));
    const sum = pcts.reduce((a, b) => a + b, 0);
    expect(sum).toBeGreaterThanOrEqual(98);
    expect(sum).toBeLessThanOrEqual(102);
  });
});

describe("the provenance caption", () => {
  it("Burna Boy's /certifications prints none", () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    expect(screenOf(container).querySelector(`.${mobileStyles.provenance}`)).toBeNull();
    expect(screenOf(container).textContent).not.toContain("Last verified");
  });

  it("an empty view prints none: BNXN, both switches off", async () => {
    at("/afrobeats/bnxn#home=0&feat=0");
    const { container } = await artist("bnxn");
    expect(heroOf(container).querySelector(`.${mobileStyles.provenance}`)).toBeNull();
    expect(heroOf(container).querySelector(`.${mobileStyles.tierList}`)).toBeNull();
    // Item 24: no tier rail and no list label over nothing — the empty card
    // and its Clear stay.
    expect(screenOf(container).querySelector("#cert-rail")).toBeNull();
    expect(screenOf(container).querySelector(`.${mobileStyles.listLabel}`)).toBeNull();
    expect(within(screenOf(container) as HTMLElement).getByRole("status").textContent).toContain("Nothing matches these filters.");
  });

  it("an all-register artist's caption is the date alone", async () => {
    at("/afrobeats/wizkid");
    const { container } = await artist("wizkid");
    expect(heroOf(container).querySelector(`.${mobileStyles.provenance}`)!.textContent).toMatch(
      /^Last verified \d{1,2} [A-Z][a-z]+ \d{4}\.$/,
    );
  });

  it("no source URL reaches the caption", async () => {
    at("/afrobeats/tyla");
    const { container } = await artist("tyla");
    expect(heroOf(container).querySelector(`.${mobileStyles.provenance}`)!.textContent).not.toMatch(/https?:|www\./);
  });
});

describe("N2: the active tier chip is an ember edge and wash, not a gold fill", () => {
  const CSS = readFileSync("app/components/mobileCerts.module.css", "utf8");
  /** The declarations of the rule whose selector list names `selector` exactly. */
  const ruleFor = (css: string, selector: string): string | null => {
    for (const m of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g))
      if (m[1].split(",").map((s) => s.replace(/\s+/g, " ").trim()).includes(selector)) return m[2];
    return null;
  };
  const isFill = (rule: string | null) =>
    /gradient|--gold-fill|--gold-bright|--brand-fill|--gold\)/.test((rule ?? "").replace(/border-color:[^;]+;/g, ""));

  it(".chipOn: ember border, the ruled washes, ink label, no fill", () => {
    const rule = ruleFor(CSS, ".chipOn")!;
    expect(isFill(rule)).toBe(false);
    // Since 5 Oct 2026 the values live once in globals.css, shared by every
    // phone chip rail (tests/phoneChipsN2.test.tsx resolves them per theme).
    expect(rule).toMatch(/border-color:\s*var\(--chip-on-edge\)/);
    expect(rule).toMatch(/background-image:\s*none/);
    expect(rule).toMatch(/background-color:\s*var\(--chip-on-wash\)/);
    expect(rule).toMatch(/(?:^|;|\s)color:\s*var\(--chip-on-ink\)/);
    const globals = readFileSync("app/globals.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    expect(globals).toMatch(/--chip-on-edge:\s*var\(--ember\);/);
    expect(globals).toMatch(/--chip-on-ink:\s*var\(--text\);/);
    // The ruled washes: --ember (#b34700 / #ff7a1a) at 10% on paper, 16% dark.
    expect(globals.replace(/\s+/g, "")).toContain(
      "--chip-on-wash:light-dark(color-mix(insrgb,var(--ember)10%,transparent),color-mix(insrgb,var(--ember)16%,transparent));",
    );
  });

  it("Ayra Starr's override keeps N2's shape in her colour", () => {
    const rule = ruleFor(CSS, '[data-brand="starrgirl"] .chipOn')!;
    expect(isFill(rule)).toBe(false);
    expect(rule).toMatch(/border-color:\s*var\(--brand-accent-ink\)/);
    expect(rule).toMatch(/background-image:\s*none/);
  });

  it("the Compare action is the screen's one gold fill", () => {
    const fills = [...CSS.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      .filter((m) => /background(?:-color|-image)?:[^;]*(--gold-fill|--gold-bright)/.test(m[2]))
      .map((m) => m[1].trim());
    expect(fills).toEqual([".actionPrimary"]);
  });

  it("negative controls: the .chipOn and the starrgirl override as shipped were fills", () => {
    const SHIPPED_CHIP = `.chipOn {
  background-color: var(--gold-fill);
  background-image: linear-gradient(180deg, var(--gold-bright) 0%, var(--gold-fill) 48%, var(--gold-dim) 100%);
  border-color: var(--gold);
  color: var(--ink-on-gold);
}`;
    const SHIPPED_STARR = `[data-brand="starrgirl"] .chipOn {
  background-color: var(--brand-fill);
  background-image: linear-gradient(180deg, var(--brand-fill-hi) 0%, var(--brand-fill) 52%, var(--brand-fill-lo) 100%);
  border-color: var(--brand-fill);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
}`;
    expect(isFill(ruleFor(SHIPPED_CHIP, ".chipOn"))).toBe(true);
    expect(isFill(ruleFor(SHIPPED_STARR, '[data-brand="starrgirl"] .chipOn'))).toBe(true);
  });

  it("the kicker reads over a page-colour band in the scrim, not a plate", () => {
    // At 320 and 360 the longest kickers reach the portrait; on paper they
    // sampled 4.0–4.5:1 against it (round-2 shots). The fix is a band in the
    // hero's own page-colour scrim, light theme only, over the kicker's line.
    const scrim = ruleFor(CSS, ".heroScrim")!;
    expect(scrim).toMatch(
      /linear-gradient\(180deg, light-dark\(color-mix\(in srgb, var\(--bg\) 72%, transparent\), transparent\) 44px, transparent 72px\)/,
    );
    // No plate behind the words. Negative control: the plate this branch
    // shipped before review (a pale rectangle across the photo at 320).
    const noPlate = (rule: string) => !/(?:^|;|\s)background(?:-color)?:/.test(rule) && !/box-shadow:/.test(rule);
    expect(noPlate(ruleFor(CSS, ".kicker")!)).toBe(true);
    const SHIPPED_PLATE = `.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--gold);
  width: fit-content;
  max-width: 100%;
  background: var(--bg);
  box-shadow: 0 0 6px 4px var(--bg);
}`;
    expect(noPlate(ruleFor(SHIPPED_PLATE, ".kicker")!)).toBe(false);
  });

  it("the unit under the total is \"Awards\" in every view, even at 1 (Q2)", () => {
    const src = readFileSync(join(process.cwd(), "app/components/MobileCerts.tsx"), "utf8");
    expect(src).not.toMatch(/"Award"/);
    expect(src).toMatch(/<span className=\{styles\.totalUnit\}>\s*Awards\s*<br \/>/);
  });

  it("the live toggle is untouched: only .viewRow's spacing moved (N1)", () => {
    const rule = ruleFor(CSS, ".viewRow")!;
    expect(rule.replace(/\s+/g, " ").trim()).toBe("padding: 0; margin-top: 14px;");
  });

  it("the active chip still renders on both rails", () => {
    at("/certifications");
    render(<CertificationsPage />);
    const all = screen.getAllByRole("button", { name: /^All \d+$/ }).find((b) => b.closest("#cert-rail"))!;
    expect(all.className).toContain(mobileStyles.chipOn);
    const year = screen.getAllByRole("button", { pressed: true }).find((b) => b.className.includes(mobileStyles.chipOn));
    expect(year).toBeTruthy();
  });
});
