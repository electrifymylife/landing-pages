import * as React from 'react';
import * as header from './headerLogoAndTel.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';

const logoVariants = (logo) => {
  if (logo === "violet") {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/logo_2021.svg"
  } else if (logo === "white") {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/advance_new_logo.svg";
  } else if (logo === "orange") {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/logo_2021_white_orange.svg";
  } else if (logo === "indi") {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/logo_indi.svg";
  } else if (logo === "faded") {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/logo_faded.svg"
  } else {
    return "https://fs.advance.ru/landing-pages/icons/advance-logo/logo_2021.svg"
  }
}

export const HeaderLogoAndTel = (
  {
    logo="violet",
    phoneHide=false,
    phoneBordered=false,
    phoneColor = phoneBordered ? "#8F8F8F" : "#282019",
    phoneIconColor=phoneColor,
    phoneBorderColor="#DADADA",
    logoCenter=false,
    padding="30px 0",
    noLink=false,
  }
) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  return (
    <div
      className={header.topLogo}
      style={{
        justifyContent: phoneHide && logoCenter ? "center" : "space-between",
        padding: padding
    }}>
      <div className={header.logo}>
        {
          noLink ?
            <img
              src={logoVariants(logo)}
              alt={'Advance Club'}
              style={{
                width: phoneHide && logoCenter && isMobile ? "100%" : isMobile ? "60%" : "100%",
              }}
            />
            :
            <a href="/">
              <img
                src={logoVariants(logo)}
                alt={'Advance Club'}
                style={{
                  width: phoneHide && logoCenter && isMobile ? "100%" : isMobile ? "60%" : "100%",
                }}
              />
            </a>
        }
      </div>
      <a href="tel:88007005342">
        <span className={phoneBordered ? `${header.phoneBordered}` : `${header.phone}`} style={{
          color: phoneColor,
          display: phoneHide ? "none" : "inline-block",
          borderColor: phoneBorderColor,
          "--phone-icon-color": phoneIconColor
        }}>
          8 (800) 700-53-42
        </span>
      </a>
    </div>
  );
};
