import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import AfrobeatsPage from "../../app/afrobeats/page";
import compareStyles from "../../app/compare/compare.module.css";
import deskStyles from "../../app/afrobeats/afrobeats.module.css";
import phoneStyles from "../../app/components/mobileAfrobeatsHub.module.css";
import { COUNTRIES, CERTS_LAST_FULL_SWEEP, CERTS_VERIFIED_ON, TARGETED_REGISTER_READS } from "../../app/data/certifications";
import { AFROBEATS_LAST_FULL_SWEEP } from "../../app/data/afrobeats";
import { LATEST_REGISTER_READ } from "../../app/lib/boardCadence";
import { comparableArtists } from "../../app/lib/certUnits";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { pageStamp } from "../../app/data/afrobeats";
import sitemap from "../../app/sitemap";
import { siteUrl } from "../../app/site";

/**
 * Question 2 of the 15 Oct 2026 live debug (Paul: "yes to all"). The pair
 * pages and the /afrobeats hub dated the registers by the last FULL sweep
 * alone, "registers read 2 October 2026". Since 8 Oct each register is
 * re-read on its own publishing day (targeted sweeps), so no full sweep will
 * move that date again and it read staler every week. The lines keep the
 * full-sweep date and add the re-reads, with the newest targeted read's day.
 *
 * No per-register read date existed in the data: a read that changed nothing
 * moved no stamp (CERTS_VERIFIED_ON and the board's verifiedOn move only on a
 * changed plaque), so the 14 Oct Tuesday sweep, 0 new plaques, left no trace.
 * TARGETED_REGISTER_READS is that log, and the day printed is derived from it.
 *
 * Shipped on main (a9574c64), served by the dev server on 15 Oct 2026:
 *   pair  "27 countries checked · outside Nigeria · both registers read 2 October 2026"
 *   hub   "The board is re-read at each register sweep — last on 2 October 2026. Burna Boy's registers were last verified 7 October 2026."
 *   phone "Re-read at each sweep, last 2 October 2026 · Burna Boy’s registers last verified 7 October 2026"
 */

const long = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const pair = async (sp: Record<string, string>) => parse(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
/** "re-read on each register's publishing day (latest <day>)" after the full-sweep date. */
const REREAD = /, then re-read on each register's publishing day \(latest (\d{1,2} [A-Z][a-z]+ \d{4})\)/;

describe("Q2: the targeted reads are logged, and the newest is derived", () => {
  it("each read names registers the site cites, on a day after the full sweeps", () => {
    expect(TARGETED_REGISTER_READS.length).toBeGreaterThan(0);
    const today = new Date().toISOString().slice(0, 10);
    for (const r of TARGETED_REGISTER_READS) {
      expect(r.on, r.on).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(r.on > CERTS_LAST_FULL_SWEEP && r.on > AFROBEATS_LAST_FULL_SWEEP, r.on).toBe(true);
      expect(r.on <= today, r.on).toBe(true);
      expect(r.codes.length, r.on).toBeGreaterThan(0);
      for (const c of r.codes) expect(COUNTRIES[c], `${r.on} ${c}`).toBeDefined();
      expect(new Set(r.codes).size, r.on).toBe(r.codes.length);
    }
    // Oldest first, one entry a day.
    const days = TARGETED_REGISTER_READS.map((r) => r.on);
    expect(days).toEqual([...new Set(days)].sort());
    expect(LATEST_REGISTER_READ).toBe(days.at(-1));
  });

  it("the 14 Oct Tuesday sweep is the first entry: BPI by hand, RMNZ, IFPI Sverige, SNEP, FIMI, Promusicae, ČNS IFPI", () => {
    expect(TARGETED_REGISTER_READS[0]).toEqual({ on: "2026-10-14", codes: ["UK", "NZ", "SE", "FR", "IT", "ES", "CZ", "SK"] });
  });
});

describe("Q2: the pair line keeps the full-sweep date and adds the re-reads", () => {
  it("Burna Boy vs Wizkid", async () => {
    const d = await pair({ a: "burna-boy", b: "wizkid" });
    const burna = comparableArtists.find((x) => x.slug === "burna-boy")!;
    const line = words(d.querySelector(`.${compareStyles.scope}`));
    expect(line).toContain(`both registers read ${long(burna.registersReadOn)}, then re-read on each register's publishing day (latest ${long(LATEST_REGISTER_READ!)})`);
    expect(line.match(REREAD)?.[1]).toBe(long(LATEST_REGISTER_READ!));
    expect(line.endsWith(")")).toBe(true);
    // "latest 14 October 2026" never breaks: at 320 the first build left
    // "2026)" alone on the line's last row.
    const raw = d.querySelector(`.${compareStyles.scope}`)!.textContent!;
    expect(raw).toContain(`(latest ${long(LATEST_REGISTER_READ!)})`.replace(/ /g, "\u00a0"));
  });

  it("a board pair says the same, from the same stamp", async () => {
    const d = await pair({ a: "black-sherif", b: "tiwa-savage" });
    const line = words(d.querySelector(`.${compareStyles.scope}`));
    expect(line).toMatch(REREAD);
    expect(line.match(REREAD)?.[1]).toBe(long(LATEST_REGISTER_READ!));
  });

  it("a record pair prints no register line, as before", async () => {
    const d = await pair({ a: "burna-boy", b: "wizkid", mode: "songs" });
    expect(words(d.querySelector(`.${compareStyles.scope}`))).not.toMatch(/registers read|publishing day/);
  });
});

describe("Q2: the hub's cadence line, both layouts", () => {
  const html = () => parse(renderToStaticMarkup(<AfrobeatsPage />));
  const latest = () => long(LATEST_REGISTER_READ!);

  it("desktop", () => {
    const lines = [...html().getElementsByClassName(deskStyles.cadence)];
    expect(lines).toHaveLength(1);
    expect(words(lines[0])).toBe(
      `The board's registers were read in full on ${long(AFROBEATS_LAST_FULL_SWEEP)}, then re-read on each register's publishing day (latest ${latest()}). Burna Boy's registers were last verified ${long(CERTS_VERIFIED_ON)}.`,
    );
  });

  it("phone", () => {
    const lines = [...html().getElementsByClassName(phoneStyles.cadence)];
    expect(lines).toHaveLength(1);
    expect(words(lines[0])).toBe(
      `Registers read in full ${long(AFROBEATS_LAST_FULL_SWEEP)}, then re-read on each register’s publishing day (latest ${latest()}) · Burna Boy’s registers last verified ${long(CERTS_VERIFIED_ON)}`,
    );
  });
});

describe("Q2: the hub's Provenance tile and both footers say the same", () => {
  const html = () => parse(renderToStaticMarkup(<AfrobeatsPage />));
  const full = () => long(AFROBEATS_LAST_FULL_SWEEP);
  const latest = () => long(LATEST_REGISTER_READ!);

  it("desktop tile: read in full, then the re-reads", () => {
    const t = words(html().body);
    expect(t).toContain(`Read at source, read in full ${full()}`);
    expect(t).toContain(
      `RIAA, BPI, SNEP, TurnTable and their equivalents — read in full on ${full()}, then re-read on each register's publishing day (latest ${latest()}).`,
    );
    expect(t).not.toContain("re-read at each sweep, last on");
  });

  it("desktop and phone footers", () => {
    const t = words(html().body);
    expect(t).toContain(`Every register read in full on ${full()}, then re-read on each register's publishing day (latest ${latest()}).`);
    expect(t).toContain(`Every register read in full on ${full()}, then re-read on each register’s publishing day (latest ${latest()}).`);
    expect(t).not.toContain("Every register last re-read");
  });
});

describe("Q2: the routes that print the newest read are never dated before it", () => {
  const rows = sitemap();
  const lastmod = (path: string) => {
    const r = rows.find((x) => x.url === `${siteUrl}${path}`);
    return r?.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
  };

  it("the /afrobeats hub and every pair page, in the sitemap", () => {
    const behind = ["/afrobeats", ...allPairs().map(([a, b]) => `/compare/${pairSlug(a, b)}`)]
      .map((path) => ({ path, said: lastmod(path) }))
      .filter((r) => !r.said || r.said < LATEST_REGISTER_READ!)
      .map((r) => `${r.path}: ${r.said}`);
    expect(behind).toEqual([]);
  });

  it("a pair's Dataset declares the same day as its sitemap row", async () => {
    for (const sp of [{ a: "burna-boy", b: "wizkid" }, { a: "black-sherif", b: "tiwa-savage" }]) {
      const d = await pair(sp);
      const ld = [...d.querySelectorAll('script[type="application/ld+json"]')].map((x) => JSON.parse(x.textContent!) as Record<string, unknown>);
      const date = ld.find((n) => n["@type"] === "Dataset")?.dateModified as string;
      expect(date >= LATEST_REGISTER_READ!, `${sp.a} vs ${sp.b}: ${date}`).toBe(true);
      const [a, b] = allPairs().find(([x, y]) => new Set([x.slug, y.slug]).has(sp.a) && new Set([x.slug, y.slug]).has(sp.b))!;
      expect(date).toBe(lastmod(`/compare/${pairSlug(a, b)}`));
    }
  });

  it("negative control: main's rule, the newer side's pageStamp, dates a board pair before the read it prints", () => {
    const [a, b] = allPairs().find(([x, y]) => new Set([x.slug, y.slug]).has("black-sherif") && new Set([x.slug, y.slug]).has("tiwa-savage"))!;
    expect([pageStamp(a), pageStamp(b)].sort().at(-1)! < LATEST_REGISTER_READ!).toBe(true);
  });
});

describe("Q2: negative controls, the lines main served", () => {
  it("none of them names a re-read after the full sweep", () => {
    for (const shipped of [
      "27 countries checked · outside Nigeria · both registers read 2 October 2026",
      "The board is re-read at each register sweep — last on 2 October 2026. Burna Boy's registers were last verified 7 October 2026.",
      "Re-read at each sweep, last 2 October 2026 · Burna Boy’s registers last verified 7 October 2026",
      // The Provenance tile and the footers, both layouts.
      "Read at source, re-read 2 October 2026",
      "All 20 artists' registers — RIAA, BPI, SNEP, TurnTable and their equivalents — re-read at each sweep, last on 2 October 2026.",
      "Every register last re-read 2 October 2026.",
    ]) {
      expect(shipped).not.toMatch(REREAD);
      expect(shipped).not.toContain("14 October 2026");
    }
  });
});
