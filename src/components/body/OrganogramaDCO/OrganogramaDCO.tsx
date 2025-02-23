import React, { useState } from 'react';
import styled from 'styled-components';
import banner from '../../../assets/banners/organograma.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import gerente from '../../../assets/gerente-produto.jpg';
import "../InicioBody/body.css";
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';
import { CloseButton, ExpandButton, ImageWrapper, PopupImage, PopupOverlay } from '../FluxosBody/FluxosBody';
import geral from '../../../assets/organograma-dco/Organograma-Honda.jpg'
import {data} from './data';
import { Dropdown } from '../../utils/Dropdown';

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
  
  const [popupImageId, setPopupImageId] = useState<number | null>(null);
  
    const handleOpenPopup = (id: number) => {
      setPopupImageId(id);
    };
  
    const handleClosePopup = () => {
      setPopupImageId(null);
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
            O <strong>Organograma</strong> é uma representação visual da estrutura hierárquica da empresa, mostrando como os departamentos e cargos se interligam. Ele facilita a comunicação, define a quem cada colaborador se reporta e assegura o alinhamento entre as áreas. Veja a seguir, o Organograma Geral da Cirne Motos:
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
        </ContentArea2>

        <div>
          <ImageWrapper key={1}>
            <SectionTitle>GERAL</SectionTitle>
            <img style={{maxWidth: '100%', height: 'auto'}} src={geral} alt="Organograma Geral"/>
            <PopupOverlay show={popupImageId === 1}>
              <PopupImage src={geral} alt='Organograma Geral'/>
              <CloseButton onClick={handleClosePopup}>X</CloseButton>
            </PopupOverlay>
            <div style={{marginTop: '2rem', width: "1000px", display: 'flex'}}>
                            <div style={{marginTop: '1.2rem'}}>
                            <ExpandButton onClick={() => handleOpenPopup(1)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-32 0 512 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm32 320c0-17.7-14.3-32-32-32S0 334.3 0 352v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zm128 320c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32z"/></svg></ExpandButton>
                            </div>
                          </div>
          </ImageWrapper>
                    {data.map((data) => (
                      
                        <ImageWrapper key={data.id}>
                            <SectionTitle>{data.title}</SectionTitle>
                          <img style={{maxWidth: '100%', height: 'auto'}} src={data.src} alt={data.alt} />
                          <PopupOverlay show={popupImageId === data.id}>
                            <PopupImage src={data.src} alt={data.alt} />
                            <CloseButton onClick={handleClosePopup}>X</CloseButton>
                          </PopupOverlay>
                          <div style={{marginTop: '2rem', width: "1000px", display: 'flex'}}>
                            <div style={{marginTop: '1.2rem'}}>
                            <ExpandButton onClick={() => handleOpenPopup(data.id)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-32 0 512 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm32 320c0-17.7-14.3-32-32-32S0 334.3 0 352v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zm128 320c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32z"/></svg></ExpandButton>
                            </div>
                            <Dropdown data={data.text}/>
                          </div>
                        </ImageWrapper>    
                      
                    ))}
                  </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Voltar ao topo
            </Button>
          </div>

      </BodyWrapper>
    </div>
  );
};

