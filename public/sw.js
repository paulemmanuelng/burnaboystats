// Minimal service worker — its ONLY job is to make the site installable
// ("Add to Home Screen"), which Chrome gates behind having a fetch handler.
//
// It deliberately does NOT cache anything. The site's figures (listeners, video
// views, chart peaks) are refreshed hourly by the stats bot, so a cache would
// happily serve stale numbers — the one thing a stats site must never do.
// Every request passes straight through to the network.

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  // Clean up any caches a previous version of this worker may have left.
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Pass-through. Present so the app is installable; intentionally no caching.
self.addEventListener("fetch", () => {});
