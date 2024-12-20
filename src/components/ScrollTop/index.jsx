import * as React from 'react';
import * as top from "./style.module.scss";
export const ScrollTop = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  typeof window !== 'undefined' && window.addEventListener('scroll', () => {
    window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
  });
  const btnClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={isScrolled ? `${top.btn} ${top.show}` : `${top.btn}`} onClick={btnClickHandler} aria-label={'Скролл вверх'}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24" fill="" stroke="" strokeWidth="2" />
        <rect x="15" y="28.8994" width="14" height="2" rx="1" transform="rotate(-45 15 28.8994)" fill="" />
        <rect x="24.8995" y="19" width="14" height="2" rx="1" transform="rotate(45 24.8995 19)" fill="" />
      </svg>
    </button>
  );
};
