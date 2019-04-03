importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('Code.Ed').then(function(cache) {
     return cache.addAll([
       '/',
       '/sample-frame.html',
       '/sample-inline.html',
     ]);
   })
 );
});
