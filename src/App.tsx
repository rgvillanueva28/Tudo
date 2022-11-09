import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";

import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import PrivateRoute from "./HOCs/PrivateRoute";
import AuthenticatedRoute from "./HOCs/AuthenticatedRoute";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <div className="min-h-screen relative flex flex-col">
        {currentUser && <Header />}
        <div
          style={
            currentUser && {
              paddingTop: "56px",
              paddingBottom: "56px",
            }
          }
          className="flex flex-1"
        >
          <Routes>
            <Route
              path="/login"
              element={<AuthenticatedRoute component={Login} />}
            />
            <Route
              path="/signup"
              element={<AuthenticatedRoute component={Signup} />}
            />
            <Route path="/" element={<PrivateRoute component={Dashboard} />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
