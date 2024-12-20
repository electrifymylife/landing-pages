import * as React from "react";
import * as result from "./style.module.scss";
import { BlockMain } from "../BlockMain";
import { ShareButtons } from "../../../../ShareButtons";
import { RestartBtn, MainBtn } from "../Buttons";
import { ScreenLoader } from "../ScreenLoader";
export const ScreenResult = ({ widget, timeStart, timeEnd, answers }) => {
  const [loader, setLoader] = React.useState(true);
  setTimeout(()=>{setLoader(false)}, 3000);

  const answersCorrect = [
    "Религиозным и суровым",
    "Научила читать и привила любовь к книгам",
    "Уолтер хотел развеселить больную сестру",
    "Можно стать профессиональным художником",
    "Разносил газеты",
    "Изучал основы актёрского искусства в школьном возрасте",
    "Кролик Освальд",
    "Сам занимался подбором музыкального сопровождения",
    "Награждал премиями",
    "Идея пришла в голову во время прогулки с дочерьми"
  ];

  // V=(Q/T) — формула расчета скорости чтения
  // где V — скорость чтения
  // Q — число знаков в тексте (объем)
  // Т — время, затраченное на чтение текста (в минутах)

  const TEXT_LENGTH = 978; // Q; в данном случае мы берем количество слов

  let userCorrect = 0;
  answers.filter(item => answersCorrect.includes(item.value) && userCorrect++);

  const understandingPercent = Math.round((100 * userCorrect) / answers.length);

  const timerResult = timeEnd - timeStart;
  const minutesSpent = +(timerResult / 1000 / 60).toFixed(2); // T
  const speed = Math.round(TEXT_LENGTH / minutesSpent);

  if (loader) {
    return (<ScreenLoader/>);
  } else
    return (
      <BlockMain>
        <h2>Ваши результаты</h2>
        <div className={result.wrapper}>
          <div className={result.counts}>

            <img src="https://fs.advance.ru/landing-pages/free/test_proverki_skorosti_chteniya/icon-speed.svg" alt=""/>
            <h3 className={result.counts__title}>Скорость чтения:</h3>
            <p className={result.counts__text}><span>{speed}</span><br/>слов в минуту</p>
            <img src="https://fs.advance.ru/landing-pages/free/test_proverki_skorosti_chteniya/icon-ponomanie.svg" alt=""/>
            <h3 className={result.counts__title}>Понимание:</h3>
            <p className={result.counts__text}><span>{understandingPercent}%</span></p>

            <p className={result.counts__share}>Поделитесь своим результатом</p>
            <ShareButtons title={`Моя скорость чтения ${speed} слов в минуту. Проверь свою по ссылке!`}/>
            <RestartBtn text={"Пройти заново"} action={typeof window !== 'undefined' && (()=>{window.location.reload()})}/>

          </div>
          <div className={result.explanation}>
            <p className={result.explanation__highlight}>«Когда мы читаем текст с высокой скоростью, усвоение текста (то есть понимание и запоминание прочитанного) тоже очень важно и должно сохраняться на уровне не менее 70%. Так мы знаем, что текст не только прочитан, но и воспринят нашим мозгом в необходимой степени.»</p>
            <div className={result.level__wrap}>
              <h3 className={result.explanation__title}>Ваш уровень усвоения текста <span>{understandingPercent}%</span></h3>
              <p>
                {
                  understandingPercent < 61 ?
                    "Возможно, вы можете читать с довольно высокой скоростью, но как при этом не потерять часть информации из текста? Мы знаем как! На нашем курсе «Эффективное чтение» мы научим вас, как не только увеличить скорость чтения, но и сохранить высокий процент понимания и запоминания текстовой информации."
                    :
                    "Вы отлично запомнили текст. Как вы думаете, сможете ли вы увеличить свою скорость чтения в два раза и при этом сохранить такой же высокий уровень понимания? На нашем курсе «Эффективное чтение» мы учим именно этому. Мы поможем вам повысить скорость чтения без потерь в понимании и запоминании текстовой информации."
                }
                </p>
            </div>
            <div className={result.better__wrap}>
              <h3 className={result.explanation__title}>Вы можете улучшить:</h3>
              <div className={result.better__blocks}>
                <p>Скорость чтения: <br/><span>в 3 раза</span></p>
                <p>Понимание: <br/><span>+ 30%</span></p>
              </div>
              <div className={result.btnBlock}>
                <MainBtn text={"Читать с Advance"} widget={widget}/>
              </div>
            </div>
          </div>
        </div>
      </BlockMain>
    );
};
