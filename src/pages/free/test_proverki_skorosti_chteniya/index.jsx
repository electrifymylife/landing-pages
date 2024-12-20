import * as React from 'react';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { Seo } from "../../../components/Seo";

import { HeaderLogoAndTel } from "../../../components/HeaderLogoAndTel";
import { FooterFull } from "../../../components/FooterFull";

import { ScreenStates } from "../../../components/LandingTemplates/test_proverki_skorosti_chteniya";

const TITLE = 'Онлайн-тест проверки скорости чтения и понимания прочитанного | Центр образовательных технологий Advance';
const DESCRIPTION = 'Онлайн-тест проверки скорости чтения и понимания прочитанного от центра образовательных технологий Advance';
export const Head = () => (
  <Seo title={TITLE} description={DESCRIPTION}>
    <title>{TITLE}</title>
  </Seo>
);
const Page = () => (
  <DefaultLayout>

    <div className="container">
      <HeaderLogoAndTel/>
    </div>

    <main>
      <ScreenStates/>
    </main>

    <FooterFull/>
  </DefaultLayout>
);

export default Page;
