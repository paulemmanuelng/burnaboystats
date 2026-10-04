// measure-phone.js — the phone measurements in pages.md §E.
//
// One JS expression, run in a live page by the repo's own headless-Chrome
// harness at 320, 360 and 390 px wide (phone emulation, the page's own fonts):
//
//   node scripts/mobile-shot.mjs --url https://burnaboystats.com/records/tours/revenue \
//     --width 320 --eval "$(cat docs/design/box-office-by-country/research/measure-phone.js)"
//
// (on this 8 GB Mac, wrap it in ~/.local/bin/heavy). It reads only; it changes
// nothing on the site. Where a screen is not live yet (the countries page, PR
// #405; the certifications switch row, PR #404) it SIMULATES: it clones the
// live screen's own elements (same CSS-module classes, same tokens), puts the
// PR's own strings in them, measures, and removes the clones.
//
// Lines are counted from the text's own line boxes (Range.getClientRects,
// grouped by top), not from height ÷ line-height.
(async () => {
  await (document.fonts ? document.fonts.ready : Promise.resolve());
  const W = innerWidth;
  // CSS-module classes are hashed differently by build tool ("mobileRevenue_row__aB3d"
  // or "mobileRevenue-module__aB3d__row"); match the module's own name as one
  // "_"-separated part of a class, so "row" never matches "runRow" or "rowOther".
  const has = (el, name) => [...(el.classList || [])].some((t) => t.split(/_+/).includes(name));
  const $ = (s, root = document) => {
    const m = /^\[class\*=(\w+)\]$/.exec(s);
    if (!m) return root.querySelector(s);
    return [...root.querySelectorAll("[class]")].find((el) => has(el, m[1])) || null;
  };
  const $$ = (s, root = document) => {
    const m = /^\[class\*=(\w+)\]$/.exec(s);
    if (!m) return [...root.querySelectorAll(s)];
    return [...root.querySelectorAll("[class]")].filter((el) => has(el, m[1]));
  };
  const visible = (el) => el && el.getClientRects().length > 0 && getComputedStyle(el).display !== "none";
  const lines = (el) => {
    if (!el) return null;
    const r = document.createRange();
    r.selectNodeContents(el);
    const fs = parseFloat(getComputedStyle(el).fontSize) || 12;
    const tops = [];
    for (const b of r.getClientRects()) {
      if (b.width < 1 || b.height < 1) continue;
      if (!tops.some((t) => Math.abs(t - b.top) < fs * 0.6)) tops.push(b.top);
    }
    return tops.length;
  };
  const h = (el) => (el ? Math.round(el.getBoundingClientRect().height) : null);
  const w = (el) => (el ? Math.round(el.getBoundingClientRect().width) : null);
  const clipped = (el) => el.scrollWidth > el.clientWidth + 1;
  const out = { width: W, path: location.pathname };

  // Measure `text` inside a clone of `el` (placed right after it), then remove it.
  const tryText = (el, text, style = {}) => {
    if (!el) return null;
    const c = el.cloneNode(true);
    c.removeAttribute("id");
    Object.assign(c.style, style);
    c.textContent = text;
    el.after(c);
    const res = { lines: lines(c), height: h(c), width: w(c), clipped: clipped(c) };
    c.remove();
    return res;
  };
  // Clone a whole back bar, set its label/badge, report label lines and bar height.
  const tryBar = (bar, label, badge, { nowrap = false, tightBelow360 = false } = {}) => {
    if (!bar) return null;
    const c = bar.cloneNode(true);
    const L = $("[class*=backLabel]", c);
    const B = $("[class*=badge]", c) || $("[class*=count]", c);
    if (L) L.textContent = label;
    if (B && badge != null) B.textContent = badge;
    if (nowrap && L) Object.assign(L.style, { whiteSpace: "nowrap", flex: "none" });
    if (tightBelow360 && W < 360) {
      c.style.gap = "8px";
      if (B) B.style.letterSpacing = "0.04em";
    }
    c.style.position = "relative";
    bar.after(c);
    const res = { label, badge, labelLines: lines(L), labelClipped: L ? clipped(L) : null, barHeight: h(c), labelWidth: w(L), overflowX: c.scrollWidth > c.clientWidth + 1 };
    c.remove();
    return res;
  };

  // ── /records/tours/revenue (and the countries page, simulated from it) ────
  if (location.pathname.startsWith("/records/tours/revenue")) {
    const scr = $$("[class*=screen]").find(visible);
    const bar = $("[class*=backBar]", scr);
    const label = $("[class*=backLabel]", bar);
    const badge = $("[class*=badge]", bar);
    const kicker = $("[class*=kicker]", scr);
    const h1 = $("h1", scr);
    const lede = $("[class*=lede]", scr);
    const foot = $("[class*=foot]", scr);
    const runsLede = $("[class*=runsLede]", scr);
    const rows = $$("[class*=row]", scr).filter((r) => $("[class*=meta]", r));
    const metas = rows.map((r) => $("[class*=meta]", r));
    out.revenue = {
      bar: { label: label?.textContent, badge: badge?.textContent, labelLines: lines(label), barHeight: h(bar) },
      kicker: { text: kicker?.textContent, lines: lines(kicker) },
      h1: { text: h1?.textContent, lines: lines(h1), height: h(h1) },
      lede: { text: lede?.textContent, lines: lines(lede), height: h(lede) },
      foot: { chars: foot?.textContent.length, lines: lines(foot), height: h(foot) },
      runsLede: { chars: runsLede?.textContent.length, lines: lines(runsLede) },
      boardRows: rows.length,
      metaTruncated: metas.filter(clipped).length,
      metaTruncatedHis: rows.filter((r, i) => clipped(metas[i]) && !has(r, "rowOther")).length,
      metaTruncatedExamples: rows.filter((r, i) => clipped(metas[i])).slice(0, 3).map((r) => $("[class*=meta]", r).textContent),
      renamedBar: tryBar(bar, "Highest-grossing shows", badge?.textContent),
      renamedBarNowrap: tryBar(bar, "Highest-grossing shows", badge?.textContent, { nowrap: true }),
      renamedH1: tryText(h1, "Highest-grossing shows"),
      // Countries page (#405), simulated with the board screen's own classes.
      countries: (() => {
        const METHOD_NOTE = "What counts: per-show box-office grosses as reported by Billboard Boxscore & Pollstar (as aggregated by TouringData) and cross-checked against press reporting — the rows of the revenue board. An artist's total in a country is every reported gross there added up, including multi-night runs reported as one figure, and a run counts every night it played; the best night is a single show only. Reporting is incomplete, so an artist missing from a country means not reported, not that they did not play there — and Boxscore and Pollstar rarely publish grosses from venues in Africa, which is why the continent has no reported box office here yet.";
        const LEDE = "Every reported box-office gross by an African artist, added up country by country — 82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4 continents. Burna Boy leads 9 of the 12.";
        const wrap = { whiteSpace: "normal", overflow: "visible", textOverflow: "clip", lineHeight: "1.45" };
        const tryRow = (artist, meta, gross, sub, { noRank = false } = {}) => {
          const r0 = rows[0];
          if (!r0) return null;
          const c = r0.cloneNode(true);
          if (noRank) { c.style.gridTemplateColumns = "1fr auto"; $("[class*=rank]", c)?.remove(); }
          $("[class*=venue]", c).textContent = artist;
          const m = $("[class*=meta]", c);
          m.textContent = meta;
          Object.assign(m.style, wrap);
          const g = $("[class*=gross]", c); if (g) g.textContent = gross;
          const t = $("[class*=tickets]", c); if (t) t.textContent = sub;
          r0.after(c);
          const res = { chars: meta.length, lines: lines(m), rowHeight: h(c) };
          c.remove();
          return res;
        };
        const lead = (text) => {
          const d = document.createElement("div");
          Object.assign(d.style, { fontFamily: "var(--font-geist-sans), system-ui, sans-serif", fontSize: "var(--type-caption)", padding: "0 18px", fontVariantNumeric: "tabular-nums" });
          d.textContent = text;
          scr.append(d);
          const res = { chars: text.length, lines: lines(d) };
          d.remove();
          return res;
        };
        return {
          bar: tryBar(bar, "By country", "12 countries", { nowrap: true, tightBelow360: true }),
          barIfLabelWrapped: tryBar(bar, "By country", "12 countries"),
          barRenamedAlt: tryBar(bar, "Highest-grossing artists by country", "12 countries", { nowrap: false }),
          h1: tryText(h1, "Highest-grossing artists by country"),
          lede: { chars: LEDE.length, ...tryText(lede, LEDE) },
          foot: { chars: METHOD_NOTE.length, ...tryText(foot, METHOD_NOTE) },
          longestMeta: tryRow("Burna Boy", "Best night $0.53M · Rogers Arena, Vancouver (2023). Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal", "$5.68M", "6 nights"),
          runsOnlyMeta: tryRow("Wizkid", "3 nights reported together · The O2 Arena, London (28–29 November and 1 December 2021)", "$2.88M", "3 nights"),
          typicalMeta: tryRow("Burna Boy", "Best night $1.72M · Capital One Arena, Washington, D.C. (2024)", "$15.50M", "16 nights"),
          longVenueMeta: tryRow("Rema", "Best night $0.25M · Mitsubishi Electric Halle, Düsseldorf (2024)", "$0.25M", "1 night"),
          continentRow: tryRow("North America", "Burna Boy leads · $21.18M of $34.31M · next Asake, $4.28M", "$34.31M", "2 countries", { noRank: true }),
          africaRow: tryRow("Africa · No reported box office yet", "Box-office reporting barely reaches venues in Africa — not reported, not unplayed.", "", "", { noRank: true }),
          leaderLine: lead("Burna Boy leads · $15.50M of $26.92M · 48 nights reported"),
          leaderLineOnly: lead("Burna Boy · the only artist reported · $0.82M · 1 night"),
        };
      })(),
    };
  }

  // ── /certifications and /afrobeats/<artist> (MobileCerts) ─────────────────
  if (location.pathname.startsWith("/certifications") || location.pathname.startsWith("/afrobeats/")) {
    const scr = $$("[class*=screen]").find(visible) || document.body;
    const bar = $("[class*=backBar]", scr);
    const label = $("[class*=backLabel]", bar);
    const kicker = $("[class*=kicker]", scr);
    const lede = $$("[class*=lede]", scr).find(visible);
    const h1 = $("h1", scr);
    out.certs = {
      bar: { label: label?.textContent, labelLines: lines(label), labelClipped: label ? clipped(label) : null, barHeight: h(bar), right: bar ? [...bar.children].map((c) => c.textContent.trim()).filter(Boolean).slice(1).join(" | ") : null },
      kicker: { text: kicker?.textContent, lines: lines(kicker), width: w(kicker) },
      h1: { text: h1?.textContent.replace(/\s+/g, " ").trim(), lines: lines(h1), height: h(h1) },
      lede: { chars: lede?.textContent.length, text: lede?.textContent, lines: lines(lede), height: h(lede) },
      // #404's kicker forms, measured as inline text in the live kicker's style.
      kickers: ["Certified worldwide", "Outside Nigeria", "Worldwide · Lead credits", "Outside Nigeria · Lead credits", "Outside South Africa · Lead credits"].map((t) => {
        if (!kicker) return null;
        const c = kicker.cloneNode(true);
        c.textContent = t;
        Object.assign(c.style, { display: "inline-block", whiteSpace: "nowrap" });
        kicker.after(c);
        const res = { text: t, width: w(c), box: w(kicker.parentElement) - (parseFloat(getComputedStyle(kicker.parentElement).paddingLeft) + parseFloat(getComputedStyle(kicker.parentElement).paddingRight)) };
        c.remove();
        return res;
      }),
      // #404's switch row, simulated: compare's toggle CSS (certSwitches.module.css),
      // inlined, in the phone row's spacing (.viewRow: padding 2px 18px 6px).
      switchRow: (() => {
        if (!h1) return null;
        const home = location.pathname.includes("tyla") ? "South Africa" : "Nigeria";
        const css = `.sim-controls{display:flex;flex-wrap:wrap;align-items:center;gap:10px 26px;font-family:var(--font-mono),monospace;font-size:var(--type-label);letter-spacing:.06em;text-transform:uppercase;padding:2px 18px 6px}
.sim-control{display:inline-flex;flex-wrap:wrap;align-items:center;gap:10px;min-height:44px}
.sim-name{color:var(--text-muted);font-weight:700}
.sim-switch{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:0 4px 0 0;font:inherit;letter-spacing:inherit;text-transform:inherit;border:0;background:transparent;color:var(--text)}
.sim-dot{width:30px;height:16px;flex:0 0 30px;border-radius:999px;background:var(--gold)}`;
        const st = document.createElement("style");
        st.textContent = css;
        document.head.append(st);
        const row = (featState, homeState) => {
          const d = document.createElement("div");
          d.className = "sim-controls";
          d.innerHTML = `<span class="sim-control"><span class="sim-name">${W > 760 ? "Featured appearances" : "Features"}</span><button class="sim-switch"><span class="sim-dot"></span><span class="sim-state">${featState}</span></button></span><span class="sim-control"><span class="sim-name">${home}</span><button class="sim-switch"><span class="sim-dot"></span><span class="sim-state">${homeState}</span></button></span>`;
          scr.append(d);
          const ctl = $$(".sim-control", d);
          const res = {
            states: `${featState} / ${homeState}`,
            height: h(d),
            controlsOnOneLine: ctl.length === 2 && Math.abs(ctl[0].getBoundingClientRect().top - ctl[1].getBoundingClientRect().top) < 4,
            stateUnderItsName: ctl.map((c) => $(".sim-switch", c).getBoundingClientRect().top - $(".sim-name", c).getBoundingClientRect().top > 10),
          };
          d.remove();
          return res;
        };
        const res = [row("on · every plaque held", "included"), row("off · lead credits only", "left out")];
        st.remove();
        return res;
      })(),
    };
  }
  return out;
})()
