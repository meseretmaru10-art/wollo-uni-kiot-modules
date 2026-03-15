const CACHE_NAME = 'kiot-hub-v3';

// ያለ ዳታ እንዲከፈቱ የምንፈልጋቸው ፋይሎች ዝርዝር
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  // PDF ፋይሎች እዚህ ተጨምረዋል
  './maths.pdf',
  './cpp.pdf',
  './english2.pdf',
  './history.pdf',
  './civics.pdf',
  './anthropology.pdf',
  './emerging.pdf'
];

// ፋይሎቹን በስልኩ ካሽ (Cache) ውስጥ መጫን
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('PDFs and Assets are being cached for offline use...');
      return cache.addAll(assets);
    })
  );
});

// አሮጌ ካሽ ካለ አዲሱን ስሪት ለማስገባት ማጽዳት
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// መረጃን ከካሽ ውስጥ መጥራት
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
