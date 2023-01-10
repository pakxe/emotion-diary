import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
