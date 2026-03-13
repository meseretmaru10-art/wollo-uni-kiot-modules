const CACHE_NAME = 'kiot-hub-v4';
const assets = [
  '/wollo-uni-kiot-modules/',
  '/wollo-uni-kiot-modules/index.html',
  '/wollo-uni-kiot-modules/manifest.json',
  '/wollo-uni-kiot-modules/icon.png'
];

// ፋይሎቹን በካሽ ውስጥ ማስቀመጥ
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// አዲስ ስሪት ሲኖር የድሮውን ካሽ ማጽዳት
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
});

// ፋይሎችን ከካሽ ወይም ከኔትወርክ ማቅረብ
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});
