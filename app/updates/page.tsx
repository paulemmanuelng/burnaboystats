import UpdatesList from "../components/UpdatesList";
import KeepExploring from "../components/KeepExploring";
import { updates } from "../data/updates";
import { pageMetadata } from "../lib/seo";

const baseMetadata = pageMetadata({
  title: "Latest Updates — Burna Boy Stats",
  description:
    "Every recent update to Burna Boy Stats — new chart peaks, certifications, streaming milestones and records, tracked as they happen.",
  path: "/updates",
  shareTitle: "Burna Boy Stats — Latest Updates",
  shareDescription: "What's new on the site, tracked as it happens.",
});

// Advertise the RSS feed so readers auto-discover it.
export const metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function UpdatesPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Latest <span className="accent">Updates</span>
        </h1>
        <p>Everything new on the site — chart peaks, certifications and records, as they&apos;re added</p>
      </header>

      <div className="container">
        <UpdatesList items={updates} />
      </div>

      <KeepExploring current="/updates" />
    </main>
  );
}
