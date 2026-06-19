"use client"; // interactive: filter releases by tier and country

import { useState } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type Cert, type Country, type Release } from "../data/certifications";
import { matches } from "../lib/certs";

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];

type Countries = Record<string, Country>;

function Badge({ cert, countries, dim }: { cert: Cert; countries: Countries; dim: boolean }) {
  const country = countries[cert.c];
  return (
    <span
      className={`${styles.cBadge} ${styles[tierOf(cert.level)]} ${dim ? styles.badgeDim : ""}`}
      title={`${country.name} — ${country.body}`}
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

  const groups = [
    { label: "Albums", items: albums },
    { label: "Singles", items: singles },
    { label: "Featured Appearances", items: features },
  ].map((g) => ({ ...g, items: g.items.filter((it) => matches(it, country, tier)) }));

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
