import * as React from "react";
import * as timer from "./style.module.scss";

export const Timer = ({ time }) => {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return (
    <div className={timer.timer}>
      <h4>Ваше время:</h4>
      <p>
        <span>
          { min < 10 ? `0${min}` : min }:
        </span>
        <span>
          {
            time < 10 ?
              `0${time}`
              :
              sec < 10 ?
                `0${sec}`
                :
                time > 59 ?
                  sec : time
          }
        </span>
      </p>
    </div>
  );
};
