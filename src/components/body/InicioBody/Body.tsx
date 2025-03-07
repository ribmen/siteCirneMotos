import "./body.css";
import styled from 'styled-components';
import ContentArea from '../../utils/ContentArea';
import banner from '../../../assets/banners/banner-cirne-motos.jpg';
import salesman from '../../../assets/rapaz-competente-honda.jpg';
import { SoichiroQuote } from '../../utils/SoichiroQuote';

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto; /* Centraliza horizontalmente */
  padding: 0;
  flex: 1;

  @media screen and (max-width: 1024px) { // tablets
    max-width: 90%; 
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.light};
  }

  @media screen and (max-width: 758px) {
    font-size: 1rem;
    padding: 10px 15px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem; 
  align-items: center; 

  @media screen and (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column; 
    gap: 1rem; 
  }
`;

const TextColumn = styled.div`
  flex: 2;
  p {
    line-height: 1.6;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  @media screen and (max-width: 768px){
    p {
      font-size: 1.2rem;
      text-align: left;
      width: 90%;
    }
    span {
      font-size: 1.2rem;
      text-align: left;
    }
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      max-width: 80%;
      display: block;
      margin: 0 auto;
    }
  }
`;

const MainWrapper = styled.div`
  position: relative; 
  width: 100%; 
  height: auto;

  @media screen and (max-width: 932px) {
  }
`

const MainBanner = styled.img`
  width: 100%;
  height: auto;
  position: relative;

  @media screen and (max-width: 1000px) {
    object-fit: cover;
    width: 100%;
    height: 25vh;
  }

`

export const Body: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <MainWrapper>
      <MainBanner src={banner} alt="Banner Cirne Motos"/>
      {/* Container para o título e o texto */}
      <div className="bannerContent">
        <h1 className="title">
          Manual Online  <span className="cirneHighlight">Cirne Motos</span>
        </h1>
      </div>
        <div className="supportingTextContainer">
          <p className="supportingText">
          Bem-vindo(a) ao <strong>Manual de Auxílio e Melhoria Contínua da Cirne Motos Honda</strong>. Este material foi criado para ser uma ferramenta prática e acessível, ajudando a organizar e melhorar os processos internos da empresa. Nosso objetivo é facilitar o dia a dia da equipe, alinhando as operações com padrões de eficiência e qualidade, sempre buscando evoluir.
          </p>
        </div>
      
      <BodyWrapper>
        {/* Primeira ContentArea com animação de aparecer com deslize */}
        <ContentArea >
          <FlexContainer>
            <ImageColumn>
              <img src={salesman} alt="Vendedor" />
            </ImageColumn>
            <TextColumn>
              <p className='segundoTexto'>
                Aqui, você encontrará orientações claras para desempenhar suas funções com mais facilidade e agilidade, promovendo um ambiente de trabalho mais integrado e colaborativo. O foco é dar suporte aos colaboradores, garantindo que todos tenham acesso às informações e diretrizes necessárias para executar suas atividades de forma produtiva.
                <br/><br/>
                <span className='instructionHighlight'>Use este documento como referência prática no dia a dia e para alinhar sua atuação às melhores práticas do setor.</span>
              </p>
            </TextColumn>
          </FlexContainer>
        </ContentArea>
        <ContentArea>
          <SoichiroQuote/>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Começar a acessar conteúdos
            </Button>
          </div>
        </ContentArea>
         

      </BodyWrapper>
    </MainWrapper>
  );
};
