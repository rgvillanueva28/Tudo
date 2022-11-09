import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdClear,
  MdModeEdit,
  MdAlarmAdd,
  MdAlarmOn,
  MdAlarm,
} from "react-icons/md";
import DeleteTodoModal from "./DeleteTodoModal";
import EditTodoModal from "./EditTodoModal";
import { DateTime } from "luxon";

export default function ViewTodoModal() {
  const { updateTodo, setShowViewModal, viewModalTodos, viewModalTodo } =
    useContext(AppContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const styles = {
    bgColor:
      viewModalTodo.category === "todo"
        ? "bg-yellow-200"
        : viewModalTodo.category === "inProgress"
        ? "bg-blue-200"
        : "bg-green-200",
    nextBtnColor:
      viewModalTodo.category === "todo"
        ? "bg-brand-main"
        : viewModalTodo.category === "inProgress"
        ? "bg-success"
        : "hidden",
    backBtnColor:
      viewModalTodo.category === "todo"
        ? "hidden"
        : viewModalTodo.category === "inProgress"
        ? "bg-brand-dark"
        : "bg-brand-main",
  };

  const handleCatClick = async (e: any) => {
    let category = "";

    if (e.currentTarget.id === "next") {
      category =
        (await viewModalTodo.category) === "todo"
          ? "inProgress"
          : viewModalTodo.category === "inProgress"
          ? "done"
          : "";
    } else {
      category =
        (await viewModalTodo.category) === "done"
          ? "inProgress"
          : viewModalTodo.category === "inProgress"
          ? "todo"
          : "";
    }

    setShowViewModal(false);

    await updateTodo(viewModalTodo.id, { ...viewModalTodo, category: category })
      .then(() => {
        console.log("Updated");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <>
      {showDeleteModal && (
        <DeleteTodoModal
          setShowDeleteModal={setShowDeleteModal}
          title={viewModalTodo.title}
          id={viewModalTodo.id}
        />
      )}
      {showEditModal && (
        <EditTodoModal
          setShowEditModal={setShowEditModal}
          todoItem={viewModalTodo}
        />
      )}
      <div
        className="transition-all fixed w-full h-full flex justify-center z-[2] "
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
        onClick={() => setShowViewModal(false)}
      ></div>
      <div
        className={
          "absolute z-[3] transition-all flex flex-col my-auto mx-auto w-[320px] lg:w-[720px] rounded-md text-left p-10 text-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] " +
          styles.bgColor
        }
      >
        <h2 className="text-xl font-bold text-left w-full text-gray-600">
          {viewModalTodo.title}
        </h2>
        <div className="flex flex-row space-x-5 h-8">
          <button
            className="bg-green-400 rounded-lg w-20 "
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            <MdModeEdit className="mx-auto" size={24} />
          </button>
          <button
            className="bg-danger rounded-lg w-20 "
            onClick={() => {
              setShowDeleteModal(true);
            }}
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
        <p className="text-base text-justify text-gray-500 font-semibold">
          {viewModalTodo.description}
        </p>
        <div className={"flex flex-col text-sm text-gray-400"}>
          <span className="flex flex-row items-center" title="Created on">
            <MdAlarmAdd />
            {DateTime.fromSeconds(viewModalTodo.dateCreated.seconds).toFormat(
              "EEE, LLL dd kkkk hh:mm a"
            )}
          </span>
          <span className="flex flex-row items-center" title="To do on">
            <MdAlarmOn />
            {DateTime.fromSeconds(viewModalTodo.dateToDo.seconds).toFormat(
              "EEE, LLL dd kkkk hh:mm a"
            )}
          </span>
          <span className="flex flex-row items-center " title="Due on">
            <MdAlarm />
            {DateTime.fromSeconds(viewModalTodo.dateFinished.seconds).toFormat(
              "EEE, LLL dd kkkk hh:mm a"
            )}
          </span>
        </div>
      </div>
    </>
  );
}
