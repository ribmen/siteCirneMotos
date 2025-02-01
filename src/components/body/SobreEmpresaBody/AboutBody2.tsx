import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import bannerCirne from '../../../assets/banners/cirne-loja.jpg';
import ContentArea2 from '../../utils/ContentArea2';
import moto from '../../../assets/moto-honda.png';
import cbr1000 from '../../../assets/cbr1000.png';
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle, TextContent } from './AboutBody';

const AboutWrapper = styled.div`
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

// Container das motos
const MotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 2rem;
  position: relative;
  height: 250px;
`;

// Animação para as motos
const MotoEsquerda = styled.img<{ visible: boolean }>`
  width: 300px;
  height: auto;
  margin-right: 1rem;
  transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
`;

const MotoDireita = styled.img<{ visible: boolean }>`
  width: 320px;
  height: 200px;
  margin-left: 1rem;
  transform: ${({ visible }) => (visible ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
`;

const AboutBody2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const motosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Ativa a animação quando 50% do elemento está visível
    );

    if (motosRef.current) {
      observer.observe(motosRef.current);
    }

    return () => {
      if (motosRef.current) {
        observer.unobserve(motosRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

          {/* Motos Animadas */}
          <MotosContainer ref={motosRef}>
            <MotoEsquerda src={moto} alt="Moto Honda" visible={isVisible} />
            <MotoDireita src={cbr1000} alt="CBR 1000" visible={isVisible} />
          </MotosContainer>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>Voltar ao topo</Button>
          </div>
        </ContentArea2>
      </AboutWrapper>
    </>
  );
};

export default AboutBody2;
