import React from 'react';

import * as FI from 'react-icons/fi';
import * as S from './style';

import Menu from '../../components/Menu';

const Movie = () => (
  <>
    <Menu />
    <S.Details>
      <img
        src="http://image.tmdb.org/t/p/w300/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
        alt=""
      />
      <section>
        <header>
          <strong>Clube da Luta</strong>
          <FI.FiStar size={20} />
          <p>Fight Club</p>
        </header>

        <div>
          <span>2000</span>
          <span>Classificação</span>
          <strong>Sinopse</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            nesciunt explicabo, earum rem consequuntur est, obcaecati nulla
            omnis repellat dolorem magni nobis at quisquam error corrupti
            molestias. Commodi, architecto et.
          </p>
        </div>

        <footer>
          <span>genre</span>
          <ul>
            <li>
              <strong>Direção</strong>
              <p>John Smith</p>
            </li>
            <li>
              <strong>Elenco</strong>
              <p>Fulano, Beltrano, Sicrano</p>
            </li>
          </ul>

          <div>
            <a href="https://instagram.com">
              <FI.FiInstagram size={20} />
            </a>

            <a href="https://facebook.com">
              <FI.FiFacebook size={20} />
            </a>

            <a href="https://twitter.com">
              <FI.FiTwitter size={20} />
            </a>
          </div>
        </footer>
      </section>
    </S.Details>
  </>
);

export default Movie;
