import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`;

export const Card = styled.section`
  display: block;
  max-width: 350px;
  max-height: 350px;

  padding: 18px;
  position: relative;

  a {
    display: block;
    width: 100%;
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
    margin-top: 10px;
  }
`;
