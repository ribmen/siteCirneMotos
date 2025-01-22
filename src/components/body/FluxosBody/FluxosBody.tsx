import React from 'react';
import "../InicioBody/body.css";
import "./FluxosBody.css";
import styled from 'styled-components';
import ContentArea2 from '../../utils/ContentArea2'
import banner from '../../../assets/banners/banner-fluxos.jpg';
import planejamento from '../../../assets/planejamento.jpg';

//FLUXOGRAMAS
import emplacamento1 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-1.png'
import emplacamento2 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-2.png'
import faturamento from '../../../assets/fluxogramas/Fluxograma-Faturamento.png';
import venda from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-1.png'
import apresentacao from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-2.png'
import perseguicao from '../../../assets/fluxogramas/Fluxo-Comercial-Perseguição.png'

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto;
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

const SumarioTopics = styled.ul`
li {
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.dark};
}
`

const TextColumn = styled.div`
  flex: 2;
  p {
    line-height: 1.6;
    font-size: 1.2rem;
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
              <img src={planejamento} alt="Planejamento" />
            </ImageColumn>
            <TextColumn>
              <p className='segundoTexto'>
              Os Fluxogramas de Processos são representações visuais que mapeiam e descrevem cada etapa das atividades dentro da empresa. Eles ajudam a entender o fluxo de trabalho, destacando responsabilidades e interações entre as etapas, o que facilita a identificação de melhorias e otimizações.
              <br/><br/>
              Esses fluxogramas asseguram a padronização dos processos, garantindo que as equipes sigam os mesmos procedimentos e alcancem resultados consistentes, promovendo a eficiência e a melhoria contínua na <span className='instructionHighlight'>Cirne Motos Honda</span>.                
              </p>
            </TextColumn>
          
          </FlexContainer>
          <nav className='table-of-contents'>
            <h1 className='sumarioTitle'>Sumário</h1>
            <SumarioTopics>
              <li><a href="#section1">Emplacamento e Seminovos</a></li>
              <li><a href="#section2">Faturamento</a></li>
              <li><a href="#section3">Processo de venda</a></li>
              <li><a href="#section4">Processo de apresentação da moto</a></li>
              <li><a href="#section5">Perseguição</a></li>
            </SumarioTopics>
          </nav>
        </ContentArea2>

        <h1>Emplacamento e Seminovos</h1>
        <img style={{maxWidth: '70%', height: 'auto'}} src={emplacamento1} />
        <h1>Venda de seminovos</h1>
        <img style={{maxWidth: '110%', height: 'auto'}} src={emplacamento2} /> 
        <h1>Faturamento</h1>
        <img style={{maxWidth: '100%', height: 'auto'}} src={faturamento} />
        <h1>Processo de venda</h1>
        <img style={{maxWidth: '100%', height: 'auto'}} src={venda} />
        <h1>Processo de apresentação da moto</h1>
        <img style={{maxWidth: '100%', height: 'auto'}} src={apresentacao} />
        <h1>Perseguição</h1>
        <img style={{maxWidth: '100%', height: 'auto'}} src={perseguicao} />
      </BodyWrapper>
    </div>
  );
};
