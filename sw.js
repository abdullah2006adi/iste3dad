/* منصة استعداد: ملف صغير يعرّف المتصفح أن المنصة تطبيق يمكن تثبيته على الشاشة الرئيسية.
   لا يحفظ أي نسخة من المنصة، فكل تحديث تنشره يصل إلى الطلاب كالمعتاد. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;   // الدروس وقاعدة البيانات لا يمسّها هذا الملف
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!DOCTYPE html><html lang="ar" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>منصة استعداد</title>' +
    '<body style="font-family:system-ui,Tahoma,sans-serif;background:#f7f3e8;color:#0f5e5a;text-align:center;padding:60px 20px">' +
    '<img src="icon-180.png" width="90" style="border-radius:20px"><h2>لا يوجد اتصال بالإنترنت</h2><p style="font-size:20px">تأكّد من الاتصال، ثم اضغط الزر.</p>' +
    '<button onclick="location.reload()" style="font-size:20px;padding:8px 26px;border:0;border-radius:12px;background:#1f8a5b;color:#fff">🔄 حاول مرة أخرى</button></body></html>',
    {headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
