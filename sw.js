const CACHE_NAME = 'kiot-hub-v5';
const assets = [
  '/wollo-uni-kiot-modules/',
  '/wollo-uni-kiot-modules/index.html',
  '/wollo-uni-kiot-modules/manifest.json',
  '/wollo-uni-kiot-modules/sw.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
