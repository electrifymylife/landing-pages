import * as React from "react";
import * as content from "./style.module.scss";
export const BoxContent = ({ children }) => {
  return (
    <div className={content.content}>
      { children }
    </div>
  );
};
