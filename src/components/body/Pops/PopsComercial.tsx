import React from 'react';
import styled from 'styled-components';
import banner from '../../../assets/banners/reuniao.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import pensamento from '../../../assets/organogramadco.jpg';
import "../InicioBody/body.css";
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';
import { Link } from 'react-router-dom';

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

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral.dark};
  position: relative; 
  text-decoration: none; 
  
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: ''; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};  
    transform: scaleX(0); 
    transform-origin: bottom right;
    transition: transform 0.2s ease;  
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);  /* Expande a linha para a largura total quando em hover ou focus */
    transform-origin: bottom left;  /* Garante que a animação cresça da esquerda */
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  color: #444;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
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

export const PopsComercial: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Banner src={banner} alt="Banner Organograma e DCO" />
      <BodyWrapper>
        <ContentArea2>

        <Title>POPS <strong>COMERCIAL</strong></Title>

        <Section>
          <SectionTitle></SectionTitle>
          <p>
        
          </p>
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

