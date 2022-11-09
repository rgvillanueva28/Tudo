import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { AppContext } from "../Context/AppContext";
import useOnclickOutside from "react-cool-onclickoutside";

import FormInput from "./FormInput";
import FormDatePicker from "./FormDatePicker";

export default function EditTodoModal({ setShowEditModal, todoItem }: any) {
  const { clearNewTodo, updateTodo } = useContext(AppContext);
  const [editTodo, setEditTodo] = useState({
    ...todoItem,
    dateToDo: todoItem.dateToDo.toDate(),
    dateFinished: todoItem.dateFinished.toDate(),
  });

  const ref = useOnclickOutside(() => {
    setShowEditModal(false);
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setEditTodo({
      ...editTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log(editTodo);
    await updateTodo(todoItem.id, editTodo)
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err: any) => {
        console.log(err);
      });
    setLoading(false);
    clearNewTodo();
    setShowEditModal(false);
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen flex justify-center z-[4]"
      >
        <div
          ref={ref}
          className="relative mx-auto my-auto text-center p-5 lg:p-10 rounded shadow-lg bg-white w-11/12 lg:w-1/2"
        >
          <button
            disabled={loading}
            onClick={() => setShowEditModal(false)}
            className="transition duration-200 absolute top-5 right-5 bg-danger hover:bg-red-400 text-white rounded-full p-1"
          >
            <MdClose size={24} />
          </button>
          <form className="flex flex-col text-left" onSubmit={handleSubmit}>
            <h1 className="text-xl mb-5 font-bold text-center">Edit Todo</h1>
            <FormInput
              htmlFor="title"
              title="Title"
              type="text"
              placeholder="Todo 1"
              name="title"
              required
              value={editTodo.title}
              onChange={handleChange}
            />
            <FormInput
              htmlFor="description"
              title="Description"
              type="text"
              required
              placeholder="Lorem Ipsum Dolor sit amet"
              name="description"
              value={editTodo.description}
              onChange={handleChange}
            />
            <label htmlFor="dateTodo" className="font-bold">
              Date to do
            </label>
            <FormDatePicker
              name="dateTodo"
              selected={editTodo.dateToDo}
              onChange={(date: any) =>
                setEditTodo({ ...editTodo, dateToDo: date })
              }
            />
            <label htmlFor="Date" className="font-bold">
              Due date
            </label>
            <FormDatePicker
              name="dateFinished"
              selected={editTodo.dateFinished}
              onChange={(date: any) =>
                setEditTodo({ ...editTodo, dateFinished: date })
              }
            />
            <input
              disabled={loading}
              type="submit"
              className="transition duration-200 mt-5 p-2 w-full rounded bg-brand-main text-white cursor-pointer hover:bg-blue-300"
            />
          </form>
        </div>
      </div>
    </>
  );
}
