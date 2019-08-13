import {createGlobalStyle} from "styled-components/macro";
import {Theme} from "./Theme/Theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * { outline: none; }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.accentDark};
  }
`;

export default GlobalStyle;
