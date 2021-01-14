import styled from 'styled-components';
import theme from '../../styles/theme';

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1700px;
  margin: 40px auto;

  /* div {
    display: inline-block;
    width: 225px;
    margin-bottom: 10px;

    a {
      display: flex;
      width: 100%;

      padding: 10px;
      margin: 0 auto;

      justify-content: center;

      transition: all 0.4s;

      img {
        border-radius: 4px;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }

    strong {
      display: flex;
      width: 100%;
      margin: 0 auto;
      margin-top: 5px;

      justify-content: center;
      align-items: center;
      text-align: center;

      color: ${theme.colors.primary};
    }
  } */

  @media (max-width: ${theme.screenSize.FourK}) {
    max-width: 1700px;
  }

  @media (max-width: ${theme.screenSize.fullHD}) {
    max-width: 1200px;
  }

  @media (max-width: ${theme.screenSize.desktop}) {
    max-width: 980px;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    max-width: 980px;
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    margin-top: 150px;
  }
`;
