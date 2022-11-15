import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 120%;
    -webkit-text-size-adjust: none;

    @media screen and (min-device-width: 375px) {
      font-size: 30%;
    }

    @media screen and (min-device-width: 768px) {
        font-size: 60%;
    }
    
    @media screen and (min-device-width: 1024px) {
        font-size: 100%;
    }
  }

  body {
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;