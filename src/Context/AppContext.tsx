/* eslint-disable import/no-anonymous-default-export */
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  doc,
  where,
  onSnapshot,
  query,
} from "firebase/firestore";

import { IProps, ITodo } from "../@types/app";

import { AuthContext } from "./AuthContext";

export const AppContext = createContext<any>({} as any);

export default ({ children }: IProps) => {
  const { currentUser } = useContext(AuthContext);
  const [currentCategory, setCurrentCategory] = useState("todo");
  const [newTodo, setNewTodo] = useState<ITodo>({
    title: "",
    dateToDo: new Date(),
    dateFinished: new Date(),
    description: "",
    category: "todo",
  });
  const [todoItems, setTodoItems] = useState<Object[]>([]);
  const [isDesktop, setIsDesktop] = useState(
    global.innerWidth >= 1024 ? true : false
  );
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewModalTodo, setViewModalTodo] = useState("");
  const [showNavDrawer, setShowNavDrawer] = useState(false);

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

  async function addTodo({
    title,
    dateToDo,
    dateFinished,
    description,
  }: ITodo) {
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

  async function deleteTodo(id: string) {
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
          let currentTodoItems: Object[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTodoItems(currentTodoItems);
          return "Todos Successfully fetched.";
        })
      : "No user found";
  }

  async function updateTodo(id: string, updatedTodo: any) {
    return await updateDoc(doc(db, "todos", id), updatedTodo);
  }

  useEffect(() => {
    global.addEventListener("resize", () => {
      global.innerWidth >= 1024 ? setIsDesktop(true) : setIsDesktop(false);
    });
  }, []);

  useEffect(() => {
    setTodoItems([]);
  }, [currentUser]);

  const value = {
    currentCategory,
    setCurrentCategory,
    newTodo,
    setNewTodo,
    clearNewTodo,
    addTodo,
    todoItems,
    getTodos,
    updateTodo,
    deleteTodo,
    isDesktop,
    setIsDesktop,
    showViewModal,
    setShowViewModal,
    viewModalTodo,
    setViewModalTodo,
    showNavDrawer,
    setShowNavDrawer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
