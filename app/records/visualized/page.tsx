import Link from "next/link";
import RankedBars, { type BarItem } from "../../components/RankedBars";
import ScatterChart, { type ScatterPoint } from "../../components/ScatterChart";
import TierDonut, { type DonutSeg } from "../../components/TierDonut";
import PeakMap, { type PeakInfo } from "../../components/PeakMap";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import { revenueShows } from "../../data/tourRevenue";
import { COUNTRIES, albums, singles, features, totalAwards } from "../../data/certifications";
import { ceremonies, totalWins } from "../../data/awards";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../../data/charts";

export const metadata = pageMetadata({
  title: "Burna Boy, Visualized — Grosses, Certifications & Awards Charts",
  description:
    "Burna Boy's career plotted: the biggest single-show grosses, certifications by country, and award wins by body — every stat, charted in one place.",
  path: "/records/visualized",
  shareTitle: "Burna Boy, Visualized",
  shareDescription: "His career in charts — grosses, certifications and awards, at a glance.",
});

// ── Chart data (built from the same sources the detail pages filter) ──
const grosses: BarItem[] = revenueShows.slice(0, 12).map((s) => ({
  flag: s.flag,
  name: s.venue,
  meta: `${s.artist} · ${s.city} · ${s.year}`,
  value: s.revenue,
  displayValue: `$${(s.revenue / 1e6).toFixed(2)}M`,
  tone: s.artist === "Burna Boy" ? "gold" : "muted",
}));

const certsByCountry: BarItem[] = (() => {
  const counts: Record<string, number> = {};
  for (const it of [...albums, ...singles, ...features])
    for (const c of it.certs) counts[c.c] = (counts[c.c] || 0) + 1;
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([code, n]) => ({
      flag: COUNTRIES[code]?.flag,
      name: COUNTRIES[code]?.name ?? code,
      meta: COUNTRIES[code]?.body,
      value: n,
      displayValue: String(n),
    }));
})();

const shortBody = (name: string) => name.match(/\(([^)]+)\)/)?.[1] ?? name;
const winsByBody: BarItem[] = ceremonies
  .map((c) => ({ name: c.name, wins: c.noms.filter((n) => n.won).length }))
  .filter((c) => c.wins > 0)
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 10)
  .map((c) => ({ name: shortBody(c.name), value: c.wins, displayValue: `${c.wins}` }));

// ── Scatter: tickets vs revenue per show ──
// Label the four highest-grossing shows. The 3rd & 4th are both La Défense Arena
// (Fally Ipupa's and Burna's), so disambiguate by artist and drop the 4th label
// below its dot so the two don't collide.
const num = (s: string | undefined) => Number((s ?? "").replace(/,/g, ""));
const TOP_LABELS = 4;
const firstName = (a: string) => (a === "Burna Boy" ? "Burna" : a.split(" ")[0]);
const shortVenue = (v: string) => v.replace(/ Arena$/, "");
const topVenueCount: Record<string, number> = {};
revenueShows.slice(0, TOP_LABELS).forEach((s) => {
  topVenueCount[s.venue] = (topVenueCount[s.venue] || 0) + 1;
});
const scatter: ScatterPoint[] = revenueShows
  .filter((s) => s.tickets && !Number.isNaN(num(s.tickets)))
  .map((s, i) => ({
    x: num(s.tickets),
    y: s.revenue,
    title: `${s.artist} — ${s.venue}, ${s.city}: ${s.tickets} tickets · $${(s.revenue / 1e6).toFixed(2)}M`,
    tone: s.artist === "Burna Boy" ? "gold" : "muted",
    label:
      i < TOP_LABELS
        ? topVenueCount[s.venue] > 1
          ? `${shortVenue(s.venue)} (${firstName(s.artist)})`
          : shortVenue(s.venue)
        : undefined,
    labelDy: i === 3 ? 22 : undefined, // 4th show: label below its dot
  }));

// ── Donut: certifications by tier ──
const tiers: Record<string, number> = { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 };
for (const it of [...albums, ...singles, ...features]) for (const c of it.certs) tiers[c.level]++;
const tierSegments: DonutSeg[] = [
  { label: "Diamond", value: tiers.Diamond, color: "#8fe3f0" },
  { label: "Platinum", value: tiers.Platinum, color: "#dfe2e8" },
  { label: "Gold", value: tiers.Gold, color: "#ffb627" },
  { label: "Silver", value: tiers.Silver, color: "#b8bcc4" },
];

// ── Choropleth: best chart peak by country ──
const A2_TO_ISO: Record<string, number> = {
  US: 840, UK: 826, IE: 372, CA: 124, AU: 36, NZ: 554, FR: 250, DE: 276, NL: 528, SE: 752,
  BE: 56, CH: 756, AT: 40, DK: 208, IT: 380, ES: 724, PT: 620, FI: 246, HU: 348, GR: 300,
  HR: 191, HK: 344, IN: 356, IL: 376, IS: 352, AE: 784, SA: 682, LB: 422, RO: 642, SK: 703,
  CZ: 203, LT: 440, NO: 578, PL: 616, NG: 566, ZA: 710, SR: 740, AR: 32, CO: 170, EC: 218,
  UY: 858, VN: 704, BR: 76, JP: 392, SG: 702,
};
// Every charting release per country, so the map hover can show the top few.
const songsByCode: Record<string, { title: string; peak: number }[]> = {};
for (const r of [...albumCharts, ...singleCharts, ...featureCharts])
  for (const e of r.entries) {
    if (e.c === "GLB" || e.c === "GLBX") continue;
    (songsByCode[e.c] ||= []).push({ title: r.title, peak: e.peak });
  }
const peakByISO: Record<number, PeakInfo> = {};
for (const [code, songs] of Object.entries(songsByCode)) {
  const iso = A2_TO_ISO[code];
  if (!iso || !CHART_COUNTRIES[code]) continue;
  const sorted = [...songs].sort((a, b) => a.peak - b.peak);
  peakByISO[iso] = { name: CHART_COUNTRIES[code].name, peak: sorted[0].peak, songs: sorted };
}
const peakCountryCount = Object.keys(peakByISO).length;

const jsonLd = datasetJsonLd({
  name: "Burna Boy, Visualized",
  description:
    "Charted views of Burna Boy's career: biggest single-show grosses, certifications by country, and award wins by body.",
  path: "/records/visualized",
  keywords: ["Burna Boy", "charts", "data visualization", "grosses", "certifications", "awards"],
  variableMeasured: ["Revenue per show", "Certifications per country", "Award wins per body"],
});

const captionStyle = {
  marginTop: 16,
  fontSize: "0.82rem",
  color: "var(--text-muted)",
  maxWidth: "62ch",
  lineHeight: 1.5,
} as const;

export default function VisualizedPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="pageHeader container">
        <h1>
          Burna Boy, <span className="accent">Visualized</span>
        </h1>
        <p>His career plotted — grosses, certifications and awards, at a glance</p>
      </header>

      <div className="container">
        <section id="grosses" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Box office</p>
          <h2 className="secTitle" style={{ marginBottom: 24 }}>Biggest single-show grosses</h2>
          <RankedBars items={grosses} ariaLabel="The 12 highest single-show grosses by an African artist, in millions of US dollars" />
          <p style={captionStyle}>
            <span style={{ color: "var(--gold-bright)", fontWeight: 600 }}>Gold bars are Burna Boy</span> — he holds 27 of the 40 biggest single-show grosses by an African artist, more than everyone else combined.
          </p>
          <Link href="/records/tours/revenue" className="btn btnSecondary" style={{ marginTop: 18 }}>
            Full leaderboard ↗
          </Link>
        </section>

        <section id="tickets-revenue" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Box office</p>
          <h2 className="secTitle" style={{ marginBottom: 24 }}>Tickets vs revenue</h2>
          <ScatterChart
            points={scatter}
            xMax={65000}
            yMax={6.5e6}
            xTicks={[{ value: 0, label: "0" }, { value: 20000, label: "20k" }, { value: 40000, label: "40k" }, { value: 60000, label: "60k" }]}
            yTicks={[{ value: 0, label: "$0" }, { value: 2e6, label: "$2M" }, { value: 4e6, label: "$4M" }, { value: 6e6, label: "$6M" }]}
            xLabel="Tickets sold"
            yLabel="Gross revenue"
            ariaLabel="Scatter plot of tickets sold versus gross revenue across the 40 biggest single shows"
          />
          <p style={captionStyle}>
            Each dot is a show — <span style={{ color: "var(--gold-bright)", fontWeight: 600 }}>gold is Burna Boy</span>. Revenue tracks ticket count closely, but higher-priced rooms sit above the line: London Stadium turned ~59,000 tickets into $6.15M.
          </p>
        </section>

        <section id="certifications" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Certified worldwide</p>
          <h2 className="secTitle" style={{ marginBottom: 24 }}>Certifications by country</h2>
          <RankedBars items={certsByCountry} ariaLabel="Burna Boy's music certifications by country — the top 12" />
          <p style={captionStyle}>
            The 12 biggest of 22 certifying countries — Nigeria (TurnTable), the UK (BPI) and Canada (Music Canada) lead the tally.
          </p>
          <Link href="/certifications" className="btn btnSecondary" style={{ marginTop: 18 }}>
            All certifications ↗
          </Link>
        </section>

        <section id="tiers" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Certified worldwide</p>
          <h2 className="secTitle" style={{ marginBottom: 28 }}>Certifications by tier</h2>
          <TierDonut
            segments={tierSegments}
            total={totalAwards()}
            centerNum={`${totalAwards()}`}
            centerLabel="certifications"
            ariaLabel={`Certifications by tier: ${tierSegments.map((s) => `${s.value} ${s.label}`).join(", ")}`}
          />
          <p style={captionStyle}>
            How the {totalAwards()} certifications break down — mostly Platinum and Gold singles, crowned by {tiers.Diamond} Diamond awards (Last Last, Location, On the Low, Gbona, Jerusalema and Be Honest, all in France).
          </p>
        </section>

        <section id="chart-peaks" style={{ marginBottom: 56 }}>
          <p className="eyebrow">Charts worldwide</p>
          <h2 className="secTitle" style={{ marginBottom: 24 }}>Chart peaks by country</h2>
          <PeakMap data={peakByISO} ariaLabel="World map coloured by Burna Boy's best official chart peak in each country" />
          <p style={captionStyle}>
            His best official chart position in each of {peakCountryCount} countries — brighter means higher. No.1s span Nigeria, the UK, the Netherlands, Belgium, Germany, Switzerland, Colombia and Argentina.
          </p>
          <Link href="/records/charts" className="btn btnSecondary" style={{ marginTop: 18 }}>
            All chart positions ↗
          </Link>
        </section>

        <section id="awards" style={{ marginBottom: 40 }}>
          <p className="eyebrow">Decorated</p>
          <h2 className="secTitle" style={{ marginBottom: 24 }}>Most-decorated stages</h2>
          <RankedBars items={winsByBody} ariaLabel="Burna Boy's award wins by award body — the top 10" />
          <p style={captionStyle}>
            Where his {totalWins} wins come from — the top 10 award bodies by number of trophies, the Grammy and BET Awards alongside a deep African-awards haul.
          </p>
          <Link href="/records/awards" className="btn btnSecondary" style={{ marginTop: 18 }}>
            Every award ↗
          </Link>
        </section>

        <Link href="/records" style={{ display: "inline-block", marginTop: 8, fontFamily: "var(--font-mono), monospace", fontSize: "0.8rem", color: "var(--gold)" }}>← Career Records</Link>
      </div>

      <KeepExploring current="/records/visualized" />
    </main>
  );
}
