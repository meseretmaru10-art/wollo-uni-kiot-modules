const CACHE_NAME = 'kiot-hub-v2';
const assets = [
  '/wollo-uni-kiot-modules/',
  '/wollo-uni-kiot-modules/index.html',
  '/wollo-uni-kiot-modules/manifest.json',
  '/wollo-uni-kiot-modules/icon.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});
