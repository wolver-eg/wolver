// Service worker بسيط: مجرد شرط تثبيت التطبيق. مفيش كاش، فكل حاجة بتتحمّل أونلاين زي الأول.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
