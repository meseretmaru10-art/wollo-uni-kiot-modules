const CACHE_NAME = 'kiot-freshman-v5';
const assets = [
  '/',
  'index.html',
  'manifest.json',
  'icon.png',
  'maths.pdf',
  'cpp.pdf',
  'english2.pdf',
  'history.pdf',
  'civics.pdf',
  'anthropology.pdf',
  'emerging.pdf'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
