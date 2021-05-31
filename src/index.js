import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LibraryProvider } from "./LibraryContext";

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
