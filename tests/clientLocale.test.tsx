import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileTours from "../app/components/MobileTours";
import DaiDaiConquest from "../app/components/DaiDaiConquest";
import { tours } from "../app/data/tours";
import { allChartItems, CHART_COUNTRIES } from "../app/data/charts";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { byReachOrder } from "../app/lib/chartOrder";

/**
 * What a client component prints must not depend on the reader's locale.
 *
 * The server renders in en-US; the browser re-renders in whatever the reader's
 * machine is set to. Where the two disagree React throws #418 and repaints the
 * page. The full-site debug of 24 Sep 2026 caught it on live pages:
 *
 *  - /records/tours in a German browser: the phone card read "80.000 cap"
 *    against the server's "80,000" (a bare toLocaleString()).
 *  - /dai-dai in Czech, Slovak and Lithuanian, and the board's chart pages in
 *    Czech, Lithuanian and Estonian: a bare localeCompare() tie-break put the
 *    cells or rows in a different order, because Czech collates CH after H.
 *
 * The tests below make the runtime's default locale a foreign one, the way a
 * reader's browser does, and check the output is still the server's.
 */

const numberToLocale = Number.prototype.toLocaleString;
const stringCompare = String.prototype.localeCompare;

/** Run `fn` as if the machine's default locale were `locale`: only calls
 *  that pass no locale of their own are affected, exactly as in a browser. */
function withDefaultLocale<T>(locale: string, fn: () => T): T {
  Number.prototype.toLocaleString = function (this: number, locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions) {
    return numberToLocale.call(this, locales ?? locale, options);
  };
  String.prototype.localeCompare = function (this: string, that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions) {
    return stringCompare.call(this, that, locales ?? locale, options);
  };
  try {
    return fn();
  } finally {
    Number.prototype.toLocaleString = numberToLocale;
    String.prototype.localeCompare = stringCompare;
  }
}

const text = (html: string) => html.replace(/<!-- -->/g, "");

describe("client components print the server's text in any locale", () => {
  it("the phone Tours card prints the London Stadium capacity as 80,000 in a German browser", () => {
    const render = () =>
      text(
        renderToStaticMarkup(
          <MobileTours
            tours={tours}
            topGross="—"
            topTourName="—"
            countryCount={0}
            regionCount={0}
            biggestNight="—"
            biggestVenue="—"
            yearSpan="—"
          />
        )
      );
    const server = render();
    const german = withDefaultLocale("de-DE", render);
    expect(server).toContain("London, UK · 80,000 cap");
    // The line the German browser painted on 24 Sep 2026.
    expect(german).not.toContain("London, UK · 80.000 cap");
    expect(german).toBe(server);
  });

  it("the Dai Dai grid keeps the server's order in Czech, Slovak, Lithuanian and Estonian", () => {
    const daiDai = allChartItems.find((r) => r.title === "Dai Dai")!;
    const countries = daiDai.entries
      .filter((e) => e.c !== "GLB" && e.c !== "GLBX")
      .map((e) => ({ code: e.c, flag: "", name: CHART_COUNTRIES[e.c]?.name ?? e.c, peak: e.peak }));
    // Read by the cell's country code: the names are visible text now (the
    // redesign of 26 Sep 2026 retired the hover-only title tooltips).
    const order = (html: string) =>
      [...html.matchAll(/data-code="([A-Z]+)"/g)].map((m) => CHART_COUNTRIES[m[1]]?.name ?? m[1]);
    const server = order(renderToStaticMarkup(<DaiDaiConquest countries={countries} />));
    expect(server.length).toBeGreaterThan(20);
    // The pair the Czech default reverses, when both are at the same peak.
    const ch = countries.find((c) => c.code === "CH");
    const gr = countries.find((c) => c.code === "GR");
    if (ch && gr && ch.peak === gr.peak)
      expect(server.indexOf(CHART_COUNTRIES.CH.name)).toBeLessThan(server.indexOf(CHART_COUNTRIES.GR.name));
    for (const locale of ["cs-CZ", "sk-SK", "lt-LT", "et-EE"]) {
      const client = withDefaultLocale(locale, () => order(renderToStaticMarkup(<DaiDaiConquest countries={countries} />)));
      expect(client, locale).toEqual(server);
    }
  });

  it("the board's chart order files Davido's Cho Cho before Heaven in a Czech browser", () => {
    // Both are one Nigerian entry at No. 12 with no year, so the title decides.
    const davido = afrobeatsArtists.find((a) => a.slug === "davido")!;
    const rows = davido.charts.filter((r) => r.title === "Heaven" || r.title.startsWith("Cho Cho"));
    expect(rows.map((r) => r.title).sort()).toEqual(["Cho Cho (Zlatan ft. Mayorkun & Davido)", "Heaven"]);
    const titles = (locale: string) =>
      withDefaultLocale(locale, () => [...rows].sort(byReachOrder).map((r) => r.title));
    expect(titles("en-US")[0]).toMatch(/^Cho Cho/);
    for (const locale of ["cs-CZ", "sk-SK", "lt-LT", "et-EE"]) expect(titles(locale), locale).toEqual(titles("en-US"));
  });
});

describe("no client component formats or collates in the reader's locale", () => {
  // A structural backstop for the three above: a bare toLocaleString() or a
  // one-argument localeCompare() in a "use client" file (or in chartOrder.ts,
  // which ChartExplorer runs in the browser) is the pattern that shipped.
  const ROOT = process.cwd();
  const BARE = /\.toLocale(?:Date|Time)?String\(\s*\)|\.localeCompare\((?:[^,()]|\([^()]*\))*\)/;

  function files(dir: string, out: string[] = []): string[] {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      if (statSync(p).isDirectory()) files(p, out);
      else if (/\.tsx?$/.test(e)) out.push(p);
    }
    return out;
  }

  it("catches the lines that shipped", () => {
    // Verbatim from MobileTours.tsx, DaiDaiConquest.tsx and chartOrder.ts
    // before 24 Sep 2026.
    expect(BARE.test('{u.cap ? ` · ${u.cap.toLocaleString()} cap` : ""}')).toBe(true);
    expect(BARE.test("return [...countries].sort((a, b) => a.peak - b.peak || a.code.localeCompare(b.code));")).toBe(true);
    expect(BARE.test("  a.title.localeCompare(b.title);")).toBe(true);
    expect(BARE.test(': sortKey === "country" ? countries[a.code].name.localeCompare(countries[b.code].name)')).toBe(true);
    expect(BARE.test('a.code.localeCompare(b.code, "en")')).toBe(false);
    expect(BARE.test('d.cap.toLocaleString("en-GB")')).toBe(false);
  });

  it("finds none in the client code", () => {
    const client = files(join(ROOT, "app")).filter((p) => /^\s*["']use client["']/.test(readFileSync(p, "utf8")));
    const offenders: string[] = [];
    for (const p of [...client, join(ROOT, "app/lib/chartOrder.ts")]) {
      readFileSync(p, "utf8")
        .split("\n")
        .forEach((line, i) => {
          if (!/^\s*(\/\/|\*)/.test(line) && BARE.test(line)) offenders.push(`${p.slice(ROOT.length + 1)}:${i + 1}`);
        });
    }
    expect(client.length).toBeGreaterThan(20);
    expect(offenders).toEqual([]);
  });
});
