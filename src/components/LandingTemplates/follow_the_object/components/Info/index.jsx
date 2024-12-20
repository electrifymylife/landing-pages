import * as React from 'react';
import * as info from "./style.module.scss";
import { Desc } from "../Titles";
import { useEffect } from "react";
export const Info = (
  {
    isStarted,
    subs,
    audio,
    counter,
    word,
    classname,
    rememberedStep,
    delay,
    animate,
    mountedAnimation,
    unmountedAnimation,
    isProcessing,
    isProcessEnded,
    isUserClicked,
    isAnswerRight}
) => {

  useEffect(() => {
    setTimeout(() => {
      isStarted && audio && new Audio(audio).play();
    }, 10);
  }, [counter]);

  if (!isStarted && !isUserClicked) {
    return (
      <div className={info.info}>
        <Desc/>
      </div>
    );
  } else if (!isProcessing) {
    return (
      <div className={`${info.info} ${info.c}`}>
        <h3>{delay}</h3>
      </div>
    );
  }
  else if (!isProcessEnded) {
    if (!subs) {
      return (
        <div className={`${info.info} ${info.c}`}>
          <div className={info.btnSoundWrap}>
            <button className={info.btnSound} aria-label={counter}></button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${info.info} ${info.c}`}>
          { <span className={animate ? `${info.direction} ${classname} ${mountedAnimation}` : `${info.direction} ${classname} ${unmountedAnimation}`}>{word}</span> }
          <button className={info.btnSound} aria-label={counter}></button>
        </div>
      );
    };
  } else {
    if (isUserClicked && isAnswerRight) {
      return (
        <div className={`${info.info} ${info.c}`}>
          <h3 className={info.success}>Нашёлся! Среди прочих космических объектов...</h3>
        </div>
      )
    } else if (isUserClicked && !isAnswerRight) {
      return (
        <div className={`${info.info} ${info.c}`}>
          <h3 className={info.error}>Вы ошиблись, тут черничный пирог!</h3>
        </div>
      );
    } else {
      if (rememberedStep > 0) {
        if (rememberedStep === 1) {
          return (
            <div className={`${info.info} ${info.c}`}>
              <h3>Где был объект 1 шаг назад?</h3>
            </div>
          );
        } else {
          return (
            <div className={`${info.info} ${info.c}`}>
              <h3>Где был объект 2 шага назад?</h3>
            </div>
          );
        }
      } else {
        return (
          <div className={`${info.info} ${info.c}`}>
            <h3>Где объект?</h3>
          </div>
        );
      }
    }
  }
}
