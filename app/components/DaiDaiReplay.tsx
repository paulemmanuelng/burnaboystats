"use client"; // the player: play, step, scrub, the country card

import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import styles from "./DaiDaiReplay.module.css";
import { projectEqualEarth } from "../lib/equalEarth";
import DaiDaiReplayMultiples, { bandOf, fillIn, type Band } from "./DaiDaiReplayMultiples";
import type { ReplayData, ReplayRun } from "./daiDaiReplayData";
import type { ReplayLabels } from "./daiDaiReplayLabels";

/**
 * "How it got there" — Dai Dai's official chart run, week by week, under the
 * takeover grid (designs/desktop/Dai Dai Replay States.dc.html, approved by
 * Paul on 26 Sep 2026). The Replay Module's rules, ported; not its code:
 *
 * - POSTER: the server renders the END frame — every country at its peak,
 *   which is the takeover grid (26 of 66 at No. 1) — with a Play control.
 *   Nothing plays until it is pressed.
 * - PLAYING: one weekly frame a second. The live region stays silent.
 * - PAUSED: the frame holds; hover, focus or tap on a country shows its card
 *   (the chart's own date or label, the position or status, the source), and
 *   the live region announces the frame, once.
 * - SCRUBBING: dragging the scrubber snaps to whole weeks; the readout follows.
 * - END: the peak picture again, and Replay. A country whose run is not
 *   recorded fills with its peak band and a ● only here.
 * - SMALL MULTIPLES: under prefers-reduced-motion — checked HERE, in
 *   JavaScript, because the global CSS rule stops CSS transitions and not a
 *   script's timer — the table is the default view and the player opens only
 *   when asked for; its frames then step without any tween.
 *
 * Counter and tray: the counter counts READ No. 1s only; the "Not read this
 * week" tray lists exactly the unread countries, so its count is the
 * counter's "not read"; a country whose body published no chart that week gets
 * its own line. A week nobody has read is hatched. It is never filled from the
 * weeks around it — the data never does, and nothing here does either.
 *
 * The map is app/data/worldShapes.ts (Equal Earth), served as one static
 * sprite (app/dai-dai/replay-map.svg) and placed by <use> in the world map and
 * in the Europe view, which is the desktop's inset and the phone's default.
 * Singapore has no shape at this scale, so it is a marker.
 */

type Mode = "poster" | "playing" | "paused" | "scrubbing" | "end";

const BANDS: Band[] = ["b1", "b5", "b10", "b40", "rest"];
const PLAY_MS = 1000;

// ── Geometry ─────────────────────────────────────────────────────────────────

/** The Europe view: the design's box, longitude −11 to 32 and latitude 35 to
 *  71, projected with the map's own Equal Earth and widened to the inset's
 *  proportions (width : height = 1 : 0.86). */
const EUROPE = (() => {
  const sw = projectEqualEarth(-11, 35);
  const se = projectEqualEarth(32, 35);
  const nw = projectEqualEarth(-11, 71);
  const h = sw.y - nw.y;
  const w = Math.max(se.x - sw.x, h / 0.86);
  const cx = (sw.x + se.x) / 2;
  return `${(cx - w / 2).toFixed(1)} ${nw.y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`;
})();

/** The shapes: a static sprite built from app/data/worldShapes.ts
 *  (app/dai-dai/replay-map.svg/route.ts), placed by <use>. */
const SPRITE = "/dai-dai/replay-map.svg";

/** Singapore, which has no shape in worldShapes: a marker at its coordinates. */
const SG = projectEqualEarth(103.82, 1.35);
const SG_ISO = 702;



// ── Reduced motion, read in JavaScript ───────────────────────────────────────

const RM = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const m = window.matchMedia?.(RM);
  m?.addEventListener("change", cb);
  return () => m?.removeEventListener("change", cb);
};
const getRM = () => window.matchMedia?.(RM).matches ?? false;
const getRMServer = () => false;

// ── The phone layout, read in JavaScript ─────────────────────────────────────
// On the phone the ranking's chips are labels, as the 390 artboard draws them:
// a 22px chip cannot be a 44px target, and the map is where a phone reader
// taps a country. So below 901px they are not buttons and take no tab stop
// (CSS alone could stop the pointer, not the focus). The server renders the
// desktop's buttons, and a phone swaps them for labels as it hydrates; both
// carry the same classes, so nothing moves.
const PHONE = "(max-width: 900px)";
const subscribePhone = (cb: () => void) => {
  const m = window.matchMedia?.(PHONE);
  m?.addEventListener("change", cb);
  return () => m?.removeEventListener("change", cb);
};
const getPhone = () => window.matchMedia?.(PHONE).matches ?? false;
const getPhoneServer = () => false;

// ── Helpers ──────────────────────────────────────────────────────────────────

const ordinal = (n: number, lang: "en" | "es") => {
  if (lang === "es") return `${n}.ª`;
  const m = n % 100;
  return `${n}${m >= 11 && m <= 13 ? "th" : (["th", "st", "nd", "rd"][n % 10] ?? "th")}`;
};

/** Read weeks at No. 1 up to and including frame i. */
const readNo1s = (r: ReplayRun, i: number) => r.pts.slice(0, i + 1).filter((p) => p.s === "on" && p.p === 1).length;

/** What a country looks like at frame `i` — a class name. */
function lookOf(r: ReplayRun | undefined, i: number, endLike: boolean): string {
  if (!r) return "none";
  if (endLike) return bandOf(r.best);
  if (!r.pts.length) return "norun";
  const p = r.pts[i];
  if (p.s === "on") return bandOf(p.p!);
  if (p.s === "unread") return "unread";
  if (p.s === "no-chart") return "nochart";
  return "off";
}

export default function DaiDaiReplay({ data, labels: t }: { data: ReplayData; labels: ReplayLabels }) {
  const last = data.frames.length - 1;
  const [frame, setFrame] = useState(last);
  const [mode, setMode] = useState<Mode>("poster");
  const [userView, setUserView] = useState<"player" | "multiples" | null>(null);
  const [mapView, setMapView] = useState<"europe" | "world">("europe");
  const [pinned, setPinned] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [announce, setAnnounce] = useState("");
  const reduced = useSyncExternalStore(subscribeRM, getRM, getRMServer);
  const phone = useSyncExternalStore(subscribePhone, getPhone, getPhoneServer);
  const view = userView ?? (reduced ? "multiples" : "player");

  const endLike = mode === "poster" || mode === "end";
  const byIso = useMemo(() => new Map(data.countries.filter((c) => c.iso !== undefined).map((c) => [c.iso!, c])), [data.countries]);
  const all = useMemo(() => [...data.countries, ...data.globals], [data.countries, data.globals]);
  const peakOnly = data.countries.filter((c) => !c.pts.length).length;
  const total = data.countries.length;

  // ── The frame's numbers ────────────────────────────────────────────────────
  const stats = useMemo(() => {
    if (endLike) {
      return { n1: data.countries.filter((c) => c.best === 1).length, unread: [] as ReplayRun[], noChart: [] as ReplayRun[] };
    }
    const at = (c: ReplayRun) => c.pts[frame];
    return {
      n1: data.countries.filter((c) => c.pts.length && at(c).s === "on" && at(c).p === 1).length,
      unread: data.countries.filter((c) => c.pts.length && at(c).s === "unread"),
      noChart: data.countries.filter((c) => c.pts.length && at(c).s === "no-chart"),
    };
  }, [data.countries, endLike, frame]);

  const word = (n: number) => (n === 1 ? t.country : t.countries);
  const readout = endLike ? t.peakPicture : fillIn(t.weekOf, { date: data.frames[frame] });
  const valuetext = endLike
    ? fillIn(t.valuetextEnd, { n: stats.n1, countries: word(stats.n1) })
    : fillIn(t.valuetext, { date: data.frames[frame], n: stats.n1, countries: word(stats.n1), m: stats.unread.length });

  // ── Transport ──────────────────────────────────────────────────────────────
  const frameRef = useRef(frame);
  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  useEffect(() => {
    if (mode !== "playing") return;
    // The session's own counter: anything that stops play (pause, a step, a
    // scrub) changes the mode and ends this effect, so it cannot go stale.
    let f = frameRef.current;
    const id = window.setInterval(() => {
      if (f >= last) {
        setMode("end");
        return;
      }
      f += 1;
      setFrame(f);
    }, PLAY_MS);
    return () => window.clearInterval(id);
  }, [mode, last]);

  /** Hold a frame. The live region announces it — the only time it speaks. */
  const hold = (f: number) => {
    const g = Math.max(0, Math.min(last, f));
    setFrame(g);
    setMode("paused");
    setHovered(null);
    const n1 = data.countries.filter((c) => c.pts.length && c.pts[g].s === "on" && c.pts[g].p === 1).length;
    const m = data.countries.filter((c) => c.pts.length && c.pts[g].s === "unread").length;
    setAnnounce(fillIn(t.valuetext, { date: data.frames[g], n: n1, countries: word(n1), m }));
  };
  const play = () => {
    setPinned(null);
    setHovered(null);
    setAnnounce("");
    // From the poster or the end it starts again; from a held week it carries on.
    if (endLike) setFrame(0);
    setMode("playing");
  };
  const toggle = () => (mode === "playing" ? hold(frame) : play());
  const back = () => hold(endLike ? last : frame - 1);
  const fwd = () => hold(endLike ? 0 : frame + 1);

  const onSliderKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const k = e.key;
    if (k === "ArrowRight" || k === "ArrowUp") hold(endLike ? 0 : frame + 1);
    else if (k === "ArrowLeft" || k === "ArrowDown") hold(endLike ? last : frame - 1);
    else if (k === "Home") hold(0);
    else if (k === "End") hold(last);
    else if (k === " " || k === "Spacebar") toggle();
    else return;
    e.preventDefault();
  };

  // Scrubbing: the pointer snaps to whole weeks, and the readout follows.
  const track = useRef<HTMLDivElement>(null);
  const frameAt = (clientX: number) => {
    const el = track.current;
    if (!el) return frame;
    const r = el.getBoundingClientRect();
    if (!r.width) return frame;
    return Math.round(Math.max(0, Math.min(1, (clientX - r.left) / r.width)) * last);
  };
  const onScrubStart = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setPinned(null);
    setHovered(null);
    setAnnounce("");
    setFrame(frameAt(e.clientX));
    setMode("scrubbing");
  };
  const onScrubMove = (e: PointerEvent<HTMLDivElement>) => {
    if (mode === "scrubbing") setFrame(frameAt(e.clientX));
  };
  const onScrubEnd = (e: PointerEvent<HTMLDivElement>) => {
    if (mode === "scrubbing") hold(frameAt(e.clientX));
  };

  // ── The country card ───────────────────────────────────────────────────────
  const pick = (code: string | null) => {
    if (mode === "playing" || mode === "scrubbing") {
      if (!code) return;
      hold(frame);
    }
    setPinned(code);
  };
  const cardCode = mode === "playing" || mode === "scrubbing" ? null : (hovered ?? pinned);
  const cardRun = cardCode ? all.find((c) => c.code === cardCode) : undefined;
  const card = (() => {
    if (!cardRun) return null;
    const base = { name: cardRun.name, flag: cardRun.flag, body: cardRun.body };
    if (endLike) {
      return {
        ...base,
        pos: fillIn(t.pos, { p: cardRun.best }),
        status: cardRun.weeksAtPeak != null ? fillIn(t.cardPeakWeeks, { n: cardRun.weeksAtPeak }) : t.cardPeak,
        label: cardRun.pts.length ? null : t.cardNotRecorded,
        source: fillIn(t.cardSource, { src: "app/data/charts.ts" }),
      };
    }
    if (!cardRun.pts.length) return { ...base, pos: t.posUnread, status: t.cardNotRecorded, label: null, source: null };
    const p = cardRun.pts[frame];
    const pos = p.s === "on" ? fillIn(t.pos, { p: p.p! }) : p.s === "unread" ? t.posUnread : p.s === "no-chart" ? t.posNoChart : t.posOff;
    const status =
      p.s === "on"
        ? p.p === 1
          ? fillIn(t.cardNthAtNo1, { nth: ordinal(readNo1s(cardRun, frame), t.lang) })
          : t.cardThisWeek
        : p.s === "unread"
          ? t.cardUnread
          : p.s === "no-chart"
            ? t.cardNoChart
            : t.cardOff;
    return { ...base, pos, status, label: p.l ?? fillIn(t.cardDated, { date: p.d }), source: p.src ? fillIn(t.cardSource, { src: p.src }) : null };
  })();

  const codeFrom = (target: EventTarget | null) => (target instanceof Element ? target.closest("[data-code]")?.getAttribute("data-code") ?? null : null);
  const onMapOver = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    setHovered(codeFrom(e.target));
  };
  const onMapClick = (e: MouseEvent<HTMLDivElement>) => pick(codeFrom(e.target));
  const onRootKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape" && (pinned || hovered)) {
      setPinned(null);
      setHovered(null);
    }
  };

  // ── Ranking ────────────────────────────────────────────────────────────────
  const groups = (() => {
    if (endLike) {
      const order = [...data.countries].sort(
        (a, b) => a.best - b.best || Number(b.pts.length > 0) - Number(a.pts.length > 0) || (b.weeksAtPeak ?? 0) - (a.weeksAtPeak ?? 0) || a.code.localeCompare(b.code, "en"),
      );
      return BANDS.map((b, bi) => {
        const items = order.filter((c) => bandOf(c.best) === b);
        return {
          band: b,
          label: fillIn(t.bandPeak, { band: t.bands[bi] }),
          items: items.map((c) => ({
            run: c,
            cue: c.pts.length ? (c.best === 1 ? fillIn(t.cueWeeks, { n: c.weeksAtPeak ?? readNo1s(c, last) }) : "") : "●",
            say: `${c.name}: ${fillIn(t.pos, { p: c.best })}${c.pts.length ? "" : `, ${t.cardNotRecorded}`}`,
          })),
        };
      }).filter((g) => g.items.length);
    }
    const on = data.countries.filter((c) => c.pts.length && c.pts[frame].s === "on");
    return BANDS.map((b, bi) => {
      const items = on
        .filter((c) => bandOf(c.pts[frame].p!) === b)
        .sort((x, y) => x.pts[frame].p! - y.pts[frame].p! || readNo1s(y, frame) - readNo1s(x, frame) || x.code.localeCompare(y.code, "en"));
      return {
        band: b,
        label: t.bands[bi],
        items: items.map((c) => {
          const p = c.pts[frame].p!;
          return {
            run: c,
            cue: p === 1 ? fillIn(t.cueWeeks, { n: readNo1s(c, frame) }) : `#${p}`,
            say: `${c.name}: ${fillIn(t.pos, { p })}${p === 1 ? `, ${fillIn(t.cardNthAtNo1, { nth: ordinal(readNo1s(c, frame), t.lang) })}` : ""}`,
          };
        }),
      };
    }).filter((g) => g.items.length);
  })();

  // One tab stop for the whole ranking: the chips are a roving group, arrows
  // move between them and the focused one shows its card.
  const chipOrder = groups.flatMap((g) => g.items.map((it) => it.run.code));
  const tabChip = pinned && chipOrder.includes(pinned) ? pinned : chipOrder[0];
  const rankRef = useRef<HTMLDivElement>(null);
  const onChipKey = (e: KeyboardEvent<HTMLButtonElement>, code: string) => {
    const i = chipOrder.indexOf(code);
    const k = e.key;
    const to =
      k === "ArrowRight" || k === "ArrowDown" ? i + 1 : k === "ArrowLeft" || k === "ArrowUp" ? i - 1 : k === "Home" ? 0 : k === "End" ? chipOrder.length - 1 : null;
    if (to === null) return;
    e.preventDefault();
    const next = chipOrder[Math.max(0, Math.min(chipOrder.length - 1, to))];
    rankRef.current?.querySelector<HTMLButtonElement>(`[data-chip="${next}"]`)?.focus();
  };

  // ── The two globals ────────────────────────────────────────────────────────
  const tiles = data.globals.map((g) => {
    if (endLike) {
      return { g, sw: bandOf(g.best), pos: fillIn(t.pos, { p: g.best }), sub: fillIn(t.tileSoFar, { n: g.weeksAtPeak ?? readNo1s(g, last) }) };
    }
    const p = g.pts[frame];
    if (p.s === "on") return { g, sw: bandOf(p.p!), pos: fillIn(t.pos, { p: p.p! }), sub: fillIn(t.tileSoFar, { n: readNo1s(g, frame) }) };
    if (p.s === "unread") return { g, sw: "unread", pos: t.posUnread, sub: t.tileUnread };
    if (p.s === "no-chart") return { g, sw: "nochart", pos: t.posNoChart, sub: t.tileNoChart };
    return { g, sw: "off", pos: t.posOff, sub: t.tileOff };
  });

  // ── The map ────────────────────────────────────────────────────────────────
  const marks = useMemo(
    () => data.countries.filter((c) => c.mark).map((c) => ({ code: c.code, at: c.mark! })),
    [data.countries],
  );
  const sg = byIso.get(SG_ISO);
  const sgLook = lookOf(sg, frame, endLike);

  const shapeClass = (look: string) =>
    look === "none" ? styles.shape : [styles.shape, styles.charted, styles[look]].filter(Boolean).join(" ");
  const patternFill = (look: string, where: "w" | "e") =>
    look === "unread" ? `url(#ddr-hatch-${where})` : look === "nochart" ? `url(#ddr-cross-${where})` : undefined;

  // The country with its card open is drawn a second time, last, in the same
  // look: its outline then sits on top of every neighbour, and it is painted
  // under the fill (paint-order), so the whole band fill stays visible. A
  // centred 2px outline covered most of a small shape — Switzerland in the
  // inset lost its band to it while France and Germany kept theirs.
  const pickedRun = cardRun?.iso !== undefined && data.shapes.includes(cardRun.iso) ? cardRun : undefined;
  const drawUses = (where: "w" | "e") => {
    const uses = data.shapes.map((iso) => {
      const r = byIso.get(iso);
      const look = lookOf(r, frame, endLike);
      const pf = patternFill(look, where);
      return (
        <use
          key={iso}
          href={`${SPRITE}#s${iso}`}
          className={shapeClass(look)}
          style={pf ? { fill: pf } : undefined}
          data-code={r?.code}
        />
      );
    });
    if (!pickedRun) return uses;
    const look = lookOf(pickedRun, frame, endLike);
    const pf = patternFill(look, where);
    return [
      ...uses,
      <use
        key="picked"
        href={`${SPRITE}#s${pickedRun.iso}`}
        className={`${shapeClass(look)} ${styles.picked}`}
        style={pf ? { fill: pf } : undefined}
        data-picked={pickedRun.code}
        aria-hidden="true"
      />,
    ];
  };
  const drawMarks = (r: number) =>
    endLike ? marks.map((m) => <circle key={m.code} className={styles.peakMark} cx={m.at[0]} cy={m.at[1]} r={r} data-code={m.code} />) : null;

  const playLabel = mode === "playing" ? t.pause : mode === "end" ? t.replay : t.play;
  // The counter, with its No. 1 count in ink as the module draws it.
  const counterTpl = endLike ? t.counterEnd : t.counter;
  const counterVals: Record<string, string | number> = { n: stats.n1, countries: word(stats.n1), m: stats.unread.length };
  const counter = counterTpl.split(/(\{\w+\})/).map((part, i) => {
    const k = /^\{(\w+)\}$/.exec(part)?.[1];
    if (!k) return part;
    return k === "n" ? (
      <span key={i} className={styles.counterNum}>
        {counterVals.n}
      </span>
    ) : (
      String(counterVals[k] ?? part)
    );
  });

  const legend: { cls: string; label: string }[] = [
    ...BANDS.map((b, i) => ({ cls: b, label: t.bands[i] })),
    { cls: "off", label: t.legendOff },
    { cls: "unread", label: t.legendUnread },
    { cls: "nochart", label: t.legendNoChart },
    { cls: "norun", label: t.legendNotRecorded },
    { cls: "b5", label: t.legendPeakMark },
  ];

  return (
    <div className={styles.replay} data-mode={mode} data-view={view} onKeyDown={onRootKey}>
      <div className={styles.head}>
        <div className={styles.kicker}>{t.kicker}</div>
        <h3 className={styles.title}>{t.title}</h3>
        <p className={styles.intro}>{t.intro}</p>
      </div>

      {view === "multiples" ? (
        <DaiDaiReplayMultiples
          data={data}
          labels={t}
          onOpen={() => {
            setUserView("player");
            setMode("poster");
            setFrame(last);
          }}
        />
      ) : (
        <div className={styles.player}>
          <div className={styles.readoutRow}>
            <span className={styles.readout}>{readout}</span>
            <span className={styles.counter}>{counter}</span>
          </div>

          <div className={styles.tiles}>
            {tiles.map(({ g, sw, pos, sub }) => (
              <div key={g.code} className={styles.tile} data-code={g.code}>
                <span className={`${styles.swatch} ${styles[sw] ?? ""}`} aria-hidden="true" />
                <span className={styles.tileText}>
                  <span className={styles.tileName}>
                    <span className={styles.tileNameLong}>{g.body}</span>
                    <span className={styles.tileNameShort}>{g.name}</span>
                  </span>
                  <span className={styles.tileSub}>{sub}</span>
                </span>
                <span className={styles.tilePos}>{pos}</span>
              </div>
            ))}
          </div>

          <div className={styles.body}>
            <div className={styles.mapCol}>
              <div role="radiogroup" aria-label={t.mapView} className={styles.mapToggle}>
                {(["europe", "world"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="radio"
                    aria-checked={mapView === v}
                    tabIndex={mapView === v ? 0 : -1}
                    className={`${styles.mapToggleItem} ${mapView === v ? styles.mapToggleOn : ""}`}
                    onClick={() => setMapView(v)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
                        e.preventDefault();
                        const next = mapView === "europe" ? "world" : "europe";
                        setMapView(next);
                        (e.currentTarget.parentElement?.querySelector(`[data-v="${next}"]`) as HTMLElement | null)?.focus();
                      }
                    }}
                    data-v={v}
                  >
                    {v === "europe" ? t.europe : t.world}
                  </button>
                ))}
              </div>
              <div
                className={styles.mapBox}
                data-map={mapView}
                onPointerOver={onMapOver}
                onPointerLeave={() => setHovered(null)}
                onClick={onMapClick}
              >
                {/* The hatches. The shapes come from the sprite. */}
                <svg className={styles.defs} aria-hidden="true" focusable="false">
                  <defs>
                    <pattern id="ddr-hatch-w" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <rect className={styles.patWell} width="6" height="6" />
                      <line className={styles.patLine} x1="0" y1="0" x2="0" y2="6" strokeWidth="1.7" />
                    </pattern>
                    <pattern id="ddr-hatch-e" width="2.2" height="2.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <rect className={styles.patWell} width="2.2" height="2.2" />
                      <line className={styles.patLine} x1="0" y1="0" x2="0" y2="2.2" strokeWidth="0.63" />
                    </pattern>
                    <pattern id="ddr-cross-w" width="7.2" height="7.2" patternUnits="userSpaceOnUse">
                      <rect className={styles.patWell} width="7.2" height="7.2" />
                      <path className={styles.patLine} d="M0 0L7.2 7.2M7.2 0L0 7.2" strokeWidth="1.1" />
                    </pattern>
                    <pattern id="ddr-cross-e" width="2.7" height="2.7" patternUnits="userSpaceOnUse">
                      <rect className={styles.patWell} width="2.7" height="2.7" />
                      <path className={styles.patLine} d="M0 0L2.7 2.7M2.7 0L0 2.7" strokeWidth="0.4" />
                    </pattern>
                  </defs>
                </svg>

                <svg
                  className={styles.world}
                  viewBox={`0 0 ${data.mapW} ${data.mapH}`}
                  role="img"
                  aria-label={fillIn(t.mapAria, { readout })}
                >
                  {drawUses("w")}
                  {drawMarks(1.35)}
                  <circle
                    className={`${styles.sg} ${styles[sgLook] ?? ""} ${sg && sg.code === cardCode ? styles.picked : ""}`}
                    cx={SG.x}
                    cy={SG.y}
                    r={4.8}
                    style={patternFill(sgLook, "w") ? { fill: patternFill(sgLook, "w") } : undefined}
                    data-code={sg?.code}
                  />
                  {endLike && sg && !sg.pts.length ? (
                    <circle className={styles.peakMark} cx={SG.x} cy={SG.y} r={1.35} />
                  ) : null}
                  <text className={styles.sgLabel} x={SG.x + 8.4} y={SG.y + 3.6}>
                    SG
                  </text>
                </svg>

                <div className={styles.europe}>
                  <span className={styles.europeLabel} aria-hidden="true">
                    {t.europe}
                  </span>
                  <svg className={styles.europeSvg} viewBox={EUROPE} role="img" aria-label={`${t.europe} — ${fillIn(t.mapAria, { readout })}`}>
                    {drawUses("e")}
                    {drawMarks(0.72)}
                  </svg>
                </div>

                {card ? (
                  <div className={styles.card} role="group" aria-label={card.name}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardFlag} aria-hidden="true">
                        {card.flag}
                      </span>
                      <span className={styles.cardName}>{card.name}</span>
                    </div>
                    <div className={styles.cardBody}>{card.body}</div>
                    <div className={styles.cardPosRow}>
                      <span className={styles.cardPos}>{card.pos}</span>
                      <span className={styles.cardStatus}>{card.status}</span>
                    </div>
                    {card.label ? <div className={styles.cardLabel}>{card.label}</div> : null}
                    {card.source ? <div className={styles.cardSource}>{card.source}</div> : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.rankCol} ref={rankRef}>
              {groups.map((g) => (
                <div key={g.band} className={styles.group}>
                  <div className={styles.groupHead}>
                    <span className={`${styles.swatchSm} ${styles[g.band]}`} aria-hidden="true" />
                    <span className={styles.groupLabel}>{g.label}</span>
                    <span className={styles.groupCount}>{g.items.length}</span>
                  </div>
                  <ul className={styles.chips}>
                    {g.items.map((it) => (
                      <li key={it.run.code}>
                        {phone ? (
                          <span
                            className={`${styles.chip} ${styles.chipLabel} ${it.run.code === cardCode ? styles.chipOn : ""}`}
                            data-chip-label={it.run.code}
                          >
                            <span aria-hidden="true">{it.run.flag}</span>
                            <span aria-hidden="true">{it.run.code}</span>
                            {it.cue ? (
                              <span className={styles.chipCue} aria-hidden="true">
                                {it.cue}
                              </span>
                            ) : null}
                            <span className="visuallyHidden">{it.say}</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            className={`${styles.chip} ${it.run.code === cardCode ? styles.chipOn : ""}`}
                            aria-label={it.say}
                            aria-pressed={it.run.code === pinned}
                            data-chip={it.run.code}
                            tabIndex={it.run.code === tabChip ? 0 : -1}
                            onKeyDown={(e) => onChipKey(e, it.run.code)}
                            onClick={() => pick(it.run.code)}
                            onFocus={() => {
                              if (mode !== "playing" && mode !== "scrubbing") setPinned(it.run.code);
                            }}
                          >
                            <span aria-hidden="true">{it.run.flag}</span>
                            <span>{it.run.code}</span>
                            {it.cue ? <span className={styles.chipCue}>{it.cue}</span> : null}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className={styles.tray}>
                <div className={styles.trayHead}>
                  <span className={`${styles.swatchSm} ${styles.unread}`} aria-hidden="true" />
                  <span className={styles.trayLabel}>{endLike ? t.trayNotRecorded : t.trayUnread}</span>
                  <span className={styles.trayCount}>{endLike ? peakOnly : stats.unread.length}</span>
                </div>
                {!endLike && stats.unread.length ? (
                  <ul className={styles.trayList}>
                    {stats.unread.map((c) => (
                      <li key={c.code} data-code={c.code}>
                        <span aria-hidden="true">{c.flag}</span> {c.code}
                        <span className="visuallyHidden"> ({c.name})</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {!endLike && stats.noChart.length ? (
                  <p className={styles.trayNote}>
                    {fillIn(t.trayNoChart, { list: stats.noChart.map((c) => `${c.flag} ${c.code}`).join(", ") })}
                  </p>
                ) : null}
                <p className={styles.trayNote}>
                  {endLike
                    ? fillIn(t.trayEnd, { k: peakOnly, ones: stats.n1, total })
                    : fillIn(t.trayPeakOnly, { k: peakOnly })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.transport}>
            <div className={styles.controls}>
              <button type="button" className={styles.playBtn} aria-label={playLabel} onClick={toggle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d={
                      mode === "playing"
                        ? "M6 5h4v14H6zM14 5h4v14h-4z"
                        : mode === "end"
                          ? "M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"
                          : "M7 4v16l13-8z"
                    }
                  />
                </svg>
              </button>
              <button type="button" className={styles.stepBtn} aria-label={t.prev} onClick={back}>
                <span aria-hidden="true">‹</span>
              </button>
              <button type="button" className={styles.stepBtn} aria-label={t.next} onClick={fwd}>
                <span aria-hidden="true">›</span>
              </button>
              <div
                ref={track}
                role="slider"
                tabIndex={0}
                aria-label={t.slider}
                aria-valuemin={0}
                aria-valuemax={last}
                aria-valuenow={endLike ? last : frame}
                aria-valuetext={valuetext}
                className={styles.slider}
                onKeyDown={onSliderKey}
                onPointerDown={onScrubStart}
                onPointerMove={onScrubMove}
                onPointerUp={onScrubEnd}
                onPointerCancel={onScrubEnd}
              >
                <span className={styles.rail} aria-hidden="true" />
                <span className={styles.progress} style={{ width: `${endLike ? 100 : (frame / last) * 100}%` }} aria-hidden="true" />
                <span className={styles.ticks} aria-hidden="true">
                  {data.frames.map((f, i) => {
                    const cur = !endLike && i === frame;
                    const mark = i === data.releaseFrame || i === data.halftimeFrame;
                    const past = endLike || i <= frame;
                    return (
                      <span
                        key={f}
                        title={f}
                        className={`${styles.tick} ${cur ? styles.tickCur : mark ? styles.tickMark : ""} ${past ? styles.tickPast : ""}`}
                      />
                    );
                  })}
                </span>
              </div>
            </div>
            <div className={styles.marks} aria-hidden="true">
              <span>
                ▲ {data.releaseShort} · {t.release}
              </span>
              <span>
                ▲ {data.halftimeShort} · {t.halftime}
              </span>
              <span>{data.lastShort}</span>
            </div>
          </div>

          <ul className={styles.legend}>
            {legend.map((l) => (
              <li key={l.label}>
                <span className={`${styles.swatch} ${styles[l.cls]}`} aria-hidden="true" />
                {l.label}
              </li>
            ))}
          </ul>
          <p className={styles.foot}>{fillIn(t.footnote, { k: peakOnly, total })}</p>
        </div>
      )}

      <div className="visuallyHidden" aria-live="polite" aria-atomic="true">
        {mode === "paused" ? announce : ""}
      </div>
    </div>
  );
}
