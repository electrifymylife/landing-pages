import * as React from 'react';
import * as carousel from './styles.module.scss';
import { Modal } from '../Modal';
export const CarouselFullscreen = ({ data, selectedSlideIndex = 0, open, onClose }) => {
  const swiperEl = React.useRef();
  React.useEffect(() => {
    if (swiperEl.current) {
      Object.assign(swiperEl.current, {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
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
    <Modal
      PaperProps={{
        sx: {
          padding: 0,
          backgroundColor: 'rgb(0, 0, 0, 0.5)',
          '& .close-button': {
            height: '48px',
            width: '48px',
            zIndex: '11',
            '& svg': {
              height: 32,
              width: 32,
              fill: '#bdbdbd',
            },
          },
        },
      }}
      open={open}
      fullScreen={true}
      onClose={onClose}
    >
      <div className={carousel.backgroundContainer}>
        <swiper-container
          grab-cursor="true"
          navigation="true"
          pagination="true"
          pagination-clickable="true"
          initial-slide={selectedSlideIndex}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullet-width': '15px',
            '--swiper-pagination-bullet-height': '15px',
        }}
        >
          {data.map((elem, index) => (
            <swiper-slide key={index}>{elem}</swiper-slide>
          ))}
        </swiper-container>
      </div>
    </Modal>
  );
};
