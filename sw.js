const CACHE_NAME = 'kiot-modules-v1';
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

// አፑ እንደተከፈተ ወዲያውኑ ፋይሎቹን መጫን እንዲጀምር
self.addEventListener('install', (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// አዲሱ ሰው ሲከፍተው ወዲያውኑ እንዲነቃቃ
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); 
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
