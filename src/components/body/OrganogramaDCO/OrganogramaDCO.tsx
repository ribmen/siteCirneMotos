import React from 'react';
import styled from 'styled-components';
import banner from '../../../assets/banners/organograma.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import gerente from '../../../assets/gerente-produto.jpg';
import "../InicioBody/body.css";
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const Title = styled.h1`
  color: #cc0000;
  font-size: 2.5rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 1rem; 
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha em telas menores */
    align-items: center; 
  }
`;

const LeftImage = styled.img`
  flex-shrink: 0; /* Garante que a imagem não encolha */
  width: 350px; 
  height: auto; 
  object-fit: contain;
`;

const TextContent = styled.div`
  flex: 1; 
  p, ul, li {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

export const OrganogramaDCO: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Banner src={banner} alt="Banner Organograma e DCO" />
      <BodyWrapper>
        <ContentArea2>

        <Title>Organograma e DCO</Title>

        <Section>
          <SectionTitle>O que é um organograma?</SectionTitle>
          <p>
          O <strong>Organograma</strong> é uma representação visual da estrutura hierárquica da empresa, mostrando como os departamentos e cargos se interligam. Ele facilita a comunicação, define a quem cada colaborador se reporta e assegura o alinhamento entre as áreas.
          </p>
        </Section>

        <Section>
          <SectionTitle>E quanto ao DCO?</SectionTitle>
          <FlexContainer>
            <LeftImage src={gerente} />
            <TextContent>
              <p>O <strong>Descritivo de Cargos (DCO)</strong> define as responsabilidades, funções e expectativas de cada cargo dentro da empresa. Ele orienta o colaborador sobre suas atribuições, competências necessárias e objetivos, ajudando a manter todos alinhados com os objetivos organizacionais.
              <br/><br/>
              Essas ferramentas são essenciais para garantir clareza, eficiência e um bom desempenho das equipes dentro da Cirne Motos Honda.
              </p>
            </TextContent>
          </FlexContainer>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Voltar ao topo
            </Button>
          </div>
        </ContentArea2>

      </BodyWrapper>
    </div>
  );
};

