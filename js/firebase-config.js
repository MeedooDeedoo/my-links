import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDgTZjnufv21Hn_sb0YicHZg17n91lrfA",
    authDomain: "link-tree-74a19.firebaseapp.com",
    projectId: "link-tree-74a19",
    storageBucket: "link-tree-74a19.firebasestorage.app",
    messagingSenderId: "1068568257989",
    appId: "1:1068568257989:web:c96d736c19f9af0c1f57ac",
    measurementId: "G-M5C32KCP93"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const dbRef = ref(db, 'platformData');
