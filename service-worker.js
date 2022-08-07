self.addEventListener('notificationclick', function(event) {
    let url = 'https://molakhasat.netlify.app';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({type: 'window'}).then( windowClients => {
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});

 self.registration.showNotification('ملخصات جديدة', {
      body: 'تمت إضافة ملخصات جديدة!',
      icon: 'logo.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
    })

