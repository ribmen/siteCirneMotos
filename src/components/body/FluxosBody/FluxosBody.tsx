import React from 'react';
import "../InicioBody/body.css";
import "./FluxosBody.css";
import styled from 'styled-components';
import ContentArea2 from '../../utils/ContentArea2'
import banner from '../../../assets/banner-fluxos.jpg';
import salesman from '../../../assets/rapaz-competente-honda.jpg';

const BodyWrapper = styled.main`
  max-width: 1200px;
  margin: 1rem auto; /* Centraliza horizontalmente */
  padding: 0;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.light};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem; 
  align-items: center; 
  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 1rem; 
  }
`;

const TextColumn = styled.div`
  flex: 2;
  p {
    line-height: 1.6;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FluxosBody: React.FC = () => {

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img
        src={banner}
        alt="Banner Cirne Motos"
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
        }}
      />
      <BodyWrapper>
        {/* Primeira ContentArea com texto e imagem lado a lado */}
        <ContentArea2>
            <h1 className='fluxosTitle'>Fluxogramas de processos</h1>
          <FlexContainer>
            <ImageColumn>
              <img src={salesman} alt="Vendedor" />
            </ImageColumn>
            <TextColumn>
              <p className='segundoTexto'>
              Aqui, você encontrará orientações claras para desempenhar suas funções com mais facilidade e agilidade, promovendo um ambiente de trabalho mais integrado e colaborativo. O foco é dar suporte aos colaboradores, garantindo que todos tenham acesso às informações e diretrizes necessárias para executar suas atividades de forma produtiva. Com este material, buscamos otimizar a organização e a comunicação, simplificando rotinas e contribuindo para a excelência nas operações da empresa.
 
                <br/><br/>
                <span className='instructionHighlight'>Use este documento como referência prática no dia a dia e para alinhar sua atuação às melhores práticas do setor.</span>
              </p>
            </TextColumn>
          </FlexContainer>
          {/* Botão no final */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Começar a acessar conteúdos
            </Button>
          </div>
        </ContentArea2>
      </BodyWrapper>
    </div>
  );
};
