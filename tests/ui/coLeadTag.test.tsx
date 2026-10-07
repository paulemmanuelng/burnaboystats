import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";

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
import ChartsPage from "../../app/records/charts/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import SongPage from "../../app/music/[song]/page";
import DaiDaiPage from "../../app/dai-dai/page";
import DaiDaiPageES from "../../app/dai-dai/es/page";
import { songs } from "../../app/data/songs";
import { BURNA_ROLES, roleTag } from "../../app/data/songRoles";
import certStyles from "../../app/certifications/certifications.module.css";
import mobileCertStyles from "../../app/components/mobileCerts.module.css";
import chartStyles from "../../app/records/charts/charts.module.css";
import mobileChartStyles from "../../app/components/mobileOfficialCharts.module.css";
import songStyles from "../../app/music/[song]/song.module.css";
import daiDaiStyles from "../../app/dai-dai/dai-dai.module.css";

// The co-lead tag (the credit-role rule, Paul, 6 Oct 2026): a Burna Boy row
// filed under Singles because Spotify credits him as a Main Artist, but billed
// to another act or co-billed, carries a small "co-lead" tag — on both layouts
// of /certifications and /records/charts. His own songs with a guest ("For My
// Hand" feat. Ed Sheeran) carry none, nor do his featured credits ("Be
// Honest"), nor any board page. Song pages add the role to their kicker.

const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

/** Every tagged row's title in one layout: the tag's row, read by its title element. */
function taggedTitles(container: HTMLElement, tagClass: string, rowClass: string, titleSel: string): string[] {
  return [...container.querySelectorAll(`.${tagClass}`)].map((tag) => {
    const row = tag.closest(`.${rowClass}`);
    expect(row, "the tag sits in a row").not.toBeNull();
    return row!.querySelector(titleSel)!.textContent!.replace(/Album$/, "").trim();
  });
}

const CO_LEAD_CERTS = Object.entries(BURNA_ROLES).filter(([, r]) => r.coLeadWith?.length).map(([t]) => t);

describe("/certifications: the co-lead tag, both layouts", () => {
  it("desktop: on Location and Dai Dai, with who else Spotify credits; not on For My Hand or Be Honest", () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const desk = taggedTitles(container, certStyles.roleTag, certStyles.certRow, `.${certStyles.certTitle}, .${certStyles.certTitleLink}`);
    expect(desk).toEqual(expect.arrayContaining(["Location", "Dai Dai", "We Pray", "Own It"]));
    expect(desk).not.toContain("For My Hand");
    expect(desk).not.toContain("Be Honest");
    expect(desk).not.toContain("Last Last");
    // Every tagged row is a co-lead in the data, and every certified co-lead is tagged.
    expect(desk.every((t) => CO_LEAD_CERTS.includes(t))).toBe(true);
    const tag = [...container.querySelectorAll(`.${certStyles.roleTag}`)].find((t) => t.closest(`.${certStyles.certRow}`)!.textContent!.includes("Dave ft. Burna Boy"))!;
    expect(tag.textContent).toBe("co-lead");
    expect(tag.getAttribute("title")).toBe("Spotify credits Burna Boy as a main artist alongside Dave");
    const pray = [...container.querySelectorAll(`.${certStyles.roleTag}`)].find((t) => t.closest(`.${certStyles.certRow}`)!.textContent!.includes("Coldplay"))!;
    expect(pray.getAttribute("title")).toBe("Spotify credits Burna Boy as a main artist alongside Coldplay, Little Simz, Elyanna and TINI");
  });

  it("phone: the same rows, in the row's credit line", () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const phone = taggedTitles(container, mobileCertStyles.roleTag, mobileCertStyles.row, `.${mobileCertStyles.rowTitle}`);
    expect(phone).toEqual(expect.arrayContaining(["Location", "Dai Dai"]));
    expect(phone).not.toContain("For My Hand");
    expect(phone).not.toContain("Be Honest");
    for (const tag of container.querySelectorAll(`.${mobileCertStyles.roleTag}`))
      expect(tag.parentElement!.classList.contains(mobileCertStyles.rowMeta)).toBe(true);
  });

  it("the tag is read in place after the credit: “Dave ft. Burna Boy · 2019co-lead”", () => {
    at("/certifications");
    const { container } = render(<CertificationsPage />);
    const credit = [...container.querySelectorAll(`.${certStyles.certCredit}`)].find((c) => c.textContent!.startsWith("Dave ft. Burna Boy"))!;
    expect(credit.textContent).toBe("Dave ft. Burna Boy · 2019co-lead");
  });
});

describe("/records/charts: the co-lead tag, both layouts", () => {
  it("desktop cards and phone rows tag Location and Dai Dai, not For My Hand or Be Honest", () => {
    at("/records/charts");
    const { container } = render(<ChartsPage />);
    const desk = taggedTitles(container, chartStyles.roleTag, chartStyles.row, `.${chartStyles.title}`);
    const phone = [...container.querySelectorAll(`.${mobileChartStyles.roleTag}`)].map(
      (t) => t.closest(`.${mobileChartStyles.rowMain}`)!.querySelector(`.${mobileChartStyles.rowTitle}`)!.textContent!,
    );
    for (const list of [desk, phone]) {
      expect(list).toEqual(expect.arrayContaining(["Location", "Dai Dai", "Teary Eyes", "Do I"]));
      expect(list).not.toContain("For My Hand");
      expect(list).not.toContain("Be Honest");
      expect(list.every((t) => CO_LEAD_CERTS.includes(t))).toBe(true);
    }
    // Every charting co-lead is tagged, once per layout.
    expect(desk.length).toBe(phone.length);
  });
});

describe("no board page carries the tag", () => {
  it.each(["wizkid", "tems"])("%s: certifications and charts", async (slug) => {
    at(`/afrobeats/${slug}`);
    const certs = render(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
    expect(certs.container.querySelectorAll(`.${certStyles.roleTag}, .${mobileCertStyles.roleTag}`)).toHaveLength(0);
    certs.unmount();
    const charts = render(await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) }));
    expect(charts.container.querySelectorAll(`.${chartStyles.roleTag}, .${mobileChartStyles.roleTag}`)).toHaveLength(0);
    charts.unmount();
  });
});

describe("the tag's style: tokens only, ink not gold, in all four modules", () => {
  const MODULES = [
    "app/certifications/certifications.module.css",
    "app/components/mobileCerts.module.css",
    "app/records/charts/charts.module.css",
    "app/components/mobileOfficialCharts.module.css",
  ];
  it.each(MODULES)("%s", (file) => {
    const css = readFileSync(file, "utf8");
    const rule = /\n\.roleTag \{([^}]*)\}/.exec(css)?.[1];
    expect(rule, "a .roleTag rule").toBeTruthy();
    expect(rule).not.toMatch(/#[0-9a-f]{3,8}\b|rgba?\(/i);
    expect(rule).not.toMatch(/--gold/);
    expect(rule).toMatch(/color: var\(--text-muted\)/);
    expect(rule).toMatch(/font-family: var\(--font-mono\)/);
  });
});

describe("song pages: the kicker adds his credit on the record", () => {
  const kicker = (host: HTMLElement, cls: string) => host.querySelector(`.${cls}`)!.textContent!.replace(/\s+/g, " ").trim();

  it.each(songs.map((s) => [s.slug, s.title] as const))("/music/%s ends with its role", async (slug, title) => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) }));
    expect(kicker(host, songStyles.kicker).endsWith(` · ${roleTag(title)}`)).toBe(true);
  });

  it("the tags the brief named", () => {
    expect(roleTag("Last Last")).toBe("Lead");
    expect(roleTag("WGFT")).toBe("Co-lead with Gunna");
    expect(roleTag("Jerusalema (Remix)")).toBe("Featured");
    expect(roleTag("Darko")).toBe("Co-lead with DJDS");
  });

  it("/dai-dai and /dai-dai/es: “Co-lead with Shakira”, “Artista principal junto a Shakira”", () => {
    const en = document.createElement("div");
    en.innerHTML = renderToStaticMarkup(<DaiDaiPage />);
    expect(kicker(en, daiDaiStyles.kicker)).toBe("2026 FIFA World Cup · official song · Co-lead with Shakira");
    const es = document.createElement("div");
    es.innerHTML = renderToStaticMarkup(<DaiDaiPageES />);
    expect(kicker(es, daiDaiStyles.kicker)).toBe("Mundial de la FIFA 2026 · canción oficial · Artista principal junto a Shakira");
    // Negative control: the kicker as it shipped carried no role.
    expect(kicker(en, daiDaiStyles.kicker)).not.toBe("2026 FIFA World Cup · official song");
  });

  it("WGFT's copy no longer calls it a feature", () => {
    const wgft = songs.find((s) => s.title === "WGFT")!;
    const prose = [wgft.blurb, ...wgft.extraFacts.map((f) => f.l), ...wgft.faqs.map((f) => f.a)].join(" ");
    const FEATURE = /\bfeature on Gunna's|\ba feature on Gunna/i;
    expect(prose).not.toMatch(FEATURE);
    expect(wgft.blurb).toContain("with Spotify crediting both as main artists");
    // Negative control: the three shipped lines, verbatim, are caught.
    const SHIPPED = [
      "A feature on Gunna's 2025 album The Last Wun, “WGFT” gave Burna Boy his highest position ever on the US Billboard Hot 100 — No. 16 — blending Gunna's melodic trap with Burna's Afrobeats cadence. It charted in 13 countries and gave him his first US Top 20 single.",
      "a feature on Gunna's album The Last Wun",
      "Burna Boy's highest Billboard Hot 100 peak is No. 16, achieved with “WGFT,” his 2025 feature on Gunna's album The Last Wun.",
    ];
    expect(SHIPPED.filter((t) => FEATURE.test(t))).toHaveLength(3);
  });
});

// creditRoles.ts is server-only: the explorers get titles and names as props.
// The same walk as tests/tourRevenueServerOnly.test.ts, for the generated roles.
describe("the role data stays out of the client bundle", () => {
  const ROOT = process.cwd();
  const TARGET = join(ROOT, "app/data/creditRoles.generated.ts");
  const appFiles = (dir = join(ROOT, "app")): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? appFiles(p) : /\.(ts|tsx|js|mjs)$/.test(f) ? [p] : [];
    });
  const valueImports = (src: string): string[] => {
    const code = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    const out: string[] = [];
    for (const m of code.matchAll(/(?:^|\n)\s*(?:import|export)\s+([\s\S]*?)\s*from\s*["']([^"']+)["']/g)) {
      if (/^type\b/.test(m[1])) continue;
      out.push(m[2]);
    }
    return out;
  };
  const resolveSpec = (from: string, spec: string): string | null => {
    if (!spec.startsWith(".")) return null;
    const base = resolve(dirname(from), spec);
    for (const ext of ["", ".ts", ".tsx", "/index.ts"]) if (existsSync(base + ext) && statSync(base + ext).isFile()) return base + ext;
    return null;
  };
  const reaches = (override: Record<string, string> = {}) => {
    const text = (f: string) => override[f] ?? readFileSync(f, "utf8");
    return appFiles()
      .filter((f) => /^\s*["']use client["']/.test(text(f)))
      .filter((c) => {
        const seen = new Set([c]);
        const queue = [c];
        while (queue.length) {
          const f = queue.shift()!;
          for (const s of valueImports(text(f))) {
            const r = resolveSpec(f, s);
            if (r && !seen.has(r)) {
              seen.add(r);
              queue.push(r);
            }
          }
        }
        return seen.has(TARGET);
      })
      .map((f) => relative(ROOT, f));
  };

  it("no 'use client' module reaches creditRoles.generated.ts", () => {
    expect(reaches()).toEqual([]);
  });

  it("negative control: the tag importing the data module would be caught", () => {
    const tag = join(ROOT, "app/components/CoLeadTag.tsx");
    const leaky = `import { BURNA_ROLES } from "../data/songRoles";\n` + readFileSync(tag, "utf8");
    expect(reaches({ [tag]: leaky })).toEqual(expect.arrayContaining(["app/components/CertExplorer.tsx", "app/components/MobileCerts.tsx"]));
  });
});
