import React from "react";
import moment from "moment";

interface toDoCardProps {
  title: string;
  dateCreated: Date;
  dateToDo: Date;
  dateFinished: Date;
  description: string;
}

export default function InProgressCard({
  title,
  dateCreated,
  dateToDo,
  dateFinished,
  description,
}: toDoCardProps) {
  return (
    <div className="flex flex-col w-100 my-2 rounded-lg bg-brand-main text-left p-3 text-white">
      <div className="flex flex-row justify-around">
        <h2 className="text-xl font-bold text-left w-full">{title}</h2>
        <div className="flex flex-row w-full">
          <button className="bg-danger rounded-lg w-full mx-2">
            <MdClear className="mx-auto" size={24} />
          </button>
          <button className="bg-brand-main rounded-lg w-full mx-2">
            <MdPlayArrow className="mx-auto" size={24} />
          </button>
        </div>
      </div>
      <div className="text-brand-dark flex flex-col font-semibold text-sm">
        <p>{`Created on ${moment(dateCreated).format(
          "dddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`To finish on ${moment(dateToDo).format(
          "dddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`Due date on ${moment(dateFinished).format(
          "dddd, MMM DD YYYY hh:mm A"
        )}`}</p>
      </div>
      <p className="text-base text-justify">{description}</p>
    </div>
  );
}
