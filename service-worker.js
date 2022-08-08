self.addEventListener('notificationclick', function(event) {
    let url = 'https://molakhasat.netlify.app';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({includeUncontrolled: true}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
self.addEventListener('push', function(event) {
    self.registration.showNotification('ملخصات جديدة', {
      body: 'تمت إضافة ملخصات جديدة!',
      icon: 'logo.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'New-Molakhasat',
      actions: [{action: "open_url", title: "رؤية المزيد"}]
    })
});

    
