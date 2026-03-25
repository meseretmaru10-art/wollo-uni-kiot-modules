const CACHE_NAME = 'kiot-hub-v40'; // አዲስ ስሪት በሆን ቁጥር ይህን ቁጥር ቀይረው
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

// አፑ መጀመሪያ ሲጫን ፋይሎቹን ወደ ስልክህ ሜሞሪ (Cache) ይጭናል
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// ዳታ በሌለበት ጊዜ ከስልክህ ሜሞሪ ፋይሎቹን ያነባል
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
