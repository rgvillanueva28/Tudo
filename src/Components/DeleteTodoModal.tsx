import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { AppContext } from "../Context/AppContext";
import useOnclickOutside from "react-cool-onclickoutside";

export default function DeleteTodoModal({
  setShowDeleteModal,
  title,
  id,
}: any) {
  const { deleteTodo } = useContext(AppContext);
  const ref = useOnclickOutside(() => {
    setShowDeleteModal(false);
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await deleteTodo(id)
      .then(() => {
        console.log("Deleted");
      })
      .catch((err: any) => {
        console.log(err);
      });
    setLoading(false);

    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen flex justify-center z-0"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      >
        <div
          ref={ref}
          className="relative mx-auto my-auto text-center p-5 lg:p-10 rounded shadow-lg bg-white w-11/12 lg:w-1/2"
        >
          <button
            disabled={loading}
            onClick={() => setShowDeleteModal(false)}
            className="transition duration-200 absolute top-5 right-5 bg-danger hover:bg-red-400 text-white rounded-full p-1"
          >
            <MdClose size={24} />
          </button>
          <form className="flex flex-col text-left" onSubmit={handleSubmit}>
            <h1 className="text-xl mb-5 font-bold text-center">
              Delete {title}
            </h1>
            <p className="text-base mb-5 text-justify">
              Are you sure you want to delete item <strong>{title}</strong>?
            </p>
            <div className="flex flex-row space-x-5">
              <input
                disabled={loading}
                type="submit"
                className="transition duration-200 mt-5 p-2 w-full rounded bg-danger text-white cursor-pointer hover:bg-red-400"
                value="Confirm"
              />
              <button
                disabled={loading}
                type="button"
                className="transition duration-200 mt-5 p-2 w-full rounded bg-brand-main text-white cursor-pointer hover:bg-blue-300"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
