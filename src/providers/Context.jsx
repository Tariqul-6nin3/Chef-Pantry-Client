import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const myContext = createContext(null);
const Context = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const AuthInfo = { createUser };
  return <myContext.Provider value={AuthInfo}>{children}</myContext.Provider>;
};

export default Context;
