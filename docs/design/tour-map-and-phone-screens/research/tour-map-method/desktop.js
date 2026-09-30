(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const vis = (el) => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
  const R = (b, dy = 0) => [Math.round(b.x * 10) / 10, Math.round((b.y + dy) * 10) / 10, Math.round(b.width * 10) / 10, Math.round(b.height * 10) / 10];
  const go = async (y) => { window.scrollTo({ top: y, behavior: "instant" }); await wait(120); };
  await go(0);
  const out = { inner: [innerWidth, innerHeight] };
  const header = document.querySelector("header.navbar");
  out.header0 = R(header.getBoundingClientRect());
  out.headerPos = getComputedStyle(header).position;
  const svg = [...document.querySelectorAll('svg[aria-label^="World map highlighting"]')].find(vis);
  const vp = svg.parentElement, wrap = vp.parentElement, frame = wrap.parentElement;
  const Y = scrollY;
  out.page = {
    h1: R([...document.querySelectorAll("h1")].find(vis).getBoundingClientRect(), Y),
    frame: R(frame.getBoundingClientRect(), Y),
    svg: R(svg.getBoundingClientRect(), Y),
    viewport: R(vp.getBoundingClientRect(), Y),
    zoomBtns: [...wrap.querySelectorAll("button")].map((b) => R(b.getBoundingClientRect(), Y)),
    legend: frame.nextElementSibling ? { rect: R(frame.nextElementSibling.getBoundingClientRect(), Y), text: frame.nextElementSibling.innerText } : null,
  };
  const table = document.querySelector("main table");
  const ths = [...table.querySelectorAll("thead th")];
  out.table = {
    rect: R(table.getBoundingClientRect(), Y),
    th: ths.map((t) => ({ text: t.innerText, rect: R(t.getBoundingClientRect(), Y), align: getComputedStyle(t).textAlign })),
    firstNumTd: (() => { const td = table.querySelector("tbody td"); const r = document.createRange(); r.selectNodeContents(td); return { align: getComputedStyle(td).textAlign, textRect: R(r.getBoundingClientRect(), Y), cell: R(td.getBoundingClientRect(), Y) }; })(),
  };
  // flags that end one line while their name starts the next
  const split = [];
  for (const td of table.querySelectorAll("tbody td:last-child")) {
    const tn = td.firstChild; if (!tn || tn.nodeType !== 3) continue;
    const s = tn.textContent;
    for (const part of s.split("   ·   ")) {
      const i = s.indexOf(part); const sp = part.indexOf(" "); if (sp < 0) continue;
      const a = document.createRange(); a.setStart(tn, i); a.setEnd(tn, i + sp);
      const b = document.createRange(); b.setStart(tn, i + sp + 1); b.setEnd(tn, i + sp + 2);
      const ra = a.getClientRects(), rb = b.getClientRects();
      if (ra.length && rb.length && Math.abs(ra[0].top - rb[0].top) > 4) split.push(part);
      const c = document.createRange(); c.setStart(tn, i + sp + 1); c.setEnd(tn, i + part.length);
      if (c.getClientRects().length > 1) split.push(part + " (name itself wraps)");
    }
  }
  out.table.splitFlags = split;
  const pills = [...document.querySelectorAll("main a.btn")].filter(vis);
  out.pills = pills.map((p) => ({ text: p.innerText, rect: R(p.getBoundingClientRect(), Y) }));
  out.mainText = document.querySelector("main").innerText;
  // every performed shape: page-space box
  const els = [...svg.querySelectorAll("[data-code]")];
  const nm = (el) => el.getAttribute("aria-label").split(":")[0];
  out.countries = els.map((el) => { const b = el.getBoundingClientRect(); return [nm(el), Math.round(b.top + scrollY), +b.width.toFixed(1), +b.height.toFixed(1)]; });
  // card height per country (focused with its top at 450px, so the card sits above)
  const cardH = {};
  for (const el of els) {
    const top = el.getBoundingClientRect().top + scrollY;
    await go(Math.max(0, top - 450));
    el.focus({ preventScroll: true }); await wait(60);
    const card = [...document.querySelectorAll('[role="status"]')].find(vis);
    cardH[nm(el)] = card ? Math.round(card.getBoundingClientRect().height) : null;
    el.blur(); await wait(30);
  }
  out.cardH = cardH;
  // the reproduction: UK's top edge at 180px from the viewport top
  const uk = els.find((e) => nm(e) === "United Kingdom");
  const ukTop = uk.getBoundingClientRect().top + scrollY;
  await go(ukTop - 180);
  out.headerScrolled = R(header.getBoundingClientRect());
  uk.focus({ preventScroll: true }); await wait(120);
  const card = [...document.querySelectorAll('[role="status"]')].find(vis);
  out.ukRepro = { scrollY, ukTop: Math.round(uk.getBoundingClientRect().top), card: card ? R(card.getBoundingClientRect()) : null, header: R(header.getBoundingClientRect()), cardText: card ? card.innerText : null };
  // the same page in a 1024 x 768 same-origin frame (its media queries read the frame's width)
  const f = document.createElement("iframe");
  f.style.cssText = "position:absolute;left:0;top:0;width:1024px;height:768px;border:0;visibility:hidden";
  f.src = location.href;
  document.body.appendChild(f);
  await new Promise((r) => { f.onload = r; setTimeout(r, 20000); });
  await wait(2000);
  try {
    const fd = f.contentDocument;
    const fs = [...fd.querySelectorAll('svg[aria-label^="World map highlighting"]')].find((el) => el.getBoundingClientRect().width > 0);
    const fr = fs.parentElement.parentElement.parentElement;
    out.w1024 = { svg: R(fs.getBoundingClientRect()), frame: R(fr.getBoundingClientRect()), h1: R([...fd.querySelectorAll("h1")].find((el) => el.getBoundingClientRect().width > 0).getBoundingClientRect()), header: R(fd.querySelector("header.navbar").getBoundingClientRect()) };
  } catch (e) { out.w1024 = String(e); }
  f.remove();
  uk.focus({ preventScroll: true }); await wait(150);
  return out;
})()
