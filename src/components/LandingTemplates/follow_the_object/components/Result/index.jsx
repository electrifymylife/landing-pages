import * as React from 'react';
import * as res from "./style.module.scss";
import {
  TelegramShareButton,
  VKShareButton,
  OKShareButton,
} from "react-share";
export const Result = ({ steps, speedWords, isAnswerRight }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const title = isAnswerRight ?`Мой результат: ${steps} ходов на скорости ${speedWords} Проверь свой по ссылке!` : `Тренирую память и внимание. Присоединяйся по ссылке!`;
  const handleBtnCopyClick = () => {
    typeof window !== 'undefined' && window.location.href && navigator.clipboard.writeText(url)
  };
  return (
    <div className={res.result}>
      {
        isAnswerRight ?
          <div className={res.textWrap}>
            <p><strong>Ваш результат: <span>{steps} ходов на скорости {speedWords}</span></strong></p>
            <p><strong>Просто фантастика!</strong> Поделитесь этим в соцсетях! <button className={res.btnCopy} aria-label={"copy"} onClick={handleBtnCopyClick}></button></p>
          </div>
          :
          <div className={res.textWrap}>
            <p>Навык будет улучшаться с каждой новой попыткой!</p>
            <p>Поделись этим полезным упражнением в соцсетях! <button className={res.btnCopy} aria-label={"copy"} onClick={handleBtnCopyClick}></button></p>
          </div>
      }
      <ul>
        <li><VKShareButton className={res.vk} url={url} title={title}></VKShareButton></li>
        <li><TelegramShareButton className={res.tg} url={url} title={title}></TelegramShareButton></li>
        <li><OKShareButton className={res.ok} url={url} title={title}></OKShareButton></li>
      </ul>
    </div>
  );
};
