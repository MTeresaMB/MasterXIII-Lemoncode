import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./content/logo_2.png";
import classes from "./styles.scss";
import { AverageComponent } from "./averageComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className={classes.imgContainer}>
      <img className={classes.img_1} src={logo} alt="logo_2" />
    </div>
    <h1 className={classes.title}>Hello World from React DOM</h1>
    <p className={classes.textParagraph}>This is a simple react app</p>
    <AverageComponent />
  </div>
);
