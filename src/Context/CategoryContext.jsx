/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";

export const Context = createContext();

export default ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("todo");
  const [newTodo, setNewTodo] = useState({
    title: "",
    dateToDo: new Date(),
    dateFinished: new Date(),
    description: "",
    category: "todo",
  });
  const [todoItems, setTodoItems] = useState([]);

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup({ email, password, firstName, lastName }) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const currentUser = auth.currentUser;
        const name = `${firstName} ${lastName}`;
        currentUser.updateProfile({
          displayName: name,
        });
        db.collection("users")
          .add({
            uid: currentUser.uid,
            name: name,
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  function login({ email, password }) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  }

  function logout() {
    return auth.signOut().catch((err) => console.log(err));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function clearNewTodo() {
    setNewTodo({
      title: "",
      dateCreated: new Date(),
      dateToDo: new Date(),
      dateFinished: new Date(),
      description: "",
      category: "todo",
    });
  }

  function addTodo({ title, dateToDo, dateFinished, description }) {
    return db
      .collection("todos")
      .add({
        uid: currentUser.uid,
        title,
        description,
        category: "todo",
        dateToDo,
        dateFinished,
        dateCreated: new Date(),
      })
      .then(() => {
        return "Todo successfully added.";
      })
      .catch((err) => {
        console.log(err);
        return "Error adding todo.";
      });
  }

  function getTodos() {
    return currentUser
      ? db
          .collection("todos")
          .where("uid", "==", currentUser.uid)
          .onSnapshot((snapshot) => {
            setTodoItems(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
            return "Todos Successfully fetched.";
          })
      : "No user found";
  }

  function updateTodo(id, updatedTodo) {
    return db.collection("todos").doc(id).update(updatedTodo);
  }

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
    clearNewTodo,
    addTodo,
    todoItems,
    getTodos,
    updateTodo,
  };

  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};
