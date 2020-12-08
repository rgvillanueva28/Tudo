import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import DatePicker from "react-datepicker";

import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";

export default function NewTodoModal({ setShowNewTodoModal }: any) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    dateCreated: "",
    dateToDo: new Date(),
    dateFinished: new Date(),
    description: "",
    category: "",
  });

  const setNewTodoRef = useOnclickOutside(() => {
    setShowNewTodoModal(false);
  });

  const handleChange = (e: any) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
    console.log(newTodo);
  };

  return (
    <>
      <div
        className="absolute top-0 w-full h-screen flex justify-center z-0"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <div
          ref={setNewTodoRef}
          className="mx-auto my-auto text-center p-5 lg:p-10 rounded shadow-lg bg-white w-11/12 lg:w-1/2"
        >
          <form className="flex flex-col text-left">
            <h1 className="text-xl">Add new Todo</h1>
            <FormInput
              htmlFor="title"
              title="Title"
              type="text"
              placeholder="Todo 1"
              name="title"
              value={newTodo.title}
              onChange={handleChange}
            />
            <FormInput
              htmlFor="description"
              title="Description"
              type="text"
              placeholder="Lorem Ipsum Dolor sit amet"
              name="description"
              value={newTodo.description}
              onChange={handleChange}
            />
            <label htmlFor="dateTodo">Date to do</label>
            <FormDatePicker
              name="dateTodo"
              selected={newTodo.dateToDo}
              onChange={(date: any) =>
                setNewTodo({ ...newTodo, dateToDo: date })
              }
            />
            <label htmlFor="Date">Due date</label>
            <FormDatePicker
              name="dateFinished"
              selected={newTodo.dateFinished}
              onChange={(date: any) =>
                setNewTodo({ ...newTodo, dateFinished: date })
              }
            />
            <input type="submit" className="mt-5 p-2 w-full rounded bg-brand-main text-white" />
          </form>
        </div>
      </div>
    </>
  );
}
