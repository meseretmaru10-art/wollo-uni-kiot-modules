const CACHE_NAME = 'kiot-hub-v11'; // ቨርዥኑን ወደ 11 ቀይረነዋል
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

// ፋይሎቹን ሴቭ ለማድረግ
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching all assets...');
      return cache.addAll(assets);
    })
  );
});

// የቆየ ካሽ ካለ ለማጽዳት
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// ኢንተርኔት በሌለበት ጊዜ ከሴቭ የተደረገው እንዲያነብ
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
