import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Context/CategoryContext";

function AuthenticatedRoute({ component: Component, ...rest }: any) {
  const { currentUser } = useContext(Context);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default AuthenticatedRoute;
