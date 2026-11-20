/*
 * This site no longer uses a service worker. This worker exists only to clean up
 * the Workbox service worker installed by the previous Create React App build.
 */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (key) { return caches.delete(key); }));
    } catch (e) {}

    try {
      await self.registration.unregister();
    } catch (e) {}

    try {
      var clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      clients.forEach(function (client) {
        if (client.navigate) client.navigate(client.url).catch(function () {});
      });
    } catch (e) {}
  })());
});
