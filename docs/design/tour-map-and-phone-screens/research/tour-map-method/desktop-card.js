(async () => {
  // Card placement at 1440 x 900. A synthetic click opens the card (the
  // component's own onClick); any scroll closes it (its scroll listener).
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const vis = (el) => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
  const R = (b) => [Math.round(b.x * 10) / 10, Math.round(b.y * 10) / 10, Math.round(b.width * 10) / 10, Math.round(b.height * 10) / 10];
  const go = async (y) => { window.scrollTo({ top: y, behavior: "instant" }); await wait(90); };
  const header = document.querySelector("header.navbar");
  const svg = [...document.querySelectorAll('svg[aria-label^="World map highlighting"]')].find(vis);
  const els = [...svg.querySelectorAll("[data-code]")];
  const nm = (el) => el.getAttribute("aria-label").split(":")[0];
  const open = async (el) => { el.dispatchEvent(new MouseEvent("click", { bubbles: true })); await wait(70); return [...document.querySelectorAll('[role="status"]')].find(vis); };
  const out = { header: R(header.getBoundingClientRect()), cardH: {}, overlap: {} };
  for (const el of els) {
    const top = el.getBoundingClientRect().top + scrollY;
    await go(Math.max(0, top - 450));
    const card = await open(el);
    out.cardH[nm(el)] = card ? Math.round(card.getBoundingClientRect().height) : null;
  }
  // UK only: its top edge at several distances from the window top; does the
  // card's top edge land above the masthead's bottom?
  const hb = header.getBoundingClientRect().bottom;
  const ukEl = els.find((e) => nm(e) === "United Kingdom");
  const ukPage = ukEl.getBoundingClientRect().top + scrollY;
  out.ukSweep = [];
  for (const t of [150, 170, 174, 176, 180, 200, 220, 240, 250, 260, 280]) {
    await go(ukPage - t);
    const card = await open(ukEl);
    const cb = card ? card.getBoundingClientRect() : null;
    out.ukSweep.push({ ukTop: Math.round(ukEl.getBoundingClientRect().top), cardTop: cb ? Math.round(cb.top) : null, cardBottom: cb ? Math.round(cb.bottom) : null, overMasthead: cb ? cb.top < hb : null });
  }
  // the reproduction, left open for the screenshot: UK's top edge at 180 px
  const uk = els.find((e) => nm(e) === "United Kingdom");
  await go(uk.getBoundingClientRect().top + scrollY - 180);
  const card = await open(uk);
  out.ukRepro = { scrollY, ukTop: Math.round(uk.getBoundingClientRect().top), card: card ? R(card.getBoundingClientRect()) : null, header: R(header.getBoundingClientRect()), cardText: card ? card.innerText : null };
  return out;
})()
