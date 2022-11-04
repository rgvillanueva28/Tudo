/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  collection,
  doc,
  where,
  onSnapshot,
  query,
} from "firebase/firestore";

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
    return createUserWithEmailAndPassword(auth, email, password)
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
    return signInWithEmailAndPassword(auth, email, password).catch((err) =>
      console.log(err)
    );
  }

  function logout() {
    return signOut(auth).catch((err) => console.log(err));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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

  async function addTodo({ title, dateToDo, dateFinished, description }) {
    return await addDoc(collection(db, "todos"), {
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

  async function deleteTodo(id) {
    return await deleteDoc(doc(db, "todos", id))
      .then(() => {
        return "Todo successfully deleted.";
      })
      .catch((err) => {
        console.log(err);
        return "Error deleting todo.";
      });
  }

  async function getTodos() {
    const q = currentUser
      ? query(collection(db, "todos"), where("uid", "==", currentUser.uid))
      : null;
    return q
      ? onSnapshot(q, (snapshot) => {
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

  async function updateTodo(id, updatedTodo) {
    return await updateDoc(doc(db, "todos", id), updatedTodo);
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
    deleteTodo,
  };

  return (
    <Context.Provider value={value}>{!loading && children}</Context.Provider>
  );
};
