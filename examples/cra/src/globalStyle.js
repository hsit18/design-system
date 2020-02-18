import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    box-sizing: border-box;
    font-size: ${props => props.theme.config.font.rootSize}px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    ${props => props.theme.typography.body};
    font-family: ${props => props.theme.config.font.family};
  }
`;

export default GlobalStyle;
