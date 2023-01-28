import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./content/logo_2.png";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className={classes.imgContainer}>
      <img className={classes.img_1} src={logo} alt="logo_2" />
    </div>
    <h1 className={classes.title}>Hello from React DOM</h1>
    <p className={classes.textParagraph}>This is a simple react app</p>
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);
