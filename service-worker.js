self.addEventListener('notificationclick', function(event) {
    let url = 'molakhasat.netlify.app';
    event.notification.close(); // Android needs explicit close.
    if (event.action == "open_url") {
        clients.openWindow("https://molakhasat.netlify.app");
    }
});

 self.registration.showNotification('ملخصات جديدة', {
      body: 'تمت إضافة ملخصات جديدة!',
      icon: 'logo.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'New-Molakhasat',
      actions: [{action: "open_url", title: "رؤية المزيد"}]
    })

