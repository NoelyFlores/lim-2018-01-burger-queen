/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
console.log('sw.ja')
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
/* workbox.setConfig({
   debug: false,
  });
  
  workbox.precaching.precacheAndRoute([]);
  
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  );
  //cache css and javascritp
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate(),
  ); 
  workbox.routing.registerRoute(
    new RegExp('https://some-fancy-api.com'),
    workbox.strategies.networkFirst({
      cacheName: 'api',
    }),
  );
  
  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
      ],
    }),
  );
   */ 