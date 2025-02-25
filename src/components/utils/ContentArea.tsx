import React, { useEffect, useState, useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface ContentAreaProps {
  children: React.ReactNode;
  style?: CSSProperties;
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

  @media screen and (max-width: 932px) {
    width: 88%;
  }
`;

const ContentArea: React.FC<ContentAreaProps> = ({ children, style }) => {
  const [isvisible, setisvisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setisvisible(true);
            observer.unobserve(entry.target); // Para de observar após a primeira vez
          }
        });
      },
      {
        root: null, // Observa a janela do navegador
        rootMargin: '0px',
        threshold: 0.2, // Considera visível quando 10% do elemento estiver na tela
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <ContentAreaWrapper ref={contentRef} isvisible={isvisible} style={style}>
      {children}
    </ContentAreaWrapper>
  );
};

export default ContentArea;