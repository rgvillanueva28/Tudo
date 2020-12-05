import { MdAssignment, MdSync, MdDone } from "react-icons/md";
import FooterItem from "./FooterItem";
import { useContext } from "react";
import { Context } from "../Context/CategoryContext";

export default function Footer() {
  const { currentCategory, setCurrentCategory } = useContext(Context);

  return (
    <div className="fixed bottom-0 flex flex-row bg-brand-dark min-w-full">
      <nav
        className="my-auto flex flex-row w-full text-white justify-around"
        style={{ height: "56px" }}
      >
        <button
          onClick={() => setCurrentCategory("todo")}
          className={
            currentCategory === "todo" ? "text-white" : "text-brand-light"
          }
        >
          <FooterItem
            text="Todo"
            icon={<MdAssignment size={24} className="mx-auto" />}
          />
        </button>
        <button
          onClick={() => setCurrentCategory("inProgress")}
          className={
            currentCategory === "inProgress" ? "text-white" : "text-brand-light"
          }
        >
          <FooterItem
            onClick={() => setCurrentCategory("inProgress")}
            text="In Progress"
            icon={<MdSync size={24} className="mx-auto" />}
          />
        </button>
        <button
          onClick={() => setCurrentCategory("done")}
          className={
            currentCategory === "done" ? "text-white" : "text-brand-light"
          }
        >
          <FooterItem
            onClick={() => setCurrentCategory("done")}
            text="Done"
            icon={<MdDone size={24} className="mx-auto" />}
          />
        </button>
      </nav>
    </div>
  );
}
