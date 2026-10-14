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

import ChartsPage from "../../app/records/charts/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import { artistBySlug, afrobeatsArtists } from "../../app/data/afrobeats";
import { chartTier } from "../../app/lib/chartTier";
import charts from "../../app/records/charts/charts.module.css";
import mobile from "../../app/components/mobileOfficialCharts.module.css";
import ledger from "../../app/components/ledgerRow.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 3 · J3-4 (design review 8 Oct 2026; fixes 64, 70): a chart pill names
 * its territory — flag, the filter chip's own code, the peak: "🇲🇩 MD #2" — on
 * both layouts (the phone pill is MobileOfficialCharts' own). The two Billboard
 * globals read GLB and GLBX. Fix 70: only the code text is added; the .one /
 * .top10 / .top40 / .rest bands and the legend stay, and the official-chart
 * No. 1 pill keeps its gold (Job 0's carve-out). On the phone the code is seen,
 * not spoken: the pill already says "Nigeria, peak #1".
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const visible = (el: Element) => {
  const c = el.cloneNode(true) as Element;
  c.querySelectorAll(".visuallyHidden").forEach((n) => n.remove());
  return c.textContent!;
};

type Page = { route: string; doc: Document };
let cached: Promise<Page[]> | undefined;
const pages = () =>
  (cached ??= (async () => [
    { route: "/records/charts", doc: parse(renderToStaticMarkup(<ChartsPage />)) },
    {
      route: "/afrobeats/tyla/charts",
      doc: parse(renderToStaticMarkup(await ArtistChartsPage({ params: Promise.resolve({ artist: "tyla" }) }))),
    },
  ])());

/** code → { flag, name } from the page's own filter chips ("{flag}{code}", titled "{name} — {body}"). */
function chipsOf(doc: Document) {
  const out = new Map<string, { flag: string; name: string }>();
  for (const b of doc.getElementById("chart-filters")!.querySelectorAll("button[title]")) {
    const m = b.textContent!.match(/^(.*?)([A-Z]{2,4})$/u);
    if (m) out.set(m[2], { flag: m[1], name: b.getAttribute("title")!.split(" — ")[0] });
  }
  return out;
}

describe("J3-4: the desktop pill prints flag, code and peak", () => {
  it.each([0, 1])("page %#: every pill reads “{flag}{code} #{peak}”, its code the chip's for its country", async (i) => {
    const { route, doc } = (await pages())[i];
    const chips = chipsOf(doc);
    const pills = [...doc.querySelectorAll(`.${ledger.pills} .${charts.peak}`)];
    expect(pills.length, route).toBeGreaterThan(0);
    for (const p of pills) {
      const [, name, peak] = p.getAttribute("aria-label")!.match(/^(.*): peak number (\d+)/)!;
      const m = p.textContent!.match(/^(.*?)([A-Z]{2,4}) #(\d+)$/u);
      expect(m, `${route}: ${p.textContent}`).not.toBeNull();
      const [, flag, code, shown] = m!;
      expect(chips.get(code), `${route}: ${code} is a chip`).toEqual({ flag, name });
      expect(shown).toBe(peak);
      // Fix 70: the band is the peak's, unchanged.
      expect(p.classList.contains(charts[chartTier(Number(peak)) as "one"])).toBe(true);
    }
    // The globals by their chip codes.
    const texts = pills.map((p) => p.textContent!);
    expect(texts.some((t) => /GLB #\d+$/.test(t))).toBe(true);
    expect(texts.some((t) => /GLBX #\d+$/.test(t))).toBe(true);
  });

  it("the legend and the bands are as built; the No. 1 pill keeps its gold", async () => {
    const css = read("app/records/charts/charts.module.css");
    const top = (m: string | null) => m === null;
    expect(winning(css, ".one", "color", top)).toBe("var(--gold)");
    expect(winning(css, ".top10", "color", top)).toBe("var(--cyan)");
    expect(winning(css, ".top40", "color", top)).toBe("var(--silver)");
    expect(winning(css, ".rest", "color", top)).toBe("var(--peak-rest)");
    const [{ doc }] = await pages();
    const legend = doc.querySelector(`.${charts.legend}`)!;
    expect(legend.textContent).toBe("No. 1Top 10Top 40");
  });
});

describe("J3-4 / fix 64: the phone pill prints the code too, and still speaks the name", () => {
  it.each([0, 1])("page %#: every phone pill reads “{flag}{code}#{peak}”, the code hidden from speech", async (i) => {
    const { route, doc } = (await pages())[i];
    const chips = chipsOf(doc);
    const pills = [...doc.querySelectorAll(`.${mobile.pills} .${mobile.pill}`)];
    expect(pills.length, route).toBeGreaterThan(0);
    for (const p of pills) {
      const [, name, peak] = p.getAttribute("title")!.match(/^(.*) — peak #(\d+)/)!;
      const hidden = [...p.querySelectorAll(':scope > [aria-hidden="true"]')];
      expect(hidden).toHaveLength(2);
      const [flag, code] = hidden.map((h) => h.textContent!);
      expect(hidden[0].classList.contains(mobile.pillFlag)).toBe(true);
      expect(chips.get(code), `${route}: ${code}`).toEqual({ flag, name });
      expect(visible(p)).toBe(`${flag}${code}#${peak}`);
      // Spoken: "{name}, peak #{n}", as before; the code is not read twice.
      expect(p.querySelector(".visuallyHidden")!.textContent).toBe(`${name}, peak `);
      // Fix 70: the band's colours, No. 1 gold.
      const color = p.getAttribute("style")!.match(/(?:^|;)\s*color:\s*([^;]+)/)![1];
      if (peak === "1") expect(color).toBe("var(--gold)");
      else expect(color).not.toBe("var(--gold)");
    }
  });
});

describe("J3-4 / fix 64: the longest pill", () => {
  it("is a GLBX pill with a three-digit peak — Tyla's “Jump” on her board", async () => {
    const all = afrobeatsArtists.flatMap((a) => a.charts.flatMap((r) => r.entries.map((e) => ({ slug: a.slug, title: r.title, text: `${e.c} #${e.peak}` }))));
    const max = Math.max(...all.map((x) => x.text.length));
    const longest = all.filter((x) => x.text.length === max);
    for (const l of longest) expect(l.text).toMatch(/^GLBX #\d{3}$/);
    const jump = artistBySlug("tyla")!.charts.find((r) => r.title === "Jump")!.entries.find((e) => e.c === "GLBX")!;
    expect(`GLBX #${jump.peak}`.length).toBe(max);
    const [, tyla] = await pages();
    const shown = [...tyla.doc.querySelectorAll(`.${charts.peak}`)].map((p) => p.textContent!.replace(/^.*?(?=[A-Z])/u, ""));
    expect(shown).toContain(`GLBX #${jump.peak}`);
  });
});

describe("J3-4 negative controls: the 8 Oct pills, as served, carry no code", () => {
  // Verbatim from burnaboystats.com/records/charts, 8 Oct 2026 (job1-scratch/live_records_charts.html).
  const DESKTOP = `<span role="listitem" aria-label="Nigeria: peak number 1" class="charts-module__kXOZya__peak charts-module__kXOZya__one " title="Nigeria — TurnTable Top 100 / Top 100 Albums"><span class="charts-module__kXOZya__flag">🇳🇬</span>#<!-- -->1</span>`;
  const PHONE = `<span title="Nigeria — peak #1" class="mobileOfficialCharts-module__6EDslq__pill" style="color:var(--gold);border-color:var(--gold);background:color-mix(in srgb, var(--gold-wash-base) calc(13% * var(--wash-strength)), transparent);opacity:1"><span class="visuallyHidden">Nigeria<!-- -->, peak </span><span class="mobileOfficialCharts-module__6EDslq__pillFlag" aria-hidden="true">🇳🇬</span>#<!-- -->1</span>`;

  it("the desktop pill fails “{flag}{code} #{peak}”", () => {
    const p = parse(DESKTOP).body.firstElementChild!;
    expect(p.textContent).toBe("🇳🇬#1");
    expect(p.textContent!.match(/^(.*?)([A-Z]{2,4}) #(\d+)$/u)).toBeNull();
  });

  it("the phone pill has one hidden part, not two", () => {
    const p = parse(PHONE).body.firstElementChild!;
    expect(p.querySelectorAll(':scope > [aria-hidden="true"]')).toHaveLength(1);
    expect(visible(p)).toBe("🇳🇬#1");
  });
});
