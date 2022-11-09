import { useContext } from "react";
import { MdAlarmAdd, MdAlarmOn, MdAlarm } from "react-icons/md";
import { DateTime } from "luxon";
import { AppContext } from "../Context/AppContext";
import { ITodo } from "../@types/app";
import ViewTodoModal from "./ViewTodoModal";

export default function TodoCard({ todoItem }: any) {
  const { setShowViewModal, setViewModalTodo } = useContext(AppContext);
  const styles = {
    bgColor:
      todoItem.category === "todo"
        ? "bg-yellow-200"
        : todoItem.category === "inProgress"
        ? "bg-blue-200"
        : "bg-green-200",
  };

  function handleViewTodo() {
    setShowViewModal(true);
    setViewModalTodo(todoItem);
  }

  return (
    <>
      <div
        className={
          "transition-all flex flex-col w-100 my-2 rounded-md text-left p-3 text-white hover:scale-105 hover:cursor-pointer " +
          styles.bgColor
        }
        onClick={handleViewTodo}
      >
        <h2 className="text-xl font-bold text-left w-full text-gray-600">
          {todoItem.title}
        </h2>
        <p className="text-base text-justify text-gray-500 font-semibold">
          {todoItem.description}
        </p>
        <div className={"flex flex-col text-sm text-gray-400"}>
          <span className="flex flex-row items-center" title="Created on">
            <MdAlarmAdd />
            {todoItem.dateCreated.seconds &&
              DateTime.fromSeconds(todoItem.dateCreated.seconds).toFormat(
                "EEE, LLL dd kkkk hh:mm a"
              )}
          </span>
          <span className="flex flex-row items-center" title="To do on">
            <MdAlarmOn />
            {DateTime.fromSeconds(todoItem.dateToDo.seconds).toFormat(
              "EEE, LLL dd kkkk hh:mm a"
            )}
          </span>
          <span className="flex flex-row items-center " title="Due on">
            <MdAlarm />
            {DateTime.fromSeconds(todoItem.dateFinished.seconds).toFormat(
              "EEE, LLL dd kkkk hh:mm a"
            )}
          </span>
        </div>
      </div>
    </>
  );
}
