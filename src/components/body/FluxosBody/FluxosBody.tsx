import React, { useState } from 'react';
import "../InicioBody/body.css";
import "./FluxosBody.css";
import styled from 'styled-components';
import ContentArea2 from '../../utils/ContentArea2'
import banner from '../../../assets/banners/fluxogramas.jpg';
import planejamento from '../../../assets/planejamento.jpg';
import {dataAux} from "./dataAux";
import {dataVendedor} from "./dataVendedor";
import { Dropdown } from '../../utils/Dropdown';
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';
import { Banner } from '../OrganogramaDCO/OrganogramaDCO';
import { Title } from '../SobreEmpresaBody/AboutBody2';

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0;
`;

export const FlexContainer = styled.div`
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

export const ImageColumn = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;

// Implementação da expansão da imagem
export const ExpandButton = styled.button`
  bottom: 1rem;
  right: 1rem;
  background: #cc0000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 8px 4px 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;
//   transition: background-color 0.3s ease, transform 0.3s ease-in-out;

  &:hover {
    background: #910000;
    transform: scale(1.1);
  }
`;

// Overlay do popup
export const PopupOverlay = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;


  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  animation: zoomIn 0.3s ease;

  @keyframes zoomIn {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;

// Botão de fechar
export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff0000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #cc0000;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 70%;
  margin: 2rem auto;
`;

export const FluxosBody: React.FC = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [popupImageIdAux, setPopupImageIdAux] = useState<number | null>(null);
  const [popupImageIdVendedor, setPopupImageIdVendedor] = useState<number | null>(null);

  const handleOpenPopupAux = (id: number) => {
    setPopupImageIdAux(id);
  };
  const handleOpenPopupVendedor = (id: number) => {
    setPopupImageIdVendedor(id);
  };

  const handleClosePopupAux = () => {
    setPopupImageIdAux(null);
  };

  const handleClosePopupVendedor = () => {
    setPopupImageIdVendedor(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Banner
        src={banner}
        alt="Banner Cirne Motos"        
      />
      <BodyWrapper>
        {/* Primeira ContentArea com texto e imagem lado a lado */}
        <ContentArea2>
            <Title>Fluxogramas de processos </Title>

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
          <SectionTitle>Fluxogramas COMERCIAL</SectionTitle>
          <nav className='table-of-contents'>
            <h1 className='sumarioTitle'>Sumário</h1>
            <h3 style={{marginBottom: 0}}>Auxiliar de vendas</h3>
            <SumarioTopics>
              <li><a>Processo de Faturamento</a></li>
              <li><a>Entrega da moto</a></li>
              <li><a>Emplacamento</a></li>
            </SumarioTopics>

            <h3 style={{marginBottom: 0}}>Vendedor</h3>
            <SumarioTopics>
              <li><a>Processo de vendas</a></li>
              <li><a>Apresentação da moto</a></li>
              <li><a>Processo de perseguição do cliente</a></li>
              <li><a>Processo de motos e usado (seminovos)</a></li>
            </SumarioTopics>
          </nav>
        </ContentArea2>

 {/*        <ContentArea2> */}
          <div className="mobileMargin">
          <Title>Cargo Auxiliar de vendas </Title>
            {dataAux.map((dataAux) => (
              <>
                <h1>{dataAux.title}</h1>
                <ImageWrapper key={dataAux.id}>
                  <img style={{maxWidth: '100%', height: 'auto'}} src={dataAux.src} alt={dataAux.alt} />
                  <div style={{marginTop: '2rem', width: "1000px", display: 'flex'}}>
                    <div style={{marginTop: '1.2rem'}}>
                    <ExpandButton onClick={() => handleOpenPopupAux(dataAux.id)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-32 0 512 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm32 320c0-17.7-14.3-32-32-32S0 334.3 0 352v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zm128 320c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32z"/></svg></ExpandButton>
                    </div>
                    <Dropdown data={dataAux.text} />
                  </div>
                  <PopupOverlay show={popupImageIdAux === dataAux.id}>
                    <PopupImage src={dataAux.src} alt={dataAux.alt} />
                    <CloseButton onClick={handleClosePopupAux}>X</CloseButton>
                  </PopupOverlay>
                </ImageWrapper>    
              </>
            ),
            )
          }
          <div>
          <h1 className='fluxosTitle'>Cargo Vendedor </h1>
          {dataVendedor.map((dataVendedor) => (
                <>
                  <h1>{dataVendedor.title}</h1>
                <ImageWrapper key={dataVendedor.id}>
                  <img style={{maxWidth: '100%', height: 'auto'}} src={dataVendedor.src} alt={dataVendedor.alt} />
                  
                  <PopupOverlay show={popupImageIdVendedor === dataVendedor.id}>
                    <PopupImage src={dataVendedor.src} alt={dataVendedor.alt} />
                    <CloseButton onClick={handleClosePopupVendedor}>X</CloseButton>
                  </PopupOverlay>
                  <div style={{marginTop: '2rem', width: "1000px", display: 'flex'}}>
                    <div style={{marginTop: '1.2rem'}}>
                    <ExpandButton onClick={() => handleOpenPopupVendedor(dataVendedor.id)}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-32 0 512 512"><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zm32 320c0-17.7-14.3-32-32-32S0 334.3 0 352v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zm128 320c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32z"/></svg></ExpandButton>
                    </div>
                    <Dropdown data={dataVendedor.text} />
                  </div>
                </ImageWrapper>   
                </>
              ))}
          </div>

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