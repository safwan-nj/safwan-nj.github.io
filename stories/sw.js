// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/bg.jpg',
        '/components/CategoryModal.css',
        '/components/PdfViewer.css',
        '/components/Slider.css',
        '/App.css'
        // أضف مسارات الملفات الأخرى حسب الحاجة
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});