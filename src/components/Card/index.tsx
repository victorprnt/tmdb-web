import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

const Card = () => (
  <S.Main>
    <Link to="/movies">
      <div>
        <img
          src="https://ecdn.teacherspayteachers.com/thumbitem/Percentage-Rings-Black-Filled-Infographic-Elements-Clip-Art-Set-Commercial-Use-2905409-1524270454/original-2905409-2.jpg"
          alt=""
        />
      </div>

      <img
        src="http://image.tmdb.org/t/p/w185/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
        alt=""
      />
    </Link>
    <strong>Clube da Luta</strong>
  </S.Main>
);

export default Card;
