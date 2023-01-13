import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Home.styled';

function Home() {
  const { t } = useTranslation();

  return (
    <Styled.HomeContainer>
      <h1>{t('HELLO')}</h1>
    </Styled.HomeContainer>
  );
}

export default Home;
