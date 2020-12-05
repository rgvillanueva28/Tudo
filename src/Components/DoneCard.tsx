import React from "react";
import moment from "moment";

interface toDoCardProps {
  title: string;
  dateCreated: Date;
  dateToDo: Date;
  dateFinished: Date;
  description: string;
}

export default function DoneCard({
  title,
  dateCreated,
  dateToDo,
  dateFinished,
  description,
}: toDoCardProps) {
  return (
    <div className="flex flex-col w-100 my-2 rounded-lg bg-success text-left p-3 text-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-danger flex flex-col font-semibold text-sm">
        <p>{`Created on ${moment(dateCreated).format(
          "dddd, MMM DD YYYY hh:mm A"
        )}`}</p>
        <p>{`To do on ${moment(dateToDo).format(
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
