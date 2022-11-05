import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function AuthenticatedRoute({ component: Component }: any) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Navigate to={{ pathname: "/" }} /> : <Component />;
}

export default AuthenticatedRoute;
