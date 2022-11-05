/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { ISignup, ILogin } from "../@types/auth";
import { IProps } from "../@types/app";

export const AuthContext = createContext<any>({} as any);

export default ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  async function signup({ email, password, firstName, lastName }: ISignup) {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const currentUser = data.user;
        const name = `${firstName} ${lastName}`;
        updateProfile(currentUser, {
          displayName: name,
        }).catch((err) => console.log(err));
        addDoc(collection(db, "users"), {
          uid: currentUser.uid,
          name: name,
        }).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => console.log(err));
  }

  async function login({ email, password }: ILogin) {
    return await signInWithEmailAndPassword(auth, email, password).catch(
      (err) => console.log(err)
    );
  }

  async function logout() {
    return await signOut(auth).catch((err) => console.log(err));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
