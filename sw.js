const CACHE_NAME = 'kiot-hub-v10';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './maths.pdf',
  './cpp.pdf',
  './english2.pdf',
  './history.pdf',
  './civics.pdf',
  './anthropology.pdf',
  './emerging.pdf'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
