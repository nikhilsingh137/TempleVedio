import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FullVideoPage from "./Page/FullVideoPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FullVideoPage />
  </React.StrictMode>
);
