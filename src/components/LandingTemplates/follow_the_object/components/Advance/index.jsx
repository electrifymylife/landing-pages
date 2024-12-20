import * as React from 'react';
import * as adv from "./style.module.scss";
import { PartnersTrust } from "../../../../PartnersTrust";
export const Advance = () => {
  return (
    <>
      <section className={adv.adv}>
        <div className="container">
          <div className={adv.container}>
            <img src="https://fs.advance.ru/landing-pages/icons/advance-logo/adv-logo.svg" alt=""/>
            <h2 className={adv.title}>Мы — центр образовательных технологий Advance</h2>
            <ul>
              <li>
                <h3>14 лет</h3>
                <p>учим людей раскрывать и развивать свой интеллектуальный потенциал, повышать личную эффективность</p>
              </li>
              <li>
                <h3>1 700 000</h3>
                <p>человек<br/> приняли участие<br/> в наших курсах и семинарах</p>
              </li>
              <li>
                <h3>85 000</h3>
                <p>человек<br/> прошли наши полные курсы</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <PartnersTrust ttlName={adv.title}/>
    </>
  );
};
