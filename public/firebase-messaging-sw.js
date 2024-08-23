importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDOEjlGnZLL10oLNrv-YP83sIBO53Tj3JY",
    authDomain: "legion-network-app.firebaseapp.com",
    databaseURL: "https://legion-network-app-default-rtdb.firebaseio.com",
    projectId: "legion-network-app",
    storageBucket: "legion-network-app.appspot.com",
    messagingSenderId: "64272717398",
    appId: "1:64272717398:web:f041ef40c13011eb950df7",
    measurementId: "G-0D2JVT76TM"
  };

firebase.initializeApp(firebaseConfig);
console.log('dlsfjalsdfjl',firebase.initializeApp(firebaseConfig) )
// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});