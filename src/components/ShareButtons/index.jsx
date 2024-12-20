import * as React from "react";
import {
  TelegramShareButton, TelegramIcon,
  VKShareButton, VKIcon,
  OKShareButton, OKIcon,
  ViberShareButton, ViberIcon,
  WhatsappShareButton, WhatsappIcon,
  MailruShareButton, MailruIcon,
  LivejournalShareButton, LivejournalIcon
} from "react-share";

export const ShareButtons = (
  {
    title,
    image='https://fs.advance.ru/landing-pages/icons/advance-logo/og-logo_vk_1920x900.png'
  }
) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <TelegramShareButton url={url} title={title} style={{marginRight: "5px"}}>
        <TelegramIcon size={42} round={false} borderRadius={"25%"} />
      </TelegramShareButton>
      <VKShareButton url={url} title={title} image={image} style={{marginRight: "5px"}}>
        <VKIcon size={42} round={false} borderRadius={"25%"} />
      </VKShareButton>
      <OKShareButton url={url} title={title} image={image} style={{marginRight: "5px"}}>
        <OKIcon size={42} round={false} borderRadius={"25%"} />
      </OKShareButton>
      <ViberShareButton url={url} title={title} style={{marginRight: "5px"}}>
        <ViberIcon size={42} round={false} borderRadius={"25%"} />
      </ViberShareButton>
      <WhatsappShareButton url={url} title={title} style={{marginRight: "5px"}}>
        <WhatsappIcon size={42} round={false} borderRadius={"25%"} />
      </WhatsappShareButton>
      <MailruShareButton url={url} title={title} imageUrl={image} style={{marginRight: "5px"}}>
        <MailruIcon size={42} round={false} borderRadius={"25%"} />
      </MailruShareButton>
      <LivejournalShareButton url={url} title={title} style={{marginRight: "5px"}}>
        <LivejournalIcon size={42} round={false} borderRadius={"25%"} />
      </LivejournalShareButton>
    </>
  );
};
