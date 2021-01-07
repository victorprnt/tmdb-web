import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  position: relative;

  flex-wrap: wrap;
  max-width: 1400px;
  margin: 40px auto;

  div {
    width: 250px;
    margin-top: 20px;
    display: inline-block;

    a {
      display: flex;
      justify-content: center;
      max-width: 350px;
      max-height: 350px;
      margin: 0 20px;

      text-decoration: none;
      position: relative;

      div {
        img {
          position: absolute;
          right: -5px;
          top: -5px;
          width: 35px;
        }
      }

      img {
        border-radius: 5px;
      }

      filter: grayscale(100%);
      transition: all 0.5s ease;

      &:hover {
        transform: translateY(-5px);
        filter: grayscale(0%);
      }
    }

    strong {
      display: flex;
      justify-content: center;
      margin-top: 15px auto;
      color: ${theme.colors.primary};
    }
  }
`;
