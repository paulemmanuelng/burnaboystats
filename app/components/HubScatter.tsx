import styles from "./hubScatter.module.css";

/**
 * "The shape of the field" — the board's ten careers on two axes.
 *
 * The grid ranks. This says the thing a ranked grid cannot: the nine artists are
 * different SHAPES. Countries wide against plaques deep, so Seyi Vibez reads as
 * the deepest home-market record on the board rather than a short bar, and Tyla
 * as the widest reach rather than a small one — before a reader opens a page.
 *
 * Geometry, scales, colours and label nudges are the delivered design's own
 * (Afrobeats Board.dc.html). Pure SVG, rendered on the server, no motion — the
 * chart board is engraved, per the spec. Every dot is a computed pair: x is the
 * artist's country count, y is their plaque count, neither ever typed.
 */

export interface ScatterDot {
  slug: string;
  name: string;
  countries: number;
  plaques: number;
  anchor: boolean;
}

// The design's scales, verbatim. The axis rules deliberately overshoot the data
// domain — x to 1240 though 26 countries lands at 1220, y up to 20 though 240
// plaques lands at 30 — so no dot ever sits on the frame.
const X = (c: number) => 70 + (c / 26) * 1150;
const Y = (p: number) => 280 - (p / 240) * 250;

const GRID_X = [0, 5, 10, 15, 20, 25];

/**
 * Per-dot label nudges, from the design. They are hand-tuned because four pairs
 * collide otherwise: Burna and Wizkid hang left so they do not run off the right
 * edge; Tems hangs left and down to clear Rema and Tyla; Davido and Omah Lay
 * share a country count exactly, so one lifts and the other drops.
 */
const PLACE: Record<string, { anchor: "start" | "end"; dx: number; dy: number }> = {
  "burna-boy": { anchor: "end", dx: -16, dy: -14 },
  wizkid: { anchor: "end", dx: -14, dy: -12 },
  "seyi-vibez": { anchor: "start", dx: 14, dy: -4 },
  davido: { anchor: "start", dx: 12, dy: -10 },
  rema: { anchor: "start", dx: 12, dy: -10 },
  asake: { anchor: "start", dx: 14, dy: 4 },
  tems: { anchor: "end", dx: -12, dy: 16 },
  tyla: { anchor: "start", dx: 12, dy: 6 },
  "omah-lay": { anchor: "start", dx: 12, dy: 10 },
  "ayra-starr": { anchor: "start", dx: 12, dy: 2 },
};

const FALLBACK = { anchor: "start" as const, dx: 14, dy: -6 };

export default function HubScatter({ dots }: { dots: ScatterDot[] }) {
  // Descending plaques, so the reading order of the labels matches the board's.
  const plotted = [...dots].sort((a, b) => b.plaques - a.plaques);

  return (
    <section className={styles.wrap} aria-labelledby="shape">
      <div className={styles.head}>
        <h2 id="shape" className={styles.h2}>The shape of the field</h2>
        <span className={styles.kicker}>countries wide × plaques deep · every dot verified</span>
      </div>

      <div className={styles.plot}>
        <svg
          viewBox="0 0 1280 330"
          className={styles.svg}
          role="img"
          aria-label={
            `Scatter plot of certifications against countries certified in. ` +
            plotted
              .map(
                (d) =>
                  `${d.name}, ${d.plaques} plaques across ${d.countries} ${d.countries === 1 ? "country" : "countries"}`
              )
              .join(". ") + "."
          }
        >
          {/* Vertical gridlines only, and near-invisible — the axis rule carries
              the structure, these just give the eye somewhere to measure from. */}
          {GRID_X.map((g) => (
            <g key={g}>
              <line x1={X(g)} y1={280} x2={X(g)} y2={20} stroke="rgba(245,244,240,0.05)" strokeWidth="1" />
              <text
                x={X(g)}
                y={298}
                textAnchor="middle"
                fontFamily="var(--font-mono), monospace"
                fontSize="10.5"
                fill="#71717a"
              >
                {g}
              </text>
            </g>
          ))}

          <line x1={70} y1={280} x2={1240} y2={280} stroke="rgba(245,244,240,0.3)" strokeWidth="1" />
          <line x1={70} y1={20} x2={70} y2={280} stroke="rgba(245,244,240,0.3)" strokeWidth="1" />

          <text x={1240} y={312} textAnchor="end" fontFamily="var(--font-mono), monospace" fontSize="11" fill="#9b9ba3" letterSpacing="1">
            COUNTRIES →
          </text>
          <text x={76} y={30} fontFamily="var(--font-mono), monospace" fontSize="11" fill="#9b9ba3" letterSpacing="1">
            PLAQUES ↑
          </text>

          {plotted.map((d) => {
            const p = PLACE[d.slug] ?? FALLBACK;
            const cx = X(d.countries);
            const cy = Y(d.plaques);
            const lx = cx + p.dx;
            const ly = cy + p.dy;
            return (
              <g key={d.slug}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={d.anchor ? 8 : 6}
                  fill={d.anchor ? "var(--gold)" : "rgba(20,20,22,0.9)"}
                  stroke={d.anchor ? "var(--gold-bright)" : "rgba(245,244,240,0.55)"}
                  strokeWidth="1.5"
                />
                {/* Burna's name sets in caps and gold-bright. There is no
                    text-transform in SVG, so the casing is the data's — it is
                    how he stays the loudest thing in the plot. */}
                <text
                  x={lx}
                  y={ly}
                  textAnchor={p.anchor}
                  fontFamily="var(--font-mono), monospace"
                  fontSize="11"
                  fill={d.anchor ? "#ffd24a" : "#f5f4f0"}
                >
                  {d.anchor ? d.name.toUpperCase() : d.name}
                </text>
                <text
                  x={lx}
                  y={ly + 13}
                  textAnchor={p.anchor}
                  fontFamily="var(--font-mono), monospace"
                  fontSize="10"
                  fill="#71717a"
                >
                  {d.plaques} · {d.countries}
                </text>
              </g>
            );
          })}
        </svg>

        <div className={styles.legend}>
          <span className={styles.key}>
            <span className={`${styles.dot} ${styles.dotAnchor}`} aria-hidden="true" />
            Burna Boy — this site
          </span>
          <span className={styles.key}>
            <span className={styles.dot} aria-hidden="true" />
            The field
          </span>
          <span className={styles.read}>
            Bottom-right = wide &amp; shallow · top-left = deep at home (Seyi Vibez) · top-right =
            both (Burna Boy, Wizkid)
          </span>
        </div>
      </div>
    </section>
  );
}
