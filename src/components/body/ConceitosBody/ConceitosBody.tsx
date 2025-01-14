import React from 'react';
import "../InicioBody/body.css";
import "./ConceitosBody.css";
import styled from 'styled-components';
import ContentArea2 from '../../utils/ContentArea2'
import banner from '../../../assets/honda-legacy2.jpg';
import salesman from '../../../assets/rapaz-competente-honda.jpg';

const BodyWrapper = styled.main`
  max-width: 1200px;
  margin: 1rem auto; /* Centraliza horizontalmente */
  padding: 0;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral.light};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem; 
  align-items: center; 
  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 1rem; 
  }
`;

const TextColumn = styled.div`
  flex: 2;
  p {
    line-height: 1.6;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ConceitosBody: React.FC = () => {

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img
        src={banner}
        alt="Banner Conceitos Fundamentais"
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
        }}
      />
      <BodyWrapper>
        {/* Primeira ContentArea com texto e imagem lado a lado */}
        <ContentArea2>
            <h1 className='conceitosTitle'>Conceitos Fundamentais Cirne Motos Honda</h1>
            <p>Para garantir o sucesso contínuo e a excelência no atendimento ao cliente, a Cirne Motos Honda adota conceitos fundamentais que guiam nossas práticas diárias e orientam o desempenho da equipe. Estes princípios são essenciais para a busca incessante pela qualidade e a satisfação do cliente, fundamentais para o crescimento da empresa.</p>
          <FlexContainer>
            <ImageColumn>
              <img src={salesman} alt="Vendedor" />
            </ImageColumn>
            <TextColumn>
              <p className='segundoTexto'>
              Para garantir o sucesso contínuo e a excelência no atendimento ao cliente, a Cirne Motos Honda adota conceitos fundamentais que guiam nossas práticas diárias e orientam o desempenho da equipe. Estes princípios são essenciais para a busca incessante pela qualidade e a satisfação do cliente, fundamentais para o crescimento da empresa.
              <br/><br/>
              (3B+F-O)K
              <br/><br/>
              O conceito (3B+F-O)K é uma abordagem estratégica para maximizar a eficácia na venda e no atendimento, com foco em causar um impacto positivo no cliente:
              <br/><br/>
              3B: A primeira parte do conceito se refere a causar o “brilho no olho” do cliente em três aspectos essenciais:
              <br/><br/>
              Bom Atendimento: Proporcionar um atendimento excepcional, que faça o cliente se sentir valorizado e bem atendido.
              <br/><br/>
              Bom Produto: Oferecer produtos de qualidade que atendam às necessidades e expectativas do cliente.
              <br/><br/>
              Boa Proposta: Apresentar propostas claras e vantajosas, que realmente se destaquem para o cliente, agregando valor à sua experiência.
              <br/><br/>
              F (Mexer na Ferida): Identificar e abordar as necessidades ou problemas do cliente, tocando nas questões sensíveis para gerar uma solução eficaz e atrativa.
              <br/><br/>
              O (Objeções): Reduzir as objeções do cliente ao máximo, garantindo que ele veja valor na oferta e entenda que sua escolha é a melhor opção.
              <br/><br/>
              K (Nocaute): Fechar a venda com determinação, demonstrando confiança e foco. Agir de forma decisiva, "nocautear" a resistência do cliente e garantir que ele faça a compra com a certeza de que tomou a melhor decisão.
              <br/><br/>
              CHA (Conhecimentos, Habilidades e Atitudes)
              <br/><br/>
              O conceito CHA reflete a importância do desenvolvimento contínuo dos colaboradores, que são a base do sucesso da empresa. Ele é fundamental para garantir que cada membro da equipe tenha as ferramentas necessárias para executar suas funções com excelência:
              <br/><br/>
              Conhecimentos: O "saber", ou seja, o aprendizado teórico e técnico necessário para realizar as atividades com competência e compreensão profunda do que se oferece.
              <br/><br/>
              Habilidades: O "saber fazer", que envolve a aplicação prática dos conhecimentos adquiridos e a capacidade de realizar tarefas com eficiência e qualidade.
              <br/><br/>
              Atitudes: O "querer fazer", que envolve a motivação, o compromisso e a postura proativa para buscar resultados e superar desafios com dedicação.
              <br/><br/>
              Esses conceitos são pilares para otimizar nossas operações, melhorar o atendimento ao cliente e garantir que a Cirne Motos Honda continue a crescer com solidez e inovação.

 
                <br/><br/>
              
              </p>
            </TextColumn>
          </FlexContainer>
          {/* Botão no final */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Começar a acessar conteúdos
            </Button>
          </div>
        </ContentArea2>
      </BodyWrapper>
    </div>
  );
};
