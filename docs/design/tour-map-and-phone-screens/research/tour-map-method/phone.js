(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const vis = (el) => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
  const R = (b) => [Math.round(b.x * 10) / 10, Math.round(b.y * 10) / 10, Math.round(b.width * 10) / 10, Math.round(b.height * 10) / 10];
  const svg = [...document.querySelectorAll('svg[aria-label^="World map highlighting"]')].find(vis);
  const vp = svg.parentElement;
  const out = { svg: R(svg.getBoundingClientRect()), viewport: R(vp.getBoundingClientRect()) };
  const els = [...svg.querySelectorAll("[data-code]")];
  const nm = (el) => el.getAttribute("aria-label").split(":")[0];
  out.domOrder = els.map(nm);
  const rows = els.map((el) => { const b = el.getBoundingClientRect(); return [nm(el), +b.width.toFixed(1), +b.height.toFixed(1), el.tagName]; });
  out.rows = rows;
  out.underOneSide12 = rows.filter((r) => Math.min(r[1], r[2]) < 12).length;
  out.underBoth12 = rows.filter((r) => Math.max(r[1], r[2]) < 12).length;
  out.zoomBtns = [...document.querySelectorAll('button[aria-label="Zoom in"],button[aria-label="Zoom out"]')].filter(vis).map((b) => R(b.getBoundingClientRect()));
  // near-miss taps: what sits 4px off each small place's centre
  const test = ["Barbados", "Saint Lucia", "Dominica", "St Kitts & Nevis", "Antigua & Barbuda", "Curaçao", "Kosovo", "Mauritius", "Belgium", "Netherlands", "Switzerland", "Jamaica", "Trinidad & Tobago", "Denmark"];
  const label = (t) => (t ? (t.getAttribute && t.getAttribute("aria-label") ? t.getAttribute("aria-label").split(":")[0] : t.tagName.toLowerCase() + (t.getAttribute && t.getAttribute("data-code") === null && t.tagName === "path" ? "(unplayed)" : "")) : null);
  out.nearMiss = test.map((n) => {
    const el = els.find((e) => nm(e) === n);
    const b = el.getBoundingClientRect();
    const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
    const o = {};
    for (const [dx, dy, k] of [[0, 0, "centre"], [4, 0, "right4"], [-4, 0, "left4"], [0, 4, "down4"], [0, -4, "up4"]]) o[k] = label(document.elementFromPoint(cx + dx, cy + dy));
    return [n, o];
  });
  // visible strings of the phone screen
  out.mainText = document.querySelector("main").innerText;
  // zoom 3 steps (to 2.5x): where does the view sit, how big are small places
  const zin = [...document.querySelectorAll('button[aria-label="Zoom in"]')].find(vis);
  const zout = [...document.querySelectorAll('button[aria-label="Zoom out"]')].find(vis);
  for (let i = 0; i < 3; i++) { zin.click(); await wait(250); }
  const vb = vp.getBoundingClientRect();
  const at = (n) => { const b = els.find((e) => nm(e) === n).getBoundingClientRect(); return { size: [+b.width.toFixed(1), +b.height.toFixed(1)], inView: b.right > vb.left && b.left < vb.right && b.bottom > vb.top && b.top < vb.bottom }; };
  out.zoom25 = { scrollLeft: vp.scrollLeft, scrollTop: vp.scrollTop, scrollWidth: vp.scrollWidth, scrollHeight: vp.scrollHeight, clientWidth: vp.clientWidth, clientHeight: vp.clientHeight,
    Belgium: at("Belgium"), "Trinidad & Tobago": at("Trinidad & Tobago"), Barbados: at("Barbados"), "United Kingdom": at("United Kingdom"), Nigeria: at("Nigeria"), Brazil: at("Brazil") };
  // the view centre in map units
  const k = svg.getBoundingClientRect().width / 900;
  out.zoom25.centreMapUnits = [+((vp.scrollLeft + vp.clientWidth / 2) / k).toFixed(1), +((vp.scrollTop + vp.clientHeight / 2) / k).toFixed(1)];
  for (let i = 0; i < 3; i++) { zout.click(); await wait(250); }
  // open Nigeria's card by tap, then leave it open for the screenshot
  const ng = els.find((e) => nm(e) === "Nigeria");
  ng.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  await wait(300);
  const card = [...document.querySelectorAll('[role="status"]')].find((c) => c.textContent.includes("Nigeria"));
  out.cardNG = card ? { rect: R(card.getBoundingClientRect()), text: card.innerText } : null;
  const h1 = [...document.querySelectorAll("h1")].find(vis);
  out.h1 = R(h1.getBoundingClientRect());
  return out;
})()
