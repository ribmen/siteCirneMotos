import React from 'react';
import styled from 'styled-components';
import TF from '../../assets/logo/TEIXEIRA-FREIRE.png';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral.dark};
  color: ${({ theme }) => theme.colors.neutral.light};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  bottom: 0px;
  margin-top: auto;
`;

const FooterText = styled.div`
  text-align: center;
  margin-left: 35rem;
`;

const FooterLinks = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.light};
  margin: 0 ${({ theme }) => theme.spacing.small};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <FooterLinks>
          <FooterLink href="https://wa.me/+5584981883488" target="_blank">Fale conosco</FooterLink>
          <FooterLink href="https://www.cirnemotos.com.br/" target="_blank">Visite nosso site oficial</FooterLink>
        </FooterLinks>
        <p>© 2025 Cirne Motos | Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://github.com/ribmen" target="_blank">@ribmen</a>.</p>
      </FooterText>
      <Logo style={{marginRight: '3rem'}} src={TF} alt="TEIXEIRA FREIRE Logo" />
    </FooterWrapper>
  );
};

export default Footer;