import styled from 'styled-components';

import { shade } from 'polished';
import theme from '../../styles/theme';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${theme.colors.primary};

  padding: 15px 0;

  /* @media (max-width: 1400px) {
    max-width: 720px;
  }

  @media (max-width: 720px) {
    max-width: 640px;
  }

  @media (max-width: 640px) {
    max-width: 320px; */
  /* } */

  @media (max-width: ${theme.screenSize.tablet}) {
    position: fixed;
    top: 0;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 15px;
    }

    a {
      font-size: ${theme.fonts.mobile};
    }

    img {
      display: block;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* max-width: 1400px; */
  /* width: 100%; */

  align-items: center;

  img {
    /* width: 100%; */
    /* margin-right: 20px; */
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    line-height: 28px;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }

    & + a {
      margin-left: 20px;
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    a {
      font-size: ${theme.fonts.mobile};
    }

    img {
      display: block;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;

  form {
    position: relative;

    input {
      height: 30px;
      width: 300px;
      padding: 0 5px;
      margin-left: auto;
      border-radius: 3px;
      outline: none;

      &::placeholder {
        color: ${theme.colors.placeholder};
      }
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    form {
      width: 480px;
      input {
        width: 100%;
      }
    }
  }
`;

export const SearchMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 390px;
  max-width: 300px;

  position: absolute;
  z-index: 1;

  overflow-y: scroll;
  overflow-x: hidden;

  img {
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 5px;

    background-color: #fff;

    text-decoration: none;

    span {
      margin: 8px;
      color: ${theme.colors.sinopse};
    }

    &:hover {
      background-color: ${shade(0.2, `#ffffff`)};
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    width: 10px;
    background-color: #fff;
    /* background: rgba(255, 255, 255, 0); */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.placeholder};
    border-radius: 5px;

    &:hover {
      background: ${shade(0.2, `${theme.colors.scrollbar}`)};
    }
  }
`;
