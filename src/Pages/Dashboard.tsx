import { useContext, useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { AppContext } from "../Context/AppContext";

import CatContainer from "../Components/CategoryContainer";
import TodoCard from "../Components/TodoCard";
import Footer from "../Components/Footer";
import NewTodoModal from "../Components/NewTodoModal";

export default function Dashboard() {
  const { currentCategory, getTodos, todoItems, isDesktop } =
    useContext(AppContext);
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);

  useEffect(() => {
    getTodos();
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
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-around text-center">
          {!isDesktop && currentCategory === "todo" && (
            <CatContainer>
              <h1 className="text-3xl">Todo</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "todo")
                .map((thisTodoItem: any) => {
                  return (
                    <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                  );
                })}
            </CatContainer>
          )}
          {!isDesktop && currentCategory === "inProgress" && (
            <CatContainer>
              <h1 className="text-3xl">In progress</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "inProgress")
                .map((thisTodoItem: any) => {
                  return (
                    <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                  );
                })}
            </CatContainer>
          )}
          {!isDesktop && currentCategory === "done" && (
            <CatContainer>
              <h1 className="text-3xl">Done</h1>
              {todoItems
                .filter((todoItem: any) => todoItem.category === "done")
                .map((thisTodoItem: any) => {
                  return (
                    <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                  );
                })}
            </CatContainer>
          )}
          {isDesktop && (
            <>
              <CatContainer>
                <h1 className="text-3xl">Todo</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "todo")
                  .map((thisTodoItem: any) => {
                    return (
                      <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                    );
                  })}
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">In progress</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "inProgress")
                  .map((thisTodoItem: any) => {
                    return (
                      <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                    );
                  })}
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">Done</h1>
                {todoItems
                  .filter((todoItem: any) => todoItem.category === "done")
                  .map((thisTodoItem: any) => {
                    return (
                      <TodoCard todoItem={thisTodoItem} key={thisTodoItem.id} />
                    );
                  })}
              </CatContainer>
            </>
          )}
        </div>
        {!isDesktop && <Footer />}
      </div>
    </>
  );
}
