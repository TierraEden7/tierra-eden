/* Tierra Eden · service worker. Primero la red (siempre lo mas nuevo); si no hay internet, usa lo guardado. */
const V = 'te-v1';
const BASE = ['boceto.html', 'admin.html', 'config.js', 'textos.js', 'iconos/icon-192.png', 'iconos/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => Promise.all(BASE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return; /* Supabase, fuentes, etc.: siempre directo */
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('boceto.html') : undefined)))
  );
});
