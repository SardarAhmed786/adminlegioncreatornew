import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


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
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);