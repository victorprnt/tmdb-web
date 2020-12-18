import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  background-color: #264653;

  padding: 10px;

  img {
    margin-right: 30px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    line-height: 28px;
  }

  a:not(:last-child) {
    margin-right: 20px;
  }

  a:hover {
    color: #2a9d8f;
  }

  input {
    position: absolute;
    right: 50px;
    border-radius: 3px;
    height: 20px;
    width: 200px;
  }
`;

export const LinkMovies = styled(Link)``;
export const LinkSeries = styled(Link)``;
export const LinkFavorites = styled(Link)``;
