let version = 1;

self.addEventListener('install', () => console.log('App instalado'));

self.addEventListener('activate', function() {
  caches.open('total-loss-files-'+version)
    .then(cache => {
      cache.addAll(archives)
        .then(function() {
          caches.delete('total-loss-files-'+(version - 1));
          caches.delete('total-loss-files');
        });
    });
});

self.addEventListener('fetch', function(event) {
  let request = event.request;
  let responsePromise = caches.match(request)
    .then(responseCache => {
      let response = responseCache ? responseCache : fetch(request);
      return response;
    });

    event.respondWith(responsePromise);
});

