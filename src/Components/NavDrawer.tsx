import React, { useContext } from "react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { AppContext } from "../Context/AppContext";
import { AuthContext } from "../Context/AuthContext";

function NavDrawer() {
  const { logout } = useContext(AuthContext);
  const { showNavDrawer, setShowNavDrawer } = useContext(AppContext);

  function handleLogout() {
    logout();
    setShowNavDrawer(false);
  }

  return (
    <>
      <div
        className="transition-opacity duration-300 ease-in-out fixed w-full h-full bg-black bottom-0 left-0 z-[9]"
        style={{
          transform: showNavDrawer ? "translateX(0)" : "translateX(100%)",
          opacity: showNavDrawer ? 0.25 : 0,
        }}
        onClick={() => setShowNavDrawer(!showNavDrawer)}
      ></div>
      <div
        className="transition-all duration-300 ease-in-out h-full bg-white shadow-lg fixed top-0 left-0 w-64 max-w-xl flex flex-col justify-between items-start z-[10]"
        style={{
          transform: showNavDrawer ? "translateX(0)" : "translateX(-100%)",
          paddingTop: "56px",
        }}
      >
        <div className="flex flex-col items-start w-full">
          <button className="transition-color duration-200 flex items-center bg-transparent hover:bg-brand-main w-full">
            <MdAccountCircle size={24} style={{ margin: "16px" }} />
            Account
          </button>
        </div>
        <button
          className="transition-color duration-200 flex items-center bg-transparent hover:bg-brand-main w-full"
          title="logout"
          onClick={handleLogout}
        >
          <MdLogout size={24} style={{ margin: "16px" }} /> Logout
        </button>
      </div>
    </>
  );
}

export default NavDrawer;
