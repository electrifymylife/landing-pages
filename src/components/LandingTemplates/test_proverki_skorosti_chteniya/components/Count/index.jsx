import * as React from "react";
import * as count from "./style.module.scss";
export const Count = ({ q }) => {
  return (
    <p className={count.count}>
      Вопрос <span>{q}</span> из <span>10</span>
    </p>
  );
};
