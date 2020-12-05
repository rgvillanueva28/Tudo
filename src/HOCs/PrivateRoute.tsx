import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context/CategoryContext";

function PrivateRoute({ component: Component, roles, ...rest }: any) {
  const { currentUser } = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
