import { renderToStaticMarkup } from "react-dom/server";
import { existsSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
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
import certStyles from "../../app/certifications/certifications.module.css";
import chartStyles from "../../app/records/charts/charts.module.css";
import mobileChartStyles from "../../app/components/mobileOfficialCharts.module.css";
import { downloadBySlug, type DownloadSlug } from "../../app/lib/dataDownloads";
import { CREDIT_LINE } from "../../app/lib/credit";

/**
 * CC-07 (design review, 8 Oct 2026): /api serves certifications.csv and
 * chart-peaks.csv (CC BY 4.0, no key), and neither page whose data they are
 * linked them. The served HTML of each had two /api hrefs, the menu sheet's
 * and the footer's, 15,000px down /certifications and hidden on phones. Each
 * page's source note now ends with "Download CSV ↓ · JSON · CC BY 4.0 · cite
 * as “Data from Burna Boy Stats (burnaboystats.com)”" — the site's one credit
 * line (lib/credit.ts) — on the desktop notes of both pages, and the phone
 * note on /records/charts.
 *
 * The phone /certifications screen has no source note to add it to; drawing
 * one is the design review's job 1 (sources and dates on phones).
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const LICENCE = "https://creativecommons.org/licenses/by/4.0/";

/** What a source note is missing of the data line, in words; [] when it is whole. */
function dataLineProblems(note: Element | null, data: DownloadSlug, json: string): string[] {
  if (!note) return ["no source note"];
  const out: string[] = [];
  const csv = note.querySelector(`a[href="${downloadBySlug(data).path}"]`);
  if (!csv) out.push(`no link to ${downloadBySlug(data).path}`);
  else {
    if (!csv.hasAttribute("download")) out.push("the CSV link does not download");
    if (!/^Download CSV\s*↓$/.test(csv.textContent!.trim())) out.push(`the CSV link reads "${csv.textContent}"`);
  }
  if (note.querySelector(`a[href="/api/v1/${json}"]`)?.textContent !== "JSON") out.push(`no JSON link to /api/v1/${json}`);
  if (note.querySelector(`a[href="${LICENCE}"]`)?.textContent !== "CC BY 4.0") out.push("no CC BY 4.0 link");
  const text = (note.textContent ?? "").replace(/ /g, " ");
  if (!text.includes(`Download CSV ↓ · JSON · CC BY 4.0 · cite as “${CREDIT_LINE}”`)) out.push("the line does not read in order");
  // A separator never opens a line: the space before each "·" is a no-break one.
  if (/ ·/.test((note.textContent ?? "").split("Download CSV")[1] ?? "")) out.push("a breaking space before a separator");
  return out;
}

describe("CC-07: the source notes link the open data", () => {
  const certs = parse(renderToStaticMarkup(<CertificationsPage />));
  const charts = parse(renderToStaticMarkup(<ChartsPage />));
  const certNote = [...certs.querySelectorAll(`p.${certStyles.source}`)].find((p) => p.textContent!.startsWith("Sources:")) ?? null;
  const chartNote = charts.querySelector(`.${chartStyles.sourceGrid} p.${chartStyles.source}`);
  const phoneChartNote = charts.querySelector(`p.${mobileChartStyles.footNote}`);

  it("the premise: every file and endpoint the line links is served", () => {
    for (const p of ["api/v1/certifications.csv", "api/v1/chart-peaks.csv", "api/v1/certifications", "api/v1/charts"])
      expect(existsSync(join(process.cwd(), "app", p, "route.ts")), p).toBe(true);
  });

  it("/certifications, desktop: the source note ends with the data line", () => {
    expect(dataLineProblems(certNote, "certifications", "certifications")).toEqual([]);
  });

  it("/records/charts, desktop: the source note ends with the data line", () => {
    expect(dataLineProblems(chartNote, "chart-peaks", "charts")).toEqual([]);
  });

  it("/records/charts, phone: the screen's foot note ends with the same line", () => {
    expect(dataLineProblems(phoneChartNote, "chart-peaks", "charts")).toEqual([]);
  });

  // Verbatim from https://burnaboystats.com/certifications and
  // /records/charts (live 8 Oct 2026), opening words of each note.
  it("negative control: the shipped notes, with no data line, are caught", () => {
    const shipped = parse(
      `<p class="certifications-module__tiv2Qa__source">Sources: <!-- -->RIAA (United States), BPI (United Kingdom), Music Canada, SNEP (France)</p>` +
        `<p class="mobileOfficialCharts-module__6EDslq__footNote">Peaks on each country&#x27;s principal national chart — 37 national bodies, 18 airplay or monitor charts where a country has no other, 14 Billboard country charts and 2 worldwide. Genre charts excluded.</p>`,
    );
    const [c, m] = [...shipped.querySelectorAll("p")];
    expect(dataLineProblems(c, "certifications", "certifications")).toContain("no link to /api/v1/certifications.csv");
    expect(dataLineProblems(m, "chart-peaks", "charts")).toContain("no link to /api/v1/chart-peaks.csv");
  });
});
