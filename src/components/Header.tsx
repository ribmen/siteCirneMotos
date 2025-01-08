import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral.light};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.dark};
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.small};
  z-index: 1;

  ${({ $isOpen }: { $isOpen: boolean }) => $isOpen && `
    display: block;
  `}
`;

const DropdownItem = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.neutral.dark};

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary}22;
  }
`;

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <HeaderWrapper>
      
      <Nav>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/sumario">Sumário</NavLink>
        <NavLink href="/sobre">Sobre a Empresa</NavLink>
        <NavLink href="/conceitos">Conceitos Fundamentais</NavLink>
        <DropdownWrapper>
          <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Mais
          </DropdownButton>
          <DropdownContent $isOpen={isDropdownOpen}>
            <DropdownItem href="/contato">Contato</DropdownItem>
            <DropdownItem href="/ajuda">Ajuda</DropdownItem>
            <DropdownItem href="/privacidade">Política de Privacidade</DropdownItem>
          </DropdownContent>
        </DropdownWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

