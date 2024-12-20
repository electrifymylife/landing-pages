import * as React from 'react';
import { useEffect, useState } from "react";
import { DefaultLayout } from '../../../../components/DefaultLayout';
import { Seo } from "../../../../components/Seo";

import { FooterFull } from "../../../../components/FooterFull";
import { GetCourseWidget } from "../../../../components/GetCourseWidget";
import { Modal } from "../../../../components/Modal";
import { ExpertLicenses } from "../../../../components/ExpertLicenses";
import { Licenses } from "../../../../components/Licenses";
import { PartnersTrust } from "../../../../components/PartnersTrust";

import * as main from "./styles/main.module.scss";
import * as banners from "./styles/banners.module.scss";
import * as screen1 from "./styles/screen1.module.scss";
import * as house from "./styles/house.module.scss";
import * as adv from "./styles/adv.module.scss";

const Banner12 = () => {
  return (
    <a className={`${banners.banner} ${banners.bn12}`} href={"/marathon/ngr_2024/web12/"} target={"_blank"} rel={"noreferrer"}>
      <time><span>12</span>декабря в&nbsp;19:00 (мск)</time>
      <div className={banners.info}>
        <h3>Новогоднее чудо!</h3>
        <p className={banners.sub}>Из <i>«Мама, не хочу в школу»</i> в <i>«Ура, понедельник!»</i></p>
        <p className={banners.desc}>Как привить и сохранить любовь к учебе в начальной школе</p>
      </div>
    </a>
  );
};
const Banner19 = () => {
  return (
    <a className={`${banners.banner} ${banners.bn19}`} href={"/marathon/ngr_2024/web19/"} target={"_blank"} rel={"noreferrer"}>
      <time><span>19</span>декабря в&nbsp;19:00 (мск)</time>
      <div className={banners.info}>
        <h3>В новый год с новым подходом!</h3>
        <p className={banners.sub}>Как от <i>«Вырастешь, станешь <s>дворником</s> курьером!»</i> перейти к <i>«Я горжусь тобой!»</i></p>
        <p className={banners.desc}>Мастер-класс для родителей и школьников</p>
      </div>
    </a>
  );
};
const Banner26 = () => {
  return (
    <a className={`${banners.banner} ${banners.bn26}`} href={"/marathon/ngr_2024/web26/"} target={"_blank"} rel={"noreferrer"}>
      <time><span>26</span>декабря в&nbsp;20:00 (мск)</time>
      <div className={banners.info}>
        <h3>Новогодние посиделки</h3>
        <p className={banners.sub}>Планирование целей на 2025 год<br/> в режиме реального времени</p>
        <p className={banners.desc}>Прямой эфир с разборами и ответами на ваши вопросы</p>
      </div>
    </a>
  );
};
const Screen1 = (props) => {
  return (
    <section className={screen1.screen1}>
      <div className="container">
        <div className={screen1.logoContainer}>
          <div className={screen1.logoWrap}>
            <img src="https://fs.advance.ru/landing-pages/icons/advance-logo/chrtreelogo.svg" alt=""/>
          </div>
          <h2>Новый год в Advance</h2>
        </div>
        { props.banner }
        <h1>
          <span className="visually-hidden">Адвент-календарь знаний</span>
          <img src="https://fs.advance.ru/landing-pages/marathon/ngr_2024/advent_calendar/advent-zag.png" alt="Адвент-календарь знаний"/>
        </h1>
        <a href={"https://advance.ru/marathon/ngr_2024/"} className={`${main.btn} ${main.violetShadow} ${screen1.btn}`} target={"_blank"} rel={"noreferrer"}>
          Зарегистрироваться на марафон,<br/> чтобы не пропустить подарки
        </a>
        { props.timer }
      </div>
    </section>
  );
};
const Window = ({ widget, videoSrc, altText, classname, id }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className={classname} id={id} onClick={()=>{setShowModal(true)}}>
        <span className={"visually-hidden"}>{ altText }</span>
      </button>

      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        maxWidth={videoSrc && "md"}
      >
        {
          widget ||
          <div style={{width:"100%", padding:"30px"}}>
            <div style={{position:"relative",paddingTop:"56.25%"}}>
              <iframe
                title={"Видео"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                allow="autoplay; encrypted-media"
                src={videoSrc}
                allowFullScreen
              />
            </div>
          </div>
        }
      </Modal>
    </>
  );
};
const House = ({ children }) => {

  return (
    <section className={house.house}>
      <picture>
        <source srcSet="https://fs.advance.ru/landing-pages/marathon/ngr_2024/advent_calendar/bg-ngr-house-320.png" media="(max-width: 767px)"/>
        <source srcSet="https://fs.advance.ru/landing-pages/marathon/ngr_2024/advent_calendar/bg-ngr-house-768.png" media="(max-width: 1199px)"/>
        <source srcSet="https://fs.advance.ru/landing-pages/marathon/ngr_2024/advent_calendar/bg-ngr-house.png"/>
        <img src="https://fs.advance.ru/landing-pages/marathon/ngr_2024/advent_calendar/bg-ngr-house.png" alt={"Адвент-календарь"}/>
      </picture>
      { children }
    </section>
  );
};
const Advance = () => {
  return (
    <section className={adv.adv}>
      <div className="container">
        <div className={adv.aboutBlock}>
          <img src="https://fs.advance.ru/landing-pages/marathon/ngr_2024/main/ng-rocket.png" alt=""/>
          <div className={adv.info}>
            <h2><span>Мы —</span> центр образовательных технологий</h2>
            <ul>
              <li>
                <h3>с 2009 года</h3>
                <p>учим людей раскрывать и&nbsp;развивать свой интеллектуальный потенциал, повышать личную эффективность</p>
              </li>
              <li>
                <h3>1,6 млн</h3>
                <p>человек приняли участие в&nbsp;наших курсах и семинарах</p>
              </li>
              <li>
                <h3>85 000</h3>
                <p>человек прошли наши полные курсы</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${adv.container} ${adv.violet} ${adv.experts}`}>
          <h2 className={main.title}>Нас ценят эксперты образования</h2>
          <ExpertLicenses subTitleColor={'#FE4D07'} navColor={'#FE4D07'}/>
        </div>
        <div className={`${adv.container} ${adv.violet} ${adv.develop}`}>
          <h2 className={main.title}>Мы развиваем образование</h2>
          <Licenses navColor={'#FE4D07'}/>
        </div>
        <div className={`${adv.container} ${adv.partners}`}>
          <PartnersTrust ttlName={`${main.title} ${adv.title}`}/>
        </div>
      </div>
    </section>
  );
};
const MainComponent = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [started, setStarted] = useState(false);

  let [showBanner, setShowBanner] = useState('bn12');

  const data = new Map([
    [
      9,
      {
        "id": "btn9",
        "classname": `${house.btn9}`,
        "videoSrc": "https://65395.servicecdn.ru/videos/65395_2nRuz56JaToyeyIY",
        "altText": "Видео по детской мотивации, часть 1"
      }
    ],
    [
      10,
      {
        "id": "btn10",
        "classname": `${house.btn10}`,
        "widget": <GetCourseWidget hash={'f9ed2564e18ffa36f231bbe37f33fc3d42000996'} id={'1322867'}/>,
        "altText": "Чек-лист «Договор с детьми о порядке»"
      }
    ],
    [
      11,
      {
        "id": "btn11",
        "classname": `${house.btn11}`,
        "videoSrc": "https://65395.servicecdn.ru/videos/65395_LbaUjElQ5QYP1Sj",
        "altText": "Видео по ускоренному запоминанию иностранных слов"
      }
    ],
    [
      12,
      {
        "id": "btn12",
        "classname": `${house.btn12}`,
        "widget": <GetCourseWidget hash={'073ebf95b5136f5d7a7a8dfe726ecc58f1ebcd23'} id={'1322868'}/>,
        "altText": "Мини-курс «100 слов для путешествий»"
      }
    ],
    [
      13,
      {
        "id": "btn13",
        "classname": `${house.btn13}`,
        "videoSrc": "https://65395.servicecdn.ru/videos/65395_fnvLWxiy6u9tbyw4",
        "altText": "Видео по детской мотивации, часть 2"
      }
    ],
    [
      14,
      {
        "id": "btn14",
        "classname": `${house.btn14}`,
        "widget": <GetCourseWidget hash={'920f09e3c9e97282f09f5f535c1ab344b081ea57'} id={'1322869'}/>,
        "altText": "Мини-курс «Тайм-менеджмент»"
      }
    ],
    [
      15,
      {
        "id": "btn15",
        "classname": `${house.btn15}`,
        "widget": <GetCourseWidget hash={'9499cdffb3caf1c2469bc25280fbc3186c0244ed'} id={'1322870'}/>,
        "altText": "Чек-лист «5 шагов против усталости»"
      }
    ],
    [
      16,
      {
        "id": "btn16",
        "classname": `${house.btn16}`,
        "widget": <GetCourseWidget hash={'b3e3946bb1f6a153f0c35fc746af2f9e6aae625b'} id={'1322871'}/>,
        "altText": "Чек-лист «Договор с ребёнком»"
      }
    ],
    [
      17,
      {
        "id": "btn17",
        "classname": `${house.btn17}`,
        "videoSrc": "https://65395.servicecdn.ru/videos/65395_KZ3x0jjJjc4Wewx",
        "altText": "Видео по детской мотивации, часть 3"
      }
    ],
    [
      18,
      {
        "id": "btn18",
        "classname": `${house.btn18}`,
        "widget": <GetCourseWidget hash={'db6d5a19c75d6f80ba07bd39dffe2bb852d6eeea'} id={'1322872'}/>,
        "altText": "Мини-курс Неправильные глаголы английского"
      }
    ],
    [
      19,
      {
        "id": "btn19",
        "classname": `${house.btn19}`,
        "videoSrc": "https://65395.servicecdn.ru/videos/65395_5vygTZPTcQsFyLwq",
        "altText": "Секреты ускоренного изучения языков"
      }
    ],
  ]);

  const startDate = '2024-12-09T10:00:00';
  const endDate = '2024-12-20T10:00:00';

  const bannerShow12 = '2024-12-12T19:00:00';
  const bannerShow19 = '2024-12-19T19:00:00';
  const bannerShow26 = '2024-12-26T20:00:00';

  const today = new Date();
  const tomorrow = new Date().setDate(today.getDate() + 1);
  let openDate; // дата (номер дня) открытого окна
  let closeDate = new Date(new Date(new Date(new Date(tomorrow).setHours(10)).setMinutes(0)).setSeconds(0)); // дедлайн, всегда завтра 10:00, пока не достигли endDate - окончательного дедлайна

  let currentId = '';
  let currentVidSrc = '';
  let currentWidget;
  let currenAltText = '';

  // задаем текущую открытую дату и дедлайн для таймера открытого подарка
  // если сегодняшняя дата >= 10:00:00, в дедлайне лежит завтрашний день и номер дня = сегодня
  // если сегодняшняя дата <= 10:00:00 (перевалили через полночь), в дедлайне лежит сегодняшний день и номер дня = вчера
  if (today - new Date(new Date(new Date(new Date(today).setHours(10)).setMinutes(0)).setSeconds(0)) >= 0) {
    openDate = today.getDate();
  } else if (tomorrow - closeDate <= 0) {
    closeDate = new Date(new Date(new Date(new Date(today).setHours(10)).setMinutes(0)).setSeconds(0));
    openDate = new Date(today).getDate() - 1;
  }

  for (const [date, info] of data) {
    if (started && date === openDate) {
      currentId = info.id;
      currentVidSrc = info.videoSrc && info.videoSrc;
      currentWidget = info.widget && info.widget;
      currenAltText = info.altText;
    }
  }

  const getTime = () => {
    const time = new Date(closeDate) - Date.now();

    if (time > 0) {
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    } else {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };
  const getText = (number, text) => {
    if (text === 'hours') {
      if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'часов';
      let last_num = number % 10;
      if (last_num === 1) return 'час';
      if ([2, 3, 4].includes(last_num)) return 'часа';
      if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'часов';
    } else if (text === 'minutes') {
      if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'минут';
      let last_num = number % 10;
      if (last_num === 1) return 'минута';
      if ([2, 3, 4].includes(last_num)) return 'минуты';
      if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'минут';
    } else if (text === 'seconds') {
      if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'секунд';
      let last_num = number % 10;
      if (last_num === 1) return 'секунда';
      if ([2, 3, 4].includes(last_num)) return 'секунды';
      if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'секунд';
    }
  };
  useEffect(() => {
    let interval;
    if (new Date(startDate) - Date.now() <= 0 && new Date(endDate) - Date.now() > 0) {
      setStarted(true);
      interval = setInterval(() => getTime(closeDate), 1000);
    } else {
      setStarted(false);
      return () => clearInterval(interval);
    }
  }, [openDate]);
  useEffect(() => {
    if (new Date(bannerShow12) - Date.now() > 0) {
      setShowBanner('bn12');
    } else if (new Date(bannerShow12) - Date.now() < 0 && new Date(bannerShow19) - Date.now() > 0) {
      setShowBanner('bn19');
    } else if (new Date(bannerShow26) - Date.now() > 0) {
      setShowBanner('bn26');
    }
  });
  return (
    <>
      <div className={main.bgHouse}>
        <Screen1
          banner={
            showBanner === 'bn12' ?
              <Banner12/>
              : showBanner === 'bn19' ?
              <Banner19/>
              :
              <div className={!started && `${banners.calendarClosed}`}>
                <h4 hidden={started}>Адвент-календарь уже&nbsp;закрыт.<br/> Но вы еще успеваете попасть на&nbsp;эфир</h4>
                <Banner26/>
              </div>
          }
          timer={
            started && <div className={screen1.timerWrap}>
              <h3>Этот подарок доступен ещё</h3>
              <div className={screen1.timer}>
                <p><span>{hours}</span> <span>{getText(hours, 'hours')}</span></p>
                <p><span>{minutes < 10 ? '0' + minutes : minutes}</span><span>{getText(minutes, 'minutes')}</span></p>
                <p><span>{seconds < 10 ? '0' + seconds : seconds}</span> <span>{getText(seconds, 'seconds')}</span></p>
              </div>
              <a href={`#btn${openDate}`} className={screen1.jumpBtn}>Перейти к подарку&nbsp;&rarr;</a>
            </div>
          }
        />
        <House>
          {
            [...data].map(([key, value]) => (
              <Window
                widget={openDate === key && currentWidget}
                videoSrc={openDate === key && currentVidSrc}
                classname={started && openDate === key ? `${value.classname} ${house.open}` : started && openDate < key ? `${value.classname}` : `${value.classname} ${house.closed}`}
                id={openDate === key ? currentId : undefined}
                key={key}
                altText={openDate === key && currenAltText}
              />
            ))
          }
        </House>
      </div>
      <div className={main.bgBig}>
        <div className="container">
          {
            showBanner === 'bn12' ?
              <Banner12/>
              : showBanner === 'bn19' ?
                <Banner19/>
                :
                <Banner26/>
          }
        </div>
        <Advance/>
      </div>
    </>
  );
};

const TITLE = 'Адвент-календарь знаний';
const DESCRIPTION = 'Новый год от Advance | Адвент-календарь с подарками, 11 полезных бесплатных материалов, 3 новогодних мастер-класса';
export const Head = () => (
  <Seo title={TITLE} description={DESCRIPTION}>
    <title>{TITLE}</title>
  </Seo>
);
const Page = () => (
  <DefaultLayout>

    <main>
      <MainComponent/>
    </main>

    <FooterFull/>
  </DefaultLayout>
);
export default Page;
