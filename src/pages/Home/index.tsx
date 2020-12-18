import React from 'react';

import * as S from './style';

import Menu from '../../components/Menu';
import Card from '../../components/Card';

const Home = () => (
  <S.Container>
    <S.Header>
      <Menu />
    </S.Header>
    <S.Wrapper>
      <Card />
    </S.Wrapper>
  </S.Container>
);

export default Home;
