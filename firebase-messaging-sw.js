importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB4qTKGGEIZrWFM5fwvMnTsrldFRvkqYN4",
  authDomain: "hotal-559d4.firebaseapp.com",
  projectId: "hotal-559d4",
  storageBucket: "hotal-559d4.firebasestorage.app",
  messagingSenderId: "448634988668",
  appId: "1:448634988668:web:197242fd4811e7284c01f9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/favicon.png"
  });
});