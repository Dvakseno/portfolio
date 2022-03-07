import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './theme';
import { Header, About } from './units';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <About />
    </ThemeProvider>
  );
};
