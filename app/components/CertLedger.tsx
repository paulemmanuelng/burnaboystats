"use client"; // the tier filter is a live control

import { useState } from "react";
import Link from "next/link";
import styles from "./certLedger.module.css";
import StatCardButton from "./StatCardButton";
import type { LedgerRow, Tier } from "../lib/homeData";

/**
 * The homepage certifications ledger: a tier-filtered table of certified
 * releases, sorted by certification count, beside the tier breakdown.
 *
 * The filter control sits in the section head and the filtered count sits under
 * the table, so the whole section is one client boundary. The breakdown panel
 * arrives as `children` — it is static, and passing it through keeps it server
 * rendered.
 *
 * Rows arrive fully derived from app/data; this component only filters them.
 */

const FILTERS: { key: Tier | "All"; label: string }[] = [
  { key: "All", label: "All tiers" },
  { key: "Diamond", label: "Has Diamond" },
  { key: "Platinum", label: "Has Platinum" },
  { key: "Gold", label: "Has Gold" },
];

// Tier colours carry data meaning and are never recoloured to gold.
const PILL: Record<Tier, { fill: string; ink: string }> = {
  Diamond: { fill: "rgba(143, 227, 240, 0.14)", ink: "var(--cyan)" },
  Platinum: { fill: "rgba(223, 226, 232, 0.14)", ink: "var(--silver)" },
  Gold: { fill: "rgba(255, 182, 39, 0.13)", ink: "var(--gold)" },
  Silver: { fill: "rgba(245, 244, 240, 0.08)", ink: "#b8bcc4" },
};

const ROWS_SHOWN = 15;

export default function CertLedger({
  rows,
  releaseTotal,
  certTotal,
  certCountries,
  children,
}: {
  rows: LedgerRow[];
  releaseTotal: number;
  certTotal: number;
  certCountries: number;
  children: React.ReactNode;
}) {
  const [tier, setTier] = useState<Tier | "All">("All");

  const matching = tier === "All" ? rows : rows.filter((r) => r.levels.includes(tier));
  const shown = matching.slice(0, ROWS_SHOWN);

  return (
    <section className={styles.section} id="certs">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <div className={styles.kicker}>Certified worldwide</div>
            <h2 className={styles.h2}>The certifications ledger</h2>
          </div>
          <p className={styles.lede}>
            {certTotal} awards from {certCountries}{" "}
            countries. Filter by tier — every row links to the issuing body&apos;s entry.
          </p>
          <div className={styles.segWrap}>
            <div className="seg" role="group" aria-label="Filter by certification tier">
              {FILTERS.map((f) => (
                <label key={f.key} className="segOpt">
                  <input
                    type="radio"
                    name="tier"
                    checked={tier === f.key}
                    onChange={() => setTier(f.key)}
                  />
                  {f.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <div>
            <table className={`tableBase ${styles.table}`}>
              <thead>
                <tr>
                  <th className={styles.colRank}>#</th>
                  <th>Title</th>
                  <th className={styles.colYear}>Year</th>
                  <th>Highest award</th>
                  <th className={styles.colCountries}>Countries</th>
                  <th className={styles.colCerts}>Certs</th>
                  <th className={styles.colShare}>
                    <span className="visuallyHidden">Stat card</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown.map((r) => (
                  <tr key={r.title}>
                    <td className={styles.rank}>{r.rank}</td>
                    <td>
                      <div className={styles.title}>{r.title}</div>
                      <div className={styles.credit}>{r.credit}</div>
                    </td>
                    <td className={styles.num}>{r.year}</td>
                    <td>
                      <span
                        className="tag"
                        style={{ background: PILL[r.top].fill, color: PILL[r.top].ink }}
                      >
                        {r.award}
                      </span>
                    </td>
                    <td className={styles.countries}>{r.countries} countries</td>
                    <td className={styles.certs}>{r.certs}</td>
                    <td className={styles.shareCell}>
                      <StatCardButton
                        value={String(r.certs)}
                        label={`Certifications for “${r.title}”`}
                        source={`${r.countries} countries · highest award ${r.top}`}
                        href="/certifications"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.foot}>
              <Link href="/certifications" className="btn btnSecondary">
                All {certTotal} certifications ↗
              </Link>
              <span className={styles.footNote}>
                Showing {shown.length} of {tier === "All" ? releaseTotal : matching.length}{" "}
                certified releases · sorted by certification count
              </span>
            </div>
          </div>

          <div className={styles.aside}>{children}</div>
        </div>
      </div>
    </section>
  );
}
