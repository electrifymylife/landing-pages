import * as React from 'react';
import * as cont from "./style.module.scss";
export const Container = ({ children }) => {
  return (
    <section>
      <div className={`container ${cont.mainContainer}`}>
        <div className={cont.container}>
          { children }
        </div>
      </div>
    </section>
  );
};
