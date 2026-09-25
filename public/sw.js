// Minimal service worker. It caches nothing, and on activation it clears any
// cache an earlier version of this worker may have left.
//
// It has no fetch handler. An empty one used to sit here because Chrome once
// gated "Add to Home Screen" on having one. Current Chrome does not (checked
// 24 Sep 2026 with the site's own manifest: no installability errors with or
// without it), and the empty handler only made Chrome log that a no-op fetch
// handler may add overhead to navigation.
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
