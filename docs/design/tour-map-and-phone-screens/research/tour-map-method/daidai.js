(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const R = (b) => [Math.round(b.x * 10) / 10, Math.round(b.y * 10) / 10, Math.round(b.width * 10) / 10, Math.round(b.height * 10) / 10];
  const measure = async (doc, win) => {
  const box = doc.querySelector('[class*="mapBox"]');
  box.scrollIntoView({ block: "center", behavior: "instant" });
  await wait(1500);
  const out = { inner: [win.innerWidth, win.innerHeight] };
  const euSvg = box.querySelector('svg[class*="europeSvg"]');
  const eu = euSvg.parentElement;
  const world = box.querySelector('svg[class*="world"]');
  const er = eu.getBoundingClientRect(), wr = world.getBoundingClientRect(), br = box.getBoundingClientRect();
  out.mapBox = R(br); out.europe = R(er); out.world = R(wr);
  out.europeRel = { left: +(er.left - br.left).toFixed(1), bottom: +(br.bottom - er.bottom).toFixed(1), w: +er.width.toFixed(1), h: +er.height.toFixed(1) };
  out.replay = R(doc.querySelector('[class*="DaiDaiReplay"][data-mode]')?.getBoundingClientRect?.() ?? br);
  const hidden = [];
  for (const u of world.querySelectorAll("use[data-code]")) {
    const b = u.getBoundingClientRect();
    if (!b.width) continue;
    const ix = Math.max(0, Math.min(b.right, er.right) - Math.max(b.left, er.left));
    const iy = Math.max(0, Math.min(b.bottom, er.bottom) - Math.max(b.top, er.top));
    const f = (ix * iy) / (b.width * b.height);
    if (f > 0) {
      // is the centre of the country under the box?
      const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
      const centreUnder = cx > er.left && cx < er.right && cy > er.top && cy < er.bottom;
      const band = [...u.classList].map((c) => c.split("__").pop()).filter((c) => !["shape", "charted"].includes(c)).join(" ");
      hidden.push({ code: u.getAttribute("data-code"), band, bboxUnderBox: +f.toFixed(2), centreUnder, bbox: R(b) });
    }
  }
  out.underInset = hidden.sort((a, b) => b.bboxUnderBox - a.bboxUnderBox);
  out.chartedOnWorld = world.querySelectorAll("use[data-code]").length;
  // the lead figures
  const leads = [...doc.querySelectorAll('ul[class*="leads"] > li')];
  out.leads = leads.map((li, i) => {
    const cs = win.getComputedStyle(li); const r = li.getBoundingClientRect(); const v = li.firstElementChild.getBoundingClientRect();
    const range = doc.createRange(); range.selectNodeContents(li.firstElementChild); const tr = range.getBoundingClientRect();
    return { i, cell: R(r), padding: cs.padding, valueTextLeftMinusCellLeft: +(tr.left - r.left).toFixed(1), valueRightToCellRight: +(r.right - tr.right).toFixed(1), text: li.innerText.replace(/\n+/g, " | ").slice(0, 120) };
  });
    return out;
  };
  const top = await measure(document, window);
  // the same page in a 1024 x 768 same-origin frame: its media queries read the frame's width
  const f = document.createElement("iframe");
  f.style.cssText = "position:absolute;left:0;top:0;width:1024px;height:768px;border:0;visibility:hidden";
  f.src = location.href;
  document.body.appendChild(f);
  await new Promise((r) => { f.onload = r; setTimeout(r, 20000); });
  await wait(2500);
  let w1024;
  try { w1024 = await measure(f.contentDocument, f.contentWindow); } catch (e) { w1024 = String(e); }
  f.remove();
  document.querySelector('[class*="mapBox"]').scrollIntoView({ block: "center", behavior: "instant" });
  await wait(400);
  return { w1440: top, w1024 };
})()
