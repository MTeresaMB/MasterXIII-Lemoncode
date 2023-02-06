import React from "react";
import { createRoot } from "react-dom/client";
import classes from "./index.scss";


const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello World from React DOM</h1>
    <p>This is a simple react app</p>
  </div>
);