import * as React from 'react';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { Seo } from "../../../components/Seo";

import { HeaderMainPage } from "../../../components/HeaderMainPage";
import { FooterFull } from "../../../components/FooterFull";

import {
  Screen1,
  Banners,
  Advance
} from "../../../components/LandingTemplates/follow_the_object";

const TITLE = 'Игра «Следи за объектом»';
const DESCRIPTION = 'Игра направлена на развитие концентрации и распределения внимания. Способствует формированию периферического зрения, навыка скорочтения, ориентировании в пространстве, помогает развить память.';
export const Head = () => (
  <Seo title={TITLE} description={DESCRIPTION}>
    <title>{TITLE}</title>
  </Seo>
);
const Page = () => (
  <DefaultLayout>
    <div className="container">
      <HeaderMainPage/>
    </div>
    <main style={{ color: "#2D2D47" }}>
      <Banners/>
      <Screen1/>
      <Advance/>
    </main>
    <FooterFull/>
  </DefaultLayout>
);
export default Page;
