// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfoUHA3qVj70RK8zrl3e-4kLEl1xlXi4g",
  authDomain: "selenne-strategies.firebaseapp.com",
  projectId: "selenne-strategies",
  storageBucket: "storage.selennestrategies.com",
  messagingSenderId: "256452657433",
  appId: "1:256452657433:web:b587b3113db206699dc588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
