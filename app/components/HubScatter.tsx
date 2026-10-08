import styles from "./hubScatter.module.css";
import { plaqueDomain, countryDomain } from "../lib/hubScatterScale";

/**
 * "The shape of the field" — the board's careers on two axes.
 *
 * The grid ranks. This says the thing a ranked grid cannot: the artists are
 * different SHAPES. Countries wide against plaques deep, so Seyi Vibez reads as
 * the deepest home-market record on the board rather than a short bar, and Tyla
 * as the widest reach rather than a small one — before a reader opens a page.
 *
 * Geometry, scales, colours and label nudges are the delivered design's own
 * (Afrobeats Board.dc.html). Pure SVG, rendered on the server, no motion — the
 * chart board is engraved, per the spec. Every dot is a computed pair: x is the
 * artist's country count, y is their plaque count, neither ever typed.
 *
 * TYPE THAT DOES NOT SCALE (debug item V-afrobeats-03, option b, Paul's call
 * of 7 Oct 2026). The design draws the plot in a 1280×330 viewBox, and as one
 * scaled picture its 11-unit names rendered at ~10px at 1440 and ~7px at 1024,
 * under the site's 11px floor. So the plot keeps the design's 1280×330 frame
 * as PROPORTIONS — every rule, gridline and dot sits at the same fraction of
 * the plot it always did (pctX/pctY) — but the outer svg has no viewBox, so a
 * user unit is a CSS pixel: the type is set at 11px and stays 11px at every
 * width. Each dot is a nested <svg> anchored at its fraction of the plot, and
 * its label, figures and hairline are drawn in pixels from the dot's centre,
 * so a label keeps its offset from its own dot however wide the plot is.
 * Below 1240px the module is hidden (hubScatter.module.css), as the phone
 * screen never shows it.
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
// x: the design's 26, until the data outgrows it — lib/hubScatterScale.ts.
const xScale = (domain: number) => (c: number) => 70 + (c / domain) * 1150;
// y: the design's 240, until the data outgrows it — lib/hubScatterScale.ts.
const yScale = (domain: number) => (p: number) => 280 - (p / domain) * 250;

const GRID_X = [0, 5, 10, 15, 20, 25];

/** The design's frame, 1280×330: a position in it, as a fraction of the plot. */
const FRAME_W = 1280;
const FRAME_H = 330;
const pctX = (x: number) => `${+((x / FRAME_W) * 100).toFixed(4)}%`;
const pctY = (y: number) => `${+((y / FRAME_H) * 100).toFixed(4)}%`;
/** Every word and figure in the plot: the site's 11px label floor, in pixels. */
const TYPE = 11;

/**
 * Per-dot label nudges, from the design. They are hand-tuned because four pairs
 * collide otherwise: Burna and Wizkid hang left so they do not run off the right
 * edge; Tems hangs left and down to clear Rema and Tyla; Davido and Omah Lay
 * share a country count exactly, so one lifts and the other drops.
 *
 * Offsets are PIXELS from the dot's centre (they were viewBox units, which
 * scaled with the plot), and the type is 11px at every width.
 */
interface Place {
  anchor: "start" | "end";
  dx: number;
  dy: number;
  /** Name and figures on one line — only where two lines have no room. */
  inline?: boolean;
  /** A hairline from the dot to a label that cannot sit beside it, as
   *  [x1, y1, x2, y2] relative to the dot's centre. */
  leader?: [number, number, number, number];
}

const PLACE: Record<string, Place> = {
  "burna-boy": { anchor: "end", dx: -16, dy: -14 },
  wizkid: { anchor: "end", dx: -14, dy: -12 },
  "seyi-vibez": { anchor: "start", dx: 14, dy: -4 },
  davido: { anchor: "start", dx: 12, dy: -10 },
  rema: { anchor: "start", dx: 12, dy: -10 },
  // 7 Oct 2026 (V-afrobeats-03, option b): dy 4 → −9, so Kizz Daniel's name
  // can run under the figures; see the bottom-left note below.
  asake: { anchor: "start", dx: 14, dy: -9 },
  tems: { anchor: "end", dx: -12, dy: 16 },
  tyla: { anchor: "start", dx: 12, dy: 6 },
  "omah-lay": { anchor: "start", dx: 12, dy: 10 },
  "ayra-starr": { anchor: "start", dx: 12, dy: 2 },
  // 25 Sep 2026: Kizz Daniel, Ruger and Tiwa Savage land in the bottom-left
  // corner with Olamide and Black Sherif — five careers within three countries
  // and 60 plaques, where the y scale gives them about 50px. (Oxlade, the
  // fourth to join, sits apart at twelve countries — see his own entry.)
  //
  // 7 Oct 2026 (V-afrobeats-03, option b): at 11px type that does not scale,
  // in a plot 1,038px wide at 1240 (1,158 from 1366), the corner has less room
  // than the 25 Sep placements were measured in, and they overlapped. Re-placed
  // by measuring every label box in Space Mono at every width from 1240 to 1920
  // (Chrome's own boxes: 6.73px advance, 12px above the baseline, 4 below), so
  // that no label box touches another, a dot or a rule:
  //   Kizz Daniel and Ruger stay beside their dots (Kizz up 4px, Ruger right 2
  //   and down 7 — far enough under Kizz's figures that at 1240, where "36 · 3"
  //   ends 2px short of "Ruger", the two do not read as one line), with
  //   Asake's label lifted over Kizz's name;
  //   Black Sherif's hairline now runs up-left, past Seyi Vibez's dot on the
  //   axis side, to a label over Seyi's — Seyi's dot sits straight above his;
  //   Olamide and Tiwa Savage are boxed in (Kizz Daniel's label to the right,
  //   Black Sherif's hairline to the left, Seyi Vibez's label above), so both
  //   go up past the end of Seyi's label on hairlines that fan apart: Olamide's
  //   to the foot of a right-aligned label, Tiwa Savage's to a one-line label
  //   beyond it, as hers was before.
  olamide: { anchor: "end", dx: 83, dy: -76, leader: [6, -4, 82, -60] },
  "kizz-daniel": { anchor: "start", dx: 12, dy: -12 },
  "black-sherif": { anchor: "start", dx: -29, dy: -97, leader: [-2, -7, -25, -79] },
  ruger: { anchor: "start", dx: 20, dy: -5 },
  "tiwa-savage": { anchor: "start", dx: 98, dy: -96, inline: true, leader: [5, -5, 96, -100] },
  // BNXN, Fireboy DML and Victony share a country count: three dots within
  // 32px (36px from 1366), Omah Lay's dot three countries to the right and the
  // axis 19px under Victony's. At 11px their labels fit only as a stack up the
  // right of the column, top to bottom in the dots' own order — and a stack
  // cannot set each label beside its own dot: Fireboy DML's dot is 9px above
  // Victony's, so a label beside one is beside the other. So each label is
  // tied to its dot by a short hairline, and Victony's runs on one line, as
  // Tiwa Savage's does, which lets Fireboy DML's figures sit level with his
  // dot. (Stacked without hairlines, "Fireboy DML" read as the name of BNXN's
  // dot — the review of 7 Oct 2026.)
  bnxn: { anchor: "start", dx: 20, dy: -19, leader: [5, -5, 17, -15] },
  "fireboy-dml": { anchor: "start", dx: 20, dy: -10, leader: [7, -3, 17, -7] },
  victony: { anchor: "start", dx: 20, dy: 12, inline: true, leader: [7, 3, 17, 8] },
  // 26 Sep 2026: Portugal took Oxlade to twelve countries, Ayra Starr's count,
  // so his dot sits straight under hers (x 600.8; y 265.6 against 239.6). On
  // the fallback his name's ascenders (y ≈ 251.6–259.6) cut into her figures
  // line (y ≈ 247.6–254.6) across the same x span. Hung left, both his lines
  // sit in open space (x ≈ 544–587), 8px clear of her dot.
  // 7 Oct 2026: 5px nearer his dot and 1 up, so at 1240 his name clears Omah
  // Lay's figures and his figures clear the axis.
  oxlade: { anchor: "end", dx: -9, dy: -7 },
};

const FALLBACK: Place = { anchor: "start", dx: 14, dy: -6 };

export default function HubScatter({ dots }: { dots: ScatterDot[] }) {
  // Descending plaques, so the reading order of the labels matches the board's.
  const plotted = [...dots].sort((a, b) => b.plaques - a.plaques);
  const Y = yScale(plaqueDomain(plotted[0]?.plaques ?? 0));
  const X = xScale(countryDomain(Math.max(0, ...plotted.map((d) => d.countries))));

  return (
    <section className={styles.wrap} aria-labelledby="shape">
      <div className={styles.head}>
        <h2 id="shape" className={styles.h2}>The shape of the field</h2>
        <span className={styles.kicker}>countries wide × certifications deep · every dot verified</span>
      </div>

      <div className={styles.plot}>
        {/* The frame holds the design's 1280×330 proportions (hubScatter.module.css);
            the svg fills it, so its height never rests on the svg's own sizing. */}
        <div className={styles.frame}>
          <svg
            className={styles.svg}
            role="img"
            aria-label={
              `Scatter plot of certifications against countries certified in. ` +
              plotted
                .map(
                  (d) =>
                    `${d.name}, ${d.plaques} certifications across ${d.countries} ${d.countries === 1 ? "country" : "countries"}`
                )
                .join(". ") + "."
            }
          >
            {/* Vertical gridlines only, and near-invisible — the axis rule carries
                the structure, these just give the eye somewhere to measure from.
                Each count hangs 18px under the axis rule, the design's 298 − 280. */}
            {GRID_X.map((g) => (
              <g key={g}>
                <line x1={pctX(X(g))} y1={pctY(280)} x2={pctX(X(g))} y2={pctY(20)} stroke="color-mix(in srgb, var(--text) 5%, transparent)" strokeWidth="1" />
                <text
                  x={pctX(X(g))}
                  y={pctY(280)}
                  dy={18}
                  textAnchor="middle"
                  fontFamily="var(--font-mono), monospace"
                  fontSize={TYPE}
                  fill="var(--text-muted)"
                >
                  {g}
                </text>
              </g>
            ))}

            <line x1={pctX(70)} y1={pctY(280)} x2={pctX(1240)} y2={pctY(280)} stroke="color-mix(in srgb, var(--text) 30%, transparent)" strokeWidth="1" />
            <line x1={pctX(70)} y1={pctY(20)} x2={pctX(70)} y2={pctY(280)} stroke="color-mix(in srgb, var(--text) 30%, transparent)" strokeWidth="1" />

            {/* The axis titles, at the design's offsets from the rules they name:
                CERTIFICATIONS 6px right of the y rule and 10px under its top (it read
                PLAQUES until 8 Oct 2026, design review B-10); COUNTRIES
                under the x rule's right end, 35px down where the design had 32,
                so at 11px it clears the "25" count above it at 1240. */}
            <text x={pctX(1240)} y={pctY(280)} dy={35} textAnchor="end" fontFamily="var(--font-mono), monospace" fontSize={TYPE} fill="var(--text-muted)" letterSpacing="1">
              COUNTRIES →
            </text>
            <text x={pctX(70)} dx={6} y={pctY(20)} dy={10} fontFamily="var(--font-mono), monospace" fontSize={TYPE} fill="var(--text-muted)" letterSpacing="1">
              CERTIFICATIONS ↑
            </text>

            {plotted.map((d) => {
              const p = PLACE[d.slug] ?? FALLBACK;
              return (
                // The dot's own pixel space, anchored at its fraction of the plot.
                <svg key={d.slug} x={pctX(X(d.countries))} y={pctY(Y(d.plaques))} overflow="visible">
                  <g>
                    {p.leader && (
                      <line
                        x1={p.leader[0]}
                        y1={p.leader[1]}
                        x2={p.leader[2]}
                        y2={p.leader[3]}
                        stroke="color-mix(in srgb, var(--text) 30%, transparent)"
                        strokeWidth="1"
                      />
                    )}
                    <circle
                      cx={0}
                      cy={0}
                      r={d.anchor ? 8 : 6}
                      fill={d.anchor ? "var(--gold)" : "color-mix(in srgb, var(--bg-soft) 90%, transparent)"}
                      stroke={d.anchor ? "var(--gold-bright-ink)" : "color-mix(in srgb, var(--text) 55%, transparent)"}
                      strokeWidth="1.5"
                    />
                    {/* Burna's name sets in caps and gold-bright. There is no
                        text-transform in SVG, so the casing is the data's — it is
                        how he stays the loudest thing in the plot. */}
                    <text
                      x={p.dx}
                      y={p.dy}
                      textAnchor={p.anchor}
                      fontFamily="var(--font-mono), monospace"
                      fontSize={TYPE}
                      fill={d.anchor ? "var(--gold-bright-ink)" : "var(--text)"}
                    >
                      {d.anchor ? d.name.toUpperCase() : d.name}
                      {p.inline && (
                        <tspan dx={7} fontSize={TYPE} fill="var(--text-muted)">
                          {d.plaques} · {d.countries}
                        </tspan>
                      )}
                    </text>
                    {!p.inline && (
                      <text
                        x={p.dx}
                        y={p.dy + 13}
                        textAnchor={p.anchor}
                        fontFamily="var(--font-mono), monospace"
                        fontSize={TYPE}
                        fill="var(--text-muted)"
                      >
                        {d.plaques} · {d.countries}
                      </text>
                    )}
                  </g>
                </svg>
              );
            })}
          </svg>
        </div>

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
