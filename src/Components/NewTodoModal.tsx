import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { AppContext } from "../Context/AppContext";
import useOnclickOutside from "react-cool-onclickoutside";

import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";

export default function NewTodoModal({ setShowNewTodoModal }: any) {
  const { newTodo, setNewTodo, clearNewTodo, addTodo } = useContext(AppContext);
  const ref = useOnclickOutside(() => {
    setShowNewTodoModal(false);
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    setNewTodo({
      ...newTodo,
      dateCreated: new Date(),
    });

    console.log(newTodo);
    await addTodo(newTodo)
      .then((data: any) => {
        console.log(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
    setLoading(false);
    clearNewTodo();
    setShowNewTodoModal(false);
  };

  return (
    <>
      <div
        className="absolute top-0 w-full h-screen flex justify-center z-0"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <div
          ref={ref}
          className="relative mx-auto my-auto text-center p-5 lg:p-10 rounded shadow-lg bg-white w-11/12 lg:w-1/2"
        >
          <button
            disabled={loading}
            onClick={() => setShowNewTodoModal(false)}
            className="transition duration-200 absolute top-5 right-5 bg-danger hover:bg-red-400 text-white rounded-full p-1"
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
              disabled={loading}
              type="submit"
              className="transition duration-200 mt-5 p-2 w-full rounded bg-brand-main text-white cursor-pointer hover:bg-blue-300"
            />
            <button
              disabled={loading}
              type="button"
              className="transition duration-200 mt-5 p-2 w-full rounded bg-danger text-white cursor-pointer hover:bg-red-400"
              onClick={clearNewTodo}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
