"use client";

import dynamic from "next/dynamic";

// GlobeCanvas statically imports d3-geo, topojson-client and the world-atlas
// TopoJSON — a 141,907-byte chunk, ~95% of the homepage's route-specific JS,
// of which 107KB is inlined map geometry. Because every page's nav links to /,
// that chunk rode along on prefetch site-wide, for one ornamental widget.
//
// This wrapper exists because GlobeTeaser is a server component and Next only
// allows ssr:false dynamic imports from client components. The globe draws
// nothing until its own effect runs anyway, so skipping SSR changes no pixels:
// the canvas element simply arrives with the lazy chunk instead of the route.
const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), { ssr: false });

export default function GlobeCanvasLazy({ className }: { className?: string }) {
  return <GlobeCanvas className={className} />;
}
