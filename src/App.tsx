import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './theme';
import { Header, About, Skills } from './units';

export const App = () => {
  return (
    <ThemeProvider theme={theme.normal}>
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
    </ThemeProvider>
  );
};
