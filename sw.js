/*
  Sent service worker.
  Its only job is to let phones offer "Install app" / "Add to Home screen".
  It does not cache, store, or track anything: every request goes straight to the network.
*/
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
