import React from 'react';
import styled from 'styled-components';
import TF from '../../assets/logo/TEIXEIRA-FREIRE.png';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  color: ${({ theme }) => theme.colors.neutral.light};
  padding: 1rem 13rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;

  @media screen and (max-width: 932px) {
    padding: 2rem;
  }
  
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const FooterLinks = styled.div`
  display: flex;
  text-align: left;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  

  @media screen and (max-width: 932px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.light};
  text-decoration: none;
  font-weight: 500;
  

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding-top: ${({ theme }) => theme.spacing.small};

  @media screen and (max-width: 932px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;

  @media screen and (max-width: 932px) {
    order: -1; /* Move a logo para cima em telas menores */
    width: 90px;
    margin-top: 1rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="https://wa.me/+5584981883488" target="_blank">Fale conosco</FooterLink>
          <FooterLink href="https://www.cirnemotos.com.br/" target="_blank">Visite nosso site oficial</FooterLink>
        </FooterLinks>
          <FooterLink>© 2025 Cirne Motos | Todos os direitos reservados.</FooterLink>
          <FooterLink>Desenvolvido por <a href="https://github.com/ribmen" target="_blank">@ribmen</a>.</FooterLink>
      </FooterContent>
      <FooterBottom>
        <div></div> {/* Placeholder para alinhar a logo corretamente */}
        <Logo src={TF} alt="TEIXEIRA FREIRE Logo" />
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
