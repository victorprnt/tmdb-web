import styled from 'styled-components';
import theme from '../../styles/theme';

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1400px;

  margin: 40px auto;

  div {
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
