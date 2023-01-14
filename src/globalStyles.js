import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Inter', sans-serif;
    cursor: auto;
    background-color: ${({ theme }) => theme.ui02};
  };

  #app, #app > div {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
