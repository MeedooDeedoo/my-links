importScripts('https://www.gstatic.com/firebasejs/13.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDDgTZjnufv21Hn_sb0YicHZg17n91lrfA",
    authDomain: "link-tree-74a19.firebaseapp.com",
    projectId: "link-tree-74a19",
    storageBucket: "link-tree-74a19.firebasestorage.app",
    messagingSenderId: "1068568257989",
    appId: "1:1068568257989:web:c96d736c19f9af0c1f57ac",
    measurementId: "G-M5C32KCP93"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية وعندما يكون التطبيق مغلقاً
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message: ', payload);
    
    const notificationTitle = payload.notification?.title || 'تنبيه جديد من المنصة';
    const notificationOptions = {
        body: payload.notification?.body || 'يوجد تحديث أو مشروع جديد تم إضافته.',
        icon: payload.notification?.icon || '/icon.png',
        badge: '/icon.png',
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
