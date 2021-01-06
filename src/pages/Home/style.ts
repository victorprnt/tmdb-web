import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 1000px;

  padding: 40px;
  position: relative;

  a {
    display: block;
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

    strong {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      color: #264653;
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
`;
