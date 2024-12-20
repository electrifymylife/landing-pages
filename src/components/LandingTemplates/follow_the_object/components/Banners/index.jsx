import * as React from 'react';
import * as banners from "./style.module.scss";
import { bannersData } from "./data";
export const Banners = () => {
  const swiperEl = React.useRef();
  React.useEffect(() => {
    if (swiperEl.current) {
      Object.assign(swiperEl.current, {
        slidesPerView: 1,
        loop: true,
        simulateTouch: false,
        speed:1000,
        autoplay:{
          delay:3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiperEl.current.initialize();
    }
  }, []);
  return (
    <section className={banners.banners}>
      <div className="container" style={{ position: "unset" }}>
        <swiper-wrapper style={{ position: "relative" }}>
          <swiper-container ref={swiperEl} init="false">
            {
              bannersData.map((elem, index) => (
                <swiper-slide key={index}>{elem.banner}</swiper-slide>
              ))
            }
          </swiper-container>
          <div>
            <button className={`swiper-button-prev ${banners.swiperButtonPrev}`} aria-label="swiper-button-prev"></button>
            <button className={`swiper-button-next ${banners.swiperButtonNext}`} aria-label="swiper-button-next"></button>
          </div>
        </swiper-wrapper>
      </div>
    </section>
  );
};
