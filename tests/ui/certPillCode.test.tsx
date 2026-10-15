import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import { allItems, COUNTRIES, type Cert } from "../../app/data/certifications";
import { artistBySlug, countryMeta } from "../../app/data/afrobeats";
import { awardLabel } from "../../app/lib/awardName";
import { badgeWeight } from "../../app/lib/certs";
import ledger from "../../app/components/ledgerRow.module.css";
import certStyles from "../../app/certifications/certifications.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 3 · J3-2 (design review 8 Oct 2026): a desktop ledger pill names its
 * territory by the filter chips' own code — "🇺🇸 US · Gold" — so no country
 * is named by its flag alone; the tier ink and edge are as built. The label
 * issuer ("Sony Music Africa") inside the pill is 11px on the two desktop
 * ledgers (C-8: the phone ledger and the board's country strip keep 9px).
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const flagOf = (code: string) => COUNTRIES[code]?.flag ?? countryMeta(code).flag;

type Release = { title: string; certs: Cert[] };
/** Every desktop pill's text, with the plaque it should print, row by row. */
function pills(doc: Document, releases: readonly Release[]) {
  const out: { title: string; cert: Cert; text: string; el: Element }[] = [];
  for (const row of doc.querySelectorAll(`.${ledger.row}`)) {
    const title = row.querySelector(`.${ledger.title}`)!.textContent!.trim();
    const item = releases.find((r) => r.title === title)!;
    const certs = [...item.certs].sort((x, y) => badgeWeight(y) - badgeWeight(x));
    const els = [...row.querySelectorAll(`.${certStyles.cBadge}`)];
    expect(els.length, title).toBe(certs.length);
    els.forEach((el, i) => out.push({ title, cert: certs[i], text: el.textContent!, el }));
  }
  return out;
}

const PAGES: [string, () => Promise<{ doc: Document; releases: readonly Release[] }>][] = [
  ["/certifications", async () => ({ doc: parse(renderToStaticMarkup(<CertificationsPage />)), releases: allItems })],
  ...(["tyla", "wizkid", "rema"] as const).map(
    (slug) =>
      [
        `/afrobeats/${slug}`,
        async () => ({
          doc: parse(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }))),
          releases: artistBySlug(slug)!.releases as readonly Release[],
        }),
      ] as [string, () => Promise<{ doc: Document; releases: readonly Release[] }>],
  ),
];

describe("J3-2: every desktop pill prints flag · code · tier", () => {
  it.each(PAGES)("%s", async (_route, load) => {
    const { doc, releases } = await load();
    const all = pills(doc, releases);
    expect(all.length).toBeGreaterThan(0);
    // The filter card's country chips print "{flag}{code}": the codes a pill may print.
    const chipCodes = new Set(
      [...doc.getElementById("cert-filters")!.querySelectorAll("button")].map((b) => b.textContent!.match(/([A-Z]{2})$/)?.[1]).filter(Boolean),
    );
    expect(chipCodes.size).toBeGreaterThan(0);
    for (const { title, cert, text } of all) {
      expect(chipCodes.has(cert.c), `${title}: ${cert.c} is a chip's code`).toBe(true);
      expect(text.startsWith(`${flagOf(cert.c)}${cert.c} · ${awardLabel(cert)}`), `${title}: ${text}`).toBe(true);
    }
  });

  it("the dot after the code is muted; the code takes the tier's ink", () => {
    const css = read("app/certifications/certifications.module.css");
    expect(winning(css, ".badgeSep", "color", (m) => m === null)).toBe("var(--text-muted)");
  });
});

describe("J3-2: the issuer inside the pill, at 11px on the desktop ledgers", () => {
  it("Tyla's ZA pills read “🇿🇦 ZA · … Sony Music Africa”, the issuer marker on the 11px label size", async () => {
    const { doc, releases } = await PAGES[1][1]();
    const za = pills(doc, releases).filter((p) => p.cert.c === "ZA" && p.cert.body === "Sony Music Africa");
    expect(za.length).toBeGreaterThan(0);
    for (const { el, text, cert } of za) {
      expect(text).toBe(`🇿🇦ZA · ${awardLabel(cert)}Sony Music Africa`);
      const marker = el.querySelector(`.${certStyles.badgeIssuer}`)!;
      expect(marker.textContent).toBe("Sony Music Africa");
    }
    const css = read("app/certifications/certifications.module.css");
    expect(winning(css, ".badgeIssuer", "font-size", (m) => m === null)).toBe("var(--type-label)");
    expect(read("app/globals.css")).toMatch(/--type-label:\s*11px;/);
  });

  it("the phone ledger and the board's country strip keep their 9px (C-8)", () => {
    for (const f of ["app/components/mobileCerts.module.css", "app/afrobeats/[artist]/artist.module.css"])
      expect(winning(read(f), ".badgeIssuer", "font-size", (m) => m === null), f).toBe("9px");
  });
});

describe("J3-2 negative controls: what shipped fails", () => {
  it("the 8 Oct Tyla desktop pill, as served, carries no code", () => {
    // Verbatim from burnaboystats.com/afrobeats/tyla, 8 Oct 2026 (job1-scratch/live_afrobeats_tyla.html).
    const shipped = parse(
      `<span class="certifications-module__tiv2Qa__cBadge certifications-module__tiv2Qa__platinum " title="South Africa — Sony Music Africa, label-issued plaque"><span class="certifications-module__tiv2Qa__flag">🇿🇦</span>Platinum<span class="certifications-module__tiv2Qa__badgeProgram certifications-module__tiv2Qa__badgeIssuer">Sony Music Africa</span></span>`,
    ).body.firstElementChild!;
    expect(shipped.textContent!.startsWith("🇿🇦ZA · Platinum")).toBe(false);
  });

  it("main's desktop .badgeIssuer (9px) fails the 11px check", () => {
    // certifications.module.css on main f20b5347, the rule's size, verbatim.
    const shipped = `.badgeIssuer {
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  font-size: 9px;
  letter-spacing: 0.04em;
  line-height: 1;
  opacity: 1;
}`;
    expect(winning(shipped, ".badgeIssuer", "font-size", (m) => m === null)).not.toBe("var(--type-label)");
  });
});
