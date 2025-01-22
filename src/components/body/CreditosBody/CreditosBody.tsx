import React from 'react';
import styled from 'styled-components';
import bannerCirne from '../../../assets/banners/cirne-loja.jpg'
import ContentArea2 from '../../utils/ContentArea2';

const AboutWrapper = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const Section = styled.section`
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #cc0000;
  border-left: 5px solid #cc0000; //#FF0000
  padding-left: 1rem;
`;

const TextContent = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.dark}
`;

const Title = styled.h1`
  color: #cc0000;
  font-size: 2.5rem;
  margin-bottom: 0;
`;

const ValuesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;

    &::before {
      content: '✓';
      color: #cc0000;
      font-weight: bold;
      margin-right: 0.5rem;
    }

    span {
      font-size: 1.2rem;
      color: #333;
    }
  }
`;

export const CreditosBody: React.FC = () => {
  return (
    <>
    {/* Banner */}
    <img
        src={bannerCirne}
        alt="Banner Cirne Motos"
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
        }}
      />
    
    <AboutWrapper>
      {/* Introdução */}
      <ContentArea2>
      <Title>Créditos</Title>
        <SectionTitle>Desenvolvimento do site</SectionTitle>
        <TextContent>
        Este site foi idealizado e desenvolvido pela <strong>Teixeira-Freire</strong>, representada por <strong>Arkanjo Teixeira</strong> e <strong>Davi Freire</strong>, como parte do projeto de consultoria realizado para a Honda Cirne Motos.

        </TextContent>
      
        <SectionTitle>Agradecimentos
        </SectionTitle>
        <TextContent>
        Queremos expressar nossa gratidão a todos os colaboradores da <strong>Honda Cirne Motos</strong>. Vocês nos receberam com tanta atenção e respeito que transformaram essa experiência em um aprendizado valioso. A parceria e o cuidado de cada um nos motivaram a buscar o melhor para este projeto.
        <br/><br/>
        Também reconhecemos o apoio técnico dos amigos Victor Menezes e Rafael Alfredo, que contribuíram para a entrega do site e do manual físico, respectivamente, com a qualidade esperada.

        </TextContent>
      
        <SectionTitle>Mensagem final</SectionTitle>
        <TextContent>
        Estamos felizes em contribuir para o aprimoramento e a eficiência dos processos da Honda Cirne Motos e seguimos à disposição para futuras colaborações!
        <br/><br/>
        Com apreço, <br/>
        <strong>Arkanjo Teixeira e Davi Freire</strong>
        </TextContent>
      
      </ContentArea2>
    </AboutWrapper>
    </>
  );
};

