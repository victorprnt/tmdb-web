import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

`;
