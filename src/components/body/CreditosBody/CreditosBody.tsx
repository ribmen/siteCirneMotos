import React from 'react';
import styled from 'styled-components';
import ContentArea2 from '../../utils/ContentArea2';
import handshake from '../../../assets/handshake.jpg';
import motivacional from '../../../assets/videos/the-real-slim-video.mp4';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody2';

const AboutWrapper = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const TextContent = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.neutral.dark}
`;

const Title = styled.h1`
  color: #ff0000;
  font-size: 3rem;
  margin-bottom: 0;
  position: absolute;
  background-color: 'rgba(0, 0, 0, 0.5)';
  top: 13rem;
  left: 14rem;
`;

export const CreditosBody: React.FC = () => {
  return (
    <>
    <div style={{position: 'relative'}}>
    <video
    src={motivacional}
    controls
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: '100%',
      height: 'auto',
      position: 'relative',
    }}
    />
    <Title>Créditos</Title>
    </div>
    
    <AboutWrapper>
      {/* Introdução */}
      <ContentArea2>
        <SectionTitle>Desenvolvimento do site</SectionTitle>
        <TextContent>
        Este site foi idealizado e desenvolvido pela <strong>Teixeira-Freire</strong>, representada por <strong>Arkanjo Teixeira</strong> e <strong>Davi Freire</strong>, como parte do projeto de consultoria realizado para a Honda Cirne Motos.

        </TextContent>
      
        <SectionTitle>Agradecimentos
        </SectionTitle>
        <TextContent>
        Queremos expressar nossa gratidão a todos os colaboradores da <strong>Honda Cirne Motos</strong>. Vocês nos receberam com tanta atenção e respeito que transformaram essa experiência em um aprendizado valioso. A parceria e o cuidado de cada um nos motivaram a buscar o melhor para este projeto.

        <br/><br/>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <img src={handshake} style={{width: '400px', height: 'auto'}} />
        </div>
        <br/><br/>
        Também reconhecemos o apoio técnico dos amigos <strong>Victor Menezes</strong> e <strong>Rafael Alfredo</strong>, que contribuíram para a entrega do site e do manual físico, respectivamente, com a qualidade esperada.

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

