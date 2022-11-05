import React from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Context/AuthContext";
import AppProvider from "./Context/AppContext";
import "./Styles/styles.css";
import "react-datepicker/dist/react-datepicker.min.css";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
