import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import cirne from "../../assets/logo/logo_cirne-motos.png";
import logoHonda from "../../assets/logo/logo-honda.jpg";
import whatsappIcon from "../../assets/icons/whatsapp-icon.png";


const HeaderWrapper = styled.header`
  width: 100%;
`;

const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border-bottom: 1px solid #d3d3d3;
`;

const LowerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  color: ${({ theme }) => theme.colors.neutral.light};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.img`
  height: 70px;
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InfoSpan = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.neutral.dark};
  border-radius: 100px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.light};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral.dark};
  position: relative; 
  text-decoration: none; 
  
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: ''; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};  
    transform: scaleX(0); 
    transform-origin: bottom right;
    transition: transform 0.2s ease;  
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);  /* Expande a linha para a largura total quando em hover ou focus */
    transform-origin: bottom left;  /* Garante que a animação cresça da esquerda */
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownIcon = styled.span<{ isopen: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  ${({ isopen }) => isopen && css`
    transform: rotate(180deg);
  `}
`;

const DropdownContent = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (isopen ? "block" : "none")};
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.light};
  }
`;

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <HeaderWrapper>
      <UpperHeader>
        <InfoGroup>
          <Logo src={cirne} alt="Logo Cirne Motos" />
          <Logo src={logoHonda} alt="Logo Honda" />
        </InfoGroup>
        <InfoGroup>
          <InfoSpan>Fale conosco:</InfoSpan>
          <Button style={{color: "#000"}} href="https://wa.me/+5584981883488" target="_blank">
            <img src={whatsappIcon} alt="WhatsApp" />
            WhatsApp
          </Button>
          <InfoSpan>Siga-nos nas redes sociais:</InfoSpan>
          <Button href="https://www.instagram.com/cirnemotos/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </Button>

        </InfoGroup>
      </UpperHeader>

      <LowerHeader>
        <Nav>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/sobre">Sobre a Empresa</NavLink>
          <NavLink to="/conceitos">Conceitos Fundamentais</NavLink>
          <NavLink to="/organogramaDCO">Organograma e DCO</NavLink>
          <DropdownWrapper>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Mais <DropdownIcon isopen={isDropdownOpen}>▼</DropdownIcon>
            </DropdownButton>
            <DropdownContent isopen={isDropdownOpen}>
              <DropdownItem to="/fluxos">Fluxogramas de Processos</DropdownItem>
              <DropdownItem to="/pops">POPs</DropdownItem>
              <DropdownItem to="/creditos">Créditos</DropdownItem>
            </DropdownContent>
          </DropdownWrapper>
        </Nav>
      </LowerHeader>
    </HeaderWrapper>
  );
};

export default Header;
