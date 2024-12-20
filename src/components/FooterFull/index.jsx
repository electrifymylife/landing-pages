import * as React from 'react';
import * as footer from './footerFull.module.scss';

export const FooterFull = () => {
  const copyright = `Advance © ${new Date().getFullYear()}`;

  return (
    <footer className={footer.footer}>
      <div className="container">
        <div className={footer.footer__box}>
          <div className={footer.footer__blockAbout}>
            <div className={footer.footer__mainInfo}>
              <div className={footer.footer__logo}>
                <a href="/">
                  <img
                    src="https://fs.advance.ru/landing-pages/icons/advance-logo/advance_new_logo.svg"
                    alt={'Advance'}
                  />
                </a>
              </div>
              <div className={footer.footer__social}>
                <ul>
                  <li>
                    <a href="https://vk.com/advanceclub">
                      <img
                        src="https://fs.advance.ru/landing-pages/icons/social/vk_white.svg"
                        alt={'Advance вконтакте'}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://ok.ru/advanceclub">
                      <img
                        src="https://fs.advance.ru/landing-pages/icons/social/ok_white.svg"
                        alt={'Advance в одноклассниках'}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/user/advanceclub">
                      <img
                        src="https://fs.advance.ru/landing-pages/icons/social/utube_white.svg"
                        alt={'Advance на ютуб'}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/advance_official">
                      <img
                        src="https://fs.advance.ru/landing-pages/icons/social/tg_white.svg"
                        alt={'Advance в телеграм'}
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className={footer.footer__tel}>
                <a href="tel:88007005342">8 (800) 700-53-42</a>
                <a href="tel:+78122092519">8 (812) 209-25-19</a>
              </div>
            </div>

            <div className={footer.footer__info}>
              <p>ООО «АДВАНС»</p>
              <p>ИНН 7842181720</p>
              <p>ОГРН 1207800072160</p>
              <p>Санкт-Петербург, ул. Таврическая, д. 2, лит. А, пом. 1Н</p>
              <p>
                <a href="mailto:info@advance.ru">info@advance.ru</a>
              </p>
            </div>

            <div className={footer.footer__rights}>
              <div className={footer.footer__license}>
                <img src="https://fs.advance.ru/landing-pages/images/license.jpg" alt={'Государственная лицензия'} />
              </div>
              <div className={footer.footer__licenseInfo}>
                <span>{copyright}</span>
                <a href="/about/documents/soglashenie_ob_obrabotke_personalnyh_dannyh/">
                  Соглашение об&nbsp;обработке <br /> персональных данных
                </a>
                <a href="/about/documents/politika_konfidencialnosti/">Политика конфиденциальности</a>
                <a
                  href="https://islod.obrnadzor.gov.ru/rlic/details/d862d996-835c-b9a5-ff8f-521ac3951a1e/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Государственная лицензия
                </a>
              </div>
            </div>

            <p className={footer.footer__advTranslation}>advance (англ.) — продвигаться</p>
          </div>

          <div className={`${footer.footer__blockLink1}`}>
            <ul className={footer.footer__list}>
              <li className={footer.footer__listSection}>
                <a
                  target="_self"
                  href="/training/telegram_ejednevnyie_trenirovki"
                  title=""
                  className={`${footer.footer__listSectionTitle} ${footer.tgTrainings}`}
                >
                  Бесплатные ежедневные
                  <br />
                  тренировки для мозга
                  <br />в вашем телефоне
                </a>
              </li>
              <li className={footer.footer__listSection}>
                <a
                  target="_self"
                  href="/razvivayushie_kursy/dlya_detey/"
                  title=""
                  className={footer.footer__listSectionTitle}
                >
                  Детям
                </a>
                <ul>
                  <li>
                    <a href="/online/uchis_uchitsya_5-7" title="">
                      «Учись Учиться 5–7 классы»
                    </a>
                  </li>
                  <li>
                    <a href="/online/uchis_uchitsya" title="">
                      «Учись Учиться 8–11 классы»
                    </a>
                  </li>
                  <li>
                    <a href="/free/vse_materialy_dlya_detei/" title="">
                      Материалы для обучения
                    </a>
                  </li>
                </ul>
              </li>

              <li className={footer.footer__listSection}>
                <a
                  target="_self"
                  href="/razvivayushie_kursy/dlya_vzroslyh/"
                  title=""
                  className={footer.footer__listSectionTitle}
                >
                  Взрослым
                </a>
                <ul>
                  <li>
                    <a href="/online/uchis_uchitsya-vzroslye" title="">
                      «Учись Учиться»
                    </a>
                  </li>
                  <li>
                    <a href="https://advance.ru/webinar/krp_tonusmozga/" title="">«Развитие памяти и&nbsp;тонус мозга»</a>
                  </li>
                  <li>
                    <a href="/razvivayushie_kursy/dlya_vzroslyh/roditeley/" title="">
                      Для родителей
                    </a>
                  </li>
                  <li>
                    <a href="/free/test_proverki_skorosti_chteniya/" title="">
                      Тест скорости чтения
                    </a>
                  </li>
                </ul>
              </li>

              <li className={footer.footer__listSection}>
                <a target="_self" href="/inostrannye_yazyki/" title="" className={footer.footer__listSectionTitle}>
                  Английский язык
                </a>
                <ul>
                  <li>
                    <a href="/online/angliyskiy_dlya_vashih_celey">«Английский для ваших целей»</a>
                  </li>
                  <li>
                    <a href="/free/test_po_angliyskomu_yazyku/">Тест по английскому языку</a>
                  </li>
                </ul>
              </li>

              <li className={`${footer.footer__listSection} ${footer.footer__listSectionListTitle}`}>
                <a
                  href="/razvivayushie_kursy/po_razvitiu_pamyati/"
                  title=""
                  className={footer.footer__listSectionTitle}
                >
                  Развитие памяти
                </a>
                <a href="/razvivayushie_kursy/po_skorochteniu/" title="" className={footer.footer__listSectionTitle}>
                  Скорочтение
                </a>
                <a href="/feedback_online/" title="" className={footer.footer__listSectionTitle}>
                  Отзывы
                </a>
                <a href="/fulllist/" className={footer.footer__listSectionTitle}>
                  Расписание
                </a>
                <a href="/knowledge/articles/" className={footer.footer__listSectionTitle}>
                  Статьи
                </a>
                <a href="/about/news/" className={footer.footer__listSectionTitle}>
                  Новости
                </a>
                <a href="/about/advance_for_business/" className={footer.footer__listSectionTitle}>
                  Для бизнеса
                </a>
                <a href="/about/nikolay_yagodkin/" className={footer.footer__listSectionTitle}>
                  О Николае Ягодкине
                </a>
              </li>
            </ul>
          </div>

          <div className={`${footer.footer__blockLink2}`}>
            <ul className={footer.footer__list}>
              <li className={`${footer.footer__listSection} ${footer.footer__listSectionListTitle}`}>
                <a target="_self" href="/about/" className={footer.footer__listSectionTitle}>
                  Об Advance
                </a>
                <a href="/jobs/" className={footer.footer__listSectionTitle}>
                  Работа у&nbsp;нас
                </a>
                <a href="/about/news/speczialnaya_oczenka_usloviy_truda/" className={footer.footer__listSectionTitle}>
                  СОУТ
                </a>
                <a href="/contact/" className={footer.footer__listSectionTitle}>
                  Контакты
                </a>
                <a href="/partner_new/" className={footer.footer__listSectionTitle}>
                  Партнёрская программа
                </a>
                <a href="/teacher_partner_program/" className={footer.footer__listSectionTitle}>
                  Партнёрская программа для&nbsp;репетиторов
                </a>
              </li>

              <li className={`${footer.footer__listSection} ${footer.footer__formSection}`}></li>

              <div className={`${footer.footer__blockPartnership}`}>
                <ul>
                  <li>
                    <img src="https://fs.advance.ru/landing-pages/icons/payments/iomoney.png" alt={'iomoney'} />
                  </li>
                  <li>
                    <img src="https://fs.advance.ru/landing-pages/icons/payments/cp.png" alt={'cloud payments'} />
                  </li>
                  <li>
                    <img src="https://fs.advance.ru/landing-pages/icons/payments/tinkoff.png" alt={'tinkoff'} />
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
