import React from "react";
import classes from "./header.layout.style.css";

interface Props {
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.containerHeader}>
      {children}
    </div>
  );
};
