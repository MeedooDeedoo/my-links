importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

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

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
