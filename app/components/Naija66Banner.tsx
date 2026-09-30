import Naija66BannerLive from "./Naija66BannerLive";
import { CLOSES_MS, bannerPhase } from "../lib/naija66/clock";

/**
 * The home page's Naija @ 66 banner, from now until the hunt closes
 * (midnight WAT into 3 October 2026), in the layout asked for.
 *
 * Server-rendered as a box of fixed height in the phase the server saw, so it
 * is in the first paint and cannot shift anything when the visitor's clock
 * takes over. The home page revalidates hourly, so the server stops rendering
 * it within the hour after the close. For that last hour, the one-line script
 * runs before the strip is parsed and marks <html> when the visitor's clock is
 * already past the close; the stylesheet hides the strip under that mark, so a
 * cached page never paints a finished hunt.
 */
export default function Naija66Banner({ layout, now }: { layout: "desktop" | "phone"; now: Date }) {
  const phase = bannerPhase(now.getTime());
  if (phase === "over") return null;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(Date.now()>=${CLOSES_MS})document.documentElement.dataset.naija66="over"}catch(e){}`,
        }}
      />
      <Naija66BannerLive layout={layout} initialPhase={phase} />
    </>
  );
}
