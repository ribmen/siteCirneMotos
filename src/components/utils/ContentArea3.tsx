// ContentArea.tsx
import React, { useEffect, useState, useRef } from 'react';
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

  /* Animação quando o componente estiver visível */
  ${({ isvisible }) => isvisible && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

const ContentArea3: React.FC<ContentAreaProps> = ({ children }) => {
  const [isvisible, setisvisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Detecta se o componente entrou na tela
  const handleScroll = () => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setisvisible(true);
      } else {
        setisvisible(false);
      }
    }
  };

  useEffect(() => {
    // Adiciona o evento de scroll para detectar o posicionamento
    window.addEventListener('scroll', handleScroll);
    // Chama uma vez no início para verificar a visibilidade
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ContentAreaWrapper ref={contentRef} isvisible={isvisible}>
      {children}
    </ContentAreaWrapper>
  );
};

export default ContentArea3;
