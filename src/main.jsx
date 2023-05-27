import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename='/food-shop'>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
