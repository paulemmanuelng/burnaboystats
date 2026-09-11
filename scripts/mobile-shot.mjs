#!/usr/bin/env node
// Headless-Chrome CDP harness (no playwright). Node 24: global WebSocket + fetch.
//   node shot.mjs --url URL [--width 375] [--height 812] [--dpr 2] [--out file.png]
//                 [--full] [--theme light|dark] [--eval "js expr"] [--click "css"]...
//                 [--open-details] [--scroll N]
// Prints JSON: {url, width, height, scrollWidth, clientWidth, overflowX, evalResult}
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : d; };
const flag = (k) => argv.includes(`--${k}`);
const all = (k) => argv.flatMap((a, i) => (a === `--${k}` ? [argv[i + 1]] : []));

setTimeout(() => { console.error("harness timeout"); process.exit(3); }, 180000).unref();
const url = opt("url"); if (!url) { console.error("--url required"); process.exit(2); }
const width = +opt("width", 375), height = +opt("height", 812), dpr = +opt("dpr", 2);
const out = opt("out"); const full = flag("full"); const theme = opt("theme", "dark");
const evalExpr = opt("eval"); const clicks = all("click"); const scrollY = +opt("scroll", 0);

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9300 + Math.floor(Math.random() * 600);
const profile = mkdtempSync(join(tmpdir(), "cdp-"));
const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  "--no-first-run", "--no-default-browser-check", "--disable-gpu", "--hide-scrollbars",
  `--window-size=${width},${height}`, "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 60; i++) {
  try { const r = await fetch(`http://127.0.0.1:${port}/json/list`); const ts = await r.json(); target = ts.find((t) => t.type === "page"); if (target) break; } catch {}
  await sleep(150);
}
if (!target) { chrome.kill(); try { rmSync(profile, { recursive: true, force: true }); } catch {} console.error("chrome did not start"); process.exit(1); }

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pending = new Map(); const events = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } else if (d.method) events.push(d); };
const send = (method, params = {}, ms = 30000) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); setTimeout(() => { if (pending.has(i)) { pending.delete(i); r({ timeout: method }); } }, ms); });
const evaluate = async (expression) => { const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }); if (r.timeout) return "EVAL TIMEOUT"; if (r.result?.exceptionDetails) return "EVAL ERROR: " + (r.result.exceptionDetails.exception?.description ?? r.result.exceptionDetails.text); return r.result?.result?.value ?? r.result?.result?.description ?? null; };
const waitLoad = async () => { for (let i = 0; i < 100; i++) { if (events.some((e) => e.method === "Page.loadEventFired")) return; await sleep(100); } };

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: dpr, mobile: true, screenWidth: width, screenHeight: height });
await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
await send("Emulation.setUserAgentOverride", { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" });
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: theme }] });
await send("Page.navigate", { url });
await waitLoad();
await sleep(400);
// fonts + images
await evaluate("document.fonts ? document.fonts.ready.then(() => true) : true");
if (flag("open-details")) await evaluate("[...document.querySelectorAll('details')].forEach(d => d.open = true); true");
for (const sel of clicks) { await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(sel)}); if (!el) return 'MISSING ' + ${JSON.stringify(sel)}; el.click(); return 'clicked'; })()`); await sleep(250); }
if (scrollY) { await evaluate(`window.scrollTo(0, ${scrollY}); true`); await sleep(200); }

const metrics = await evaluate(`(() => ({
  scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth,
  scrollHeight: document.documentElement.scrollHeight, title: document.title,
}))()`);
const evalResult = evalExpr ? await evaluate(evalExpr) : undefined;

if (out) {
  if (full) {
    // Full page: grow the emulated viewport to the document height and take a
    // plain capture. captureBeyondViewport + clip hung headless=new for 90 s.
    const h = Math.min(metrics.scrollHeight, 16000);
    await send("Emulation.setDeviceMetricsOverride", { width, height: h, deviceScaleFactor: dpr, mobile: true, screenWidth: width, screenHeight: h });
    await sleep(300);
  }
  const shot = await send("Page.captureScreenshot", { format: "png" }, 90000);
  if (shot.result?.data) writeFileSync(out, Buffer.from(shot.result.data, "base64"));
  else console.error("screenshot failed:", JSON.stringify(shot).slice(0, 200));
}
console.log(JSON.stringify({ url, width, height, theme, ...metrics, overflowX: metrics.scrollWidth > metrics.clientWidth, evalResult, out: out ?? null }));
ws.close(); chrome.kill();
await new Promise((r) => { chrome.on("exit", r); setTimeout(r, 3000); });
try { rmSync(profile, { recursive: true, force: true }); } catch {}
