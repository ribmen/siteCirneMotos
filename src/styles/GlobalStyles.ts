import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background-color: ${({ theme }) => theme.colors.neutral.light};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.primary}CC;
    }
  }
`;

export default GlobalStyles;

