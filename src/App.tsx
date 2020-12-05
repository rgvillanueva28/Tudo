import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";

import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import PrivateRoute from "./HOCs/PrivateRoute";
import AuthenticatedRoute from "./HOCs/AuthenticatedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <div className="min-h-screen relative flex flex-col">
          <Header />
          <div
            style={{
              paddingTop: "56px",
              paddingBottom: "56px",
            }}
            className="flex flex-1"
          >
            <AuthenticatedRoute exact path="/login" component={Login} />
            <AuthenticatedRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </div>
          {/* <Footer /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
