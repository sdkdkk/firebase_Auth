import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDotPhwSKXQzh5smvI9WgzKwph0nMGtNLI",
  authDomain: "phone-auth-ed713.firebaseapp.com",
  projectId: "phone-auth-ed713",
  storageBucket: "phone-auth-ed713.appspot.com",
  messagingSenderId: "278116962004",
  appId: "1:278116962004:web:e9e2a240c10ad74b313541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
