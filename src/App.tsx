import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <div className="min-h-screen relative flex flex-col">
          <Header />
          <div style={{ paddingTop: "56px", paddingBottom: "56px" }}>
            <Route exact path="/" component={Dashboard} />
          </div>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
