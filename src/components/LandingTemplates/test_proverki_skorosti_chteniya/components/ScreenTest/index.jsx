import * as React from "react";
import * as test from "./style.module.scss";
import { BlockProcess } from "../BlockProcess";
import { BoxContent } from "../BoxContent";
import { MainBtn } from "../Buttons";
import { Count } from "../Count";
import {useEffect, useState} from "react";

const values = [
  {
    q: "Каким человеком был отец Уолтера Элиас Дисней?",
    index: 1,
    items: [
      "Добрым и мягким",
      "Общительным и творческим",
      "Замкнутым и молчаливым",
      "Религиозным и суровым",
      "Вспыльчивым и практичным",
      "Не помню"
    ]
  },
  {
    q: "Какое влияние оказала на Диснея его мать?",
    index: 2,
    items: [
      "Научила читать и привила любовь к книгам",
      "Научила рисовать и помогла развить творческое мышление",
      "Научила быть терпеливым и никогда не сдаваться",
      "Научила разбираться в музыке и привила любовь к классике",
      "Научила любить животных и с добротой относиться к окружающему миру",
      "Не помню"
    ]
  },
  {
    q: "Как появился первый мультфильм Диснея, нарисованный в блокноте?",
    index: 3,
    items: [
      "Уолтер хотел впечатлить одноклассников",
      "Уолтер хотел развеселить больную сестру",
      "Уолтеру было очень скучно",
      "Уолтер хотел, чтобы братья знали, что он хорошо рисует",
      "Уолтер хотел поднять настроение маме в момент безденежья",
      "Не помню"
    ]
  },
  {
    q: "Какая идея пришла в голову Диснею, после того как доктор Л. Л. Шервуд заплатил ему за портрет лошади?",
    index: 4,
    items: [
      "Портреты лошадей пользуются спросом",
      "Не обязательно работать тяжким трудом, чтобы заработать денег",
      "Люди любят животных больше, чем людей",
      "Можно стать профессиональным художником",
      "Рисование лошадей требует слишком много времени",
      "Не помню"
    ]
  },
  {
    q: "Какой работой занимался Уолтер после переезда семьи в Канзас-Сити?",
    index: 5,
    items: [
      "Набирал тексты для печатных станков",
      "Разносил газеты",
      "Зазывал покупателей",
      "Доставлял покупки из магазина",
      "Чистил обувь",
      "Не помню"
    ]
  },
  {
    q: "Благодаря чему, как считают биографы, Уолт смог создавать столь живых персонажей для своих мультфильмов?",
    index: 6,
    items: [
      "Много общался с разными животными в детстве",
      "Много практиковался в рисовании животных с фермы",
      "Брал уроки анимации",
      "Очень сильно любил животных и умел им сопереживать",
      "Изучал основы актёрского искусства в школьном возрасте",
      "Не помню"
    ]
  },
  {
    q: "Какой персонаж стал первым мультгероем Диснея?",
    index: 7,
    items: [
      "Пёс Гуффи",
      "Утёнок Дональд Дак",
      "Мышь Микки Маус",
      "Мышонок Мортимер",
      "Кролик Освальд",
      "Не помню"
    ]
  },
  {
    q: "Как Уолтер относился к звуковому сопровождению в мультфильмах?",
    index: 8,
    items: [
      "Считал, что в мультфильмах главное — это история, а не музыка",
      "Использовал самые популярные песенки того времени",
      "Сам занимался подбором музыкального сопровождения",
      "Нанимал самых профессиональных специалистов для создания музыкального сопровождения",
      "Использовал общепринятые стандарты звукового сопровождения",
      "Не помню"
    ]
  },
  {
    q: "Как режиссёр оценивал идеи своих сотрудников?",
    index: 9,
    items: [
      "Игнорировал",
      "Патентовал, чтобы не дать конкурентам их использовать",
      "Хвалил сотрудников за их креативность",
      "Награждал премиями",
      "Самых талантливых авторов идей делал партнёрами компании",
      "Не помню"
    ]
  },
  {
    q: "Как был придуман Диснейленд?",
    index: 10,
    items: [
      "По просьбам многочисленных фанатов",
      "Идею подсказала жена",
      "Идея пришла к Уолтеру во сне",
      "Предложил один из коллег по съёмочному цеху",
      "Идея пришла в голову во время прогулки с дочерьми",
      "Не помню"
    ]
  }
];


export const ScreenTest = ({ isDone, onResult }) => {
  const [hasScreen, toggleHasScreen] = useState(false)
  const [allowValues, setAllowValues] = useState(values)
  const [screen, setScreen] = useState({});
  const [result, setResult] = useState([])
  const [form, setForm] = useState(null)
  const [checked, setChecked] = useState(false);
  const nextScreen = () => {
    setChecked(false)
    setScreen(allowValues.shift())
    const res = allowValues.filter((value) => value.q !== screen.q)
    setAllowValues(res)
  }

  useEffect(() => {
    if (allowValues.length) {
      nextScreen()
      toggleHasScreen(true)
    }
  }, []);


  const setDone = () => {
    isDone(true)
    onResult(result)
  }

  const handleNextScreen = () => {
    if (!checked) {
      return;
    }
    form.reset();

    if (allowValues.length) {
      setForm(null)
      nextScreen()
      toggleHasScreen(true)
      return;
    }

    toggleHasScreen(false)
    setDone()
  }

  const setAnswer = (index, value) => {
    setChecked(true)
    const filtered = result.filter((item) => item.q !== index)
    setResult([...filtered, {q: index, value}])
  }

  return (
    <BlockProcess>
      <h2>Ответьте на вопросы</h2>
      <BoxContent>
        { hasScreen && (
          <div data-target={`question-${screen.index}`}>
            <h3>{screen.q}</h3>
            <form onSubmit={(e) => e.preventDefault()} ref={(element) => setForm(element)}>
              {screen.items.map((item, index) =>
                <div key={index + screen.index}>
                  <input
                    id={`q${screen.index}-a${index}`}
                    name={`q${screen.index}`}
                    type={"radio"}
                    onClick={() => setAnswer(screen.index, item)}
                  />
                  <label htmlFor={`q${screen.index}-a${index}`}>{item}</label>
                </div>
              )}
            </form>
          </div>
        )}

      </BoxContent>
      <div className={test.btnBlock}>
        <MainBtn disabled={!checked} action={handleNextScreen} text={"Следующий вопрос"}/>
        <Count q={hasScreen ? screen.index : 0}/>
      </div>
    </BlockProcess>
  );
};
