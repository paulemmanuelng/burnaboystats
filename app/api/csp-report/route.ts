// POST /api/csp-report → where browsers send Content-Security-Policy reports.
//
// The policy in next.config.mjs is report-only, which is only worth anything if
// the reports arrive somewhere. Each one is written to the function log (the
// Vercel logs for the deployment) and answered 204. Nothing is stored.
//
// Two formats arrive: the legacy report-uri body (application/csp-report,
// {"csp-report": {…}}) and the Reporting API's (application/reports+json, an
// array). Both are logged as the text they came in; a report is small, so the
// cap only stops a stray or hostile POST from filling the log.
const MAX_LOGGED = 4000;

export async function POST(req: Request) {
  const text = (await req.text()).slice(0, MAX_LOGGED).replace(/\s+/g, " ");
  if (text) console.log(`[csp-report] ${text}`);
  return new Response(null, { status: 204 });
}
