import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  color: ${({ theme }) => theme.colors.neutral.light};
  padding: ${({ theme }) => theme.spacing.medium};
  height: 3.5rem;
  text-align: center;
  margin-top: auto;
`;

const FooterLinks = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.light};
  margin: 0 ${({ theme }) => theme.spacing.small};

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink href="/termos">Fale conosco</FooterLink>
        <FooterLink href="/cookies">Visite nosso site de vendas</FooterLink>
      </FooterLinks>
      <div>© 2025 Cirne Motos. Todos os direitos reservados.</div>
    </FooterWrapper>
  );
};

export default Footer;

