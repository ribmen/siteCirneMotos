import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/Banner Honda Motos.jpg';
import bannerCirne from '../../../assets/cirnemotosbanner2.jpg'

const AboutWrapper = styled.div`
  color: #333;
  line-height: 1.6;
`;

const Banner = styled.div`
  background: url(${bannerCirne}) no-repeat center;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 8rem;
  text-align: left;
  color: white;

  h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ff0000;
  border-left: 5px solid #ff0000;
  padding-left: 1rem;
`;

const TextContent = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
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
      color: #ff0000;
      font-weight: bold;
      margin-right: 0.5rem;
    }

    span {
      font-size: 1rem;
      color: #333;
    }
  }
`;

const AboutBody: React.FC = () => {
  return (
    <AboutWrapper>
      {/* Banner */}
      <Banner>
        <h1>Sobre a Cirne Motos Honda</h1>
      </Banner>

      {/* Introdução */}
      <Section>
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
      </Section>
    </AboutWrapper>
  );
};

export default AboutBody;
