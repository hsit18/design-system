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
    color: ${props => props.theme.palette.colors.body};
    font-weight: ${props => props.theme.typography.body.fontWeight};
    font-size: ${props => props.theme.typography.body.fontSize};
    font-family: ${props => props.theme.config.font.family};
    line-height: ${props => props.theme.typography.body.lineHeight};
    background-color: ${props => props.theme.palette.grey1};
  }

  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder,
  input:-moz-placeholder {
    font-family: ${props => props.theme.config.font.family};
  }

`;

export default GlobalStyle;
