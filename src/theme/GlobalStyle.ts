import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: monospace, sans-serif;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: sans-serif;
  }

  h2 {
    font-size: 1.75em;
    letter-spacing: 0.05em;
    margin: 0 0 1em 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
