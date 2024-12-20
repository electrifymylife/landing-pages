import * as React from "react";
import * as reading from "./style.module.scss";
import { BlockProcess } from "../BlockProcess";
import { BoxContent } from "../BoxContent";
import { MainBtn } from "../Buttons";
import { Timer } from "../Timer";
export const ScreenReading = ({ onReaded, stopTimer, time }) => {
  return (
    <BlockProcess>
      <h2>Прочтите текст</h2>
      <BoxContent>
        <p>Родился Уолтер Элайас Дисней 5 декабря 1901 года в Чикаго. Отец, Элиас Дисней, был канадцем ирландского происхождения, а мама, Флора Колл Дисней, имела немецкие корни. Всего в семье подрастало пятеро детей, четыре сына и дочь. В большом городе многодетному семейству выживать было трудно, поэтому родители приняли решение переехать на ферму Марселин в штате Канзас. Старшие братья Уолтера Герберт и Рей, недовольные сменой городского быта на тяжёлый фермерский труд, вскоре сбежали и вернулись на поезде в Чикаго. Оставшиеся дети работали с родителями на ферме с утра до позднего вечера, испытывая на себе суровый нрав отца, который наказывал их за любую провинность.
        </p>
        <p>Элиас Дисней был глубоко религиозным мрачным человеком и сурово относился к воспитанию детей. Его любимой была поговорка: «Пожалеешь розог — испортишь ребёнка». Вместе с тем глава семейства по-своему любил семью и сумел привить детям свои моральные ценности. Элиас Дисней учил детей быть честными и заботиться о репутации, привил любовь к труду, научил преодолевать трудности и сострадать ближнему. Для Уолта эти принципы стали главными в жизни. Он перенял лучшие отцовские качества: непоколебимость, готовность идти на риск, трудолюбие, честность, любовь к семье.
        </p>
        <p>Мать Уолта Диснея, в свою очередь, оказала огромное влияние на становление его личности. Она была очень спокойной женщиной с выдержанным, но настойчивым характером и замечательным чувством юмора. Лёгкий и весёлый нрав Флоры Дисней уравновешивал суровый характер отца семейства. Флора любила хорошие книги и научила Уолта читать ещё в дошкольном возрасте, развила в нём любовь к книгам.</p>
        <p>Уолт с детства любил рисовать. Семья жила бедно, ни карандашей, ни красок в доме не было. Тогда четырёхлетний Уолт взял палку и смолу и принялся разрисовывать стену дома. Ребёнка строго наказали, но это не отбило у него тягу к рисованию. </p>
        <p>Первый мультфильм со схематичными картинками в блокноте Уолт нарисовал, чтобы развлечь сестру, заболевшую корью. Уолт быстро пролистывал странички блокнота и этим развеселил малышку, наблюдавшую, как двигаются нарисованные персонажи.
          Дисней с детства любил животных на ферме и считал их своими друзьями. Ему нравилось и хорошо удавалось их рисовать. Несмотря на нелёгкую жизнь в детстве Уолт отличался весёлым нравом, его очень любили соседи. Один из них, пожилой доктор в отставке Л. Л. Шервуд, заплатил семилетнему Уолту 25 центов, чтобы мальчишка нарисовал его лошадь. Позднее Уолт Дисней считал, что именно этот портрет лошади доктора Шервуда натолкнул его на мысль стать профессиональным художником, показав, что этим можно зарабатывать на жизнь.</p>
        <p>Семейство Дисней, как и многие другие бедные семьи, мигрировавшие без конца по Америке в поисках заработка, вскоре была вынуждена покинуть Марселин. В 1909 году отец Уолта серьёзно заболел и больше не мог справляться с тяжёлой работой на ферме. Семье пришлось продать ферму и переехать в Канзас-Сити.</p>
        <p>Уолт Дисней нехотя покидал ферму и особенно огорчался, что его любимых животных продают с аукциона. Позднее в своих фильмах Дисней часто использовал персонажей-животных, окружавших его в детстве на ферме.</p>
        <p>На деньги, вырученные от продажи фермы, отец семейства приобрёл газету Kansas City Star. Он нанял нескольких разносчиков газет и также привлёк к непростому труду своих детей. Теперь Уолту приходилось просыпаться рано утром и перед занятиями в школе разносить газеты.</p>
        <p>Уолт в то время был учеником средней школы Бентон. Учился он не блестяще. Сказывалась усталость из-за тяжёлой работы, Уолт засыпал прямо в классе. Кроме того, учителя жаловались, что Уолт часто рисует на уроках, вместо того чтобы слушать и выполнять задания.</p>
        <p>Уже в детстве Уолт Дисней отличался актёрским талантом. Он очень любил фильмы с Чарли Чаплином. Несмотря на большую нагрузку и усталость Уолту нравилось ходить в школу. Там он развлекал друзей, пародируя героев Чарли Чаплина. Таланту Уолта как художника также было где разгуляться. Иногда учителя вызывали Уолта и предлагали ему проиллюстрировать тему урока на школьной доске.</p>
        <p>Уолт изучал основы актёрского искусства учился управлять мимикой и жестами и изображать различные эмоции. Как считают биографы Уолта Диснея, все эти навыки впоследствии очень ему пригодились. Благодаря своему сценическому опыту он мог создавать столь живых персонажей для своих мультфильмов.</p>
        <p>Профессиональная биография Уолта Диснея началась, когда он создал своего первого рисованного персонажа — кролика Освальда. Хотя все почему-то считают, что Дисней изобразил первым Микки Мауса. Мультфильм о кролике вышел на экраны в 1927 году и приобрёл большую популярность. А с прославленным мышонком зрители познакомились только через год в мультике под названием «Безумный аэроплан». И имя у него было другое — Мортимер. Интересно, что Уолт очень не любил мышей, даже боялся их, при этом создал самого известного мышонка в мире. В том же 1928 году мышонка Мортимера переименовали в Микки Мауса, и он засветился в мультфильме «Пароходик Вилли» — первом в истории мультипликации звуковом фильме. В «Пароходике Вилли» мышонок говорил голосом самого Диснея.</p>
        <p>После этого Дисней придумал цикл из семидесяти мультиков под общим названием "Забавные симфонии". Это было первое знакомство зрителя с героями, ставшими потом постоянными участниками диснеевских лент: утёнком Дональдом Даком, жёлтой собакой Плуто, псом Гуфи и многими другими персонажами.</p>
        <p>Через некоторое время Дисней придумал новинку в мире мультипликации — полнометражный мультик. Он решил экранизировать сказку братьев Гримм «Белоснежка и семь гномов». После выхода мультфильма Уолта Диснея признали королём мультипликации.</p>
        <p>Дисней всегда уделял пристальное внимание не только изображению, но и звуку. Он сам занимался подбором музыкального сопровождения, причём делал это тщательнейшим образом. Режиссёр добивался того, чтобы музыка усиливала и подчёркивала эффект происходящего на экране. Именно Диснею принадлежат многие новаторские идеи в киноиндустрии. Уолт стал создателем первого звукового мультфильма, первой картины со стереозвуком, первого анимационного полного метра. Он был первым, кто снимал одновременно на три киноплёнки. Помимо этого, режиссёр выдавал премии любому сотруднику, предложившему любопытную идею. Естественно, каждый, кто трудился в компании Диснея, был заинтересован работать творчески и плодотворно.</p>
        <p>Уже много позже во время одной из прогулок с дочерьми Диснею пришла идея создать место для детишек, куда бы они могли прийти развлечься вместе с родителями, и чтобы рядом с ними находились их любимые мультяшные герои. Дисней подобрал место для придуманного им парка развлечений. Дело оставалось за малым: уговорить владельцев 17 земельных участков продать их ему под этот проект. Переговоры успешно завершились только к 1953 году, и в полусотне километров от Лос-Анджелеса появился невероятной величины и технических возможностей парк развлечений. Открыли его спустя два года, и он до сих пор носит название «Диснейленд».</p>
      </BoxContent>
      <div className={reading.btnBlock}>
        <MainBtn action={() => {
          onReaded(true);
          stopTimer(true);
        }} text={"Готово"}/>
        <Timer time={time}/>
      </div>
      <div className={reading.source}>
        <h4>Источники:</h4>
        <a href="https://www.livemaster.ru/topic/3582826-article-uolt-disnej-velikij-genij-i-mechtatel-podarivshij-miru-skazku https://biographe.ru/biznesmeni/walt-disney" target={"_blank"} rel={"nofollow, noreferrer"}>
          https://www.livemaster.ru/topic/3582826-article-uolt-disnej-velikij-genij-i-mechtatel-podarivshij-miru-skazku https://biographe.ru/biznesmeni/walt-disney
        </a>
      </div>
    </BlockProcess>
  );
};
