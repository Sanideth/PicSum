import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/context/Context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router base="/">
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
