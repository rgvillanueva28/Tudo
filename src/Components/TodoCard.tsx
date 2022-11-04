import React, { useContext, useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdClear,
  MdModeEdit,
} from "react-icons/md";
import { DateTime } from "luxon";
import { Context } from "../Context/CategoryContext";

import DeleteTodoModal from "../Components/DeleteTodoModal";
import EditTodoModal from "../Components/EditTodoModal";

interface toDoCardProps {
  todoItem: any;
}

export default function TodoCard({ todoItem }: toDoCardProps) {
  const { updateTodo } = useContext(Context);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCatClick = async (e: any) => {
    let category = "";

    if (e.currentTarget.id === "next") {
      category =
        (await todoItem.category) === "todo"
          ? "inProgress"
          : todoItem.category === "inProgress"
          ? "done"
          : "";
    } else {
      category =
        (await todoItem.category) === "done"
          ? "inProgress"
          : todoItem.category === "inProgress"
          ? "todo"
          : "";
    }

    console.log({ todoItem, category });

    await updateTodo(todoItem.id, { ...todoItem, category: category })
      .then(() => {
        console.log("Updated");
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
    <>
      {showDeleteModal && (
        <DeleteTodoModal
          setShowDeleteModal={setShowDeleteModal}
          title={todoItem.title}
          id={todoItem.id}
        />
      )}
      {showEditModal && (
        <EditTodoModal
          setShowEditModal={setShowEditModal}
          todoItem={todoItem}
        />
      )}
      <div
        className={
          "transition-all flex flex-col w-100 my-2 rounded-lg text-left p-3 text-white " +
          styles.bgColor
        }
      >
        <h2 className="text-xl font-bold text-left w-full">{todoItem.title}</h2>
        <div className="flex flex-row space-x-5 h-8">
          <button
            className="bg-green-400 rounded-lg w-20 "
            onClick={() => setShowEditModal(true)}
          >
            <MdModeEdit className="mx-auto" size={24} />
          </button>
          <button
            className="bg-danger rounded-lg w-20 "
            onClick={() => setShowDeleteModal(true)}
          >
            <MdClear className="mx-auto" size={24} />
          </button>
          <button
            id="back"
            className={"bg-brand-main rounded-lg w-20  " + styles.backBtnColor}
            onClick={handleCatClick}
          >
            <MdKeyboardArrowLeft className="mx-auto" size={24} />
          </button>
          <button
            id="next"
            className={"bg-brand-main rounded-lg w-20  " + styles.nextBtnColor}
            onClick={handleCatClick}
          >
            <MdKeyboardArrowRight className="mx-auto" size={24} />
          </button>
        </div>
        <div
          className={"flex flex-col font-semibold text-sm " + styles.dateColor}
        >
          <p>{`Created on ${DateTime.fromSeconds(
            todoItem.dateCreated.seconds
          ).toFormat("EEE, LLL dd kkkk hh:mm a")}`}</p>
          <p>{`To finish on ${DateTime.fromSeconds(
            todoItem.dateToDo.seconds
          ).toFormat("EEE, LLL dd kkkk hh:mm a")}`}</p>
          <p>{`Due date on ${DateTime.fromSeconds(
            todoItem.dateFinished.seconds
          ).toFormat("EEE, LLL dd kkkk hh:mm a")}`}</p>
        </div>
        <p className="text-base text-justify">{todoItem.description}</p>
      </div>
    </>
  );
}
