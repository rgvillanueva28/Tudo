import React, { useContext, useState } from "react";
import moment from "moment";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdClear,
} from "react-icons/md";
import { Context } from "../Context/CategoryContext";

interface toDoCardProps {
  todoItem: any;
}

export default function TodoCard({ todoItem }: toDoCardProps) {
  const { updateTodo } = useContext(Context);

  const [thisTodoItem, setThisTodoItem] = useState({
    ...todoItem,
    dateCreated: todoItem.dateCreated.toDate(),
    dateToDo: todoItem.dateToDo.toDate(),
    dateFinished: todoItem.dateFinished.toDate(),
  });

  const handleCatClick = (e: any) => {
    let category = "";

    if (e.currentTarget.id === "next") {
      category =
        todoItem.category === "todo"
          ? "inProgress"
          : todoItem.category === "inProgress"
          ? "done"
          : "";
    } else {
      category =
        todoItem.category === "done"
          ? "inProgress"
          : todoItem.category === "inProgress"
          ? "todo"
          : "";
    }

    console.log({ thisTodoItem, category });

    updateTodo(todoItem.id, { ...todoItem, category: category })
      .then(() => {
        console.log("Updated");
        setThisTodoItem({
          ...todoItem,
          dateCreated: todoItem.dateCreated.toDate(),
          dateToDo: todoItem.dateToDo.toDate(),
          dateFinished: todoItem.dateFinished.toDate(),
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const styles = {
    bgColor:
      todoItem.category === "todo"
        ? "bg-brand-dark"
        : todoItem.category === "inProgress"
        ? "bg-brand-main"
        : "bg-success",
    dateColor:
      todoItem.category === "todo"
        ? "text-warning"
        : todoItem.category === "inProgress"
        ? "text-brand-dark"
        : "text-danger",
    nextBtnColor:
      todoItem.category === "todo"
        ? "bg-brand-main"
        : todoItem.category === "inProgress"
        ? "bg-success"
        : "hidden",
    backBtnColor:
      todoItem.category === "todo"
        ? "hidden"
        : todoItem.category === "inProgress"
        ? "bg-brand-dark"
        : "bg-brand-main",
  };

  return (
    <div
      className={
        "flex flex-col w-100 my-2 rounded-lg text-left p-3 text-white " +
        styles.bgColor
      }
    >
      <div className="flex flex-row justify-around">
        <h2 className="text-xl font-bold text-left w-full">{todoItem.title}</h2>
        <div className="flex flex-row">
          <button className="bg-danger rounded-lg w-20 mx-2">
            <MdClear className="mx-auto" size={24} />
          </button>
          <button
            id="back"
            className={
              "bg-brand-main rounded-lg w-20 mx-2 " + styles.backBtnColor
            }
            onClick={handleCatClick}
          >
            <MdKeyboardArrowLeft className="mx-auto" size={24} />
          </button>
          <button
            id="next"
            className={
              "bg-brand-main rounded-lg w-20 mx-2 " + styles.nextBtnColor
            }
            onClick={handleCatClick}
          >
            <MdKeyboardArrowRight className="mx-auto" size={24} />
          </button>
        </div>
      </div>
      <div
        className={"flex flex-col font-semibold text-sm " + styles.dateColor}
      >
        <p>{`Created on ${moment(thisTodoItem.dateCreated).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`To finish on ${moment(thisTodoItem.dateToDo).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`Due date on ${moment(thisTodoItem.dateFinished).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
      </div>
      <p className="text-base text-justify">{todoItem.description}</p>
    </div>
  );
}
