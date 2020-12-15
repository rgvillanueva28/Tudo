import { useContext, useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Context } from "../Context/CategoryContext";

import CatContainer from "../Components/CategoryContainer";
import TodoCard from "../Components/TodoCard";
import Footer from "../Components/Footer";
import NewTodoModal from "../Components/NewTodoModal";

export default function Dashboard() {
  const { currentCategory, getTodos, todoItems } = useContext(Context);
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);

  const [isLarge, setIsLarge] = useState(
    global.innerWidth >= 1024 ? true : false
  );

  useEffect(() => {
    getTodos();
    global.addEventListener("resize", () => {
      global.innerWidth >= 1024 ? setIsLarge(true) : setIsLarge(false);
    });
  }, []);

  return (
    <>
      {showNewTodoModal && (
        <NewTodoModal setShowNewTodoModal={setShowNewTodoModal} />
      )}
      <div className="flex flex-col flex-1">
        <button
          className="text-white transition-all duration-200 flex flex-row rounded-lg bg-brand-main hover:bg-accent-dark px-3 py-2 mx-auto mt-5"
          onClick={() => setShowNewTodoModal(true)}
        >
          <MdAddCircleOutline size={24} />
          &nbsp;Add new
        </button>
        <div className="container mx-auto flex flex-col lg:flex-row justify-around text-center">
          {!isLarge && currentCategory === "todo" && (
            <CatContainer>
              <h1 className="text-3xl">Todo</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "todo")
                .map((todoItem: any) => {
                  return <TodoCard todoItem={todoItem} />;
                })}
            </CatContainer>
          )}
          {!isLarge && currentCategory === "inProgress" && (
            <CatContainer>
              <h1 className="text-3xl">In progress</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "inProgress")
                .map((todoItem: any) => {
                  return <TodoCard todoItem={todoItem} />;
                })}
            </CatContainer>
          )}
          {!isLarge && currentCategory === "done" && (
            <CatContainer>
              <h1 className="text-3xl">Done</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "done")
                .map((todoItem: any) => {
                  return <TodoCard todoItem={todoItem} />;
                })}
            </CatContainer>
          )}
          {isLarge && (
            <>
              <CatContainer>
                <h1 className="text-3xl">Todo</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "todo")
                  .map((todoItem: any) => {
                    return <TodoCard todoItem={todoItem} />;
                  })}
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">In progress</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "inProgress")
                  .map((todoItem: any) => {
                    return <TodoCard todoItem={todoItem} />;
                  })}
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">Done</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "done")
                  .map((todoItem: any) => {
                    return <TodoCard todoItem={todoItem} />;
                  })}
              </CatContainer>
            </>
          )}
        </div>
        {!isLarge && <Footer />}
      </div>
    </>
  );
}
