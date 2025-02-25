import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const provider = new GoogleAuthProvider();

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account Created Successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google Sign-In Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 w-96 shadow-lg bg-white rounded-lg">
        <h2 className="text-xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border w-full"
        />
        <button onClick={handleAuth} className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <button onClick={handleGoogleSignIn} className="w-full mt-2 bg-red-500 text-white p-2 rounded">
          Sign in with Google
        </button>
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
