import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "./Utils/Store";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
