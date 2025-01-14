import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
