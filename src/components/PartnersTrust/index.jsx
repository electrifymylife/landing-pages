import * as React from 'react';
import * as partner from "./style.module.scss";
import data from "./data.json";

export const PartnersTrust = ({ ttlName }) => {
  return (
    <section className={partner.partner} id="partner">
      <div className="container">
        <div className={ttlName}>Нам доверяют</div>
        <div className={`row ${partner.partner__row}`}>
          {
            data.map((elem, index) => (
              <div className={`col ${partner.partner__item}`} key={index}>
                <img
                  src={elem.partnerImg}
                  alt={"Логотип партнера"}
                  className={partner.partner__itemImg}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
