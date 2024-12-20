import * as React from 'react';
import './styles.scss';
import '../../fonts/ubuntu.scss';
import '../../fonts/koryaka.scss';
import { CookiesAgreePopup } from '../CookiesAgreePopup';
import { ScrollTop } from '../ScrollTop';
import { smoothLinks } from './utils/smoothLinks';
import { register } from 'swiper/element/bundle';
register();

export const DefaultLayout = ({ children }) => {
  React.useEffect(() => {
    smoothLinks();
  }, []);

  return (
    <>
      {children}
      <CookiesAgreePopup />
      <ScrollTop />
    </>
  );
};
