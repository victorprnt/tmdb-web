import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --dark-green: #264653;
  --light-green: #2a9d8f;
  --yellow: #e9c46a;
  --orange: #f4a261;
  --red: #e76f51;
}

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
