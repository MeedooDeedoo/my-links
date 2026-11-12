// استيراد الدوال اللازمة من فايربيز (تأكد من توافق الإصدار مع مشروعك)
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-messaging.js";

// تهيئة نظام الرسائل (يعتمد على متغير app المعرف مسبقاً في مشروعك)
const messaging = getMessaging(app);

/**
 * دالة طلب إذن الإشعارات من الزائر وتوليد رمز الجهاز (FCM Token)
 */
async function requestNotificationPermissionAndToken() {
    try {
        // 1. طلب صلاحية الإشعارات من متصفح الهاتف أو الكمبيوتر
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            console.log('تم منح إذن الإشعارات بنجاح من قبل المستخدم.');
            
            // 2. توليد رمز التوثيق الخاص بجهاز الزائر باستخدام مفتاح VAPID الذي نسخته
            const currentToken = await getToken(messaging, { 
                vapidKey: 'BIIuLJYW1J2uJ503cmsKDFIS2iB5B3HOgS5Y2fpJRvNRLM2GmCcZftH1vnkXM9pGkKMv_QOTsa3tnCfo5sXN9fX4' // ضع مفتاحك هنا
            });

            if (currentToken) {
                console.log('رمز الجهاز (FCM Token) الخاص بهذا الهاتف:', currentToken);
                
                // 3. يمكنك حفظ هذا الرمز تلقائياً في قاعدة بيانات Firebase تحت بيانات الزائر أو الأجهزة المتصلة
                // saveTokenToDatabase(currentToken);
                
                return currentToken;
            } else {
                console.warn('لم يتم العثور على رمز تسجيل لهذا الجهاز.');
            }
        } else {
            console.log('تم رفض إذن الإشعارات من قبل المستخدم.');
        }
    } catch (error) {
        console.error('حدث خطأ أثناء طلب إذن أو توليد رمز الإشعارات:', error);
    }
}

// استماع للرسائل الواردة عندما يكون الموقع مفتوحاً أمام المستخدم في المتصفح
onMessage(messaging, (payload) => {
    console.log('تم استلام إشعار والموقع مفتوح:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icon.png'
    };

    // إظهار إشعار محلي للمستخدم داخل المتصفح
    if (Notification.permission === 'granted') {
        new Notification(notificationTitle, notificationOptions);
    }
});

// يمكنك استدعاء هذه الدالة عند ضغط الزائر على زر "تفعيل التنبيهات" في موقعك
// requestNotificationPermissionAndToken();
