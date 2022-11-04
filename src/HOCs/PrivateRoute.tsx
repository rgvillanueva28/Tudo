import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { Context } from "../Context/CategoryContext";

function PrivateRoute({ component: Component, roles, ...rest }: any) {
  const { currentUser } = useContext(Context);

  return currentUser ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
