import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfoUHA3qVj70RK8zrl3e-4kLEl1xlXi4g",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "selenne-strategies",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "256452657433",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
