const CACHE_NAME = 'kiot-hub-v6';
const assets = [
  '/wollo-uni-kiot-modules/',
  '/wollo-uni-kiot-modules/index.html',
  '/wollo-uni-kiot-modules/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
