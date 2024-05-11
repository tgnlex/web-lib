const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};

self.addEventListener("activate", (event) => {
  const cacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheNamesSet.has(cacheName)) {
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event from:", event.request.url);
  event.respondWith(
    caches.open(CURRENT_CACHES.font).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            console.log(" Found response in cache:", response);
            return response;
          }
          console.log(
            ' No response for %s found in cache. Fetching ' +
              'from network…',
            event.request.url,
          );
          return fetch(event.request.clone()).then((response) => {
            console.log(
              " Response for %s from network is: %O",
              event.request.url,
              response,
            );
            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/^font\//i)
            ) {
              console.log("  Caching response to", event.request.url);
              cache.put(event.request, response.clone());
            } else {
              console.log(" Failed to cache the response to", event.request.url);
            }
            return response;
          });
        })
        .catch((error) => {
          console.error("  Error in fetch handler:", error);
          throw error;
        });
    }),
  );
});
