import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const ContentArea = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.light};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral.light};
  border: none;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary}CC;
  }
`;

const Body: React.FC = () => {
  return (
    <BodyWrapper>
      <ContentArea>
        <h1>Conteúdo principal</h1>
        <Button>Saiba mais</Button>
      </ContentArea>
    </BodyWrapper>
  );
};

export default Body;

