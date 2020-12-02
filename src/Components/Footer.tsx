import { MdAssignment, MdSync, MdDone } from "react-icons/md";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <div className="fixed bottom-0 flex flex-row bg-brand-dark min-w-full">
      <nav
        className="my-auto flex flex-row w-full text-white justify-around"
        style={{ height: "56px" }}
      >
        <FooterItem
          text="Todo"
          icon={<MdAssignment size={24} className="mx-auto" />}
        />
        <FooterItem
          text="In Progress"
          icon={<MdSync size={24} className="mx-auto" />}
        />
        <FooterItem
          text="Done"
          icon={<MdDone size={24} className="mx-auto" />}
        />
      </nav>
    </div>
  );
}
