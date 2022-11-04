import React from "react";
import { createRoot } from "react-dom/client";
import Provider from "./Context/CategoryContext";
import "./Styles/styles.css";
import "react-datepicker/dist/react-datepicker.min.css";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
