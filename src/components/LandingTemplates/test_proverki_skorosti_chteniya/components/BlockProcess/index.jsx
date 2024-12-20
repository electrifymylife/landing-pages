import * as React from "react";
import * as process from "./style.module.scss";
import { BlockMain } from "../BlockMain";
export const BlockProcess = ({ children }) => {
  return (
    <BlockMain>
      <div className={process.wrapper}>
        <div className={process.content}>
          { children }
        </div>
        <img
          className={process.image}
          src="https://fs.advance.ru/landing-pages/free/test_proverki_skorosti_chteniya/test-scorochtenie-01.svg"
          alt="Девушка с книгой"
        />
      </div>
    </BlockMain>
  );
};
