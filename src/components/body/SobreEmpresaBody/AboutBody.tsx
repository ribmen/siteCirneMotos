import React from 'react';
import styled from 'styled-components';
import bannerCirne from '../../../assets/banners/cirne-loja.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import moto from '../../../assets/moto-honda.png';
import cbr1000 from '../../../assets/cbr1000.png';
import { Button } from '../ConceitosBody/ConceitosBody';

const AboutWrapper = styled.div`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;

  @media screen and (max-width: 1200px) {
    max-width: 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #cc0000;
  border-left: 5px solid #cc0000; //#FF0000
  padding-left: 1rem;
`;

export const TextContent = styled.p`
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

const AboutBanner = styled.img `
  width: 100%;
  height: auto;
  position: relative;

  @media screen and (max-width: 1200px) {
    object-fit: cover;
    width: 100%;
    height: 25vh;
  }
`

const MotoWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: flex-end;
`

const Moto = styled.img`
  width: 300px; 
  height: auto; 
  margin-right: 1rem;

  @media screen and (max-width: 1200px){
    width: 150px;
    height: auto;
  }
`

const CBR1000 = styled.img`
  width: 320px; 
  height: 200px;
  bottom: 0;
  margin-left: 1rem;

  @media screen and (max-width: 1200px){
    width: 160px;
    height: 100px;
  }
`

const AboutBody: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
    {/* Banner */}
    <AboutBanner src={bannerCirne} alt="Banner Cirne Motos" />
    
    <AboutWrapper>
      {/* Introdução */}
      <ContentArea2>
      <Title>Sobre a empresa</Title>
        <SectionTitle>Quem Somos</SectionTitle>
        <TextContent>
          A Cirne Motos Honda é uma concessionária dedicada a oferecer excelência em produtos e serviços, sempre
          alinhada aos padrões de qualidade da Honda. Atuamos com foco no atendimento ao cliente, na inovação e na
          melhoria contínua, garantindo soluções eficientes e uma experiência completa em mobilidade.
        </TextContent>
      
        <SectionTitle>Missão</SectionTitle>
        <TextContent>
          Proporcionar excelência em todos os nossos segmentos, promovendo segurança, inspirando confiança e
          valorizando cada indivíduo. Nosso compromisso é criar experiências significativas que enriqueçam a vida de
          nossos clientes, colaboradores, parceiros e a sociedade como um todo.
        </TextContent>
      
        <SectionTitle>Visão</SectionTitle>
        <TextContent>
          Ser amplamente reconhecida como uma Família Empresária de referência, comprometida com a busca contínua pela
          excelência em todas as suas atividades, consolidando-se como um Grupo Econômico sólido, inovador e
          empreendedor.
        </TextContent>
      
        <SectionTitle>Valores</SectionTitle>
        <ValuesList>
          <li>
            <span>Relações Humanizadas: Valorizamos conexões genuínas com colaboradores, clientes, fornecedores e a sociedade.</span>
          </li>
          <li>
            <span>Excelência Constante: A busca pela excelência nos impulsiona.</span>
          </li>
          <li>
            <span>Conhecimento Transformador: Aprendizado e inovação são nossas bases.</span>
          </li>
          <li>
            <span>Satisfação Compartilhada: Clientes, colaboradores e empresa felizes nos movem.</span>
          </li>
          <li>
            <span>Unidos Somos Mais Fortes: O trabalho em equipe é nossa engrenagem perfeita.</span>
          </li>
          <li>
            <span>Reconhecimento e Mérito: Celebramos conquistas e valorizamos resultados.</span>
          </li>
        </ValuesList>
        <MotoWrapper>
          <Moto src={moto} />
          <CBR1000 src={cbr1000} />
        </MotoWrapper>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Voltar ao topo
            </Button>
          </div>
      </ContentArea2>
    </AboutWrapper>
    </>
  );
};

export default AboutBody;
