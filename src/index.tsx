import React from "react";
import ReactDOM from "react-dom";
import Provider from "./Context/CategoryContext";
import "./Styles/styles.css";
import "react-datepicker/dist/react-datepicker.min.css"

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
