import React from "react";
import c from "./header.layout.style.css";

interface Props {
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={c.containerHeader}>
      {children}
    </div>
  );
};
