import { useContext } from "react";
import { MdMenu, MdSearch, MdLogout } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="fixed flex flex-row bg-brand-dark min-w-full z-[1]">
      <nav
        className="my-auto flex flex-row w-full text-white justify-between"
        style={{ height: "56px" }}
      >
        <div className="my-auto flex flex-row">
          <MdMenu size={24} style={{ margin: "16px" }} />
          <span
            style={{ margin: "auto 16px auto 16px" }}
            className="text-xl my-auto"
          >
            Tudo
          </span>
        </div>
        <div className="my-auto flex flex-row">
          <MdSearch size={24} style={{ margin: "16px" }} />
          <button title="logout" onClick={() => logout()}>
            <MdLogout size={24} style={{ margin: "16px" }} />
          </button>
        </div>
      </nav>
    </div>
  );
}
