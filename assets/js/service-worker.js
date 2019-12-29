const LATEST_CACHE_ID = 'v41';

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(LATEST_CACHE_ID).then(function(cache) {
      return cache.addAll([
         '/CNAME',
         '/favicon.ico',
         '/index.html',
         '/manifest.json',
         '/reading.html',
         '/upload.rb',
         '/articles',
         '/articles/acaunos_saxanus.html',
         '/articles/aesos.html',
         '/articles/badetus.html',
         '/articles/belinos.html',
         '/articles/brixta.html',
         '/articles/brogdos.html',
         '/articles/carvonia.html',
         '/articles/comtegisom.html',
         '/articles/eracura.html',
         '/articles/latobius.html',
         '/articles/litalus.html',
         '/articles/noreia.html',
         '/articles/norici.html',
         '/articles/oinouiros.html',
         '/articles/reitia.html',
         '/articles/savos.html',
         '/articles/sedati.html',
         '/articles/sedatos.html',
         '/articles/sinatis.html',
         '/articles/smertrios.html',
         '/articles/veica.html',
         '/assets',
         '/assets/fonts.css',
         '/assets/css',
         '/assets/css/style.css',
         '/assets/docs',
         '/assets/docs/die-in-noricum-belegten.pdf',
         '/assets/fonts',
         '/assets/fonts/NotoSansOldItalic-Regular.eot',
         '/assets/fonts/NotoSansOldItalic-Regular.otf',
         '/assets/fonts/NotoSansOldItalic-Regular.svg',
         '/assets/fonts/NotoSansOldItalic-Regular.ttf',
         '/assets/fonts/NotoSansOldItalic-Regular.woff',
         '/assets/img',
         '/assets/img/aesos.png',
         '/assets/img/antifa.png',
         '/assets/img/badetus-1.png',
         '/assets/img/badetus-2.png',
         '/assets/img/belin.png',
         '/assets/img/body-background.jpg',
         '/assets/img/brixta-1.png',
         '/assets/img/brixta-2.png',
         '/assets/img/brogdos.png',
         '/assets/img/carvonia.png',
         '/assets/img/eracura.png',
         '/assets/img/header-back.jpg',
         '/assets/img/latobius.png',
         '/assets/img/minima-social-icons.svg',
         '/assets/img/noreia.png',
         '/assets/img/norici-wolf.png',
         '/assets/img/norici.png',
         '/assets/img/noricum.png',
         '/assets/img/reitia-1.png',
         '/assets/img/reitia-2.png',
         '/assets/img/reitia-3.png',
         '/assets/img/savos.png',
         '/assets/img/saxanus.png',
         '/assets/img/sedatos.png',
         '/assets/img/sinatis.png',
         '/assets/img/smertrios.png',
         '/assets/img/title.png',
         '/assets/img/touta.png',
         '/assets/img/veica.png',
         '/assets/img/favicons',
         '/assets/img/favicons/browserconfig.xml',
         '/assets/img/favicons/favicon-120.png',
         '/assets/img/favicons/favicon-128.png',
         '/assets/img/favicons/favicon-144.png',
         '/assets/img/favicons/favicon-152.png',
         '/assets/img/favicons/favicon-167.png',
         '/assets/img/favicons/favicon-180.png',
         '/assets/img/favicons/favicon-192.png',
         '/assets/img/favicons/favicon-195.png',
         '/assets/img/favicons/favicon-196.png',
         '/assets/img/favicons/favicon-228.png',
         '/assets/img/favicons/favicon-32.png',
         '/assets/img/favicons/favicon-57.png',
         '/assets/img/favicons/favicon-76.png',
         '/assets/img/favicons/favicon-96.png',
         '/assets/js',
         '/assets/js/jquery.js',
         '/assets/js/main.js',
         '/assets/js/service-worker.js',
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) { 
      Promise.all(keyList.map(key => {
        if (key !== LATEST_CACHE_ID) {
          return caches.delete(key);
        }
      }))
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});