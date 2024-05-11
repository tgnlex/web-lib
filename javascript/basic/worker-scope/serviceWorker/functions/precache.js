// Add to sw.js file
// Creates a new Cache instance
// Uses it to precache assets

self.addEventListener('install', (event) => {
  const cacheKey = 'MyFancyCacheName_v1';

  event.waitUntil(caches.open(cacheKey).then((cache) => {
    // Add all the assets in the array
    return cache.addAll([
      '/css/global.bc780b7.css',
      '/css/home.fe5d0b23.css',
      '/js/home.d3cc4ba4.js',
      '/js/jquery.43ca4933.js',
    ]);
  }));
});