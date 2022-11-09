import { useContext } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import { AppContext } from "../Context/AppContext";

export default function Header() {
  const { showNavDrawer, setShowNavDrawer } = useContext(AppContext);
  return (
    <div className="fixed flex flex-row bg-brand-dark min-w-full z-[50]">
      <nav
        className="my-auto flex flex-row w-full text-white justify-between"
        style={{ height: "56px" }}
      >
        <div className="my-auto flex flex-row">
          <button
            title="logout"
            onClick={() => setShowNavDrawer(!showNavDrawer)}
          >
            <MdMenu size={24} style={{ margin: "16px" }} />
          </button>
          <span
            style={{ margin: "auto 16px auto 16px" }}
            className="text-xl my-auto"
          >
            Tudo
          </span>
        </div>
        <div className="my-auto flex flex-row">
          <MdSearch size={24} style={{ margin: "16px" }} />
        </div>
      </nav>
    </div>
  );
}
