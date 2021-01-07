import styled from 'styled-components';

import { shade } from 'polished';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.colors.primary};

  padding: 10px 40px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;

  margin: 0 auto;

  justify-content: center;
  align-items: center;

  img {
    margin-right: 20px;
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

  div {
    margin-left: auto;

    input {
      height: 25px;
      width: 200px;
      padding: 0 5px;
      margin-left: auto;
      border-radius: 3px 0 0 3px;

      &::placeholder {
        color: ${theme.colors.placeholder};
      }
    }

    button {
      height: 25px;
      margin-left: 1px;
      padding: 0 4px;

      border: none;
      border-radius: 0 3px 3px 0;

      color: #fff;
      background-color: ${theme.colors.secondary};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, `${theme.colors.secondary}`)};
      }
    }
  }

  @media (max-width: 1400px) {
    max-width: 720px;
  }

  @media (max-width: 720px) {
    max-width: 640px;
  }

  @media (max-width: 640px) {
    max-width: 320px;
  }
`;
