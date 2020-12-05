import React from "react";
import moment from "moment";
import { MdPlayArrow, MdClear } from "react-icons/md";

interface toDoCardProps {
  title: string;
  dateCreated: Date;
  dateToDo: Date;
  dateFinished: Date;
  description: string;
  category: string;
}

export default function TodoCard({
  title,
  dateCreated,
  dateToDo,
  dateFinished,
  description,
  category,
}: toDoCardProps) {
  const styles = {
    bgColor:
      category === "todo"
        ? "bg-brand-dark"
        : category === "inProgress"
        ? "bg-brand-main"
        : "bg-success",
    dateColor:
      category === "todo"
        ? "text-warning"
        : category === "inProgress"
        ? "text-brand-dark"
        : "text-danger",
    nextBtnColor:
      category === "todo"
        ? "bg-brand-main"
        : category === "inProgress"
        ? "bg-success"
        : "hidden",
  };

  return (
    <div
      className={
        "flex flex-col w-100 my-2 rounded-lg text-left p-3 text-white " +
        styles.bgColor
      }
    >
      <div className="flex flex-row justify-around">
        <h2 className="text-xl font-bold text-left w-full">{title}</h2>
        <div className="flex flex-row">
          <button className="bg-danger rounded-lg w-20 mx-2">
            <MdClear className="mx-auto" size={24} />
          </button>
          <button
            className={
              "bg-brand-main rounded-lg w-20 mx-2 " + styles.nextBtnColor
            }
          >
            <MdPlayArrow className="mx-auto" size={24} />
          </button>
        </div>
      </div>
      <div
        className={"flex flex-col font-semibold text-sm " + styles.dateColor}
      >
        <p>{`Created on ${moment(dateCreated).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`To finish on ${moment(dateToDo).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`Due date on ${moment(dateFinished).format(
          "ddd, MMM DD YYYY hh:mm A"
        )}`}</p>
      </div>
      <p className="text-base text-justify">{description}</p>
    </div>
  );
}
