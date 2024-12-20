import * as React from 'react';
import * as banners from "./style.module.scss";
export const bannersData = [
  {
    banner:
      <div className={`${banners.bn} ${banners.bnOfflineUU}`}>
        <div className={banners.bnWrap}>
          <img src="https://fs.advance.ru/landing-pages/offline/uchis_uchitsya/uu-logo.svg" alt="Лого Учись Учиться"/>
          <h2>Очно в Москве <span>зимний запуск</span></h2>
        </div>
        <p>Технологии ускоренного обучения, <br/>развития интеллекта и повышения мотивации</p>
        <div className={banners.btnWrap}>
          <a href="https://advance.ru/offline/uchis_uchitsya/?t=banner&erid=2SDnjeFii98">Подробнее</a>
          <p>Запись уже началась!</p>
        </div>
        <small>Реклама. Erid: 2SDnjeFii98</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnNachaloUU}`}>
        <h2 style={{ fontSize: "2.2em" }}>
          Учись учиться. Начало
        </h2>
        <p style={{ marginBottom: "0.5em" }}>
          <strong>Инструменты для успеха в школе и в жизни</strong>
        </p>
        <p style={{ fontSize: "0.85em" }}>Онлайн-курс для детей 6–10 лет и их родителей</p>
        <a href="https://advance.ru/online/uchis_uchitsya_nachalo/?t=banner&erid=2SDnjcu3gqv">Подробнее</a>
        <small>Реклама. Erid: 2SDnjcu3gqv</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bn20years}`}>
        <h2>
          Как омолодить мозг на 20&nbsp;лет<br/> и начать вторую молодость
        </h2>
        <p>
          Бесплатное онлайн-занятие <time>cегодня в&nbsp;20:00</time>
        </p>
        <a href="https://advance.ru/webinar/krp_molodostmozga/?t=banner&erid=Kra23ihJC">Подробнее</a>
        <small>Реклама. Erid: Kra23ihJC</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnTM}`}>
        <h2>
          Развитие памяти и&nbsp;тонус мозга
        </h2>
        <p>
          Верните себе энергию и остроту ума!
        </p>
        <p>
          Бесплатное онлайн-занятие <time>завтра в&nbsp;20:00</time>
        </p>
        <a href="https://advance.ru/webinar/krp_tonusmozga/?t=banner&erid=2SDnjehTijA">Подробнее</a>
        <small>Реклама. Erid: 2SDnjehTijA</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnBookUU}`}>
        <p style={{ fontSize: "0.8em", fontWeight: 700, marginBottom: "5px" }}>
          Новая книга-тренажёр
        </p>
        <h2 style={{ fontSize: "2em", marginBottom: "5px" }}>
          УЧИСЬ УЧИТЬСЯ:
        </h2>
        <p style={{ fontSize: "0.8em", fontWeight: 700 }}>
          быстрое запоминание иностранных слов и&nbsp;ускоренное изучение иностранного языка
        </p>
        <a href="https://advance.ru/material/kniga_zapominanie_slov/?t=banner&erid=2SDnjeeHJWU">Подробнее</a>
        <small>Реклама. Erid: 2SDnjeeHJWU</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnPlatform}`}>
        <h2>
          Мы&nbsp;знаем, что&nbsp;вы&nbsp;ждали этого<br/>
          момента. И&nbsp;вот он&nbsp;настал!
        </h2>
        <p>
          Наша&nbsp;платформа теперь&nbsp;адаптирована<br/>
          под&nbsp;<strong>мобильные устройства</strong>.
        </p>
        <a href="https://edu.advance24.online/app/panel/course/?t=banner&erid=Kra23gkfn">Подробнее</a>
        <small>Реклама. Erid: Kra23gkfn</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnEdm} ${banners.white}`}>
        <h3>
          Наша «Энциклопедия детской&nbsp;мотивации»<br/>
          теперь&nbsp;на&nbsp;Ozon по&nbsp;самой выгодной&nbsp;цене —
        </h3>
        <h2>
          379&nbsp;₽
        </h2>
        <p>
          Будем благодарны за отзыв!
        </p>
        <a href="https://advance.ru/about/news/enciklopediya-detskoj-motivacii-teper-na-ozon?t=banner&erid=Kra23uBVE">Подробнее</a>
        <small>Реклама. Erid: Kra23uBVE</small>
      </div>
  },
  {
    banner:
      <div className={`${banners.bn} ${banners.bnAllcourses}`}>
        <h2>
          Все бесплатные курсы <br/>в&nbsp;одном месте
        </h2>
        <a href="https://advance.ru/free/advance_free/?t=banner&erid=Kra244FVN">Подробнее</a>
        <small>Реклама. Erid: Kra244FVN</small>
      </div>
  }
]
