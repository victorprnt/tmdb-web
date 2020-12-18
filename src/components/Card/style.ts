import styled from 'styled-components';

export const Stars = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0%;

  border-top: solid 1px gray;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Main = styled.div`
  display: flex;
  position: relative;
  width: 225px;
  height: 337px;
  background-color: blue;

  &:hover ${Stars} {
    height: 15%;
    animation: show-stars 200ms ease-out;
  }

  @keyframes show-stars {
    from {
      height: 0;
    }

    to {
      height: 15%;
    }
  }
`;
