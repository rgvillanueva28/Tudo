import CatContainer from "../Components/CategoryContainer";
import TodoCard from "../Components/TodoCard";
import InProgressCard from "../Components/InProgressCard";
import DoneCard from "../Components/DoneCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row justify-around text-center">
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
  );
}
