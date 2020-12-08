import { useContext, useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Context } from "../Context/CategoryContext";

import CatContainer from "../Components/CategoryContainer";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewTodoModal from "../Components/NewTodoModal";

export default function Dashboard() {
  const { currentCategory } = useContext(Context);
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);

  const [isLarge, setIsLarge] = useState(
    global.innerWidth >= 1024 ? true : false
  );

  useEffect(() => {
    global.addEventListener("resize", () => {
      global.innerWidth >= 1024 ? setIsLarge(true) : setIsLarge(false);
    });
  }, [isLarge]);

  return (
    <>
      {showNewTodoModal && <NewTodoModal setShowNewTodoModal={setShowNewTodoModal}  />}
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
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="todo"
              />
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="todo"
              />
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="todo"
              />
            </CatContainer>
          )}
          {!isLarge && currentCategory === "inProgress" && (
            <CatContainer>
              <h1 className="text-3xl">In progress</h1>
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="inProgress"
              />
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="inProgress"
              />
            </CatContainer>
          )}
          {!isLarge && currentCategory === "done" && (
            <CatContainer>
              <h1 className="text-3xl">Done</h1>
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="done"
              />
              <TodoCard
                title="Todo 1"
                dateCreated={new Date()}
                dateToDo={new Date()}
                dateFinished={new Date()}
                description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                category="done"
              />
            </CatContainer>
          )}
          {isLarge && (
            <>
              <CatContainer>
                <h1 className="text-3xl">Todo</h1>
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="todo"
                />
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="todo"
                />
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="todo"
                />
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">In progress</h1>
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="inProgress"
                />
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="inProgress"
                />
              </CatContainer>
              <CatContainer>
                <h1 className="text-3xl">Done</h1>
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="done"
                />
                <TodoCard
                  title="Todo 1"
                  dateCreated={new Date()}
                  dateToDo={new Date()}
                  dateFinished={new Date()}
                  description="Lorem ipsum dolor sit amet tadadadada etc etc. Lorem ipsum dolor sit amet tadadadada etc etc."
                  category="done"
                />
              </CatContainer>
            </>
          )}
        </div>
        {!isLarge && <Footer />}
      </div>
    </>
  );
}
