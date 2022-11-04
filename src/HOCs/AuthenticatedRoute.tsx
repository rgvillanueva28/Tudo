import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { Context } from "../Context/CategoryContext";

function AuthenticatedRoute({ component: Component }: any) {
  const { currentUser } = useContext(Context);

  return currentUser ? <Navigate to={{ pathname: "/" }} /> : <Component />;
}

export default AuthenticatedRoute;
