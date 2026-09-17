import { apiJson } from "../../../lib/api";
import { chartsEnvelope } from "../../../lib/chartsPayload";

export const dynamic = "force-static";

// The payload is built in app/lib/chartsPayload.ts so the docs page can print
// a slice of the real envelope rather than a hand-written copy of it.
export function GET() {
  return apiJson(chartsEnvelope());
}
