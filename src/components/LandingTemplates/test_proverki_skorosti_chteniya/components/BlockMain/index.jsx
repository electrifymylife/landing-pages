import * as React from "react";
import * as main from "./style.module.scss";
export const BlockMain = ({ children }) => {
  return (
    <section className={main.main}>
      <div className="container">
        { children }
      </div>
    </section>
  );
};
