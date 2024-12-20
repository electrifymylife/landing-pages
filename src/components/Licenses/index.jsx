import * as React from 'react';
import * as style from './licenses.module.scss';
import { CarouselFullscreen } from '../CarouselFullscreen';
import licenses from "./data/licenses.json";
export const Licenses = ({ data=licenses, navColor }) => {
  const [fullScreenState, setFullScreenState] = React.useState({ open: false, selectedSlideIndex: 0 });
  const swiperEl = React.useRef();
  React.useEffect(() => {
    if (swiperEl.current) {
      Object.assign(swiperEl.current, {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
          el: '.licenses__pagination',
          clickable: true,
        },

        breakpoints: {
          660: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
      swiperEl.current.initialize();
    }
  }, []);
  return (
    <>
      <div className={style.licenses}>
        <swiper-container ref={swiperEl} init="false">
          {data.map((elem, index) => (
            <swiper-slide key={index}>
              <div className={`${style.col} col`}>
                <p className={style.name}>{elem.title}</p>
                <button
                  className={style.imgBlock}
                  onClick={() => {
                    setFullScreenState({ open: true, selectedSlideIndex: index });
                  }}
                  aria-label={elem.title}
                >
                  <span className={style.zoomIn}></span>
                  <img src={elem.imageSrc} alt={''} className={style.img} />
                </button>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
        <div
          className={`${style.licenses__pagination} licenses__pagination`}
          style={{
            "--swiper-pagination-bullet-size": "13px",
            "--swiper-pagination-color": navColor || '#ed1c24'
          }}
        />
      </div>
      <CarouselFullscreen
        data={data.map((elem) => (
          <img className={style.imgFullScreen} src={elem.imageSrc} alt={''} />
        ))}
        open={fullScreenState.open}
        selectedSlideIndex={fullScreenState.selectedSlideIndex}
        onClose={() => {
          setFullScreenState({ open: false, selectedSlideIndex: 0 });
        }}
      />
    </>
  );
};
