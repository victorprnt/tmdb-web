import styled from 'styled-components';

export const Wrapper = styled.section`
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
  }
`;
