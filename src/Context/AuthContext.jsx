import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("The user is", currentUser);
  }, [currentUser]);

  function logout() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function signInWithGithub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }


  const value = {
    currentUser,
    signInWithGoogle,
    signInWithGithub,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}