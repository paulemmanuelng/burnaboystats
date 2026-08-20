"use client"; // interactive: filter releases by tier and country

import { useEffect, useState } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type Cert, type Country, type Release } from "../data/certifications";
import { matches, badgeWeight, byMostCertified } from "../lib/certs";
import { coverFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import { track } from "../lib/analytics";
import FilterEmpty from "./FilterEmpty";

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];

// Tier colours carry data meaning and are never recoloured to gold.
const TIER_INK: Record<string, string> = {
  Diamond: "var(--cyan)",
  Platinum: "var(--silver)",
  Gold: "var(--gold)",
  Silver: "#b8bcc4",
};

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
  covers,
}: {
  item: Release;
  countries: Countries;
  country: string | null;
  tier: string | null;
  covers?: Record<string, string | undefined>;
}) {
  return (
    <div className={styles.certRow}>
      <div className={styles.certRowHead}>
        <span
          className={styles.certCover}
          aria-hidden="true"
          /* The site's own lookup knows Burna's catalogue only — a board artist
             passes their covers in, exactly as MobileCerts does. */
          style={{ backgroundImage: `url(${spotifyImage((covers ? covers[item.title] : coverFor(item.title)) ?? "", 300)})` }}
        />
        <span className={styles.certText}>
          <span className={styles.certTitle}>{item.title}</span>
          <span className={styles.certCredit}>
            {/* Not every release carries a year. Joining unconditionally printed
                "feat. Khalid · undefined" on the live page. */}
            {[item.credit, item.year].filter(Boolean).join(" · ")}
          </span>
        </span>
      </div>

      <div className={styles.badges}>
        {/* Same ordering as the release list: the plaque representing the most
            leads, rather than whatever order the data happened to be typed in. */}
        {[...item.certs]
          .sort((x, y) => badgeWeight(y) - badgeWeight(x))
          .map((cert) => {
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
  totalCerts,
  covers,
}: {
  albums: Release[];
  singles: Release[];
  features: Release[];
  countries: Countries;
  totalCerts: number;
  /** Artwork by title for a non-Burna catalogue; absent = Burna's own lookup. */
  covers?: Record<string, string | undefined>;
}) {
  const [country, setCountry] = useState<string | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  // A single-release focus, deep-linked via ?release=… (e.g. from the Dai Dai story).
  const [focus, setFocus] = useState<string | null>(null);

  // Read the ?release= deep-link once on mount (client-only, keeps the page static).
  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("release");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of a browser-only URL param
    if (r) setFocus(r);
  }, []);

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (country || tier) track("cert_filter", { country: country ?? "", tier: tier ?? "" });
  }, [country, tier]);

  const groups = [
    { label: "Albums", items: albums },
    { label: "Singles", items: singles },
    { label: "Featured Appearances", items: features },
  ].map((g) => ({
    ...g,
    items: g.items.filter((it) => (!focus || it.title === focus) && matches(it, country, tier)).sort(byMostCertified),
  }));

  const totalAll = albums.length + singles.length + features.length;
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  const shownCerts = groups.reduce(
    (n, g) => n + g.items.reduce((m, it) => m + it.certs.length, 0),
    0
  );
  const active = country || tier;

  return (
    <>
      <section className={styles.filterBand}>
        <div className={styles.wide}>
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every certification for <b>{focus}</b>
          </span>
          <button type="button" className={styles.clearBtn} onClick={() => setFocus(null)}>
            Show all releases ✕
          </button>
        </div>
      )}

      <div className={styles.filterCard}>
        {/* The panel collapses to a toggle only on mobile, where the country
            row is 25 chips long; on desktop it is always open, as designed. */}
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
            <button
              type="button"
              className={`${styles.fChip} ${!tier ? styles.fChipOn : ""}`}
              onClick={() => setTier(null)}
            >
              All
            </button>
            {TIERS.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.fChip} ${tier === t ? styles.fChipOn : ""}`}
                onClick={() => setTier(tier === t ? null : t)}
              >
                <span className={styles.chipDot} style={{ background: TIER_INK[t] }} aria-hidden="true" />
                {t}
              </button>
            ))}
          </div>

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Country</span>
            <button
              type="button"
              className={`${styles.fChip} ${!country ? styles.fChipOn : ""}`}
              onClick={() => setCountry(null)}
            >
              All
            </button>
            {Object.entries(countries).map(([code, c]) => (
              <button
                key={code}
                type="button"
                className={`${styles.fChip} ${country === code ? styles.fChipOn : ""}`}
                title={`${c.name} — ${c.body}`}
                onClick={() => setCountry(country === code ? null : code)}
              >
                <span className={styles.flag}>{c.flag}</span>
                {code}
              </button>
            ))}
          </div>

          <div className={styles.filterMeta}>
            Showing <b>{totalShown}</b> of {totalAll} releases ·{" "}
            <b>{shownCerts}</b> certifications
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => {
                setCountry(null);
                setTier(null);
              }}
            >
              Clear ✕
            </button>
          </div>
        </div>
      </div>

        </div>
      </section>

      {totalShown === 0 ? (
        // The country is the narrower of the two, so it is what the second
        // button drops — a tier alone almost always still has matches.
        <FilterEmpty
          body={`There's no ${[tier, "certification", country && `from ${countries[country]?.name ?? country}`]
            .filter(Boolean)
            .join(" ")}. That's a real gap in the record, not a missing page.`}
          onClear={() => {
            setCountry(null);
            setTier(null);
          }}
          narrowest={
            country
              ? { label: countries[country]?.name ?? country, drop: () => setCountry(null) }
              : tier
                ? { label: tier, drop: () => setTier(null) }
                : undefined
          }
        />
      ) : (
        groups.map(
          (g) =>
            g.items.length > 0 && (
              <section key={g.label} className={styles.groupSection}>
                <div className={styles.wide}>
                  <div className={styles.groupHead}>
                    <h2 className={styles.groupTitle}>
                      <span className="inkText">{g.label}</span>
                    </h2>
                    <span className={styles.count}>({g.items.length})</span>
                  </div>
                  <div className={styles.groupList}>
                    {g.items.map((it) => (
                      <CertCard key={it.title} item={it} countries={countries} country={country} tier={tier} covers={covers} />
                    ))}
                  </div>
                </div>
              </section>
            )
        )
      )}
    </>
  );
}
