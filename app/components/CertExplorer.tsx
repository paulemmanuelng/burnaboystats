"use client"; // interactive: filter releases by tier and country

import { useEffect, useState } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type Cert, type Country, type Release } from "../data/certifications";
import { matches } from "../lib/certs";
import { track } from "../lib/analytics";

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
const YEARS = [2026, 2025, 2024, 2023];

// Order releases so the most-certified appear first. Primary: number of
// certifications; tiebreaker: a prestige weight (Diamond > Platinum > Gold >
// Silver, scaled by any multiplier), so among equal counts the bigger plaques win.
const TIER_WEIGHT: Record<string, number> = { Diamond: 4, Platinum: 3, Gold: 2, Silver: 1 };
const certWeight = (r: Release) =>
  r.certs.reduce((sum, c) => sum + (TIER_WEIGHT[c.level] ?? 1) * (c.x ?? 1), 0);
const byMostCertified = (a: Release, b: Release) =>
  b.certs.length - a.certs.length || certWeight(b) - certWeight(a);

// "Year" isn't a real filter on this grid (releases don't carry a
// certified-date) — it jumps down to the "Certifications by year" section
// and opens that year there, via a small custom event the other component listens for.
function jumpToYear(year: number) {
  window.dispatchEvent(new CustomEvent("cert-year-jump", { detail: year }));
  document.getElementById("cert-by-year")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Countries = Record<string, Country>;

function Badge({ cert, countries, dim }: { cert: Cert; countries: Countries; dim: boolean }) {
  const country = countries[cert.c];
  return (
    <span
      className={`${styles.cBadge} ${styles[tierOf(cert.level)]} ${dim ? styles.badgeDim : ""}`}
      title={`${country.name} — ${cert.body ?? country.body}`}
    >
      <span className={styles.flag}>{country.flag}</span>
      {cert.x ? `${cert.x}× ` : ""}
      {cert.level}
    </span>
  );
}

function CertCard({
  item,
  countries,
  country,
  tier,
}: {
  item: Release;
  countries: Countries;
  country: string | null;
  tier: string | null;
}) {
  return (
    <div className={styles.certRow}>
      <div className={styles.certRowHead}>
        <span className={styles.certTitle}>{item.title}</span>
        <span className={styles.certCredit}>
          {item.credit ? `${item.credit} · ${item.year}` : item.year}
        </span>
      </div>
      <div className={styles.badges}>
        {item.certs.map((cert) => {
          const dim = !!((country && cert.c !== country) || (tier && cert.level !== tier));
          return <Badge key={cert.c} cert={cert} countries={countries} dim={dim} />;
        })}
      </div>
    </div>
  );
}

export default function CertExplorer({
  albums,
  singles,
  features,
  countries,
}: {
  albums: Release[];
  singles: Release[];
  features: Release[];
  countries: Countries;
}) {
  const [country, setCountry] = useState<string | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (country || tier) track("cert_filter", { country: country ?? "", tier: tier ?? "" });
  }, [country, tier]);

  const groups = [
    { label: "Albums", items: albums },
    { label: "Singles", items: singles },
    { label: "Featured Appearances", items: features },
  ].map((g) => ({ ...g, items: g.items.filter((it) => matches(it, country, tier)).sort(byMostCertified) }));

  const totalAll = albums.length + singles.length + features.length;
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  const active = country || tier;

  return (
    <div>
      <div className={styles.filterBar}>
        <button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="cert-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? ` · ${totalShown} shown` : ""}</span>
          <span aria-hidden="true">{filtersOpen ? "▲" : "▼"}</span>
        </button>
        <div id="cert-filters" className={`${styles.filterBody} ${filtersOpen ? styles.filterOpen : ""}`}>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Tier</span>
          <button className={`${styles.fChip} ${!tier ? styles.fChipOn : ""}`} onClick={() => setTier(null)}>All</button>
          {TIERS.map((t) => (
            <button
              key={t}
              className={`${styles.fChip} ${tier === t ? styles.fChipOn : ""}`}
              onClick={() => setTier(tier === t ? null : t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Country</span>
          <button className={`${styles.fChip} ${!country ? styles.fChipOn : ""}`} onClick={() => setCountry(null)}>All</button>
          {Object.entries(countries).map(([code, c]) => (
            <button
              key={code}
              className={`${styles.fChip} ${country === code ? styles.fChipOn : ""}`}
              title={`${c.name} — ${c.body}`}
              onClick={() => setCountry(country === code ? null : code)}
            >
              <span className={styles.flag}>{c.flag}</span>
              {code}
            </button>
          ))}
        </div>
        {active && (
          <div className={styles.filterMeta}>
            Showing <b>{totalShown}</b> of {totalAll} releases
            <button className={styles.clearBtn} onClick={() => { setCountry(null); setTier(null); }}>
              Clear ✕
            </button>
          </div>
        )}
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Year</span>
          {YEARS.map((y) => (
            <button key={y} type="button" className={styles.fChip} onClick={() => jumpToYear(y)}>
              {y} ↓
            </button>
          ))}
        </div>
        </div>
      </div>

      {totalShown === 0 ? (
        <p className={styles.empty}>No releases match that filter. Try another country or tier.</p>
      ) : (
        groups.map(
          (g) =>
            g.items.length > 0 && (
              <div key={g.label}>
                <h2 className={`secTitle ${styles.group}`}>
                  <span className="goldText">{g.label}</span>{" "}
                  <span className={styles.count}>({g.items.length})</span>
                </h2>
                <div className={styles.certGrid}>
                  {g.items.map((it) => (
                    <CertCard key={it.title} item={it} countries={countries} country={country} tier={tier} />
                  ))}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
}
