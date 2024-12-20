import * as React from "react";
import * as screen1 from "./style.module.scss";
import { BlockProcess } from "../BlockProcess";
import { MainBtn } from "../Buttons";
export const Screen1 = ({ onStart }) => {

  const handleClick = () => {
    onStart(true)
  }

  return (
    <BlockProcess>
      <div className={screen1.screen1}>
        <h1>Онлайн-тест <br/> проверки скорости чтения и&nbsp;понимания прочитанного</h1>
        <p>
          Приготовьтесь к чтению и нажмите кнопку <strong>Пройти тест</strong>.<br/>
          Кнопка запускает Таймер.
        </p>
        <p>
          Читайте с комфортной скоростью, чтобы тестирование было достоверным.
        </p>
        <p>
          Нажмите кнопку <strong>Готово</strong>, как только вы закончите. Это остановит таймер и вы перейдете к блоку с вопросами. После ответов на вопросы мы покажем вам результаты теста.
        </p>
        <div className={screen1.btnBlock}>
          <MainBtn action={handleClick} text={"Пройти тест"}/>
        </div>
      </div>
    </BlockProcess>
  );
};
