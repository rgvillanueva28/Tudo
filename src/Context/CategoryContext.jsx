/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const Context = createContext();

export default ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("todo");
  const [newTodo, setNewTodo] = useState({
    title: "",
    dateCreated: new Date(),
    dateToDo: new Date(),
    dateFinished: new Date(),
    description: "",
    category: "todo",
  });

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup({ email, password, firstName, lastName }) {
    return auth.createUserWithEmailAndPassword(email, password).then((data) => {
      const currentUser = auth.currentUser;
      const name = `${firstName} ${lastName}`;
      currentUser.updateProfile({
        displayName: name,
      });
    });
  }

  function login({ email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentCategory,
    setCurrentCategory,
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    newTodo,
    setNewTodo,
  };

  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};
