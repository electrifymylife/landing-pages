import * as React from 'react';
import * as settings from "./style.module.scss";
import { Result } from "../Result";
const SettingsProcess = (
  {
    field_size,
    steps,
    speedWords,
    remember_path,
    subs,
    langRu,
    portal,
    directions,
    field_visible,
    isUserClicked,
    setTryAgain
  }
) => {
  const reload = typeof window !== 'undefined' && (()=>{window.location.reload()});
  return (
    <>
      <div className={settings.process}>
        <ul>
          <li className={settings.fieldSize}>
            <span>Размер поля:</span><strong>{field_size}х{field_size}</strong>
          </li>
          <li className={settings.steps}>
            <span>Количество ходов:</span><strong>{steps}</strong>
          </li>
          <li className={settings.speed}>
            <span>Скорость:</span><strong>{speedWords}</strong>
          </li>
          <li className={settings.path}>
            <span>Путь</span>
            {remember_path ? <strong className={settings.on}>Вкл.</strong> : <strong className={settings.off}>Выкл.</strong>}
          </li>
          <li className={settings.subs}>
            <span>Субтитры:</span>
            {subs ? <strong className={settings.on}>Вкл.</strong> : <strong className={settings.off}>Выкл.</strong>}
          </li>
          <li className={settings.lang}>
            <span>Язык:</span>
            {langRu ? <strong className={settings.rus}>Рус</strong> : <strong className={settings.eng}>Eng</strong>}
          </li>
          <li className={settings.portal}>
            <span>Порталы:</span>
            {portal ? <strong className={settings.on}>Вкл.</strong> : <strong className={settings.off}>Выкл.</strong>}
          </li>
          <li className={settings.directions}>
            <strong>{directions ? 'Направления' : 'Стороны света'}</strong>
          </li>
          <li className={settings.invisibleField}>
            <span>Невидимое поле:</span>
            {!field_visible ? <strong className={settings.on}>Вкл.</strong> : <strong className={settings.off}>Выкл.</strong>}
          </li>
        </ul>
      </div>
      {
        isUserClicked ?
          <div className={`${settings.btnWrap} ${settings.sb}`}>
            <button className={settings.btnSettings} onClick={reload}><span>Настройки</span></button>
            <button className={settings.btnAgain} onClick={setTryAgain}><span>Повторить</span></button>
          </div>
          :
          <div className={`${settings.btnWrap} ${settings.e}`}>
            <button className={settings.btnReset} onClick={reload}><span>Прервать прохождение</span></button>
          </div>
      }
    </>
  );
};
export const SettingsStart = (
  {
    isStarted,
    setIsStarted,
    isAnswerRight,
    isUserClicked,
    field_size,
    setFieldSizeMin,
    setFieldSizePlus,
    steps,
    setStepsMin,
    setStepsPlus,
    speed,
    speedWords,
    setSpeedMin,
    setSpeedPlus,
    remember_path,
    setRememberPath,
    subs,
    setSubs,
    setLangRu,
    setLangEn,
    portal,
    setPortal,
    setDirections,
    setCardinalDirections,
    field_visible,
    setFieldVisible,
    object_type,
    setObjectType,
    setTryAgain,
    isProcessEnded
  }
) => {
  const reload = typeof window !== 'undefined' && (()=>{window.location.reload()});
  if (!isUserClicked) {
    return (
      <>
        {
          !isStarted ?
            <button className={settings.btnStart} onClick={setIsStarted}>Начать упражнение</button>
            : !isProcessEnded ?
              <div className={`${settings.btnWrap} ${settings.c}`}>
                <button className={settings.btnReset} onClick={setIsStarted}><span>Прервать прохождение</span></button>
              </div>
            : null
        }
        <div className={!isStarted ? `${settings.settings}` : `${settings.settings} ${settings.disabled}`}>
          <h2>Настройки упражнения</h2>
          <ul className={settings.mainList}>
            <li>
              <h3>Размер поля</h3>
              <div className={`${settings.btnWrap} ${settings.row}`}>
                <button className={settings.btnMinus} disabled={field_size === 3} aria-label={"minus"} onClick={setFieldSizeMin}></button>
                <span>{field_size}x{field_size}</span>
                <button className={settings.btnPlus} disabled={field_size === 5} aria-label={"plus"} onClick={setFieldSizePlus}></button>
              </div>
              <div className={settings.descWrap}>
                <p>Размер поля, по которому перемещается объект<br/> (от 3x3 до 5x5)</p>
              </div>
            </li>
            <li>
              <h3>Количество ходов</h3>
              <div className={`${settings.btnWrap} ${settings.row}`}>
                <button className={settings.btnMinus} disabled={steps === 10} aria-label={"minus"} onClick={setStepsMin}></button>
                <span>{steps}</span>
                <button className={settings.btnPlus} disabled={steps === 50} aria-label={"plus"} onClick={setStepsPlus}></button>
              </div>
              <div className={settings.descWrap}>
                <p>Количество голосовых команд, которые будут произнесены. 10, 25 или 50.</p>
              </div>
            </li>
            <li>
              <h3>Скорость</h3>
              <div className={`${settings.btnWrap} ${settings.row}`}>
                <button className={settings.btnMinus} disabled={speed === 1} aria-label={"minus"} onClick={setSpeedMin}></button>
                <span>{speed}</span>
                <button className={settings.btnPlus} disabled={speed === 5} aria-label={"plus"} onClick={setSpeedPlus}></button>
              </div>
              <div className={settings.descWrap}>
                <p>Скорость, с которой будут произноситься команды.</p>
                <ul className={settings.speedList}>
                  <li>
                    <span>[1]</span>
                    <p>15-20 слов/мин.</p>
                  </li>
                  <li>
                    <span>[2]</span>
                    <p>25-35 слов/мин.</p>
                  </li>
                  <li>
                    <span>[3]</span>
                    <p>50-60 слов/мин.</p>
                  </li>
                  <li>
                    <span>[4]</span>
                    <p>110-120 слов/мин.</p>
                  </li>
                  <li>
                    <span>[5]</span>
                    <p>170-180 слов/мин.</p>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h3>Путь</h3>
              <div className={`${settings.btnWrap} ${settings.center}`}>
                <span className={settings.small}>{remember_path ? 'Вкл' : 'Выкл'}</span>
                <div className={settings.toggleWrap}>
                  <input type="checkbox" name="toggle-path" id="toggle-path" onChange={setRememberPath}/>
                  <label htmlFor="toggle-path" aria-label={"path"}></label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>История недавних перемещений (постарайтесь запомнить несколько последних перемещений объекта)</p>
              </div>
            </li>
            <li>
              <h3>Субтитры</h3>
              <div className={`${settings.btnWrap} ${settings.center}`}>
                <span className={settings.small}>{subs ? 'Вкл' : 'Выкл'}</span>
                <div className={settings.toggleWrap}>
                  <input type="checkbox" name="toggle-subs" id="toggle-subs" onChange={setSubs}/>
                  <label htmlFor="toggle-subs" aria-label={"subs"}></label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>Если субтитры выключены, то голосовые команды не дублируются текстом.</p>
              </div>
            </li>
            <li>
              <h3>Язык</h3>
              <div className={settings.btnWrap}>
                <div className={settings.inputRadio}>
                  <input id="rus" type="radio" name="lang" defaultChecked onChange={setLangRu}/>
                  <label htmlFor="rus">Русский</label>
                </div>
                <div className={settings.inputRadio}>
                  <input id="eng" type="radio" name="lang" onChange={setLangEn}/>
                  <label htmlFor="eng">English</label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>Язык, на котором произносятся и пишутся команды перемещения объекта.</p>
              </div>
            </li>
            <li>
              <h3>Порталы</h3>
              <div className={`${settings.btnWrap} ${settings.center}`}>
                <span className={settings.small}>{portal ? 'Вкл' : 'Выкл'}</span>
                <div className={settings.toggleWrap}>
                  <input type="checkbox" name="toggle-portal" id="toggle-portal" onChange={setPortal}/>
                  <label htmlFor="toggle-portal" aria-label={"portal"}></label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>На поле присутствуют два портала. Если объект попадает в один из порталов, он автоматически перемещается во второй.</p>
              </div>
            </li>
            <li>
              <h3>Ориентирование</h3>
              <div className={settings.btnWrap}>
                <div className={settings.inputRadio}>
                  <input id="directions" type="radio" name="orient" defaultChecked onChange={setDirections}/>
                  <label htmlFor="directions">Направле&shy;ния</label>
                </div>
                <div className={settings.inputRadio}>
                  <input id="cardinal" type="radio" name="orient" onChange={setCardinalDirections}/>
                  <label htmlFor="cardinal">Стороны света</label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>Команды даются в виде сторон света: «Север», «Юг», «Восток», «Запад» или направлений: «вперёд», «назад», «влево», «вправо».</p>
              </div>
            </li>
            <li>
              <h3>Невидимое поле</h3>
              <div className={`${settings.btnWrap} ${settings.center}`}>
                <span className={settings.small}>{!field_visible ? 'Вкл' : 'Выкл'}</span>
                <div className={settings.toggleWrap}>
                  <input type="checkbox" name="toggle-invisible" id="toggle-invisible" onChange={setFieldVisible}/>
                  <label htmlFor="toggle-invisible" aria-label={"invisible"}></label>
                </div>
              </div>
              <div className={settings.descWrap}>
                <p>Если эта настройка включена, то на время игры поле будет скрыто. Его необходимо будет представлять в воображении.</p>
              </div>
            </li>
          </ul>
          <h2>Выберите объект для слежки</h2>
          <ul className={settings.objectsList}>
            <li className={object_type === 1 ? `${settings.active}` : undefined}>
              <button className={settings.alien} aria-label={"alien"} onClick={()=>{setObjectType(1)}}></button>
            </li>
            <li className={object_type === 2 ? `${settings.active}` : undefined}>
              <button className={settings.rocket} aria-label={"rocket"} onClick={()=>{setObjectType(2)}}></button>
            </li>
            <li className={object_type === 3 ? `${settings.active}` : undefined}>
              <button className={settings.ghost} aria-label={"ghost"} onClick={()=>{setObjectType(3)}}></button>
            </li>
          </ul>
        </div>
      </>

    );
  } else return (
    <>
      <Result
        steps={steps}
        speedWords={speedWords}
        isAnswerRight={isAnswerRight}
      />
      <div className={`${settings.btnWrap} ${settings.sb}`}>
        <button className={settings.btnSettings} onClick={reload}><span>Настройки</span></button>
        <button className={settings.btnAgain} onClick={setTryAgain}><span>Повторить</span></button>
      </div>
    </>
  );
};
