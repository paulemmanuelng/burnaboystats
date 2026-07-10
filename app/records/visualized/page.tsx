import Link from "next/link";
import RankedBars, { type BarItem } from "../../components/RankedBars";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import { revenueShows } from "../../data/tourRevenue";
import { COUNTRIES, albums, singles, features } from "../../data/certifications";
import { ceremonies, totalWins } from "../../data/awards";

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
