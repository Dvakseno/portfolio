import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { GlobalStyle, theme } from './theme';
import { Header, About, Skills } from './units';
import { activeTheme } from './store/active-theme';

export const App = () => {
  const active = useRecoilValue(activeTheme);

  return (
    <ThemeProvider theme={theme[active]}>
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
    </ThemeProvider>
  );
};
