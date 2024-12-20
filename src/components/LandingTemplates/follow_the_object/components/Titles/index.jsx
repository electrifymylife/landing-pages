import * as React from 'react';
import * as title from "./style.module.scss";
export const MainTitle = () => {
  return (
    <h1 className={title.title}>Упражнение «Следи за объектом»</h1>
  );
};
export const Desc = () => {
  return (
    <p className={title.desc}>Упражнение направлено на развитие концентрации и распределения внимания.  Способствует формированию периферического зрения, навыка скорочтения, ориентировании в пространстве, помогает развить память.</p>
  );
};
export const TitleDesc = () => {
  return (
    <div>
      <MainTitle/>
      <p className={`${title.desc} ${title.mt}`}>Упражнение направлено на развитие концентрации и распределения внимания.  Способствует формированию периферического зрения, навыка скорочтения, ориентировании в пространстве, помогает развить память.</p>
    </div>
  );
};
