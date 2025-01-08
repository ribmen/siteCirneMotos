import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#FF0000',
    neutral: {
      light: '#F5F5F5',
      dark: '#333333',
    },
  },
  fonts: {
    main: "'Arial', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default theme;

