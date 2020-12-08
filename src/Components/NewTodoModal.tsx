import { useState } from "react";
import { MdClose } from "react-icons/md";

import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";

export default function NewTodoModal({ setShowNewTodoModal }: any) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    dateCreated: new Date(),
    dateToDo: new Date(),
    dateFinished: new Date(),
    description: "",
    category: "todo",
  });

  const handleChange = (e: any) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
    console.log(newTodo);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setNewTodo({
      ...newTodo,
      dateCreated: new Date(),
    });

    console.log(newTodo);
  };

  return (
    <>
      <div
        className="transition-all absolute top-0 w-full h-screen flex justify-center z-0"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <div className="relative mx-auto my-auto text-center p-5 lg:p-10 rounded shadow-lg bg-white w-11/12 lg:w-1/2">
          <button
            onClick={() => setShowNewTodoModal(false)}
            className="absolute top-5 right-5 bg-danger text-white rounded-full p-1"
          >
            <MdClose size={24} />
          </button>
          <form className="flex flex-col text-left" onSubmit={handleSubmit}>
            <h1 className="text-xl mb-5 font-bold text-center">Add new Todo</h1>
            <FormInput
              htmlFor="title"
              title="Title"
              type="text"
              placeholder="Todo 1"
              name="title"
              required
              value={newTodo.title}
              onChange={handleChange}
            />
            <FormInput
              htmlFor="description"
              title="Description"
              type="text"
              required
              placeholder="Lorem Ipsum Dolor sit amet"
              name="description"
              value={newTodo.description}
              onChange={handleChange}
            />
            <label htmlFor="dateTodo" className="font-bold">
              Date to do
            </label>
            <FormDatePicker
              name="dateTodo"
              selected={newTodo.dateToDo}
              onChange={(date: any) =>
                setNewTodo({ ...newTodo, dateToDo: date })
              }
            />
            <label htmlFor="Date" className="font-bold">
              Due date
            </label>
            <FormDatePicker
              name="dateFinished"
              selected={newTodo.dateFinished}
              onChange={(date: any) =>
                setNewTodo({ ...newTodo, dateFinished: date })
              }
            />
            <input
              type="submit"
              className="transition duration-200 mt-5 p-2 w-full rounded bg-brand-main text-white cursor-pointer hover:bg-brand-dark"
            />
          </form>
        </div>
      </div>
    </>
  );
}
