const cacheName = "pwa-shell-v1.0"

const buildFiles = [
	"/",
	"index.html",
	"./script/*.js",
	"./styles/*.css",
	"./manifest.json",
	"./assets/*.svg",
	"./pages/*.html"
];

self.addEventListener("install", async (e) => {
	console.log("Service Worker]:  Installing...")
	e.waitUntil(async ()  => {
		const cache = await caches.open(cacheName);
		console.log("[ServiceWorker]: Caching app build files...");
		await cacheAll(buildFiles);
	})
})

self.addEventListener("activate", r => {
	e.waitUntil((async () => {
		const keyList = await caches.keys();
		await Promise.all(
			keyList.map(key => {
				console.log(key)

				if (key !== cacheName) {
					console.log("[ServiceWorker]: Removing old cache", key);
					return caches.delete(key)
				}
			})
		);
	})());
	e.waitUntil(self.clients.claim());
})