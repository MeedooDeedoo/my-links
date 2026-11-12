<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شجرة الرابط الذكية - Link Tree</title>
    <!-- تضمين مكتبات Firebase المطلوبة -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js"></script>
    <style>
        body {
            font-family: Tahoma, sans-serif;
            background-color: #121212;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            background: #1e1e1e;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        button {
            background-color: #f59e0b;
            color: #121212;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 15px;
            width: 100%;
        }
        button:hover {
            background-color: #d97706;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>مرحباً بك يا محمود</h2>
        <p>انقر على الزر أدناه لتفعيل إشعارات النظام الفورية:</p>
        <button onclick="requestNotificationPermission()">تفعيل الإشعارات الآن</button>
    </div>

    <script>
        // إعدادات مشروع Firebase الخاص بك
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "link-tree-74a19",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        // تهيئة فايربيز
        firebase.initializeApp(firebaseConfig);
        const messaging = firebase.messaging();

        // دالة طلب إذن الإشعارات واستخراج التوكن
        function requestNotificationPermission() {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('تم منح إذن الإشعارات.');
                    
                    // جلب الـ FCM Token واستخدام VAPID Key الخاص بك
                    messaging.getToken({ 
                        vapidKey: 'أدخل_مفتاح_VAPID_الخاص_بك_هنا' 
                    }).then((currentToken) => {
                        if (currentToken) {
                            console.log('FCM Token:', currentToken);
                            // سيعرض الكود الرمز في نافذة منبثقة على هاتفك لنسخه بضغطة زر واحدة
                            alert("FCM Token: " + currentToken);
                        } else {
                            console.log('لا يوجد توكن متاح.');
                            alert('لم يتم العثور على توكن للجهاز.');
                        }
                    }).catch((err) => {
                        console.log('حدث خطأ أثناء جلب التوكن: ', err);
                        alert('حدث خطأ: ' + err);
                    });

                } else {
                    console.log('تم رفض إذن الإشعارات.');
                    alert('تم رفض إذن الإشعارات من المتصفح.');
                }
            });
        }
    </script>
</body>
</html>
