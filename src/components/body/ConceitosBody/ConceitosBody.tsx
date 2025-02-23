import React from 'react';
import styled from 'styled-components';
import "../InicioBody/body.css";
import "./ConceitosBody.css";
import ContentArea2 from '../../utils/ContentArea2'
import banner from '../../../assets/honda-legacy2.jpg';
import salesman from '../../../assets/salesman.jpg';
import missaoValores from '../../../assets/missaovalores2.jpg';
import mulher from '../../../assets/mulher-honda.jpg';
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

export const Button = styled.button`
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
`;

const ConceitosBody: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Banner src={banner} alt="Banner Conceitos Fundamentais" />
      <BodyWrapper>
        <ContentArea2>

        <Title>Conceitos Fundamentais Cirne Motos Honda</Title>

        <Section>
          <Image style={{width: '60%', height: 'auto', marginLeft: '12rem'}} src={missaoValores} alt="Missão e Valores da Cirne Motos Honda" />
          <p>
            Para garantir o <strong>sucesso contínuo</strong> e a <strong>excelência</strong> no atendimento ao cliente, 
            a Cirne Motos Honda adota conceitos fundamentais que guiam nossas práticas diárias e orientam o desempenho da equipe. Estes princípios são essenciais para a busca incessante pela qualidade e a satisfação do cliente, fundamentais para o crescimento da empresa.
          </p>
        </Section>

        <Section>
          <SectionTitle>(3B+F-O)K</SectionTitle>
          <FlexContainer>
            <TextContent>
              <p>O conceito <strong>(3B+F-O)K</strong> é uma abordagem estratégica para maximizar a eficácia na venda e no atendimento, com foco em causar um impacto positivo no cliente:
              </p>
              <ul>
                <li><strong>3B: </strong>A primeira parte do conceito se refere a causar o “brilho no olho” do cliente em três aspectos essenciais:
                </li>
                  <ul>
                    <li><strong>Bom Atendimento: </strong> Proporcionar um atendimento excepcional, que faça o cliente se sentir valorizado e bem atendido.
                    </li>
                    <li><strong>Bom Produto: </strong> Oferecer produtos de qualidade que atendam às necessidades e expectativas do cliente.
                    </li>
                    <li><strong>Boa Proposta: </strong> Apresentar propostas claras e vantajosas, que realmente se destaquem para o cliente, agregando valor à sua experiência.
                    </li>
                  </ul>
                <li><strong>F (Mexer na Ferida): </strong> Identificar e abordar as necessidades ou problemas do cliente, tocando nas questões sensíveis para gerar uma solução eficaz e atrativa.
                </li>
                <li><strong>O (Objeções): </strong> Reduzir as objeções do cliente ao máximo, garantindo que ele veja valor na oferta e entenda que sua escolha é a melhor opção.
                </li>
                <li><strong>K (Nocaute): </strong> Fechar a venda com determinação, demonstrando confiança e foco. Agir de forma decisiva, "nocautear" a resistência do cliente e garantir que ele faça a compra com a certeza de que tomou a melhor decisão.</li>
              </ul>
            </TextContent>
            <LeftImage src={salesman} alt="Vendedor" />
          </FlexContainer>
        </Section>

        <Section>
          <SectionTitle>CHA: Conhecimentos, Habilidades e Atitudes</SectionTitle>
          <FlexContainer>
            <TextContent>
              <p>O conceito CHA reflete a importância do desenvolvimento contínuo dos colaboradores, que são a base do sucesso da empresa. Ele é fundamental para garantir que cada membro da equipe tenha as ferramentas necessárias para executar suas funções com excelência:
              </p>
              <ul>
                <li><strong>Conhecimentos: </strong> O "saber", ou seja, o aprendizado teórico e técnico necessário para realizar as atividades com competência e compreensão profunda do que se oferece.
                </li>
                <li><strong>Habilidades: </strong> O "saber fazer", que envolve a aplicação prática dos conhecimentos adquiridos e a capacidade de realizar tarefas com eficiência e qualidade.
                </li>
                <li><strong>Atitudes: </strong> O "querer fazer", que envolve a motivação, o compromisso e a postura proativa para buscar resultados e superar desafios com dedicação.
                </li>
              </ul>
            </TextContent>
            <LeftImage src={mulher} alt="Mulher com moto" />
          </FlexContainer>
        </Section>

        {/* BANNER SOICHIRO */}
        {/* <Section style={{backgroundColor: '#e6e6e6b9', padding: '3rem'}}>
          <Image style={{marginLeft: '10rem'}} src={soichiroMoto} alt="Soichiro Honda e sua moto" />
          <p>
          Esses conceitos são pilares para otimizar nossas operações, melhorar o atendimento ao cliente e garantir que a Cirne Motos Honda continue a crescer com solidez e inovação.
          </p>
        </Section> */}

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

export default ConceitosBody;
