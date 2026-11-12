getToken(messaging, { vapidKey: 'مفتاح_الـ_VAPID_الخاص_بك' }).then((currentToken) => {
    if (currentToken) {
        console.log('FCM Token:', currentToken);
        // أضف هذا السطر ليظهر لك الرمز على شاشة هاتفك مباشرة وتنسخه بضغطة زر:
        alert("FCM Token: " + currentToken);
    } else {
        console.log('No registration token available.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});
