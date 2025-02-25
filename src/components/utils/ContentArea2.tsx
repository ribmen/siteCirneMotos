
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentAreaWrapper = styled.div<{ isvisible: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral.light};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem; /* Espaçamento entre ContentArea */
  position: relative;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  /* Animação de entrada */
  ${({ isvisible }) => isvisible && `
    opacity: 1;
    transform: translateY(0);
  `}

  @media screen and (max-width: 932px) {
    width: 80%;
  }
`;

const ContentArea2: React.FC<ContentAreaProps> = ({ children }) => {
  const [isvisible, setisvisible] = useState(false);

  // Ativar a animação após o carregamento da página
  useEffect(() => {
    setisvisible(true);
  }, []);

  return (
    <ContentAreaWrapper isvisible={isvisible}>
      {children}
    </ContentAreaWrapper>
  );
};

export default ContentArea2;
