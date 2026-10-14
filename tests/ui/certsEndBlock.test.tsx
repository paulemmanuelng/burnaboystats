import { render, within } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import CertificationsPage from "../../app/certifications/page";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import { allItems, CERTS_VERIFIED_ON } from "../../app/data/certifications";
import { artistBySlug, lastVerifiedOn } from "../../app/data/afrobeats";
import { boardRegisterBodies, registerBodies, REGISTER_READ } from "../../app/lib/provenanceSpecs";
import { DATE_LABELS, MORE_HREF, p1Shown } from "../../app/lib/provenance";
import { certsInView, homeCodeFor } from "../../app/lib/certScope";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import { shortStamp } from "../../app/lib/dates";
import { downloadBySlug } from "../../app/lib/dataDownloads";
import { CREDIT_LINE } from "../../app/lib/credit";
import { CERT_SWAP } from "../../app/lib/certViewPrepaint";

/**
 * The phone certifications end block (design review 8 Oct 2026, J1-5; fixes
 * 27 and 28): after the log, on /certifications and on every board artist's
 * page, a P2 — read at each body's register, the bodies named as fix 9 names
 * them (four, then "+ N more" to the registers), verified on the day the
 * registers were read, and "How it's counted ↗" to /methodology#registers,
 * with no "Method ▾" (fix 27) — then a P3 that is the data line alone. It
 * prints no off-register line: the tier-bar caption above carries it (fix 28).
 */

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const named = (a: Element) => {
  const c = a.cloneNode(true) as Element;
  c.querySelectorAll('[aria-hidden="true"]').forEach((g) => g.remove());
  return words(c);
};
const screenOf = (c: HTMLElement) => c.querySelector(`.${mobileStyles.screen}`)!;
const before = (a: Element, b: Element) => Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
const line = (bodies: readonly string[], day: string) => {
  const { shown, more } = p1Shown(bodies);
  return `${REGISTER_READ}: ${shown.join(", ")}${more ? ` + ${more} more sources` : ""} · verified ${shortStamp(day)}`;
};

const tyla = artistBySlug("tyla")!;
const PAGES = [
  {
    name: "/certifications",
    url: "/certifications",
    mount: async () => render(<CertificationsPage />),
    bodies: registerBodies(allItems),
    day: CERTS_VERIFIED_ON,
    data: `Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`,
    json: "/api/v1/certifications",
  },
  {
    name: "/afrobeats/tyla",
    url: "/afrobeats/tyla",
    mount: async () => render(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) })),
    bodies: boardRegisterBodies(tyla),
    day: lastVerifiedOn(tyla),
    data: `JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`,
    json: "/api/v1/afrobeats",
  },
] as const;

describe("J1-5: the phone end block, P2 then P3", () => {
  for (const pg of PAGES) {
    it(`${pg.name}: one P2 — the register bodies, Verified, 'How it's counted ↗' — and no Method ▾`, async () => {
      at(pg.url);
      const { container } = await pg.mount();
      const screen = screenOf(container);
      const p2s = screen.querySelectorAll('[data-provenance="p2"]');
      expect(p2s).toHaveLength(1);
      const p2 = p2s[0];
      expect(p2.querySelector("details")).toBeNull();
      expect(words(p2.querySelector("[data-provenance-sources]"))).toBe(line(pg.bodies, pg.day));
      expect(p2.querySelector("time")!.getAttribute("datetime")).toBe(pg.day);
      // "+ N more" is the fix-9 link, with no glyph.
      const more = p2.querySelector(`[data-provenance-sources] a[href="${MORE_HREF}"]`)!;
      expect(named(more)).toBe(`+ ${pg.bodies.length - 4} more sources`);
      expect(more.textContent).not.toMatch(/[↗→↓▾]/);
      // The method link (fixes 11, 27, 29): the registers section, ↗ because it leaves the page.
      const how = p2.querySelector("a[data-provenance-method]")!;
      expect(how.getAttribute("href")).toBe("/methodology#registers");
      expect(named(how)).toBe("How it's counted");
      expect(words(how)).toBe("How it's counted ↗");
    });

    it(`${pg.name}: then one P3, the data line alone, no note`, async () => {
      at(pg.url);
      const { container } = await pg.mount();
      const screen = screenOf(container);
      const p2 = screen.querySelector('[data-provenance="p2"]')!;
      const p3s = screen.querySelectorAll('[data-provenance="p3"]');
      expect(p3s).toHaveLength(1);
      const p3 = p3s[0];
      expect(before(p2, p3)).toBe(true);
      expect(p3.querySelector("[data-provenance-note]")).toBeNull();
      expect(p3.id).toBe("m-method");
      const data = p3.querySelector("[data-provenance-data]")!;
      expect(words(data)).toBe(pg.data);
      expect(data.querySelector(`a[href="${pg.json}"]`)).not.toBeNull();
      if (pg.name === "/certifications") expect(data.querySelector('a[href$=".csv"]')!.getAttribute("href")).toBe(downloadBySlug("certifications").path);
      // One wrapper, recounted by the switches, so hidden at first paint on a link that turns one off.
      const block = p2.parentElement!;
      expect(block.className).toBe(mobileStyles.endBlock);
      expect(block.contains(p3)).toBe(true);
      expect(block.hasAttribute(CERT_SWAP)).toBe(true);
    });

    it(`${pg.name}: the end block prints no off-register line (fix 28)`, async () => {
      at(pg.url);
      const { container } = await pg.mount();
      const block = screenOf(container).querySelector(`.${mobileStyles.endBlock}`)!;
      expect(words(block)).not.toMatch(/off-register|label's own|own announcement|own chart/i);
    });
  }

  it("/certifications: after the log; /afrobeats/tyla (no log): before the questions", async () => {
    at("/certifications");
    const burna = screenOf((await PAGES[0].mount()).container);
    expect(before(burna.querySelector(`.${mobileStyles.log}`)!, burna.querySelector('[data-provenance="p2"]')!)).toBe(true);
    at("/afrobeats/tyla");
    const t = screenOf((await PAGES[1].mount()).container);
    expect(t.querySelector(`.${mobileStyles.log}`)).toBeNull();
    const faq = within(t as HTMLElement).getByRole("heading", { name: "Common questions" });
    expect(before(t.querySelector('[data-provenance="p3"]')!, faq)).toBe(true);
  });

  it("a narrowed view names the bodies behind that view's plaques", async () => {
    at("/certifications#feat=0&home=0");
    const { container } = render(<CertificationsPage />);
    const view = certsInView(allItems, { home: homeCodeFor("Nigeria"), featured: featuredTitlesOf("burna-boy") }, { scope: "intl", credit: "lead" });
    const p2 = screenOf(container).querySelector('[data-provenance="p2"]')!;
    expect(words(p2.querySelector("[data-provenance-sources]"))).toBe(line(registerBodies(view), CERTS_VERIFIED_ON));
    // Nigeria's TurnTable (TCSN) is not among them.
    expect(registerBodies(view)).not.toContain(registerBodies(allItems).find((b) => /TCSN/.test(b)));
  });

  it("negative control: the canvas line fails both the names and the label", () => {
    // Proof.dc.html §2, the Burna Boy frame, as drawn.
    const CANVAS = "Read at each body's register: RIAA, BPI, SNEP, Music Canada + 23 more · last check 7 Oct 2026";
    expect(CANVAS).not.toBe(line(registerBodies(allItems), CERTS_VERIFIED_ON));
    expect(CANVAS.split(": ")[1].split(" + ")[0].split(", ")).not.toEqual(p1Shown(registerBodies(allItems)).shown);
    // "last check" is not a label in fix 10's closed set; "Verified" is.
    expect((DATE_LABELS as readonly string[]).map((l) => l.toLowerCase())).not.toContain("last check");
    expect(DATE_LABELS).toContain("Verified");
  });
});
