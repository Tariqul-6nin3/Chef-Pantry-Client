import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const myContext = createContext(null);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  const loggedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      return unsuscribe;
    };
  }, []);

  // const googleLogin = () => {
  //   return signInWithPopup(auth, googleProvider);
  // };

  const AuthInfo = {
    user,
    loggedInUser,
    createUser,
    logOut,
  };

  return <myContext.Provider value={AuthInfo}>{children}</myContext.Provider>;
};

export default Context;
