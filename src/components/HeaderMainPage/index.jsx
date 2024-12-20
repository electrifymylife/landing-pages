import * as React from 'react';
import * as header from "./style.module.scss";
export const HeaderMainPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section className={header.header}>
      <div className={header.container}>
        <div className={header.logoWrap}>
          <button
            className={isOpen ? `${header.hamb} ${header.active}` : `${header.hamb}`}
            aria-label={"Открыть/закрыть меню"}
            onClick={() => {setIsOpen((prevState) => !prevState);}}
          ></button>
          <a href="https://advance.ru/" className={header.logo}>
            <img src="https://fs.advance.ru/landing-pages/icons/advance-logo/logo_2021.svg" alt="Advance"/>
          </a>
        </div>
        <nav className={isOpen ? `${header.nav} ${header.active}` : `${header.nav}`}>
          <a href="https://advance.ru/fulllist/">Расписание</a>
          <a href="https://advance.ru/razvivayushie_kursy/dlya_detey/">Детям</a>
          <a href="https://advance.ru/razvivayushie_kursy/dlya_vzroslyh/">Взрослым</a>
          <a href="https://advance.ru/inostrannye_yazyki/">Английский язык</a>
          <a href="https://advance.ru/razvivayushie_kursy/dlya_vzroslyh/uchiteley/">Преподавателям</a>
          <a href="https://advance.ru/knowledge/articles/">Статьи</a>
          <a href="https://advance.ru/about/">О нас</a>
        </nav>
        <div className={header.btns}>
          <a href="tel:88007005342" className={header.tel}>8 (800) 700-53-42</a>
          <a href="https://edu.advance24.online/" className={header.enter}>Войти</a>
        </div>
      </div>
    </section>
  );
};
