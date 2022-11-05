import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
}

export interface ITodo {
  title: string;
  description: string;
  dateCreated?: Date;
  dateToDo: Date;
  dateFinished: Date;
  category: "todo" | "inProgress" | "done";
}
