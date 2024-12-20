import * as React from 'react';
import * as cookie from "./style.module.scss";

export const CookiesAgreePopup = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`${cookie.alert} ${show && 'show'}`}>
      <p>Мы используем файлы cookie. Вы не пpотив?</p>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        ОК
      </button>
    </div>
  );
};
