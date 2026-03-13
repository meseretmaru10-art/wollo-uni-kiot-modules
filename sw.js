const cacheName = 'kiot-hub-v1';
// እዚህ ጋር ያሉትን የፋይል ስሞች በ GitHub ካለህ ስም ጋር አንድ መሆናቸውን አረጋግጥ
const assets = [
  './',
  './index.html',
  './manifest.json',
  './maths.pdf',
  './cpp.pdf',
  './english2.pdf',
  './history.pdf',
  './civics.pdf',
  './anthropology.pdf',
  './emerging.pdf'
];

// ፋይሎቹን በስልኩ ሜሞሪ ላይ ለመጫን (Install)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// ዳታ በሌለበት ሰዓት ከሜሞሪው አውጥቶ እንዲያሳይ (Fetch)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
