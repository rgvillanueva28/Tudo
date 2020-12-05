import { useState } from "react";
import CatContainer from "../Components/CategoryContainer";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Dashboard() {

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row justify-around text-center">
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
      </div>
      <Footer />
    </>
  );
}
