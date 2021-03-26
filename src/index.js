import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IsAuthProvider } from "./contexts/isAuth.context";
import { TokenProvider } from "./contexts/token.context";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <IsAuthProvider>
      <TokenProvider>
        <App />
      </TokenProvider>
    </IsAuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
