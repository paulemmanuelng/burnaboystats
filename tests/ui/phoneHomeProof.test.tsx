import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileHome from "../../app/components/MobileHome";
import styles from "../../app/components/mobileHome.module.css";
import { allItems, CERTS_VERIFIED_ON } from "../../app/data/certifications";
import { registerBodies } from "../../app/lib/provenanceSpecs";
import { MORE_HREF, p1Shown } from "../../app/lib/provenance";
import { shortStamp } from "../../app/lib/dates";

/**
 * The phone home's proof (design review 8 Oct 2026, Job 1).
 *
 * J1-2: under the hero buttons, P1 — the register bodies behind his
 * certifications, most plaques first, four and "+ N more" to the registers
 * (fix 9); "Verified" and the day the registers were read (fix 10); "How it's
 * counted ↗" to /methodology#registers (fixes 11, 29). The approved hero above
 * it is unchanged. The canvas's "RIAA, BPI, SNEP, IFPI" is a stale sample
 * (fix 33): the names are derived.
 */

const ROOT = join(__dirname, "..", "..");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const doc = parse(renderToStaticMarkup(<MobileHome />));
const hero = doc.querySelector(`.${styles.hero}`)!;

/** Where the P1 sits in a phone hero's markup, in words; [] when it sits
 *  after "Explore the music" and before the stat grid, once. */
function placeProblems(src: string): string[] {
  const p1 = src.indexOf("<MobileProvenance");
  if (p1 < 0) return ["no P1 in the phone hero"];
  const out: string[] = [];
  if (p1 < src.indexOf("styles.secondary")) out.push("P1 above the buttons");
  if (p1 > src.indexOf("styles.statGrid")) out.push("P1 below the stat grid");
  return out;
}

describe("J1-2: P1 under the phone home's buttons", () => {
  it("one P1, inside the hero, after 'Explore the music' and before the stat grid", () => {
    const p1s = doc.querySelectorAll('[data-provenance="p1"]');
    expect(p1s).toHaveLength(1);
    expect(hero.contains(p1s[0])).toBe(true);
    const secondary = hero.querySelector(`.${styles.secondary}`)!;
    expect(secondary.compareDocumentPosition(p1s[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(p1s[0].compareDocumentPosition(doc.querySelector(`.${styles.statGrid}`)!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(placeProblems(readFileSync(join(ROOT, "app/components/MobileHome.tsx"), "utf8"))).toEqual([]);
  });

  it("names the register bodies behind his plaques, four and '+ N more' to the registers", () => {
    const p1 = doc.querySelector('[data-provenance="p1"]')!;
    const { shown, more } = p1Shown(registerBodies(allItems));
    expect(more).toBeGreaterThan(0);
    const line = p1.querySelector("[data-provenance-sources]")!;
    expect(words(line)).toBe(`Sources: ${shown.join(", ")} + ${more} more sources`);
    const moreLink = line.querySelector("a")!;
    expect(moreLink.getAttribute("href")).toBe(MORE_HREF);
  });

  it("dates it 'Verified' on the day the registers were read, and links how it's counted", () => {
    const p1 = doc.querySelector('[data-provenance="p1"]')!;
    const date = p1.querySelector("[data-provenance-date]")!;
    expect(words(date)).toBe(`Verified ${shortStamp(CERTS_VERIFIED_ON)}`);
    expect(date.querySelector("time")!.getAttribute("datetime")).toBe(CERTS_VERIFIED_ON);
    const how = p1.querySelector("a[data-provenance-method]")!;
    expect(how.getAttribute("href")).toBe("/methodology#registers");
    expect(words(how)).toBe("How it's counted ↗");
    // The phone leaves Open data to the P3s (J0-9).
    expect(p1.querySelector('a[href^="/api/"]')).toBeNull();
  });

  it("sits 6px under the buttons whatever order the sheets load in, and its date never breaks", () => {
    // A single .p1Slot (0,1,0) ties the component's .p1 { margin: 0 } and lost
    // in next dev: 0px, not 6px, at every phone width (review, 14 Oct 2026).
    const home = readFileSync(join(ROOT, "app/components/mobileHome.module.css"), "utf8");
    const single = /^\.p1Slot \{/m;
    expect(home).toMatch(/^\.p1Slot\.p1Slot \{ margin-top: 6px; \}$/m);
    expect(home).not.toMatch(single);
    // "Updated 10 Oct / 2026" at 320: the day stays whole on the phone row.
    const prov = readFileSync(join(ROOT, "app/components/mobileProvenance.module.css"), "utf8");
    expect(prov).toMatch(/^\.p1Row time \{ white-space: nowrap; \}$/m);
    // Negative control: mobileHome.module.css on f0810e2a, verbatim.
    expect(".p1Slot { margin-top: 6px; }").toMatch(single);
  });

  it("negative controls: the hero as shipped has no P1; the canvas's names are not the data's", () => {
    // app/components/MobileHome.tsx on main e85e6efe (14 Oct 2026), verbatim.
    const SHIPPED = `        <Link href="/music" className={styles.secondary}>
          Explore the music ↗
        </Link>
      </div>

      {/* Stat grid — four, two-up */}
      <div className={styles.statGrid}>`;
    expect(placeProblems(SHIPPED)).toEqual(["no P1 in the phone hero"]);
    // Proof.dc.html §1 draws "Sources: RIAA, BPI, SNEP, IFPI" (fix 33: stale).
    expect(p1Shown(registerBodies(allItems)).shown).not.toEqual(["RIAA", "BPI", "SNEP", "IFPI"]);
  });
});
