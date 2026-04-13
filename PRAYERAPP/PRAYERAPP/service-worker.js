self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('deen-companion-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
self.addEventListener('install', e => {
  console.log('Service Worker Installed');
});