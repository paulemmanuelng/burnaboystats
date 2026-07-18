import StatCardMaker from "../components/StatCardMaker";
import KeepExploring from "../components/KeepExploring";
import { getStatCards } from "../lib/statCards";
import { pageMetadata, CANONICAL_ORIGIN } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Make a Burna Boy Stat Card — Download & Share the Numbers",
  description:
    "Pick a Burna Boy record — certifications, No. 1s, the record tour, Spotify listeners — and download a clean 1080×1080 card to share on Instagram, X and WhatsApp.",
  path: "/share",
  shareTitle: "Burna Boy Stat Cards",
  shareDescription:
    "Pick a record and download a shareable Burna Boy stat card.",
});

// Receiptify-style downloadable artifact. Cards are computed on the server (they
// pull the big data modules); only lightweight {id, chip} choices go to the
// client, which previews each via the /stat-card image route.
export default function SharePage() {
  const choices = getStatCards().map((c) => ({ id: c.id, chip: c.chip }));

  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Stat <span className="accent">cards</span>
        </h1>
        <p>
          Pick a Burna Boy record and download a card built for sharing — the
          numbers, the African Giant, one tap away.
        </p>
      </header>

      <div className="container">
        <StatCardMaker cards={choices} shareUrl={`${CANONICAL_ORIGIN}/share`} />
      </div>

      <KeepExploring current="/share" />
    </main>
  );
}
