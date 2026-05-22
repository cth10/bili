const CACHE_NAME = 'bili-br-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/icons/logo.png',
  '/assets/icons/logo.webp',
  '/assets/images/mascots/2233.webp',
  '/assets/images/mascots/2233bilibili.webp',
  '/assets/images/mascots/bilibili-22.webp',
  '/assets/images/mascots/bilibili-33-.webp',
  '/assets/images/tutorial/homepage.webp',
  '/assets/images/tutorial/encontrar-botao-login.webp',
  '/assets/images/tutorial/tela-de-login.webp',
  '/assets/images/tutorial/inserir-numero-celular.webp',
  '/assets/images/tutorial/confirmar-sms-login.webp',
  '/assets/images/tutorial/barra-de-perfil-1.webp',
  '/assets/images/tutorial/sessoes-do-site.webp',
  '/assets/images/tutorial/menu-do-perfil.webp',
  '/css/styles.css',
  '/js/main.js',
  '/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(function() {
          // If fetch fails and it's a navigation request, return cached index
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
