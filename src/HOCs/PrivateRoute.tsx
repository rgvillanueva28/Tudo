import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ component: Component, roles, ...rest }: any) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
