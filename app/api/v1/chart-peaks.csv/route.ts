import { csvResponse } from "../../../lib/dataDownloads";

// Prerendered at build time, like every /api/v1 route: the file changes when
// the data does, and the data changes only on a deploy. The rows, headers and
// quoting live in app/lib/dataDownloads.ts — a route file may export nothing
// but its handlers and config.
export const dynamic = "force-static";

export function GET() {
  return csvResponse("chart-peaks");
}
